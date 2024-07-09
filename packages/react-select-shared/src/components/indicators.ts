import { ReactNode } from 'react';
import { CommonPropsAndClassName, GroupBase } from '../types';

export type CrossIconProps = JSX.IntrinsicElements['svg'] & { size?: number };
export type DownChevronProps = JSX.IntrinsicElements['svg'] & { size?: number };

export interface DropdownIndicatorProps<
  Option = unknown,
  IsMulti extends boolean = boolean,
  Group extends GroupBase<Option> = GroupBase<Option>
> extends CommonPropsAndClassName<Option, IsMulti, Group> {
  /** The children to be rendered inside the indicator. */
  children?: ReactNode;
  /** Props that will be passed on to the children. */
  innerProps: JSX.IntrinsicElements['div'];
  /** The focused state of the select. */
  isFocused: boolean;
  isDisabled: boolean;
}

export interface ClearIndicatorProps<
  Option = unknown,
  IsMulti extends boolean = boolean,
  Group extends GroupBase<Option> = GroupBase<Option>
> extends CommonPropsAndClassName<Option, IsMulti, Group> {
  /** The children to be rendered inside the indicator. */
  children?: ReactNode;
  /** Props that will be passed on to the children. */
  innerProps: JSX.IntrinsicElements['div'];
  /** The focused state of the select. */
  isFocused: boolean;
}

export interface IndicatorSeparatorProps<
  Option = unknown,
  IsMulti extends boolean = boolean,
  Group extends GroupBase<Option> = GroupBase<Option>
> extends CommonPropsAndClassName<Option, IsMulti, Group> {
  isDisabled: boolean;
  isFocused: boolean;
  innerProps?: JSX.IntrinsicElements['span'];
}

export interface LoadingIndicatorProps<
  Option = unknown,
  IsMulti extends boolean = boolean,
  Group extends GroupBase<Option> = GroupBase<Option>
> extends CommonPropsAndClassName<Option, IsMulti, Group> {
  /** Props that will be passed on to the children. */
  innerProps: JSX.IntrinsicElements['div'];
  /** The focused state of the select. */
  isFocused: boolean;
  isDisabled: boolean;
  /** Set size of the container. */
  size: number;
}
