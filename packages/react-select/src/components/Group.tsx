/** @jsx jsx */
import { jsx } from '@emotion/react';
import { ComponentType } from 'react';
import { cleanCommonProps, getStyleProps } from '../utils';

import {
  GroupHeadingPropsDefinedProps as BaseGroupHeadingPropsDefinedProps,
  GroupProps as BaseGroupProps,
} from 'react-select-shared/components';
import { GroupBase } from 'react-select-shared/types';
import {
  CommonProps,
  CommonPropsAndClassName,
  CSSObjectWithLabel,
  GetStyles,
  Theme,
} from '../types';
import { Props } from '../Select';

export interface GroupProps<
  Option = unknown,
  IsMulti extends boolean = boolean,
  Group extends GroupBase<Option> = GroupBase<Option>
> extends Omit<
      BaseGroupProps<Option, IsMulti, Group>,
      'getClassNames' | 'Heading' | 'selectProps'
    >,
    Omit<CommonPropsAndClassName<Option, IsMulti, Group>, 'options'> {
  /** Component to wrap the label, receives headingProps. */
  Heading: ComponentType<GroupHeadingProps<Option, IsMulti, Group>>;
}

export const groupCSS = <
  Option,
  IsMulti extends boolean,
  Group extends GroupBase<Option>
>(
  { theme: { spacing } }: GroupProps<Option, IsMulti, Group>,
  unstyled: boolean
): CSSObjectWithLabel =>
  unstyled
    ? {}
    : {
        paddingBottom: spacing.baseUnit * 2,
        paddingTop: spacing.baseUnit * 2,
      };

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
    getStyles,
    getClassNames,
    Heading,
    headingProps,
    innerProps,
    label,
    theme,
    selectProps,
  } = props;
  return (
    <div {...getStyleProps(props, 'group', { group: true })} {...innerProps}>
      <Heading
        {...headingProps}
        selectProps={selectProps}
        theme={theme}
        getStyles={getStyles}
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
> extends Omit<
    BaseGroupHeadingPropsDefinedProps<Option, IsMulti, Group>,
    'getClassNames' | 'selectProps'
  > {
  theme: Theme;
  getStyles: GetStyles<Option, IsMulti, Group>;
  selectProps: Props<Option, IsMulti, Group>;
  getClassNames: CommonProps<Option, IsMulti, Group>['getClassNames'];
}

export type GroupHeadingProps<
  Option = unknown,
  IsMulti extends boolean = boolean,
  Group extends GroupBase<Option> = GroupBase<Option>
> = GroupHeadingPropsDefinedProps<Option, IsMulti, Group> &
  JSX.IntrinsicElements['div'];

export const groupHeadingCSS = <
  Option,
  IsMulti extends boolean,
  Group extends GroupBase<Option>
>(
  { theme: { colors, spacing } }: GroupHeadingProps<Option, IsMulti, Group>,
  unstyled: boolean
): CSSObjectWithLabel => ({
  label: 'group',
  cursor: 'default',
  display: 'block',
  ...(unstyled
    ? {}
    : {
        color: colors.neutral40,
        fontSize: '75%',
        fontWeight: 500,
        marginBottom: '0.25em',
        paddingLeft: spacing.baseUnit * 3,
        paddingRight: spacing.baseUnit * 3,
        textTransform: 'uppercase',
      }),
});

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
