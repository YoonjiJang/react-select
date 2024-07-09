import { CSSObject } from '@emotion/react';
import { BaseCommonProps, GroupBase } from 'react-select-shared/types';
import { Props } from './Select';
import { StylesProps } from './styles';

export interface Colors {
  primary: string;
  primary75: string;
  primary50: string;
  primary25: string;

  danger: string;
  dangerLight: string;

  neutral0: string;
  neutral5: string;
  neutral10: string;
  neutral20: string;
  neutral30: string;
  neutral40: string;
  neutral50: string;
  neutral60: string;
  neutral70: string;
  neutral80: string;
  neutral90: string;
}

export interface ThemeSpacing {
  baseUnit: number;
  controlHeight: number;
  menuGutter: number;
}

export interface Theme {
  borderRadius: number;
  colors: Colors;
  spacing: ThemeSpacing;
}

export type GetStyles<
  Option,
  IsMulti extends boolean,
  Group extends GroupBase<Option>
> = <Key extends keyof StylesProps<Option, IsMulti, Group>>(
  propertyName: Key,
  props: StylesProps<Option, IsMulti, Group>[Key]
) => CSSObjectWithLabel;

export interface CommonProps<
  Option,
  IsMulti extends boolean,
  Group extends GroupBase<Option>
> extends BaseCommonProps<Option, IsMulti, Group> {
  /**
    Get the styles of a particular part of the select. Pass in the name of the
    property as the first argument, and the current props as the second argument.
    See the `styles` object for the properties available.
  */
  getStyles: GetStyles<Option, IsMulti, Group>;
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

export type CSSObjectWithLabel = CSSObject & { label?: string };
