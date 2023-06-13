//MUI
import styled from "@emotion/styled";
import {Box, TextField} from "@mui/material";
import Avatar from "@mui/material/Avatar";
//Component
//CSS
//JS
//Other


function MyMessageComponent() {

    //Render
    return (
        <>
            <Box sx={{display: 'flex', alignItems: 'flex-end'}}>
                <Avatar
                    sx={{
                        backgroundColor: '#db4200',
                        borderRadius: '22px',
                        marginLeft: '10px',
                        marginRight: '5px',
                        width: '35px',
                        height: '35px',
                        boxShadow: 5,
                    }}
                >A</Avatar>

                <TextField
                    multiline
                    inputProps={{sx: {color: '#534341 !important',},}}
                    sx={{
                        '& .MuiOutlinedInput-notchedOutline': {
                        border: 'none',
                    },
                        '& .MuiInputBase-input': {
                        fontFamily: 'Roboto Light',
                        fontSize: '16px !important',
                    },
                        width: '80%',
                        backgroundColor: '#ede0de',
                        borderRadius: '22px 22px 22px 5px',
                        boxShadow: 5,
                    }}
                />
            </Box>
        </>
    );
}

export default MyMessageComponent;