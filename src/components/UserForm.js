import {useState} from 'react';
import styled from 'styled-components'


const UserForm = ({usersAdded}) => {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [isError, setIsError] = useState(false)

    const resetForm = () => {
        setName('')
        setEmail('')
        setPhone('')
    }

    const submitHandler = async (e) => {
        e.preventDefault()

        if(name.length === 0 || email.length < 6 || phone.length < 10 ){
            setIsError(true)  
            setTimeout(() => {
              setIsError(false)
            }, 3000)  
            return
        }

        try {
            const res = await fetch('/api/users', {
                method: 'POST',
                body: JSON.stringify({
                    name, email, phone
                })
            })
            await res.json()
            resetForm()
            usersAdded()
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div>
        {isError && <Error >The form is incomplete</Error>}
        <h1>User Form</h1>
        <Wrapper>
            <form onSubmit={submitHandler}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input 
                        type="text" 
                        name="name"
                        value={name}
                        placeholder="e.g., frank smith"
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        name="email"
                        value={email}
                        placeholder="e.g., frank.smith@gmail.com"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input 
                        type="text" 
                        name="phone"
                        value={phone}
                        placeholder="e.g., 713-451-7811"
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </div>
                
                <button type="submit">Submit</button>
            </form>
        </Wrapper>
    </div>
  )
}


const Wrapper = styled.div`
    width: 70%;
    margin: 0 auto;

    label {
        display: block;
    }
    input {
        width: 100%;
        font-size: 1.2rem;
        border-top: none;
        border-right: none;
        border-left: none;
        margin-bottom: .75em;
    }
    input:focus {
        outline: none;
    }
    button {
        font-family: inherit;
        font-size: 1.2rem;
        padding: .5em;
        cursor: pointer;
    }
`
const Error = styled.p`
        text-align: center;
        background-color: rgba(255, 68, 43, 0.5);
        padding: .5em;
        width: 50%;
        margin: 1em auto 0;
`

export default UserForm