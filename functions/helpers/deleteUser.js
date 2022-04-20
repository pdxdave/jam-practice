const {table} = require('./airtableConnect')
const preparedReturn = require('./preparedReturn')

module.exports = async (event) => {
    try {
        // airtable's event grabs the id from the body
        const {id} = JSON.parse(event.body)
        const deleteUser = await table.destroy(id)
        return preparedReturn(200, deleteUser)
    } catch (error) {
        console.log(error)
        preparedReturn(500, {msg: "There was an error"})
    }
}