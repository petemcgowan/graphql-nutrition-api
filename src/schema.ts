import { gql, IResolvers, makeExecutableSchema } from "apollo-server";

const usdaNutrition = require("./usdaNutrition");

const typeDefs = gql`
  type Foodnutrition {
    foodCode: String
    description: String
    fiberAmt: Float
    giAmt: Float
    glAmt: Float
    carbAmt: Float
    protein: Float
    fatAmt: Float
    satFatAmt: Float
    monoFatAmt: Float
    polyFatAmt: Float
    energyAmt: Float
    sugarsAmt: Float
    sodiumAmt: Float
  }

  type Query {
    foodnutritions: [Foodnutrition]
  }
`;

const resolvers: IResolvers = {
  Query: {
    foodnutritions: () => usdaNutrition.foodnutritions,
  },
};

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});
