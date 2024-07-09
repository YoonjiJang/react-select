import { ComponentType, ReactNode } from 'react';
import {
  CommonProps,
  CommonPropsAndClassName,
  CX,
  GroupBase,
  Options,
} from '../types';
import { Props } from '../select';

interface ForwardedHeadingProps<Option, Group extends GroupBase<Option>> {
  id: string;
  data: Group;
}

export interface GroupProps<
  Option = unknown,
  IsMulti extends boolean = boolean,
  Group extends GroupBase<Option> = GroupBase<Option>
> extends CommonPropsAndClassName<Option, IsMulti, Group> {
  /** The children to be rendered. */
  children: ReactNode;
  /** Component to wrap the label, receives headingProps. */
  Heading: ComponentType<GroupHeadingProps<Option, IsMulti, Group>>;
  /** Props to pass to Heading. */
  headingProps: ForwardedHeadingProps<Option, Group>;
  /** Props to be passed to the group element. */
  innerProps: JSX.IntrinsicElements['div'];
  /** Label to be displayed in the heading component. */
  label: ReactNode;
  /** The data of the group. */
  data: Group;
  options: Options<Option>;
}

export interface GroupHeadingPropsDefinedProps<
  Option,
  IsMulti extends boolean,
  Group extends GroupBase<Option>
> extends ForwardedHeadingProps<Option, Group> {
  className?: string | undefined;
  selectProps: Props<Option, IsMulti, Group>;
  getClassNames: CommonProps<Option, IsMulti, Group>['getClassNames'];
  cx: CX;
}

export type GroupHeadingProps<
  Option = unknown,
  IsMulti extends boolean = boolean,
  Group extends GroupBase<Option> = GroupBase<Option>
> = GroupHeadingPropsDefinedProps<Option, IsMulti, Group> &
  JSX.IntrinsicElements['div'];
