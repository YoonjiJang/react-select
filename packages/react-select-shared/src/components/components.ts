import { ComponentType } from 'react';
import {
  ContainerProps,
  IndicatorsContainerProps,
  ValueContainerProps,
} from './containers';
import {
  ClearIndicatorProps,
  CrossIconProps,
  DownChevronProps,
  DropdownIndicatorProps,
  IndicatorSeparatorProps,
  LoadingIndicatorProps,
} from './indicators';

import { ControlProps } from './Control';
import { GroupHeadingProps, GroupProps } from './Group';
import { InputProps } from './Input';
import { MenuListProps, MenuPortalProps, MenuProps, NoticeProps } from './Menu';
import {
  MultiValueGenericProps,
  MultiValueProps,
  MultiValueRemoveProps,
} from './MultiValue';
import { OptionProps } from './Option';
import { PlaceholderProps } from './Placeholder';
import { SingleValueProps } from './SingleValue';
import { GroupBase } from 'react-select-shared/types';

export interface SelectComponents<
  Option,
  IsMulti extends boolean,
  Group extends GroupBase<Option>
> {
  ClearIndicator: ComponentType<ClearIndicatorProps<Option, IsMulti, Group>>;
  Control: ComponentType<ControlProps<Option, IsMulti, Group>>;
  DropdownIndicator: ComponentType<
    DropdownIndicatorProps<Option, IsMulti, Group>
  > | null;
  DownChevron: ComponentType<DownChevronProps>;
  CrossIcon: ComponentType<CrossIconProps>;
  Group: ComponentType<GroupProps<Option, IsMulti, Group>>;
  GroupHeading: ComponentType<GroupHeadingProps<Option, IsMulti, Group>>;
  IndicatorsContainer: ComponentType<
    IndicatorsContainerProps<Option, IsMulti, Group>
  >;
  IndicatorSeparator: ComponentType<
    IndicatorSeparatorProps<Option, IsMulti, Group>
  > | null;
  Input: ComponentType<InputProps<Option, IsMulti, Group>>;
  LoadingIndicator: ComponentType<
    LoadingIndicatorProps<Option, IsMulti, Group>
  >;
  Menu: ComponentType<MenuProps<Option, IsMulti, Group>>;
  MenuList: ComponentType<MenuListProps<Option, IsMulti, Group>>;
  MenuPortal: ComponentType<MenuPortalProps<Option, IsMulti, Group>>;
  LoadingMessage: ComponentType<NoticeProps<Option, IsMulti, Group>>;
  NoOptionsMessage: ComponentType<NoticeProps<Option, IsMulti, Group>>;
  MultiValue: ComponentType<MultiValueProps<Option, IsMulti, Group>>;
  MultiValueContainer: ComponentType<
    MultiValueGenericProps<Option, IsMulti, Group>
  >;
  MultiValueLabel: ComponentType<
    MultiValueGenericProps<Option, IsMulti, Group>
  >;
  MultiValueRemove: ComponentType<
    MultiValueRemoveProps<Option, IsMulti, Group>
  >;
  Option: ComponentType<OptionProps<Option, IsMulti, Group>>;
  Placeholder: ComponentType<PlaceholderProps<Option, IsMulti, Group>>;
  SelectContainer: ComponentType<ContainerProps<Option, IsMulti, Group>>;
  SingleValue: ComponentType<SingleValueProps<Option, IsMulti, Group>>;
  ValueContainer: ComponentType<ValueContainerProps<Option, IsMulti, Group>>;
}

