import { BaseCommonProps, GroupBase } from 'react-select-shared/types';
import { Props } from './Select';
import { StylesProps } from './styles';

export interface ThemeSpacing {
  controlHeight: number;
}

export interface Theme {
  spacing: ThemeSpacing;
}

export interface CommonProps<
  Option,
  IsMulti extends boolean,
  Group extends GroupBase<Option>
> extends BaseCommonProps<Option, IsMulti, Group> {
  getClassNames: <Key extends keyof StylesProps<Option, IsMulti, Group>>(
    propertyName: Key,
    props: StylesProps<Option, IsMulti, Group>[Key]
  ) => string | undefined;
  selectProps: Props<Option, IsMulti, Group>;
  theme: Theme;
}

export interface CommonPropsAndClassName<
  Option,
  IsMulti extends boolean,
  Group extends GroupBase<Option>
> extends CommonProps<Option, IsMulti, Group> {
  className?: string | undefined;
}
