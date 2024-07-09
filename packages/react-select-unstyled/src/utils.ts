import type { StylesProps } from './styles';
import type { ClassNamesState, GroupBase } from 'react-select-shared/types';
import { getStyleProps as getBaseStyleProps } from 'react-select-shared/utils';
import type { CommonPropsAndClassName } from './types';

// ==============================
// Clean Common Props
// ==============================

export const cleanCommonProps = <
  Option,
  IsMulti extends boolean,
  Group extends GroupBase<Option>,
  AdditionalProps
>(
  props: Partial<CommonPropsAndClassName<Option, IsMulti, Group>> &
    AdditionalProps
): Omit<
  AdditionalProps,
  keyof CommonPropsAndClassName<Option, IsMulti, Group>
> => {
  //className
  const {
    className, // not listed in commonProps documentation, needs to be removed to allow Emotion to generate classNames
    clearValue,
    cx,
    getClassNames,
    getValue,
    hasValue,
    isMulti,
    isRtl,
    options, // not listed in commonProps documentation
    selectOption,
    selectProps,
    setValue,
    theme, // not listed in commonProps documentation
    ...innerProps
  } = props;
  return { ...innerProps };
};

// ==============================
// Get Style Props
// ==============================

export const getStyleProps = <
  Option,
  IsMulti extends boolean,
  Group extends GroupBase<Option>,
  Key extends keyof StylesProps<Option, IsMulti, Group>
>(
  props: Pick<
    CommonPropsAndClassName<Option, IsMulti, Group>,
    'cx' | 'getClassNames' | 'className'
  > &
    StylesProps<Option, IsMulti, Group>[Key],
  name: Key,
  classNamesState?: ClassNamesState
) => {
  const { className } = getBaseStyleProps(props, name, classNamesState);
  return {
    className,
  };
};
