import * as React from 'react';

import { ControlOwnProps } from 'react-select-shared/components';
import { GroupBase } from 'react-select-shared/types';
import { CommonPropsAndClassName } from '../types';
import { getStyleProps } from '../utils';

export interface ControlProps<
  Option = unknown,
  IsMulti extends boolean = boolean,
  Group extends GroupBase<Option> = GroupBase<Option>
> extends ControlOwnProps,
    CommonPropsAndClassName<Option, IsMulti, Group> {}

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
