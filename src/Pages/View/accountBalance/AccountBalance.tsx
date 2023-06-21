import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import * as React from "react";
import {useState} from "react";
import {
    Collapse,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Paper,
    Stack, Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
    useMediaQuery
} from "@mui/material";
import './AccountBalance.css'
import {useNavigate} from "react-router-dom";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';


function createData(
    name: string,
    price: number,
    category: string,
) {
    return {
        name,
        price,
        category,
        history: [
            {
                date: '2020-01-05',
                customerId: '11091700',
                amount: 3,
            },
        ],
    };
}

function Row(props: { row: ReturnType<typeof createData> }) {
    const {row} = props;
    const [open, setOpen] = React.useState(false);

    return (
        <React.Fragment>
            <TableRow sx={{'& > *': {borderBottom: 'unset'}}}>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon sx={{color: '#fffbff'}}/> :
                            <KeyboardArrowDownIcon sx={{color: '#fffbff'}}/>}
                    </IconButton>
                </TableCell>
                <TableCell component="th"
                           scope="row"
                           sx={{
                               fontFamily: 'Roboto Regular',
                               fontSize: '15px',
                               color: '#fffbff'
                           }}>{row.name}</TableCell>
                <TableCell align="left"
                           sx={{
                               fontFamily: 'Roboto Regular',
                               fontSize: '15px',
                               color: '#fffbff'
                           }}>{row.price}</TableCell>
                <TableCell align="left"
                           sx={{
                               fontFamily: 'Roboto Regular',
                               fontSize: '15px',
                               color: '#fffbff'
                           }}>{row.category}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{paddingBottom: 0, paddingTop: 0}} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{
                            marginTop: 1,
                            marginBottom: 2,
                            backgroundColor: '#a08c8a',
                            boxShadow: 15,
                            pt: 2,
                            pb: 2,
                            borderRadius: '18px'
                        }}>
                            <Typography variant="h6"
                                        gutterBottom
                                        component="div"
                                        sx={{
                                            fontFamily: 'Roboto Regular',
                                            fontSize: '24px',
                                            color: '#fffbff',
                                            marginLeft: 1.9,
                                        }}>More details:</Typography>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="left"
                                                   sx={{
                                                       color: '#fffbff',
                                                       fontFamily: 'Roboto Bold',
                                                       fontSize: '16px'
                                                   }}>Date</TableCell>
                                        <TableCell sx={{
                                            color: '#fffbff',
                                            fontFamily: 'Roboto Bold',
                                            fontSize: '16px'
                                        }}>Customer</TableCell>
                                        <TableCell align="left"
                                                   sx={{
                                                       color: '#fffbff',
                                                       fontFamily: 'Roboto Bold',
                                                       fontSize: '16px'
                                                   }}>Amount</TableCell>
                                        <TableCell align="left"
                                                   sx={{
                                                       color: '#fffbff',
                                                       fontFamily: 'Roboto Bold',
                                                       fontSize: '16px'
                                                   }}>Total price (€)</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {row.history.map((historyRow) => (
                                        <TableRow key={historyRow.date}>
                                            <TableCell component="th"
                                                       scope="row"
                                                       align="left"
                                                       sx={{
                                                           color: '#fffbff',
                                                           fontFamily: 'Roboto Light',
                                                           fontSize: '14px'
                                                       }}>{historyRow.date}</TableCell>
                                            <TableCell sx={{
                                                color: '#fffbff',
                                                fontFamily: 'Roboto Light',
                                                fontSize: '14px'
                                            }}>{historyRow.customerId}</TableCell>
                                            <TableCell align="left"
                                                       sx={{
                                                           color: '#fffbff',
                                                           fontFamily: 'Roboto Light',
                                                           fontSize: '14px'
                                                       }}>{historyRow.amount}</TableCell>
                                            <TableCell align="left"
                                                       sx={{
                                                           color: '#fffbff',
                                                           fontFamily: 'Roboto Light',
                                                           fontSize: '14px'
                                                       }}>{Math.round(historyRow.amount * 100) / 100}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}

const rows = [
    createData('MacBook Pro', 2000, "Tech"),
    createData('Breakfast', 10, "Entertainment"),
    createData('Surf', 262, "Entertainment"),
    createData('France', 1200, "Travel"),
    createData('University fee', 356, "Uni"),
];

function AccountBalance() {
    const months = ['All', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    const [selectedLetter, setSelectedLetter] = React.useState('');

    const [selectedItem, setSelectedItem] = useState('All');

    const handleItemClick = (item: any) => {
        setSelectedItem(item);
    };

    const navigate = useNavigate();

    const isMdScreen = useMediaQuery('(max-width: 960px)');
    const isXsScreen = useMediaQuery('(max-width: 600px)');
    const isLgScreen = useMediaQuery('(max-width: 1200px)');


    //Render
    return (
        <>
            <Box className='homeBox'>
                <Grid container>
                    <h1 className='titleSection'>Account Balance:</h1>
                </Grid>

                <hr className='lineCentralContent'></hr>

                <Box sx={{
                    width: '100%',
                    justifyContent: 'center',
                    display: 'flex',
                    marginTop: '30px'
                }}>
                    <Box sx={{
                        width: '900px', height: '50px', borderRadius: '50px', backgroundColor: '#ffdad5',
                        overflowX: 'scroll', display: 'flex', alignContent: 'center', justifyContent: 'left',
                        boxShadow: '3px 3px 7px 2px rgba(0, 0, 0, 0.34)'
                    }}>
                        <List component={Stack} direction="row" sx={{
                            width: '100%', marginLeft: '3px',
                            marginRight: '3px'
                        }}>
                            {months.map((letter, index) => (
                                <Box sx={{width: '100%', display: 'flex', alignContent: 'center'}}>
                                    <ListItem disablePadding onClick={function (event) {
                                        navigate("/homepage/accountbalance");
                                        handleItemClick(letter);
                                    }}>

                                        <ListItemButton disableRipple sx={{
                                            marginTop: '3px',
                                            marginBottom: '3px', height: '44px', borderRadius: '30px',
                                            textAlign: 'center', color: '#261a00'
                                        }}
                                                        className={selectedItem === letter ? "selected2" : ""}>
                                            <ListItemText>{letter}</ListItemText>
                                        </ListItemButton>
                                    </ListItem>
                                </Box>
                            ))}
                        </List>
                    </Box>

                </Box>

                <Grid container sx={{
                    width: '100%',
                    height: isMdScreen ? '1600px' : isXsScreen ? '1600px' : '800px',
                    display: 'flex',
                    marginTop: '50px',
                }}>
                    <Grid lg={6} md={12} xs={12} sx={{
                        display: 'flex', justifyContent: 'center',
                        height: isMdScreen ? '50%' : isXsScreen ? '50%' : '100%',
                    }}>
                        <Box sx={{
                            height: '98%',
                            width: '95%',
                            minWidth: '70%',
                            borderRadius: '22px',
                            backgroundColor: '#534341'
                        }}>
                            <Grid sx={{display: 'flex', justifyContent: 'center'}}>
                                <Box sx={{
                                    width: '50%', height: '60px', backgroundColor: '#dfc38c',
                                    borderRadius: '30px', display: 'flex',
                                    justifyContent: 'center', alignItems: 'center', marginTop: '-30px',
                                    boxShadow: '3px 3px 7px 2px rgba(0, 0, 0, 0.34)'
                                }}>

                                    <Typography sx={{
                                        fontFamily: 'Roboto Bold',
                                        fontSize: '30px',
                                        color: '#3f2e04'
                                    }}>Income</Typography>
                                </Box>
                            </Grid>
                            <TableContainer component={Paper}
                                            sx={{height: '93%', backgroundColor: 'transparent', boxShadow: 0}}>
                                <Table aria-label="collapsible table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell/>
                                            <TableCell align="left"
                                                       sx={{
                                                           fontFamily: 'Roboto Black',
                                                           fontSize: '20px',
                                                           color: '#fffbff'
                                                       }}>Name</TableCell>
                                            <TableCell align="left"
                                                       sx={{
                                                           fontFamily: 'Roboto Black',
                                                           fontSize: '20px',
                                                           color: '#fffbff'
                                                       }}>Price (€)</TableCell>
                                            <TableCell align="left"
                                                       sx={{
                                                           fontFamily: 'Roboto Black',
                                                           fontSize: '20px',
                                                           color: '#fffbff'
                                                       }}>Category</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {rows.map((row) => (
                                            <Row key={row.name} row={row}/>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Box>
                    </Grid>

                    <Grid lg={6} md={12} xs={12} sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        height: isMdScreen ? '50%' : isXsScreen ? '50%' : '100%',
                        marginTop: isMdScreen ? '30px' : isLgScreen ? '30px' : '0'
                    }}>
                        <Box sx={{
                            height: '98%',
                            width: '95%',
                            minWidth: '70%',
                            borderRadius: '22px',
                            backgroundColor: '#534341'
                        }}>
                            <Grid sx={{display: 'flex', justifyContent: 'center'}}>
                                <Box sx={{
                                    width: '50%', height: '60px', backgroundColor: '#dfc38c',
                                    borderRadius: '30px', display: 'flex',
                                    justifyContent: 'center', alignItems: 'center', marginTop: '-30px',
                                    boxShadow: '3px 3px 7px 2px rgba(0, 0, 0, 0.34)'
                                }}>

                                    <Typography sx={{
                                        fontFamily: 'Roboto Bold',
                                        fontSize: '30px',
                                        color: '#3f2e04'
                                    }}>Expenses</Typography>
                                </Box>
                            </Grid>
                            <TableContainer component={Paper}
                                            sx={{height: '93%', backgroundColor: 'transparent', boxShadow: 0}}>
                                <Table aria-label="collapsible table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell/>
                                            <TableCell align="left"
                                                       sx={{
                                                           fontFamily: 'Roboto Black',
                                                           fontSize: '20px',
                                                           color: '#fffbff'
                                                       }}>Name</TableCell>
                                            <TableCell align="left"
                                                       sx={{
                                                           fontFamily: 'Roboto Black',
                                                           fontSize: '20px',
                                                           color: '#fffbff'
                                                       }}>Price (€)</TableCell>
                                            <TableCell align="left"
                                                       sx={{
                                                           fontFamily: 'Roboto Black',
                                                           fontSize: '20px',
                                                           color: '#fffbff'
                                                       }}>Category</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {rows.map((row) => (
                                            <Row key={row.name} row={row}/>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Box>
                    </Grid>

                </Grid>
            </Box>
        </>
    );
}

export default AccountBalance;