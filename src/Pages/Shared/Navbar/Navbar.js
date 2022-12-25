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
import { Avatar, Tooltip } from "@mui/material";
import { Link } from "react-router-dom";
import MedicationLiquidIcon from "@mui/icons-material/MedicationLiquid";
import { AuthContext } from "../../../contexts/AuthProvider";
import "./navbar.css";
 

import "./navbar.css";

import Popup from "../Popup";
import Login from "../../Register/Login/Login";


// const pages = ["Home", "Services", "Doctors"];
 


const pages = [
  { name: "Home", link: "/" },
  { name: "Services", link: "/" },
  { name: "Doctors", link: "/" },
];

 



const settings = ["Profile", "Account", "Dashboard", "Logout"];
 
const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const { user, logOut } = useContext(AuthContext);
  const [openPopup, setOpenPopup] = useState(false);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
 

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
    <AppBar className="fixed bg-gradient-to-r from-teal-500 via-emerald-700 to-green-900 shadow-lg rounded-2">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h1"
            noWrap
            sx={{
              flexGrow: 1,
              display: {
                xs: "none",
                md: "flex",
                alignItems: "center",
                gap: "5px",
              },
              fontFamily: "monospace",
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            <MedicationLiquidIcon className="name text-3xl" />
            <Link className="text-bold text-3xl name" to="/">
              Doctors Planet
            </Link>
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
                  <Link className="name" to={page.link}>
                    <Typography textAlign="center">{page.name}</Typography>
                  </Link>
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
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              color: "white",
              // textDecoration: "none",
            }}
          >
            <Link className="text-bold text-3xl name" to="/">
              Doctors Planet
            </Link>
          </Typography>
 
          <Box
            sx={{
              display: {
                xs: "none",
                md: "flex",
                justifyContent: "space-between",
                gap: "16px",
              },
            }}
          >
            {pages.map((page) => (
              <Link className="name" to={page.link}>
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page.name}
                </Button>
              </Link>
            ))}
            <Link to="/blogs">
              <Button sx={{ my: 2, color: "white", display: "block" }}>
                Blogs
              </Button>
            </Link>
            {user?.uid ? (
              <>
                <Button
                  onClick={() => handleLogOut()}
                  sx={{ my: 2, color: "white", display: "block" }}
                  variant="outlined"
                >
                  LogOut
                </Button>
                <Link to="/dashboard">
                  <Button
                    sx={{ my: 2, color: "white", display: "block", mr: 1 }}
                    variant="outlined"
                  >
                    Dashboard
                  </Button>
                </Link>
              </>
            ) : (
              <>
                <Link to="/login">
                  <Button
                    sx={{ my: 2, color: "white", display: "block" }}
                    variant="outlined"
                  >
                    Login
                  </Button>
                </Link>
              </>
            )}
          </Box>
 
          {user?.uid && (
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
