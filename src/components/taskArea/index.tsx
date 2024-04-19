import React, { FC, ReactElement } from 'react';
import { Grid, Box } from '@mui/material';
import { format } from 'date-fns';

import { TaskCounter } from './taskCounter';
import { EStatus } from '../sidebar/createTaskForm/enums/EStatus';
import { EPriority } from '../sidebar/createTaskForm/enums/EPriority';
import { Task } from './task';

export const TaskArea: FC = (): ReactElement => {
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
                        count={1}
                        status={EStatus.todo}
                    />
                    <TaskCounter
                        count={2}
                        status={EStatus.inProgress}
                    />
                    <TaskCounter
                        count={3}
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
                    <Task
                        id="test"
                        title="test"
                        date={new Date()}
                        description="testing"
                        priority={EPriority.low}
                        status={EStatus.inProgress}
                        onStatusChange={(e) =>
                            console.log(e)
                        }
                        onClick={(e) => console.log(e)}
                    />
                    <Task
                        id="test"
                        title="test"
                        date={new Date()}
                        description="testing"
                        priority={EPriority.normal}
                        status={EStatus.todo}
                        onStatusChange={(e) =>
                            console.log(e)
                        }
                        onClick={(e) => console.log(e)}
                    />
                    <Task
                        id="test"
                        title="test"
                        date={new Date()}
                        description="testing"
                        priority={EPriority.high}
                        status={EStatus.todo}
                        onStatusChange={(e) =>
                            console.log(e)
                        }
                        onClick={(e) => console.log(e)}
                    />
                </Grid>
            </Grid>
        </Grid>
    );
};
