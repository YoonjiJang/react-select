import type { StylesProps } from './styles';
import type { ClassNamesState, GroupBase } from 'react-select-shared/types';
import {
  cleanCommonProps as cleanBaseCommonProps,
  getStyleProps as getBaseStyleProps,
} from 'react-select-shared/utils';
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
) => {
  //className
  const {
    getStyles,
    theme, // not listed in commonProps documentation
    ...innerProps
  } = cleanBaseCommonProps(props);
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
    'cx' | 'getStyles' | 'getClassNames' | 'className'
  > &
    StylesProps<Option, IsMulti, Group>[Key],
  name: Key,
  classNamesState?: ClassNamesState
) => {
  const { getStyles } = props;
  const { className } = getBaseStyleProps<Option, IsMulti, Group>(
    props,
    name,
    classNamesState
  );

  return {
    css: getStyles(name, props),
    className,
  };
};
