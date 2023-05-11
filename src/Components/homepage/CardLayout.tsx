import {CardContent, Typography} from "@mui/material";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import * as React from "react";

import './CardLayout.css'

function CardLayout() {
    return (
        <>
            <Card className='cardsLayout'>
                <CardContent sx={{ m: -1 }}>
                    <Typography noWrap className='cardTitle'>
                        Prova titolo molto lungo
                    </Typography>
                    <hr className='inCardLine'></hr>

                    <Card className='infoCard' style={{background: 'linear-gradient(45deg, #FF5C4D 30%, #ff8e53 90%)'}}>
                        <CardContent sx={{ m: -0.4 }}>
                            <Grid container>
                                <Typography noWrap className='infoText'>
                                    Category:
                                </Typography>

                                {/* Implementare il settaggio dinamico della categoria*/}
                                <Typography noWrap className='infoTextContent'>
                                    Note
                                </Typography>
                            </Grid>
                            <Grid container>
                                <Typography noWrap className='infoText'>
                                    Creation date:
                                </Typography>

                                {/* Implementare il settaggio dinamico della data*/}
                                <Typography noWrap className='infoTextContent'>
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

export default CardLayout;