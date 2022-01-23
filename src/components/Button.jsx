import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const ButtonStyled = styled.div`
margin-top:2rem;
.button{
    background-color: ${(props)=> props.outline ? 'transparent' : 'var(--gray-1)'};
    padding: 0.7em 2em;
    border-radius:8px;
    color: ${(props)=> props.outline ? 'var(--gray-1)' : 'var(--black)'};
    font-size:2.2rem;
    border: 2px solid var(--gray-1);
    display: inline-block;
}
@media only screen and (max-width: 768px) {
    .button {
      font-size: 1.8rem;
    }
  }
`;

export default function Button(props) {
    return (
        <ButtonStyled  outline={props.outline} className='button-wrapper'>
          <Link className='button' to={props.btnLink}>{props.btnText}</Link>
        </ButtonStyled>
    )
}
