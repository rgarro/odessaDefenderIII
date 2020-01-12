/**
 * Minified by jsDelivr using Terser v3.14.1.
 * Original file: /npm/three-legacyjsonloader@1.0.6/index.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
const fs = require("fs");
class LegacyJSONLoader {
  constructor(e) {
    (this.THREE = e), (this.ObjectLoader = new e.ObjectLoader());
  }
  load(e) {
    return new Promise((r, t) => {
      fs.readFile(e, (e, a) => {
        if (e) throw e;
        var s = JSON.parse(a);
        try {
          let a = this.ObjectLoader.parse(s);
          r(a);
        } catch (e) {
          t(e);
        }
      });
    });
  }
  parse(e) {
    return new Promise(function(r, t) {
      try {
        r(this.ObjLoader.parse(e));
      } catch (e) {
        t(e);
      }
    });
  }
}
module.exports = LegacyJSONLoader;
//# sourceMappingURL=/sm/61197a67510d777b8edeea674af50b4e8b7c6a408740364df1319838339e2b85.map
