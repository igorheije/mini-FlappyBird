const express = require('express')
const { userInfo } = require('os')
const path = require('path')



const server = express()


server
    .use(express.static('public'))

    .get('/', (request, response) => {
        return response.sendFile
        (path.join(__dirname, '..', 'index.html'))
        })

server.listen(3000)

