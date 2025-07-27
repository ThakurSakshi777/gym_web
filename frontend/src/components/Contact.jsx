import React from 'react'
import { useState } from 'react';
import {axios} from "axios";
import {toast} from "react-toastify"
import { sendEmail } from '../../../backend/utils/sendEmail';

const Contact = () => {
  const[name , setName] = useState("");
  const[email , setEmail] = useState(""); 
  const[message , setMessage] = useState("");
  const[loading , setLoading] = useState(false);

  const SendMail = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const {data} = await axios.post(
        "http://localhost:4000/send/mail",
        {
          name,
          email,
          message,
        } ,
        {
          withCredentials:true,
          headers:{"content-Type": "appliction/json"},
        }
      );
      setName("");
      setEmail("");
      setMessage("");
      toast.success(data.message);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast.error(error.response.data.message)
    }
  };

  return (
    <section className='contact'>

      <form onSubmit={sendEmail}>
         <h1>CONTACT US</h1>
         <div>
          <label> Name </label>
          <input type="text" 
          value={name}
          onChange={(e)=>setName(e.target.value)}
           />
         </div>

          <div>
          <label> Email </label>
          <input type="text" 
            value={email}
          onChange={(e)=>setEmail(e.target.value)}
          />
         </div>

          <div>
          <label> message </label>
          <input type="text"
          value={message}
          onChange={(e)=>setMessage(e.target.value)}
           />
         </div>

         <button type="submit" disabled={loading}>
          {loading && <Clipboard size={20}  color="white"/>}
          Send Massage
         </button>
      </form>

    </section>
  )
}

export default Contact