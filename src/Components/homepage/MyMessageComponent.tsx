//MUI
import styled from "@emotion/styled";
import {Box, TextField} from "@mui/material";
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
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <CssTextField
                    multiline
                    inputProps={{sx: {color: '#3F2E04 !important',},}}
                    sx={{width : '80%', backgroundColor : '#DFC38C', marginLeft : '33px',  marginTop : '3px',
                        borderRadius : '22px 22px 0 22px'}}
                />

                <Avatar
                    sx={{ backgroundColor : '#008fdb', borderRadius : '13px', marginLeft : '5px', width : '35px', height : '35px' }}
                >M</Avatar>
            </Box>
        </>
    );
}

export default MyMessageComponent;