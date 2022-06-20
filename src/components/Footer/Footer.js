import React from 'react';
import Logo from '../../images/logo.png'
import { FaInstagram, FaTelegram, FaTwitter } from 'react-icons/fa';
import { Button } from '../../globalStyles';
import { 
    FooterContainer, 
    FooterSubscription, 
    FooterSubHeading, 
    FooterSubText,
    Form,
    FormInput,
    FooterLinkContainer,
    FooterLinkWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialIcons,
    SocialMedia,
    SocialMediaWrapper,
    SocialMediaLogo,
    WebsiteRights,
    SocialIconLink
 } from './Footer.elements';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterSubscription>
        <FooterSubHeading>
            NeoBit Tech Information
        </FooterSubHeading>

        <FooterSubText>NeoBit provides a decentralized financial asset which rewards users with a sustainable fixed compound interest model through use of it's unique NoeBit protocol.</FooterSubText>

            <Form>
                <FormInput name="email" type="email" placeholder="Your Email" />
                    <Button fontBig>Subscribe</Button>
            </Form>

        </FooterSubscription>

        <FooterLinkContainer>
            <FooterLinkWrapper>
                <FooterLinkItems>
                    <FooterLinkTitle>About Us</FooterLinkTitle>
                        <FooterLink to="/">About NeoBit</FooterLink>
                        <FooterLink to="/">How it Earn</FooterLink> 
                        <FooterLink to="/">Whitepaper</FooterLink>
                        <FooterLink to="/">Contract NeoBit</FooterLink>
                        <FooterLink to="/">Audit NeoBit</FooterLink>
                </FooterLinkItems>

                <FooterLinkItems>
                    <FooterLinkTitle>Contact Us</FooterLinkTitle>
                        <FooterLink to="/">Discord</FooterLink>
                        <FooterLink to="/">TeleGram</FooterLink> 
                        <FooterLink to="/">Testimonials</FooterLink> 
                </FooterLinkItems>

                <FooterLinkItems>
                    <FooterLinkTitle>About Us</FooterLinkTitle>
                        <FooterLink to="/">About NeoBit</FooterLink>
                        <FooterLink to="/">How it Earn</FooterLink> 
                        <FooterLink to="/">Whitepaper</FooterLink>
                        <FooterLink to="/">Why Farm</FooterLink>
                </FooterLinkItems>

                <FooterLinkItems>
                    <FooterLinkTitle>Social Media</FooterLinkTitle>
                        <FooterLink to="/">Twitter</FooterLink>
                        <FooterLink to="/">Facebook</FooterLink> 
                        <FooterLink to="/">Instagram</FooterLink>
                        <FooterLink to="/">Linkedin</FooterLink>
                </FooterLinkItems>
                
            </FooterLinkWrapper>
        </FooterLinkContainer>
        <SocialMedia>
            <SocialMediaWrapper>
                <SocialMediaLogo to="/">
                    <img src={Logo} alt="NeoBit" style={{width: "70px"}}/>
                </SocialMediaLogo>

                <WebsiteRights>© 2022 NeoBit. All rights Reserved</WebsiteRights>

                <SocialIcons>
                    <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                        <FaTwitter />
                    </SocialIconLink>

                    <SocialIconLink href="/" target="_blank" aria-label="Telegram">
                        <FaTelegram />
                    </SocialIconLink>

                    <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                        <FaInstagram />
                    </SocialIconLink>
                </SocialIcons>

            </SocialMediaWrapper>
        </SocialMedia>
        
    </FooterContainer>
    
  )
}

export default Footer
