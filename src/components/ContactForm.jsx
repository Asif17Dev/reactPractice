import React,{useState} from 'react';
import styled from 'styled-components';

const FormStyle = styled.form`
width:100%;
.Form-Group{
    width:100%;
    margin-bottom:2rem;
}

label{
        font-size:1.8rem;
    }

input,textarea{
    font-size:2rem;
    padding:1.2rem;
    margin-top:1.8rem;
    outline:none;
    border:none;
    background-color: var(--deep-dark);
    color: var(--gray-1);
    width:100%;
    border-radius:8px;
}
textarea{
    resize:vertical;
    min-height:25rem;
}
button[type='submit']{
    background-color: var(--gray-1);
    color:var(--black);
    padding: 1rem 4rem;
    outline:none;
    border:none;
    font-size:2rem;
    border-radius:8px;
    display:inline-block;
    cursor:pointer;
}

`;

export default function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
  return <div>
  <FormStyle>
  <div className='Form-Group'>
          <label htmlFor='name'>Your Name</label>
          <input id='name' name='name' value={name} onChange={(e)=>setName(e.target.value)} />
      </div>
      <div className='Form-Group'>
          <label htmlFor='email'>Your Email</label>
          <input id='email' name='email' value={email} onChange={(e)=>setEmail(e.target.value)} />
      </div>
      <div className='Form-Group'>
          <label htmlFor='message'>Your Message</label>
          <textarea id='message' name='message' value={message} onChange={(e)=>setMessage(e.target.value)} />
      </div>
      <button type='submit'>Sent</button>
  </FormStyle>
     
  </div>;
}
