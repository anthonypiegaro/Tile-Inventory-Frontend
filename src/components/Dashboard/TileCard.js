import React from "react";
import Button from '@mui/material/Button';

const TileCard = ({data}) => {

    const warehouse_breakdown = data.dist.map((element) => {
        return <div key={element.warehouse} className="tile-card-warehouse-list-item">{element.warehouse}:  {element.amount}</div>
    })

    return (
        <div className="tile-card">
            <div className="tile-card-name">{data.name}</div>
            <div className="tile-card-warehouse-list">
                {warehouse_breakdown}
            </div>
            <Button 
                variant="outlined"
                sx={{ position: "absolute", bottom: "1rem", color: "black", borderColor: "black" }}>Edit Tile</Button>
        </div>
    );
};

export default TileCard;