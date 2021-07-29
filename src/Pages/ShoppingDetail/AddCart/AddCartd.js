import Select from '@material-ui/core/Select';
import React, { useContext, useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import DialogContentText from "@material-ui/core/DialogContentText";
// import CloseIcon from "@material-ui/icons/Close";
import { IconButton } from "@material-ui/core";
import styled from "styled-components";
import DialogTitle from "@material-ui/core/DialogTitle";


const MyButton = styled(Button)({
  width: '90px',
  height: '32px',
  borderRadius: '0',
  borderBottomRightRadius: '8px',
  borderTopLeftRadius: '8px',
  fontSize: '12px',
  color: (props=>props.add? 'black':''),
  border: (props=>props.add? '1px solid black':''),
  textTransform: 'lowercase',
})
const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export default function AddCart(){
  const [findCart, setFindCart] = useState()
  const [open, setOpen] = useState(true);
  const [selection, setSelection] = useState(1)

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSelect = (e) => {
    setSelection(e.target.value);
  };

  const handleAddToCart = () => {
    handleClose();
   
  };
  const handleRemove = () =>{
    
  }

  return(
    <div>
    <ButtonContainer>
        
       
      </ButtonContainer>
    <Dialog
    open={open}
    onClose={handleClose}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
  >
    <DialogTitle id="alert-dialog-title">
          {"Selecione a quantidade desejada"}
        </DialogTitle>
    <DialogContent>
        <DialogContentText id="alert-dialog-description">
          <FormControl fullWidth variant="outlined">
            <InputLabel htmlFor="outlined-age-native-simple">
              Quantidade
            </InputLabel>
            <Select
              required
              onChange={handleSelect}
              value={selection}
              label="Quantidade"
            >
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={6}>6</MenuItem>
              <MenuItem value={7}>7</MenuItem>
              <MenuItem value={8}>8</MenuItem>
              <MenuItem value={9}>9</MenuItem>
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={11}>11</MenuItem>
              <MenuItem value={12}>12</MenuItem>
              <MenuItem value={13}>13</MenuItem>
              <MenuItem value={14}>14</MenuItem>
              <MenuItem value={15}>15</MenuItem>
            </Select>
          </FormControl>

          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button  color="secondary" onClick={handleAddToCart} autoFocus>
            ADICIONAR AO CARRINHO
          </Button>
        </DialogActions>
      </Dialog>
  </div>
  )
}


  
