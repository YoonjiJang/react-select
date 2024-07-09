/** @jsx jsx */
import { jsx } from '@emotion/react';
import { createPortal } from 'react-dom';

import {
  alignToControl,
  MenuListProps as BaseMenuListProps,
  MenuProps as BaseMenuProps,
  MenuPlacerProps as BaseMenuPlacerProps,
  MenuPortalProps as BaseMenuPortalProps,
  NoticeProps as BaseNoticeProps,
  PortalPlacementContext,
  useMenuPlacer,
  useMenuPortal,
  PortalStyleArgs,
} from 'react-select-shared/components';
import { getStyleProps } from '../utils';
import { GroupBase } from 'react-select-shared/types';
import {
  CommonProps,
  CommonPropsAndClassName,
  CSSObjectWithLabel,
} from '../types';

// ==============================
// Menu
// ==============================

export interface MenuProps<
  Option = unknown,
  IsMulti extends boolean = boolean,
  Group extends GroupBase<Option> = GroupBase<Option>
> extends Omit<
      BaseMenuProps<Option, IsMulti, Group>,
      'getClassNames' | 'selectProps'
    >,
    CommonPropsAndClassName<Option, IsMulti, Group> {}

export interface MenuPlacerProps<
  Option,
  IsMulti extends boolean,
  Group extends GroupBase<Option>
> extends Omit<
      BaseMenuPlacerProps<Option, IsMulti, Group>,
      'getClassNames' | 'selectProps'
    >,
    CommonProps<Option, IsMulti, Group> {}

export const menuCSS = <
  Option,
  IsMulti extends boolean,
  Group extends GroupBase<Option>
>(
  {
    placement,
    theme: { borderRadius, spacing, colors },
  }: MenuProps<Option, IsMulti, Group>,
  unstyled: boolean
): CSSObjectWithLabel => ({
  label: 'menu',
  [alignToControl(placement)]: '100%',
  position: 'absolute',
  width: '100%',
  zIndex: 1,
  ...(unstyled
    ? {}
    : {
        backgroundColor: colors.neutral0,
        borderRadius: borderRadius,
        boxShadow:
          '0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)',
        marginBottom: spacing.menuGutter,
        marginTop: spacing.menuGutter,
      }),
});

// NOTE: internal only
export const MenuPlacer = <
  Option,
  IsMulti extends boolean,
  Group extends GroupBase<Option>
>(
  props: MenuPlacerProps<Option, IsMulti, Group>
) => {
  const { children, theme } = props;
  const { controlHeight } = theme.spacing;
  const { ref, placement, maxHeight } = useMenuPlacer<Option, IsMulti, Group>({
    ...props,
    controlHeight,
  });

  return children({
    ref,
    placerProps: {
      ...props,
      placement,
      maxHeight,
    },
  });
};

const Menu = <Option, IsMulti extends boolean, Group extends GroupBase<Option>>(
  props: MenuProps<Option, IsMulti, Group>
) => {
  const { children, innerRef, innerProps } = props;
  return (
    <div
      {...getStyleProps(props, 'menu', { menu: true })}
      ref={innerRef}
      {...innerProps}
    >
      {children}
    </div>
  );
};

export default Menu;

// ==============================
// Menu List
// ==============================

export interface MenuListProps<
  Option = unknown,
  IsMulti extends boolean = boolean,
  Group extends GroupBase<Option> = GroupBase<Option>
> extends Omit<
      BaseMenuListProps<Option, IsMulti, Group>,
      'getClassNames' | 'selectProps'
    >,
    CommonPropsAndClassName<Option, IsMulti, Group> {}
export const menuListCSS = <
  Option,
  IsMulti extends boolean,
  Group extends GroupBase<Option>
>(
  {
    maxHeight,
    theme: {
      spacing: { baseUnit },
    },
  }: MenuListProps<Option, IsMulti, Group>,
  unstyled: boolean
): CSSObjectWithLabel => ({
  maxHeight,
  overflowY: 'auto',
  position: 'relative', // required for offset[Height, Top] > keyboard scroll
  WebkitOverflowScrolling: 'touch',
  ...(unstyled
    ? {}
    : {
        paddingBottom: baseUnit,
        paddingTop: baseUnit,
      }),
});
export const MenuList = <
  Option,
  IsMulti extends boolean,
  Group extends GroupBase<Option>
