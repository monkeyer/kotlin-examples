(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'kotlinx-html-js'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'kotlinx-html-js'.");
    }
    root['kotlinx-html-js'] = factory(typeof this['kotlinx-html-js'] === 'undefined' ? {} : this['kotlinx-html-js'], kotlin);
  }
}(this, function (_, Kotlin) {
  'use strict';
  var last = Kotlin.kotlin.collections.last_2p1efm$;
  var IllegalStateException = Kotlin.kotlin.IllegalStateException;
  var get_lastIndex = Kotlin.kotlin.collections.get_lastIndex_55thoc$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var UnsupportedOperationException = Kotlin.kotlin.UnsupportedOperationException;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var kotlin = Kotlin.kotlin;
  var Throwable = Error;
  var IllegalArgumentException = Kotlin.kotlin.IllegalArgumentException;
  var IntRange = Kotlin.kotlin.ranges.IntRange;
  var emptyMap = Kotlin.kotlin.collections.emptyMap_q3lmfv$;
  var StringBuilder = Kotlin.kotlin.text.StringBuilder;
  var setOf = Kotlin.kotlin.collections.setOf_mh5how$;
  var listOf = Kotlin.kotlin.collections.listOf_mh5how$;
  var Map = Kotlin.kotlin.collections.Map;
  var Map$Entry = Kotlin.kotlin.collections.Map.Entry;
  var toSet = Kotlin.kotlin.collections.toSet_7wnvza$;
  var joinToString = Kotlin.kotlin.collections.joinToString_fmv235$;
  var emptySet = Kotlin.kotlin.collections.emptySet_287e2$;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_73mtqc$;
  var MutableMap = Kotlin.kotlin.collections.MutableMap;
  var Enum = Kotlin.kotlin.Enum;
  var listOf_0 = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var StringBuilder_init = Kotlin.kotlin.text.StringBuilder_init_za3lpa$;
  var toBoxedChar = Kotlin.toBoxedChar;
  var mapOf = Kotlin.kotlin.collections.mapOf_qfcya0$;
  var CharRange = Kotlin.kotlin.ranges.CharRange;
  var unboxChar = Kotlin.unboxChar;
  StringAttribute.prototype = Object.create(Attribute.prototype);
  StringAttribute.prototype.constructor = StringAttribute;
  BooleanAttribute.prototype = Object.create(Attribute.prototype);
  BooleanAttribute.prototype.constructor = BooleanAttribute;
  TickerAttribute.prototype = Object.create(Attribute.prototype);
  TickerAttribute.prototype.constructor = TickerAttribute;
  EnumAttribute.prototype = Object.create(Attribute.prototype);
  EnumAttribute.prototype.constructor = EnumAttribute;
  StringSetAttribute.prototype = Object.create(Attribute.prototype);
  StringSetAttribute.prototype.constructor = StringSetAttribute;
  Dir.prototype = Object.create(Enum.prototype);
  Dir.prototype.constructor = Dir;
  Draggable.prototype = Object.create(Enum.prototype);
  Draggable.prototype.constructor = Draggable;
  RunAt.prototype = Object.create(Enum.prototype);
  RunAt.prototype.constructor = RunAt;
  AreaShape.prototype = Object.create(Enum.prototype);
  AreaShape.prototype.constructor = AreaShape;
  ButtonFormEncType.prototype = Object.create(Enum.prototype);
  ButtonFormEncType.prototype.constructor = ButtonFormEncType;
  ButtonFormMethod.prototype = Object.create(Enum.prototype);
  ButtonFormMethod.prototype.constructor = ButtonFormMethod;
  ButtonType.prototype = Object.create(Enum.prototype);
  ButtonType.prototype.constructor = ButtonType;
  CommandType.prototype = Object.create(Enum.prototype);
  CommandType.prototype.constructor = CommandType;
  FormEncType.prototype = Object.create(Enum.prototype);
  FormEncType.prototype.constructor = FormEncType;
  FormMethod.prototype = Object.create(Enum.prototype);
  FormMethod.prototype.constructor = FormMethod;
  IframeSandbox.prototype = Object.create(Enum.prototype);
  IframeSandbox.prototype.constructor = IframeSandbox;
  InputType.prototype = Object.create(Enum.prototype);
  InputType.prototype.constructor = InputType;
  InputFormEncType.prototype = Object.create(Enum.prototype);
  InputFormEncType.prototype.constructor = InputFormEncType;
  InputFormMethod.prototype = Object.create(Enum.prototype);
  InputFormMethod.prototype.constructor = InputFormMethod;
  KeyGenKeyType.prototype = Object.create(Enum.prototype);
  KeyGenKeyType.prototype.constructor = KeyGenKeyType;
  TextAreaWrap.prototype = Object.create(Enum.prototype);
  TextAreaWrap.prototype.constructor = TextAreaWrap;
  ThScope.prototype = Object.create(Enum.prototype);
  ThScope.prototype.constructor = ThScope;
  DIV.prototype = Object.create(HTMLTag.prototype);
  DIV.prototype.constructor = DIV;
  P.prototype = Object.create(HTMLTag.prototype);
  P.prototype.constructor = P;
  SPAN.prototype = Object.create(HTMLTag.prototype);
  SPAN.prototype.constructor = SPAN;
  function JSDOMBuilder(document) {
    this.document = document;
    this.path_0 = ArrayList_init();
    this.lastLeaved_0 = null;
  }
  var InjectRoot_instance = null;
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var LinkedHashMap_init_0 = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  var addAll = Kotlin.kotlin.collections.addAll_ipc267$;
  function TagConsumer() {
  }
  TagConsumer.prototype.onTagError_cjwpn3$ = function (tag, exception) {
    throw exception;
  };
  TagConsumer.$metadata$ = {kind: Kotlin.Kind.INTERFACE, simpleName: 'TagConsumer', interfaces: []};
  function Tag() {
  }
  Tag.prototype.unaryPlus_lvwjq6$ = function ($receiver) {
    this.entity_ws8or7$($receiver);
  };
  Tag.prototype.unaryPlus_pdl1vz$ = function ($receiver) {
    this.text_61zpoe$($receiver);
  };
  Tag.prototype.text_61zpoe$ = function (s) {
    this.consumer.onTagContent_6bul2c$(s);
  };
  Tag.prototype.text_3p81yu$ = function (n) {
    this.text_61zpoe$(n.toString());
  };
  Tag.prototype.entity_ws8or7$ = function (e) {
    this.consumer.onTagContentEntity_ws8or7$(e);
  };
  Tag.$metadata$ = {kind: Kotlin.Kind.INTERFACE, simpleName: 'Tag', interfaces: []};
  function Unsafe() {
  }
  Unsafe.prototype.unaryPlus_lvwjq6$ = function ($receiver) {
    this.unaryPlus_pdl1vz$($receiver.text);
  };
  Unsafe.prototype.raw_61zpoe$ = function (s) {
    this.unaryPlus_pdl1vz$(s);
  };
  Unsafe.prototype.raw_ws8or7$ = function (entity) {
    this.unaryPlus_lvwjq6$(entity);
  };
  Unsafe.prototype.raw_3p81yu$ = function (n) {
    this.unaryPlus_pdl1vz$(n.toString());
  };
  Unsafe.$metadata$ = {kind: Kotlin.Kind.INTERFACE, simpleName: 'Unsafe', interfaces: []};
  function AttributeEnum() {
  }
  AttributeEnum.$metadata$ = {kind: Kotlin.Kind.INTERFACE, simpleName: 'AttributeEnum', interfaces: []};
  function attributesMapOf_0(key, value) {
    if (value == null)
      return emptyMap_0;
    else
      return singletonMapOf(key, value);
  }
  function singletonMapOf(key, value) {
    return new SingletonStringMap(key, value);
  }
  var emptyMap_0;
  function DefaultUnsafe() {
    this.sb_0 = new StringBuilder();
  }
  function SingletonStringMap(key, value) {
    this.key_cuzocu$_0 = key;
    this.value_cuzocu$_0 = value;
  }
  Object.defineProperty(SingletonStringMap.prototype, 'key', {get: function () {
    return this.key_cuzocu$_0;
  }});
  Object.defineProperty(SingletonStringMap.prototype, 'value', {get: function () {
    return this.value_cuzocu$_0;
  }});
  Object.defineProperty(SingletonStringMap.prototype, 'entries', {get: function () {
    return setOf(this);
  }});
  Object.defineProperty(SingletonStringMap.prototype, 'keys', {get: function () {
    return setOf(this.key);
  }});
  Object.defineProperty(SingletonStringMap.prototype, 'size', {get: function () {
    return 1;
  }});
  Object.defineProperty(SingletonStringMap.prototype, 'values', {get: function () {
    return listOf(this.value);
  }});
  SingletonStringMap.prototype.containsKey_11rb$ = function (key) {
    return Kotlin.equals(key, this.key);
  };
  SingletonStringMap.prototype.containsValue_11rc$ = function (value) {
    return Kotlin.equals(value, this.value);
  };
  SingletonStringMap.prototype.get_11rb$ = function (key) {
    return Kotlin.equals(key, this.key) ? this.value : null;
  };
  SingletonStringMap.prototype.isEmpty = function () {
    return false;
  };
  SingletonStringMap.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: 'SingletonStringMap', interfaces: [Map$Entry, Map]};
  SingletonStringMap.prototype.component1 = function () {
    return this.key;
  };
  SingletonStringMap.prototype.component2 = function () {
    return this.value;
  };
  SingletonStringMap.prototype.copy_puj7f4$ = function (key, value) {
    return new SingletonStringMap(key === void 0 ? this.key : key, value === void 0 ? this.value : value);
  };
  SingletonStringMap.prototype.toString = function () {
    return 'SingletonStringMap(key=' + Kotlin.toString(this.key) + (', value=' + Kotlin.toString(this.value)) + ')';
  };
  SingletonStringMap.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.key) | 0;
    result = result * 31 + Kotlin.hashCode(this.value) | 0;
    return result;
  };
  SingletonStringMap.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.key, other.key) && Kotlin.equals(this.value, other.value)))));
  };
  function AttributeEncoder() {
  }
  AttributeEncoder.prototype.empty_l5rr1g$ = function (attributeName, tag) {
    throw new IllegalStateException('Attribute ' + attributeName + ' is not yet defined for tag ' + tag.tagName);
  };
  AttributeEncoder.$metadata$ = {kind: Kotlin.Kind.INTERFACE, simpleName: 'AttributeEncoder', interfaces: []};
  function Attribute(encoder) {
    this.encoder = encoder;
  }
  Attribute.prototype.get_txhc1s$ = function (thisRef, attributeName) {
    var tmp$, tmp$_0;
    return (tmp$_0 = (tmp$ = thisRef.attributes.get_11rb$(attributeName)) != null ? this.encoder.decode_puj7f4$(attributeName, tmp$) : null) != null ? tmp$_0 : this.encoder.empty_l5rr1g$(attributeName, thisRef);
  };
  Attribute.prototype.set_fid0sb$ = function (thisRef, attributeName, value) {
    thisRef.attributes.put_xwzc9p$(attributeName, this.encoder.encode_yuqcw7$(attributeName, value));
  };
  Attribute.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: 'Attribute', interfaces: []};
  function StringEncoder() {
    StringEncoder_instance = this;
  }
  StringEncoder.prototype.encode_yuqcw7$ = function (attributeName, value) {
    return value;
  };
  StringEncoder.prototype.decode_puj7f4$ = function (attributeName, value) {
    return value;
  };
  StringEncoder.$metadata$ = {kind: Kotlin.Kind.OBJECT, simpleName: 'StringEncoder', interfaces: [AttributeEncoder]};
  var StringEncoder_instance = null;
  function StringEncoder_getInstance() {
    if (StringEncoder_instance === null) {
      new StringEncoder();
    }
    return StringEncoder_instance;
  }
  function StringAttribute() {
    Attribute.call(this, StringEncoder_getInstance());
  }
  StringAttribute.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: 'StringAttribute', interfaces: [Attribute]};
  function BooleanEncoder(trueValue, falseValue) {
    if (trueValue === void 0)
      trueValue = 'true';
    if (falseValue === void 0)
      falseValue = 'false';
    this.trueValue = trueValue;
    this.falseValue = falseValue;
  }
  BooleanEncoder.prototype.encode_yuqcw7$ = function (attributeName, value) {
    return value ? this.trueValue : this.falseValue;
  };
  BooleanEncoder.prototype.decode_puj7f4$ = function (attributeName, value) {
    if (Kotlin.equals(value, this.trueValue))
      return true;
    else if (Kotlin.equals(value, this.falseValue))
      return false;
    else
      throw new IllegalArgumentException('Unknown value ' + value + ' for ' + attributeName);
  };
  BooleanEncoder.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: 'BooleanEncoder', interfaces: [AttributeEncoder]};
  function BooleanAttribute(trueValue, falseValue) {
    if (trueValue === void 0)
      trueValue = 'true';
    if (falseValue === void 0)
      falseValue = 'false';
    Attribute.call(this, new BooleanEncoder(trueValue, falseValue));
  }
  BooleanAttribute.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: 'BooleanAttribute', interfaces: [Attribute]};
  function tickerEncode($receiver, attributeName) {
    return $receiver ? attributeName : '';
  }
  function TickerEncoder() {
    TickerEncoder_instance = this;
  }
  TickerEncoder.prototype.encode_yuqcw7$ = function (attributeName, value) {
    return tickerEncode(value, attributeName);
  };
  TickerEncoder.prototype.decode_puj7f4$ = function (attributeName, value) {
    return Kotlin.equals(value, attributeName);
  };
  TickerEncoder.$metadata$ = {kind: Kotlin.Kind.OBJECT, simpleName: 'TickerEncoder', interfaces: [AttributeEncoder]};
  var TickerEncoder_instance = null;
  function TickerEncoder_getInstance() {
    if (TickerEncoder_instance === null) {
      new TickerEncoder();
    }
    return TickerEncoder_instance;
  }
  function TickerAttribute() {
    Attribute.call(this, TickerEncoder_getInstance());
  }
  TickerAttribute.prototype.set_fid0sb$ = function (thisRef, attributeName, value) {
    if (value) {
      thisRef.attributes.put_xwzc9p$(attributeName, attributeName);
    }
     else {
      thisRef.attributes.remove_11rb$(attributeName);
    }
  };
  TickerAttribute.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: 'TickerAttribute', interfaces: [Attribute]};
  function EnumEncoder(valuesMap) {
    this.valuesMap = valuesMap;
  }
  EnumEncoder.prototype.encode_yuqcw7$ = function (attributeName, value) {
    return value.realValue;
  };
  EnumEncoder.prototype.decode_puj7f4$ = function (attributeName, value) {
    var tmp$;
    tmp$ = this.valuesMap.get_11rb$(value);
    if (tmp$ == null) {
      throw new IllegalArgumentException('Unknown value ' + value + ' for ' + attributeName);
    }
    return tmp$;
  };
  EnumEncoder.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: 'EnumEncoder', interfaces: [AttributeEncoder]};
  function EnumAttribute(values) {
    Attribute.call(this, new EnumEncoder(values));
    this.values = values;
  }
  EnumAttribute.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: 'EnumAttribute', interfaces: [Attribute]};
  var Regex = Kotlin.kotlin.text.Regex_61zpoe$;
  function stringSetDecode(value) {
    var tmp$, tmp$_0;
    var tmp$_1;
    if (value != null) {
      var regex = Regex('\\s+');
      var limit;
      if (limit === void 0)
        limit = 0;
      tmp$_1 = regex.split_905azu$(value, limit);
    }
     else
      tmp$_1 = null;
    var tmp$_2;
    if ((tmp$ = tmp$_1) != null) {
      var destination = ArrayList_init();
      var tmp$_3;
      tmp$_3 = tmp$.iterator();
      while (tmp$_3.hasNext()) {
        var element = tmp$_3.next();
        if (!(element.length === 0))
          destination.add_11rb$(element);
      }
      tmp$_2 = destination;
    }
     else
      tmp$_2 = null;
    return (tmp$_0 = tmp$_2) != null ? toSet(tmp$_0) : null;
  }
  function StringSetEncoder() {
    StringSetEncoder_instance = this;
  }
  StringSetEncoder.prototype.encode_yuqcw7$ = function (attributeName, value) {
    return joinToString(value, ' ');
  };
  StringSetEncoder.prototype.decode_puj7f4$ = function (attributeName, value) {
    var tmp$;
    return (tmp$ = stringSetDecode(value)) != null ? tmp$ : Kotlin.throwNPE();
  };
  StringSetEncoder.prototype.empty_l5rr1g$ = function (attributeName, tag) {
    return emptySet();
  };
  StringSetEncoder.$metadata$ = {kind: Kotlin.Kind.OBJECT, simpleName: 'StringSetEncoder', interfaces: [AttributeEncoder]};
  var StringSetEncoder_instance = null;
  function StringSetEncoder_getInstance() {
    if (StringSetEncoder_instance === null) {
      new StringSetEncoder();
    }
    return StringSetEncoder_instance;
  }
  function StringSetAttribute() {
    Attribute.call(this, StringSetEncoder_getInstance());
  }
  StringSetAttribute.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: 'StringSetAttribute', interfaces: [Attribute]};
  function DelegatingMap(initialValues, tag, consumer) {
    this.tag = tag;
    this.consumer = consumer;
    this.backing_0 = initialValues;
    this.backingMutable_0 = false;
  }
  Object.defineProperty(DelegatingMap.prototype, 'size', {get: function () {
    return this.backing_0.size;
  }});
  DelegatingMap.prototype.isEmpty = function () {
    return this.backing_0.isEmpty();
  };
  DelegatingMap.prototype.containsKey_11rb$ = function (key) {
    return this.backing_0.containsKey_11rb$(key);
  };
  DelegatingMap.prototype.containsValue_11rc$ = function (value) {
    return this.backing_0.containsValue_11rc$(value);
  };
  DelegatingMap.prototype.get_11rb$ = function (key) {
    return this.backing_0.get_11rb$(key);
  };
  DelegatingMap.prototype.put_xwzc9p$ = function (key, value) {
    var mutable = this.switchToMutable_0();
    var old = mutable.put_xwzc9p$(key, value);
    if (!Kotlin.equals(old, value)) {
      this.consumer().onTagAttributeChange_5n2z71$(this.tag, key, value);
    }
    return old;
  };
  DelegatingMap.prototype.remove_11rb$ = function (key) {
    var tmp$;
    var mutable = this.switchToMutable_0();
    var tmp$_0;
    if ((tmp$ = mutable.remove_11rb$(key)) != null) {
      if (typeof key === 'string') {
        this.consumer().onTagAttributeChange_5n2z71$(this.tag, key, null);
      }
      tmp$_0 = tmp$;
    }
     else
      tmp$_0 = null;
    return tmp$_0;
  };
  DelegatingMap.prototype.putAll_a2k3zr$ = function (from) {
    var tmp$;
    tmp$ = from.entries.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      this.put_xwzc9p$(element.key, element.value);
    }
  };
  DelegatingMap.prototype.clear = function () {
    var tmp$;
    tmp$ = this.backing_0.entries.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      this.consumer().onTagAttributeChange_5n2z71$(this.tag, element.key, null);
    }
    this.backing_0 = emptyMap();
    this.backingMutable_0 = false;
  };
  Object.defineProperty(DelegatingMap.prototype, 'immutableEntries', {get: function () {
    return this.backing_0.entries;
  }});
  DelegatingMap.prototype.switchToMutable_0 = function () {
    var tmp$, tmp$_0;
    if (this.backingMutable_0) {
      tmp$ = this.backing_0;
    }
     else {
      this.backingMutable_0 = true;
      this.backing_0 = LinkedHashMap_init(this.backing_0);
      tmp$ = this.backing_0;
    }
    return Kotlin.isType(tmp$_0 = tmp$, MutableMap) ? tmp$_0 : Kotlin.throwCCE();
  };
  Object.defineProperty(DelegatingMap.prototype, 'keys', {get: function () {
    return this.switchToMutable_0().keys;
  }});
  Object.defineProperty(DelegatingMap.prototype, 'values', {get: function () {
    return this.switchToMutable_0().values;
  }});
  Object.defineProperty(DelegatingMap.prototype, 'entries', {get: function () {
    return this.switchToMutable_0().entries;
  }});
  DelegatingMap.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: 'DelegatingMap', interfaces: [MutableMap]};
  var PredicateResults_instance = null;
  var PredicateResult$PASS_instance;
  var PredicateResult$SKIP_instance;
  var PredicateResult$DROP_instance;
  function CommonAttributeGroupFacade() {
  }
  CommonAttributeGroupFacade.$metadata$ = {kind: Kotlin.Kind.INTERFACE, simpleName: 'CommonAttributeGroupFacade', interfaces: [Tag]};
  function FormServerAttributeGroupFacade() {
  }
  function InputServerAttributeGroupFacade() {
  }
  function SelectServerAttributeGroupFacade() {
  }
  var attributeStringString;
  var attributeSetStringStringSet;
  var attributeBooleanBoolean;
  var attributeBooleanBooleanOnOff;
  var attributeBooleanTicker;
  var attributeButtonFormEncTypeEnumButtonFormEncTypeValues;
  var attributeButtonFormMethodEnumButtonFormMethodValues;
  var attributeButtonTypeEnumButtonTypeValues;
  var attributeCommandTypeEnumCommandTypeValues;
  var attributeDirEnumDirValues;
  var attributeDraggableEnumDraggableValues;
  var attributeFormEncTypeEnumFormEncTypeValues;
  var attributeFormMethodEnumFormMethodValues;
  var attributeIframeSandboxEnumIframeSandboxValues;
  var attributeInputFormEncTypeEnumInputFormEncTypeValues;
  var attributeInputFormMethodEnumInputFormMethodValues;
  var attributeInputTypeEnumInputTypeValues;
  var attributeKeyGenKeyTypeEnumKeyGenKeyTypeValues;
  var attributeRunAtEnumRunAtValues;
  var attributeTextAreaWrapEnumTextAreaWrapValues;
  var attributeThScopeEnumThScopeValues;
  var Entities$nbsp_instance;
  var Entities$lt_instance;
  var Entities$gt_instance;
  var Entities$quot_instance;
  var Entities$amp_instance;
  var Entities$apos_instance;
  var Entities$iexcl_instance;
  var Entities$cent_instance;
  var Entities$pound_instance;
  var Entities$curren_instance;
  var Entities$yen_instance;
  var Entities$brvbar_instance;
  var Entities$sect_instance;
  var Entities$uml_instance;
  var Entities$copy_instance;
  var Entities$ordf_instance;
  var Entities$laquo_instance;
  var Entities$not_instance;
  var Entities$shy_instance;
  var Entities$reg_instance;
  var Entities$macr_instance;
  var Entities$deg_instance;
  var Entities$plusmn_instance;
  var Entities$sup2_instance;
  var Entities$sup3_instance;
  var Entities$acute_instance;
  var Entities$micro_instance;
  var Entities$para_instance;
  var Entities$middot_instance;
  var Entities$cedil_instance;
  var Entities$sup1_instance;
  var Entities$ordm_instance;
  var Entities$raquo_instance;
  var Entities$frac14_instance;
  var Entities$frac12_instance;
  var Entities$frac34_instance;
  var Entities$iquest_instance;
  var Entities$Agrave_instance;
  var Entities$Aacute_instance;
  var Entities$Acirc_instance;
  var Entities$Atilde_instance;
  var Entities$Auml_instance;
  var Entities$Aring_instance;
  var Entities$AElig_instance;
  var Entities$Ccedil_instance;
  var Entities$Egrave_instance;
  var Entities$Eacute_instance;
  var Entities$Ecirc_instance;
  var Entities$Euml_instance;
  var Entities$Igrave_instance;
  var Entities$Iacute_instance;
  var Entities$Icirc_instance;
  var Entities$Iuml_instance;
  var Entities$ETH_instance;
  var Entities$Ntilde_instance;
  var Entities$Ograve_instance;
  var Entities$Oacute_instance;
  var Entities$Ocirc_instance;
  var Entities$Otilde_instance;
  var Entities$Ouml_instance;
  var Entities$times_instance;
  var Entities$Oslash_instance;
  var Entities$Ugrave_instance;
  var Entities$Uacute_instance;
  var Entities$Ucirc_instance;
  var Entities$Uuml_instance;
  var Entities$Yacute_instance;
  var Entities$THORN_instance;
  var Entities$szlig_instance;
  var Entities$agrave_instance;
  var Entities$aacute_instance;
  var Entities$acirc_instance;
  var Entities$atilde_instance;
  var Entities$auml_instance;
  var Entities$aring_instance;
  var Entities$aelig_instance;
  var Entities$ccedil_instance;
  var Entities$egrave_instance;
  var Entities$eacute_instance;
  var Entities$ecirc_instance;
  var Entities$euml_instance;
  var Entities$igrave_instance;
  var Entities$iacute_instance;
  var Entities$icirc_instance;
  var Entities$iuml_instance;
  var Entities$eth_instance;
  var Entities$ntilde_instance;
  var Entities$ograve_instance;
  var Entities$oacute_instance;
  var Entities$ocirc_instance;
  var Entities$otilde_instance;
  var Entities$ouml_instance;
  var Entities$divide_instance;
  var Entities$oslash_instance;
  var Entities$ugrave_instance;
  var Entities$uacute_instance;
  var Entities$ucirc_instance;
  var Entities$uuml_instance;
  var Entities$yacute_instance;
  var Entities$thorn_instance;
  var Entities$yuml_instance;
  function Dir(name, ordinal, realValue) {
    Enum.call(this);
    this.realValue_6shvwn$_0 = realValue;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Dir_initFields() {
    Dir_initFields = function () {
    };
    Dir$ltr_instance = new Dir('ltr', 0, 'ltr');
    Dir$rtl_instance = new Dir('rtl', 1, 'rtl');
  }
  Object.defineProperty(Dir.prototype, 'realValue', {get: function () {
    return this.realValue_6shvwn$_0;
  }});
  var Dir$ltr_instance;
  function Dir$ltr_getInstance() {
    Dir_initFields();
    return Dir$ltr_instance;
  }
  var Dir$rtl_instance;
  function Dir$rtl_getInstance() {
    Dir_initFields();
    return Dir$rtl_instance;
  }
  Dir.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: 'Dir', interfaces: [AttributeEnum, Enum]};
  function Dir$values() {
    return [Dir$ltr_getInstance(), Dir$rtl_getInstance()];
  }
  Dir.values = Dir$values;
  function Dir$valueOf(name) {
    switch (name) {
      case 'ltr':
        return Dir$ltr_getInstance();
      case 'rtl':
        return Dir$rtl_getInstance();
      default:Kotlin.throwISE('No enum constant kotlinx.html.Dir.' + name);
    }
  }
  Dir.valueOf_61zpoe$ = Dir$valueOf;
  var dirValues;
  function Draggable(name, ordinal, realValue) {
    Enum.call(this);
    this.realValue_sh13nr$_0 = realValue;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Draggable_initFields() {
    Draggable_initFields = function () {
    };
    Draggable$true__instance = new Draggable('true_', 0, 'true');
    Draggable$false__instance = new Draggable('false_', 1, 'false');
    Draggable$auto_instance = new Draggable('auto', 2, 'auto');
  }
  Object.defineProperty(Draggable.prototype, 'realValue', {get: function () {
    return this.realValue_sh13nr$_0;
  }});
  var Draggable$true__instance;
  function Draggable$true__getInstance() {
    Draggable_initFields();
    return Draggable$true__instance;
  }
  var Draggable$false__instance;
  function Draggable$false__getInstance() {
    Draggable_initFields();
    return Draggable$false__instance;
  }
  var Draggable$auto_instance;
  function Draggable$auto_getInstance() {
    Draggable_initFields();
    return Draggable$auto_instance;
  }
  Draggable.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: 'Draggable', interfaces: [AttributeEnum, Enum]};
  function Draggable$values() {
    return [Draggable$true__getInstance(), Draggable$false__getInstance(), Draggable$auto_getInstance()];
  }
  Draggable.values = Draggable$values;
  function Draggable$valueOf(name) {
    switch (name) {
      case 'true_':
        return Draggable$true__getInstance();
      case 'false_':
        return Draggable$false__getInstance();
      case 'auto':
        return Draggable$auto_getInstance();
      default:Kotlin.throwISE('No enum constant kotlinx.html.Draggable.' + name);
    }
  }
  Draggable.valueOf_61zpoe$ = Draggable$valueOf;
  var draggableValues;
  function RunAt(name, ordinal, realValue) {
    Enum.call(this);
    this.realValue_ey285k$_0 = realValue;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function RunAt_initFields() {
    RunAt_initFields = function () {
    };
    RunAt$server_instance = new RunAt('server', 0, 'server');
  }
  Object.defineProperty(RunAt.prototype, 'realValue', {get: function () {
    return this.realValue_ey285k$_0;
  }});
  var RunAt$server_instance;
  function RunAt$server_getInstance() {
    RunAt_initFields();
    return RunAt$server_instance;
  }
  RunAt.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: 'RunAt', interfaces: [AttributeEnum, Enum]};
  function RunAt$values() {
    return [RunAt$server_getInstance()];
  }
  RunAt.values = RunAt$values;
  function RunAt$valueOf(name) {
    switch (name) {
      case 'server':
        return RunAt$server_getInstance();
      default:Kotlin.throwISE('No enum constant kotlinx.html.RunAt.' + name);
    }
  }
  RunAt.valueOf_61zpoe$ = RunAt$valueOf;
  var runAtValues;
  var ATarget_instance = null;
  var ARel_instance = null;
  var AType_instance = null;
  function AreaShape(name, ordinal, realValue) {
    Enum.call(this);
    this.realValue_uzg4u$_0 = realValue;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function AreaShape_initFields() {
    AreaShape_initFields = function () {
    };
    AreaShape$rect_instance = new AreaShape('rect', 0, 'rect');
    AreaShape$circle_instance = new AreaShape('circle', 1, 'circle');
    AreaShape$poly_instance = new AreaShape('poly', 2, 'poly');
    AreaShape$default_instance = new AreaShape('default', 3, 'default');
  }
  Object.defineProperty(AreaShape.prototype, 'realValue', {get: function () {
    return this.realValue_uzg4u$_0;
  }});
  var AreaShape$rect_instance;
  function AreaShape$rect_getInstance() {
    AreaShape_initFields();
    return AreaShape$rect_instance;
  }
  var AreaShape$circle_instance;
  function AreaShape$circle_getInstance() {
    AreaShape_initFields();
    return AreaShape$circle_instance;
  }
  var AreaShape$poly_instance;
  function AreaShape$poly_getInstance() {
    AreaShape_initFields();
    return AreaShape$poly_instance;
  }
  var AreaShape$default_instance;
  function AreaShape$default_getInstance() {
    AreaShape_initFields();
    return AreaShape$default_instance;
  }
  AreaShape.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: 'AreaShape', interfaces: [AttributeEnum, Enum]};
  function AreaShape$values() {
    return [AreaShape$rect_getInstance(), AreaShape$circle_getInstance(), AreaShape$poly_getInstance(), AreaShape$default_getInstance()];
  }
  AreaShape.values = AreaShape$values;
  function AreaShape$valueOf(name) {
    switch (name) {
      case 'rect':
        return AreaShape$rect_getInstance();
      case 'circle':
        return AreaShape$circle_getInstance();
      case 'poly':
        return AreaShape$poly_getInstance();
      case 'default':
        return AreaShape$default_getInstance();
      default:Kotlin.throwISE('No enum constant kotlinx.html.AreaShape.' + name);
    }
  }
  AreaShape.valueOf_61zpoe$ = AreaShape$valueOf;
  var areaShapeValues;
  var AreaTarget_instance = null;
  var AreaRel_instance = null;
  var BaseTarget_instance = null;
  function ButtonFormEncType(name, ordinal, realValue) {
    Enum.call(this);
    this.realValue_6mz8t4$_0 = realValue;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function ButtonFormEncType_initFields() {
    ButtonFormEncType_initFields = function () {
    };
    ButtonFormEncType$multipartFormData_instance = new ButtonFormEncType('multipartFormData', 0, 'multipart/form-data');
    ButtonFormEncType$applicationXWwwFormUrlEncoded_instance = new ButtonFormEncType('applicationXWwwFormUrlEncoded', 1, 'application/x-www-form-urlencoded');
    ButtonFormEncType$textPlain_instance = new ButtonFormEncType('textPlain', 2, 'text/plain');
  }
  Object.defineProperty(ButtonFormEncType.prototype, 'realValue', {get: function () {
    return this.realValue_6mz8t4$_0;
  }});
  var ButtonFormEncType$multipartFormData_instance;
  function ButtonFormEncType$multipartFormData_getInstance() {
    ButtonFormEncType_initFields();
    return ButtonFormEncType$multipartFormData_instance;
  }
  var ButtonFormEncType$applicationXWwwFormUrlEncoded_instance;
  function ButtonFormEncType$applicationXWwwFormUrlEncoded_getInstance() {
    ButtonFormEncType_initFields();
    return ButtonFormEncType$applicationXWwwFormUrlEncoded_instance;
  }
  var ButtonFormEncType$textPlain_instance;
  function ButtonFormEncType$textPlain_getInstance() {
    ButtonFormEncType_initFields();
    return ButtonFormEncType$textPlain_instance;
  }
  ButtonFormEncType.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: 'ButtonFormEncType', interfaces: [AttributeEnum, Enum]};
  function ButtonFormEncType$values() {
    return [ButtonFormEncType$multipartFormData_getInstance(), ButtonFormEncType$applicationXWwwFormUrlEncoded_getInstance(), ButtonFormEncType$textPlain_getInstance()];
  }
  ButtonFormEncType.values = ButtonFormEncType$values;
  function ButtonFormEncType$valueOf(name) {
    switch (name) {
      case 'multipartFormData':
        return ButtonFormEncType$multipartFormData_getInstance();
      case 'applicationXWwwFormUrlEncoded':
        return ButtonFormEncType$applicationXWwwFormUrlEncoded_getInstance();
      case 'textPlain':
        return ButtonFormEncType$textPlain_getInstance();
      default:Kotlin.throwISE('No enum constant kotlinx.html.ButtonFormEncType.' + name);
    }
  }
  ButtonFormEncType.valueOf_61zpoe$ = ButtonFormEncType$valueOf;
  var buttonFormEncTypeValues;
  function ButtonFormMethod(name, ordinal, realValue) {
    Enum.call(this);
    this.realValue_he15gp$_0 = realValue;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function ButtonFormMethod_initFields() {
    ButtonFormMethod_initFields = function () {
    };
    ButtonFormMethod$get_instance = new ButtonFormMethod('get', 0, 'get');
    ButtonFormMethod$post_instance = new ButtonFormMethod('post', 1, 'post');
    ButtonFormMethod$put_instance = new ButtonFormMethod('put', 2, 'put');
    ButtonFormMethod$delete_instance = new ButtonFormMethod('delete', 3, 'delete');
  }
  Object.defineProperty(ButtonFormMethod.prototype, 'realValue', {get: function () {
    return this.realValue_he15gp$_0;
  }});
  var ButtonFormMethod$get_instance;
  function ButtonFormMethod$get_getInstance() {
    ButtonFormMethod_initFields();
    return ButtonFormMethod$get_instance;
  }
  var ButtonFormMethod$post_instance;
  function ButtonFormMethod$post_getInstance() {
    ButtonFormMethod_initFields();
    return ButtonFormMethod$post_instance;
  }
  var ButtonFormMethod$put_instance;
  function ButtonFormMethod$put_getInstance() {
    ButtonFormMethod_initFields();
    return ButtonFormMethod$put_instance;
  }
  var ButtonFormMethod$delete_instance;
  function ButtonFormMethod$delete_getInstance() {
    ButtonFormMethod_initFields();
    return ButtonFormMethod$delete_instance;
  }
  ButtonFormMethod.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: 'ButtonFormMethod', interfaces: [AttributeEnum, Enum]};
  function ButtonFormMethod$values() {
    return [ButtonFormMethod$get_getInstance(), ButtonFormMethod$post_getInstance(), ButtonFormMethod$put_getInstance(), ButtonFormMethod$delete_getInstance()];
  }
  ButtonFormMethod.values = ButtonFormMethod$values;
  function ButtonFormMethod$valueOf(name) {
    switch (name) {
      case 'get':
        return ButtonFormMethod$get_getInstance();
      case 'post':
        return ButtonFormMethod$post_getInstance();
      case 'put':
        return ButtonFormMethod$put_getInstance();
      case 'delete':
        return ButtonFormMethod$delete_getInstance();
      default:Kotlin.throwISE('No enum constant kotlinx.html.ButtonFormMethod.' + name);
    }
  }
  ButtonFormMethod.valueOf_61zpoe$ = ButtonFormMethod$valueOf;
  var buttonFormMethodValues;
  var ButtonFormTarget_instance = null;
  function ButtonType(name, ordinal, realValue) {
    Enum.call(this);
    this.realValue_kjj0ea$_0 = realValue;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function ButtonType_initFields() {
    ButtonType_initFields = function () {
    };
    ButtonType$button_instance = new ButtonType('button', 0, 'button');
    ButtonType$reset_instance = new ButtonType('reset', 1, 'reset');
    ButtonType$submit_instance = new ButtonType('submit', 2, 'submit');
  }
  Object.defineProperty(ButtonType.prototype, 'realValue', {get: function () {
    return this.realValue_kjj0ea$_0;
  }});
  var ButtonType$button_instance;
  function ButtonType$button_getInstance() {
    ButtonType_initFields();
    return ButtonType$button_instance;
  }
  var ButtonType$reset_instance;
  function ButtonType$reset_getInstance() {
    ButtonType_initFields();
    return ButtonType$reset_instance;
  }
  var ButtonType$submit_instance;
  function ButtonType$submit_getInstance() {
    ButtonType_initFields();
    return ButtonType$submit_instance;
  }
  ButtonType.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: 'ButtonType', interfaces: [AttributeEnum, Enum]};
  function ButtonType$values() {
    return [ButtonType$button_getInstance(), ButtonType$reset_getInstance(), ButtonType$submit_getInstance()];
  }
  ButtonType.values = ButtonType$values;
  function ButtonType$valueOf(name) {
    switch (name) {
      case 'button':
        return ButtonType$button_getInstance();
      case 'reset':
        return ButtonType$reset_getInstance();
      case 'submit':
        return ButtonType$submit_getInstance();
      default:Kotlin.throwISE('No enum constant kotlinx.html.ButtonType.' + name);
    }
  }
  ButtonType.valueOf_61zpoe$ = ButtonType$valueOf;
  var buttonTypeValues;
  function CommandType(name, ordinal, realValue) {
    Enum.call(this);
    this.realValue_dgxtb5$_0 = realValue;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function CommandType_initFields() {
    CommandType_initFields = function () {
    };
    CommandType$command_instance = new CommandType('command', 0, 'command');
    CommandType$checkBox_instance = new CommandType('checkBox', 1, 'checkbox');
    CommandType$radio_instance = new CommandType('radio', 2, 'radio');
  }
  Object.defineProperty(CommandType.prototype, 'realValue', {get: function () {
    return this.realValue_dgxtb5$_0;
  }});
  var CommandType$command_instance;
  function CommandType$command_getInstance() {
    CommandType_initFields();
    return CommandType$command_instance;
  }
  var CommandType$checkBox_instance;
  function CommandType$checkBox_getInstance() {
    CommandType_initFields();
    return CommandType$checkBox_instance;
  }
  var CommandType$radio_instance;
  function CommandType$radio_getInstance() {
    CommandType_initFields();
    return CommandType$radio_instance;
  }
  CommandType.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: 'CommandType', interfaces: [AttributeEnum, Enum]};
  function CommandType$values() {
    return [CommandType$command_getInstance(), CommandType$checkBox_getInstance(), CommandType$radio_getInstance()];
  }
  CommandType.values = CommandType$values;
  function CommandType$valueOf(name) {
    switch (name) {
      case 'command':
        return CommandType$command_getInstance();
      case 'checkBox':
        return CommandType$checkBox_getInstance();
      case 'radio':
        return CommandType$radio_getInstance();
      default:Kotlin.throwISE('No enum constant kotlinx.html.CommandType.' + name);
    }
  }
  CommandType.valueOf_61zpoe$ = CommandType$valueOf;
  var commandTypeValues;
  function FormEncType(name, ordinal, realValue) {
    Enum.call(this);
    this.realValue_mjs8fe$_0 = realValue;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function FormEncType_initFields() {
    FormEncType_initFields = function () {
    };
    FormEncType$multipartFormData_instance = new FormEncType('multipartFormData', 0, 'multipart/form-data');
    FormEncType$applicationXWwwFormUrlEncoded_instance = new FormEncType('applicationXWwwFormUrlEncoded', 1, 'application/x-www-form-urlencoded');
    FormEncType$textPlain_instance = new FormEncType('textPlain', 2, 'text/plain');
  }
  Object.defineProperty(FormEncType.prototype, 'realValue', {get: function () {
    return this.realValue_mjs8fe$_0;
  }});
  var FormEncType$multipartFormData_instance;
  function FormEncType$multipartFormData_getInstance() {
    FormEncType_initFields();
    return FormEncType$multipartFormData_instance;
  }
  var FormEncType$applicationXWwwFormUrlEncoded_instance;
  function FormEncType$applicationXWwwFormUrlEncoded_getInstance() {
    FormEncType_initFields();
    return FormEncType$applicationXWwwFormUrlEncoded_instance;
  }
  var FormEncType$textPlain_instance;
  function FormEncType$textPlain_getInstance() {
    FormEncType_initFields();
    return FormEncType$textPlain_instance;
  }
  FormEncType.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: 'FormEncType', interfaces: [AttributeEnum, Enum]};
  function FormEncType$values() {
    return [FormEncType$multipartFormData_getInstance(), FormEncType$applicationXWwwFormUrlEncoded_getInstance(), FormEncType$textPlain_getInstance()];
  }
  FormEncType.values = FormEncType$values;
  function FormEncType$valueOf(name) {
    switch (name) {
      case 'multipartFormData':
        return FormEncType$multipartFormData_getInstance();
      case 'applicationXWwwFormUrlEncoded':
        return FormEncType$applicationXWwwFormUrlEncoded_getInstance();
      case 'textPlain':
        return FormEncType$textPlain_getInstance();
      default:Kotlin.throwISE('No enum constant kotlinx.html.FormEncType.' + name);
    }
  }
  FormEncType.valueOf_61zpoe$ = FormEncType$valueOf;
  var formEncTypeValues;
  function FormMethod(name, ordinal, realValue) {
    Enum.call(this);
    this.realValue_dbj8t3$_0 = realValue;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function FormMethod_initFields() {
    FormMethod_initFields = function () {
    };
    FormMethod$get_instance = new FormMethod('get', 0, 'get');
    FormMethod$post_instance = new FormMethod('post', 1, 'post');
    FormMethod$put_instance = new FormMethod('put', 2, 'put');
    FormMethod$delete_instance = new FormMethod('delete', 3, 'delete');
  }
  Object.defineProperty(FormMethod.prototype, 'realValue', {get: function () {
    return this.realValue_dbj8t3$_0;
  }});
  var FormMethod$get_instance;
  function FormMethod$get_getInstance() {
    FormMethod_initFields();
    return FormMethod$get_instance;
  }
  var FormMethod$post_instance;
  function FormMethod$post_getInstance() {
    FormMethod_initFields();
    return FormMethod$post_instance;
  }
  var FormMethod$put_instance;
  function FormMethod$put_getInstance() {
    FormMethod_initFields();
    return FormMethod$put_instance;
  }
  var FormMethod$delete_instance;
  function FormMethod$delete_getInstance() {
    FormMethod_initFields();
    return FormMethod$delete_instance;
  }
  FormMethod.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: 'FormMethod', interfaces: [AttributeEnum, Enum]};
  function FormMethod$values() {
    return [FormMethod$get_getInstance(), FormMethod$post_getInstance(), FormMethod$put_getInstance(), FormMethod$delete_getInstance()];
  }
  FormMethod.values = FormMethod$values;
  function FormMethod$valueOf(name) {
    switch (name) {
      case 'get':
        return FormMethod$get_getInstance();
      case 'post':
        return FormMethod$post_getInstance();
      case 'put':
        return FormMethod$put_getInstance();
      case 'delete':
        return FormMethod$delete_getInstance();
      default:Kotlin.throwISE('No enum constant kotlinx.html.FormMethod.' + name);
    }
  }
  FormMethod.valueOf_61zpoe$ = FormMethod$valueOf;
  var formMethodValues;
  var FormTarget_instance = null;
  var IframeName_instance = null;
  function IframeSandbox(name, ordinal, realValue) {
    Enum.call(this);
    this.realValue_jow5qb$_0 = realValue;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function IframeSandbox_initFields() {
    IframeSandbox_initFields = function () {
    };
    IframeSandbox$allowSameOrigin_instance = new IframeSandbox('allowSameOrigin', 0, 'allow-same-origin');
    IframeSandbox$allowFormS_instance = new IframeSandbox('allowFormS', 1, 'allow-forms');
    IframeSandbox$allowScripts_instance = new IframeSandbox('allowScripts', 2, 'allow-scripts');
  }
  Object.defineProperty(IframeSandbox.prototype, 'realValue', {get: function () {
    return this.realValue_jow5qb$_0;
  }});
  var IframeSandbox$allowSameOrigin_instance;
  function IframeSandbox$allowSameOrigin_getInstance() {
    IframeSandbox_initFields();
    return IframeSandbox$allowSameOrigin_instance;
  }
  var IframeSandbox$allowFormS_instance;
  function IframeSandbox$allowFormS_getInstance() {
    IframeSandbox_initFields();
    return IframeSandbox$allowFormS_instance;
  }
  var IframeSandbox$allowScripts_instance;
  function IframeSandbox$allowScripts_getInstance() {
    IframeSandbox_initFields();
    return IframeSandbox$allowScripts_instance;
  }
  IframeSandbox.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: 'IframeSandbox', interfaces: [AttributeEnum, Enum]};
  function IframeSandbox$values() {
    return [IframeSandbox$allowSameOrigin_getInstance(), IframeSandbox$allowFormS_getInstance(), IframeSandbox$allowScripts_getInstance()];
  }
  IframeSandbox.values = IframeSandbox$values;
  function IframeSandbox$valueOf(name) {
    switch (name) {
      case 'allowSameOrigin':
        return IframeSandbox$allowSameOrigin_getInstance();
      case 'allowFormS':
        return IframeSandbox$allowFormS_getInstance();
      case 'allowScripts':
        return IframeSandbox$allowScripts_getInstance();
      default:Kotlin.throwISE('No enum constant kotlinx.html.IframeSandbox.' + name);
    }
  }
  IframeSandbox.valueOf_61zpoe$ = IframeSandbox$valueOf;
  var iframeSandboxValues;
  function InputType(name, ordinal, realValue) {
    Enum.call(this);
    this.realValue_8c27wi$_0 = realValue;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function InputType_initFields() {
    InputType_initFields = function () {
    };
    InputType$button_instance = new InputType('button', 0, 'button');
    InputType$checkBox_instance = new InputType('checkBox', 1, 'checkbox');
    InputType$color_instance = new InputType('color', 2, 'color');
    InputType$date_instance = new InputType('date', 3, 'date');
    InputType$dateTime_instance = new InputType('dateTime', 4, 'datetime');
    InputType$dateTimeLocal_instance = new InputType('dateTimeLocal', 5, 'datetime-local');
    InputType$email_instance = new InputType('email', 6, 'email');
    InputType$file_instance = new InputType('file', 7, 'file');
    InputType$hidden_instance = new InputType('hidden', 8, 'hidden');
    InputType$image_instance = new InputType('image', 9, 'image');
    InputType$month_instance = new InputType('month', 10, 'month');
    InputType$number_instance = new InputType('number', 11, 'number');
    InputType$password_instance = new InputType('password', 12, 'password');
    InputType$radio_instance = new InputType('radio', 13, 'radio');
    InputType$range_instance = new InputType('range', 14, 'range');
    InputType$reset_instance = new InputType('reset', 15, 'reset');
    InputType$search_instance = new InputType('search', 16, 'search');
    InputType$submit_instance = new InputType('submit', 17, 'submit');
    InputType$text_instance = new InputType('text', 18, 'text');
    InputType$tel_instance = new InputType('tel', 19, 'tel');
    InputType$time_instance = new InputType('time', 20, 'time');
    InputType$url_instance = new InputType('url', 21, 'url');
    InputType$week_instance = new InputType('week', 22, 'week');
  }
  Object.defineProperty(InputType.prototype, 'realValue', {get: function () {
    return this.realValue_8c27wi$_0;
  }});
  var InputType$button_instance;
  function InputType$button_getInstance() {
    InputType_initFields();
    return InputType$button_instance;
  }
  var InputType$checkBox_instance;
  function InputType$checkBox_getInstance() {
    InputType_initFields();
    return InputType$checkBox_instance;
  }
  var InputType$color_instance;
  function InputType$color_getInstance() {
    InputType_initFields();
    return InputType$color_instance;
  }
  var InputType$date_instance;
  function InputType$date_getInstance() {
    InputType_initFields();
    return InputType$date_instance;
  }
  var InputType$dateTime_instance;
  function InputType$dateTime_getInstance() {
    InputType_initFields();
    return InputType$dateTime_instance;
  }
  var InputType$dateTimeLocal_instance;
  function InputType$dateTimeLocal_getInstance() {
    InputType_initFields();
    return InputType$dateTimeLocal_instance;
  }
  var InputType$email_instance;
  function InputType$email_getInstance() {
    InputType_initFields();
    return InputType$email_instance;
  }
  var InputType$file_instance;
  function InputType$file_getInstance() {
    InputType_initFields();
    return InputType$file_instance;
  }
  var InputType$hidden_instance;
  function InputType$hidden_getInstance() {
    InputType_initFields();
    return InputType$hidden_instance;
  }
  var InputType$image_instance;
  function InputType$image_getInstance() {
    InputType_initFields();
    return InputType$image_instance;
  }
  var InputType$month_instance;
  function InputType$month_getInstance() {
    InputType_initFields();
    return InputType$month_instance;
  }
  var InputType$number_instance;
  function InputType$number_getInstance() {
    InputType_initFields();
    return InputType$number_instance;
  }
  var InputType$password_instance;
  function InputType$password_getInstance() {
    InputType_initFields();
    return InputType$password_instance;
  }
  var InputType$radio_instance;
  function InputType$radio_getInstance() {
    InputType_initFields();
    return InputType$radio_instance;
  }
  var InputType$range_instance;
  function InputType$range_getInstance() {
    InputType_initFields();
    return InputType$range_instance;
  }
  var InputType$reset_instance;
  function InputType$reset_getInstance() {
    InputType_initFields();
    return InputType$reset_instance;
  }
  var InputType$search_instance;
  function InputType$search_getInstance() {
    InputType_initFields();
    return InputType$search_instance;
  }
  var InputType$submit_instance;
  function InputType$submit_getInstance() {
    InputType_initFields();
    return InputType$submit_instance;
  }
  var InputType$text_instance;
  function InputType$text_getInstance() {
    InputType_initFields();
    return InputType$text_instance;
  }
  var InputType$tel_instance;
  function InputType$tel_getInstance() {
    InputType_initFields();
    return InputType$tel_instance;
  }
  var InputType$time_instance;
  function InputType$time_getInstance() {
    InputType_initFields();
    return InputType$time_instance;
  }
  var InputType$url_instance;
  function InputType$url_getInstance() {
    InputType_initFields();
    return InputType$url_instance;
  }
  var InputType$week_instance;
  function InputType$week_getInstance() {
    InputType_initFields();
    return InputType$week_instance;
  }
  InputType.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: 'InputType', interfaces: [AttributeEnum, Enum]};
  function InputType$values() {
    return [InputType$button_getInstance(), InputType$checkBox_getInstance(), InputType$color_getInstance(), InputType$date_getInstance(), InputType$dateTime_getInstance(), InputType$dateTimeLocal_getInstance(), InputType$email_getInstance(), InputType$file_getInstance(), InputType$hidden_getInstance(), InputType$image_getInstance(), InputType$month_getInstance(), InputType$number_getInstance(), InputType$password_getInstance(), InputType$radio_getInstance(), InputType$range_getInstance(), InputType$reset_getInstance(), InputType$search_getInstance(), InputType$submit_getInstance(), InputType$text_getInstance(), InputType$tel_getInstance(), InputType$time_getInstance(), InputType$url_getInstance(), InputType$week_getInstance()];
  }
  InputType.values = InputType$values;
  function InputType$valueOf(name) {
    switch (name) {
      case 'button':
        return InputType$button_getInstance();
      case 'checkBox':
        return InputType$checkBox_getInstance();
      case 'color':
        return InputType$color_getInstance();
      case 'date':
        return InputType$date_getInstance();
      case 'dateTime':
        return InputType$dateTime_getInstance();
      case 'dateTimeLocal':
        return InputType$dateTimeLocal_getInstance();
      case 'email':
        return InputType$email_getInstance();
      case 'file':
        return InputType$file_getInstance();
      case 'hidden':
        return InputType$hidden_getInstance();
      case 'image':
        return InputType$image_getInstance();
      case 'month':
        return InputType$month_getInstance();
      case 'number':
        return InputType$number_getInstance();
      case 'password':
        return InputType$password_getInstance();
      case 'radio':
        return InputType$radio_getInstance();
      case 'range':
        return InputType$range_getInstance();
      case 'reset':
        return InputType$reset_getInstance();
      case 'search':
        return InputType$search_getInstance();
      case 'submit':
        return InputType$submit_getInstance();
      case 'text':
        return InputType$text_getInstance();
      case 'tel':
        return InputType$tel_getInstance();
      case 'time':
        return InputType$time_getInstance();
      case 'url':
        return InputType$url_getInstance();
      case 'week':
        return InputType$week_getInstance();
      default:Kotlin.throwISE('No enum constant kotlinx.html.InputType.' + name);
    }
  }
  InputType.valueOf_61zpoe$ = InputType$valueOf;
  var inputTypeValues;
  function InputFormEncType(name, ordinal, realValue) {
    Enum.call(this);
    this.realValue_7oxi3s$_0 = realValue;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function InputFormEncType_initFields() {
    InputFormEncType_initFields = function () {
    };
    InputFormEncType$multipartFormData_instance = new InputFormEncType('multipartFormData', 0, 'multipart/form-data');
    InputFormEncType$applicationXWwwFormUrlEncoded_instance = new InputFormEncType('applicationXWwwFormUrlEncoded', 1, 'application/x-www-form-urlencoded');
    InputFormEncType$textPlain_instance = new InputFormEncType('textPlain', 2, 'text/plain');
  }
  Object.defineProperty(InputFormEncType.prototype, 'realValue', {get: function () {
    return this.realValue_7oxi3s$_0;
  }});
  var InputFormEncType$multipartFormData_instance;
  function InputFormEncType$multipartFormData_getInstance() {
    InputFormEncType_initFields();
    return InputFormEncType$multipartFormData_instance;
  }
  var InputFormEncType$applicationXWwwFormUrlEncoded_instance;
  function InputFormEncType$applicationXWwwFormUrlEncoded_getInstance() {
    InputFormEncType_initFields();
    return InputFormEncType$applicationXWwwFormUrlEncoded_instance;
  }
  var InputFormEncType$textPlain_instance;
  function InputFormEncType$textPlain_getInstance() {
    InputFormEncType_initFields();
    return InputFormEncType$textPlain_instance;
  }
  InputFormEncType.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: 'InputFormEncType', interfaces: [AttributeEnum, Enum]};
  function InputFormEncType$values() {
    return [InputFormEncType$multipartFormData_getInstance(), InputFormEncType$applicationXWwwFormUrlEncoded_getInstance(), InputFormEncType$textPlain_getInstance()];
  }
  InputFormEncType.values = InputFormEncType$values;
  function InputFormEncType$valueOf(name) {
    switch (name) {
      case 'multipartFormData':
        return InputFormEncType$multipartFormData_getInstance();
      case 'applicationXWwwFormUrlEncoded':
        return InputFormEncType$applicationXWwwFormUrlEncoded_getInstance();
      case 'textPlain':
        return InputFormEncType$textPlain_getInstance();
      default:Kotlin.throwISE('No enum constant kotlinx.html.InputFormEncType.' + name);
    }
  }
  InputFormEncType.valueOf_61zpoe$ = InputFormEncType$valueOf;
  var inputFormEncTypeValues;
  function InputFormMethod(name, ordinal, realValue) {
    Enum.call(this);
    this.realValue_lid4q1$_0 = realValue;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function InputFormMethod_initFields() {
    InputFormMethod_initFields = function () {
    };
    InputFormMethod$get_instance = new InputFormMethod('get', 0, 'get');
    InputFormMethod$post_instance = new InputFormMethod('post', 1, 'post');
    InputFormMethod$put_instance = new InputFormMethod('put', 2, 'put');
    InputFormMethod$delete_instance = new InputFormMethod('delete', 3, 'delete');
  }
  Object.defineProperty(InputFormMethod.prototype, 'realValue', {get: function () {
    return this.realValue_lid4q1$_0;
  }});
  var InputFormMethod$get_instance;
  function InputFormMethod$get_getInstance() {
    InputFormMethod_initFields();
    return InputFormMethod$get_instance;
  }
  var InputFormMethod$post_instance;
  function InputFormMethod$post_getInstance() {
    InputFormMethod_initFields();
    return InputFormMethod$post_instance;
  }
  var InputFormMethod$put_instance;
  function InputFormMethod$put_getInstance() {
    InputFormMethod_initFields();
    return InputFormMethod$put_instance;
  }
  var InputFormMethod$delete_instance;
  function InputFormMethod$delete_getInstance() {
    InputFormMethod_initFields();
    return InputFormMethod$delete_instance;
  }
  InputFormMethod.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: 'InputFormMethod', interfaces: [AttributeEnum, Enum]};
  function InputFormMethod$values() {
    return [InputFormMethod$get_getInstance(), InputFormMethod$post_getInstance(), InputFormMethod$put_getInstance(), InputFormMethod$delete_getInstance()];
  }
  InputFormMethod.values = InputFormMethod$values;
  function InputFormMethod$valueOf(name) {
    switch (name) {
      case 'get':
        return InputFormMethod$get_getInstance();
      case 'post':
        return InputFormMethod$post_getInstance();
      case 'put':
        return InputFormMethod$put_getInstance();
      case 'delete':
        return InputFormMethod$delete_getInstance();
      default:Kotlin.throwISE('No enum constant kotlinx.html.InputFormMethod.' + name);
    }
  }
  InputFormMethod.valueOf_61zpoe$ = InputFormMethod$valueOf;
  var inputFormMethodValues;
  var InputFormTarget_instance = null;
  function KeyGenKeyType(name, ordinal, realValue) {
    Enum.call(this);
    this.realValue_ucztlq$_0 = realValue;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function KeyGenKeyType_initFields() {
    KeyGenKeyType_initFields = function () {
    };
    KeyGenKeyType$rsa_instance = new KeyGenKeyType('rsa', 0, 'rsa');
  }
  Object.defineProperty(KeyGenKeyType.prototype, 'realValue', {get: function () {
    return this.realValue_ucztlq$_0;
  }});
  var KeyGenKeyType$rsa_instance;
  function KeyGenKeyType$rsa_getInstance() {
    KeyGenKeyType_initFields();
    return KeyGenKeyType$rsa_instance;
  }
  KeyGenKeyType.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: 'KeyGenKeyType', interfaces: [AttributeEnum, Enum]};
  function KeyGenKeyType$values() {
    return [KeyGenKeyType$rsa_getInstance()];
  }
  KeyGenKeyType.values = KeyGenKeyType$values;
  function KeyGenKeyType$valueOf(name) {
    switch (name) {
      case 'rsa':
        return KeyGenKeyType$rsa_getInstance();
      default:Kotlin.throwISE('No enum constant kotlinx.html.KeyGenKeyType.' + name);
    }
  }
  KeyGenKeyType.valueOf_61zpoe$ = KeyGenKeyType$valueOf;
  var keyGenKeyTypeValues;
  var LinkRel_instance = null;
  var LinkMedia_instance = null;
  var LinkType_instance = null;
  var MetaHttpEquiv_instance = null;
  var ObjectName_instance = null;
  var ScriptType_instance = null;
  var StyleType_instance = null;
  var StyleMedia_instance = null;
  function TextAreaWrap(name, ordinal, realValue) {
    Enum.call(this);
    this.realValue_97rypi$_0 = realValue;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function TextAreaWrap_initFields() {
    TextAreaWrap_initFields = function () {
    };
    TextAreaWrap$hard_instance = new TextAreaWrap('hard', 0, 'hard');
    TextAreaWrap$soft_instance = new TextAreaWrap('soft', 1, 'soft');
  }
  Object.defineProperty(TextAreaWrap.prototype, 'realValue', {get: function () {
    return this.realValue_97rypi$_0;
  }});
  var TextAreaWrap$hard_instance;
  function TextAreaWrap$hard_getInstance() {
    TextAreaWrap_initFields();
    return TextAreaWrap$hard_instance;
  }
  var TextAreaWrap$soft_instance;
  function TextAreaWrap$soft_getInstance() {
    TextAreaWrap_initFields();
    return TextAreaWrap$soft_instance;
  }
  TextAreaWrap.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: 'TextAreaWrap', interfaces: [AttributeEnum, Enum]};
  function TextAreaWrap$values() {
    return [TextAreaWrap$hard_getInstance(), TextAreaWrap$soft_getInstance()];
  }
  TextAreaWrap.values = TextAreaWrap$values;
  function TextAreaWrap$valueOf(name) {
    switch (name) {
      case 'hard':
        return TextAreaWrap$hard_getInstance();
      case 'soft':
        return TextAreaWrap$soft_getInstance();
      default:Kotlin.throwISE('No enum constant kotlinx.html.TextAreaWrap.' + name);
    }
  }
  TextAreaWrap.valueOf_61zpoe$ = TextAreaWrap$valueOf;
  var textAreaWrapValues;
  function ThScope(name, ordinal, realValue) {
    Enum.call(this);
    this.realValue_bnf5k6$_0 = realValue;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function ThScope_initFields() {
    ThScope_initFields = function () {
    };
    ThScope$col_instance = new ThScope('col', 0, 'col');
    ThScope$colGroup_instance = new ThScope('colGroup', 1, 'colgroup');
    ThScope$row_instance = new ThScope('row', 2, 'row');
    ThScope$rowGroup_instance = new ThScope('rowGroup', 3, 'rowgroup');
  }
  Object.defineProperty(ThScope.prototype, 'realValue', {get: function () {
    return this.realValue_bnf5k6$_0;
  }});
  var ThScope$col_instance;
  function ThScope$col_getInstance() {
    ThScope_initFields();
    return ThScope$col_instance;
  }
  var ThScope$colGroup_instance;
  function ThScope$colGroup_getInstance() {
    ThScope_initFields();
    return ThScope$colGroup_instance;
  }
  var ThScope$row_instance;
  function ThScope$row_getInstance() {
    ThScope_initFields();
    return ThScope$row_instance;
  }
  var ThScope$rowGroup_instance;
  function ThScope$rowGroup_getInstance() {
    ThScope_initFields();
    return ThScope$rowGroup_instance;
  }
  ThScope.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: 'ThScope', interfaces: [AttributeEnum, Enum]};
  function ThScope$values() {
    return [ThScope$col_getInstance(), ThScope$colGroup_getInstance(), ThScope$row_getInstance(), ThScope$rowGroup_getInstance()];
  }
  ThScope.values = ThScope$values;
  function ThScope$valueOf(name) {
    switch (name) {
      case 'col':
        return ThScope$col_getInstance();
      case 'colGroup':
        return ThScope$colGroup_getInstance();
      case 'row':
        return ThScope$row_getInstance();
      case 'rowGroup':
        return ThScope$rowGroup_getInstance();
      default:Kotlin.throwISE('No enum constant kotlinx.html.ThScope.' + name);
    }
  }
  ThScope.valueOf_61zpoe$ = ThScope$valueOf;
  var thScopeValues;
  function HtmlBlockInlineTag() {
  }
  HtmlBlockInlineTag.$metadata$ = {kind: Kotlin.Kind.INTERFACE, simpleName: 'HtmlBlockInlineTag', interfaces: [HtmlInlineTag, HtmlBlockTag, FlowPhrasingContent, CommonAttributeGroupFacade]};
  function FlowPhrasingContent() {
  }
  FlowPhrasingContent.$metadata$ = {kind: Kotlin.Kind.INTERFACE, simpleName: 'FlowPhrasingContent', interfaces: [PhrasingContent, FlowContent]};
  function HtmlBlockTag() {
  }
  HtmlBlockTag.$metadata$ = {kind: Kotlin.Kind.INTERFACE, simpleName: 'HtmlBlockTag', interfaces: [FlowContent, CommonAttributeGroupFacade]};
  function HtmlInlineTag() {
  }
  HtmlInlineTag.$metadata$ = {kind: Kotlin.Kind.INTERFACE, simpleName: 'HtmlInlineTag', interfaces: [PhrasingContent, CommonAttributeGroupFacade]};
  function FlowContent() {
  }
  FlowContent.$metadata$ = {kind: Kotlin.Kind.INTERFACE, simpleName: 'FlowContent', interfaces: [SectioningOrFlowContent, FlowOrPhrasingContent, FlowOrInteractiveContent, FlowOrInteractiveOrPhrasingContent, FlowOrMetaDataContent, FlowOrPhrasingOrMetaDataContent, FlowOrHeadingContent, Tag]};
  function HeadingContent() {
  }
  function InteractiveContent() {
  }
  function MetaDataContent() {
  }
  function PhrasingContent() {
  }
  PhrasingContent.$metadata$ = {kind: Kotlin.Kind.INTERFACE, simpleName: 'PhrasingContent', interfaces: [FlowOrPhrasingContent, FlowOrPhrasingOrMetaDataContent, FlowOrInteractiveOrPhrasingContent, Tag]};
  function SectioningContent() {
  }
  function FlowOrHeadingContent() {
  }
  FlowOrHeadingContent.$metadata$ = {kind: Kotlin.Kind.INTERFACE, simpleName: 'FlowOrHeadingContent', interfaces: [Tag]};
  function FlowOrMetaDataContent() {
  }
  FlowOrMetaDataContent.$metadata$ = {kind: Kotlin.Kind.INTERFACE, simpleName: 'FlowOrMetaDataContent', interfaces: [FlowOrPhrasingOrMetaDataContent, Tag]};
  function FlowOrInteractiveContent() {
  }
  FlowOrInteractiveContent.$metadata$ = {kind: Kotlin.Kind.INTERFACE, simpleName: 'FlowOrInteractiveContent', interfaces: [FlowOrInteractiveOrPhrasingContent, Tag]};
  function FlowOrPhrasingContent() {
  }
  FlowOrPhrasingContent.$metadata$ = {kind: Kotlin.Kind.INTERFACE, simpleName: 'FlowOrPhrasingContent', interfaces: [FlowOrPhrasingOrMetaDataContent, FlowOrInteractiveOrPhrasingContent, Tag]};
  function FlowOrPhrasingOrMetaDataContent() {
  }
  FlowOrPhrasingOrMetaDataContent.$metadata$ = {kind: Kotlin.Kind.INTERFACE, simpleName: 'FlowOrPhrasingOrMetaDataContent', interfaces: [Tag]};
  function SectioningOrFlowContent() {
  }
  SectioningOrFlowContent.$metadata$ = {kind: Kotlin.Kind.INTERFACE, simpleName: 'SectioningOrFlowContent', interfaces: [Tag]};
  function FlowOrInteractiveOrPhrasingContent() {
  }
  FlowOrInteractiveOrPhrasingContent.$metadata$ = {kind: Kotlin.Kind.INTERFACE, simpleName: 'FlowOrInteractiveOrPhrasingContent', interfaces: [Tag]};
  function DIV(initialAttributes, consumer) {
    HTMLTag.call(this, 'div', consumer, initialAttributes, null, false, false);
    this.consumer_6sikaz$_0 = consumer;
  }
  Object.defineProperty(DIV.prototype, 'consumer', {get: function () {
    return this.consumer_6sikaz$_0;
  }});
  DIV.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: 'DIV', interfaces: [HtmlBlockTag, HTMLTag]};
  function P(initialAttributes, consumer) {
    HTMLTag.call(this, 'p', consumer, initialAttributes, null, false, false);
    this.consumer_lkq3ee$_0 = consumer;
  }
  Object.defineProperty(P.prototype, 'consumer', {get: function () {
    return this.consumer_lkq3ee$_0;
  }});
  P.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: 'P', interfaces: [HtmlBlockInlineTag, HTMLTag]};
  function SPAN(initialAttributes, consumer) {
    HTMLTag.call(this, 'span', consumer, initialAttributes, null, true, false);
    this.consumer_2rpn8k$_0 = consumer;
  }
  Object.defineProperty(SPAN.prototype, 'consumer', {get: function () {
    return this.consumer_2rpn8k$_0;
  }});
  SPAN.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: 'SPAN', interfaces: [HtmlBlockInlineTag, HTMLTag]};
  function HTMLTag(tagName, consumer, initialAttributes, namespace, inlineTag, emptyTag) {
    if (namespace === void 0)
      namespace = null;
    this.tagName_8alqev$_0 = tagName;
    this.consumer_8alqev$_0 = consumer;
    this.namespace_8alqev$_0 = namespace;
    this.inlineTag_8alqev$_0 = inlineTag;
    this.emptyTag_8alqev$_0 = emptyTag;
    this.attributes_8alqev$_0 = new DelegatingMap(initialAttributes, this, HTMLTag$attributes$lambda(this));
  }
  Object.defineProperty(HTMLTag.prototype, 'tagName', {get: function () {
    return this.tagName_8alqev$_0;
  }});
  Object.defineProperty(HTMLTag.prototype, 'consumer', {get: function () {
    return this.consumer_8alqev$_0;
  }});
  Object.defineProperty(HTMLTag.prototype, 'namespace', {get: function () {
    return this.namespace_8alqev$_0;
  }});
  Object.defineProperty(HTMLTag.prototype, 'inlineTag', {get: function () {
    return this.inlineTag_8alqev$_0;
  }});
  Object.defineProperty(HTMLTag.prototype, 'emptyTag', {get: function () {
    return this.emptyTag_8alqev$_0;
  }});
  Object.defineProperty(HTMLTag.prototype, 'attributes', {get: function () {
    return this.attributes_8alqev$_0;
  }});
  Object.defineProperty(HTMLTag.prototype, 'attributesEntries', {get: function () {
    return this.attributes.immutableEntries;
  }});
  function HTMLTag$attributes$lambda(this$HTMLTag) {
    return function () {
      return this$HTMLTag.consumer;
    };
  }
  HTMLTag.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: 'HTMLTag', interfaces: [Tag]};
  function HTMLStreamBuilder(out, prettyPrint) {
    this.out = out;
    this.prettyPrint = prettyPrint;
    this.level_0 = 0;
    this.ln_0 = true;
    this.UnsafeImpl = new HTMLStreamBuilder$UnsafeImpl$ObjectLiteral(this);
  }
  function HTMLStreamBuilder$UnsafeImpl$ObjectLiteral(this$HTMLStreamBuilder) {
    this.this$HTMLStreamBuilder = this$HTMLStreamBuilder;
  }
  var AVERAGE_PAGE_SIZE;
  var escapeMap;
  var letterRangeLowerCase;
  var letterRangeUpperCase;
  var digitRange;
  var iterator = Kotlin.kotlin.text.iterator_gw00vp$;
  var package$kotlinx = _.kotlinx || (_.kotlinx = {});
  var package$html = package$kotlinx.html || (package$kotlinx.html = {});
  var package$dom = package$html.dom || (package$html.dom = {});
  package$dom.JSDOMBuilder = JSDOMBuilder;
  package$html.TagConsumer = TagConsumer;
  package$html.Tag = Tag;
  package$html.Unsafe = Unsafe;
  package$html.AttributeEnum = AttributeEnum;
  package$html.attributesMapOf_jyasbz$ = attributesMapOf_0;
  package$html.singletonMapOf_puj7f4$ = singletonMapOf;
  package$html.DefaultUnsafe = DefaultUnsafe;
  var package$attributes = package$html.attributes || (package$html.attributes = {});
  package$attributes.AttributeEncoder = AttributeEncoder;
  package$attributes.Attribute = Attribute;
  Object.defineProperty(package$attributes, 'StringEncoder', {get: StringEncoder_getInstance});
  package$attributes.StringAttribute = StringAttribute;
  package$attributes.BooleanEncoder = BooleanEncoder;
  package$attributes.BooleanAttribute = BooleanAttribute;
  package$attributes.tickerEncode_gigfna$ = tickerEncode;
  Object.defineProperty(package$attributes, 'TickerEncoder', {get: TickerEncoder_getInstance});
  package$attributes.TickerAttribute = TickerAttribute;
  package$attributes.EnumEncoder = EnumEncoder;
  package$attributes.EnumAttribute = EnumAttribute;
  package$attributes.stringSetDecode_pdl1vj$ = stringSetDecode;
  Object.defineProperty(package$attributes, 'StringSetEncoder', {get: StringSetEncoder_getInstance});
  package$attributes.StringSetAttribute = StringSetAttribute;
  var package$impl = package$html.impl || (package$html.impl = {});
  package$impl.DelegatingMap = DelegatingMap;
  package$html.CommonAttributeGroupFacade = CommonAttributeGroupFacade;
  package$html.FormServerAttributeGroupFacade = FormServerAttributeGroupFacade;
  package$html.InputServerAttributeGroupFacade = InputServerAttributeGroupFacade;
  package$html.SelectServerAttributeGroupFacade = SelectServerAttributeGroupFacade;
  Object.defineProperty(Dir, 'ltr', {get: Dir$ltr_getInstance});
  Object.defineProperty(Dir, 'rtl', {get: Dir$rtl_getInstance});
  package$html.Dir = Dir;
  Object.defineProperty(Draggable, 'true_', {get: Draggable$true__getInstance});
  Object.defineProperty(Draggable, 'false_', {get: Draggable$false__getInstance});
  Object.defineProperty(Draggable, 'auto', {get: Draggable$auto_getInstance});
  package$html.Draggable = Draggable;
  Object.defineProperty(RunAt, 'server', {get: RunAt$server_getInstance});
  package$html.RunAt = RunAt;
  Object.defineProperty(AreaShape, 'rect', {get: AreaShape$rect_getInstance});
  Object.defineProperty(AreaShape, 'circle', {get: AreaShape$circle_getInstance});
  Object.defineProperty(AreaShape, 'poly', {get: AreaShape$poly_getInstance});
  Object.defineProperty(AreaShape, 'default', {get: AreaShape$default_getInstance});
  package$html.AreaShape = AreaShape;
  Object.defineProperty(ButtonFormEncType, 'multipartFormData', {get: ButtonFormEncType$multipartFormData_getInstance});
  Object.defineProperty(ButtonFormEncType, 'applicationXWwwFormUrlEncoded', {get: ButtonFormEncType$applicationXWwwFormUrlEncoded_getInstance});
  Object.defineProperty(ButtonFormEncType, 'textPlain', {get: ButtonFormEncType$textPlain_getInstance});
  package$html.ButtonFormEncType = ButtonFormEncType;
  Object.defineProperty(ButtonFormMethod, 'get', {get: ButtonFormMethod$get_getInstance});
  Object.defineProperty(ButtonFormMethod, 'post', {get: ButtonFormMethod$post_getInstance});
  Object.defineProperty(ButtonFormMethod, 'put', {get: ButtonFormMethod$put_getInstance});
  Object.defineProperty(ButtonFormMethod, 'delete', {get: ButtonFormMethod$delete_getInstance});
  package$html.ButtonFormMethod = ButtonFormMethod;
  Object.defineProperty(ButtonType, 'button', {get: ButtonType$button_getInstance});
  Object.defineProperty(ButtonType, 'reset', {get: ButtonType$reset_getInstance});
  Object.defineProperty(ButtonType, 'submit', {get: ButtonType$submit_getInstance});
  package$html.ButtonType = ButtonType;
  Object.defineProperty(CommandType, 'command', {get: CommandType$command_getInstance});
  Object.defineProperty(CommandType, 'checkBox', {get: CommandType$checkBox_getInstance});
  Object.defineProperty(CommandType, 'radio', {get: CommandType$radio_getInstance});
  package$html.CommandType = CommandType;
  Object.defineProperty(FormEncType, 'multipartFormData', {get: FormEncType$multipartFormData_getInstance});
  Object.defineProperty(FormEncType, 'applicationXWwwFormUrlEncoded', {get: FormEncType$applicationXWwwFormUrlEncoded_getInstance});
  Object.defineProperty(FormEncType, 'textPlain', {get: FormEncType$textPlain_getInstance});
  package$html.FormEncType = FormEncType;
  Object.defineProperty(FormMethod, 'get', {get: FormMethod$get_getInstance});
  Object.defineProperty(FormMethod, 'post', {get: FormMethod$post_getInstance});
  Object.defineProperty(FormMethod, 'put', {get: FormMethod$put_getInstance});
  Object.defineProperty(FormMethod, 'delete', {get: FormMethod$delete_getInstance});
  package$html.FormMethod = FormMethod;
  Object.defineProperty(IframeSandbox, 'allowSameOrigin', {get: IframeSandbox$allowSameOrigin_getInstance});
  Object.defineProperty(IframeSandbox, 'allowFormS', {get: IframeSandbox$allowFormS_getInstance});
  Object.defineProperty(IframeSandbox, 'allowScripts', {get: IframeSandbox$allowScripts_getInstance});
  package$html.IframeSandbox = IframeSandbox;
  Object.defineProperty(InputType, 'button', {get: InputType$button_getInstance});
  Object.defineProperty(InputType, 'checkBox', {get: InputType$checkBox_getInstance});
  Object.defineProperty(InputType, 'color', {get: InputType$color_getInstance});
  Object.defineProperty(InputType, 'date', {get: InputType$date_getInstance});
  Object.defineProperty(InputType, 'dateTime', {get: InputType$dateTime_getInstance});
  Object.defineProperty(InputType, 'dateTimeLocal', {get: InputType$dateTimeLocal_getInstance});
  Object.defineProperty(InputType, 'email', {get: InputType$email_getInstance});
  Object.defineProperty(InputType, 'file', {get: InputType$file_getInstance});
  Object.defineProperty(InputType, 'hidden', {get: InputType$hidden_getInstance});
  Object.defineProperty(InputType, 'image', {get: InputType$image_getInstance});
  Object.defineProperty(InputType, 'month', {get: InputType$month_getInstance});
  Object.defineProperty(InputType, 'number', {get: InputType$number_getInstance});
  Object.defineProperty(InputType, 'password', {get: InputType$password_getInstance});
  Object.defineProperty(InputType, 'radio', {get: InputType$radio_getInstance});
  Object.defineProperty(InputType, 'range', {get: InputType$range_getInstance});
  Object.defineProperty(InputType, 'reset', {get: InputType$reset_getInstance});
  Object.defineProperty(InputType, 'search', {get: InputType$search_getInstance});
  Object.defineProperty(InputType, 'submit', {get: InputType$submit_getInstance});
  Object.defineProperty(InputType, 'text', {get: InputType$text_getInstance});
  Object.defineProperty(InputType, 'tel', {get: InputType$tel_getInstance});
  Object.defineProperty(InputType, 'time', {get: InputType$time_getInstance});
  Object.defineProperty(InputType, 'url', {get: InputType$url_getInstance});
  Object.defineProperty(InputType, 'week', {get: InputType$week_getInstance});
  package$html.InputType = InputType;
  Object.defineProperty(InputFormEncType, 'multipartFormData', {get: InputFormEncType$multipartFormData_getInstance});
  Object.defineProperty(InputFormEncType, 'applicationXWwwFormUrlEncoded', {get: InputFormEncType$applicationXWwwFormUrlEncoded_getInstance});
  Object.defineProperty(InputFormEncType, 'textPlain', {get: InputFormEncType$textPlain_getInstance});
  package$html.InputFormEncType = InputFormEncType;
  Object.defineProperty(InputFormMethod, 'get', {get: InputFormMethod$get_getInstance});
  Object.defineProperty(InputFormMethod, 'post', {get: InputFormMethod$post_getInstance});
  Object.defineProperty(InputFormMethod, 'put', {get: InputFormMethod$put_getInstance});
  Object.defineProperty(InputFormMethod, 'delete', {get: InputFormMethod$delete_getInstance});
  package$html.InputFormMethod = InputFormMethod;
  Object.defineProperty(KeyGenKeyType, 'rsa', {get: KeyGenKeyType$rsa_getInstance});
  package$html.KeyGenKeyType = KeyGenKeyType;
  Object.defineProperty(TextAreaWrap, 'hard', {get: TextAreaWrap$hard_getInstance});
  Object.defineProperty(TextAreaWrap, 'soft', {get: TextAreaWrap$soft_getInstance});
  package$html.TextAreaWrap = TextAreaWrap;
  Object.defineProperty(ThScope, 'col', {get: ThScope$col_getInstance});
  Object.defineProperty(ThScope, 'colGroup', {get: ThScope$colGroup_getInstance});
  Object.defineProperty(ThScope, 'row', {get: ThScope$row_getInstance});
  Object.defineProperty(ThScope, 'rowGroup', {get: ThScope$rowGroup_getInstance});
  package$html.ThScope = ThScope;
  package$html.HtmlBlockInlineTag = HtmlBlockInlineTag;
  package$html.FlowPhrasingContent = FlowPhrasingContent;
  package$html.HtmlBlockTag = HtmlBlockTag;
  package$html.HtmlInlineTag = HtmlInlineTag;
  package$html.FlowContent = FlowContent;
  package$html.HeadingContent = HeadingContent;
  package$html.InteractiveContent = InteractiveContent;
  package$html.MetaDataContent = MetaDataContent;
  package$html.PhrasingContent = PhrasingContent;
  package$html.SectioningContent = SectioningContent;
  package$html.FlowOrHeadingContent = FlowOrHeadingContent;
  package$html.FlowOrMetaDataContent = FlowOrMetaDataContent;
  package$html.FlowOrInteractiveContent = FlowOrInteractiveContent;
  package$html.FlowOrPhrasingContent = FlowOrPhrasingContent;
  package$html.FlowOrPhrasingOrMetaDataContent = FlowOrPhrasingOrMetaDataContent;
  package$html.SectioningOrFlowContent = SectioningOrFlowContent;
  package$html.FlowOrInteractiveOrPhrasingContent = FlowOrInteractiveOrPhrasingContent;
  package$html.DIV = DIV;
  package$html.P = P;
  package$html.SPAN = SPAN;
  package$html.HTMLTag = HTMLTag;
  var package$stream = package$html.stream || (package$html.stream = {});
  package$stream.HTMLStreamBuilder = HTMLStreamBuilder;
  JSDOMBuilder.prototype.onTagError_cjwpn3$ = TagConsumer.prototype.onTagError_cjwpn3$;
  DefaultUnsafe.prototype.unaryPlus_lvwjq6$ = Unsafe.prototype.unaryPlus_lvwjq6$;
  DefaultUnsafe.prototype.raw_61zpoe$ = Unsafe.prototype.raw_61zpoe$;
  DefaultUnsafe.prototype.raw_ws8or7$ = Unsafe.prototype.raw_ws8or7$;
  DefaultUnsafe.prototype.raw_3p81yu$ = Unsafe.prototype.raw_3p81yu$;
  SingletonStringMap.prototype.getOrDefault_xwzc9p$ = Map.prototype.getOrDefault_xwzc9p$;
  StringEncoder.prototype.empty_l5rr1g$ = AttributeEncoder.prototype.empty_l5rr1g$;
  BooleanEncoder.prototype.empty_l5rr1g$ = AttributeEncoder.prototype.empty_l5rr1g$;
  TickerEncoder.prototype.empty_l5rr1g$ = AttributeEncoder.prototype.empty_l5rr1g$;
  EnumEncoder.prototype.empty_l5rr1g$ = AttributeEncoder.prototype.empty_l5rr1g$;
  DelegatingMap.prototype.remove_xwzc9p$ = MutableMap.prototype.remove_xwzc9p$;
  DelegatingMap.prototype.getOrDefault_xwzc9p$ = Map.prototype.getOrDefault_xwzc9p$;
  CommonAttributeGroupFacade.prototype.unaryPlus_lvwjq6$ = Tag.prototype.unaryPlus_lvwjq6$;
  CommonAttributeGroupFacade.prototype.unaryPlus_pdl1vz$ = Tag.prototype.unaryPlus_pdl1vz$;
  CommonAttributeGroupFacade.prototype.text_61zpoe$ = Tag.prototype.text_61zpoe$;
  CommonAttributeGroupFacade.prototype.text_3p81yu$ = Tag.prototype.text_3p81yu$;
  CommonAttributeGroupFacade.prototype.entity_ws8or7$ = Tag.prototype.entity_ws8or7$;
  FormServerAttributeGroupFacade.prototype.unaryPlus_lvwjq6$ = Tag.prototype.unaryPlus_lvwjq6$;
  FormServerAttributeGroupFacade.prototype.unaryPlus_pdl1vz$ = Tag.prototype.unaryPlus_pdl1vz$;
  FormServerAttributeGroupFacade.prototype.text_61zpoe$ = Tag.prototype.text_61zpoe$;
  FormServerAttributeGroupFacade.prototype.text_3p81yu$ = Tag.prototype.text_3p81yu$;
  FormServerAttributeGroupFacade.prototype.entity_ws8or7$ = Tag.prototype.entity_ws8or7$;
  InputServerAttributeGroupFacade.prototype.unaryPlus_lvwjq6$ = Tag.prototype.unaryPlus_lvwjq6$;
  InputServerAttributeGroupFacade.prototype.unaryPlus_pdl1vz$ = Tag.prototype.unaryPlus_pdl1vz$;
  InputServerAttributeGroupFacade.prototype.text_61zpoe$ = Tag.prototype.text_61zpoe$;
  InputServerAttributeGroupFacade.prototype.text_3p81yu$ = Tag.prototype.text_3p81yu$;
  InputServerAttributeGroupFacade.prototype.entity_ws8or7$ = Tag.prototype.entity_ws8or7$;
  SelectServerAttributeGroupFacade.prototype.unaryPlus_lvwjq6$ = Tag.prototype.unaryPlus_lvwjq6$;
  SelectServerAttributeGroupFacade.prototype.unaryPlus_pdl1vz$ = Tag.prototype.unaryPlus_pdl1vz$;
  SelectServerAttributeGroupFacade.prototype.text_61zpoe$ = Tag.prototype.text_61zpoe$;
  SelectServerAttributeGroupFacade.prototype.text_3p81yu$ = Tag.prototype.text_3p81yu$;
  SelectServerAttributeGroupFacade.prototype.entity_ws8or7$ = Tag.prototype.entity_ws8or7$;
  HeadingContent.prototype.unaryPlus_lvwjq6$ = Tag.prototype.unaryPlus_lvwjq6$;
  HeadingContent.prototype.unaryPlus_pdl1vz$ = Tag.prototype.unaryPlus_pdl1vz$;
  HeadingContent.prototype.text_61zpoe$ = Tag.prototype.text_61zpoe$;
  HeadingContent.prototype.text_3p81yu$ = Tag.prototype.text_3p81yu$;
  HeadingContent.prototype.entity_ws8or7$ = Tag.prototype.entity_ws8or7$;
  InteractiveContent.prototype.unaryPlus_lvwjq6$ = Tag.prototype.unaryPlus_lvwjq6$;
  InteractiveContent.prototype.unaryPlus_pdl1vz$ = Tag.prototype.unaryPlus_pdl1vz$;
  InteractiveContent.prototype.text_61zpoe$ = Tag.prototype.text_61zpoe$;
  InteractiveContent.prototype.text_3p81yu$ = Tag.prototype.text_3p81yu$;
  InteractiveContent.prototype.entity_ws8or7$ = Tag.prototype.entity_ws8or7$;
  MetaDataContent.prototype.unaryPlus_lvwjq6$ = Tag.prototype.unaryPlus_lvwjq6$;
  MetaDataContent.prototype.unaryPlus_pdl1vz$ = Tag.prototype.unaryPlus_pdl1vz$;
  MetaDataContent.prototype.text_61zpoe$ = Tag.prototype.text_61zpoe$;
  MetaDataContent.prototype.text_3p81yu$ = Tag.prototype.text_3p81yu$;
  MetaDataContent.prototype.entity_ws8or7$ = Tag.prototype.entity_ws8or7$;
  SectioningContent.prototype.unaryPlus_lvwjq6$ = Tag.prototype.unaryPlus_lvwjq6$;
  SectioningContent.prototype.unaryPlus_pdl1vz$ = Tag.prototype.unaryPlus_pdl1vz$;
  SectioningContent.prototype.text_61zpoe$ = Tag.prototype.text_61zpoe$;
  SectioningContent.prototype.text_3p81yu$ = Tag.prototype.text_3p81yu$;
  SectioningContent.prototype.entity_ws8or7$ = Tag.prototype.entity_ws8or7$;
  FlowOrHeadingContent.prototype.unaryPlus_lvwjq6$ = Tag.prototype.unaryPlus_lvwjq6$;
  FlowOrHeadingContent.prototype.unaryPlus_pdl1vz$ = Tag.prototype.unaryPlus_pdl1vz$;
  FlowOrHeadingContent.prototype.text_61zpoe$ = Tag.prototype.text_61zpoe$;
  FlowOrHeadingContent.prototype.text_3p81yu$ = Tag.prototype.text_3p81yu$;
  FlowOrHeadingContent.prototype.entity_ws8or7$ = Tag.prototype.entity_ws8or7$;
  FlowOrMetaDataContent.prototype.unaryPlus_lvwjq6$ = Tag.prototype.unaryPlus_lvwjq6$;
  FlowOrMetaDataContent.prototype.unaryPlus_pdl1vz$ = Tag.prototype.unaryPlus_pdl1vz$;
  FlowOrMetaDataContent.prototype.text_61zpoe$ = Tag.prototype.text_61zpoe$;
  FlowOrMetaDataContent.prototype.text_3p81yu$ = Tag.prototype.text_3p81yu$;
  FlowOrMetaDataContent.prototype.entity_ws8or7$ = Tag.prototype.entity_ws8or7$;
  FlowOrInteractiveContent.prototype.unaryPlus_lvwjq6$ = Tag.prototype.unaryPlus_lvwjq6$;
  FlowOrInteractiveContent.prototype.unaryPlus_pdl1vz$ = Tag.prototype.unaryPlus_pdl1vz$;
  FlowOrInteractiveContent.prototype.text_61zpoe$ = Tag.prototype.text_61zpoe$;
  FlowOrInteractiveContent.prototype.text_3p81yu$ = Tag.prototype.text_3p81yu$;
  FlowOrInteractiveContent.prototype.entity_ws8or7$ = Tag.prototype.entity_ws8or7$;
  FlowOrPhrasingOrMetaDataContent.prototype.unaryPlus_lvwjq6$ = Tag.prototype.unaryPlus_lvwjq6$;
  FlowOrPhrasingOrMetaDataContent.prototype.unaryPlus_pdl1vz$ = Tag.prototype.unaryPlus_pdl1vz$;
  FlowOrPhrasingOrMetaDataContent.prototype.text_61zpoe$ = Tag.prototype.text_61zpoe$;
  FlowOrPhrasingOrMetaDataContent.prototype.text_3p81yu$ = Tag.prototype.text_3p81yu$;
  FlowOrPhrasingOrMetaDataContent.prototype.entity_ws8or7$ = Tag.prototype.entity_ws8or7$;
  SectioningOrFlowContent.prototype.unaryPlus_lvwjq6$ = Tag.prototype.unaryPlus_lvwjq6$;
  SectioningOrFlowContent.prototype.unaryPlus_pdl1vz$ = Tag.prototype.unaryPlus_pdl1vz$;
  SectioningOrFlowContent.prototype.text_61zpoe$ = Tag.prototype.text_61zpoe$;
  SectioningOrFlowContent.prototype.text_3p81yu$ = Tag.prototype.text_3p81yu$;
  SectioningOrFlowContent.prototype.entity_ws8or7$ = Tag.prototype.entity_ws8or7$;
  FlowOrInteractiveOrPhrasingContent.prototype.unaryPlus_lvwjq6$ = Tag.prototype.unaryPlus_lvwjq6$;
  FlowOrInteractiveOrPhrasingContent.prototype.unaryPlus_pdl1vz$ = Tag.prototype.unaryPlus_pdl1vz$;
  FlowOrInteractiveOrPhrasingContent.prototype.text_61zpoe$ = Tag.prototype.text_61zpoe$;
  FlowOrInteractiveOrPhrasingContent.prototype.text_3p81yu$ = Tag.prototype.text_3p81yu$;
  FlowOrInteractiveOrPhrasingContent.prototype.entity_ws8or7$ = Tag.prototype.entity_ws8or7$;
  HTMLTag.prototype.unaryPlus_lvwjq6$ = Tag.prototype.unaryPlus_lvwjq6$;
  HTMLTag.prototype.unaryPlus_pdl1vz$ = Tag.prototype.unaryPlus_pdl1vz$;
  HTMLTag.prototype.text_61zpoe$ = Tag.prototype.text_61zpoe$;
  HTMLTag.prototype.text_3p81yu$ = Tag.prototype.text_3p81yu$;
  HTMLTag.prototype.entity_ws8or7$ = Tag.prototype.entity_ws8or7$;
  HTMLStreamBuilder$UnsafeImpl$ObjectLiteral.prototype.unaryPlus_lvwjq6$ = Unsafe.prototype.unaryPlus_lvwjq6$;
  HTMLStreamBuilder$UnsafeImpl$ObjectLiteral.prototype.raw_61zpoe$ = Unsafe.prototype.raw_61zpoe$;
  HTMLStreamBuilder$UnsafeImpl$ObjectLiteral.prototype.raw_ws8or7$ = Unsafe.prototype.raw_ws8or7$;
  HTMLStreamBuilder$UnsafeImpl$ObjectLiteral.prototype.raw_3p81yu$ = Unsafe.prototype.raw_3p81yu$;
  HTMLStreamBuilder.prototype.onTagError_cjwpn3$ = TagConsumer.prototype.onTagError_cjwpn3$;
  emptyMap_0 = emptyMap();
  attributeStringString = new StringAttribute();
  attributeSetStringStringSet = new StringSetAttribute();
  attributeBooleanBoolean = new BooleanAttribute();
  attributeBooleanBooleanOnOff = new BooleanAttribute('on', 'off');
  attributeBooleanTicker = new TickerAttribute();
  attributeButtonFormEncTypeEnumButtonFormEncTypeValues = new EnumAttribute(buttonFormEncTypeValues);
  attributeButtonFormMethodEnumButtonFormMethodValues = new EnumAttribute(buttonFormMethodValues);
  attributeButtonTypeEnumButtonTypeValues = new EnumAttribute(buttonTypeValues);
  attributeCommandTypeEnumCommandTypeValues = new EnumAttribute(commandTypeValues);
  attributeDirEnumDirValues = new EnumAttribute(dirValues);
  attributeDraggableEnumDraggableValues = new EnumAttribute(draggableValues);
  attributeFormEncTypeEnumFormEncTypeValues = new EnumAttribute(formEncTypeValues);
  attributeFormMethodEnumFormMethodValues = new EnumAttribute(formMethodValues);
  attributeIframeSandboxEnumIframeSandboxValues = new EnumAttribute(iframeSandboxValues);
  attributeInputFormEncTypeEnumInputFormEncTypeValues = new EnumAttribute(inputFormEncTypeValues);
  attributeInputFormMethodEnumInputFormMethodValues = new EnumAttribute(inputFormMethodValues);
  attributeInputTypeEnumInputTypeValues = new EnumAttribute(inputTypeValues);
  attributeKeyGenKeyTypeEnumKeyGenKeyTypeValues = new EnumAttribute(keyGenKeyTypeValues);
  attributeRunAtEnumRunAtValues = new EnumAttribute(runAtValues);
  attributeTextAreaWrapEnumTextAreaWrapValues = new EnumAttribute(textAreaWrapValues);
  attributeThScopeEnumThScopeValues = new EnumAttribute(thScopeValues);
  var mapCapacity = Kotlin.kotlin.collections.mapCapacity_za3lpa$;
  var coerceAtLeast = Kotlin.kotlin.ranges.coerceAtLeast_dqglrj$;
  var LinkedHashMap_init_1 = Kotlin.kotlin.collections.LinkedHashMap_init_xf5xz2$;
  var $receiver = Dir$values();
  var capacity = coerceAtLeast(mapCapacity($receiver.length), 16);
  var destination = LinkedHashMap_init_1(capacity);
  var tmp$;
  for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
    var element = $receiver[tmp$];
    destination.put_xwzc9p$(element.realValue, element);
  }
  dirValues = destination;
  var $receiver_0 = Draggable$values();
  var capacity_0 = coerceAtLeast(mapCapacity($receiver_0.length), 16);
  var destination_0 = LinkedHashMap_init_1(capacity_0);
  var tmp$_0;
  for (tmp$_0 = 0; tmp$_0 !== $receiver_0.length; ++tmp$_0) {
    var element_0 = $receiver_0[tmp$_0];
    destination_0.put_xwzc9p$(element_0.realValue, element_0);
  }
  draggableValues = destination_0;
  var $receiver_1 = RunAt$values();
  var capacity_1 = coerceAtLeast(mapCapacity($receiver_1.length), 16);
  var destination_1 = LinkedHashMap_init_1(capacity_1);
  var tmp$_1;
  for (tmp$_1 = 0; tmp$_1 !== $receiver_1.length; ++tmp$_1) {
    var element_1 = $receiver_1[tmp$_1];
    destination_1.put_xwzc9p$(element_1.realValue, element_1);
  }
  runAtValues = destination_1;
  var $receiver_2 = AreaShape$values();
  var capacity_2 = coerceAtLeast(mapCapacity($receiver_2.length), 16);
  var destination_2 = LinkedHashMap_init_1(capacity_2);
  var tmp$_2;
  for (tmp$_2 = 0; tmp$_2 !== $receiver_2.length; ++tmp$_2) {
    var element_2 = $receiver_2[tmp$_2];
    destination_2.put_xwzc9p$(element_2.realValue, element_2);
  }
  areaShapeValues = destination_2;
  var $receiver_3 = ButtonFormEncType$values();
  var capacity_3 = coerceAtLeast(mapCapacity($receiver_3.length), 16);
  var destination_3 = LinkedHashMap_init_1(capacity_3);
  var tmp$_3;
  for (tmp$_3 = 0; tmp$_3 !== $receiver_3.length; ++tmp$_3) {
    var element_3 = $receiver_3[tmp$_3];
    destination_3.put_xwzc9p$(element_3.realValue, element_3);
  }
  buttonFormEncTypeValues = destination_3;
  var $receiver_4 = ButtonFormMethod$values();
  var capacity_4 = coerceAtLeast(mapCapacity($receiver_4.length), 16);
  var destination_4 = LinkedHashMap_init_1(capacity_4);
  var tmp$_4;
  for (tmp$_4 = 0; tmp$_4 !== $receiver_4.length; ++tmp$_4) {
    var element_4 = $receiver_4[tmp$_4];
    destination_4.put_xwzc9p$(element_4.realValue, element_4);
  }
  buttonFormMethodValues = destination_4;
  var $receiver_5 = ButtonType$values();
  var capacity_5 = coerceAtLeast(mapCapacity($receiver_5.length), 16);
  var destination_5 = LinkedHashMap_init_1(capacity_5);
  var tmp$_5;
  for (tmp$_5 = 0; tmp$_5 !== $receiver_5.length; ++tmp$_5) {
    var element_5 = $receiver_5[tmp$_5];
    destination_5.put_xwzc9p$(element_5.realValue, element_5);
  }
  buttonTypeValues = destination_5;
  var $receiver_6 = CommandType$values();
  var capacity_6 = coerceAtLeast(mapCapacity($receiver_6.length), 16);
  var destination_6 = LinkedHashMap_init_1(capacity_6);
  var tmp$_6;
  for (tmp$_6 = 0; tmp$_6 !== $receiver_6.length; ++tmp$_6) {
    var element_6 = $receiver_6[tmp$_6];
    destination_6.put_xwzc9p$(element_6.realValue, element_6);
  }
  commandTypeValues = destination_6;
  var $receiver_7 = FormEncType$values();
  var capacity_7 = coerceAtLeast(mapCapacity($receiver_7.length), 16);
  var destination_7 = LinkedHashMap_init_1(capacity_7);
  var tmp$_7;
  for (tmp$_7 = 0; tmp$_7 !== $receiver_7.length; ++tmp$_7) {
    var element_7 = $receiver_7[tmp$_7];
    destination_7.put_xwzc9p$(element_7.realValue, element_7);
  }
  formEncTypeValues = destination_7;
  var $receiver_8 = FormMethod$values();
  var capacity_8 = coerceAtLeast(mapCapacity($receiver_8.length), 16);
  var destination_8 = LinkedHashMap_init_1(capacity_8);
  var tmp$_8;
  for (tmp$_8 = 0; tmp$_8 !== $receiver_8.length; ++tmp$_8) {
    var element_8 = $receiver_8[tmp$_8];
    destination_8.put_xwzc9p$(element_8.realValue, element_8);
  }
  formMethodValues = destination_8;
  var $receiver_9 = IframeSandbox$values();
  var capacity_9 = coerceAtLeast(mapCapacity($receiver_9.length), 16);
  var destination_9 = LinkedHashMap_init_1(capacity_9);
  var tmp$_9;
  for (tmp$_9 = 0; tmp$_9 !== $receiver_9.length; ++tmp$_9) {
    var element_9 = $receiver_9[tmp$_9];
    destination_9.put_xwzc9p$(element_9.realValue, element_9);
  }
  iframeSandboxValues = destination_9;
  var $receiver_10 = InputType$values();
  var capacity_10 = coerceAtLeast(mapCapacity($receiver_10.length), 16);
  var destination_10 = LinkedHashMap_init_1(capacity_10);
  var tmp$_10;
  for (tmp$_10 = 0; tmp$_10 !== $receiver_10.length; ++tmp$_10) {
    var element_10 = $receiver_10[tmp$_10];
    destination_10.put_xwzc9p$(element_10.realValue, element_10);
  }
  inputTypeValues = destination_10;
  var $receiver_11 = InputFormEncType$values();
  var capacity_11 = coerceAtLeast(mapCapacity($receiver_11.length), 16);
  var destination_11 = LinkedHashMap_init_1(capacity_11);
  var tmp$_11;
  for (tmp$_11 = 0; tmp$_11 !== $receiver_11.length; ++tmp$_11) {
    var element_11 = $receiver_11[tmp$_11];
    destination_11.put_xwzc9p$(element_11.realValue, element_11);
  }
  inputFormEncTypeValues = destination_11;
  var $receiver_12 = InputFormMethod$values();
  var capacity_12 = coerceAtLeast(mapCapacity($receiver_12.length), 16);
  var destination_12 = LinkedHashMap_init_1(capacity_12);
  var tmp$_12;
  for (tmp$_12 = 0; tmp$_12 !== $receiver_12.length; ++tmp$_12) {
    var element_12 = $receiver_12[tmp$_12];
    destination_12.put_xwzc9p$(element_12.realValue, element_12);
  }
  inputFormMethodValues = destination_12;
  var $receiver_13 = KeyGenKeyType$values();
  var capacity_13 = coerceAtLeast(mapCapacity($receiver_13.length), 16);
  var destination_13 = LinkedHashMap_init_1(capacity_13);
  var tmp$_13;
  for (tmp$_13 = 0; tmp$_13 !== $receiver_13.length; ++tmp$_13) {
    var element_13 = $receiver_13[tmp$_13];
    destination_13.put_xwzc9p$(element_13.realValue, element_13);
  }
  keyGenKeyTypeValues = destination_13;
  var $receiver_14 = TextAreaWrap$values();
  var capacity_14 = coerceAtLeast(mapCapacity($receiver_14.length), 16);
  var destination_14 = LinkedHashMap_init_1(capacity_14);
  var tmp$_14;
  for (tmp$_14 = 0; tmp$_14 !== $receiver_14.length; ++tmp$_14) {
    var element_14 = $receiver_14[tmp$_14];
    destination_14.put_xwzc9p$(element_14.realValue, element_14);
  }
  textAreaWrapValues = destination_14;
  var $receiver_15 = ThScope$values();
  var capacity_15 = coerceAtLeast(mapCapacity($receiver_15.length), 16);
  var destination_15 = LinkedHashMap_init_1(capacity_15);
  var tmp$_15;
  for (tmp$_15 = 0; tmp$_15 !== $receiver_15.length; ++tmp$_15) {
    var element_15 = $receiver_15[tmp$_15];
    destination_15.put_xwzc9p$(element_15.realValue, element_15);
  }
  thScopeValues = destination_15;
  AVERAGE_PAGE_SIZE = 32768;
  escapeMap = mapOf([to(toBoxedChar(60), '&lt;'), to(toBoxedChar(62), '&gt;'), to(toBoxedChar(38), '&amp;'), to(toBoxedChar(34), '&quot;')]);
  letterRangeLowerCase = new CharRange(97, 122);
  letterRangeUpperCase = new CharRange(65, 90);
  digitRange = new CharRange(48, 57);
  return _;
}));

//# sourceMappingURL=kotlinx-html-js.js.map
