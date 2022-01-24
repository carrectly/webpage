import axios from 'axios';

export type CarMake = {
  Make_ID: number;
  Make_Name: string;
};

export type CarModel = CarMake & {
  Model_ID: number;
  Model_Name: string;
};

const carDatabaseURL = 'https://vpic.nhtsa.dot.gov/api/vehicles/';

export const carDatabaseApi = {
  getAllMakes: async () => {
    const carMakes = await axios
      .get(`${carDatabaseURL}GetAllMakes?format=json`)
      .then((response) => (response as any).data.Results as CarMake[]);

    return carMakes;
  },

  getAllModels: async (carMake: CarMake, carYear: string) => {
    const carModels = await axios
      .get(
        `${carDatabaseURL}GetModelsForMakeIdYear/makeId/${carMake.Make_ID}/modelYear/${carYear}?format=json`
      )
      .then((response) => (response as any).data.Results as CarModel[]);

    return carModels;
  },
};
