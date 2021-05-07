import React from 'react';
import styled from 'styled-components'
import { navbarBackgroundColor } from './colorPalette'

const NavbarEl = styled.nav`
  margin: auto;
  width: 100%;
  background-color: ${navbarBackgroundColor};
  padding: 0.3rem;
`

const NavbarList = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0;
  margin-top: 0.5rem;
`


const Navbar = ({children}) => {
    return ( 
        <NavbarEl>
           <NavbarList>{children}</NavbarList>
        </NavbarEl>
     );
}
 
export default Navbar;
