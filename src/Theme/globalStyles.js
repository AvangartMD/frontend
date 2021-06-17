import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

var Gs = {}

Gs.GlobalStyle = createGlobalStyle`
body {  margin: 0; padding: 0;  font:400 16px/20px 'Sofia Pro', sans-serif;  background-color:#fff; color:#000; }
.myTip{ max-width:300px; font:400 14px/22px 'IBM Plex Mono', arial !important; color:#fff !important;} 
input{ outline:none;}
img{ max-width:100%; height:auto; }
button{  background:transparent; outline:none; border:0;   }
.collapse-css-transition { transition: all 280ms cubic-bezier(0.4, 0, 0.2, 1); }
.app__collapse{ visibility:hidden; opacity:0; height:0px; }
.app__collapse.collapse-active{ visibility:visible; opacity:1; height:auto; }
.mb-0{ margin-bottom:0 !important;}
 
`; 
Gs.Container = styled.div` 
  margin:0 auto; width: 100%; max-width:1080px; 
`; 
Gs.W25 = styled.div` 
  width:25%;
`; 
Gs.W20 = styled.div` 
  width:20%;
`;
Gs.W80 = styled.div` 
  width:80%;
`;
Gs.W200px = styled.div` 
  width:100%;
  max-width:200px;
`;
Gs.W275px = styled.div` 
  width:100%;
  max-width:275px;
`;
Gs.W605px = styled.div` 
  width:100%;
  max-width:605px;
`;
Gs.W880px = styled.div` 
  width:100%;
  max-width:880px;
`;
Gs.TenpxGutter = styled.div` 
  margin:0px 10px;
`; 


export default Gs;
 