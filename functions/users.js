const preparedReturn = require('./helpers/preparedReturn')

// operations
const getUsers = require('./helpers/getUsers')
const createUser = require('./helpers/createUser')
const deleteUser = require('./helpers/deleteUser')

// directing requests to operations
exports.handler = async (event) => {
    if(event.httpMethod === 'GET'){
        return getUsers(event)
    }
    if(event.httpMethod === 'POST'){
        return createUser(event)
    }
    if(event.httpMethod === 'DELETE'){
        return deleteUser(event)
    } else {
        return preparedReturn(405, {})
    }
}
