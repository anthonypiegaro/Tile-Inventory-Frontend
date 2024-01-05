import React from "react";
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

const TileSearch = ({data, selectedTile, setSelectedTile}) => {
    const handleChange = (event, newValue) => {
        setSelectedTile(newValue);
    }

    return (
        <Autocomplete
            multiple
            id="tile-standard"
            sx={{
                width: 350
            }}
            options={data}
            getOptionLabel={(option) => option.name}
            value={selectedTile}
            onChange={handleChange}
            renderInput={(params) => (
            <TextField
                {...params}
                variant="standard"
                label="Tile"
            />
            )}
        />
    );
}

export default TileSearch;