import { EStatus } from "../../../sidebar/createTaskForm/enums/EStatus"

export type TaskCounterStatusType
    = EStatus.todo | EStatus.inProgress | EStatus.completed

export interface ITaskCounter {
    count: number,
    status: TaskCounterStatusType
}