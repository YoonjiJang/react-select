import * as React from 'react';
import { ReactElement } from 'react';
import { SingleValueProps } from '../components/SingleValue';
import { Fade } from './transitions';
import { GroupBase } from 'react-select-shared/types';

export type SingleValueComponent = <
  Option,
  IsMulti extends boolean,
  Group extends GroupBase<Option>
>(
  props: SingleValueProps<Option, IsMulti, Group>
) => ReactElement;

// instant fade; all transition-group children must be transitions

const AnimatedSingleValue =
  (WrappedComponent: SingleValueComponent) =>
  <Option, IsMulti extends boolean, Group extends GroupBase<Option>>(
    props: SingleValueProps<Option, IsMulti, Group>
  ) =>
    (
      <Fade<SingleValueProps<Option, IsMulti, Group>>
        component={WrappedComponent}
        {...props}
      />
    );

export default AnimatedSingleValue;
