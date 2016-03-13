"use strict";

let Things = function() {
  return {
    createThingsFromGadgets: function(gadgets) {
      return new Promise(function(resolve, reject) {
        let things = [];
        for(let i = 0; i < gadgets.length; i++) {
          things.push({
            name: 'Thing ' + (i + 1)
          });
        }
        resolve(things);
        //reject({error: 'Something went wrong'});
      });
    }
  };
};

module.exports = Things;
