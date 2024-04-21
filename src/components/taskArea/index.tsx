import React, { FC, ReactElement, useContext } from 'react';
import { Grid, Box, Alert, LinearProgress } from '@mui/material';
import { format } from 'date-fns';
import { useMutation, useQuery } from 'react-query';

import { TaskCounter } from './taskCounter';
import { EStatus } from '../sidebar/createTaskForm/enums/EStatus';
import { Task } from './task';
import { sendApiRequest } from '../../helpers/sendApiRequest';
import { configApi } from '../../apis/config';
import { ITaskApi } from './interfaces/ITaskApi';
import { IAdjustStatusTask } from './interfaces/IAdjustStatusTask';
import { TasksContext } from '../../contexts/tasksContext';

export const TaskArea: FC = (): ReactElement => {
    const { error, isLoading, tasks, refetch, counts } = useContext(TasksContext)!

    const { mutate: mutateTaskStatus } = useMutation({
        mutationFn: (data: IAdjustStatusTask) => {
            return sendApiRequest(configApi.tasksApi, 'PUT', data)
        },
        onSuccess: () => refetch()
    })

    const haveTasks = !!tasks?.length

    const filterCompletedTasks = (tasks: ITaskApi[] | undefined) => {
        return tasks?.filter(task => task.status !== EStatus.completed)
    }

    return (
        <Grid item md={8} px={4}>
            <Box mb={8} px={4}>
                <h2>
                    State Of Your Tasks As On{' '}
                    {format(new Date(), 'PPPP')}
                </h2>
            </Box>
            <Grid
                container
                display="flex"
                justifyContent="center"
            >
                <Grid
                    item
                    display="flex"
                    flexDirection="row"
                    justifyContent="space-around"
                    alignItems="center"
                    md={10}
                    xs={12}
                    mb={8}
                >
                    <TaskCounter
                        count={counts.todo}
                        status={EStatus.todo}
                    />
                    <TaskCounter
                        count={counts.inProgress}
                        status={EStatus.inProgress}
                    />
                    <TaskCounter
                        count={counts.completed}
                        status={EStatus.completed}
                    />
                </Grid>
                <Grid
                    item
                    display="flex"
                    flexDirection="column"
                    xs={10}
                    md={8}
                >
                    {isLoading && <LinearProgress />}

                    {error && (
                        <Alert severity='error'>
                            There was an error fetching your tasks
                        </Alert>
                    )}

                    {!error && !isLoading && !haveTasks && (
                        <Alert severity='warning'>
                            You do not have any tasks created yet. Start by creating some tasks.
                        </Alert>
                    )}

                    {filterCompletedTasks(tasks)?.map(task => (
                        <Task
                            key={task.id}
                            title={task.title}
                            date={new Date(task.date)}
                            description={task.description}
                            priority={task.priority}
                            status={task.status}
                            onStatusChange={(e) => {
                                mutateTaskStatus({
                                    id: task.id,
                                    status: e.target.checked ? EStatus.inProgress : EStatus.todo
                                })
                            }}
                            onClick={(e) => {
                                mutateTaskStatus({
                                    id: task.id,
                                    status: EStatus.completed
                                })
                            }}
                        />
                    ))}
                </Grid>
            </Grid>
        </Grid>
    );
};
