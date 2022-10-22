/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/cors/lib/index.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

(function () {

  'use strict';

  var assign = __webpack_require__("object-assign");
  var vary = __webpack_require__("vary");

  var defaults = {
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204
  };

  function isString(s) {
    return typeof s === 'string' || s instanceof String;
  }

  function isOriginAllowed(origin, allowedOrigin) {
    if (Array.isArray(allowedOrigin)) {
      for (var i = 0; i < allowedOrigin.length; ++i) {
        if (isOriginAllowed(origin, allowedOrigin[i])) {
          return true;
        }
      }
      return false;
    } else if (isString(allowedOrigin)) {
      return origin === allowedOrigin;
    } else if (allowedOrigin instanceof RegExp) {
      return allowedOrigin.test(origin);
    } else {
      return !!allowedOrigin;
    }
  }

  function configureOrigin(options, req) {
    var requestOrigin = req.headers.origin,
      headers = [],
      isAllowed;

    if (!options.origin || options.origin === '*') {
      // allow any origin
      headers.push([{
        key: 'Access-Control-Allow-Origin',
        value: '*'
      }]);
    } else if (isString(options.origin)) {
      // fixed origin
      headers.push([{
        key: 'Access-Control-Allow-Origin',
        value: options.origin
      }]);
      headers.push([{
        key: 'Vary',
        value: 'Origin'
      }]);
    } else {
      isAllowed = isOriginAllowed(requestOrigin, options.origin);
      // reflect origin
      headers.push([{
        key: 'Access-Control-Allow-Origin',
        value: isAllowed ? requestOrigin : false
      }]);
      headers.push([{
        key: 'Vary',
        value: 'Origin'
      }]);
    }

    return headers;
  }

  function configureMethods(options) {
    var methods = options.methods;
    if (methods.join) {
      methods = options.methods.join(','); // .methods is an array, so turn it into a string
    }
    return {
      key: 'Access-Control-Allow-Methods',
      value: methods
    };
  }

  function configureCredentials(options) {
    if (options.credentials === true) {
      return {
        key: 'Access-Control-Allow-Credentials',
        value: 'true'
      };
    }
    return null;
  }

  function configureAllowedHeaders(options, req) {
    var allowedHeaders = options.allowedHeaders || options.headers;
    var headers = [];

    if (!allowedHeaders) {
      allowedHeaders = req.headers['access-control-request-headers']; // .headers wasn't specified, so reflect the request headers
      headers.push([{
        key: 'Vary',
        value: 'Access-Control-Request-Headers'
      }]);
    } else if (allowedHeaders.join) {
      allowedHeaders = allowedHeaders.join(','); // .headers is an array, so turn it into a string
    }
    if (allowedHeaders && allowedHeaders.length) {
      headers.push([{
        key: 'Access-Control-Allow-Headers',
        value: allowedHeaders
      }]);
    }

    return headers;
  }

  function configureExposedHeaders(options) {
    var headers = options.exposedHeaders;
    if (!headers) {
      return null;
    } else if (headers.join) {
      headers = headers.join(','); // .headers is an array, so turn it into a string
    }
    if (headers && headers.length) {
      return {
        key: 'Access-Control-Expose-Headers',
        value: headers
      };
    }
    return null;
  }

  function configureMaxAge(options) {
    var maxAge = (typeof options.maxAge === 'number' || options.maxAge) && options.maxAge.toString()
    if (maxAge && maxAge.length) {
      return {
        key: 'Access-Control-Max-Age',
        value: maxAge
      };
    }
    return null;
  }

  function applyHeaders(headers, res) {
    for (var i = 0, n = headers.length; i < n; i++) {
      var header = headers[i];
      if (header) {
        if (Array.isArray(header)) {
          applyHeaders(header, res);
        } else if (header.key === 'Vary' && header.value) {
          vary(res, header.value);
        } else if (header.value) {
          res.setHeader(header.key, header.value);
        }
      }
    }
  }

  function cors(options, req, res, next) {
    var headers = [],
      method = req.method && req.method.toUpperCase && req.method.toUpperCase();

    if (method === 'OPTIONS') {
      // preflight
      headers.push(configureOrigin(options, req));
      headers.push(configureCredentials(options, req));
      headers.push(configureMethods(options, req));
      headers.push(configureAllowedHeaders(options, req));
      headers.push(configureMaxAge(options, req));
      headers.push(configureExposedHeaders(options, req));
      applyHeaders(headers, res);

      if (options.preflightContinue) {
        next();
      } else {
        // Safari (and potentially other browsers) need content-length 0,
        //   for 204 or they just hang waiting for a body
        res.statusCode = options.optionsSuccessStatus;
        res.setHeader('Content-Length', '0');
        res.end();
      }
    } else {
      // actual response
      headers.push(configureOrigin(options, req));
      headers.push(configureCredentials(options, req));
      headers.push(configureExposedHeaders(options, req));
      applyHeaders(headers, res);
      next();
    }
  }

  function middlewareWrapper(o) {
    // if options are static (either via defaults or custom options passed in), wrap in a function
    var optionsCallback = null;
    if (typeof o === 'function') {
      optionsCallback = o;
    } else {
      optionsCallback = function (req, cb) {
        cb(null, o);
      };
    }

    return function corsMiddleware(req, res, next) {
      optionsCallback(req, function (err, options) {
        if (err) {
          next(err);
        } else {
          var corsOptions = assign({}, defaults, options);
          var originCallback = null;
          if (corsOptions.origin && typeof corsOptions.origin === 'function') {
            originCallback = corsOptions.origin;
          } else if (corsOptions.origin) {
            originCallback = function (origin, cb) {
              cb(null, corsOptions.origin);
            };
          }

          if (originCallback) {
            originCallback(req.headers.origin, function (err2, origin) {
              if (err2 || !origin) {
                next(err2);
              } else {
                corsOptions.origin = origin;
                cors(corsOptions, req, res, next);
              }
            });
          } else {
            next();
          }
        }
      });
    };
  }

  // can pass either an options hash, an options delegate, or nothing
  module.exports = middlewareWrapper;

}());


