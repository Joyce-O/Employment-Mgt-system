import pool from './connection';

const bank_table = `DROP TABLE IF EXISTS banks CASCADE;
    CREATE TABLE banks(
    id SERIAL NOT NULL PRIMARY KEY,
    name VARCHAR (128) UNIQUE NOT NULL,
    bank_address TEXT NOT NULL,
    registered TIMESTAMP NOT NULL DEFAULT (NOW())
)`;

const company_table = `DROP TABLE IF EXISTS companies CASCADE;
    CREATE TABLE companies (
    id SERIAL NOT NULL PRIMARY KEY,
    name VARCHAR (128) UNIQUE NOT NULL,
    company_address TEXT NOT NULL,
    registered TIMESTAMP NOT NULL DEFAULT (NOW())
)`;

const employee_table = `DROP TABLE IF EXISTS users CASCADE;
  CREATE TABLE users (
    id SERIAL NOT NULL PRIMARY KEY,
    name VARCHAR (128) NOT NULL,
    avater TEXT NOT NULL,
    email VARCHAR (355) UNIQUE NOT NULL,
    password VARCHAR (128) NOT NULL,
    phone VARCHAR(128) NOT NULL,
    bank INTEGER NOT NULL,
    FOREIGN KEY (bank) references banks(id) on delete cascade,
    company INTEGER NOT NULL,
    FOREIGN KEY (company) references companies(id) on delete cascade,
    account_number VARCHAR(128) NOT NULL,
    registered TIMESTAMP NOT NULL DEFAULT (NOW())
)`;

const admin_table = `DROP TABLE IF EXISTS admin CASCADE;
  CREATE TABLE admin (
    id SERIAL NOT NULL PRIMARY KEY,
    name VARCHAR (128) NOT NULL,
    password VARCHAR (128) NOT NULL,
    email VARCHAR (355) UNIQUE NOT NULL,
    registered TIMESTAMP NOT NULL DEFAULT (NOW())
)`;


const bank_table_sql = 'insert into bank_table (name, bank_address) values ($1, $2)';

// const variables = ['UBA', '12 goland'];

const company_table_sql = 'insert into bank_table (name, company_address) values ($1, $2)';

const admin_table_sql = 'insert into bank_table (name, password, email) values ($1, $2, $3)';

// const variables = ['Beaulab', '12 goland'];

async function createTables() {
    const company = await pool.query(company_table);
    try {
      console.log('company table created', company);
    } catch (error) {
      console.log('company table not created');
    }

    const bank = await pool.query(bank_table);
    try {
      console.log('bank table created', bank);
    } catch (error) {
      console.log('bank table not created');
    }

    const users = await pool.query(employee_table);
    try {
      console.log('employee table created', users);
    } catch (error) {
      console.log('employee table not created');
    }

    const admin = await pool.query(admin_table);
    try {
      console.log('admin table created', admin);
    } catch (error) {
      console.log('admin table not created');
    }

  const bank1 = await pool.query(bank_table_sql, ['UBA', '12 goland']);
  try {
    console.log('Bank inserted', bank1);
  } catch (error) {
    console.log('Bank insertion failed');
  }

  const company1 = await pool.query(company_table_sql, ['Beaulab', '12 goland']);
  try {
    console.log('Company inserted', company1);
  } catch (error) {
    console.log('User insertion failed');
  }

  const admin = await pool.query(admin_table_sql, ['Beaulab', 'password', 'admin@mail.com']);
  try {
    console.log('Admin inserted', admin);
  } catch (error) {
    console.log('Admin insertion failed');
  }
}

createTables();

export default createTables;