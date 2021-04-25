import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { Text } from './styled';
import Drizzle from '../src/image/Drizzle.png'
import Nieve from '../src/image/nieve.png'
import Lluvia from '../src/image/lluvia.png'
import Trueno from '../src/image/trueno.png'
import CLOUDS from '../src/image/CLOUDS.png'
import Clear from '../src/image/Clear.png'
export const France = () => {
    const [data, setData] = useState([])
    const [rangeId, setRangeId] = useState('')
    useEffect(() => {
        const getWeather = async () => {
            const API_KEY = 'adee6704d0e99eb1da39878cac370953';
            if (API_KEY) {
                const path = `https://api.openweathermap.org/data/2.5/weather?q=francia&appid=${API_KEY}&units=metric`;
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
        <ContainerCard>
       <ContainerImage>
       <>
              {rangeId >= 200 && rangeId < 232 ?
                <>
                  <Iconos src={Trueno} />
                  <Text align='center' color='#fff'>Tormenta</Text>
                </>
                : rangeId >= 300 && rangeId <= 321 ?
                  <>
                    <Iconos src={Drizzle} />
                    <Text align='center' color='#fff' size='7px'>Llovizna</Text>
                  </>
                  : rangeId >= 500 && rangeId <= 521 ?
                    <>
                      <Iconos src={Lluvia} />
                      <Text align='center' color='#fff' size='7px'>LLuvia</Text>
                    </>
                    : rangeId >= 600 && rangeId <= 622 ?
                      <>
                        <Iconos src={Nieve} />
                        <Text align='center' color='#fff' size='7px'>Nieve</Text>
                      </>
                      : rangeId >= 701 && rangeId <= 781 ?
                        <Text align='center' color='#fff' size='7px'>Atmósfera</Text>
                        : rangeId === 800 ?
                          <>
                            <Iconos src={Clear} />
                            <Text align='center' color='#fff' size='7px'>cielo limpio</Text>
                          </>
                          : rangeId >= 801 && rangeId <= 804 ?
                            <>
                              <Iconos src={CLOUDS} />
                              <Text align='center' color='#fff' size='7px'>Nubes Nubladas</Text>
                            </>
                            :
                            <Text align='center' color='#fff' size='7px'>...</Text>
              }

            </>
       </ContainerImage>
       <ContainerInfo>
         <Box>
            <Text size='20px' align='center'>{data?.main?.temp}<Grades>°c</Grades></Text>
         </Box>
         <Box direction='column' >
            <Text  align='center' size='15px'>{data?.sys?.country}</Text>
            <Text  align='center'  size='10px'>{data?.name}</Text>
         </Box>
       </ContainerInfo>
        </ContainerCard>
        <ContentInfo>
        <Text size='10px'>Humedad :{data?.main?.humidity}%</Text>
        <Text size='10px'>Este</Text>
        </ContentInfo>
    </Container>
    )
}
const ContainerCard = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`
const Box = styled.div`
  display: flex;
  align-items: center;
  flex-direction: ${({ direction })=> direction ? direction : 'row'};
  border-right: 1px solid #ccc;
  margin: 17px 0px;
  &:last-child{
    border-right: none;
  
  }
`
const ContentInfo = styled.div`
    display: flex;
    flex-direction: row;
    padding: 10px;
`
const Container = styled.div`
    display: flex;
    flex-direction: column;
    box-shadow: 7px 8px 20px 3px #cac9cebf;
    border-radius: 20px;
`
const ContainerImage = styled.div`
    border-radius: 15px;
    background-color:  #7d69dd85;
    height: 60px;
    display: flex;
    justify-content: center;
    width: 100px;
    flex-direction: column;
    align-items: center;

`
const ContainerInfo = styled.div`
   display: flex;
  flex-direction: row;
`
const Iconos = styled.img`
  width: 40px;
  height: 40px;
  z-index: 99;
`
const Grades = styled.span`
 font-size: 10px;
 color: gray;
 position: absolute;
`