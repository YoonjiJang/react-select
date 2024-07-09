/** @jsx jsx */
import { jsx } from '@emotion/react';
import { SingleValueProps as BaseSingleValueProps } from 'react-select-shared/components';
import { GroupBase } from 'react-select-shared/types';
import { CommonPropsAndClassName, CSSObjectWithLabel } from '../types';
import { getStyleProps } from '../utils';

export interface SingleValueProps<
  Option = unknown,
  IsMulti extends boolean = boolean,
  Group extends GroupBase<Option> = GroupBase<Option>
> extends Omit<
      BaseSingleValueProps<Option, IsMulti, Group>,
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
    theme: { spacing, colors },
  }: SingleValueProps<Option, IsMulti, Group>,
  unstyled: boolean
): CSSObjectWithLabel => ({
  label: 'singleValue',
  gridArea: '1 / 1 / 2 / 3',
  maxWidth: '100%',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  ...(unstyled
    ? {}
    : {
        color: isDisabled ? colors.neutral40 : colors.neutral80,
        marginLeft: spacing.baseUnit / 2,
        marginRight: spacing.baseUnit / 2,
      }),
});

const SingleValue = <
  Option,
  IsMulti extends boolean,
  Group extends GroupBase<Option>
>(
  props: SingleValueProps<Option, IsMulti, Group>
) => {
  const { children, isDisabled, innerProps } = props;
  return (
    <div
      {...getStyleProps(props, 'singleValue', {
        'single-value': true,
        'single-value--is-disabled': isDisabled,
      })}
      {...innerProps}
    >
      {children}
    </div>
  );
};

export default SingleValue;
