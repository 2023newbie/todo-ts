import React, { FC, ReactElement } from 'react';
import {
    FormControl,
    InputLabel,
    Select,
    MenuItem
} from '@mui/material';
import { ISelectField } from './interfaces/ISelectField';
import PropTypes from 'prop-types'

export const TaskSelectField: FC<ISelectField> = (props): ReactElement => {
    const {
        id,
        title,
        items,
        value: selectValue = '',
        disabled = false,
        onChange = e => console.log(e)
    } = props

    return (
        <FormControl fullWidth size='small'>
            <InputLabel id={id}>{title}</InputLabel>
            <Select
                labelId={id}
                label={title}
                value={selectValue}
                disabled={disabled}
                onChange={onChange}
            >
                {items.map(({value, label}, ind) => (
                    <MenuItem key={label + ind} value={value}>{label}</MenuItem>
                ))}
            </Select>
        </FormControl>
    )
};


TaskSelectField.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired
    }).isRequired).isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func,
    disabled: PropTypes.bool
}