import React from 'react';

const ListLimite = (props) => {
  return (
    <select
      value={props.limit}
      onChange={(event) => props.setLimit(event.target.value)}
      className="limit">
      {props.options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.text}
        </option>
      ))}
    </select>
  );
};

export default ListLimite;
