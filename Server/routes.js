import express from 'express';
import UserHandler from './users';


const routes = express.Router();

routes.post('/employee', UserHandler.employeeSignup);



export default routes;
