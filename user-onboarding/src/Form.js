import React, { useState } from 'react'
import * as yup from 'yup'
import axios from 'axios'

const Form = (props) => {

    const [ info, setInfo ] = useState({
        fName: '',
        email: '',
        password: '',
        TOS: false
    })

    const postInfo = (person) => {
        axios.post(`https://reqres.in/api/users`, person)
        .then((res) => {
            props.setPeople(res)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const onChange = (event) => {
        if (event.target.type === 'checkbox') {
            setInfo({
                ...info,
                TOS: !info.TOS
            })
        }

    setInfo({...info,
        [event.target.name]: event.target.value
    })};


    const onSubmit = (event) => {
        event.preventDefault()
        props.setPeople([...info])
        postInfo(info)
    }    

    return (
        <div>
            <form onSubmit={onSubmit}>
                <label>Name: 
                    <input 
                        id='name'
                        type='text'
                        value={info.name}
                        name='name'
                        placeholder='Name'
                        onChange={onChange}
                    />Email: 
                    <input
                        id='email'
                        type='text'
                        value={info.email}
                        email='email'
                        placeholder='Email'
                        onChange={onChange}
                    />Password: 
                    <input
                        id='password'
                        type='text'
                        value={info.password}
                        password='password'
                        placeholder='Password'
                        onChange={onChange}
                    />Terms of Service: 
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
