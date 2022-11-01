import request from 'supertest';
import app from '../App.js';


async function getToken() {
  const payload = {
    'email': 'neville.peter.2000@gmail.com',
    'password': 'peternev'
  }
  const { body } = await request(app).post('/auth/login').send(payload);
  return body.accessToken;
}

export default getToken;