export type SelectComponentsGeneric = {
  ClearIndicator: <
    Option,
    IsMulti extends boolean,
    Group extends GroupBase<Option>
  >(
    props: ClearIndicatorProps<Option, IsMulti, Group>
  ) => JSX.Element;
  Control: <Option, IsMulti extends boolean, Group extends GroupBase<Option>>(
    props: ControlProps<Option, IsMulti, Group>
  ) => JSX.Element;
  DropdownIndicator: <
    Option,
    IsMulti extends boolean,
    Group extends GroupBase<Option>
  >(
    props: DropdownIndicatorProps<Option, IsMulti, Group>
  ) => JSX.Element;
  DownChevron: (props: DownChevronProps) => JSX.Element;
  CrossIcon: (props: CrossIconProps) => JSX.Element;
  Group: <Option, IsMulti extends boolean, Group extends GroupBase<Option>>(
    props: GroupProps<Option, IsMulti, Group>
  ) => JSX.Element;
  GroupHeading: <
    Option,
    IsMulti extends boolean,
    Group extends GroupBase<Option>
  >(
    props: GroupHeadingProps<Option, IsMulti, Group>
  ) => JSX.Element;
  IndicatorsContainer: <
    Option,
    IsMulti extends boolean,
    Group extends GroupBase<Option>
  >(
    props: IndicatorsContainerProps<Option, IsMulti, Group>
  ) => JSX.Element;
  IndicatorSeparator: <
    Option,
    IsMulti extends boolean,
    Group extends GroupBase<Option>
  >(
    props: IndicatorSeparatorProps<Option, IsMulti, Group>
  ) => JSX.Element;
  Input: <Option, IsMulti extends boolean, Group extends GroupBase<Option>>(
    props: InputProps<Option, IsMulti, Group>
  ) => JSX.Element;
  LoadingIndicator: <
    Option,
    IsMulti extends boolean,
    Group extends GroupBase<Option>
  >({
    innerProps,
    isRtl,
    size,
    ...restProps
  }: LoadingIndicatorProps<Option, IsMulti, Group>) => JSX.Element;
  Menu: <Option, IsMulti extends boolean, Group extends GroupBase<Option>>(
    props: MenuProps<Option, IsMulti, Group>
  ) => JSX.Element;
  MenuList: <Option, IsMulti extends boolean, Group extends GroupBase<Option>>(
    props: MenuListProps<Option, IsMulti, Group>
  ) => JSX.Element;
  MenuPortal: <
    Option,
    IsMulti extends boolean,
    Group extends GroupBase<Option>
  >(
    props: MenuPortalProps<Option, IsMulti, Group>
  ) => JSX.Element | null;
  LoadingMessage: <
    Option,
    IsMulti extends boolean,
    Group extends GroupBase<Option>
  >({
    children,
    innerProps,
    ...restProps
  }: NoticeProps<Option, IsMulti, Group>) => JSX.Element;
  NoOptionsMessage: <
    Option,
    IsMulti extends boolean,
    Group extends GroupBase<Option>
  >({
    children,
    innerProps,
    ...restProps
  }: NoticeProps<Option, IsMulti, Group>) => JSX.Element;
  MultiValue: <
    Option,
    IsMulti extends boolean,
    Group extends GroupBase<Option>
  >(
    props: MultiValueProps<Option, IsMulti, Group>
  ) => JSX.Element;
  MultiValueContainer: <
    Option,
    IsMulti extends boolean,
    Group extends GroupBase<Option>
  >({
    children,
    innerProps,
  }: MultiValueGenericProps<Option, IsMulti, Group>) => JSX.Element;
  MultiValueLabel: <
    Option,
    IsMulti extends boolean,
    Group extends GroupBase<Option>
  >({
    children,
    innerProps,
  }: MultiValueGenericProps<Option, IsMulti, Group>) => JSX.Element;
  MultiValueRemove: <
    Option,
    IsMulti extends boolean,
    Group extends GroupBase<Option>
  >({
    children,
    innerProps,
  }: MultiValueRemoveProps<Option, IsMulti, Group>) => JSX.Element;
  Option: <Option, IsMulti extends boolean, Group extends GroupBase<Option>>(
    props: OptionProps<Option, IsMulti, Group>
  ) => JSX.Element;
  Placeholder: <
    Option,
    IsMulti extends boolean,
    Group extends GroupBase<Option>
  >(
    props: PlaceholderProps<Option, IsMulti, Group>
  ) => JSX.Element;
  SelectContainer: <
    Option,
    IsMulti extends boolean,
    Group extends GroupBase<Option>
  >(
    props: ContainerProps<Option, IsMulti, Group>
  ) => JSX.Element;
  SingleValue: <
    Option,
    IsMulti extends boolean,
    Group extends GroupBase<Option>
  >(
    props: SingleValueProps<Option, IsMulti, Group>
  ) => JSX.Element;
  ValueContainer: <
    Option,
    IsMulti extends boolean,
    Group extends GroupBase<Option>
  >(
    props: ValueContainerProps<Option, IsMulti, Group>
  ) => JSX.Element;
};
