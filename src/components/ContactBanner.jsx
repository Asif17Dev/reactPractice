import React from 'react'
import styled from 'styled-components'
import Button from './Button'
import PText from './PText'

const ContactBannerStyle = styled.div`
padding:10rem 0 ;
.ContactBanner__wrapper{
    padding:5rem 0;
    text-align:center;
    background-color: var(--deep-dark);
    border-radius:12px;
}
.ContactBanner__heading{
    font-size: 4rem;
    margin-top:2rem;
}
@media only screen and (max-width: 768px){
    .ContactBanner__heading{
        font-size: 2.8rem;
    }
}
`;

export default function ContactBanner() {
    return (
        <ContactBannerStyle>
            <div className='container'>
                <div className='ContactBanner__wrapper'>
                    <PText content='Have a project in mind' />
                    <h3 className='ContactBanner__heading'>Let me help you</h3>
                    <Button btnText="Contact Now" btnLink="#" outline={false}/>
                </div>
            </div>
        </ContactBannerStyle>
    )
}
