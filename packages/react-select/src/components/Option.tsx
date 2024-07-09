/** @jsx jsx */
import { jsx } from '@emotion/react';

import { OptionProps as BaseOptionProps } from 'react-select-shared/components';
import { GroupBase } from 'react-select-shared/types';
import { CommonPropsAndClassName, CSSObjectWithLabel } from '../types';
import { getStyleProps } from '../utils';

export interface OptionProps<
  Option = unknown,
  IsMulti extends boolean = boolean,
  Group extends GroupBase<Option> = GroupBase<Option>
> extends Omit<
      BaseOptionProps<Option, IsMulti, Group>,
      'getClassNames' | 'selectProps'
    >,
    CommonPropsAndClassName<Option, IsMulti, Group> {}

export const optionCSS = <
  Option,
  IsMulti extends boolean,
  Group extends GroupBase<Option>
>(
  {
    isDisabled,
    isFocused,
    isSelected,
    theme: { spacing, colors },
  }: OptionProps<Option, IsMulti, Group>,
  unstyled: boolean
): CSSObjectWithLabel => ({
  label: 'option',
  cursor: 'default',
  display: 'block',
  fontSize: 'inherit',
  width: '100%',
  userSelect: 'none',
  WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
  ...(unstyled
    ? {}
    : {
        backgroundColor: isSelected
          ? colors.primary
          : isFocused
          ? colors.primary25
          : 'transparent',
        color: isDisabled
          ? colors.neutral20
          : isSelected
          ? colors.neutral0
          : 'inherit',
        padding: `${spacing.baseUnit * 2}px ${spacing.baseUnit * 3}px`,
        // provide some affordance on touch devices
        ':active': {
          backgroundColor: !isDisabled
            ? isSelected
              ? colors.primary
              : colors.primary50
            : undefined,
        },
      }),
});

const Option = <
  Option,
  IsMulti extends boolean,
  Group extends GroupBase<Option>
>(
  props: OptionProps<Option, IsMulti, Group>
) => {
  const { children, isDisabled, isFocused, isSelected, innerRef, innerProps } =
    props;
  return (
    <div
      {...getStyleProps(props, 'option', {
        option: true,
        'option--is-disabled': isDisabled,
        'option--is-focused': isFocused,
        'option--is-selected': isSelected,
      })}
      ref={innerRef}
      aria-disabled={isDisabled}
      {...innerProps}
    >
      {children}
    </div>
  );
};

export default Option;
