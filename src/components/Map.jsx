import React from 'react';
import styled from 'styled-components';
import PText from './PText';
import MapImg from '../assets/images/map.png'

const MapStyles = styled.div`
margin-top:10rem;
background:url(${MapImg}) no-repeat center / cover;
min-height:400px;
width:100%;
position:relative;
.container{
    min-height:400px;
    position:relative;
}
.map__card{
    position:absolute;
    max-width:300px;
    width:100%;
    padding:2rem;
    right:10%;
    bottom:10%;
    border-radius:12px;
    background-color: var(--deep-dark);
    color:var(--gray-1);
}
.Map__card__heading{
    font-size:3rem;
    margin-bottom:1rem;
}
.map__card__link{
display:inline-block;
margin-top:3rem;
font-size:1.6rem;
text-decoration:underline;
}

@media only screen and (max-width: 768px){
background-position: 80% center;
}

@media only screen and (max-width: 400px){
.map__card{
    max-width:none;
    right:auto;
}
}
`;

export default function Map() {
  return <MapStyles>
      <div className='container'>
      <div className='map__card'>
      <h3 className='Map__card__heading'>Here is me</h3>
          <PText content='GEC circle, Chittagong, Bangladesh'/>
          <a className='map__card__link' href='https://goo.gl/maps/7hSSfGRsQ9d2HLda8'>
          Open in google map  
          </a>
      </div> 
      </div>
  </MapStyles>;
}
