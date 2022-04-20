const {table} = require('./airtableConnect');
const preparedReturn = require('./preparedReturn');

module.exports = async (event) => {
    try {
        // grab all the content from the body via event
        const fields = JSON.parse(event.body)
        const createUser = await table.create([{fields}])
        return preparedReturn(200, createUser)
    } catch (error) {
        console.log(error)
        return preparedReturn(500, {msg: "There was an error"})
    }
}
