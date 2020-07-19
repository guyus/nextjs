import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
//import ProTip from '../src/ProTip';
//import Link from '../src/Link';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Main from './Content';
//import Copyright from '../src/Copyright';

export default function Index() {
  return (
    <Container>
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Hope of Bangkok Church
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="sm">
        <Box my={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            บันทึก สต. 
          </Typography>
          <Typography variant="h6" component="h3" gutterBottom>
          วันอาทิตย์ ที่ 20 กรกฎาคม 2020
          </Typography>
          <Main />
        </Box>
      </Container>
    </Container>
  );
}