import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';
import App from './App';

createServer({
  models: {
    ideas: Model
  },
  seeds(server) {
    server.db.loadData({
      ideas: [
        {
          id: 1,
          title: "Criar um app de lista de itens da geladeira",
          description: "Criar um app para listar os itens que tenho na minha geladeira para que não estrague as coisas.",
          tags: ['economia', 'react-native', 'opne-source', 'nodejs']
        }
      ]
    })
  },
  routes() {
    this.namespace = 'api';

    this.get("/ideas", () => {
      return this.schema.all('ideas');
    });

    this.post("/ideas", (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create('ideas', data);
    });

    this.patch("/ideas/:id", (schema, request) => {

      return schema;
    });

    this.delete("/ideas/:id", (schema, request): any => {
      const id = request.params.id;

      return schema.find('ideas', id)?.destroy();
    });
  }
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
