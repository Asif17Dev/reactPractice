import React from 'react'
import HeroImg from '../assets/images/hero.png'
import Button from './Button'
import PText from './PText'
import SocialMediaArrow from "../assets/images/social-media-arrow.svg"
import ScrollDownArrow from "../assets/images/scroll-down-arrow.svg"
import styled from 'styled-components'

const HeroStyles = styled.div`

.hero{
    height:100vh;
    min-height:1000px;
    width:100%;
    align-items:center;
    text-align:center;
    justify-content: center;
    position:relative;
    display:flex;
   }
   .hero__heading{
        margin-bottom: -5rem;
        position:relative;
        font-size:2rem;
     span{
         display:inline-block;
         width:100%
     }
     .hero__name{
         font-size:7rem;
         color:var(--white);
         font-family:"montserrat semibold"
     } 
    }
    .hero__img {
         max-width:900px;
         width:100%;
         height:600px;
         margin: 0 auto;
         border:2px solid var(--gray-1);
     }
     .hero__info{
         margin-top:-18em;

        
     }
     .hero__social,.hero__scrollDown{
         position:absolute;
         bottom:20px;
         display:flex;
         flex-direction:column;
         gap:2rem;
     }
     .hero__social{
         left:50px;
     }
     .hero__scrollDown{
         right:50px;
     }
     .hero__social__indicator, .hero__scrollDown{
         width:50px;

         p{
             transform:translateY(-70px) rotate(90deg);
             font-size:1.6rem;
             letter-spacing:0.6rem;
             text-transform:uppercase;
         }
         img{
             margin: 0 auto;
             max-height:45px;
             width:15px;
             object-fit:contain;
         }
     }
     .hero__scrollDown{
         img{
             max-height:70px;
         }
     }
    .hero__social__text{
        ul{
            li{
                margin-bottom: 1rem;
              a{
                transform: rotate(-90deg);
                display: inline-block;
                font-size: 1.6rem;
                letter-spacing: 5px;
                margin-bottom: 2rem;
              }
            }
            
        }
      }

@media only screen  and (max-width: 768px){
.hero{
    min-height:700px;
}
.hero__heading{
    margin-bottom:-3rem;
 
    .hero__name{
 font-size:4.2rem;   
}
}
.hero__img{
    height:300px;
}
.hero__info{
    margin-top:3rem;
}

.hero__social{
    left:0px;
    bottom: -15%;
    width:20px;
.hero__social__indicator{
    width:20px;
    p{
        font-size:1.2rem;
    }
    img{
        max-height:22px;
    }
}
.hero__social__text{
    ul{
        li{
            a{
                font-size:1.2rem;
                margin-bottom:1rem;
            }
        }
    }
}
    }
    .hero__scrollDown{
        width:20px;
        right : 0px;
        gar:1rem;
        p{
            font-size:1.3rem;
        }
    }
}
`;

export default function HeroSecton() {
    return (
        <HeroStyles>
        <div className='hero'>
        <div className='container'>
        <h1 className="hero__heading"> 
            <span>Hello, This is</span>
            <span className='hero__name'>Ayan Khan</span>
            </h1>
            <div className="hero__img">
            <img src={HeroImg} alt="" />
          </div>
          
          <div  className="hero__info">
              <PText  content="I am working as a freelance web designer and developer for 4
              years. I love to design and make new web experiences for the
              people." />
               <Button btnText="See My Works" btnLink="/porjects" outline={false}/>
          </div>

          <div  className="hero__social">
              <div className="hero__social__indicator">
              <p>Follow</p>
              <img src={SocialMediaArrow} alt='SocialMediaArrow' />
              </div>
              <div className="hero__social__text">
              <ul>
                <li>
                  <a
                    href="http://facebook.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    FB
                  </a>
                </li>
                <li>
                  <a
                    href="http://twitter.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    TW
                  </a>
                </li>
                <li>
                  <a
                    href="http://isntagram.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    IG
                  </a>
                </li>
                <li>
                  <a
                    href="http://webcifar.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LI
                  </a>
                </li>
              </ul>
              </div>
          </div>

          <div className="hero__scrollDown">
            <p>Scroll</p>
            <img src={ScrollDownArrow} alt="ScrollDown Arrow" />
          </div>
         
        </div>
            
        </div>
        </HeroStyles>
    )
}
