import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import HomeIcon from '@mui/icons-material/Home';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const list1 = [
    {
        id: 1,
        link: "/",
        name: "Home",
        Icon: MenuIcon
    },
    {
        id: 2,
        link: "/login",
        name: "Login"
    },
    {
        id: 3,
        link: "/singup",
        name: 'singup'
    },
    {
        id: 4,
        link: "/dashboard/taskManagement",
        name: 'Dash Board'
    }
]

export default function TemporaryDrawer() {
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <div className='text-center '>
                <h1 className='text-2xl font-bold mt-2 py-4 '>Task Management</h1>
            </div>
            <Divider />
            <List>
                {list1.map((item, index) => (
                    <ListItem key={item.id} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {
                                    index === 0 ? <HomeIcon /> : <></>
                                }
                                {
                                    index === 1 ? <LoginIcon /> : <></>
                                }
                                {
                                    index === 2 ? <LogoutIcon /> : <></>
                                }
                            </ListItemIcon>
                            <Link to={item.link}> {item.name} </Link>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            {/* <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List> */}
        </Box>
    );

    return (
        <>
            {['left'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <button className='text-white hover:text-black btn btn-sm bg-black hover:bg-white border-white hover:border-black' onClick={toggleDrawer(anchor, true)}><MenuIcon></MenuIcon></button>
                    <Drawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                    >
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
        </>
    );
}