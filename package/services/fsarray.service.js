"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var FsArray = (function () {
    function FsArray() {
    }
    /**
     * @deprecated use import { nameValue } from @firestitch/common/array; instead
    */
    FsArray.prototype.nameValue = function (array, name, value) {
        console.warn('@deprecated use import { nameValue } from @firestitch/common/array; instead');
        var list = [];
        if (name || value) {
            var nameFn_1 = typeof name === 'function' ? name : function (item) { return item[name]; };
            var valueFn_1 = typeof value === 'function' ? value : function (item) { return item[value]; };
            array.forEach(function (item) {
                list.push({ name: nameFn_1(item), value: valueFn_1(item) });
            });
        }
        else {
            array.forEach(function (name, value) {
                list.push({ name: name, value: value });
            });
        }
        return list;
    };
    /**
     * @deprecated use import { remove } from @firestitch/common/array; instead
    */
    FsArray.prototype.remove = function (array, query) {
        console.warn('@deprecated use import { remove } from @firestitch/common/array; instead');
        var idx = this.indexOf(array, query);
        if (idx >= 0) {
            return array.splice(idx, 1);
        }
        return idx;
    };
    /**
     * @deprecated use import { indexOf } from @firestitch/common/array; instead
    */
    FsArray.prototype.indexOf = function (array, query) {
        var _this = this;
        console.warn('@deprecated use import { indexOf } from @firestitch/common/array; instead');
        if (typeof query !== 'function') {
            var queryObj_1 = query;
            query = function (item) {
                return _this.compare(queryObj_1, item);
            };
        }
        for (var i = 0, len = array.length; i < len; i++) {
            if (query(array[i])) {
                return i;
            }
        }
        return -1;
    };
    /**
     * @deprecated use import { compare } from @firestitch/common/array; instead
    */
    FsArray.prototype.compare = function (query, item) {
        console.warn('@deprecated use import { compare } from @firestitch/common/array; instead');
        var value = true;
        for (var key in query) {
            value = value && item[key] == query[key];
        }
        return value;
    };
    /**
     * @deprecated use import { filter } from @firestitch/common/array; instead
    */
    FsArray.prototype.filter = function (array, query) {
        var _this = this;
        console.warn('@deprecated use import { filter } from @firestitch/common/array; instead');
        if (typeof query !== 'function') {
            var queryObj_2 = query;
            query = function (item) {
                return _this.compare(queryObj_2, item);
            };
        }
        var isarray = Array.isArray(array);
        var list = isarray ? [] : {};
        if (isarray)
            array.forEach(function (item, idx) {
                if (query(item)) {
                    list.push(item);
                }
            });
        else
            Object.keys(array).forEach(function (key) {
                if (query(array[key])) {
                    list[key] = array[key];
                }
            });
        return list;
    };
    /**
     * @deprecated use import { index } from @firestitch/common/array; instead
    */
    FsArray.prototype.index = function (array, property) {
        console.warn('@deprecated use import { index } from @firestitch/common/array; instead');
        var list = {};
        array.forEach(function (item, idx) {
            list[item[property]] = item;
        });
        return list;
    };
    /**
     * @deprecated use import { sort } from @firestitch/common/array; instead
    */
    FsArray.prototype.sort = function (array, query, reverse) {
        if (reverse === void 0) { reverse = false; }
        console.warn('@deprecated use import { sort } from @firestitch/common/array; instead');
        if (typeof query !== 'function') {
            var queryStr_1 = query;
            query = function (a, b) {
                if (reverse) {
                    if (a[queryStr_1] < b[queryStr_1]) {
                        return 1;
                    }
                    else if (a[queryStr_1] > b[queryStr_1]) {
                        return -1;
                    }
                }
                else {
                    if (a[queryStr_1] > b[queryStr_1]) {
                        return 1;
                    }
                    else if (a[queryStr_1] < b[queryStr_1]) {
                        return -1;
                    }
                }
                return 0;
            };
        }
        array.sort(query);
        return array;
    };
    /**
     * @deprecated use import { rsort } from @firestitch/common/array; instead
    */
    FsArray.prototype.rsort = function (array, query) {
        console.warn('@deprecated use import { rsort } from @firestitch/common/array; instead');
        return this.sort(array, query, true);
    };
    /**
     * @deprecated use import { list } from @firestitch/common/array; instead
    */
    FsArray.prototype.list = function (array, property, index) {
        if (index === void 0) { index = null; }
        console.warn('@deprecated use import { list } from @firestitch/common/array; instead');
        var list = index ? {} : [];
        array.forEach(function (item, idx) {
            if (index) {
                list[item[index]] = item[property];
            }
            else {
                list.push(item[property]);
            }
        });
        return list;
    };
    /**
     * @deprecated use import { applyDepth } from @firestitch/common/array; instead
    */
    FsArray.prototype.applyDepth = function (objects, parent_property, id_property, depth_property) {
        if (id_property === void 0) { id_property = 'id'; }
        if (depth_property === void 0) { depth_property = 'depth'; }
        console.warn('@deprecated use import { applyDepth } from @firestitch/common/array; instead');
        var keyed = {};
        objects.forEach(function (object) {
            if (!object[parent_property]) {
                object[depth_property] = 0;
            }
            keyed[object[id_property]] = object;
        });
        Object.keys(keyed).forEach(function (key) {
            Object.keys(keyed).forEach(function (key) {
                var object = keyed[key];
                if (!keyed[key][depth_property]) {
                    if (keyed[key][parent_property]) {
                        keyed[key][depth_property] = keyed[keyed[key][parent_property]][depth_property] + 1;
                    }
                }
            });
        });
        return keyed;
    };
    /**
     * @deprecated use import { inArray } from @firestitch/common/array; instead
    */
    FsArray.prototype.inArray = function (values, array) {
        console.warn('@deprecated use import { inArray } from @firestitch/common/array; instead');
        if (!Array.isArray(values)) {
            values = [values];
        }
        for (var i = 0, len = values.length; i < len; i++) {
            if (array.indexOf(values[i]) >= 0) {
                return true;
            }
        }
        return false;
    };
    /**
     * @deprecated use import { keyExists } from @firestitch/common/array; instead
    */
    FsArray.prototype.keyExists = function (array, key) {
        console.warn('@deprecated use import { keyExists } from @firestitch/common/array; instead');
        return array.hasOwnProperty(key);
    };
    /**
     * @deprecated use import { length } from @firestitch/common/array; instead
    */
    FsArray.prototype.length = function (array) {
        console.warn('@deprecated use import { length } from @firestitch/common/array; instead');
        return array.length;
    };
    /**
     * @deprecated use import { ksort } from @firestitch/common/array; instead
    */
    FsArray.prototype.ksort = function (unordered) {
        console.warn('@deprecated use import { ksort } from @firestitch/common/array; instead');
        Object.keys(unordered).sort().forEach(function (key) {
            var value = unordered[key];
            delete unordered[key];
            unordered[key] = value;
        });
    };
    FsArray = __decorate([
        core_1.Injectable()
    ], FsArray);
    return FsArray;
}());
exports.FsArray = FsArray;
//# sourceMappingURL=fsarray.service.js.map