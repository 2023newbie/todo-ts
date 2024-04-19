import React, {FC, ReactElement} from 'react'
import {Box, Typography, Stack} from '@mui/material'

import { TaskTitleField } from './_taskTitleField'
import { TaskDescriptionField } from './_taskDescriptionField'
import { TaskDateField } from './_taskDateField'
import { TaskSelectField } from './_taskSelectField'

import { ISelectItem } from './interfaces/ISelectField'

import { EStatus } from './enums/EStatus'
import { EPriority } from './enums/EPriority'

export const CreateTaskForm: FC = (): ReactElement => {
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

    return (
        <Box
            display='flex'
            flexDirection='column'
            alignItems='flex-start'
            width='100%'
            px={4}
            my={6}
        >
            <Typography mb={2} component='h2' variant='h6'>
                Create A Task
            </Typography>
            <Stack sx={{ width: '100%' }} spacing={2}>
                <TaskTitleField />
                <TaskDescriptionField />
                <TaskDateField />
                <Stack sx={{ width: '100%' }} direction='row' spacing={2}>
                    <TaskSelectField
                        id='status-select'
                        title='Status'
                        items={StatusItems}
                    />
                    <TaskSelectField
                        id='priority-select'
                        title='Priority'
                        items={PriorityItems}
                    />
                </Stack>
            </Stack>
        </Box>
    )
}