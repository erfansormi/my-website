import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

export default function SimpleSnackbar({ message, notif, setNotif , language }) {
    const [vertical, setVertical] = React.useState("top")
    const [horizontal, setHorizontal] = React.useState("center")

    const handleClick = () => {
        setNotif(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setNotif(false);
    };

    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
        }}>
            <Snackbar
                open={notif}
                autoHideDuration={4000}
                onClose={handleClose}
                anchorOrigin={{ vertical, horizontal }}
            >
                <Alert
                    onClose={handleClose}
                    severity="success"
                    sx={{
                        width: '100%',
                        backgroundColor: "var(--orange-300)",
                        color: "#000",
                        fontWeight: "bold",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "5px 2px"
                    }}>
                    {message}
                </Alert>
            </Snackbar>
        </div >
    );
}
