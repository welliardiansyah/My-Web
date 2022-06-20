import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button } from '../../globalStyles';
import { 
  InfoSec, 
  InfoRow, 
  InfoColumn, 
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrapper,
  Img
} from './InfoSection.element';

const InfoSection = ({ 
  priamry,
  lightBg, 
  imgStart, 
  lightTopLine, 
  lightTextDesc, 
  buttonLabel, 
  description, 
  headline, 
  lightText, 
  topline,
  img,
  alt,
  start 
}) => {
  return (
    <>
      <InfoSec lightBg={lightBg}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper>
                
                <TopLine lightTopLine={lightTopLine}>{topline}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>

                <Link to="/launch_app">
                  <Button big fontBig primary={priamry}>
                    {buttonLabel}
                  </Button>
                </Link>

              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper start={start}>
                <Img src={img} alt={alt} />
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  )
}

export default InfoSection
