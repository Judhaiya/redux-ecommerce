import { createServer, Model, Response } from "miragejs";

export const apiConfiguration = () => {
    createServer({
        models: {
            users: Model
        },
        routes() {
            this.post("/auth/register", (schema, request) => {
                let attrs = request.requestBody
                if (attrs) {
                    schema.db.movies.insert(attrs)
                    return new Response(200, {}, { sucess: true, token: 'eywxcffv' })
                } else {
                    return new Response(
                        400,
                        { some: "header" },
                        { errors: ["name cannot be blank"] }
                    )
                }
            })
            this.post("/auth/login", (schema, request) => {
                const { email } = request.requestBody
                schema.users.findBy({ email })
                return new Response(200, {}, { sucess: true, token: 'eywxcffv' })
            })
            this.get("/auth/users", (schema) => {
                let movies = schema.movies.all()
                return movies
            })
            this.get("/auth/users/:id", (schema, request) => {
                return schema.movies.find(request.params.id)
            })
        }
    })
}

