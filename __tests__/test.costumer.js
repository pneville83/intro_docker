import request from 'supertest';
import chai from 'chai';
import app from '../app.js';
// import User from '../models/user.js';
import getToken from './utils.js';
import Costumer from '../models/costumer.js';
import { before } from 'mocha';

const { expect } = chai;


describe('Test the costumers endpoints', () => {
  let token;
  let costumer1;
  let costumer2;

  before( async () => {
    token = await getToken();
    costumer1 = await Costumer.create({
      name: 'Jose',
      lastName: 'Batallas',
      email: 'joselbatallas@gmail.com',
      phone: '09923456781',
    })
    costumer2 = await Costumer.create({
      name: 'Irene',
      lastName: 'Hernandez',
      email: 'pruebamail@gmail.com',
      phone: '0993554576'
    })
  })

  it('should retrieve all the costumers', async () => {
    const { body, status } = await request(app)
      .get('/costumers')
      .set('Authorization', `Bearer ${token}`);
    expect(status).to.equal(200);
    expect(body).to.be.a('array');
    expect(body.length).to.equal(2);
  });

  it('get /costumers should retrieve unauthorized for unloged users', async () => {
    const { status } = await request(app)
      .get('/costumers')
    expect(status).to.equal(403);
  });

  it('should retrieve a costumer by id', async () => {
    const { body, status } = await request(app)
      .get(`/costumers/${costumer2.id}`)
      .set('Authorization', `Bearer ${token}`);
    expect(status).to.equal(200);
    expect(body).to.be.a('object');
    expect(body.id).to.equal(costumer2.id);
    expect(body.name).to.equal(costumer2.name);
  });

  it('get /cotumers/id should retrieve unauthorized for unloged users', async () => {
    const { status } = await request(app)
      .get(`/costumers/${costumer1.id}`);
    expect(status).to.equal(403);
  });

  it('put /costumer/id should allow to update the object', async () => {
    const payload = { 
      name: 'Pepe',
    }
    const { body, status } = await request(app)
      .put(`/costumers/${costumer1.id}`)
      .set('Authorization', `Bearer ${token}`)
      .send(payload);
    expect(status).to.equal(200);
    expect(body).to.be.a('object');
    
    // retrieve the object from the database
    const costumer = await Costumer.findByPk(costumer1.id);
    expect(costumer.name).to.equal(payload.name);
  });

  it('delete /costumers/id should allow to delete an object', async () => {
    const costumerToDelete = await Costumer.create({
      name: 'name to delete',
    });
    const { body, status } = await request(app)
      .delete(`/costumers/${costumerToDelete.id}`)
      .set('Authorization', `Bearer ${token}`)
    expect(status).to.equal(200);
    expect(body).to.be.a('object');
    
    // retrieve the object from the database
    const costumer = await Costumer.findByPk(costumerToDelete.id);
    expect(costumer).to.equal(null);
  });
});