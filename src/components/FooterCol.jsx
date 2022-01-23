import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const FooterColStyle = styled.div`
.heading{
    font-size:2.4rem;
    margin-bottom:2rem;
}
li{
    margin-bottom:1rem;
}
a{
    font-size:1.8rem;
}
`;

export default function FooterCol({
    heading = 'heading', 
    links = [
        {
            type:'Links',
            title:'Home',
            path:'/home'
        },{
            type:'Links',
            title:'Home',
            path:'/home'
        }
    ]}) {
    return (
        <FooterColStyle>
            <h1 className='footerCol__heading'>{heading}</h1>
            <ul>
            {links.map((item,index) =>(
                    <li key={index}>
                    {item.type === 'Links' ? (
                        <Link to={item.path}>{item.title}</Link>
                        )
                    : (
                        <a href={item.path}>{item.title}</a>
                        )}
                    </li>
                ))
                
            }
            </ul>
        </FooterColStyle>
    )
}
