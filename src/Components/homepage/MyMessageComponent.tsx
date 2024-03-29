//MUI
import {Box, TextField} from "@mui/material";
import Avatar from "@mui/material/Avatar";

interface Props {
    message: any,
}

function MyMessageComponent({message}: Props) {

    //Render
    return (
        <>
            <Box sx={{display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end'}}>
                <TextField
                    multiline
                    sx={{
                        '& .MuiOutlinedInput-notchedOutline': {
                            border: 'none',
                        },
                        '& .MuiInputBase-input': {
                            fontFamily: 'Roboto Light',
                            fontSize: '16px !important',
                        },
                        '& .Mui-disabled': {
                            color: '#574423 !important'
                        },
                        width: '80%',
                        backgroundColor: '#DFC38C',
                        borderRadius: '22px 22px 5px 22px',
                        boxShadow: 5,
                    }}
                    label={message}
                    disabled
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
                ></Avatar>
            </Box>
        </>
    );
}

export default MyMessageComponent;