import Card from "@mui/material/Card";
import {CardContent, Typography} from "@mui/material";
import * as React from "react";

import './ChatCard.css'

function ChatCard() {
    return (
        <>
            <Card className='cardsLayout'>
                <CardContent sx={{ m: -1 }}>
                    <Typography noWrap className='cardTitle'>
                        Nome Contatto
                    </Typography>

                </CardContent>
            </Card>
        </>
    );
}

export default ChatCard;