/***/ }),

/***/ "./apps/api/src/app/controllers/GroupController.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
const group_1 = __webpack_require__("./apps/api/src/app/models/group.ts");
class GroupController {
}
exports["default"] = GroupController;
_a = GroupController;
GroupController.getGroups = (req, res, next) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    try {
        const groups = yield group_1.default.find();
        res.json(groups);
    }
    catch (error) {
        next(error);
    }
});
GroupController.getGroup = (req, res, next) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    try {
        const group = yield group_1.default.find({ _id: req.params.id });
        res.json(group);
    }
    catch (error) {
        next(error);
    }
});
GroupController.createGroup = (req, res, next) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    try {
        const group = yield group_1.default.create(req.body);
        res.json(group);
    }
    catch (error) {
        next(error);
    }
});
GroupController.updateGroup = (req, res, next) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    try {
        const group = yield group_1.default.findByIdAndUpdate(req.params.id, req.body);
        res.json(group);
    }
    catch (error) {
        next(error);
    }
});
GroupController.deleteGroup = (req, res, next) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    try {
        const group = yield group_1.default.findByIdAndDelete(req.params.id);
        res.json(group);
    }
    catch (error) {
        next(error);
    }
});


/***/ }),

/***/ "./apps/api/src/app/controllers/TripController.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
const trip_1 = __webpack_require__("./apps/api/src/app/models/trip.ts");
class TripController {
}
exports["default"] = TripController;
_a = TripController;
TripController.getTrips = (req, res, next) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    try {
        const trips = yield trip_1.default.find();
        res.json(trips);
    }
    catch (error) {
        next(error);
    }
});
TripController.getTrip = (req, res, next) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    try {
        const trip = yield trip_1.default.find({ _id: req.params.id });
        res.json(trip);
    }
    catch (error) {
        next(error);
    }
});
TripController.createTrip = (req, res, next) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    try {
        const trip = yield trip_1.default.create(req.body);
        res.json(trip);
    }
    catch (error) {
        next(error);
    }
});
TripController.updateTrip = (req, res, next) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    try {
        const trip = yield trip_1.default.findByIdAndUpdate(req.params.id, req.body);
        res.json(trip);
    }
    catch (error) {
        next(error);
    }
});
TripController.deleteTrip = (req, res, next) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    try {
        const trip = yield trip_1.default.findByIdAndDelete(req.params.id);
        res.json(trip);
    }
    catch (error) {
        next(error);
    }
});


/***/ }),

/***/ "./apps/api/src/app/controllers/UserController.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
const user_1 = __webpack_require__("./apps/api/src/app/models/user.ts");
class UserController {
}
exports["default"] = UserController;
_a = UserController;
UserController.getUsers = (req, res, next) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield user_1.default.find();
        res.json(users);
    }
    catch (error) {
        next(error);
    }
});
UserController.getUser = (req, res, next) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield user_1.default.find({ id: req.params.id });
        res.json(user);
    }
    catch (error) {
        next(error);
    }
});
UserController.createUser = (req, res, next) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield user_1.default.create(req.body);
        res.json(user);
    }
    catch (error) {
        next(error);
    }
});
UserController.updateUser = (req, res, next) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield user_1.default.findByIdAndUpdate(req.params.id, req.body);
        res.json(user);
    }
    catch (error) {
        next(error);
    }
});
UserController.deleteUser = (req, res, next) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield user_1.default.findByIdAndDelete(req.params.id);
        res.json(user);
    }
    catch (error) {
        next(error);
    }
});


/***/ }),

/***/ "./apps/api/src/app/models/group.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const mongoose_1 = __webpack_require__("mongoose");
const Group_schema = new mongoose_1.default.Schema({
    id: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    members: {
        type: Array,
        default: [],
    },
    trips: {
        type: Array,
        default: [],
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
});
exports["default"] = mongoose_1.default.model('Group', Group_schema);


/***/ }),

