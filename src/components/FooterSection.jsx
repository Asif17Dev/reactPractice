import React from 'react'
import styled from 'styled-components'
import FooterCol from './FooterCol'
import PText from './PText'

const FooterSectionStyled = styled.div`
padding-top:10rem;
background-color: var(--deep-dark);
.container{
    display:flex;
    gap:3rem;
}
.footerCol__heading{
    font-size: 3.6rem;
    margin-bottom:1rem;
}
.footer__col1{
    flex:2;
    .para{
        margin:0;
    }
}

.footer-col2,
.footer-col3,
.footer-col4{{
    flex:1;
}}
.copyRight{
    text-align:left;
    padding: 1rem 0;
    margin-top:5rem;
    background-color: var(--dark-bg);
    .para{
        margin-left: 0;
    }
}
@media only screen and (max-width: 768px){
    .container{
        flex-direction:column;
        gap:0;
        & > div{
            margin-top:5rem;
        }
    }
    .footer__col1 .para{
        max-width:100%;
    }
    .copyRight{
        .container{
            div{
                margin-top:0;
            }
        }
    }
}
`;

export default function FooterSection() {
    return (
        <FooterSectionStyled>
            <div className='container'>
                <div className='footer__col1'>
             <h1 className='footerCol__heading'>Ayan Khan</h1>
             <PText content='A freelance web designer and developer from Chittagong, Bangladesh. I always make websites that have unique designs and also has a good performance rate.'/>
                </div>
                <div className='footer-col2'><FooterCol heading='Important Links' links={[
                    {
                        type:'Link',
                        title:'Home',
                        path:"/"
                    },{
                        type:'Link',
                        title:'About',
                        path:'/about'
                    },{
                        type:'Link',
                        title:'Project',
                        path:'/project'
                    },{
                        type:'Link',
                        title:'Contact',
                        path:'/contact'
                    }
                ]}/>  </div>
                <div className='footer-col3'><FooterCol
            heading="Contact Info"
            links={[
              {
                title: '+88012312',
                path: 'tel:+88012312',
              },
              {
                title: 'webcifar@gmail.com',
                path: 'mailto:webcifar@gmail.com',
              },
              {
                title: 'GEC Circle, Chittagong, Bangladesh',
                path: 'http://google.com/maps',
              },
            ]}
          /></div>
                <div className='footer-col4'><FooterCol
            heading="social Links"
            links={[
              {
                title: 'Facebook',
                path: 'http://facebook.com',
              },
              {
                title: 'Twitter',
                path: 'http://twitter.com',
              },
              {
                title: 'Instagram',
                path: 'http://instagram.com',
              },
            ]}
          />
          </div>
          </div>

            <div className='copyRight'>
            <div className="container">
          <PText content='© 2021 - Ayan Khan | Designed By web cifar'/>
         
        </div>
            </div>
           
        </FooterSectionStyled>
    )
}
