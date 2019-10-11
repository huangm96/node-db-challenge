const server = require('./server')

const PORT = process.env.PORT || 8787

server.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`)
})