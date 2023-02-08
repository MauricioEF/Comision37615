import chai from 'chai';
import supertest from 'supertest';

const expect = chai.expect;
const requester = supertest('http://localhost:8080');

describe('Testing a nivel servidor',() =>{
    
    before(async function(){
        await requester.get('/api/users/test/drop');
    })

    beforeEach(async function(){
        
    })

    describe('Test de usuarios',()=>{
        it("El endpoint POST /api/sessions/register debe crear un nuevo usuario en la base de datos",async () =>{
            const userMock = {
                first_name:'Rodrigo',
                last_name:'Ajnota',
                email:'correorodri@correo.com',
                password:'123'
            }
            const response = await requester.post('/api/sessions/register').send(userMock);
            expect(response.status).to.be.equal(200);
            expect(response._body).to.have.property('payload');
        })
    })
    describe('Test de Artworks',()=>{
        it("El endpoint POST /api/artworks debe crear un artwork en la base de datos",async() =>{
            const mockArtwork = {
                title: 'Panchito',
                author:'Mariano',
                price:123123,
                copies:10,
                creationDate: "27-01-2023",
                movement:'coderismo'
            }
            const response = await requester.post('/api/artworks')
            .field('title',mockArtwork.title)
            .field('author',mockArtwork.author)
            .field('price',mockArtwork.price)
            .field('copies',mockArtwork.copies)
            .field('creationDate',mockArtwork.creationDate)
            .field('movement',mockArtwork.movement)
            .attach('image','./test/Panchito.jpg')

            expect(response.status).to.be.eql(200)
            expect(response._body.payload).to.have.property('_id');
            expect(response._body.payload.image).to.be.ok;
        })
    })
    describe('Test de sesión',()=>{
        let cookie;
        it('Debe loguear correctamente al usuario y debe insertar una cookie con el token',async () =>{
            const userMock = {
                email: 'correorodri@correo.com',
                password:"123"
            }
            const response = await requester.post('/api/sessions/login').send(userMock);
            console.log(response.headers);
            const cookieHeader = response.headers['set-cookie'][0];
            expect(cookieHeader).to.be.ok;
            expect (response.status).to.be.eql(200);
            cookie = {
                name: cookieHeader.split('=')[0],
                value: cookieHeader.split('=')[1]
            }
            expect(cookie.name).to.be.ok.and.eql('CoderCookie')
        })
    })
})