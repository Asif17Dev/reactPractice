import React from 'react'
import Button from '../components/Button'
import PText from '../components/PText'
import AboutImage from '../assets/images/about-page-img.png'
import styled from 'styled-components'
import AboutInfoItem from '../components/AboutInfoItem'
import ContactBanner from '../components/ContactBanner'


const AboutStyle = styled.div`
padding: 10rem 0;
.About__top__section{
    display:flex;
    align-items:center;
    justify-content:center;
    gap:2rem;
}
.About__left{
flex:3;
}

.About__right{
flex:2;

.right-img{
border: 2px solid var(--gray-1);
max-width:100%;
max-height:100%;
}
}
.About__left{
    .About__subHeading{
        font-size:2rem;
        margin-bottom:2rem;
  span{
      background-color:var(--deep-dark);
      padding: 0.5rem;
      border-radius:8px;
  }
    }
    .About__heading{
        font-size:3.8rem;
        margin-bottom:2rem;
    }
.About__info{
    .para{
        max-width:100%;
        margin-bottom:2rem;
        font-size:1.8rem;
    }
}
}
.About__info__items{
    margin-top:15rem;
 
}
.About__info__item{
    margin-bottom:10rem;
}
.About__heading{
    font-size:3.6rem;
    text-transformation:uppercase;
}
@media only screen and (max-width: 768px){
padding:10rem 0;

.About__top__section{
    flex-direction: column;
      gap: 5rem;
}

.About__info__heading{
    font-size:3rem;
}
}
`;

export default function About() {
    return (
        <AboutStyle>
        <div className='container'>
            <div className='About__top__section'>
             <div className='About__left'>
             <p className='About__subHeading'>Hi, I am <span>Ayan Khan</span></p>
             <h2 className='About__heading'>A freelance Web developer</h2>
                 <div className='About__info'>
               
                 <PText content='I am from chittagong, Bangladesh. A place of beauty and nature. Since my childhood, 
                 i love art and design. I always try to design stuff with my unique point of view. I also love to
                  create things that can be usefull to others.' />
               
                  <PText content='I started coding since I was in high school. Coding is also an art for me. I love it and now I 
                have the opportunity to design along with the coding. I find it really interesting and I enjoyed 
                the process a lot.'/>
               
                  <PText content=' My vision is to make the world a better place. Now almost everything is becoming better than ever.
                 It is time for us to create more good stuff that helps the world to become a better place.' />
                 </div>

                 <Button btnLink={"#"} btnText={"Download"} outline={false}/>
             </div>

             <div className='About__right'>
                 <div className='right-img'>
                  <img src={AboutImage} alt='AboutImage' />
                 </div>
             </div>
            </div>

            <div className='About__info__items'>
                <div className='About__info__item'>
                <h1 className='About__info__heading'>Education</h1>
                <AboutInfoItem title='School' items={['Nasirabad Govt. High School, Chattogram']} />
                <AboutInfoItem title='Collage' items={['BAF Shaheen College Chattogram']} />
                <AboutInfoItem title='Varsity' items={['University Of Chitiagong']} />
                </div>

                <div className='About__info__item'>
                <h1 className='About__info__heading'>MY SKILLS</h1>
                <AboutInfoItem title='FrontEnd' items={['HTML','CSS','JavaScript','React']} />
                <AboutInfoItem title='BackEnd' items={['Node','Express','php']} />
                <AboutInfoItem title='Design' items={['photoshop','After Effects','Figma']} />
                </div>

                <div className='About__info__item'>
                <h1 className='About__info__heading'>EXPERIENCES</h1>
                <AboutInfoItem title='2010-2012' items={['junior developer at web Cifar']} />
                <AboutInfoItem title='2012-2016' items={['Front end developer at web Cifar']} />
                <AboutInfoItem title='2016-' items={['Freelance web Developer']} />
                </div>
            </div>

            <ContactBanner />
        </div>
        
        </AboutStyle>
        )
}
