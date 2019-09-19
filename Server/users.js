import bcrypt, { compareSync } from 'bcrypt';
import { create_employee, create_admin } from './db/queries';

import { generateToken } from './authentication';
import pool from './db/connection';

class UserHandler {
  static employeeSignup(request, response) {
    const { name, email, password, phone, bank, company, account_number} = request.body;
    const values = [
        name, email, bcrypt.hashSync(request.body.password, 10), phone, bank, company, account_number
    ];

    pool.query(create_employee, values)
      .then((data) => {
        const authUser = data.rows[0];
        const token = generateToken(authUser);
        const { name, email, registered } = authUser;
        const Details = { name, email, registered };

        return response.status(201)
          .json({
            success: true,
            message: `Sign up is successful`,
            token,
            Details

          });
      })
      .catch(error => response.status(500)
        .json({
          success: false,
          message: error.message
        }));
  }
} 

export default UserHandler