import React, { Component, Fragment } from 'react';
import SocalledNavbar from './components/SocalledNavbar/SocalledNavbar'
import About from './pages/about/About'
// import Logo from './components/SimonLogo/SimonLogo'

import Controls from './pages/controls/Controls'
import Modal from './components/Modal/Modal'
import CloseModal from './components/CloseModal/CloseModal'

class App extends Component {
  state = { 
    selected: null,
    modal : false,
 }

 closeModal = () => {
     this.setState({ modal: false })
 }

 toggleModal = (page) => {
    const { modal, selected } = this.state
    if(page === selected){
        this.setState({selected : page, modal: !modal})
    } else {
        this.setState({selected : page, modal: true})
    }
    
    
 }
  render() { 
    const { modal, selected } = this.state;
    console.log(modal, selected);
    const Content = selected;
    return ( 
      <Fragment>

     
        <SocalledNavbar 
          About={About}
          Controls={Controls}
          toggleModal={this.toggleModal}
        
        />

        { modal &&
          <Modal>
             <CloseModal closeModal={this.closeModal}/>
              {<Content />}
          </Modal>
        }
   </Fragment>
     );
  }
}
 
export default App;