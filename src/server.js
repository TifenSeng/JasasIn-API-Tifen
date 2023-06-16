const Hapi = require('@hapi/hapi')
const routes = require('./routes')

const init = async () => {
  const server = Hapi.server({
    port: 5000, // Change the port to 8080
    host: '0.0.0.0' // Make sure the host is set to '0.0.0.0' to listen on all network interfaces
  })

  server.route(routes)

  await server.start()
  console.log(`Server berjalan pada ${server.info.uri}`)
}

init()
