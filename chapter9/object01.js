$(document).ready(function(){

      const SYM = Symbol();
      const o = { a: 1, b: 2, c: 3, [SYM]: 4 };

      for (let prop in o) {
          if(!o.hasOwnProperty(prop)) continue;
        //   console.log(`${prop} : ${o[prop]}`);
      }

    //   Object.keys(o).forEach ( prop => console.log(`${prop} : ${o[prop]}`));

      const a = { apple : 1, xochitl : 2, balloon: 3, guitar: 4, xylophone: 5};
      Object.keys(a)
            .filter(prop => prop.match(/^x/))
            .forEach(prop => console.log(`${prop} : ${a[prop]} `));

});