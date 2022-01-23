import React from 'react';
import styled from 'styled-components';
import SectionTitle from '../components/SectionTitle'
import ContactInfoItem from '../components/ContactInfoItem'
import { MdEmail, MdLocalPhone } from 'react-icons/md';
import ContactForm from './ContactForm';
import MapStyles from './Map';


const ContactSectionStyle = styled.div`
padding:10rem 0;
.ContactSection__wrapper{
    display:flex;
    margin-top:7rem;
    justify-content:space-between;
    gap:5rem;
    position:relative;
}
.ContactSection__wrapper::after{
    content:'';
    height:50%;
    width:2px;
    position:absolute;
    left:50%;
    top:30%;
    background-color:var(--gray-1);
    transform:translate(-50%,-50%);
}
.ContactSection__left, .ConatctSection__right{
    width:100%;
    max-width:500%;
}

@media only screen and (max-width: 768px){
    .ContactSection__wrapper{
      flex-direction:column;
    }
    .ContactSection__wrapper::after{
        display:none;
    }
    .ContactSection__left, .ConatctSection__right{
        max-width:100%;
    }
    .ConatctSection__right{
        padding: 10rem 2rem 2rem;
    }

}
`;

export default function ContactSectionPage() {
  return <ContactSectionStyle>
      <div className='container'>
          <SectionTitle heading='Contact' subheading='Get In Touch'/>
          <div className='ContactSection__wrapper'>
              <div className='ContactSection__left'>
                  <ContactInfoItem icon={<MdLocalPhone />} text='+8801231' />
                  <ContactInfoItem icon={<MdEmail />} text='webcifar@gmail.com'/>
                  <ContactInfoItem  text='Chittagong, Bangladesh' />
              </div>
              <div className='ConatctSection__right'>
                  <ContactForm />
              </div>
          </div>
      </div>
      <MapStyles />
  </ContactSectionStyle>;
}
