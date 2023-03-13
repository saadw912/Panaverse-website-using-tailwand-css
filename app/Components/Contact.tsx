import Heading from "./Heading";
import Button from './Button';
import React from 'react';

const itemsBtn = [
    { link: '#', text: 'Submit' }
  ];
const items = [
    { text: 'Contact Us' }
  ];
  export default function Contact(){
    return(
      <div className="bg-[#eaeaea]">
        <section className="container mx-auto py-10 px-4">
         <React.Fragment>
    {items.map(({ text }) => (
      <Heading key={text} Heading={text} />
    ))}
  </React.Fragment>
  <form className="flex flex-col gap-8">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <input type="text" placeholder="Name" className="inputStyle" required />
        <input type="email" placeholder="Email" className="inputStyle" required />
    </div>
    <input type="text" placeholder="Subject" className="inputStyle" required />
    <textarea rows={6} placeholder="Massage" className="inputStyle" required>
    </textarea>
        <div>
        <React.Fragment>
    {itemsBtn.map(({ link, text }) => (
      <Button key={link} link={link} text={text} />
    ))}
  </React.Fragment> 
        </div>
  </form>
  </section>
  </div>
    );
  }