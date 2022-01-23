import React from 'react';
import {MdPlace} from 'react-icons/md'
import styled from 'styled-components';
import PText from '../components/PText'

const InfoItemStyle = styled.div`
padding:2rem;
align-items:center;
display:flex;
gap:2rem;
margin-bottom:2rem;
border-radius:8px;
background-color:var(--deep-dark);

.Contact__icon{
background-color:var(--gray-2);
color:var(--white);
padding:1.3rem;
align-items:center;
border-radius:50%;
justify-content:center;

}
svg{
    width:3.5rem;
}
`;

export default function ContactInfoItem({
    icon=<MdPlace />,
    text='this is info',
}) {
  return <InfoItemStyle>
      <div className='Contact__icon'>{icon}</div>
      <div>
          <PText content={text}/>
      </div>
  </InfoItemStyle>;
}
