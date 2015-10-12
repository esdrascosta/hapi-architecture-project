"use strict";

let should = require('should');
let server =  require('../../server.js');
let model = require('../../lib/models')

describe('User Routes', () => {

  beforeEach(function() {
    model.User.sync();
  });

  afterEach(function() {
    model.User.destroy({truncate:true});
  });

 context('when server is ready', () => {

  it('should respose to GET resquest without error', (done) => {

      let options = {
        method : 'GET',
        url: "/user"
      }

      server.inject(options, (response) => {
        response.statusCode.should.equal(200);
        response.headers['content-type'].should.equal('application/json; charset=utf-8');
        done();
      })
  });

  it('should respose to POST resquest without error', (done) => {

      let options = {
        method : 'POST',
        payload: {
          name : 'Esdras',
          age : 28
        },
        url: "/user"
      }

      server.inject(options, (response)=>{
        response.statusCode.should.equal(201);
        response.headers['content-type'].should.equal('application/json; charset=utf-8');
        done();
      })

    });
  });
});
