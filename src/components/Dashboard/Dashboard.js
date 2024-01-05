import React, { useState, useEffect } from "react";
import CircularProgress from '@mui/material/CircularProgress';
import Loading from "./Loading";
import TileCard from "./TileCard";
import TileSearch from "./TileSearch";
// import SearchTypeSwitch from "./SearchTypeSwitch";
// import WarehouseSearch from "./WarehouseSearch";

const Dashboard = () => {
    const [animationClass, setAnimationClass] = useState('');
    // const [warehouseSearch, setWarehouseSearch] = useState(false);
    const [selectedTile, setSelectedTile] = useState([]);
    // const [selectedWarehouse, setSelectedWarehouse] =  useState([]);
    const [allTile, setAllTile] = useState([]);
    const [loading, setLoading] = useState(true);

    const tile_data = [
        {
            id: 0,
            name: "Blue Tile",
            dist: [
                    {warehouse: "home", amount: 10},
                    {warehouse: "HQ", amount: 5}
            ]
        },
        {
            id: 1,
            name: "Red Tile",
            dist: [
                    {warehouse: "home", amount: 0},
                    {warehouse: "HQ", amount: 25}
            ]
        },
        {
            id: 2,
            name: "Church Loud",
            dist: [
                    {warehouse: "home", amount: 0},
                    {warehouse: "HQ", amount: 15}
            ]
        },
        {
            id: 3,
            name: "Touching Stone",
            dist: [
                    {warehouse: "home", amount: 11},
                    {warehouse: "HQ", amount: 15}
            ]
        },
        {
            id: 4,
            name: "Purple rough",
            dist: [
                    {warehouse: "home", amount: 5},
                    {warehouse: "HQ", amount: 14}
            ]
        },
        {
            id: 5,
            name: "Meow 17",
            dist: [
                    {warehouse: "home", amount: 12},
                    {warehouse: "HQ", amount: 19}
            ]
        },
        {
            id: 6,
            name: "Maitta Gay Happy",
            dist: [
                    {warehouse: "home", amount: 7},
                    {warehouse: "HQ", amount: 17}
            ]
        },
        {
            id: 7,
            name: "Gorilla Grape Smooth",
            dist: [
                    {warehouse: "home", amount: 0},
                    {warehouse: "HQ", amount: 20}
            ]
        },
        {
            id: 8,
            name: "Ice waterbiottle",
            dist: [
                    {warehouse: "home", amount: 20},
                    {warehouse: "HQ", amount: 0}
            ]
        },
        {
            id: 9,
            name: "Jumbo Dog",
            dist: [
                    {warehouse: "home", amount: 9},
                    {warehouse: "HQ", amount: 1}
            ]
        },
        {
            id: 10,
            name: "Tesla Sleek",
            dist: [
                    {warehouse: "home", amount: 8},
                    {warehouse: "HQ", amount: 35}
            ]
        },
        {
            id: 11,
            name: "Porche White",
            dist: [
                    {warehouse: "home", amount: 20},
                    {warehouse: "HQ", amount: 0}
            ]
        }
    ];

    useEffect(() => {
        const fetchTileInventory = async () => {
            setLoading(true);
            setTimeout(async () => {
                await fetch("http://127.0.0.1:8000/api/inventory/tiles-with-inventory/", {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("token")}`,
                    "Content-type": "application/json",
                }
                })
                .then(response => response.json())
                .then(data => setAllTile(data))
                .catch(error => console.log(error))
                .finally(() => setLoading(false)) // Wrap the function call in an anonymous function
              }, 5000);
        };

        fetchTileInventory()
    }, []);

    // const warehouses = ["home", "HQ"];
    useEffect(() => {
        if (!loading) {
            setAnimationClass('card-entering');
            console.log("ran");

            const timeoutId = setTimeout(() => {
            setAnimationClass('card-entered');
            }, 0); // Starts the animation as soon as the component mounts

            return () => clearTimeout(timeoutId);
        }
    }, [loading]);

    return (
        <div className={`dashboard ${animationClass}`}>
            {!loading ? (
            <>
            <div className="search-bar-container">
                {/* <SearchTypeSwitch checked={warehouseSearch} setChecked={setWarehouseSearch}/>
                {warehouseSearch && <WarehouseSearch data={warehouses} selectedWarehouse={selectedWarehouse} setSelectedWarehouse={setSelectedWarehouse}/>} */}
                <TileSearch data={tile_data} selectedTile={selectedTile} setSelectedTile={setSelectedTile} />
            </div>
            <div className="tile-card-container">
                {(selectedTile.length === 0)
                ? tile_data.map(tile => {
                    return <TileCard key={tile.id} data={tile}/>;
                })
                : tile_data
                    .filter((tile) => selectedTile.some(tileIn => tileIn.name === tile.name))
                    .map(tile3 => {
                        return <TileCard key={tile3.id} data={tile3}/>;
                    })}
            </div>
            </>
            ) : (
                <Loading />
            )
            }
        </div>
    );
};

export default Dashboard;