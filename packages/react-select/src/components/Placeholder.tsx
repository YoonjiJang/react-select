/** @jsx jsx */
import { jsx } from '@emotion/react';
import { PlaceholderProps as BasePlaceholderProps } from 'react-select-shared/components';
import { GroupBase } from 'react-select-shared/types';
import { CommonPropsAndClassName, CSSObjectWithLabel } from '../types';
import { getStyleProps } from '../utils';

export interface PlaceholderProps<
  Option = unknown,
  IsMulti extends boolean = boolean,
  Group extends GroupBase<Option> = GroupBase<Option>
> extends Omit<
      BasePlaceholderProps<Option, IsMulti, Group>,
      'getClassNames' | 'selectProps'
    >,
    CommonPropsAndClassName<Option, IsMulti, Group> {}

export const placeholderCSS = <
  Option,
  IsMulti extends boolean,
  Group extends GroupBase<Option>
>(
  { theme: { spacing, colors } }: PlaceholderProps<Option, IsMulti, Group>,
  unstyled: boolean
): CSSObjectWithLabel => ({
  label: 'placeholder',
  gridArea: '1 / 1 / 2 / 3',
  ...(unstyled
    ? {}
    : {
        color: colors.neutral50,
        marginLeft: spacing.baseUnit / 2,
        marginRight: spacing.baseUnit / 2,
      }),
});

const Placeholder = <
  Option,
  IsMulti extends boolean,
  Group extends GroupBase<Option>
>(
  props: PlaceholderProps<Option, IsMulti, Group>
) => {
  const { children, innerProps } = props;
  return (
    <div
      {...getStyleProps(props, 'placeholder', {
        placeholder: true,
      })}
      {...innerProps}
    >
      {children}
    </div>
  );
};

export default Placeholder;
