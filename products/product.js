'use strict';

const DataModel = require('../memory-data-model.js');

class Categories extends DataModel {
  constructor() {
    super();
    this.schema = {
      id: { type : 'string', required: true },
      price: { type : 'number' , required: true },
    };
  }
}

module.exports = Products ;