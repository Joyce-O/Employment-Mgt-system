import express from 'express';
import routes from './routes';

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1', routes);
app.all('*', (request, response) => {
  response.status(404)
    .json({
      status: 404,
      error: 'Oops! This page does not exist.',
    });
});

const port = process.env.PORT || 5600;

app.listen(port, () => `Employo is live on ${port}`);

export default app;