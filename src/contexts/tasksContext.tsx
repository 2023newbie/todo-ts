import React, { createContext, FC, ReactNode, useEffect, useState } from "react";
import { useQuery } from "react-query";
import { sendApiRequest } from "../helpers/sendApiRequest";
import { configApi } from "../apis/config";
import { ITaskApi } from "../components/taskArea/interfaces/ITaskApi";
import { EStatus } from "../components/sidebar/createTaskForm/enums/EStatus";

type ProviderValue = {
    error: object | null,
    isLoading: boolean,
    tasks: ITaskApi[],
    refetch: () => void,
    counts: {
        todo: number,
        inProgress: number,
        completed: number,
    }
}

export const TasksContext = createContext<ProviderValue | null>(null)

export const TasksContextProvider: FC<{ children: ReactNode }> = (props) => {
    const [tasksCount, setTasksCount] = useState({
        todo: 0,
        inProgress: 0,
        completed: 0
    })

    const { error, isLoading, data: tasks, refetch } = useQuery<any, object>('tasks', async () => {
        return await sendApiRequest(configApi.tasksApi, 'GET')
    })

    useEffect(() => {
        const counts = {
            todo: 0,
            inProgress: 0,
            completed: 0
        }
        tasks.forEach((task: ITaskApi) => {
            switch (task.status) {
                case EStatus.todo:
                    counts.todo++
                    break
                case EStatus.inProgress:
                    counts.inProgress++
                    break
                case EStatus.completed:
                    counts.completed++
                    break
            }
        })
        setTasksCount(counts)
    }, [tasks])

    return (
        <TasksContext.Provider value={{ error, isLoading, tasks, refetch, counts: tasksCount }}>
            {props.children}
        </TasksContext.Provider>
    )
}