//MUI
import styled from "@emotion/styled";
import {Box, TextField } from "@mui/material";
import Avatar from "@mui/material/Avatar";
//Component
//CSS
//JS
//Other


function MyMessageComponent() {

    const CssTextField = styled(TextField)({
        '& .MuiOutlinedInput-notchedOutline': {
            border: 'none',
        },
        '& .MuiOutlinedInput-root': {
            '&:hover fieldset': {
                borderRadius: 12,
            },
            '&.Mui-focused fieldset': {
                borderRadius: 12,
            },
        },
    });

    //Render
    return (
        <>
            <Box sx={{ display: 'flex', alignItems: 'flex-end'}}>
                <Avatar sx={{ backgroundColor : '#B20000', borderRadius : '13px', marginLeft : '9px',
                    marginRight : '5px', width : '35px', height : '35px'}}
                >A</Avatar>

                <CssTextField
                    multiline
                    inputProps={{sx: {color: '#534341 !important',},}}
                    sx={{width : '80%',  marginTop : '3px', backgroundColor : '#D8C2BE', borderRadius : '22px 22px 22px 0'}}
                />
            </Box>
        </>
    );
}

export default MyMessageComponent;