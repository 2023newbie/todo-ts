import React, {FC, ReactElement, useContext, useEffect, useState} from 'react'
import {Box, Typography, Stack, LinearProgress, Button, Alert, AlertTitle} from '@mui/material'
import { useMutation } from 'react-query'

import { TaskTitleField } from './_taskTitleField'
import { TaskDescriptionField } from './_taskDescriptionField'
import { TaskDateField } from './_taskDateField'
import { TaskSelectField } from './_taskSelectField'
import { ISelectItem } from './interfaces/ISelectField'
import { EStatus } from './enums/EStatus'
import { EPriority } from './enums/EPriority'
import { sendApiRequest } from '../../../helpers/sendApiRequest'
import { configApi } from '../../../apis/config'
import { ICreateTask } from '../../taskArea/interfaces/ICreateTask'
import { TasksContext } from '../../../contexts/tasksContext'

export const CreateTaskForm: FC = (): ReactElement => {
    const [title, setTitle] = useState<string>('')
    const [description, setDescription] = useState<string>('')
    const [date, setDate] = useState<Date | null>(null)
    const [status, setStatus] = useState<string>(EStatus.todo)
    const [priority, setPriority] = useState<string>(EPriority.normal)
    const [showSuccess, setShowSuccess] = useState<boolean>(false)

    const { refetch } = useContext(TasksContext)!

    // Create task mutation
    const createTaskMutation = useMutation({
        mutationFn: (data: ICreateTask) => sendApiRequest( configApi.tasksApi, 'POST', data ),
        onSuccess: () => refetch()
    })

    function clearState() {
        setTitle('')
        setDescription('')
        setDate(null)
        setStatus(EStatus.todo)
        setPriority(EPriority.normal)
    }

    function createTaskHandler() {
        if (!title || !date || !description) return

        const task: ICreateTask = {
            title,
            description,
            date: date.toString(),
            status,
            priority
        }

        createTaskMutation.mutate(task)
    }

    const StatusItems: ISelectItem[] = [
        { value: EStatus.todo, label: EStatus.todo.toUpperCase() },
        { value: EStatus.inProgress, label: EStatus.inProgress.toUpperCase() },
        { value: EStatus.completed, label: EStatus.completed.toUpperCase() },
    ]

    const PriorityItems: ISelectItem[] = [
        { value: EPriority.low, label: EPriority.low },
        { value: EPriority.normal, label: EPriority.normal },
        { value: EPriority.high, label: EPriority.high },
    ]

    // Manage Side Effect inside the application
    useEffect(() => {
        if (createTaskMutation.isSuccess) {
            clearState()
            setShowSuccess(true)
        }
        const id = setTimeout(() => {
            setShowSuccess(false)
        }, 2000)

        return () => clearTimeout(id)
    }, [createTaskMutation.isSuccess])

    return (
        <Box
            display='flex'
            flexDirection='column'
            alignItems='flex-start'
            width='100%'
            px={4}
            my={6}
        >
            {showSuccess && (
                <Alert
                    severity='success'
                    sx={{ width: '100%', marginBottom: '16px' }}
                >
                    <AlertTitle>Success</AlertTitle>
                    The task has been creaeted successfully.
                </Alert>
            )}
            <Typography mb={2} component='h2' variant='h6'>
                Create A Task
            </Typography>
            <Stack sx={{ width: '100%' }} spacing={2}>
                <TaskTitleField
                    value={title}
                    disabled={createTaskMutation.isLoading}
                    onChange={e => setTitle(e.target.value)}
                />
                <TaskDescriptionField
                    value={description}
                    disabled={createTaskMutation.isLoading}
                    onChange={e => setDescription(e.target.value)}
                />
                <TaskDateField
                    disabled={createTaskMutation.isLoading}
                    value={date}
                    onChange={date => setDate(date)}
                />
                <Stack sx={{ width: '100%' }} direction='row' spacing={2}>
                    <TaskSelectField
                        disabled={createTaskMutation.isLoading}
                        id='status-select'
                        title='Status'
                        items={StatusItems}
                        value={status}
                        onChange={e => setStatus(e.target.value as string)}
                    />
                    <TaskSelectField
                        disabled={createTaskMutation.isLoading}
                        id='priority-select'
                        title='Priority'
                        items={PriorityItems}
                        value={priority}
                        onChange={e => setPriority(e.target.value as string)}
                    />
                </Stack>
                {createTaskMutation.isLoading && <LinearProgress />}
                <Button
                    disabled={!title || !description || !date || createTaskMutation.isLoading}
                    variant='contained'
                    size='large'
                    fullWidth
                    onClick={createTaskHandler}
                >Create A Task</Button>
            </Stack>
        </Box>
    )
}