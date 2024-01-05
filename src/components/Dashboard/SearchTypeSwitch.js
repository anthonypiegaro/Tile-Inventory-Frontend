import React from 'react';
import Switch from '@mui/material/Switch';

const SearchTypeSwitch = ({checked, setChecked}) => {
    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    return (
        <Switch
        checked={checked}
        onChange={handleChange}
        inputProps={{ 'aria-label': 'controlled' }}
        />
    );
};

export default SearchTypeSwitch;
