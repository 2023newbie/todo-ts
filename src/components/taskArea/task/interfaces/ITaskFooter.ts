import { ChangeEvent, MouseEvent } from "react";
import { EStatus } from "../../../sidebar/createTaskForm/enums/EStatus";

export interface ITaskFooter {
    status: EStatus,
    onStatusChange: (event: ChangeEvent<HTMLInputElement>) => void,
    onClick: (event: MouseEvent<HTMLButtonElement> | MouseEvent<HTMLAnchorElement>) => void
}