/***/ "./apps/api/src/app/models/trip.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const mongoose_1 = __webpack_require__("mongoose");
const Trip_schema = new mongoose_1.default.Schema({
    id: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    from: {
        type: String,
        required: true,
    },
    to: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    transactions: {
        type: Array,
        default: [],
    },
    balance: {
        type: Number,
        default: 0,
    },
    accountnumber: {
        type: String,
        default: '',
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
});
exports["default"] = mongoose_1.default.model('Trip', Trip_schema);


/***/ }),

/***/ "./apps/api/src/app/models/user.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const mongoose_1 = __webpack_require__("mongoose");
const User_schema = new mongoose_1.default.Schema({
    id: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    bankAccount: {
        type: String,
        default: 'Unknown',
    },
    currentMoney: {
        type: Number,
        default: 0,
    },
    transasctions: {
        type: Array,
        default: [],
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
});
exports["default"] = mongoose_1.default.model('User', User_schema);


/***/ }),

/***/ "./apps/api/src/app/routes/group.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const express = __webpack_require__("express");
const GroupController_1 = __webpack_require__("./apps/api/src/app/controllers/GroupController.ts");
const router = express.Router();
router.get('/groups', GroupController_1.default.getGroups);
router.get('/group', GroupController_1.default.getGroup);
router.post('/group', GroupController_1.default.createGroup);
router.put('/group/:id', GroupController_1.default.updateGroup);
router.delete('/group/:id', GroupController_1.default.deleteGroup);
exports["default"] = router;


/***/ }),

/***/ "./apps/api/src/app/routes/trips.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const express = __webpack_require__("express");
const TripController_1 = __webpack_require__("./apps/api/src/app/controllers/TripController.ts");
const router = express.Router();
router.get('/trips', TripController_1.default.getTrips);
router.get('/trip', TripController_1.default.getTrip);
router.post('/trip', TripController_1.default.createTrip);
router.put('/trip/:id', TripController_1.default.updateTrip);
router.delete('/trip/:id', TripController_1.default.deleteTrip);
exports["default"] = router;


/***/ }),

/***/ "./apps/api/src/app/routes/user.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const express = __webpack_require__("express");
const UserController_1 = __webpack_require__("./apps/api/src/app/controllers/UserController.ts");
const router = express.Router();
router.get('/users', UserController_1.default.getUsers);
router.get('/user/:id', UserController_1.default.getUser);
router.post('/user', UserController_1.default.createUser);
router.put('/user/:id', UserController_1.default.updateUser);
router.delete('/user/:id', UserController_1.default.deleteUser);
exports["default"] = router;


/***/ }),

/***/ "dotenv/config":
/***/ ((module) => {

"use strict";
module.exports = require("dotenv/config");

/***/ }),

/***/ "express":
/***/ ((module) => {

"use strict";
module.exports = require("express");

/***/ }),

/***/ "mongoose":
/***/ ((module) => {

"use strict";
module.exports = require("mongoose");

/***/ }),

/***/ "object-assign":
/***/ ((module) => {

"use strict";
module.exports = require("object-assign");

/***/ }),

/***/ "tslib":
/***/ ((module) => {

"use strict";
module.exports = require("tslib");

/***/ }),

/***/ "vary":
/***/ ((module) => {

"use strict";
module.exports = require("vary");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
var exports = __webpack_exports__;

Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
const express = __webpack_require__("express");
const group_1 = __webpack_require__("./apps/api/src/app/routes/group.ts");
const trips_1 = __webpack_require__("./apps/api/src/app/routes/trips.ts");
const user_1 = __webpack_require__("./apps/api/src/app/routes/user.ts");
const cors = __webpack_require__("./node_modules/cors/lib/index.js");
__webpack_require__("dotenv/config");
const mongoose_1 = __webpack_require__("mongoose");
const app = express();
const greeting = { message: 'Welcome to Zsombi app!' };
main().catch((err) => console.error(err));
function main() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const DB_USER = process.env.DB_USER;
        const DB_PASS = process.env.DB_PASS;
        console.log(DB_USER);
        yield mongoose_1.default.connect(`mongodb+srv://${DB_USER}:${DB_PASS}@demo.kbudhed.mongodb.net/?retryWrites=true&w=majority`);
        console.log('Connected to MongoDB');
    });
}
app.use(cors());
app.use(express.json());
app.use('/api', group_1.default);
app.use('/api', trips_1.default);
app.use('/api', user_1.default);
app.get('/api', (req, res) => {
    res.send(greeting);
});
app.use(express.json());
const port = process.env.port || 3333;
const server = app.listen(port, () => {
    console.log('Listening at http://localhost:' + port + '/api');
});
server.on('error', console.error);

})();

var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;
//# sourceMappingURL=main.js.map