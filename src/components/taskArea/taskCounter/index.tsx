import React, { FC, ReactElement } from 'react';
import { Avatar, Box, Typography } from '@mui/material';
import PropTypes from 'prop-types'

import { ITaskCounter } from './interfaces/ITaskCounter';
import { EStatus } from '../../sidebar/createTaskForm/enums/EStatus';
import { emitCorrectBorderColor } from './helpers/emitCorrectBorderColor';
import { emitCorrectSubtitle } from './helpers/emitCorrectSubtitle';

export const TaskCounter: FC<ITaskCounter> = (props): ReactElement => {
    const { count, status } = props

    return (
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
        >
            <Avatar
                sx={{
                    backgroundColor: 'transparent',
                    border: '5px solid',
                    width: '96px',
                    height: '96px',
                    marginBottom: '16px',
                    borderColor: emitCorrectBorderColor(status),
                }}
            >
                <Typography color="#ffffff" variant="h4">
                    {count}
                </Typography>
            </Avatar>
            <Typography
                color="#ffffff"
                fontWeight="bold"
                fontSize="20px"
                variant="h5"
            >
                {emitCorrectSubtitle(status)}
            </Typography>
        </Box>
    );
};

TaskCounter.propTypes = {
    count: PropTypes.number.isRequired,
    status: PropTypes.oneOf(Object.values(EStatus)).isRequired
}