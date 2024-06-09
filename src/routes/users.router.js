
const usersUseCase = require('../usecases/users.usecase') //normalmente importamos nuestro usecase
const express = require('express');
const auth = require('../middlewares/auth.middleware');

const router = express.Router() // ya le podemos empezar a montar los endpoints necesarios

// primero la ruta GET /users

/* 
function middlewareError (request,response,next){
    try{
        next();
    }catch(error){
        response.status(error.status || 500);
        response.json({success: false,
            error: error.message});
    }
}

router.use(middlewareError); 

esto es para no repetrlo pero se requiere conocimiento adicional
*/


router.get("/", auth, async (request, response) => {
    try {
        const users = await usersUseCase.getAll();
        response.json({
            success: true,
            data: {
                users //como es una lista de users por eso la mandamos asi
            }
        });

    } catch(error) {
        response.status(error.status || 500);
        response.json({success: false,
            error: error.message});
    }
} )

// POST /users


router.post("/", async (request, response) => {
    try {
        const userCreated = await usersUseCase.create(request.body);
        response.json({
            success: true,
            data: {
                userCreated // como es solo un user por eso lo ponemos asi
            }
        });
    } catch(error) {
        response.status(error.status || 500);
        response.json({success: false,
            error: error.message});
    }
});

//GET /users/:id

router.get("/:id", auth, async (request, response) => {
    try {
        const id = request.params.id; // aqui sin deconstruccion
        const user = await usersUseCase.getByID(id);
        response.json({
            success: true,
            data: {
                user
            }
        });
    } catch(error) {
        response.status(error.status || 500);
        response.json({success: false,
            error: error.message});
    }
});

//DELETE /users/:id esto es un endpoint para borrar en el usecase se llama deleteByID

router.delete("/:id", async (request, response) => {
    try {
        const { id } = request.params; //con deconstruccion

        const userDeleted = await usersUseCase.deleteByID(id);

        response.json({
            success: true,
            data: {
                userDeleted
            }
        });
    } catch(error) {
        response.status(error.status || 500);
        response.json({success: false,
            error: error.message});
    }
});

// PATCH /users/:id

router.patch("/:id", async (request, response) => {
    try {
        const { id } = request.params;
        const userUpdated = await usersUseCase.updateByID(id, request.body);
        response.json({
            success: true,
            data: {
                userUpdated
            }
        });
    } catch(error) {
        response.status(error.status || 500);
        response.json({success: false,
            error: error.message});
    }
});


module.exports = router;