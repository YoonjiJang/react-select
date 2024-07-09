import * as React from 'react';
import { cleanCommonProps, getStyleProps } from '../utils';

import { GroupBase } from 'react-select-shared/types';
import { CommonProps, CommonPropsAndClassName } from '../types';
import { Props } from '../Select';
import {
  GroupHeadingBaseProps,
  GroupHeadingPropsDefinedBaseProps,
  GroupOwnProps,
} from 'react-select-shared/components';

export interface ForwardedHeadingProps<
  Option,
  Group extends GroupBase<Option>
> {
  id: string;
  data: Group;
}

export interface GroupProps<
  Option = unknown,
  IsMulti extends boolean = boolean,
  Group extends GroupBase<Option> = GroupBase<Option>
> extends GroupOwnProps<
      Option,
      IsMulti,
      Group,
      GroupHeadingProps<Option, IsMulti, Group>
    >,
    Omit<CommonPropsAndClassName<Option, IsMulti, Group>, 'options'> {}

const Group = <
  Option,
  IsMulti extends boolean,
  Group extends GroupBase<Option>
>(
  props: GroupProps<Option, IsMulti, Group>
) => {
  const {
    children,
    cx,
    getClassNames,
    Heading,
    headingProps,
    innerProps,
    label,
    selectProps,
  } = props;
  return (
    <div {...getStyleProps(props, 'group', { group: true })} {...innerProps}>
      <Heading
        {...headingProps}
        selectProps={selectProps}
        getClassNames={getClassNames}
        cx={cx}
      >
        {label}
      </Heading>
      <div>{children}</div>
    </div>
  );
};

interface GroupHeadingPropsDefinedProps<
  Option,
  IsMulti extends boolean,
  Group extends GroupBase<Option>
> extends GroupHeadingPropsDefinedBaseProps<
    Option,
    IsMulti,
    Group,
    Props<Option, IsMulti, Group>
  > {
  getClassNames: CommonProps<Option, IsMulti, Group>['getClassNames'];
}

export type GroupHeadingProps<
  Option = unknown,
  IsMulti extends boolean = boolean,
  Group extends GroupBase<Option> = GroupBase<Option>
> = GroupHeadingBaseProps<
  Option,
  IsMulti,
  Group,
  GroupHeadingPropsDefinedProps<Option, IsMulti, Group>
>;

export const GroupHeading = <
  Option,
  IsMulti extends boolean,
  Group extends GroupBase<Option>
>(
  props: GroupHeadingProps<Option, IsMulti, Group>
) => {
  const { data, ...innerProps } = cleanCommonProps(props);
  return (
    <div
      {...getStyleProps(props, 'groupHeading', { 'group-heading': true })}
      {...innerProps}
    />
  );
};

export default Group;
