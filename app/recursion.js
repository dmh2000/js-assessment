exports = typeof window === "undefined" ? global : window;

exports.recursionAnswers = {
  listAll: function(data) {
    let a = [];

    // iterate over data array
    for (let i in data.files) {
      // get the next element
      item = data.files[i];
      if (typeof item === "string") {
        // its a file and in this directory
        a.push(item);
      } else {
        // its a directory
        let b = this.listAll(item);
        // concat the new list onto the existing list
        a = a.concat(b);
      }
    }
    return a;
  },

  findDir: function(data, dirName) {
    for (let i in data.files) {
      // get the next element
      item = data.files[i];
      if (typeof item === "object") {
        // its a directory
        if (item.dir === dirName) {
          return item;
        } else {
          return this.findDir(item, dirName);
        }
      }
    }
  },

  listFiles: function(data, dirName) {
    let b;
    if (dirName === undefined) {
      // no dirname, show everything
      b = this.listAll(data);
    } else {
      // dirname specified, find it then show all
      data = this.findDir(data, dirName);
      b = this.listAll(data);
    }
    return b;
  },

  // Topcoder solution
  generate(k, arr, acc) {
    if (k === 1) {
      // done, push a COPY of the arr
      acc.push(arr.slice(0));
    } else {
      let t;
      for (let i = 0; i < k; ++i) {
        t = arr[i];
        arr[i] = arr[k-1];
        arr[k-1] = t;

        this.generate(k - 1, arr, acc);

        t = arr[i];
        arr[i] = arr[k-1];
        arr[k-1] = t;
      }
    }
  },

  permute: function(arr) {
    let acc = []; // accumulator
    this.generate(arr.length, arr, acc);
    return acc;
  },

  fibonacci: function(n) {
    if (n === 0) {
      return 0;
    } else if (n === 1) {
      return 1;
    } else {
      return this.fibonacci(n - 1) + this.fibonacci(n - 2);
    }
  },

  parens: function(cur,open,close,n,acc) {
    // from leetcode solution
    if (cur.length === (n * 2)) {
      acc.push(cur.slice(0));
      return;
    }
    if (open < n) {
      this.parens(cur+"(",open+1,close,n,acc);
    }
    if (close < open) {
      this.parens(cur+")",open,close+1,n,acc);
    }
  },

  validParentheses: function(n) {
    let acc = [];
    this.parens("",0,0,n,acc);
    return acc;
  }
};
