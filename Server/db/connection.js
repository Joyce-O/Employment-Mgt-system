import { Pool } from 'pg';
import dotenv from 'dotenv';


dotenv.config();

  let dbUrl = ({
    connectionString: process.env.DATABASE_URL
  });


const pool = new Pool(dbUrl);

export default pool;