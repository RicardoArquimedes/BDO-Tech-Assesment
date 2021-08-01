
const MongoClient = require("mongodb").MongoClient;

const MONGODB_URL =  "mongodb+srv://db_user_bocc:Pf880LKDydhD3GcH@cluster0.u9ylx.mongodb.net";

let cachedDb = null;
async function connectToDatabase() {
  if (cachedDb) {
    return cachedDb;
  }
  
  const client = await MongoClient.connect(MONGODB_URL);

  const db = await client.db("bocc_interview");
  cachedDb = db;
  return db;
}
exports.handler = async (event, context) => {
    
    let nit = event.queryStringParameters.nit;
    
    context.callbackWaitsForEmptyEventLoop = false;
    
    const db = await connectToDatabase();
    
    const customers = await db.collection("bocc_customers").find({"nit":nit}).limit(20).toArray();
    const response = {
        statusCode: 200,
        body: JSON.stringify(customers),
    };
    return response;
};
