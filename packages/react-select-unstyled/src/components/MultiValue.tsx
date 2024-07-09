import * as React from 'react';
import { CrossIcon } from './indicators';
import { GroupBase } from 'react-select-shared/types';
import { CommonPropsAndClassName } from '../types';
import { Props } from '../Select';
import { getStyleProps } from '../utils';

interface MultiValueComponents<
  Option,
  IsMulti extends boolean,
  Group extends GroupBase<Option>
> {
  Container: React.ComponentType<
    MultiValueGenericProps<Option, IsMulti, Group>
  >;
  Label: React.ComponentType<MultiValueGenericProps<Option, IsMulti, Group>>;
  Remove: React.ComponentType<MultiValueRemoveProps<Option, IsMulti, Group>>;
}

export interface MultiValueProps<
  Option = unknown,
  IsMulti extends boolean = boolean,
  Group extends GroupBase<Option> = GroupBase<Option>
> extends CommonPropsAndClassName<Option, IsMulti, Group> {
  children: React.ReactNode;
  components: MultiValueComponents<Option, IsMulti, Group>;
  cropWithEllipsis?: boolean;
  data: Option;
  innerProps: JSX.IntrinsicElements['div'];
  isFocused: boolean;
  isDisabled: boolean;
  removeProps: JSX.IntrinsicElements['div'];
  index: number;
}

export interface MultiValueGenericProps<
  Option = unknown,
  IsMulti extends boolean = boolean,
  Group extends GroupBase<Option> = GroupBase<Option>
> {
  children: React.ReactNode;
  data: any;
  innerProps: { className?: string };
  selectProps: Props<Option, IsMulti, Group>;
}
export const MultiValueGeneric = <
  Option,
  IsMulti extends boolean,
  Group extends GroupBase<Option>
>({
  children,
  innerProps,
}: MultiValueGenericProps<Option, IsMulti, Group>) => (
  <div {...innerProps}>{children}</div>
);

export const MultiValueContainer = MultiValueGeneric;
export const MultiValueLabel = MultiValueGeneric;
export interface MultiValueRemoveProps<
  Option = unknown,
  IsMulti extends boolean = boolean,
  Group extends GroupBase<Option> = GroupBase<Option>
> {
  children?: React.ReactNode;
  data: Option;
  innerProps: JSX.IntrinsicElements['div'];
  selectProps: Props<Option, IsMulti, Group>;
}
export function MultiValueRemove<
  Option,
  IsMulti extends boolean,
  Group extends GroupBase<Option>
>({ children, innerProps }: MultiValueRemoveProps<Option, IsMulti, Group>) {
  return (
    <div role="button" {...innerProps}>
      {children || <CrossIcon size={14} />}
    </div>
  );
}

const MultiValue = <
  Option,
  IsMulti extends boolean,
  Group extends GroupBase<Option>
>(
  props: MultiValueProps<Option, IsMulti, Group>
) => {
  const {
    children,
    components,
    data,
    innerProps,
    isDisabled,
    removeProps,
    selectProps,
  } = props;

  const { Container, Label, Remove } = components;

  return (
    <Container
      data={data}
      innerProps={{
        ...getStyleProps(props, 'multiValue', {
          'multi-value': true,
          'multi-value--is-disabled': isDisabled,
        }),
        ...innerProps,
      }}
      selectProps={selectProps}
    >
      <Label
        data={data}
        innerProps={{
          ...getStyleProps(props, 'multiValueLabel', {
            'multi-value__label': true,
          }),
        }}
        selectProps={selectProps}
      >
        {children}
      </Label>
      <Remove
        data={data}
        innerProps={{
          ...getStyleProps(props, 'multiValueRemove', {
            'multi-value__remove': true,
          }),
          'aria-label': `Remove ${children || 'option'}`,
          ...removeProps,
        }}
        selectProps={selectProps}
      />
    </Container>
  );
};

export default MultiValue;
