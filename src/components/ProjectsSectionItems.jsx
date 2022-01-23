import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const ProjectItemStyle = styled.div`
.projectitem__img{
width:100%;
height:400px;
overflow:hidden;
display:inline-block;
border: 2px solid var(--gray-2);
border-radius:12px;

img{
    height:100%;
}
}
.projectItem__info{
    padding:1rem;
    margin-top:1rem;
    background-color:var(--deep-dark);
    border-radius:12px;
}
.projectItem__title{
    font-size:2.2rem;
}
.projectItem__desc{
    font-size:1.6rem;
    font-family: 'RobotoMono Regular';
    margin-top:1rem;
}
@media only screen and (max-width: 768px){
    .projectitem__img{
        height:350px;
    }
}
`;

export default function ProjectsSectionItems(props) {
    return (
        <ProjectItemStyle>
            <Link to="/project" className='projectitem__img'><img src={props.img} alt='projrct-img'/></Link>
            <div className='projectItem__info'>
                <Link to="#">
                <h3 className='projectItem__title'>{props.title}</h3>
                </Link>
                <p className='projectItem__desc'>{props.desc}</p>
            </div>
        </ProjectItemStyle>
    )
}
