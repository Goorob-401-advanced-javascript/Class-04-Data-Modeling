
'use strict';
const Products = require('../products/product.js');

describe('Products Model', () => {

  let products;


  beforeEach(() => {
    products = new Products();
  });

  it('test post() ', () => {
    let obj = { name: 'Test product', };
    return products.create(obj)
      .then(record => {
        Object.keys(obj).forEach(key => {
          expect(record[key]).toEqual(obj[key]);
        });
      })
      .catch(e => console.error('ERR', e));
  });

  it('test get() ', () => {
    let obj = { name: 'Test products',};
    return products.create(obj)
      .then(record => {
        return products.get(record._id)
          .then(record => {
            Object.keys(obj).forEach(key => {
              expect(record[0][key]).toEqual(obj[key]);
            });
          });
      });
  });


  it('test update ()', () => {
    let obj = { name: 'Test product', };
    return products.create(obj)
      .then(data => {
        let newObj = { name: 'new product',};
        return products.update(data.id, newObj)
          .then(data => {
            expect(data.name).toEqual('new product');
          });
      });

  });

  it('test  delete() ', () => {
    let obj = { name: 'Test product',};
    return products.create(obj)
      .then(data => {
        return products.delete(data)
          .then((deletedItem) => {
            expect(deletedItem).toEqual(undefined);
          });
      });
  });
});
