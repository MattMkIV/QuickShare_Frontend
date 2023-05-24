import {Box, CardContent, TextField, Typography} from "@mui/material";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import * as React from "react";

import './CardLayout.css'
import {styled} from "@mui/material/styles";
import {red} from "@mui/material/colors";

function CardLayout() {
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
    })

    return (
        <>
            <Card className='cardsLayout'>
                <CardContent sx={{ m: -1.2 }}>
                    <Typography noWrap className='cardTitle'>
                        Prova titolo molto lungo
                    </Typography>

                    <hr className='separationLine'></hr>

                    <CssTextField
                        multiline
                        className='textField'
                        rows={9}
                        inputProps={{
                            sx: {
                                color: 'black !important',
                            },
                        }}
                    />

                    <Box className='infoCard' style={{background: 'linear-gradient(45deg, #FF5C4D 30%, #ff8e53 90%)'}}>
                        <CardContent>
                            <Grid container>
                                <Typography noWrap className='infoText'>
                                    Category:
                                </Typography>

                                <Typography noWrap className='infoTextContent'>
                                    Note
                                </Typography>
                            </Grid>
                            <Grid container>
                                <Typography noWrap className='infoText'>
                                    Creation date:
                                </Typography>

                                <Typography noWrap className='infoTextContent'>
                                    10 / 04 / 2023
                                </Typography>
                            </Grid>
                        </CardContent>
                    </Box>
                </CardContent>
            </Card>
        </>
    );
}
export default CardLayout;