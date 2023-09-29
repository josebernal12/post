import request from 'supertest'
import app from '../src/server'
import env from '../src/utils/envalid'
//TODO CHECAR EL STATUS 500

describe('un usuario hace login', () => {

  it('un usuario hace login satisfactoriamente', (done) => {
    const userData = {
      email: env.EMAILTEST,
      password: env.PASSWORDTEST
    }

    request(app)
      .post('/api/user/login')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .send(userData)
      .expect(200, done)
  })

  it('el email no existe en la base de datos', (done) => {
    const userData = {
      email: env.EMAILTESTDONTEXIST,
      password: env.PASSWORDTEST
    }

    request(app)
      .post('/api/user/login')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .send(userData)
      .expect(404, done)
  })

  it('el password no coincide con el email', (done) => {

    const userData = {
      email: env.EMAILTEST,
      password: env.PASSWORDTESTDONTEXIST
    }

    request(app)
      .post('/api/user/login')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .send(userData)
      .expect(404, done)

  })
  it('no pone todos los campos', (done) => {
    const userData = {
      email: env.EMAILTEST,
    }

    request(app)
      .post('/api/user/login')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .send(userData)
      .expect(404, done)



  })
})