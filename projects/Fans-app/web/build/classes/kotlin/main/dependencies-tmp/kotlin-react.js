(function (_, Kotlin, $module$react, $module$kotlin_extensions) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Unit = Kotlin.kotlin.Unit;
  var Annotation = Kotlin.kotlin.Annotation;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var clone = $module$kotlin_extensions.kotlinext.js.clone_issdgt$;
  var get_js = Kotlin.kotlin.js.get_js_1yb8b7$;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var IllegalStateException = Kotlin.kotlin.IllegalStateException;
  var asJsObject = $module$kotlin_extensions.kotlinext.js.asJsObject_s8jyvk$;
  var React$Children = $module$react.Children;
  var addAll = Kotlin.kotlin.collections.addAll_ye1y7v$;
  var React$Component = $module$react.Component;
  RBuilderMultiple.prototype = Object.create(RBuilder.prototype);
  RBuilderMultiple.prototype.constructor = RBuilderMultiple;
  RBuilderSingle.prototype = Object.create(RBuilder.prototype);
  RBuilderSingle.prototype.constructor = RBuilderSingle;
  RElementBuilder.prototype = Object.create(RBuilderMultiple.prototype);
  RElementBuilder.prototype.constructor = RElementBuilder;
  RComponent.prototype = Object.create(React$Component.prototype);
  RComponent.prototype.constructor = RComponent;
  function invoke($receiver, component) {
    return $receiver.call(null, component);
  }
  function invoke$lambda(closure$component) {
    return function (props) {
      var $receiver = new RBuilderSingle();
      closure$component($receiver, props);
      return $receiver.result;
    };
  }
  function invoke_0($receiver, component) {
    return $receiver.call(null, invoke$lambda(component));
  }
  function invoke$lambda_0(closure$component) {
    return function (props) {
      var $receiver = new RBuilderSingle();
      closure$component($receiver, props);
      return $receiver.result;
    };
  }
  function invoke_1($receiver, config, component) {
    return $receiver.call(null, invoke$lambda_0(component), config);
  }
  function ReactDsl() {
  }
  ReactDsl.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ReactDsl',
    interfaces: [Annotation]
  };
  function RBuilder() {
  }
  var copyToArray = Kotlin.kotlin.collections.copyToArray;
  RBuilder.prototype.child_k3oess$ = function (type, props, children) {
    var tmp$;
    return this.child_2usv9w$((tmp$ = $module$react).createElement.apply(tmp$, [type, props].concat(copyToArray(children))));
  };
  RBuilder.prototype.child_4dvv5y$ = function (type, props, handler) {
    var $receiver = new RElementBuilder(props);
    handler($receiver);
    var children = $receiver.childList;
    return this.child_k3oess$(type, props, children);
  };
  RBuilder.prototype.invoke_eb8iu4$ = function ($receiver, handler) {
    var tmp$ = this.child_4dvv5y$;
    var obj = {};
    return tmp$.call(this, $receiver, obj, handler);
  };
  RBuilder.prototype.node_rwypko$ = function ($receiver, props, children) {
    if (children === void 0)
      children = emptyList();
    return this.child_k3oess$($receiver, clone(props), children);
  };
  RBuilder.prototype.child_drr62v$ = function (klazz, handler) {
    var tmp$;
    var rClass = Kotlin.isType(tmp$ = get_js(klazz), Object) ? tmp$ : Kotlin.throwCCE();
    return this.invoke_eb8iu4$(rClass, handler);
  };
  RBuilder.prototype.child_ops9p9$ = defineInlineFunction('kotlin-react.react.RBuilder.child_ops9p9$', function (C_0, isC, handler) {
    return this.child_drr62v$(Kotlin.getKClass(C_0), handler);
  });
  RBuilder.prototype.node_nvhxy3$ = function (klazz, props, children) {
    if (children === void 0)
      children = emptyList();
    var tmp$;
    var rClass = Kotlin.isType(tmp$ = get_js(klazz), Object) ? tmp$ : Kotlin.throwCCE();
    return this.node_rwypko$(rClass, props, children);
  };
  RBuilder.prototype.node_347wp$ = defineInlineFunction('kotlin-react.react.RBuilder.node_347wp$', wrapFunction(function () {
    var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
    return function (C_0, isC, props, children) {
      if (children === void 0)
        children = emptyList();
      return this.node_nvhxy3$(Kotlin.getKClass(C_0), props, children);
    };
  }));
  RBuilder.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'RBuilder',
    interfaces: []
  };
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  function RBuilderMultiple() {
    RBuilder.call(this);
    this.childList = ArrayList_init();
  }
  RBuilderMultiple.prototype.child_2usv9w$ = function (element) {
    this.childList.add_11rb$(element);
    return element;
  };
  RBuilderMultiple.prototype.unaryPlus_pdl1vz$ = function ($receiver) {
    this.childList.add_11rb$($receiver);
  };
  RBuilderMultiple.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'RBuilderMultiple',
    interfaces: [RBuilder]
  };
  function buildElements(handler) {
    var $receiver = new RBuilderMultiple();
    handler($receiver);
    return $receiver.childList;
  }
  function RBuilderSingle() {
    RBuilder.call(this);
    this.result = null;
  }
  RBuilderSingle.prototype.child_2usv9w$ = function (element) {
    if (this.result != null) {
      throw new IllegalStateException('React only allows single element be returned from render() function');
    }
    this.result = element;
    return element;
  };
  RBuilderSingle.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'RBuilderSingle',
    interfaces: [RBuilder]
  };
  var buildElement = defineInlineFunction('kotlin-react.react.buildElement_zepujl$', wrapFunction(function () {
    var RBuilderSingle_init = _.react.RBuilderSingle;
    return function (handler) {
      var $receiver = new RBuilderSingle_init();
      handler($receiver);
      return $receiver.result;
    };
  }));
  function RElementBuilder(attrs) {
    RBuilderMultiple.call(this);
    this.attrs_iyt8sk$_0 = attrs;
  }
  Object.defineProperty(RElementBuilder.prototype, 'attrs', {
    get: function () {
      return this.attrs_iyt8sk$_0;
    }
  });
  RElementBuilder.prototype.attrs_slhiwc$ = function (handler) {
    handler(this.attrs);
  };
  Object.defineProperty(RElementBuilder.prototype, 'key', {
    get: function () {
      return get_key(this.attrs);
    },
    set: function (value) {
      set_key(this.attrs, value);
    }
  });
  RElementBuilder.prototype.ref_5ij4lk$ = function (handler) {
    set_ref(this.attrs, handler);
  };
  RElementBuilder.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'RElementBuilder',
    interfaces: [RBuilderMultiple]
  };
  function isString($receiver) {
    return typeof $receiver === 'string';
  }
  function asStringOrNull($receiver) {
    if (isString($receiver))
      return $receiver;
    else
      return null;
  }
  function asElementOrNull($receiver) {
    if (asJsObject($receiver).hasOwnProperty('$$typeof'))
      return $receiver;
    else
      return null;
  }
  function forEachElement$lambda(closure$handler) {
    return function (it) {
      var element = asElementOrNull(it);
      if (element != null) {
        closure$handler(element);
      }
      return Unit;
    };
  }
  function forEachElement($receiver, children, handler) {
    $receiver.forEach(children, forEachElement$lambda(handler));
  }
  var cloneElement = defineInlineFunction('kotlin-react.react.cloneElement_3u47a8$', wrapFunction(function () {
    var React = _.$$importsForInline$$.react;
    return function ($receiver, element, child, props) {
      var tmp$;
      var tmp$_0 = (tmp$ = React).cloneElement;
      var obj = {};
      props(obj);
      return tmp$_0.apply(tmp$, [element, obj].concat(child));
    };
  }));
  function clone_0($receiver, element, props, child) {
    if (child === void 0)
      child = null;
    var tmp$;
    return (tmp$ = $module$react).cloneElement.apply(tmp$, [element, props].concat(React$Children.toArray(child)));
  }
  function get_children($receiver) {
    return $receiver.children;
  }
  function get_key($receiver) {
    throw new IllegalStateException('key cannot be read from props'.toString());
  }
  function set_key($receiver, value) {
    $receiver.key = value;
  }
  function get_ref($receiver) {
    throw new IllegalStateException('ref cannot be read from props'.toString());
  }
  function set_ref($receiver, value) {
    $receiver.ref = value;
  }
  function BoxedState(state) {
    this.state = state;
  }
  BoxedState.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'BoxedState',
    interfaces: []
  };
  function setState$lambda(closure$buildState) {
    return function (it) {
      var builder = closure$buildState;
      var $receiver = clone(it);
      builder($receiver);
      return $receiver;
    };
  }
  function setState($receiver, buildState) {
    $receiver.setState(setState$lambda(buildState));
  }
  var rFunction = defineInlineFunction('kotlin-react.react.rFunction_nczt40$', wrapFunction(function () {
    var wrapFunction = Kotlin.wrapFunction;
    var rFunction$lambda = wrapFunction(function () {
      var RBuilderSingle_init = _.react.RBuilderSingle;
      return function (closure$render) {
        return function (props) {
          var $receiver = new RBuilderSingle_init();
          closure$render($receiver, props);
          return $receiver.result;
        };
      };
    });
    return function (displayName, render) {
      var tmp$;
      var fn = Kotlin.isType(tmp$ = rFunction$lambda(render), Object) ? tmp$ : Kotlin.throwCCE();
      fn.displayName = displayName;
      return fn;
    };
  }));
  function RComponent() {
  }
  RComponent.prototype.init_bc6fkx$ = function ($receiver) {
  };
  RComponent.prototype.init_65a95q$ = function ($receiver, props) {
  };
  RComponent.prototype.children_168xaf$ = function ($receiver) {
    addAll($receiver.childList, React$Children.toArray(get_children(this.props)));
  };
  RComponent.prototype.render = function () {
    var $receiver = new RBuilderSingle();
    this.render_ss14n$($receiver);
    return $receiver.result;
  };
  RComponent.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'RComponent',
    interfaces: []
  };
  function RComponent_init($this) {
    $this = $this || Object.create(RComponent.prototype);
    React$Component.call($this);
    RComponent.call($this);
    var obj = {};
    $this.init_bc6fkx$(obj);
    $this.state = obj;
    return $this;
  }
  function RComponent_init_0(props, $this) {
    $this = $this || Object.create(RComponent.prototype);
    React$Component.call($this, props);
    RComponent.call($this);
    var obj = {};
    $this.init_65a95q$(obj, props);
    $this.state = obj;
    return $this;
  }
  var package$react = _.react || (_.react = {});
  package$react.invoke_adv8my$ = invoke;
  $$importsForInline$$['kotlin-react'] = _;
  package$react.invoke_5jvzpw$ = invoke_0;
  package$react.invoke_p8w6e7$ = invoke_1;
  package$react.ReactDsl = ReactDsl;
  $$importsForInline$$['kotlin-extensions'] = $module$kotlin_extensions;
  package$react.RBuilder = RBuilder;
  package$react.RBuilderMultiple = RBuilderMultiple;
  package$react.buildElements_nlnien$ = buildElements;
  package$react.RBuilderSingle = RBuilderSingle;
  package$react.buildElement_zepujl$ = buildElement;
  package$react.RElementBuilder = RElementBuilder;
  package$react.isString_84gpoi$ = isString;
  package$react.asStringOrNull_84gpoi$ = asStringOrNull;
  package$react.asElementOrNull_84gpoi$ = asElementOrNull;
  package$react.forEachElement_8et6ib$ = forEachElement;
  $$importsForInline$$.react = $module$react;
  package$react.cloneElement_3u47a8$ = cloneElement;
  package$react.clone_850fgf$ = clone_0;
  package$react.get_children_yllgzm$ = get_children;
  package$react.get_key_yllgzm$ = get_key;
  package$react.set_key_38rnt0$ = set_key;
  package$react.get_ref_yllgzm$ = get_ref;
  package$react.set_ref_7rqu$ = set_ref;
  package$react.BoxedState = BoxedState;
  package$react.setState_jbmi3x$ = setState;
  package$react.rFunction_nczt40$ = rFunction;
  package$react.RComponent_init_lqgejo$ = RComponent_init;
  package$react.RComponent_init_8bz2yq$ = RComponent_init_0;
  package$react.RComponent = RComponent;
  Kotlin.defineModule('kotlin-react', _);
  return _;
}(module.exports, require('kotlin'), require('react'), require('kotlin-extensions')));

//# sourceMappingURL=kotlin-react.js.map
