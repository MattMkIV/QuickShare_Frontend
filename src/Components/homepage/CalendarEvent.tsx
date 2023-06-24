import Box from "@mui/material/Box";
import {Grid, Grow, IconButton, List, ListItem, Typography} from "@mui/material";
import * as React from "react";
import {useState} from "react";
import DeleteIcon from "@mui/icons-material/Delete";

function CalendarEvent() {
    const [items, setItems] = React.useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
    const handleDelete = (index: number) => {
        const newItems = [...items];
        newItems.splice(index, 1);
        setItems(newItems);
    };

    /************************* Handle trash animations *************************/
    const [hoveredIndex, setHoveredIndex] = useState(-1);

    const handleMouseEnter = (index: number) => {
        setHoveredIndex(index);
    };
    const handleMouseLeave = () => {
        setHoveredIndex(-1);
    };


    //Render
    return (
        <>
            <Grid>
                <List sx={{width: '100%'}}>
                    {items.map((value) => {
                        return (
                            <ListItem
                                sx={{marginBottom: 2}}
                                key={value}
                                onMouseEnter={() => {
                                    handleMouseEnter(value)
                                }}
                                onMouseLeave={() => {
                                    handleMouseLeave()
                                }}
                                secondaryAction={
                                    <Grow in={hoveredIndex === value} mountOnEnter unmountOnExit timeout={400}>
                                        <IconButton edge="end" aria-label="comments"
                                                    onClick={() => handleDelete(value)}
                                                    sx={{
                                                        backgroundColor: '#920609',
                                                        ':hover': {backgroundColor: '#9f3a3c'},
                                                        height: '57px',
                                                        width: '57px',
                                                        borderRadius: '15px',
                                                    }}>
                                            <DeleteIcon sx={{width: '25px', height: '25px', color: '#ffb4aa'}}/>
                                        </IconButton>
                                    </Grow>
                                }
                                disablePadding>


                                <Box
                                    sx={{
                                        padding: 1,
                                        width: '100%',
                                        height: '65px',
                                        backgroundColor: '#fcdfa6',
                                        borderRadius: '15px',
                                        boxShadow: 5,
                                        ':hover': {boxShadow: 12},
                                        display: 'flex',
                                        alignItems: 'center',
                                    }}>
                                    <Typography sx={{
                                        fontFamily: 'Roboto Light',
                                        fontSize: '26px'
                                    }}
                                    >Event name</Typography>
                                </Box>
                            </ListItem>
                        );
                    })}
                </List>
            </Grid>
        </>
    );
}

export default CalendarEvent;