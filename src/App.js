import React from 'react';
import Home from './pages/Home';
import { Navbar, Banner } from './components/index';
import { Container } from './styles/Component.styled'
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    body: '#fff'
  },
  mobile: '620px'
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div div className="App" >
        <Container>
          <Banner />
          <Navbar />
          <Home />
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
