import React from 'react'
import SectionTitle from './SectionTitle'
import ServicesSectionItem from './ServicesSectionItem'
import { MdCode, MdDesktopMac, MdPhonelinkSetup } from 'react-icons/md'
import styled from 'styled-components'

const ServiceSectionStyle = styled.div`
padding:10rem 0;

.services__allItems{
    display:flex;
    justify-content:space-between;
    margin-top:5rem;
    gap:10rem;
}

@media only screen and (max-width: 768px){
    .services__allItems{
        margin: 0 auto;
        flex-direction:column;
        max-width:350px;
        margin-top:5rem;
        gap:5rem;
    }
}
`;

export default function ServiceSection() {
    return (
        <ServiceSectionStyle>
            <div className='container'>
                <SectionTitle heading='services' content='What i will do for you'/>
                <div className='services__allItems'>
                    <ServicesSectionItem icon= {<MdDesktopMac />} heading='Web design'
                     content='I do ui/ux design for the website that helps website to get a unique look.'/>
                    <ServicesSectionItem icon={<MdCode />} heading='web dev'
                     content='I also develop the websites. I create high performance website with blazing fast speed.'/>
                     <ServicesSectionItem icon={<MdPhonelinkSetup />} heading='app  dev'
                     content='I develop mobile application. I create mobile app with eye catching ui.'/>
                </div>
            </div>
        </ServiceSectionStyle>
    )
}
