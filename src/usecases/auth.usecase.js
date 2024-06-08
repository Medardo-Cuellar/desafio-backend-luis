const express = require('express');
const router = express.Router();
const authUseCase = require('../usecases/auth.usecase');

// POST /auth/login

router.post('/login', async (request, response) => {
    try {
        const { email, password } = request.body; // no la esta pidiendo la toma de la peticion osea de la request
        const token = await authUseCase.login(email, password);
        response.json({
            success: true,
            data: {
                token,
            },
        });
        } catch (error) {
        response.status(error.status || 500);
        response.json({
            success: false,
            error: error.message,
        });
    }
});

module.exports = router;