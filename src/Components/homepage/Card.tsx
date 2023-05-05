import {CardContent, Typography} from "@mui/material";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import * as React from "react";

import './Card.css'

function Cards() {
    return (
        <>
            <Card className='cards'>
                <CardContent sx={{ m: -1 }}>
                    <Typography noWrap className='cardTitle'>
                        Numero di Andrea
                    </Typography>
                    <hr className='cardLine'></hr>

                    <Card className='infoCard'>
                        <CardContent sx={{ m: -0.4 }}>
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
                    </Card>
                </CardContent>
            </Card>
        </>
    );
}

export default Cards;