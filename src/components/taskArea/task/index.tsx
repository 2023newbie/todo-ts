import React, { FC, ReactElement } from 'react';
import { Box } from '@mui/material';
import PropTypes from 'prop-types'

import { ITask } from './interfaces/ITask';
import { TaskHeader } from './_taskHeader';
import { TaskDescription } from './_taskDescription';
import { TaskFooter } from './_taskFooter';
import { EStatus } from '../../sidebar/createTaskForm/enums/EStatus';
import { EPriority } from '../../sidebar/createTaskForm/enums/EPriority';
import { emitBorderColorBasedOnPriority } from './helpers/emitBorderColorBasedOnPriority';

export const Task: FC<ITask> = (props): ReactElement => {
    const {
        title,
        date,
        description,
        priority,
        status,
        onStatusChange,
        onClick,
    } = props;

    return (
        <Box
            display="flex"
            width="100%"
            justifyContent="flex-start"
            flexDirection="column"
            mb={4}
            p={3}
            sx={{
                width: '100%',
                backgroundColor: 'background.paper',
                borderRadius: '8px',
                border: '1px solid',
                borderColor: emitBorderColorBasedOnPriority(priority),
            }}
        >
            <TaskHeader title={title} date={date} />
            <TaskDescription description={description} />
            <TaskFooter
                status={status}
                onStatusChange={onStatusChange}
                onClick={onClick}
            />
        </Box>
    );
};

Task.propTypes = {
    title: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date).isRequired,
    description: PropTypes.string.isRequired,
    priority: PropTypes.oneOf(Object.values(EPriority)).isRequired,
    status: PropTypes.oneOf(Object.values(EStatus)).isRequired,
    onStatusChange: PropTypes.func.isRequired,
    onClick: PropTypes.func.isRequired
}