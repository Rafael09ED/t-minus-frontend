import React from 'react';

const Input = ({ type, name, onChange, value, groupId, ...rest }) => (
  <input
    name={name}
    type={type}
    value={value}
    onChange={event => {
      event.preventDefault();
      onChange(name, event.target.value, groupId);
    }}
    {...rest}
  />
);

export default Input;