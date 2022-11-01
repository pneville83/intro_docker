import request from 'supertest';
import app from '../app.js';

before(async () => {  
  // create user
  const payload = {
    'name': 'Peter',
    'email': 'neville.peter.2000@gmail.com',
    'password': 'peternev'
  }
  await request(app).post('/auth/register').send(payload);
})