const { connectDB, mongoose } = require("./db");
const User = require("./models/User");
const Task = require("./models/Task");

async function main() {
  try {
    await connectDB(); // Connect to the database

    // Clear existing data
    await User.deleteMany({});
    await Task.deleteMany({});
    console.log("Cleared existing data");

    // Create users
    await User.insertMany([
      {
        name: "Alice Dang",
        email: "alicedang.plp.com",
        password: "password123",
        role: "user",
      },
      {
        name: "Bob Smith",
        email: "bobsmith.plp.com",
        password: "password123",
        role: "admin",
      },
    ]);

    await Task.insertMany([
      {
        title: "Design",
        description: "design the site",
        status: "in-progress",
        owner: 'Bob Smith',
      },
      {
        title: "deployment",
        description: "deploy the site",
        status: "pending",
        owner: 'Alice Dang',
      },
    ]);

    console.log("data populated successfully");
    await mongoose.disconnect(); // Disconnect from the database
    console.log("MongoDB disconnected");
  } catch (error) {
    console.error("database failed:", error);
    process.exit(1); // Exit process with failure
  }
}

main();

