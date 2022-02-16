import axios from 'axios';

//         "objectId": "ElhqsRZDnP",
// "Year": 2020,
// "Make": "Cadillac",
// "Model": "Escalade ESV",
// "Category": "SUV",
// "createdAt": "2020-01-27T20:44:17.665Z",
// "updatedAt": "2020-01-27T20:44:17.665Z"e

export type CarMake = string;

export type CarModel = {
  Year: number;
  Make: string;
  Model: string;
  Category: string;
};

//  need to set up environments to pass in the variable url string
const carDatabaseURL =
  'https://carrectly-admin-staging.herokuapp.com/api/cars/';

export const carDatabaseApi = {
  getAllMakes: async () => {
    const carMakes = await axios
      .get(`${carDatabaseURL}getAllMakes`)
      .then((response) => (response as any).data.Results as CarMake[]);

    return carMakes;
  },

  getAllModels: async (carMake: CarMake, carYear: string) => {
    const carModels = await axios
      .get(`${carDatabaseURL}/getModelsByYearMake/${carMake}/${carYear}`)
      .then((response) => (response as any).data.Results as CarModel[]);

    return carModels;
  },
};

// old API we are not going to use
// export type CarMake = {
//   Make_ID: number;
//   Make_Name: string;
// };

// export type CarModel = CarMake & {
//   Model_ID: number;
//   Model_Name: string;
// };

// const carDatabaseURL = 'https://vpic.nhtsa.dot.gov/api/vehicles/';

// export const carDatabaseApi = {
//   getAllMakes: async () => {
//     const carMakes = await axios
//       .get(`${carDatabaseURL}GetAllMakes?format=json`)
//       .then((response) => (response as any).data.Results as CarMake[]);

//     return carMakes;
//   },

//   getAllModels: async (carMake: CarMake, carYear: string) => {
//     const carModels = await axios
//       .get(
//         `${carDatabaseURL}GetModelsForMakeIdYear/makeId/${carMake.Make_ID}/modelYear/${carYear}?format=json`
//       )
//       .then((response) => (response as any).data.Results as CarModel[]);

//     return carModels;
//   },
// };
