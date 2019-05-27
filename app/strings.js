exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    let state = 0;
    let count;
    let a = [];
    for(i in str) {
      c = str[i];
      switch(state) {
      case 0:
        m = c;
        a.push(c);
        state = 1;
        count = 1;
        if (count == amount) {
          state = 2;
        }
        break;
      case 1:
        if (m == c) {
          a.push(c);
          ++count;
          if (count === amount) {
            state = 2;
          }
        }
        else {
          m = c;
          a.push(c);
          count = 1;
          state = 1;
        }
        break;
      case 2:
        // skpping
        if (m !== c) {
          m = c;
          a.push(c);
          count = 1;
          state = 1;
          if (count === amount) {
            state = 2;
          }
        }
        else {
          // keep skipping
        }
        break;
      }
    }
    return a.join("");
  },

  wordWrap: function(str, cols) {
    let state = 0;
    let a = [];
    for(i in str) {
      let c = str[i];
      switch(state) {
      case 0:
        a.push(c);
        state = 1;
        count = 1;
        if (count === cols) {
          a.push("\n");
        }
        break;
      case 1:
        ++count;
        a.push(c);
        if (count > cols) {
          // find previous whitespace
          let i = a.lastIndexOf(' ');
          if (i >= 0) {
            // found
            a[i] = '\n';
            // count characters after a[i[]]
            count = a.length - i;
          }
          else {
            // no whitespace, keep looking
          }
        }
        break;
      }
    }
    return a.join("");
  },

  reverseString: function(str) {
    let a = [];
    for(i in str) {
      let c = str[i];
      a.unshift(c);
    }
    return a.join("");
  }
};
