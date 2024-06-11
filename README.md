# Backend RESTful API for blogging

a project by Luis Medardo

## How to run?

1. Install dependencies

```
npm install
```

2. Create .env file

```
nano .env
```

3. Run in dev mode

```
npm run dev
```

## Available endpoints

- **POST /user** This is to create new user
- **GET /user/:id** This is to return user using the id
- **POST /auth/login**
  this is to generate the token to access protected functions
- **POST /posts** This is to create a new post
- **GET /posts** This is to lists all posts

- **GET /posts/:query** This is to search posts

- **PATCH /posts/:id** This is to update a post using the id as parameter

- **DELETE /posts/:id** This is to delete a post using the id as parameter
