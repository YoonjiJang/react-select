/** @jsx jsx */
import { jsx } from '@emotion/react';

import { ControlProps as BaseControlProps } from 'react-select-shared/components';
import { GroupBase } from 'react-select-shared/types';
import { CommonPropsAndClassName, CSSObjectWithLabel } from '../types';
import { getStyleProps } from '../utils';

export interface ControlProps<
  Option = unknown,
  IsMulti extends boolean = boolean,
  Group extends GroupBase<Option> = GroupBase<Option>
> extends Omit<
      BaseControlProps<Option, IsMulti, Group>,
      'getClassNames' | 'selectProps'
    >,
    CommonPropsAndClassName<Option, IsMulti, Group> {}

export const css = <
  Option,
  IsMulti extends boolean,
  Group extends GroupBase<Option>
>(
  {
    isDisabled,
    isFocused,
    theme: { colors, borderRadius, spacing },
  }: ControlProps<Option, IsMulti, Group>,
  unstyled: boolean
): CSSObjectWithLabel => ({
  label: 'control',
  alignItems: 'center',
  cursor: 'default',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  minHeight: spacing.controlHeight,
  outline: '0 !important',
  position: 'relative',
  transition: 'all 100ms',
  ...(unstyled
    ? {}
    : {
        backgroundColor: isDisabled ? colors.neutral5 : colors.neutral0,
        borderColor: isDisabled
          ? colors.neutral10
          : isFocused
          ? colors.primary
          : colors.neutral20,
        borderRadius: borderRadius,
        borderStyle: 'solid',
        borderWidth: 1,
        boxShadow: isFocused ? `0 0 0 1px ${colors.primary}` : undefined,
        '&:hover': {
          borderColor: isFocused ? colors.primary : colors.neutral30,
        },
      }),
});

const Control = <
  Option,
  IsMulti extends boolean,
  Group extends GroupBase<Option>
>(
  props: ControlProps<Option, IsMulti, Group>
) => {
  const { children, isDisabled, isFocused, innerRef, innerProps, menuIsOpen } =
    props;
  return (
    <div
      ref={innerRef}
      {...getStyleProps(props, 'control', {
        control: true,
        'control--is-disabled': isDisabled,
        'control--is-focused': isFocused,
        'control--menu-is-open': menuIsOpen,
      })}
      {...innerProps}
      aria-disabled={isDisabled || undefined}
    >
      {children}
    </div>
  );
};

export default Control;
