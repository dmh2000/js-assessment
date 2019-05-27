exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    return arr.indexOf(item);
  },

  sum: function(arr) {
    return arr.reduce( (p, v) => p + v, 0);
  },

  remove: function(arr, item) {
    return arr.filter( (v) => v !== item);
  }, 

  removeWithoutCopy: function(arr, item) {
    for(;;) {
      const i = arr.indexOf(item);
      if (i >= 0) {
        arr.splice(i,1);
      }
      else {
        break;
      }
    }
    return arr;
  },

  append: function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function(arr) {
    arr.pop();
    return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function(arr) {
    arr.shift();
    return arr;
  },

  concat: function(arr1, arr2) {
    arr = arr1.concat(arr2);
    return arr;
  },

  insert: function(arr, item, index) {
    arr.splice(index,0,item);
    return arr;
  },

  count: function(arr, item) {
    return arr.reduce( (p,v) => (v ===item) ? p + 1 : p,0);
  },

  duplicates: function(arr) {
    const a = []
    arr = arr.sort();
    let b = arr[0];
    let state = 0;
    for(let i=1;i<arr.length;++i) {
      switch(state) {
      case 0:
        if (arr[i] === b) {
          // found a duplicate, push it on a
          a.push(b);
          state = 1;
        }
        else {
          // not a duplicate, next
          b = arr[i];
        }
        break;
      case 1:
        if (arr[i] !== b) {
          // found nonduplicate, save it
          b = arr[i];
          state = 0;
        }
        else {
          // skip additional duplicates
        }
        break;
      }
    }
    return a;
  },

  square: function(arr) {
    return arr.map( (v) => v * v);
  },

  findAllOccurrences: function(arr, target) {
    return arr.reduce( (p,v,i) => {
      if (v === target) {
        p.push(i);
      }
      return p;
    }, []);
  }
};
