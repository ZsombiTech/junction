/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./apps/api/src/app/controllers/GroupController.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


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
        const user = yield user_1.default.find({ _id: req.params.id });
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

/***/ "cors":
/***/ ((module) => {

module.exports = require("cors");

/***/ }),

/***/ "dotenv/config":
/***/ ((module) => {

module.exports = require("dotenv/config");

/***/ }),

/***/ "express":
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "mongoose":
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "tslib":
/***/ ((module) => {

module.exports = require("tslib");

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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
const express = __webpack_require__("express");
const group_1 = __webpack_require__("./apps/api/src/app/routes/group.ts");
const trips_1 = __webpack_require__("./apps/api/src/app/routes/trips.ts");
const user_1 = __webpack_require__("./apps/api/src/app/routes/user.ts");
const cors = __webpack_require__("cors");
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