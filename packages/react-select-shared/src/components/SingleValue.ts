import { ReactNode } from 'react';
import { CommonPropsAndClassName, GroupBase } from '../types';

export interface SingleValueProps<
  Option = unknown,
  IsMulti extends boolean = boolean,
  Group extends GroupBase<Option> = GroupBase<Option>
> extends CommonPropsAndClassName<Option, IsMulti, Group> {
  /** The children to be rendered. */
  children: ReactNode;
  /** The data of the selected option rendered in the Single Value component. */
  data: Option;
  /** Props passed to the wrapping element for the group. */
  innerProps: JSX.IntrinsicElements['div'];
  /** Whether this is disabled. */
  isDisabled: boolean;
}
