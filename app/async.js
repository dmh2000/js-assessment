exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
    return new Promise( (resolve,reject) => {
      if (value === 'success') {
        resolve(value);
      }
      else if (value === true) {
        resolve(value);
      }
      else if (value === false) {
        reject(value);
      }
    });
  },

  manipulateRemoteData: function(url) {
    return new Promise( (resolve,reject) => {

      req = new XMLHttpRequest();

      function ready() {
        if (req.readyState === XMLHttpRequest.DONE) {
          if (req.status === 200) {
            let a = JSON.parse(req.responseText);
            a = a.people.map( (v) => v.name);
            a.sort();
            resolve(a);
          }
          else {
            reject(req.status);
          }
        }
      }

      req.onreadystatechange = ready;
      req.open('GET', url);
      req.send();
    });
  }
}
