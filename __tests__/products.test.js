const Categories = require('../products/product.js');

describe('Categories Model', () => {

  let categories;

  beforeEach(() => {
    categories = new Categories();
  });

  it('test post() ', () => {
    let obj = { name: 'Test Category' };
    return categories.create(obj)
      .then(record => {
        Object.keys(obj).forEach(key => {
          expect(record[key]).toEqual(obj[key]);
        });
      })
      .catch(e => console.error('ERR', e));
  });

  it('test get() ', () => {
    let obj = { name: 'Test Category' };
    return categories.create(obj)
      .then(record => {
        return categories.get(record._id)
          .then(category => {
            Object.keys(obj).forEach(key => {
              expect(category[0][key]).toEqual(obj[key]);
            });
          });
      });
  });

});
it('test update ()', () => {
  let obj = { name: 'Test category' };
  return categories.create(obj)
    .then(data => {
      newObj = { name: 'new category' };
      return categories.update(data.id, newObj)
        .then(data => {
            expect(data.name).toEqual('new category');
          });
        });

    });

    it('test  delete() ', () => {
      let obj = { name: 'Test Category' };
      return categories.create(obj)
        .then(data => {
          return categories.delete(data)
            .then((deletedItem) => {
              expect(deletedItem).toEqual(undefined);
            });
        });
    });