const { MongoClient } = require("mongodb");
 
// Replace the following with your Atlas connection string                                                                                                                                        
const url = "mongodb+srv://dbUser:lOckhEEd-69@cluster0.ynqrp.azure.mongodb.net/Session-Helper?retryWrites=true&w=majority";
const client = new MongoClient(url);
 
 // The database to use
const dbName = "Session-Helper";
                      
async function run() {
    try {
         await client.connect();
         console.log("Connected correctly to server");
         const db = client.db(dbName);

         // Use the collection "people"
         const userCol = db.collection("users");

         // Construct a document                                                                                                                                                              
         let userDocument = 
           {
             "name": "test1",
             "gm": false
            }

         // Insert a single document, wait for promise so we can read it back
         const p = await userCol.insertOne(userDocument);
         // Find one document
         const userDoc = await userCol.findOne();
         // Print to the console
         console.log(userDoc);

        } catch (err) {
         console.log(err.stack);
     }
 
     finally {
        await client.close();
    }
}

run().catch(console.dir);