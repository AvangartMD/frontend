import React, { useState } from 'react'; 
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Dashboard from './Pages/dashboard' 
import NFTPage from './Pages/nftminting' 
import Gs from './Theme/globalStyles';
import { ThemeProvider } from 'styled-components'
import styled from 'styled-components';
import { theme } from './Theme/theme' 
import Header from './Component/header' 
import Footer from './Component/footer'  
import MarketPlace from './Pages/marketplace'
import Media from './Theme/media-breackpoint'  

function App() {  
  const [isDark,setDarkTheme] = useState(true);
  const selectedTheme = theme(isDark); 
  function setTheme(flag){
    setDarkTheme(flag);    
  } 

  return (
    <Router > 
    <ThemeProvider theme={selectedTheme}>
      <section className='MainBox clearfix'>
        <Gs.GlobalStyle /> 
        <DMainContainer>
        <Header isDarkTheme={isDark}  setTheme={setTheme} />
          <Switch> 
            <Route path="/" exact > 
              <Dashboard isDarkTheme={isDark} setTheme={setTheme} />  
            </Route>  
            <Route path="/nftminting" exact > 
              <NFTPage isDarkTheme={isDark} setTheme={setTheme} />  
            </Route> 
            <Route path="/marketplace" exact > 
              <MarketPlace isDarkTheme={isDark} setTheme={setTheme} />  
            </Route> 
          </Switch>  
 			<Footer isDarkTheme={isDark}  setTheme={setTheme} />   
        </DMainContainer> 
        </section> 
    </ThemeProvider>
    </Router>

  );
} 
const FlexDiv = styled.div`
display: flex; align-items: center; justify-content:center; flex-wrap:wrap;
`;   
const DMainContainer = styled(FlexDiv)`
 width:100%;   justify-content:flex-start;   overflow:hidden; flex-wrap:wrap; position:relative; align-content:flex-start; flex-direction:column;
`;



export default App;