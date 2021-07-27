import { ThemeProvider } from '@material-ui/core';
import React from 'react';
import theme from './constants/theme';
import Router from './routes/Router'

const App =() => {
  return (
    <ThemeProvider theme={theme}>
     <Router/>
    </ThemeProvider>
  )
}
export default App;
