const server = require('../api/server')
const request = require('supertest')

    describe('POST /api/auth/register', () => {
      it('should register user', () => {
        return request(server)
          .post('/api/auth/register')
          .send({
            username: 'cesar3',
            password: 'cesar3'
          })
          .then(res => {
            expect(res).toHaveProperty('status', 201)
          })
      })
      it('should return json object', () => {
        return request(server)
          .post('/api/auth/register')
          .send({
            username: 'test12',
            password: 'test12'
          })
          .then(res => {
            expect(res).toHaveProperty('type', 'application/json')
          })
      })
    })

    describe('POST /api/auth/login', () => {
        it('should be a success', () => {
        return request(server)
            .post('/api/auth/login')
            .send({
                username: "cesar",
                password: "cesar"
            })
            .then(response => {
            expect(response.status).toBe(200)
            })
        });
    });
    it('returns JSON', () => {
        return request(server)
            .post('/api/auth/login')
            .send({
                username: "test1",
                password: "test1"
            })
            .then(res => {
            token = res.body.token
            expect(res).toHaveProperty('type', 'application/json')
            });
        });


    describe('GET /api/jokes', () => {
        it('should retreive jokes', () => {
        return request(server)
            .get('/api/jokes')
            .set('token', token)
            .then(response => {
            expect(response).toHaveProperty('status', 200);
            })
        });
    });
    describe('GET /api/jokes', () => {
        it('user is not authorized', () => {
            return request(server)
            .get('/api/jokes')
                .set('token', "unauthorized")
            .then(response => {
                expect(response).toHaveProperty('status', 401);
            })
        });
        });
    