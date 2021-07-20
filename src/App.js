import React, { useState, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import Gs from './Theme/globalStyles';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';
import { AnimateSharedLayout, AnimatePresence } from "framer-motion";
import { theme } from './Theme/theme';
import Header from './Component/header';
import Footer from './Component/footer';
import MarketPlace from './Pages/marketplace';
import Media from './Theme/media-breackpoint';

import AuthLayout from './layouts/auth.layout';
import UserLayout from './layouts/user.layout';
import { PrivateRoute } from './views/private.route';
import { PublicRoute } from './views/public.route';

const FlexDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;
const DMainContainer = styled(FlexDiv)`
  width: 100%;
  justify-content: flex-start;
  overflow: hidden;
  flex-wrap: wrap;
  position: relative;
  align-content: flex-start;
  flex-direction: column;
`;

function App() {
  const [isDark, setDarkTheme] = useState(true);
  const [loggedIn, setLoggedIn] = useState(
    localStorage.getItem('avangartAuthToken') ? true : false
  );
  const selectedTheme = theme(isDark);

  function setTheme(flag) {
    setDarkTheme(flag);
  }

  return (
    <Router>
      <ThemeProvider theme={selectedTheme}>
        <AnimateSharedLayout>
          <AnimatePresence>
            <section className='MainBox clearfix'>
              <Gs.GlobalStyle />
              <DMainContainer>
                <Header loggedIn={loggedIn} />
                <Suspense
                  fallback={
                    <div className='loader-outer'>
                      <div className='loader'></div>
                    </div>
                  }
                >
                  <Switch>
                    <PrivateRoute
                      path='/user'
                      component={(props) => <UserLayout {...props} />}
                    />
                    <PublicRoute
                      path='/'
                      component={(props) => (
                        <AuthLayout {...props} loggedIn={loggedIn} />
                      )}
                    />
                    {loggedIn ? (
                      <Redirect to='/user' from='/' />
                    ) : (
                      <Redirect from='/user' to='/' />
                    )}
                  </Switch>
                </Suspense>
                <Footer loggedIn={loggedIn} />
              </DMainContainer>
            </section>
          </AnimatePresence>
        </AnimateSharedLayout>
      </ThemeProvider>
    </Router>
  );
}

export default App;
