const app = require('../app.js')
const supertest = require('supertest');
const expect = require('chai').expect;

describe('GET /apps endpoint', () => {
    it('should generate an array', () => {
      return supertest(app)
        .get('/apps') // invoke the endpoint
        .query({ genre:  "Action", sort: "App"}) // send the query string 
        .expect(200)  // assert that you get a 200  OK status
        .expect('Content-Type', /json/)
        .then(res => {
          // make sure you get an array
          expect(res.body).to.be.an('array')
          // array must not be empty
          expect(res.body).to.have.lengthOf.at.least(1);
          // this assertion fails
        });
    })
  });