import React from 'react';
import { BrowserRouter, Switch, Route, withRouter } from 'react-router-dom';

import HomeScreen from './HomeScreen';
import PostView from './PostView';
import { ChakraProvider, theme } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={withRouter(HomeScreen)} />
          <Route path="/postview" component={PostView} />
        </Switch>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
