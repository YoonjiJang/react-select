import * as React from 'react';

import { GroupBase } from 'react-select-shared/types';
import { CommonPropsAndClassName } from '../types';
import { cleanCommonProps, getStyleProps } from '../utils';

export interface InputSpecificProps<
  Option = unknown,
  IsMulti extends boolean = boolean,
  Group extends GroupBase<Option> = GroupBase<Option>
> extends React.InputHTMLAttributes<HTMLInputElement>,
    CommonPropsAndClassName<Option, IsMulti, Group> {
  /** Reference to the internal element */
  innerRef?: (instance: HTMLInputElement | null) => void;
  /** Set whether the input should be visible. Does not affect input size. */
  isHidden: boolean;
  /** Whether the input is disabled */
  isDisabled?: boolean;
  /** The ID of the form that the input belongs to */
  form?: string;
  /** Set className for the input element */
  inputClassName?: string;
}

export type InputProps<
  Option = unknown,
  IsMulti extends boolean = boolean,
  Group extends GroupBase<Option> = GroupBase<Option>
> = InputSpecificProps<Option, IsMulti, Group>;

const Input = <
  Option,
  IsMulti extends boolean,
  Group extends GroupBase<Option>
>(
  props: InputProps<Option, IsMulti, Group>
) => {
  const { cx, value } = props;
  const { innerRef, isDisabled, isHidden, inputClassName, ...innerProps } =
    cleanCommonProps(props);
  return (
    <div
      {...getStyleProps(props, 'input', { 'input-container': true })}
      data-value={value || ''}
    >
      <input
        className={cx({ input: true }, inputClassName)}
        ref={innerRef}
        disabled={isDisabled}
        {...innerProps}
      />
    </div>
  );
};

export default Input;
