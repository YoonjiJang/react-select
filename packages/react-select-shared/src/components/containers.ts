import { ReactNode } from 'react';
import { CommonPropsAndClassName, GroupBase } from '../types';

export interface ContainerProps<
  Option,
  IsMulti extends boolean,
  Group extends GroupBase<Option>
> extends CommonPropsAndClassName<Option, IsMulti, Group> {
  /** Whether the select is disabled. */
  isDisabled: boolean;
  isFocused: boolean;
  /** The children to be rendered. */
  children: ReactNode;
  /** Inner props to be passed down to the container. */
  innerProps: JSX.IntrinsicElements['div'];
}

export interface ValueContainerProps<
  Option,
  IsMulti extends boolean,
  Group extends GroupBase<Option>
> extends CommonPropsAndClassName<Option, IsMulti, Group> {
  /** Props to be passed to the value container element. */
  innerProps?: JSX.IntrinsicElements['div'];
  /** The children to be rendered. */
  children: ReactNode;
  isDisabled: boolean;
}

export interface IndicatorsContainerProps<
  Option,
  IsMulti extends boolean,
  Group extends GroupBase<Option>
> extends CommonPropsAndClassName<Option, IsMulti, Group> {
  isDisabled: boolean;
  /** The children to be rendered. */
  children: ReactNode;
  /** Props to be passed to the indicators container element. */
  innerProps?: {};
}
