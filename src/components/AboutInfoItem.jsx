import React from 'react'
import styled from 'styled-components'
import PText from './PText'

const AboutInfoItemStyle = styled.div`
display:flex;
align-items:center;
justify-content:flex-start;
margin-top:3rem;
.Items{
    display:flex;
    gap:2rem;
    margin-left:1rem;
}
.item{
    background-color: var(--deep-dark);
    padding:1rem;
    border-radius:8px;
}
.About__heading{
    font-size:2.4rem;
    text-transform:uppercase;
}

@media only screen and (max-width: 768px){
    flex-direction:column;
    align-items:flex-start;
    gap:1rem;

    .About__heading{
        font-size:2rem;
    }
    .Items{
        margin-left:0;
    }
}
`;

export default function AboutInfoItem({
    title='this is title',
    items=['html','css','js']
}) {
    return (
        <AboutInfoItemStyle>
 <h1 className='AboutInfo__heading'>{title}</h1>
  <div className='Items'>
  {items.map((item,index)=>(
  <div className='item' key={index}>
    <PText content={item}/></div>
      ))}
 </div>
 </AboutInfoItemStyle>
    )
}
