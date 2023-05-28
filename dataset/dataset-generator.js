import fs from "fs";
import fastCsv from "fast-csv";

import { stressAmount } from "./constants/sleep.js";

import randomize from "./randomGenerator.js";

const date = new Date();

// Format date as YYYY-MM-DD
const formattedDate = `${date.getFullYear()}-${String(
  date.getMonth() + 1
).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}-${String(
  date.getHours()
).padStart(2, "0")}-${String(date.getMinutes()).padStart(2, "0")}-${String(
  date.getSeconds()
).padStart(2, "0")}`;

// Create filename
// const filename = `dataset-${formattedDate}.csv`;
// console.log("🚀 ~ filename:", filename);

// // Create a writable stream
// const writableStream = fs.createWriteStream(filename);

randomize(stressAmount);
// Prepare data
const data = [
  { firstname: "John", lastname: "Doe" },
  { firstname: "Jane", lastname: "Doe" },
];

// Write CSV data to stream
// fastCsv
//   .writeToStream(writableStream, data, { headers: true })
//   .on("finish", function () {
//     console.log("Done writing.");
//   });
