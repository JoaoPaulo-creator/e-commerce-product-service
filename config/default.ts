require('dotenv').config()


const DB_USER = process.env.DB_USER
const DB_PWD = process.env.DB_PASS

export default {
    port: 3333,
    dbUri: `mongodb+srv://${DB_USER}:${DB_PWD}@ecommercecrupapi.cxzqozi.mongodb.net/?retryWrites=true&w=majority`
}