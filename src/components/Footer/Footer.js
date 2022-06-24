import React from 'react';
import Logo from '../../images/logo.png'
import { FaDiscord, FaTelegram, FaTwitter, FaYoutube } from 'react-icons/fa';
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

        <FooterSubText>
            Subscribe me for get more information NeoBit.
        </FooterSubText>

            <Form>
                <FormInput name="email" type="email" placeholder="Your Email" />
                    <Button fontBig>Subscribe</Button>
            </Form>

        </FooterSubscription>

        <FooterLinkContainer>
            <FooterLinkWrapper>
                <FooterLinkItems>
                    <FooterLinkTitle>About</FooterLinkTitle>
                        <FooterLink to="/">Docs</FooterLink>
                        <FooterLink to="/">Team</FooterLink>
                        <FooterLink to="/">News</FooterLink> 
                        <FooterLink to="/">Github</FooterLink>
                </FooterLinkItems>

                <FooterLinkItems>
                    <FooterLinkTitle>Features</FooterLinkTitle>
                        <FooterLink to="/">Exchange</FooterLink>
                        <FooterLink to="/">Liquidity</FooterLink> 
                        <FooterLink to="/">Farm</FooterLink>
                        <FooterLink to="/">Launchpools</FooterLink>
                        <FooterLink to="/">Fixed Stacking</FooterLink>
                        <FooterLink to="/">Analytics</FooterLink>
                </FooterLinkItems>

                <FooterLinkItems>
                    <FooterLinkTitle>Service</FooterLinkTitle>
                        <FooterLink to="/">Referal Program</FooterLink>
                        <FooterLink to="/">NBIT Tokens</FooterLink> 
                        <FooterLink to="/">Apply to Launch</FooterLink>
                        <FooterLink to="/">Space Agent</FooterLink>
                </FooterLinkItems>

                <FooterLinkItems>
                    <FooterLinkTitle>Communities</FooterLinkTitle>
                        <FooterLink to="/">Discord</FooterLink>
                        <FooterLink to="/">Telegram</FooterLink> 
                        <FooterLink to="/">Twitter</FooterLink>
                </FooterLinkItems>
                
            </FooterLinkWrapper>
        </FooterLinkContainer>
        <SocialMedia>
            <SocialMediaWrapper>
                <SocialMediaLogo to="/">
                    <img src={Logo} alt="NeoBit" style={{width: "50px"}}/>
                </SocialMediaLogo>

                <WebsiteRights>© 2022 NeoBit. All rights Reserved.</WebsiteRights>

                <SocialIcons>
                    <SocialIconLink href="/" target="_blank" aria-label="Telegram">
                        <FaTelegram />
                    </SocialIconLink>

                    <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                        <FaTwitter />
                    </SocialIconLink>

                    <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                        <FaDiscord />
                    </SocialIconLink>

                    <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                        <FaYoutube />
                    </SocialIconLink>
                </SocialIcons>

            </SocialMediaWrapper>
        </SocialMedia>
        
    </FooterContainer>
    
  )
}

export default Footer
