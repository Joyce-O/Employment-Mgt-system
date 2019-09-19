const create_employee = 'insert into employee_table (name, email, password, phone, bank, company, account_number) values ($1, $2, $3, $4, $5, $6, $7) returning *';
const create_admin = 'insert into admin_table (name, password, email) values ($1, $2, $3) returning *';
// const createUser = 'insert into userTable (firstName, lastName, email, password) values ($1, $2, $3, $4) returning *';

export {create_employee, create_admin};