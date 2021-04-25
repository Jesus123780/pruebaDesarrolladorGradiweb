import React, { useEffect, useState } from 'react';
import styled, { css, keyframes } from 'styled-components';
import './App.css';
import image from '../src/image/logo.png'
import Drizzle from '../src/image/Drizzle.png'
import Nieve from '../src/image/nieve.png'
import Lluvia from '../src/image/lluvia.png'
import Trueno from '../src/image/trueno.png'
import CLOUDS from '../src/image/CLOUDS.png'
import Clear from '../src/image/Clear.png'
import City from '../src/image/City.png'
import { IconLocation, IconBefore } from './assets/icons';
import { Container, CardImage, Content, Card, IconTwo, ContentGrid, CityIcon, BgImage, Icon, Image, ContainerBg, CardInfo, ContentInfo, VisitCity, ContainerInfo, Text, RoundGrades, TextBox, ContentForecast } from './styled';
import { France } from './france';
import { Paris } from './paris';
const App = () => {
  const [data, setData] = useState([])
  const [rangeId, setRangeId] = useState('')
  useEffect(() => {
    const getWeather = async () => {
      const API_KEY = 'adee6704d0e99eb1da39878cac370953';
      if (API_KEY) {
        const path = `https://api.openweathermap.org/data/2.5/weather?q=bogota,colombia&appid=${API_KEY}&units=metric`;
        const res = await fetch(path)
        const json = await res.json()
        const rangeId = json?.weather[0].id
        setData(json)
        setRangeId(rangeId)
      } else {
        console.log('error')
      }
    }
    getWeather()
  }, []);

  return (
    <Container>
      <Image src={image} atl='' />
      <Content>
        <ContainerInfo>
          <CardInfo >
            <Icon>
              <IconBefore color='#33308f' size='20px' />
            </Icon>
            <IconTwo>
              <IconBefore color='#7d68e9' size='20px' />
            </IconTwo>
            <CityIcon>
              {rangeId >= 200 && rangeId < 232 ?
                <>
                  <Iconos src={Trueno} />
                  <Text position color='#fff'>Tormenta</Text>
                </>
                : rangeId >= 300 && rangeId <= 321 ?
                  <>
                    <Iconos src={Drizzle} />
                    <Text position color='#fff' size='7px'>Llovizna</Text>
                  </>
                  : rangeId >= 500 && rangeId <= 521 ?
                    <>
                      <Iconos src={Lluvia} />
                      <Text position color='#fff' size='7px'>LLuvia</Text>
                    </>
                    : rangeId >= 600 && rangeId <= 622 ?
                      <>
                        <Iconos src={Nieve} />
                        <Text position color='#fff' size='7px'>Nieve</Text>
                      </>
                      : rangeId >= 701 && rangeId <= 781 ?
                        <Text position color='#fff' size='7px'>Atmósfera</Text>
                        : rangeId === 800 ?
                          <>
                            <Iconos src={Clear} />
                            <Text position color='#fff' size='7px'>cielo limpio</Text>
                          </>
                          : rangeId >= 801 && rangeId <= 804 ?
                            <>
                              <Iconos src={CLOUDS} />
                              <Text position color='#fff' size='7px'>Nubes Nubladas</Text>
                            </>
                            :
                            <Text position color='#fff' size='7px'>...</Text>
              }

            </CityIcon>
            <Text color='#fff' margin='7px 0px' align='center' size='26px'>{data?.main?.temp}°c </Text>
          </CardInfo>
          <ContainerBg>
            <BgImage>
              <TextBox>
                <Text media margin='50px 80px ' color='#7d68e9' size='20px'>  <IconLocation color='#7d68e9' size='20px' /> {data?.name}</Text>
              </TextBox>
            </BgImage>
          </ContainerBg>
        </ContainerInfo>
        <ContentGrid responsive margin='20px auto'>
          <div style={{ display: 'flex' }}>
            <Text width='30%'> 3 Días</Text>
            <Text bold='200'> de pronóstico</Text>
          </div>
          <div style={{ display: 'flex' }}>
            <Text width='70%'>Lugar para </Text>
            <Text bold='200'> visitar</Text>
          </div>
          <Gallery> <Text align='center' size='10px' color='#b6b4c3'> + Top reviews </Text>
            {[1, 2, 3, 4].map(x => (
              <i key={x.id} >
                <Images />
              </i>
            ))}
          </Gallery>
        </ContentGrid>
        <ContentGrid>
          <ContainerPrevision width='50%'>
            <Title style={{ display: 'flex' }}>
              <Text width='30%'> 3 Días</Text>
              <Text bold='200'> de pronóstico</Text>
            </Title>
            {[1, 2, 3].map(x => (
              <ContentForecast key={x.id}>
                <ContentInfo>
                  <Iconos src={Drizzle} />
                  <div>
                    <Text>Friday</Text>
                    <span>Rain</span>
                  </div>
                </ContentInfo>
                <RoundGrades>
                  <Text size='11px' align='center' color='#fff'>32 / 34</Text>
                </RoundGrades>
              </ContentForecast>
            ))}
          </ContainerPrevision>
          <VisitCity>
            <Text margin='16px 5px ' color='#fff' size='17px'><IconLocation color='#fff' size='17px' /> {data?.name}</Text>
          </VisitCity>
          <ContainerPrevision flex='row' width='100%'>
            <CardImage>
              <ContentInfo>
                <Text margin='16px 5px ' color='#fff' size='17px'><IconLocation color='#fff' size='17px' /> {data?.name}</Text>
              </ContentInfo>
            </CardImage>
            <CardImage>
              <ContentInfo>
                <Text margin='16px 5px ' color='#fff' size='17px'><IconLocation color='#fff' size='17px' /> {data?.name}</Text>
              </ContentInfo>
              <RoundGrades>
                <Text size='30px' align='center' color='#fff'>+</Text>
              </RoundGrades>
            </CardImage>
          </ContainerPrevision>
          <div style={{ position: 'relative' }}>
            <Card>
              <France />
              <Paris />
              <CardAddLocation>
                <Button>Add Locations</Button>
                <ImageCity src={City} />
              </CardAddLocation>
            </Card>
          </div>
        </ContentGrid>
      </Content>
    </Container>
  );
}
const CardAddLocation = styled.div`
  border: 2px dashed #1C6EA4;
  width:100%;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: auto;
  padding: 10px;
  &:hover{
  border: 2px  inset #1C6EA4;

  }
`
const ImageCity = styled.img`
  height: 60px;
  object-fit: cover;
  @media(max-width: 1200px){
    object-fit: contain;
    }
`
const ContainerPrevision = styled.div`
    flex-direction: ${({ flex })=> flex ? flex : 'column'};
    width: 80%;
    margin: auto;
    @media(max-width: 1200px){
      display: flex;
      width: ${({ width })=> width ? width : '50%'};
      margin: auto;
      align-items: center;
      justify-content: center;
/* ${props => props.responsive && css`
display: flex;
  width: 50%;
  margin: auto;
  align-items: center;
  justify-content: center;
`} */
 }
`
const Pulse = keyframes`
  0% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(52, 172, 224, 0.7);
  }
  
  70% {
    transform: scale(1);
    box-shadow: 0 0 0 10px rgba(52, 172, 224, 0);
  }
  
  100% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(52, 172, 224, 0);
}
`
const Button = styled.button`
  border-radius: 10px;
  text-align: center;
  padding: 5px;
  font-size: 13px;
  width: 80%;
  margin: 0 auto;
  font-family: PFont-Regular;
  animation: ${Pulse} 3s infinite;
`
const Iconos = styled.img`
  width: 60px;
  height: 60px;
  z-index: 99;
`
const Title = styled.div`
  display: flex;
  @media(max-width: 1200px){
    display: block;
  }
`
const Gallery = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-self: center;
`
const Images = styled.img`
  width: 20px;
  height: 20px;
  z-index: 99;
  border: 1px solid #fff ;
  border-radius: 5px;
`

export default App;