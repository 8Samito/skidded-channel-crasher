const axios = require('axios')
const colors = require('colors')
const raid = require('./raid')

async function login(email, senha, id, delay) {
    await axios.post(`https://discord.com/api/v8/auth/login`, { "login": `${email}`, "password": `${senha}` }, {
        headers: {
            "content-type": "application/json"
        }
    }).then(response => {
        if (response.data.token) {
            raid(response.data.token, id, delay)
        } else {
            console.log(colors.red(`[LOGIN] Unable to login (wrong email/password?)`))
        }
    }).catch(err => {
        console.log(colors.red(`[LOGIN] Unable to login (wrong email/password?) ${err}`))
    })
}

module.exports = login;
