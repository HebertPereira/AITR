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

    this.get(`/ideas`, () => {
      return this.schema.all('');
    });

    this.post(`/ideas`, (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create('idea', data);
    });

    this.patch(`/idea/:id`, (schema, request) => {

      return schema;
    });
  }
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
