import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

export default function SimpleBackdrop({ loading , setLoading }) {

    const handleClose = () => {
        setLoading(false);
    };
    const handleToggle = () => {
        setLoading(!loading);
    };

    return (
        <div>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={loading}
                onClick={handleClose}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
        </div>
    );
}
