'use strict';

// YOU KNOW WHAT TO DO //



/**
 * identity: takes a value and returns it unchanged
 * 
 * @param: {Any Datatype} value: Can be any datatype
 * 
 * @return: {Any Datatype}: will be the same value as our input value
 */
 
 function identity(value) {
    return value;
}
//we need this line for each function, just copy and paste
module.exports.identity = identity;

/**
 * typeOf: returns the dataype of <value> as a string
 * 
 * @param: {Any datatype} value: can by any datatype
 * 
 * @return: {a string}: will reflect the type of data that value is
 */
 function typeOf(value){
     if(typeof value === "string"){
        return "string";
    }else if(Array.isArray(value)){
        return "array";
    }else if(typeof value === "object" && value instanceof Date) {
     return "date";   
    }else if (typeof value === "undefined"){
        return "undefined";
    }else if(typeof value ==="number"){
        return "number";
    }else if(typeof value === "boolean"){
        return "boolean";
    }else if(value === null){
        return "null";
    }else if(typeof value === "function"){
        return "function";
    }else return "object";
}

module.exports.typeOf = typeOf;


/**
 * first: loops over a given array and returns a new array composed of the first <number> of elements in <array>
 * 
 * @param: {Array} array: must be an array
 * 
 * @param: {Number} number: must be a number
 * 
 * @return: {[], or an array of values} : either [] if <array> isn't an array, or the first <number> values from <array>
 */
 function first(array,number) {
    let newArray = []; 
    if (number > array.length) {    
      return array;
    } else if (Array.isArray(array) === false || number < 0) { 
        return [];  
    } else if (number === null || number === undefined || isNaN(number) === true) {
        return array[0];  
    } else {
        for (let x = 0; x < number; x++) { 
            newArray.push(array[x]);
        } return newArray; 
    }
}

module.exports.first = first;

/**
 * last: loops over a given array and returns a new array composed of the last <number> of elements in <array>
 * 
 * @param: {Array} array: must be an array
 * 
 * @param: {Number} number: any number
 * 
 * @return: {[], or an array of values} : either [] if <array> isn't an array or the last <number> values from <array>
 */
 function last (array,number) {
    let newArray = []; 
    if (number > array.length) {    
      return array;  
    } else if (Array.isArray(array) === false || number < 0) { 
        return [];  
    } else if (number === null || number === undefined || isNaN(number) === true) {
        return array[array.length-1];   
    } else {
        for (let x = array.length-1; x > array.length-1-number; x--) {
            newArray.unshift(array[x]);
        } return newArray; 
    }
}
module.exports.last = last;

/**
 * indexOf: loops through a given array and searches for <value>. If value is found, it will return
 * the index of value, otherwise, if <value> isn't found, it returns -1
 * 
 * @param: {Array} array: must be an array
 * 
 * @param: {Any Datatype} value: can be any datatype
 * 
 * @return: {Number} : returns index of array that is the first occurrance of <value>, otherwise returns -1
 */
 
 function indexOf (array, value) {
    for (let x = 0; x < array.length; x++) { 
        if (value === array[x]) {
            return x;
        }
    } return -1;  
}

module.exports.indexOf = indexOf;

/**
 * contains: return true if <value> is within <array>, false otherwise
 * 
 * @param: {Array} array: must be an array
 * 
 * @param: {Any Datatype} value: can be any datatype
 * 
 * @return: {Boolean}: return true if <array> contains <value>, false otherwise
 */
 
 function contains (array, value) {
    let truthArray = []; 
    for(let x = 0; x < array.length; x++){ 
       value === array[x] ? truthArray.push(true) : truthArray.push(false);
    }
    if (truthArray.indexOf(true) !== -1) {
        return true}
    else return false;
}

module.exports.contains = contains;

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */

function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;

/**
 * unique: loops over an array and returns a new array that has all duplicates removed
 * 
 * @param: {Array} array: must be an array
 * 
 * @return: {Array}: returns a new array with duplicates removed
 */
 
 function unique(array) {
    let uniqueArray = [];
    for (let x = 0; x < array.length; x++) {
        if (uniqueArray.indexOf(array[x]) === -1) {
            uniqueArray.push(array[x]);
        }
    }
    return uniqueArray;
}
module.exports.unique = unique;

/**
 * filter: loops over an array and passes each element, index, and collection through a given function, then returns a new array
 * for all the elements that calling the function proved true
 * 
 * 
 * @param: {Array} array: an array
 * 
 * @param: {Function} fun: a functon
 * 
 * @return: {Array}: returns a new array of elements that were true when passed throught the function
 */
 
 function filter(array, fun) {
    let newArray = [];
    for (let x = 0; x < array.length; x++) {
        if (fun(array[x], x, array) === true) {
            newArray.push(array[x]);
        }
      }
      return newArray;
}

module.exports.filter = filter;

/**
 * reject: loops over an array and passes each element, index, and collection through a given function, then returns a new array
 * for all the elements that calling the function proved false
 * 
 * @param: {Array} array: an array
 * 
 * @param: {Function} fun: a functon
 * 
 * @return: {Array}: returns a new array of elements that returned false when passed throught the function
 */
 
 function reject(array,fun) {
      let trueArray = filter(array,fun);
      // let trueArray = filter(array,fun);
      let rejectArray = [];
      for (let x = 0; x < array.length; x++) {
          if (contains(trueArray,array[x]) === false) {
              rejectArray.push(array[x]);
          }
      }
      return rejectArray;
}

module.exports.reject = reject;

