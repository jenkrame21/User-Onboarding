import React, { useState, useEffect } from 'react'
// grabbing info from schemaForm as 'yup'
import * as yup from 'yup'
import schema from './schemaForm'
// uses axios to grab data then post using postInfo function
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
    const [ disabled, setDisabled ] = useState(false)
    // const [ users, setUsers ] = useState([])
    const [ error, setError ] = useState({
        fName: '',
        email: '',
        password: '',
        TOS: ''
    })

    const validate = (name, value) => {
        yup
            .reach(schema, name)
            .validate(value)
            .then((res) => {
                setError({
                    ...error,
                    [name]: ""
                })
            })
            .catch((err) => {
                setError({
                    ...error,
                    [name]: err.errors[0]
                })
            })
    }
    const change = (name, value) => {
        validate(name, value)
        setInfo({
            ...info,
            [name]: value
        })
    }

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
        // if (event.target.type === 'checkbox') {
        //     setInfo({
        //         ...info,
        //         TOS: !info.TOS
        //     })
        // } else {
        //     setInfo({
        //         ...info,
        //         // one way
        //         // fName:
        //         // another way
        //         [event.target.name]: event.target.value
        //     })
        // }
        const rightValue = event.target.type === 'checkbox' ? event.target.checked : event.target.value
        change(event.target.name, rightValue)
    }

    // gives the submit button a click function
    const onSubmit = (event) => {
        // stops page from refreshing
        event.preventDefault()
        // refers to postInfo function and posts to the backend
        const person = {
            fName: info.fName,
            email: info.email,
            password: info.password,
            TOS: ['Approved']
        }
        postInfo(person)
        //setInfo becomes reset
        setInfo({
            fName: '',
            email: '',
            password: '',
            TOS: false
        })
    }

    useEffect(() => {
        schema.isValid(info)
        .then((res) => {
            setDisabled(!res)
        })
    }, [info])

    // creates a JSX div of information exporting Form to App.js
    return (
        <div>
            <h1>User Onboarding Form</h1>
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
                        name='TOS'
                        checked={info.TOS}
                        onChange={onChange}
                    />
                </label>
                <button disabled={disabled}>Submit</button>
                <div>
                    <p>{error.fName}</p>
                    <p>{error.email}</p>
                    <p>{error.password}</p>
                    <p>{error.TOS}</p>
                </div>
            </form>
        </div>
    )
}


export default Form
