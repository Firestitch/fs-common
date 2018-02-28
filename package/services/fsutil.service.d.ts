export declare const KEY_CANCEL = 3, KEY_HELP = 6, KEY_BACKSPACE = 8, KEY_TAB = 9, KEY_CLEAR = 12, KEY_RETURN = 13, KEY_ENTER = 14, KEY_SHIFT = 16, KEY_CONTROL = 17, KEY_ALT = 18, KEY_PAUSE = 19, KEY_CAPS_LOCK = 20, KEY_ESCAPE = 27, KEY_SPACE = 32, KEY_PAGE_UP = 33, KEY_PAGE_DOWN = 34, KEY_END = 35, KEY_HOME = 36, KEY_LEFT = 37, KEY_UP = 38, KEY_RIGHT = 39, KEY_DOWN = 40, KEY_PRINTSCREEN = 44, KEY_INSERT = 45, KEY_DELETE = 46, KEY_0 = 48, KEY_1 = 49, KEY_2 = 50, KEY_3 = 51, KEY_4 = 52, KEY_5 = 53, KEY_6 = 54, KEY_7 = 55, KEY_8 = 56, KEY_9 = 57, KEY_SEMICOLON = 59, KEY_EQUALS = 61;
export declare class FsUtil {
    private intervals;
    /**
    * @deprecated use @firestitch/common/util/guid instead
    */
    guid(pattern?: string): string;
    /**
     * @deprecated use import { uuid } from @firestitch/common/util; instead
    */
    uuid(): string;
    /**
     * @deprecated use import { resolve } from @firestitch/common/util; instead
    */
    resolve(promise: Promise<object>, defaults?: any[]): Promise<object>;
    /**
     * @deprecated use _.toInteger() instead
    */
    int(value: any): number;
    /**
     * @deprecated use _.toFinite() instaed
    */
    float(value: any): number;
    /**
     * @deprecated use _.toString() instead
    */
    string(string: any): string;
    isEmpty(value: any, options?: any): boolean;
    /**
     * @deprecated use _.isInteger() instead
    */
    isInt(value: any, type?: any): boolean;
    /**
     * @deprecated use _.each() instead {@link https://lodash.com/docs/4.17.5#forEach}
    */
    each(object: any, func: any): void;
    /**
     * @deprecated use _.isArrayLikeObject() {@link https://lodash.com/docs/4.17.5#isArrayLikeObject}
     * or _.isObject() {@link https://lodash.com/docs/4.17.5#isObject} istead
    */
    isObject(value: any): boolean;
    /**
      * @deprecated use _.isString() instead {@link https://lodash.com/docs/4.17.5#isString}
    */
    isString(value: any): boolean;
    /**
     * @deprecated use _.isArray() instead {@link https://lodash.com/docs/4.17.5#isArray}
    */
    isArray(value: any): boolean;
    isNumeric(value: any): boolean;
    isClass(value: any, cls: any): boolean;
    /**
      * @deprecated use _.isBoolean() instead {@link https://lodash.com/docs/4.17.5#isBoolean}
    */
    isBoolean(value: any): boolean;
    value(object: any, key: any, def: any): any;
    interval(fn: any, delay: any, name: any): () => void;
    clearInterval(name: any): void;
    throttle(func: any, wait: any): () => void;
    /**
     * @deprecated use import { debounce } from @firestitch/common/util; instead
    */
    debounce(func: any, wait: any, immediate: any): () => void;
    /**
     * @deprecated use import { length } from @firestitch/common/util; instead
    */
    length(object: any): number;
    /**
     * @deprecated use import { boolean } from @firestitch/common/util; instead
    */
    boolean(value: any): boolean;
    /**
     * @deprecated use import { stringify } from @firestitch/common/util; instead
    */
    stringify(value: any): string;
}
