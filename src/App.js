import { ThemeProvider } from '@material-ui/core';
import React, {useState} from 'react';
import theme from './constants/theme';
import GlobalState from './global/GlobalState';
import Router from './routes/Router'

const App =() => {
  return (
    <GlobalState>
    <ThemeProvider theme={theme}>
     <Router logged={logged} setLogged={setLogged} infoHeader={infoHeader} setInfoHeader={setInfoHeader} changeInfoHeader={changeInfoHeader}/>
    </ThemeProvider>
    </GlobalState>
  )
}
export default App;
