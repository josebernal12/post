import request from 'supertest'
import { faker } from '@faker-js/faker'
import app from '../src/server'
import env from '../src/utils/envalid'
describe('registro de un usuario', () => {
  it('un usuario se registrara satisfactoriamente', (done) => {

    const userData = {
      name: faker.person.firstName(),
      email: faker.internet.email(),
      password: faker.internet.password()
    }
    request(app)
      .post('/api/user/register')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .send(userData)
      .expect(200, done)

  })
  it('un usuario no envio todos los campos necesario', (done) => {
    const userData = {
      email: env.EMAILTEST,
      password: env.PASSWORDTEST
    }
    request(app)
      .post('/api/user/register')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .send(userData)
      .expect(404, done)
  })

  it('el email ya esta en la base de datos', (done) => {
    const userData = {
      name: env.NAMETEST,
      email: env.EMAILTEST,
      password: env.PASSWORDTEST
    }

    request(app)
      .post('/api/user/register')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .send(userData)
      .expect(404, done)
  })


})