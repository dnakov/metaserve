// Generated by CoffeeScript 1.10.0
(function() {
  var Compiler, defaults;

  defaults = function(o, d) {
    var k, v;
    for (k in d) {
      v = d[k];
      if (o[k] == null) {
        o[k] = v;
      }
    }
    return o;
  };

  Compiler = (function() {
    Compiler.prototype.default_options = {};

    function Compiler(options) {
      if (options == null) {
        options = {};
      }
      this.options = defaults(options, this.default_options);
    }

    Compiler.prototype.set = function(options) {
      var k, v;
      for (k in options) {
        v = options[k];
        this.options[k] = v;
      }
      return this;
    };

    return Compiler;

  })();

  module.exports = Compiler;

}).call(this);
