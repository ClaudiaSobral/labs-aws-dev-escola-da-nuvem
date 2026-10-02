const http = require('http');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.end(`
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Minha Aplicação AWS Beanstalk</title>
      <style>
        body {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          margin: 0;
          background-color: #f4f6f8;
          color: #232f3e;
        }
        .container {
          background: #ffffff;
          padding: 2.5rem;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          text-align: center;
          max-width: 480px;
        }
        h1 {
          color: #ff9900;
          margin-bottom: 0.5rem;
        }
        p {
          font-size: 1.1rem;
          line-height: 1.5;
        }
        .badge {
          display: inline-block;
          background: #232f3e;
          color: #ffffff;
          padding: 0.3rem 0.8rem;
          border-radius: 4px;
          font-size: 0.85rem;
          margin-top: 1rem;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Aplicação Ativa!</h1>
        <p>Servidor Node.js rodando com sucesso no AWS Elastic Beanstalk.</p>
        <span class="badge">Node.js 12.x</span>
      </div>
    </body>
    </html>
  `);
});

server.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});