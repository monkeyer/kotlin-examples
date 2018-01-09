(function (_, Kotlin, $module$kotlinx_serialization_runtime_js, $module$common_js, $module$kotlin_react_dom, $module$kotlin_extensions, $module$kotlin_react, $module$react_router_dom) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var CoroutineImpl = Kotlin.kotlin.coroutines.experimental.CoroutineImpl;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.experimental.intrinsics.COROUTINE_SUSPENDED;
  var JSON_0 = $module$kotlinx_serialization_runtime_js.kotlinx.serialization.json.JSON;
  var AllData = $module$common_js.com.fans.kotlinconf.data.AllData;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var SessionModel = $module$common_js.com.fans.kotlinconf.SessionModel;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var Unit = Kotlin.kotlin.Unit;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var throwCCE = Kotlin.throwCCE;
  var RuntimeException = Kotlin.kotlin.RuntimeException;
  var experimental = Kotlin.kotlin.coroutines.experimental;
  var Continuation = Kotlin.kotlin.coroutines.experimental.Continuation;
  var startCoroutine = Kotlin.kotlin.coroutines.experimental.startCoroutine_xtwlez$;
  var equals = Kotlin.equals;
  var withIndex = Kotlin.kotlin.collections.withIndex_us0mfu$;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var listOf = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var sum = Kotlin.kotlin.collections.sum_plj8ka$;
  var json = Kotlin.kotlin.js.json_pyyo18$;
  var round = Kotlin.kotlin.math.round_14dthe$;
  var getCallableRef = Kotlin.getCallableRef;
  var RComponent_init = $module$kotlin_react.react.RComponent_init_lqgejo$;
  var RComponent = $module$kotlin_react.react.RComponent;
  var Regex = Kotlin.kotlin.text.Regex_61zpoe$;
  var ensureNotNull = Kotlin.ensureNotNull;
  var toString = Kotlin.toString;
  var Exception = Kotlin.kotlin.Exception;
  var getKClass = Kotlin.getKClass;
  var HashRouterComponent = $module$react_router_dom.HashRouter;
  var SwitchComponent = $module$react_router_dom.Switch;
  var RouteComponent = $module$react_router_dom.Route;
  var get_js = Kotlin.kotlin.js.get_js_1yb8b7$;
  var LinkComponent = $module$react_router_dom.Link;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var parseDate = $module$common_js.com.fans.kotlinconf.parseDate_61zpoe$;
  var toReadableString = $module$common_js.com.fans.kotlinconf.toReadableString_wfuy6$;
  var toReadableDateTimeString = $module$common_js.com.fans.kotlinconf.toReadableDateTimeString_h7jqzd$;
  var render = $module$kotlin_react_dom.react.dom.render_4s0l5f$;
  SessionComponent.prototype = Object.create(RComponent.prototype);
  SessionComponent.prototype.constructor = SessionComponent;
  SessionsComponent.prototype = Object.create(RComponent.prototype);
  SessionsComponent.prototype.constructor = SessionsComponent;
  function SessionsAPI(baseUrl, baseWsUrl) {
    this.baseUrl_0 = baseUrl;
    this.baseWsUrl_0 = baseWsUrl;
  }
  var serializer = $module$kotlinx_serialization_runtime_js.kotlinx.serialization.serializer_1yb8b7$;
  SessionsAPI.prototype.fetchAll_0 = function (continuation_0, suspended) {
    var instance = new Coroutine$fetchAll_0(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$fetchAll_0($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
  }
  Coroutine$fetchAll_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$fetchAll_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$fetchAll_0.prototype.constructor = Coroutine$fetchAll_0;
  Coroutine$fetchAll_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = httpGet(this.$this.baseUrl_0 + '/all', this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            var rawData = this.result_0;
            return JSON_0.Companion.parse_fgf4e8$(serializer(Kotlin.getKClass(AllData)), rawData);
        }
      }
       catch (e) {
        if (this.state_0 === 1)
          throw e;
        else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  SessionsAPI.prototype.fetchSessions = function (continuation_0, suspended) {
    var instance = new Coroutine$fetchSessions(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$fetchSessions($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
  }
  Coroutine$fetchSessions.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$fetchSessions.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$fetchSessions.prototype.constructor = Coroutine$fetchSessions;
  Coroutine$fetchSessions.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            this.state_0 = 2;
            this.result_0 = this.$this.fetchAll_0(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            return (tmp$ = this.result_0.sessions) != null ? tmp$ : emptyList();
        }
      }
       catch (e) {
        if (this.state_0 === 1)
          throw e;
        else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  SessionsAPI.prototype.fetchSession_61zpoe$ = function (id_0, continuation_0, suspended) {
    var instance = new Coroutine$fetchSession_61zpoe$(this, id_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$fetchSession_61zpoe$($this, id_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$id = id_0;
  }
  Coroutine$fetchSession_61zpoe$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$fetchSession_61zpoe$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$fetchSession_61zpoe$.prototype.constructor = Coroutine$fetchSession_61zpoe$;
  Coroutine$fetchSession_61zpoe$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.$this.fetchAll_0(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            var all = this.result_0;
            return SessionModel.Companion.forSession_bnqjtr$(all, this.local$id);
        }
      }
       catch (e) {
        if (this.state_0 === 1)
          throw e;
        else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function SessionsAPI$subscribeToVotes$connect$lambda$lambda(closure$callback) {
    return function (event) {
      closure$callback(JSON.parse(event.data));
      return Unit;
    };
  }
  function SessionsAPI$subscribeToVotes$connect$lambda$lambda$lambda(closure$connect) {
    return function () {
      closure$connect();
      return Unit;
    };
  }
  function SessionsAPI$subscribeToVotes$connect$lambda$lambda_0(closure$connect) {
    return function (it) {
      println('Disconnected from websocket');
      return window.setTimeout(SessionsAPI$subscribeToVotes$connect$lambda$lambda$lambda(closure$connect), 1000);
    };
  }
  function SessionsAPI$subscribeToVotes$connect$lambda(closure$ws, closure$currentWs, closure$callback, closure$connect) {
    return function (it) {
      closure$currentWs.v = closure$ws;
      closure$ws.onmessage = SessionsAPI$subscribeToVotes$connect$lambda$lambda(closure$callback);
      closure$ws.onclose = SessionsAPI$subscribeToVotes$connect$lambda$lambda_0(closure$connect);
      return null;
    };
  }
  function SessionsAPI$subscribeToVotes$connect$lambda$lambda_1(closure$connect) {
    return function () {
      closure$connect();
      return Unit;
    };
  }
  function SessionsAPI$subscribeToVotes$connect$lambda_0(closure$connect) {
    return function (it) {
      return window.setTimeout(SessionsAPI$subscribeToVotes$connect$lambda$lambda_1(closure$connect), 1000);
    };
  }
  function SessionsAPI$subscribeToVotes$connect(closure$closing, this$SessionsAPI, closure$id, closure$currentWs, closure$callback) {
    return function closure$connect() {
      if (closure$closing.v)
        return;
      println('Connected to websocket');
      var ws = new WebSocket(this$SessionsAPI.baseWsUrl_0 + '/sessions/' + closure$id + '/votes');
      ws.onopen = SessionsAPI$subscribeToVotes$connect$lambda(ws, closure$currentWs, closure$callback, closure$connect);
      ws.onerror = SessionsAPI$subscribeToVotes$connect$lambda_0(closure$connect);
    };
  }
  function SessionsAPI$subscribeToVotes$ObjectLiteral(closure$closing, closure$currentWs) {
    this.closure$closing = closure$closing;
    this.closure$currentWs = closure$currentWs;
  }
  SessionsAPI$subscribeToVotes$ObjectLiteral.prototype.close = function () {
    var tmp$;
    println('Connection closed');
    this.closure$closing.v = true;
    (tmp$ = this.closure$currentWs.v) != null ? (tmp$.close(), Unit) : null;
  };
  SessionsAPI$subscribeToVotes$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [VotesSubscription]
  };
  SessionsAPI.prototype.subscribeToVotes_24l2ll$ = function (id, callback) {
    var currentWs = {v: null};
    var closing = {v: false};
    var connect = SessionsAPI$subscribeToVotes$connect(closing, this, id, currentWs, callback);
    connect();
    return new SessionsAPI$subscribeToVotes$ObjectLiteral(closing, currentWs);
  };
  SessionsAPI.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SessionsAPI',
    interfaces: []
  };
  function VotesSubscription() {
  }
  VotesSubscription.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'VotesSubscription',
    interfaces: []
  };
  function httpGet$lambda$lambda(closure$xhr, closure$c) {
    return function (it) {
      var tmp$, tmp$_0;
      if (closure$xhr.readyState === XMLHttpRequest.DONE) {
        if ((closure$xhr.status / 100 | 0) === 2) {
          tmp$_0 = typeof (tmp$ = closure$xhr.response) === 'string' ? tmp$ : throwCCE();
          closure$c.resume_11rb$(tmp$_0);
        }
         else {
          closure$c.resumeWithException_tcv7n7$(new RuntimeException('HTTP error: ' + closure$xhr.status));
        }
      }
      return null;
    };
  }
  function httpGet$lambda(closure$url) {
    return function (c) {
      var xhr = new XMLHttpRequest();
      xhr.onreadystatechange = httpGet$lambda$lambda(xhr, c);
      xhr.open('GET', closure$url);
      xhr.send();
      return Unit;
    };
  }
  var SafeContinuation_init = Kotlin.kotlin.coroutines.experimental.SafeContinuation_init_n4f53e$;
  function suspendCoroutine$lambda(closure$block) {
    return function (c) {
      var safe = SafeContinuation_init(c);
      closure$block(safe);
      return safe.getResult();
    };
  }
  function httpGet(url, continuation) {
    return suspendCoroutine$lambda(httpGet$lambda(url))(continuation.facade);
  }
  function async$lambda$ObjectLiteral(closure$resolve, closure$reject) {
    this.closure$resolve = closure$resolve;
    this.closure$reject = closure$reject;
    this.context_k4jdof$_0 = experimental.EmptyCoroutineContext;
  }
  Object.defineProperty(async$lambda$ObjectLiteral.prototype, 'context', {
    get: function () {
      return this.context_k4jdof$_0;
    }
  });
  async$lambda$ObjectLiteral.prototype.resume_11rb$ = function (value) {
    this.closure$resolve(value);
  };
  async$lambda$ObjectLiteral.prototype.resumeWithException_tcv7n7$ = function (exception) {
    this.closure$reject(exception);
  };
  async$lambda$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [Continuation]
  };
  function async$lambda(closure$x) {
    return function (resolve, reject) {
      startCoroutine(closure$x, new async$lambda$ObjectLiteral(resolve, reject));
      return Unit;
    };
  }
  function async(x) {
    return new Promise(async$lambda(x));
  }
  var sessionsAPI;
  function getWsServer() {
    var location = window.location;
    var wsProtocol = equals(location.protocol, 'https:') ? 'wss' : 'ws';
    return wsProtocol + '://' + location.host;
  }
  function SessionComponent() {
    RComponent_init(this);
    this.votesSubscription_0 = null;
    this.mounted_0 = false;
  }
  var attributesMapOf = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
  var SPAN_init = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.SPAN;
  function span$lambda(closure$classes) {
    return function (it) {
      return new SPAN_init(attributesMapOf('class', closure$classes), it);
    };
  }
  var RDOMBuilder_init = $module$kotlin_react_dom.react.dom.RDOMBuilder;
  var DIV_init = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.DIV;
  function div$lambda(closure$classes) {
    return function (it) {
      return new DIV_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function div$lambda_0(closure$classes) {
    return function (it) {
      return new DIV_init(attributesMapOf('class', closure$classes), it);
    };
  }
  SessionComponent.prototype.render_ss14n$ = function ($receiver) {
    var $receiver_0 = new RDOMBuilder_init(div$lambda('session-view'));
    var value = this.state.session;
    if (value == null) {
      var $receiver_0_0 = new RDOMBuilder_init(div$lambda_0('loading'));
      $receiver_0_0.unaryPlus_pdl1vz$('Loading data...');
      $receiver_0.child_2usv9w$($receiver_0_0.create());
    }
     else {
      var session = value;
      var $receiver_0_1 = new RDOMBuilder_init(div$lambda('session-app-title'));
      $receiver_0_1.unaryPlus_pdl1vz$('KotlinConf App');
      $receiver_0.child_2usv9w$($receiver_0_1.create());
      var $receiver_0_2 = new RDOMBuilder_init(div$lambda('session-badges'));
      var tmp$, tmp$_0;
      tmp$ = ['app-store', 'google-play'];
      for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
        var badge = tmp$[tmp$_0];
        var $receiver_0_3 = new RDOMBuilder_init(span$lambda('session-badge session-badge-' + badge));
        $receiver_0_2.child_2usv9w$($receiver_0_3.create());
        $receiver_0_2.unaryPlus_pdl1vz$(' ');
      }
      $receiver_0.child_2usv9w$($receiver_0_2.create());
      var $receiver_0_4 = new RDOMBuilder_init(div$lambda('session-block'));
      this.renderSessionBlock_0($receiver_0_4, session);
      $receiver_0.child_2usv9w$($receiver_0_4.create());
      var votes = this.state.votes;
      if (votes != null) {
        this.renderVotes_0($receiver_0, votes);
      }
       else {
        var $receiver_0_5 = new RDOMBuilder_init(div$lambda('session-votes-unavailable'));
        $receiver_0_5.unaryPlus_pdl1vz$('Sorry, votes information unavailable');
        $receiver_0.child_2usv9w$($receiver_0_5.create());
      }
    }
    return $receiver.child_2usv9w$($receiver_0.create());
  };
  var P_init = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.P;
  function p$lambda(closure$classes) {
    return function (it) {
      return new P_init(attributesMapOf('class', closure$classes), it);
    };
  }
  SessionComponent.prototype.renderSessionBlock_0 = function ($receiver, session) {
    var $receiver_0 = new RDOMBuilder_init(div$lambda('session-info-block'));
    var $receiver_0_0 = new RDOMBuilder_init(div$lambda('session-title'));
    $receiver_0_0.unaryPlus_pdl1vz$(session.title);
    $receiver_0.child_2usv9w$($receiver_0_0.create());
    var $receiver_0_1 = new RDOMBuilder_init(div$lambda('session-speakers'));
    var tmp$;
    var $receiver_0_2 = new RDOMBuilder_init(span$lambda('session-speakers-label'));
    $receiver_0_2.unaryPlus_pdl1vz$('By ');
    $receiver_0_1.child_2usv9w$($receiver_0_2.create());
    tmp$ = withIndex(session.speakers).iterator();
    while (tmp$.hasNext()) {
      var tmp$_0 = tmp$.next();
      var index = tmp$_0.component1()
      , speaker = tmp$_0.component2();
      if (index > 0) {
        var $receiver_0_3 = new RDOMBuilder_init(span$lambda('session-speaker-separator'));
        $receiver_0_3.unaryPlus_pdl1vz$(', ');
        $receiver_0_1.child_2usv9w$($receiver_0_3.create());
      }
      var $receiver_0_4 = new RDOMBuilder_init(span$lambda('session-speaker'));
      var tmp$_1;
      $receiver_0_4.unaryPlus_pdl1vz$((tmp$_1 = speaker.fullName) != null ? tmp$_1 : '<Unknown name>');
      $receiver_0_1.child_2usv9w$($receiver_0_4.create());
    }
    $receiver_0.child_2usv9w$($receiver_0_1.create());
    var $receiver_0_5 = new RDOMBuilder_init(div$lambda('session-description'));
    var tmp$_2;
    var $receiver_0_6 = new RDOMBuilder_init(div$lambda('session-subtitle'));
    var tmp$_3;
    dateRange_0($receiver_0_6, to(session.startsAt, session.endsAt));
    if ((tmp$_3 = session.room) != null) {
      var $receiver_0_7 = new RDOMBuilder_init(div$lambda('session-room'));
      $receiver_0_7.unaryPlus_pdl1vz$(tmp$_3);
      $receiver_0_6.child_2usv9w$($receiver_0_7.create());
    }
    $receiver_0_5.child_2usv9w$($receiver_0_6.create());
    var $receiver_1 = session.description;
    tmp$_2 = lineSeparatorRegex.split_905azu$($receiver_1, 0).iterator();
    while (tmp$_2.hasNext()) {
      var part = tmp$_2.next();
      var $receiver_0_8 = new RDOMBuilder_init(p$lambda(null));
      $receiver_0_8.unaryPlus_pdl1vz$(part);
      $receiver_0_5.child_2usv9w$($receiver_0_8.create());
    }
    $receiver_0.child_2usv9w$($receiver_0_5.create());
    $receiver.child_2usv9w$($receiver_0.create());
    var $receiver_0_9 = new RDOMBuilder_init(div$lambda('session-smiles-label'));
    $receiver_0_9.unaryPlus_pdl1vz$('Tap to rate:');
    $receiver.child_2usv9w$($receiver_0_9.create());
    var $receiver_0_10 = new RDOMBuilder_init(div$lambda('session-smiles'));
    var tmp$_4, tmp$_5;
    tmp$_4 = ['happy', 'neutral', 'unhappy'];
    for (tmp$_5 = 0; tmp$_5 !== tmp$_4.length; ++tmp$_5) {
      var mood = tmp$_4[tmp$_5];
      $receiver_0_10.unaryPlus_pdl1vz$(' ');
      var $receiver_0_11 = new RDOMBuilder_init(span$lambda('session-smile-small session-smile-small-' + mood));
      $receiver_0_10.child_2usv9w$($receiver_0_11.create());
    }
    $receiver.child_2usv9w$($receiver_0_10.create());
    var $receiver_0_12 = new RDOMBuilder_init(div$lambda('session-circle'));
    $receiver.child_2usv9w$($receiver_0_12.create());
  };
  function SessionComponent$renderVotes$percentage(closure$total) {
    return function (value) {
      return closure$total === 0 ? 0.0 : value / closure$total;
    };
  }
  function SessionComponent$renderVotes$votes$lambda$lambda(closure$id, closure$percent, this$SessionComponent, closure$votePosition) {
    return function ($receiver) {
      $receiver.className = 'session-votes-' + closure$id;
      $receiver.style = json([to('width', this$SessionComponent.asRelativePosition_0(closure$percent)), to('left', this$SessionComponent.asRelativePosition_0(closure$votePosition.v))]);
      return Unit;
    };
  }
  function SessionComponent$renderVotes$votes$lambda(closure$value, closure$percentage, closure$id, this$SessionComponent, closure$votePosition) {
    return function ($receiver) {
      var percent = closure$percentage(closure$value);
      $receiver.attrs_slhiwc$(SessionComponent$renderVotes$votes$lambda$lambda(closure$id, percent, this$SessionComponent, closure$votePosition));
      closure$votePosition.v += percent;
      var classes = 'session-votes-content';
      var $receiver_0 = new RDOMBuilder_init(div$lambda(classes));
      var closure$value_0 = closure$value;
      var $receiver_0_0 = new RDOMBuilder_init(div$lambda('session-votes-cell'));
      var $receiver_0_1 = new RDOMBuilder_init(span$lambda('session-votes-cell-hack'));
      $receiver_0_1.unaryPlus_pdl1vz$('\xA0');
      $receiver_0_0.child_2usv9w$($receiver_0_1.create());
      var $receiver_0_2 = new RDOMBuilder_init(div$lambda('session-votes-container'));
      var $receiver_0_3 = new RDOMBuilder_init(span$lambda('session-votes-label'));
      $receiver_0_3.unaryPlus_pdl1vz$('\xA0');
      $receiver_0_2.child_2usv9w$($receiver_0_3.create());
      var $receiver_0_4 = new RDOMBuilder_init(span$lambda('session-votes-count-percentage'));
      $receiver_0_4.unaryPlus_pdl1vz$(round(percent * 100).toString() + '%');
      $receiver_0_2.child_2usv9w$($receiver_0_4.create());
      var $receiver_0_5 = new RDOMBuilder_init(span$lambda('session-votes-count-absolute'));
      $receiver_0_5.unaryPlus_pdl1vz$(closure$value_0.toString() + ' votes');
      $receiver_0_2.child_2usv9w$($receiver_0_5.create());
      $receiver_0_0.child_2usv9w$($receiver_0_2.create());
      $receiver_0.child_2usv9w$($receiver_0_0.create());
      $receiver.child_2usv9w$($receiver_0.create());
      return Unit;
    };
  }
  function SessionComponent$renderVotes$votes(closure$percentage, this$SessionComponent, closure$votePosition) {
    return function ($receiver, id, value) {
      var obj = {};
      $receiver.child_4dvv5y$('div', obj, SessionComponent$renderVotes$votes$lambda(value, closure$percentage, id, this$SessionComponent, closure$votePosition));
    };
  }
  SessionComponent.prototype.renderVotes_0 = function ($receiver, votes) {
    var votesList = listOf([votes.good, votes.bad, votes.soso]);
    var total = sum(votesList);
    var percentage = SessionComponent$renderVotes$percentage(total);
    var votePosition = {v: 0.0};
    var votes_0 = SessionComponent$renderVotes$votes(percentage, this, votePosition);
    var $receiver_0 = new RDOMBuilder_init(div$lambda('session-votes-total'));
    $receiver_0.unaryPlus_pdl1vz$('Total: ' + total + ' votes ');
    $receiver.child_2usv9w$($receiver_0.create());
    var $receiver_0_0 = new RDOMBuilder_init(div$lambda('session-votes'));
    votes_0($receiver_0_0, 'good', votes.good);
    votes_0($receiver_0_0, 'soso', votes.soso);
    votes_0($receiver_0_0, 'bad', votes.bad);
    $receiver.child_2usv9w$($receiver_0_0.create());
  };
  SessionComponent.prototype.asRelativePosition_0 = function ($receiver) {
    return ($receiver * 100).toFixed(2) + '%';
  };
  SessionComponent.prototype.componentDidMount = function () {
    this.mounted_0 = true;
    this.loadData_0();
    this.subscribeToVotes_0();
  };
  SessionComponent.prototype.componentWillUnmount = function () {
    var tmp$;
    this.mounted_0 = false;
    (tmp$ = this.votesSubscription_0) != null ? (tmp$.close(), Unit) : null;
  };
  var clone = $module$kotlin_extensions.kotlinext.js.clone_issdgt$;
  function SessionComponent$loadData$lambda(this$SessionComponent_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$SessionComponent$loadData$lambda(this$SessionComponent_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$SessionComponent$loadData$lambda(this$SessionComponent_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$SessionComponent = this$SessionComponent_0;
    this.local$$receiver = void 0;
    this.local$$receiver_0 = void 0;
    this.local$closure$continuation = void 0;
  }
  Coroutine$SessionComponent$loadData$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$SessionComponent$loadData$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$SessionComponent$loadData$lambda.prototype.constructor = Coroutine$SessionComponent$loadData$lambda;
  Coroutine$SessionComponent$loadData$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$$receiver = this.local$this$SessionComponent;
            this.local$$receiver_0 = clone(this.local$$receiver.state);
            var this$SessionComponent = this.local$this$SessionComponent;
            this.local$closure$continuation = this;
            this.state_0 = 2;
            this.result_0 = sessionsAPI.fetchSession_61zpoe$(this$SessionComponent.props.match.params.id, this.local$closure$continuation);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            this.local$$receiver_0.session = this.local$closure$continuation.result_0;
            this.local$$receiver.setState(this.local$$receiver_0);
            return Unit;
        }
      }
       catch (e) {
        if (this.state_0 === 1)
          throw e;
        else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  SessionComponent.prototype.loadData_0 = function () {
    if (!this.mounted_0)
      return;
    async(SessionComponent$loadData$lambda(this));
    window.setTimeout(getCallableRef('loadData', function ($receiver) {
      return $receiver.loadData_0(), Unit;
    }.bind(null, this)), 10000);
  };
  function SessionComponent$subscribeToVotes$lambda(this$SessionComponent) {
    return function (it) {
      var $receiver = this$SessionComponent;
      var $receiver_0 = clone($receiver.state);
      $receiver_0.votes = it;
      $receiver.setState($receiver_0);
      return Unit;
    };
  }
  SessionComponent.prototype.subscribeToVotes_0 = function () {
    this.votesSubscription_0 = sessionsAPI.subscribeToVotes_24l2ll$(this.props.match.params.id, SessionComponent$subscribeToVotes$lambda(this));
  };
  SessionComponent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SessionComponent',
    interfaces: [RComponent]
  };
  var lineSeparatorRegex;
  function SessionsComponent() {
    RComponent_init(this);
    this.mounted_0 = false;
  }
  function SessionsComponent$render$lambda$lambda$lambda$lambda$lambda(closure$session) {
    return function ($receiver) {
      var tmp$;
      $receiver.unaryPlus_pdl1vz$((tmp$ = closure$session.title) != null ? tmp$ : '<untitled>');
      return Unit;
    };
  }
  function div$lambda_1(closure$classes) {
    return function (it) {
      return new DIV_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function SessionsComponent$render$lambda$lambda(this$SessionsComponent, this$) {
    return function (it) {
      var tmp$;
      var err = this$SessionsComponent.state.sessionsError;
      if (err != null) {
        var $receiver = this$;
        var $receiver_0 = new RDOMBuilder_init(div$lambda_1(null));
        $receiver_0.unaryPlus_pdl1vz$(err);
        $receiver.child_2usv9w$($receiver_0.create());
      }
       else {
        tmp$ = ensureNotNull(this$SessionsComponent.state.sessions).iterator();
        while (tmp$.hasNext()) {
          var session = tmp$.next();
          var $receiver_1 = this$;
          var $receiver_0_0 = new RDOMBuilder_init(div$lambda_1('session'));
          var $receiver_0_1 = new RDOMBuilder_init(div$lambda_1('session-title'));
          routeLink($receiver_0_1, '/session/' + toString(session.id), SessionsComponent$render$lambda$lambda$lambda$lambda$lambda(session));
          $receiver_0_0.child_2usv9w$($receiver_0_1.create());
          dateRange($receiver_0_0, to(session.startsAt, session.endsAt));
          $receiver_1.child_2usv9w$($receiver_0_0.create());
        }
      }
      return Unit;
    };
  }
  function div$lambda_2(closure$classes) {
    return function (it) {
      return new DIV_init(attributesMapOf('class', closure$classes), it);
    };
  }
  SessionsComponent.prototype.render_ss14n$ = function ($receiver) {
    var $receiver_0 = new RDOMBuilder_init(div$lambda_1('sessions'));
    var tmp$, tmp$_0;
    tmp$_0 = (tmp$ = this.state.sessions) != null ? tmp$ : this.state.sessionsError;
    if (tmp$_0 == null) {
      var $receiver_0_0 = new RDOMBuilder_init(div$lambda_2('loading'));
      $receiver_0_0.unaryPlus_pdl1vz$('Loading data...');
      $receiver_0.child_2usv9w$($receiver_0_0.create());
    }
     else {
      SessionsComponent$render$lambda$lambda(this, $receiver_0)(tmp$_0);
    }
    return $receiver.child_2usv9w$($receiver_0.create());
  };
  SessionsComponent.prototype.componentDidMount = function () {
    this.mounted_0 = true;
    this.loadData_0();
  };
  SessionsComponent.prototype.componentWillUnmount = function () {
    this.mounted_0 = false;
  };
  function SessionsComponent$loadData$lambda(this$SessionsComponent_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$SessionsComponent$loadData$lambda(this$SessionsComponent_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$SessionsComponent$loadData$lambda(this$SessionsComponent_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 4;
    this.local$this$SessionsComponent = this$SessionsComponent_0;
    this.local$$receiver = void 0;
    this.local$obj = void 0;
    this.local$closure$continuation = void 0;
  }
  Coroutine$SessionsComponent$loadData$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$SessionsComponent$loadData$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$SessionsComponent$loadData$lambda.prototype.constructor = Coroutine$SessionsComponent$loadData$lambda;
  Coroutine$SessionsComponent$loadData$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$$receiver = this.local$this$SessionsComponent;
            this.local$obj = {};
            this.local$closure$continuation = this;
            this.exceptionState_0 = 2;
            this.state_0 = 1;
            this.result_0 = sessionsAPI.fetchSessions(this.local$closure$continuation);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            this.local$obj.sessions = this.local$closure$continuation.result_0;
            this.local$obj.sessionsError = null;
            this.exceptionState_0 = 4;
            this.state_0 = 3;
            continue;
          case 2:
            this.exceptionState_0 = 4;
            var e = this.exception_0;
            if (Kotlin.isType(e, Exception)) {
              this.local$obj.sessionsError = 'Error loading list of sessions:' + e.message;
            }
             else
              throw e;
            this.state_0 = 3;
            continue;
          case 3:
            this.local$$receiver.setState(this.local$obj);
            return Unit;
          case 4:
            throw this.exception_0;
        }
      }
       catch (e) {
        if (this.state_0 === 4)
          throw e;
        else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  SessionsComponent.prototype.loadData_0 = function () {
    if (!this.mounted_0)
      return;
    async(SessionsComponent$loadData$lambda(this));
    window.setTimeout(getCallableRef('loadData', function ($receiver) {
      return $receiver.loadData_0(), Unit;
    }.bind(null, this)), 10000);
  };
  SessionsComponent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SessionsComponent',
    interfaces: [RComponent]
  };
  function hashRouter($receiver, handler) {
    return $receiver.child_drr62v$(getKClass(HashRouterComponent), handler);
  }
  function switch_0($receiver, handler) {
    return $receiver.child_drr62v$(getKClass(SwitchComponent), handler);
  }
  function route$lambda$lambda(closure$path, closure$exact, closure$component) {
    return function ($receiver) {
      $receiver.path = closure$path;
      $receiver.exact = closure$exact;
      $receiver.component = get_js(closure$component);
      return Unit;
    };
  }
  function route$lambda(closure$path, closure$exact, closure$component) {
    return function ($receiver) {
      $receiver.attrs_slhiwc$(route$lambda$lambda(closure$path, closure$exact, closure$component));
      return Unit;
    };
  }
  function route($receiver, path, component, exact) {
    if (exact === void 0)
      exact = false;
    return $receiver.child_drr62v$(getKClass(RouteComponent), route$lambda(path, exact, component));
  }
  function routeLink$lambda$lambda(closure$to) {
    return function ($receiver) {
      $receiver.to = closure$to;
      return Unit;
    };
  }
  function routeLink$lambda(closure$to, closure$handler) {
    return function ($receiver) {
      $receiver.attrs_slhiwc$(routeLink$lambda$lambda(closure$to));
      closure$handler($receiver);
      return Unit;
    };
  }
  function routeLink($receiver, to, handler) {
    return $receiver.child_drr62v$(getKClass(LinkComponent), routeLink$lambda(to, handler));
  }
  var setState = defineInlineFunction('web.com.fans.kotlinconf.components.setState_jbmi3x$', function ($receiver, action) {
    var obj = {};
    action(obj);
    $receiver.setState(obj);
  });
  var updateState = defineInlineFunction('web.com.fans.kotlinconf.components.updateState_jbmi3x$', wrapFunction(function () {
    var clone = _.$$importsForInline$$['kotlin-extensions'].kotlinext.js.clone_issdgt$;
    return function ($receiver, action) {
      var $receiver_0 = clone($receiver.state);
      action($receiver_0);
      $receiver.setState($receiver_0);
    };
  }));
  var loading = defineInlineFunction('web.com.fans.kotlinconf.components.loading_f8xkvy$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlin-react-dom'].$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var DIV_init = _.$$importsForInline$$['kotlin-react-dom'].$$importsForInline$$['kotlinx-html-js'].kotlinx.html.DIV;
    function div$lambda(closure$classes) {
      return function (it) {
        return new DIV_init(attributesMapOf('class', closure$classes), it);
      };
    }
    var RDOMBuilder_init = _.$$importsForInline$$['kotlin-react-dom'].react.dom.RDOMBuilder;
    return function ($receiver, value, action) {
      if (value == null) {
        var $receiver_0 = new RDOMBuilder_init(div$lambda('loading'));
        $receiver_0.unaryPlus_pdl1vz$('Loading data...');
        $receiver.child_2usv9w$($receiver_0.create());
      }
       else {
        action(value);
      }
    };
  }));
  function dateRange($receiver, range) {
    var tmp$, tmp$_0;
    dateRange_0($receiver, to((tmp$ = range.first) != null ? parseDate(tmp$) : null, (tmp$_0 = range.second) != null ? parseDate(tmp$_0) : null));
  }
  function span$lambda_0(closure$classes) {
    return function (it) {
      return new SPAN_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function div$lambda_3(closure$classes) {
    return function (it) {
      return new DIV_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function dateRange_0($receiver, range) {
    var startsAt = range.component1()
    , endsAt = range.component2();
    var $receiver_0 = new RDOMBuilder_init(div$lambda_3('session-time'));
    var tmp$;
    if (startsAt != null) {
      if (endsAt != null) {
        tmp$ = toReadableString(to(startsAt, endsAt));
      }
       else {
        tmp$ = toReadableDateTimeString(startsAt);
      }
      $receiver_0.unaryPlus_pdl1vz$(tmp$);
    }
     else {
      var $receiver_0_0 = new RDOMBuilder_init(span$lambda_0('session-time-unknown'));
      $receiver_0_0.unaryPlus_pdl1vz$('Time unknown');
      $receiver_0.child_2usv9w$($receiver_0_0.create());
    }
    $receiver.child_2usv9w$($receiver_0.create());
  }
  var toFixed = defineInlineFunction('web.com.fans.kotlinconf.components.toFixed_j6vyb1$', function ($receiver, precision) {
    return $receiver.toFixed(precision);
  });
  function main$lambda$lambda$lambda$lambda($receiver) {
    route($receiver, '/', getKClass(SessionsComponent), true);
    route($receiver, '/session/:id', getKClass(SessionComponent));
    return Unit;
  }
  function main$lambda$lambda$lambda($receiver) {
    switch_0($receiver, main$lambda$lambda$lambda$lambda);
    return Unit;
  }
  function main$lambda$lambda($receiver) {
    hashRouter($receiver, main$lambda$lambda$lambda);
    return Unit;
  }
  function main$lambda(it) {
    render(ensureNotNull(document.getElementById('root')), main$lambda$lambda);
    return Unit;
  }
  function main(args) {
    window.onload = main$lambda;
  }
  $$importsForInline$$['kotlinx-serialization-runtime-js'] = $module$kotlinx_serialization_runtime_js;
  var package$com = _.com || (_.com = {});
  var package$fans = package$com.fans || (package$com.fans = {});
  var package$kotlinconf = package$fans.kotlinconf || (package$fans.kotlinconf = {});
  var package$api = package$kotlinconf.api || (package$kotlinconf.api = {});
  package$api.SessionsAPI = SessionsAPI;
  package$api.VotesSubscription = VotesSubscription;
  package$api.httpGet_61zpoe$ = httpGet;
  package$api.async_lnyleu$ = async;
  Object.defineProperty(package$kotlinconf, 'sessionsAPI', {
    get: function () {
      return sessionsAPI;
    }
  });
  $$importsForInline$$['kotlin-react-dom'] = $module$kotlin_react_dom;
  $$importsForInline$$.web = _;
  $$importsForInline$$['kotlin-extensions'] = $module$kotlin_extensions;
  var package$components = package$kotlinconf.components || (package$kotlinconf.components = {});
  package$components.SessionComponent = SessionComponent;
  package$components.SessionsComponent = SessionsComponent;
  package$components.hashRouter_jg12zk$ = hashRouter;
  package$components.switch_jg12zk$ = switch_0;
  package$components.route_c330kv$ = route;
  package$components.routeLink_i3w5o2$ = routeLink;
  package$components.setState_jbmi3x$ = setState;
  package$components.updateState_jbmi3x$ = updateState;
  package$components.loading_f8xkvy$ = loading;
  package$components.dateRange_aoddb2$ = dateRange;
  package$components.dateRange_8d7ahq$ = dateRange_0;
  package$components.toFixed_j6vyb1$ = toFixed;
  package$kotlinconf.main_kand9s$ = main;
  sessionsAPI = new SessionsAPI('', getWsServer());
  lineSeparatorRegex = Regex('\\r|\\n|\\r|\\n');
  main([]);
  Kotlin.defineModule('web', _);
  return _;
}(module.exports, require('kotlin'), require('kotlinx-serialization-runtime-js'), require('common-js'), require('kotlin-react-dom'), require('kotlin-extensions'), require('kotlin-react'), require('react-router-dom')));

//# sourceMappingURL=web.js.map
