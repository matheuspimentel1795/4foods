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
import CloseIcon from "@material-ui/icons/Close";
import { IconButton } from "@material-ui/core";
import DialogTitle from "@material-ui/core/DialogTitle";

import { GlobalStateContext } from '../../../global/GlobalStateContext'
import MyButton from './buttonStyled'
import styled from "styled-components";
import { OpenInNewOutlined, OpenInNewRounded } from '@material-ui/icons';

const ButtonContainer = styled.div`
  display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    width: 100%;
    
`;

export default function AddCart({sendQuant, product, onChangeQuant, quant, idRestaurant}){
  const [open, setOpen] = useState(false);
  const {cart,setCart}=useContext(GlobalStateContext)
  const [cardExist, setCardExist] = useState(0)

  const popUpClickOpen = () => {
    if(cart.length > 0){
      if(idRestaurant === cart[0].idRestaurant){
        setOpen(true)
      } else {
        alert("Infelizmente você não pode realizar pedidos em diferentes restaurantes! Verifique seu carrinho")
      }
    } else {
      setOpen(true)
    }
  }

  const popUpClose = () => {
    setOpen(false);
  }

  const removeCart = () =>{
    
    const algo= cart.map((x)=>{
      if(x.id===product.id){
          x.quantidade = x.quantidade-1
      }
      return x
    }).filter((z)=>{
      return z.quantidade>0
    })
    setCart(algo)
    changeButton()
  }

  const addToCart = () => {
    popUpClose()
    sendQuant(
      product.id,
      product.name,
      product.price,
      product.description,
      product.photoUrl, 
      product.category
    )
  }

  const changeButton = () =>{
    for(const prod of cart) {
      if(product.id === prod.id){
          setCardExist(prod.quantidade)
          break
      } 
    }
  }

  useEffect(()=>{
    changeButton()
  },[cart])
  
  return(
    <div>
      <ButtonContainer>
        {cardExist ? 
          <MyButton variant="outlined" color="primary" onClick={removeCart} add={true}> REMOVER</MyButton>
        : <MyButton variant="outlined" color="primary" onClick={popUpClickOpen}> ADICIONAR </MyButton>} 
      </ButtonContainer>
      <Dialog
        open={open}
        onClose={popUpClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <ButtonContainer>
          <IconButton edge="start" onClick={popUpClose}>
            <CloseIcon />
          </IconButton>
        </ButtonContainer>
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
                  onChange={onChangeQuant}
                  value={quant}
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
            <Button  color="primary" onClick={addToCart} autoFocus>
              ADICIONAR AO CARRINHO
            </Button>
          </DialogActions>
      </Dialog>
  </div>
  )
}