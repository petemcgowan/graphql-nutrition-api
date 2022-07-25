import { ApolloServer } from "apollo-server";
import { schema } from "./schema";
import { dataSources } from "./dataSource";
import glycemicData from "./data/usdaNutrition.json";
import fs from "fs";

const server = new ApolloServer({ schema, dataSources });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});

// The following is for creating a sorted USDA nutrition file only

// let foodNutritionsNew = [];
// // todo using local for now
// // glycemicData.foodnutritions.map(item => {
// glycemicData.map((item) => {
//   foodNutritionsNew.push(item);
//   item.carbAmt = Math.round(item.carbAmt);
// });
// foodNutritionsNew.sort((a, b) => a.description.localeCompare(b.description));

// // Writing to followers JSON file
// let usdaNutritionSortedWS = fs.createWriteStream(
//   `usdaNutritionSorted_` + getDateString() + ".json"
// );
// usdaNutritionSortedWS.write(JSON.stringify(foodNutritionsNew));
// usdaNutritionSortedWS.end();

// // Day in file name
// function getDateString() {
//   const date = new Date();
//   const year = date.getFullYear();
//   const month = `${date.getMonth() + 1}`.padStart(2, "0");
//   const day = `${date.getDate()}`.padStart(2, "0");
//   return `${year}-${month}-${day}`;
// }
