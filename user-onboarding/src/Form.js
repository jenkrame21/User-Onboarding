import React, { useState } from 'react'
// grabbing info from schemaForm as 'yup'
import * as yup from 'yup'

// uses axios to post data
import axios from 'axios'

// form function that passes 'props'
const Form = (props) => {

    // useState grabs data through 'info', 'setInfo' is a function to change 'info'
    const [ info, setInfo ] = useState({
        fName: '',
        email: '',
        password: '',
        TOS: false
    })

    // grabs the post info from the link
    const postInfo = (person) => {
        axios.post(`https://reqres.in/api/users`, person)
        .then((res) => {
            console.log(res.data)
            props.setPeople([...props.people, res.data])
        })
        .catch((err) => {
            console.log(err)
        })
    }

    // gives the click an event to fire // toggle
    const onChange = (event) => {
        if (event.target.type === 'checkbox') {
            setInfo({
                ...info,
                TOS: !info.TOS
            })
        } else {
            setInfo({
                ...info,
                // one way
                // fName:
                // another way
                [event.target.name]: event.target.value
            })
        }
    }

    // gives the submit button a click function
    const onSubmit = (event) => {
        //
        event.preventDefault()
        // refers to postInfo function and posts to the backend
        postInfo(info)
        //setInfo becomes reset
        setInfo({
            fName: '',
            email: '',
            password: '',
            TOS: false
        })
    }    

    // creates a div of information
    return (
        <div>
            <form onSubmit={onSubmit}>
                <label>Name: 
                    <input 
                        id='name'
                        type='text'
                        value={info.fName}
                        name='fName'
                        placeholder='Name'
                        onChange={onChange}
                    />
                </label>
                <label>Email: 
                    <input
                        id='email'
                        type='text'
                        name='email'
                        value={info.email}
                        email='email'
                        placeholder='Email'
                        onChange={onChange}
                        />
                </label>
                <label>Password: 
                    <input
                        id='password'
                        type='password'
                        name='password'
                        value={info.password}
                        password='password'
                        placeholder='Password'
                        onChange={onChange}
                    />
                </label>
                <label>Terms of Service: 
                    <input
                        id='TOS'
                        type='checkbox'
                        checked={info.TOS}
                        onChange={onChange}
                    />
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
}


export default Form
