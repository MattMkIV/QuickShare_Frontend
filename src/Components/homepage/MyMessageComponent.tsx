//MUI
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
            <Box sx={{display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end'}}>
                <TextField
                    multiline
                    inputProps={{sx: {color: '#3F2E04 !important',},}}
                    sx={{
                        '& .MuiOutlinedInput-notchedOutline': {
                            border: 'none',
                        },
                        '& .MuiInputBase-input': {
                            fontFamily: 'Roboto Light',
                            fontSize: '16px !important',
                        },
                        width: '80%',
                        backgroundColor: '#DFC38C',
                        borderRadius: '22px 22px 5px 22px',
                        boxShadow: 5,
                    }}
                />

                <Avatar
                    sx={{
                        backgroundColor: '#008fdb',
                        borderRadius: '22px',
                        marginLeft: '5px',
                        marginRight: '10px',
                        width: '35px',
                        height: '35px',
                        boxShadow: 5,
                    }}
                >M</Avatar>
            </Box>
        </>
    );
}

export default MyMessageComponent;