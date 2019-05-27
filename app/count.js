exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count: function (start, end) {
    let s;
    console.log(start);
    ++start;
    s = setInterval( () => {
      if (start <= end) {
        console.log(start);
        ++start;
      }
    },100);
    return {
      cancel: function() {
        clearInterval(s);
      }
    }
  }
};
