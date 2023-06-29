import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import * as React from "react";
import {useEffect, useState} from "react";
import {
    Collapse,
    Divider,
    FormControl,
    FormControlLabel,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Menu,
    Paper,
    Radio,
    RadioGroup,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField,
    Typography,
    useMediaQuery
} from "@mui/material";
import './AccountBalance.css'
import {useNavigate} from "react-router-dom";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Button from "@mui/material/Button";
import AddIcon from '@mui/icons-material/Add';
import dayjs, {Dayjs} from "dayjs";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {DatePicker} from "@mui/x-date-pickers";
import {checkJwt} from "../../../Utils/AuthService";
import {
    AddExpenses,
    AddIncome,
    TakeExpense,
    TakeExpenseMonth,
    TakeIncome,
    TakeIncomeMonth
} from "../../../Utils/financial_service";


interface Props {
    title: any,
    price: any,
    data: any,
    method: any,
    category: any,
}

function Row({title, price, data, method, category}: Props) {
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
                           }}>{title}</TableCell>
                <TableCell align="left"
                           sx={{
                               fontFamily: 'Roboto Regular',
                               fontSize: '15px',
                               color: '#fffbff'
                           }}>{price}</TableCell>
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
                                        }}>Method</TableCell>
                                        <TableCell align="left"
                                                   sx={{
                                                       color: '#fffbff',
                                                       fontFamily: 'Roboto Bold',
                                                       fontSize: '16px'
                                                   }}>Category</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell component="th"
                                                   scope="row"
                                                   align="left"
                                                   sx={{
                                                       color: '#fffbff',
                                                       fontFamily: 'Roboto Light',
                                                       fontSize: '14px'
                                                   }}>{data}</TableCell>
                                        <TableCell sx={{
                                            color: '#fffbff',
                                            fontFamily: 'Roboto Light',
                                            fontSize: '14px'
                                        }}>{method}</TableCell>
                                        <TableCell align="left"
                                                   sx={{
                                                       color: '#fffbff',
                                                       fontFamily: 'Roboto Light',
                                                       fontSize: '14px'
                                                   }}>{category}</TableCell>
                                    </TableRow>
                                    {/* ))} */}
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}

