import * as React from 'react';

import { LiveRegionProps as BaseLiveRegionProps } from 'react-select-shared/components';
import { GroupBase } from 'react-select-shared/types';
import { CommonProps } from '../types';

// ==============================
// Root Container
// ==============================

export interface LiveRegionProps<
  Option,
  IsMulti extends boolean,
  Group extends GroupBase<Option>
> extends Omit<
      BaseLiveRegionProps<Option, IsMulti, Group>,
      'getClassNames' | 'selectProps'
    >,
    CommonProps<Option, IsMulti, Group> {}

const LiveRegion = <
  Option,
  IsMulti extends boolean,
  Group extends GroupBase<Option>
>(
  props: LiveRegionProps<Option, IsMulti, Group>
) => {
  return <LiveRegion {...props} />;
};

export default LiveRegion;
