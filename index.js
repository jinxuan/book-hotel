const fetch = require('node-fetch');

exports.handler = async (evt) => {    
    let resp = await fetch("https://cl0xip4jxb.execute-api.us-east-1.amazonaws.com/Prod/hotel", {
        method: 'POST',
        body: JSON.stringify(evt)
    })
    return await resp.JSON()
}