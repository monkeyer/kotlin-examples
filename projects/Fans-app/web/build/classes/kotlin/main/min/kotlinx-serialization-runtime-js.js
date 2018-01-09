(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'kotlinx-serialization-runtime-js'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'kotlinx-serialization-runtime-js'.");
    }
    root['kotlinx-serialization-runtime-js'] = factory(typeof this['kotlinx-serialization-runtime-js'] === 'undefined' ? {} : this['kotlinx-serialization-runtime-js'], kotlin);
  }
}(this, function (_, Kotlin) {
  'use strict';
  var Enum = Kotlin.kotlin.Enum;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var RuntimeException = Kotlin.kotlin.RuntimeException;
  var Any = Object;
  var toBoxedChar = Kotlin.toBoxedChar;
  var unboxChar = Kotlin.unboxChar;
  var Unit = Kotlin.kotlin.Unit;
  var last = Kotlin.kotlin.collections.last_2p1efm$;
  var get_lastIndex = Kotlin.kotlin.collections.get_lastIndex_55thoc$;
  var kotlin = Kotlin.kotlin;
  var IntRange = Kotlin.kotlin.ranges.IntRange;
  var ByteCompanionObject = Kotlin.kotlin.js.internal.ByteCompanionObject;
  var ShortCompanionObject = Kotlin.kotlin.js.internal.ShortCompanionObject;
  var IntCompanionObject = Kotlin.kotlin.js.internal.IntCompanionObject;
  var IllegalArgumentException = Kotlin.kotlin.IllegalArgumentException;
  var IllegalStateException = Kotlin.kotlin.IllegalStateException;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  var HashMap_init = Kotlin.kotlin.collections.HashMap_init_q3lmfv$;
  var toInt = Kotlin.kotlin.text.toInt_pdl1vz$;
  var Map$Entry = Kotlin.kotlin.collections.Map.Entry;
  var toList = Kotlin.kotlin.collections.toList_7wnvza$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var CharRange = Kotlin.kotlin.ranges.CharRange;
  var StringBuilder_init = Kotlin.kotlin.text.StringBuilder_init_za3lpa$;
  var trimStart = Kotlin.kotlin.text.trimStart_wqw3xr$;
  var isFinite = Kotlin.kotlin.isFinite_81szk$;
  var isFinite_0 = Kotlin.kotlin.isFinite_yrwdxr$;
  var iterator = Kotlin.kotlin.text.iterator_gw00vp$;
  var toByte = Kotlin.kotlin.text.toByte_pdl1vz$;
  var toShort = Kotlin.kotlin.text.toShort_pdl1vz$;
  var toLong = Kotlin.kotlin.text.toLong_pdl1vz$;
  var toDouble = Kotlin.kotlin.text.toDouble_pdl1vz$;
  var single = Kotlin.kotlin.text.single_gw00vp$;
  var StringBuilder = Kotlin.kotlin.text.StringBuilder;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var until = Kotlin.kotlin.ranges.until_dqglrj$;
  var Exception = Kotlin.kotlin.Exception;
  var IndexOutOfBoundsException = Kotlin.kotlin.IndexOutOfBoundsException;
  var NullPointerException = Kotlin.kotlin.NullPointerException;
  var toList_0 = Kotlin.kotlin.text.toList_gw00vp$;
  var toCharArray = Kotlin.kotlin.collections.toCharArray_rr68x$;
  var slice = Kotlin.kotlin.collections.slice_bq4su$;
  var get_js = Kotlin.kotlin.js.get_js_1yb8b7$;
  var joinToString = Kotlin.kotlin.collections.joinToString_fmv235$;
  KSerialClassKind.prototype = Object.create(Enum.prototype);
  KSerialClassKind.prototype.constructor = KSerialClassKind;
  SerializationException.prototype = Object.create(RuntimeException.prototype);
  SerializationException.prototype.constructor = SerializationException;
  MissingFieldException.prototype = Object.create(SerializationException.prototype);
  MissingFieldException.prototype.constructor = MissingFieldException;
  UnknownFieldException.prototype = Object.create(SerializationException.prototype);
  UnknownFieldException.prototype.constructor = UnknownFieldException;
  ElementValueOutput.prototype = Object.create(KOutput.prototype);
  ElementValueOutput.prototype.constructor = ElementValueOutput;
  ElementValueInput.prototype = Object.create(KInput.prototype);
  ElementValueInput.prototype.constructor = ElementValueInput;
  ArrayListSerializer.prototype = Object.create(ListLikeSerializer.prototype);
  ArrayListSerializer.prototype.constructor = ArrayListSerializer;
  ArrayListClassDesc.prototype = Object.create(ListLikeDesc.prototype);
  ArrayListClassDesc.prototype.constructor = ArrayListClassDesc;
  JSON$Mode.prototype = Object.create(Enum.prototype);
  JSON$Mode.prototype.constructor = JSON$Mode;
  JSON$JsonOutput.prototype = Object.create(ElementValueOutput.prototype);
  JSON$JsonOutput.prototype.constructor = JSON$JsonOutput;
  PrintWriter.prototype = Object.create(Writer.prototype);
  PrintWriter.prototype.constructor = PrintWriter;
  JSON$Composer.prototype = Object.create(PrintWriter.prototype);
  JSON$Composer.prototype.constructor = JSON$Composer;
  JSON$JsonInput.prototype = Object.create(ElementValueInput.prototype);
  JSON$JsonInput.prototype.constructor = JSON$JsonInput;
  StringWriter.prototype = Object.create(Writer.prototype);
  StringWriter.prototype.constructor = StringWriter;
  StringReader.prototype = Object.create(Reader.prototype);
  StringReader.prototype.constructor = StringReader;
  var ByteOrder$LITTLE_ENDIAN_instance;
  var ByteOrder$BIG_ENDIAN_instance;
  function KSerialClassKind(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function KSerialClassKind_initFields() {
    KSerialClassKind_initFields = function () {
    };
    KSerialClassKind$CLASS_instance = new KSerialClassKind('CLASS', 0);
    KSerialClassKind$OBJECT_instance = new KSerialClassKind('OBJECT', 1);
    KSerialClassKind$UNIT_instance = new KSerialClassKind('UNIT', 2);
    KSerialClassKind$SEALED_instance = new KSerialClassKind('SEALED', 3);
    KSerialClassKind$LIST_instance = new KSerialClassKind('LIST', 4);
    KSerialClassKind$SET_instance = new KSerialClassKind('SET', 5);
    KSerialClassKind$MAP_instance = new KSerialClassKind('MAP', 6);
    KSerialClassKind$ENTRY_instance = new KSerialClassKind('ENTRY', 7);
    KSerialClassKind$POLYMORPHIC_instance = new KSerialClassKind('POLYMORPHIC', 8);
    KSerialClassKind$PRIMITIVE_instance = new KSerialClassKind('PRIMITIVE', 9);
    KSerialClassKind$ENUM_instance = new KSerialClassKind('ENUM', 10);
  }
  var KSerialClassKind$CLASS_instance;
  function KSerialClassKind$CLASS_getInstance() {
    KSerialClassKind_initFields();
    return KSerialClassKind$CLASS_instance;
  }
  var KSerialClassKind$OBJECT_instance;
  function KSerialClassKind$OBJECT_getInstance() {
    KSerialClassKind_initFields();
    return KSerialClassKind$OBJECT_instance;
  }
  var KSerialClassKind$UNIT_instance;
  function KSerialClassKind$UNIT_getInstance() {
    KSerialClassKind_initFields();
    return KSerialClassKind$UNIT_instance;
  }
  var KSerialClassKind$SEALED_instance;
  function KSerialClassKind$SEALED_getInstance() {
    KSerialClassKind_initFields();
    return KSerialClassKind$SEALED_instance;
  }
  var KSerialClassKind$LIST_instance;
  function KSerialClassKind$LIST_getInstance() {
    KSerialClassKind_initFields();
    return KSerialClassKind$LIST_instance;
  }
  var KSerialClassKind$SET_instance;
  function KSerialClassKind$SET_getInstance() {
    KSerialClassKind_initFields();
    return KSerialClassKind$SET_instance;
  }
  var KSerialClassKind$MAP_instance;
  function KSerialClassKind$MAP_getInstance() {
    KSerialClassKind_initFields();
    return KSerialClassKind$MAP_instance;
  }
  var KSerialClassKind$ENTRY_instance;
  function KSerialClassKind$ENTRY_getInstance() {
    KSerialClassKind_initFields();
    return KSerialClassKind$ENTRY_instance;
  }
  var KSerialClassKind$POLYMORPHIC_instance;
  function KSerialClassKind$POLYMORPHIC_getInstance() {
    KSerialClassKind_initFields();
    return KSerialClassKind$POLYMORPHIC_instance;
  }
  var KSerialClassKind$PRIMITIVE_instance;
  function KSerialClassKind$PRIMITIVE_getInstance() {
    KSerialClassKind_initFields();
    return KSerialClassKind$PRIMITIVE_instance;
  }
  var KSerialClassKind$ENUM_instance;
  function KSerialClassKind$ENUM_getInstance() {
    KSerialClassKind_initFields();
    return KSerialClassKind$ENUM_instance;
  }
  KSerialClassKind.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: 'KSerialClassKind', interfaces: [Enum]};
  function KSerialClassKind$values() {
    return [KSerialClassKind$CLASS_getInstance(), KSerialClassKind$OBJECT_getInstance(), KSerialClassKind$UNIT_getInstance(), KSerialClassKind$SEALED_getInstance(), KSerialClassKind$LIST_getInstance(), KSerialClassKind$SET_getInstance(), KSerialClassKind$MAP_getInstance(), KSerialClassKind$ENTRY_getInstance(), KSerialClassKind$POLYMORPHIC_getInstance(), KSerialClassKind$PRIMITIVE_getInstance(), KSerialClassKind$ENUM_getInstance()];
  }
  KSerialClassKind.values = KSerialClassKind$values;
  function KSerialClassKind$valueOf(name) {
    switch (name) {
      case 'CLASS':
        return KSerialClassKind$CLASS_getInstance();
      case 'OBJECT':
        return KSerialClassKind$OBJECT_getInstance();
      case 'UNIT':
        return KSerialClassKind$UNIT_getInstance();
      case 'SEALED':
        return KSerialClassKind$SEALED_getInstance();
      case 'LIST':
        return KSerialClassKind$LIST_getInstance();
      case 'SET':
        return KSerialClassKind$SET_getInstance();
      case 'MAP':
        return KSerialClassKind$MAP_getInstance();
      case 'ENTRY':
        return KSerialClassKind$ENTRY_getInstance();
      case 'POLYMORPHIC':
        return KSerialClassKind$POLYMORPHIC_getInstance();
      case 'PRIMITIVE':
        return KSerialClassKind$PRIMITIVE_getInstance();
      case 'ENUM':
        return KSerialClassKind$ENUM_getInstance();
      default:Kotlin.throwISE('No enum constant kotlinx.serialization.KSerialClassKind.' + name);
    }
  }
  KSerialClassKind.valueOf_61zpoe$ = KSerialClassKind$valueOf;
  function KSerialClassDesc() {
  }
  KSerialClassDesc.prototype.getElementIndexOrThrow_61zpoe$ = function (name) {
    var i = this.getElementIndex_61zpoe$(name);
    if (i === KInput$Companion_getInstance().UNKNOWN_NAME)
      throw new SerializationException("Unknown name '" + name + "'");
    return i;
  };
  KSerialClassDesc.prototype.getAnnotationsForIndex_za3lpa$ = function (index) {
    return emptyList();
  };
  Object.defineProperty(KSerialClassDesc.prototype, 'associatedFieldsCount', {get: function () {
    return 0;
  }});
  KSerialClassDesc.$metadata$ = {kind: Kotlin.Kind.INTERFACE, simpleName: 'KSerialClassDesc', interfaces: []};
  function KSerialSaver() {
  }
  KSerialSaver.$metadata$ = {kind: Kotlin.Kind.INTERFACE, simpleName: 'KSerialSaver', interfaces: []};
  function KSerialLoader() {
  }
  KSerialLoader.$metadata$ = {kind: Kotlin.Kind.INTERFACE, simpleName: 'KSerialLoader', interfaces: []};
  function KSerializer() {
  }
  KSerializer.$metadata$ = {kind: Kotlin.Kind.INTERFACE, simpleName: 'KSerializer', interfaces: [KSerialLoader, KSerialSaver]};
  function SerializationException(s) {
    RuntimeException.call(this, s);
    this.name = 'SerializationException';
  }
  SerializationException.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: 'SerializationException', interfaces: [RuntimeException]};
  function MissingFieldException(fieldName) {
    SerializationException.call(this, 'Field ' + fieldName + ' is required, but it was missing');
    this.name = 'MissingFieldException';
  }
  MissingFieldException.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: 'MissingFieldException', interfaces: [SerializationException]};
  function UnknownFieldException(index) {
    SerializationException.call(this, 'Unknown field for index ' + index);
    this.name = 'UnknownFieldException';
  }
  UnknownFieldException.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: 'UnknownFieldException', interfaces: [SerializationException]};
  function KOutput() {
    this.context = null;
  }
  KOutput.prototype.write_jsy488$ = function (saver, obj) {
    saver.save_ejfkry$(this, obj);
  };
  KOutput.prototype.write_issdgt$ = defineInlineFunction('kotlinx-serialization-runtime-js.kotlinx.serialization.KOutput.write_issdgt$', wrapFunction(function () {
    var serializer = _.kotlinx.serialization.serializer_1yb8b7$;
    return function (T_0, isT, obj) {
      this.write_jsy488$(serializer(Kotlin.getKClass(T_0)), obj);
    };
  }));
  KOutput.prototype.writeNullable_20fw5n$ = function (saver, obj) {
    if (obj == null) {
      this.writeNullValue();
    }
     else {
      this.writeNotNullMark();
      saver.save_ejfkry$(this, obj);
    }
  };
  KOutput.prototype.writeValue_za3rmp$ = function (value) {
    var tmp$;
    var s = (tmp$ = this.context) != null ? tmp$.getSerializerByValue_issdgt$(value) : null;
    if (s != null)
      this.writeSerializableValue_jsy488$(s, value);
    else
      this.writeNonSerializableValue_za3rmp$(value);
  };
  KOutput.prototype.writeEnumValue_wbfx10$ = defineInlineFunction('kotlinx-serialization-runtime-js.kotlinx.serialization.KOutput.writeEnumValue_wbfx10$', function (T_0, isT, value) {
    this.writeEnumValue_9pl89b$(Kotlin.getKClass(T_0), value);
  });
  KOutput.prototype.writeSerializableValue_jsy488$ = function (saver, value) {
    saver.save_ejfkry$(this, value);
  };
  KOutput.prototype.writeNullableSerializableValue_20fw5n$ = function (saver, value) {
    if (value == null) {
      this.writeNullValue();
    }
     else {
      this.writeNotNullMark();
      this.writeSerializableValue_jsy488$(saver, value);
    }
  };
  KOutput.prototype.writeBegin_276rha$ = function (desc, typeParams) {
    return this;
  };
  KOutput.prototype.writeBegin_jqfc32$ = function (desc, collectionSize, typeParams) {
    return this.writeBegin_276rha$(desc, typeParams.slice());
  };
  KOutput.prototype.writeEnd_f6e2p$ = function (desc) {
  };
  KOutput.prototype.writeElementValue_j8uhfo$ = function (desc, index, value) {
    var tmp$;
    var s = (tmp$ = this.context) != null ? tmp$.getSerializerByValue_issdgt$(value) : null;
    if (s != null)
      this.writeSerializableElementValue_k4al2t$(desc, index, s, value);
    else
      this.writeNonSerializableElementValue_j8uhfo$(desc, index, value);
  };
  KOutput.prototype.writeEnumElementValue_v4fwjt$ = defineInlineFunction('kotlinx-serialization-runtime-js.kotlinx.serialization.KOutput.writeEnumElementValue_v4fwjt$', function (T_0, isT, desc, index, value) {
    this.writeEnumElementValue_bta54i$(desc, index, Kotlin.getKClass(T_0), value);
  });
  KOutput.prototype.writeSerializableElementValue_k4al2t$ = function (desc, index, saver, value) {
    if (this.writeElement_xvmgof$(desc, index))
      this.writeSerializableValue_jsy488$(saver, value);
  };
  KOutput.prototype.writeNullableSerializableElementValue_874a36$ = function (desc, index, saver, value) {
    if (this.writeElement_xvmgof$(desc, index))
      this.writeNullableSerializableValue_20fw5n$(saver, value);
  };
  KOutput.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: 'KOutput', interfaces: []};
  function KInput() {
    KInput$Companion_getInstance();
    this.context = null;
  }
  KInput.prototype.read_30y1fr$ = defineInlineFunction('kotlinx-serialization-runtime-js.kotlinx.serialization.KInput.read_30y1fr$', wrapFunction(function () {
    var serializer = _.kotlinx.serialization.serializer_1yb8b7$;
    return function (T_0, isT) {
      return this.read_2wvhm6$(serializer(Kotlin.getKClass(T_0)));
    };
  }));
  KInput.prototype.read_2wvhm6$ = function (loader) {
    return loader.load_ljkqvg$(this);
  };
  KInput.prototype.readNullable_xg8iph$ = function (loader) {
    return this.readNotNullMark() ? this.read_2wvhm6$(loader) : this.readNullValue();
  };
  KInput.prototype.readValue_lmshww$ = function (klass) {
    var tmp$, tmp$_0;
    var s = (tmp$ = this.context) != null ? tmp$.getSerializerByClass_lmshww$(klass) : null;
    return s != null ? this.readSerializableValue_2wvhm6$(s) : Kotlin.isType(tmp$_0 = this.readValue(), Any) ? tmp$_0 : Kotlin.throwCCE();
  };
  KInput.prototype.readEnumValue_nxd2ia$ = defineInlineFunction('kotlinx-serialization-runtime-js.kotlinx.serialization.KInput.readEnumValue_nxd2ia$', function (T_0, isT) {
    return this.readEnumValue_xvqrpl$(Kotlin.getKClass(T_0));
  });
  KInput.prototype.readSerializableValue_2wvhm6$ = function (loader) {
    return loader.load_ljkqvg$(this);
  };
  KInput.prototype.readNullableSerializableValue_xg8iph$ = function (loader) {
    return this.readNotNullMark() ? this.readSerializableValue_2wvhm6$(loader) : this.readNullValue();
  };
  KInput.prototype.readBegin_276rha$ = function (desc, typeParams) {
    return this;
  };
  KInput.prototype.readEnd_f6e2p$ = function (desc) {
  };
  function KInput$Companion() {
    KInput$Companion_instance = this;
    this.READ_DONE = -1;
    this.READ_ALL = -2;
    this.UNKNOWN_NAME = -3;
  }
  KInput$Companion.$metadata$ = {kind: Kotlin.Kind.OBJECT, simpleName: 'Companion', interfaces: []};
  var KInput$Companion_instance = null;
  function KInput$Companion_getInstance() {
    if (KInput$Companion_instance === null) {
      new KInput$Companion();
    }
    return KInput$Companion_instance;
  }
  KInput.prototype.readElementValue_lysmpq$ = function (desc, index, klass) {
    var tmp$;
    var s = (tmp$ = this.context) != null ? tmp$.getSerializerByClass_lmshww$(klass) : null;
    return s != null ? this.readSerializableElementValue_ovkjkf$(desc, index, s) : this.readElementValue_xvmgof$(desc, index);
  };
  KInput.prototype.readEnumElementValue_93looz$ = defineInlineFunction('kotlinx-serialization-runtime-js.kotlinx.serialization.KInput.readEnumElementValue_93looz$', function (T_0, isT, desc, index) {
    return this.readEnumElementValue_61hxlg$(desc, index, Kotlin.getKClass(T_0));
  });
  KInput.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: 'KInput', interfaces: []};
  function ElementValueOutput() {
    KOutput.call(this);
  }
  ElementValueOutput.prototype.writeElement_xvmgof$ = function (desc, index) {
    return true;
  };
  ElementValueOutput.prototype.writeNotNullMark = function () {
  };
  ElementValueOutput.prototype.writeNonSerializableValue_za3rmp$ = function (value) {
    throw new SerializationException('"' + value + '"' + ' has no serializer');
  };
  ElementValueOutput.prototype.writeNullableValue_s8jyv4$ = function (value) {
    if (value == null) {
      this.writeNullValue();
    }
     else {
      this.writeNotNullMark();
      this.writeValue_za3rmp$(value);
    }
  };
  ElementValueOutput.prototype.writeNullValue = function () {
    throw new SerializationException('null is not supported');
  };
  ElementValueOutput.prototype.writeUnitValue = function () {
    var output = this.writeBegin_276rha$(UnitSerializer_getInstance().serialClassDesc, []);
    output.writeEnd_f6e2p$(UnitSerializer_getInstance().serialClassDesc);
  };
  ElementValueOutput.prototype.writeBooleanValue_6taknv$ = function (value) {
    this.writeValue_za3rmp$(value);
  };
  ElementValueOutput.prototype.writeByteValue_s8j3t7$ = function (value) {
    this.writeValue_za3rmp$(value);
  };
  ElementValueOutput.prototype.writeShortValue_mq22fl$ = function (value) {
    this.writeValue_za3rmp$(value);
  };
  ElementValueOutput.prototype.writeIntValue_za3lpa$ = function (value) {
    this.writeValue_za3rmp$(value);
  };
  ElementValueOutput.prototype.writeLongValue_s8cxhz$ = function (value) {
    this.writeValue_za3rmp$(value);
  };
  ElementValueOutput.prototype.writeFloatValue_mx4ult$ = function (value) {
    this.writeValue_za3rmp$(value);
  };
  ElementValueOutput.prototype.writeDoubleValue_14dthe$ = function (value) {
    this.writeValue_za3rmp$(value);
  };
  ElementValueOutput.prototype.writeCharValue_s8itvh$ = function (value) {
    this.writeValue_za3rmp$(toBoxedChar(value));
  };
  ElementValueOutput.prototype.writeStringValue_61zpoe$ = function (value) {
    this.writeValue_za3rmp$(value);
  };
  ElementValueOutput.prototype.writeEnumValue_9pl89b$ = function (enumClass, value) {
    this.writeValue_za3rmp$(value);
  };
  ElementValueOutput.prototype.writeNonSerializableElementValue_j8uhfo$ = function (desc, index, value) {
    if (this.writeElement_xvmgof$(desc, index))
      this.writeValue_za3rmp$(value);
  };
  ElementValueOutput.prototype.writeNullableElementValue_sdckn1$ = function (desc, index, value) {
    if (this.writeElement_xvmgof$(desc, index))
      this.writeNullableValue_s8jyv4$(value);
  };
  ElementValueOutput.prototype.writeUnitElementValue_xvmgof$ = function (desc, index) {
    if (this.writeElement_xvmgof$(desc, index))
      this.writeUnitValue();
  };
  ElementValueOutput.prototype.writeBooleanElementValue_gw9ugo$ = function (desc, index, value) {
    if (this.writeElement_xvmgof$(desc, index))
      this.writeBooleanValue_6taknv$(value);
  };
  ElementValueOutput.prototype.writeByteElementValue_sdbpl4$ = function (desc, index, value) {
    if (this.writeElement_xvmgof$(desc, index))
      this.writeByteValue_s8j3t7$(value);
  };
  ElementValueOutput.prototype.writeShortElementValue_quoth0$ = function (desc, index, value) {
    if (this.writeElement_xvmgof$(desc, index))
      this.writeShortValue_mq22fl$(value);
  };
  ElementValueOutput.prototype.writeIntElementValue_j8ubi9$ = function (desc, index, value) {
    if (this.writeElement_xvmgof$(desc, index))
      this.writeIntValue_za3lpa$(value);
  };
  ElementValueOutput.prototype.writeLongElementValue_sd5j9w$ = function (desc, index, value) {
    if (this.writeElement_xvmgof$(desc, index))
      this.writeLongValue_s8cxhz$(value);
  };
  ElementValueOutput.prototype.writeFloatElementValue_r1rln8$ = function (desc, index, value) {
    if (this.writeElement_xvmgof$(desc, index))
      this.writeFloatValue_mx4ult$(value);
  };
  ElementValueOutput.prototype.writeDoubleElementValue_cy908x$ = function (desc, index, value) {
    if (this.writeElement_xvmgof$(desc, index))
      this.writeDoubleValue_14dthe$(value);
  };
  ElementValueOutput.prototype.writeCharElementValue_sdbfne$ = function (desc, index, value) {
    if (this.writeElement_xvmgof$(desc, index))
      this.writeCharValue_s8itvh$(value);
  };
  ElementValueOutput.prototype.writeStringElementValue_k4mjep$ = function (desc, index, value) {
    if (this.writeElement_xvmgof$(desc, index))
      this.writeStringValue_61zpoe$(value);
  };
  ElementValueOutput.prototype.writeEnumElementValue_bta54i$ = function (desc, index, enumClass, value) {
    if (this.writeElement_xvmgof$(desc, index))
      this.writeEnumValue_9pl89b$(enumClass, value);
  };
  ElementValueOutput.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: 'ElementValueOutput', interfaces: [KOutput]};
  function ElementValueInput() {
    KInput.call(this);
  }
  ElementValueInput.prototype.readElement_f6e2p$ = function (desc) {
    return KInput$Companion_getInstance().READ_ALL;
  };
  ElementValueInput.prototype.readNotNullMark = function () {
    return true;
  };
  ElementValueInput.prototype.readNullValue = function () {
    return null;
  };
  ElementValueInput.prototype.readValue = function () {
    throw new SerializationException('Any type is not supported');
  };
  ElementValueInput.prototype.readNullableValue = function () {
    return this.readNotNullMark() ? this.readValue() : this.readNullValue();
  };
  ElementValueInput.prototype.readUnitValue = function () {
    var reader = this.readBegin_276rha$(UnitSerializer_getInstance().serialClassDesc, []);
    reader.readEnd_f6e2p$(UnitSerializer_getInstance().serialClassDesc);
  };
  ElementValueInput.prototype.readBooleanValue = function () {
    var tmp$;
    return typeof (tmp$ = this.readValue()) === 'boolean' ? tmp$ : Kotlin.throwCCE();
  };
  ElementValueInput.prototype.readByteValue = function () {
    var tmp$;
    return typeof (tmp$ = this.readValue()) === 'number' ? tmp$ : Kotlin.throwCCE();
  };
  ElementValueInput.prototype.readShortValue = function () {
    var tmp$;
    return typeof (tmp$ = this.readValue()) === 'number' ? tmp$ : Kotlin.throwCCE();
  };
  ElementValueInput.prototype.readIntValue = function () {
    var tmp$;
    return typeof (tmp$ = this.readValue()) === 'number' ? tmp$ : Kotlin.throwCCE();
  };
  ElementValueInput.prototype.readLongValue = function () {
    var tmp$;
    return Kotlin.isType(tmp$ = this.readValue(), Kotlin.Long) ? tmp$ : Kotlin.throwCCE();
  };
  ElementValueInput.prototype.readFloatValue = function () {
    var tmp$;
    return typeof (tmp$ = this.readValue()) === 'number' ? tmp$ : Kotlin.throwCCE();
  };
  ElementValueInput.prototype.readDoubleValue = function () {
    var tmp$;
    return typeof (tmp$ = this.readValue()) === 'number' ? tmp$ : Kotlin.throwCCE();
  };
  ElementValueInput.prototype.readCharValue = function () {
    var tmp$;
    return unboxChar(Kotlin.isChar(tmp$ = this.readValue()) ? tmp$ : Kotlin.throwCCE());
  };
  ElementValueInput.prototype.readStringValue = function () {
    var tmp$;
    return typeof (tmp$ = this.readValue()) === 'string' ? tmp$ : Kotlin.throwCCE();
  };
  ElementValueInput.prototype.readEnumValue_xvqrpl$ = function (enumClass) {
    var tmp$;
    return Kotlin.isType(tmp$ = this.readValue(), Enum) ? tmp$ : Kotlin.throwCCE();
  };
  ElementValueInput.prototype.readElementValue_xvmgof$ = function (desc, index) {
    return this.readValue();
  };
  ElementValueInput.prototype.readNullableElementValue_xvmgof$ = function (desc, index) {
    return this.readNullableValue();
  };
  ElementValueInput.prototype.readUnitElementValue_xvmgof$ = function (desc, index) {
    this.readUnitValue();
  };
  ElementValueInput.prototype.readBooleanElementValue_xvmgof$ = function (desc, index) {
    return this.readBooleanValue();
  };
  ElementValueInput.prototype.readByteElementValue_xvmgof$ = function (desc, index) {
    return this.readByteValue();
  };
  ElementValueInput.prototype.readShortElementValue_xvmgof$ = function (desc, index) {
    return this.readShortValue();
  };
  ElementValueInput.prototype.readIntElementValue_xvmgof$ = function (desc, index) {
    return this.readIntValue();
  };
  ElementValueInput.prototype.readLongElementValue_xvmgof$ = function (desc, index) {
    return this.readLongValue();
  };
  ElementValueInput.prototype.readFloatElementValue_xvmgof$ = function (desc, index) {
    return this.readFloatValue();
  };
  ElementValueInput.prototype.readDoubleElementValue_xvmgof$ = function (desc, index) {
    return this.readDoubleValue();
  };
  ElementValueInput.prototype.readCharElementValue_xvmgof$ = function (desc, index) {
    return this.readCharValue();
  };
  ElementValueInput.prototype.readStringElementValue_xvmgof$ = function (desc, index) {
    return this.readStringValue();
  };
  ElementValueInput.prototype.readEnumElementValue_61hxlg$ = function (desc, index, enumClass) {
    return this.readEnumValue_xvqrpl$(enumClass);
  };
  ElementValueInput.prototype.readSerializableElementValue_ovkjkf$ = function (desc, index, loader) {
    return this.readSerializableValue_2wvhm6$(loader);
  };
  ElementValueInput.prototype.readNullableSerializableElementValue_3ohjxu$ = function (desc, index, loader) {
    return this.readNullableSerializableValue_xg8iph$(loader);
  };
  ElementValueInput.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: 'ElementValueInput', interfaces: [KInput]};
  var Mapper_instance = null;
  var CBOR$Companion_instance = null;
  function PrimitiveDesc(name) {
    this.name_b89ulf$_0 = name;
    this.kind_b9s3rg$_0 = KSerialClassKind$PRIMITIVE_getInstance();
  }
  Object.defineProperty(PrimitiveDesc.prototype, 'name', {get: function () {
    return this.name_b89ulf$_0;
  }});
  Object.defineProperty(PrimitiveDesc.prototype, 'kind', {get: function () {
    return this.kind_b9s3rg$_0;
  }});
  PrimitiveDesc.prototype.getElementName_za3lpa$ = function (index) {
    throw new IllegalStateException('Primitives do not have fields');
  };
  PrimitiveDesc.prototype.getElementIndex_61zpoe$ = function (name) {
    throw new IllegalStateException('Primitives do not have fields');
  };
  PrimitiveDesc.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: 'PrimitiveDesc', interfaces: [KSerialClassDesc]};
  function UnitSerializer() {
    UnitSerializer_instance = this;
    this.serialClassDesc_nu93hb$_0 = new PrimitiveDesc('kotlin.Unit');
  }
  Object.defineProperty(UnitSerializer.prototype, 'serialClassDesc', {get: function () {
    return this.serialClassDesc_nu93hb$_0;
  }});
  UnitSerializer.prototype.save_ejfkry$ = function (output, obj) {
    output.writeUnitValue();
  };
  UnitSerializer.prototype.load_ljkqvg$ = function (input) {
    input.readUnitValue();
  };
  UnitSerializer.$metadata$ = {kind: Kotlin.Kind.OBJECT, simpleName: 'UnitSerializer', interfaces: [KSerializer]};
  var UnitSerializer_instance = null;
  function UnitSerializer_getInstance() {
    if (UnitSerializer_instance === null) {
      new UnitSerializer();
    }
    return UnitSerializer_instance;
  }
  function BooleanSerializer() {
    BooleanSerializer_instance = this;
    this.serialClassDesc_mis5rp$_0 = new PrimitiveDesc('kotlin.Boolean');
  }
  Object.defineProperty(BooleanSerializer.prototype, 'serialClassDesc', {get: function () {
    return this.serialClassDesc_mis5rp$_0;
  }});
  BooleanSerializer.prototype.save_ejfkry$ = function (output, obj) {
    output.writeBooleanValue_6taknv$(obj);
  };
  BooleanSerializer.prototype.load_ljkqvg$ = function (input) {
    return input.readBooleanValue();
  };
  BooleanSerializer.$metadata$ = {kind: Kotlin.Kind.OBJECT, simpleName: 'BooleanSerializer', interfaces: [KSerializer]};
  var BooleanSerializer_instance = null;
  function BooleanSerializer_getInstance() {
    if (BooleanSerializer_instance === null) {
      new BooleanSerializer();
    }
    return BooleanSerializer_instance;
  }
  var ByteSerializer_instance = null;
  var ShortSerializer_instance = null;
  function IntSerializer() {
    IntSerializer_instance = this;
    this.serialClassDesc_evqgaa$_0 = new PrimitiveDesc('kotlin.Int');
  }
  Object.defineProperty(IntSerializer.prototype, 'serialClassDesc', {get: function () {
    return this.serialClassDesc_evqgaa$_0;
  }});
  IntSerializer.prototype.save_ejfkry$ = function (output, obj) {
    output.writeIntValue_za3lpa$(obj);
  };
  IntSerializer.prototype.load_ljkqvg$ = function (input) {
    return input.readIntValue();
  };
  IntSerializer.$metadata$ = {kind: Kotlin.Kind.OBJECT, simpleName: 'IntSerializer', interfaces: [KSerializer]};
  var IntSerializer_instance = null;
  function IntSerializer_getInstance() {
    if (IntSerializer_instance === null) {
      new IntSerializer();
    }
    return IntSerializer_instance;
  }
  var LongSerializer_instance = null;
  var FloatSerializer_instance = null;
  var DoubleSerializer_instance = null;
  var CharSerializer_instance = null;
  function StringSerializer() {
    StringSerializer_instance = this;
    this.serialClassDesc_kxd9qk$_0 = new PrimitiveDesc('kotlin.String');
  }
  Object.defineProperty(StringSerializer.prototype, 'serialClassDesc', {get: function () {
    return this.serialClassDesc_kxd9qk$_0;
  }});
  StringSerializer.prototype.save_ejfkry$ = function (output, obj) {
    output.writeStringValue_61zpoe$(obj);
  };
  StringSerializer.prototype.load_ljkqvg$ = function (input) {
    return input.readStringValue();
  };
  StringSerializer.$metadata$ = {kind: Kotlin.Kind.OBJECT, simpleName: 'StringSerializer', interfaces: [KSerializer]};
  var StringSerializer_instance = null;
  function StringSerializer_getInstance() {
    if (StringSerializer_instance === null) {
      new StringSerializer();
    }
    return StringSerializer_instance;
  }
  function EnumDesc(name) {
    this.name_6oeq3z$_0 = name;
    this.kind_6mwgxy$_0 = KSerialClassKind$ENUM_getInstance();
  }
  function NullableSerializer(element) {
    this.element_0 = element;
  }
  Object.defineProperty(NullableSerializer.prototype, 'serialClassDesc', {get: function () {
    return this.element_0.serialClassDesc;
  }});
  NullableSerializer.prototype.save_ejfkry$ = function (output, obj) {
    if (obj != null) {
      output.writeNotNullMark();
      this.element_0.save_ejfkry$(output, obj);
    }
     else {
      output.writeNullValue();
    }
  };
  NullableSerializer.prototype.load_ljkqvg$ = function (input) {
    return input.readNotNullMark() ? this.element_0.load_ljkqvg$(input) : input.readNullValue();
  };
  NullableSerializer.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: 'NullableSerializer', interfaces: [KSerializer]};
  var SIZE_INDEX;
  function ListLikeSerializer(eSerializer) {
    this.eSerializer_jvghxu$_0 = eSerializer;
    this.typeParams_thbhbl$_0 = [this.eSerializer_jvghxu$_0];
  }
  Object.defineProperty(ListLikeSerializer.prototype, 'typeParams', {get: function () {
    return this.typeParams_thbhbl$_0;
  }});
  ListLikeSerializer.prototype.save_ejfkry$ = function (output, obj) {
    var size = this.objSize_wikn$(obj);
    var output_0 = output.writeBegin_jqfc32$(this.serialClassDesc, size, this.typeParams.slice());
    if (output_0.writeElement_xvmgof$(ArrayListClassDesc_getInstance(), SIZE_INDEX))
      output_0.writeIntValue_za3lpa$(size);
    var iterator = this.objIterator_wikn$(obj);
    for (var index = 1; index <= size; index++)
      output_0.writeSerializableElementValue_k4al2t$(ArrayListClassDesc_getInstance(), index, this.eSerializer_jvghxu$_0, iterator.next());
    output_0.writeEnd_f6e2p$(this.serialClassDesc);
  };
  ListLikeSerializer.prototype.load_ljkqvg$ = function (input) {
    var input_0 = input.readBegin_276rha$(this.serialClassDesc, this.typeParams.slice());
    var builder = this.builder();
    mainLoop: while (true) {
      var index = input_0.readElement_f6e2p$(this.serialClassDesc);
      if (index === KInput$Companion_getInstance().READ_ALL) {
        this.readAll_mwcc6t$_0(input_0, builder);
        break mainLoop;
      }
       else if (index === KInput$Companion_getInstance().READ_DONE)
        break mainLoop;
      else if (index === SIZE_INDEX)
        this.readSize_os2y47$_0(input_0, builder);
      else {
        if (this.builderSize_wili$(builder) === (index - 1 | 0))
          this.readItem_81xyun$_0(input_0, index, builder);
        else
          throw new SerializationException('Elements should be in order, unexpected index ' + index);
      }
    }
    input_0.readEnd_f6e2p$(this.serialClassDesc);
    return this.toResult_wili$(builder);
  };
  ListLikeSerializer.prototype.readSize_os2y47$_0 = function (input, builder) {
    var size = input.readIntElementValue_xvmgof$(ArrayListClassDesc_getInstance(), SIZE_INDEX);
    this.ensureCapacity_rk7bw8$(builder, size);
    return size;
  };
  ListLikeSerializer.prototype.readItem_81xyun$_0 = function (input, index, builder) {
    this.add_p422l$(builder, index - 1 | 0, input.readSerializableElementValue_ovkjkf$(this.serialClassDesc, index, this.eSerializer_jvghxu$_0));
  };
  ListLikeSerializer.prototype.readAll_mwcc6t$_0 = function (input, builder) {
    var size = this.readSize_os2y47$_0(input, builder);
    for (var index = 1; index <= size; index++)
      this.readItem_81xyun$_0(input, index, builder);
  };
  ListLikeSerializer.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: 'ListLikeSerializer', interfaces: [KSerializer]};
  function ArrayListSerializer(element) {
    ListLikeSerializer.call(this, element);
    this.serialClassDesc_37x55y$_0 = ArrayListClassDesc_getInstance();
  }
  Object.defineProperty(ArrayListSerializer.prototype, 'serialClassDesc', {get: function () {
    return this.serialClassDesc_37x55y$_0;
  }});
  ArrayListSerializer.prototype.objSize_wikn$ = function ($receiver) {
    return $receiver.size;
  };
  ArrayListSerializer.prototype.objIterator_wikn$ = function ($receiver) {
    return $receiver.iterator();
  };
  ArrayListSerializer.prototype.builder = function () {
    return ArrayList_init();
  };
  ArrayListSerializer.prototype.builderSize_wili$ = function ($receiver) {
    return $receiver.size;
  };
  ArrayListSerializer.prototype.toResult_wili$ = function ($receiver) {
    return $receiver;
  };
  ArrayListSerializer.prototype.ensureCapacity_rk7bw8$ = function ($receiver, size) {
    $receiver.ensureCapacity_za3lpa$(size);
  };
  ArrayListSerializer.prototype.add_p422l$ = function ($receiver, index, element) {
    $receiver.add_11rb$(element);
  };
  ArrayListSerializer.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: 'ArrayListSerializer', interfaces: [ListLikeSerializer]};
  var LinkedHashSet_init = Kotlin.kotlin.collections.LinkedHashSet_init_287e2$;
  var KEY_INDEX;
  var VALUE_INDEX;
  function ListLikeDesc() {
  }
  ListLikeDesc.prototype.getElementName_za3lpa$ = function (index) {
    return index === SIZE_INDEX ? 'size' : index.toString();
  };
  ListLikeDesc.prototype.getElementIndex_61zpoe$ = function (name) {
    return Kotlin.equals(name, 'size') ? SIZE_INDEX : toInt(name);
  };
  ListLikeDesc.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: 'ListLikeDesc', interfaces: [KSerialClassDesc]};
  var ArrayClassDesc_instance = null;
  function ArrayListClassDesc() {
    ArrayListClassDesc_instance = this;
    ListLikeDesc.call(this);
  }
  Object.defineProperty(ArrayListClassDesc.prototype, 'name', {get: function () {
    return 'kotlin.collections.ArrayList';
  }});
  Object.defineProperty(ArrayListClassDesc.prototype, 'kind', {get: function () {
    return KSerialClassKind$LIST_getInstance();
  }});
  ArrayListClassDesc.$metadata$ = {kind: Kotlin.Kind.OBJECT, simpleName: 'ArrayListClassDesc', interfaces: [ListLikeDesc]};
  var ArrayListClassDesc_instance = null;
  function ArrayListClassDesc_getInstance() {
    if (ArrayListClassDesc_instance === null) {
      new ArrayListClassDesc();
    }
    return ArrayListClassDesc_instance;
  }
  var LinkedHashSetClassDesc_instance = null;
  var HashSetClassDesc_instance = null;
  var LinkedHashMapClassDesc_instance = null;
  var HashMapClassDesc_instance = null;
  var MapEntryClassDesc_instance = null;
  function SerialClassDescImpl(name) {
    this.name_l5inc6$_0 = name;
    this.names_gh1kah$_0 = ArrayList_init();
    this.annotations_4jiga3$_0 = ArrayList_init();
    this._indices_onkk0z$_0 = null;
  }
  Object.defineProperty(SerialClassDescImpl.prototype, 'name', {get: function () {
    return this.name_l5inc6$_0;
  }});
  Object.defineProperty(SerialClassDescImpl.prototype, 'kind', {get: function () {
    return KSerialClassKind$CLASS_getInstance();
  }});
  Object.defineProperty(SerialClassDescImpl.prototype, 'indices_jm5tq0$_0', {get: function () {
    var tmp$;
    return (tmp$ = this._indices_onkk0z$_0) != null ? tmp$ : this.buildIndices_585r2k$_0();
  }});
  SerialClassDescImpl.prototype.addElement_61zpoe$ = function (name) {
    this.names_gh1kah$_0.add_11rb$(name);
    this.annotations_4jiga3$_0.add_11rb$(ArrayList_init());
  };
  SerialClassDescImpl.prototype.pushAnnotation_yj921w$ = function (a) {
    last(this.annotations_4jiga3$_0).add_11rb$(a);
  };
  SerialClassDescImpl.prototype.getAnnotationsForIndex_za3lpa$ = function (index) {
    return toList(this.annotations_4jiga3$_0.get_za3lpa$(index));
  };
  Object.defineProperty(SerialClassDescImpl.prototype, 'associatedFieldsCount', {get: function () {
    return this.annotations_4jiga3$_0.size;
  }});
  SerialClassDescImpl.prototype.getElementName_za3lpa$ = function (index) {
    return this.names_gh1kah$_0.get_za3lpa$(index);
  };
  SerialClassDescImpl.prototype.getElementIndex_61zpoe$ = function (name) {
    var tmp$;
    return (tmp$ = this.indices_jm5tq0$_0.get_11rb$(name)) != null ? tmp$ : KInput$Companion_getInstance().UNKNOWN_NAME;
  };
  SerialClassDescImpl.prototype.buildIndices_585r2k$_0 = function () {
    var tmp$;
    var indices = HashMap_init();
    tmp$ = this.names_gh1kah$_0.size - 1 | 0;
    for (var i = 0; i <= tmp$; i++)
      indices.put_xwzc9p$(this.names_gh1kah$_0.get_za3lpa$(i), i);
    this._indices_onkk0z$_0 = indices;
    return indices;
  };
  SerialClassDescImpl.prototype.toString = function () {
    return this.name + this.names_gh1kah$_0;
  };
  SerialClassDescImpl.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: 'SerialClassDescImpl', interfaces: [KSerialClassDesc]};
  var HexConverter_instance = null;
  function JSON_0(unquoted, indented, indent, nonstrict, context) {
    JSON$Companion_getInstance();
    if (unquoted === void 0)
      unquoted = false;
    if (indented === void 0)
      indented = false;
    if (indent === void 0)
      indent = '    ';
    if (nonstrict === void 0)
      nonstrict = false;
    if (context === void 0)
      context = null;
    this.unquoted_0 = unquoted;
    this.indented_0 = indented;
    this.indent_0 = indent;
    this.nonstrict_8be2vx$ = nonstrict;
    this.context = context;
  }
  JSON_0.prototype.stringify_jsy488$ = function (saver, obj) {
    var sw = new StringWriter();
    var output = new JSON$JsonOutput(this, JSON$Mode$OBJ_getInstance(), new JSON$Composer(this, sw));
    output.write_jsy488$(saver, obj);
    return sw.toString();
  };
  JSON_0.prototype.stringify_issdgt$ = defineInlineFunction('kotlinx-serialization-runtime-js.kotlinx.serialization.json.JSON.stringify_issdgt$', wrapFunction(function () {
    var serializer = _.kotlinx.serialization.serializer_1yb8b7$;
    return function (T_0, isT, obj) {
      return this.stringify_jsy488$(serializer(Kotlin.getKClass(T_0)), obj);
    };
  }));
  JSON_0.prototype.parse_fgf4e8$ = function (loader, str) {
    var parser = new JSON$Parser(new StringReader(str));
    var input = new JSON$JsonInput(this, JSON$Mode$OBJ_getInstance(), parser);
    var result = input.read_2wvhm6$(loader);
    if (!(parser.curTc === JSON$Companion_getInstance().TC_EOF_0)) {
      var message = 'Shall parse complete string';
      throw new IllegalStateException(message.toString());
    }
    return result;
  };
  JSON_0.prototype.parse_3zqiyt$ = defineInlineFunction('kotlinx-serialization-runtime-js.kotlinx.serialization.json.JSON.parse_3zqiyt$', wrapFunction(function () {
    var serializer = _.kotlinx.serialization.serializer_1yb8b7$;
    return function (T_0, isT, str) {
      return this.parse_fgf4e8$(serializer(Kotlin.getKClass(T_0)), str);
    };
  }));
  function JSON$Companion() {
    JSON$Companion_instance = this;
    this.plain = new JSON_0();
    this.unquoted = new JSON_0(true);
    this.indented = new JSON_0(void 0, true);
    this.nonstrict = new JSON_0(void 0, void 0, void 0, true);
    this.NULL_0 = 'null';
    this.COMMA_0 = 44;
    this.COLON_0 = 58;
    this.BEGIN_OBJ_0 = 123;
    this.END_OBJ_0 = 125;
    this.BEGIN_LIST_0 = 91;
    this.END_LIST_0 = 93;
    this.STRING_0 = 34;
    this.STRING_ESC_0 = 92;
    this.INVALID_0 = Kotlin.toChar(0);
    this.UNICODE_ESC_0 = 117;
    this.TC_OTHER_0 = 0;
    this.TC_EOF_0 = 1;
    this.TC_INVALID_0 = 2;
    this.TC_WS_0 = 3;
    this.TC_COMMA_0 = 4;
    this.TC_COLON_0 = 5;
    this.TC_BEGIN_OBJ_0 = 6;
    this.TC_END_OBJ_0 = 7;
    this.TC_BEGIN_LIST_0 = 8;
    this.TC_END_LIST_0 = 9;
    this.TC_STRING_0 = 10;
    this.TC_STRING_ESC_0 = 11;
    this.TC_NULL_0 = 12;
    this.CTC_MAX_0 = 126;
    this.CTC_OFS_0 = 1;
    this.C2TC_0 = new Int8Array(this.CTC_MAX_0 + this.CTC_OFS_0 | 0);
    this.initC2TC_6t1wet$(-1, this.TC_EOF_0);
    for (var i = 0; i <= 32; i++)
      this.initC2TC_6t1wet$(i, this.TC_INVALID_0);
    this.initC2TC_6t1wet$(9, this.TC_WS_0);
    this.initC2TC_6t1wet$(10, this.TC_WS_0);
    this.initC2TC_6t1wet$(13, this.TC_WS_0);
    this.initC2TC_6t1wet$(32, this.TC_WS_0);
    this.initC2TC_o3jjt8$(this.COMMA_0, this.TC_COMMA_0);
    this.initC2TC_o3jjt8$(this.COLON_0, this.TC_COLON_0);
    this.initC2TC_o3jjt8$(this.BEGIN_OBJ_0, this.TC_BEGIN_OBJ_0);
    this.initC2TC_o3jjt8$(this.END_OBJ_0, this.TC_END_OBJ_0);
    this.initC2TC_o3jjt8$(this.BEGIN_LIST_0, this.TC_BEGIN_LIST_0);
    this.initC2TC_o3jjt8$(this.END_LIST_0, this.TC_END_LIST_0);
    this.initC2TC_o3jjt8$(this.STRING_0, this.TC_STRING_0);
    this.initC2TC_o3jjt8$(this.STRING_ESC_0, this.TC_STRING_ESC_0);
    this.C2ESC_MAX_0 = 93;
    this.ESC2C_MAX_0 = 117;
    this.C2ESC_0 = new Int8Array(this.C2ESC_MAX_0);
    this.ESC2C_0 = new Int8Array(this.ESC2C_MAX_0);
    for (var i_0 = 0; i_0 <= 31; i_0++)
      this.initC2ESC_6t1mh3$(i_0, this.UNICODE_ESC_0);
    this.initC2ESC_6t1mh3$(8, 98);
    this.initC2ESC_6t1mh3$(9, 116);
    this.initC2ESC_6t1mh3$(10, 110);
    this.initC2ESC_6t1mh3$(12, 102);
    this.initC2ESC_6t1mh3$(13, 114);
    this.initC2ESC_o3jtqy$(47, 47);
    this.initC2ESC_o3jtqy$(this.STRING_0, this.STRING_0);
    this.initC2ESC_o3jtqy$(this.STRING_ESC_0, this.STRING_ESC_0);
  }
  JSON$Companion.prototype.stringify_jsy488$ = function (saver, obj) {
    return this.plain.stringify_jsy488$(saver, obj);
  };
  JSON$Companion.prototype.stringify_issdgt$ = defineInlineFunction('kotlinx-serialization-runtime-js.kotlinx.serialization.json.JSON.Companion.stringify_issdgt$', wrapFunction(function () {
    var serializer = _.kotlinx.serialization.serializer_1yb8b7$;
    return function (T_0, isT, obj) {
      return this.stringify_jsy488$(serializer(Kotlin.getKClass(T_0)), obj);
    };
  }));
  JSON$Companion.prototype.parse_fgf4e8$ = function (loader, str) {
    return this.plain.parse_fgf4e8$(loader, str);
  };
  JSON$Companion.prototype.parse_3zqiyt$ = defineInlineFunction('kotlinx-serialization-runtime-js.kotlinx.serialization.json.JSON.Companion.parse_3zqiyt$', wrapFunction(function () {
    var serializer = _.kotlinx.serialization.serializer_1yb8b7$;
    return function (T_0, isT, str) {
      return this.parse_fgf4e8$(serializer(Kotlin.getKClass(T_0)), str);
    };
  }));
  JSON$Companion.prototype.initC2TC_6t1wet$ = function (c, cl) {
    this.C2TC_0[c + this.CTC_OFS_0 | 0] = cl;
  };
  JSON$Companion.prototype.initC2TC_o3jjt8$ = function (c, cl) {
    this.initC2TC_6t1wet$(c | 0, cl);
  };
  JSON$Companion.prototype.c2tc_za3lpa$ = function (c) {
    return c < this.CTC_MAX_0 ? this.C2TC_0[c + this.CTC_OFS_0 | 0] : this.TC_OTHER_0;
  };
  JSON$Companion.prototype.mustBeQuoted_0 = function (str) {
    var any$result;
    any$break: do {
      var tmp$;
      tmp$ = iterator(str);
      while (tmp$.hasNext()) {
        var element = unboxChar(tmp$.next());
        if (this.c2tc_za3lpa$(unboxChar(toBoxedChar(element)) | 0) !== this.TC_OTHER_0) {
          any$result = true;
          break any$break;
        }
      }
      any$result = false;
    }
     while (false);
    return any$result || Kotlin.equals(str, this.NULL_0);
  };
  JSON$Companion.prototype.initC2ESC_6t1mh3$ = function (c, esc) {
    this.C2ESC_0[c] = Kotlin.toByte(esc | 0);
    if (esc !== this.UNICODE_ESC_0)
      this.ESC2C_0[esc | 0] = Kotlin.toByte(c);
  };
  JSON$Companion.prototype.initC2ESC_o3jtqy$ = function (c, esc) {
    this.initC2ESC_6t1mh3$(c | 0, esc);
  };
  JSON$Companion.prototype.c2esc_s8itvh$ = function (c) {
    return unboxChar((c | 0) < this.C2ESC_MAX_0 ? Kotlin.toChar(this.C2ESC_0[c | 0]) : this.INVALID_0);
  };
  JSON$Companion.prototype.esc2c_za3lpa$ = function (c) {
    return unboxChar(c < this.ESC2C_MAX_0 ? Kotlin.toChar(this.ESC2C_0[c]) : this.INVALID_0);
  };
  JSON$Companion.prototype.hex_za3lpa$ = function (i) {
    var d = i & 15;
    return d < 10 ? Kotlin.toChar(d + (48 | 0) | 0) : Kotlin.toChar(d - 10 + (97 | 0) | 0);
  };
  JSON$Companion.prototype.switchMode_0 = function (mode, desc, typeParams) {
    var tmp$;
    tmp$ = desc.kind;
    if (Kotlin.equals(tmp$, KSerialClassKind$POLYMORPHIC_getInstance()))
      return JSON$Mode$POLY_getInstance();
    else if (Kotlin.equals(tmp$, KSerialClassKind$LIST_getInstance()) || Kotlin.equals(tmp$, KSerialClassKind$SET_getInstance()))
      return JSON$Mode$LIST_getInstance();
    else if (Kotlin.equals(tmp$, KSerialClassKind$MAP_getInstance())) {
      var keyKind = typeParams[0].serialClassDesc.kind;
      return keyKind === KSerialClassKind$PRIMITIVE_getInstance() || keyKind === KSerialClassKind$ENUM_getInstance() ? JSON$Mode$MAP_getInstance() : JSON$Mode$LIST_getInstance();
    }
     else if (Kotlin.equals(tmp$, KSerialClassKind$ENTRY_getInstance()))
      return mode === JSON$Mode$MAP_getInstance() ? JSON$Mode$ENTRY_getInstance() : JSON$Mode$OBJ_getInstance();
    else
      return JSON$Mode$OBJ_getInstance();
  };
  JSON$Companion.prototype.require_0 = function (condition, pos, msg) {
    if (!condition)
      this.fail_0(pos, msg());
  };
  JSON$Companion.prototype.fail_0 = function (pos, msg) {
    throw new IllegalArgumentException('JSON at ' + pos + ': ' + msg);
  };
  JSON$Companion.$metadata$ = {kind: Kotlin.Kind.OBJECT, simpleName: 'Companion', interfaces: []};
  var JSON$Companion_instance = null;
  function JSON$Companion_getInstance() {
    if (JSON$Companion_instance === null) {
      new JSON$Companion();
    }
    return JSON$Companion_instance;
  }
  function JSON$Mode(name, ordinal, begin, end) {
    Enum.call(this);
    this.begin = begin;
    this.end = end;
    this.name$ = name;
    this.ordinal$ = ordinal;
    this.beginTc = JSON$Companion_getInstance().c2tc_za3lpa$(this.begin | 0);
    this.endTc = JSON$Companion_getInstance().c2tc_za3lpa$(this.end | 0);
  }
  function JSON$Mode_initFields() {
    JSON$Mode_initFields = function () {
    };
    JSON$Mode$OBJ_instance = new JSON$Mode('OBJ', 0, JSON$Companion_getInstance().BEGIN_OBJ_0, JSON$Companion_getInstance().END_OBJ_0);
    JSON$Mode$LIST_instance = new JSON$Mode('LIST', 1, JSON$Companion_getInstance().BEGIN_LIST_0, JSON$Companion_getInstance().END_LIST_0);
    JSON$Mode$MAP_instance = new JSON$Mode('MAP', 2, JSON$Companion_getInstance().BEGIN_OBJ_0, JSON$Companion_getInstance().END_OBJ_0);
    JSON$Mode$POLY_instance = new JSON$Mode('POLY', 3, JSON$Companion_getInstance().BEGIN_LIST_0, JSON$Companion_getInstance().END_LIST_0);
    JSON$Mode$ENTRY_instance = new JSON$Mode('ENTRY', 4, JSON$Companion_getInstance().INVALID_0, JSON$Companion_getInstance().INVALID_0);
  }
  var JSON$Mode$OBJ_instance;
  function JSON$Mode$OBJ_getInstance() {
    JSON$Mode_initFields();
    return JSON$Mode$OBJ_instance;
  }
  var JSON$Mode$LIST_instance;
  function JSON$Mode$LIST_getInstance() {
    JSON$Mode_initFields();
    return JSON$Mode$LIST_instance;
  }
  var JSON$Mode$MAP_instance;
  function JSON$Mode$MAP_getInstance() {
    JSON$Mode_initFields();
    return JSON$Mode$MAP_instance;
  }
  var JSON$Mode$POLY_instance;
  function JSON$Mode$POLY_getInstance() {
    JSON$Mode_initFields();
    return JSON$Mode$POLY_instance;
  }
  var JSON$Mode$ENTRY_instance;
  function JSON$Mode$ENTRY_getInstance() {
    JSON$Mode_initFields();
    return JSON$Mode$ENTRY_instance;
  }
  JSON$Mode.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: 'Mode', interfaces: [Enum]};
  function JSON$Mode$values() {
    return [JSON$Mode$OBJ_getInstance(), JSON$Mode$LIST_getInstance(), JSON$Mode$MAP_getInstance(), JSON$Mode$POLY_getInstance(), JSON$Mode$ENTRY_getInstance()];
  }
  JSON$Mode.values = JSON$Mode$values;
  function JSON$Mode$valueOf(name) {
    switch (name) {
      case 'OBJ':
        return JSON$Mode$OBJ_getInstance();
      case 'LIST':
        return JSON$Mode$LIST_getInstance();
      case 'MAP':
        return JSON$Mode$MAP_getInstance();
      case 'POLY':
        return JSON$Mode$POLY_getInstance();
      case 'ENTRY':
        return JSON$Mode$ENTRY_getInstance();
      default:Kotlin.throwISE('No enum constant kotlinx.serialization.json.JSON.Mode.' + name);
    }
  }
  JSON$Mode.valueOf_61zpoe$ = JSON$Mode$valueOf;
  function JSON$JsonOutput($outer, mode, w) {
    this.$outer = $outer;
    ElementValueOutput.call(this);
    this.mode = mode;
    this.w = w;
    this.context = this.$outer.context;
    this.forceStr_0 = false;
  }
  JSON$JsonOutput.prototype.writeBegin_276rha$ = function (desc, typeParams) {
    var newMode = JSON$Companion_getInstance().switchMode_0(this.mode, desc, typeParams);
    if (newMode.begin !== JSON$Companion_getInstance().INVALID_0) {
      this.w.print_s8itvh$(newMode.begin);
      this.w.indent();
    }
    return this.mode === newMode ? this : new JSON$JsonOutput(this.$outer, newMode, this.w);
  };
  JSON$JsonOutput.prototype.writeEnd_f6e2p$ = function (desc) {
    if (this.mode.end !== JSON$Companion_getInstance().INVALID_0) {
      this.w.unIndent();
      this.w.nextItem();
      this.w.print_s8itvh$(this.mode.end);
    }
  };
  JSON$JsonOutput.prototype.writeElement_xvmgof$ = function (desc, index) {
    var tmp$;
    tmp$ = this.mode;
    if (Kotlin.equals(tmp$, JSON$Mode$LIST_getInstance()) || Kotlin.equals(tmp$, JSON$Mode$MAP_getInstance())) {
      if (index === 0)
        return false;
      if (index > 1)
        this.w.print_s8itvh$(JSON$Companion_getInstance().COMMA_0);
      this.w.nextItem();
    }
     else if (Kotlin.equals(tmp$, JSON$Mode$ENTRY_getInstance()) || Kotlin.equals(tmp$, JSON$Mode$POLY_getInstance())) {
      if (index === 0)
        this.forceStr_0 = true;
      if (index === 1) {
        this.w.print_s8itvh$(this.mode === JSON$Mode$ENTRY_getInstance() ? JSON$Companion_getInstance().COLON_0 : JSON$Companion_getInstance().COMMA_0);
        this.w.space();
        this.forceStr_0 = false;
      }
    }
     else {
      if (index > 0)
        this.w.print_s8itvh$(JSON$Companion_getInstance().COMMA_0);
      this.w.nextItem();
      this.writeStringValue_61zpoe$(desc.getElementName_za3lpa$(index));
      this.w.print_s8itvh$(JSON$Companion_getInstance().COLON_0);
      this.w.space();
    }
    return true;
  };
  JSON$JsonOutput.prototype.writeNullValue = function () {
    this.w.print_61zpoe$(JSON$Companion_getInstance().NULL_0);
  };
  JSON$JsonOutput.prototype.writeBooleanValue_6taknv$ = function (value) {
    if (this.forceStr_0)
      this.writeStringValue_61zpoe$(value.toString());
    else
      this.w.print_6taknv$(value);
  };
  JSON$JsonOutput.prototype.writeByteValue_s8j3t7$ = function (value) {
    if (this.forceStr_0)
      this.writeStringValue_61zpoe$(value.toString());
    else
      this.w.print_s8jyv4$(value);
  };
  JSON$JsonOutput.prototype.writeShortValue_mq22fl$ = function (value) {
    if (this.forceStr_0)
      this.writeStringValue_61zpoe$(value.toString());
    else
      this.w.print_s8jyv4$(value);
  };
  JSON$JsonOutput.prototype.writeIntValue_za3lpa$ = function (value) {
    if (this.forceStr_0)
      this.writeStringValue_61zpoe$(value.toString());
    else
      this.w.print_za3lpa$(value);
  };
  JSON$JsonOutput.prototype.writeLongValue_s8cxhz$ = function (value) {
    if (this.forceStr_0)
      this.writeStringValue_61zpoe$(value.toString());
    else
      this.w.print_s8cxhz$(value);
  };
  JSON$JsonOutput.prototype.writeFloatValue_mx4ult$ = function (value) {
    if (this.forceStr_0 || !isFinite(value))
      this.writeStringValue_61zpoe$(value.toString());
    else
      this.w.print_mx4ult$(value);
  };
  JSON$JsonOutput.prototype.writeDoubleValue_14dthe$ = function (value) {
    if (this.forceStr_0 || !isFinite_0(value))
      this.writeStringValue_61zpoe$(value.toString());
    else
      this.w.print_14dthe$(value);
  };
  JSON$JsonOutput.prototype.writeCharValue_s8itvh$ = function (value) {
    this.writeStringValue_61zpoe$(String.fromCharCode(value));
  };
  JSON$JsonOutput.prototype.writeStringValue_61zpoe$ = function (value) {
    var tmp$;
    if (this.$outer.unquoted_0 && !JSON$Companion_getInstance().mustBeQuoted_0(value)) {
      this.w.print_61zpoe$(value);
      return;
    }
    this.w.print_s8itvh$(JSON$Companion_getInstance().STRING_0);
    tmp$ = iterator(value);
    while (tmp$.hasNext()) {
      var c = unboxChar(tmp$.next());
      var esc = JSON$Companion_getInstance().c2esc_s8itvh$(c);
      if (esc === JSON$Companion_getInstance().INVALID_0)
        this.w.print_s8itvh$(c);
      else if (esc === JSON$Companion_getInstance().UNICODE_ESC_0) {
        this.w.print_s8itvh$(JSON$Companion_getInstance().STRING_ESC_0);
        this.w.print_s8itvh$(JSON$Companion_getInstance().UNICODE_ESC_0);
        var code = c | 0;
        this.w.print_s8itvh$(JSON$Companion_getInstance().hex_za3lpa$(code >> 12));
        this.w.print_s8itvh$(JSON$Companion_getInstance().hex_za3lpa$(code >> 8));
        this.w.print_s8itvh$(JSON$Companion_getInstance().hex_za3lpa$(code >> 4));
        this.w.print_s8itvh$(JSON$Companion_getInstance().hex_za3lpa$(code));
      }
       else {
        this.w.print_s8itvh$(JSON$Companion_getInstance().STRING_ESC_0);
        this.w.print_s8itvh$(esc);
      }
    }
    this.w.print_s8itvh$(JSON$Companion_getInstance().STRING_0);
  };
  JSON$JsonOutput.prototype.writeNonSerializableValue_za3rmp$ = function (value) {
    this.writeStringValue_61zpoe$(value.toString());
  };
  JSON$JsonOutput.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: 'JsonOutput', interfaces: [ElementValueOutput]};
  function JSON$Composer($outer, w) {
    this.$outer = $outer;
    PrintWriter.call(this, w);
    this.level = 0;
  }
  JSON$Composer.prototype.indent = function () {
    this.level = this.level + 1 | 0;
  };
  JSON$Composer.prototype.unIndent = function () {
    this.level = this.level - 1 | 0;
  };
  JSON$Composer.prototype.nextItem = function () {
    if (this.$outer.indented_0) {
      this.println();
      var times = this.level;
      this.$outer;
      var tmp$;
      tmp$ = times - 1 | 0;
      for (var index = 0; index <= tmp$; index++) {
        this.print_61zpoe$(this.$outer.indent_0);
      }
    }
  };
  JSON$Composer.prototype.space = function () {
    if (this.$outer.indented_0)
      this.print_s8itvh$(32);
  };
  JSON$Composer.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: 'Composer', interfaces: [PrintWriter]};
  function JSON$JsonInput($outer, mode, p) {
    this.$outer = $outer;
    ElementValueInput.call(this);
    this.mode = mode;
    this.p = p;
    this.curIndex = 0;
    this.entryIndex = 0;
    this.context = this.$outer.context;
  }
  function JSON$JsonInput$readBegin$lambda(closure$newMode, closure$desc) {
    return function () {
      return "Expected '" + String.fromCharCode(closure$newMode.begin) + ', kind: ' + closure$desc.kind + "'";
    };
  }
  JSON$JsonInput.prototype.readBegin_276rha$ = function (desc, typeParams) {
    var tmp$;
    var newMode = JSON$Companion_getInstance().switchMode_0(this.mode, desc, typeParams);
    if (newMode.begin !== JSON$Companion_getInstance().INVALID_0) {
      JSON$Companion_getInstance().require_0(this.p.curTc === newMode.beginTc, this.p.tokenPos, JSON$JsonInput$readBegin$lambda(newMode, desc));
      this.p.nextToken();
    }
    if (Kotlin.equals(newMode, JSON$Mode$LIST_getInstance()) || Kotlin.equals(newMode, JSON$Mode$MAP_getInstance()) || Kotlin.equals(newMode, JSON$Mode$POLY_getInstance()))
      tmp$ = new JSON$JsonInput(this.$outer, newMode, this.p);
    else
      tmp$ = this.mode === newMode ? this : new JSON$JsonInput(this.$outer, newMode, this.p);
    return tmp$;
  };
  function JSON$JsonInput$readEnd$lambda(this$JsonInput) {
    return function () {
      return "Expected '" + String.fromCharCode(this$JsonInput.mode.end) + "'";
    };
  }
  JSON$JsonInput.prototype.readEnd_f6e2p$ = function (desc) {
    if (this.mode.end !== JSON$Companion_getInstance().INVALID_0) {
      JSON$Companion_getInstance().require_0(this.p.curTc === this.mode.endTc, this.p.tokenPos, JSON$JsonInput$readEnd$lambda(this));
      this.p.nextToken();
    }
  };
  JSON$JsonInput.prototype.readNotNullMark = function () {
    return this.p.curTc !== JSON$Companion_getInstance().TC_NULL_0;
  };
  function JSON$JsonInput$readNullValue$lambda() {
    return "Expected 'null' literal";
  }
  JSON$JsonInput.prototype.readNullValue = function () {
    JSON$Companion_getInstance().require_0(this.p.curTc === JSON$Companion_getInstance().TC_NULL_0, this.p.tokenPos, JSON$JsonInput$readNullValue$lambda);
    this.p.nextToken();
    return null;
  };
  function JSON$JsonInput$readElement$lambda() {
    return "Expected ':'";
  }
  function JSON$JsonInput$readElement$lambda_0() {
    return "Expected ':'";
  }
  JSON$JsonInput.prototype.readElement_f6e2p$ = function (desc) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    while (true) {
      if (this.p.curTc === JSON$Companion_getInstance().TC_COMMA_0)
        this.p.nextToken();
      tmp$ = this.mode;
      if (Kotlin.equals(tmp$, JSON$Mode$LIST_getInstance()) || Kotlin.equals(tmp$, JSON$Mode$MAP_getInstance())) {
        if (!this.p.canBeginValue)
          return KInput$Companion_getInstance().READ_DONE;
        return this.curIndex = this.curIndex + 1 | 0, this.curIndex;
      }
       else if (Kotlin.equals(tmp$, JSON$Mode$POLY_getInstance())) {
        tmp$_1 = (tmp$_0 = this.entryIndex, this.entryIndex = tmp$_0 + 1 | 0, tmp$_0);
        if (tmp$_1 === 0)
          return 0;
        else if (tmp$_1 === 1)
          return 1;
        else {
          this.entryIndex = 0;
          return KInput$Companion_getInstance().READ_DONE;
        }
      }
       else if (Kotlin.equals(tmp$, JSON$Mode$ENTRY_getInstance())) {
        tmp$_3 = (tmp$_2 = this.entryIndex, this.entryIndex = tmp$_2 + 1 | 0, tmp$_2);
        if (tmp$_3 === 0)
          return 0;
        else if (tmp$_3 === 1) {
          JSON$Companion_getInstance().require_0(this.p.curTc === JSON$Companion_getInstance().TC_COLON_0, this.p.tokenPos, JSON$JsonInput$readElement$lambda);
          this.p.nextToken();
          return 1;
        }
         else {
          this.entryIndex = 0;
          return KInput$Companion_getInstance().READ_DONE;
        }
      }
       else {
        if (!this.p.canBeginValue)
          return KInput$Companion_getInstance().READ_DONE;
        var key = this.p.takeStr();
        JSON$Companion_getInstance().require_0(this.p.curTc === JSON$Companion_getInstance().TC_COLON_0, this.p.tokenPos, JSON$JsonInput$readElement$lambda_0);
        this.p.nextToken();
        var ind = desc.getElementIndex_61zpoe$(key);
        if (ind !== KInput$Companion_getInstance().UNKNOWN_NAME)
          return ind;
        if (!this.$outer.nonstrict_8be2vx$)
          throw new SerializationException('Strict JSON encountered unknown key: ' + key);
        else
          this.p.skipElement_8be2vx$();
      }
    }
  };
  JSON$JsonInput.prototype.readBooleanValue = function () {
    return Kotlin.equals(this.p.takeStr(), 'true');
  };
  JSON$JsonInput.prototype.readByteValue = function () {
    return toByte(this.p.takeStr());
  };
  JSON$JsonInput.prototype.readShortValue = function () {
    return toShort(this.p.takeStr());
  };
  JSON$JsonInput.prototype.readIntValue = function () {
    return toInt(this.p.takeStr());
  };
  JSON$JsonInput.prototype.readLongValue = function () {
    return toLong(this.p.takeStr());
  };
  JSON$JsonInput.prototype.readFloatValue = function () {
    return toDouble(this.p.takeStr());
  };
  JSON$JsonInput.prototype.readDoubleValue = function () {
    return toDouble(this.p.takeStr());
  };
  JSON$JsonInput.prototype.readCharValue = function () {
    return single(this.p.takeStr());
  };
  JSON$JsonInput.prototype.readStringValue = function () {
    return this.p.takeStr();
  };
  JSON$JsonInput.prototype.readEnumValue_xvqrpl$ = function (enumClass) {
    return enumFromName(enumClass, this.p.takeStr());
  };
  JSON$JsonInput.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: 'JsonInput', interfaces: [ElementValueInput]};
  function JSON$Parser(r) {
    this.r = r;
    this.charPos = 0;
    this.curChar = -1;
    this.tokenPos = 0;
    this.curTc = JSON$Companion_getInstance().TC_EOF_0;
    this.curStr = null;
    this.sb = new StringBuilder();
    this.nextChar_0();
    this.nextToken();
  }
  Object.defineProperty(JSON$Parser.prototype, 'canBeginValue', {get: function () {
    var tmp$;
    tmp$ = this.curTc;
    if (tmp$ === JSON$Companion_getInstance().TC_BEGIN_LIST_0 || tmp$ === JSON$Companion_getInstance().TC_BEGIN_OBJ_0 || tmp$ === JSON$Companion_getInstance().TC_OTHER_0 || tmp$ === JSON$Companion_getInstance().TC_STRING_0 || tmp$ === JSON$Companion_getInstance().TC_NULL_0)
      return true;
    else
      return false;
  }});
  JSON$Parser.prototype.takeStr = function () {
    var tmp$;
    var prevStr = (tmp$ = this.curStr) != null ? tmp$ : JSON$Companion_getInstance().fail_0(this.tokenPos, 'Expected string or non-null literal');
    this.nextToken();
    return prevStr;
  };
  JSON$Parser.prototype.nextToken = function () {
    var tmp$;
    while (true) {
      this.tokenPos = this.charPos;
      this.curTc = JSON$Companion_getInstance().c2tc_za3lpa$(this.curChar);
      tmp$ = this.curTc;
      if (tmp$ === JSON$Companion_getInstance().TC_WS_0)
        this.nextChar_0();
      else if (tmp$ === JSON$Companion_getInstance().TC_OTHER_0) {
        this.nextLiteral_0();
        return;
      }
       else if (tmp$ === JSON$Companion_getInstance().TC_STRING_0) {
        this.nextString_0();
        return;
      }
       else {
        this.nextChar_0();
        this.curStr = null;
        return;
      }
    }
  };
  JSON$Parser.prototype.nextChar_0 = function () {
    this.curChar = this.r.read();
    this.charPos = this.charPos + 1 | 0;
  };
  JSON$Parser.prototype.nextLiteral_0 = function () {
    this.sb = new StringBuilder();
    while (true) {
      this.sb.append_s8itvh$(Kotlin.toChar(this.curChar));
      this.nextChar_0();
      if (JSON$Companion_getInstance().c2tc_za3lpa$(this.curChar) !== JSON$Companion_getInstance().TC_OTHER_0)
        break;
    }
    if (Kotlin.equals(JSON$Companion_getInstance().NULL_0, this.sb.toString())) {
      this.curStr = null;
      this.curTc = JSON$Companion_getInstance().TC_NULL_0;
    }
     else {
      this.curStr = this.sb.toString();
      this.curTc = JSON$Companion_getInstance().TC_OTHER_0;
    }
  };
  function JSON$Parser$nextString$lambda() {
    return 'Unexpected end after escape char';
  }
  function JSON$Parser$nextString$lambda_0(this$Parser) {
    return function () {
      return "Invalid escaped char '" + String.fromCharCode(Kotlin.toChar(this$Parser.curChar)) + "'";
    };
  }
  JSON$Parser.prototype.nextString_0 = function () {
    var tmp$;
    this.sb = new StringBuilder();
    parse: while (true) {
      this.nextChar_0();
      tmp$ = JSON$Companion_getInstance().c2tc_za3lpa$(this.curChar);
      if (tmp$ === JSON$Companion_getInstance().TC_EOF_0)
        JSON$Companion_getInstance().fail_0(this.charPos, 'Unexpected end in string');
      else if (tmp$ === JSON$Companion_getInstance().TC_STRING_0) {
        this.nextChar_0();
        break parse;
      }
       else if (tmp$ === JSON$Companion_getInstance().TC_STRING_ESC_0) {
        this.nextChar_0();
        JSON$Companion_getInstance().require_0(this.curChar >= 0, this.charPos, JSON$Parser$nextString$lambda);
        if (this.curChar === (JSON$Companion_getInstance().UNICODE_ESC_0 | 0)) {
          this.sb.append_s8itvh$(Kotlin.toChar((this.hex_0() << 12) + (this.hex_0() << 8) + (this.hex_0() << 4) + this.hex_0() | 0));
        }
         else {
          var c = JSON$Companion_getInstance().esc2c_za3lpa$(this.curChar);
          JSON$Companion_getInstance().require_0(c !== JSON$Companion_getInstance().INVALID_0, this.charPos, JSON$Parser$nextString$lambda_0(this));
          this.sb.append_s8itvh$(c);
        }
      }
       else
        this.sb.append_s8itvh$(Kotlin.toChar(this.curChar));
    }
    this.curStr = this.sb.toString();
    this.curTc = JSON$Companion_getInstance().TC_STRING_0;
  };
  function JSON$Parser$hex$lambda() {
    return 'Unexpected end in unicode escape ';
  }
  JSON$Parser.prototype.hex_0 = function () {
    var tmp$, tmp$_0;
    this.nextChar_0();
    JSON$Companion_getInstance().require_0(this.curChar >= 0, this.charPos, JSON$Parser$hex$lambda);
    tmp$ = Kotlin.toChar(this.curChar);
    if ((new CharRange(48, 57)).contains_mef7kx$(tmp$))
      tmp$_0 = this.curChar - (48 | 0) | 0;
    else if ((new CharRange(97, 102)).contains_mef7kx$(tmp$))
      tmp$_0 = this.curChar - (97 | 0) + 10 | 0;
    else if ((new CharRange(65, 70)).contains_mef7kx$(tmp$))
      tmp$_0 = this.curChar - (65 | 0) + 10 | 0;
    else
      throw JSON$Companion_getInstance().fail_0(this.charPos, "Invalid hex char '" + String.fromCharCode(Kotlin.toChar(this.curChar)) + "' in unicode escape");
    return tmp$_0;
  };
  JSON$Parser.prototype.state_8be2vx$ = function () {
    return 'Parser(charPos=' + this.charPos + ', curChar=' + this.curChar + ', tokenPos=' + this.tokenPos + ', curTc=' + this.curTc + ', curStr=' + Kotlin.toString(this.curStr) + ')';
  };
  JSON$Parser.prototype.skipElement_8be2vx$ = function () {
    var tmp$;
    if (this.curTc !== JSON$Companion_getInstance().TC_BEGIN_OBJ_0 && this.curTc !== JSON$Companion_getInstance().TC_BEGIN_LIST_0) {
      this.nextToken();
      return;
    }
    var tokenStack = ArrayList_init();
    do {
      tmp$ = this.curTc;
      if (tmp$ === JSON$Companion_getInstance().TC_BEGIN_LIST_0 || tmp$ === JSON$Companion_getInstance().TC_BEGIN_OBJ_0)
        tokenStack.add_11rb$(this.curTc);
      else if (tmp$ === JSON$Companion_getInstance().TC_END_LIST_0) {
        if (last(tokenStack) !== JSON$Companion_getInstance().TC_BEGIN_LIST_0)
          throw new SerializationException('Invalid JSON at ' + this.charPos + ': found ] instead of }');
        tokenStack.removeAt_za3lpa$(tokenStack.size - 1 | 0);
      }
       else if (tmp$ === JSON$Companion_getInstance().TC_END_OBJ_0) {
        if (last(tokenStack) !== JSON$Companion_getInstance().TC_BEGIN_OBJ_0)
          throw new SerializationException('Invalid JSON at ' + this.charPos + ': found } instead of ]');
        tokenStack.removeAt_za3lpa$(tokenStack.size - 1 | 0);
      }
      this.nextToken();
      var isNotEmpty$result;
      isNotEmpty$result = !tokenStack.isEmpty();
    }
     while (isNotEmpty$result);
  };
  JSON$Parser.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: 'Parser', interfaces: []};
  JSON_0.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: 'JSON', interfaces: []};
  JSON_0.prototype.component1_0 = function () {
    return this.unquoted_0;
  };
  JSON_0.prototype.component2_0 = function () {
    return this.indented_0;
  };
  JSON_0.prototype.component3_0 = function () {
    return this.indent_0;
  };
  JSON_0.prototype.component4_8be2vx$ = function () {
    return this.nonstrict_8be2vx$;
  };
  JSON_0.prototype.component5 = function () {
    return this.context;
  };
  JSON_0.prototype.copy_tpjmgs$ = function (unquoted, indented, indent, nonstrict, context) {
    return new JSON_0(unquoted === void 0 ? this.unquoted_0 : unquoted, indented === void 0 ? this.indented_0 : indented, indent === void 0 ? this.indent_0 : indent, nonstrict === void 0 ? this.nonstrict_8be2vx$ : nonstrict, context === void 0 ? this.context : context);
  };
  JSON_0.prototype.toString = function () {
    return 'JSON(unquoted=' + Kotlin.toString(this.unquoted_0) + (', indented=' + Kotlin.toString(this.indented_0)) + (', indent=' + Kotlin.toString(this.indent_0)) + (', nonstrict=' + Kotlin.toString(this.nonstrict_8be2vx$)) + (', context=' + Kotlin.toString(this.context)) + ')';
  };
  JSON_0.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.unquoted_0) | 0;
    result = result * 31 + Kotlin.hashCode(this.indented_0) | 0;
    result = result * 31 + Kotlin.hashCode(this.indent_0) | 0;
    result = result * 31 + Kotlin.hashCode(this.nonstrict_8be2vx$) | 0;
    result = result * 31 + Kotlin.hashCode(this.context) | 0;
    return result;
  };
  JSON_0.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.unquoted_0, other.unquoted_0) && Kotlin.equals(this.indented_0, other.indented_0) && Kotlin.equals(this.indent_0, other.indent_0) && Kotlin.equals(this.nonstrict_8be2vx$, other.nonstrict_8be2vx$) && Kotlin.equals(this.context, other.context)))));
  };
  var ProtoNumberType$DEFAULT_instance;
  var ProtoNumberType$SIGNED_instance;
  var ProtoNumberType$FIXED_instance;
  var ProtoBuf$Varint_instance = null;
  var ProtoBuf$Companion_instance = null;
  var ByteBuffer$Companion_instance = null;
  var InputStream$Companion_instance = null;
  function Writer() {
  }
  Writer.prototype.write_za3lpa$ = function (ch) {
    this.write_8chfmy$(Kotlin.charArrayOf(Kotlin.toChar(ch)), 0, 1);
  };
  Writer.prototype.write_61zpoe$ = function (str) {
    this.write_8chfmy$(toCharArray(toList_0(str)), 0, str.length);
  };
  Writer.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: 'Writer', interfaces: []};
  function PrintWriter(w) {
    Writer.call(this);
    this.w = w;
  }
  PrintWriter.prototype.print_61zpoe$ = function (s) {
    this.w.write_61zpoe$(s);
  };
  PrintWriter.prototype.print_s8itvh$ = function (ch) {
    this.w.write_za3lpa$(ch | 0);
  };
  PrintWriter.prototype.print_mx4ult$ = function (value) {
    this.print_61zpoe$(value.toString());
  };
  PrintWriter.prototype.print_14dthe$ = function (value) {
    this.print_61zpoe$(value.toString());
  };
  PrintWriter.prototype.print_6taknv$ = function (value) {
    this.print_61zpoe$(value.toString());
  };
  PrintWriter.prototype.print_za3lpa$ = function (value) {
    this.print_61zpoe$(value.toString());
  };
  PrintWriter.prototype.print_s8cxhz$ = function (value) {
    this.print_61zpoe$(value.toString());
  };
  PrintWriter.prototype.print_s8jyv4$ = function (value) {
    this.print_61zpoe$(Kotlin.toString(value));
  };
  PrintWriter.prototype.println = function () {
    this.w.write_za3lpa$(10);
  };
  PrintWriter.prototype.println_61zpoe$ = function (s) {
    this.w.write_61zpoe$(s);
    this.println();
  };
  PrintWriter.prototype.println_s8itvh$ = function (ch) {
    this.w.write_za3lpa$(ch | 0);
    this.println();
  };
  PrintWriter.prototype.println_mx4ult$ = function (value) {
    this.println_61zpoe$(value.toString());
  };
  PrintWriter.prototype.println_14dthe$ = function (value) {
    this.println_61zpoe$(value.toString());
  };
  PrintWriter.prototype.println_6taknv$ = function (value) {
    this.println_61zpoe$(value.toString());
  };
  PrintWriter.prototype.println_za3lpa$ = function (value) {
    this.println_61zpoe$(value.toString());
  };
  PrintWriter.prototype.println_s8cxhz$ = function (value) {
    this.println_61zpoe$(value.toString());
  };
  PrintWriter.prototype.println_s8jyv4$ = function (value) {
    this.println_61zpoe$(Kotlin.toString(value));
  };
  PrintWriter.prototype.write_8chfmy$ = function (src, off, len) {
    this.w.write_8chfmy$(src, off, len);
  };
  PrintWriter.prototype.flush = function () {
  };
  PrintWriter.prototype.close = function () {
  };
  PrintWriter.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: 'PrintWriter', interfaces: [Writer]};
  function StringWriter() {
    Writer.call(this);
    this.sb_0 = new StringBuilder();
  }
  StringWriter.prototype.toString = function () {
    return this.sb_0.toString();
  };
  StringWriter.prototype.write_8chfmy$ = function (src, off, len) {
    var tmp$;
    tmp$ = slice(src, until(off, off + len | 0)).iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      this.sb_0.append_s8itvh$(unboxChar(element));
    }
  };
  StringWriter.prototype.flush = function () {
  };
  StringWriter.prototype.close = function () {
  };
  StringWriter.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: 'StringWriter', interfaces: [Writer]};
  function Reader() {
  }
  Reader.prototype.read = function () {
    var a = Kotlin.charArray(1);
    this.read_8chfmy$(a, 0, 1);
    return a[0] | 0;
  };
  Reader.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: 'Reader', interfaces: []};
  function StringReader(str) {
    Reader.call(this);
    this.str = str;
    this.position_0 = 0;
  }
  StringReader.prototype.read = function () {
    var tmp$;
    if (this.position_0 === this.str.length)
      return -1;
    else {
      return this.str.charCodeAt((tmp$ = this.position_0, this.position_0 = tmp$ + 1 | 0, tmp$)) | 0;
    }
  };
  StringReader.prototype.read_8chfmy$ = function (dst, off, len) {
    var tmp$;
    var cnt = 0;
    tmp$ = off + len | 0;
    for (var i = off; i < tmp$; i++) {
      var r = this.read();
      if (r === -1)
        return cnt;
      cnt = cnt + 1 | 0;
      dst[i] = Kotlin.toChar(r);
    }
    return len;
  };
  StringReader.prototype.close = function () {
  };
  StringReader.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: 'StringReader', interfaces: [Reader]};
  function serializer($receiver) {
    var tmp$, tmp$_0;
    tmp$_0 = Kotlin.isType(tmp$ = get_js($receiver).Companion, KSerializer) ? tmp$ : null;
    if (tmp$_0 == null) {
      throw new SerializationException("Can't locate companion serializer for class " + $receiver);
    }
    return tmp$_0;
  }
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  function enumFromName(enumClass, value) {
    var tmp$;
    return Kotlin.isType(tmp$ = get_js(enumClass).valueOf_61zpoe$(value), Enum) ? tmp$ : Kotlin.throwCCE();
  }
  var copyToArray = Kotlin.kotlin.collections.copyToArray;
  var package$kotlinx = _.kotlinx || (_.kotlinx = {});
  var package$io = package$kotlinx.io || (package$kotlinx.io = {});
  var package$serialization = package$kotlinx.serialization || (package$kotlinx.serialization = {});
  Object.defineProperty(KSerialClassKind, 'CLASS', {get: KSerialClassKind$CLASS_getInstance});
  Object.defineProperty(KSerialClassKind, 'OBJECT', {get: KSerialClassKind$OBJECT_getInstance});
  Object.defineProperty(KSerialClassKind, 'UNIT', {get: KSerialClassKind$UNIT_getInstance});
  Object.defineProperty(KSerialClassKind, 'SEALED', {get: KSerialClassKind$SEALED_getInstance});
  Object.defineProperty(KSerialClassKind, 'LIST', {get: KSerialClassKind$LIST_getInstance});
  Object.defineProperty(KSerialClassKind, 'SET', {get: KSerialClassKind$SET_getInstance});
  Object.defineProperty(KSerialClassKind, 'MAP', {get: KSerialClassKind$MAP_getInstance});
  Object.defineProperty(KSerialClassKind, 'ENTRY', {get: KSerialClassKind$ENTRY_getInstance});
  Object.defineProperty(KSerialClassKind, 'POLYMORPHIC', {get: KSerialClassKind$POLYMORPHIC_getInstance});
  Object.defineProperty(KSerialClassKind, 'PRIMITIVE', {get: KSerialClassKind$PRIMITIVE_getInstance});
  Object.defineProperty(KSerialClassKind, 'ENUM', {get: KSerialClassKind$ENUM_getInstance});
  package$serialization.KSerialClassKind = KSerialClassKind;
  package$serialization.KSerialClassDesc = KSerialClassDesc;
  package$serialization.KSerialSaver = KSerialSaver;
  package$serialization.KSerialLoader = KSerialLoader;
  package$serialization.KSerializer = KSerializer;
  package$serialization.SerializationException = SerializationException;
  package$serialization.MissingFieldException = MissingFieldException;
  package$serialization.UnknownFieldException = UnknownFieldException;
  package$serialization.serializer_1yb8b7$ = serializer;
  package$serialization.KOutput = KOutput;
  Object.defineProperty(KInput, 'Companion', {get: KInput$Companion_getInstance});
  package$serialization.KInput = KInput;
  package$serialization.ElementValueOutput = ElementValueOutput;
  package$serialization.ElementValueInput = ElementValueInput;
  var package$internal = package$serialization.internal || (package$serialization.internal = {});
  package$internal.PrimitiveDesc = PrimitiveDesc;
  Object.defineProperty(package$internal, 'UnitSerializer', {get: UnitSerializer_getInstance});
  Object.defineProperty(package$internal, 'BooleanSerializer', {get: BooleanSerializer_getInstance});
  Object.defineProperty(package$internal, 'IntSerializer', {get: IntSerializer_getInstance});
  Object.defineProperty(package$internal, 'StringSerializer', {get: StringSerializer_getInstance});
  package$internal.EnumDesc = EnumDesc;
  package$internal.NullableSerializer = NullableSerializer;
  package$internal.ListLikeSerializer = ListLikeSerializer;
  package$internal.ArrayListSerializer = ArrayListSerializer;
  package$internal.ListLikeDesc = ListLikeDesc;
  Object.defineProperty(package$internal, 'ArrayListClassDesc', {get: ArrayListClassDesc_getInstance});
  package$internal.SerialClassDescImpl = SerialClassDescImpl;
  Object.defineProperty(JSON_0, 'Companion', {get: JSON$Companion_getInstance});
  var package$json = package$serialization.json || (package$serialization.json = {});
  package$json.JSON = JSON_0;
  package$io.Writer = Writer;
  package$io.PrintWriter = PrintWriter;
  package$io.StringWriter = StringWriter;
  package$io.Reader = Reader;
  package$io.StringReader = StringReader;
  package$serialization.enumFromName_nim6t3$ = enumFromName;
  PrimitiveDesc.prototype.getElementIndexOrThrow_61zpoe$ = KSerialClassDesc.prototype.getElementIndexOrThrow_61zpoe$;
  PrimitiveDesc.prototype.getAnnotationsForIndex_za3lpa$ = KSerialClassDesc.prototype.getAnnotationsForIndex_za3lpa$;
  Object.defineProperty(PrimitiveDesc.prototype, 'associatedFieldsCount', Object.getOwnPropertyDescriptor(KSerialClassDesc.prototype, 'associatedFieldsCount'));
  EnumDesc.prototype.getElementIndexOrThrow_61zpoe$ = KSerialClassDesc.prototype.getElementIndexOrThrow_61zpoe$;
  EnumDesc.prototype.getAnnotationsForIndex_za3lpa$ = KSerialClassDesc.prototype.getAnnotationsForIndex_za3lpa$;
  Object.defineProperty(EnumDesc.prototype, 'associatedFieldsCount', Object.getOwnPropertyDescriptor(KSerialClassDesc.prototype, 'associatedFieldsCount'));
  ListLikeDesc.prototype.getElementIndexOrThrow_61zpoe$ = KSerialClassDesc.prototype.getElementIndexOrThrow_61zpoe$;
  ListLikeDesc.prototype.getAnnotationsForIndex_za3lpa$ = KSerialClassDesc.prototype.getAnnotationsForIndex_za3lpa$;
  Object.defineProperty(ListLikeDesc.prototype, 'associatedFieldsCount', Object.getOwnPropertyDescriptor(KSerialClassDesc.prototype, 'associatedFieldsCount'));
  SerialClassDescImpl.prototype.getElementIndexOrThrow_61zpoe$ = KSerialClassDesc.prototype.getElementIndexOrThrow_61zpoe$;
  SIZE_INDEX = 0;
  KEY_INDEX = 0;
  VALUE_INDEX = 1;
  return _;
}));

//# sourceMappingURL=kotlinx-serialization-runtime-js.js.map
