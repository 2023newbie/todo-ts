import { ChangeEvent, MouseEvent } from "react";

export interface ITaskFooter {
    onStatusChange: (event: ChangeEvent<HTMLInputElement>) => void,
    onClick: (event: MouseEvent<HTMLButtonElement> | MouseEvent<HTMLAnchorElement>) => void
}