import fastify from 'fastify'

const app = fastify()

app.get('/hello', () => {
  return 'Hello NLW'
})

app.listen({ port: 3333 }).then(() => {
  console.log('HTTP is runnung!')
})
