import React, { useContext, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { Avatar,  Tooltip } from "@mui/material";
import {Link} from 'react-router-dom'
import MedicationLiquidIcon from "@mui/icons-material/MedicationLiquid";
import { AuthContext } from "../../../contexts/AuthProvider";

const pages = ["Home", "Services", "Doctors"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
const {user , logOut} = useContext(AuthContext);

     const handleLogOut = () => {
        logOut()
        .then( ()=> {} )
        .catch(error => console.log(error));
    }
  

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar AppBar className = "fixed bg-gradient-to-r from-sky-300 via-sky-200 to-sky-300 shadow-lg rounded-2">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
<MedicationLiquidIcon />

          <Typography

            variant="h6"
            noWrap
            // component="Link"
            href="/"
            sx={{
              // border:"2px solid black",
              flexGrow: 1,
              mr: 2,
              ml: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              cursor: "pointer",
              color: "inherit",
              textDecoration: "none",
            }}
          ><Link to="/">Doctors Planet</Link>
            
          </Typography>

          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            // component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}

            {/* {!user && (
              <Button
                sx={{ my: 2, color: "white", display: "block" }}
                variant="contained"
              >
                <Link to="/login">Login</Link>
              </Button>
            )} */}

             {user?.uid ?  <>
              <Button
                sx={{ my: 2, color: "white", display: "block"}}
                variant="outlined"
              >
                LogOut
              </Button>

              
             </> : <>

             <Button
                sx={{ my: 2, color: "white", display: "block" , mr: 1 }}
                variant="outlined"
              >
                <Link to="/dashboard">Dashboard</Link>
              </Button>

              <Button
                sx={{ my: 2, color: "white", display: "block" }}
                variant="outlined"
              >
                 <Link to="/login">Login</Link>
              </Button>
            </>} 

            {/* Added by nafisa */}
              {/* <Button>
             <Link to="/signup"
                sx={{ my: 2,mx:2, color: "white", display: "block" }}
                variant="contained"
              >
                Sign Up
              </Link>
             </Button>
             <Button>
             <Link to="/login"
                sx={{ my: 2,mx:2, color: "white", display: "block" }}
                variant="contained"
              >
               Log In
              </Link>
             </Button>  */}





          </Box>

          
          {user && (
            <Box sx={{ m: 2 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
