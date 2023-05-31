const { OAuth2Client } = require('google-auth-library');

app.post('/api/auth/google', async (req, res) => {
    try {
        const { id_token } = req.body;

        // verify the ID token

        const client = new OAuth2Client('http://205773971669-8nbujk1vtk2mef3fh25l1doetfq0n766.apps.googleusercontent.com/');
        const ticket = await client.verifyIdToken({
            idToken: id_token,
            audience: 'http://205773971669-8nbujk1vtk2mef3fh25l1doetfq0n766.apps.googleusercontent.com/'
        });
        const payload = ticket.getPayload();
        const userId = payload['sub'];

        // check if the user already exists in your database

        if (userExists) {
            res.status(409).json({
                message: 'User already exists'
            });
        } else {

            // create the user in your database and authenticate them

            res.status(200).json({
                user: {
                    id: userId,
                    name: payload.name,
                    email: payload.email
                },
            });
        };
    }
    catch {
        console.log(error);
    }
    app.listen(3000, () => {
      console.log('listening at port 3000');
    })
});

