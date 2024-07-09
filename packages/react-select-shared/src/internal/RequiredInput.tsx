import * as React from 'react';

const RequiredInput: React.FunctionComponent<{
  readonly name?: string;
  readonly onFocus: React.FocusEventHandler<HTMLInputElement>;
}> = ({ name, onFocus }) => (
  <input
    required
    name={name}
    tabIndex={-1}
    aria-hidden="true"
    onFocus={onFocus}
    style={{
      opacity: 0,
      pointerEvents: 'none',
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      width: '100%',
    }}
    // Prevent `Switching from uncontrolled to controlled` error
    value=""
    onChange={() => {}}
  />
);

export default RequiredInput;
