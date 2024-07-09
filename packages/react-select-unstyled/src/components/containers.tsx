import * as React from 'react';
import {
  ContainerOwnProps,
  IndicatorsContainerOwnProps,
  ValueContainerOwnProps,
} from 'react-select-shared/components';
import { GroupBase } from 'react-select-shared/types';
import { CommonPropsAndClassName } from '../types';
import { getStyleProps } from '../utils';

// ==============================
// Root Container
// ==============================

export interface ContainerProps<
  Option = unknown,
  IsMulti extends boolean = boolean,
  Group extends GroupBase<Option> = GroupBase<Option>
> extends ContainerOwnProps,
    CommonPropsAndClassName<Option, IsMulti, Group> {}

export const SelectContainer = <
  Option,
  IsMulti extends boolean,
  Group extends GroupBase<Option>
>(
  props: ContainerProps<Option, IsMulti, Group>
) => {
  const { children, innerProps, isDisabled, isRtl } = props;
  return (
    <div
      {...getStyleProps(props, 'container', {
        '--is-disabled': isDisabled,
        '--is-rtl': isRtl,
      })}
      {...innerProps}
    >
      {children}
    </div>
  );
};

// ==============================
// Value Container
// ==============================

export interface ValueContainerProps<
  Option = unknown,
  IsMulti extends boolean = boolean,
  Group extends GroupBase<Option> = GroupBase<Option>
> extends ValueContainerOwnProps,
    CommonPropsAndClassName<Option, IsMulti, Group> {}

export const ValueContainer = <
  Option,
  IsMulti extends boolean,
  Group extends GroupBase<Option>
>(
  props: ValueContainerProps<Option, IsMulti, Group>
) => {
  const { children, innerProps, isMulti, hasValue } = props;

  return (
    <div
      {...getStyleProps(props, 'valueContainer', {
        'value-container': true,
        'value-container--is-multi': isMulti,
        'value-container--has-value': hasValue,
      })}
      {...innerProps}
    >
      {children}
    </div>
  );
};

// ==============================
// Indicator Container
// ==============================

export interface IndicatorsContainerProps<
  Option = unknown,
  IsMulti extends boolean = boolean,
  Group extends GroupBase<Option> = GroupBase<Option>
> extends IndicatorsContainerOwnProps,
    CommonPropsAndClassName<Option, IsMulti, Group> {}

export const IndicatorsContainer = <
  Option,
  IsMulti extends boolean,
  Group extends GroupBase<Option>
>(
  props: IndicatorsContainerProps<Option, IsMulti, Group>
) => {
  const { children, innerProps } = props;

  return (
    <div
      {...getStyleProps(props, 'indicatorsContainer', {
        indicators: true,
      })}
      {...innerProps}
    >
      {children}
    </div>
  );
};
