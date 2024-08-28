import mongoose from "mongoose";

export async function connect() {
  try {
    mongoose.connect(process.env.MONGO_URI!);
    const connection = mongoose.connection;;

    connection.on("error", (err) => {
      process.exit();
    });

  } catch (error) {
    return null
  }
}
