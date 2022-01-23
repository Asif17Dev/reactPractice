import React from 'react'
import SectionTitle from './SectionTitle'
import { Swiper, SwiperSlide } from 'swiper/react';
import projects from '../assets/data/projects';
import ProjectsSectionItems from './ProjectsSectionItems';
import styled from 'styled-components';
import SwiperCore,{Navigation} from 'swiper';
import "swiper/css";
import "swiper/css/navigation"
SwiperCore.use([Navigation]);

const ProjectSectionStyle = styled.div`
padding:10rem 0;
.projectAll__Items{
    display:flex;
    gap:3rem;
    margin-top:5rem;
}
.swiper{
    padding-top:8rem;
    max-width:100%;
}

.swiper-button-prev,
.swiper-button-next{
    position:absolute;
    right:60px;
    left: auto;
    background-color:var(--deep-dark);
    color: var(--gray-1);
    width:50px;
    height:50px;
    border-radius:8px;
    z-index:10;
    top:0;
    transform:translateY(50%);
}
.swiper-button-next{
    right:0;
}
.swiper-button-prev::after,
.swiper-button-next::after{
    font-size:2rem;
}
@media only screen and (max-width: 768px){
    .projectAll__Items{
        margin: 0 auto;
        margin-top:10rem;
        max-width:400px;
        flex-direction:column;
        gap:5rem;
        .projectitem__img{
            width:100%;
        }
    }
}
`;

export default function ProjectSection() {
    return (
        <ProjectSectionStyle>
            <div className='container'>
            <SectionTitle subheading='some of my recent works' heading='Projects'/>
           <div className='projectAll__Items'>
          
            <Swiper spaceBetween={30} slidesPerView={1} navigation 
            breakpoints={{
                640:{
                    slidesPerView:1,
                },

                768:{
                    slidesPerView:2,
                },
                1200:{
                    slidesPerView:3,
                }
            }}>
            {projects.map((project)=>{
                return(<SwiperSlide>
                <ProjectsSectionItems key={project.id}
                img={project.img} title={project.name} desc={project.desc} />
                </SwiperSlide>);
            })}
            </Swiper>
           </div>
            </div>
        </ProjectSectionStyle>
    )
}
