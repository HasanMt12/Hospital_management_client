import {
  Button,
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
    padding: theme.spacing(2),
    position: "absolute",
    top: theme.spacing(5),
    bottom: theme.spacing(0),
  },
  dialogTitle: {
    paddingRight: "0px",
  },
}));
export default function Popup(props) {
  const { title, children, openModal, setOpenModal } = props;
  const classes = useStyles();

  return (
    <Dialog
      open={openModal}
      maxWidth="md"
      classes={{ paper: classes.dialogWrapper }}
    >
      <DialogTitle className={classes.dialogTitle}>
        <div style={{ display: "flex" }}>
          <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
            {title}
          </Typography>
          <Controls.Button
            style={{backgroundColor:'teal'}}
            color="secondary"
            text="X"
            onClick={() => {
              setOpenModal(false);
            }}
          >
            <CloseIcon />
          </Controls.Button>
        </div>
      </DialogTitle>
      <DialogContent dividers>{children}</DialogContent>
    </Dialog>
  );
}
