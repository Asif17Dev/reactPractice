import React from 'react'
import Button from './Button'
import PText from './PText'
import SectionTitle from './SectionTitle'
import AboutSecImg from '../assets/images/about-sec-img.png';
import styled from 'styled-components';

const AboutSectionStyle = styled.div`

padding 10rem 0;
.container{
    display:flex;
    align-items:center;
    justify-content:flex-start;
    text-align:left;
}
.aboutSection__left, 
.aboutSection__right{
    flex: 1;
}
.section-title{
text-align:left
}
.para{
    margin: 2rem 0 0;
}
.aboutSection__buttons{
    display:flex;
    justify-content:flex-start;
    align-items:center;
    gap:2rem;
    margin-top:2rem;
}
@media only screen and (max-width:950px){
    .aboutSection__left{
        flex:4;
    }
    .aboutSection__right{
        flex:3;
    }
}
@media only screen and (max-width:768px){
    .container{
        flex-direction:column;
    text-align:center;
    }
    .aboutSection__left, 
.aboutSection__right{
    width:100%
}
.aboutSection__right{
    margin-top:3rem;
}
.section-title{
    text-align:center;
}
.para{
    margin: 0 auto;
}
.aboutSection__buttons{
    flex-direction:column;
    gap:0;
    .button-wrapper,
    a{
        width: 100%;
        text-align:center;
    }

}

}
`;
 
export default function AboutSection() {
    return (
        <AboutSectionStyle>
        <div className='container'>

           <div className='aboutSection__left'>

           <SectionTitle  heading='About Me' subheading='Let me introduce myself'/>

           <PText  content='I am a freelance website designer and developer from Chittagong,
            Bangladesh. I create professional websites. I love art and always try to show 
            unique views to the audience through my design.'/>

            <div className='aboutSection__buttons'>
                <Button btnText='Works' btnLink='/projects' outline={false}/>
                <Button btnText='Read More' btnLink='/about' outline={true}/>
            </div>
           </div>

           <div className='aboutSection__right'>
               <img src={AboutSecImg} alt='AboutImg'/>
           </div>
           
        </div>
          
        </AboutSectionStyle>
    )
}
