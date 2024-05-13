describe('User service behaviour', () => {
    const apiUrl = Cypress.config().apiUrl;
    it('Should create a user when sends username and password', () =>{
        const randomNumber = (Math.random() * 100).toString()
        cy.request('POST', `${apiUrl}/signup`, {
            username: `Holmes${randomNumber}`,
            password: '12345abot'
        })
        .then((response)=>{

            expect(response.status).to.eq(200);
            expect(response.body).to.eq("");
        });
    });

    it('Should not create a new user when sends an existing credentials', () =>{
        cy.request('POST', `${apiUrl}/signup`, {
            username: 'almamia234',
            password: '12343adigbn'
        })
        .then((response)=>{
            expect(response.status).to.eq(200);
            expect(response.body.errorMessage).to.eq("This user already exist.");
        });
    });

    it('Should login when sends a correct username and correct password', () =>{
        cy.request('POST', `${apiUrl}/login`, {
            username: 'Holmes1997',
            password: '12345abot'
        })
        .then((response)=>{
            expect(response.status).to.eq(200);
            expect(response.body).to.contain("Auth_token");
        });
    });

    it('Should not login when sends correct username and incorrect password', () =>{
        cy.request('POST', `${apiUrl}/login`, {
            username: 'Holmes1997',
            password: '23468abot'
        })
        .then((response)=>{
            expect(response.status).to.eq(200);
            expect(response.body.errorMessage).to.eq("Wrong password.");
        });
    });
    it('Should not login when sends incorrect correct username and incorrect password', () =>{
        cy.request('POST', `${apiUrl}/login`, {
            username: 'Holmes1998',
            password: '23468abot'
        })
        .then((response)=>{
            expect(response.status).to.eq(200);
            expect(response.body.errorMessage).to.eq("User does not exist.");
        });
    });

});