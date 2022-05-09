//Netlify function
exports.handler = async function (event, context) {
    return {
        statuscode: 200,
        body: JSON.stringify({ message: 'Hello World!' })
    }
} 