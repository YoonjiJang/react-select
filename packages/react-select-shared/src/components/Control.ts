import { ReactNode, Ref } from 'react';
import { CommonPropsAndClassName, GroupBase } from '../types';

export interface ControlProps<
  Option = unknown,
  IsMulti extends boolean = boolean,
  Group extends GroupBase<Option> = GroupBase<Option>
> extends CommonPropsAndClassName<Option, IsMulti, Group> {
  /** Children to render. */
  children: ReactNode;
  innerRef: Ref<HTMLDivElement>;
  /** The mouse down event and the innerRef to pass down to the controller element. */
  innerProps: JSX.IntrinsicElements['div'];
  /** Whether the select is disabled. */
  isDisabled: boolean;
  /** Whether the select is focused. */
  isFocused: boolean;
  /** Whether the select is expanded. */
  menuIsOpen: boolean;
}
