import * as React from 'react';
import { GroupBase } from 'react-select-shared/types';
import { CommonPropsAndClassName } from '../types';
import { getStyleProps } from '../utils';

export interface PlaceholderProps<
  Option = unknown,
  IsMulti extends boolean = boolean,
  Group extends GroupBase<Option> = GroupBase<Option>
> extends CommonPropsAndClassName<Option, IsMulti, Group> {
  /** The children to be rendered. */
  children: React.ReactNode;
  /** props passed to the wrapping element for the group. */
  innerProps: JSX.IntrinsicElements['div'];
  isDisabled: boolean;
  isFocused: boolean;
}

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
