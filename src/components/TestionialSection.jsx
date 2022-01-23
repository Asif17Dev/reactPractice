import React, { useState } from 'react'
import { MdArrowBack, MdArrowForward } from 'react-icons/md'
import { CSSTransition , SwitchTransition } from 'react-transition-group'
import styled from 'styled-components'
import PText from './PText'
import SectionTitle from './SectionTitle'
import testimonials from '../assets/data/testimonials'

const TestimonialSectionStyle = styled.div`
padding:10rem 0;
text-align:center;
.testimonial__wrapper{
margin:0 auto;
max-width:700px;
position:relative;
}
.testimonial-info{
    width:100%;
    padding:3rem;
    border-radius:12px;
    background-color: var(--deep-dark);
    height:fit-content;
    margin-top:5rem;
}
.testimonial-desc{
    .para{
        text-align:center;
    }
}
.testimonial-name{
    font-size:2.2rem;
    font-family:'montserrat SemiBold';
    margin-top:4rem;
}
.testimonial-title{
    font-size:1.6rem;
    margin-top:0.6rem;
}
.arrows{
    margin-top:2rem;
    display:flex;
    text-align:center;
    align-items:center;
    justify-content:center;
    svg{
        width:30px;
        pointer-events:none;
    }
    .arrow-prev, .arrow-next{
        margin: 0 0.5rem;
        padding: 0.5rem 2rem;
        background-color:var(--deep-dark);
        width:fit-content;
        border-radius:8px;
        cursor:pointer;
    }
}
.fade-enter {
    opacity: 0;
    transform: scale(0.96);
    z-index: 1;
  }
  .fade-enter-active {
    opacity: 1;
    transform: scale(1);
    transition: 250ms ease-in;
    transition-property: transform, opacity;
    z-index: 1;
  }
  .fade-exit {
    transform: scale(1);
    opacity: 1;
  }
  .fade-exit-active {
    opacity: 0;
    transform: scale(0.96);
    transition: 200ms ease-in;
    transition-property: transform, opacity;
  }
`;

export default function TestionialSection() {
    const [ActiveIndex,setActiveIndex] = useState(2);
    const ActiveSlide = testimonials[ActiveIndex];

    function handleNext(){
        if(ActiveIndex >= testimonials.length -1){
            setActiveIndex(0);
        }else{
            setActiveIndex((oldIndex)=>oldIndex + 1);
        }
    }
    function handlePrev(){
        if(ActiveIndex <= 0){
            setActiveIndex(testimonials.length - 1);
        }else{
            setActiveIndex((oldIndex)=>oldIndex - 1);
        }
    }
    return (
        <TestimonialSectionStyle>
        <div className='container'>
            <SectionTitle subheading='see what our clients say about us' heading='TESTIMONIALS'/>
        <div className='testimonial__wrapper'>
            <SwitchTransition component={null}>
                <CSSTransition classNames="fade" key={ActiveSlide.id} timeout={300}>
                 <div className='testimonial-info'>
                  <div className='testimonial-desc'>
                      <PText content={ActiveSlide.desc} />
                  </div>
                  <h2 className='testimonial-name'>{ActiveSlide.name}</h2>
                  <p className='testimonial-title'>{ActiveSlide.title},{ActiveSlide.org}</p>
                 </div>
                </CSSTransition>
            </SwitchTransition>
        </div>
        <div className='arrows'>
            <div className='arrow-prev' onClick={handlePrev}>
                <MdArrowBack />
            </div>
            <div className='arrow-next' onClick={handleNext} role="button">
                <MdArrowForward />
            </div>
        </div>
        </div>
            
        </TestimonialSectionStyle>
    )
}
