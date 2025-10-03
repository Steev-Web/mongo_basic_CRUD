const { connectDB, mongoose } = require("./db");
const User = require("./models/User");
const Task = require("./models/Task");

async function main() {
  await connectDB(); // Connect to the database

  //Create

  const john = await User.create({ name: "John Doe", email: "john@plp.com", password: "password123" });
  const jane = await User.create({ name: "Jane Smith", email: "jane.plp.com", password: "password123", role: "admin" });
  console.log("Users created:", john, jane);

  //read
  const users = await User.find().select('name email');
  console.log("All users:", users);

  //update
  const userByEmail = await User.findOneAndUpdate({ email: "jane.plp.com" }, { email:'jane@plp.com' });
  console.log("update  jane's email:", userByEmail   );

  //delete
  const deletedUser = await User.findOneAndDelete({ email: "john@plp.com" });
  console.log("bye.user:", deletedUser);

  aggregation

  const byStatus = await Task.aggregate([
    { $group: { _id: "$status", count: { $sum: 1 } } },
  ]);
  console.log("Tasks by status:", byStatus);

  const byUser = await User.aggregate([
    { $group: { _id: "$role", count: { $sum: 1 } } },
  ]);
  console.log("user count:", byUser);

    await mongoose.disconnect(); // Disconnect from the database
}

main();
