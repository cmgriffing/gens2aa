"use strict";

let Gadgets = function() {
  return {
    createGadgetsFromWidgets: function(widgets) {
      return new Promise(function(resolve, reject) {
        let gadgets = [];
        for(let i = 0; i < widgets.length; i++) {
          gadgets.push({
            name: 'Gadget ' + (i + 1)
          });
        }
        resolve(gadgets);
        //reject({error: 'Something went wrong'});
      });
    }
  };
};

module.exports = Gadgets;
