import React, { ReactNode } from "react";
import Paper from "@material-ui/core/Paper";
import Modal from "@material-ui/core/Modal";
import Fade from "@material-ui/core/Fade";
import Backdrop from "@material-ui/core/Backdrop";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";

interface Props {
  title: string;
  children: ReactNode;
  open: boolean;
  close: () => void;
  label?: string;
  description?: string;
}

const useStyles = makeStyles((theme) => ({
  paper: {
    width: "100%",
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      width: 800,
    },
  },
}));

const ModelTemplate = ({
  title,
  children,
  open,
  close,
  label,
  description,
}: Props) => {
  const classes = useStyles();

  const modalLabel = label ? label : "modal-title-" + title;
  const modalDescription = description
    ? description
    : "modal-description-" + description;

  const backdropProps = {
    timeout: 500,
  };

  return (
    <Modal
      aria-labelledby={modalLabel}
      aria-describedby={modalDescription}
      className="d-flex align-items-center justify-content-center"
      open={open}
      onClose={close}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={backdropProps}
    >
      <Fade in={open}>
        <Paper className={classes.paper}>
          <h2 id={label} className="px-2">
            {title}
          </h2>
          <Divider />
          <div id="description" className="px-2">
            {children}
          </div>
        </Paper>
      </Fade>
    </Modal>
  );
};

export default ModelTemplate;
