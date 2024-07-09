import {
  ContainerProps,
  IndicatorsContainerProps,
  ValueContainerProps,
} from './components/containers';
import { ControlProps } from './components/Control';
import { GroupHeadingProps, GroupProps } from './components/Group';
import {
  ClearIndicatorProps,
  DropdownIndicatorProps,
  IndicatorSeparatorProps,
  LoadingIndicatorProps,
} from './components/indicators';
import { InputProps } from './components/Input';
import { PlaceholderProps } from './components/Placeholder';
import { OptionProps } from './components/Option';
import {
  NoticeProps,
  MenuProps,
  MenuListProps,
  PortalStyleArgs,
} from './components/Menu';
import { SingleValueProps } from './components/SingleValue';
import { MultiValueProps } from './components/MultiValue';
import { GroupBase } from 'react-select-shared/types';

export interface StylesProps<
  Option,
  IsMulti extends boolean,
  Group extends GroupBase<Option>
> {
  clearIndicator: ClearIndicatorProps<Option, IsMulti, Group>;
  container: ContainerProps<Option, IsMulti, Group>;
  control: ControlProps<Option, IsMulti, Group>;
  dropdownIndicator: DropdownIndicatorProps<Option, IsMulti, Group>;
  group: GroupProps<Option, IsMulti, Group>;
  groupHeading: GroupHeadingProps<Option, IsMulti, Group>;
  indicatorsContainer: IndicatorsContainerProps<Option, IsMulti, Group>;
  indicatorSeparator: IndicatorSeparatorProps<Option, IsMulti, Group>;
  input: InputProps<Option, IsMulti, Group>;
  loadingIndicator: LoadingIndicatorProps<Option, IsMulti, Group>;
  loadingMessage: NoticeProps<Option, IsMulti, Group>;
  menu: MenuProps<Option, IsMulti, Group>;
  menuList: MenuListProps<Option, IsMulti, Group>;
  menuPortal: PortalStyleArgs;
  multiValue: MultiValueProps<Option, IsMulti, Group>;
  multiValueLabel: MultiValueProps<Option, IsMulti, Group>;
  multiValueRemove: MultiValueProps<Option, IsMulti, Group>;
  noOptionsMessage: NoticeProps<Option, IsMulti, Group>;
  option: OptionProps<Option, IsMulti, Group>;
  placeholder: PlaceholderProps<Option, IsMulti, Group>;
  singleValue: SingleValueProps<Option, IsMulti, Group>;
  valueContainer: ValueContainerProps<Option, IsMulti, Group>;
}

export type ClassNamesConfig<
  Option = unknown,
  IsMulti extends boolean = boolean,
  Group extends GroupBase<Option> = GroupBase<Option>
> = {
  [K in keyof StylesProps<Option, IsMulti, Group>]?: (
    props: StylesProps<Option, IsMulti, Group>[K]
  ) => string;
};
