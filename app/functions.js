exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    return fn.apply(null, arr);
  },

  speak: function(fn, obj) {
    return fn.call(obj);
  },

  functionFunction: function(str) {
    return function(s) {
      return str + ', ' + s;
    }
  },

  makeClosures: function(arr, fn) {
    return arr.map( (v) => {
      return () => {
        return fn(v);
      }
    })
  },

  partial: function(fn, str1, str2) {
    return function(s) {
      return fn(str1,str2,s);
    }
  },

  useArguments: function() {
    const args = Array.prototype.slice.call(arguments);
    return args.reduce( (p,v) => p + v, 0);
  },

  callIt: function(fn) {
    const args = Array.prototype.slice.call(arguments,1);
    fn.apply(null,args);
  },

  partialUsingArguments: function(fn) {
    const args1 = Array.prototype.slice.call(arguments,1);
    return function() {
      const args2 = Array.prototype.slice.call(arguments);
      const args = args1.concat(args2);
      return fn.apply(null,args);
    }
  },

  curryIt: function(fn) {
    let   args = [];
    function curry(arg) {
      args.push(arg);
      if (args.length === fn.length) {
        return fn.apply(null,args);
      }
      else {
        return curry;
      }
    }
    return curry;
  }
};
