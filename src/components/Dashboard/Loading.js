import React from "react";
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

const Loading = () => {
    return (
        <>
            <div className="search-bar-container">
                <Skeleton variant="rounded" width={350} height={50} />
            </div>
            <div className="loading-screen">
                <Skeleton variant="rounded" width={250} height={250} />
                <Skeleton variant="rounded" width={250} height={250} />
                <Skeleton variant="rounded" width={250} height={250} />
                <Skeleton variant="rounded" width={250} height={250} />
                <Skeleton variant="rounded" width={250} height={250} />
                <Skeleton variant="rounded" width={250} height={250} />
                <Skeleton variant="rounded" width={250} height={250} />
                <Skeleton variant="rounded" width={250} height={250} />
                <Skeleton variant="rounded" width={250} height={250} />
            </div>
        </>
    );
};

export default Loading;