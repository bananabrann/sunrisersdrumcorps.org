import { IResult, MSSQLError } from "mssql";
import { defaultConfig } from "next/dist/server/config-shared";
import { Config } from "serverless-mysql";

const sql = require("mssql");

export interface User {
  id: number;
  username: string;
  password: string;
  superpowers: boolean;
}

const config = {
  authentication: {
    options: {
      userName: process.env.DB_ADMIN,
      password: process.env.DB_PASS,
    },
    type: "default",
  },
  server: process.env.DB_HOST,
  options: {
    database: process.env.DB_NAME,
    encrypt: true,
  },
};

export async function query(
  query: string
) {
  process.stdout.write("Query called ... ")

  const result: Promise<IResult<any>> | MSSQLError = (async () => {
    try {
      await sql.connect(config);
      const result = await sql.query(query);
      process.stdout.write("OK\n");
      
      return result;
    } catch (err) {
      process.stdout.write("ERROR\n");
      throw err;
    }
  })();

  return result;
}
