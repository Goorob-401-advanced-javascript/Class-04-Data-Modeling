'use strict';


class validator {
  constructor(str, num, arr ,obj ,func , bool){
    this.str = str;
    this.num = num;
    this.arr = arr;
    this.obj = obj;
    this.func = func;
    this.bool = bool;
  }


  isObjest(){
    return typeof (input) === 'object';
  }
  isThereKeys(){
    if (Object.keys(input)) { return true };
  }

  isThereValues(){
    if (Object.values(input)) { return true };
  }
  validateObjValueType(){
    return Object.values(input).every(val=> typeof val === 'string' || typeof val === 'number' || typeof val === 'object')

  }
  validateObjValueIfArr(){
    return Object.values(input).every(val => typeof val === 'object')
  }

  arrHasAnValues(){
    Object.values(input).every(ele => {
      if (typeof ele === 'object') {
      if (ele.length > 0 ) {
         return true
          } else {
            return false
          } }
        })
  }

  isString(){
    return typeof (input) === 'string';
  }
  isNum(){
    return typeof (input) === 'number';
  }

  isBooleen(){
    return typeof (input) === 'boolean';
  }
  isArray(){
    return typeof (input) === 'object';
  }
}
module.exports = validator ;