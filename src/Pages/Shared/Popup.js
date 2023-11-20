import {

  Dialog,
  DialogContent,
  DialogTitle,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";

import CloseIcon from "@mui/icons-material/Close";
import Controls from "./Controls/Controls";
const useStyles = makeStyles((theme) => ({
  dialogWrapper: {
    padding: theme.spacing(0),
    position: "absolute",
    top: theme.spacing(0),
    bottom: theme.spacing(0)
  },
  dialogTitle: {
    paddingRight: "0px",
  },
}));
export default function Popup(props) {
  const { title, children, openPopup, setOpenPopup } = props;
  const classes = useStyles();

  return (
    <Dialog
      sx={{maxHeight: 550,}}
      open={openPopup}
      maxWidth="md"
      classes={{ paper: classes.dialogWrapper }}
    >
      <DialogTitle className={classes.dialogTitle}>
        <div style={{ display: "flex", justifyContent:"end" ,}}  >
      
          <Controls.Button
            
            style={{backgroundColor:'teal' , height: '26px', width:"24px" }}
            text='X'
            onClick={() => {
              setOpenPopup(false);
            }}
          >
            <CloseIcon  />
          </Controls.Button>
        </div>
      </DialogTitle>
      <DialogContent dividers>{children}</DialogContent>
    </Dialog>
  );
}
