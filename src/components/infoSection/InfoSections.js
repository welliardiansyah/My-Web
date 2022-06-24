import React from 'react';
import { MainCenter, MainTextHeader, MainSubText  } from './InfoSections.elements';
import { CardSwab } from '../Card/CardSwab'
import { CardLiquidity } from '../Card/CardLiquidity'
import { CardFarm } from '../Card/CardFarm';
import { CardPool } from '../Card/CardPool';
import { Container } from '../../globalStyles';
import { CardContainer, Separator } from './InfoSections.elements';
import { 
  InfoSec, 
  InfoRow, 
  InfoColumn, 
} from './InfoSection.element';

const InfoSections = ({
  lightBg, 
  imgStart
}) => {
  return (
    <>
    <InfoSec lightBg={lightBg}>
      <Container>
        <InfoRow imgStart={imgStart}>
          <InfoColumn>
            
            <MainCenter>
              <MainTextHeader>
                Trade, Earn on the most progressive DEX on BNB Chain
              </MainTextHeader>
              
              <MainSubText>
                Instead, it uses smart contract based on  blockchain technology, which allows developers to build better functions. 
                Decentralized  Exchange consist of trading, saving, Earn, and insurances services that can be accessed by 
                anyone at any time using a smartphone or a laptop and internet connection.
              </MainSubText>

            <CardContainer>
                <CardSwab title={"Swap"} />
                <Separator />
                <CardLiquidity title={"Liquidity"} />
                <Separator />
                <CardFarm title={"Farm"} />
                <Separator />
                <CardPool title={"Launchpool"} />
            </CardContainer>

          </MainCenter>

          </InfoColumn>
        </InfoRow>
        
      </Container>
    </InfoSec>
    </>
  )
}

export default InfoSections
