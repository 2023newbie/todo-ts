import { ITaskHeader } from './ITaskHeader';
import { ITaskDescription } from './ITaskDescription';
import { ITaskFooter } from './ITaskFooter';

import { EPriority } from '../../../sidebar/createTaskForm/enums/EPriority';
import { EStatus } from '../../../sidebar/createTaskForm/enums/EStatus';

type PriorityType = EPriority.low | EPriority.normal | EPriority.high
type StatusType = EStatus.todo | EStatus.inProgress | EStatus.completed

export interface ITask
    extends ITaskHeader,
        ITaskDescription,
        ITaskFooter {
            id: string,
            priority: PriorityType,
            status: StatusType
        }
