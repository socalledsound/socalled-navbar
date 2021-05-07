import React from 'react';
// import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { backgroundLinkHoverColor, backgroundLinkColor, navbarItemBorderColor } from './colorPalette'

const Button = styled.button`

margin-left: 0.4rem;
margin-right: 0.4rem;


// padding: 2rem;
//background-color: #fedeff;
background-color: ${backgroundLinkColor};
color: #FAFAFA;
border: 2px solid ${navbarItemBorderColor};
text-decoration: none;
border-radius: 0.3rem;
font-size: 0.9rem;
width: 5rem;
height: 5rem;
vertical-align: middle;
box-sizing: border-box;

&:hover{
    border: 6px solid ${ backgroundLinkHoverColor };
}

`;



const NavItem = ({Content, toggleModal}) => {
    return ( 
            <Button  onClick={() => toggleModal(Content)}>
                {<Content />}
            </Button>
        
     );
}
 
export default NavItem;