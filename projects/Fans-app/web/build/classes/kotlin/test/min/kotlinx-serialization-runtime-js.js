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
  var get_lastIndex = Kotlin.kotlin.collections.get_lastIndex_55thoc$;
  var kotlin = Kotlin.kotlin;
  var IntRange = Kotlin.kotlin.ranges.IntRange;
  var IntCompanionObject = Kotlin.kotlin.js.internal.IntCompanionObject;
  var IllegalArgumentException = Kotlin.kotlin.IllegalArgumentException;
  var IllegalStateException = Kotlin.kotlin.IllegalStateException;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  var HashMap_init = Kotlin.kotlin.collections.HashMap_init_q3lmfv$;
  var Map$Entry = Kotlin.kotlin.collections.Map.Entry;
  var toList = Kotlin.kotlin.collections.toList_7wnvza$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var CharRange = Kotlin.kotlin.ranges.CharRange;
  var StringBuilder_init = Kotlin.kotlin.text.StringBuilder_init_za3lpa$;
  var trimStart = Kotlin.kotlin.text.trimStart_wqw3xr$;
  var StringBuilder = Kotlin.kotlin.text.StringBuilder;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var Exception = Kotlin.kotlin.Exception;
  var IndexOutOfBoundsException = Kotlin.kotlin.IndexOutOfBoundsException;
  var NullPointerException = Kotlin.kotlin.NullPointerException;
  var get_js = Kotlin.kotlin.js.get_js_1yb8b7$;
  var joinToString = Kotlin.kotlin.collections.joinToString_fmv235$;
  var ByteOrder$LITTLE_ENDIAN_instance;
  var ByteOrder$BIG_ENDIAN_instance;
  var KSerialClassKind$CLASS_instance;
  var KSerialClassKind$OBJECT_instance;
  var KSerialClassKind$UNIT_instance;
  var KSerialClassKind$SEALED_instance;
  var KSerialClassKind$LIST_instance;
  var KSerialClassKind$SET_instance;
  var KSerialClassKind$MAP_instance;
  var KSerialClassKind$ENTRY_instance;
  var KSerialClassKind$POLYMORPHIC_instance;
  var KSerialClassKind$PRIMITIVE_instance;
  var KSerialClassKind$ENUM_instance;
  var KInput$Companion_instance = null;
  var Mapper_instance = null;
  var CBOR$Companion_instance = null;
  var UnitSerializer_instance = null;
  var BooleanSerializer_instance = null;
  var ByteSerializer_instance = null;
  var ShortSerializer_instance = null;
  var IntSerializer_instance = null;
  var LongSerializer_instance = null;
  var FloatSerializer_instance = null;
  var DoubleSerializer_instance = null;
  var CharSerializer_instance = null;
  var StringSerializer_instance = null;
  var SIZE_INDEX;
  var LinkedHashSet_init = Kotlin.kotlin.collections.LinkedHashSet_init_287e2$;
  var KEY_INDEX;
  var VALUE_INDEX;
  var ArrayClassDesc_instance = null;
  var ArrayListClassDesc_instance = null;
  var LinkedHashSetClassDesc_instance = null;
  var HashSetClassDesc_instance = null;
  var LinkedHashMapClassDesc_instance = null;
  var HashMapClassDesc_instance = null;
  var MapEntryClassDesc_instance = null;
  var HexConverter_instance = null;
  var JSON$Companion_instance = null;
  var JSON$Mode$OBJ_instance;
  var JSON$Mode$LIST_instance;
  var JSON$Mode$MAP_instance;
  var JSON$Mode$POLY_instance;
  var JSON$Mode$ENTRY_instance;
  var ProtoNumberType$DEFAULT_instance;
  var ProtoNumberType$SIGNED_instance;
  var ProtoNumberType$FIXED_instance;
  var ProtoBuf$Varint_instance = null;
  var ProtoBuf$Companion_instance = null;
  var ByteBuffer$Companion_instance = null;
  var InputStream$Companion_instance = null;
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var copyToArray = Kotlin.kotlin.collections.copyToArray;
  SIZE_INDEX = 0;
  KEY_INDEX = 0;
  VALUE_INDEX = 1;
}));

//# sourceMappingURL=kotlinx-serialization-runtime-js.js.map
