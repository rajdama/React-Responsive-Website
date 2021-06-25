import React, { useState } from 'react';

function Contact() {
    const [formdata, Formdata] = useState({Name:'',
                                     Email:'',
                                     phone_number:''})
const formSubmit = (e)=>{
    e.preventDefault()
   alert(`Hello ${formdata.Name} your email ${formdata.Email} and phone number ${formdata.phone_number} is recorded successfully !`)
    
}
const inputEvent = (event)=>{
 const {name,value} = event.target
 Formdata((preVal)=>{
     return {
         ...preVal,
         [name] : value
     }
 })
}
    return (
        <>
            <div>
                <h1 className='my-3 text-center'>Contact</h1>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-md-6  col-10 mx-auto">
                        <form onSubmit = {formSubmit}>
                            <div class="mb-3">
                                <label for="exampleInputEmail1"  class="form-label">Name</label>
                                <input type="text" name='Name' value = {formdata.Name} onChange={inputEvent} class="form-control" id="myname" aria-describedby="emailHelp" />
                                
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1"  class="form-label">Email address</label>
                                <input type="email" name='Email' class="form-control" value = {formdata.Email} onChange={inputEvent} id="exampleInputEmail1" aria-describedby="emailHelp" />
                                
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Phone number</label>
                                <input type="text" name='phone_number' value = {formdata.phone_number} onChange={inputEvent} class="form-control" id="myphonenumber" />
                            </div>
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
