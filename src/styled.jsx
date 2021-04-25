import styled, { css } from 'styled-components'
import img from '../src/image/bgBogota.png';
import VisitCountry from '../src/image/singapure.PNG';
import Valparaiso from '../src/image/Valparaiso.jpg';
import { IconBefore } from './assets/icons';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: hsl(0, 0%, 90%);
    transition: background-color 300ms;
`
export const Content = styled.div`
    min-width: 80%;
    width: 80%;
    margin: auto;
    box-shadow: 5px 5px 3px hsl(210deg 11% 82%);
    background-color: #ffff;
    border-radius: 30px;
`
export const Card = styled.div`
    right: 0;
    position: absolute;
    height: auto;
    top: -100px;
    box-shadow: #78b6f59e;
    background-color: #ffff;
    border-radius: 20px;
    @media(max-width: 1200px){
        position: relative;
        top: inherit;
        height: auto;
        justify-content: center;
        display: flex;
        align-items: center;
        align-self: center;
    }
`
export const ContentCard = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`
export const VisitCity = styled.div`
    width: 100%;
    height: 100%;
    background-color: #ffff;
    background-image: url(${VisitCountry});
    background-position: center center;
    background-repeat: no-repeat;
    border-radius: 20px;
    @media(max-width: 1200px){
     display: none;
    }
`
export const CardImage = styled.div`
    width: 100%;
    display: flex;
    background-color: #ffff;
    background-image: url(${Valparaiso});
    background-position: center center;
    background-repeat: no-repeat;
    border-radius: 20px;
    &:last-child{
        margin-top: 50px;
        height: 50%;
    }
    @media(max-width: 1200px){
        &:last-child{
            margin-top: 5px;
        }
    }
`
export const ContentGrid = styled.div`
    display: grid;
    gap: 10px;
    width: 85%;
    position: relative;
    grid-template-columns: repeat(auto-fill, minmax(20%, 1fr));
    margin: ${({ margin }) => margin ? margin : '40px auto'};  
    @media(max-width: 1200px){
        flex-direction: column-reverse;
        display: flex;
        grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
    }
    ${props => props.responsive &&css`
    @media(max-width: 1200px){
        display: none;
    }
    `}
    
`
export const BgImage = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 20px;
    background-image: url(${img});
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
`
export const CityIcon = styled.div`
    height: auto;
    width: 100%;
    background-color: #33308f;
    border-bottom-right-radius: 21px;
    border-top-right-radius: 18px;
    border-bottom-left-radius: 13px;
    &::after{
            content: url(${ IconBefore });   
            position: absolute;
            top: -100px;
            left: 100px;
    }
`
export const RoundGrades = styled.div`
    width: 60%;
    display:flex;
    align-items: center;
    justify-content: center;
    background-color: hsl(250deg 63% 64%);
    border-radius: 20px;
`
export const Icon = styled.div`
    position: absolute;
    z-index: 99999;
    top: -15px;
    right: 40px;

`
export const IconTwo = styled(Icon)`
    top: 100px;
    -webkit-transform: rotate(
90deg
);
    -ms-transform: rotate(90deg);
    transform: rotate(
90deg
);
    right: 41.2px;
`
export const ContentInfo = styled.div`
    width: 100%;
    display:flex;
    align-items: center;
    justify-content: center;
`
export const Image = styled.img`
    position: absolute;
    right: 30px;
    top: 30px;
    width: 40px;      
    max-width: 40px;   
    @media(max-width: 1200px){
        display: none;
    }   
`
export const Text = styled.h2`
    color: ${({ color }) => color ? color : '#000'};
    text-align: ${({ align }) => align ? align : 'start'};
    font-family: ${({ family }) => family ? family : 'PFont-Regular'};
    ${({ size }) => size && css`font-size: ${size};`}
    ${({ margin }) => margin && css`margin: ${margin};`}
    ${({ width }) => width && css`width: ${width};`}
    ${({ bold }) => bold && css`font-weight: ${bold};`}
    ${props => props.border &&css`border-right: 1px solid ;` }
    ${props=> props.media &&css`
    @media(max-width: 1200px){
        text-align: center;
    }
    
    `}
  ${props => props.position &&css`
        position: absolute;
        top: 50px;
  `}
`
export const TextBox = styled.div`
    display: flex;
    width: 50%;
    height: 100%;
    @media(max-width: 1200px){
        width: 100%;
    }
`
export const ContainerBg = styled.div`
    width: 90%;
    min-width: 90%;
    height: 200px;
    margin: 0 auto;
    border-radius: 20px;
    margin-top: 40px;
`
export const ContainerInfo = styled.div`
    width: 100%;
    position: relative;
`
export const ContentForecast = styled.div`
    display: flex;
    justify-content: space-between;
    border: .3px solid #80808063;
    border-radius: 20px;
    margin-top: 10px;
    box-shadow: 1px 19px 17px 0px #00000021;
    @media(max-width: 1200px){
        justify-content: flex-start;
    }
`
export const CardInfo = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column; 
    text-align-last: center;
    background-color: #7d68e9;
    height: min-content;
    width: 100px;
    z-index: 99;
    top: 0; 
    bottom: 0; 
    box-shadow: 1px 19px 17px 0px #00000061;
    margin: auto; 
    border-bottom-right-radius: 21px;
    border-top-right-radius: 21px;
`