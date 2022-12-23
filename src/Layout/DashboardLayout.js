import {
    AppBar,
    Box,
    CssBaseline,
    Divider,
  
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    
    Toolbar,
  } from "@mui/material";
  import React from "react";
  
  import Typography from "@material-ui/core/Typography";
  import Drawer from "@material-ui/core/Drawer";
  import { makeStyles } from "@material-ui/core/styles";
  
 
    const drawerWidth = 300;
    const useStyles = makeStyles({
      page: {
        background: "#f9f9f9",
        width: "100%",
      },
      drawer: {
    width: drawerWidth
    },
      drawerPaper: {
    width: drawerWidth
    },
      root: {
   display:'flex'
    },
    })
  
    export default function DashboardLayout ({children}){
   const classes = useStyles()
  
  
  return (
      <div className={classes.root}>
        
      </div>
  )
  
  }
  