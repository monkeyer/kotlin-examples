(function (_, Kotlin, $module$kotlin_react, $module$react, $module$kotlinx_html_js, $module$kotlin_extensions, $module$react_dom) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var get_key = $module$kotlin_react.react.get_key_yllgzm$;
  var set_key = $module$kotlin_react.react.set_key_38rnt0$;
  var set_ref = $module$kotlin_react.react.set_ref_7rqu$;
  var RBuilderMultiple = $module$kotlin_react.react.RBuilderMultiple;
  var StringBuilder = Kotlin.kotlin.text.StringBuilder;
  var Unsafe = $module$kotlinx_html_js.kotlinx.html.Unsafe;
  var IllegalStateException = Kotlin.kotlin.IllegalStateException;
  var Unit = Kotlin.kotlin.Unit;
  var TagConsumer = $module$kotlinx_html_js.kotlinx.html.TagConsumer;
  var render = $module$react_dom.render;
  var listOf = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var toMap = Kotlin.kotlin.collections.toMap_6hr0sd$;
  var toMutableMap = Kotlin.kotlin.collections.toMutableMap_abgq59$;
  RDOMBuilder.prototype = Object.create(RBuilderMultiple.prototype);
  RDOMBuilder.prototype.constructor = RDOMBuilder;
  function InnerHTML(__html) {
    this.__html = __html;
  }
  InnerHTML.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'InnerHTML',
    interfaces: []
  };
  function RDOMBuilder(factory) {
    RBuilderMultiple.call(this);
    this.consumer = new RDOMBuilder$consumer$ObjectLiteral(this);
    this.attrs = factory(this.consumer);
    var obj = {};
    this.props = obj;
    var tmp$;
    tmp$ = this.attrs.attributesEntries.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      this.setProp_4w9ihe$(element.key, element.value);
    }
  }
  RDOMBuilder.prototype.setProp_4w9ihe$ = function (attribute, value) {
    var key = fixAttributeName(attribute);
    this.props[key] = value;
  };
  RDOMBuilder.prototype.attrs_1wdtl9$ = defineInlineFunction('kotlin-react-dom.react.dom.RDOMBuilder.attrs_1wdtl9$', function (handler) {
    handler(this.attrs);
  });
  Object.defineProperty(RDOMBuilder.prototype, 'key', {
    get: function () {
      return get_key(this.props);
    },
    set: function (value) {
      set_key(this.props, value);
    }
  });
  RDOMBuilder.prototype.ref_5ij4lk$ = function (handler) {
    set_ref(this.props, handler);
  };
  var copyToArray = Kotlin.kotlin.collections.copyToArray;
  RDOMBuilder.prototype.create = function () {
    var tmp$;
    return (tmp$ = $module$react).createElement.apply(tmp$, [this.attrs.tagName, this.props].concat(copyToArray(this.childList)));
  };
  function RDOMBuilder$consumer$ObjectLiteral(this$RDOMBuilder) {
    this.this$RDOMBuilder = this$RDOMBuilder;
  }
  RDOMBuilder$consumer$ObjectLiteral.prototype.onTagAttributeChange_5n2z71$ = function (tag, attribute, value) {
    this.this$RDOMBuilder.setProp_4w9ihe$(attribute, value);
  };
  RDOMBuilder$consumer$ObjectLiteral.prototype.onTagContent_6bul2c$ = function (content) {
    this.this$RDOMBuilder.childList.add_11rb$(content);
  };
  RDOMBuilder$consumer$ObjectLiteral.prototype.onTagContentEntity_ws8or7$ = function (entity) {
    this.this$RDOMBuilder.childList.add_11rb$(entity.text);
  };
  function RDOMBuilder$consumer$ObjectLiteral$onTagContentUnsafe$ObjectLiteral(closure$sb) {
    this.closure$sb = closure$sb;
  }
  RDOMBuilder$consumer$ObjectLiteral$onTagContentUnsafe$ObjectLiteral.prototype.unaryPlus_pdl1vz$ = function ($receiver) {
    this.closure$sb.append_gw00v9$($receiver);
  };
  RDOMBuilder$consumer$ObjectLiteral$onTagContentUnsafe$ObjectLiteral.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    interfaces: [Unsafe]
  };
  RDOMBuilder$consumer$ObjectLiteral.prototype.onTagContentUnsafe_kntra7$ = function (block) {
    var sb = new StringBuilder();
    block(new RDOMBuilder$consumer$ObjectLiteral$onTagContentUnsafe$ObjectLiteral(sb));
    this.this$RDOMBuilder.props.dangerouslySetInnerHTML = new InnerHTML(sb.toString());
  };
  RDOMBuilder$consumer$ObjectLiteral.prototype.onTagStart_tkgjla$ = function (tag) {
    throw new IllegalStateException("Don't nest tags inside props block");
  };
  RDOMBuilder$consumer$ObjectLiteral.prototype.onTagEnd_tkgjla$ = function (tag) {
    throw new IllegalStateException("Don't nest tags inside props block");
  };
  RDOMBuilder$consumer$ObjectLiteral.prototype.onTagEvent_azi6uv$ = function (tag, event, value) {
    this.this$RDOMBuilder.setProp_4w9ihe$(event, value);
  };
  RDOMBuilder$consumer$ObjectLiteral.prototype.finalize = function () {
    return Unit;
  };
  RDOMBuilder$consumer$ObjectLiteral.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    interfaces: [TagConsumer]
  };
  RDOMBuilder.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'RDOMBuilder',
    interfaces: [RBuilderMultiple]
  };
  var RBuilderSingle_init = $module$kotlin_react.react.RBuilderSingle;
  function render_0(container, handler) {
    var $receiver = new RBuilderSingle_init();
    handler($receiver);
    render($receiver.result, container);
  }
  var events;
  var attrsMap;
  function fixAttributeName(event) {
    var tmp$;
    return (tmp$ = attrsMap.get_11rb$(event)) != null ? tmp$ : event;
  }
  function StringAttr() {
    StringAttr_instance = this;
  }
  StringAttr.prototype.getValue_pt3q5s$ = function (thisRef, property) {
    var tmp$;
    return (tmp$ = thisRef.attributes.get_11rb$(property.callableName)) != null ? tmp$ : '';
  };
  StringAttr.prototype.setValue_wi26v6$ = function (thisRef, property, value) {
    var $receiver = thisRef.attributes;
    var key = property.callableName;
    $receiver.put_xwzc9p$(key, value);
  };
  StringAttr.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'StringAttr',
    interfaces: []
  };
  var StringAttr_instance = null;
  function StringAttr_getInstance() {
    if (StringAttr_instance === null) {
      new StringAttr();
    }
    return StringAttr_instance;
  }
  var key;
  function get_key_0($receiver) {
    return key.getValue_pt3q5s$($receiver, new Kotlin.PropertyMetadata('key'));
  }
  function set_key_0($receiver, key_0) {
    key.setValue_wi26v6$($receiver, new Kotlin.PropertyMetadata('key'), key_0);
  }
  var defaultValue;
  function get_defaultValue($receiver) {
    return defaultValue.getValue_pt3q5s$($receiver, new Kotlin.PropertyMetadata('defaultValue'));
  }
  function set_defaultValue($receiver, defaultValue_0) {
    defaultValue.setValue_wi26v6$($receiver, new Kotlin.PropertyMetadata('defaultValue'), defaultValue_0);
  }
  var defaultValue_0;
  function get_defaultValue_0($receiver) {
    return defaultValue_0.getValue_pt3q5s$($receiver, new Kotlin.PropertyMetadata('defaultValue'));
  }
  function set_defaultValue_0($receiver, defaultValue) {
    defaultValue_0.setValue_wi26v6$($receiver, new Kotlin.PropertyMetadata('defaultValue'), defaultValue);
  }
  var value;
  function get_value($receiver) {
    return value.getValue_pt3q5s$($receiver, new Kotlin.PropertyMetadata('value'));
  }
  function set_value($receiver, value_0) {
    value.setValue_wi26v6$($receiver, new Kotlin.PropertyMetadata('value'), value_0);
  }
  var tag = defineInlineFunction('kotlin-react-dom.react.dom.tag_ytkory$', wrapFunction(function () {
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    return function ($receiver, block, factory) {
      var $receiver_0 = new RDOMBuilder_init(factory);
      block($receiver_0);
      return $receiver.child_2usv9w$($receiver_0.create());
    };
  }));
  var a = defineInlineFunction('kotlin-react-dom.react.dom.a_yr0dqg$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_alerag$;
    var A_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.A;
    function a$lambda(closure$href, closure$target, closure$classes) {
      return function (it) {
        return new A_init(attributesMapOf(['href', closure$href, 'target', closure$target, 'class', closure$classes]), it);
      };
    }
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    return function ($receiver, href, target, classes, block) {
      if (href === void 0)
        href = null;
      if (target === void 0)
        target = null;
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(a$lambda(href, target, classes));
      block($receiver_0);
      return $receiver.child_2usv9w$($receiver_0.create());
    };
  }));
  var abbr = defineInlineFunction('kotlin-react-dom.react.dom.abbr_gtb1ee$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var ABBR_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.ABBR;
    function abbr$lambda(closure$classes) {
      return function (it) {
        return new ABBR_init(attributesMapOf('class', closure$classes), it);
      };
    }
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(abbr$lambda(classes));
      block($receiver_0);
      return $receiver.child_2usv9w$($receiver_0.create());
    };
  }));
  var address = defineInlineFunction('kotlin-react-dom.react.dom.address_j2txqz$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var ADDRESS_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.ADDRESS;
    function address$lambda(closure$classes) {
      return function (it) {
        return new ADDRESS_init(attributesMapOf('class', closure$classes), it);
      };
    }
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(address$lambda(classes));
      block($receiver_0);
      return $receiver.child_2usv9w$($receiver_0.create());
    };
  }));
  var area = defineInlineFunction('kotlin-react-dom.react.dom.area_7jb7vq$', wrapFunction(function () {
    var enumEncode = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributes.enumEncode_m4whry$;
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_alerag$;
    var AREA_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.AREA;
    function area$lambda(closure$shape, closure$alt, closure$classes) {
      return function (it) {
        return new AREA_init(attributesMapOf(['Shape', closure$shape != null ? enumEncode(closure$shape) : null, 'alt', closure$alt, 'class', closure$classes]), it);
      };
    }
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    return function ($receiver, shape, alt, classes, block) {
      if (shape === void 0)
        shape = null;
      if (alt === void 0)
        alt = null;
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(area$lambda(shape, alt, classes));
      block($receiver_0);
      return $receiver.child_2usv9w$($receiver_0.create());
    };
  }));
  var article = defineInlineFunction('kotlin-react-dom.react.dom.article_t55271$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var ARTICLE_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.ARTICLE;
    function article$lambda(closure$classes) {
      return function (it) {
        return new ARTICLE_init(attributesMapOf('class', closure$classes), it);
      };
    }
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(article$lambda(classes));
      block($receiver_0);
      return $receiver.child_2usv9w$($receiver_0.create());
    };
  }));
  var aside = defineInlineFunction('kotlin-react-dom.react.dom.aside_l3t1i9$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var ASIDE_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.ASIDE;
    function aside$lambda(closure$classes) {
      return function (it) {
        return new ASIDE_init(attributesMapOf('class', closure$classes), it);
      };
    }
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(aside$lambda(classes));
      block($receiver_0);
      return $receiver.child_2usv9w$($receiver_0.create());
    };
  }));
  var audio = defineInlineFunction('kotlin-react-dom.react.dom.audio_w2c39f$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var AUDIO_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.AUDIO;
    function audio$lambda(closure$classes) {
      return function (it) {
        return new AUDIO_init(attributesMapOf('class', closure$classes), it);
      };
    }
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(audio$lambda(classes));
      block($receiver_0);
      return $receiver.child_2usv9w$($receiver_0.create());
    };
  }));
  var b = defineInlineFunction('kotlin-react-dom.react.dom.b_tog4y1$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var B_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.B;
    function b$lambda(closure$classes) {
      return function (it) {
        return new B_init(attributesMapOf('class', closure$classes), it);
      };
    }
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(b$lambda(classes));
      block($receiver_0);
      return $receiver.child_2usv9w$($receiver_0.create());
    };
  }));
  var base = defineInlineFunction('kotlin-react-dom.react.dom.base_l9ftdi$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var BASE_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.BASE;
    function base$lambda(closure$classes) {
      return function (it) {
        return new BASE_init(attributesMapOf('class', closure$classes), it);
      };
    }
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(base$lambda(classes));
      block($receiver_0);
      return $receiver.child_2usv9w$($receiver_0.create());
    };
  }));
  var bdi = defineInlineFunction('kotlin-react-dom.react.dom.bdi_8sojgy$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var BDI_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.BDI;
    function bdi$lambda(closure$classes) {
      return function (it) {
        return new BDI_init(attributesMapOf('class', closure$classes), it);
      };
    }
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(bdi$lambda(classes));
      block($receiver_0);
      return $receiver.child_2usv9w$($receiver_0.create());
    };
  }));
  var bdo = defineInlineFunction('kotlin-react-dom.react.dom.bdo_t61hak$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var BDO_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.BDO;
    function bdo$lambda(closure$classes) {
      return function (it) {
        return new BDO_init(attributesMapOf('class', closure$classes), it);
      };
    }
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(bdo$lambda(classes));
      block($receiver_0);
      return $receiver.child_2usv9w$($receiver_0.create());
    };
  }));
  var blockQuote = defineInlineFunction('kotlin-react-dom.react.dom.blockQuote_yflo7g$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var BLOCKQUOTE_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.BLOCKQUOTE;
    function blockQuote$lambda(closure$classes) {
      return function (it) {
        return new BLOCKQUOTE_init(attributesMapOf('class', closure$classes), it);
      };
    }
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(blockQuote$lambda(classes));
      block($receiver_0);
      return $receiver.child_2usv9w$($receiver_0.create());
    };
  }));
  var body = defineInlineFunction('kotlin-react-dom.react.dom.body_omwgih$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var BODY_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.BODY;
    function body$lambda(closure$classes) {
      return function (it) {
        return new BODY_init(attributesMapOf('class', closure$classes), it);
      };
    }
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(body$lambda(classes));
      block($receiver_0);
      return $receiver.child_2usv9w$($receiver_0.create());
    };
  }));
  var br = defineInlineFunction('kotlin-react-dom.react.dom.br_ydls45$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var BR_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.BR;
    function br$lambda(closure$classes) {
      return function (it) {
        return new BR_init(attributesMapOf('class', closure$classes), it);
      };
    }
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(br$lambda(classes));
      block($receiver_0);
      return $receiver.child_2usv9w$($receiver_0.create());
    };
  }));
  var button = defineInlineFunction('kotlin-react-dom.react.dom.button_ttg585$', wrapFunction(function () {
    var enumEncode = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributes.enumEncode_m4whry$;
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_alerag$;
    var BUTTON_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.BUTTON;
    function button$lambda(closure$formEncType, closure$formMethod, closure$type, closure$classes) {
      return function (it) {
        return new BUTTON_init(attributesMapOf(['formenctype', closure$formEncType != null ? enumEncode(closure$formEncType) : null, 'formmethod', closure$formMethod != null ? enumEncode(closure$formMethod) : null, 'type', closure$type != null ? enumEncode(closure$type) : null, 'class', closure$classes]), it);
      };
    }
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    return function ($receiver, formEncType, formMethod, type, classes, block) {
      if (formEncType === void 0)
        formEncType = null;
      if (formMethod === void 0)
        formMethod = null;
      if (type === void 0)
        type = null;
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(button$lambda(formEncType, formMethod, type, classes));
      block($receiver_0);
      return $receiver.child_2usv9w$($receiver_0.create());
    };
  }));
  var canvas = defineInlineFunction('kotlin-react-dom.react.dom.canvas_xoe246$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var CANVAS_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.CANVAS;
    function canvas$lambda(closure$classes) {
      return function (it) {
        return new CANVAS_init(attributesMapOf('class', closure$classes), it);
      };
    }
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    return function ($receiver, classes, content) {
      if (classes === void 0)
        classes = null;
      if (content === void 0)
        content = '';
      var $receiver_0 = new RDOMBuilder_init(canvas$lambda(classes));
      $receiver_0.unaryPlus_pdl1vz$(content);
      return $receiver.child_2usv9w$($receiver_0.create());
    };
  }));
  var canvas_0 = defineInlineFunction('kotlin-react-dom.react.dom.canvas_3hsljx$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var CANVAS_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.CANVAS;
    function canvas$lambda(closure$classes) {
      return function (it) {
        return new CANVAS_init(attributesMapOf('class', closure$classes), it);
      };
    }
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(canvas$lambda(classes));
      block($receiver_0);
      return $receiver.child_2usv9w$($receiver_0.create());
    };
  }));
  var caption = defineInlineFunction('kotlin-react-dom.react.dom.caption_z6pvm5$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var CAPTION_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.CAPTION;
    function caption$lambda(closure$classes) {
      return function (it) {
        return new CAPTION_init(attributesMapOf('class', closure$classes), it);
      };
    }
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(caption$lambda(classes));
      block($receiver_0);
      return $receiver.child_2usv9w$($receiver_0.create());
    };
  }));
  var cite = defineInlineFunction('kotlin-react-dom.react.dom.cite_2pbb98$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var CITE_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.CITE;
    function cite$lambda(closure$classes) {
      return function (it) {
        return new CITE_init(attributesMapOf('class', closure$classes), it);
      };
    }
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(cite$lambda(classes));
      block($receiver_0);
      return $receiver.child_2usv9w$($receiver_0.create());
    };
  }));
  var code = defineInlineFunction('kotlin-react-dom.react.dom.code_xk1a8i$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var CODE_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.CODE;
    function code$lambda(closure$classes) {
      return function (it) {
        return new CODE_init(attributesMapOf('class', closure$classes), it);
      };
    }
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(code$lambda(classes));
      block($receiver_0);
      return $receiver.child_2usv9w$($receiver_0.create());
    };
  }));
  var col = defineInlineFunction('kotlin-react-dom.react.dom.col_2tgex$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var COL_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.COL;
    function col$lambda(closure$classes) {
      return function (it) {
        return new COL_init(attributesMapOf('class', closure$classes), it);
      };
    }
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(col$lambda(classes));
      block($receiver_0);
      return $receiver.child_2usv9w$($receiver_0.create());
    };
  }));
  var colGroup = defineInlineFunction('kotlin-react-dom.react.dom.colGroup_d153x8$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var COLGROUP_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.COLGROUP;
    function colGroup$lambda(closure$classes) {
      return function (it) {
        return new COLGROUP_init(attributesMapOf('class', closure$classes), it);
      };
    }
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(colGroup$lambda(classes));
      block($receiver_0);
      return $receiver.child_2usv9w$($receiver_0.create());
    };
  }));
  var command = defineInlineFunction('kotlin-react-dom.react.dom.command_4wpzuc$', wrapFunction(function () {
    var enumEncode = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributes.enumEncode_m4whry$;
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_alerag$;
    var COMMAND_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.COMMAND;
    function command$lambda(closure$type, closure$classes) {
      return function (it) {
        return new COMMAND_init(attributesMapOf(['type', closure$type != null ? enumEncode(closure$type) : null, 'class', closure$classes]), it);
      };
    }
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    return function ($receiver, type, classes, block) {
      if (type === void 0)
        type = null;
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(command$lambda(type, classes));
      block($receiver_0);
      return $receiver.child_2usv9w$($receiver_0.create());
    };
  }));
  var dataList = defineInlineFunction('kotlin-react-dom.react.dom.dataList_w2yd71$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var DATALIST_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.DATALIST;
    function dataList$lambda(closure$classes) {
      return function (it) {
        return new DATALIST_init(attributesMapOf('class', closure$classes), it);
      };
    }
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(dataList$lambda(classes));
      block($receiver_0);
      return $receiver.child_2usv9w$($receiver_0.create());
    };
  }));
  var dd = defineInlineFunction('kotlin-react-dom.react.dom.dd_dgydhh$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var DD_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.DD;
    function dd$lambda(closure$classes) {
      return function (it) {
        return new DD_init(attributesMapOf('class', closure$classes), it);
      };
    }
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(dd$lambda(classes));
      block($receiver_0);
      return $receiver.child_2usv9w$($receiver_0.create());
    };
  }));
  var del = defineInlineFunction('kotlin-react-dom.react.dom.del_r4qc2a$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var DEL_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.DEL;
    function del$lambda(closure$classes) {
      return function (it) {
        return new DEL_init(attributesMapOf('class', closure$classes), it);
      };
    }
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(del$lambda(classes));
      block($receiver_0);
      return $receiver.child_2usv9w$($receiver_0.create());
    };
  }));
  var details = defineInlineFunction('kotlin-react-dom.react.dom.details_309mfr$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var DETAILS_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.DETAILS;
    function details$lambda(closure$classes) {
      return function (it) {
        return new DETAILS_init(attributesMapOf('class', closure$classes), it);
      };
    }
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(details$lambda(classes));
      block($receiver_0);
      return $receiver.child_2usv9w$($receiver_0.create());
    };
  }));
  var dfn = defineInlineFunction('kotlin-react-dom.react.dom.dfn_lmx903$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var DFN_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.DFN;
    function dfn$lambda(closure$classes) {
      return function (it) {
        return new DFN_init(attributesMapOf('class', closure$classes), it);
      };
    }
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(dfn$lambda(classes));
      block($receiver_0);
      return $receiver.child_2usv9w$($receiver_0.create());
    };
  }));
  var dialog = defineInlineFunction('kotlin-react-dom.react.dom.dialog_3a8nil$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var DIALOG_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.DIALOG;
    function dialog$lambda(closure$classes) {
      return function (it) {
        return new DIALOG_init(attributesMapOf('class', closure$classes), it);
      };
    }
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(dialog$lambda(classes));
      block($receiver_0);
      return $receiver.child_2usv9w$($receiver_0.create());
    };
  }));
  var div = defineInlineFunction('kotlin-react-dom.react.dom.div_m1f17c$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var DIV_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.DIV;
    function div$lambda(closure$classes) {
      return function (it) {
        return new DIV_init(attributesMapOf('class', closure$classes), it);
      };
    }
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(div$lambda(classes));
      block($receiver_0);
      return $receiver.child_2usv9w$($receiver_0.create());
    };
  }));
  var dl = defineInlineFunction('kotlin-react-dom.react.dom.dl_9zih1p$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var DL_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.DL;
    function dl$lambda(closure$classes) {
      return function (it) {
        return new DL_init(attributesMapOf('class', closure$classes), it);
      };
    }
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(dl$lambda(classes));
      block($receiver_0);
      return $receiver.child_2usv9w$($receiver_0.create());
    };
  }));
  var dt = defineInlineFunction('kotlin-react-dom.react.dom.dt_6i2klx$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var DT_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.DT;
    function dt$lambda(closure$classes) {
      return function (it) {
        return new DT_init(attributesMapOf('class', closure$classes), it);
      };
    }
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(dt$lambda(classes));
      block($receiver_0);
      return $receiver.child_2usv9w$($receiver_0.create());
    };
  }));
  var em = defineInlineFunction('kotlin-react-dom.react.dom.em_3y94pf$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var EM_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.EM;
    function em$lambda(closure$classes) {
      return function (it) {
        return new EM_init(attributesMapOf('class', closure$classes), it);
      };
    }
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(em$lambda(classes));
      block($receiver_0);
      return $receiver.child_2usv9w$($receiver_0.create());
    };
  }));
  var embed = defineInlineFunction('kotlin-react-dom.react.dom.embed_b0m97k$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var EMBED_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.EMBED;
    function embed$lambda(closure$classes) {
      return function (it) {
        return new EMBED_init(attributesMapOf('class', closure$classes), it);
      };
    }
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(embed$lambda(classes));
      block($receiver_0);
      return $receiver.child_2usv9w$($receiver_0.create());
    };
  }));
  var fieldSet = defineInlineFunction('kotlin-react-dom.react.dom.fieldSet_rh1sr7$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var FIELDSET_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.FIELDSET;
    function fieldSet$lambda(closure$classes) {
      return function (it) {
        return new FIELDSET_init(attributesMapOf('class', closure$classes), it);
      };
    }
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(fieldSet$lambda(classes));
      block($receiver_0);
      return $receiver.child_2usv9w$($receiver_0.create());
    };
  }));
  var figcaption = defineInlineFunction('kotlin-react-dom.react.dom.figcaption_cdg0dj$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var FIGCAPTION_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.FIGCAPTION;
    function figcaption$lambda(closure$classes) {
      return function (it) {
        return new FIGCAPTION_init(attributesMapOf('class', closure$classes), it);
      };
    }
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(figcaption$lambda(classes));
      block($receiver_0);
      return $receiver.child_2usv9w$($receiver_0.create());
    };
  }));
  var figure = defineInlineFunction('kotlin-react-dom.react.dom.figure_2elfl5$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var FIGURE_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.FIGURE;
    function figure$lambda(closure$classes) {
      return function (it) {
        return new FIGURE_init(attributesMapOf('class', closure$classes), it);
      };
    }
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(figure$lambda(classes));
      block($receiver_0);
      return $receiver.child_2usv9w$($receiver_0.create());
    };
  }));
  var footer = defineInlineFunction('kotlin-react-dom.react.dom.footer_tbejb4$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var FOOTER_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.FOOTER;
    function footer$lambda(closure$classes) {
      return function (it) {
        return new FOOTER_init(attributesMapOf('class', closure$classes), it);
      };
    }
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(footer$lambda(classes));
      block($receiver_0);
      return $receiver.child_2usv9w$($receiver_0.create());
    };
  }));
  var form = defineInlineFunction('kotlin-react-dom.react.dom.form_425sad$', wrapFunction(function () {
    var enumEncode = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributes.enumEncode_m4whry$;
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_alerag$;
    var FORM_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.FORM;
    function form$lambda(closure$action, closure$encType, closure$method, closure$classes) {
      return function (it) {
        return new FORM_init(attributesMapOf(['action', closure$action, 'enctype', closure$encType != null ? enumEncode(closure$encType) : null, 'method', closure$method != null ? enumEncode(closure$method) : null, 'class', closure$classes]), it);
      };
    }
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    return function ($receiver, action, encType, method, classes, block) {
      if (action === void 0)
        action = null;
      if (encType === void 0)
        encType = null;
      if (method === void 0)
        method = null;
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(form$lambda(action, encType, method, classes));
      block($receiver_0);
      return $receiver.child_2usv9w$($receiver_0.create());
    };
  }));
  var h1 = defineInlineFunction('kotlin-react-dom.react.dom.h1_ndttiq$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var H1_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.H1;
    function h1$lambda(closure$classes) {
      return function (it) {
        return new H1_init(attributesMapOf('class', closure$classes), it);
      };
    }
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(h1$lambda(classes));
      block($receiver_0);
      return $receiver.child_2usv9w$($receiver_0.create());
    };
  }));
  var h2 = defineInlineFunction('kotlin-react-dom.react.dom.h2_exvatt$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var H2_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.H2;
    function h2$lambda(closure$classes) {
      return function (it) {
        return new H2_init(attributesMapOf('class', closure$classes), it);
      };
    }
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(h2$lambda(classes));
      block($receiver_0);
      return $receiver.child_2usv9w$($receiver_0.create());
    };
  }));
  var h3 = defineInlineFunction('kotlin-react-dom.react.dom.h3_6hws4w$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var H3_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.H3;
    function h3$lambda(closure$classes) {
      return function (it) {
        return new H3_init(attributesMapOf('class', closure$classes), it);
      };
    }
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(h3$lambda(classes));
      block($receiver_0);
      return $receiver.child_2usv9w$($receiver_0.create());
    };
  }));
  var h4 = defineInlineFunction('kotlin-react-dom.react.dom.h4_1y1qk1$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var H4_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.H4;
    function h4$lambda(closure$classes) {
      return function (it) {
        return new H4_init(attributesMapOf('class', closure$classes), it);
      };
    }
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(h4$lambda(classes));
      block($receiver_0);
      return $receiver.child_2usv9w$($receiver_0.create());
    };
  }));
  var h5 = defineInlineFunction('kotlin-react-dom.react.dom.h5_ae098y$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var H5_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.H5;
    function h5$lambda(closure$classes) {
      return function (it) {
        return new H5_init(attributesMapOf('class', closure$classes), it);
      };
    }
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(h5$lambda(classes));
      block($receiver_0);
      return $receiver.child_2usv9w$($receiver_0.create());
    };
  }));
  var h6 = defineInlineFunction('kotlin-react-dom.react.dom.h6_ityrxv$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var H6_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.H6;
    function h6$lambda(closure$classes) {
      return function (it) {
        return new H6_init(attributesMapOf('class', closure$classes), it);
      };
    }
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(h6$lambda(classes));
      block($receiver_0);
      return $receiver.child_2usv9w$($receiver_0.create());
    };
  }));
  var head = defineInlineFunction('kotlin-react-dom.react.dom.head_7jnz8i$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var HEAD_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.HEAD;
    function head$lambda(it) {
      return new HEAD_init(html.emptyMap, it);
    }
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    return function ($receiver, block) {
      var $receiver_0 = new RDOMBuilder_init(head$lambda);
      block($receiver_0);
      return $receiver.child_2usv9w$($receiver_0.create());
    };
  }));
  var header = defineInlineFunction('kotlin-react-dom.react.dom.header_4ytp82$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var HEADER_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.HEADER;
    function header$lambda(closure$classes) {
      return function (it) {
        return new HEADER_init(attributesMapOf('class', closure$classes), it);
      };
    }
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(header$lambda(classes));
      block($receiver_0);
      return $receiver.child_2usv9w$($receiver_0.create());
    };
  }));
  var hGroup = defineInlineFunction('kotlin-react-dom.react.dom.hGroup_8pv0w4$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var HGROUP_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.HGROUP;
    function hGroup$lambda(closure$classes) {
      return function (it) {
        return new HGROUP_init(attributesMapOf('class', closure$classes), it);
      };
    }
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(hGroup$lambda(classes));
      block($receiver_0);
      return $receiver.child_2usv9w$($receiver_0.create());
    };
  }));
  var hr = defineInlineFunction('kotlin-react-dom.react.dom.hr_svmwkx$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var HR_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.HR;
    function hr$lambda(closure$classes) {
      return function (it) {
        return new HR_init(attributesMapOf('class', closure$classes), it);
      };
    }
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(hr$lambda(classes));
      block($receiver_0);
      return $receiver.child_2usv9w$($receiver_0.create());
    };
  }));
  var html = defineInlineFunction('kotlin-react-dom.react.dom.html_h60l9v$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var HTML_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.HTML;
    function html$lambda(it) {
      return new HTML_init(html.emptyMap, it);
    }
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    return function ($receiver, block) {
      var $receiver_0 = new RDOMBuilder_init(html$lambda);
      block($receiver_0);
      return $receiver.child_2usv9w$($receiver_0.create());
    };
  }));
  var i = defineInlineFunction('kotlin-react-dom.react.dom.i_hr1ptc$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var I_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.I;
    function i$lambda(closure$classes) {
      return function (it) {
        return new I_init(attributesMapOf('class', closure$classes), it);
      };
    }
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(i$lambda(classes));
      block($receiver_0);
      return $receiver.child_2usv9w$($receiver_0.create());
    };
  }));
  var iframe = defineInlineFunction('kotlin-react-dom.react.dom.iframe_ft8ple$', wrapFunction(function () {
    var enumEncode = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributes.enumEncode_m4whry$;
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_alerag$;
    var IFRAME_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.IFRAME;
    function iframe$lambda(closure$sandbox, closure$classes) {
      return function (it) {
        return new IFRAME_init(attributesMapOf(['sandbox', closure$sandbox != null ? enumEncode(closure$sandbox) : null, 'class', closure$classes]), it);
      };
    }
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    return function ($receiver, sandbox, classes, content) {
      if (sandbox === void 0)
        sandbox = null;
      if (classes === void 0)
        classes = null;
      if (content === void 0)
        content = '';
      var $receiver_0 = new RDOMBuilder_init(iframe$lambda(sandbox, classes));
      $receiver_0.unaryPlus_pdl1vz$(content);
      return $receiver.child_2usv9w$($receiver_0.create());
    };
  }));
  var iframe_0 = defineInlineFunction('kotlin-react-dom.react.dom.iframe_9wftv7$', wrapFunction(function () {
    var enumEncode = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributes.enumEncode_m4whry$;
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_alerag$;
    var IFRAME_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.IFRAME;
    function iframe$lambda(closure$sandbox, closure$classes) {
      return function (it) {
        return new IFRAME_init(attributesMapOf(['sandbox', closure$sandbox != null ? enumEncode(closure$sandbox) : null, 'class', closure$classes]), it);
      };
    }
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    return function ($receiver, sandbox, classes, block) {
      if (sandbox === void 0)
        sandbox = null;
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(iframe$lambda(sandbox, classes));
      block($receiver_0);
      return $receiver.child_2usv9w$($receiver_0.create());
    };
  }));
  var img = defineInlineFunction('kotlin-react-dom.react.dom.img_j4s0yy$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_alerag$;
    var IMG_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.IMG;
    function img$lambda(closure$alt, closure$src, closure$classes) {
      return function (it) {
        return new IMG_init(attributesMapOf(['alt', closure$alt, 'src', closure$src, 'class', closure$classes]), it);
      };
    }
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    return function ($receiver, alt, src, classes, block) {
      if (alt === void 0)
        alt = null;
      if (src === void 0)
        src = null;
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(img$lambda(alt, src, classes));
      block($receiver_0);
      return $receiver.child_2usv9w$($receiver_0.create());
    };
  }));
  var input = defineInlineFunction('kotlin-react-dom.react.dom.input_s5tavk$', wrapFunction(function () {
    var enumEncode = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributes.enumEncode_m4whry$;
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_alerag$;
    var INPUT_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.INPUT;
    function input$lambda(closure$type, closure$formEncType, closure$formMethod, closure$name, closure$classes) {
      return function (it) {
        return new INPUT_init(attributesMapOf(['type', closure$type != null ? enumEncode(closure$type) : null, 'formenctype', closure$formEncType != null ? enumEncode(closure$formEncType) : null, 'formmethod', closure$formMethod != null ? enumEncode(closure$formMethod) : null, 'name', closure$name, 'class', closure$classes]), it);
      };
    }
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    return function ($receiver, type, formEncType, formMethod, name, classes, block) {
      if (type === void 0)
        type = null;
      if (formEncType === void 0)
        formEncType = null;
      if (formMethod === void 0)
        formMethod = null;
      if (name === void 0)
        name = null;
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(input$lambda(type, formEncType, formMethod, name, classes));
      block($receiver_0);
      return $receiver.child_2usv9w$($receiver_0.create());
    };
  }));
  var ins = defineInlineFunction('kotlin-react-dom.react.dom.ins_wqxjcb$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var INS_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.INS;
    function ins$lambda(closure$classes) {
      return function (it) {
        return new INS_init(attributesMapOf('class', closure$classes), it);
      };
    }
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(ins$lambda(classes));
      block($receiver_0);
      return $receiver.child_2usv9w$($receiver_0.create());
    };
  }));
  var kbd = defineInlineFunction('kotlin-react-dom.react.dom.kbd_3fhkk$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var KBD_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.KBD;
    function kbd$lambda(closure$classes) {
      return function (it) {
        return new KBD_init(attributesMapOf('class', closure$classes), it);
      };
    }
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(kbd$lambda(classes));
      block($receiver_0);
      return $receiver.child_2usv9w$($receiver_0.create());
    };
  }));
  var keyGen = defineInlineFunction('kotlin-react-dom.react.dom.keyGen_43kri9$', wrapFunction(function () {
    var enumEncode = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributes.enumEncode_m4whry$;
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_alerag$;
    var KEYGEN_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.KEYGEN;
    function keyGen$lambda(closure$keyType, closure$classes) {
      return function (it) {
        return new KEYGEN_init(attributesMapOf(['keytype', closure$keyType != null ? enumEncode(closure$keyType) : null, 'class', closure$classes]), it);
      };
    }
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    return function ($receiver, keyType, classes, block) {
      if (keyType === void 0)
        keyType = null;
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(keyGen$lambda(keyType, classes));
      block($receiver_0);
      return $receiver.child_2usv9w$($receiver_0.create());
    };
  }));
  var label = defineInlineFunction('kotlin-react-dom.react.dom.label_7ao1uj$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var LABEL_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.LABEL;
    function label$lambda(closure$classes) {
      return function (it) {
        return new LABEL_init(attributesMapOf('class', closure$classes), it);
      };
    }
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(label$lambda(classes));
      block($receiver_0);
      return $receiver.child_2usv9w$($receiver_0.create());
    };
  }));
  var legend = defineInlineFunction('kotlin-react-dom.react.dom.legend_f9ty8e$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var LEGEND_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.LEGEND;
    function legend$lambda(closure$classes) {
      return function (it) {
        return new LEGEND_init(attributesMapOf('class', closure$classes), it);
      };
    }
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(legend$lambda(classes));
      block($receiver_0);
      return $receiver.child_2usv9w$($receiver_0.create());
    };
  }));
  var li = defineInlineFunction('kotlin-react-dom.react.dom.li_ip63c2$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var LI_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.LI;
    function li$lambda(closure$classes) {
      return function (it) {
        return new LI_init(attributesMapOf('class', closure$classes), it);
      };
    }
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(li$lambda(classes));
      block($receiver_0);
      return $receiver.child_2usv9w$($receiver_0.create());
    };
  }));
  var link = defineInlineFunction('kotlin-react-dom.react.dom.link_z6cr1d$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_alerag$;
    var LINK_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.LINK;
    function link$lambda(closure$href, closure$rel, closure$type) {
      return function (it) {
        return new LINK_init(attributesMapOf(['href', closure$href, 'rel', closure$rel, 'type', closure$type]), it);
      };
    }
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    return function ($receiver, href, rel, type, block) {
      if (href === void 0)
        href = null;
      if (rel === void 0)
        rel = null;
      if (type === void 0)
        type = null;
      var $receiver_0 = new RDOMBuilder_init(link$lambda(href, rel, type));
      block($receiver_0);
      return $receiver.child_2usv9w$($receiver_0.create());
    };
  }));
  var map = defineInlineFunction('kotlin-react-dom.react.dom.map_wjyr5y$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_alerag$;
    var MAP_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.MAP;
    function map$lambda(closure$name, closure$classes) {
      return function (it) {
        return new MAP_init(attributesMapOf(['name', closure$name, 'class', closure$classes]), it);
      };
    }
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    return function ($receiver, name, classes, block) {
      if (name === void 0)
        name = null;
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(map$lambda(name, classes));
      block($receiver_0);
      return $receiver.child_2usv9w$($receiver_0.create());
    };
  }));
  var mark = defineInlineFunction('kotlin-react-dom.react.dom.mark_yu4hde$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var MARK_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.MARK;
    function mark$lambda(closure$classes) {
      return function (it) {
        return new MARK_init(attributesMapOf('class', closure$classes), it);
      };
    }
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(mark$lambda(classes));
      block($receiver_0);
      return $receiver.child_2usv9w$($receiver_0.create());
    };
  }));
  var math = defineInlineFunction('kotlin-react-dom.react.dom.math_z97blf$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var MATH_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.MATH;
    function math$lambda(closure$classes) {
      return function (it) {
        return new MATH_init(attributesMapOf('class', closure$classes), it);
      };
    }
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(math$lambda(classes));
      block($receiver_0);
      return $receiver.child_2usv9w$($receiver_0.create());
    };
  }));
  var mathml = defineInlineFunction('kotlin-react-dom.react.dom.mathml_xoe246$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var MATHML_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.MATHML;
    function mathml$lambda(closure$classes) {
      return function (it) {
        return new MATHML_init(attributesMapOf('class', closure$classes), it);
      };
    }
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    return function ($receiver, classes, content) {
      if (classes === void 0)
        classes = null;
      if (content === void 0)
        content = '';
      var $receiver_0 = new RDOMBuilder_init(mathml$lambda(classes));
      $receiver_0.unaryPlus_pdl1vz$(content);
      return $receiver.child_2usv9w$($receiver_0.create());
    };
  }));
  var mathml_0 = defineInlineFunction('kotlin-react-dom.react.dom.mathml_8zca7o$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var MATHML_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.MATHML;
    function mathml$lambda(closure$classes) {
      return function (it) {
        return new MATHML_init(attributesMapOf('class', closure$classes), it);
      };
    }
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(mathml$lambda(classes));
      block($receiver_0);
      return $receiver.child_2usv9w$($receiver_0.create());
    };
  }));
  var meta = defineInlineFunction('kotlin-react-dom.react.dom.meta_rg2j5z$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_alerag$;
    var META_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.META;
    function meta$lambda(closure$name, closure$content) {
      return function (it) {
        return new META_init(attributesMapOf(['name', closure$name, 'content', closure$content]), it);
      };
    }
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    return function ($receiver, name, content, block) {
      if (name === void 0)
        name = null;
      if (content === void 0)
        content = null;
      var $receiver_0 = new RDOMBuilder_init(meta$lambda(name, content));
      block($receiver_0);
      return $receiver.child_2usv9w$($receiver_0.create());
    };
  }));
  var meter = defineInlineFunction('kotlin-react-dom.react.dom.meter_8sdt9s$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var METER_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.METER;
    function meter$lambda(closure$classes) {
      return function (it) {
        return new METER_init(attributesMapOf('class', closure$classes), it);
      };
    }
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(meter$lambda(classes));
      block($receiver_0);
      return $receiver.child_2usv9w$($receiver_0.create());
    };
  }));
  var nav = defineInlineFunction('kotlin-react-dom.react.dom.nav_atyyei$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var NAV_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.NAV;
    function nav$lambda(closure$classes) {
      return function (it) {
        return new NAV_init(attributesMapOf('class', closure$classes), it);
      };
    }
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(nav$lambda(classes));
      block($receiver_0);
      return $receiver.child_2usv9w$($receiver_0.create());
    };
  }));
  var noScript = defineInlineFunction('kotlin-react-dom.react.dom.noScript_v5oecv$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var NOSCRIPT_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.NOSCRIPT;
    function noScript$lambda(closure$classes) {
      return function (it) {
        return new NOSCRIPT_init(attributesMapOf('class', closure$classes), it);
      };
    }
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(noScript$lambda(classes));
      block($receiver_0);
      return $receiver.child_2usv9w$($receiver_0.create());
    };
  }));
  var object_ = defineInlineFunction('kotlin-react-dom.react.dom.object__n9nh2x$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var OBJECT__init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.OBJECT_;
    function object_$lambda(closure$classes) {
      return function (it) {
        return new OBJECT__init(attributesMapOf('class', closure$classes), it);
      };
    }
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(object_$lambda(classes));
      block($receiver_0);
      return $receiver.child_2usv9w$($receiver_0.create());
    };
  }));
  var ol = defineInlineFunction('kotlin-react-dom.react.dom.ol_n44pxa$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var OL_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.OL;
    function ol$lambda(closure$classes) {
      return function (it) {
        return new OL_init(attributesMapOf('class', closure$classes), it);
      };
    }
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(ol$lambda(classes));
      block($receiver_0);
      return $receiver.child_2usv9w$($receiver_0.create());
    };
  }));
  var optGroup = defineInlineFunction('kotlin-react-dom.react.dom.optGroup_3lh2j2$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_alerag$;
    var OPTGROUP_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.OPTGROUP;
    function optGroup$lambda(closure$label, closure$classes) {
      return function (it) {
        return new OPTGROUP_init(attributesMapOf(['label', closure$label, 'class', closure$classes]), it);
      };
    }
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    return function ($receiver, label, classes, block) {
      if (label === void 0)
        label = null;
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(optGroup$lambda(label, classes));
      block($receiver_0);
      return $receiver.child_2usv9w$($receiver_0.create());
    };
  }));
  var option = defineInlineFunction('kotlin-react-dom.react.dom.option_xoe246$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var OPTION_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.OPTION;
    function option$lambda(closure$classes) {
      return function (it) {
        return new OPTION_init(attributesMapOf('class', closure$classes), it);
      };
    }
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    return function ($receiver, classes, content) {
      if (classes === void 0)
        classes = null;
      if (content === void 0)
        content = '';
      var $receiver_0 = new RDOMBuilder_init(option$lambda(classes));
      $receiver_0.unaryPlus_pdl1vz$(content);
      return $receiver.child_2usv9w$($receiver_0.create());
    };
  }));
  var option_0 = defineInlineFunction('kotlin-react-dom.react.dom.option_3111ay$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var OPTION_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.OPTION;
    function option$lambda(closure$classes) {
      return function (it) {
        return new OPTION_init(attributesMapOf('class', closure$classes), it);
      };
    }
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(option$lambda(classes));
      block($receiver_0);
      return $receiver.child_2usv9w$($receiver_0.create());
    };
  }));
  var output = defineInlineFunction('kotlin-react-dom.react.dom.output_2e8zkq$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var OUTPUT_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.OUTPUT;
    function output$lambda(closure$classes) {
      return function (it) {
        return new OUTPUT_init(attributesMapOf('class', closure$classes), it);
      };
    }
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(output$lambda(classes));
      block($receiver_0);
      return $receiver.child_2usv9w$($receiver_0.create());
    };
  }));
  var p = defineInlineFunction('kotlin-react-dom.react.dom.p_5tnaon$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var P_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.P;
    function p$lambda(closure$classes) {
      return function (it) {
        return new P_init(attributesMapOf('class', closure$classes), it);
      };
    }
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(p$lambda(classes));
      block($receiver_0);
      return $receiver.child_2usv9w$($receiver_0.create());
    };
  }));
  var param = defineInlineFunction('kotlin-react-dom.react.dom.param_3ju6qx$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_alerag$;
    var PARAM_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.PARAM;
    function param$lambda(closure$name, closure$value) {
      return function (it) {
        return new PARAM_init(attributesMapOf(['name', closure$name, 'value', closure$value]), it);
      };
    }
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    return function ($receiver, name, value, block) {
      if (name === void 0)
        name = null;
      if (value === void 0)
        value = null;
      var $receiver_0 = new RDOMBuilder_init(param$lambda(name, value));
      block($receiver_0);
      return $receiver.child_2usv9w$($receiver_0.create());
    };
  }));
  var pre = defineInlineFunction('kotlin-react-dom.react.dom.pre_h0dusq$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var PRE_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.PRE;
    function pre$lambda(closure$classes) {
      return function (it) {
        return new PRE_init(attributesMapOf('class', closure$classes), it);
      };
    }
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(pre$lambda(classes));
      block($receiver_0);
      return $receiver.child_2usv9w$($receiver_0.create());
    };
  }));
  var progress = defineInlineFunction('kotlin-react-dom.react.dom.progress_p9hda$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var PROGRESS_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.PROGRESS;
    function progress$lambda(closure$classes) {
      return function (it) {
        return new PROGRESS_init(attributesMapOf('class', closure$classes), it);
      };
    }
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(progress$lambda(classes));
      block($receiver_0);
      return $receiver.child_2usv9w$($receiver_0.create());
    };
  }));
  var q = defineInlineFunction('kotlin-react-dom.react.dom.q_e9ltdk$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var Q_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.Q;
    function q$lambda(closure$classes) {
      return function (it) {
        return new Q_init(attributesMapOf('class', closure$classes), it);
      };
    }
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(q$lambda(classes));
      block($receiver_0);
      return $receiver.child_2usv9w$($receiver_0.create());
    };
  }));
  var rp = defineInlineFunction('kotlin-react-dom.react.dom.rp_ejn1hf$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var RP_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.RP;
    function rp$lambda(closure$classes) {
      return function (it) {
        return new RP_init(attributesMapOf('class', closure$classes), it);
      };
    }
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(rp$lambda(classes));
      block($receiver_0);
      return $receiver.child_2usv9w$($receiver_0.create());
    };
  }));
  var rt = defineInlineFunction('kotlin-react-dom.react.dom.rt_mpmxq1$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var RT_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.RT;
    function rt$lambda(closure$classes) {
      return function (it) {
        return new RT_init(attributesMapOf('class', closure$classes), it);
      };
    }
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(rt$lambda(classes));
      block($receiver_0);
      return $receiver.child_2usv9w$($receiver_0.create());
    };
  }));
  var ruby = defineInlineFunction('kotlin-react-dom.react.dom.ruby_cmsr4x$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var RUBY_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.RUBY;
    function ruby$lambda(closure$classes) {
      return function (it) {
        return new RUBY_init(attributesMapOf('class', closure$classes), it);
      };
    }
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(ruby$lambda(classes));
      block($receiver_0);
      return $receiver.child_2usv9w$($receiver_0.create());
    };
  }));
  var samp = defineInlineFunction('kotlin-react-dom.react.dom.samp_bd8qui$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var SAMP_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.SAMP;
    function samp$lambda(closure$classes) {
      return function (it) {
        return new SAMP_init(attributesMapOf('class', closure$classes), it);
      };
    }
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(samp$lambda(classes));
      block($receiver_0);
      return $receiver.child_2usv9w$($receiver_0.create());
    };
  }));
  var script = defineInlineFunction('kotlin-react-dom.react.dom.script_cc9ybx$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_alerag$;
    var SCRIPT_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.SCRIPT;
    function script$lambda(closure$type, closure$src) {
      return function (it) {
        return new SCRIPT_init(attributesMapOf(['type', closure$type, 'src', closure$src]), it);
      };
    }
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    return function ($receiver, type, src, block) {
      if (type === void 0)
        type = null;
      if (src === void 0)
        src = null;
      var $receiver_0 = new RDOMBuilder_init(script$lambda(type, src));
      block($receiver_0);
      return $receiver.child_2usv9w$($receiver_0.create());
    };
  }));
  var section = defineInlineFunction('kotlin-react-dom.react.dom.section_om5bdg$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var SECTION_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.SECTION;
    function section$lambda(closure$classes) {
      return function (it) {
        return new SECTION_init(attributesMapOf('class', closure$classes), it);
      };
    }
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(section$lambda(classes));
      block($receiver_0);
      return $receiver.child_2usv9w$($receiver_0.create());
    };
  }));
  var select = defineInlineFunction('kotlin-react-dom.react.dom.select_et4on3$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var SELECT_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.SELECT;
    function select$lambda(closure$classes) {
      return function (it) {
        return new SELECT_init(attributesMapOf('class', closure$classes), it);
      };
    }
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(select$lambda(classes));
      block($receiver_0);
      return $receiver.child_2usv9w$($receiver_0.create());
    };
  }));
  var small = defineInlineFunction('kotlin-react-dom.react.dom.small_lz0do2$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var SMALL_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.SMALL;
    function small$lambda(closure$classes) {
      return function (it) {
        return new SMALL_init(attributesMapOf('class', closure$classes), it);
      };
    }
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(small$lambda(classes));
      block($receiver_0);
      return $receiver.child_2usv9w$($receiver_0.create());
    };
  }));
  var source = defineInlineFunction('kotlin-react-dom.react.dom.source_hwqfnk$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var SOURCE_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.SOURCE;
    function source$lambda(closure$classes) {
      return function (it) {
        return new SOURCE_init(attributesMapOf('class', closure$classes), it);
      };
    }
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(source$lambda(classes));
      block($receiver_0);
      return $receiver.child_2usv9w$($receiver_0.create());
    };
  }));
  var span = defineInlineFunction('kotlin-react-dom.react.dom.span_9jrvg1$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var SPAN_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.SPAN;
    function span$lambda(closure$classes) {
      return function (it) {
        return new SPAN_init(attributesMapOf('class', closure$classes), it);
      };
    }
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(span$lambda(classes));
      block($receiver_0);
      return $receiver.child_2usv9w$($receiver_0.create());
    };
  }));
  var strong = defineInlineFunction('kotlin-react-dom.react.dom.strong_knjz5w$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var STRONG_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.STRONG;
    function strong$lambda(closure$classes) {
      return function (it) {
        return new STRONG_init(attributesMapOf('class', closure$classes), it);
      };
    }
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(strong$lambda(classes));
      block($receiver_0);
      return $receiver.child_2usv9w$($receiver_0.create());
    };
  }));
  var style = defineInlineFunction('kotlin-react-dom.react.dom.style_xoe246$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var STYLE_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.STYLE;
    function style$lambda(closure$type) {
      return function (it) {
        return new STYLE_init(attributesMapOf('type', closure$type), it);
      };
    }
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    return function ($receiver, type, content) {
      if (type === void 0)
        type = null;
      if (content === void 0)
        content = '';
      var $receiver_0 = new RDOMBuilder_init(style$lambda(type));
      $receiver_0.unaryPlus_pdl1vz$(content);
      return $receiver.child_2usv9w$($receiver_0.create());
    };
  }));
  var style_0 = defineInlineFunction('kotlin-react-dom.react.dom.style_dqtavc$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var STYLE_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.STYLE;
    function style$lambda(closure$type) {
      return function (it) {
        return new STYLE_init(attributesMapOf('type', closure$type), it);
      };
    }
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    return function ($receiver, type, block) {
      if (type === void 0)
        type = null;
      var $receiver_0 = new RDOMBuilder_init(style$lambda(type));
      block($receiver_0);
      return $receiver.child_2usv9w$($receiver_0.create());
    };
  }));
  var sub = defineInlineFunction('kotlin-react-dom.react.dom.sub_pzrwrd$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var SUB_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.SUB;
    function sub$lambda(closure$classes) {
      return function (it) {
        return new SUB_init(attributesMapOf('class', closure$classes), it);
      };
    }
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(sub$lambda(classes));
      block($receiver_0);
      return $receiver.child_2usv9w$($receiver_0.create());
    };
  }));
  var sup = defineInlineFunction('kotlin-react-dom.react.dom.sup_l6jayd$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var SUP_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.SUP;
    function sup$lambda(closure$classes) {
      return function (it) {
        return new SUP_init(attributesMapOf('class', closure$classes), it);
      };
    }
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(sup$lambda(classes));
      block($receiver_0);
      return $receiver.child_2usv9w$($receiver_0.create());
    };
  }));
  var svg = defineInlineFunction('kotlin-react-dom.react.dom.svg_xoe246$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var SVG_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.SVG;
    function svg$lambda(closure$classes) {
      return function (it) {
        return new SVG_init(attributesMapOf('class', closure$classes), it);
      };
    }
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    return function ($receiver, classes, content) {
      if (classes === void 0)
        classes = null;
      if (content === void 0)
        content = '';
      var $receiver_0 = new RDOMBuilder_init(svg$lambda(classes));
      $receiver_0.unaryPlus_pdl1vz$(content);
      return $receiver.child_2usv9w$($receiver_0.create());
    };
  }));
  var svg_0 = defineInlineFunction('kotlin-react-dom.react.dom.svg_65pfqt$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var SVG_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.SVG;
    function svg$lambda(closure$classes) {
      return function (it) {
        return new SVG_init(attributesMapOf('class', closure$classes), it);
      };
    }
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(svg$lambda(classes));
      block($receiver_0);
      return $receiver.child_2usv9w$($receiver_0.create());
    };
  }));
  var table = defineInlineFunction('kotlin-react-dom.react.dom.table_cbo5u3$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var TABLE_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.TABLE;
    function table$lambda(closure$classes) {
      return function (it) {
        return new TABLE_init(attributesMapOf('class', closure$classes), it);
      };
    }
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(table$lambda(classes));
      block($receiver_0);
      return $receiver.child_2usv9w$($receiver_0.create());
    };
  }));
  var tbody = defineInlineFunction('kotlin-react-dom.react.dom.tbody_4blw77$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var TBODY_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.TBODY;
    function tbody$lambda(closure$classes) {
      return function (it) {
        return new TBODY_init(attributesMapOf('class', closure$classes), it);
      };
    }
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(tbody$lambda(classes));
      block($receiver_0);
      return $receiver.child_2usv9w$($receiver_0.create());
    };
  }));
  var td = defineInlineFunction('kotlin-react-dom.react.dom.td_aiwo8l$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var TD_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.TD;
    function td$lambda(closure$classes) {
      return function (it) {
        return new TD_init(attributesMapOf('class', closure$classes), it);
      };
    }
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(td$lambda(classes));
      block($receiver_0);
      return $receiver.child_2usv9w$($receiver_0.create());
    };
  }));
  var textArea = defineInlineFunction('kotlin-react-dom.react.dom.textArea_ctzq07$', wrapFunction(function () {
    var enumEncode = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributes.enumEncode_m4whry$;
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_alerag$;
    var TEXTAREA_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.TEXTAREA;
    function textArea$lambda(closure$rows, closure$cols, closure$wrap, closure$classes) {
      return function (it) {
        return new TEXTAREA_init(attributesMapOf(['rows', closure$rows, 'cols', closure$cols, 'wrap', closure$wrap != null ? enumEncode(closure$wrap) : null, 'class', closure$classes]), it);
      };
    }
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    return function ($receiver, rows, cols, wrap, classes, content) {
      if (rows === void 0)
        rows = null;
      if (cols === void 0)
        cols = null;
      if (wrap === void 0)
        wrap = null;
      if (classes === void 0)
        classes = null;
      if (content === void 0)
        content = '';
      var $receiver_0 = new RDOMBuilder_init(textArea$lambda(rows, cols, wrap, classes));
      $receiver_0.unaryPlus_pdl1vz$(content);
      return $receiver.child_2usv9w$($receiver_0.create());
    };
  }));
  var textArea_0 = defineInlineFunction('kotlin-react-dom.react.dom.textArea_gikhjm$', wrapFunction(function () {
    var enumEncode = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributes.enumEncode_m4whry$;
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_alerag$;
    var TEXTAREA_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.TEXTAREA;
    function textArea$lambda(closure$rows, closure$cols, closure$wrap, closure$classes) {
      return function (it) {
        return new TEXTAREA_init(attributesMapOf(['rows', closure$rows, 'cols', closure$cols, 'wrap', closure$wrap != null ? enumEncode(closure$wrap) : null, 'class', closure$classes]), it);
      };
    }
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    return function ($receiver, rows, cols, wrap, classes, block) {
      if (rows === void 0)
        rows = null;
      if (cols === void 0)
        cols = null;
      if (wrap === void 0)
        wrap = null;
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(textArea$lambda(rows, cols, wrap, classes));
      block($receiver_0);
      return $receiver.child_2usv9w$($receiver_0.create());
    };
  }));
  var tfoot = defineInlineFunction('kotlin-react-dom.react.dom.tfoot_nrxtyv$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var TFOOT_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.TFOOT;
    function tfoot$lambda(closure$classes) {
      return function (it) {
        return new TFOOT_init(attributesMapOf('class', closure$classes), it);
      };
    }
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(tfoot$lambda(classes));
      block($receiver_0);
      return $receiver.child_2usv9w$($receiver_0.create());
    };
  }));
  var th = defineInlineFunction('kotlin-react-dom.react.dom.th_1wqzuu$', wrapFunction(function () {
    var enumEncode = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributes.enumEncode_m4whry$;
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_alerag$;
    var TH_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.TH;
    function th$lambda(closure$scope, closure$classes) {
      return function (it) {
        return new TH_init(attributesMapOf(['scope', closure$scope != null ? enumEncode(closure$scope) : null, 'class', closure$classes]), it);
      };
    }
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    return function ($receiver, scope, classes, block) {
      if (scope === void 0)
        scope = null;
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(th$lambda(scope, classes));
      block($receiver_0);
      return $receiver.child_2usv9w$($receiver_0.create());
    };
  }));
  var thead = defineInlineFunction('kotlin-react-dom.react.dom.thead_hi4b0b$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var THEAD_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.THEAD;
    function thead$lambda(closure$classes) {
      return function (it) {
        return new THEAD_init(attributesMapOf('class', closure$classes), it);
      };
    }
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(thead$lambda(classes));
      block($receiver_0);
      return $receiver.child_2usv9w$($receiver_0.create());
    };
  }));
  var time = defineInlineFunction('kotlin-react-dom.react.dom.time_te2s5q$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var TIME_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.TIME;
    function time$lambda(closure$classes) {
      return function (it) {
        return new TIME_init(attributesMapOf('class', closure$classes), it);
      };
    }
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(time$lambda(classes));
      block($receiver_0);
      return $receiver.child_2usv9w$($receiver_0.create());
    };
  }));
  var title = defineInlineFunction('kotlin-react-dom.react.dom.title_hw0qe1$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var TITLE_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.TITLE;
    function title$lambda(it) {
      return new TITLE_init(html.emptyMap, it);
    }
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    return function ($receiver, content) {
      if (content === void 0)
        content = '';
      var $receiver_0 = new RDOMBuilder_init(title$lambda);
      $receiver_0.unaryPlus_pdl1vz$(content);
      return $receiver.child_2usv9w$($receiver_0.create());
    };
  }));
  var title_0 = defineInlineFunction('kotlin-react-dom.react.dom.title_6ytbmq$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var TITLE_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.TITLE;
    function title$lambda(it) {
      return new TITLE_init(html.emptyMap, it);
    }
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    return function ($receiver, block) {
      var $receiver_0 = new RDOMBuilder_init(title$lambda);
      block($receiver_0);
      return $receiver.child_2usv9w$($receiver_0.create());
    };
  }));
  var tr = defineInlineFunction('kotlin-react-dom.react.dom.tr_dbw60t$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var TR_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.TR;
    function tr$lambda(closure$classes) {
      return function (it) {
        return new TR_init(attributesMapOf('class', closure$classes), it);
      };
    }
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(tr$lambda(classes));
      block($receiver_0);
      return $receiver.child_2usv9w$($receiver_0.create());
    };
  }));
  var ul = defineInlineFunction('kotlin-react-dom.react.dom.ul_fc9cn8$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var UL_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.UL;
    function ul$lambda(closure$classes) {
      return function (it) {
        return new UL_init(attributesMapOf('class', closure$classes), it);
      };
    }
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(ul$lambda(classes));
      block($receiver_0);
      return $receiver.child_2usv9w$($receiver_0.create());
    };
  }));
  var var_ = defineInlineFunction('kotlin-react-dom.react.dom.var__pr9qo3$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var VAR__init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.VAR_;
    function var_$lambda(closure$classes) {
      return function (it) {
        return new VAR__init(attributesMapOf('class', closure$classes), it);
      };
    }
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(var_$lambda(classes));
      block($receiver_0);
      return $receiver.child_2usv9w$($receiver_0.create());
    };
  }));
  var video = defineInlineFunction('kotlin-react-dom.react.dom.video_vupt4y$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var VIDEO_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.VIDEO;
    function video$lambda(closure$classes) {
      return function (it) {
        return new VIDEO_init(attributesMapOf('class', closure$classes), it);
      };
    }
    var RDOMBuilder_init = _.react.dom.RDOMBuilder;
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = new RDOMBuilder_init(video$lambda(classes));
      block($receiver_0);
      return $receiver.child_2usv9w$($receiver_0.create());
    };
  }));
  var package$react = _.react || (_.react = {});
  var package$dom = package$react.dom || (package$react.dom = {});
  package$dom.InnerHTML = InnerHTML;
  $$importsForInline$$['kotlin-react-dom'] = _;
  $$importsForInline$$['kotlin-extensions'] = $module$kotlin_extensions;
  package$dom.RDOMBuilder = RDOMBuilder;
  $$importsForInline$$['kotlin-react'] = $module$kotlin_react;
  package$dom.render_4s0l5f$ = render_0;
  package$dom.fixAttributeName_61zpoe$ = fixAttributeName;
  Object.defineProperty(package$dom, 'StringAttr', {
    get: StringAttr_getInstance
  });
  package$dom.get_key_6s7ubj$ = get_key_0;
  package$dom.set_key_g0n3bx$ = set_key_0;
  package$dom.get_defaultValue_a2ovwx$ = get_defaultValue;
  package$dom.set_defaultValue_q3v29f$ = set_defaultValue;
  package$dom.get_defaultValue_dtfm6v$ = get_defaultValue_0;
  package$dom.set_defaultValue_5ng1o5$ = set_defaultValue_0;
  package$dom.get_value_dtfm6v$ = get_value;
  package$dom.set_value_5ng1o5$ = set_value;
  package$dom.tag_ytkory$ = tag;
  $$importsForInline$$['kotlinx-html-js'] = $module$kotlinx_html_js;
  package$dom.a_yr0dqg$ = a;
  package$dom.abbr_gtb1ee$ = abbr;
  package$dom.address_j2txqz$ = address;
  package$dom.area_7jb7vq$ = area;
  package$dom.article_t55271$ = article;
  package$dom.aside_l3t1i9$ = aside;
  package$dom.audio_w2c39f$ = audio;
  package$dom.b_tog4y1$ = b;
  package$dom.base_l9ftdi$ = base;
  package$dom.bdi_8sojgy$ = bdi;
  package$dom.bdo_t61hak$ = bdo;
  package$dom.blockQuote_yflo7g$ = blockQuote;
  package$dom.body_omwgih$ = body;
  package$dom.br_ydls45$ = br;
  package$dom.button_ttg585$ = button;
  package$dom.canvas_xoe246$ = canvas;
  package$dom.canvas_3hsljx$ = canvas_0;
  package$dom.caption_z6pvm5$ = caption;
  package$dom.cite_2pbb98$ = cite;
  package$dom.code_xk1a8i$ = code;
  package$dom.col_2tgex$ = col;
  package$dom.colGroup_d153x8$ = colGroup;
  package$dom.command_4wpzuc$ = command;
  package$dom.dataList_w2yd71$ = dataList;
  package$dom.dd_dgydhh$ = dd;
  package$dom.del_r4qc2a$ = del;
  package$dom.details_309mfr$ = details;
  package$dom.dfn_lmx903$ = dfn;
  package$dom.dialog_3a8nil$ = dialog;
  package$dom.div_m1f17c$ = div;
  package$dom.dl_9zih1p$ = dl;
  package$dom.dt_6i2klx$ = dt;
  package$dom.em_3y94pf$ = em;
  package$dom.embed_b0m97k$ = embed;
  package$dom.fieldSet_rh1sr7$ = fieldSet;
  package$dom.figcaption_cdg0dj$ = figcaption;
  package$dom.figure_2elfl5$ = figure;
  package$dom.footer_tbejb4$ = footer;
  package$dom.form_425sad$ = form;
  package$dom.h1_ndttiq$ = h1;
  package$dom.h2_exvatt$ = h2;
  package$dom.h3_6hws4w$ = h3;
  package$dom.h4_1y1qk1$ = h4;
  package$dom.h5_ae098y$ = h5;
  package$dom.h6_ityrxv$ = h6;
  package$dom.head_7jnz8i$ = head;
  package$dom.header_4ytp82$ = header;
  package$dom.hGroup_8pv0w4$ = hGroup;
  package$dom.hr_svmwkx$ = hr;
  package$dom.html_h60l9v$ = html;
  package$dom.i_hr1ptc$ = i;
  package$dom.iframe_ft8ple$ = iframe;
  package$dom.iframe_9wftv7$ = iframe_0;
  package$dom.img_j4s0yy$ = img;
  package$dom.input_s5tavk$ = input;
  package$dom.ins_wqxjcb$ = ins;
  package$dom.kbd_3fhkk$ = kbd;
  package$dom.keyGen_43kri9$ = keyGen;
  package$dom.label_7ao1uj$ = label;
  package$dom.legend_f9ty8e$ = legend;
  package$dom.li_ip63c2$ = li;
  package$dom.link_z6cr1d$ = link;
  package$dom.map_wjyr5y$ = map;
  package$dom.mark_yu4hde$ = mark;
  package$dom.math_z97blf$ = math;
  package$dom.mathml_xoe246$ = mathml;
  package$dom.mathml_8zca7o$ = mathml_0;
  package$dom.meta_rg2j5z$ = meta;
  package$dom.meter_8sdt9s$ = meter;
  package$dom.nav_atyyei$ = nav;
  package$dom.noScript_v5oecv$ = noScript;
  package$dom.object__n9nh2x$ = object_;
  package$dom.ol_n44pxa$ = ol;
  package$dom.optGroup_3lh2j2$ = optGroup;
  package$dom.option_xoe246$ = option;
  package$dom.option_3111ay$ = option_0;
  package$dom.output_2e8zkq$ = output;
  package$dom.p_5tnaon$ = p;
  package$dom.param_3ju6qx$ = param;
  package$dom.pre_h0dusq$ = pre;
  package$dom.progress_p9hda$ = progress;
  package$dom.q_e9ltdk$ = q;
  package$dom.rp_ejn1hf$ = rp;
  package$dom.rt_mpmxq1$ = rt;
  package$dom.ruby_cmsr4x$ = ruby;
  package$dom.samp_bd8qui$ = samp;
  package$dom.script_cc9ybx$ = script;
  package$dom.section_om5bdg$ = section;
  package$dom.select_et4on3$ = select;
  package$dom.small_lz0do2$ = small;
  package$dom.source_hwqfnk$ = source;
  package$dom.span_9jrvg1$ = span;
  package$dom.strong_knjz5w$ = strong;
  package$dom.style_xoe246$ = style;
  package$dom.style_dqtavc$ = style_0;
  package$dom.sub_pzrwrd$ = sub;
  package$dom.sup_l6jayd$ = sup;
  package$dom.svg_xoe246$ = svg;
  package$dom.svg_65pfqt$ = svg_0;
  package$dom.table_cbo5u3$ = table;
  package$dom.tbody_4blw77$ = tbody;
  package$dom.td_aiwo8l$ = td;
  package$dom.textArea_ctzq07$ = textArea;
  package$dom.textArea_gikhjm$ = textArea_0;
  package$dom.tfoot_nrxtyv$ = tfoot;
  package$dom.th_1wqzuu$ = th;
  package$dom.thead_hi4b0b$ = thead;
  package$dom.time_te2s5q$ = time;
  package$dom.title_hw0qe1$ = title;
  package$dom.title_6ytbmq$ = title_0;
  package$dom.tr_dbw60t$ = tr;
  package$dom.ul_fc9cn8$ = ul;
  package$dom.var__pr9qo3$ = var_;
  package$dom.video_vupt4y$ = video;
  RDOMBuilder$consumer$ObjectLiteral$onTagContentUnsafe$ObjectLiteral.prototype.unaryPlus_lvwjq6$ = Unsafe.prototype.unaryPlus_lvwjq6$;
  RDOMBuilder$consumer$ObjectLiteral$onTagContentUnsafe$ObjectLiteral.prototype.raw_3p81yu$ = Unsafe.prototype.raw_3p81yu$;
  RDOMBuilder$consumer$ObjectLiteral$onTagContentUnsafe$ObjectLiteral.prototype.raw_61zpoe$ = Unsafe.prototype.raw_61zpoe$;
  RDOMBuilder$consumer$ObjectLiteral$onTagContentUnsafe$ObjectLiteral.prototype.raw_ws8or7$ = Unsafe.prototype.raw_ws8or7$;
  RDOMBuilder$consumer$ObjectLiteral.prototype.onTagError_cjwpn3$ = TagConsumer.prototype.onTagError_cjwpn3$;
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  events = listOf(['onCopy', 'onCut', 'onPaste', 'onCompositionEnd', 'onCompositionStart', 'onCompositionUpdate', 'onKeyDown', 'onKeyPress', 'onKeyUp', 'onFocus', 'onBlur', 'onChange', 'onInput', 'onSubmit', 'onClick', 'onContextMenu', 'onDoubleClick', 'onDrag', 'onDragEnd', 'onDragEnter', 'onDragExit', 'onDragLeave', 'onDragOver', 'onDragStart', 'onDrop', 'onMouseDown', 'onMouseEnter', 'onMouseLeave', 'onMouseMove', 'onMouseOut', 'onMouseOver', 'onMouseUp', 'onSelect', 'onTouchCancel', 'onTouchEnd', 'onTouchMove', 'onTouchStart', 'onScroll', 'onWheel', 'onAbort', 'onCanPlay', 'onCanPlayThrough', 'onDurationChange', 'onEmptied', 'onEncrypted', 'onEnded', 'onError', 'onLoadedData', 'onLoadedMetadata', 'onLoadStart', 'onPause', 'onPlay', 'onPlaying', 'onProgress', 'onRateChange', 'onSeeked', 'onSeeking', 'onStalled', 'onSuspend', 'onTimeUpdate', 'onVolumeChange', 'onWaiting', 'onLoad', 'onError', 'onAnimationStart', 'onAnimationEnd', 'onAnimationIteration', 'onTransitionEnd', 'accept', 'acceptCharset', 'accessKey', 'action', 'allowFullScreen', 'allowTransparency', 'alt', 'async', 'autoComplete', 'autoFocus', 'autoPlay', 'capture', 'cellPadding', 'cellSpacing', 'challenge', 'charSet', 'checked', 'cite', 'classID', 'className', 'colSpan', 'cols', 'content', 'contentEditable', 'contextMenu', 'controls', 'coords', 'crossOrigin', 'data', 'dateTime', 'default', 'defer', 'dir', 'disabled', 'download', 'draggable', 'encType', 'form', 'formAction', 'formEncType', 'formMethod', 'formNoValidate', 'formTarget', 'frameBorder', 'headers', 'height', 'hidden', 'high', 'href', 'hrefLang', 'htmlFor', 'httpEquiv', 'icon', 'id', 'inputMode', 'integrity', 'is', 'keyParams', 'keyType', 'kind', 'label', 'lang', 'list', 'loop', 'low', 'manifest', 'marginHeight', 'marginWidth', 'max', 'maxLength', 'media', 'mediaGroup', 'method', 'min', 'minLength', 'multiple', 'muted', 'name', 'noValidate', 'nonce', 'open', 'optimum', 'pattern', 'placeholder', 'poster', 'preload', 'profile', 'radioGroup', 'readOnly', 'rel', 'required', 'reversed', 'role', 'rowSpan', 'rows', 'sandbox', 'scope', 'scoped', 'scrolling', 'seamless', 'selected', 'shape', 'size', 'sizes', 'span', 'spellCheck', 'src', 'srcDoc', 'srcLang', 'srcSet', 'start', 'step', 'style', 'summary', 'tabIndex', 'target', 'title', 'type', 'useMap', 'value', 'width', 'wmode', 'wrap']);
  var $receiver = events;
  var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
  var tmp$;
  tmp$ = $receiver.iterator();
  while (tmp$.hasNext()) {
    var item = tmp$.next();
    destination.add_11rb$(to(item.toLowerCase(), item));
  }
  var $receiver_0 = toMutableMap(toMap(destination));
  $receiver_0.put_xwzc9p$('class', 'className');
  $receiver_0.put_xwzc9p$('ondblclick', 'onDoubleClick');
  attrsMap = $receiver_0;
  key = StringAttr_getInstance();
  defaultValue = StringAttr_getInstance();
  defaultValue_0 = StringAttr_getInstance();
  value = StringAttr_getInstance();
  Kotlin.defineModule('kotlin-react-dom', _);
  return _;
}(module.exports, require('kotlin'), require('kotlin-react'), require('react'), require('kotlinx-html-js'), require('kotlin-extensions'), require('react-dom')));

//# sourceMappingURL=kotlin-react-dom.js.map
