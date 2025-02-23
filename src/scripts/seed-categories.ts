import { db } from "@/db";
import { categories } from "@/db/schema";

const names = [
  "Cars and vehicles",
  "Comedy",
  "Education",
  "Gaming",
  "Entertainment",
  "Film and animation",
  "How-to and style",
  "Music",
  "News and politics",
  "People and blogs",
  "Pets and animals",
  "Science and technology",
  "Sports",
  "Travel and events",
  "Non-profits and activism",
  "Autos and vehicles",
];

async function main() {
  console.log("Seeding categories...");

  try {
    const values = names.map((name) => {
      return {
        name,
        description: `Videos about ${name}`
      };
    });

    await db
      .insert(categories)
      .values(values);

      console.log("Categories seeded successfully");
      process.exit(0);
  } catch (error) {
    console.error("Failed to seed categories", error);
    process.exit(1);
  }
}

main();