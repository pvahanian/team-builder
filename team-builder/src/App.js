import React, { useState, useEffect } from 'react'
import './App.css';
import Form from './components/Form'
import axios from './axios'

const dummyList = [
  { name: 'Fido', email: 'dog@dog.com', role:'doggy'},   // this is default first thing that shows up on page
]

const initialFormValues = { // this is the intial values and used to reset the submit button
  name: '',
  email: '',
  role: '',
}
export default function App() {
const [workers, setWorker] = useState(dummyList)   //This holds my workers and adds new workers with setWorker
const [formValues, setFormValues] = useState(initialFormValues) // this holds my intiallist and resets with that same list

  const updateForm = (inputName, inputValue) => {
    setFormValues({ ...formValues, [inputName]: inputValue })
  }

  const submitForm = () => {
      const newWorker = {
        name: formValues.name.trim(),
        email: formValues.email.trim(),
        role: formValues.role.trim(),
      }

    //  b) prevent further action if either username or email or role is empty string after trimming
    if (!newWorker.name || !newWorker.email || !newWorker.role) {
      return
    }
    //  c) POST new friend to backend, and on success update the list of friends in state with the new friend from API
    //  d) also on success clear the form
   
    axios.post('fakeapi.com', newWorker)  //newfriend is res.data
      .then(res => {
        
        setWorker([res.data, ...workers])
        setFormValues(initialFormValues)
       
      })
      .catch(err => {
        debugger
      })
  }

  useEffect(() => {
    axios.get('fakeapi.com').then(res => setWorker(res.data))
  }, [])



    return (
      <div className='container'>
        <h1>Form App</h1>
        <Form
          // 🔥 STEP 2 - The form component needs its props.
          //  Check implementation of FriendForm
          //  to see what props it expects.
          values={formValues}
          update={updateForm}
          submit={submitForm}
        />
      {
        workers.map((worker, idx) => {
          return <div key={idx}>{worker.name} has an email of {worker.email} and works as a {worker.role}</div>
        })
       }
      </div>
    )
  }


  





{/* <div className='container'>
<h1>Workers Form</h1>

{
  workers.map((worker, idx) => {
    return <div key={idx}>{worker.name} has an email of {worker.email} and works as a {worker.role}</div>
  })
}

<form onSubmit={submit}>
  <input name='name' type="text" value={formValues.name} onChange={change} />
  <input name='email' type="text" value={formValues.email} onChange={change} />
  <input name='role' type="text" value={formValues.role} onChange={change} />
  <button>submit</button>
</form>
</div> */}


 // const change = evt => {  
  //   // change code
  //   const { name, value } = evt.target
  //   setFormValues({ ...formValues, [name]: value}) // name will be either role/name/email
  // }
  // const submit = evt => {
  // // submit code
  
  // evt.preventDefault()
  //     const newWorker = {
  //       name: formValues.name.trim(),
  //       email: formValues.email.trim(),
  //       role: formValues.role.trim(),
  //   }
   
  //   setWorker([...workers, newWorker])
  //   setFormValues(initialFormValues)
  // }
