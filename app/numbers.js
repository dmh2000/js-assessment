exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
    const mask = 1 << (bit-1);
    return (num & mask) === 0 ? 0 : 1;
  },

  base10: function(str) {
    return parseInt(str,2);
  },

  convertToBinary: function(num) {
    let b = 0x80;
    let s = [];
    for(let i=7;i>=0;--i) {
      if ((b & num) == 0) {
        s.push('0');
      }
      else {
        s.push('1');
      }
      b >>= 1;
    }
    return s.join('');
  },

  multiply: function(a, b) {
    const p = -1.0 * Math.round(Math.log10(b));
    return parseFloat((a * b).toFixed(p));
  }
};
