import {
    Box,
    Card,
    CardContent,
    Fab,
    Slide,
    Tooltip,
    tooltipClasses,
    TooltipProps,
    Typography,
    Zoom
} from '@mui/material';
import ListsCheckBoxComponent from './ListsCheckBoxComponent'
import InfoIcon from "@mui/icons-material/Info";
import ShareIcon from "@mui/icons-material/Share";
import DeleteIcon from "@mui/icons-material/Delete";
import React from 'react';
import {styled} from "@mui/material/styles";

function ListCardLayout() {


    const [isHovered, setIsHovered] = React.useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const LightTooltip = styled(({className, ...props}: TooltipProps) => (
        <Tooltip {...props} classes={{popper: className}}/>))(({theme}) => ({
        [`& .${tooltipClasses.tooltip}`]: {
            backgroundColor: '#dec2a2',
            color: 'rgba(0, 0, 0, 0.87)',
            boxShadow: theme.shadows[3],
            fontSize: 11.5,
        },
    }));

    return (
        <>
            <Card className='cardsLayout' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <CardContent sx={{m: -1}}>
                    <Typography noWrap className='cardTitle' contentEditable={true}>
                        Prova titolo molto lungo
                    </Typography>

                    <hr className='separationLine'></hr>

                    <Box sx={{height: '283px', marginTop: '7px', overflowY: 'scroll'}}>
                        <ListsCheckBoxComponent></ListsCheckBoxComponent>
                    </Box>
                    <LightTooltip TransitionComponent={Zoom} title='Show info' sx={{marginTop: '-7px !important'}}
                                  placement="bottom">
                        <Slide direction="up" in={isHovered} mountOnEnter unmountOnExit timeout={100}>
                            <Fab sx={{
                                backgroundColor: '#dfc38c', marginLeft: '27px', marginRight: '25px',
                                ':hover': {backgroundColor: '#deba7b'}
                            }}>
                                <InfoIcon sx={{color: '#3f2e04'}}/>
                            </Fab>
                        </Slide>
                    </LightTooltip>

                    <LightTooltip TransitionComponent={Zoom} title='Share' sx={{marginTop: '-7px !important'}}
                                  placement="bottom">
                        <Slide direction="up" in={isHovered} mountOnEnter unmountOnExit timeout={200}>
                            <Fab sx={{
                                backgroundColor: '#e7bdb7', marginRight: '25px',
                                ':hover': {backgroundColor: '#e3ada5'}
                            }}>
                                <ShareIcon sx={{color: '#442926'}}/>
                            </Fab>
                        </Slide>
                    </LightTooltip>

                    <LightTooltip TransitionComponent={Zoom} title='Delete' sx={{marginTop: '-7px !important'}}
                                  placement="bottom">
                        <Slide direction="up" in={isHovered} mountOnEnter unmountOnExit timeout={400}>
                            <Fab sx={{backgroundColor: '#ffb4aa', ':hover': {backgroundColor: '#fda498'}}}>
                                <DeleteIcon sx={{color: '#690003'}}/>
                            </Fab>
                        </Slide>
                    </LightTooltip>
                </CardContent>
            </Card>
        </>
    );
}

export default ListCardLayout;