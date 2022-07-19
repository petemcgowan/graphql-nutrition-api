import { RequestOptions, RESTDataSource } from "apollo-datasource-rest";
import camelCaseKeys from "camelcase-keys";

// const ACCESS_KEY = "access key if needed";
// const API_URL = "https://endpoint.com";

export class NutritionAPI extends RESTDataSource {
  constructor() {
    super();
    console.log("NutitionAPI constructor called");
    // this.baseURL = API_URL;
  }
}

export const dataSources = () => ({ nutritionAPI: new NutritionAPI() });
