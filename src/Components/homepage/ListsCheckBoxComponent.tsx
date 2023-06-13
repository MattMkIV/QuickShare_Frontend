import {styled} from "@mui/material/styles";
import {
    Box,
    Button,
    Checkbox,
    CheckboxProps,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText
} from "@mui/material";
import * as React from "react";
import Grid from "@mui/material/Grid";
import DeleteIcon from "@mui/icons-material/Delete";
import {AddIcCall} from "@mui/icons-material";
import AddIcon from '@mui/icons-material/Add';

const BpIcon = styled('span')(({theme}) => ({
    borderRadius: 3,
    width: 18,
    height: 18,
    boxShadow:
        theme.palette.mode === 'dark'
            ? '0 0 0 1px rgb(16 22 26 / 40%)'
            : 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
    backgroundColor: theme.palette.mode === 'dark' ? '#394b59' : '#f5f8fa',
    backgroundImage:
        theme.palette.mode === 'dark'
            ? 'linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))'
            : 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
    '.Mui-focusVisible &': {
        outline: '2px auto rgba(19,124,189,.6)',
        outlineOffset: 2,
    },
    'input:hover ~ &': {
        backgroundColor: theme.palette.mode === 'dark' ? '#30404d' : '#ebf1f5',
    },
    'input:disabled ~ &': {
        boxShadow: 'none',
        background:
            theme.palette.mode === 'dark' ? 'rgba(57,75,89,.5)' : 'rgba(206,217,224,.5)',
    },
}));

const BpCheckedIcon = styled(BpIcon)({
    backgroundColor: '#920609',
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
    '&:before': {
        display: 'block',
        width: 18,
        height: 18,
        backgroundImage:
            "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
            " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
            "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
        content: '""',
    },
    'input:hover ~ &': {
        backgroundColor: '#920609',
    },
});

function BpCheckbox(props: CheckboxProps) {
    return (
        <Checkbox
            sx={{
                '&:hover': {bgcolor: 'transparent'},
            }}
            color="default"
            checkedIcon={<BpCheckedIcon/>}
            icon={<BpIcon/>}
            inputProps={{'aria-label': 'Checkbox demo'}}
            {...props}
        />
    );
}

function ListsCheckBoxComponent() {
    const [checked, setChecked] = React.useState([0]);

    const handleToggle = (value: number) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };
    const [items, setItems] = React.useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
    const handleDelete = (index: number) => {
        const newItems = [...items];
        newItems.splice(index, 1);
        setItems(newItems);
    };

    return (
        <>
            <Grid wrap='nowrap'
                  sx={{
                      display: 'flex', alignItems: 'center', justifyContent: 'flex-start', marginTop: '0px',
                      marginBottom: '-2px'
                  }}>
                <List sx={{width: '100%', maxWidth: 360, bgcolor: '#ede0de'}}>
                    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((value) => {
                        const labelId = `checkbox-list-label-${value}`;
                        return (
                            <ListItem
                                key={value}
                                secondaryAction={
                                    <IconButton edge="end" aria-label="comments" onClick={() => handleDelete(value)}>
                                        <DeleteIcon sx={{width: '20px', height: '20px', color: '#9f3a3c'}}/>
                                    </IconButton>
                                }
                                disablePadding>
                                <ListItemButton role={undefined} onClick={handleToggle(value)} dense
                                                sx={{
                                                    height: '40px',
                                                    borderRadius: '22px',
                                                    marginLeft: '5px',
                                                    marginRight: '5px',
                                                    ':hover': {boxShadow: 4}
                                                }}>
                                    <ListItemIcon>
                                        <BpCheckbox
                                            edge="start"
                                            checked={checked.indexOf(value) !== -1}
                                            tabIndex={-1}
                                            disableRipple
                                            inputProps={{'aria-labelledby': labelId}}
                                        />
                                    </ListItemIcon>
                                    <ListItemText id={labelId} primary={`Line item ${value + 1}`}
                                                  sx={{marginLeft: '-20px'}}/>
                                </ListItemButton>
                            </ListItem>
                        );
                    })}
                    <Grid sx={{display: 'flex', justifyContent: 'center', marginTop: '5px'}}>
                        <Button sx={{
                            height: '40px',
                            minWidth: '80%', boxShadow: 4,
                            backgroundColor: '#8fb677',
                            borderRadius: '30px',
                            color: '#201a19',
                            fontFamily: 'Roboto Black',
                            fontSize: '15px',
                            ':hover': {backgroundColor: '#7a9a65'}
                        }}>Add row</Button>
                    </Grid>

                </List>
            </Grid>
        </>
    );
}

export default ListsCheckBoxComponent;