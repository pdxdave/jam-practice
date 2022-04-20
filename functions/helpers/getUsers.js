// bring in the object of data
const {table} = require('./airtableConnect')
// prepares the format of the data
const preparedReturn = require('./preparedReturn')

module.exports = async (event) => {
    try {
        // select gets the object, firsPaget gets the records
        const users = await table.select().firstPage();
        // map through users, grab id and user info which is an object named fields. that's how airtable does it
        const preparedUsers = users.map((user) => ({ id: user.id, ...user.fields}))
        // returt status code, and data to be stringified
        return preparedReturn(200, preparedUsers)

    } catch (error) {
        console.log(error)
        return preparedReturn(500, {msg: "There was an error"})
    }
}