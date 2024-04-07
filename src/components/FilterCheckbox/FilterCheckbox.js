import React from 'react';
import './FilterCheckbox.css';

const FilterCheckbox = ({ isChecked, onChange }) => {
  return (
    <label className="filter-checkbox">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={onChange}
      />
      <span className="filter-checkbox__toggle">
        <span className="filter-checkbox__slider"></span>
      </span>
    </label>
  );
};

export default FilterCheckbox;