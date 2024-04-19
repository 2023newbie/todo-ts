import { EPriority } from '../../../sidebar/createTaskForm/enums/EPriority';

export const emitBorderColorBasedOnPriority = (
    priority: EPriority,
): string => {
    switch (priority) {
        case EPriority.low:
            return 'info.light';
        case EPriority.normal:
            return 'grey.900';
        case EPriority.high:
            return 'error.light';
    }
};
