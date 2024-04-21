import { EStatus } from "../../sidebar/createTaskForm/enums/EStatus";

export interface IAdjustStatusTask {
    id: string,
    status: EStatus
}