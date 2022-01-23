import React from 'react'
import {MdDesktopMac} from 'react-icons/md';
import styled from 'styled-components';
import PText from './PText';

const ServiceItemStyle = styled.div`
text-align:center;
.serviceSection__Icon{
    svg{
        width:3rem;
    }
}
.serviceSection__heading{
    font-size:2.5rem;
    font-family:"montserrat SemiBold"
}
.para{
    margin-top:2rem;
}
`;


export default function ServicesSectionItem({
    icon= <MdDesktopMac />,
    heading = "Heading",
    content =  "content"
}) {
    return (
        <ServiceItemStyle>
            <div className='serviceSection__Icon'>
                {icon}
            </div>
            <div className='serviceSection__heading'>{heading}</div>
            <PText content={content}/>
        </ServiceItemStyle>
    )
}
