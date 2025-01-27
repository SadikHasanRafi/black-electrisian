import React, { useState } from 'react';
import CheckEmail from './CheckEmail';
// import swal from 'sweetalert';
import './MakeAdmin.css'
const MakeAdmin = () => {
    const[email,setEmail]=useState('');
    const[success,setSuccess]=useState(false)
    const handleonBlur=e=>{
       setEmail(e.target.value)
    }
    const handleAdmin=e=>{
        const user={email}
        fetch('https://black-electrisian.onrender.com/userLogin/admin',{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
         body:JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount){
              
                        console.log(data)
                     setSuccess(true)
                     alert('confarm admin success')
            }
          
        })
           
       
        e.preventDefault()
    }
    return (
        <div>
            <h2 className='text-white'>Make Add Admin</h2>
           <div>

           <form onSubmit={handleAdmin}>
            <label htmlFor='email' className='emails'>
          Email:
        </label>
        <br />
        <input
          type='email'
          name='email'
          id='email'
          onBlur={handleonBlur}
          required
        //   className=' outline-none px-3 py-2 '
        className=' outline-none px-3 py-2 admin-design '
        />
        <button className='button-admin ms-2' type="submit">Make Admin</button>

        {/* {
                success &&
                // <h1 className="color:red">Success new admin </h1>
                swal("Admin Add Successful!", "You are new admin!", "success")
            } */}
            </form>
            
           </div>
           <div className='mt-5'>

            <CheckEmail></CheckEmail>

           </div>
           
        </div>
    );
};

export default MakeAdmin;