import * as React from "react";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import { useNavigate } from "react-router-dom";
import { Button, DialogActions } from "@mui/material";

export const ProductDetail = () => {
  const [open, setOpen] = React.useState(true);
  const navigate = useNavigate();

  const handleClose = () => {
    setOpen(false);
    navigate("/");
  };

  const handleAddToCart = () => {
    setOpen(false);
    navigate("/cart");
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Set backup account</DialogTitle>

      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleAddToCart}>Add to Cart</Button>
      </DialogActions>
    </Dialog>
  );
};
