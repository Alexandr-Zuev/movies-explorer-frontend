import React from 'react';
import './FilterCheckbox.css';

const FilterCheckbox = () => {
  return (
    <label className="filter-checkbox">
      <input
        type="checkbox"
      />
      <span className="filter-checkbox__toggle">
        <span className="filter-checkbox__slider"></span>
      </span>
    </label>
  );
};

export default FilterCheckbox;
