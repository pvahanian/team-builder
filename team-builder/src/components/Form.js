import React from 'react'

export default function Form(props) {
  // These are the expected props being passed into form
    const { values, update, submit } = props

    const onChange = evt => {  //Function will execute when onChange event handler is triggered
        const { name, value } = evt.target // in this case any time text is modded in the form buttons
        update(name, value)     // this will call the update function to updateForm values
}

    const onSubmit = evt => {   // onSubmit is a function that execute on submit & will be added to the form button
    submit()                    // since this is put inside the <form> it will go to button automatically
}


return (
    <form className='form container' onSubmit={onSubmit}>   
        <div className='form-group inputs'>
        <label>name
          <input
            type='text'
            name='name'
            onChange={onChange}
            value={values.name}
            placeholder='Enter Name'
            maxLength='30'
          />
        </label>
        
        <label>Email
          <input
            type='email'
            name='email'
            onChange={onChange}
            value={values.email}
            placeholder='Enter your E-mail'
            maxLength='30'
          />
        </label>

        <label>Role
          <input
            type='role'
            name='role'
            onChange={onChange}
            value={values.role}
            placeholder='enter your role'
            maxLength='30'
          />
        </label>

        <div className='submit'>
          <button>submit</button>
        </div>
      </div>
    </form>
  )
}