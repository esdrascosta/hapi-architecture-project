"use strict";

let should = require('should');
let server =  require('../../server.js');
let model = require('../../lib/models')

describe('User Routes', () => {

  let optionCreate = {
    method:'POST',
    payload : {
       name : 'Esdras',
       age : 27
    },
    url: '/user'
  };

  before(function() {
    model.User.sync();
  });

  afterEach(function() {
    model.User.destroy({truncate:true});
  });

 context('when server is ready', () => {

   function createUser(callback){
     server.inject(optionCreate, (response)=>{
       callback(response);
     })
   }

  it('should response to GET resquest without error', (done) => {

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

  it('should response to POST resquest without error', (done) => {

      createUser( (response) => {
        response.statusCode.should.equal(201);
        response.headers['content-type'].should.equal('application/json; charset=utf-8');
        done();
      })
    });

   it('should response to DELETE request without error', (done) => {

     let optionDelete = {
       method:'DELETE'
     };

     createUser((response) => {

       let userID = JSON.parse(response.payload);
       optionDelete['url'] = `/user/${userID.id}`;

       server.inject(optionDelete, (res) => {
         res.statusCode.should.equal(204);
         done();
       });

     });

   });

   it('should response to PUT request without error', (done) => {

     let optionsUpdate = {
       method:'PUT',
       payload : {
         age : 50,
         name : 'Fulano'
       }
     };

     createUser((response) => {
        let userID = JSON.parse(response.payload);
        optionsUpdate['url']= `/user/${userID.id}`;

        server.inject(optionsUpdate, (res) => {
          res.statusCode.should.equal(204);
          done();
        });
     });
   });

  });
});
