import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
          tags: 'economia,react-native,open-source,nodejs'
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

    this.patch("/ideas/:id", (schema, request): any => {
      const newAttrs = JSON.parse(request.requestBody)
      const id = request.params.id;

      return schema.find('ideas', id)?.update(newAttrs);
    });

    this.delete("/ideas/:id", (schema, request): any => {
      const id = request.params.id;

      return schema.find('ideas', id)?.destroy();
    });
  }
});

ReactDOM.render(
  <React.StrictMode>
    <ToastContainer position="bottom-right" />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