/**
 * partition: loops over an array and passes each element, index, and collection through a given function, then returns an array that has
 * two sub arrays: the first contains all values for which the function returned true, the second is the false ones
 * 
 * @param: {Array} array: an array
 * 
 * @param: {Function} fun: a function
 * 
 * @return: {Array}: an array of arrays
 */
 
 function partition(array, fun) {
    let trueArray = filter(array,fun);
    let falseArray= reject(array,fun);
    let mainArray = [trueArray,falseArray];
    return mainArray;
}

module.exports.partition = partition;


/**
 * map: this will loop over either an array or an object and pass its elements or its values through a given function,
 * and return a new array populated with the values calling that function returned
 * 
 * @param: {Array or Object} collection: can be an array or an object
 * 
 * @param: {function} fun: a function
 * 
 * @return: {Array}: an array populated with the values generated by calling the function for each element/value
 */
 
 function map(collection,fun) {
  let mappedArray = [];
  let collectionType = typeOf(collection);
  if (collectionType === "object") {
      for (let key in collection) {
          mappedArray.push(fun(collection[key], key, collection));
      }
  } else if (collectionType === "array") {
      for (let x = 0; x < collection.length; x++) {
          mappedArray.push(fun(collection[x],x,collection));
      }
  }
  return mappedArray;
}
module.exports.map = map;

/**
 * pluck: loops over an array of objects and searches for a specific property of each object. it will return an array
 * containing the value of property for each object in the array
 * 
 * @param: {Array} array: must be an array of objects
 * 
 * @param: {String} property: properties of objects are always strings
 * 
 * @return: {Array}: an array containing the value of <property> for every element in <array>
 */
 
 function pluck(array,property) {
   let pluckedArray = [];
    map(array, function (element,index,array) {
       if (element[property] !== undefined) {
          pluckedArray.push(element[property]);
       } 
    });
    return pluckedArray;

}

module.exports.pluck = pluck;

/**
 * every: Calls <function> for every element of <collection>. if every element's return is true, it will return true.
 * if any are false, it will return false. if no function is given, it will coerce the elements into booleans and
 * then check if any are false
 * 
 * @param: {Array or Object} collection: an array or an object
 * 
 * @param: {Function} fun: a function
 * 
 * @return: {Boolean}: true if all elements' returns are true, false otherwise
 */
 
 function every(collection, fun) {
  if (typeOf(fun) === "undefined" && Array.isArray(collection) === true) {
      for (let x = 0; x < collection.length; x++) {
          if (!!collection[x] === false) {
              return false;
          }
      }
  } else if (typeOf(fun) === "undefined" && typeOf(collection) === "object") {
      for (let key in collection) {
          if (!!collection[key] === false) {
              return false;
          }
      }
  } else {
    let mappedCollection = map(collection,fun);
      for (let x = 0; x < mappedCollection.length; x++) {
            if (!!mappedCollection[x] === false) {
            return false;
            }
        }
  }
  return true;
}

module.exports.every = every;

/**
 * some: Call <function> for every element of <collection>. if every element's return is false, it will return false.
 * if any are true, it will return true. if no function is given, it will coerce the elements into booleans and
 * then check if any are true
 * @param: {Array or Object} collection: an array or an object
 * 
 * @param: {Function} fun: a function
 * 
 * @return: {Boolean}: false if all elements' returns are false, true otherwise
 */
 
 function some(collection, fun) {
  if (typeOf(fun) === "undefined" && Array.isArray(collection) === true) {
      for (let x = 0; x < collection.length; x++) {
          if (!!collection[x] === true) {
              return true;
          }
      }
  } else if (typeOf(fun) === "undefined" && typeOf(collection) === "object") {
      for (let key in collection) {
          if (!!collection[key] === true) {
              return false;
          }
      }
  } else {
    let mappedCollection = map(collection,fun);
      for (let x = 0; x < mappedCollection.length; x++) {
            if (!!mappedCollection[x] === true) {
            return true;
            }
        }
  }
  return false;
}

module.exports.some = some;

/**
 * reduce: Call <function> for every element in <collection>, using a starting value of <seed>, or the first element of the array if no seed is given.
 * it stores that value and uses it for the next iteration, until it will reduce the array into a single value.
 * 
 * @param: {Array} array: an array
 * 
 * @param: {Function} fun: function
 *  
 * @param: {Any datatype} seed: optional, it is the first value passed to the function
 * 
 * @return: {Any datatype}: a single value composed of all the values originally in the array
 */
 
 function reduce(array, fun, seed) {
    let prevResult;
    for (let x = 0; x < array.length; x++) {
      if (x === 0 && seed !== undefined) {
          prevResult = fun(seed, array[x], x);
      } else if (x === 0 && seed === undefined) {
          x++;
          prevResult = fun(array[0], array[x],x);
      } else {
          prevResult = fun(prevResult, array[x], x);
      }
  }
  return prevResult;
}

module.exports.reduce = reduce;

/**
 * extend: takes 2 or more objects and updates the properties of <object1> to have the properties of the other object(s)
 * 
 * @param: {Object} object1: an object
 * 
 * @param: {Object} object2: an objects
 * 
 * @param: {Object} ...moreObjects: can have any number of parameters, as long as they are objects
 * 
 * @return: {Object}: will return <object1> with new properties from the other objects
 */
 
 function extend(object1,object2,...moreObjects) {
    for (let key in object2) {
        object1[key] = object2[key];
    }
    if (moreObjects !== undefined) {
        for (let x = 0; x < moreObjects.length; x++) {
            for (let key in moreObjects[x]) {
                object1[key] = moreObjects[x][key];
            }
        }
    }
    return object1;
}

module.exports.extend = extend;