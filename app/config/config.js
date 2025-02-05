import dotenv from 'dotenv';
dotenv.config();

// DATABASE INFO
export const DATABASE = process.env.DATABASE;
export const DB_USERNAME = process.env.DB_USERNAME;
export const DB_PASSWORD = process.env.DB_PASSWORD;

// TOKEN AUTH
export const JWT_SECRET = process.env.JWT_SECRET;
export const JWT_EXPIRATION_TIME = Number(process.env.JWT_EXPIRATION_TIME);

// EMAIL CONFIG
export const EMAIL_HOST = process.env.EMAIL_HOST;
export const EMAIL_PORT = process.env.EMAIL_PORT;
export const EMAIL_USER = process.env.EMAIL_USER;
export const EMAIL_PASSWORD = process.env.EMAIL_PASSWORD;
export const MAIL_ENCRYPTION = false;

// REQUEST LIMITING CONFIG
export const REQUEST_LIMIT_TIME = process.env.REQUEST_LIMIT_TIME;
export const REQUEST_LIMIT_NUMBER = process.env.REQUEST_LIMIT_NUMBER;

export const MAX_JSON_SIZE = process.env.MAX_JSON_SIZE;
export const WEB_CACHE = false;
export const URL_ENCODED = process.env.URL_ENCODED;
export const PORT = process.env.PORT;


