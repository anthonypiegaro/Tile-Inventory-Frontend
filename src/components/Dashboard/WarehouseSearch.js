import React from "react";
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

const WarehouseSearch = ({data, selectedWarehouse, setSelectedWarehouse}) => {
    const handleChange = (event, newValue) => {
        setSelectedWarehouse(newValue);
    };

  return (
      <Autocomplete
        multiple
        id="warehouse-standard"
        sx={{
            width: 350
        }}
        options={data}
        getOptionLabel={(option) => option}
        value={selectedWarehouse}
        onChange={handleChange}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            label="Warehouse"
          />
        )}
      />
  );
}

export default WarehouseSearch;