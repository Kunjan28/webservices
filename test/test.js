const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../server');
const should = chai.should();
var assert = chai.assert; 
chai.use(chaiHttp)

describe('Array', () => {
    describe('Check the index', () => {
        it('return -1 when element is not found', () => {
            assert.equal([6,7,9].indexOf(1), -1);
        });
    });
});

describe('/GET ', () => {
    it('it should check healthz api endpoint status', (done) => {
      chai.request(app)
          .get('/healthz')
          .end((err, res) => {
                res.should.have.status(200);
            done();
          });
    });
});
