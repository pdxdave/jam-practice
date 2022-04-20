import {useEffect, useState} from 'react'
import './App.css';
import UserList from './components/UserList';
import UserForm from './components/UserForm'
import styled from 'styled-components'


function App() {
  const [users, setUsers ] = useState([])
  
  const loadUsers = async () => {
    try {
      const res = await fetch('/api/users')
      const users = await res.json()
      setUsers(users)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    loadUsers()
  }, [])


  return (
    <Wrapper>
      <UserForm usersAdded={loadUsers}/>
      <UserList users={users} usersAdded={loadUsers}/>
    </Wrapper>
  );
}


const Wrapper = styled.div`
  width: 1100px;
  max-width: 100%;
  margin: 0 auto;
  
  h1 {
    text-align: center;
  }
`

export default App;


