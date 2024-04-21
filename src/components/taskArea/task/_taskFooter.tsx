import React, { FC, ReactElement } from 'react';
import {
    Box,
    Button,
    FormControlLabel,
    Switch,
} from '@mui/material';
import PropTypes from 'prop-types';

import { ITaskFooter } from './interfaces/ITaskFooter';
import { EStatus } from '../../sidebar/createTaskForm/enums/EStatus';

export const TaskFooter: FC<ITaskFooter> = (
    props,
): ReactElement => {
    const { status, onStatusChange, onClick } = props;

    return (
        <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mt={4}
        >
            <FormControlLabel
                label="In Progress"
                control={
                    <Switch
                        color="warning"
                        onChange={onStatusChange}
                        checked={
                            status === EStatus.inProgress
                                ? true
                                : false
                        }
                    />
                }
            />
            <Button
                variant="contained"
                color="success"
                size="medium"
                sx={{
                    fontWeight: 600,
                    color: '#ffffff',
                }}
                onClick={onClick}
            >
                Mark Complete
            </Button>
        </Box>
    );
};

TaskFooter.propTypes = {
    status: PropTypes.oneOf(Object.values(EStatus))
        .isRequired,
    onStatusChange: PropTypes.func.isRequired,
    onClick: PropTypes.func.isRequired,
};
