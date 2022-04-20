import User from './User'
import styled from 'styled-components'

const UserList = ({users, usersAdded}) => {
  return (
    <Wrapper>
        {users.map((user) => {
            return  <User user={user} key={user.id} usersUpdated={usersAdded} />
        })}
       
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 1100px;
  max-width: 100%;
  margin: 0 auto;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr))
  
`

export default UserList