function AccountBalance() {

    const months = ['All', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    const [selectedItem, setSelectedItem] = useState('');
    let jwtError = false;
    const navigate = useNavigate();
    const isMdScreen = useMediaQuery('(max-width: 960px)');
    const isXsScreen = useMediaQuery('(max-width: 600px)');
    const isLgScreen = useMediaQuery('(max-width: 1200px)');
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [menuId, setMenuId] = useState<string | undefined>(undefined);
    const [value, setValue] = React.useState<Dayjs | null>(dayjs(new Date().getFullYear() + '-' + (new Date().getMonth() + 1 + '-' + new Date().getDate())));
    const [expenses, setExpenses] = useState<any>([]);
    const [income, setIncome] = useState<any>([]);


    useEffect(() => {
        const check = async () => {
            jwtError = await checkJwt();
            if (jwtError) navigate("/");
        }

        // All
        const takeExpenses = async () => {
            let response: any = await TakeExpense();
            setExpenses(response);
        }

        const takeIncome = async () => {
            let response: any = await TakeIncome();
            setIncome(response);
        }

        // Month
        const takeExpensesMonth = async (month: any) => {
            let response: any = await TakeExpenseMonth(month);
            setExpenses(response);
        }

        const takeIncomeMonth = async (month: any) => {
            let response: any = await TakeIncomeMonth(month);
            setIncome(response);
        }

        check();
        const storedMonth = localStorage.getItem('month');
        if (storedMonth) {
            setSelectedItem(storedMonth);
        }
        let month: any = localStorage.getItem("month");

        if (month === "All" || month === null) {
            takeExpenses();
            takeIncome();
        } else {
            takeExpensesMonth(month);
            takeIncomeMonth(month);
        }

    }, []);

    // When month is clicked
    const handleItemClick = (item: any) => {
        setSelectedItem(item);

        localStorage.removeItem("month");
        localStorage.setItem("month", item);

        window.location.reload();
    };

    const buttonClick = (event: React.MouseEvent<HTMLElement>, id: string) => {
        setAnchorEl(event.currentTarget);
        setMenuId(id);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleAddFinance = async (event: any) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        let tipo = data.get('row-radio-buttons-group');

        // Format date
        let dataCreazione: any = value;
        let dataFormattata;

        if (dataCreazione.$M + 1 < 10) {
            dataFormattata = dataCreazione.$y + "-0" + (dataCreazione.$M + 1) + "-" + dataCreazione.$D;
        } else {
            dataFormattata = dataCreazione.$y + "-" + (dataCreazione.$M + 1) + "-" + dataCreazione.$D;
        }

        let title = data.get('title');
        let price = data.get('price');
        let method = data.get('method');
        let category = data.get('category');

        if (tipo === "income")
            await AddIncome(dataFormattata, title, price, method, category);

        if (tipo === "expenses")
            await AddExpenses(dataFormattata, title, price, method, category);

        window.location.reload();
    };

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
                        boxShadow: 10,
                    }}>
                        <List component={Stack} direction="row" sx={{
                            width: '100%', marginLeft: '3px',
                            marginRight: '3px'
                        }}>
                            {months.map((letter, index) => (
                                <Box sx={{width: '100%', display: 'flex', alignContent: 'center'}}>
                                    <ListItem disablePadding onClick={function (event) {
                                        handleItemClick(letter);
                                    }}>

                                        <ListItemButton disableRipple sx={{
                                            marginTop: '3px',
                                            marginBottom: '3px', height: '44px', borderRadius: '30px',
                                            textAlign: 'center', color: '#261a00'
                                        }} className={selectedItem === letter ? "selected2" : ""}>
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
                                    boxShadow: 12,
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
                                                       }}>Title</TableCell>
                                            <TableCell align="left"
                                                       sx={{
                                                           fontFamily: 'Roboto Black',
                                                           fontSize: '20px',
                                                           color: '#fffbff'
                                                       }}>Price (€)</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {income.map((row: any, index: any) => (
                                            <Row key={index} title={row.name} price={row.amount} data={row.data}
                                                 method={row.method} category={row.category}/>
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
                                    boxShadow: 10,
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
                                                       }}>Title</TableCell>
                                            <TableCell align="left"
                                                       sx={{
                                                           fontFamily: 'Roboto Black',
                                                           fontSize: '20px',
                                                           color: '#fffbff'
                                                       }}>Price (€)</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {expenses.map((row: any, index: any) => (
                                            <Row key={index} title={row.title} price={row.amount} data={row.data}
                                                 method={row.method} category={row.category}/>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Box>
                    </Grid>
                </Grid>

                <Button
                    component="label"
                    sx={{
                        width: '80px',
                        height: '80px',
                        position: 'fixed',
                        bottom: 45,
                        right: 45,
                        borderRadius: '90px',
                        boxShadow: 24,
                        fontSize: '15px',
                        fontFamily: 'Roboto Black',
                        backgroundColor: '#ba1a1a',
                        ':hover': {backgroundColor: '#690003', transform: 'scale(1.1)'}
                    }}
                    onClick={(event) => buttonClick(event, 'addVoice')}
                    aria-controls="notification"
                    aria-haspopup="true"
                    disableRipple>

                    <AddIcon sx={{color: '#ffdad5', height: '30px', width: '30px'}}/>
                </Button>

                <Menu
                    id="addVoice"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl && menuId === 'addVoice')}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'addVoice',
                    }}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    transformOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                    PaperProps={{
                        elevation: 24,
                        style: {
                            width: '320px',
                            height: '420px',
                            borderRadius: '22px',
                            backgroundColor: '#a08c8a',
                        }
                    }} sx={{backgroundColor: 'rgba(0,0,0,0.44)'}}>
                    <form onSubmit={handleAddFinance}>
                        <Grid sx={{display: 'flex', alignItems: 'center'}}>
                            <Grid sx={{width: '80px'}}>
                                <Typography component="span" display="inline-block"
                                            sx={{
                                                fontFamily: 'Roboto Black',
                                                fontSize: '17px',
                                                marginLeft: '15px',
                                                color: '#3f2e04'
                                            }}>
                                    Type:
                                </Typography>
                            </Grid>
                            <FormControl>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group"
                                    sx={{marginLeft: '20px'}}>
                                    <FormControlLabel
                                        value="income"
                                        control={<Radio
                                            sx={{
                                                color: '#442926',
                                                '&.Mui-checked': {
                                                    color: '#920609',
                                                },
                                            }}/>} label="Income"/>
                                    <FormControlLabel
                                        value="expenses"
                                        control={<Radio
                                            sx={{
                                                color: '#442926',
                                                '&.Mui-checked': {
                                                    color: '#920609',
                                                },
                                            }}/>} label="Expenses"/>
                                </RadioGroup>
                            </FormControl>
                        </Grid>

                        <Grid sx={{display: 'flex', alignItems: 'center', marginTop: '10px', marginBottom: '20px'}}>
                            <Grid sx={{width: '80px'}}>
                                <Typography component="span" display="inline-block"
                                            sx={{
                                                fontFamily: 'Roboto Black',
                                                fontSize: '17px',
                                                marginLeft: '15px',
                                                color: '#3f2e04'
                                            }}>
                                    Date:
                                </Typography>
                            </Grid>

                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker
                                    format="YYYY/MM/DD"
                                    views={['day', 'month', 'year']}
                                    formatDensity="spacious"
                                    slotProps={{textField: {size: 'small',}}}
                                    value={value}
                                    onChange={(newValue) => {
                                        setValue(newValue);
                                    }}
                                    sx={{
                                        width: '200px',
                                        marginLeft: '20px',
                                        boxShadow: 3,
                                        borderRadius: '5px !important',

                                        '& .MuiInput-underline': {
                                            borderBottomColor: 'transparent',
                                        },
                                        '& .MuiFormLabel-root': {
                                            color: '#3f2e04',
                                        },
                                        '& .MuiOutlinedInput-root': {
                                            '& fieldset': {
                                                borderColor: '#3f2e04',
                                            },
                                            '&:hover fieldset': {
                                                borderColor: '#3f2e04',
                                            },
                                            '&.Mui-focused fieldset': {
                                                borderColor: '#3f2e04',
                                                borderWidth: '2px',
                                            },
                                        },
                                        '& .MuiInputBase-input': {
                                            borderRadius: '18px',
                                            fontFamily: 'Roboto Regular',
                                            fontSize: '16px !important',
                                        },
                                    }}
                                />
                            </LocalizationProvider>
                        </Grid>

                        <Divider sx={{
                            width: '290px',
                            marginTop: '5px',
                            marginBottom: '20px',
                            boxShadow: 24,
                            borderColor: 'rgba(63,46,4,0.38)',
                            marginLeft: '15px'
                        }}/>

                        <Grid sx={{display: 'flex', alignItems: 'center'}}>
                            <Grid sx={{width: '80px'}}>
                                <Typography component="span" display="inline-block"
                                            sx={{
                                                fontFamily: 'Roboto Black',
                                                fontSize: '17px',
                                                marginLeft: '15px',
                                                color: '#3f2e04'
                                            }}>
                                    Title:
                                </Typography>
                            </Grid>
                            <TextField
                                inputProps={{
                                    sx: {color: '#3f2e04 !important'},
                                }}
                                sx={{
                                    '& .MuiInput-underline': {
                                        borderBottomColor: 'transparent',
                                    },
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            borderColor: '#3f2e04',
                                            borderRadius: '18px',
                                        },
                                        '&:hover fieldset': {
                                            borderColor: '#3f2e04',
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: '#3f2e04',
                                            borderWidth: '2px',
                                        },
                                    },
                                    '& .MuiInputBase-input': {
                                        borderRadius: '18px',
                                        backgroundColor: '#d8c2be',
                                        fontFamily: 'Roboto Regular',
                                        fontSize: '16px !important',
                                        height: '20px',
                                        boxShadow: 8,
                                    },
                                    width: '200px',
                                    marginLeft: '20px',
                                }}
                                size='small'
                                name="title"
                                type='text'/>
                        </Grid>

                        <Grid sx={{display: 'flex', alignItems: 'center', marginTop: '15px'}}>
                            <Grid sx={{width: '80px'}}>
                                <Typography component="span" display="inline-block"
                                            sx={{
                                                fontFamily: 'Roboto Black',
                                                fontSize: '17px',
                                                marginLeft: '15px',
                                                color: '#3f2e04'
                                            }}>
                                    Price:
                                </Typography>
                            </Grid>
                            <TextField
                                inputProps={{
                                    sx: {color: '#3f2e04 !important'},
                                }}
                                sx={{
                                    '& .MuiInput-underline': {
                                        borderBottomColor: 'transparent',
                                    },
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            borderColor: '#3f2e04',
                                            borderRadius: '18px',
                                        },
                                        '&:hover fieldset': {
                                            borderColor: '#3f2e04',
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: '#3f2e04',
                                            borderWidth: '2px',
                                        },
                                    },
                                    '& .MuiInputBase-input': {
                                        borderRadius: '18px',
                                        backgroundColor: '#d8c2be',
                                        fontFamily: 'Roboto Regular',
                                        fontSize: '16px !important',
                                        height: '20px',
                                        boxShadow: 8,
                                    },
                                    width: '200px',
                                    marginLeft: '20px',
                                }}
                                size='small'
                                name="price"
                                type='text'/>
                        </Grid>

                        <Grid sx={{display: 'flex', alignItems: 'center', marginTop: '15px'}}>
                            <Grid sx={{width: '80px'}}>
                                <Typography component="span" display="inline-block"
                                            sx={{
                                                fontFamily: 'Roboto Black',
                                                fontSize: '17px',
                                                marginLeft: '15px',
                                                color: '#3f2e04'
                                            }}>
                                    Method:
                                </Typography>
                            </Grid>
                            <TextField
                                inputProps={{
                                    sx: {color: '#3f2e04 !important'},
                                }}
                                sx={{
                                    '& .MuiInput-underline': {
                                        borderBottomColor: 'transparent',
                                    },
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            borderColor: '#3f2e04',
                                            borderRadius: '18px',
                                        },
                                        '&:hover fieldset': {
                                            borderColor: '#3f2e04',
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: '#3f2e04',
                                            borderWidth: '2px',
                                        },
                                    },
                                    '& .MuiInputBase-input': {
                                        borderRadius: '18px',
                                        backgroundColor: '#d8c2be',
                                        fontFamily: 'Roboto Regular',
                                        fontSize: '16px !important',
                                        height: '20px',
                                        boxShadow: 8,
                                    },
                                    width: '200px',
                                    marginLeft: '20px',
                                }}
                                size='small'
                                name="method"
                                type='text'/>
                        </Grid>

                        <Grid sx={{display: 'flex', alignItems: 'center', marginTop: '15px'}}>
                            <Grid sx={{width: '80px'}}>
                                <Typography component="span" display="inline-block"
                                            sx={{
                                                fontFamily: 'Roboto Black',
                                                fontSize: '17px',
                                                marginLeft: '15px',
                                                color: '#3f2e04'
                                            }}>
                                    Category:
                                </Typography>
                            </Grid>
                            <TextField
                                inputProps={{
                                    sx: {color: '#3f2e04 !important'},
                                }}
                                sx={{
                                    '& .MuiInput-underline': {
                                        borderBottomColor: 'transparent',
                                    },
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            borderColor: '#3f2e04',
                                            borderRadius: '18px',
                                        },
                                        '&:hover fieldset': {
                                            borderColor: '#3f2e04',
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: '#3f2e04',
                                            borderWidth: '2px',
                                        },
                                    },
                                    '& .MuiInputBase-input': {
                                        borderRadius: '18px',
                                        backgroundColor: '#d8c2be',
                                        fontFamily: 'Roboto Regular',
                                        fontSize: '16px !important',
                                        height: '20px',
                                        boxShadow: 8,
                                    },
                                    width: '200px',
                                    marginLeft: '20px',
                                }}
                                size='small'
                                name="category"
                                type='text'/>
                        </Grid>

                        <Grid sx={{display: 'flex', justifyContent: 'center', marginTop: '25px'}}>
                            <Button sx={{
                                fontFamily: 'Roboto Bold',
                                fontSize: '17px',
                                width: '200px',
                                height: '50px',
                                backgroundColor: '#8fb677',
                                color: '#201a19',
                                borderRadius: '22px',
                                border: 1,
                                boxShadow: 8,
                                borderColor: '#7a9a65',
                                ':hover': {backgroundColor: '#7a9a65'}
                            }}
                                    type="submit">Confirm
                            </Button>
                        </Grid>
                    </form>
                </Menu>
            </Box>
        </>
    );
}

export default AccountBalance;