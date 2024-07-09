import * as React from 'react';
import { GroupBase } from 'react-select-shared/types';
import { CommonPropsAndClassName } from '../types';
import { getStyleProps } from '../utils';

export interface SingleValueProps<
  Option = unknown,
  IsMulti extends boolean = boolean,
  Group extends GroupBase<Option> = GroupBase<Option>
> extends CommonPropsAndClassName<Option, IsMulti, Group> {
  /** The children to be rendered. */
  children: React.ReactNode;
  /** The data of the selected option rendered in the Single Value component. */
  data: Option;
  /** Props passed to the wrapping element for the group. */
  innerProps: JSX.IntrinsicElements['div'];
  /** Whether this is disabled. */
  isDisabled: boolean;
}

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
