import React, { Component } from 'react'
import QuestionMark from './QuestionMark'
import ControlsIcon from './ControlsIcon'
import Navbar from './Navbar'
import NavbarLogo from './NavbarLogo'
import NavbarItem from './NavbarItem'
import FlexContainer from './FlexContainer'
import FlexContainerGrow from './FlexContainerGrow'
import cloud from './mario-cloud.png'




class SocalledNavbar extends Component {
    state = {  }
    render() { 
        // const { config } = this.props;
        const { Controls, About, toggleModal } = this.props; 


        return ( 
           
            <Navbar>
                 
                 <FlexContainerGrow>
                    {<NavbarLogo logo={cloud} />}
                 </FlexContainerGrow>

                 <FlexContainer>
                {
                    Controls &&
                    <NavbarItem 
                        toggleModal={() => toggleModal(Controls)}
                        Content={ControlsIcon}
                    />
                }
                {
                    About &&
                    <NavbarItem 
                        toggleModal={() => toggleModal(About)}
                        Content={QuestionMark}
                        />

                    }
                 </FlexContainer>
            </Navbar>

        
         );
    }
}
 
export default SocalledNavbar;