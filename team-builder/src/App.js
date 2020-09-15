import React, { useState, useEffect } from 'react'
import './App.css';
import Form from './components/Form'
import axios from './axios'

const dummyList = [
  { name: '', email: '', role:''},   // this is default first thing that shows up on page
]

const initialFormValues = { // this is the intial values and used to reset the submit button
  name: '',
  email: '',
  role: '',
}
export default function App() {
const [workers, setWorker] = useState(dummyList)   //This holds my workers and adds new workers with setWorker
const [formValues, setFormValues] = useState(initialFormValues) // this holds my intiallist and resets with that same list

  const updateForm = (inputName, inputValue) => {       // Updates formValues by bringing in what Name needs updating and what values will it change to.
    setFormValues({ ...formValues, [inputName]: inputValue })  // Spreads object to add a value to given name (could be name,role,email)
  }

  const submitForm = () => {            // this triggers when onSumbit is fired from a submit button click
      const newWorker = {               // newWorker is a new object holding the values inside all 3 text boxes and assigned them to their holder
        name: formValues.name.trim(),
        email: formValues.email.trim(),
        role: formValues.role.trim(),
      }

    if (!newWorker.name || !newWorker.email || !newWorker.role) {  //this checks to see if empty data is being passed and kicks us out so we dont make a partial or empty newworker
      return
    }
   
    axios.post('fakeapi.com', newWorker)  //newWorker is res.data and it posts it there for us later to grab it and show it on the screen
      .then(res => {
        
        setWorker([res.data, ...workers])  // Sets workers to whats inside newWorker + what was there before
        setFormValues(initialFormValues) // Sets the formvalues back to nother so we can accept more workers
       
      })
      .catch(err => {
        debugger
      })
  }

  useEffect(() => {                                            //This is going through and call the dummy axios that has the newworker+workers and sets workers to that.
    axios.get('fakeapi.com').then(res => setWorker(res.data))
  }, [])

// We Make a title called Form app and underneath we have 3 text boxes and then display one worker plus any new workers that are typed in and submitted
// workers.map goes through all the workers instead of it and displays them
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
          return <div className="showstuff" key={idx}>{worker.name} has an email of {worker.email} and works as a {worker.role}</div>
        })
       }
      </div>
    )
  }

