const foodnutritions = [
  {
    foodCode: "62101100",
    description: "Apple, dried",
    fiberAmt: 8.7,
    giAmt: 29,
    glAmt: 4,
    carbAmt: 66,
    protein: 0.93,
    fatAmt: 0.32,
    satFatAmt: 0.052,
    monoFatAmt: 0.013,
    polyFatAmt: 0.093,
    energyAmt: 243,
    sugarsAmt: 57.2,
    sodiumAmt: 87,
  },
  {
    foodCode: "63101000",
    description: "Apple, raw",
    fiberAmt: 2.4,
    giAmt: 82,
    glAmt: 12,
    carbAmt: 14,
    protein: 0.26,
    fatAmt: 0.17,
    satFatAmt: 0.028,
    monoFatAmt: 0.007,
    polyFatAmt: 0.051,
    energyAmt: 52,
    sugarsAmt: 10.4,
    sodiumAmt: 1,
  },
  {
    foodCode: "51180010",
    description: "Bagel",
    fiberAmt: 1.6,
    giAmt: 73,
    glAmt: 11,
    carbAmt: 52,
    protein: 10.6,
    fatAmt: 1.32,
    satFatAmt: 0.36,
    monoFatAmt: 0.39,
    polyFatAmt: 0.526,
    energyAmt: 264,
    sugarsAmt: 8.43,
    sodiumAmt: 422,
  },
  {
    foodCode: "41201010",
    description: "Baked beans",
    fiberAmt: 4.4,
    giAmt: 40,
    glAmt: 6,
    carbAmt: 22,
    protein: 4.52,
    fatAmt: 0.89,
    satFatAmt: 0.231,
    monoFatAmt: 0.222,
    polyFatAmt: 0.4,
    energyAmt: 105,
    sugarsAmt: 8.23,
    sodiumAmt: 391,
  },
  {
    foodCode: "62107200",
    description: "Banana chips",
    fiberAmt: 7.7,
    giAmt: 44,
    glAmt: 11,
    carbAmt: 58,
    protein: 2.3,
    fatAmt: 33.6,
    satFatAmt: 29,
    monoFatAmt: 1.95,
    polyFatAmt: 0.63,
    energyAmt: 519,
    sugarsAmt: 35.3,
    sodiumAmt: 6,
  },
  {
    foodCode: "63107010",
    description: "Banana, raw",
    fiberAmt: 2.6,
    giAmt: 57,
    glAmt: 9,
    carbAmt: 23,
    protein: 1.09,
    fatAmt: 0.33,
    satFatAmt: 0.112,
    monoFatAmt: 0.032,
    polyFatAmt: 0.073,
    energyAmt: 89,
    sugarsAmt: 12.2,
    sodiumAmt: 1,
  },
  {
    foodCode: "74406010",
    description: "Barbecue sauce",
    fiberAmt: 0.9,
    giAmt: 47,
    glAmt: 7,
    carbAmt: 41,
    protein: 0.82,
    fatAmt: 0.63,
    satFatAmt: 0.045,
    monoFatAmt: 0.082,
    polyFatAmt: 0.101,
    energyAmt: 172,
    sugarsAmt: 33.2,
    sodiumAmt: 1030,
  },
  {
    foodCode: "93101000",
    description: "Beer",
    fiberAmt: 0,
    giAmt: 65,
    glAmt: 16,
    carbAmt: 4,
    protein: 0.46,
    fatAmt: 0,
    satFatAmt: 0,
    monoFatAmt: 0,
    polyFatAmt: 0,
    energyAmt: 43,
    sugarsAmt: 0,
    sodiumAmt: 4,
  },
  {
    foodCode: "51182010",
    description: "Bread stuffing",
    fiberAmt: 0.9,
    giAmt: 75,
    glAmt: 11,
    carbAmt: 22,
    protein: 3.14,
    fatAmt: 8.51,
    satFatAmt: 1.66,
    monoFatAmt: 4.06,
    polyFatAmt: 2.48,
    energyAmt: 177,
    sugarsAmt: 2.35,
    sodiumAmt: 471,
  },
  {
    foodCode: "51808000",
    description: "Bread, gluten free",
    fiberAmt: 4.3,
    giAmt: 52,
    glAmt: 8,
    carbAmt: 46,
    protein: 4.31,
    fatAmt: 5.24,
    satFatAmt: 0.977,
    monoFatAmt: 2.01,
    polyFatAmt: 0.516,
    energyAmt: 248,
    sugarsAmt: 3.53,
    sodiumAmt: 447,
  },
  {
    foodCode: "52403000",
    description: "Bread, nut",
    fiberAmt: 1.3,
    giAmt: 59,
    glAmt: 9,
    carbAmt: 50,
    protein: 6.49,
    fatAmt: 19.6,
    satFatAmt: 2.95,
    monoFatAmt: 6.65,
    polyFatAmt: 9.01,
    energyAmt: 393,
    sugarsAmt: 26,
    sodiumAmt: 338,
  },
  {
    foodCode: "51404010",
    description: "Bread, pumpernickel",
    fiberAmt: 6.5,
    giAmt: 55,
    glAmt: 8,
    carbAmt: 48,
    protein: 8.7,
    fatAmt: 3.1,
    satFatAmt: 0.437,
    monoFatAmt: 0.932,
    polyFatAmt: 1.24,
    energyAmt: 250,
    sugarsAmt: 0.53,
    sodiumAmt: 596,
  },
  {
    foodCode: "51401010",
    description: "Bread, rye",
    fiberAmt: 5.8,
    giAmt: 56,
    glAmt: 8,
    carbAmt: 48,
    protein: 8.5,
    fatAmt: 3.3,
    satFatAmt: 0.626,
    monoFatAmt: 1.31,
    polyFatAmt: 0.799,
    energyAmt: 259,
    sugarsAmt: 3.85,
    sodiumAmt: 603,
  },
  {
    foodCode: "51101000",
    description: "Bread, white",
    fiberAmt: 2.3,
    giAmt: 87,
    glAmt: 30,
    carbAmt: 49,
    protein: 9.43,
    fatAmt: 3.59,
    satFatAmt: 0.821,
    monoFatAmt: 0.717,
    polyFatAmt: 1.87,
    energyAmt: 270,
    sugarsAmt: 5.34,
    sodiumAmt: 477,
  },
  {
    foodCode: "51300110",
    description: "Bread, whole wheat",
    fiberAmt: 6,
    giAmt: 49,
    glAmt: 17,
    carbAmt: 43,
    protein: 12.3,
    fatAmt: 3.55,
    satFatAmt: 0.732,
    monoFatAmt: 0.616,
    polyFatAmt: 1.61,
    energyAmt: 254,
    sugarsAmt: 4.41,
    sodiumAmt: 450,
  },
  {
    foodCode: "51167000",
    description: "Brioche",
    fiberAmt: 1.5,
    giAmt: 66,
    glAmt: 20,
    carbAmt: 36,
    protein: 8.76,
    fatAmt: 26.8,
    satFatAmt: 15.7,
    monoFatAmt: 7.89,
    polyFatAmt: 1.55,
    energyAmt: 418,
    sugarsAmt: 3.01,
    sodiumAmt: 440,
  },
  {
    foodCode: "63109010",
    description: "Cantaloupe, raw",
    fiberAmt: 0.8,
    giAmt: 65,
    glAmt: 10,
    carbAmt: 8,
    protein: 0.82,
    fatAmt: 0.18,
    satFatAmt: 0.051,
    monoFatAmt: 0.003,
    polyFatAmt: 0.081,
    energyAmt: 34,
    sugarsAmt: 7.88,
    sodiumAmt: 30,
  },
  {
    foodCode: "73101010",
    description: "Carrots, raw",
    fiberAmt: 2.8,
    giAmt: 39,
    glAmt: 4,
    carbAmt: 10,
    protein: 0.93,
    fatAmt: 0.24,
    satFatAmt: 0.032,
    monoFatAmt: 0.012,
    polyFatAmt: 0.102,
    energyAmt: 41,
    sugarsAmt: 4.74,
    sodiumAmt: 69,
  },
  {
    foodCode: "63115010",
    description: "Cherries, raw",
    fiberAmt: 2.1,
    giAmt: 22,
    glAmt: 3,
    carbAmt: 16,
    protein: 1.06,
    fatAmt: 0.2,
    satFatAmt: 0.038,
    monoFatAmt: 0.047,
    polyFatAmt: 0.052,
    energyAmt: 63,
    sugarsAmt: 12.8,
    sodiumAmt: 0,
  },
  {
    foodCode: "42105000",
    description: "Chestnuts",
    fiberAmt: 5.1,
    giAmt: 58,
    glAmt: 3,
    carbAmt: 53,
    protein: 3.17,
    fatAmt: 2.2,
    satFatAmt: 0.414,
    monoFatAmt: 0.759,
    polyFatAmt: 0.869,
    energyAmt: 245,
    sugarsAmt: 10.6,
    sodiumAmt: 2,
  },
  {
    foodCode: "43108010",
    description: "Chia seeds",
    fiberAmt: 27.3,
    giAmt: 50,
    glAmt: 8,
    carbAmt: 29,
    protein: 18.3,
    fatAmt: 42.2,
    satFatAmt: 3.66,
    monoFatAmt: 7.53,
    polyFatAmt: 28.7,
    energyAmt: 534,
    sugarsAmt: 1.55,
    sodiumAmt: 30,
  },
  {
    foodCode: "27146150",
    description: "Chicken curry",
    fiberAmt: 1.4,
    giAmt: 81,
    glAmt: 28,
    carbAmt: 6,
    protein: 6.47,
    fatAmt: 6.45,
    satFatAmt: 1.56,
    monoFatAmt: 2.4,
    polyFatAmt: 2.02,
    energyAmt: 106,
    sugarsAmt: 2.6,
    sodiumAmt: 376,
  },
  {
    foodCode: "91705400",
    description: "Chocolate, white",
    fiberAmt: 0.2,
    giAmt: 44,
    glAmt: 11,
    carbAmt: 59,
    protein: 5.87,
    fatAmt: 32.1,
    satFatAmt: 19.4,
    monoFatAmt: 9.1,
    polyFatAmt: 1.01,
    energyAmt: 539,
    sugarsAmt: 59,
    sodiumAmt: 90,
  },
  {
    foodCode: "63409020",
    description: "Chutney",
    fiberAmt: 1,
    giAmt: 31,
    glAmt: 11,
    carbAmt: 61,
    protein: 0.33,
    fatAmt: 0.06,
    satFatAmt: 0.009,
    monoFatAmt: 0.033,
    polyFatAmt: 0,
    energyAmt: 246,
    sugarsAmt: 42.7,
    sodiumAmt: 802,
  },
  {
    foodCode: "11370000",
    description: "Coconut milk",
    fiberAmt: 0,
    giAmt: 52,
    glAmt: 18,
    carbAmt: 3,
    protein: 0.21,
    fatAmt: 2.08,
    satFatAmt: 2.08,
    monoFatAmt: 0,
    polyFatAmt: 0,
    energyAmt: 31,
    sugarsAmt: 2.5,
    sodiumAmt: 19,
  },
  {
    foodCode: "82101500",
    description: "Coconut oil",
    fiberAmt: 0,
    giAmt: 52,
    glAmt: 8,
    carbAmt: 1,
    protein: 0,
    fatAmt: 99.1,
    satFatAmt: 82.5,
    monoFatAmt: 6.31,
    polyFatAmt: 1.7,
    energyAmt: 833,
    sugarsAmt: 0,
    sodiumAmt: 0,
  },
  {
    foodCode: "42106000",
    description: "Coconut, fresh",
    fiberAmt: 9,
    giAmt: 53,
    glAmt: 13,
    carbAmt: 15,
    protein: 3.33,
    fatAmt: 33.5,
    satFatAmt: 29.7,
    monoFatAmt: 1.42,
    polyFatAmt: 0.366,
    energyAmt: 354,
    sugarsAmt: 6.23,
    sodiumAmt: 20,
  },
  {
    foodCode: "54401021",
    description: "Corn chips, plain",
    fiberAmt: 4,
    giAmt: 72,
    glAmt: 18,
    carbAmt: 57,
    protein: 6.12,
    fatAmt: 33.1,
    satFatAmt: 4.3,
    monoFatAmt: 9.06,
    polyFatAmt: 16.3,
    energyAmt: 535,
    sugarsAmt: 0.27,
    sodiumAmt: 817,
  },
  {
    foodCode: "91301030",
    description: "Corn syrup",
    fiberAmt: 0,
    giAmt: 115,
    glAmt: 23,
    carbAmt: 77,
    protein: 0,
    fatAmt: 0.2,
    satFatAmt: 0,
    monoFatAmt: 0,
    polyFatAmt: 0,
    energyAmt: 283,
    sugarsAmt: 76.8,
    sodiumAmt: 62,
  },
  {
    foodCode: "51166000",
    description: "Croissant",
    fiberAmt: 2.6,
    giAmt: 65,
    glAmt: 23,
    carbAmt: 46,
    protein: 8.2,
    fatAmt: 21,
    satFatAmt: 11.7,
    monoFatAmt: 5.52,
    polyFatAmt: 1.09,
    energyAmt: 406,
    sugarsAmt: 11.3,
    sodiumAmt: 384,
  },
  {
    foodCode: "51185000",
    description: "Croutons",
    fiberAmt: 5,
    giAmt: 20,
    glAmt: 4,
    carbAmt: 64,
    protein: 10.8,
    fatAmt: 18.3,
    satFatAmt: 5.25,
    monoFatAmt: 9.5,
    polyFatAmt: 2.37,
    energyAmt: 465,
    sugarsAmt: 4.41,
    sodiumAmt: 1330,
  },
  {
    foodCode: "52101040",
    description: "Crumpet",
    fiberAmt: 3.5,
    giAmt: 70,
    glAmt: 21,
    carbAmt: 44,
    protein: 8.87,
    fatAmt: 1.69,
    satFatAmt: 0.733,
    monoFatAmt: 0.383,
    polyFatAmt: 0.498,
    energyAmt: 227,
    sugarsAmt: 3.53,
    sodiumAmt: 425,
  },
  {
    foodCode: "81312100",
    description: "Curry sauce",
    fiberAmt: 1.4,
    giAmt: 49,
    glAmt: 7,
    carbAmt: 5,
    protein: 1.36,
    fatAmt: 8.14,
    satFatAmt: 2.48,
    monoFatAmt: 2.68,
    polyFatAmt: 2.59,
    energyAmt: 93,
    sugarsAmt: 3.41,
    sodiumAmt: 384,
  },
  {
    foodCode: "13210300",
    description: "Custard",
    fiberAmt: 0,
    giAmt: 37,
    glAmt: 7,
    carbAmt: 11,
    protein: 5.11,
    fatAmt: 3.43,
    satFatAmt: 1.56,
    monoFatAmt: 1.02,
    polyFatAmt: 0.395,
    energyAmt: 95,
    sugarsAmt: 10.9,
    sodiumAmt: 86,
  },
  {
    foodCode: "62110100",
    description: "Date",
    fiberAmt: 8,
    giAmt: 94,
    glAmt: 33,
    carbAmt: 75,
    protein: 2.45,
    fatAmt: 0.39,
    satFatAmt: 0.032,
    monoFatAmt: 0.036,
    polyFatAmt: 0.019,
    energyAmt: 282,
    sugarsAmt: 63.4,
    sodiumAmt: 2,
  },
  {
    foodCode: "41209000",
    description: "Falafel",
    fiberAmt: 4.8,
    giAmt: 86,
    glAmt: 30,
    carbAmt: 29,
    protein: 8.24,
    fatAmt: 41.2,
    satFatAmt: 5.55,
    monoFatAmt: 16.8,
    polyFatAmt: 17,
    energyAmt: 509,
    sugarsAmt: 4.52,
    sodiumAmt: 499,
  },
  {
    foodCode: "13210350",
    description: "Flan",
    fiberAmt: 0,
    giAmt: 57,
    glAmt: 11,
    carbAmt: 28,
    protein: 5.27,
    fatAmt: 4.83,
    satFatAmt: 2.22,
    monoFatAmt: 1.65,
    polyFatAmt: 0.554,
    energyAmt: 174,
    sugarsAmt: 28.1,
    sodiumAmt: 167,
  },
  {
    foodCode: "71970200",
    description: "Fufu",
    fiberAmt: 3.1,
    giAmt: 31,
    glAmt: 11,
    carbAmt: 34,
    protein: 1.5,
    fatAmt: 2.98,
    satFatAmt: 0.835,
    monoFatAmt: 1.05,
    polyFatAmt: 0.902,
    energyAmt: 166,
    sugarsAmt: 1.09,
    sodiumAmt: 144,
  },
  {
    foodCode: "93503000",
    description: "Gin",
    fiberAmt: 0,
    giAmt: 48,
    glAmt: 7,
    carbAmt: 0,
    protein: 0,
    fatAmt: 0,
    satFatAmt: 0,
    monoFatAmt: 0,
    polyFatAmt: 0,
    energyAmt: 231,
    sugarsAmt: 0,
    sodiumAmt: 1,
  },
  {
    foodCode: "64116020",
    description: "Grape juice, 100%",
    fiberAmt: 0.2,
    giAmt: 63,
    glAmt: 13,
    carbAmt: 15,
    protein: 0.37,
    fatAmt: 0.13,
    satFatAmt: 0.025,
    monoFatAmt: 0.003,
    polyFatAmt: 0.022,
    energyAmt: 60,
    sugarsAmt: 14.2,
    sodiumAmt: 5,
  },
  {
    foodCode: "61101010",
    description: "Grapefruit, raw",
    fiberAmt: 1.6,
    giAmt: 26,
    glAmt: 4,
    carbAmt: 11,
    protein: 0.77,
    fatAmt: 0.14,
    satFatAmt: 0.021,
    monoFatAmt: 0.02,
    polyFatAmt: 0.036,
    energyAmt: 42,
    sugarsAmt: 6.89,
    sodiumAmt: 0,
  },
  {
    foodCode: "63125010",
    description: "Guava, raw",
    fiberAmt: 5.4,
    giAmt: 49,
    glAmt: 7,
    carbAmt: 14,
    protein: 2.55,
    fatAmt: 0.95,
    satFatAmt: 0.272,
    monoFatAmt: 0.087,
    polyFatAmt: 0.401,
    energyAmt: 68,
    sugarsAmt: 8.92,
    sodiumAmt: 2,
  },
  {
    foodCode: "42107000",
    description: "Hazelnuts",
    fiberAmt: 9.7,
    giAmt: 51,
    glAmt: 10,
    carbAmt: 17,
    protein: 15,
    fatAmt: 60.8,
    satFatAmt: 4.46,
    monoFatAmt: 45.7,
    polyFatAmt: 7.92,
    energyAmt: 628,
    sugarsAmt: 4.34,
    sodiumAmt: 0,
  },
  {
    foodCode: "91302010",
    description: "Honey",
    fiberAmt: 0.2,
    giAmt: 26,
    glAmt: 5,
    carbAmt: 82,
    protein: 0.3,
    fatAmt: 0,
    satFatAmt: 0,
    monoFatAmt: 0,
    polyFatAmt: 0,
    energyAmt: 304,
    sugarsAmt: 82.1,
    sodiumAmt: 4,
  },
  {
    foodCode: "13110110",
    description: "Ice cream, chocolate",
    fiberAmt: 1.2,
    giAmt: 68,
    glAmt: 14,
    carbAmt: 28,
    protein: 3.8,
    fatAmt: 11,
    satFatAmt: 6.8,
    monoFatAmt: 3.21,
    polyFatAmt: 0.41,
    energyAmt: 216,
    sugarsAmt: 25.4,
    sodiumAmt: 76,
  },
  {
    foodCode: "41311030",
    description: "Lentil curry",
    fiberAmt: 3.4,
    giAmt: 43,
    glAmt: 15,
    carbAmt: 12,
    protein: 3.67,
    fatAmt: 5.61,
    satFatAmt: 1.3,
    monoFatAmt: 1.96,
    polyFatAmt: 2.03,
    energyAmt: 110,
    sugarsAmt: 3.24,
    sodiumAmt: 383,
  },
  {
    foodCode: "91721000",
    description: "Licorice",
    fiberAmt: 0.2,
    giAmt: 78,
    glAmt: 20,
    carbAmt: 94,
    protein: 0,
    fatAmt: 0.05,
    satFatAmt: 0,
    monoFatAmt: 0,
    polyFatAmt: 0,
    energyAmt: 375,
    sugarsAmt: 70,
    sodiumAmt: 50,
  },
  {
    foodCode: "63126510",
    description: "Lychee",
    fiberAmt: 1.3,
    giAmt: 44,
    glAmt: 9,
    carbAmt: 17,
    protein: 0.83,
    fatAmt: 0.44,
    satFatAmt: 0.099,
    monoFatAmt: 0.12,
    polyFatAmt: 0.132,
    energyAmt: 66,
    sugarsAmt: 15.2,
    sodiumAmt: 1,
  },
  {
    foodCode: "63129050",
    description: "Mango, frozen",
    fiberAmt: 1.6,
    giAmt: 31,
    glAmt: 5,
    carbAmt: 15,
    protein: 0.82,
    fatAmt: 0.38,
    satFatAmt: 0.092,
    monoFatAmt: 0.14,
    polyFatAmt: 0.071,
    energyAmt: 60,
    sugarsAmt: 13.7,
    sodiumAmt: 1,
  },
  {
    foodCode: "63129010",
    description: "Mango, raw",
    fiberAmt: 1.6,
    giAmt: 48,
    glAmt: 7,
    carbAmt: 15,
    protein: 0.82,
    fatAmt: 0.38,
    satFatAmt: 0.092,
    monoFatAmt: 0.14,
    polyFatAmt: 0.071,
    energyAmt: 60,
    sugarsAmt: 13.7,
    sodiumAmt: 1,
  },
  {
    foodCode: "91723000",
    description: "Marshmallow",
    fiberAmt: 0.1,
    giAmt: 67,
    glAmt: 17,
    carbAmt: 81,
    protein: 1.8,
    fatAmt: 0.2,
    satFatAmt: 0.056,
    monoFatAmt: 0.08,
    polyFatAmt: 0.047,
    energyAmt: 318,
    sugarsAmt: 57.6,
    sodiumAmt: 80,
  },
  {
    foodCode: "51187000",
    description: "Melba toast",
    fiberAmt: 6.3,
    giAmt: 73,
    glAmt: 11,
    carbAmt: 77,
    protein: 12.1,
    fatAmt: 3.2,
    satFatAmt: 0.445,
    monoFatAmt: 0.782,
    polyFatAmt: 1.28,
    energyAmt: 390,
    sugarsAmt: 0.94,
    sodiumAmt: 598,
  },
  {
    foodCode: "11220000",
    description: "Milk, condensed, sweetened",
    fiberAmt: 0,
    giAmt: 61,
    glAmt: 6,
    carbAmt: 54,
    protein: 7.91,
    fatAmt: 8.7,
    satFatAmt: 5.49,
    monoFatAmt: 2.43,
    polyFatAmt: 0.337,
    energyAmt: 321,
    sugarsAmt: 54.4,
    sodiumAmt: 127,
  },
  {
    foodCode: "11000000",
    description: "Milk, human",
    fiberAmt: 0,
    giAmt: 38,
    glAmt: 4,
    carbAmt: 7,
    protein: 1.03,
    fatAmt: 4.38,
    satFatAmt: 2.01,
    monoFatAmt: 1.66,
    polyFatAmt: 0.497,
    energyAmt: 70,
    sugarsAmt: 6.89,
    sodiumAmt: 17,
  },
  {
    foodCode: "41420110",
    description: "Miso",
    fiberAmt: 5.4,
    giAmt: 61,
    glAmt: 21,
    carbAmt: 25,
    protein: 12.8,
    fatAmt: 6.01,
    satFatAmt: 1.02,
    monoFatAmt: 1.12,
    polyFatAmt: 2.88,
    energyAmt: 198,
    sugarsAmt: 6.2,
    sodiumAmt: 3730,
  },
  {
    foodCode: "91303000",
    description: "Molasses",
    fiberAmt: 0,
    giAmt: 59,
    glAmt: 9,
    carbAmt: 75,
    protein: 0,
    fatAmt: 0.1,
    satFatAmt: 0.018,
    monoFatAmt: 0.032,
    polyFatAmt: 0.05,
    energyAmt: 290,
    sugarsAmt: 74.7,
    sodiumAmt: 37,
  },
  {
    foodCode: "28522000",
    description: "Mole sauce",
    fiberAmt: 1,
    giAmt: 66,
    glAmt: 23,
    carbAmt: 11,
    protein: 0.98,
    fatAmt: 3.82,
    satFatAmt: 1.88,
    monoFatAmt: 1.06,
    polyFatAmt: 0.345,
    energyAmt: 75,
    sugarsAmt: 7.1,
    sodiumAmt: 493,
  },
  {
    foodCode: "13250000",
    description: "Mousse",
    fiberAmt: 0.6,
    giAmt: 32,
    glAmt: 6,
    carbAmt: 16,
    protein: 4.36,
    fatAmt: 15,
    satFatAmt: 8.67,
    monoFatAmt: 4.41,
    polyFatAmt: 0.839,
    energyAmt: 209,
    sugarsAmt: 15.1,
    sodiumAmt: 35,
  },
  {
    foodCode: "52306010",
    description: "Muffin, plain",
    fiberAmt: 0.8,
    giAmt: 46,
    glAmt: 14,
    carbAmt: 52,
    protein: 5.78,
    fatAmt: 16,
    satFatAmt: 2.68,
    monoFatAmt: 6.41,
    polyFatAmt: 6.09,
    energyAmt: 370,
    sugarsAmt: 27.5,
    sodiumAmt: 360,
  },
  {
    foodCode: "52304000",
    description: "Muffin, whole grain",
    fiberAmt: 1.8,
    giAmt: 45,
    glAmt: 7,
    carbAmt: 46,
    protein: 6.61,
    fatAmt: 17.8,
    satFatAmt: 2.98,
    monoFatAmt: 7.09,
    polyFatAmt: 6.79,
    energyAmt: 362,
    sugarsAmt: 19.9,
    sodiumAmt: 391,
  },
  {
    foodCode: "41420200",
    description: "Natto",
    fiberAmt: 5.4,
    giAmt: 56,
    glAmt: 20,
    carbAmt: 13,
    protein: 19.4,
    fatAmt: 11,
    satFatAmt: 1.59,
    monoFatAmt: 2.43,
    polyFatAmt: 6.21,
    energyAmt: 211,
    sugarsAmt: 4.89,
    sodiumAmt: 7,
  },
  {
    foodCode: "93301130",
    description: "Old fashioned",
    fiberAmt: 0.5,
    giAmt: 36,
    glAmt: 11,
    carbAmt: 6,
    protein: 0.16,
    fatAmt: 0.04,
    satFatAmt: 0.004,
    monoFatAmt: 0.006,
    polyFatAmt: 0.007,
    energyAmt: 164,
    sugarsAmt: 5.57,
    sodiumAmt: 4,
  },
  {
    foodCode: "82104000",
    description: "Olive oil",
    fiberAmt: 0,
    giAmt: 55,
    glAmt: 8,
    carbAmt: 0,
    protein: 0,
    fatAmt: 100,
    satFatAmt: 13.8,
    monoFatAmt: 73,
    polyFatAmt: 10.5,
    energyAmt: 884,
    sugarsAmt: 0,
    sodiumAmt: 2,
  },
  {
    foodCode: "93301132",
    description: "Orange Blossom",
    fiberAmt: 0.2,
    giAmt: 42,
    glAmt: 8,
    carbAmt: 10,
    protein: 0.5,
    fatAmt: 0.09,
    satFatAmt: 0.01,
    monoFatAmt: 0.016,
    polyFatAmt: 0.022,
    energyAmt: 99,
    sugarsAmt: 7.94,
    sodiumAmt: 2,
  },
  {
    foodCode: "55105000",
    description: "Pancakes, buckwheat",
    fiberAmt: 3.5,
    giAmt: 102,
    glAmt: 31,
    carbAmt: 32,
    protein: 8.04,
    fatAmt: 12.7,
    satFatAmt: 3.25,
    monoFatAmt: 4.57,
    polyFatAmt: 3.95,
    energyAmt: 267,
    sugarsAmt: 5.56,
    sodiumAmt: 339,
  },
  {
    foodCode: "56140100",
    description: "Pasta, gluten free",
    fiberAmt: 1.4,
    giAmt: 55,
    glAmt: 22,
    carbAmt: 38,
    protein: 3.2,
    fatAmt: 1,
    satFatAmt: 0.15,
    monoFatAmt: 0.259,
    polyFatAmt: 0.329,
    energyAmt: 179,
    sugarsAmt: 0,
    sodiumAmt: 4,
  },
  {
    foodCode: "53452400",
    description: "Pastry, puff",
    fiberAmt: 1.5,
    giAmt: 47,
    glAmt: 14,
    carbAmt: 46,
    protein: 7.4,
    fatAmt: 38.5,
    satFatAmt: 5.5,
    monoFatAmt: 8.83,
    polyFatAmt: 22.2,
    energyAmt: 558,
    sugarsAmt: 0.75,
    sodiumAmt: 253,
  },
  {
    foodCode: "75416500",
    description: "Pea salad",
    fiberAmt: 2.7,
    giAmt: 6,
    glAmt: 2,
    carbAmt: 11,
    protein: 3.01,
    fatAmt: 14,
    satFatAmt: 2.2,
    monoFatAmt: 3.12,
    polyFatAmt: 8.34,
    energyAmt: 179,
    sugarsAmt: 4.9,
    sodiumAmt: 251,
  },
  {
    foodCode: "62116100",
    description: "Peach, dried",
    fiberAmt: 8.2,
    giAmt: 35,
    glAmt: 5,
    carbAmt: 61,
    protein: 3.61,
    fatAmt: 0.76,
    satFatAmt: 0.082,
    monoFatAmt: 0.278,
    polyFatAmt: 0.367,
    energyAmt: 239,
    sugarsAmt: 41.7,
    sodiumAmt: 7,
  },
  {
    foodCode: "63135010",
    description: "Peach, raw",
    fiberAmt: 1.5,
    giAmt: 57,
    glAmt: 9,
    carbAmt: 10,
    protein: 0.91,
    fatAmt: 0.27,
    satFatAmt: 0.019,
    monoFatAmt: 0.067,
    polyFatAmt: 0.086,
    energyAmt: 42,
    sugarsAmt: 8.39,
    sodiumAmt: 13,
  },
  {
    foodCode: "42202000",
    description: "Peanut butter",
    fiberAmt: 4.8,
    giAmt: 47,
    glAmt: 9,
    carbAmt: 22,
    protein: 22.5,
    fatAmt: 51.1,
    satFatAmt: 10.1,
    monoFatAmt: 25.4,
    polyFatAmt: 12.3,
    energyAmt: 597,
    sugarsAmt: 10.5,
    sodiumAmt: 429,
  },
  {
    foodCode: "63137050",
    description: "Pear, Asian, raw",
    fiberAmt: 3.6,
    giAmt: 26,
    glAmt: 4,
    carbAmt: 11,
    protein: 0.5,
    fatAmt: 0.23,
    satFatAmt: 0.012,
    monoFatAmt: 0.049,
    polyFatAmt: 0.055,
    energyAmt: 42,
    sugarsAmt: 7.05,
    sodiumAmt: 0,
  },
  {
    foodCode: "62119100",
    description: "Pear, dried",
    fiberAmt: 7.5,
    giAmt: 43,
    glAmt: 6,
    carbAmt: 70,
    protein: 1.87,
    fatAmt: 0.63,
    satFatAmt: 0.035,
    monoFatAmt: 0.132,
    polyFatAmt: 0.148,
    energyAmt: 262,
    sugarsAmt: 62.2,
    sodiumAmt: 6,
  },
  {
    foodCode: "63137010",
    description: "Pear, raw",
    fiberAmt: 3.1,
    giAmt: 43,
    glAmt: 6,
    carbAmt: 15,
    protein: 0.36,
    fatAmt: 0.14,
    satFatAmt: 0.022,
    monoFatAmt: 0.084,
    polyFatAmt: 0.094,
    energyAmt: 57,
    sugarsAmt: 9.75,
    sodiumAmt: 1,
  },
  {
    foodCode: "28310330",
    description: "Pho",
    fiberAmt: 0.6,
    giAmt: 94,
    glAmt: 33,
    carbAmt: 10,
    protein: 6.15,
    fatAmt: 2.26,
    satFatAmt: 0.672,
    monoFatAmt: 0.904,
    polyFatAmt: 0.359,
    energyAmt: 88,
    sugarsAmt: 0.77,
    sodiumAmt: 403,
  },
  {
    foodCode: "42113000",
    description: "Pine nuts",
    fiberAmt: 3.7,
    giAmt: 37,
    glAmt: 13,
    carbAmt: 13,
    protein: 13.7,
    fatAmt: 68.4,
    satFatAmt: 4.9,
    monoFatAmt: 18.8,
    polyFatAmt: 34.1,
    energyAmt: 673,
    sugarsAmt: 3.59,
    sodiumAmt: 2,
  },
  {
    foodCode: "63141010",
    description: "Pineapple, raw",
    fiberAmt: 1.4,
    giAmt: 82,
    glAmt: 12,
    carbAmt: 13,
    protein: 0.54,
    fatAmt: 0.12,
    satFatAmt: 0.009,
    monoFatAmt: 0.013,
    polyFatAmt: 0.04,
    energyAmt: 50,
    sugarsAmt: 9.85,
    sodiumAmt: 1,
  },
  {
    foodCode: "71980100",
    description: "Poi",
    fiberAmt: 4.4,
    giAmt: 67,
    glAmt: 23,
    carbAmt: 28,
    protein: 1.61,
    fatAmt: 0.22,
    satFatAmt: 0.044,
    monoFatAmt: 0.017,
    polyFatAmt: 0.089,
    energyAmt: 120,
    sugarsAmt: 0.43,
    sodiumAmt: 12,
  },
  {
    foodCode: "91735000",
    description: "Pralines",
    fiberAmt: 1.1,
    giAmt: 15,
    glAmt: 3,
    carbAmt: 78,
    protein: 2.1,
    fatAmt: 10.2,
    satFatAmt: 1.11,
    monoFatAmt: 5.62,
    polyFatAmt: 3.06,
    energyAmt: 396,
    sugarsAmt: 75.8,
    sodiumAmt: 319,
  },
  {
    foodCode: "62125100",
    description: "Raisins",
    fiberAmt: 4.5,
    giAmt: 66,
    glAmt: 10,
    carbAmt: 79,
    protein: 3.3,
    fatAmt: 0.25,
    satFatAmt: 0.094,
    monoFatAmt: 0.024,
    polyFatAmt: 0.053,
    energyAmt: 299,
    sugarsAmt: 65.2,
    sodiumAmt: 26,
  },
  {
    foodCode: "41205010",
    description: "Refried beans",
    fiberAmt: 3.7,
    giAmt: 81,
    glAmt: 28,
    carbAmt: 14,
    protein: 4.98,
    fatAmt: 2.01,
    satFatAmt: 0.631,
    monoFatAmt: 0.601,
    polyFatAmt: 0.543,
    energyAmt: 90,
    sugarsAmt: 0.54,
    sodiumAmt: 370,
  },
  {
    foodCode: "63147110",
    description: "Rhubarb",
    fiberAmt: 1.6,
    giAmt: 49,
    glAmt: 10,
    carbAmt: 17,
    protein: 0.81,
    fatAmt: 0.22,
    satFatAmt: 0.047,
    monoFatAmt: 0.035,
    polyFatAmt: 0.089,
    energyAmt: 71,
    sugarsAmt: 14.4,
    sodiumAmt: 4,
  },
  {
    foodCode: "54318500",
    description: "Rice cake",
    fiberAmt: 4.2,
    giAmt: 81,
    glAmt: 36,
    carbAmt: 81,
    protein: 7.1,
    fatAmt: 4.3,
    satFatAmt: 0.875,
    monoFatAmt: 1.58,
    polyFatAmt: 1.52,
    energyAmt: 392,
    sugarsAmt: 0.88,
    sodiumAmt: 71,
  },
  {
    foodCode: "11360000",
    description: "Rice milk",
    fiberAmt: 0.3,
    giAmt: 79,
    glAmt: 20,
    carbAmt: 9,
    protein: 0.28,
    fatAmt: 0.97,
    satFatAmt: 0,
    monoFatAmt: 0.625,
    polyFatAmt: 0.313,
    energyAmt: 47,
    sugarsAmt: 5.28,
    sodiumAmt: 39,
  },
  {
    foodCode: "93504000",
    description: "Rum",
    fiberAmt: 0,
    giAmt: 59,
    glAmt: 24,
    carbAmt: 0,
    protein: 0,
    fatAmt: 0,
    satFatAmt: 0,
    monoFatAmt: 0,
    polyFatAmt: 0,
    energyAmt: 231,
    sugarsAmt: 0,
    sodiumAmt: 1,
  },
  {
    foodCode: "52105100",
    description: "Scone",
    fiberAmt: 1.2,
    giAmt: 92,
    glAmt: 28,
    carbAmt: 48,
    protein: 6.43,
    fatAmt: 17.8,
    satFatAmt: 10.7,
    monoFatAmt: 5.07,
    polyFatAmt: 0.916,
    energyAmt: 374,
    sugarsAmt: 13.3,
    sodiumAmt: 447,
  },
  {
    foodCode: "93502100",
    description: "Scotch",
    fiberAmt: 0,
    giAmt: 53,
    glAmt: 16,
    carbAmt: 0,
    protein: 0,
    fatAmt: 0,
    satFatAmt: 0,
    monoFatAmt: 0,
    polyFatAmt: 0,
    energyAmt: 231,
    sugarsAmt: 0,
    sodiumAmt: 1,
  },
  {
    foodCode: "43103000",
    description: "Sesame seeds",
    fiberAmt: 11.6,
    giAmt: 53,
    glAmt: 8,
    carbAmt: 12,
    protein: 20.4,
    fatAmt: 61.2,
    satFatAmt: 9.06,
    monoFatAmt: 23.9,
    polyFatAmt: 25.5,
    energyAmt: 631,
    sugarsAmt: 0.48,
    sodiumAmt: 47,
  },
  {
    foodCode: "91745100",
    description: "Skittles",
    fiberAmt: 0,
    giAmt: 70,
    glAmt: 18,
    carbAmt: 91,
    protein: 0.19,
    fatAmt: 4.37,
    satFatAmt: 4.12,
    monoFatAmt: 0,
    polyFatAmt: 0,
    energyAmt: 405,
    sugarsAmt: 75.8,
    sodiumAmt: 15,
  },
  {
    foodCode: "91715100",
    description: "SNICKERS Bar",
    fiberAmt: 2.3,
    giAmt: 69,
    glAmt: 17,
    carbAmt: 62,
    protein: 7.53,
    fatAmt: 23.8,
    satFatAmt: 9.07,
    monoFatAmt: 7.88,
    polyFatAmt: 3.01,
    energyAmt: 491,
    sugarsAmt: 50.5,
    sodiumAmt: 239,
  },
  {
    foodCode: "63430150",
    description: "Sorbet",
    fiberAmt: 0.5,
    giAmt: 57,
    glAmt: 14,
    carbAmt: 27,
    protein: 0.79,
    fatAmt: 0.05,
    satFatAmt: 0,
    monoFatAmt: 0,
    polyFatAmt: 0.015,
    energyAmt: 110,
    sugarsAmt: 25.8,
    sodiumAmt: 13,
  },
  {
    foodCode: "11320000",
    description: "Soy milk",
    fiberAmt: 0.2,
    giAmt: 21,
    glAmt: 2,
    carbAmt: 5,
    protein: 2.6,
    fatAmt: 1.47,
    satFatAmt: 0.205,
    monoFatAmt: 0.382,
    polyFatAmt: 0.858,
    energyAmt: 43,
    sugarsAmt: 3.65,
    sodiumAmt: 47,
  },
  {
    foodCode: "41410010",
    description: "Soy nuts",
    fiberAmt: 17.7,
    giAmt: 60,
    glAmt: 12,
    carbAmt: 30,
    protein: 38.6,
    fatAmt: 25.4,
    satFatAmt: 3.67,
    monoFatAmt: 5.61,
    polyFatAmt: 14.3,
    energyAmt: 469,
    sugarsAmt: 4.2,
    sodiumAmt: 163,
  },
  {
    foodCode: "41420300",
    description: "Soy sauce",
    fiberAmt: 0.8,
    giAmt: 72,
    glAmt: 25,
    carbAmt: 5,
    protein: 8.14,
    fatAmt: 0.57,
    satFatAmt: 0.073,
    monoFatAmt: 0.088,
    polyFatAmt: 0.263,
    energyAmt: 53,
    sugarsAmt: 0.4,
    sodiumAmt: 5490,
  },
  {
    foodCode: "82108000",
    description: "Soybean oil",
    fiberAmt: 0,
    giAmt: 72,
    glAmt: 14,
    carbAmt: 0,
    protein: 0,
    fatAmt: 100,
    satFatAmt: 15.6,
    monoFatAmt: 22.8,
    polyFatAmt: 57.7,
    energyAmt: 884,
    sugarsAmt: 0,
    sodiumAmt: 0,
  },
  {
    foodCode: "58175110",
    description: "Tabbouleh",
    fiberAmt: 1.8,
    giAmt: 86,
    glAmt: 30,
    carbAmt: 10,
    protein: 1.64,
    fatAmt: 9.66,
    satFatAmt: 1.34,
    monoFatAmt: 6.9,
    polyFatAmt: 1.07,
    energyAmt: 126,
    sugarsAmt: 1.34,
    sodiumAmt: 495,
  },
  {
    foodCode: "71962040",
    description: "Taro, cooked",
    fiberAmt: 4.3,
    giAmt: 48,
    glAmt: 10,
    carbAmt: 28,
    protein: 1.57,
    fatAmt: 2.94,
    satFatAmt: 0.818,
    monoFatAmt: 1.02,
    polyFatAmt: 0.92,
    energyAmt: 141,
    sugarsAmt: 0.42,
    sodiumAmt: 143,
  },
  {
    foodCode: "13252590",
    description: "Trifle",
    fiberAmt: 0.4,
    giAmt: 30,
    glAmt: 6,
    carbAmt: 23,
    protein: 3.53,
    fatAmt: 7.1,
    satFatAmt: 4.05,
    monoFatAmt: 2.1,
    polyFatAmt: 0.422,
    energyAmt: 168,
    sugarsAmt: 15.8,
    sodiumAmt: 180,
  },
  {
    foodCode: "75440600",
    description: "Vegetable curry",
    fiberAmt: 1.8,
    giAmt: 44,
    glAmt: 15,
    carbAmt: 9,
    protein: 1.59,
    fatAmt: 5.23,
    satFatAmt: 1.26,
    monoFatAmt: 1.87,
    polyFatAmt: 1.85,
    energyAmt: 84,
    sugarsAmt: 3.23,
    sodiumAmt: 387,
  },
  {
    foodCode: "64401000",
    description: "Vinegar",
    fiberAmt: 0,
    giAmt: 60,
    glAmt: 21,
    carbAmt: 1,
    protein: 0,
    fatAmt: 0,
    satFatAmt: 0,
    monoFatAmt: 0,
    polyFatAmt: 0,
    energyAmt: 21,
    sugarsAmt: 0.4,
    sodiumAmt: 5,
  },
  {
    foodCode: "41304000",
    description: "Wasabi peas",
    fiberAmt: 3.8,
    giAmt: 41,
    glAmt: 10,
    carbAmt: 62,
    protein: 14.1,
    fatAmt: 14.1,
    satFatAmt: 5.29,
    monoFatAmt: 5.79,
    polyFatAmt: 1.95,
    energyAmt: 432,
    sugarsAmt: 14.1,
    sodiumAmt: 300,
  },
  {
    foodCode: "63149010",
    description: "Watermelon, raw",
    fiberAmt: 0.4,
    giAmt: 55,
    glAmt: 8,
    carbAmt: 8,
    protein: 0.61,
    fatAmt: 0.15,
    satFatAmt: 0.016,
    monoFatAmt: 0.037,
    polyFatAmt: 0.05,
    energyAmt: 30,
    sugarsAmt: 6.2,
    sodiumAmt: 1,
  },
  {
    foodCode: "75236000",
    description: "Yeast",
    fiberAmt: 26.9,
    giAmt: 50,
    glAmt: 8,
    carbAmt: 41,
    protein: 40.4,
    fatAmt: 7.61,
    satFatAmt: 1,
    monoFatAmt: 4.31,
    polyFatAmt: 0.017,
    energyAmt: 325,
    sugarsAmt: 0,
    sodiumAmt: 51,
  },
];

module.exports = {
  foodnutritions,
};
