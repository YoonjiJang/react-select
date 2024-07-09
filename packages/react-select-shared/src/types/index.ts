import { Props } from '../select';
import { StylesProps } from '../styles';

export interface GroupBase<Option> {
  readonly options: readonly Option[];
  readonly label?: string;
}

export type OptionsOrGroups<Option, Group extends GroupBase<Option>> =
  readonly (Option | Group)[];

export type Options<Option> = readonly Option[];

export type SingleValue<Option> = Option | null;
export type MultiValue<Option> = readonly Option[];

export type PropsValue<Option> = MultiValue<Option> | SingleValue<Option>;

export type OnChangeValue<Option, IsMulti extends boolean> =
  IsMulti extends true ? MultiValue<Option> : SingleValue<Option>;

export type ClassNamesState = { [key: string]: boolean };

export type CX = (
  state: ClassNamesState,
  ...classNames: (string | undefined)[]
) => string;

export interface BaseCommonProps<
  Option,
  IsMulti extends boolean,
  Group extends GroupBase<Option>
> {
  clearValue: () => void;
  cx: CX;
  getClassNames: (
    propertyName: keyof StylesProps<Option, IsMulti, Group>,
    props: any
  ) => string | undefined;
  getValue: () => Options<Option>;
  hasValue: boolean;
  isMulti: boolean;
  isRtl: boolean;
  options: OptionsOrGroups<Option, Group>;
  selectOption: (newValue: Option) => void;
  selectProps: unknown;
  setValue: (
    newValue: OnChangeValue<Option, IsMulti>,
    action: SetValueAction,
    option?: Option
  ) => void;
}

export interface CommonProps<
  Option,
  IsMulti extends boolean,
  Group extends GroupBase<Option>
> extends Omit<BaseCommonProps<Option, IsMulti, Group>, 'getClassNames'> {
  getClassNames: <Key extends keyof StylesProps<Option, IsMulti, Group>>(
    propertyName: Key,
    props: StylesProps<Option, IsMulti, Group>[Key]
  ) => string | undefined;
  selectProps: Props<Option, IsMulti, Group>;
}

export interface BaseCommonPropsAndClassName<
  Option,
  IsMulti extends boolean,
  Group extends GroupBase<Option>
> extends BaseCommonProps<Option, IsMulti, Group> {
  className?: string | undefined;
}

export interface CommonPropsAndClassName<
  Option,
  IsMulti extends boolean,
  Group extends GroupBase<Option>
> extends CommonProps<Option, IsMulti, Group> {
  className?: string | undefined;
}

export interface ActionMetaBase<Option> {
  option?: Option | undefined;
  removedValue?: Option;
  removedValues?: Options<Option>;
  name?: string;
}

export interface SelectOptionActionMeta<Option> extends ActionMetaBase<Option> {
  action: 'select-option';
  option: Option | undefined;
  name?: string;
}

export interface DeselectOptionActionMeta<Option>
  extends ActionMetaBase<Option> {
  action: 'deselect-option';
  option: Option | undefined;
  name?: string;
}

export interface RemoveValueActionMeta<Option> extends ActionMetaBase<Option> {
  action: 'remove-value';
  removedValue: Option;
  name?: string;
}

export interface PopValueActionMeta<Option> extends ActionMetaBase<Option> {
  action: 'pop-value';
  removedValue: Option;
  name?: string;
}

export interface ClearActionMeta<Option> extends ActionMetaBase<Option> {
  action: 'clear';
  removedValues: Options<Option>;
  name?: string;
}

export interface CreateOptionActionMeta<Option> extends ActionMetaBase<Option> {
  action: 'create-option';
  name?: string;
  option: Option;
}

export interface InitialInputFocusedActionMeta<Option, IsMulti extends boolean>
  extends ActionMetaBase<Option> {
  action: 'initial-input-focus';
  value: OnChangeValue<Option, IsMulti>;
  options?: Options<Option>;
}

export type ActionMeta<Option> =
  | SelectOptionActionMeta<Option>
  | DeselectOptionActionMeta<Option>
  | RemoveValueActionMeta<Option>
  | PopValueActionMeta<Option>
  | ClearActionMeta<Option>
  | CreateOptionActionMeta<Option>;

export type SetValueAction = 'select-option' | 'deselect-option';

export type InputAction =
  | 'set-value'
  | 'input-change'
  | 'input-blur'
  | 'menu-close';

export interface InputActionMeta {
  action: InputAction;
  /** The previous value of the search input. */
  prevInputValue: string;
}

export type MenuPlacement = 'auto' | 'bottom' | 'top';
export type CoercedMenuPlacement = 'bottom' | 'top';
export type MenuPosition = 'absolute' | 'fixed';

export type FocusDirection =
  | 'up'
  | 'down'
  | 'pageup'
  | 'pagedown'
  | 'first'
  | 'last';

export type GetOptionLabel<Option> = (option: Option) => string;
export type GetOptionValue<Option> = (option: Option) => string;