>(
  props: MenuListProps<Option, IsMulti, Group>
) => {
  const { children, innerProps, innerRef, isMulti } = props;
  return (
    <div
      {...getStyleProps(props, 'menuList', {
        'menu-list': true,
        'menu-list--is-multi': isMulti,
      })}
      ref={innerRef}
      {...innerProps}
    >
      {children}
    </div>
  );
};

// ==============================
// Menu Notices
// ==============================

const noticeCSS = <
  Option,
  IsMulti extends boolean,
  Group extends GroupBase<Option>
>(
  {
    theme: {
      spacing: { baseUnit },
      colors,
    },
  }: NoticeProps<Option, IsMulti, Group>,
  unstyled: boolean
): CSSObjectWithLabel => ({
  textAlign: 'center',
  ...(unstyled
    ? {}
    : {
        color: colors.neutral40,
        padding: `${baseUnit * 2}px ${baseUnit * 3}px`,
      }),
});
export const noOptionsMessageCSS = noticeCSS;
export const loadingMessageCSS = noticeCSS;

export interface NoticeProps<
  Option = unknown,
  IsMulti extends boolean = boolean,
  Group extends GroupBase<Option> = GroupBase<Option>
> extends Omit<
      BaseNoticeProps<Option, IsMulti, Group>,
      'getClassNames' | 'selectProps'
    >,
    CommonPropsAndClassName<Option, IsMulti, Group> {}

export const NoOptionsMessage = <
  Option,
  IsMulti extends boolean,
  Group extends GroupBase<Option>
>({
  children = 'No options',
  innerProps,
  ...restProps
}: NoticeProps<Option, IsMulti, Group>) => {
  return (
    <div
      {...getStyleProps(
        { ...restProps, children, innerProps },
        'noOptionsMessage',
        {
          'menu-notice': true,
          'menu-notice--no-options': true,
        }
      )}
      {...innerProps}
    >
      {children}
    </div>
  );
};

export const LoadingMessage = <
  Option,
  IsMulti extends boolean,
  Group extends GroupBase<Option>
>({
  children = 'Loading...',
  innerProps,
  ...restProps
}: NoticeProps<Option, IsMulti, Group>) => {
  return (
    <div
      {...getStyleProps(
        { ...restProps, children, innerProps },
        'loadingMessage',
        {
          'menu-notice': true,
          'menu-notice--loading': true,
        }
      )}
      {...innerProps}
    >
      {children}
    </div>
  );
};

// ==============================
// Menu Portal
// ==============================

export interface MenuPortalProps<
  Option,
  IsMulti extends boolean,
  Group extends GroupBase<Option>
> extends Omit<
      BaseMenuPortalProps<Option, IsMulti, Group>,
      'getClassNames' | 'selectProps'
    >,
    CommonPropsAndClassName<Option, IsMulti, Group> {}

export { PortalStyleArgs };

export const menuPortalCSS = ({
  rect,
  offset,
  position,
}: PortalStyleArgs): CSSObjectWithLabel => ({
  left: rect.left,
  position: position,
  top: offset,
  width: rect.width,
  zIndex: 1,
});

export const MenuPortal = <
  Option,
  IsMulti extends boolean,
  Group extends GroupBase<Option>
>(
  props: MenuPortalProps<Option, IsMulti, Group>
) => {
  const { appendTo, children, innerProps, menuPosition } = props;
  const { computedPosition, setMenuPortalElement, portalPlacementContext } =
    useMenuPortal(props);

  // bail early if required elements aren't present
  if ((!appendTo && menuPosition !== 'fixed') || !computedPosition) return null;

  // same wrapper element whether fixed or portalled
  const menuWrapper = (
    <div
      ref={setMenuPortalElement}
      {...getStyleProps(
        {
          ...props,
          offset: computedPosition.offset,
          position: menuPosition,
          rect: computedPosition.rect,
        },
        'menuPortal',
        {
          'menu-portal': true,
        }
      )}
      {...innerProps}
    >
      {children}
    </div>
  );

  return (
    <PortalPlacementContext.Provider value={portalPlacementContext}>
      {appendTo ? createPortal(menuWrapper, appendTo) : menuWrapper}
    </PortalPlacementContext.Provider>
  );
};
