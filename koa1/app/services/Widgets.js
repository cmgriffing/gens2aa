"use strict";

let Widgets = function() {
  return {
    createWidgets: function(count) {
      return new Promise(function(resolve, reject) {
        let widgets = [];
        for(let i = 0; i < count; i++) {
          widgets.push({
            name: 'Widget ' + (i + 1)
          });
        }
        resolve(widgets);
        //reject({error: 'Something went wrong'});
      });
    }
  };
};

module.exports = Widgets;
