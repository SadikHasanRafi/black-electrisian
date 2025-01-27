import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
// import Logo from './logo.png';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import SchoolIcon from '@mui/icons-material/School';
import MenuIcon from '@mui/icons-material/Menu';
import DashboardIcon from '@mui/icons-material/Dashboard';
import Toolbar from '@mui/material/Toolbar';
// import { LinkStyle } from '../../Hooks/useStyle';
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';
// import useAuth from '../../Hooks/useAuth';
import { Avatar, Collapse, ListItemButton, ListItemText } from '@mui/material';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import AddCardIcon from '@mui/icons-material/AddCard';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import HomeIcon from '@mui/icons-material/Home';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import PreviewIcon from '@mui/icons-material/Preview';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import useAuth from '../../../Hooks/useAuth';
import { LinkStyle } from '../../../Hooks/useStyle';
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';

const drawerWidth = 280;
function NewDashboard(props) {
    const { user, logOut, admin,buyer,userLogOut,doctor } = useAuth();
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [openListSchool, setOpenListSchool] = React.useState(false);
    const [openListBooks, setOpenListBooks] = React.useState(false);
    const [openListTutor, setOpenListTutor] = React.useState(false);
    // const { , userLogOut ,buyer} = useAuth()
    const navigate = useNavigate();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleClickListSchool = () => {
        setOpenListSchool(!openListSchool);
    };
    const handleClickListBooks = () => {
        setOpenListBooks(!openListBooks);
    };
    const handleClickListTutor = () => {
        setOpenListTutor(!openListTutor);
    };


    const drawer = (
        <div style={{backgroundColor:"#032831",height:"900px"}}>

            <Toolbar>
                <Link to='/home' style={LinkStyle}>
                    <ListItem button >
                        <ListItemIcon style={{color:"white"}}>
                            <Avatar alt="User Logo" src={user?.photoURL} />
                        </ListItemIcon>
                        {user.displayName}
                    </ListItem>
                </Link>
            </Toolbar>
            <List>
                <Divider />
                <NavLink to='/' style={LinkStyle}>
                    <ListItem button >
                        <ListItemIcon style={{color:"white"}}>
                            <HomeIcon />
                        </ListItemIcon>
                        Home
                    </ListItem>
                </NavLink>
                <Divider />
                {/* <NavLink to='/dashboard/showAppointment' style={LinkStyle}>
                    <ListItem button >
                        <ListItemIcon style={{color:"white"}}>
                            <HomeIcon />
                        </ListItemIcon>
                        Appointment
                    </ListItem>
                </NavLink> */}
                <Divider />
                {/* <NavLink to='/dashboard/video' style={LinkStyle}>
                    <ListItem button >
                        <ListItemIcon style={{color:"white"}}>
                            <HomeIcon />
                        </ListItemIcon>
                        VideoSession
                    </ListItem>
                </NavLink> */}
                <Divider />
               
              

                <NavLink to='/dashboard' style={{ ...LinkStyle }} >
                    <ListItem button >
                        <ListItemIcon style={{color:"white"}}>
                            <DashboardIcon />
                        </ListItemIcon>
                        Dashboard
                    </ListItem>
                </NavLink>
                <Divider />
                <NavLink to='/dashboard/profile' style={{ ...LinkStyle }} >
                    <ListItem button >
                        <ListItemIcon style={{color:"white"}}>
                            <DashboardIcon />
                        </ListItemIcon>
                        Profile
                    </ListItem>
                </NavLink>


                <Divider />


                {admin && <span>
                    {/* ------------------------------- */}
                
                 
                    {/* ------------------------------- */}
                    <Divider />
                 

                 

                    {/* ----------------------------- */}
                    <Divider />


                    {/* ------------------------------- */}

                   

                   

                    {/* ----------------------------- */}
                    <Divider />




                    <Divider />
                    <NavLink to='/dashboard/adminUpload' style={LinkStyle}>
                        <ListItem button >
                            <ListItemIcon style={{color:"white"}}>
                                <AddShoppingCartIcon />
                            </ListItemIcon>
                            Product Upload
                        </ListItem>
                    </NavLink>

                    <Divider />
                    <NavLink to='/dashboard/blogRobotics' style={LinkStyle}>
                        <ListItem button >
                            <ListItemIcon style={{color:"white"}}>
                                <AddShoppingCartIcon />
                            </ListItemIcon>
                            Blog Upload
                        </ListItem>
                    </NavLink>

                    <Divider />

                    <NavLink to='/dashboard/myApproved' style={LinkStyle}>
                    <ListItem button >
                        <ListItemIcon style={{color:"white"}}>
                            <HomeIcon />
                        </ListItemIcon>
                        ApprovedProduct
                    </ListItem>
                </NavLink>
                <Divider />
               
                <Divider />
              

                    <NavLink to='/dashboard/userApproved' style={LinkStyle}>
                        <ListItem button >
                            <ListItemIcon style={{color:"white"}}>
                                <VolunteerActivismIcon />
                            </ListItemIcon>
                            UserApproved
                        </ListItem>
                    </NavLink>
                    <Divider />
                    <NavLink to='/dashboard/makeadmin' style={LinkStyle}>
                        <ListItem button >
                            <ListItemIcon style={{color:"white"}}>
                                <AdminPanelSettingsIcon />
                            </ListItemIcon>
                            Make an Admin
                        </ListItem>
                    </NavLink>
                    <Divider />
                    <NavLink to='/dashboard/showContact' style={LinkStyle}>
                        <ListItem button >
                            <ListItemIcon style={{color:"white"}}>
                                <AdminPanelSettingsIcon />
                            </ListItemIcon>
                            ShowContact
                        </ListItem>
                    </NavLink>
                </span>

                }


                {/* user  */}

                {
                     !admin && !buyer && !doctor &&
                    <span>
                        <Divider />
                        <NavLink to='/dashboard/myOrder' style={LinkStyle}>
                            <ListItem button >
                                <ListItemIcon style={{color:"white"}}>
                                    <AddShoppingCartIcon />
                                </ListItemIcon>
                                My Order
                            </ListItem>
                        </NavLink>
                        <NavLink to='/dashboard/seeBooks' style={LinkStyle}>
                            <ListItem button >
                                <ListItemIcon style={{color:"white"}}>
                                    <AddShoppingCartIcon />
                                </ListItemIcon>
                                Book Electrician
                            </ListItem>
                        </NavLink>
                        {/* <NavLink to='/dashboard/productUpload' style={LinkStyle}>
                            <ListItem button >
                                <ListItemIcon style={{color:"white"}}>
                                    <AddShoppingCartIcon />
                                </ListItemIcon>
                                upload Product
                            </ListItem>
                        </NavLink> */}
                        <Divider />

                        <NavLink to='/dashboard/Electricians' style={LinkStyle}>
                    <ListItem button >
                        <ListItemIcon style={{color:"white"}}>
                            <HomeIcon />
                        </ListItemIcon>
                        Electrician
                    </ListItem>
                </NavLink>
                <Divider />
                {/* <NavLink to='/dashboard/seeApplyVideo' style={LinkStyle}>
                    <ListItem button >
                        <ListItemIcon style={{color:"white"}}>
                            <HomeIcon />
                        </ListItemIcon>
                        SeeApplyVideo
                    </ListItem>
                </NavLink> */}
                <Divider />
              

                        {/* <NavLink to='/dashboard/myDonations' style={LinkStyle}>
                            <ListItem button >
                                <ListItemIcon style={{color:"white"}}>
                                    <VolunteerActivismIcon />
                                </ListItemIcon>
                                My Donations
                            </ListItem>
                        </NavLink> */}
                        <Divider />
                        {/* <NavLink to='/dashboard/webSiteReviewFrom' style={LinkStyle}>
                            <ListItem button >
                                <ListItemIcon style={{color:"white"}}>
                                    <PreviewIcon />
                                </ListItemIcon>
                                Review
                            </ListItem>
                        </NavLink> */}

                    </span>
                }


{
                     buyer && 
                    <span>
                        <Divider />
                        <NavLink to='/dashboard/productUpload' style={LinkStyle}>
                            <ListItem button >
                                <ListItemIcon style={{color:"white"}}>
                                    <AddShoppingCartIcon />
                                </ListItemIcon>
                                ProductUpload
                            </ListItem>
                        </NavLink>
                        <Divider />
                        
                        <Divider />

                        {/* <NavLink to='/dashboard/applyVideos' style={LinkStyle}>
                    <ListItem button >
                        <ListItemIcon style={{color:"white"}}>
                            <HomeIcon />
                        </ListItemIcon>
                        ApplyVideo
                    </ListItem>
                </NavLink> */}
                <Divider />
                {/* <NavLink to='/dashboard/seeApplyVideo' style={LinkStyle}>
                    <ListItem button >
                        <ListItemIcon style={{color:"white"}}>
                            <HomeIcon />
                        </ListItemIcon>
                        SeeApplyVideo
                    </ListItem>
                </NavLink> */}
                <Divider />
                <NavLink to='/dashboard/myApproved' style={LinkStyle}>
                    <ListItem button >
                        <ListItemIcon style={{color:"white"}}>
                            <HomeIcon />
                        </ListItemIcon>
                        ApproveProduct
                    </ListItem>
                </NavLink>
                <Divider />
              

                        {/* <NavLink to='/dashboard/myDonations' style={LinkStyle}>
                            <ListItem button >
                                <ListItemIcon style={{color:"white"}}>
                                    <VolunteerActivismIcon />
                                </ListItemIcon>
                                My Donations
                            </ListItem>
                        </NavLink> */}
                        <Divider />
                        {/* <NavLink to='/dashboard/webSiteReviewFrom' style={LinkStyle}>
                            <ListItem button >
                                <ListItemIcon style={{color:"white"}}>
                                    <PreviewIcon />
                                </ListItemIcon>
                                Review
                            </ListItem>
                        </NavLink> */}

                    </span>
                }


                {/* doctor start  */}

                {
                     doctor && 
                    <span>
                        <Divider />
                        <NavLink to='/dashboard/updatevideoCode' style={LinkStyle}>
                    <ListItem button >
                        <ListItemIcon style={{color:"white"}}>
                            <HomeIcon />
                        </ListItemIcon>
                        UpdateVideo
                    </ListItem>
                </NavLink>
                <Divider />
                <NavLink to='/dashboard/seePatient' style={LinkStyle}>
                    <ListItem button >
                        <ListItemIcon style={{color:"white"}}>
                            <HomeIcon />
                        </ListItemIcon>
                        DoctorSee
                    </ListItem>
                </NavLink>
                <Divider />
                        {/* <NavLink to='/dashboard/myDonations' style={LinkStyle}>
                            <ListItem button >
                                <ListItemIcon style={{color:"white"}}>
                                    <VolunteerActivismIcon />
                                </ListItemIcon>
                                My Donations
                            </ListItem>
                        </NavLink> */}
                        <Divider />
                        {/* <NavLink to='/dashboard/webSiteReviewFrom' style={LinkStyle}>
                            <ListItem button >
                                <ListItemIcon style={{color:"white"}}>
                                    <PreviewIcon />
                                </ListItemIcon>
                                Review
                            </ListItem>
                        </NavLink> */}

                    </span>
                }



                {/* doctor end  */}


               
               
                <Divider />

                {user.email ?
                    <ListItem style={LinkStyle} button onClick={() => logOut(navigate)}>
                       
                        
                    </ListItem> :
                    <Link to='/login' style={LinkStyle}>
                        <ListItem button onClick={logOut}>
                            <ListItemIcon style={{color:"white"}}>
                                <LoginIcon />
                            </ListItemIcon>
                            Login
                        </ListItem>
                    </Link>

                }

              
                <Divider />
            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex',backgroundColor:"" }}>
            <CssBaseline />
            <AppBar
                position="fixed"
               
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                    bgcolor: '#032831',
                    height:"80px"

                }}
            >
                
                
                {/* <Header></Header> */}
                <Toolbar>
                {/* <h4>   Dashboard Show</h4> */}
                    {/* Dashboard */}
                    <IconButton
                        color="inherit"
                        
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                       
                        <MenuIcon />
                    </IconButton>
                    {/* Dashboard */}
                    {/* <img style={{ height: '45px', objectFit: 'contain' }}
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS11UBksGv8Cr-cTgKIrug6pzkfbO80Ej3-_A&usqp=CAU" alt="" /> */}
                      <h4 className='ms-4 mt-2'>   Dashboard Black Electrical</h4>
                </Toolbar>

               
              
            </AppBar>
          
            <Box
            style={{backgroundColor:""}}
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                style={{backgroundColor:""}}
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, bgcolor: 'black !important' },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
           
            <Box
                component="main"
                style={{marginTop:"50px"}}
                sx={{ flexGrow: 1, p: 0, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                
                <Outlet style={{backgroundColor:""}}/>


                {/* <Footer></Footer> */}
              
            </Box>
           
          
        </Box>
        
    );
}

NewDashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default NewDashboard;