(function (_, Kotlin, $module$common_js, $module$kotlin_test) {
  'use strict';
  var parseDate = $module$common_js.com.fans.kotlinconf.parseDate_61zpoe$;
  var assertEquals = $module$kotlin_test.kotlin.test.assertEquals_3m0tl5$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var test = $module$kotlin_test.kotlin.test.test;
  var suite = $module$kotlin_test.kotlin.test.suite;
  function DateTest() {
  }
  DateTest.prototype.testParse = function () {
    var date = parseDate('2017-10-24T13:31:19');
    assertEquals(2017, date.getFullYear());
    assertEquals(9, date.getMonth());
    assertEquals(24, date.getDate());
    assertEquals(13, date.getHours());
    assertEquals(31, date.getMinutes());
  };
  DateTest.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DateTest',
    interfaces: []
  };
  var package$com = _.com || (_.com = {});
  var package$fans = package$com.fans || (package$com.fans = {});
  var package$kotlinconf = package$fans.kotlinconf || (package$fans.kotlinconf = {});
  package$kotlinconf.DateTest = DateTest;
  suite('com.fans.kotlinconf', false, function () {
    suite('DateTest', false, function () {
      test('testParse', false, function () {
        (new DateTest()).testParse();
      });
    });
  });
  Kotlin.defineModule('common-js_test', _);
  return _;
}(module.exports, require('kotlin'), require('common-js'), require('kotlin-test')));

//# sourceMappingURL=common-js_test.js.map
