import { InputHTMLAttributes } from 'react';
import { CommonPropsAndClassName, GroupBase } from '../types';

export interface InputProps<
  Option = unknown,
  IsMulti extends boolean = boolean,
  Group extends GroupBase<Option> = GroupBase<Option>
> extends InputHTMLAttributes<HTMLInputElement>,
    CommonPropsAndClassName<Option, IsMulti, Group> {
  /** Reference to the internal element */
  innerRef?: (instance: HTMLInputElement | null) => void;
  /** Set whether the input should be visible. Does not affect input size. */
  isHidden: boolean;
  /** Whether the input is disabled */
  isDisabled?: boolean;
  /** The ID of the form that the input belongs to */
  form?: string;
  /** Set className for the input element */
  inputClassName?: string;
}
