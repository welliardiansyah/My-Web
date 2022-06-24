import React, {useEffect, useState} from 'react'
import { FaBars, FaTimes, FaWallet} from 'react-icons/fa';
import {IconContext} from 'react-icons/lib';
import { Button } from '../../globalStyles';
import { 
    Nav, 
    NavbarContainer, 
    NavLogo, 
    NavIcon, 
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavItemBtn,
    NavBtnLink
} from './Navbar.element';
import Logo from '../../images/logo.png';

const Navbar = () => {

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);

    // BUTTON
    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }

    useEffect(() => {
        showButton()
    }, [])

    window.addEventListener('resize', showButton);

  return (
    <>
    <IconContext.Provider value={{ color: '#fff'}} >
      <Nav>
        <NavbarContainer>

            <NavLogo to="/">
                <img src={Logo} alt="NeoBit" style={{width: "70px"}}/>  
            </NavLogo>

            <MobileIcon onClick={handleClick}>
                {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>

            <NavMenu onClick={handleClick} click={click}>

                <NavItem>
                    <NavLinks to="/">Home</NavLinks>
                </NavItem>

                <NavItem>
                    <NavLinks to="/contract">Contract</NavLinks>
                </NavItem>

                <NavItem>
                    <NavLinks to="/audit">Audit</NavLinks>
                </NavItem>

                <NavItem>
                    <NavLinks to="/audit">Whitepaper</NavLinks>
                </NavItem>

                <NavItem>
                    <NavLinks to="/audit">Farm</NavLinks>
                </NavItem>

                <NavItem>
                    <NavLinks to="/audit">Launchpools</NavLinks>
                </NavItem>

                <NavItemBtn>
                    {button ? (
                        <NavBtnLink to='/'>
                            <Button primary><FaWallet /> Connect Wallet</Button>
                        </NavBtnLink>
                    ) : (
                        <NavBtnLink to='/'>
                            <Button fontBig primary>Connect Wallet</Button>
                        </NavBtnLink>
                    )}
                </NavItemBtn>
            
            </NavMenu>

        </NavbarContainer>
      </Nav>
      </IconContext.Provider>
    </>
  )
}

export default Navbar
