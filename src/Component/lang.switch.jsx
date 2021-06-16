import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import Collapse from '@kunukn/react-collapse' 

import {Context} from './wrapper';


const Language = (props) => {
    
    const context = useContext(Context);
    const [toggle, setToggle] = useState(false)

    const onClick = (props) => {
        setToggle(toggle => !toggle);
        context.selectLanguage(props);
    }

    return (
        <LanBTN>
            <button onClick={() =>{setToggle(toggle => !toggle)}}>LANG <i className="fas fa-chevron-down"></i></button> 
            <Collapse isOpen={toggle} className={ 'app__collapse collapse-css-transition  ' + (toggle? 'collapse-active' : '') }> 
            <DDContainer> 
                <DDBtnbar01>
                    <button  className={context.locale.includes('en')?'active':''} onClick={() => onClick('en')}>Eng</button> 
                    |  <button className={context.locale==='tr'?'active':''} onClick={() => onClick('tr')}>Tr</button>
                </DDBtnbar01> 
            </DDContainer>
            </Collapse>
        </LanBTN>
    )
}


const FlexDiv = styled.div`
    display: flex; align-items: center; justify-content:center; flex-wrap:wrap;  
`;

const LanBTN = styled(FlexDiv)`  
    margin-left:30px; position:relative;
    button{ font-size:12px; font-weight:600; color:#000; }  
`
const DDContainer = styled(FlexDiv)` 
    position:absolute; background-color:#fff; padding:15px; border-radius: 20px; box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.3); top:calc(100% + 30px); width:200px; left:50%; transform: translateX(-50%); overflow:hidden; z-index:100; 
    &.ver2{ width:300px; left:auto; transform: translateX(0); right:0; top:calc(100% + 20px);  padding:0;} 
    &.ver3{ width:300px; left:50%; transform: translateX(-50%); top:calc(100% + 34px);  padding:0;} 
`
const DDBtnbar01 = styled(FlexDiv)`
  font-size:16px; color:#B3B3B3; font-weight: 600; 
  button{ font-size:16px; padding:0 10px; margin:0 6px; color:#B3B3B3; &.active{color:#000;} :hover{color:#000;} } 
`

export default Language;