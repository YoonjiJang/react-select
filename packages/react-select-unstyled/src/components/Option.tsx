import * as React from 'react';

import { GroupBase } from 'react-select-shared/types';
import { CommonPropsAndClassName } from '../types';
import { getStyleProps } from '../utils';

export interface OptionProps<
  Option = unknown,
  IsMulti extends boolean = boolean,
  Group extends GroupBase<Option> = GroupBase<Option>
> extends CommonPropsAndClassName<Option, IsMulti, Group> {
  /** The children to be rendered. */
  children: React.ReactNode;
  /** Inner ref to DOM Node */
  innerRef: React.RefCallback<HTMLDivElement>;
  /** props passed to the wrapping element for the group. */
  innerProps: JSX.IntrinsicElements['div'];
  /** Text to be displayed representing the option. */
  label: string;
  /** Type is used by the menu to determine whether this is an option or a group.
    In the case of option this is always `option`. **/
  type: 'option';
  /** The data of the selected option. */
  data: Option;
  /** Whether the option is disabled. */
  isDisabled: boolean;
  /** Whether the option is focused. */
  isFocused: boolean;
  /** Whether the option is selected. */
  isSelected: boolean;
}

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
