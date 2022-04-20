import React from 'react'
import styled from 'styled-components'

const User = ({user, usersUpdated}) => {


    const handleDelete = async () => {
        try {
            await fetch('/api/users', {
                method: 'DELETE',
                body: JSON.stringify({id: user.id})
            })
            usersUpdated()
        } catch (error) {
            console.log(error)
        }
    }


    
  return (
    <Card key={user.id}>
        <div>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
            <p>{user.phone}</p>
        </div>
        <button onClick={() => handleDelete()}>Delete</button>
    </Card>
  )
}

const Card = styled.article`
    border: 1px solid gray;
    text-align: center;
    margin: 20px;
    h3 {
        text-transform: capitalize;
    }
    button {
        font-family: inherit;
        font-size: 1.2rem;
        margin: 0 0 .5em 0;
        cursor: pointer;
        border: 1px solid lightgray;
        padding: .25em;
        border-radius: 3px;
    }
`

export default User