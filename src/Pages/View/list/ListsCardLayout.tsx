import {CardContent, TextField, Typography} from "@mui/material";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import * as React from "react";

import '../../../Components/homepage/InfoBoxSectionCard.css'
import {styled} from "@mui/material/styles";

function ListsCardLayout() {
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

    return (
        <>
            <Card className='cardsLayout'>
                <CardContent sx={{ m: -1 }}>
                    <Typography noWrap className='cardTitle'>
                        Prova titolo molto lungo
                    </Typography>

                    <hr className='separationLine'></hr>

                    <CssTextField
                        multiline
                        className='textField'
                        rows={8.5}
                    />

                    <Card className='sectionsInfoCard' style={{background: 'linear-gradient(45deg, #FF5C4D 30%, #ff8e53 90%)'}}>
                        <CardContent>
                            <Grid container>
                                <Typography noWrap className='sectionsInfoText'>
                                    Creation date:
                                </Typography>

                                <Typography noWrap className='sectionsInfoTextContent'>
                                    10 / 04 / 2023
                                </Typography>
                            </Grid>
                        </CardContent>
                    </Card>
                </CardContent>
            </Card>
        </>
    );
}

export default ListsCardLayout;