const imagesData = require('./images.json');
const fs = require('fs');
const { resolve } = require('path');
const outputPath = './utils';

const cleanUp = (arr) => {
  const hashTable = {};
  const jsonSpace = 2;
  const file = resolve(`${outputPath}/imagesClean.json`);
  arr.forEach((category) => {
    if (category.contents) {
      hashTable[category.name] = [];

      category.contents.forEach((folder) => {
        if (folder.contents) {
          const service = {};
          service[folder.name] = [];
          folder.contents.forEach((element) => {
            service[folder.name].push(element.name);
          });
          hashTable[category.name].push(service);
        }
      });
    }
  });
  fs.writeFileSync(file, JSON.stringify(hashTable, null, jsonSpace));
};

cleanUp(imagesData);
