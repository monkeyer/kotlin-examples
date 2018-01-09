(function (_, Kotlin, $module$kotlinx_serialization_runtime_js) {
  'use strict';
  var equals = Kotlin.equals;
  var emptyMap = Kotlin.kotlin.collections.emptyMap_q3lmfv$;
  var filterNotNull = Kotlin.kotlin.collections.filterNotNull_m3lr2h$;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var ensureNotNull = Kotlin.ensureNotNull;
  var firstOrNull = Kotlin.kotlin.collections.firstOrNull_2p1efm$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var SerialClassDescImpl = $module$kotlinx_serialization_runtime_js.kotlinx.serialization.internal.SerialClassDescImpl;
  var KSerializer = $module$kotlinx_serialization_runtime_js.kotlinx.serialization.KSerializer;
  function parseDate(dateString) {
    return new Date(Date.parse(dateString));
  }
  function toReadableDateString($receiver) {
    return monthAsString($receiver) + ' ' + $receiver.getDate() + ', ' + $receiver.getFullYear();
  }
  function toReadableTimeString($receiver) {
    return readableHours($receiver).toString() + ':' + asMinutesString($receiver.getMinutes()) + ' ' + timeSuffix($receiver);
  }
  function monthAsString($receiver) {
    return months[$receiver.getMonth()];
  }
  var months;
  function toReadableDateTimeString($receiver) {
    return toReadableDateString($receiver) + ' ' + toReadableTimeString($receiver);
  }
  function toReadableString($receiver) {
    var tmp$, tmp$_0;
    var from = $receiver.component1(), to = $receiver.component2();
    var result = '';
    if (from.getDate() !== to.getDate() || from.getMonth() !== to.getMonth() || from.getFullYear() !== to.getFullYear()) {
      result += toReadableDateTimeString(from) + emDash + toReadableDateTimeString(to);
    }
     else {
      result += toReadableDateString(from) + ', ';
      var fromSuffix = timeSuffix(from);
      var toSuffix = timeSuffix(to);
      tmp$_0 = result;
      if (!equals(fromSuffix, toSuffix)) {
        tmp$ = toReadableTimeString(from) + emDash + '{' + toReadableTimeString(to) + '}';
      }
       else {
        tmp$ = readableHours(from).toString() + ':' + asMinutesString(from.getMinutes()) + emDash + (readableHours(to).toString() + ':' + asMinutesString(to.getMinutes()) + ' ' + fromSuffix);
      }
      result = tmp$_0 + tmp$;
    }
    return result;
  }
  function timeSuffix($receiver) {
    return (($receiver.getHours() + 11 | 0) / 12 | 0) === 1 ? 'a.m.' : 'p.m.';
  }
  function readableHours($receiver) {
    return ($receiver.getHours() + 11 | 0) % 12 + 1 | 0;
  }
  function asMinutesString($receiver) {
    return $receiver < 10 ? '0' + $receiver : $receiver.toString();
  }
  var emDash;
  function SessionModel(id, title, category, description, startsAt, endsAt, room, speakers) {
    SessionModel$Companion_getInstance();
    this.id = id;
    this.title = title;
    this.category = category;
    this.description = description;
    this.startsAt = startsAt;
    this.endsAt = endsAt;
    this.room = room;
    this.speakers = speakers;
  }
  function SessionModel$Companion() {
    SessionModel$Companion_instance = this;
  }
  function SessionModel$Companion$forSession$lambda(closure$speakerMap) {
    return function (id) {
      return closure$speakerMap.get_11rb$(id);
    };
  }
  function SessionModel$Companion$forSession$lambda_0(closure$categoryMap) {
    return function (id) {
      return closure$categoryMap.get_11rb$(id);
    };
  }
  function SessionModel$Companion$forSession$lambda_1(closure$roomMap) {
    return function (id) {
      return closure$roomMap.get_11rb$(id);
    };
  }
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var mapCapacity = Kotlin.kotlin.collections.mapCapacity_za3lpa$;
  var coerceAtLeast = Kotlin.kotlin.ranges.coerceAtLeast_dqglrj$;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_xf5xz2$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var addAll = Kotlin.kotlin.collections.addAll_ipc267$;
  SessionModel$Companion.prototype.forSession_bnqjtr$ = function (all, sessionId) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7;
    var tmp$_8;
    if ((tmp$ = all.sessions) != null) {
      var firstOrNull$result;
      firstOrNull$break: do {
        var tmp$_9;
        tmp$_9 = tmp$.iterator();
        while (tmp$_9.hasNext()) {
          var element = tmp$_9.next();
          if (equals(element.id, sessionId)) {
            firstOrNull$result = element;
            break firstOrNull$break;
          }
        }
        firstOrNull$result = null;
      }
       while (false);
      tmp$_8 = firstOrNull$result;
    }
     else
      tmp$_8 = null;
    tmp$_0 = tmp$_8;
    if (tmp$_0 == null) {
      return null;
    }
    var briefSession = tmp$_0;
    var tmp$_10;
    if ((tmp$_1 = all.speakers) != null) {
      var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault(tmp$_1, 10)), 16);
      var destination = LinkedHashMap_init(capacity);
      var tmp$_11;
      tmp$_11 = tmp$_1.iterator();
      while (tmp$_11.hasNext()) {
        var element_0 = tmp$_11.next();
        destination.put_xwzc9p$(element_0.id, element_0);
      }
      tmp$_10 = destination;
    }
     else
      tmp$_10 = null;
    var speakerMap = (tmp$_2 = tmp$_10) != null ? tmp$_2 : emptyMap();
    var tmp$_12;
    if ((tmp$_3 = all.rooms) != null) {
      var capacity_0 = coerceAtLeast(mapCapacity(collectionSizeOrDefault(tmp$_3, 10)), 16);
      var destination_0 = LinkedHashMap_init(capacity_0);
      var tmp$_13;
      tmp$_13 = tmp$_3.iterator();
      while (tmp$_13.hasNext()) {
        var element_1 = tmp$_13.next();
        destination_0.put_xwzc9p$(element_1.id, element_1);
      }
      tmp$_12 = destination_0;
    }
     else
      tmp$_12 = null;
    var roomMap = (tmp$_4 = tmp$_12) != null ? tmp$_4 : emptyMap();
    var tmp$_14;
    if ((tmp$_5 = all.categories) != null) {
      var destination_1 = ArrayList_init();
      var tmp$_15;
      tmp$_15 = tmp$_5.iterator();
      while (tmp$_15.hasNext()) {
        var element_2 = tmp$_15.next();
        var tmp$_16, tmp$_17;
        var list = (tmp$_17 = (tmp$_16 = element_2.items) != null ? filterNotNull(tmp$_16) : null) != null ? tmp$_17 : emptyList();
        addAll(destination_1, list);
      }
      tmp$_14 = destination_1;
    }
     else
      tmp$_14 = null;
    var tmp$_18;
    if ((tmp$_6 = tmp$_14) != null) {
      var capacity_1 = coerceAtLeast(mapCapacity(collectionSizeOrDefault(tmp$_6, 10)), 16);
      var destination_2 = LinkedHashMap_init(capacity_1);
      var tmp$_19;
      tmp$_19 = tmp$_6.iterator();
      while (tmp$_19.hasNext()) {
        var element_3 = tmp$_19.next();
        destination_2.put_xwzc9p$(element_3.id, element_3);
      }
      tmp$_18 = destination_2;
    }
     else
      tmp$_18 = null;
    var categoryMap = (tmp$_7 = tmp$_18) != null ? tmp$_7 : emptyMap();
    return this.forSession_ev0q8u$(briefSession, SessionModel$Companion$forSession$lambda(speakerMap), SessionModel$Companion$forSession$lambda_0(categoryMap), SessionModel$Companion$forSession$lambda_1(roomMap));
  };
  var wrapFunction = Kotlin.wrapFunction;
  var Unit = Kotlin.kotlin.Unit;
  var copyToArray = Kotlin.kotlin.collections.copyToArray;
  SessionModel$Companion.prototype.forSession_ev0q8u$ = function (briefSession, speakerProvider, categoryProvider, roomProvider) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11, tmp$_12, tmp$_13, tmp$_14, tmp$_15, tmp$_16;
    tmp$ = briefSession.startsAt;
    if (tmp$ == null) {
      return null;
    }
    var startsAt = tmp$;
    tmp$_0 = briefSession.endsAt;
    if (tmp$_0 == null) {
      return null;
    }
    var endsAt = tmp$_0;
    tmp$_1 = ensureNotNull(briefSession.id);
    tmp$_3 = (tmp$_2 = briefSession.title) != null ? tmp$_2 : '<untitled>';
    var tmp$_17;
    if ((tmp$_5 = (tmp$_4 = briefSession.categoryItems) != null ? filterNotNull(tmp$_4) : null) != null) {
      var destination = ArrayList_init(collectionSizeOrDefault(tmp$_5, 10));
      var tmp$_18;
      tmp$_18 = tmp$_5.iterator();
      while (tmp$_18.hasNext()) {
        var item = tmp$_18.next();
        destination.add_11rb$(categoryProvider(item));
      }
      tmp$_17 = destination;
    }
     else
      tmp$_17 = null;
    tmp$_8 = (tmp$_7 = (tmp$_6 = tmp$_17) != null ? firstOrNull(tmp$_6) : null) != null ? tmp$_7.name : null;
    tmp$_10 = (tmp$_9 = briefSession.description) != null ? tmp$_9 : '';
    tmp$_11 = parseDate(startsAt);
    tmp$_12 = parseDate(endsAt);
    var $receiver = filterNotNull((tmp$_13 = briefSession.speakers) != null ? tmp$_13 : emptyList());
    var destination_0 = ArrayList_init();
    var tmp$_19;
    tmp$_19 = $receiver.iterator();
    while (tmp$_19.hasNext()) {
      var element = tmp$_19.next();
      var tmp$_0_0;
      if ((tmp$_0_0 = speakerProvider(element)) != null) {
        destination_0.add_11rb$(tmp$_0_0);
      }
    }
    tmp$_14 = copyToArray(destination_0);
    return new SessionModel(tmp$_1, tmp$_3, tmp$_8, tmp$_10, tmp$_11, tmp$_12, (tmp$_16 = (tmp$_15 = briefSession.roomId) != null ? roomProvider(tmp$_15) : null) != null ? tmp$_16.name : null, tmp$_14);
  };
  SessionModel$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var SessionModel$Companion_instance = null;
  function SessionModel$Companion_getInstance() {
    if (SessionModel$Companion_instance === null) {
      new SessionModel$Companion();
    }
    return SessionModel$Companion_instance;
  }
  SessionModel.$metadata$ = {kind: Kind_CLASS, simpleName: 'SessionModel', interfaces: []};
  function AllData(sessions, rooms, speakers, questions, categories, favorites, votes) {
    AllData$Companion_getInstance();
    if (sessions === void 0)
      sessions = null;
    if (rooms === void 0)
      rooms = null;
    if (speakers === void 0)
      speakers = null;
    if (questions === void 0)
      questions = null;
    if (categories === void 0)
      categories = null;
    if (favorites === void 0)
      favorites = null;
    if (votes === void 0)
      votes = null;
    this.sessions = sessions;
    this.rooms = rooms;
    this.speakers = speakers;
    this.questions = questions;
    this.categories = categories;
    this.favorites = favorites;
    this.votes = votes;
  }
  function AllData$Companion() {
    this.serialClassDesc_q65wca$_0 = new SerialClassDescImpl('com.fans.kotlinconf.data.AllData');
    this.serialClassDesc.addElement_61zpoe$('sessions');
    this.serialClassDesc.addElement_61zpoe$('rooms');
    this.serialClassDesc.addElement_61zpoe$('speakers');
    this.serialClassDesc.addElement_61zpoe$('questions');
    this.serialClassDesc.addElement_61zpoe$('categories');
    this.serialClassDesc.addElement_61zpoe$('favorites');
    this.serialClassDesc.addElement_61zpoe$('votes');
    AllData$Companion_instance = this;
  }
  Object.defineProperty(AllData$Companion.prototype, 'serialClassDesc', {get: function () {
    return this.serialClassDesc_q65wca$_0;
  }});
  AllData$Companion.prototype.save_ejfkry$ = function (output_0, obj) {
    var output = output_0.writeBegin_276rha$(this.serialClassDesc, []);
    output.writeNullableSerializableElementValue_874a36$(this.serialClassDesc, 0, new $module$kotlinx_serialization_runtime_js.kotlinx.serialization.internal.ArrayListSerializer(_.com.fans.kotlinconf.data.Session.Companion), obj.sessions);
    output.writeNullableSerializableElementValue_874a36$(this.serialClassDesc, 1, new $module$kotlinx_serialization_runtime_js.kotlinx.serialization.internal.ArrayListSerializer(_.com.fans.kotlinconf.data.Room.Companion), obj.rooms);
    output.writeNullableSerializableElementValue_874a36$(this.serialClassDesc, 2, new $module$kotlinx_serialization_runtime_js.kotlinx.serialization.internal.ArrayListSerializer(_.com.fans.kotlinconf.data.Speaker.Companion), obj.speakers);
    output.writeNullableSerializableElementValue_874a36$(this.serialClassDesc, 3, new $module$kotlinx_serialization_runtime_js.kotlinx.serialization.internal.ArrayListSerializer(_.com.fans.kotlinconf.data.Question.Companion), obj.questions);
    output.writeNullableSerializableElementValue_874a36$(this.serialClassDesc, 4, new $module$kotlinx_serialization_runtime_js.kotlinx.serialization.internal.ArrayListSerializer(_.com.fans.kotlinconf.data.Category.Companion), obj.categories);
    output.writeNullableSerializableElementValue_874a36$(this.serialClassDesc, 5, new $module$kotlinx_serialization_runtime_js.kotlinx.serialization.internal.ArrayListSerializer(_.com.fans.kotlinconf.data.Favorite.Companion), obj.favorites);
    output.writeNullableSerializableElementValue_874a36$(this.serialClassDesc, 6, new $module$kotlinx_serialization_runtime_js.kotlinx.serialization.internal.ArrayListSerializer(_.com.fans.kotlinconf.data.Vote.Companion), obj.votes);
    output.writeEnd_f6e2p$(this.serialClassDesc);
  };
  AllData$Companion.prototype.load_ljkqvg$ = function (input_0) {
    var index, readAll = false;
    var bitMask0 = 0;
    var sessions, rooms, speakers, questions, categories, favorites, votes;
    var input = input_0.readBegin_276rha$(this.serialClassDesc, []);
    loopLabel: while (true) {
      index = input.readElement_f6e2p$(this.serialClassDesc);
      switch (index) {
        case -2:
          readAll = true;
        case 0:
          sessions = input.readNullableSerializableElementValue_3ohjxu$(this.serialClassDesc, 0, new $module$kotlinx_serialization_runtime_js.kotlinx.serialization.internal.ArrayListSerializer(_.com.fans.kotlinconf.data.Session.Companion));
          bitMask0 |= 1;
          if (!readAll)
            break;
        case 1:
          rooms = input.readNullableSerializableElementValue_3ohjxu$(this.serialClassDesc, 1, new $module$kotlinx_serialization_runtime_js.kotlinx.serialization.internal.ArrayListSerializer(_.com.fans.kotlinconf.data.Room.Companion));
          bitMask0 |= 2;
          if (!readAll)
            break;
        case 2:
          speakers = input.readNullableSerializableElementValue_3ohjxu$(this.serialClassDesc, 2, new $module$kotlinx_serialization_runtime_js.kotlinx.serialization.internal.ArrayListSerializer(_.com.fans.kotlinconf.data.Speaker.Companion));
          bitMask0 |= 4;
          if (!readAll)
            break;
        case 3:
          questions = input.readNullableSerializableElementValue_3ohjxu$(this.serialClassDesc, 3, new $module$kotlinx_serialization_runtime_js.kotlinx.serialization.internal.ArrayListSerializer(_.com.fans.kotlinconf.data.Question.Companion));
          bitMask0 |= 8;
          if (!readAll)
            break;
        case 4:
          categories = input.readNullableSerializableElementValue_3ohjxu$(this.serialClassDesc, 4, new $module$kotlinx_serialization_runtime_js.kotlinx.serialization.internal.ArrayListSerializer(_.com.fans.kotlinconf.data.Category.Companion));
          bitMask0 |= 16;
          if (!readAll)
            break;
        case 5:
          favorites = input.readNullableSerializableElementValue_3ohjxu$(this.serialClassDesc, 5, new $module$kotlinx_serialization_runtime_js.kotlinx.serialization.internal.ArrayListSerializer(_.com.fans.kotlinconf.data.Favorite.Companion));
          bitMask0 |= 32;
          if (!readAll)
            break;
        case 6:
          votes = input.readNullableSerializableElementValue_3ohjxu$(this.serialClassDesc, 6, new $module$kotlinx_serialization_runtime_js.kotlinx.serialization.internal.ArrayListSerializer(_.com.fans.kotlinconf.data.Vote.Companion));
          bitMask0 |= 64;
          if (!readAll)
            break;
        case -1:
          break loopLabel;
        default:throw new $module$kotlinx_serialization_runtime_js.kotlinx.serialization.UnknownFieldException(index);
      }
    }
    input.readEnd_f6e2p$(this.serialClassDesc);
    return AllData_init(bitMask0, sessions, rooms, speakers, questions, categories, favorites, votes, null);
  };
  AllData$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: [KSerializer]};
  var AllData$Companion_instance = null;
  function AllData$Companion_getInstance() {
    if (AllData$Companion_instance === null) {
      new AllData$Companion();
    }
    return AllData$Companion_instance;
  }
  function AllData_init(seen, sessions, rooms, speakers, questions, categories, favorites, votes, serializationConstructorMarker) {
    var $this = Object.create(_.com.fans.kotlinconf.data.AllData.prototype);
    if ((seen & 1) === 0)
      throw new $module$kotlinx_serialization_runtime_js.kotlinx.serialization.MissingFieldException('sessions');
    else
      $this.sessions = sessions;
    if ((seen & 2) === 0)
      throw new $module$kotlinx_serialization_runtime_js.kotlinx.serialization.MissingFieldException('rooms');
    else
      $this.rooms = rooms;
    if ((seen & 4) === 0)
      throw new $module$kotlinx_serialization_runtime_js.kotlinx.serialization.MissingFieldException('speakers');
    else
      $this.speakers = speakers;
    if ((seen & 8) === 0)
      throw new $module$kotlinx_serialization_runtime_js.kotlinx.serialization.MissingFieldException('questions');
    else
      $this.questions = questions;
    if ((seen & 16) === 0)
      throw new $module$kotlinx_serialization_runtime_js.kotlinx.serialization.MissingFieldException('categories');
    else
      $this.categories = categories;
    if ((seen & 32) === 0)
      throw new $module$kotlinx_serialization_runtime_js.kotlinx.serialization.MissingFieldException('favorites');
    else
      $this.favorites = favorites;
    if ((seen & 64) === 0)
      throw new $module$kotlinx_serialization_runtime_js.kotlinx.serialization.MissingFieldException('votes');
    else
      $this.votes = votes;
    return $this;
  }
  AllData.$metadata$ = {kind: Kind_CLASS, simpleName: 'AllData', interfaces: []};
  AllData.prototype.component1 = function () {
    return this.sessions;
  };
  AllData.prototype.component2 = function () {
    return this.rooms;
  };
  AllData.prototype.component3 = function () {
    return this.speakers;
  };
  AllData.prototype.component4 = function () {
    return this.questions;
  };
  AllData.prototype.component5 = function () {
    return this.categories;
  };
  AllData.prototype.component6 = function () {
    return this.favorites;
  };
  AllData.prototype.component7 = function () {
    return this.votes;
  };
  AllData.prototype.copy_1c3m9g$ = function (sessions, rooms, speakers, questions, categories, favorites, votes) {
    return new AllData(sessions === void 0 ? this.sessions : sessions, rooms === void 0 ? this.rooms : rooms, speakers === void 0 ? this.speakers : speakers, questions === void 0 ? this.questions : questions, categories === void 0 ? this.categories : categories, favorites === void 0 ? this.favorites : favorites, votes === void 0 ? this.votes : votes);
  };
  AllData.prototype.toString = function () {
    return 'AllData(sessions=' + Kotlin.toString(this.sessions) + (', rooms=' + Kotlin.toString(this.rooms)) + (', speakers=' + Kotlin.toString(this.speakers)) + (', questions=' + Kotlin.toString(this.questions)) + (', categories=' + Kotlin.toString(this.categories)) + (', favorites=' + Kotlin.toString(this.favorites)) + (', votes=' + Kotlin.toString(this.votes)) + ')';
  };
  AllData.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.sessions) | 0;
    result = result * 31 + Kotlin.hashCode(this.rooms) | 0;
    result = result * 31 + Kotlin.hashCode(this.speakers) | 0;
    result = result * 31 + Kotlin.hashCode(this.questions) | 0;
    result = result * 31 + Kotlin.hashCode(this.categories) | 0;
    result = result * 31 + Kotlin.hashCode(this.favorites) | 0;
    result = result * 31 + Kotlin.hashCode(this.votes) | 0;
    return result;
  };
  AllData.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.sessions, other.sessions) && Kotlin.equals(this.rooms, other.rooms) && Kotlin.equals(this.speakers, other.speakers) && Kotlin.equals(this.questions, other.questions) && Kotlin.equals(this.categories, other.categories) && Kotlin.equals(this.favorites, other.favorites) && Kotlin.equals(this.votes, other.votes)))));
  };
  function Category(id, sort, title, items) {
    Category$Companion_getInstance();
    if (id === void 0)
      id = null;
    if (sort === void 0)
      sort = null;
    if (title === void 0)
      title = null;
    if (items === void 0)
      items = null;
    this.id = id;
    this.sort = sort;
    this.title = title;
    this.items = items;
  }
  function Category$Companion() {
    this.serialClassDesc_wd3qud$_0 = new SerialClassDescImpl('com.fans.kotlinconf.data.Category');
    this.serialClassDesc.addElement_61zpoe$('id');
    this.serialClassDesc.addElement_61zpoe$('sort');
    this.serialClassDesc.addElement_61zpoe$('title');
    this.serialClassDesc.addElement_61zpoe$('items');
    Category$Companion_instance = this;
  }
  Object.defineProperty(Category$Companion.prototype, 'serialClassDesc', {get: function () {
    return this.serialClassDesc_wd3qud$_0;
  }});
  Category$Companion.prototype.save_ejfkry$ = function (output_0, obj) {
    var output = output_0.writeBegin_276rha$(this.serialClassDesc, []);
    output.writeNullableSerializableElementValue_874a36$(this.serialClassDesc, 0, $module$kotlinx_serialization_runtime_js.kotlinx.serialization.internal.IntSerializer, obj.id);
    output.writeNullableSerializableElementValue_874a36$(this.serialClassDesc, 1, $module$kotlinx_serialization_runtime_js.kotlinx.serialization.internal.IntSerializer, obj.sort);
    output.writeNullableSerializableElementValue_874a36$(this.serialClassDesc, 2, $module$kotlinx_serialization_runtime_js.kotlinx.serialization.internal.StringSerializer, obj.title);
    output.writeNullableSerializableElementValue_874a36$(this.serialClassDesc, 3, new $module$kotlinx_serialization_runtime_js.kotlinx.serialization.internal.ArrayListSerializer(new $module$kotlinx_serialization_runtime_js.kotlinx.serialization.internal.NullableSerializer(_.com.fans.kotlinconf.data.CategoryItem.Companion)), obj.items);
    output.writeEnd_f6e2p$(this.serialClassDesc);
  };
  Category$Companion.prototype.load_ljkqvg$ = function (input_0) {
    var index, readAll = false;
    var bitMask0 = 0;
    var id, sort, title, items;
    var input = input_0.readBegin_276rha$(this.serialClassDesc, []);
    loopLabel: while (true) {
      index = input.readElement_f6e2p$(this.serialClassDesc);
      switch (index) {
        case -2:
          readAll = true;
        case 0:
          id = input.readNullableSerializableElementValue_3ohjxu$(this.serialClassDesc, 0, $module$kotlinx_serialization_runtime_js.kotlinx.serialization.internal.IntSerializer);
          bitMask0 |= 1;
          if (!readAll)
            break;
        case 1:
          sort = input.readNullableSerializableElementValue_3ohjxu$(this.serialClassDesc, 1, $module$kotlinx_serialization_runtime_js.kotlinx.serialization.internal.IntSerializer);
          bitMask0 |= 2;
          if (!readAll)
            break;
        case 2:
          title = input.readNullableSerializableElementValue_3ohjxu$(this.serialClassDesc, 2, $module$kotlinx_serialization_runtime_js.kotlinx.serialization.internal.StringSerializer);
          bitMask0 |= 4;
          if (!readAll)
            break;
        case 3:
          items = input.readNullableSerializableElementValue_3ohjxu$(this.serialClassDesc, 3, new $module$kotlinx_serialization_runtime_js.kotlinx.serialization.internal.ArrayListSerializer(new $module$kotlinx_serialization_runtime_js.kotlinx.serialization.internal.NullableSerializer(_.com.fans.kotlinconf.data.CategoryItem.Companion)));
          bitMask0 |= 8;
          if (!readAll)
            break;
        case -1:
          break loopLabel;
        default:throw new $module$kotlinx_serialization_runtime_js.kotlinx.serialization.UnknownFieldException(index);
      }
    }
    input.readEnd_f6e2p$(this.serialClassDesc);
    return Category_init(bitMask0, id, sort, title, items, null);
  };
  Category$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: [KSerializer]};
  var Category$Companion_instance = null;
  function Category$Companion_getInstance() {
    if (Category$Companion_instance === null) {
      new Category$Companion();
    }
    return Category$Companion_instance;
  }
  function Category_init(seen, id, sort, title, items, serializationConstructorMarker) {
    var $this = Object.create(_.com.fans.kotlinconf.data.Category.prototype);
    if ((seen & 1) === 0)
      throw new $module$kotlinx_serialization_runtime_js.kotlinx.serialization.MissingFieldException('id');
    else
      $this.id = id;
    if ((seen & 2) === 0)
      throw new $module$kotlinx_serialization_runtime_js.kotlinx.serialization.MissingFieldException('sort');
    else
      $this.sort = sort;
    if ((seen & 4) === 0)
      throw new $module$kotlinx_serialization_runtime_js.kotlinx.serialization.MissingFieldException('title');
    else
      $this.title = title;
    if ((seen & 8) === 0)
      throw new $module$kotlinx_serialization_runtime_js.kotlinx.serialization.MissingFieldException('items');
    else
      $this.items = items;
    return $this;
  }
  Category.$metadata$ = {kind: Kind_CLASS, simpleName: 'Category', interfaces: []};
  Category.prototype.component1 = function () {
    return this.id;
  };
  Category.prototype.component2 = function () {
    return this.sort;
  };
  Category.prototype.component3 = function () {
    return this.title;
  };
  Category.prototype.component4 = function () {
    return this.items;
  };
  Category.prototype.copy_ahuurd$ = function (id, sort, title, items) {
    return new Category(id === void 0 ? this.id : id, sort === void 0 ? this.sort : sort, title === void 0 ? this.title : title, items === void 0 ? this.items : items);
  };
  Category.prototype.toString = function () {
    return 'Category(id=' + Kotlin.toString(this.id) + (', sort=' + Kotlin.toString(this.sort)) + (', title=' + Kotlin.toString(this.title)) + (', items=' + Kotlin.toString(this.items)) + ')';
  };
  Category.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.sort) | 0;
    result = result * 31 + Kotlin.hashCode(this.title) | 0;
    result = result * 31 + Kotlin.hashCode(this.items) | 0;
    return result;
  };
  Category.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.id, other.id) && Kotlin.equals(this.sort, other.sort) && Kotlin.equals(this.title, other.title) && Kotlin.equals(this.items, other.items)))));
  };
  function CategoryItem(name, id, sort) {
    CategoryItem$Companion_getInstance();
    if (name === void 0)
      name = null;
    if (id === void 0)
      id = null;
    if (sort === void 0)
      sort = null;
    this.name = name;
    this.id = id;
    this.sort = sort;
  }
  function CategoryItem$Companion() {
    this.serialClassDesc_q50794$_0 = new SerialClassDescImpl('com.fans.kotlinconf.data.CategoryItem');
    this.serialClassDesc.addElement_61zpoe$('name');
    this.serialClassDesc.addElement_61zpoe$('id');
    this.serialClassDesc.addElement_61zpoe$('sort');
    CategoryItem$Companion_instance = this;
  }
  Object.defineProperty(CategoryItem$Companion.prototype, 'serialClassDesc', {get: function () {
    return this.serialClassDesc_q50794$_0;
  }});
  CategoryItem$Companion.prototype.save_ejfkry$ = function (output_0, obj) {
    var output = output_0.writeBegin_276rha$(this.serialClassDesc, []);
    output.writeNullableSerializableElementValue_874a36$(this.serialClassDesc, 0, $module$kotlinx_serialization_runtime_js.kotlinx.serialization.internal.StringSerializer, obj.name);
    output.writeNullableSerializableElementValue_874a36$(this.serialClassDesc, 1, $module$kotlinx_serialization_runtime_js.kotlinx.serialization.internal.IntSerializer, obj.id);
    output.writeNullableSerializableElementValue_874a36$(this.serialClassDesc, 2, $module$kotlinx_serialization_runtime_js.kotlinx.serialization.internal.IntSerializer, obj.sort);
    output.writeEnd_f6e2p$(this.serialClassDesc);
  };
  CategoryItem$Companion.prototype.load_ljkqvg$ = function (input_0) {
    var index, readAll = false;
    var bitMask0 = 0;
    var name, id, sort;
    var input = input_0.readBegin_276rha$(this.serialClassDesc, []);
    loopLabel: while (true) {
      index = input.readElement_f6e2p$(this.serialClassDesc);
      switch (index) {
        case -2:
          readAll = true;
        case 0:
          name = input.readNullableSerializableElementValue_3ohjxu$(this.serialClassDesc, 0, $module$kotlinx_serialization_runtime_js.kotlinx.serialization.internal.StringSerializer);
          bitMask0 |= 1;
          if (!readAll)
            break;
        case 1:
          id = input.readNullableSerializableElementValue_3ohjxu$(this.serialClassDesc, 1, $module$kotlinx_serialization_runtime_js.kotlinx.serialization.internal.IntSerializer);
          bitMask0 |= 2;
          if (!readAll)
            break;
        case 2:
          sort = input.readNullableSerializableElementValue_3ohjxu$(this.serialClassDesc, 2, $module$kotlinx_serialization_runtime_js.kotlinx.serialization.internal.IntSerializer);
          bitMask0 |= 4;
          if (!readAll)
            break;
        case -1:
          break loopLabel;
        default:throw new $module$kotlinx_serialization_runtime_js.kotlinx.serialization.UnknownFieldException(index);
      }
    }
    input.readEnd_f6e2p$(this.serialClassDesc);
    return CategoryItem_init(bitMask0, name, id, sort, null);
  };
  CategoryItem$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: [KSerializer]};
  var CategoryItem$Companion_instance = null;
  function CategoryItem$Companion_getInstance() {
    if (CategoryItem$Companion_instance === null) {
      new CategoryItem$Companion();
    }
    return CategoryItem$Companion_instance;
  }
  function CategoryItem_init(seen, name, id, sort, serializationConstructorMarker) {
    var $this = Object.create(_.com.fans.kotlinconf.data.CategoryItem.prototype);
    if ((seen & 1) === 0)
      throw new $module$kotlinx_serialization_runtime_js.kotlinx.serialization.MissingFieldException('name');
    else
      $this.name = name;
    if ((seen & 2) === 0)
      throw new $module$kotlinx_serialization_runtime_js.kotlinx.serialization.MissingFieldException('id');
    else
      $this.id = id;
    if ((seen & 4) === 0)
      throw new $module$kotlinx_serialization_runtime_js.kotlinx.serialization.MissingFieldException('sort');
    else
      $this.sort = sort;
    return $this;
  }
  CategoryItem.$metadata$ = {kind: Kind_CLASS, simpleName: 'CategoryItem', interfaces: []};
  CategoryItem.prototype.component1 = function () {
    return this.name;
  };
  CategoryItem.prototype.component2 = function () {
    return this.id;
  };
  CategoryItem.prototype.component3 = function () {
    return this.sort;
  };
  CategoryItem.prototype.copy_nb871f$ = function (name, id, sort) {
    return new CategoryItem(name === void 0 ? this.name : name, id === void 0 ? this.id : id, sort === void 0 ? this.sort : sort);
  };
  CategoryItem.prototype.toString = function () {
    return 'CategoryItem(name=' + Kotlin.toString(this.name) + (', id=' + Kotlin.toString(this.id)) + (', sort=' + Kotlin.toString(this.sort)) + ')';
  };
  CategoryItem.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.sort) | 0;
    return result;
  };
  CategoryItem.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.id, other.id) && Kotlin.equals(this.sort, other.sort)))));
  };
  function Favorite(sessionId) {
    Favorite$Companion_getInstance();
    if (sessionId === void 0)
      sessionId = null;
    this.sessionId = sessionId;
  }
  function Favorite$Companion() {
    this.serialClassDesc_vjw3jx$_0 = new SerialClassDescImpl('com.fans.kotlinconf.data.Favorite');
    this.serialClassDesc.addElement_61zpoe$('sessionId');
    Favorite$Companion_instance = this;
  }
  Object.defineProperty(Favorite$Companion.prototype, 'serialClassDesc', {get: function () {
    return this.serialClassDesc_vjw3jx$_0;
  }});
  Favorite$Companion.prototype.save_ejfkry$ = function (output_0, obj) {
    var output = output_0.writeBegin_276rha$(this.serialClassDesc, []);
    output.writeNullableSerializableElementValue_874a36$(this.serialClassDesc, 0, $module$kotlinx_serialization_runtime_js.kotlinx.serialization.internal.StringSerializer, obj.sessionId);
    output.writeEnd_f6e2p$(this.serialClassDesc);
  };
  Favorite$Companion.prototype.load_ljkqvg$ = function (input_0) {
    var index, readAll = false;
    var bitMask0 = 0;
    var sessionId;
    var input = input_0.readBegin_276rha$(this.serialClassDesc, []);
    loopLabel: while (true) {
      index = input.readElement_f6e2p$(this.serialClassDesc);
      switch (index) {
        case -2:
          readAll = true;
        case 0:
          sessionId = input.readNullableSerializableElementValue_3ohjxu$(this.serialClassDesc, 0, $module$kotlinx_serialization_runtime_js.kotlinx.serialization.internal.StringSerializer);
          bitMask0 |= 1;
          if (!readAll)
            break;
        case -1:
          break loopLabel;
        default:throw new $module$kotlinx_serialization_runtime_js.kotlinx.serialization.UnknownFieldException(index);
      }
    }
    input.readEnd_f6e2p$(this.serialClassDesc);
    return Favorite_init(bitMask0, sessionId, null);
  };
  Favorite$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: [KSerializer]};
  var Favorite$Companion_instance = null;
  function Favorite$Companion_getInstance() {
    if (Favorite$Companion_instance === null) {
      new Favorite$Companion();
    }
    return Favorite$Companion_instance;
  }
  function Favorite_init(seen, sessionId, serializationConstructorMarker) {
    var $this = Object.create(_.com.fans.kotlinconf.data.Favorite.prototype);
    if ((seen & 1) === 0)
      throw new $module$kotlinx_serialization_runtime_js.kotlinx.serialization.MissingFieldException('sessionId');
    else
      $this.sessionId = sessionId;
    return $this;
  }
  function Link(linkType, title, url) {
    Link$Companion_getInstance();
    if (linkType === void 0)
      linkType = null;
    if (title === void 0)
      title = null;
    if (url === void 0)
      url = null;
    this.linkType = linkType;
    this.title = title;
    this.url = url;
  }
  function Link$Companion() {
    this.serialClassDesc_ud1lun$_0 = new SerialClassDescImpl('com.fans.kotlinconf.data.Link');
    this.serialClassDesc.addElement_61zpoe$('linkType');
    this.serialClassDesc.addElement_61zpoe$('title');
    this.serialClassDesc.addElement_61zpoe$('url');
    Link$Companion_instance = this;
  }
  Object.defineProperty(Link$Companion.prototype, 'serialClassDesc', {get: function () {
    return this.serialClassDesc_ud1lun$_0;
  }});
  Link$Companion.prototype.save_ejfkry$ = function (output_0, obj) {
    var output = output_0.writeBegin_276rha$(this.serialClassDesc, []);
    output.writeNullableSerializableElementValue_874a36$(this.serialClassDesc, 0, $module$kotlinx_serialization_runtime_js.kotlinx.serialization.internal.StringSerializer, obj.linkType);
    output.writeNullableSerializableElementValue_874a36$(this.serialClassDesc, 1, $module$kotlinx_serialization_runtime_js.kotlinx.serialization.internal.StringSerializer, obj.title);
    output.writeNullableSerializableElementValue_874a36$(this.serialClassDesc, 2, $module$kotlinx_serialization_runtime_js.kotlinx.serialization.internal.StringSerializer, obj.url);
    output.writeEnd_f6e2p$(this.serialClassDesc);
  };
  Link$Companion.prototype.load_ljkqvg$ = function (input_0) {
    var index, readAll = false;
    var bitMask0 = 0;
    var linkType, title, url;
    var input = input_0.readBegin_276rha$(this.serialClassDesc, []);
    loopLabel: while (true) {
      index = input.readElement_f6e2p$(this.serialClassDesc);
      switch (index) {
        case -2:
          readAll = true;
        case 0:
          linkType = input.readNullableSerializableElementValue_3ohjxu$(this.serialClassDesc, 0, $module$kotlinx_serialization_runtime_js.kotlinx.serialization.internal.StringSerializer);
          bitMask0 |= 1;
          if (!readAll)
            break;
        case 1:
          title = input.readNullableSerializableElementValue_3ohjxu$(this.serialClassDesc, 1, $module$kotlinx_serialization_runtime_js.kotlinx.serialization.internal.StringSerializer);
          bitMask0 |= 2;
          if (!readAll)
            break;
        case 2:
          url = input.readNullableSerializableElementValue_3ohjxu$(this.serialClassDesc, 2, $module$kotlinx_serialization_runtime_js.kotlinx.serialization.internal.StringSerializer);
          bitMask0 |= 4;
          if (!readAll)
            break;
        case -1:
          break loopLabel;
        default:throw new $module$kotlinx_serialization_runtime_js.kotlinx.serialization.UnknownFieldException(index);
      }
    }
    input.readEnd_f6e2p$(this.serialClassDesc);
    return Link_init(bitMask0, linkType, title, url, null);
  };
  Link$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: [KSerializer]};
  var Link$Companion_instance = null;
  function Link$Companion_getInstance() {
    if (Link$Companion_instance === null) {
      new Link$Companion();
    }
    return Link$Companion_instance;
  }
  function Link_init(seen, linkType, title, url, serializationConstructorMarker) {
    var $this = Object.create(_.com.fans.kotlinconf.data.Link.prototype);
    if ((seen & 1) === 0)
      throw new $module$kotlinx_serialization_runtime_js.kotlinx.serialization.MissingFieldException('linkType');
    else
      $this.linkType = linkType;
    if ((seen & 2) === 0)
      throw new $module$kotlinx_serialization_runtime_js.kotlinx.serialization.MissingFieldException('title');
    else
      $this.title = title;
    if ((seen & 4) === 0)
      throw new $module$kotlinx_serialization_runtime_js.kotlinx.serialization.MissingFieldException('url');
    else
      $this.url = url;
    return $this;
  }
  Link.$metadata$ = {kind: Kind_CLASS, simpleName: 'Link', interfaces: []};
  Link.prototype.component1 = function () {
    return this.linkType;
  };
  Link.prototype.component2 = function () {
    return this.title;
  };
  Link.prototype.component3 = function () {
    return this.url;
  };
  Link.prototype.copy_eaqb6n$ = function (linkType, title, url) {
    return new Link(linkType === void 0 ? this.linkType : linkType, title === void 0 ? this.title : title, url === void 0 ? this.url : url);
  };
  Link.prototype.toString = function () {
    return 'Link(linkType=' + Kotlin.toString(this.linkType) + (', title=' + Kotlin.toString(this.title)) + (', url=' + Kotlin.toString(this.url)) + ')';
  };
  Link.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.linkType) | 0;
    result = result * 31 + Kotlin.hashCode(this.title) | 0;
    result = result * 31 + Kotlin.hashCode(this.url) | 0;
    return result;
  };
  Link.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.linkType, other.linkType) && Kotlin.equals(this.title, other.title) && Kotlin.equals(this.url, other.url)))));
  };
  function Question(question, id, sort, questionType) {
    Question$Companion_getInstance();
    if (question === void 0)
      question = null;
    if (id === void 0)
      id = null;
    if (sort === void 0)
      sort = null;
    if (questionType === void 0)
      questionType = null;
    this.question = question;
    this.id = id;
    this.sort = sort;
    this.questionType = questionType;
  }
  function Question$Companion() {
    this.serialClassDesc_gistwz$_0 = new SerialClassDescImpl('com.fans.kotlinconf.data.Question');
    this.serialClassDesc.addElement_61zpoe$('question');
    this.serialClassDesc.addElement_61zpoe$('id');
    this.serialClassDesc.addElement_61zpoe$('sort');
    this.serialClassDesc.addElement_61zpoe$('questionType');
    Question$Companion_instance = this;
  }
  Object.defineProperty(Question$Companion.prototype, 'serialClassDesc', {get: function () {
    return this.serialClassDesc_gistwz$_0;
  }});
  Question$Companion.prototype.save_ejfkry$ = function (output_0, obj) {
    var output = output_0.writeBegin_276rha$(this.serialClassDesc, []);
    output.writeNullableSerializableElementValue_874a36$(this.serialClassDesc, 0, $module$kotlinx_serialization_runtime_js.kotlinx.serialization.internal.StringSerializer, obj.question);
    output.writeNullableSerializableElementValue_874a36$(this.serialClassDesc, 1, $module$kotlinx_serialization_runtime_js.kotlinx.serialization.internal.IntSerializer, obj.id);
    output.writeNullableSerializableElementValue_874a36$(this.serialClassDesc, 2, $module$kotlinx_serialization_runtime_js.kotlinx.serialization.internal.IntSerializer, obj.sort);
    output.writeNullableSerializableElementValue_874a36$(this.serialClassDesc, 3, $module$kotlinx_serialization_runtime_js.kotlinx.serialization.internal.StringSerializer, obj.questionType);
    output.writeEnd_f6e2p$(this.serialClassDesc);
  };
  Question$Companion.prototype.load_ljkqvg$ = function (input_0) {
    var index, readAll = false;
    var bitMask0 = 0;
    var question, id, sort, questionType;
    var input = input_0.readBegin_276rha$(this.serialClassDesc, []);
    loopLabel: while (true) {
      index = input.readElement_f6e2p$(this.serialClassDesc);
      switch (index) {
        case -2:
          readAll = true;
        case 0:
          question = input.readNullableSerializableElementValue_3ohjxu$(this.serialClassDesc, 0, $module$kotlinx_serialization_runtime_js.kotlinx.serialization.internal.StringSerializer);
          bitMask0 |= 1;
          if (!readAll)
            break;
        case 1:
          id = input.readNullableSerializableElementValue_3ohjxu$(this.serialClassDesc, 1, $module$kotlinx_serialization_runtime_js.kotlinx.serialization.internal.IntSerializer);
          bitMask0 |= 2;
          if (!readAll)
            break;
        case 2:
          sort = input.readNullableSerializableElementValue_3ohjxu$(this.serialClassDesc, 2, $module$kotlinx_serialization_runtime_js.kotlinx.serialization.internal.IntSerializer);
          bitMask0 |= 4;
          if (!readAll)
            break;
        case 3:
          questionType = input.readNullableSerializableElementValue_3ohjxu$(this.serialClassDesc, 3, $module$kotlinx_serialization_runtime_js.kotlinx.serialization.internal.StringSerializer);
          bitMask0 |= 8;
          if (!readAll)
            break;
        case -1:
          break loopLabel;
        default:throw new $module$kotlinx_serialization_runtime_js.kotlinx.serialization.UnknownFieldException(index);
      }
    }
    input.readEnd_f6e2p$(this.serialClassDesc);
    return Question_init(bitMask0, question, id, sort, questionType, null);
  };
  Question$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: [KSerializer]};
  var Question$Companion_instance = null;
  function Question$Companion_getInstance() {
    if (Question$Companion_instance === null) {
      new Question$Companion();
    }
    return Question$Companion_instance;
  }
  function Question_init(seen, question, id, sort, questionType, serializationConstructorMarker) {
    var $this = Object.create(_.com.fans.kotlinconf.data.Question.prototype);
    if ((seen & 1) === 0)
      throw new $module$kotlinx_serialization_runtime_js.kotlinx.serialization.MissingFieldException('question');
    else
      $this.question = question;
    if ((seen & 2) === 0)
      throw new $module$kotlinx_serialization_runtime_js.kotlinx.serialization.MissingFieldException('id');
    else
      $this.id = id;
    if ((seen & 4) === 0)
      throw new $module$kotlinx_serialization_runtime_js.kotlinx.serialization.MissingFieldException('sort');
    else
      $this.sort = sort;
    if ((seen & 8) === 0)
      throw new $module$kotlinx_serialization_runtime_js.kotlinx.serialization.MissingFieldException('questionType');
    else
      $this.questionType = questionType;
    return $this;
  }
  Question.$metadata$ = {kind: Kind_CLASS, simpleName: 'Question', interfaces: []};
  Question.prototype.component1 = function () {
    return this.question;
  };
  Question.prototype.component2 = function () {
    return this.id;
  };
  Question.prototype.component3 = function () {
    return this.sort;
  };
  Question.prototype.component4 = function () {
    return this.questionType;
  };
  Question.prototype.copy_as7e2$ = function (question, id, sort, questionType) {
    return new Question(question === void 0 ? this.question : question, id === void 0 ? this.id : id, sort === void 0 ? this.sort : sort, questionType === void 0 ? this.questionType : questionType);
  };
  Question.prototype.toString = function () {
    return 'Question(question=' + Kotlin.toString(this.question) + (', id=' + Kotlin.toString(this.id)) + (', sort=' + Kotlin.toString(this.sort)) + (', questionType=' + Kotlin.toString(this.questionType)) + ')';
  };
  Question.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.question) | 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.sort) | 0;
    result = result * 31 + Kotlin.hashCode(this.questionType) | 0;
    return result;
  };
  Question.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.question, other.question) && Kotlin.equals(this.id, other.id) && Kotlin.equals(this.sort, other.sort) && Kotlin.equals(this.questionType, other.questionType)))));
  };
  function QuestionAnswer(questionId, answerValue) {
    QuestionAnswer$Companion_getInstance();
    if (questionId === void 0)
      questionId = null;
    if (answerValue === void 0)
      answerValue = null;
    this.questionId = questionId;
    this.answerValue = answerValue;
  }
  function QuestionAnswer$Companion() {
    this.serialClassDesc_o9rgdn$_0 = new SerialClassDescImpl('com.fans.kotlinconf.data.QuestionAnswer');
    this.serialClassDesc.addElement_61zpoe$('questionId');
    this.serialClassDesc.addElement_61zpoe$('answerValue');
    QuestionAnswer$Companion_instance = this;
  }
  Object.defineProperty(QuestionAnswer$Companion.prototype, 'serialClassDesc', {get: function () {
    return this.serialClassDesc_o9rgdn$_0;
  }});
  QuestionAnswer$Companion.prototype.save_ejfkry$ = function (output_0, obj) {
    var output = output_0.writeBegin_276rha$(this.serialClassDesc, []);
    output.writeNullableSerializableElementValue_874a36$(this.serialClassDesc, 0, $module$kotlinx_serialization_runtime_js.kotlinx.serialization.internal.IntSerializer, obj.questionId);
    output.writeNullableSerializableElementValue_874a36$(this.serialClassDesc, 1, $module$kotlinx_serialization_runtime_js.kotlinx.serialization.internal.StringSerializer, obj.answerValue);
    output.writeEnd_f6e2p$(this.serialClassDesc);
  };
  QuestionAnswer$Companion.prototype.load_ljkqvg$ = function (input_0) {
    var index, readAll = false;
    var bitMask0 = 0;
    var questionId, answerValue;
    var input = input_0.readBegin_276rha$(this.serialClassDesc, []);
    loopLabel: while (true) {
      index = input.readElement_f6e2p$(this.serialClassDesc);
      switch (index) {
        case -2:
          readAll = true;
        case 0:
          questionId = input.readNullableSerializableElementValue_3ohjxu$(this.serialClassDesc, 0, $module$kotlinx_serialization_runtime_js.kotlinx.serialization.internal.IntSerializer);
          bitMask0 |= 1;
          if (!readAll)
            break;
        case 1:
          answerValue = input.readNullableSerializableElementValue_3ohjxu$(this.serialClassDesc, 1, $module$kotlinx_serialization_runtime_js.kotlinx.serialization.internal.StringSerializer);
          bitMask0 |= 2;
          if (!readAll)
            break;
        case -1:
          break loopLabel;
        default:throw new $module$kotlinx_serialization_runtime_js.kotlinx.serialization.UnknownFieldException(index);
      }
    }
    input.readEnd_f6e2p$(this.serialClassDesc);
    return QuestionAnswer_init(bitMask0, questionId, answerValue, null);
  };
  QuestionAnswer$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: [KSerializer]};
  var QuestionAnswer$Companion_instance = null;
  function QuestionAnswer$Companion_getInstance() {
    if (QuestionAnswer$Companion_instance === null) {
      new QuestionAnswer$Companion();
    }
    return QuestionAnswer$Companion_instance;
  }
  function QuestionAnswer_init(seen, questionId, answerValue, serializationConstructorMarker) {
    var $this = Object.create(_.com.fans.kotlinconf.data.QuestionAnswer.prototype);
    if ((seen & 1) === 0)
      throw new $module$kotlinx_serialization_runtime_js.kotlinx.serialization.MissingFieldException('questionId');
    else
      $this.questionId = questionId;
    if ((seen & 2) === 0)
      throw new $module$kotlinx_serialization_runtime_js.kotlinx.serialization.MissingFieldException('answerValue');
    else
      $this.answerValue = answerValue;
    return $this;
  }
  QuestionAnswer.$metadata$ = {kind: Kind_CLASS, simpleName: 'QuestionAnswer', interfaces: []};
  QuestionAnswer.prototype.component1 = function () {
    return this.questionId;
  };
  QuestionAnswer.prototype.component2 = function () {
    return this.answerValue;
  };
  QuestionAnswer.prototype.copy_3gd7sg$ = function (questionId, answerValue) {
    return new QuestionAnswer(questionId === void 0 ? this.questionId : questionId, answerValue === void 0 ? this.answerValue : answerValue);
  };
  QuestionAnswer.prototype.toString = function () {
    return 'QuestionAnswer(questionId=' + Kotlin.toString(this.questionId) + (', answerValue=' + Kotlin.toString(this.answerValue)) + ')';
  };
  QuestionAnswer.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.questionId) | 0;
    result = result * 31 + Kotlin.hashCode(this.answerValue) | 0;
    return result;
  };
  QuestionAnswer.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.questionId, other.questionId) && Kotlin.equals(this.answerValue, other.answerValue)))));
  };
  function Room(name, id, sort) {
    Room$Companion_getInstance();
    if (name === void 0)
      name = null;
    if (id === void 0)
      id = null;
    if (sort === void 0)
      sort = null;
    this.name = name;
    this.id = id;
    this.sort = sort;
  }
  function Room$Companion() {
    this.serialClassDesc_1p684i$_0 = new SerialClassDescImpl('com.fans.kotlinconf.data.Room');
    this.serialClassDesc.addElement_61zpoe$('name');
    this.serialClassDesc.addElement_61zpoe$('id');
    this.serialClassDesc.addElement_61zpoe$('sort');
    Room$Companion_instance = this;
  }
  Object.defineProperty(Room$Companion.prototype, 'serialClassDesc', {get: function () {
    return this.serialClassDesc_1p684i$_0;
  }});
  Room$Companion.prototype.save_ejfkry$ = function (output_0, obj) {
    var output = output_0.writeBegin_276rha$(this.serialClassDesc, []);
    output.writeNullableSerializableElementValue_874a36$(this.serialClassDesc, 0, $module$kotlinx_serialization_runtime_js.kotlinx.serialization.internal.StringSerializer, obj.name);
    output.writeNullableSerializableElementValue_874a36$(this.serialClassDesc, 1, $module$kotlinx_serialization_runtime_js.kotlinx.serialization.internal.IntSerializer, obj.id);
    output.writeNullableSerializableElementValue_874a36$(this.serialClassDesc, 2, $module$kotlinx_serialization_runtime_js.kotlinx.serialization.internal.IntSerializer, obj.sort);
    output.writeEnd_f6e2p$(this.serialClassDesc);
  };
  Room$Companion.prototype.load_ljkqvg$ = function (input_0) {
    var index, readAll = false;
    var bitMask0 = 0;
    var name, id, sort;
    var input = input_0.readBegin_276rha$(this.serialClassDesc, []);
    loopLabel: while (true) {
      index = input.readElement_f6e2p$(this.serialClassDesc);
      switch (index) {
        case -2:
          readAll = true;
        case 0:
          name = input.readNullableSerializableElementValue_3ohjxu$(this.serialClassDesc, 0, $module$kotlinx_serialization_runtime_js.kotlinx.serialization.internal.StringSerializer);
          bitMask0 |= 1;
          if (!readAll)
            break;
        case 1:
          id = input.readNullableSerializableElementValue_3ohjxu$(this.serialClassDesc, 1, $module$kotlinx_serialization_runtime_js.kotlinx.serialization.internal.IntSerializer);
          bitMask0 |= 2;
          if (!readAll)
            break;
        case 2:
          sort = input.readNullableSerializableElementValue_3ohjxu$(this.serialClassDesc, 2, $module$kotlinx_serialization_runtime_js.kotlinx.serialization.internal.IntSerializer);
          bitMask0 |= 4;
          if (!readAll)
            break;
        case -1:
          break loopLabel;
        default:throw new $module$kotlinx_serialization_runtime_js.kotlinx.serialization.UnknownFieldException(index);
      }
    }
    input.readEnd_f6e2p$(this.serialClassDesc);
    return Room_init(bitMask0, name, id, sort, null);
  };
  Room$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: [KSerializer]};
  var Room$Companion_instance = null;
  function Room$Companion_getInstance() {
    if (Room$Companion_instance === null) {
      new Room$Companion();
    }
    return Room$Companion_instance;
  }
  function Room_init(seen, name, id, sort, serializationConstructorMarker) {
    var $this = Object.create(_.com.fans.kotlinconf.data.Room.prototype);
    if ((seen & 1) === 0)
      throw new $module$kotlinx_serialization_runtime_js.kotlinx.serialization.MissingFieldException('name');
    else
      $this.name = name;
    if ((seen & 2) === 0)
      throw new $module$kotlinx_serialization_runtime_js.kotlinx.serialization.MissingFieldException('id');
    else
      $this.id = id;
    if ((seen & 4) === 0)
      throw new $module$kotlinx_serialization_runtime_js.kotlinx.serialization.MissingFieldException('sort');
    else
      $this.sort = sort;
    return $this;
  }
  Room.$metadata$ = {kind: Kind_CLASS, simpleName: 'Room', interfaces: []};
  Room.prototype.component1 = function () {
    return this.name;
  };
  Room.prototype.component2 = function () {
    return this.id;
  };
  Room.prototype.component3 = function () {
    return this.sort;
  };
  Room.prototype.copy_nb871f$ = function (name, id, sort) {
    return new Room(name === void 0 ? this.name : name, id === void 0 ? this.id : id, sort === void 0 ? this.sort : sort);
  };
  Room.prototype.toString = function () {
    return 'Room(name=' + Kotlin.toString(this.name) + (', id=' + Kotlin.toString(this.id)) + (', sort=' + Kotlin.toString(this.sort)) + ')';
  };
  Room.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.sort) | 0;
    return result;
  };
  Room.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.id, other.id) && Kotlin.equals(this.sort, other.sort)))));
  };
  function Session(id, isServiceSession, isPlenumSession, questionAnswers, speakers, description, startsAt, title, endsAt, categoryItems, roomId) {
    Session$Companion_getInstance();
    if (id === void 0)
      id = null;
    if (isServiceSession === void 0)
      isServiceSession = null;
    if (isPlenumSession === void 0)
      isPlenumSession = null;
    if (questionAnswers === void 0)
      questionAnswers = null;
    if (speakers === void 0)
      speakers = null;
    if (description === void 0)
      description = null;
    if (startsAt === void 0)
      startsAt = null;
    if (title === void 0)
      title = null;
    if (endsAt === void 0)
      endsAt = null;
    if (categoryItems === void 0)
      categoryItems = null;
    if (roomId === void 0)
      roomId = null;
    this.id = id;
    this.isServiceSession = isServiceSession;
    this.isPlenumSession = isPlenumSession;
    this.questionAnswers = questionAnswers;
    this.speakers = speakers;
    this.description = description;
    this.startsAt = startsAt;
    this.title = title;
    this.endsAt = endsAt;
    this.categoryItems = categoryItems;
    this.roomId = roomId;
  }
  function Session$Companion() {
    this.serialClassDesc_z3rdyz$_0 = new SerialClassDescImpl('com.fans.kotlinconf.data.Session');
    this.serialClassDesc.addElement_61zpoe$('id');
    this.serialClassDesc.addElement_61zpoe$('isServiceSession');
    this.serialClassDesc.addElement_61zpoe$('isPlenumSession');
    this.serialClassDesc.addElement_61zpoe$('questionAnswers');
    this.serialClassDesc.addElement_61zpoe$('speakers');
    this.serialClassDesc.addElement_61zpoe$('description');
    this.serialClassDesc.addElement_61zpoe$('startsAt');
    this.serialClassDesc.addElement_61zpoe$('title');
    this.serialClassDesc.addElement_61zpoe$('endsAt');
    this.serialClassDesc.addElement_61zpoe$('categoryItems');
    this.serialClassDesc.addElement_61zpoe$('roomId');
    Session$Companion_instance = this;
  }
  Object.defineProperty(Session$Companion.prototype, 'serialClassDesc', {get: function () {
    return this.serialClassDesc_z3rdyz$_0;
  }});
  Session$Companion.prototype.save_ejfkry$ = function (output_0, obj) {
    var output = output_0.writeBegin_276rha$(this.serialClassDesc, []);
    output.writeNullableSerializableElementValue_874a36$(this.serialClassDesc, 0, $module$kotlinx_serialization_runtime_js.kotlinx.serialization.internal.StringSerializer, obj.id);
    output.writeNullableSerializableElementValue_874a36$(this.serialClassDesc, 1, $module$kotlinx_serialization_runtime_js.kotlinx.serialization.internal.BooleanSerializer, obj.isServiceSession);
    output.writeNullableSerializableElementValue_874a36$(this.serialClassDesc, 2, $module$kotlinx_serialization_runtime_js.kotlinx.serialization.internal.BooleanSerializer, obj.isPlenumSession);
    output.writeNullableSerializableElementValue_874a36$(this.serialClassDesc, 3, new $module$kotlinx_serialization_runtime_js.kotlinx.serialization.internal.ArrayListSerializer(new $module$kotlinx_serialization_runtime_js.kotlinx.serialization.internal.NullableSerializer(_.com.fans.kotlinconf.data.QuestionAnswer.Companion)), obj.questionAnswers);
    output.writeNullableSerializableElementValue_874a36$(this.serialClassDesc, 4, new $module$kotlinx_serialization_runtime_js.kotlinx.serialization.internal.ArrayListSerializer(new $module$kotlinx_serialization_runtime_js.kotlinx.serialization.internal.NullableSerializer($module$kotlinx_serialization_runtime_js.kotlinx.serialization.internal.StringSerializer)), obj.speakers);
    output.writeNullableSerializableElementValue_874a36$(this.serialClassDesc, 5, $module$kotlinx_serialization_runtime_js.kotlinx.serialization.internal.StringSerializer, obj.description);
    output.writeNullableSerializableElementValue_874a36$(this.serialClassDesc, 6, $module$kotlinx_serialization_runtime_js.kotlinx.serialization.internal.StringSerializer, obj.startsAt);
    output.writeNullableSerializableElementValue_874a36$(this.serialClassDesc, 7, $module$kotlinx_serialization_runtime_js.kotlinx.serialization.internal.StringSerializer, obj.title);
    output.writeNullableSerializableElementValue_874a36$(this.serialClassDesc, 8, $module$kotlinx_serialization_runtime_js.kotlinx.serialization.internal.StringSerializer, obj.endsAt);
    output.writeNullableSerializableElementValue_874a36$(this.serialClassDesc, 9, new $module$kotlinx_serialization_runtime_js.kotlinx.serialization.internal.ArrayListSerializer(new $module$kotlinx_serialization_runtime_js.kotlinx.serialization.internal.NullableSerializer($module$kotlinx_serialization_runtime_js.kotlinx.serialization.internal.IntSerializer)), obj.categoryItems);
    output.writeNullableSerializableElementValue_874a36$(this.serialClassDesc, 10, $module$kotlinx_serialization_runtime_js.kotlinx.serialization.internal.IntSerializer, obj.roomId);
    output.writeEnd_f6e2p$(this.serialClassDesc);
  };
  Session$Companion.prototype.load_ljkqvg$ = function (input_0) {
    var index, readAll = false;
    var bitMask0 = 0;
    var id, isServiceSession, isPlenumSession, questionAnswers, speakers, description, startsAt, title, endsAt, categoryItems, roomId;
    var input = input_0.readBegin_276rha$(this.serialClassDesc, []);
    loopLabel: while (true) {
      index = input.readElement_f6e2p$(this.serialClassDesc);
      switch (index) {
        case -2:
          readAll = true;
        case 0:
          id = input.readNullableSerializableElementValue_3ohjxu$(this.serialClassDesc, 0, $module$kotlinx_serialization_runtime_js.kotlinx.serialization.internal.StringSerializer);
          bitMask0 |= 1;
          if (!readAll)
            break;
        case 1:
          isServiceSession = input.readNullableSerializableElementValue_3ohjxu$(this.serialClassDesc, 1, $module$kotlinx_serialization_runtime_js.kotlinx.serialization.internal.BooleanSerializer);
          bitMask0 |= 2;
          if (!readAll)
            break;
        case 2:
          isPlenumSession = input.readNullableSerializableElementValue_3ohjxu$(this.serialClassDesc, 2, $module$kotlinx_serialization_runtime_js.kotlinx.serialization.internal.BooleanSerializer);
          bitMask0 |= 4;
          if (!readAll)
            break;
        case 3:
          questionAnswers = input.readNullableSerializableElementValue_3ohjxu$(this.serialClassDesc, 3, new $module$kotlinx_serialization_runtime_js.kotlinx.serialization.internal.ArrayListSerializer(new $module$kotlinx_serialization_runtime_js.kotlinx.serialization.internal.NullableSerializer(_.com.fans.kotlinconf.data.QuestionAnswer.Companion)));
          bitMask0 |= 8;
          if (!readAll)
            break;
        case 4:
          speakers = input.readNullableSerializableElementValue_3ohjxu$(this.serialClassDesc, 4, new $module$kotlinx_serialization_runtime_js.kotlinx.serialization.internal.ArrayListSerializer(new $module$kotlinx_serialization_runtime_js.kotlinx.serialization.internal.NullableSerializer($module$kotlinx_serialization_runtime_js.kotlinx.serialization.internal.StringSerializer)));
          bitMask0 |= 16;
          if (!readAll)
            break;
        case 5:
          description = input.readNullableSerializableElementValue_3ohjxu$(this.serialClassDesc, 5, $module$kotlinx_serialization_runtime_js.kotlinx.serialization.internal.StringSerializer);
          bitMask0 |= 32;
          if (!readAll)
            break;
        case 6:
          startsAt = input.readNullableSerializableElementValue_3ohjxu$(this.serialClassDesc, 6, $module$kotlinx_serialization_runtime_js.kotlinx.serialization.internal.StringSerializer);
          bitMask0 |= 64;
          if (!readAll)
            break;
        case 7:
          title = input.readNullableSerializableElementValue_3ohjxu$(this.serialClassDesc, 7, $module$kotlinx_serialization_runtime_js.kotlinx.serialization.internal.StringSerializer);
          bitMask0 |= 128;
          if (!readAll)
            break;
        case 8:
          endsAt = input.readNullableSerializableElementValue_3ohjxu$(this.serialClassDesc, 8, $module$kotlinx_serialization_runtime_js.kotlinx.serialization.internal.StringSerializer);
          bitMask0 |= 256;
          if (!readAll)
            break;
        case 9:
          categoryItems = input.readNullableSerializableElementValue_3ohjxu$(this.serialClassDesc, 9, new $module$kotlinx_serialization_runtime_js.kotlinx.serialization.internal.ArrayListSerializer(new $module$kotlinx_serialization_runtime_js.kotlinx.serialization.internal.NullableSerializer($module$kotlinx_serialization_runtime_js.kotlinx.serialization.internal.IntSerializer)));
          bitMask0 |= 512;
          if (!readAll)
            break;
        case 10:
          roomId = input.readNullableSerializableElementValue_3ohjxu$(this.serialClassDesc, 10, $module$kotlinx_serialization_runtime_js.kotlinx.serialization.internal.IntSerializer);
          bitMask0 |= 1024;
          if (!readAll)
            break;
        case -1:
          break loopLabel;
        default:throw new $module$kotlinx_serialization_runtime_js.kotlinx.serialization.UnknownFieldException(index);
      }
    }
    input.readEnd_f6e2p$(this.serialClassDesc);
    return Session_init(bitMask0, id, isServiceSession, isPlenumSession, questionAnswers, speakers, description, startsAt, title, endsAt, categoryItems, roomId, null);
  };
  Session$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: [KSerializer]};
  var Session$Companion_instance = null;
  function Session$Companion_getInstance() {
    if (Session$Companion_instance === null) {
      new Session$Companion();
    }
    return Session$Companion_instance;
  }
  function Session_init(seen, id, isServiceSession, isPlenumSession, questionAnswers, speakers, description, startsAt, title, endsAt, categoryItems, roomId, serializationConstructorMarker) {
    var $this = Object.create(_.com.fans.kotlinconf.data.Session.prototype);
    if ((seen & 1) === 0)
      throw new $module$kotlinx_serialization_runtime_js.kotlinx.serialization.MissingFieldException('id');
    else
      $this.id = id;
    if ((seen & 2) === 0)
      throw new $module$kotlinx_serialization_runtime_js.kotlinx.serialization.MissingFieldException('isServiceSession');
    else
      $this.isServiceSession = isServiceSession;
    if ((seen & 4) === 0)
      throw new $module$kotlinx_serialization_runtime_js.kotlinx.serialization.MissingFieldException('isPlenumSession');
    else
      $this.isPlenumSession = isPlenumSession;
    if ((seen & 8) === 0)
      throw new $module$kotlinx_serialization_runtime_js.kotlinx.serialization.MissingFieldException('questionAnswers');
    else
      $this.questionAnswers = questionAnswers;
    if ((seen & 16) === 0)
      throw new $module$kotlinx_serialization_runtime_js.kotlinx.serialization.MissingFieldException('speakers');
    else
      $this.speakers = speakers;
    if ((seen & 32) === 0)
      throw new $module$kotlinx_serialization_runtime_js.kotlinx.serialization.MissingFieldException('description');
    else
      $this.description = description;
    if ((seen & 64) === 0)
      throw new $module$kotlinx_serialization_runtime_js.kotlinx.serialization.MissingFieldException('startsAt');
    else
      $this.startsAt = startsAt;
    if ((seen & 128) === 0)
      throw new $module$kotlinx_serialization_runtime_js.kotlinx.serialization.MissingFieldException('title');
    else
      $this.title = title;
    if ((seen & 256) === 0)
      throw new $module$kotlinx_serialization_runtime_js.kotlinx.serialization.MissingFieldException('endsAt');
    else
      $this.endsAt = endsAt;
    if ((seen & 512) === 0)
      throw new $module$kotlinx_serialization_runtime_js.kotlinx.serialization.MissingFieldException('categoryItems');
    else
      $this.categoryItems = categoryItems;
    if ((seen & 1024) === 0)
      throw new $module$kotlinx_serialization_runtime_js.kotlinx.serialization.MissingFieldException('roomId');
    else
      $this.roomId = roomId;
    return $this;
  }
  Session.$metadata$ = {kind: Kind_CLASS, simpleName: 'Session', interfaces: []};
  Session.prototype.component1 = function () {
    return this.id;
  };
  Session.prototype.component2 = function () {
    return this.isServiceSession;
  };
  Session.prototype.component3 = function () {
    return this.isPlenumSession;
  };
  Session.prototype.component4 = function () {
    return this.questionAnswers;
  };
  Session.prototype.component5 = function () {
    return this.speakers;
  };
  Session.prototype.component6 = function () {
    return this.description;
  };
  Session.prototype.component7 = function () {
    return this.startsAt;
  };
  Session.prototype.component8 = function () {
    return this.title;
  };
  Session.prototype.component9 = function () {
    return this.endsAt;
  };
  Session.prototype.component10 = function () {
    return this.categoryItems;
  };
  Session.prototype.component11 = function () {
    return this.roomId;
  };
  Session.prototype.copy_6ado0p$ = function (id, isServiceSession, isPlenumSession, questionAnswers, speakers, description, startsAt, title, endsAt, categoryItems, roomId) {
    return new Session(id === void 0 ? this.id : id, isServiceSession === void 0 ? this.isServiceSession : isServiceSession, isPlenumSession === void 0 ? this.isPlenumSession : isPlenumSession, questionAnswers === void 0 ? this.questionAnswers : questionAnswers, speakers === void 0 ? this.speakers : speakers, description === void 0 ? this.description : description, startsAt === void 0 ? this.startsAt : startsAt, title === void 0 ? this.title : title, endsAt === void 0 ? this.endsAt : endsAt, categoryItems === void 0 ? this.categoryItems : categoryItems, roomId === void 0 ? this.roomId : roomId);
  };
  Session.prototype.toString = function () {
    return 'Session(id=' + Kotlin.toString(this.id) + (', isServiceSession=' + Kotlin.toString(this.isServiceSession)) + (', isPlenumSession=' + Kotlin.toString(this.isPlenumSession)) + (', questionAnswers=' + Kotlin.toString(this.questionAnswers)) + (', speakers=' + Kotlin.toString(this.speakers)) + (', description=' + Kotlin.toString(this.description)) + (', startsAt=' + Kotlin.toString(this.startsAt)) + (', title=' + Kotlin.toString(this.title)) + (', endsAt=' + Kotlin.toString(this.endsAt)) + (', categoryItems=' + Kotlin.toString(this.categoryItems)) + (', roomId=' + Kotlin.toString(this.roomId)) + ')';
  };
  Session.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.isServiceSession) | 0;
    result = result * 31 + Kotlin.hashCode(this.isPlenumSession) | 0;
    result = result * 31 + Kotlin.hashCode(this.questionAnswers) | 0;
    result = result * 31 + Kotlin.hashCode(this.speakers) | 0;
    result = result * 31 + Kotlin.hashCode(this.description) | 0;
    result = result * 31 + Kotlin.hashCode(this.startsAt) | 0;
    result = result * 31 + Kotlin.hashCode(this.title) | 0;
    result = result * 31 + Kotlin.hashCode(this.endsAt) | 0;
    result = result * 31 + Kotlin.hashCode(this.categoryItems) | 0;
    result = result * 31 + Kotlin.hashCode(this.roomId) | 0;
    return result;
  };
  Session.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.id, other.id) && Kotlin.equals(this.isServiceSession, other.isServiceSession) && Kotlin.equals(this.isPlenumSession, other.isPlenumSession) && Kotlin.equals(this.questionAnswers, other.questionAnswers) && Kotlin.equals(this.speakers, other.speakers) && Kotlin.equals(this.description, other.description) && Kotlin.equals(this.startsAt, other.startsAt) && Kotlin.equals(this.title, other.title) && Kotlin.equals(this.endsAt, other.endsAt) && Kotlin.equals(this.categoryItems, other.categoryItems) && Kotlin.equals(this.roomId, other.roomId)))));
  };
  var SessionGroup$Companion_instance = null;
  function Speaker(firstName, lastName, profilePicture, sessions, tagLine, isTopSpeaker, bio, fullName, links, id) {
    Speaker$Companion_getInstance();
    if (firstName === void 0)
      firstName = null;
    if (lastName === void 0)
      lastName = null;
    if (profilePicture === void 0)
      profilePicture = null;
    if (sessions === void 0)
      sessions = null;
    if (tagLine === void 0)
      tagLine = null;
    if (isTopSpeaker === void 0)
      isTopSpeaker = null;
    if (bio === void 0)
      bio = null;
    if (fullName === void 0)
      fullName = null;
    if (links === void 0)
      links = null;
    if (id === void 0)
      id = null;
    this.firstName = firstName;
    this.lastName = lastName;
    this.profilePicture = profilePicture;
    this.sessions = sessions;
    this.tagLine = tagLine;
    this.isTopSpeaker = isTopSpeaker;
    this.bio = bio;
    this.fullName = fullName;
    this.links = links;
    this.id = id;
  }
  function Speaker$Companion() {
    this.serialClassDesc_9sdape$_0 = new SerialClassDescImpl('com.fans.kotlinconf.data.Speaker');
    this.serialClassDesc.addElement_61zpoe$('firstName');
    this.serialClassDesc.addElement_61zpoe$('lastName');
    this.serialClassDesc.addElement_61zpoe$('profilePicture');
    this.serialClassDesc.addElement_61zpoe$('sessions');
    this.serialClassDesc.addElement_61zpoe$('tagLine');
    this.serialClassDesc.addElement_61zpoe$('isTopSpeaker');
    this.serialClassDesc.addElement_61zpoe$('bio');
    this.serialClassDesc.addElement_61zpoe$('fullName');
    this.serialClassDesc.addElement_61zpoe$('links');
    this.serialClassDesc.addElement_61zpoe$('id');
    Speaker$Companion_instance = this;
  }
  Object.defineProperty(Speaker$Companion.prototype, 'serialClassDesc', {get: function () {
    return this.serialClassDesc_9sdape$_0;
  }});
  Speaker$Companion.prototype.save_ejfkry$ = function (output_0, obj) {
    var output = output_0.writeBegin_276rha$(this.serialClassDesc, []);
    output.writeNullableSerializableElementValue_874a36$(this.serialClassDesc, 0, $module$kotlinx_serialization_runtime_js.kotlinx.serialization.internal.StringSerializer, obj.firstName);
    output.writeNullableSerializableElementValue_874a36$(this.serialClassDesc, 1, $module$kotlinx_serialization_runtime_js.kotlinx.serialization.internal.StringSerializer, obj.lastName);
    output.writeNullableSerializableElementValue_874a36$(this.serialClassDesc, 2, $module$kotlinx_serialization_runtime_js.kotlinx.serialization.internal.StringSerializer, obj.profilePicture);
    output.writeNullableSerializableElementValue_874a36$(this.serialClassDesc, 3, new $module$kotlinx_serialization_runtime_js.kotlinx.serialization.internal.ArrayListSerializer(new $module$kotlinx_serialization_runtime_js.kotlinx.serialization.internal.NullableSerializer($module$kotlinx_serialization_runtime_js.kotlinx.serialization.internal.IntSerializer)), obj.sessions);
    output.writeNullableSerializableElementValue_874a36$(this.serialClassDesc, 4, $module$kotlinx_serialization_runtime_js.kotlinx.serialization.internal.StringSerializer, obj.tagLine);
    output.writeNullableSerializableElementValue_874a36$(this.serialClassDesc, 5, $module$kotlinx_serialization_runtime_js.kotlinx.serialization.internal.BooleanSerializer, obj.isTopSpeaker);
    output.writeNullableSerializableElementValue_874a36$(this.serialClassDesc, 6, $module$kotlinx_serialization_runtime_js.kotlinx.serialization.internal.StringSerializer, obj.bio);
    output.writeNullableSerializableElementValue_874a36$(this.serialClassDesc, 7, $module$kotlinx_serialization_runtime_js.kotlinx.serialization.internal.StringSerializer, obj.fullName);
    output.writeNullableSerializableElementValue_874a36$(this.serialClassDesc, 8, new $module$kotlinx_serialization_runtime_js.kotlinx.serialization.internal.ArrayListSerializer(new $module$kotlinx_serialization_runtime_js.kotlinx.serialization.internal.NullableSerializer(_.com.fans.kotlinconf.data.Link.Companion)), obj.links);
    output.writeNullableSerializableElementValue_874a36$(this.serialClassDesc, 9, $module$kotlinx_serialization_runtime_js.kotlinx.serialization.internal.StringSerializer, obj.id);
    output.writeEnd_f6e2p$(this.serialClassDesc);
  };
  Speaker$Companion.prototype.load_ljkqvg$ = function (input_0) {
    var index, readAll = false;
    var bitMask0 = 0;
    var firstName, lastName, profilePicture, sessions, tagLine, isTopSpeaker, bio, fullName, links, id;
    var input = input_0.readBegin_276rha$(this.serialClassDesc, []);
    loopLabel: while (true) {
      index = input.readElement_f6e2p$(this.serialClassDesc);
      switch (index) {
        case -2:
          readAll = true;
        case 0:
          firstName = input.readNullableSerializableElementValue_3ohjxu$(this.serialClassDesc, 0, $module$kotlinx_serialization_runtime_js.kotlinx.serialization.internal.StringSerializer);
          bitMask0 |= 1;
          if (!readAll)
            break;
        case 1:
          lastName = input.readNullableSerializableElementValue_3ohjxu$(this.serialClassDesc, 1, $module$kotlinx_serialization_runtime_js.kotlinx.serialization.internal.StringSerializer);
          bitMask0 |= 2;
          if (!readAll)
            break;
        case 2:
          profilePicture = input.readNullableSerializableElementValue_3ohjxu$(this.serialClassDesc, 2, $module$kotlinx_serialization_runtime_js.kotlinx.serialization.internal.StringSerializer);
          bitMask0 |= 4;
          if (!readAll)
            break;
        case 3:
          sessions = input.readNullableSerializableElementValue_3ohjxu$(this.serialClassDesc, 3, new $module$kotlinx_serialization_runtime_js.kotlinx.serialization.internal.ArrayListSerializer(new $module$kotlinx_serialization_runtime_js.kotlinx.serialization.internal.NullableSerializer($module$kotlinx_serialization_runtime_js.kotlinx.serialization.internal.IntSerializer)));
          bitMask0 |= 8;
          if (!readAll)
            break;
        case 4:
          tagLine = input.readNullableSerializableElementValue_3ohjxu$(this.serialClassDesc, 4, $module$kotlinx_serialization_runtime_js.kotlinx.serialization.internal.StringSerializer);
          bitMask0 |= 16;
          if (!readAll)
            break;
        case 5:
          isTopSpeaker = input.readNullableSerializableElementValue_3ohjxu$(this.serialClassDesc, 5, $module$kotlinx_serialization_runtime_js.kotlinx.serialization.internal.BooleanSerializer);
          bitMask0 |= 32;
          if (!readAll)
            break;
        case 6:
          bio = input.readNullableSerializableElementValue_3ohjxu$(this.serialClassDesc, 6, $module$kotlinx_serialization_runtime_js.kotlinx.serialization.internal.StringSerializer);
          bitMask0 |= 64;
          if (!readAll)
            break;
        case 7:
          fullName = input.readNullableSerializableElementValue_3ohjxu$(this.serialClassDesc, 7, $module$kotlinx_serialization_runtime_js.kotlinx.serialization.internal.StringSerializer);
          bitMask0 |= 128;
          if (!readAll)
            break;
        case 8:
          links = input.readNullableSerializableElementValue_3ohjxu$(this.serialClassDesc, 8, new $module$kotlinx_serialization_runtime_js.kotlinx.serialization.internal.ArrayListSerializer(new $module$kotlinx_serialization_runtime_js.kotlinx.serialization.internal.NullableSerializer(_.com.fans.kotlinconf.data.Link.Companion)));
          bitMask0 |= 256;
          if (!readAll)
            break;
        case 9:
          id = input.readNullableSerializableElementValue_3ohjxu$(this.serialClassDesc, 9, $module$kotlinx_serialization_runtime_js.kotlinx.serialization.internal.StringSerializer);
          bitMask0 |= 512;
          if (!readAll)
            break;
        case -1:
          break loopLabel;
        default:throw new $module$kotlinx_serialization_runtime_js.kotlinx.serialization.UnknownFieldException(index);
      }
    }
    input.readEnd_f6e2p$(this.serialClassDesc);
    return Speaker_init(bitMask0, firstName, lastName, profilePicture, sessions, tagLine, isTopSpeaker, bio, fullName, links, id, null);
  };
  Speaker$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: [KSerializer]};
  var Speaker$Companion_instance = null;
  function Speaker$Companion_getInstance() {
    if (Speaker$Companion_instance === null) {
      new Speaker$Companion();
    }
    return Speaker$Companion_instance;
  }
  function Speaker_init(seen, firstName, lastName, profilePicture, sessions, tagLine, isTopSpeaker, bio, fullName, links, id, serializationConstructorMarker) {
    var $this = Object.create(_.com.fans.kotlinconf.data.Speaker.prototype);
    if ((seen & 1) === 0)
      throw new $module$kotlinx_serialization_runtime_js.kotlinx.serialization.MissingFieldException('firstName');
    else
      $this.firstName = firstName;
    if ((seen & 2) === 0)
      throw new $module$kotlinx_serialization_runtime_js.kotlinx.serialization.MissingFieldException('lastName');
    else
      $this.lastName = lastName;
    if ((seen & 4) === 0)
      throw new $module$kotlinx_serialization_runtime_js.kotlinx.serialization.MissingFieldException('profilePicture');
    else
      $this.profilePicture = profilePicture;
    if ((seen & 8) === 0)
      throw new $module$kotlinx_serialization_runtime_js.kotlinx.serialization.MissingFieldException('sessions');
    else
      $this.sessions = sessions;
    if ((seen & 16) === 0)
      throw new $module$kotlinx_serialization_runtime_js.kotlinx.serialization.MissingFieldException('tagLine');
    else
      $this.tagLine = tagLine;
    if ((seen & 32) === 0)
      throw new $module$kotlinx_serialization_runtime_js.kotlinx.serialization.MissingFieldException('isTopSpeaker');
    else
      $this.isTopSpeaker = isTopSpeaker;
    if ((seen & 64) === 0)
      throw new $module$kotlinx_serialization_runtime_js.kotlinx.serialization.MissingFieldException('bio');
    else
      $this.bio = bio;
    if ((seen & 128) === 0)
      throw new $module$kotlinx_serialization_runtime_js.kotlinx.serialization.MissingFieldException('fullName');
    else
      $this.fullName = fullName;
    if ((seen & 256) === 0)
      throw new $module$kotlinx_serialization_runtime_js.kotlinx.serialization.MissingFieldException('links');
    else
      $this.links = links;
    if ((seen & 512) === 0)
      throw new $module$kotlinx_serialization_runtime_js.kotlinx.serialization.MissingFieldException('id');
    else
      $this.id = id;
    return $this;
  }
  Speaker.$metadata$ = {kind: Kind_CLASS, simpleName: 'Speaker', interfaces: []};
  Speaker.prototype.component1 = function () {
    return this.firstName;
  };
  Speaker.prototype.component2 = function () {
    return this.lastName;
  };
  Speaker.prototype.component3 = function () {
    return this.profilePicture;
  };
  Speaker.prototype.component4 = function () {
    return this.sessions;
  };
  Speaker.prototype.component5 = function () {
    return this.tagLine;
  };
  Speaker.prototype.component6 = function () {
    return this.isTopSpeaker;
  };
  Speaker.prototype.component7 = function () {
    return this.bio;
  };
  Speaker.prototype.component8 = function () {
    return this.fullName;
  };
  Speaker.prototype.component9 = function () {
    return this.links;
  };
  Speaker.prototype.component10 = function () {
    return this.id;
  };
  Speaker.prototype.copy_pe6sqb$ = function (firstName, lastName, profilePicture, sessions, tagLine, isTopSpeaker, bio, fullName, links, id) {
    return new Speaker(firstName === void 0 ? this.firstName : firstName, lastName === void 0 ? this.lastName : lastName, profilePicture === void 0 ? this.profilePicture : profilePicture, sessions === void 0 ? this.sessions : sessions, tagLine === void 0 ? this.tagLine : tagLine, isTopSpeaker === void 0 ? this.isTopSpeaker : isTopSpeaker, bio === void 0 ? this.bio : bio, fullName === void 0 ? this.fullName : fullName, links === void 0 ? this.links : links, id === void 0 ? this.id : id);
  };
  Speaker.prototype.toString = function () {
    return 'Speaker(firstName=' + Kotlin.toString(this.firstName) + (', lastName=' + Kotlin.toString(this.lastName)) + (', profilePicture=' + Kotlin.toString(this.profilePicture)) + (', sessions=' + Kotlin.toString(this.sessions)) + (', tagLine=' + Kotlin.toString(this.tagLine)) + (', isTopSpeaker=' + Kotlin.toString(this.isTopSpeaker)) + (', bio=' + Kotlin.toString(this.bio)) + (', fullName=' + Kotlin.toString(this.fullName)) + (', links=' + Kotlin.toString(this.links)) + (', id=' + Kotlin.toString(this.id)) + ')';
  };
  Speaker.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.firstName) | 0;
    result = result * 31 + Kotlin.hashCode(this.lastName) | 0;
    result = result * 31 + Kotlin.hashCode(this.profilePicture) | 0;
    result = result * 31 + Kotlin.hashCode(this.sessions) | 0;
    result = result * 31 + Kotlin.hashCode(this.tagLine) | 0;
    result = result * 31 + Kotlin.hashCode(this.isTopSpeaker) | 0;
    result = result * 31 + Kotlin.hashCode(this.bio) | 0;
    result = result * 31 + Kotlin.hashCode(this.fullName) | 0;
    result = result * 31 + Kotlin.hashCode(this.links) | 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    return result;
  };
  Speaker.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.firstName, other.firstName) && Kotlin.equals(this.lastName, other.lastName) && Kotlin.equals(this.profilePicture, other.profilePicture) && Kotlin.equals(this.sessions, other.sessions) && Kotlin.equals(this.tagLine, other.tagLine) && Kotlin.equals(this.isTopSpeaker, other.isTopSpeaker) && Kotlin.equals(this.bio, other.bio) && Kotlin.equals(this.fullName, other.fullName) && Kotlin.equals(this.links, other.links) && Kotlin.equals(this.id, other.id)))));
  };
  function Vote(sessionId, rating) {
    Vote$Companion_getInstance();
    if (sessionId === void 0)
      sessionId = null;
    if (rating === void 0)
      rating = 0;
    this.sessionId = sessionId;
    this.rating = rating;
  }
  function Vote$Companion() {
    this.serialClassDesc_tjdwy9$_0 = new SerialClassDescImpl('com.fans.kotlinconf.data.Vote');
    this.serialClassDesc.addElement_61zpoe$('sessionId');
    this.serialClassDesc.addElement_61zpoe$('rating');
    Vote$Companion_instance = this;
  }
  Object.defineProperty(Vote$Companion.prototype, 'serialClassDesc', {get: function () {
    return this.serialClassDesc_tjdwy9$_0;
  }});
  Vote$Companion.prototype.save_ejfkry$ = function (output_0, obj) {
    var output = output_0.writeBegin_276rha$(this.serialClassDesc, []);
    output.writeNullableSerializableElementValue_874a36$(this.serialClassDesc, 0, $module$kotlinx_serialization_runtime_js.kotlinx.serialization.internal.StringSerializer, obj.sessionId);
    output.writeNullableSerializableElementValue_874a36$(this.serialClassDesc, 1, $module$kotlinx_serialization_runtime_js.kotlinx.serialization.internal.IntSerializer, obj.rating);
    output.writeEnd_f6e2p$(this.serialClassDesc);
  };
  Vote$Companion.prototype.load_ljkqvg$ = function (input_0) {
    var index, readAll = false;
    var bitMask0 = 0;
    var sessionId, rating;
    var input = input_0.readBegin_276rha$(this.serialClassDesc, []);
    loopLabel: while (true) {
      index = input.readElement_f6e2p$(this.serialClassDesc);
      switch (index) {
        case -2:
          readAll = true;
        case 0:
          sessionId = input.readNullableSerializableElementValue_3ohjxu$(this.serialClassDesc, 0, $module$kotlinx_serialization_runtime_js.kotlinx.serialization.internal.StringSerializer);
          bitMask0 |= 1;
          if (!readAll)
            break;
        case 1:
          rating = input.readNullableSerializableElementValue_3ohjxu$(this.serialClassDesc, 1, $module$kotlinx_serialization_runtime_js.kotlinx.serialization.internal.IntSerializer);
          bitMask0 |= 2;
          if (!readAll)
            break;
        case -1:
          break loopLabel;
        default:throw new $module$kotlinx_serialization_runtime_js.kotlinx.serialization.UnknownFieldException(index);
      }
    }
    input.readEnd_f6e2p$(this.serialClassDesc);
    return Vote_init(bitMask0, sessionId, rating, null);
  };
  Vote$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: [KSerializer]};
  var Vote$Companion_instance = null;
  function Vote$Companion_getInstance() {
    if (Vote$Companion_instance === null) {
      new Vote$Companion();
    }
    return Vote$Companion_instance;
  }
  function Vote_init(seen, sessionId, rating, serializationConstructorMarker) {
    var $this = Object.create(_.com.fans.kotlinconf.data.Vote.prototype);
    if ((seen & 1) === 0)
      throw new $module$kotlinx_serialization_runtime_js.kotlinx.serialization.MissingFieldException('sessionId');
    else
      $this.sessionId = sessionId;
    if ((seen & 2) === 0)
      throw new $module$kotlinx_serialization_runtime_js.kotlinx.serialization.MissingFieldException('rating');
    else
      $this.rating = rating;
    return $this;
  }
  var package$com = _.com || (_.com = {});
  var package$fans = package$com.fans || (package$com.fans = {});
  var package$kotlinconf = package$fans.kotlinconf || (package$fans.kotlinconf = {});
  package$kotlinconf.parseDate_61zpoe$ = parseDate;
  package$kotlinconf.toReadableDateString_h7jqzd$ = toReadableDateString;
  package$kotlinconf.toReadableTimeString_h7jqzd$ = toReadableTimeString;
  package$kotlinconf.toReadableDateTimeString_h7jqzd$ = toReadableDateTimeString;
  package$kotlinconf.toReadableString_wfuy6$ = toReadableString;
  package$kotlinconf.timeSuffix_h7jqzd$ = timeSuffix;
  package$kotlinconf.readableHours_h7jqzd$ = readableHours;
  package$kotlinconf.asMinutesString_s8ev3n$ = asMinutesString;
  Object.defineProperty(SessionModel, 'Companion', {get: SessionModel$Companion_getInstance});
  package$kotlinconf.SessionModel = SessionModel;
  Object.defineProperty(AllData, 'Companion', {get: AllData$Companion_getInstance});
  var package$data = package$kotlinconf.data || (package$kotlinconf.data = {});
  package$data.AllData = AllData;
  Object.defineProperty(Category, 'Companion', {get: Category$Companion_getInstance});
  package$data.Category = Category;
  Object.defineProperty(CategoryItem, 'Companion', {get: CategoryItem$Companion_getInstance});
  package$data.CategoryItem = CategoryItem;
  Object.defineProperty(Favorite, 'Companion', {get: Favorite$Companion_getInstance});
  package$data.Favorite = Favorite;
  Object.defineProperty(Link, 'Companion', {get: Link$Companion_getInstance});
  package$data.Link = Link;
  Object.defineProperty(Question, 'Companion', {get: Question$Companion_getInstance});
  package$data.Question = Question;
  Object.defineProperty(QuestionAnswer, 'Companion', {get: QuestionAnswer$Companion_getInstance});
  package$data.QuestionAnswer = QuestionAnswer;
  Object.defineProperty(Room, 'Companion', {get: Room$Companion_getInstance});
  package$data.Room = Room;
  Object.defineProperty(Session, 'Companion', {get: Session$Companion_getInstance});
  package$data.Session = Session;
  Object.defineProperty(Speaker, 'Companion', {get: Speaker$Companion_getInstance});
  package$data.Speaker = Speaker;
  Object.defineProperty(Vote, 'Companion', {get: Vote$Companion_getInstance});
  package$data.Vote = Vote;
  months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  emDash = '\u2014';
  return _;
}(module.exports, require('kotlin'), require('kotlinx-serialization-runtime-js')));

//# sourceMappingURL=common-js.js.map
