import React, { useEffect } from "react";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { createServer, Model, Response, schema } from "miragejs";

function App() {
  useEffect(() => {
    createServer({
      models: {
        author: Model
      },
      routes() {
        this.post("/movies", (schema, request) => {
          let attrs = request.requestBody;
          attrs.id = Math.floor(Math.random() * 100);
          return schema.movies.create({ attrs })
        });
        this.get("/api/authors", (schema) => {
          schema.authors.all();
        });
      }
    });
  }, []);
  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;
