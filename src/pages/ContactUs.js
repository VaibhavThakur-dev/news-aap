import React, { useRef, useState } from 'react'
import axios from 'axios'
import Navbar from '../component/Navbar'
import { Link } from 'react-router-dom'

function ContactUs() {

 const [name,setName]=useState(null);
 const [email,setEmail]=useState(null);
 const [subject,setSubject]=useState(null);
 const [message,setMessage]=useState(null);

 const [send,setSend] = useState("Send Message");
  const formRest = useRef(null);
 

   let submit =  (event)=>{
        event.preventDefault();
        setSend("Sending...");
      axios.defaults.headers.post['Content-Type'] = 'application/json';
     axios.post('https://formsubmit.co/ajax/c6eec5600391c21cac5c07dfb021fc8a', {
          name,email,subject,message
      })
          .then(response =>
            alert(response.data.message,
              formRest.current.reset(),
              setSend("Send Message"))
            
            )
          .catch(error => console.log(error));

          
        }

  return (
    <>
      <Navbar/>
      <section class="bg-white dark:bg-gray-900 h-screen flex flex-col justify-between items-center">
      <div className='flex gap-3 text-lg p-4'><Link to={'/'}>Home</Link> | <Link className='cursor-not-allowed text-gray-400'>Contact Us</Link></div>
  <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Us</h2>
      <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
    
      <form  class="space-y-8" onSubmit={submit} ref={formRest} >
      <input type="hidden" name="_captcha" value="false"/>
      <input type="hidden" name="_template" value="table"/>
      <div>
              <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Name</label>
              <input type="text" onChange={(e)=>{setName(e.target.value)}} name='name' id="name" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required />
          </div>
          <div>
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
              <input type="email" onChange={(e)=>{setEmail(e.target.value)}} name='email' id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required />
          </div>
          <div>
              <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
              <input type="text" onChange={(e)=>{setSubject(e.target.value)}} name='subject' id="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required />
          </div>
          <div class="sm:col-span-2">
              <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
              <textarea id="message" onChange={(e)=>{setMessage(e.target.value)}} name='message' rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
          </div>
          <button type="submit"  class="py-3 px-5 text-sm font-bold text-center text-white rounded-lg  bg-gray-900 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">{send}</button>
      </form>
  </div>
</section>
    </>
  )
}

export default ContactUs