import Box from "@mui/material/Box";
import {Grow, IconButton, ListItem, Typography} from "@mui/material";
import * as React from "react";
import {useState} from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import {DeleteEvent} from "../../Utils/calendar_service";

interface Props {
    value: any,
    index: any,
}

function CalendarEvent({index, value}: Props) {

    const handleDelete = async (index: any) => {

        await DeleteEvent(index.calendar_id);
        window.location.reload();
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
            <ListItem
                key={index}
                sx={{marginBottom: 2}}
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
                } disablePadding>

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
                        fontSize: '25px'
                    }}>{value.title}</Typography>
                </Box>
            </ListItem>
        </>
    );
}

export default CalendarEvent;