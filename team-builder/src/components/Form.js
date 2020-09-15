import React from 'react'

export default function Form(props) {
  // THESE ARE THE **EXACT PROPS** FriendForm EXPECTS!!!
    const { values, update, submit } = props

    const onChange = evt => {
        const { name, value } = evt.target
        update(name, value)
}

    const onSubmit = evt => {
    evt.preventDefault()
    submit()
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