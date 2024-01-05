import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);

        try {
            const response = await fetch("http://127.0.0.1:8000/api/token/", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password }),
            });
            if (response.ok) {
                const data = await response.json();
                localStorage.setItem("token", data.access);
                localStorage.setItem("refresh", data.refresh);
                navigate("/dashboard");
            } else {
                const errorData = await response.json();
                setError(errorData.detail || "Login failed");
            }
        } catch (error) {
            console.log(error);
            setError("Network error: Unable to connect to server");
        }
        setLoading(false);
    }

    return (
        <div className="login-page">
            <Box
                component="form"
                sx={{
                '& .MuiTextField-root': { 
                    m: 1,
                    width: '35ch',
                    boxShadow: '0px 2px 3px rgba(0, 0, 0, 0.1)'},
                '& .MuiButton-root': { m: 1, width: '35ch'},
                display: 'flex', 
                flexDirection: 'column',
                justifyContent: 'center', 
                alignItems: 'center',
                }}
                noValidate
                autoComplete="off"
            >
                <Avatar alt="Company Logo" src="https://raw.githubusercontent.com/anthonypiegaro/oa_images/main/DALL%C2%B7E%202023-12-15%2016.42.56%20-%20A%20minimalist%20logo%20design%20featuring%20a%20simple%20geometric%20shape%2C%20such%20as%20a%20circle%2C%20triangle%2C%20or%20square%2C%20in%20a%20single%20bold%20color%20on%20a%20contrasting%20background.png" />
                <Typography variant="h2">Sign In</Typography>
                <TextField 
                    id="username" 
                    label="Username" 
                    variant="outlined"
                    onChange={(e) => setUsername(e.target.value)}
                    required/>
                <TextField 
                    id="password" 
                    label="Password" 
                    variant="outlined" 
                    type="password"
                    onChange={(e) => setPassword(e.target.value)} 
                    required/>
                <Button variant="contained" onClick={handleSubmit}>
                    {loading ?
                        <i className="fa-solid fa-spinner fa-spin" style={{color: "#ffffff"}}></i> :
                        <p style={{margin: 0}}>Sign in</p>
                    }
                </Button>
                {error && <div className="error">{error}</div>}
            </Box>
        </div>
    );
};

export default Login;