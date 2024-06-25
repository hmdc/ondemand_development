var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/jquery/dist/jquery.js
var require_jquery = __commonJS({
  "node_modules/jquery/dist/jquery.js"(exports, module) {
    (function(global, factory) {
      "use strict";
      if (typeof module === "object" && typeof module.exports === "object") {
        module.exports = global.document ? factory(global, true) : function(w) {
          if (!w.document) {
            throw new Error("jQuery requires a window with a document");
          }
          return factory(w);
        };
      } else {
        factory(global);
      }
    })(typeof window !== "undefined" ? window : exports, function(window2, noGlobal) {
      "use strict";
      var arr = [];
      var getProto = Object.getPrototypeOf;
      var slice = arr.slice;
      var flat = arr.flat ? function(array) {
        return arr.flat.call(array);
      } : function(array) {
        return arr.concat.apply([], array);
      };
      var push = arr.push;
      var indexOf = arr.indexOf;
      var class2type = {};
      var toString = class2type.toString;
      var hasOwn = class2type.hasOwnProperty;
      var fnToString = hasOwn.toString;
      var ObjectFunctionString = fnToString.call(Object);
      var support = {};
      var isFunction = function isFunction2(obj) {
        return typeof obj === "function" && typeof obj.nodeType !== "number" && typeof obj.item !== "function";
      };
      var isWindow = function isWindow2(obj) {
        return obj != null && obj === obj.window;
      };
      var document2 = window2.document;
      var preservedScriptAttributes = {
        type: true,
        src: true,
        nonce: true,
        noModule: true
      };
      function DOMEval(code, node, doc) {
        doc = doc || document2;
        var i, val, script = doc.createElement("script");
        script.text = code;
        if (node) {
          for (i in preservedScriptAttributes) {
            val = node[i] || node.getAttribute && node.getAttribute(i);
            if (val) {
              script.setAttribute(i, val);
            }
          }
        }
        doc.head.appendChild(script).parentNode.removeChild(script);
      }
      function toType(obj) {
        if (obj == null) {
          return obj + "";
        }
        return typeof obj === "object" || typeof obj === "function" ? class2type[toString.call(obj)] || "object" : typeof obj;
      }
      var version = "3.7.1", rhtmlSuffix = /HTML$/i, jQuery4 = function(selector, context) {
        return new jQuery4.fn.init(selector, context);
      };
      jQuery4.fn = jQuery4.prototype = {
        jquery: version,
        constructor: jQuery4,
        length: 0,
        toArray: function() {
          return slice.call(this);
        },
        get: function(num) {
          if (num == null) {
            return slice.call(this);
          }
          return num < 0 ? this[num + this.length] : this[num];
        },
        pushStack: function(elems) {
          var ret = jQuery4.merge(this.constructor(), elems);
          ret.prevObject = this;
          return ret;
        },
        each: function(callback) {
          return jQuery4.each(this, callback);
        },
        map: function(callback) {
          return this.pushStack(jQuery4.map(this, function(elem, i) {
            return callback.call(elem, i, elem);
          }));
        },
        slice: function() {
          return this.pushStack(slice.apply(this, arguments));
        },
        first: function() {
          return this.eq(0);
        },
        last: function() {
          return this.eq(-1);
        },
        even: function() {
          return this.pushStack(jQuery4.grep(this, function(_elem, i) {
            return (i + 1) % 2;
          }));
        },
        odd: function() {
          return this.pushStack(jQuery4.grep(this, function(_elem, i) {
            return i % 2;
          }));
        },
        eq: function(i) {
          var len = this.length, j = +i + (i < 0 ? len : 0);
          return this.pushStack(j >= 0 && j < len ? [this[j]] : []);
        },
        end: function() {
          return this.prevObject || this.constructor();
        },
        push,
        sort: arr.sort,
        splice: arr.splice
      };
      jQuery4.extend = jQuery4.fn.extend = function() {
        var options, name, src, copy, copyIsArray, clone, target = arguments[0] || {}, i = 1, length = arguments.length, deep = false;
        if (typeof target === "boolean") {
          deep = target;
          target = arguments[i] || {};
          i++;
        }
        if (typeof target !== "object" && !isFunction(target)) {
          target = {};
        }
        if (i === length) {
          target = this;
          i--;
        }
        for (; i < length; i++) {
          if ((options = arguments[i]) != null) {
            for (name in options) {
              copy = options[name];
              if (name === "__proto__" || target === copy) {
                continue;
              }
              if (deep && copy && (jQuery4.isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))) {
                src = target[name];
                if (copyIsArray && !Array.isArray(src)) {
                  clone = [];
                } else if (!copyIsArray && !jQuery4.isPlainObject(src)) {
                  clone = {};
                } else {
                  clone = src;
                }
                copyIsArray = false;
                target[name] = jQuery4.extend(deep, clone, copy);
              } else if (copy !== void 0) {
                target[name] = copy;
              }
            }
          }
        }
        return target;
      };
      jQuery4.extend({
        expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),
        isReady: true,
        error: function(msg) {
          throw new Error(msg);
        },
        noop: function() {
        },
        isPlainObject: function(obj) {
          var proto, Ctor;
          if (!obj || toString.call(obj) !== "[object Object]") {
            return false;
          }
          proto = getProto(obj);
          if (!proto) {
            return true;
          }
          Ctor = hasOwn.call(proto, "constructor") && proto.constructor;
          return typeof Ctor === "function" && fnToString.call(Ctor) === ObjectFunctionString;
        },
        isEmptyObject: function(obj) {
          var name;
          for (name in obj) {
            return false;
          }
          return true;
        },
        globalEval: function(code, options, doc) {
          DOMEval(code, { nonce: options && options.nonce }, doc);
        },
        each: function(obj, callback) {
          var length, i = 0;
          if (isArrayLike(obj)) {
            length = obj.length;
            for (; i < length; i++) {
              if (callback.call(obj[i], i, obj[i]) === false) {
                break;
              }
            }
          } else {
            for (i in obj) {
              if (callback.call(obj[i], i, obj[i]) === false) {
                break;
              }
            }
          }
          return obj;
        },
        text: function(elem) {
          var node, ret = "", i = 0, nodeType = elem.nodeType;
          if (!nodeType) {
            while (node = elem[i++]) {
              ret += jQuery4.text(node);
            }
          }
          if (nodeType === 1 || nodeType === 11) {
            return elem.textContent;
          }
          if (nodeType === 9) {
            return elem.documentElement.textContent;
          }
          if (nodeType === 3 || nodeType === 4) {
            return elem.nodeValue;
          }
          return ret;
        },
        makeArray: function(arr2, results) {
          var ret = results || [];
          if (arr2 != null) {
            if (isArrayLike(Object(arr2))) {
              jQuery4.merge(
                ret,
                typeof arr2 === "string" ? [arr2] : arr2
              );
            } else {
              push.call(ret, arr2);
            }
          }
          return ret;
        },
        inArray: function(elem, arr2, i) {
          return arr2 == null ? -1 : indexOf.call(arr2, elem, i);
        },
        isXMLDoc: function(elem) {
          var namespace = elem && elem.namespaceURI, docElem = elem && (elem.ownerDocument || elem).documentElement;
          return !rhtmlSuffix.test(namespace || docElem && docElem.nodeName || "HTML");
        },
        merge: function(first, second) {
          var len = +second.length, j = 0, i = first.length;
          for (; j < len; j++) {
            first[i++] = second[j];
          }
          first.length = i;
          return first;
        },
        grep: function(elems, callback, invert) {
          var callbackInverse, matches2 = [], i = 0, length = elems.length, callbackExpect = !invert;
          for (; i < length; i++) {
            callbackInverse = !callback(elems[i], i);
            if (callbackInverse !== callbackExpect) {
              matches2.push(elems[i]);
            }
          }
          return matches2;
        },
        map: function(elems, callback, arg) {
          var length, value, i = 0, ret = [];
          if (isArrayLike(elems)) {
            length = elems.length;
            for (; i < length; i++) {
              value = callback(elems[i], i, arg);
              if (value != null) {
                ret.push(value);
              }
            }
          } else {
            for (i in elems) {
              value = callback(elems[i], i, arg);
              if (value != null) {
                ret.push(value);
              }
            }
          }
          return flat(ret);
        },
        guid: 1,
        support
      });
      if (typeof Symbol === "function") {
        jQuery4.fn[Symbol.iterator] = arr[Symbol.iterator];
      }
      jQuery4.each(
        "Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),
        function(_i, name) {
          class2type["[object " + name + "]"] = name.toLowerCase();
        }
      );
      function isArrayLike(obj) {
        var length = !!obj && "length" in obj && obj.length, type = toType(obj);
        if (isFunction(obj) || isWindow(obj)) {
          return false;
        }
        return type === "array" || length === 0 || typeof length === "number" && length > 0 && length - 1 in obj;
      }
      function nodeName(elem, name) {
        return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
      }
      var pop = arr.pop;
      var sort = arr.sort;
      var splice = arr.splice;
      var whitespace = "[\\x20\\t\\r\\n\\f]";
      var rtrimCSS = new RegExp(
        "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$",
        "g"
      );
      jQuery4.contains = function(a, b) {
        var bup = b && b.parentNode;
        return a === bup || !!(bup && bup.nodeType === 1 && (a.contains ? a.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));
      };
      var rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
      function fcssescape(ch, asCodePoint) {
        if (asCodePoint) {
          if (ch === "\0") {
            return "\uFFFD";
          }
          return ch.slice(0, -1) + "\\" + ch.charCodeAt(ch.length - 1).toString(16) + " ";
        }
        return "\\" + ch;
      }
      jQuery4.escapeSelector = function(sel) {
        return (sel + "").replace(rcssescape, fcssescape);
      };
      var preferredDoc = document2, pushNative = push;
      (function() {
        var i, Expr, outermostContext, sortInput, hasDuplicate, push2 = pushNative, document3, documentElement2, documentIsHTML, rbuggyQSA, matches2, expando = jQuery4.expando, dirruns = 0, done = 0, classCache = createCache(), tokenCache = createCache(), compilerCache = createCache(), nonnativeSelectorCache = createCache(), sortOrder = function(a, b) {
          if (a === b) {
            hasDuplicate = true;
          }
          return 0;
        }, booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace + "*([*^$|!~]?=)" + whitespace + `*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(` + identifier + "))|)" + whitespace + "*\\]", pseudos = ":(" + identifier + `)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|` + attributes + ")*)|.*)\\)|)", rwhitespace = new RegExp(whitespace + "+", "g"), rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"), rleadingCombinator = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"), rdescend = new RegExp(whitespace + "|>"), rpseudo = new RegExp(pseudos), ridentifier = new RegExp("^" + identifier + "$"), matchExpr = {
          ID: new RegExp("^#(" + identifier + ")"),
          CLASS: new RegExp("^\\.(" + identifier + ")"),
          TAG: new RegExp("^(" + identifier + "|[*])"),
          ATTR: new RegExp("^" + attributes),
          PSEUDO: new RegExp("^" + pseudos),
          CHILD: new RegExp(
            "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)",
            "i"
          ),
          bool: new RegExp("^(?:" + booleans + ")$", "i"),
          needsContext: new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
        }, rinputs = /^(?:input|select|textarea|button)$/i, rheader = /^h\d$/i, rquickExpr2 = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, rsibling = /[+~]/, runescape = new RegExp("\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\([^\\r\\n\\f])", "g"), funescape = function(escape, nonHex) {
          var high = "0x" + escape.slice(1) - 65536;
          if (nonHex) {
            return nonHex;
          }
          return high < 0 ? String.fromCharCode(high + 65536) : String.fromCharCode(high >> 10 | 55296, high & 1023 | 56320);
        }, unloadHandler = function() {
          setDocument();
        }, inDisabledFieldset = addCombinator(
          function(elem) {
            return elem.disabled === true && nodeName(elem, "fieldset");
          },
          { dir: "parentNode", next: "legend" }
        );
        function safeActiveElement() {
          try {
            return document3.activeElement;
          } catch (err) {
          }
        }
        try {
          push2.apply(
            arr = slice.call(preferredDoc.childNodes),
            preferredDoc.childNodes
          );
          arr[preferredDoc.childNodes.length].nodeType;
        } catch (e) {
          push2 = {
            apply: function(target, els) {
              pushNative.apply(target, slice.call(els));
            },
            call: function(target) {
              pushNative.apply(target, slice.call(arguments, 1));
            }
          };
        }
        function find(selector, context, results, seed) {
          var m2, i2, elem, nid, match, groups, newSelector, newContext = context && context.ownerDocument, nodeType = context ? context.nodeType : 9;
          results = results || [];
          if (typeof selector !== "string" || !selector || nodeType !== 1 && nodeType !== 9 && nodeType !== 11) {
            return results;
          }
          if (!seed) {
            setDocument(context);
            context = context || document3;
            if (documentIsHTML) {
              if (nodeType !== 11 && (match = rquickExpr2.exec(selector))) {
                if (m2 = match[1]) {
                  if (nodeType === 9) {
                    if (elem = context.getElementById(m2)) {
                      if (elem.id === m2) {
                        push2.call(results, elem);
                        return results;
                      }
                    } else {
                      return results;
                    }
                  } else {
                    if (newContext && (elem = newContext.getElementById(m2)) && find.contains(context, elem) && elem.id === m2) {
                      push2.call(results, elem);
                      return results;
                    }
                  }
                } else if (match[2]) {
                  push2.apply(results, context.getElementsByTagName(selector));
                  return results;
                } else if ((m2 = match[3]) && context.getElementsByClassName) {
                  push2.apply(results, context.getElementsByClassName(m2));
                  return results;
                }
              }
              if (!nonnativeSelectorCache[selector + " "] && (!rbuggyQSA || !rbuggyQSA.test(selector))) {
                newSelector = selector;
                newContext = context;
                if (nodeType === 1 && (rdescend.test(selector) || rleadingCombinator.test(selector))) {
                  newContext = rsibling.test(selector) && testContext(context.parentNode) || context;
                  if (newContext != context || !support.scope) {
                    if (nid = context.getAttribute("id")) {
                      nid = jQuery4.escapeSelector(nid);
                    } else {
                      context.setAttribute("id", nid = expando);
                    }
                  }
                  groups = tokenize(selector);
                  i2 = groups.length;
                  while (i2--) {
                    groups[i2] = (nid ? "#" + nid : ":scope") + " " + toSelector(groups[i2]);
                  }
                  newSelector = groups.join(",");
                }
                try {
                  push2.apply(
                    results,
                    newContext.querySelectorAll(newSelector)
                  );
                  return results;
                } catch (qsaError) {
                  nonnativeSelectorCache(selector, true);
                } finally {
                  if (nid === expando) {
                    context.removeAttribute("id");
                  }
                }
              }
            }
          }
          return select(selector.replace(rtrimCSS, "$1"), context, results, seed);
        }
        function createCache() {
          var keys = [];
          function cache(key, value) {
            if (keys.push(key + " ") > Expr.cacheLength) {
              delete cache[keys.shift()];
            }
            return cache[key + " "] = value;
          }
          return cache;
        }
        function markFunction(fn) {
          fn[expando] = true;
          return fn;
        }
        function assert(fn) {
          var el = document3.createElement("fieldset");
          try {
            return !!fn(el);
          } catch (e) {
            return false;
          } finally {
            if (el.parentNode) {
              el.parentNode.removeChild(el);
            }
            el = null;
          }
        }
        function createInputPseudo(type) {
          return function(elem) {
            return nodeName(elem, "input") && elem.type === type;
          };
        }
        function createButtonPseudo(type) {
          return function(elem) {
            return (nodeName(elem, "input") || nodeName(elem, "button")) && elem.type === type;
          };
        }
        function createDisabledPseudo(disabled) {
          return function(elem) {
            if ("form" in elem) {
              if (elem.parentNode && elem.disabled === false) {
                if ("label" in elem) {
                  if ("label" in elem.parentNode) {
                    return elem.parentNode.disabled === disabled;
                  } else {
                    return elem.disabled === disabled;
                  }
                }
                return elem.isDisabled === disabled || elem.isDisabled !== !disabled && inDisabledFieldset(elem) === disabled;
              }
              return elem.disabled === disabled;
            } else if ("label" in elem) {
              return elem.disabled === disabled;
            }
            return false;
          };
        }
        function createPositionalPseudo(fn) {
          return markFunction(function(argument) {
            argument = +argument;
            return markFunction(function(seed, matches3) {
              var j, matchIndexes = fn([], seed.length, argument), i2 = matchIndexes.length;
              while (i2--) {
                if (seed[j = matchIndexes[i2]]) {
                  seed[j] = !(matches3[j] = seed[j]);
                }
              }
            });
          });
        }
        function testContext(context) {
          return context && typeof context.getElementsByTagName !== "undefined" && context;
        }
        function setDocument(node) {
          var subWindow, doc = node ? node.ownerDocument || node : preferredDoc;
          if (doc == document3 || doc.nodeType !== 9 || !doc.documentElement) {
            return document3;
          }
          document3 = doc;
          documentElement2 = document3.documentElement;
          documentIsHTML = !jQuery4.isXMLDoc(document3);
          matches2 = documentElement2.matches || documentElement2.webkitMatchesSelector || documentElement2.msMatchesSelector;
          if (documentElement2.msMatchesSelector && preferredDoc != document3 && (subWindow = document3.defaultView) && subWindow.top !== subWindow) {
            subWindow.addEventListener("unload", unloadHandler);
          }
          support.getById = assert(function(el) {
            documentElement2.appendChild(el).id = jQuery4.expando;
            return !document3.getElementsByName || !document3.getElementsByName(jQuery4.expando).length;
          });
          support.disconnectedMatch = assert(function(el) {
            return matches2.call(el, "*");
          });
          support.scope = assert(function() {
            return document3.querySelectorAll(":scope");
          });
          support.cssHas = assert(function() {
            try {
              document3.querySelector(":has(*,:jqfake)");
              return false;
            } catch (e) {
              return true;
            }
          });
          if (support.getById) {
            Expr.filter.ID = function(id) {
              var attrId = id.replace(runescape, funescape);
              return function(elem) {
                return elem.getAttribute("id") === attrId;
              };
            };
            Expr.find.ID = function(id, context) {
              if (typeof context.getElementById !== "undefined" && documentIsHTML) {
                var elem = context.getElementById(id);
                return elem ? [elem] : [];
              }
            };
          } else {
            Expr.filter.ID = function(id) {
              var attrId = id.replace(runescape, funescape);
              return function(elem) {
                var node2 = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
                return node2 && node2.value === attrId;
              };
            };
            Expr.find.ID = function(id, context) {
              if (typeof context.getElementById !== "undefined" && documentIsHTML) {
                var node2, i2, elems, elem = context.getElementById(id);
                if (elem) {
                  node2 = elem.getAttributeNode("id");
                  if (node2 && node2.value === id) {
                    return [elem];
                  }
                  elems = context.getElementsByName(id);
                  i2 = 0;
                  while (elem = elems[i2++]) {
                    node2 = elem.getAttributeNode("id");
                    if (node2 && node2.value === id) {
                      return [elem];
                    }
                  }
                }
                return [];
              }
            };
          }
          Expr.find.TAG = function(tag, context) {
            if (typeof context.getElementsByTagName !== "undefined") {
              return context.getElementsByTagName(tag);
            } else {
              return context.querySelectorAll(tag);
            }
          };
          Expr.find.CLASS = function(className, context) {
            if (typeof context.getElementsByClassName !== "undefined" && documentIsHTML) {
              return context.getElementsByClassName(className);
            }
          };
          rbuggyQSA = [];
          assert(function(el) {
            var input;
            documentElement2.appendChild(el).innerHTML = "<a id='" + expando + "' href='' disabled='disabled'></a><select id='" + expando + "-\r\\' disabled='disabled'><option selected=''></option></select>";
            if (!el.querySelectorAll("[selected]").length) {
              rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")");
            }
            if (!el.querySelectorAll("[id~=" + expando + "-]").length) {
              rbuggyQSA.push("~=");
            }
            if (!el.querySelectorAll("a#" + expando + "+*").length) {
              rbuggyQSA.push(".#.+[+~]");
            }
            if (!el.querySelectorAll(":checked").length) {
              rbuggyQSA.push(":checked");
            }
            input = document3.createElement("input");
            input.setAttribute("type", "hidden");
            el.appendChild(input).setAttribute("name", "D");
            documentElement2.appendChild(el).disabled = true;
            if (el.querySelectorAll(":disabled").length !== 2) {
              rbuggyQSA.push(":enabled", ":disabled");
            }
            input = document3.createElement("input");
            input.setAttribute("name", "");
            el.appendChild(input);
            if (!el.querySelectorAll("[name='']").length) {
              rbuggyQSA.push("\\[" + whitespace + "*name" + whitespace + "*=" + whitespace + `*(?:''|"")`);
            }
          });
          if (!support.cssHas) {
            rbuggyQSA.push(":has");
          }
          rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
          sortOrder = function(a, b) {
            if (a === b) {
              hasDuplicate = true;
              return 0;
            }
            var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
            if (compare) {
              return compare;
            }
            compare = (a.ownerDocument || a) == (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1;
            if (compare & 1 || !support.sortDetached && b.compareDocumentPosition(a) === compare) {
              if (a === document3 || a.ownerDocument == preferredDoc && find.contains(preferredDoc, a)) {
                return -1;
              }
              if (b === document3 || b.ownerDocument == preferredDoc && find.contains(preferredDoc, b)) {
                return 1;
              }
              return sortInput ? indexOf.call(sortInput, a) - indexOf.call(sortInput, b) : 0;
            }
            return compare & 4 ? -1 : 1;
          };
          return document3;
        }
        find.matches = function(expr, elements) {
          return find(expr, null, null, elements);
        };
        find.matchesSelector = function(elem, expr) {
          setDocument(elem);
          if (documentIsHTML && !nonnativeSelectorCache[expr + " "] && (!rbuggyQSA || !rbuggyQSA.test(expr))) {
            try {
              var ret = matches2.call(elem, expr);
              if (ret || support.disconnectedMatch || elem.document && elem.document.nodeType !== 11) {
                return ret;
              }
            } catch (e) {
              nonnativeSelectorCache(expr, true);
            }
          }
          return find(expr, document3, null, [elem]).length > 0;
        };
        find.contains = function(context, elem) {
          if ((context.ownerDocument || context) != document3) {
            setDocument(context);
          }
          return jQuery4.contains(context, elem);
        };
        find.attr = function(elem, name) {
          if ((elem.ownerDocument || elem) != document3) {
            setDocument(elem);
          }
          var fn = Expr.attrHandle[name.toLowerCase()], val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : void 0;
          if (val !== void 0) {
            return val;
          }
          return elem.getAttribute(name);
        };
        find.error = function(msg) {
          throw new Error("Syntax error, unrecognized expression: " + msg);
        };
        jQuery4.uniqueSort = function(results) {
          var elem, duplicates = [], j = 0, i2 = 0;
          hasDuplicate = !support.sortStable;
          sortInput = !support.sortStable && slice.call(results, 0);
          sort.call(results, sortOrder);
          if (hasDuplicate) {
            while (elem = results[i2++]) {
              if (elem === results[i2]) {
                j = duplicates.push(i2);
              }
            }
            while (j--) {
              splice.call(results, duplicates[j], 1);
            }
          }
          sortInput = null;
          return results;
        };
        jQuery4.fn.uniqueSort = function() {
          return this.pushStack(jQuery4.uniqueSort(slice.apply(this)));
        };
        Expr = jQuery4.expr = {
          cacheLength: 50,
          createPseudo: markFunction,
          match: matchExpr,
          attrHandle: {},
          find: {},
          relative: {
            ">": { dir: "parentNode", first: true },
            " ": { dir: "parentNode" },
            "+": { dir: "previousSibling", first: true },
            "~": { dir: "previousSibling" }
          },
          preFilter: {
            ATTR: function(match) {
              match[1] = match[1].replace(runescape, funescape);
              match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape);
              if (match[2] === "~=") {
                match[3] = " " + match[3] + " ";
              }
              return match.slice(0, 4);
            },
            CHILD: function(match) {
              match[1] = match[1].toLowerCase();
              if (match[1].slice(0, 3) === "nth") {
                if (!match[3]) {
                  find.error(match[0]);
                }
                match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
                match[5] = +(match[7] + match[8] || match[3] === "odd");
              } else if (match[3]) {
                find.error(match[0]);
              }
              return match;
            },
            PSEUDO: function(match) {
              var excess, unquoted = !match[6] && match[2];
              if (matchExpr.CHILD.test(match[0])) {
                return null;
              }
              if (match[3]) {
                match[2] = match[4] || match[5] || "";
              } else if (unquoted && rpseudo.test(unquoted) && (excess = tokenize(unquoted, true)) && (excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {
                match[0] = match[0].slice(0, excess);
                match[2] = unquoted.slice(0, excess);
              }
              return match.slice(0, 3);
            }
          },
          filter: {
            TAG: function(nodeNameSelector) {
              var expectedNodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
              return nodeNameSelector === "*" ? function() {
                return true;
              } : function(elem) {
                return nodeName(elem, expectedNodeName);
              };
            },
            CLASS: function(className) {
              var pattern = classCache[className + " "];
              return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, function(elem) {
                return pattern.test(
                  typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || ""
                );
              });
            },
            ATTR: function(name, operator, check) {
              return function(elem) {
                var result = find.attr(elem, name);
                if (result == null) {
                  return operator === "!=";
                }
                if (!operator) {
                  return true;
                }
                result += "";
                if (operator === "=") {
                  return result === check;
                }
                if (operator === "!=") {
                  return result !== check;
                }
                if (operator === "^=") {
                  return check && result.indexOf(check) === 0;
                }
                if (operator === "*=") {
                  return check && result.indexOf(check) > -1;
                }
                if (operator === "$=") {
                  return check && result.slice(-check.length) === check;
                }
                if (operator === "~=") {
                  return (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1;
                }
                if (operator === "|=") {
                  return result === check || result.slice(0, check.length + 1) === check + "-";
                }
                return false;
              };
            },
            CHILD: function(type, what, _argument, first, last) {
              var simple = type.slice(0, 3) !== "nth", forward = type.slice(-4) !== "last", ofType = what === "of-type";
              return first === 1 && last === 0 ? function(elem) {
                return !!elem.parentNode;
              } : function(elem, _context, xml) {
                var cache, outerCache, node, nodeIndex, start2, dir2 = simple !== forward ? "nextSibling" : "previousSibling", parent = elem.parentNode, name = ofType && elem.nodeName.toLowerCase(), useCache = !xml && !ofType, diff = false;
                if (parent) {
                  if (simple) {
                    while (dir2) {
                      node = elem;
                      while (node = node[dir2]) {
                        if (ofType ? nodeName(node, name) : node.nodeType === 1) {
                          return false;
                        }
                      }
                      start2 = dir2 = type === "only" && !start2 && "nextSibling";
                    }
                    return true;
                  }
                  start2 = [forward ? parent.firstChild : parent.lastChild];
                  if (forward && useCache) {
                    outerCache = parent[expando] || (parent[expando] = {});
                    cache = outerCache[type] || [];
                    nodeIndex = cache[0] === dirruns && cache[1];
                    diff = nodeIndex && cache[2];
                    node = nodeIndex && parent.childNodes[nodeIndex];
                    while (node = ++nodeIndex && node && node[dir2] || (diff = nodeIndex = 0) || start2.pop()) {
                      if (node.nodeType === 1 && ++diff && node === elem) {
                        outerCache[type] = [dirruns, nodeIndex, diff];
                        break;
                      }
                    }
                  } else {
                    if (useCache) {
                      outerCache = elem[expando] || (elem[expando] = {});
                      cache = outerCache[type] || [];
                      nodeIndex = cache[0] === dirruns && cache[1];
                      diff = nodeIndex;
                    }
                    if (diff === false) {
                      while (node = ++nodeIndex && node && node[dir2] || (diff = nodeIndex = 0) || start2.pop()) {
                        if ((ofType ? nodeName(node, name) : node.nodeType === 1) && ++diff) {
                          if (useCache) {
                            outerCache = node[expando] || (node[expando] = {});
                            outerCache[type] = [dirruns, diff];
                          }
                          if (node === elem) {
                            break;
                          }
                        }
                      }
                    }
                  }
                  diff -= last;
                  return diff === first || diff % first === 0 && diff / first >= 0;
                }
              };
            },
            PSEUDO: function(pseudo, argument) {
              var args, fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || find.error("unsupported pseudo: " + pseudo);
              if (fn[expando]) {
                return fn(argument);
              }
              if (fn.length > 1) {
                args = [pseudo, pseudo, "", argument];
                return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function(seed, matches3) {
                  var idx, matched = fn(seed, argument), i2 = matched.length;
                  while (i2--) {
                    idx = indexOf.call(seed, matched[i2]);
                    seed[idx] = !(matches3[idx] = matched[i2]);
                  }
                }) : function(elem) {
                  return fn(elem, 0, args);
                };
              }
              return fn;
            }
          },
          pseudos: {
            not: markFunction(function(selector) {
              var input = [], results = [], matcher = compile(selector.replace(rtrimCSS, "$1"));
              return matcher[expando] ? markFunction(function(seed, matches3, _context, xml) {
                var elem, unmatched = matcher(seed, null, xml, []), i2 = seed.length;
                while (i2--) {
                  if (elem = unmatched[i2]) {
                    seed[i2] = !(matches3[i2] = elem);
                  }
                }
              }) : function(elem, _context, xml) {
                input[0] = elem;
                matcher(input, null, xml, results);
                input[0] = null;
                return !results.pop();
              };
            }),
            has: markFunction(function(selector) {
              return function(elem) {
                return find(selector, elem).length > 0;
              };
            }),
            contains: markFunction(function(text) {
              text = text.replace(runescape, funescape);
              return function(elem) {
                return (elem.textContent || jQuery4.text(elem)).indexOf(text) > -1;
              };
            }),
            lang: markFunction(function(lang) {
              if (!ridentifier.test(lang || "")) {
                find.error("unsupported lang: " + lang);
              }
              lang = lang.replace(runescape, funescape).toLowerCase();
              return function(elem) {
                var elemLang;
                do {
                  if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) {
                    elemLang = elemLang.toLowerCase();
                    return elemLang === lang || elemLang.indexOf(lang + "-") === 0;
                  }
                } while ((elem = elem.parentNode) && elem.nodeType === 1);
                return false;
              };
            }),
            target: function(elem) {
              var hash = window2.location && window2.location.hash;
              return hash && hash.slice(1) === elem.id;
            },
            root: function(elem) {
              return elem === documentElement2;
            },
            focus: function(elem) {
              return elem === safeActiveElement() && document3.hasFocus() && !!(elem.type || elem.href || ~elem.tabIndex);
            },
            enabled: createDisabledPseudo(false),
            disabled: createDisabledPseudo(true),
            checked: function(elem) {
              return nodeName(elem, "input") && !!elem.checked || nodeName(elem, "option") && !!elem.selected;
            },
            selected: function(elem) {
              if (elem.parentNode) {
                elem.parentNode.selectedIndex;
              }
              return elem.selected === true;
            },
            empty: function(elem) {
              for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
                if (elem.nodeType < 6) {
                  return false;
                }
              }
              return true;
            },
            parent: function(elem) {
              return !Expr.pseudos.empty(elem);
            },
            header: function(elem) {
              return rheader.test(elem.nodeName);
            },
            input: function(elem) {
              return rinputs.test(elem.nodeName);
            },
            button: function(elem) {
              return nodeName(elem, "input") && elem.type === "button" || nodeName(elem, "button");
            },
            text: function(elem) {
              var attr;
              return nodeName(elem, "input") && elem.type === "text" && ((attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text");
            },
            first: createPositionalPseudo(function() {
              return [0];
            }),
            last: createPositionalPseudo(function(_matchIndexes, length) {
              return [length - 1];
            }),
            eq: createPositionalPseudo(function(_matchIndexes, length, argument) {
              return [argument < 0 ? argument + length : argument];
            }),
            even: createPositionalPseudo(function(matchIndexes, length) {
              var i2 = 0;
              for (; i2 < length; i2 += 2) {
                matchIndexes.push(i2);
              }
              return matchIndexes;
            }),
            odd: createPositionalPseudo(function(matchIndexes, length) {
              var i2 = 1;
              for (; i2 < length; i2 += 2) {
                matchIndexes.push(i2);
              }
              return matchIndexes;
            }),
            lt: createPositionalPseudo(function(matchIndexes, length, argument) {
              var i2;
              if (argument < 0) {
                i2 = argument + length;
              } else if (argument > length) {
                i2 = length;
              } else {
                i2 = argument;
              }
              for (; --i2 >= 0; ) {
                matchIndexes.push(i2);
              }
              return matchIndexes;
            }),
            gt: createPositionalPseudo(function(matchIndexes, length, argument) {
              var i2 = argument < 0 ? argument + length : argument;
              for (; ++i2 < length; ) {
                matchIndexes.push(i2);
              }
              return matchIndexes;
            })
          }
        };
        Expr.pseudos.nth = Expr.pseudos.eq;
        for (i in { radio: true, checkbox: true, file: true, password: true, image: true }) {
          Expr.pseudos[i] = createInputPseudo(i);
        }
        for (i in { submit: true, reset: true }) {
          Expr.pseudos[i] = createButtonPseudo(i);
        }
        function setFilters() {
        }
        setFilters.prototype = Expr.filters = Expr.pseudos;
        Expr.setFilters = new setFilters();
        function tokenize(selector, parseOnly) {
          var matched, match, tokens, type, soFar, groups, preFilters, cached = tokenCache[selector + " "];
          if (cached) {
            return parseOnly ? 0 : cached.slice(0);
          }
          soFar = selector;
          groups = [];
          preFilters = Expr.preFilter;
          while (soFar) {
            if (!matched || (match = rcomma.exec(soFar))) {
              if (match) {
                soFar = soFar.slice(match[0].length) || soFar;
              }
              groups.push(tokens = []);
            }
            matched = false;
            if (match = rleadingCombinator.exec(soFar)) {
              matched = match.shift();
              tokens.push({
                value: matched,
                type: match[0].replace(rtrimCSS, " ")
              });
              soFar = soFar.slice(matched.length);
            }
            for (type in Expr.filter) {
              if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))) {
                matched = match.shift();
                tokens.push({
                  value: matched,
                  type,
                  matches: match
                });
                soFar = soFar.slice(matched.length);
              }
            }
            if (!matched) {
              break;
            }
          }
          if (parseOnly) {
            return soFar.length;
          }
          return soFar ? find.error(selector) : tokenCache(selector, groups).slice(0);
        }
        function toSelector(tokens) {
          var i2 = 0, len = tokens.length, selector = "";
          for (; i2 < len; i2++) {
            selector += tokens[i2].value;
          }
          return selector;
        }
        function addCombinator(matcher, combinator, base) {
          var dir2 = combinator.dir, skip = combinator.next, key = skip || dir2, checkNonElements = base && key === "parentNode", doneName = done++;
          return combinator.first ? function(elem, context, xml) {
            while (elem = elem[dir2]) {
              if (elem.nodeType === 1 || checkNonElements) {
                return matcher(elem, context, xml);
              }
            }
            return false;
          } : function(elem, context, xml) {
            var oldCache, outerCache, newCache = [dirruns, doneName];
            if (xml) {
              while (elem = elem[dir2]) {
                if (elem.nodeType === 1 || checkNonElements) {
                  if (matcher(elem, context, xml)) {
                    return true;
                  }
                }
              }
            } else {
              while (elem = elem[dir2]) {
                if (elem.nodeType === 1 || checkNonElements) {
                  outerCache = elem[expando] || (elem[expando] = {});
                  if (skip && nodeName(elem, skip)) {
                    elem = elem[dir2] || elem;
                  } else if ((oldCache = outerCache[key]) && oldCache[0] === dirruns && oldCache[1] === doneName) {
                    return newCache[2] = oldCache[2];
                  } else {
                    outerCache[key] = newCache;
                    if (newCache[2] = matcher(elem, context, xml)) {
                      return true;
                    }
                  }
                }
              }
            }
            return false;
          };
        }
        function elementMatcher(matchers) {
          return matchers.length > 1 ? function(elem, context, xml) {
            var i2 = matchers.length;
            while (i2--) {
              if (!matchers[i2](elem, context, xml)) {
                return false;
              }
            }
            return true;
          } : matchers[0];
        }
        function multipleContexts(selector, contexts, results) {
          var i2 = 0, len = contexts.length;
          for (; i2 < len; i2++) {
            find(selector, contexts[i2], results);
          }
          return results;
        }
        function condense(unmatched, map, filter, context, xml) {
          var elem, newUnmatched = [], i2 = 0, len = unmatched.length, mapped = map != null;
          for (; i2 < len; i2++) {
            if (elem = unmatched[i2]) {
              if (!filter || filter(elem, context, xml)) {
                newUnmatched.push(elem);
                if (mapped) {
                  map.push(i2);
                }
              }
            }
          }
          return newUnmatched;
        }
        function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
          if (postFilter && !postFilter[expando]) {
            postFilter = setMatcher(postFilter);
          }
          if (postFinder && !postFinder[expando]) {
            postFinder = setMatcher(postFinder, postSelector);
          }
          return markFunction(function(seed, results, context, xml) {
            var temp, i2, elem, matcherOut, preMap = [], postMap = [], preexisting = results.length, elems = seed || multipleContexts(
              selector || "*",
              context.nodeType ? [context] : context,
              []
            ), matcherIn = preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context, xml) : elems;
            if (matcher) {
              matcherOut = postFinder || (seed ? preFilter : preexisting || postFilter) ? [] : results;
              matcher(matcherIn, matcherOut, context, xml);
            } else {
              matcherOut = matcherIn;
            }
            if (postFilter) {
              temp = condense(matcherOut, postMap);
              postFilter(temp, [], context, xml);
              i2 = temp.length;
              while (i2--) {
                if (elem = temp[i2]) {
                  matcherOut[postMap[i2]] = !(matcherIn[postMap[i2]] = elem);
                }
              }
            }
            if (seed) {
              if (postFinder || preFilter) {
                if (postFinder) {
                  temp = [];
                  i2 = matcherOut.length;
                  while (i2--) {
                    if (elem = matcherOut[i2]) {
                      temp.push(matcherIn[i2] = elem);
                    }
                  }
                  postFinder(null, matcherOut = [], temp, xml);
                }
                i2 = matcherOut.length;
                while (i2--) {
                  if ((elem = matcherOut[i2]) && (temp = postFinder ? indexOf.call(seed, elem) : preMap[i2]) > -1) {
                    seed[temp] = !(results[temp] = elem);
                  }
                }
              }
            } else {
              matcherOut = condense(
                matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut
              );
              if (postFinder) {
                postFinder(null, results, matcherOut, xml);
              } else {
                push2.apply(results, matcherOut);
              }
            }
          });
        }
        function matcherFromTokens(tokens) {
          var checkContext, matcher, j, len = tokens.length, leadingRelative = Expr.relative[tokens[0].type], implicitRelative = leadingRelative || Expr.relative[" "], i2 = leadingRelative ? 1 : 0, matchContext = addCombinator(function(elem) {
            return elem === checkContext;
          }, implicitRelative, true), matchAnyContext = addCombinator(function(elem) {
            return indexOf.call(checkContext, elem) > -1;
          }, implicitRelative, true), matchers = [function(elem, context, xml) {
            var ret = !leadingRelative && (xml || context != outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml));
            checkContext = null;
            return ret;
          }];
          for (; i2 < len; i2++) {
            if (matcher = Expr.relative[tokens[i2].type]) {
              matchers = [addCombinator(elementMatcher(matchers), matcher)];
            } else {
              matcher = Expr.filter[tokens[i2].type].apply(null, tokens[i2].matches);
              if (matcher[expando]) {
                j = ++i2;
                for (; j < len; j++) {
                  if (Expr.relative[tokens[j].type]) {
                    break;
                  }
                }
                return setMatcher(
                  i2 > 1 && elementMatcher(matchers),
                  i2 > 1 && toSelector(
                    tokens.slice(0, i2 - 1).concat({ value: tokens[i2 - 2].type === " " ? "*" : "" })
                  ).replace(rtrimCSS, "$1"),
                  matcher,
                  i2 < j && matcherFromTokens(tokens.slice(i2, j)),
                  j < len && matcherFromTokens(tokens = tokens.slice(j)),
                  j < len && toSelector(tokens)
                );
              }
              matchers.push(matcher);
            }
          }
          return elementMatcher(matchers);
        }
        function matcherFromGroupMatchers(elementMatchers, setMatchers) {
          var bySet = setMatchers.length > 0, byElement = elementMatchers.length > 0, superMatcher = function(seed, context, xml, results, outermost) {
            var elem, j, matcher, matchedCount = 0, i2 = "0", unmatched = seed && [], setMatched = [], contextBackup = outermostContext, elems = seed || byElement && Expr.find.TAG("*", outermost), dirrunsUnique = dirruns += contextBackup == null ? 1 : Math.random() || 0.1, len = elems.length;
            if (outermost) {
              outermostContext = context == document3 || context || outermost;
            }
            for (; i2 !== len && (elem = elems[i2]) != null; i2++) {
              if (byElement && elem) {
                j = 0;
                if (!context && elem.ownerDocument != document3) {
                  setDocument(elem);
                  xml = !documentIsHTML;
                }
                while (matcher = elementMatchers[j++]) {
                  if (matcher(elem, context || document3, xml)) {
                    push2.call(results, elem);
                    break;
                  }
                }
                if (outermost) {
                  dirruns = dirrunsUnique;
                }
              }
              if (bySet) {
                if (elem = !matcher && elem) {
                  matchedCount--;
                }
                if (seed) {
                  unmatched.push(elem);
                }
              }
            }
            matchedCount += i2;
            if (bySet && i2 !== matchedCount) {
              j = 0;
              while (matcher = setMatchers[j++]) {
                matcher(unmatched, setMatched, context, xml);
              }
              if (seed) {
                if (matchedCount > 0) {
                  while (i2--) {
                    if (!(unmatched[i2] || setMatched[i2])) {
                      setMatched[i2] = pop.call(results);
                    }
                  }
                }
                setMatched = condense(setMatched);
              }
              push2.apply(results, setMatched);
              if (outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1) {
                jQuery4.uniqueSort(results);
              }
            }
            if (outermost) {
              dirruns = dirrunsUnique;
              outermostContext = contextBackup;
            }
            return unmatched;
          };
          return bySet ? markFunction(superMatcher) : superMatcher;
        }
        function compile(selector, match) {
          var i2, setMatchers = [], elementMatchers = [], cached = compilerCache[selector + " "];
          if (!cached) {
            if (!match) {
              match = tokenize(selector);
            }
            i2 = match.length;
            while (i2--) {
              cached = matcherFromTokens(match[i2]);
              if (cached[expando]) {
                setMatchers.push(cached);
              } else {
                elementMatchers.push(cached);
              }
            }
            cached = compilerCache(
              selector,
              matcherFromGroupMatchers(elementMatchers, setMatchers)
            );
            cached.selector = selector;
          }
          return cached;
        }
        function select(selector, context, results, seed) {
          var i2, tokens, token, type, find2, compiled = typeof selector === "function" && selector, match = !seed && tokenize(selector = compiled.selector || selector);
          results = results || [];
          if (match.length === 1) {
            tokens = match[0] = match[0].slice(0);
            if (tokens.length > 2 && (token = tokens[0]).type === "ID" && context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]) {
              context = (Expr.find.ID(
                token.matches[0].replace(runescape, funescape),
                context
              ) || [])[0];
              if (!context) {
                return results;
              } else if (compiled) {
                context = context.parentNode;
              }
              selector = selector.slice(tokens.shift().value.length);
            }
            i2 = matchExpr.needsContext.test(selector) ? 0 : tokens.length;
            while (i2--) {
              token = tokens[i2];
              if (Expr.relative[type = token.type]) {
                break;
              }
              if (find2 = Expr.find[type]) {
                if (seed = find2(
                  token.matches[0].replace(runescape, funescape),
                  rsibling.test(tokens[0].type) && testContext(context.parentNode) || context
                )) {
                  tokens.splice(i2, 1);
                  selector = seed.length && toSelector(tokens);
                  if (!selector) {
                    push2.apply(results, seed);
                    return results;
                  }
                  break;
                }
              }
            }
          }
          (compiled || compile(selector, match))(
            seed,
            context,
            !documentIsHTML,
            results,
            !context || rsibling.test(selector) && testContext(context.parentNode) || context
          );
          return results;
        }
        support.sortStable = expando.split("").sort(sortOrder).join("") === expando;
        setDocument();
        support.sortDetached = assert(function(el) {
          return el.compareDocumentPosition(document3.createElement("fieldset")) & 1;
        });
        jQuery4.find = find;
        jQuery4.expr[":"] = jQuery4.expr.pseudos;
        jQuery4.unique = jQuery4.uniqueSort;
        find.compile = compile;
        find.select = select;
        find.setDocument = setDocument;
        find.tokenize = tokenize;
        find.escape = jQuery4.escapeSelector;
        find.getText = jQuery4.text;
        find.isXML = jQuery4.isXMLDoc;
        find.selectors = jQuery4.expr;
        find.support = jQuery4.support;
        find.uniqueSort = jQuery4.uniqueSort;
      })();
      var dir = function(elem, dir2, until) {
        var matched = [], truncate = until !== void 0;
        while ((elem = elem[dir2]) && elem.nodeType !== 9) {
          if (elem.nodeType === 1) {
            if (truncate && jQuery4(elem).is(until)) {
              break;
            }
            matched.push(elem);
          }
        }
        return matched;
      };
      var siblings = function(n, elem) {
        var matched = [];
        for (; n; n = n.nextSibling) {
          if (n.nodeType === 1 && n !== elem) {
            matched.push(n);
          }
        }
        return matched;
      };
      var rneedsContext = jQuery4.expr.match.needsContext;
      var rsingleTag = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
      function winnow(elements, qualifier, not) {
        if (isFunction(qualifier)) {
          return jQuery4.grep(elements, function(elem, i) {
            return !!qualifier.call(elem, i, elem) !== not;
          });
        }
        if (qualifier.nodeType) {
          return jQuery4.grep(elements, function(elem) {
            return elem === qualifier !== not;
          });
        }
        if (typeof qualifier !== "string") {
          return jQuery4.grep(elements, function(elem) {
            return indexOf.call(qualifier, elem) > -1 !== not;
          });
        }
        return jQuery4.filter(qualifier, elements, not);
      }
      jQuery4.filter = function(expr, elems, not) {
        var elem = elems[0];
        if (not) {
          expr = ":not(" + expr + ")";
        }
        if (elems.length === 1 && elem.nodeType === 1) {
          return jQuery4.find.matchesSelector(elem, expr) ? [elem] : [];
        }
        return jQuery4.find.matches(expr, jQuery4.grep(elems, function(elem2) {
          return elem2.nodeType === 1;
        }));
      };
      jQuery4.fn.extend({
        find: function(selector) {
          var i, ret, len = this.length, self2 = this;
          if (typeof selector !== "string") {
            return this.pushStack(jQuery4(selector).filter(function() {
              for (i = 0; i < len; i++) {
                if (jQuery4.contains(self2[i], this)) {
                  return true;
                }
              }
            }));
          }
          ret = this.pushStack([]);
          for (i = 0; i < len; i++) {
            jQuery4.find(selector, self2[i], ret);
          }
          return len > 1 ? jQuery4.uniqueSort(ret) : ret;
        },
        filter: function(selector) {
          return this.pushStack(winnow(this, selector || [], false));
        },
        not: function(selector) {
          return this.pushStack(winnow(this, selector || [], true));
        },
        is: function(selector) {
          return !!winnow(
            this,
            typeof selector === "string" && rneedsContext.test(selector) ? jQuery4(selector) : selector || [],
            false
          ).length;
        }
      });
      var rootjQuery, rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, init = jQuery4.fn.init = function(selector, context, root) {
        var match, elem;
        if (!selector) {
          return this;
        }
        root = root || rootjQuery;
        if (typeof selector === "string") {
          if (selector[0] === "<" && selector[selector.length - 1] === ">" && selector.length >= 3) {
            match = [null, selector, null];
          } else {
            match = rquickExpr.exec(selector);
          }
          if (match && (match[1] || !context)) {
            if (match[1]) {
              context = context instanceof jQuery4 ? context[0] : context;
              jQuery4.merge(this, jQuery4.parseHTML(
                match[1],
                context && context.nodeType ? context.ownerDocument || context : document2,
                true
              ));
              if (rsingleTag.test(match[1]) && jQuery4.isPlainObject(context)) {
                for (match in context) {
                  if (isFunction(this[match])) {
                    this[match](context[match]);
                  } else {
                    this.attr(match, context[match]);
                  }
                }
              }
              return this;
            } else {
              elem = document2.getElementById(match[2]);
              if (elem) {
                this[0] = elem;
                this.length = 1;
              }
              return this;
            }
          } else if (!context || context.jquery) {
            return (context || root).find(selector);
          } else {
            return this.constructor(context).find(selector);
          }
        } else if (selector.nodeType) {
          this[0] = selector;
          this.length = 1;
          return this;
        } else if (isFunction(selector)) {
          return root.ready !== void 0 ? root.ready(selector) : selector(jQuery4);
        }
        return jQuery4.makeArray(selector, this);
      };
      init.prototype = jQuery4.fn;
      rootjQuery = jQuery4(document2);
      var rparentsprev = /^(?:parents|prev(?:Until|All))/, guaranteedUnique = {
        children: true,
        contents: true,
        next: true,
        prev: true
      };
      jQuery4.fn.extend({
        has: function(target) {
          var targets = jQuery4(target, this), l = targets.length;
          return this.filter(function() {
            var i = 0;
            for (; i < l; i++) {
              if (jQuery4.contains(this, targets[i])) {
                return true;
              }
            }
          });
        },
        closest: function(selectors, context) {
          var cur, i = 0, l = this.length, matched = [], targets = typeof selectors !== "string" && jQuery4(selectors);
          if (!rneedsContext.test(selectors)) {
            for (; i < l; i++) {
              for (cur = this[i]; cur && cur !== context; cur = cur.parentNode) {
                if (cur.nodeType < 11 && (targets ? targets.index(cur) > -1 : cur.nodeType === 1 && jQuery4.find.matchesSelector(cur, selectors))) {
                  matched.push(cur);
                  break;
                }
              }
            }
          }
          return this.pushStack(matched.length > 1 ? jQuery4.uniqueSort(matched) : matched);
        },
        index: function(elem) {
          if (!elem) {
            return this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
          }
          if (typeof elem === "string") {
            return indexOf.call(jQuery4(elem), this[0]);
          }
          return indexOf.call(
            this,
            elem.jquery ? elem[0] : elem
          );
        },
        add: function(selector, context) {
          return this.pushStack(
            jQuery4.uniqueSort(
              jQuery4.merge(this.get(), jQuery4(selector, context))
            )
          );
        },
        addBack: function(selector) {
          return this.add(
            selector == null ? this.prevObject : this.prevObject.filter(selector)
          );
        }
      });
      function sibling(cur, dir2) {
        while ((cur = cur[dir2]) && cur.nodeType !== 1) {
        }
        return cur;
      }
      jQuery4.each({
        parent: function(elem) {
          var parent = elem.parentNode;
          return parent && parent.nodeType !== 11 ? parent : null;
        },
        parents: function(elem) {
          return dir(elem, "parentNode");
        },
        parentsUntil: function(elem, _i, until) {
          return dir(elem, "parentNode", until);
        },
        next: function(elem) {
          return sibling(elem, "nextSibling");
        },
        prev: function(elem) {
          return sibling(elem, "previousSibling");
        },
        nextAll: function(elem) {
          return dir(elem, "nextSibling");
        },
        prevAll: function(elem) {
          return dir(elem, "previousSibling");
        },
        nextUntil: function(elem, _i, until) {
          return dir(elem, "nextSibling", until);
        },
        prevUntil: function(elem, _i, until) {
          return dir(elem, "previousSibling", until);
        },
        siblings: function(elem) {
          return siblings((elem.parentNode || {}).firstChild, elem);
        },
        children: function(elem) {
          return siblings(elem.firstChild);
        },
        contents: function(elem) {
          if (elem.contentDocument != null && getProto(elem.contentDocument)) {
            return elem.contentDocument;
          }
          if (nodeName(elem, "template")) {
            elem = elem.content || elem;
          }
          return jQuery4.merge([], elem.childNodes);
        }
      }, function(name, fn) {
        jQuery4.fn[name] = function(until, selector) {
          var matched = jQuery4.map(this, fn, until);
          if (name.slice(-5) !== "Until") {
            selector = until;
          }
          if (selector && typeof selector === "string") {
            matched = jQuery4.filter(selector, matched);
          }
          if (this.length > 1) {
            if (!guaranteedUnique[name]) {
              jQuery4.uniqueSort(matched);
            }
            if (rparentsprev.test(name)) {
              matched.reverse();
            }
          }
          return this.pushStack(matched);
        };
      });
      var rnothtmlwhite = /[^\x20\t\r\n\f]+/g;
      function createOptions(options) {
        var object = {};
        jQuery4.each(options.match(rnothtmlwhite) || [], function(_, flag) {
          object[flag] = true;
        });
        return object;
      }
      jQuery4.Callbacks = function(options) {
        options = typeof options === "string" ? createOptions(options) : jQuery4.extend({}, options);
        var firing, memory, fired, locked, list = [], queue = [], firingIndex = -1, fire2 = function() {
          locked = locked || options.once;
          fired = firing = true;
          for (; queue.length; firingIndex = -1) {
            memory = queue.shift();
            while (++firingIndex < list.length) {
              if (list[firingIndex].apply(memory[0], memory[1]) === false && options.stopOnFalse) {
                firingIndex = list.length;
                memory = false;
              }
            }
          }
          if (!options.memory) {
            memory = false;
          }
          firing = false;
          if (locked) {
            if (memory) {
              list = [];
            } else {
              list = "";
            }
          }
        }, self2 = {
          add: function() {
            if (list) {
              if (memory && !firing) {
                firingIndex = list.length - 1;
                queue.push(memory);
              }
              (function add(args) {
                jQuery4.each(args, function(_, arg) {
                  if (isFunction(arg)) {
                    if (!options.unique || !self2.has(arg)) {
                      list.push(arg);
                    }
                  } else if (arg && arg.length && toType(arg) !== "string") {
                    add(arg);
                  }
                });
              })(arguments);
              if (memory && !firing) {
                fire2();
              }
            }
            return this;
          },
          remove: function() {
            jQuery4.each(arguments, function(_, arg) {
              var index;
              while ((index = jQuery4.inArray(arg, list, index)) > -1) {
                list.splice(index, 1);
                if (index <= firingIndex) {
                  firingIndex--;
                }
              }
            });
            return this;
          },
          has: function(fn) {
            return fn ? jQuery4.inArray(fn, list) > -1 : list.length > 0;
          },
          empty: function() {
            if (list) {
              list = [];
            }
            return this;
          },
          disable: function() {
            locked = queue = [];
            list = memory = "";
            return this;
          },
          disabled: function() {
            return !list;
          },
          lock: function() {
            locked = queue = [];
            if (!memory && !firing) {
              list = memory = "";
            }
            return this;
          },
          locked: function() {
            return !!locked;
          },
          fireWith: function(context, args) {
            if (!locked) {
              args = args || [];
              args = [context, args.slice ? args.slice() : args];
              queue.push(args);
              if (!firing) {
                fire2();
              }
            }
            return this;
          },
          fire: function() {
            self2.fireWith(this, arguments);
            return this;
          },
          fired: function() {
            return !!fired;
          }
        };
        return self2;
      };
      function Identity(v) {
        return v;
      }
      function Thrower(ex) {
        throw ex;
      }
      function adoptValue(value, resolve, reject, noValue) {
        var method;
        try {
          if (value && isFunction(method = value.promise)) {
            method.call(value).done(resolve).fail(reject);
          } else if (value && isFunction(method = value.then)) {
            method.call(value, resolve, reject);
          } else {
            resolve.apply(void 0, [value].slice(noValue));
          }
        } catch (value2) {
          reject.apply(void 0, [value2]);
        }
      }
      jQuery4.extend({
        Deferred: function(func) {
          var tuples = [
            [
              "notify",
              "progress",
              jQuery4.Callbacks("memory"),
              jQuery4.Callbacks("memory"),
              2
            ],
            [
              "resolve",
              "done",
              jQuery4.Callbacks("once memory"),
              jQuery4.Callbacks("once memory"),
              0,
              "resolved"
            ],
            [
              "reject",
              "fail",
              jQuery4.Callbacks("once memory"),
              jQuery4.Callbacks("once memory"),
              1,
              "rejected"
            ]
          ], state = "pending", promise = {
            state: function() {
              return state;
            },
            always: function() {
              deferred.done(arguments).fail(arguments);
              return this;
            },
            "catch": function(fn) {
              return promise.then(null, fn);
            },
            pipe: function() {
              var fns = arguments;
              return jQuery4.Deferred(function(newDefer) {
                jQuery4.each(tuples, function(_i, tuple) {
                  var fn = isFunction(fns[tuple[4]]) && fns[tuple[4]];
                  deferred[tuple[1]](function() {
                    var returned = fn && fn.apply(this, arguments);
                    if (returned && isFunction(returned.promise)) {
                      returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject);
                    } else {
                      newDefer[tuple[0] + "With"](
                        this,
                        fn ? [returned] : arguments
                      );
                    }
                  });
                });
                fns = null;
              }).promise();
            },
            then: function(onFulfilled, onRejected, onProgress) {
              var maxDepth = 0;
              function resolve(depth, deferred2, handler, special) {
                return function() {
                  var that = this, args = arguments, mightThrow = function() {
                    var returned, then;
                    if (depth < maxDepth) {
                      return;
                    }
                    returned = handler.apply(that, args);
                    if (returned === deferred2.promise()) {
                      throw new TypeError("Thenable self-resolution");
                    }
                    then = returned && (typeof returned === "object" || typeof returned === "function") && returned.then;
                    if (isFunction(then)) {
                      if (special) {
                        then.call(
                          returned,
                          resolve(maxDepth, deferred2, Identity, special),
                          resolve(maxDepth, deferred2, Thrower, special)
                        );
                      } else {
                        maxDepth++;
                        then.call(
                          returned,
                          resolve(maxDepth, deferred2, Identity, special),
                          resolve(maxDepth, deferred2, Thrower, special),
                          resolve(
                            maxDepth,
                            deferred2,
                            Identity,
                            deferred2.notifyWith
                          )
                        );
                      }
                    } else {
                      if (handler !== Identity) {
                        that = void 0;
                        args = [returned];
                      }
                      (special || deferred2.resolveWith)(that, args);
                    }
                  }, process = special ? mightThrow : function() {
                    try {
                      mightThrow();
                    } catch (e) {
                      if (jQuery4.Deferred.exceptionHook) {
                        jQuery4.Deferred.exceptionHook(
                          e,
                          process.error
                        );
                      }
                      if (depth + 1 >= maxDepth) {
                        if (handler !== Thrower) {
                          that = void 0;
                          args = [e];
                        }
                        deferred2.rejectWith(that, args);
                      }
                    }
                  };
                  if (depth) {
                    process();
                  } else {
                    if (jQuery4.Deferred.getErrorHook) {
                      process.error = jQuery4.Deferred.getErrorHook();
                    } else if (jQuery4.Deferred.getStackHook) {
                      process.error = jQuery4.Deferred.getStackHook();
                    }
                    window2.setTimeout(process);
                  }
                };
              }
              return jQuery4.Deferred(function(newDefer) {
                tuples[0][3].add(
                  resolve(
                    0,
                    newDefer,
                    isFunction(onProgress) ? onProgress : Identity,
                    newDefer.notifyWith
                  )
                );
                tuples[1][3].add(
                  resolve(
                    0,
                    newDefer,
                    isFunction(onFulfilled) ? onFulfilled : Identity
                  )
                );
                tuples[2][3].add(
                  resolve(
                    0,
                    newDefer,
                    isFunction(onRejected) ? onRejected : Thrower
                  )
                );
              }).promise();
            },
            promise: function(obj) {
              return obj != null ? jQuery4.extend(obj, promise) : promise;
            }
          }, deferred = {};
          jQuery4.each(tuples, function(i, tuple) {
            var list = tuple[2], stateString = tuple[5];
            promise[tuple[1]] = list.add;
            if (stateString) {
              list.add(
                function() {
                  state = stateString;
                },
                tuples[3 - i][2].disable,
                tuples[3 - i][3].disable,
                tuples[0][2].lock,
                tuples[0][3].lock
              );
            }
            list.add(tuple[3].fire);
            deferred[tuple[0]] = function() {
              deferred[tuple[0] + "With"](this === deferred ? void 0 : this, arguments);
              return this;
            };
            deferred[tuple[0] + "With"] = list.fireWith;
          });
          promise.promise(deferred);
          if (func) {
            func.call(deferred, deferred);
          }
          return deferred;
        },
        when: function(singleValue) {
          var remaining = arguments.length, i = remaining, resolveContexts = Array(i), resolveValues = slice.call(arguments), primary = jQuery4.Deferred(), updateFunc = function(i2) {
            return function(value) {
              resolveContexts[i2] = this;
              resolveValues[i2] = arguments.length > 1 ? slice.call(arguments) : value;
              if (!--remaining) {
                primary.resolveWith(resolveContexts, resolveValues);
              }
            };
          };
          if (remaining <= 1) {
            adoptValue(
              singleValue,
              primary.done(updateFunc(i)).resolve,
              primary.reject,
              !remaining
            );
            if (primary.state() === "pending" || isFunction(resolveValues[i] && resolveValues[i].then)) {
              return primary.then();
            }
          }
          while (i--) {
            adoptValue(resolveValues[i], updateFunc(i), primary.reject);
          }
          return primary.promise();
        }
      });
      var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
      jQuery4.Deferred.exceptionHook = function(error, asyncError) {
        if (window2.console && window2.console.warn && error && rerrorNames.test(error.name)) {
          window2.console.warn(
            "jQuery.Deferred exception: " + error.message,
            error.stack,
            asyncError
          );
        }
      };
      jQuery4.readyException = function(error) {
        window2.setTimeout(function() {
          throw error;
        });
      };
      var readyList = jQuery4.Deferred();
      jQuery4.fn.ready = function(fn) {
        readyList.then(fn).catch(function(error) {
          jQuery4.readyException(error);
        });
        return this;
      };
      jQuery4.extend({
        isReady: false,
        readyWait: 1,
        ready: function(wait) {
          if (wait === true ? --jQuery4.readyWait : jQuery4.isReady) {
            return;
          }
          jQuery4.isReady = true;
          if (wait !== true && --jQuery4.readyWait > 0) {
            return;
          }
          readyList.resolveWith(document2, [jQuery4]);
        }
      });
      jQuery4.ready.then = readyList.then;
      function completed() {
        document2.removeEventListener("DOMContentLoaded", completed);
        window2.removeEventListener("load", completed);
        jQuery4.ready();
      }
      if (document2.readyState === "complete" || document2.readyState !== "loading" && !document2.documentElement.doScroll) {
        window2.setTimeout(jQuery4.ready);
      } else {
        document2.addEventListener("DOMContentLoaded", completed);
        window2.addEventListener("load", completed);
      }
      var access = function(elems, fn, key, value, chainable, emptyGet, raw) {
        var i = 0, len = elems.length, bulk = key == null;
        if (toType(key) === "object") {
          chainable = true;
          for (i in key) {
            access(elems, fn, i, key[i], true, emptyGet, raw);
          }
        } else if (value !== void 0) {
          chainable = true;
          if (!isFunction(value)) {
            raw = true;
          }
          if (bulk) {
            if (raw) {
              fn.call(elems, value);
              fn = null;
            } else {
              bulk = fn;
              fn = function(elem, _key, value2) {
                return bulk.call(jQuery4(elem), value2);
              };
            }
          }
          if (fn) {
            for (; i < len; i++) {
              fn(
                elems[i],
                key,
                raw ? value : value.call(elems[i], i, fn(elems[i], key))
              );
            }
          }
        }
        if (chainable) {
          return elems;
        }
        if (bulk) {
          return fn.call(elems);
        }
        return len ? fn(elems[0], key) : emptyGet;
      };
      var rmsPrefix = /^-ms-/, rdashAlpha = /-([a-z])/g;
      function fcamelCase(_all, letter) {
        return letter.toUpperCase();
      }
      function camelCase(string) {
        return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
      }
      var acceptData = function(owner) {
        return owner.nodeType === 1 || owner.nodeType === 9 || !+owner.nodeType;
      };
      function Data() {
        this.expando = jQuery4.expando + Data.uid++;
      }
      Data.uid = 1;
      Data.prototype = {
        cache: function(owner) {
          var value = owner[this.expando];
          if (!value) {
            value = {};
            if (acceptData(owner)) {
              if (owner.nodeType) {
                owner[this.expando] = value;
              } else {
                Object.defineProperty(owner, this.expando, {
                  value,
                  configurable: true
                });
              }
            }
          }
          return value;
        },
        set: function(owner, data, value) {
          var prop, cache = this.cache(owner);
          if (typeof data === "string") {
            cache[camelCase(data)] = value;
          } else {
            for (prop in data) {
              cache[camelCase(prop)] = data[prop];
            }
          }
          return cache;
        },
        get: function(owner, key) {
          return key === void 0 ? this.cache(owner) : owner[this.expando] && owner[this.expando][camelCase(key)];
        },
        access: function(owner, key, value) {
          if (key === void 0 || key && typeof key === "string" && value === void 0) {
            return this.get(owner, key);
          }
          this.set(owner, key, value);
          return value !== void 0 ? value : key;
        },
        remove: function(owner, key) {
          var i, cache = owner[this.expando];
          if (cache === void 0) {
            return;
          }
          if (key !== void 0) {
            if (Array.isArray(key)) {
              key = key.map(camelCase);
            } else {
              key = camelCase(key);
              key = key in cache ? [key] : key.match(rnothtmlwhite) || [];
            }
            i = key.length;
            while (i--) {
              delete cache[key[i]];
            }
          }
          if (key === void 0 || jQuery4.isEmptyObject(cache)) {
            if (owner.nodeType) {
              owner[this.expando] = void 0;
            } else {
              delete owner[this.expando];
            }
          }
        },
        hasData: function(owner) {
          var cache = owner[this.expando];
          return cache !== void 0 && !jQuery4.isEmptyObject(cache);
        }
      };
      var dataPriv = new Data();
      var dataUser = new Data();
      var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, rmultiDash = /[A-Z]/g;
      function getData2(data) {
        if (data === "true") {
          return true;
        }
        if (data === "false") {
          return false;
        }
        if (data === "null") {
          return null;
        }
        if (data === +data + "") {
          return +data;
        }
        if (rbrace.test(data)) {
          return JSON.parse(data);
        }
        return data;
      }
      function dataAttr(elem, key, data) {
        var name;
        if (data === void 0 && elem.nodeType === 1) {
          name = "data-" + key.replace(rmultiDash, "-$&").toLowerCase();
          data = elem.getAttribute(name);
          if (typeof data === "string") {
            try {
              data = getData2(data);
            } catch (e) {
            }
            dataUser.set(elem, key, data);
          } else {
            data = void 0;
          }
        }
        return data;
      }
      jQuery4.extend({
        hasData: function(elem) {
          return dataUser.hasData(elem) || dataPriv.hasData(elem);
        },
        data: function(elem, name, data) {
          return dataUser.access(elem, name, data);
        },
        removeData: function(elem, name) {
          dataUser.remove(elem, name);
        },
        _data: function(elem, name, data) {
          return dataPriv.access(elem, name, data);
        },
        _removeData: function(elem, name) {
          dataPriv.remove(elem, name);
        }
      });
      jQuery4.fn.extend({
        data: function(key, value) {
          var i, name, data, elem = this[0], attrs = elem && elem.attributes;
          if (key === void 0) {
            if (this.length) {
              data = dataUser.get(elem);
              if (elem.nodeType === 1 && !dataPriv.get(elem, "hasDataAttrs")) {
                i = attrs.length;
                while (i--) {
                  if (attrs[i]) {
                    name = attrs[i].name;
                    if (name.indexOf("data-") === 0) {
                      name = camelCase(name.slice(5));
                      dataAttr(elem, name, data[name]);
                    }
                  }
                }
                dataPriv.set(elem, "hasDataAttrs", true);
              }
            }
            return data;
          }
          if (typeof key === "object") {
            return this.each(function() {
              dataUser.set(this, key);
            });
          }
          return access(this, function(value2) {
            var data2;
            if (elem && value2 === void 0) {
              data2 = dataUser.get(elem, key);
              if (data2 !== void 0) {
                return data2;
              }
              data2 = dataAttr(elem, key);
              if (data2 !== void 0) {
                return data2;
              }
              return;
            }
            this.each(function() {
              dataUser.set(this, key, value2);
            });
          }, null, value, arguments.length > 1, null, true);
        },
        removeData: function(key) {
          return this.each(function() {
            dataUser.remove(this, key);
          });
        }
      });
      jQuery4.extend({
        queue: function(elem, type, data) {
          var queue;
          if (elem) {
            type = (type || "fx") + "queue";
            queue = dataPriv.get(elem, type);
            if (data) {
              if (!queue || Array.isArray(data)) {
                queue = dataPriv.access(elem, type, jQuery4.makeArray(data));
              } else {
                queue.push(data);
              }
            }
            return queue || [];
          }
        },
        dequeue: function(elem, type) {
          type = type || "fx";
          var queue = jQuery4.queue(elem, type), startLength = queue.length, fn = queue.shift(), hooks = jQuery4._queueHooks(elem, type), next = function() {
            jQuery4.dequeue(elem, type);
          };
          if (fn === "inprogress") {
            fn = queue.shift();
            startLength--;
          }
          if (fn) {
            if (type === "fx") {
              queue.unshift("inprogress");
            }
            delete hooks.stop;
            fn.call(elem, next, hooks);
          }
          if (!startLength && hooks) {
            hooks.empty.fire();
          }
        },
        _queueHooks: function(elem, type) {
          var key = type + "queueHooks";
          return dataPriv.get(elem, key) || dataPriv.access(elem, key, {
            empty: jQuery4.Callbacks("once memory").add(function() {
              dataPriv.remove(elem, [type + "queue", key]);
            })
          });
        }
      });
      jQuery4.fn.extend({
        queue: function(type, data) {
          var setter = 2;
          if (typeof type !== "string") {
            data = type;
            type = "fx";
            setter--;
          }
          if (arguments.length < setter) {
            return jQuery4.queue(this[0], type);
          }
          return data === void 0 ? this : this.each(function() {
            var queue = jQuery4.queue(this, type, data);
            jQuery4._queueHooks(this, type);
            if (type === "fx" && queue[0] !== "inprogress") {
              jQuery4.dequeue(this, type);
            }
          });
        },
        dequeue: function(type) {
          return this.each(function() {
            jQuery4.dequeue(this, type);
          });
        },
        clearQueue: function(type) {
          return this.queue(type || "fx", []);
        },
        promise: function(type, obj) {
          var tmp, count = 1, defer = jQuery4.Deferred(), elements = this, i = this.length, resolve = function() {
            if (!--count) {
              defer.resolveWith(elements, [elements]);
            }
          };
          if (typeof type !== "string") {
            obj = type;
            type = void 0;
          }
          type = type || "fx";
          while (i--) {
            tmp = dataPriv.get(elements[i], type + "queueHooks");
            if (tmp && tmp.empty) {
              count++;
              tmp.empty.add(resolve);
            }
          }
          resolve();
          return defer.promise(obj);
        }
      });
      var pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
      var rcssNum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i");
      var cssExpand = ["Top", "Right", "Bottom", "Left"];
      var documentElement = document2.documentElement;
      var isAttached = function(elem) {
        return jQuery4.contains(elem.ownerDocument, elem);
      }, composed = { composed: true };
      if (documentElement.getRootNode) {
        isAttached = function(elem) {
          return jQuery4.contains(elem.ownerDocument, elem) || elem.getRootNode(composed) === elem.ownerDocument;
        };
      }
      var isHiddenWithinTree = function(elem, el) {
        elem = el || elem;
        return elem.style.display === "none" || elem.style.display === "" && isAttached(elem) && jQuery4.css(elem, "display") === "none";
      };
      function adjustCSS(elem, prop, valueParts, tween) {
        var adjusted, scale, maxIterations = 20, currentValue = tween ? function() {
          return tween.cur();
        } : function() {
          return jQuery4.css(elem, prop, "");
        }, initial = currentValue(), unit = valueParts && valueParts[3] || (jQuery4.cssNumber[prop] ? "" : "px"), initialInUnit = elem.nodeType && (jQuery4.cssNumber[prop] || unit !== "px" && +initial) && rcssNum.exec(jQuery4.css(elem, prop));
        if (initialInUnit && initialInUnit[3] !== unit) {
          initial = initial / 2;
          unit = unit || initialInUnit[3];
          initialInUnit = +initial || 1;
          while (maxIterations--) {
            jQuery4.style(elem, prop, initialInUnit + unit);
            if ((1 - scale) * (1 - (scale = currentValue() / initial || 0.5)) <= 0) {
              maxIterations = 0;
            }
            initialInUnit = initialInUnit / scale;
          }
          initialInUnit = initialInUnit * 2;
          jQuery4.style(elem, prop, initialInUnit + unit);
          valueParts = valueParts || [];
        }
        if (valueParts) {
          initialInUnit = +initialInUnit || +initial || 0;
          adjusted = valueParts[1] ? initialInUnit + (valueParts[1] + 1) * valueParts[2] : +valueParts[2];
          if (tween) {
            tween.unit = unit;
            tween.start = initialInUnit;
            tween.end = adjusted;
          }
        }
        return adjusted;
      }
      var defaultDisplayMap = {};
      function getDefaultDisplay(elem) {
        var temp, doc = elem.ownerDocument, nodeName2 = elem.nodeName, display = defaultDisplayMap[nodeName2];
        if (display) {
          return display;
        }
        temp = doc.body.appendChild(doc.createElement(nodeName2));
        display = jQuery4.css(temp, "display");
        temp.parentNode.removeChild(temp);
        if (display === "none") {
          display = "block";
        }
        defaultDisplayMap[nodeName2] = display;
        return display;
      }
      function showHide(elements, show) {
        var display, elem, values = [], index = 0, length = elements.length;
        for (; index < length; index++) {
          elem = elements[index];
          if (!elem.style) {
            continue;
          }
          display = elem.style.display;
          if (show) {
            if (display === "none") {
              values[index] = dataPriv.get(elem, "display") || null;
              if (!values[index]) {
                elem.style.display = "";
              }
            }
            if (elem.style.display === "" && isHiddenWithinTree(elem)) {
              values[index] = getDefaultDisplay(elem);
            }
          } else {
            if (display !== "none") {
              values[index] = "none";
              dataPriv.set(elem, "display", display);
            }
          }
        }
        for (index = 0; index < length; index++) {
          if (values[index] != null) {
            elements[index].style.display = values[index];
          }
        }
        return elements;
      }
      jQuery4.fn.extend({
        show: function() {
          return showHide(this, true);
        },
        hide: function() {
          return showHide(this);
        },
        toggle: function(state) {
          if (typeof state === "boolean") {
            return state ? this.show() : this.hide();
          }
          return this.each(function() {
            if (isHiddenWithinTree(this)) {
              jQuery4(this).show();
            } else {
              jQuery4(this).hide();
            }
          });
        }
      });
      var rcheckableType = /^(?:checkbox|radio)$/i;
      var rtagName = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i;
      var rscriptType = /^$|^module$|\/(?:java|ecma)script/i;
      (function() {
        var fragment = document2.createDocumentFragment(), div = fragment.appendChild(document2.createElement("div")), input = document2.createElement("input");
        input.setAttribute("type", "radio");
        input.setAttribute("checked", "checked");
        input.setAttribute("name", "t");
        div.appendChild(input);
        support.checkClone = div.cloneNode(true).cloneNode(true).lastChild.checked;
        div.innerHTML = "<textarea>x</textarea>";
        support.noCloneChecked = !!div.cloneNode(true).lastChild.defaultValue;
        div.innerHTML = "<option></option>";
        support.option = !!div.lastChild;
      })();
      var wrapMap = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
      };
      wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
      wrapMap.th = wrapMap.td;
      if (!support.option) {
        wrapMap.optgroup = wrapMap.option = [1, "<select multiple='multiple'>", "</select>"];
      }
      function getAll(context, tag) {
        var ret;
        if (typeof context.getElementsByTagName !== "undefined") {
          ret = context.getElementsByTagName(tag || "*");
        } else if (typeof context.querySelectorAll !== "undefined") {
          ret = context.querySelectorAll(tag || "*");
        } else {
          ret = [];
        }
        if (tag === void 0 || tag && nodeName(context, tag)) {
          return jQuery4.merge([context], ret);
        }
        return ret;
      }
      function setGlobalEval(elems, refElements) {
        var i = 0, l = elems.length;
        for (; i < l; i++) {
          dataPriv.set(
            elems[i],
            "globalEval",
            !refElements || dataPriv.get(refElements[i], "globalEval")
          );
        }
      }
      var rhtml = /<|&#?\w+;/;
      function buildFragment(elems, context, scripts, selection, ignored) {
        var elem, tmp, tag, wrap, attached, j, fragment = context.createDocumentFragment(), nodes = [], i = 0, l = elems.length;
        for (; i < l; i++) {
          elem = elems[i];
          if (elem || elem === 0) {
            if (toType(elem) === "object") {
              jQuery4.merge(nodes, elem.nodeType ? [elem] : elem);
            } else if (!rhtml.test(elem)) {
              nodes.push(context.createTextNode(elem));
            } else {
              tmp = tmp || fragment.appendChild(context.createElement("div"));
              tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase();
              wrap = wrapMap[tag] || wrapMap._default;
              tmp.innerHTML = wrap[1] + jQuery4.htmlPrefilter(elem) + wrap[2];
              j = wrap[0];
              while (j--) {
                tmp = tmp.lastChild;
              }
              jQuery4.merge(nodes, tmp.childNodes);
              tmp = fragment.firstChild;
              tmp.textContent = "";
            }
          }
        }
        fragment.textContent = "";
        i = 0;
        while (elem = nodes[i++]) {
          if (selection && jQuery4.inArray(elem, selection) > -1) {
            if (ignored) {
              ignored.push(elem);
            }
            continue;
          }
          attached = isAttached(elem);
          tmp = getAll(fragment.appendChild(elem), "script");
          if (attached) {
            setGlobalEval(tmp);
          }
          if (scripts) {
            j = 0;
            while (elem = tmp[j++]) {
              if (rscriptType.test(elem.type || "")) {
                scripts.push(elem);
              }
            }
          }
        }
        return fragment;
      }
      var rtypenamespace = /^([^.]*)(?:\.(.+)|)/;
      function returnTrue() {
        return true;
      }
      function returnFalse() {
        return false;
      }
      function on(elem, types, selector, data, fn, one) {
        var origFn, type;
        if (typeof types === "object") {
          if (typeof selector !== "string") {
            data = data || selector;
            selector = void 0;
          }
          for (type in types) {
            on(elem, type, selector, data, types[type], one);
          }
          return elem;
        }
        if (data == null && fn == null) {
          fn = selector;
          data = selector = void 0;
        } else if (fn == null) {
          if (typeof selector === "string") {
            fn = data;
            data = void 0;
          } else {
            fn = data;
            data = selector;
            selector = void 0;
          }
        }
        if (fn === false) {
          fn = returnFalse;
        } else if (!fn) {
          return elem;
        }
        if (one === 1) {
          origFn = fn;
          fn = function(event) {
            jQuery4().off(event);
            return origFn.apply(this, arguments);
          };
          fn.guid = origFn.guid || (origFn.guid = jQuery4.guid++);
        }
        return elem.each(function() {
          jQuery4.event.add(this, types, fn, data, selector);
        });
      }
      jQuery4.event = {
        global: {},
        add: function(elem, types, handler, data, selector) {
          var handleObjIn, eventHandle, tmp, events, t, handleObj, special, handlers, type, namespaces, origType, elemData = dataPriv.get(elem);
          if (!acceptData(elem)) {
            return;
          }
          if (handler.handler) {
            handleObjIn = handler;
            handler = handleObjIn.handler;
            selector = handleObjIn.selector;
          }
          if (selector) {
            jQuery4.find.matchesSelector(documentElement, selector);
          }
          if (!handler.guid) {
            handler.guid = jQuery4.guid++;
          }
          if (!(events = elemData.events)) {
            events = elemData.events = /* @__PURE__ */ Object.create(null);
          }
          if (!(eventHandle = elemData.handle)) {
            eventHandle = elemData.handle = function(e) {
              return typeof jQuery4 !== "undefined" && jQuery4.event.triggered !== e.type ? jQuery4.event.dispatch.apply(elem, arguments) : void 0;
            };
          }
          types = (types || "").match(rnothtmlwhite) || [""];
          t = types.length;
          while (t--) {
            tmp = rtypenamespace.exec(types[t]) || [];
            type = origType = tmp[1];
            namespaces = (tmp[2] || "").split(".").sort();
            if (!type) {
              continue;
            }
            special = jQuery4.event.special[type] || {};
            type = (selector ? special.delegateType : special.bindType) || type;
            special = jQuery4.event.special[type] || {};
            handleObj = jQuery4.extend({
              type,
              origType,
              data,
              handler,
              guid: handler.guid,
              selector,
              needsContext: selector && jQuery4.expr.match.needsContext.test(selector),
              namespace: namespaces.join(".")
            }, handleObjIn);
            if (!(handlers = events[type])) {
              handlers = events[type] = [];
              handlers.delegateCount = 0;
              if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) {
                if (elem.addEventListener) {
                  elem.addEventListener(type, eventHandle);
                }
              }
            }
            if (special.add) {
              special.add.call(elem, handleObj);
              if (!handleObj.handler.guid) {
                handleObj.handler.guid = handler.guid;
              }
            }
            if (selector) {
              handlers.splice(handlers.delegateCount++, 0, handleObj);
            } else {
              handlers.push(handleObj);
            }
            jQuery4.event.global[type] = true;
          }
        },
        remove: function(elem, types, handler, selector, mappedTypes) {
          var j, origCount, tmp, events, t, handleObj, special, handlers, type, namespaces, origType, elemData = dataPriv.hasData(elem) && dataPriv.get(elem);
          if (!elemData || !(events = elemData.events)) {
            return;
          }
          types = (types || "").match(rnothtmlwhite) || [""];
          t = types.length;
          while (t--) {
            tmp = rtypenamespace.exec(types[t]) || [];
            type = origType = tmp[1];
            namespaces = (tmp[2] || "").split(".").sort();
            if (!type) {
              for (type in events) {
                jQuery4.event.remove(elem, type + types[t], handler, selector, true);
              }
              continue;
            }
            special = jQuery4.event.special[type] || {};
            type = (selector ? special.delegateType : special.bindType) || type;
            handlers = events[type] || [];
            tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)");
            origCount = j = handlers.length;
            while (j--) {
              handleObj = handlers[j];
              if ((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
                handlers.splice(j, 1);
                if (handleObj.selector) {
                  handlers.delegateCount--;
                }
                if (special.remove) {
                  special.remove.call(elem, handleObj);
                }
              }
            }
            if (origCount && !handlers.length) {
              if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) {
                jQuery4.removeEvent(elem, type, elemData.handle);
              }
              delete events[type];
            }
          }
          if (jQuery4.isEmptyObject(events)) {
            dataPriv.remove(elem, "handle events");
          }
        },
        dispatch: function(nativeEvent) {
          var i, j, ret, matched, handleObj, handlerQueue, args = new Array(arguments.length), event = jQuery4.event.fix(nativeEvent), handlers = (dataPriv.get(this, "events") || /* @__PURE__ */ Object.create(null))[event.type] || [], special = jQuery4.event.special[event.type] || {};
          args[0] = event;
          for (i = 1; i < arguments.length; i++) {
            args[i] = arguments[i];
          }
          event.delegateTarget = this;
          if (special.preDispatch && special.preDispatch.call(this, event) === false) {
            return;
          }
          handlerQueue = jQuery4.event.handlers.call(this, event, handlers);
          i = 0;
          while ((matched = handlerQueue[i++]) && !event.isPropagationStopped()) {
            event.currentTarget = matched.elem;
            j = 0;
            while ((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped()) {
              if (!event.rnamespace || handleObj.namespace === false || event.rnamespace.test(handleObj.namespace)) {
                event.handleObj = handleObj;
                event.data = handleObj.data;
                ret = ((jQuery4.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);
                if (ret !== void 0) {
                  if ((event.result = ret) === false) {
                    event.preventDefault();
                    event.stopPropagation();
                  }
                }
              }
            }
          }
          if (special.postDispatch) {
            special.postDispatch.call(this, event);
          }
          return event.result;
        },
        handlers: function(event, handlers) {
          var i, handleObj, sel, matchedHandlers, matchedSelectors, handlerQueue = [], delegateCount = handlers.delegateCount, cur = event.target;
          if (delegateCount && cur.nodeType && !(event.type === "click" && event.button >= 1)) {
            for (; cur !== this; cur = cur.parentNode || this) {
              if (cur.nodeType === 1 && !(event.type === "click" && cur.disabled === true)) {
                matchedHandlers = [];
                matchedSelectors = {};
                for (i = 0; i < delegateCount; i++) {
                  handleObj = handlers[i];
                  sel = handleObj.selector + " ";
                  if (matchedSelectors[sel] === void 0) {
                    matchedSelectors[sel] = handleObj.needsContext ? jQuery4(sel, this).index(cur) > -1 : jQuery4.find(sel, this, null, [cur]).length;
                  }
                  if (matchedSelectors[sel]) {
                    matchedHandlers.push(handleObj);
                  }
                }
                if (matchedHandlers.length) {
                  handlerQueue.push({ elem: cur, handlers: matchedHandlers });
                }
              }
            }
          }
          cur = this;
          if (delegateCount < handlers.length) {
            handlerQueue.push({ elem: cur, handlers: handlers.slice(delegateCount) });
          }
          return handlerQueue;
        },
        addProp: function(name, hook) {
          Object.defineProperty(jQuery4.Event.prototype, name, {
            enumerable: true,
            configurable: true,
            get: isFunction(hook) ? function() {
              if (this.originalEvent) {
                return hook(this.originalEvent);
              }
            } : function() {
              if (this.originalEvent) {
                return this.originalEvent[name];
              }
            },
            set: function(value) {
              Object.defineProperty(this, name, {
                enumerable: true,
                configurable: true,
                writable: true,
                value
              });
            }
          });
        },
        fix: function(originalEvent) {
          return originalEvent[jQuery4.expando] ? originalEvent : new jQuery4.Event(originalEvent);
        },
        special: {
          load: {
            noBubble: true
          },
          click: {
            setup: function(data) {
              var el = this || data;
              if (rcheckableType.test(el.type) && el.click && nodeName(el, "input")) {
                leverageNative(el, "click", true);
              }
              return false;
            },
            trigger: function(data) {
              var el = this || data;
              if (rcheckableType.test(el.type) && el.click && nodeName(el, "input")) {
                leverageNative(el, "click");
              }
              return true;
            },
            _default: function(event) {
              var target = event.target;
              return rcheckableType.test(target.type) && target.click && nodeName(target, "input") && dataPriv.get(target, "click") || nodeName(target, "a");
            }
          },
          beforeunload: {
            postDispatch: function(event) {
              if (event.result !== void 0 && event.originalEvent) {
                event.originalEvent.returnValue = event.result;
              }
            }
          }
        }
      };
      function leverageNative(el, type, isSetup) {
        if (!isSetup) {
          if (dataPriv.get(el, type) === void 0) {
            jQuery4.event.add(el, type, returnTrue);
          }
          return;
        }
        dataPriv.set(el, type, false);
        jQuery4.event.add(el, type, {
          namespace: false,
          handler: function(event) {
            var result, saved = dataPriv.get(this, type);
            if (event.isTrigger & 1 && this[type]) {
              if (!saved) {
                saved = slice.call(arguments);
                dataPriv.set(this, type, saved);
                this[type]();
                result = dataPriv.get(this, type);
                dataPriv.set(this, type, false);
                if (saved !== result) {
                  event.stopImmediatePropagation();
                  event.preventDefault();
                  return result;
                }
              } else if ((jQuery4.event.special[type] || {}).delegateType) {
                event.stopPropagation();
              }
            } else if (saved) {
              dataPriv.set(this, type, jQuery4.event.trigger(
                saved[0],
                saved.slice(1),
                this
              ));
              event.stopPropagation();
              event.isImmediatePropagationStopped = returnTrue;
            }
          }
        });
      }
      jQuery4.removeEvent = function(elem, type, handle) {
        if (elem.removeEventListener) {
          elem.removeEventListener(type, handle);
        }
      };
      jQuery4.Event = function(src, props) {
        if (!(this instanceof jQuery4.Event)) {
          return new jQuery4.Event(src, props);
        }
        if (src && src.type) {
          this.originalEvent = src;
          this.type = src.type;
          this.isDefaultPrevented = src.defaultPrevented || src.defaultPrevented === void 0 && src.returnValue === false ? returnTrue : returnFalse;
          this.target = src.target && src.target.nodeType === 3 ? src.target.parentNode : src.target;
          this.currentTarget = src.currentTarget;
          this.relatedTarget = src.relatedTarget;
        } else {
          this.type = src;
        }
        if (props) {
          jQuery4.extend(this, props);
        }
        this.timeStamp = src && src.timeStamp || Date.now();
        this[jQuery4.expando] = true;
      };
      jQuery4.Event.prototype = {
        constructor: jQuery4.Event,
        isDefaultPrevented: returnFalse,
        isPropagationStopped: returnFalse,
        isImmediatePropagationStopped: returnFalse,
        isSimulated: false,
        preventDefault: function() {
          var e = this.originalEvent;
          this.isDefaultPrevented = returnTrue;
          if (e && !this.isSimulated) {
            e.preventDefault();
          }
        },
        stopPropagation: function() {
          var e = this.originalEvent;
          this.isPropagationStopped = returnTrue;
          if (e && !this.isSimulated) {
            e.stopPropagation();
          }
        },
        stopImmediatePropagation: function() {
          var e = this.originalEvent;
          this.isImmediatePropagationStopped = returnTrue;
          if (e && !this.isSimulated) {
            e.stopImmediatePropagation();
          }
          this.stopPropagation();
        }
      };
      jQuery4.each({
        altKey: true,
        bubbles: true,
        cancelable: true,
        changedTouches: true,
        ctrlKey: true,
        detail: true,
        eventPhase: true,
        metaKey: true,
        pageX: true,
        pageY: true,
        shiftKey: true,
        view: true,
        "char": true,
        code: true,
        charCode: true,
        key: true,
        keyCode: true,
        button: true,
        buttons: true,
        clientX: true,
        clientY: true,
        offsetX: true,
        offsetY: true,
        pointerId: true,
        pointerType: true,
        screenX: true,
        screenY: true,
        targetTouches: true,
        toElement: true,
        touches: true,
        which: true
      }, jQuery4.event.addProp);
      jQuery4.each({ focus: "focusin", blur: "focusout" }, function(type, delegateType) {
        function focusMappedHandler(nativeEvent) {
          if (document2.documentMode) {
            var handle = dataPriv.get(this, "handle"), event = jQuery4.event.fix(nativeEvent);
            event.type = nativeEvent.type === "focusin" ? "focus" : "blur";
            event.isSimulated = true;
            handle(nativeEvent);
            if (event.target === event.currentTarget) {
              handle(event);
            }
          } else {
            jQuery4.event.simulate(
              delegateType,
              nativeEvent.target,
              jQuery4.event.fix(nativeEvent)
            );
          }
        }
        jQuery4.event.special[type] = {
          setup: function() {
            var attaches;
            leverageNative(this, type, true);
            if (document2.documentMode) {
              attaches = dataPriv.get(this, delegateType);
              if (!attaches) {
                this.addEventListener(delegateType, focusMappedHandler);
              }
              dataPriv.set(this, delegateType, (attaches || 0) + 1);
            } else {
              return false;
            }
          },
          trigger: function() {
            leverageNative(this, type);
            return true;
          },
          teardown: function() {
            var attaches;
            if (document2.documentMode) {
              attaches = dataPriv.get(this, delegateType) - 1;
              if (!attaches) {
                this.removeEventListener(delegateType, focusMappedHandler);
                dataPriv.remove(this, delegateType);
              } else {
                dataPriv.set(this, delegateType, attaches);
              }
            } else {
              return false;
            }
          },
          _default: function(event) {
            return dataPriv.get(event.target, type);
          },
          delegateType
        };
        jQuery4.event.special[delegateType] = {
          setup: function() {
            var doc = this.ownerDocument || this.document || this, dataHolder = document2.documentMode ? this : doc, attaches = dataPriv.get(dataHolder, delegateType);
            if (!attaches) {
              if (document2.documentMode) {
                this.addEventListener(delegateType, focusMappedHandler);
              } else {
                doc.addEventListener(type, focusMappedHandler, true);
              }
            }
            dataPriv.set(dataHolder, delegateType, (attaches || 0) + 1);
          },
          teardown: function() {
            var doc = this.ownerDocument || this.document || this, dataHolder = document2.documentMode ? this : doc, attaches = dataPriv.get(dataHolder, delegateType) - 1;
            if (!attaches) {
              if (document2.documentMode) {
                this.removeEventListener(delegateType, focusMappedHandler);
              } else {
                doc.removeEventListener(type, focusMappedHandler, true);
              }
              dataPriv.remove(dataHolder, delegateType);
            } else {
              dataPriv.set(dataHolder, delegateType, attaches);
            }
          }
        };
      });
      jQuery4.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
      }, function(orig, fix) {
        jQuery4.event.special[orig] = {
          delegateType: fix,
          bindType: fix,
          handle: function(event) {
            var ret, target = this, related = event.relatedTarget, handleObj = event.handleObj;
            if (!related || related !== target && !jQuery4.contains(target, related)) {
              event.type = handleObj.origType;
              ret = handleObj.handler.apply(this, arguments);
              event.type = fix;
            }
            return ret;
          }
        };
      });
      jQuery4.fn.extend({
        on: function(types, selector, data, fn) {
          return on(this, types, selector, data, fn);
        },
        one: function(types, selector, data, fn) {
          return on(this, types, selector, data, fn, 1);
        },
        off: function(types, selector, fn) {
          var handleObj, type;
          if (types && types.preventDefault && types.handleObj) {
            handleObj = types.handleObj;
            jQuery4(types.delegateTarget).off(
              handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType,
              handleObj.selector,
              handleObj.handler
            );
            return this;
          }
          if (typeof types === "object") {
            for (type in types) {
              this.off(type, selector, types[type]);
            }
            return this;
          }
          if (selector === false || typeof selector === "function") {
            fn = selector;
            selector = void 0;
          }
          if (fn === false) {
            fn = returnFalse;
          }
          return this.each(function() {
            jQuery4.event.remove(this, types, fn, selector);
          });
        }
      });
      var rnoInnerhtml = /<script|<style|<link/i, rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i, rcleanScript = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
      function manipulationTarget(elem, content) {
        if (nodeName(elem, "table") && nodeName(content.nodeType !== 11 ? content : content.firstChild, "tr")) {
          return jQuery4(elem).children("tbody")[0] || elem;
        }
        return elem;
      }
      function disableScript(elem) {
        elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
        return elem;
      }
      function restoreScript(elem) {
        if ((elem.type || "").slice(0, 5) === "true/") {
          elem.type = elem.type.slice(5);
        } else {
          elem.removeAttribute("type");
        }
        return elem;
      }
      function cloneCopyEvent(src, dest) {
        var i, l, type, pdataOld, udataOld, udataCur, events;
        if (dest.nodeType !== 1) {
          return;
        }
        if (dataPriv.hasData(src)) {
          pdataOld = dataPriv.get(src);
          events = pdataOld.events;
          if (events) {
            dataPriv.remove(dest, "handle events");
            for (type in events) {
              for (i = 0, l = events[type].length; i < l; i++) {
                jQuery4.event.add(dest, type, events[type][i]);
              }
            }
          }
        }
        if (dataUser.hasData(src)) {
          udataOld = dataUser.access(src);
          udataCur = jQuery4.extend({}, udataOld);
          dataUser.set(dest, udataCur);
        }
      }
      function fixInput(src, dest) {
        var nodeName2 = dest.nodeName.toLowerCase();
        if (nodeName2 === "input" && rcheckableType.test(src.type)) {
          dest.checked = src.checked;
        } else if (nodeName2 === "input" || nodeName2 === "textarea") {
          dest.defaultValue = src.defaultValue;
        }
      }
      function domManip(collection, args, callback, ignored) {
        args = flat(args);
        var fragment, first, scripts, hasScripts, node, doc, i = 0, l = collection.length, iNoClone = l - 1, value = args[0], valueIsFunction = isFunction(value);
        if (valueIsFunction || l > 1 && typeof value === "string" && !support.checkClone && rchecked.test(value)) {
          return collection.each(function(index) {
            var self2 = collection.eq(index);
            if (valueIsFunction) {
              args[0] = value.call(this, index, self2.html());
            }
            domManip(self2, args, callback, ignored);
          });
        }
        if (l) {
          fragment = buildFragment(args, collection[0].ownerDocument, false, collection, ignored);
          first = fragment.firstChild;
          if (fragment.childNodes.length === 1) {
            fragment = first;
          }
          if (first || ignored) {
            scripts = jQuery4.map(getAll(fragment, "script"), disableScript);
            hasScripts = scripts.length;
            for (; i < l; i++) {
              node = fragment;
              if (i !== iNoClone) {
                node = jQuery4.clone(node, true, true);
                if (hasScripts) {
                  jQuery4.merge(scripts, getAll(node, "script"));
                }
              }
              callback.call(collection[i], node, i);
            }
            if (hasScripts) {
              doc = scripts[scripts.length - 1].ownerDocument;
              jQuery4.map(scripts, restoreScript);
              for (i = 0; i < hasScripts; i++) {
                node = scripts[i];
                if (rscriptType.test(node.type || "") && !dataPriv.access(node, "globalEval") && jQuery4.contains(doc, node)) {
                  if (node.src && (node.type || "").toLowerCase() !== "module") {
                    if (jQuery4._evalUrl && !node.noModule) {
                      jQuery4._evalUrl(node.src, {
                        nonce: node.nonce || node.getAttribute("nonce")
                      }, doc);
                    }
                  } else {
                    DOMEval(node.textContent.replace(rcleanScript, ""), node, doc);
                  }
                }
              }
            }
          }
        }
        return collection;
      }
      function remove(elem, selector, keepData) {
        var node, nodes = selector ? jQuery4.filter(selector, elem) : elem, i = 0;
        for (; (node = nodes[i]) != null; i++) {
          if (!keepData && node.nodeType === 1) {
            jQuery4.cleanData(getAll(node));
          }
          if (node.parentNode) {
            if (keepData && isAttached(node)) {
              setGlobalEval(getAll(node, "script"));
            }
            node.parentNode.removeChild(node);
          }
        }
        return elem;
      }
      jQuery4.extend({
        htmlPrefilter: function(html) {
          return html;
        },
        clone: function(elem, dataAndEvents, deepDataAndEvents) {
          var i, l, srcElements, destElements, clone = elem.cloneNode(true), inPage = isAttached(elem);
          if (!support.noCloneChecked && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery4.isXMLDoc(elem)) {
            destElements = getAll(clone);
            srcElements = getAll(elem);
            for (i = 0, l = srcElements.length; i < l; i++) {
              fixInput(srcElements[i], destElements[i]);
            }
          }
          if (dataAndEvents) {
            if (deepDataAndEvents) {
              srcElements = srcElements || getAll(elem);
              destElements = destElements || getAll(clone);
              for (i = 0, l = srcElements.length; i < l; i++) {
                cloneCopyEvent(srcElements[i], destElements[i]);
              }
            } else {
              cloneCopyEvent(elem, clone);
            }
          }
          destElements = getAll(clone, "script");
          if (destElements.length > 0) {
            setGlobalEval(destElements, !inPage && getAll(elem, "script"));
          }
          return clone;
        },
        cleanData: function(elems) {
          var data, elem, type, special = jQuery4.event.special, i = 0;
          for (; (elem = elems[i]) !== void 0; i++) {
            if (acceptData(elem)) {
              if (data = elem[dataPriv.expando]) {
                if (data.events) {
                  for (type in data.events) {
                    if (special[type]) {
                      jQuery4.event.remove(elem, type);
                    } else {
                      jQuery4.removeEvent(elem, type, data.handle);
                    }
                  }
                }
                elem[dataPriv.expando] = void 0;
              }
              if (elem[dataUser.expando]) {
                elem[dataUser.expando] = void 0;
              }
            }
          }
        }
      });
      jQuery4.fn.extend({
        detach: function(selector) {
          return remove(this, selector, true);
        },
        remove: function(selector) {
          return remove(this, selector);
        },
        text: function(value) {
          return access(this, function(value2) {
            return value2 === void 0 ? jQuery4.text(this) : this.empty().each(function() {
              if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                this.textContent = value2;
              }
            });
          }, null, value, arguments.length);
        },
        append: function() {
          return domManip(this, arguments, function(elem) {
            if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
              var target = manipulationTarget(this, elem);
              target.appendChild(elem);
            }
          });
        },
        prepend: function() {
          return domManip(this, arguments, function(elem) {
            if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
              var target = manipulationTarget(this, elem);
              target.insertBefore(elem, target.firstChild);
            }
          });
        },
        before: function() {
          return domManip(this, arguments, function(elem) {
            if (this.parentNode) {
              this.parentNode.insertBefore(elem, this);
            }
          });
        },
        after: function() {
          return domManip(this, arguments, function(elem) {
            if (this.parentNode) {
              this.parentNode.insertBefore(elem, this.nextSibling);
            }
          });
        },
        empty: function() {
          var elem, i = 0;
          for (; (elem = this[i]) != null; i++) {
            if (elem.nodeType === 1) {
              jQuery4.cleanData(getAll(elem, false));
              elem.textContent = "";
            }
          }
          return this;
        },
        clone: function(dataAndEvents, deepDataAndEvents) {
          dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
          deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
          return this.map(function() {
            return jQuery4.clone(this, dataAndEvents, deepDataAndEvents);
          });
        },
        html: function(value) {
          return access(this, function(value2) {
            var elem = this[0] || {}, i = 0, l = this.length;
            if (value2 === void 0 && elem.nodeType === 1) {
              return elem.innerHTML;
            }
            if (typeof value2 === "string" && !rnoInnerhtml.test(value2) && !wrapMap[(rtagName.exec(value2) || ["", ""])[1].toLowerCase()]) {
              value2 = jQuery4.htmlPrefilter(value2);
              try {
                for (; i < l; i++) {
                  elem = this[i] || {};
                  if (elem.nodeType === 1) {
                    jQuery4.cleanData(getAll(elem, false));
                    elem.innerHTML = value2;
                  }
                }
                elem = 0;
              } catch (e) {
              }
            }
            if (elem) {
              this.empty().append(value2);
            }
          }, null, value, arguments.length);
        },
        replaceWith: function() {
          var ignored = [];
          return domManip(this, arguments, function(elem) {
            var parent = this.parentNode;
            if (jQuery4.inArray(this, ignored) < 0) {
              jQuery4.cleanData(getAll(this));
              if (parent) {
                parent.replaceChild(elem, this);
              }
            }
          }, ignored);
        }
      });
      jQuery4.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
      }, function(name, original) {
        jQuery4.fn[name] = function(selector) {
          var elems, ret = [], insert = jQuery4(selector), last = insert.length - 1, i = 0;
          for (; i <= last; i++) {
            elems = i === last ? this : this.clone(true);
            jQuery4(insert[i])[original](elems);
            push.apply(ret, elems.get());
          }
          return this.pushStack(ret);
        };
      });
      var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");
      var rcustomProp = /^--/;
      var getStyles = function(elem) {
        var view = elem.ownerDocument.defaultView;
        if (!view || !view.opener) {
          view = window2;
        }
        return view.getComputedStyle(elem);
      };
      var swap = function(elem, options, callback) {
        var ret, name, old = {};
        for (name in options) {
          old[name] = elem.style[name];
          elem.style[name] = options[name];
        }
        ret = callback.call(elem);
        for (name in options) {
          elem.style[name] = old[name];
        }
        return ret;
      };
      var rboxStyle = new RegExp(cssExpand.join("|"), "i");
      (function() {
        function computeStyleTests() {
          if (!div) {
            return;
          }
          container.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0";
          div.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%";
          documentElement.appendChild(container).appendChild(div);
          var divStyle = window2.getComputedStyle(div);
          pixelPositionVal = divStyle.top !== "1%";
          reliableMarginLeftVal = roundPixelMeasures(divStyle.marginLeft) === 12;
          div.style.right = "60%";
          pixelBoxStylesVal = roundPixelMeasures(divStyle.right) === 36;
          boxSizingReliableVal = roundPixelMeasures(divStyle.width) === 36;
          div.style.position = "absolute";
          scrollboxSizeVal = roundPixelMeasures(div.offsetWidth / 3) === 12;
          documentElement.removeChild(container);
          div = null;
        }
        function roundPixelMeasures(measure) {
          return Math.round(parseFloat(measure));
        }
        var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal, reliableTrDimensionsVal, reliableMarginLeftVal, container = document2.createElement("div"), div = document2.createElement("div");
        if (!div.style) {
          return;
        }
        div.style.backgroundClip = "content-box";
        div.cloneNode(true).style.backgroundClip = "";
        support.clearCloneStyle = div.style.backgroundClip === "content-box";
        jQuery4.extend(support, {
          boxSizingReliable: function() {
            computeStyleTests();
            return boxSizingReliableVal;
          },
          pixelBoxStyles: function() {
            computeStyleTests();
            return pixelBoxStylesVal;
          },
          pixelPosition: function() {
            computeStyleTests();
            return pixelPositionVal;
          },
          reliableMarginLeft: function() {
            computeStyleTests();
            return reliableMarginLeftVal;
          },
          scrollboxSize: function() {
            computeStyleTests();
            return scrollboxSizeVal;
          },
          reliableTrDimensions: function() {
            var table, tr, trChild, trStyle;
            if (reliableTrDimensionsVal == null) {
              table = document2.createElement("table");
              tr = document2.createElement("tr");
              trChild = document2.createElement("div");
              table.style.cssText = "position:absolute;left:-11111px;border-collapse:separate";
              tr.style.cssText = "box-sizing:content-box;border:1px solid";
              tr.style.height = "1px";
              trChild.style.height = "9px";
              trChild.style.display = "block";
              documentElement.appendChild(table).appendChild(tr).appendChild(trChild);
              trStyle = window2.getComputedStyle(tr);
              reliableTrDimensionsVal = parseInt(trStyle.height, 10) + parseInt(trStyle.borderTopWidth, 10) + parseInt(trStyle.borderBottomWidth, 10) === tr.offsetHeight;
              documentElement.removeChild(table);
            }
            return reliableTrDimensionsVal;
          }
        });
      })();
      function curCSS(elem, name, computed) {
        var width, minWidth, maxWidth, ret, isCustomProp = rcustomProp.test(name), style = elem.style;
        computed = computed || getStyles(elem);
        if (computed) {
          ret = computed.getPropertyValue(name) || computed[name];
          if (isCustomProp && ret) {
            ret = ret.replace(rtrimCSS, "$1") || void 0;
          }
          if (ret === "" && !isAttached(elem)) {
            ret = jQuery4.style(elem, name);
          }
          if (!support.pixelBoxStyles() && rnumnonpx.test(ret) && rboxStyle.test(name)) {
            width = style.width;
            minWidth = style.minWidth;
            maxWidth = style.maxWidth;
            style.minWidth = style.maxWidth = style.width = ret;
            ret = computed.width;
            style.width = width;
            style.minWidth = minWidth;
            style.maxWidth = maxWidth;
          }
        }
        return ret !== void 0 ? ret + "" : ret;
      }
      function addGetHookIf(conditionFn, hookFn) {
        return {
          get: function() {
            if (conditionFn()) {
              delete this.get;
              return;
            }
            return (this.get = hookFn).apply(this, arguments);
          }
        };
      }
      var cssPrefixes = ["Webkit", "Moz", "ms"], emptyStyle = document2.createElement("div").style, vendorProps = {};
      function vendorPropName(name) {
        var capName = name[0].toUpperCase() + name.slice(1), i = cssPrefixes.length;
        while (i--) {
          name = cssPrefixes[i] + capName;
          if (name in emptyStyle) {
            return name;
          }
        }
      }
      function finalPropName(name) {
        var final = jQuery4.cssProps[name] || vendorProps[name];
        if (final) {
          return final;
        }
        if (name in emptyStyle) {
          return name;
        }
        return vendorProps[name] = vendorPropName(name) || name;
      }
      var rdisplayswap = /^(none|table(?!-c[ea]).+)/, cssShow = { position: "absolute", visibility: "hidden", display: "block" }, cssNormalTransform = {
        letterSpacing: "0",
        fontWeight: "400"
      };
      function setPositiveNumber(_elem, value, subtract) {
        var matches2 = rcssNum.exec(value);
        return matches2 ? Math.max(0, matches2[2] - (subtract || 0)) + (matches2[3] || "px") : value;
      }
      function boxModelAdjustment(elem, dimension, box, isBorderBox, styles, computedVal) {
        var i = dimension === "width" ? 1 : 0, extra = 0, delta = 0, marginDelta = 0;
        if (box === (isBorderBox ? "border" : "content")) {
          return 0;
        }
        for (; i < 4; i += 2) {
          if (box === "margin") {
            marginDelta += jQuery4.css(elem, box + cssExpand[i], true, styles);
          }
          if (!isBorderBox) {
            delta += jQuery4.css(elem, "padding" + cssExpand[i], true, styles);
            if (box !== "padding") {
              delta += jQuery4.css(elem, "border" + cssExpand[i] + "Width", true, styles);
            } else {
              extra += jQuery4.css(elem, "border" + cssExpand[i] + "Width", true, styles);
            }
          } else {
            if (box === "content") {
              delta -= jQuery4.css(elem, "padding" + cssExpand[i], true, styles);
            }
            if (box !== "margin") {
              delta -= jQuery4.css(elem, "border" + cssExpand[i] + "Width", true, styles);
            }
          }
        }
        if (!isBorderBox && computedVal >= 0) {
          delta += Math.max(0, Math.ceil(
            elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - computedVal - delta - extra - 0.5
          )) || 0;
        }
        return delta + marginDelta;
      }
      function getWidthOrHeight(elem, dimension, extra) {
        var styles = getStyles(elem), boxSizingNeeded = !support.boxSizingReliable() || extra, isBorderBox = boxSizingNeeded && jQuery4.css(elem, "boxSizing", false, styles) === "border-box", valueIsBorderBox = isBorderBox, val = curCSS(elem, dimension, styles), offsetProp = "offset" + dimension[0].toUpperCase() + dimension.slice(1);
        if (rnumnonpx.test(val)) {
          if (!extra) {
            return val;
          }
          val = "auto";
        }
        if ((!support.boxSizingReliable() && isBorderBox || !support.reliableTrDimensions() && nodeName(elem, "tr") || val === "auto" || !parseFloat(val) && jQuery4.css(elem, "display", false, styles) === "inline") && elem.getClientRects().length) {
          isBorderBox = jQuery4.css(elem, "boxSizing", false, styles) === "border-box";
          valueIsBorderBox = offsetProp in elem;
          if (valueIsBorderBox) {
            val = elem[offsetProp];
          }
        }
        val = parseFloat(val) || 0;
        return val + boxModelAdjustment(
          elem,
          dimension,
          extra || (isBorderBox ? "border" : "content"),
          valueIsBorderBox,
          styles,
          val
        ) + "px";
      }
      jQuery4.extend({
        cssHooks: {
          opacity: {
            get: function(elem, computed) {
              if (computed) {
                var ret = curCSS(elem, "opacity");
                return ret === "" ? "1" : ret;
              }
            }
          }
        },
        cssNumber: {
          animationIterationCount: true,
          aspectRatio: true,
          borderImageSlice: true,
          columnCount: true,
          flexGrow: true,
          flexShrink: true,
          fontWeight: true,
          gridArea: true,
          gridColumn: true,
          gridColumnEnd: true,
          gridColumnStart: true,
          gridRow: true,
          gridRowEnd: true,
          gridRowStart: true,
          lineHeight: true,
          opacity: true,
          order: true,
          orphans: true,
          scale: true,
          widows: true,
          zIndex: true,
          zoom: true,
          fillOpacity: true,
          floodOpacity: true,
          stopOpacity: true,
          strokeMiterlimit: true,
          strokeOpacity: true
        },
        cssProps: {},
        style: function(elem, name, value, extra) {
          if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
            return;
          }
          var ret, type, hooks, origName = camelCase(name), isCustomProp = rcustomProp.test(name), style = elem.style;
          if (!isCustomProp) {
            name = finalPropName(origName);
          }
          hooks = jQuery4.cssHooks[name] || jQuery4.cssHooks[origName];
          if (value !== void 0) {
            type = typeof value;
            if (type === "string" && (ret = rcssNum.exec(value)) && ret[1]) {
              value = adjustCSS(elem, name, ret);
              type = "number";
            }
            if (value == null || value !== value) {
              return;
            }
            if (type === "number" && !isCustomProp) {
              value += ret && ret[3] || (jQuery4.cssNumber[origName] ? "" : "px");
            }
            if (!support.clearCloneStyle && value === "" && name.indexOf("background") === 0) {
              style[name] = "inherit";
            }
            if (!hooks || !("set" in hooks) || (value = hooks.set(elem, value, extra)) !== void 0) {
              if (isCustomProp) {
                style.setProperty(name, value);
              } else {
                style[name] = value;
              }
            }
          } else {
            if (hooks && "get" in hooks && (ret = hooks.get(elem, false, extra)) !== void 0) {
              return ret;
            }
            return style[name];
          }
        },
        css: function(elem, name, extra, styles) {
          var val, num, hooks, origName = camelCase(name), isCustomProp = rcustomProp.test(name);
          if (!isCustomProp) {
            name = finalPropName(origName);
          }
          hooks = jQuery4.cssHooks[name] || jQuery4.cssHooks[origName];
          if (hooks && "get" in hooks) {
            val = hooks.get(elem, true, extra);
          }
          if (val === void 0) {
            val = curCSS(elem, name, styles);
          }
          if (val === "normal" && name in cssNormalTransform) {
            val = cssNormalTransform[name];
          }
          if (extra === "" || extra) {
            num = parseFloat(val);
            return extra === true || isFinite(num) ? num || 0 : val;
          }
          return val;
        }
      });
      jQuery4.each(["height", "width"], function(_i, dimension) {
        jQuery4.cssHooks[dimension] = {
          get: function(elem, computed, extra) {
            if (computed) {
              return rdisplayswap.test(jQuery4.css(elem, "display")) && (!elem.getClientRects().length || !elem.getBoundingClientRect().width) ? swap(elem, cssShow, function() {
                return getWidthOrHeight(elem, dimension, extra);
              }) : getWidthOrHeight(elem, dimension, extra);
            }
          },
          set: function(elem, value, extra) {
            var matches2, styles = getStyles(elem), scrollboxSizeBuggy = !support.scrollboxSize() && styles.position === "absolute", boxSizingNeeded = scrollboxSizeBuggy || extra, isBorderBox = boxSizingNeeded && jQuery4.css(elem, "boxSizing", false, styles) === "border-box", subtract = extra ? boxModelAdjustment(
              elem,
              dimension,
              extra,
              isBorderBox,
              styles
            ) : 0;
            if (isBorderBox && scrollboxSizeBuggy) {
              subtract -= Math.ceil(
                elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - parseFloat(styles[dimension]) - boxModelAdjustment(elem, dimension, "border", false, styles) - 0.5
              );
            }
            if (subtract && (matches2 = rcssNum.exec(value)) && (matches2[3] || "px") !== "px") {
              elem.style[dimension] = value;
              value = jQuery4.css(elem, dimension);
            }
            return setPositiveNumber(elem, value, subtract);
          }
        };
      });
      jQuery4.cssHooks.marginLeft = addGetHookIf(
        support.reliableMarginLeft,
        function(elem, computed) {
          if (computed) {
            return (parseFloat(curCSS(elem, "marginLeft")) || elem.getBoundingClientRect().left - swap(elem, { marginLeft: 0 }, function() {
              return elem.getBoundingClientRect().left;
            })) + "px";
          }
        }
      );
      jQuery4.each({
        margin: "",
        padding: "",
        border: "Width"
      }, function(prefix, suffix) {
        jQuery4.cssHooks[prefix + suffix] = {
          expand: function(value) {
            var i = 0, expanded = {}, parts = typeof value === "string" ? value.split(" ") : [value];
            for (; i < 4; i++) {
              expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0];
            }
            return expanded;
          }
        };
        if (prefix !== "margin") {
          jQuery4.cssHooks[prefix + suffix].set = setPositiveNumber;
        }
      });
      jQuery4.fn.extend({
        css: function(name, value) {
          return access(this, function(elem, name2, value2) {
            var styles, len, map = {}, i = 0;
            if (Array.isArray(name2)) {
              styles = getStyles(elem);
              len = name2.length;
              for (; i < len; i++) {
                map[name2[i]] = jQuery4.css(elem, name2[i], false, styles);
              }
              return map;
            }
            return value2 !== void 0 ? jQuery4.style(elem, name2, value2) : jQuery4.css(elem, name2);
          }, name, value, arguments.length > 1);
        }
      });
      function Tween(elem, options, prop, end, easing) {
        return new Tween.prototype.init(elem, options, prop, end, easing);
      }
      jQuery4.Tween = Tween;
      Tween.prototype = {
        constructor: Tween,
        init: function(elem, options, prop, end, easing, unit) {
          this.elem = elem;
          this.prop = prop;
          this.easing = easing || jQuery4.easing._default;
          this.options = options;
          this.start = this.now = this.cur();
          this.end = end;
          this.unit = unit || (jQuery4.cssNumber[prop] ? "" : "px");
        },
        cur: function() {
          var hooks = Tween.propHooks[this.prop];
          return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
        },
        run: function(percent) {
          var eased, hooks = Tween.propHooks[this.prop];
          if (this.options.duration) {
            this.pos = eased = jQuery4.easing[this.easing](
              percent,
              this.options.duration * percent,
              0,
              1,
              this.options.duration
            );
          } else {
            this.pos = eased = percent;
          }
          this.now = (this.end - this.start) * eased + this.start;
          if (this.options.step) {
            this.options.step.call(this.elem, this.now, this);
          }
          if (hooks && hooks.set) {
            hooks.set(this);
          } else {
            Tween.propHooks._default.set(this);
          }
          return this;
        }
      };
      Tween.prototype.init.prototype = Tween.prototype;
      Tween.propHooks = {
        _default: {
          get: function(tween) {
            var result;
            if (tween.elem.nodeType !== 1 || tween.elem[tween.prop] != null && tween.elem.style[tween.prop] == null) {
              return tween.elem[tween.prop];
            }
            result = jQuery4.css(tween.elem, tween.prop, "");
            return !result || result === "auto" ? 0 : result;
          },
          set: function(tween) {
            if (jQuery4.fx.step[tween.prop]) {
              jQuery4.fx.step[tween.prop](tween);
            } else if (tween.elem.nodeType === 1 && (jQuery4.cssHooks[tween.prop] || tween.elem.style[finalPropName(tween.prop)] != null)) {
              jQuery4.style(tween.elem, tween.prop, tween.now + tween.unit);
            } else {
              tween.elem[tween.prop] = tween.now;
            }
          }
        }
      };
      Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
        set: function(tween) {
          if (tween.elem.nodeType && tween.elem.parentNode) {
            tween.elem[tween.prop] = tween.now;
          }
        }
      };
      jQuery4.easing = {
        linear: function(p) {
          return p;
        },
        swing: function(p) {
          return 0.5 - Math.cos(p * Math.PI) / 2;
        },
        _default: "swing"
      };
      jQuery4.fx = Tween.prototype.init;
      jQuery4.fx.step = {};
      var fxNow, inProgress, rfxtypes = /^(?:toggle|show|hide)$/, rrun = /queueHooks$/;
      function schedule() {
        if (inProgress) {
          if (document2.hidden === false && window2.requestAnimationFrame) {
            window2.requestAnimationFrame(schedule);
          } else {
            window2.setTimeout(schedule, jQuery4.fx.interval);
          }
          jQuery4.fx.tick();
        }
      }
      function createFxNow() {
        window2.setTimeout(function() {
          fxNow = void 0;
        });
        return fxNow = Date.now();
      }
      function genFx(type, includeWidth) {
        var which, i = 0, attrs = { height: type };
        includeWidth = includeWidth ? 1 : 0;
        for (; i < 4; i += 2 - includeWidth) {
          which = cssExpand[i];
          attrs["margin" + which] = attrs["padding" + which] = type;
        }
        if (includeWidth) {
          attrs.opacity = attrs.width = type;
        }
        return attrs;
      }
      function createTween(value, prop, animation) {
        var tween, collection = (Animation.tweeners[prop] || []).concat(Animation.tweeners["*"]), index = 0, length = collection.length;
        for (; index < length; index++) {
          if (tween = collection[index].call(animation, prop, value)) {
            return tween;
          }
        }
      }
      function defaultPrefilter(elem, props, opts) {
        var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display, isBox = "width" in props || "height" in props, anim = this, orig = {}, style = elem.style, hidden = elem.nodeType && isHiddenWithinTree(elem), dataShow = dataPriv.get(elem, "fxshow");
        if (!opts.queue) {
          hooks = jQuery4._queueHooks(elem, "fx");
          if (hooks.unqueued == null) {
            hooks.unqueued = 0;
            oldfire = hooks.empty.fire;
            hooks.empty.fire = function() {
              if (!hooks.unqueued) {
                oldfire();
              }
            };
          }
          hooks.unqueued++;
          anim.always(function() {
            anim.always(function() {
              hooks.unqueued--;
              if (!jQuery4.queue(elem, "fx").length) {
                hooks.empty.fire();
              }
            });
          });
        }
        for (prop in props) {
          value = props[prop];
          if (rfxtypes.test(value)) {
            delete props[prop];
            toggle = toggle || value === "toggle";
            if (value === (hidden ? "hide" : "show")) {
              if (value === "show" && dataShow && dataShow[prop] !== void 0) {
                hidden = true;
              } else {
                continue;
              }
            }
            orig[prop] = dataShow && dataShow[prop] || jQuery4.style(elem, prop);
          }
        }
        propTween = !jQuery4.isEmptyObject(props);
        if (!propTween && jQuery4.isEmptyObject(orig)) {
          return;
        }
        if (isBox && elem.nodeType === 1) {
          opts.overflow = [style.overflow, style.overflowX, style.overflowY];
          restoreDisplay = dataShow && dataShow.display;
          if (restoreDisplay == null) {
            restoreDisplay = dataPriv.get(elem, "display");
          }
          display = jQuery4.css(elem, "display");
          if (display === "none") {
            if (restoreDisplay) {
              display = restoreDisplay;
            } else {
              showHide([elem], true);
              restoreDisplay = elem.style.display || restoreDisplay;
              display = jQuery4.css(elem, "display");
              showHide([elem]);
            }
          }
          if (display === "inline" || display === "inline-block" && restoreDisplay != null) {
            if (jQuery4.css(elem, "float") === "none") {
              if (!propTween) {
                anim.done(function() {
                  style.display = restoreDisplay;
                });
                if (restoreDisplay == null) {
                  display = style.display;
                  restoreDisplay = display === "none" ? "" : display;
                }
              }
              style.display = "inline-block";
            }
          }
        }
        if (opts.overflow) {
          style.overflow = "hidden";
          anim.always(function() {
            style.overflow = opts.overflow[0];
            style.overflowX = opts.overflow[1];
            style.overflowY = opts.overflow[2];
          });
        }
        propTween = false;
        for (prop in orig) {
          if (!propTween) {
            if (dataShow) {
              if ("hidden" in dataShow) {
                hidden = dataShow.hidden;
              }
            } else {
              dataShow = dataPriv.access(elem, "fxshow", { display: restoreDisplay });
            }
            if (toggle) {
              dataShow.hidden = !hidden;
            }
            if (hidden) {
              showHide([elem], true);
            }
            anim.done(function() {
              if (!hidden) {
                showHide([elem]);
              }
              dataPriv.remove(elem, "fxshow");
              for (prop in orig) {
                jQuery4.style(elem, prop, orig[prop]);
              }
            });
          }
          propTween = createTween(hidden ? dataShow[prop] : 0, prop, anim);
          if (!(prop in dataShow)) {
            dataShow[prop] = propTween.start;
            if (hidden) {
              propTween.end = propTween.start;
              propTween.start = 0;
            }
          }
        }
      }
      function propFilter(props, specialEasing) {
        var index, name, easing, value, hooks;
        for (index in props) {
          name = camelCase(index);
          easing = specialEasing[name];
          value = props[index];
          if (Array.isArray(value)) {
            easing = value[1];
            value = props[index] = value[0];
          }
          if (index !== name) {
            props[name] = value;
            delete props[index];
          }
          hooks = jQuery4.cssHooks[name];
          if (hooks && "expand" in hooks) {
            value = hooks.expand(value);
            delete props[name];
            for (index in value) {
              if (!(index in props)) {
                props[index] = value[index];
                specialEasing[index] = easing;
              }
            }
          } else {
            specialEasing[name] = easing;
          }
        }
      }
      function Animation(elem, properties, options) {
        var result, stopped, index = 0, length = Animation.prefilters.length, deferred = jQuery4.Deferred().always(function() {
          delete tick.elem;
        }), tick = function() {
          if (stopped) {
            return false;
          }
          var currentTime = fxNow || createFxNow(), remaining = Math.max(0, animation.startTime + animation.duration - currentTime), temp = remaining / animation.duration || 0, percent = 1 - temp, index2 = 0, length2 = animation.tweens.length;
          for (; index2 < length2; index2++) {
            animation.tweens[index2].run(percent);
          }
          deferred.notifyWith(elem, [animation, percent, remaining]);
          if (percent < 1 && length2) {
            return remaining;
          }
          if (!length2) {
            deferred.notifyWith(elem, [animation, 1, 0]);
          }
          deferred.resolveWith(elem, [animation]);
          return false;
        }, animation = deferred.promise({
          elem,
          props: jQuery4.extend({}, properties),
          opts: jQuery4.extend(true, {
            specialEasing: {},
            easing: jQuery4.easing._default
          }, options),
          originalProperties: properties,
          originalOptions: options,
          startTime: fxNow || createFxNow(),
          duration: options.duration,
          tweens: [],
          createTween: function(prop, end) {
            var tween = jQuery4.Tween(
              elem,
              animation.opts,
              prop,
              end,
              animation.opts.specialEasing[prop] || animation.opts.easing
            );
            animation.tweens.push(tween);
            return tween;
          },
          stop: function(gotoEnd) {
            var index2 = 0, length2 = gotoEnd ? animation.tweens.length : 0;
            if (stopped) {
              return this;
            }
            stopped = true;
            for (; index2 < length2; index2++) {
              animation.tweens[index2].run(1);
            }
            if (gotoEnd) {
              deferred.notifyWith(elem, [animation, 1, 0]);
              deferred.resolveWith(elem, [animation, gotoEnd]);
            } else {
              deferred.rejectWith(elem, [animation, gotoEnd]);
            }
            return this;
          }
        }), props = animation.props;
        propFilter(props, animation.opts.specialEasing);
        for (; index < length; index++) {
          result = Animation.prefilters[index].call(animation, elem, props, animation.opts);
          if (result) {
            if (isFunction(result.stop)) {
              jQuery4._queueHooks(animation.elem, animation.opts.queue).stop = result.stop.bind(result);
            }
            return result;
          }
        }
        jQuery4.map(props, createTween, animation);
        if (isFunction(animation.opts.start)) {
          animation.opts.start.call(elem, animation);
        }
        animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);
        jQuery4.fx.timer(
          jQuery4.extend(tick, {
            elem,
            anim: animation,
            queue: animation.opts.queue
          })
        );
        return animation;
      }
      jQuery4.Animation = jQuery4.extend(Animation, {
        tweeners: {
          "*": [function(prop, value) {
            var tween = this.createTween(prop, value);
            adjustCSS(tween.elem, prop, rcssNum.exec(value), tween);
            return tween;
          }]
        },
        tweener: function(props, callback) {
          if (isFunction(props)) {
            callback = props;
            props = ["*"];
          } else {
            props = props.match(rnothtmlwhite);
          }
          var prop, index = 0, length = props.length;
          for (; index < length; index++) {
            prop = props[index];
            Animation.tweeners[prop] = Animation.tweeners[prop] || [];
            Animation.tweeners[prop].unshift(callback);
          }
        },
        prefilters: [defaultPrefilter],
        prefilter: function(callback, prepend) {
          if (prepend) {
            Animation.prefilters.unshift(callback);
          } else {
            Animation.prefilters.push(callback);
          }
        }
      });
      jQuery4.speed = function(speed, easing, fn) {
        var opt = speed && typeof speed === "object" ? jQuery4.extend({}, speed) : {
          complete: fn || !fn && easing || isFunction(speed) && speed,
          duration: speed,
          easing: fn && easing || easing && !isFunction(easing) && easing
        };
        if (jQuery4.fx.off) {
          opt.duration = 0;
        } else {
          if (typeof opt.duration !== "number") {
            if (opt.duration in jQuery4.fx.speeds) {
              opt.duration = jQuery4.fx.speeds[opt.duration];
            } else {
              opt.duration = jQuery4.fx.speeds._default;
            }
          }
        }
        if (opt.queue == null || opt.queue === true) {
          opt.queue = "fx";
        }
        opt.old = opt.complete;
        opt.complete = function() {
          if (isFunction(opt.old)) {
            opt.old.call(this);
          }
          if (opt.queue) {
            jQuery4.dequeue(this, opt.queue);
          }
        };
        return opt;
      };
      jQuery4.fn.extend({
        fadeTo: function(speed, to, easing, callback) {
          return this.filter(isHiddenWithinTree).css("opacity", 0).show().end().animate({ opacity: to }, speed, easing, callback);
        },
        animate: function(prop, speed, easing, callback) {
          var empty = jQuery4.isEmptyObject(prop), optall = jQuery4.speed(speed, easing, callback), doAnimation = function() {
            var anim = Animation(this, jQuery4.extend({}, prop), optall);
            if (empty || dataPriv.get(this, "finish")) {
              anim.stop(true);
            }
          };
          doAnimation.finish = doAnimation;
          return empty || optall.queue === false ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
        },
        stop: function(type, clearQueue, gotoEnd) {
          var stopQueue = function(hooks) {
            var stop = hooks.stop;
            delete hooks.stop;
            stop(gotoEnd);
          };
          if (typeof type !== "string") {
            gotoEnd = clearQueue;
            clearQueue = type;
            type = void 0;
          }
          if (clearQueue) {
            this.queue(type || "fx", []);
          }
          return this.each(function() {
            var dequeue = true, index = type != null && type + "queueHooks", timers = jQuery4.timers, data = dataPriv.get(this);
            if (index) {
              if (data[index] && data[index].stop) {
                stopQueue(data[index]);
              }
            } else {
              for (index in data) {
                if (data[index] && data[index].stop && rrun.test(index)) {
                  stopQueue(data[index]);
                }
              }
            }
            for (index = timers.length; index--; ) {
              if (timers[index].elem === this && (type == null || timers[index].queue === type)) {
                timers[index].anim.stop(gotoEnd);
                dequeue = false;
                timers.splice(index, 1);
              }
            }
            if (dequeue || !gotoEnd) {
              jQuery4.dequeue(this, type);
            }
          });
        },
        finish: function(type) {
          if (type !== false) {
            type = type || "fx";
          }
          return this.each(function() {
            var index, data = dataPriv.get(this), queue = data[type + "queue"], hooks = data[type + "queueHooks"], timers = jQuery4.timers, length = queue ? queue.length : 0;
            data.finish = true;
            jQuery4.queue(this, type, []);
            if (hooks && hooks.stop) {
              hooks.stop.call(this, true);
            }
            for (index = timers.length; index--; ) {
              if (timers[index].elem === this && timers[index].queue === type) {
                timers[index].anim.stop(true);
                timers.splice(index, 1);
              }
            }
            for (index = 0; index < length; index++) {
              if (queue[index] && queue[index].finish) {
                queue[index].finish.call(this);
              }
            }
            delete data.finish;
          });
        }
      });
      jQuery4.each(["toggle", "show", "hide"], function(_i, name) {
        var cssFn = jQuery4.fn[name];
        jQuery4.fn[name] = function(speed, easing, callback) {
          return speed == null || typeof speed === "boolean" ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), speed, easing, callback);
        };
      });
      jQuery4.each({
        slideDown: genFx("show"),
        slideUp: genFx("hide"),
        slideToggle: genFx("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" }
      }, function(name, props) {
        jQuery4.fn[name] = function(speed, easing, callback) {
          return this.animate(props, speed, easing, callback);
        };
      });
      jQuery4.timers = [];
      jQuery4.fx.tick = function() {
        var timer, i = 0, timers = jQuery4.timers;
        fxNow = Date.now();
        for (; i < timers.length; i++) {
          timer = timers[i];
          if (!timer() && timers[i] === timer) {
            timers.splice(i--, 1);
          }
        }
        if (!timers.length) {
          jQuery4.fx.stop();
        }
        fxNow = void 0;
      };
      jQuery4.fx.timer = function(timer) {
        jQuery4.timers.push(timer);
        jQuery4.fx.start();
      };
      jQuery4.fx.interval = 13;
      jQuery4.fx.start = function() {
        if (inProgress) {
          return;
        }
        inProgress = true;
        schedule();
      };
      jQuery4.fx.stop = function() {
        inProgress = null;
      };
      jQuery4.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
      };
      jQuery4.fn.delay = function(time, type) {
        time = jQuery4.fx ? jQuery4.fx.speeds[time] || time : time;
        type = type || "fx";
        return this.queue(type, function(next, hooks) {
          var timeout = window2.setTimeout(next, time);
          hooks.stop = function() {
            window2.clearTimeout(timeout);
          };
        });
      };
      (function() {
        var input = document2.createElement("input"), select = document2.createElement("select"), opt = select.appendChild(document2.createElement("option"));
        input.type = "checkbox";
        support.checkOn = input.value !== "";
        support.optSelected = opt.selected;
        input = document2.createElement("input");
        input.value = "t";
        input.type = "radio";
        support.radioValue = input.value === "t";
      })();
      var boolHook, attrHandle = jQuery4.expr.attrHandle;
      jQuery4.fn.extend({
        attr: function(name, value) {
          return access(this, jQuery4.attr, name, value, arguments.length > 1);
        },
        removeAttr: function(name) {
          return this.each(function() {
            jQuery4.removeAttr(this, name);
          });
        }
      });
      jQuery4.extend({
        attr: function(elem, name, value) {
          var ret, hooks, nType = elem.nodeType;
          if (nType === 3 || nType === 8 || nType === 2) {
            return;
          }
          if (typeof elem.getAttribute === "undefined") {
            return jQuery4.prop(elem, name, value);
          }
          if (nType !== 1 || !jQuery4.isXMLDoc(elem)) {
            hooks = jQuery4.attrHooks[name.toLowerCase()] || (jQuery4.expr.match.bool.test(name) ? boolHook : void 0);
          }
          if (value !== void 0) {
            if (value === null) {
              jQuery4.removeAttr(elem, name);
              return;
            }
            if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== void 0) {
              return ret;
            }
            elem.setAttribute(name, value + "");
            return value;
          }
          if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
            return ret;
          }
          ret = jQuery4.find.attr(elem, name);
          return ret == null ? void 0 : ret;
        },
        attrHooks: {
          type: {
            set: function(elem, value) {
              if (!support.radioValue && value === "radio" && nodeName(elem, "input")) {
                var val = elem.value;
                elem.setAttribute("type", value);
                if (val) {
                  elem.value = val;
                }
                return value;
              }
            }
          }
        },
        removeAttr: function(elem, value) {
          var name, i = 0, attrNames = value && value.match(rnothtmlwhite);
          if (attrNames && elem.nodeType === 1) {
            while (name = attrNames[i++]) {
              elem.removeAttribute(name);
            }
          }
        }
      });
      boolHook = {
        set: function(elem, value, name) {
          if (value === false) {
            jQuery4.removeAttr(elem, name);
          } else {
            elem.setAttribute(name, name);
          }
          return name;
        }
      };
      jQuery4.each(jQuery4.expr.match.bool.source.match(/\w+/g), function(_i, name) {
        var getter = attrHandle[name] || jQuery4.find.attr;
        attrHandle[name] = function(elem, name2, isXML) {
          var ret, handle, lowercaseName = name2.toLowerCase();
          if (!isXML) {
            handle = attrHandle[lowercaseName];
            attrHandle[lowercaseName] = ret;
            ret = getter(elem, name2, isXML) != null ? lowercaseName : null;
            attrHandle[lowercaseName] = handle;
          }
          return ret;
        };
      });
      var rfocusable = /^(?:input|select|textarea|button)$/i, rclickable = /^(?:a|area)$/i;
      jQuery4.fn.extend({
        prop: function(name, value) {
          return access(this, jQuery4.prop, name, value, arguments.length > 1);
        },
        removeProp: function(name) {
          return this.each(function() {
            delete this[jQuery4.propFix[name] || name];
          });
        }
      });
      jQuery4.extend({
        prop: function(elem, name, value) {
          var ret, hooks, nType = elem.nodeType;
          if (nType === 3 || nType === 8 || nType === 2) {
            return;
          }
          if (nType !== 1 || !jQuery4.isXMLDoc(elem)) {
            name = jQuery4.propFix[name] || name;
            hooks = jQuery4.propHooks[name];
          }
          if (value !== void 0) {
            if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== void 0) {
              return ret;
            }
            return elem[name] = value;
          }
          if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
            return ret;
          }
          return elem[name];
        },
        propHooks: {
          tabIndex: {
            get: function(elem) {
              var tabindex = jQuery4.find.attr(elem, "tabindex");
              if (tabindex) {
                return parseInt(tabindex, 10);
              }
              if (rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href) {
                return 0;
              }
              return -1;
            }
          }
        },
        propFix: {
          "for": "htmlFor",
          "class": "className"
        }
      });
      if (!support.optSelected) {
        jQuery4.propHooks.selected = {
          get: function(elem) {
            var parent = elem.parentNode;
            if (parent && parent.parentNode) {
              parent.parentNode.selectedIndex;
            }
            return null;
          },
          set: function(elem) {
            var parent = elem.parentNode;
            if (parent) {
              parent.selectedIndex;
              if (parent.parentNode) {
                parent.parentNode.selectedIndex;
              }
            }
          }
        };
      }
      jQuery4.each([
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable"
      ], function() {
        jQuery4.propFix[this.toLowerCase()] = this;
      });
      function stripAndCollapse(value) {
        var tokens = value.match(rnothtmlwhite) || [];
        return tokens.join(" ");
      }
      function getClass(elem) {
        return elem.getAttribute && elem.getAttribute("class") || "";
      }
      function classesToArray(value) {
        if (Array.isArray(value)) {
          return value;
        }
        if (typeof value === "string") {
          return value.match(rnothtmlwhite) || [];
        }
        return [];
      }
      jQuery4.fn.extend({
        addClass: function(value) {
          var classNames, cur, curValue, className, i, finalValue;
          if (isFunction(value)) {
            return this.each(function(j) {
              jQuery4(this).addClass(value.call(this, j, getClass(this)));
            });
          }
          classNames = classesToArray(value);
          if (classNames.length) {
            return this.each(function() {
              curValue = getClass(this);
              cur = this.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";
              if (cur) {
                for (i = 0; i < classNames.length; i++) {
                  className = classNames[i];
                  if (cur.indexOf(" " + className + " ") < 0) {
                    cur += className + " ";
                  }
                }
                finalValue = stripAndCollapse(cur);
                if (curValue !== finalValue) {
                  this.setAttribute("class", finalValue);
                }
              }
            });
          }
          return this;
        },
        removeClass: function(value) {
          var classNames, cur, curValue, className, i, finalValue;
          if (isFunction(value)) {
            return this.each(function(j) {
              jQuery4(this).removeClass(value.call(this, j, getClass(this)));
            });
          }
          if (!arguments.length) {
            return this.attr("class", "");
          }
          classNames = classesToArray(value);
          if (classNames.length) {
            return this.each(function() {
              curValue = getClass(this);
              cur = this.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";
              if (cur) {
                for (i = 0; i < classNames.length; i++) {
                  className = classNames[i];
                  while (cur.indexOf(" " + className + " ") > -1) {
                    cur = cur.replace(" " + className + " ", " ");
                  }
                }
                finalValue = stripAndCollapse(cur);
                if (curValue !== finalValue) {
                  this.setAttribute("class", finalValue);
                }
              }
            });
          }
          return this;
        },
        toggleClass: function(value, stateVal) {
          var classNames, className, i, self2, type = typeof value, isValidValue = type === "string" || Array.isArray(value);
          if (isFunction(value)) {
            return this.each(function(i2) {
              jQuery4(this).toggleClass(
                value.call(this, i2, getClass(this), stateVal),
                stateVal
              );
            });
          }
          if (typeof stateVal === "boolean" && isValidValue) {
            return stateVal ? this.addClass(value) : this.removeClass(value);
          }
          classNames = classesToArray(value);
          return this.each(function() {
            if (isValidValue) {
              self2 = jQuery4(this);
              for (i = 0; i < classNames.length; i++) {
                className = classNames[i];
                if (self2.hasClass(className)) {
                  self2.removeClass(className);
                } else {
                  self2.addClass(className);
                }
              }
            } else if (value === void 0 || type === "boolean") {
              className = getClass(this);
              if (className) {
                dataPriv.set(this, "__className__", className);
              }
              if (this.setAttribute) {
                this.setAttribute(
                  "class",
                  className || value === false ? "" : dataPriv.get(this, "__className__") || ""
                );
              }
            }
          });
        },
        hasClass: function(selector) {
          var className, elem, i = 0;
          className = " " + selector + " ";
          while (elem = this[i++]) {
            if (elem.nodeType === 1 && (" " + stripAndCollapse(getClass(elem)) + " ").indexOf(className) > -1) {
              return true;
            }
          }
          return false;
        }
      });
      var rreturn = /\r/g;
      jQuery4.fn.extend({
        val: function(value) {
          var hooks, ret, valueIsFunction, elem = this[0];
          if (!arguments.length) {
            if (elem) {
              hooks = jQuery4.valHooks[elem.type] || jQuery4.valHooks[elem.nodeName.toLowerCase()];
              if (hooks && "get" in hooks && (ret = hooks.get(elem, "value")) !== void 0) {
                return ret;
              }
              ret = elem.value;
              if (typeof ret === "string") {
                return ret.replace(rreturn, "");
              }
              return ret == null ? "" : ret;
            }
            return;
          }
          valueIsFunction = isFunction(value);
          return this.each(function(i) {
            var val;
            if (this.nodeType !== 1) {
              return;
            }
            if (valueIsFunction) {
              val = value.call(this, i, jQuery4(this).val());
            } else {
              val = value;
            }
            if (val == null) {
              val = "";
            } else if (typeof val === "number") {
              val += "";
            } else if (Array.isArray(val)) {
              val = jQuery4.map(val, function(value2) {
                return value2 == null ? "" : value2 + "";
              });
            }
            hooks = jQuery4.valHooks[this.type] || jQuery4.valHooks[this.nodeName.toLowerCase()];
            if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === void 0) {
              this.value = val;
            }
          });
        }
      });
      jQuery4.extend({
        valHooks: {
          option: {
            get: function(elem) {
              var val = jQuery4.find.attr(elem, "value");
              return val != null ? val : stripAndCollapse(jQuery4.text(elem));
            }
          },
          select: {
            get: function(elem) {
              var value, option, i, options = elem.options, index = elem.selectedIndex, one = elem.type === "select-one", values = one ? null : [], max = one ? index + 1 : options.length;
              if (index < 0) {
                i = max;
              } else {
                i = one ? index : 0;
              }
              for (; i < max; i++) {
                option = options[i];
                if ((option.selected || i === index) && !option.disabled && (!option.parentNode.disabled || !nodeName(option.parentNode, "optgroup"))) {
                  value = jQuery4(option).val();
                  if (one) {
                    return value;
                  }
                  values.push(value);
                }
              }
              return values;
            },
            set: function(elem, value) {
              var optionSet, option, options = elem.options, values = jQuery4.makeArray(value), i = options.length;
              while (i--) {
                option = options[i];
                if (option.selected = jQuery4.inArray(jQuery4.valHooks.option.get(option), values) > -1) {
                  optionSet = true;
                }
              }
              if (!optionSet) {
                elem.selectedIndex = -1;
              }
              return values;
            }
          }
        }
      });
      jQuery4.each(["radio", "checkbox"], function() {
        jQuery4.valHooks[this] = {
          set: function(elem, value) {
            if (Array.isArray(value)) {
              return elem.checked = jQuery4.inArray(jQuery4(elem).val(), value) > -1;
            }
          }
        };
        if (!support.checkOn) {
          jQuery4.valHooks[this].get = function(elem) {
            return elem.getAttribute("value") === null ? "on" : elem.value;
          };
        }
      });
      var location2 = window2.location;
      var nonce2 = { guid: Date.now() };
      var rquery = /\?/;
      jQuery4.parseXML = function(data) {
        var xml, parserErrorElem;
        if (!data || typeof data !== "string") {
          return null;
        }
        try {
          xml = new window2.DOMParser().parseFromString(data, "text/xml");
        } catch (e) {
        }
        parserErrorElem = xml && xml.getElementsByTagName("parsererror")[0];
        if (!xml || parserErrorElem) {
          jQuery4.error("Invalid XML: " + (parserErrorElem ? jQuery4.map(parserErrorElem.childNodes, function(el) {
            return el.textContent;
          }).join("\n") : data));
        }
        return xml;
      };
      var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/, stopPropagationCallback = function(e) {
        e.stopPropagation();
      };
      jQuery4.extend(jQuery4.event, {
        trigger: function(event, data, elem, onlyHandlers) {
          var i, cur, tmp, bubbleType, ontype, handle, special, lastElement, eventPath = [elem || document2], type = hasOwn.call(event, "type") ? event.type : event, namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];
          cur = lastElement = tmp = elem = elem || document2;
          if (elem.nodeType === 3 || elem.nodeType === 8) {
            return;
          }
          if (rfocusMorph.test(type + jQuery4.event.triggered)) {
            return;
          }
          if (type.indexOf(".") > -1) {
            namespaces = type.split(".");
            type = namespaces.shift();
            namespaces.sort();
          }
          ontype = type.indexOf(":") < 0 && "on" + type;
          event = event[jQuery4.expando] ? event : new jQuery4.Event(type, typeof event === "object" && event);
          event.isTrigger = onlyHandlers ? 2 : 3;
          event.namespace = namespaces.join(".");
          event.rnamespace = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
          event.result = void 0;
          if (!event.target) {
            event.target = elem;
          }
          data = data == null ? [event] : jQuery4.makeArray(data, [event]);
          special = jQuery4.event.special[type] || {};
          if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) {
            return;
          }
          if (!onlyHandlers && !special.noBubble && !isWindow(elem)) {
            bubbleType = special.delegateType || type;
            if (!rfocusMorph.test(bubbleType + type)) {
              cur = cur.parentNode;
            }
            for (; cur; cur = cur.parentNode) {
              eventPath.push(cur);
              tmp = cur;
            }
            if (tmp === (elem.ownerDocument || document2)) {
              eventPath.push(tmp.defaultView || tmp.parentWindow || window2);
            }
          }
          i = 0;
          while ((cur = eventPath[i++]) && !event.isPropagationStopped()) {
            lastElement = cur;
            event.type = i > 1 ? bubbleType : special.bindType || type;
            handle = (dataPriv.get(cur, "events") || /* @__PURE__ */ Object.create(null))[event.type] && dataPriv.get(cur, "handle");
            if (handle) {
              handle.apply(cur, data);
            }
            handle = ontype && cur[ontype];
            if (handle && handle.apply && acceptData(cur)) {
              event.result = handle.apply(cur, data);
              if (event.result === false) {
                event.preventDefault();
              }
            }
          }
          event.type = type;
          if (!onlyHandlers && !event.isDefaultPrevented()) {
            if ((!special._default || special._default.apply(eventPath.pop(), data) === false) && acceptData(elem)) {
              if (ontype && isFunction(elem[type]) && !isWindow(elem)) {
                tmp = elem[ontype];
                if (tmp) {
                  elem[ontype] = null;
                }
                jQuery4.event.triggered = type;
                if (event.isPropagationStopped()) {
                  lastElement.addEventListener(type, stopPropagationCallback);
                }
                elem[type]();
                if (event.isPropagationStopped()) {
                  lastElement.removeEventListener(type, stopPropagationCallback);
                }
                jQuery4.event.triggered = void 0;
                if (tmp) {
                  elem[ontype] = tmp;
                }
              }
            }
          }
          return event.result;
        },
        simulate: function(type, elem, event) {
          var e = jQuery4.extend(
            new jQuery4.Event(),
            event,
            {
              type,
              isSimulated: true
            }
          );
          jQuery4.event.trigger(e, null, elem);
        }
      });
      jQuery4.fn.extend({
        trigger: function(type, data) {
          return this.each(function() {
            jQuery4.event.trigger(type, data, this);
          });
        },
        triggerHandler: function(type, data) {
          var elem = this[0];
          if (elem) {
            return jQuery4.event.trigger(type, data, elem, true);
          }
        }
      });
      var rbracket = /\[\]$/, rCRLF = /\r?\n/g, rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i, rsubmittable = /^(?:input|select|textarea|keygen)/i;
      function buildParams(prefix, obj, traditional, add) {
        var name;
        if (Array.isArray(obj)) {
          jQuery4.each(obj, function(i, v) {
            if (traditional || rbracket.test(prefix)) {
              add(prefix, v);
            } else {
              buildParams(
                prefix + "[" + (typeof v === "object" && v != null ? i : "") + "]",
                v,
                traditional,
                add
              );
            }
          });
        } else if (!traditional && toType(obj) === "object") {
          for (name in obj) {
            buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
          }
        } else {
          add(prefix, obj);
        }
      }
      jQuery4.param = function(a, traditional) {
        var prefix, s = [], add = function(key, valueOrFunction) {
          var value = isFunction(valueOrFunction) ? valueOrFunction() : valueOrFunction;
          s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value == null ? "" : value);
        };
        if (a == null) {
          return "";
        }
        if (Array.isArray(a) || a.jquery && !jQuery4.isPlainObject(a)) {
          jQuery4.each(a, function() {
            add(this.name, this.value);
          });
        } else {
          for (prefix in a) {
            buildParams(prefix, a[prefix], traditional, add);
          }
        }
        return s.join("&");
      };
      jQuery4.fn.extend({
        serialize: function() {
          return jQuery4.param(this.serializeArray());
        },
        serializeArray: function() {
          return this.map(function() {
            var elements = jQuery4.prop(this, "elements");
            return elements ? jQuery4.makeArray(elements) : this;
          }).filter(function() {
            var type = this.type;
            return this.name && !jQuery4(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));
          }).map(function(_i, elem) {
            var val = jQuery4(this).val();
            if (val == null) {
              return null;
            }
            if (Array.isArray(val)) {
              return jQuery4.map(val, function(val2) {
                return { name: elem.name, value: val2.replace(rCRLF, "\r\n") };
              });
            }
            return { name: elem.name, value: val.replace(rCRLF, "\r\n") };
          }).get();
        }
      });
      var r20 = /%20/g, rhash = /#.*$/, rantiCache = /([?&])_=[^&]*/, rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg, rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, rnoContent = /^(?:GET|HEAD)$/, rprotocol = /^\/\//, prefilters = {}, transports = {}, allTypes = "*/".concat("*"), originAnchor = document2.createElement("a");
      originAnchor.href = location2.href;
      function addToPrefiltersOrTransports(structure) {
        return function(dataTypeExpression, func) {
          if (typeof dataTypeExpression !== "string") {
            func = dataTypeExpression;
            dataTypeExpression = "*";
          }
          var dataType, i = 0, dataTypes = dataTypeExpression.toLowerCase().match(rnothtmlwhite) || [];
          if (isFunction(func)) {
            while (dataType = dataTypes[i++]) {
              if (dataType[0] === "+") {
                dataType = dataType.slice(1) || "*";
                (structure[dataType] = structure[dataType] || []).unshift(func);
              } else {
                (structure[dataType] = structure[dataType] || []).push(func);
              }
            }
          }
        };
      }
      function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
        var inspected = {}, seekingTransport = structure === transports;
        function inspect(dataType) {
          var selected;
          inspected[dataType] = true;
          jQuery4.each(structure[dataType] || [], function(_, prefilterOrFactory) {
            var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
            if (typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]) {
              options.dataTypes.unshift(dataTypeOrTransport);
              inspect(dataTypeOrTransport);
              return false;
            } else if (seekingTransport) {
              return !(selected = dataTypeOrTransport);
            }
          });
          return selected;
        }
        return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
      }
      function ajaxExtend(target, src) {
        var key, deep, flatOptions = jQuery4.ajaxSettings.flatOptions || {};
        for (key in src) {
          if (src[key] !== void 0) {
            (flatOptions[key] ? target : deep || (deep = {}))[key] = src[key];
          }
        }
        if (deep) {
          jQuery4.extend(true, target, deep);
        }
        return target;
      }
      function ajaxHandleResponses(s, jqXHR, responses) {
        var ct, type, finalDataType, firstDataType, contents = s.contents, dataTypes = s.dataTypes;
        while (dataTypes[0] === "*") {
          dataTypes.shift();
          if (ct === void 0) {
            ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
          }
        }
        if (ct) {
          for (type in contents) {
            if (contents[type] && contents[type].test(ct)) {
              dataTypes.unshift(type);
              break;
            }
          }
        }
        if (dataTypes[0] in responses) {
          finalDataType = dataTypes[0];
        } else {
          for (type in responses) {
            if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
              finalDataType = type;
              break;
            }
            if (!firstDataType) {
              firstDataType = type;
            }
          }
          finalDataType = finalDataType || firstDataType;
        }
        if (finalDataType) {
          if (finalDataType !== dataTypes[0]) {
            dataTypes.unshift(finalDataType);
          }
          return responses[finalDataType];
        }
      }
      function ajaxConvert(s, response, jqXHR, isSuccess) {
        var conv2, current, conv, tmp, prev, converters = {}, dataTypes = s.dataTypes.slice();
        if (dataTypes[1]) {
          for (conv in s.converters) {
            converters[conv.toLowerCase()] = s.converters[conv];
          }
        }
        current = dataTypes.shift();
        while (current) {
          if (s.responseFields[current]) {
            jqXHR[s.responseFields[current]] = response;
          }
          if (!prev && isSuccess && s.dataFilter) {
            response = s.dataFilter(response, s.dataType);
          }
          prev = current;
          current = dataTypes.shift();
          if (current) {
            if (current === "*") {
              current = prev;
            } else if (prev !== "*" && prev !== current) {
              conv = converters[prev + " " + current] || converters["* " + current];
              if (!conv) {
                for (conv2 in converters) {
                  tmp = conv2.split(" ");
                  if (tmp[1] === current) {
                    conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];
                    if (conv) {
                      if (conv === true) {
                        conv = converters[conv2];
                      } else if (converters[conv2] !== true) {
                        current = tmp[0];
                        dataTypes.unshift(tmp[1]);
                      }
                      break;
                    }
                  }
                }
              }
              if (conv !== true) {
                if (conv && s.throws) {
                  response = conv(response);
                } else {
                  try {
                    response = conv(response);
                  } catch (e) {
                    return {
                      state: "parsererror",
                      error: conv ? e : "No conversion from " + prev + " to " + current
                    };
                  }
                }
              }
            }
          }
        }
        return { state: "success", data: response };
      }
      jQuery4.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
          url: location2.href,
          type: "GET",
          isLocal: rlocalProtocol.test(location2.protocol),
          global: true,
          processData: true,
          async: true,
          contentType: "application/x-www-form-urlencoded; charset=UTF-8",
          accepts: {
            "*": allTypes,
            text: "text/plain",
            html: "text/html",
            xml: "application/xml, text/xml",
            json: "application/json, text/javascript"
          },
          contents: {
            xml: /\bxml\b/,
            html: /\bhtml/,
            json: /\bjson\b/
          },
          responseFields: {
            xml: "responseXML",
            text: "responseText",
            json: "responseJSON"
          },
          converters: {
            "* text": String,
            "text html": true,
            "text json": JSON.parse,
            "text xml": jQuery4.parseXML
          },
          flatOptions: {
            url: true,
            context: true
          }
        },
        ajaxSetup: function(target, settings) {
          return settings ? ajaxExtend(ajaxExtend(target, jQuery4.ajaxSettings), settings) : ajaxExtend(jQuery4.ajaxSettings, target);
        },
        ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
        ajaxTransport: addToPrefiltersOrTransports(transports),
        ajax: function(url, options) {
          if (typeof url === "object") {
            options = url;
            url = void 0;
          }
          options = options || {};
          var transport, cacheURL, responseHeadersString, responseHeaders, timeoutTimer, urlAnchor, completed2, fireGlobals, i, uncached, s = jQuery4.ajaxSetup({}, options), callbackContext = s.context || s, globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery4(callbackContext) : jQuery4.event, deferred = jQuery4.Deferred(), completeDeferred = jQuery4.Callbacks("once memory"), statusCode = s.statusCode || {}, requestHeaders = {}, requestHeadersNames = {}, strAbort = "canceled", jqXHR = {
            readyState: 0,
            getResponseHeader: function(key) {
              var match;
              if (completed2) {
                if (!responseHeaders) {
                  responseHeaders = {};
                  while (match = rheaders.exec(responseHeadersString)) {
                    responseHeaders[match[1].toLowerCase() + " "] = (responseHeaders[match[1].toLowerCase() + " "] || []).concat(match[2]);
                  }
                }
                match = responseHeaders[key.toLowerCase() + " "];
              }
              return match == null ? null : match.join(", ");
            },
            getAllResponseHeaders: function() {
              return completed2 ? responseHeadersString : null;
            },
            setRequestHeader: function(name, value) {
              if (completed2 == null) {
                name = requestHeadersNames[name.toLowerCase()] = requestHeadersNames[name.toLowerCase()] || name;
                requestHeaders[name] = value;
              }
              return this;
            },
            overrideMimeType: function(type) {
              if (completed2 == null) {
                s.mimeType = type;
              }
              return this;
            },
            statusCode: function(map) {
              var code;
              if (map) {
                if (completed2) {
                  jqXHR.always(map[jqXHR.status]);
                } else {
                  for (code in map) {
                    statusCode[code] = [statusCode[code], map[code]];
                  }
                }
              }
              return this;
            },
            abort: function(statusText) {
              var finalText = statusText || strAbort;
              if (transport) {
                transport.abort(finalText);
              }
              done(0, finalText);
              return this;
            }
          };
          deferred.promise(jqXHR);
          s.url = ((url || s.url || location2.href) + "").replace(rprotocol, location2.protocol + "//");
          s.type = options.method || options.type || s.method || s.type;
          s.dataTypes = (s.dataType || "*").toLowerCase().match(rnothtmlwhite) || [""];
          if (s.crossDomain == null) {
            urlAnchor = document2.createElement("a");
            try {
              urlAnchor.href = s.url;
              urlAnchor.href = urlAnchor.href;
              s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !== urlAnchor.protocol + "//" + urlAnchor.host;
            } catch (e) {
              s.crossDomain = true;
            }
          }
          if (s.data && s.processData && typeof s.data !== "string") {
            s.data = jQuery4.param(s.data, s.traditional);
          }
          inspectPrefiltersOrTransports(prefilters, s, options, jqXHR);
          if (completed2) {
            return jqXHR;
          }
          fireGlobals = jQuery4.event && s.global;
          if (fireGlobals && jQuery4.active++ === 0) {
            jQuery4.event.trigger("ajaxStart");
          }
          s.type = s.type.toUpperCase();
          s.hasContent = !rnoContent.test(s.type);
          cacheURL = s.url.replace(rhash, "");
          if (!s.hasContent) {
            uncached = s.url.slice(cacheURL.length);
            if (s.data && (s.processData || typeof s.data === "string")) {
              cacheURL += (rquery.test(cacheURL) ? "&" : "?") + s.data;
              delete s.data;
            }
            if (s.cache === false) {
              cacheURL = cacheURL.replace(rantiCache, "$1");
              uncached = (rquery.test(cacheURL) ? "&" : "?") + "_=" + nonce2.guid++ + uncached;
            }
            s.url = cacheURL + uncached;
          } else if (s.data && s.processData && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0) {
            s.data = s.data.replace(r20, "+");
          }
          if (s.ifModified) {
            if (jQuery4.lastModified[cacheURL]) {
              jqXHR.setRequestHeader("If-Modified-Since", jQuery4.lastModified[cacheURL]);
            }
            if (jQuery4.etag[cacheURL]) {
              jqXHR.setRequestHeader("If-None-Match", jQuery4.etag[cacheURL]);
            }
          }
          if (s.data && s.hasContent && s.contentType !== false || options.contentType) {
            jqXHR.setRequestHeader("Content-Type", s.contentType);
          }
          jqXHR.setRequestHeader(
            "Accept",
            s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]
          );
          for (i in s.headers) {
            jqXHR.setRequestHeader(i, s.headers[i]);
          }
          if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === false || completed2)) {
            return jqXHR.abort();
          }
          strAbort = "abort";
          completeDeferred.add(s.complete);
          jqXHR.done(s.success);
          jqXHR.fail(s.error);
          transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR);
          if (!transport) {
            done(-1, "No Transport");
          } else {
            jqXHR.readyState = 1;
            if (fireGlobals) {
              globalEventContext.trigger("ajaxSend", [jqXHR, s]);
            }
            if (completed2) {
              return jqXHR;
            }
            if (s.async && s.timeout > 0) {
              timeoutTimer = window2.setTimeout(function() {
                jqXHR.abort("timeout");
              }, s.timeout);
            }
            try {
              completed2 = false;
              transport.send(requestHeaders, done);
            } catch (e) {
              if (completed2) {
                throw e;
              }
              done(-1, e);
            }
          }
          function done(status, nativeStatusText, responses, headers) {
            var isSuccess, success, error, response, modified, statusText = nativeStatusText;
            if (completed2) {
              return;
            }
            completed2 = true;
            if (timeoutTimer) {
              window2.clearTimeout(timeoutTimer);
            }
            transport = void 0;
            responseHeadersString = headers || "";
            jqXHR.readyState = status > 0 ? 4 : 0;
            isSuccess = status >= 200 && status < 300 || status === 304;
            if (responses) {
              response = ajaxHandleResponses(s, jqXHR, responses);
            }
            if (!isSuccess && jQuery4.inArray("script", s.dataTypes) > -1 && jQuery4.inArray("json", s.dataTypes) < 0) {
              s.converters["text script"] = function() {
              };
            }
            response = ajaxConvert(s, response, jqXHR, isSuccess);
            if (isSuccess) {
              if (s.ifModified) {
                modified = jqXHR.getResponseHeader("Last-Modified");
                if (modified) {
                  jQuery4.lastModified[cacheURL] = modified;
                }
                modified = jqXHR.getResponseHeader("etag");
                if (modified) {
                  jQuery4.etag[cacheURL] = modified;
                }
              }
              if (status === 204 || s.type === "HEAD") {
                statusText = "nocontent";
              } else if (status === 304) {
                statusText = "notmodified";
              } else {
                statusText = response.state;
                success = response.data;
                error = response.error;
                isSuccess = !error;
              }
            } else {
              error = statusText;
              if (status || !statusText) {
                statusText = "error";
                if (status < 0) {
                  status = 0;
                }
              }
            }
            jqXHR.status = status;
            jqXHR.statusText = (nativeStatusText || statusText) + "";
            if (isSuccess) {
              deferred.resolveWith(callbackContext, [success, statusText, jqXHR]);
            } else {
              deferred.rejectWith(callbackContext, [jqXHR, statusText, error]);
            }
            jqXHR.statusCode(statusCode);
            statusCode = void 0;
            if (fireGlobals) {
              globalEventContext.trigger(
                isSuccess ? "ajaxSuccess" : "ajaxError",
                [jqXHR, s, isSuccess ? success : error]
              );
            }
            completeDeferred.fireWith(callbackContext, [jqXHR, statusText]);
            if (fireGlobals) {
              globalEventContext.trigger("ajaxComplete", [jqXHR, s]);
              if (!--jQuery4.active) {
                jQuery4.event.trigger("ajaxStop");
              }
            }
          }
          return jqXHR;
        },
        getJSON: function(url, data, callback) {
          return jQuery4.get(url, data, callback, "json");
        },
        getScript: function(url, callback) {
          return jQuery4.get(url, void 0, callback, "script");
        }
      });
      jQuery4.each(["get", "post"], function(_i, method) {
        jQuery4[method] = function(url, data, callback, type) {
          if (isFunction(data)) {
            type = type || callback;
            callback = data;
            data = void 0;
          }
          return jQuery4.ajax(jQuery4.extend({
            url,
            type: method,
            dataType: type,
            data,
            success: callback
          }, jQuery4.isPlainObject(url) && url));
        };
      });
      jQuery4.ajaxPrefilter(function(s) {
        var i;
        for (i in s.headers) {
          if (i.toLowerCase() === "content-type") {
            s.contentType = s.headers[i] || "";
          }
        }
      });
      jQuery4._evalUrl = function(url, options, doc) {
        return jQuery4.ajax({
          url,
          type: "GET",
          dataType: "script",
          cache: true,
          async: false,
          global: false,
          converters: {
            "text script": function() {
            }
          },
          dataFilter: function(response) {
            jQuery4.globalEval(response, options, doc);
          }
        });
      };
      jQuery4.fn.extend({
        wrapAll: function(html) {
          var wrap;
          if (this[0]) {
            if (isFunction(html)) {
              html = html.call(this[0]);
            }
            wrap = jQuery4(html, this[0].ownerDocument).eq(0).clone(true);
            if (this[0].parentNode) {
              wrap.insertBefore(this[0]);
            }
            wrap.map(function() {
              var elem = this;
              while (elem.firstElementChild) {
                elem = elem.firstElementChild;
              }
              return elem;
            }).append(this);
          }
          return this;
        },
        wrapInner: function(html) {
          if (isFunction(html)) {
            return this.each(function(i) {
              jQuery4(this).wrapInner(html.call(this, i));
            });
          }
          return this.each(function() {
            var self2 = jQuery4(this), contents = self2.contents();
            if (contents.length) {
              contents.wrapAll(html);
            } else {
              self2.append(html);
            }
          });
        },
        wrap: function(html) {
          var htmlIsFunction = isFunction(html);
          return this.each(function(i) {
            jQuery4(this).wrapAll(htmlIsFunction ? html.call(this, i) : html);
          });
        },
        unwrap: function(selector) {
          this.parent(selector).not("body").each(function() {
            jQuery4(this).replaceWith(this.childNodes);
          });
          return this;
        }
      });
      jQuery4.expr.pseudos.hidden = function(elem) {
        return !jQuery4.expr.pseudos.visible(elem);
      };
      jQuery4.expr.pseudos.visible = function(elem) {
        return !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
      };
      jQuery4.ajaxSettings.xhr = function() {
        try {
          return new window2.XMLHttpRequest();
        } catch (e) {
        }
      };
      var xhrSuccessStatus = {
        0: 200,
        1223: 204
      }, xhrSupported = jQuery4.ajaxSettings.xhr();
      support.cors = !!xhrSupported && "withCredentials" in xhrSupported;
      support.ajax = xhrSupported = !!xhrSupported;
      jQuery4.ajaxTransport(function(options) {
        var callback, errorCallback;
        if (support.cors || xhrSupported && !options.crossDomain) {
          return {
            send: function(headers, complete) {
              var i, xhr = options.xhr();
              xhr.open(
                options.type,
                options.url,
                options.async,
                options.username,
                options.password
              );
              if (options.xhrFields) {
                for (i in options.xhrFields) {
                  xhr[i] = options.xhrFields[i];
                }
              }
              if (options.mimeType && xhr.overrideMimeType) {
                xhr.overrideMimeType(options.mimeType);
              }
              if (!options.crossDomain && !headers["X-Requested-With"]) {
                headers["X-Requested-With"] = "XMLHttpRequest";
              }
              for (i in headers) {
                xhr.setRequestHeader(i, headers[i]);
              }
              callback = function(type) {
                return function() {
                  if (callback) {
                    callback = errorCallback = xhr.onload = xhr.onerror = xhr.onabort = xhr.ontimeout = xhr.onreadystatechange = null;
                    if (type === "abort") {
                      xhr.abort();
                    } else if (type === "error") {
                      if (typeof xhr.status !== "number") {
                        complete(0, "error");
                      } else {
                        complete(
                          xhr.status,
                          xhr.statusText
                        );
                      }
                    } else {
                      complete(
                        xhrSuccessStatus[xhr.status] || xhr.status,
                        xhr.statusText,
                        (xhr.responseType || "text") !== "text" || typeof xhr.responseText !== "string" ? { binary: xhr.response } : { text: xhr.responseText },
                        xhr.getAllResponseHeaders()
                      );
                    }
                  }
                };
              };
              xhr.onload = callback();
              errorCallback = xhr.onerror = xhr.ontimeout = callback("error");
              if (xhr.onabort !== void 0) {
                xhr.onabort = errorCallback;
              } else {
                xhr.onreadystatechange = function() {
                  if (xhr.readyState === 4) {
                    window2.setTimeout(function() {
                      if (callback) {
                        errorCallback();
                      }
                    });
                  }
                };
              }
              callback = callback("abort");
              try {
                xhr.send(options.hasContent && options.data || null);
              } catch (e) {
                if (callback) {
                  throw e;
                }
              }
            },
            abort: function() {
              if (callback) {
                callback();
              }
            }
          };
        }
      });
      jQuery4.ajaxPrefilter(function(s) {
        if (s.crossDomain) {
          s.contents.script = false;
        }
      });
      jQuery4.ajaxSetup({
        accepts: {
          script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
          script: /\b(?:java|ecma)script\b/
        },
        converters: {
          "text script": function(text) {
            jQuery4.globalEval(text);
            return text;
          }
        }
      });
      jQuery4.ajaxPrefilter("script", function(s) {
        if (s.cache === void 0) {
          s.cache = false;
        }
        if (s.crossDomain) {
          s.type = "GET";
        }
      });
      jQuery4.ajaxTransport("script", function(s) {
        if (s.crossDomain || s.scriptAttrs) {
          var script, callback;
          return {
            send: function(_, complete) {
              script = jQuery4("<script>").attr(s.scriptAttrs || {}).prop({ charset: s.scriptCharset, src: s.url }).on("load error", callback = function(evt) {
                script.remove();
                callback = null;
                if (evt) {
                  complete(evt.type === "error" ? 404 : 200, evt.type);
                }
              });
              document2.head.appendChild(script[0]);
            },
            abort: function() {
              if (callback) {
                callback();
              }
            }
          };
        }
      });
      var oldCallbacks = [], rjsonp = /(=)\?(?=&|$)|\?\?/;
      jQuery4.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
          var callback = oldCallbacks.pop() || jQuery4.expando + "_" + nonce2.guid++;
          this[callback] = true;
          return callback;
        }
      });
      jQuery4.ajaxPrefilter("json jsonp", function(s, originalSettings, jqXHR) {
        var callbackName, overwritten, responseContainer, jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ? "url" : typeof s.data === "string" && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && rjsonp.test(s.data) && "data");
        if (jsonProp || s.dataTypes[0] === "jsonp") {
          callbackName = s.jsonpCallback = isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback;
          if (jsonProp) {
            s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName);
          } else if (s.jsonp !== false) {
            s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName;
          }
          s.converters["script json"] = function() {
            if (!responseContainer) {
              jQuery4.error(callbackName + " was not called");
            }
            return responseContainer[0];
          };
          s.dataTypes[0] = "json";
          overwritten = window2[callbackName];
          window2[callbackName] = function() {
            responseContainer = arguments;
          };
          jqXHR.always(function() {
            if (overwritten === void 0) {
              jQuery4(window2).removeProp(callbackName);
            } else {
              window2[callbackName] = overwritten;
            }
            if (s[callbackName]) {
              s.jsonpCallback = originalSettings.jsonpCallback;
              oldCallbacks.push(callbackName);
            }
            if (responseContainer && isFunction(overwritten)) {
              overwritten(responseContainer[0]);
            }
            responseContainer = overwritten = void 0;
          });
          return "script";
        }
      });
      support.createHTMLDocument = function() {
        var body = document2.implementation.createHTMLDocument("").body;
        body.innerHTML = "<form></form><form></form>";
        return body.childNodes.length === 2;
      }();
      jQuery4.parseHTML = function(data, context, keepScripts) {
        if (typeof data !== "string") {
          return [];
        }
        if (typeof context === "boolean") {
          keepScripts = context;
          context = false;
        }
        var base, parsed, scripts;
        if (!context) {
          if (support.createHTMLDocument) {
            context = document2.implementation.createHTMLDocument("");
            base = context.createElement("base");
            base.href = document2.location.href;
            context.head.appendChild(base);
          } else {
            context = document2;
          }
        }
        parsed = rsingleTag.exec(data);
        scripts = !keepScripts && [];
        if (parsed) {
          return [context.createElement(parsed[1])];
        }
        parsed = buildFragment([data], context, scripts);
        if (scripts && scripts.length) {
          jQuery4(scripts).remove();
        }
        return jQuery4.merge([], parsed.childNodes);
      };
      jQuery4.fn.load = function(url, params, callback) {
        var selector, type, response, self2 = this, off = url.indexOf(" ");
        if (off > -1) {
          selector = stripAndCollapse(url.slice(off));
          url = url.slice(0, off);
        }
        if (isFunction(params)) {
          callback = params;
          params = void 0;
        } else if (params && typeof params === "object") {
          type = "POST";
        }
        if (self2.length > 0) {
          jQuery4.ajax({
            url,
            type: type || "GET",
            dataType: "html",
            data: params
          }).done(function(responseText) {
            response = arguments;
            self2.html(selector ? jQuery4("<div>").append(jQuery4.parseHTML(responseText)).find(selector) : responseText);
          }).always(callback && function(jqXHR, status) {
            self2.each(function() {
              callback.apply(this, response || [jqXHR.responseText, status, jqXHR]);
            });
          });
        }
        return this;
      };
      jQuery4.expr.pseudos.animated = function(elem) {
        return jQuery4.grep(jQuery4.timers, function(fn) {
          return elem === fn.elem;
        }).length;
      };
      jQuery4.offset = {
        setOffset: function(elem, options, i) {
          var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition, position = jQuery4.css(elem, "position"), curElem = jQuery4(elem), props = {};
          if (position === "static") {
            elem.style.position = "relative";
          }
          curOffset = curElem.offset();
          curCSSTop = jQuery4.css(elem, "top");
          curCSSLeft = jQuery4.css(elem, "left");
          calculatePosition = (position === "absolute" || position === "fixed") && (curCSSTop + curCSSLeft).indexOf("auto") > -1;
          if (calculatePosition) {
            curPosition = curElem.position();
            curTop = curPosition.top;
            curLeft = curPosition.left;
          } else {
            curTop = parseFloat(curCSSTop) || 0;
            curLeft = parseFloat(curCSSLeft) || 0;
          }
          if (isFunction(options)) {
            options = options.call(elem, i, jQuery4.extend({}, curOffset));
          }
          if (options.top != null) {
            props.top = options.top - curOffset.top + curTop;
          }
          if (options.left != null) {
            props.left = options.left - curOffset.left + curLeft;
          }
          if ("using" in options) {
            options.using.call(elem, props);
          } else {
            curElem.css(props);
          }
        }
      };
      jQuery4.fn.extend({
        offset: function(options) {
          if (arguments.length) {
            return options === void 0 ? this : this.each(function(i) {
              jQuery4.offset.setOffset(this, options, i);
            });
          }
          var rect, win, elem = this[0];
          if (!elem) {
            return;
          }
          if (!elem.getClientRects().length) {
            return { top: 0, left: 0 };
          }
          rect = elem.getBoundingClientRect();
          win = elem.ownerDocument.defaultView;
          return {
            top: rect.top + win.pageYOffset,
            left: rect.left + win.pageXOffset
          };
        },
        position: function() {
          if (!this[0]) {
            return;
          }
          var offsetParent, offset, doc, elem = this[0], parentOffset = { top: 0, left: 0 };
          if (jQuery4.css(elem, "position") === "fixed") {
            offset = elem.getBoundingClientRect();
          } else {
            offset = this.offset();
            doc = elem.ownerDocument;
            offsetParent = elem.offsetParent || doc.documentElement;
            while (offsetParent && (offsetParent === doc.body || offsetParent === doc.documentElement) && jQuery4.css(offsetParent, "position") === "static") {
              offsetParent = offsetParent.parentNode;
            }
            if (offsetParent && offsetParent !== elem && offsetParent.nodeType === 1) {
              parentOffset = jQuery4(offsetParent).offset();
              parentOffset.top += jQuery4.css(offsetParent, "borderTopWidth", true);
              parentOffset.left += jQuery4.css(offsetParent, "borderLeftWidth", true);
            }
          }
          return {
            top: offset.top - parentOffset.top - jQuery4.css(elem, "marginTop", true),
            left: offset.left - parentOffset.left - jQuery4.css(elem, "marginLeft", true)
          };
        },
        offsetParent: function() {
          return this.map(function() {
            var offsetParent = this.offsetParent;
            while (offsetParent && jQuery4.css(offsetParent, "position") === "static") {
              offsetParent = offsetParent.offsetParent;
            }
            return offsetParent || documentElement;
          });
        }
      });
      jQuery4.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(method, prop) {
        var top = "pageYOffset" === prop;
        jQuery4.fn[method] = function(val) {
          return access(this, function(elem, method2, val2) {
            var win;
            if (isWindow(elem)) {
              win = elem;
            } else if (elem.nodeType === 9) {
              win = elem.defaultView;
            }
            if (val2 === void 0) {
              return win ? win[prop] : elem[method2];
            }
            if (win) {
              win.scrollTo(
                !top ? val2 : win.pageXOffset,
                top ? val2 : win.pageYOffset
              );
            } else {
              elem[method2] = val2;
            }
          }, method, val, arguments.length);
        };
      });
      jQuery4.each(["top", "left"], function(_i, prop) {
        jQuery4.cssHooks[prop] = addGetHookIf(
          support.pixelPosition,
          function(elem, computed) {
            if (computed) {
              computed = curCSS(elem, prop);
              return rnumnonpx.test(computed) ? jQuery4(elem).position()[prop] + "px" : computed;
            }
          }
        );
      });
      jQuery4.each({ Height: "height", Width: "width" }, function(name, type) {
        jQuery4.each({
          padding: "inner" + name,
          content: type,
          "": "outer" + name
        }, function(defaultExtra, funcName) {
          jQuery4.fn[funcName] = function(margin, value) {
            var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"), extra = defaultExtra || (margin === true || value === true ? "margin" : "border");
            return access(this, function(elem, type2, value2) {
              var doc;
              if (isWindow(elem)) {
                return funcName.indexOf("outer") === 0 ? elem["inner" + name] : elem.document.documentElement["client" + name];
              }
              if (elem.nodeType === 9) {
                doc = elem.documentElement;
                return Math.max(
                  elem.body["scroll" + name],
                  doc["scroll" + name],
                  elem.body["offset" + name],
                  doc["offset" + name],
                  doc["client" + name]
                );
              }
              return value2 === void 0 ? jQuery4.css(elem, type2, extra) : jQuery4.style(elem, type2, value2, extra);
            }, type, chainable ? margin : void 0, chainable);
          };
        });
      });
      jQuery4.each([
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend"
      ], function(_i, type) {
        jQuery4.fn[type] = function(fn) {
          return this.on(type, fn);
        };
      });
      jQuery4.fn.extend({
        bind: function(types, data, fn) {
          return this.on(types, null, data, fn);
        },
        unbind: function(types, fn) {
          return this.off(types, null, fn);
        },
        delegate: function(selector, types, data, fn) {
          return this.on(types, selector, data, fn);
        },
        undelegate: function(selector, types, fn) {
          return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn);
        },
        hover: function(fnOver, fnOut) {
          return this.on("mouseenter", fnOver).on("mouseleave", fnOut || fnOver);
        }
      });
      jQuery4.each(
        "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),
        function(_i, name) {
          jQuery4.fn[name] = function(data, fn) {
            return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name);
          };
        }
      );
      var rtrim = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
      jQuery4.proxy = function(fn, context) {
        var tmp, args, proxy;
        if (typeof context === "string") {
          tmp = fn[context];
          context = fn;
          fn = tmp;
        }
        if (!isFunction(fn)) {
          return void 0;
        }
        args = slice.call(arguments, 2);
        proxy = function() {
          return fn.apply(context || this, args.concat(slice.call(arguments)));
        };
        proxy.guid = fn.guid = fn.guid || jQuery4.guid++;
        return proxy;
      };
      jQuery4.holdReady = function(hold) {
        if (hold) {
          jQuery4.readyWait++;
        } else {
          jQuery4.ready(true);
        }
      };
      jQuery4.isArray = Array.isArray;
      jQuery4.parseJSON = JSON.parse;
      jQuery4.nodeName = nodeName;
      jQuery4.isFunction = isFunction;
      jQuery4.isWindow = isWindow;
      jQuery4.camelCase = camelCase;
      jQuery4.type = toType;
      jQuery4.now = Date.now;
      jQuery4.isNumeric = function(obj) {
        var type = jQuery4.type(obj);
        return (type === "number" || type === "string") && !isNaN(obj - parseFloat(obj));
      };
      jQuery4.trim = function(text) {
        return text == null ? "" : (text + "").replace(rtrim, "$1");
      };
      if (typeof define === "function" && define.amd) {
        define("jquery", [], function() {
          return jQuery4;
        });
      }
      var _jQuery = window2.jQuery, _$ = window2.$;
      jQuery4.noConflict = function(deep) {
        if (window2.$ === jQuery4) {
          window2.$ = _$;
        }
        if (deep && window2.jQuery === jQuery4) {
          window2.jQuery = _jQuery;
        }
        return jQuery4;
      };
      if (typeof noGlobal === "undefined") {
        window2.jQuery = window2.$ = jQuery4;
      }
      return jQuery4;
    });
  }
});

// node_modules/jquery-ujs/src/rails.js
var require_rails = __commonJS({
  "node_modules/jquery-ujs/src/rails.js"(exports, module) {
    (function() {
      "use strict";
      var jqueryUjsInit = function($3, undefined2) {
        if ($3.rails !== undefined2) {
          $3.error("jquery-ujs has already been loaded!");
        }
        var rails;
        var $document = $3(document);
        $3.rails = rails = {
          linkClickSelector: "a[data-confirm], a[data-method], a[data-remote]:not([disabled]), a[data-disable-with], a[data-disable]",
          buttonClickSelector: "button[data-remote]:not([form]):not(form button), button[data-confirm]:not([form]):not(form button)",
          inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]",
          formSubmitSelector: "form:not([data-turbo=true])",
          formInputClickSelector: "form:not([data-turbo=true]) input[type=submit], form:not([data-turbo=true]) input[type=image], form:not([data-turbo=true]) button[type=submit], form:not([data-turbo=true]) button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])",
          disableSelector: "input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled",
          enableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled",
          requiredInputSelector: "input[name][required]:not([disabled]), textarea[name][required]:not([disabled])",
          fileInputSelector: "input[name][type=file]:not([disabled])",
          linkDisableSelector: "a[data-disable-with], a[data-disable]",
          buttonDisableSelector: "button[data-remote][data-disable-with], button[data-remote][data-disable]",
          csrfToken: function() {
            return $3("meta[name=csrf-token]").attr("content");
          },
          csrfParam: function() {
            return $3("meta[name=csrf-param]").attr("content");
          },
          CSRFProtection: function(xhr) {
            var token = rails.csrfToken();
            if (token)
              xhr.setRequestHeader("X-CSRF-Token", token);
          },
          refreshCSRFTokens: function() {
            $3('form input[name="' + rails.csrfParam() + '"]').val(rails.csrfToken());
          },
          fire: function(obj, name, data) {
            var event = $3.Event(name);
            obj.trigger(event, data);
            return event.result !== false;
          },
          confirm: function(message) {
            return confirm(message);
          },
          ajax: function(options) {
            return $3.ajax(options);
          },
          href: function(element) {
            return element[0].href;
          },
          isRemote: function(element) {
            return element.data("remote") !== undefined2 && element.data("remote") !== false;
          },
          handleRemote: function(element) {
            var method, url, data, withCredentials, dataType, options;
            if (rails.fire(element, "ajax:before")) {
              withCredentials = element.data("with-credentials") || null;
              dataType = element.data("type") || $3.ajaxSettings && $3.ajaxSettings.dataType;
              if (element.is("form")) {
                method = element.data("ujs:submit-button-formmethod") || element.attr("method");
                url = element.data("ujs:submit-button-formaction") || element.attr("action");
                data = $3(element[0]).serializeArray();
                var button = element.data("ujs:submit-button");
                if (button) {
                  data.push(button);
                  element.data("ujs:submit-button", null);
                }
                element.data("ujs:submit-button-formmethod", null);
                element.data("ujs:submit-button-formaction", null);
              } else if (element.is(rails.inputChangeSelector)) {
                method = element.data("method");
                url = element.data("url");
                data = element.serialize();
                if (element.data("params"))
                  data = data + "&" + element.data("params");
              } else if (element.is(rails.buttonClickSelector)) {
                method = element.data("method") || "get";
                url = element.data("url");
                data = element.serialize();
                if (element.data("params"))
                  data = data + "&" + element.data("params");
              } else {
                method = element.data("method");
                url = rails.href(element);
                data = element.data("params") || null;
              }
              options = {
                type: method || "GET",
                data,
                dataType,
                beforeSend: function(xhr, settings) {
                  if (settings.dataType === undefined2) {
                    xhr.setRequestHeader("accept", "*/*;q=0.5, " + settings.accepts.script);
                  }
                  if (rails.fire(element, "ajax:beforeSend", [xhr, settings])) {
                    element.trigger("ajax:send", xhr);
                  } else {
                    return false;
                  }
                },
                success: function(data2, status, xhr) {
                  element.trigger("ajax:success", [data2, status, xhr]);
                },
                complete: function(xhr, status) {
                  element.trigger("ajax:complete", [xhr, status]);
                },
                error: function(xhr, status, error) {
                  element.trigger("ajax:error", [xhr, status, error]);
                },
                crossDomain: rails.isCrossDomain(url)
              };
              if (withCredentials) {
                options.xhrFields = {
                  withCredentials
                };
              }
              if (url) {
                options.url = url;
              }
              return rails.ajax(options);
            } else {
              return false;
            }
          },
          isCrossDomain: function(url) {
            var originAnchor = document.createElement("a");
            originAnchor.href = location.href;
            var urlAnchor = document.createElement("a");
            try {
              urlAnchor.href = url;
              urlAnchor.href = urlAnchor.href;
              return !((!urlAnchor.protocol || urlAnchor.protocol === ":") && !urlAnchor.host || originAnchor.protocol + "//" + originAnchor.host === urlAnchor.protocol + "//" + urlAnchor.host);
            } catch (e) {
              return true;
            }
          },
          handleMethod: function(link) {
            var href2 = rails.href(link), method = link.data("method"), target = link.attr("target"), csrfToken2 = rails.csrfToken(), csrfParam2 = rails.csrfParam(), form = $3('<form method="post" action="' + href2 + '"></form>'), metadataInput = '<input name="_method" value="' + method + '" type="hidden" />';
            if (csrfParam2 !== undefined2 && csrfToken2 !== undefined2 && !rails.isCrossDomain(href2)) {
              metadataInput += '<input name="' + csrfParam2 + '" value="' + csrfToken2 + '" type="hidden" />';
            }
            if (target) {
              form.attr("target", target);
            }
            form.hide().append(metadataInput).appendTo("body");
            form.submit();
          },
          formElements: function(form, selector) {
            return form.is("form") ? $3(form[0].elements).filter(selector) : form.find(selector);
          },
          disableFormElements: function(form) {
            rails.formElements(form, rails.disableSelector).each(function() {
              rails.disableFormElement($3(this));
            });
          },
          disableFormElement: function(element) {
            var method, replacement;
            method = element.is("button") ? "html" : "val";
            replacement = element.data("disable-with");
            if (replacement !== undefined2) {
              element.data("ujs:enable-with", element[method]());
              element[method](replacement);
            }
            element.prop("disabled", true);
            element.data("ujs:disabled", true);
          },
          enableFormElements: function(form) {
            rails.formElements(form, rails.enableSelector).each(function() {
              rails.enableFormElement($3(this));
            });
          },
          enableFormElement: function(element) {
            var method = element.is("button") ? "html" : "val";
            if (element.data("ujs:enable-with") !== undefined2) {
              element[method](element.data("ujs:enable-with"));
              element.removeData("ujs:enable-with");
            }
            element.prop("disabled", false);
            element.removeData("ujs:disabled");
          },
          allowAction: function(element) {
            var message = element.data("confirm"), answer = false, callback;
            if (!message) {
              return true;
            }
            if (rails.fire(element, "confirm")) {
              try {
                answer = rails.confirm(message);
              } catch (e) {
                (console.error || console.log).call(console, e.stack || e);
              }
              callback = rails.fire(element, "confirm:complete", [answer]);
            }
            return answer && callback;
          },
          blankInputs: function(form, specifiedSelector, nonBlank) {
            var foundInputs = $3(), input, valueToCheck, radiosForNameWithNoneSelected, radioName, selector = specifiedSelector || "input,textarea", requiredInputs = form.find(selector), checkedRadioButtonNames = {};
            requiredInputs.each(function() {
              input = $3(this);
              if (input.is("input[type=radio]")) {
                radioName = input.attr("name");
                if (!checkedRadioButtonNames[radioName]) {
                  if (form.find('input[type=radio]:checked[name="' + radioName + '"]').length === 0) {
                    radiosForNameWithNoneSelected = form.find(
                      'input[type=radio][name="' + radioName + '"]'
                    );
                    foundInputs = foundInputs.add(radiosForNameWithNoneSelected);
                  }
                  checkedRadioButtonNames[radioName] = radioName;
                }
              } else {
                valueToCheck = input.is("input[type=checkbox],input[type=radio]") ? input.is(":checked") : !!input.val();
                if (valueToCheck === nonBlank) {
                  foundInputs = foundInputs.add(input);
                }
              }
            });
            return foundInputs.length ? foundInputs : false;
          },
          nonBlankInputs: function(form, specifiedSelector) {
            return rails.blankInputs(form, specifiedSelector, true);
          },
          stopEverything: function(e) {
            $3(e.target).trigger("ujs:everythingStopped");
            e.stopImmediatePropagation();
            return false;
          },
          disableElement: function(element) {
            var replacement = element.data("disable-with");
            if (replacement !== undefined2) {
              element.data("ujs:enable-with", element.html());
              element.html(replacement);
            }
            element.on("click.railsDisable", function(e) {
              return rails.stopEverything(e);
            });
            element.data("ujs:disabled", true);
          },
          enableElement: function(element) {
            if (element.data("ujs:enable-with") !== undefined2) {
              element.html(element.data("ujs:enable-with"));
              element.removeData("ujs:enable-with");
            }
            element.off("click.railsDisable");
            element.removeData("ujs:disabled");
          }
        };
        if (rails.fire($document, "rails:attachBindings")) {
          $3.ajaxPrefilter(function(options, originalOptions, xhr) {
            if (!options.crossDomain) {
              rails.CSRFProtection(xhr);
            }
          });
          $3(window).on("pageshow.rails", function() {
            $3($3.rails.enableSelector).each(function() {
              var element = $3(this);
              if (element.data("ujs:disabled")) {
                $3.rails.enableFormElement(element);
              }
            });
            $3($3.rails.linkDisableSelector).each(function() {
              var element = $3(this);
              if (element.data("ujs:disabled")) {
                $3.rails.enableElement(element);
              }
            });
          });
          $document.on("ajax:complete", rails.linkDisableSelector, function() {
            rails.enableElement($3(this));
          });
          $document.on("ajax:complete", rails.buttonDisableSelector, function() {
            rails.enableFormElement($3(this));
          });
          $document.on("click.rails", rails.linkClickSelector, function(e) {
            var link = $3(this), method = link.data("method"), data = link.data("params"), metaClick = e.metaKey || e.ctrlKey;
            if (!rails.allowAction(link))
              return rails.stopEverything(e);
            if (!metaClick && link.is(rails.linkDisableSelector))
              rails.disableElement(link);
            if (rails.isRemote(link)) {
              if (metaClick && (!method || method === "GET") && !data) {
                return true;
              }
              var handleRemote2 = rails.handleRemote(link);
              if (handleRemote2 === false) {
                rails.enableElement(link);
              } else {
                handleRemote2.fail(function() {
                  rails.enableElement(link);
                });
              }
              return false;
            } else if (method) {
              rails.handleMethod(link);
              return false;
            }
          });
          $document.on("click.rails", rails.buttonClickSelector, function(e) {
            var button = $3(this);
            if (!rails.allowAction(button) || !rails.isRemote(button))
              return rails.stopEverything(e);
            if (button.is(rails.buttonDisableSelector))
              rails.disableFormElement(button);
            var handleRemote2 = rails.handleRemote(button);
            if (handleRemote2 === false) {
              rails.enableFormElement(button);
            } else {
              handleRemote2.fail(function() {
                rails.enableFormElement(button);
              });
            }
            return false;
          });
          $document.on("change.rails", rails.inputChangeSelector, function(e) {
            var link = $3(this);
            if (!rails.allowAction(link) || !rails.isRemote(link))
              return rails.stopEverything(e);
            rails.handleRemote(link);
            return false;
          });
          $document.on("submit.rails", rails.formSubmitSelector, function(e) {
            var form = $3(this), remote = rails.isRemote(form), blankRequiredInputs, nonBlankFileInputs;
            if (!rails.allowAction(form))
              return rails.stopEverything(e);
            if (form.attr("novalidate") === undefined2) {
              if (form.data("ujs:formnovalidate-button") === undefined2) {
                blankRequiredInputs = rails.blankInputs(form, rails.requiredInputSelector, false);
                if (blankRequiredInputs && rails.fire(form, "ajax:aborted:required", [blankRequiredInputs])) {
                  return rails.stopEverything(e);
                }
              } else {
                form.data("ujs:formnovalidate-button", undefined2);
              }
            }
            if (remote) {
              nonBlankFileInputs = rails.nonBlankInputs(form, rails.fileInputSelector);
              if (nonBlankFileInputs) {
                setTimeout(function() {
                  rails.disableFormElements(form);
                }, 13);
                var aborted = rails.fire(form, "ajax:aborted:file", [nonBlankFileInputs]);
                if (!aborted) {
                  setTimeout(function() {
                    rails.enableFormElements(form);
                  }, 13);
                }
                return aborted;
              }
              rails.handleRemote(form);
              return false;
            } else {
              setTimeout(function() {
                rails.disableFormElements(form);
              }, 13);
            }
          });
          $document.on("click.rails", rails.formInputClickSelector, function(event) {
            var button = $3(this);
            if (!rails.allowAction(button))
              return rails.stopEverything(event);
            var name = button.attr("name"), data = name ? { name, value: button.val() } : null;
            var form = button.closest("form");
            if (form.length === 0) {
              form = $3("#" + button.attr("form"));
            }
            form.data("ujs:submit-button", data);
            form.data("ujs:formnovalidate-button", button.attr("formnovalidate"));
            form.data("ujs:submit-button-formaction", button.attr("formaction"));
            form.data("ujs:submit-button-formmethod", button.attr("formmethod"));
          });
          $document.on("ajax:send.rails", rails.formSubmitSelector, function(event) {
            if (this === event.target)
              rails.disableFormElements($3(this));
          });
          $document.on("ajax:complete.rails", rails.formSubmitSelector, function(event) {
            if (this === event.target)
              rails.enableFormElements($3(this));
          });
          $3(function() {
            rails.refreshCSRFTokens();
          });
        }
      };
      if (window.jQuery) {
        jqueryUjsInit(jQuery);
      } else if (typeof exports === "object" && typeof module === "object") {
        module.exports = jqueryUjsInit;
      }
    })();
  }
});

// node_modules/datatables.net/js/jquery.dataTables.js
var require_jquery_dataTables = __commonJS({
  "node_modules/datatables.net/js/jquery.dataTables.js"(exports, module) {
    (function(factory) {
      "use strict";
      if (typeof define === "function" && define.amd) {
        define(["jquery"], function($3) {
          return factory($3, window, document);
        });
      } else if (typeof exports === "object") {
        var jq = require_jquery();
        if (typeof window === "undefined") {
          module.exports = function(root, $3) {
            if (!root) {
              root = window;
            }
            if (!$3) {
              $3 = jq(root);
            }
            return factory($3, root, root.document);
          };
        } else {
          module.exports = factory(jq, window, window.document);
        }
      } else {
        window.DataTable = factory(jQuery, window, document);
      }
    })(function($3, window2, document2, undefined2) {
      "use strict";
      var DataTable2 = function(selector, options) {
        if (DataTable2.factory(selector, options)) {
          return DataTable2;
        }
        if (this instanceof DataTable2) {
          return $3(selector).DataTable(options);
        } else {
          options = selector;
        }
        this.$ = function(sSelector, oOpts) {
          return this.api(true).$(sSelector, oOpts);
        };
        this._ = function(sSelector, oOpts) {
          return this.api(true).rows(sSelector, oOpts).data();
        };
        this.api = function(traditional) {
          return traditional ? new _Api(
            _fnSettingsFromNode(this[_ext.iApiIndex])
          ) : new _Api(this);
        };
        this.fnAddData = function(data, redraw) {
          var api = this.api(true);
          var rows = Array.isArray(data) && (Array.isArray(data[0]) || $3.isPlainObject(data[0])) ? api.rows.add(data) : api.row.add(data);
          if (redraw === undefined2 || redraw) {
            api.draw();
          }
          return rows.flatten().toArray();
        };
        this.fnAdjustColumnSizing = function(bRedraw) {
          var api = this.api(true).columns.adjust();
          var settings = api.settings()[0];
          var scroll = settings.oScroll;
          if (bRedraw === undefined2 || bRedraw) {
            api.draw(false);
          } else if (scroll.sX !== "" || scroll.sY !== "") {
            _fnScrollDraw(settings);
          }
        };
        this.fnClearTable = function(bRedraw) {
          var api = this.api(true).clear();
          if (bRedraw === undefined2 || bRedraw) {
            api.draw();
          }
        };
        this.fnClose = function(nTr) {
          this.api(true).row(nTr).child.hide();
        };
        this.fnDeleteRow = function(target, callback, redraw) {
          var api = this.api(true);
          var rows = api.rows(target);
          var settings = rows.settings()[0];
          var data = settings.aoData[rows[0][0]];
          rows.remove();
          if (callback) {
            callback.call(this, settings, data);
          }
          if (redraw === undefined2 || redraw) {
            api.draw();
          }
          return data;
        };
        this.fnDestroy = function(remove) {
          this.api(true).destroy(remove);
        };
        this.fnDraw = function(complete) {
          this.api(true).draw(complete);
        };
        this.fnFilter = function(sInput, iColumn, bRegex, bSmart, bShowGlobal, bCaseInsensitive) {
          var api = this.api(true);
          if (iColumn === null || iColumn === undefined2) {
            api.search(sInput, bRegex, bSmart, bCaseInsensitive);
          } else {
            api.column(iColumn).search(sInput, bRegex, bSmart, bCaseInsensitive);
          }
          api.draw();
        };
        this.fnGetData = function(src, col) {
          var api = this.api(true);
          if (src !== undefined2) {
            var type = src.nodeName ? src.nodeName.toLowerCase() : "";
            return col !== undefined2 || type == "td" || type == "th" ? api.cell(src, col).data() : api.row(src).data() || null;
          }
          return api.data().toArray();
        };
        this.fnGetNodes = function(iRow) {
          var api = this.api(true);
          return iRow !== undefined2 ? api.row(iRow).node() : api.rows().nodes().flatten().toArray();
        };
        this.fnGetPosition = function(node) {
          var api = this.api(true);
          var nodeName = node.nodeName.toUpperCase();
          if (nodeName == "TR") {
            return api.row(node).index();
          } else if (nodeName == "TD" || nodeName == "TH") {
            var cell = api.cell(node).index();
            return [
              cell.row,
              cell.columnVisible,
              cell.column
            ];
          }
          return null;
        };
        this.fnIsOpen = function(nTr) {
          return this.api(true).row(nTr).child.isShown();
        };
        this.fnOpen = function(nTr, mHtml, sClass) {
          return this.api(true).row(nTr).child(mHtml, sClass).show().child()[0];
        };
        this.fnPageChange = function(mAction, bRedraw) {
          var api = this.api(true).page(mAction);
          if (bRedraw === undefined2 || bRedraw) {
            api.draw(false);
          }
        };
        this.fnSetColumnVis = function(iCol, bShow, bRedraw) {
          var api = this.api(true).column(iCol).visible(bShow);
          if (bRedraw === undefined2 || bRedraw) {
            api.columns.adjust().draw();
          }
        };
        this.fnSettings = function() {
          return _fnSettingsFromNode(this[_ext.iApiIndex]);
        };
        this.fnSort = function(aaSort) {
          this.api(true).order(aaSort).draw();
        };
        this.fnSortListener = function(nNode, iColumn, fnCallback) {
          this.api(true).order.listener(nNode, iColumn, fnCallback);
        };
        this.fnUpdate = function(mData, mRow, iColumn, bRedraw, bAction) {
          var api = this.api(true);
          if (iColumn === undefined2 || iColumn === null) {
            api.row(mRow).data(mData);
          } else {
            api.cell(mRow, iColumn).data(mData);
          }
          if (bAction === undefined2 || bAction) {
            api.columns.adjust();
          }
          if (bRedraw === undefined2 || bRedraw) {
            api.draw();
          }
          return 0;
        };
        this.fnVersionCheck = _ext.fnVersionCheck;
        var _that = this;
        var emptyInit = options === undefined2;
        var len = this.length;
        if (emptyInit) {
          options = {};
        }
        this.oApi = this.internal = _ext.internal;
        for (var fn in DataTable2.ext.internal) {
          if (fn) {
            this[fn] = _fnExternApiFunc(fn);
          }
        }
        this.each(function() {
          var o = {};
          var oInit = len > 1 ? _fnExtend(o, options, true) : options;
          var i2 = 0, iLen, j, jLen, k, kLen;
          var sId = this.getAttribute("id");
          var bInitHandedOff = false;
          var defaults = DataTable2.defaults;
          var $this = $3(this);
          if (this.nodeName.toLowerCase() != "table") {
            _fnLog(null, 0, "Non-table node initialisation (" + this.nodeName + ")", 2);
            return;
          }
          _fnCompatOpts(defaults);
          _fnCompatCols(defaults.column);
          _fnCamelToHungarian(defaults, defaults, true);
          _fnCamelToHungarian(defaults.column, defaults.column, true);
          _fnCamelToHungarian(defaults, $3.extend(oInit, $this.data()), true);
          var allSettings = DataTable2.settings;
          for (i2 = 0, iLen = allSettings.length; i2 < iLen; i2++) {
            var s = allSettings[i2];
            if (s.nTable == this || s.nTHead && s.nTHead.parentNode == this || s.nTFoot && s.nTFoot.parentNode == this) {
              var bRetrieve = oInit.bRetrieve !== undefined2 ? oInit.bRetrieve : defaults.bRetrieve;
              var bDestroy = oInit.bDestroy !== undefined2 ? oInit.bDestroy : defaults.bDestroy;
              if (emptyInit || bRetrieve) {
                return s.oInstance;
              } else if (bDestroy) {
                s.oInstance.fnDestroy();
                break;
              } else {
                _fnLog(s, 0, "Cannot reinitialise DataTable", 3);
                return;
              }
            }
            if (s.sTableId == this.id) {
              allSettings.splice(i2, 1);
              break;
            }
          }
          if (sId === null || sId === "") {
            sId = "DataTables_Table_" + DataTable2.ext._unique++;
            this.id = sId;
          }
          var oSettings = $3.extend(true, {}, DataTable2.models.oSettings, {
            "sDestroyWidth": $this[0].style.width,
            "sInstance": sId,
            "sTableId": sId
          });
          oSettings.nTable = this;
          oSettings.oApi = _that.internal;
          oSettings.oInit = oInit;
          allSettings.push(oSettings);
          oSettings.oInstance = _that.length === 1 ? _that : $this.dataTable();
          _fnCompatOpts(oInit);
          _fnLanguageCompat(oInit.oLanguage);
          if (oInit.aLengthMenu && !oInit.iDisplayLength) {
            oInit.iDisplayLength = Array.isArray(oInit.aLengthMenu[0]) ? oInit.aLengthMenu[0][0] : oInit.aLengthMenu[0];
          }
          oInit = _fnExtend($3.extend(true, {}, defaults), oInit);
          _fnMap(oSettings.oFeatures, oInit, [
            "bPaginate",
            "bLengthChange",
            "bFilter",
            "bSort",
            "bSortMulti",
            "bInfo",
            "bProcessing",
            "bAutoWidth",
            "bSortClasses",
            "bServerSide",
            "bDeferRender"
          ]);
          _fnMap(oSettings, oInit, [
            "asStripeClasses",
            "ajax",
            "fnServerData",
            "fnFormatNumber",
            "sServerMethod",
            "aaSorting",
            "aaSortingFixed",
            "aLengthMenu",
            "sPaginationType",
            "sAjaxSource",
            "sAjaxDataProp",
            "iStateDuration",
            "sDom",
            "bSortCellsTop",
            "iTabIndex",
            "fnStateLoadCallback",
            "fnStateSaveCallback",
            "renderer",
            "searchDelay",
            "rowId",
            ["iCookieDuration", "iStateDuration"],
            ["oSearch", "oPreviousSearch"],
            ["aoSearchCols", "aoPreSearchCols"],
            ["iDisplayLength", "_iDisplayLength"]
          ]);
          _fnMap(oSettings.oScroll, oInit, [
            ["sScrollX", "sX"],
            ["sScrollXInner", "sXInner"],
            ["sScrollY", "sY"],
            ["bScrollCollapse", "bCollapse"]
          ]);
          _fnMap(oSettings.oLanguage, oInit, "fnInfoCallback");
          _fnCallbackReg(oSettings, "aoDrawCallback", oInit.fnDrawCallback, "user");
          _fnCallbackReg(oSettings, "aoServerParams", oInit.fnServerParams, "user");
          _fnCallbackReg(oSettings, "aoStateSaveParams", oInit.fnStateSaveParams, "user");
          _fnCallbackReg(oSettings, "aoStateLoadParams", oInit.fnStateLoadParams, "user");
          _fnCallbackReg(oSettings, "aoStateLoaded", oInit.fnStateLoaded, "user");
          _fnCallbackReg(oSettings, "aoRowCallback", oInit.fnRowCallback, "user");
          _fnCallbackReg(oSettings, "aoRowCreatedCallback", oInit.fnCreatedRow, "user");
          _fnCallbackReg(oSettings, "aoHeaderCallback", oInit.fnHeaderCallback, "user");
          _fnCallbackReg(oSettings, "aoFooterCallback", oInit.fnFooterCallback, "user");
          _fnCallbackReg(oSettings, "aoInitComplete", oInit.fnInitComplete, "user");
          _fnCallbackReg(oSettings, "aoPreDrawCallback", oInit.fnPreDrawCallback, "user");
          oSettings.rowIdFn = _fnGetObjectDataFn(oInit.rowId);
          _fnBrowserDetect(oSettings);
          var oClasses = oSettings.oClasses;
          $3.extend(oClasses, DataTable2.ext.classes, oInit.oClasses);
          $this.addClass(oClasses.sTable);
          if (oSettings.iInitDisplayStart === undefined2) {
            oSettings.iInitDisplayStart = oInit.iDisplayStart;
            oSettings._iDisplayStart = oInit.iDisplayStart;
          }
          if (oInit.iDeferLoading !== null) {
            oSettings.bDeferLoading = true;
            var tmp = Array.isArray(oInit.iDeferLoading);
            oSettings._iRecordsDisplay = tmp ? oInit.iDeferLoading[0] : oInit.iDeferLoading;
            oSettings._iRecordsTotal = tmp ? oInit.iDeferLoading[1] : oInit.iDeferLoading;
          }
          var oLanguage = oSettings.oLanguage;
          $3.extend(true, oLanguage, oInit.oLanguage);
          if (oLanguage.sUrl) {
            $3.ajax({
              dataType: "json",
              url: oLanguage.sUrl,
              success: function(json) {
                _fnCamelToHungarian(defaults.oLanguage, json);
                _fnLanguageCompat(json);
                $3.extend(true, oLanguage, json, oSettings.oInit.oLanguage);
                _fnCallbackFire(oSettings, null, "i18n", [oSettings]);
                _fnInitialise(oSettings);
              },
              error: function() {
                _fnInitialise(oSettings);
              }
            });
            bInitHandedOff = true;
          } else {
            _fnCallbackFire(oSettings, null, "i18n", [oSettings]);
          }
          if (oInit.asStripeClasses === null) {
            oSettings.asStripeClasses = [
              oClasses.sStripeOdd,
              oClasses.sStripeEven
            ];
          }
          var stripeClasses = oSettings.asStripeClasses;
          var rowOne = $this.children("tbody").find("tr").eq(0);
          if ($3.inArray(true, $3.map(stripeClasses, function(el, i3) {
            return rowOne.hasClass(el);
          })) !== -1) {
            $3("tbody tr", this).removeClass(stripeClasses.join(" "));
            oSettings.asDestroyStripes = stripeClasses.slice();
          }
          var anThs = [];
          var aoColumnsInit;
          var nThead = this.getElementsByTagName("thead");
          if (nThead.length !== 0) {
            _fnDetectHeader(oSettings.aoHeader, nThead[0]);
            anThs = _fnGetUniqueThs(oSettings);
          }
          if (oInit.aoColumns === null) {
            aoColumnsInit = [];
            for (i2 = 0, iLen = anThs.length; i2 < iLen; i2++) {
              aoColumnsInit.push(null);
            }
          } else {
            aoColumnsInit = oInit.aoColumns;
          }
          for (i2 = 0, iLen = aoColumnsInit.length; i2 < iLen; i2++) {
            _fnAddColumn(oSettings, anThs ? anThs[i2] : null);
          }
          _fnApplyColumnDefs(oSettings, oInit.aoColumnDefs, aoColumnsInit, function(iCol, oDef) {
            _fnColumnOptions(oSettings, iCol, oDef);
          });
          if (rowOne.length) {
            var a = function(cell, name) {
              return cell.getAttribute("data-" + name) !== null ? name : null;
            };
            $3(rowOne[0]).children("th, td").each(function(i3, cell) {
              var col = oSettings.aoColumns[i3];
              if (!col) {
                _fnLog(oSettings, 0, "Incorrect column count", 18);
              }
              if (col.mData === i3) {
                var sort = a(cell, "sort") || a(cell, "order");
                var filter = a(cell, "filter") || a(cell, "search");
                if (sort !== null || filter !== null) {
                  col.mData = {
                    _: i3 + ".display",
                    sort: sort !== null ? i3 + ".@data-" + sort : undefined2,
                    type: sort !== null ? i3 + ".@data-" + sort : undefined2,
                    filter: filter !== null ? i3 + ".@data-" + filter : undefined2
                  };
                  col._isArrayHost = true;
                  _fnColumnOptions(oSettings, i3);
                }
              }
            });
          }
          var features = oSettings.oFeatures;
          var loadedInit = function() {
            if (oInit.aaSorting === undefined2) {
              var sorting = oSettings.aaSorting;
              for (i2 = 0, iLen = sorting.length; i2 < iLen; i2++) {
                sorting[i2][1] = oSettings.aoColumns[i2].asSorting[0];
              }
            }
            _fnSortingClasses(oSettings);
            if (features.bSort) {
              _fnCallbackReg(oSettings, "aoDrawCallback", function() {
                if (oSettings.bSorted) {
                  var aSort = _fnSortFlatten(oSettings);
                  var sortedColumns = {};
                  $3.each(aSort, function(i3, val) {
                    sortedColumns[val.src] = val.dir;
                  });
                  _fnCallbackFire(oSettings, null, "order", [oSettings, aSort, sortedColumns]);
                  _fnSortAria(oSettings);
                }
              });
            }
            _fnCallbackReg(oSettings, "aoDrawCallback", function() {
              if (oSettings.bSorted || _fnDataSource(oSettings) === "ssp" || features.bDeferRender) {
                _fnSortingClasses(oSettings);
              }
            }, "sc");
            var captions = $this.children("caption").each(function() {
              this._captionSide = $3(this).css("caption-side");
            });
            var thead = $this.children("thead");
            if (thead.length === 0) {
              thead = $3("<thead/>").appendTo($this);
            }
            oSettings.nTHead = thead[0];
            var tbody = $this.children("tbody");
            if (tbody.length === 0) {
              tbody = $3("<tbody/>").insertAfter(thead);
            }
            oSettings.nTBody = tbody[0];
            var tfoot = $this.children("tfoot");
            if (tfoot.length === 0 && captions.length > 0 && (oSettings.oScroll.sX !== "" || oSettings.oScroll.sY !== "")) {
              tfoot = $3("<tfoot/>").appendTo($this);
            }
            if (tfoot.length === 0 || tfoot.children().length === 0) {
              $this.addClass(oClasses.sNoFooter);
            } else if (tfoot.length > 0) {
              oSettings.nTFoot = tfoot[0];
              _fnDetectHeader(oSettings.aoFooter, oSettings.nTFoot);
            }
            if (oInit.aaData) {
              for (i2 = 0; i2 < oInit.aaData.length; i2++) {
                _fnAddData(oSettings, oInit.aaData[i2]);
              }
            } else if (oSettings.bDeferLoading || _fnDataSource(oSettings) == "dom") {
              _fnAddTr(oSettings, $3(oSettings.nTBody).children("tr"));
            }
            oSettings.aiDisplay = oSettings.aiDisplayMaster.slice();
            oSettings.bInitialised = true;
            if (bInitHandedOff === false) {
              _fnInitialise(oSettings);
            }
          };
          _fnCallbackReg(oSettings, "aoDrawCallback", _fnSaveState, "state_save");
          if (oInit.bStateSave) {
            features.bStateSave = true;
            _fnLoadState(oSettings, oInit, loadedInit);
          } else {
            loadedInit();
          }
        });
        _that = null;
        return this;
      };
      var _ext;
      var _Api;
      var _api_register;
      var _api_registerPlural;
      var _re_dic = {};
      var _re_new_lines = /[\r\n\u2028]/g;
      var _re_html = /<.*?>/g;
      var _re_date = /^\d{2,4}[\.\/\-]\d{1,2}[\.\/\-]\d{1,2}([T ]{1}\d{1,2}[:\.]\d{2}([\.:]\d{2})?)?$/;
      var _re_escape_regex = new RegExp("(\\" + ["/", ".", "*", "+", "?", "|", "(", ")", "[", "]", "{", "}", "\\", "$", "^", "-"].join("|\\") + ")", "g");
      var _re_formatted_numeric = /['\u00A0,$£€¥%\u2009\u202F\u20BD\u20a9\u20BArfkɃΞ]/gi;
      var _empty = function(d) {
        return !d || d === true || d === "-" ? true : false;
      };
      var _intVal = function(s) {
        var integer = parseInt(s, 10);
        return !isNaN(integer) && isFinite(s) ? integer : null;
      };
      var _numToDecimal = function(num2, decimalPoint) {
        if (!_re_dic[decimalPoint]) {
          _re_dic[decimalPoint] = new RegExp(_fnEscapeRegex(decimalPoint), "g");
        }
        return typeof num2 === "string" && decimalPoint !== "." ? num2.replace(/\./g, "").replace(_re_dic[decimalPoint], ".") : num2;
      };
      var _isNumber = function(d, decimalPoint, formatted) {
        var type = typeof d;
        var strType = type === "string";
        if (type === "number" || type === "bigint") {
          return true;
        }
        if (_empty(d)) {
          return true;
        }
        if (decimalPoint && strType) {
          d = _numToDecimal(d, decimalPoint);
        }
        if (formatted && strType) {
          d = d.replace(_re_formatted_numeric, "");
        }
        return !isNaN(parseFloat(d)) && isFinite(d);
      };
      var _isHtml = function(d) {
        return _empty(d) || typeof d === "string";
      };
      var _htmlNumeric = function(d, decimalPoint, formatted) {
        if (_empty(d)) {
          return true;
        }
        var html = _isHtml(d);
        return !html ? null : _isNumber(_stripHtml(d), decimalPoint, formatted) ? true : null;
      };
      var _pluck = function(a, prop, prop2) {
        var out = [];
        var i2 = 0, ien = a.length;
        if (prop2 !== undefined2) {
          for (; i2 < ien; i2++) {
            if (a[i2] && a[i2][prop]) {
              out.push(a[i2][prop][prop2]);
            }
          }
        } else {
          for (; i2 < ien; i2++) {
            if (a[i2]) {
              out.push(a[i2][prop]);
            }
          }
        }
        return out;
      };
      var _pluck_order = function(a, order, prop, prop2) {
        var out = [];
        var i2 = 0, ien = order.length;
        if (prop2 !== undefined2) {
          for (; i2 < ien; i2++) {
            if (a[order[i2]][prop]) {
              out.push(a[order[i2]][prop][prop2]);
            }
          }
        } else {
          for (; i2 < ien; i2++) {
            out.push(a[order[i2]][prop]);
          }
        }
        return out;
      };
      var _range = function(len, start2) {
        var out = [];
        var end;
        if (start2 === undefined2) {
          start2 = 0;
          end = len;
        } else {
          end = start2;
          start2 = len;
        }
        for (var i2 = start2; i2 < end; i2++) {
          out.push(i2);
        }
        return out;
      };
      var _removeEmpty = function(a) {
        var out = [];
        for (var i2 = 0, ien = a.length; i2 < ien; i2++) {
          if (a[i2]) {
            out.push(a[i2]);
          }
        }
        return out;
      };
      var _stripHtml = function(d) {
        return d.replace(_re_html, "").replace(/<script/i, "");
      };
      var _areAllUnique = function(src) {
        if (src.length < 2) {
          return true;
        }
        var sorted = src.slice().sort();
        var last = sorted[0];
        for (var i2 = 1, ien = sorted.length; i2 < ien; i2++) {
          if (sorted[i2] === last) {
            return false;
          }
          last = sorted[i2];
        }
        return true;
      };
      var _unique = function(src) {
        if (_areAllUnique(src)) {
          return src.slice();
        }
        var out = [], val, i2, ien = src.length, j, k = 0;
        again:
          for (i2 = 0; i2 < ien; i2++) {
            val = src[i2];
            for (j = 0; j < k; j++) {
              if (out[j] === val) {
                continue again;
              }
            }
            out.push(val);
            k++;
          }
        return out;
      };
      var _flatten = function(out, val) {
        if (Array.isArray(val)) {
          for (var i2 = 0; i2 < val.length; i2++) {
            _flatten(out, val[i2]);
          }
        } else {
          out.push(val);
        }
        return out;
      };
      var _includes = function(search, start2) {
        if (start2 === undefined2) {
          start2 = 0;
        }
        return this.indexOf(search, start2) !== -1;
      };
      if (!Array.isArray) {
        Array.isArray = function(arg) {
          return Object.prototype.toString.call(arg) === "[object Array]";
        };
      }
      if (!Array.prototype.includes) {
        Array.prototype.includes = _includes;
      }
      if (!String.prototype.trim) {
        String.prototype.trim = function() {
          return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
        };
      }
      if (!String.prototype.includes) {
        String.prototype.includes = _includes;
      }
      DataTable2.util = {
        throttle: function(fn, freq) {
          var frequency = freq !== undefined2 ? freq : 200, last, timer;
          return function() {
            var that = this, now = +new Date(), args = arguments;
            if (last && now < last + frequency) {
              clearTimeout(timer);
              timer = setTimeout(function() {
                last = undefined2;
                fn.apply(that, args);
              }, frequency);
            } else {
              last = now;
              fn.apply(that, args);
            }
          };
        },
        escapeRegex: function(val) {
          return val.replace(_re_escape_regex, "\\$1");
        },
        set: function(source) {
          if ($3.isPlainObject(source)) {
            return DataTable2.util.set(source._);
          } else if (source === null) {
            return function() {
            };
          } else if (typeof source === "function") {
            return function(data, val, meta) {
              source(data, "set", val, meta);
            };
          } else if (typeof source === "string" && (source.indexOf(".") !== -1 || source.indexOf("[") !== -1 || source.indexOf("(") !== -1)) {
            var setData2 = function(data, val, src) {
              var a = _fnSplitObjNotation(src), b;
              var aLast = a[a.length - 1];
              var arrayNotation, funcNotation, o, innerSrc;
              for (var i2 = 0, iLen = a.length - 1; i2 < iLen; i2++) {
                if (a[i2] === "__proto__" || a[i2] === "constructor") {
                  throw new Error("Cannot set prototype values");
                }
                arrayNotation = a[i2].match(__reArray);
                funcNotation = a[i2].match(__reFn);
                if (arrayNotation) {
                  a[i2] = a[i2].replace(__reArray, "");
                  data[a[i2]] = [];
                  b = a.slice();
                  b.splice(0, i2 + 1);
                  innerSrc = b.join(".");
                  if (Array.isArray(val)) {
                    for (var j = 0, jLen = val.length; j < jLen; j++) {
                      o = {};
                      setData2(o, val[j], innerSrc);
                      data[a[i2]].push(o);
                    }
                  } else {
                    data[a[i2]] = val;
                  }
                  return;
                } else if (funcNotation) {
                  a[i2] = a[i2].replace(__reFn, "");
                  data = data[a[i2]](val);
                }
                if (data[a[i2]] === null || data[a[i2]] === undefined2) {
                  data[a[i2]] = {};
                }
                data = data[a[i2]];
              }
              if (aLast.match(__reFn)) {
                data = data[aLast.replace(__reFn, "")](val);
              } else {
                data[aLast.replace(__reArray, "")] = val;
              }
            };
            return function(data, val) {
              return setData2(data, val, source);
            };
          } else {
            return function(data, val) {
              data[source] = val;
            };
          }
        },
        get: function(source) {
          if ($3.isPlainObject(source)) {
            var o = {};
            $3.each(source, function(key, val) {
              if (val) {
                o[key] = DataTable2.util.get(val);
              }
            });
            return function(data, type, row, meta) {
              var t = o[type] || o._;
              return t !== undefined2 ? t(data, type, row, meta) : data;
            };
          } else if (source === null) {
            return function(data) {
              return data;
            };
          } else if (typeof source === "function") {
            return function(data, type, row, meta) {
              return source(data, type, row, meta);
            };
          } else if (typeof source === "string" && (source.indexOf(".") !== -1 || source.indexOf("[") !== -1 || source.indexOf("(") !== -1)) {
            var fetchData = function(data, type, src) {
              var arrayNotation, funcNotation, out, innerSrc;
              if (src !== "") {
                var a = _fnSplitObjNotation(src);
                for (var i2 = 0, iLen = a.length; i2 < iLen; i2++) {
                  arrayNotation = a[i2].match(__reArray);
                  funcNotation = a[i2].match(__reFn);
                  if (arrayNotation) {
                    a[i2] = a[i2].replace(__reArray, "");
                    if (a[i2] !== "") {
                      data = data[a[i2]];
                    }
                    out = [];
                    a.splice(0, i2 + 1);
                    innerSrc = a.join(".");
                    if (Array.isArray(data)) {
                      for (var j = 0, jLen = data.length; j < jLen; j++) {
                        out.push(fetchData(data[j], type, innerSrc));
                      }
                    }
                    var join = arrayNotation[0].substring(1, arrayNotation[0].length - 1);
                    data = join === "" ? out : out.join(join);
                    break;
                  } else if (funcNotation) {
                    a[i2] = a[i2].replace(__reFn, "");
                    data = data[a[i2]]();
                    continue;
                  }
                  if (data === null || data[a[i2]] === null) {
                    return null;
                  } else if (data === undefined2 || data[a[i2]] === undefined2) {
                    return undefined2;
                  }
                  data = data[a[i2]];
                }
              }
              return data;
            };
            return function(data, type) {
              return fetchData(data, type, source);
            };
          } else {
            return function(data, type) {
              return data[source];
            };
          }
        }
      };
      function _fnHungarianMap(o) {
        var hungarian = "a aa ai ao as b fn i m o s ", match, newKey, map = {};
        $3.each(o, function(key, val) {
          match = key.match(/^([^A-Z]+?)([A-Z])/);
          if (match && hungarian.indexOf(match[1] + " ") !== -1) {
            newKey = key.replace(match[0], match[2].toLowerCase());
            map[newKey] = key;
            if (match[1] === "o") {
              _fnHungarianMap(o[key]);
            }
          }
        });
        o._hungarianMap = map;
      }
      function _fnCamelToHungarian(src, user, force) {
        if (!src._hungarianMap) {
          _fnHungarianMap(src);
        }
        var hungarianKey;
        $3.each(user, function(key, val) {
          hungarianKey = src._hungarianMap[key];
          if (hungarianKey !== undefined2 && (force || user[hungarianKey] === undefined2)) {
            if (hungarianKey.charAt(0) === "o") {
              if (!user[hungarianKey]) {
                user[hungarianKey] = {};
              }
              $3.extend(true, user[hungarianKey], user[key]);
              _fnCamelToHungarian(src[hungarianKey], user[hungarianKey], force);
            } else {
              user[hungarianKey] = user[key];
            }
          }
        });
      }
      function _fnLanguageCompat(lang) {
        var defaults = DataTable2.defaults.oLanguage;
        var defaultDecimal = defaults.sDecimal;
        if (defaultDecimal) {
          _addNumericSort(defaultDecimal);
        }
        if (lang) {
          var zeroRecords = lang.sZeroRecords;
          if (!lang.sEmptyTable && zeroRecords && defaults.sEmptyTable === "No data available in table") {
            _fnMap(lang, lang, "sZeroRecords", "sEmptyTable");
          }
          if (!lang.sLoadingRecords && zeroRecords && defaults.sLoadingRecords === "Loading...") {
            _fnMap(lang, lang, "sZeroRecords", "sLoadingRecords");
          }
          if (lang.sInfoThousands) {
            lang.sThousands = lang.sInfoThousands;
          }
          var decimal = lang.sDecimal;
          if (decimal && defaultDecimal !== decimal) {
            _addNumericSort(decimal);
          }
        }
      }
      var _fnCompatMap = function(o, knew, old) {
        if (o[knew] !== undefined2) {
          o[old] = o[knew];
        }
      };
      function _fnCompatOpts(init) {
        _fnCompatMap(init, "ordering", "bSort");
        _fnCompatMap(init, "orderMulti", "bSortMulti");
        _fnCompatMap(init, "orderClasses", "bSortClasses");
        _fnCompatMap(init, "orderCellsTop", "bSortCellsTop");
        _fnCompatMap(init, "order", "aaSorting");
        _fnCompatMap(init, "orderFixed", "aaSortingFixed");
        _fnCompatMap(init, "paging", "bPaginate");
        _fnCompatMap(init, "pagingType", "sPaginationType");
        _fnCompatMap(init, "pageLength", "iDisplayLength");
        _fnCompatMap(init, "searching", "bFilter");
        if (typeof init.sScrollX === "boolean") {
          init.sScrollX = init.sScrollX ? "100%" : "";
        }
        if (typeof init.scrollX === "boolean") {
          init.scrollX = init.scrollX ? "100%" : "";
        }
        var searchCols = init.aoSearchCols;
        if (searchCols) {
          for (var i2 = 0, ien = searchCols.length; i2 < ien; i2++) {
            if (searchCols[i2]) {
              _fnCamelToHungarian(DataTable2.models.oSearch, searchCols[i2]);
            }
          }
        }
      }
      function _fnCompatCols(init) {
        _fnCompatMap(init, "orderable", "bSortable");
        _fnCompatMap(init, "orderData", "aDataSort");
        _fnCompatMap(init, "orderSequence", "asSorting");
        _fnCompatMap(init, "orderDataType", "sortDataType");
        var dataSort = init.aDataSort;
        if (typeof dataSort === "number" && !Array.isArray(dataSort)) {
          init.aDataSort = [dataSort];
        }
      }
      function _fnBrowserDetect(settings) {
        if (!DataTable2.__browser) {
          var browser = {};
          DataTable2.__browser = browser;
          var n = $3("<div/>").css({
            position: "fixed",
            top: 0,
            left: $3(window2).scrollLeft() * -1,
            height: 1,
            width: 1,
            overflow: "hidden"
          }).append(
            $3("<div/>").css({
              position: "absolute",
              top: 1,
              left: 1,
              width: 100,
              overflow: "scroll"
            }).append(
              $3("<div/>").css({
                width: "100%",
                height: 10
              })
            )
          ).appendTo("body");
          var outer = n.children();
          var inner = outer.children();
          browser.barWidth = outer[0].offsetWidth - outer[0].clientWidth;
          browser.bScrollOversize = inner[0].offsetWidth === 100 && outer[0].clientWidth !== 100;
          browser.bScrollbarLeft = Math.round(inner.offset().left) !== 1;
          browser.bBounding = n[0].getBoundingClientRect().width ? true : false;
          n.remove();
        }
        $3.extend(settings.oBrowser, DataTable2.__browser);
        settings.oScroll.iBarWidth = DataTable2.__browser.barWidth;
      }
      function _fnReduce(that, fn, init, start2, end, inc) {
        var i2 = start2, value, isSet = false;
        if (init !== undefined2) {
          value = init;
          isSet = true;
        }
        while (i2 !== end) {
          if (!that.hasOwnProperty(i2)) {
            continue;
          }
          value = isSet ? fn(value, that[i2], i2, that) : that[i2];
          isSet = true;
          i2 += inc;
        }
        return value;
      }
      function _fnAddColumn(oSettings, nTh) {
        var oDefaults = DataTable2.defaults.column;
        var iCol = oSettings.aoColumns.length;
        var oCol = $3.extend({}, DataTable2.models.oColumn, oDefaults, {
          "nTh": nTh ? nTh : document2.createElement("th"),
          "sTitle": oDefaults.sTitle ? oDefaults.sTitle : nTh ? nTh.innerHTML : "",
          "aDataSort": oDefaults.aDataSort ? oDefaults.aDataSort : [iCol],
          "mData": oDefaults.mData ? oDefaults.mData : iCol,
          idx: iCol
        });
        oSettings.aoColumns.push(oCol);
        var searchCols = oSettings.aoPreSearchCols;
        searchCols[iCol] = $3.extend({}, DataTable2.models.oSearch, searchCols[iCol]);
        _fnColumnOptions(oSettings, iCol, $3(nTh).data());
      }
      function _fnColumnOptions(oSettings, iCol, oOptions) {
        var oCol = oSettings.aoColumns[iCol];
        var oClasses = oSettings.oClasses;
        var th = $3(oCol.nTh);
        if (!oCol.sWidthOrig) {
          oCol.sWidthOrig = th.attr("width") || null;
          var t = (th.attr("style") || "").match(/width:\s*(\d+[pxem%]+)/);
          if (t) {
            oCol.sWidthOrig = t[1];
          }
        }
        if (oOptions !== undefined2 && oOptions !== null) {
          _fnCompatCols(oOptions);
          _fnCamelToHungarian(DataTable2.defaults.column, oOptions, true);
          if (oOptions.mDataProp !== undefined2 && !oOptions.mData) {
            oOptions.mData = oOptions.mDataProp;
          }
          if (oOptions.sType) {
            oCol._sManualType = oOptions.sType;
          }
          if (oOptions.className && !oOptions.sClass) {
            oOptions.sClass = oOptions.className;
          }
          if (oOptions.sClass) {
            th.addClass(oOptions.sClass);
          }
          var origClass = oCol.sClass;
          $3.extend(oCol, oOptions);
          _fnMap(oCol, oOptions, "sWidth", "sWidthOrig");
          if (origClass !== oCol.sClass) {
            oCol.sClass = origClass + " " + oCol.sClass;
          }
          if (oOptions.iDataSort !== undefined2) {
            oCol.aDataSort = [oOptions.iDataSort];
          }
          _fnMap(oCol, oOptions, "aDataSort");
          if (!oCol.ariaTitle) {
            oCol.ariaTitle = th.attr("aria-label");
          }
        }
        var mDataSrc = oCol.mData;
        var mData = _fnGetObjectDataFn(mDataSrc);
        var mRender = oCol.mRender ? _fnGetObjectDataFn(oCol.mRender) : null;
        var attrTest = function(src) {
          return typeof src === "string" && src.indexOf("@") !== -1;
        };
        oCol._bAttrSrc = $3.isPlainObject(mDataSrc) && (attrTest(mDataSrc.sort) || attrTest(mDataSrc.type) || attrTest(mDataSrc.filter));
        oCol._setter = null;
        oCol.fnGetData = function(rowData, type, meta) {
          var innerData = mData(rowData, type, undefined2, meta);
          return mRender && type ? mRender(innerData, type, rowData, meta) : innerData;
        };
        oCol.fnSetData = function(rowData, val, meta) {
          return _fnSetObjectDataFn(mDataSrc)(rowData, val, meta);
        };
        if (typeof mDataSrc !== "number" && !oCol._isArrayHost) {
          oSettings._rowReadObject = true;
        }
        if (!oSettings.oFeatures.bSort) {
          oCol.bSortable = false;
          th.addClass(oClasses.sSortableNone);
        }
        var bAsc = $3.inArray("asc", oCol.asSorting) !== -1;
        var bDesc = $3.inArray("desc", oCol.asSorting) !== -1;
        if (!oCol.bSortable || !bAsc && !bDesc) {
          oCol.sSortingClass = oClasses.sSortableNone;
          oCol.sSortingClassJUI = "";
        } else if (bAsc && !bDesc) {
          oCol.sSortingClass = oClasses.sSortableAsc;
          oCol.sSortingClassJUI = oClasses.sSortJUIAscAllowed;
        } else if (!bAsc && bDesc) {
          oCol.sSortingClass = oClasses.sSortableDesc;
          oCol.sSortingClassJUI = oClasses.sSortJUIDescAllowed;
        } else {
          oCol.sSortingClass = oClasses.sSortable;
          oCol.sSortingClassJUI = oClasses.sSortJUI;
        }
      }
      function _fnAdjustColumnSizing(settings) {
        if (settings.oFeatures.bAutoWidth !== false) {
          var columns = settings.aoColumns;
          _fnCalculateColumnWidths(settings);
          for (var i2 = 0, iLen = columns.length; i2 < iLen; i2++) {
            columns[i2].nTh.style.width = columns[i2].sWidth;
          }
        }
        var scroll = settings.oScroll;
        if (scroll.sY !== "" || scroll.sX !== "") {
          _fnScrollDraw(settings);
        }
        _fnCallbackFire(settings, null, "column-sizing", [settings]);
      }
      function _fnVisibleToColumnIndex(oSettings, iMatch) {
        var aiVis = _fnGetColumns(oSettings, "bVisible");
        return typeof aiVis[iMatch] === "number" ? aiVis[iMatch] : null;
      }
      function _fnColumnIndexToVisible(oSettings, iMatch) {
        var aiVis = _fnGetColumns(oSettings, "bVisible");
        var iPos = $3.inArray(iMatch, aiVis);
        return iPos !== -1 ? iPos : null;
      }
      function _fnVisbleColumns(oSettings) {
        var vis = 0;
        $3.each(oSettings.aoColumns, function(i2, col) {
          if (col.bVisible && $3(col.nTh).css("display") !== "none") {
            vis++;
          }
        });
        return vis;
      }
      function _fnGetColumns(oSettings, sParam) {
        var a = [];
        $3.map(oSettings.aoColumns, function(val, i2) {
          if (val[sParam]) {
            a.push(i2);
          }
        });
        return a;
      }
      function _fnColumnTypes(settings) {
        var columns = settings.aoColumns;
        var data = settings.aoData;
        var types = DataTable2.ext.type.detect;
        var i2, ien, j, jen, k, ken;
        var col, cell, detectedType, cache;
        for (i2 = 0, ien = columns.length; i2 < ien; i2++) {
          col = columns[i2];
          cache = [];
          if (!col.sType && col._sManualType) {
            col.sType = col._sManualType;
          } else if (!col.sType) {
            for (j = 0, jen = types.length; j < jen; j++) {
              for (k = 0, ken = data.length; k < ken; k++) {
                if (cache[k] === undefined2) {
                  cache[k] = _fnGetCellData(settings, k, i2, "type");
                }
                detectedType = types[j](cache[k], settings);
                if (!detectedType && j !== types.length - 1) {
                  break;
                }
                if (detectedType === "html" && !_empty(cache[k])) {
                  break;
                }
              }
              if (detectedType) {
                col.sType = detectedType;
                break;
              }
            }
            if (!col.sType) {
              col.sType = "string";
            }
          }
        }
      }
      function _fnApplyColumnDefs(oSettings, aoColDefs, aoCols, fn) {
        var i2, iLen, j, jLen, k, kLen, def;
        var columns = oSettings.aoColumns;
        if (aoColDefs) {
          for (i2 = aoColDefs.length - 1; i2 >= 0; i2--) {
            def = aoColDefs[i2];
            var aTargets = def.target !== undefined2 ? def.target : def.targets !== undefined2 ? def.targets : def.aTargets;
            if (!Array.isArray(aTargets)) {
              aTargets = [aTargets];
            }
            for (j = 0, jLen = aTargets.length; j < jLen; j++) {
              if (typeof aTargets[j] === "number" && aTargets[j] >= 0) {
                while (columns.length <= aTargets[j]) {
                  _fnAddColumn(oSettings);
                }
                fn(aTargets[j], def);
              } else if (typeof aTargets[j] === "number" && aTargets[j] < 0) {
                fn(columns.length + aTargets[j], def);
              } else if (typeof aTargets[j] === "string") {
                for (k = 0, kLen = columns.length; k < kLen; k++) {
                  if (aTargets[j] == "_all" || $3(columns[k].nTh).hasClass(aTargets[j])) {
                    fn(k, def);
                  }
                }
              }
            }
          }
        }
        if (aoCols) {
          for (i2 = 0, iLen = aoCols.length; i2 < iLen; i2++) {
            fn(i2, aoCols[i2]);
          }
        }
      }
      function _fnAddData(oSettings, aDataIn, nTr, anTds) {
        var iRow = oSettings.aoData.length;
        var oData = $3.extend(true, {}, DataTable2.models.oRow, {
          src: nTr ? "dom" : "data",
          idx: iRow
        });
        oData._aData = aDataIn;
        oSettings.aoData.push(oData);
        var nTd, sThisType;
        var columns = oSettings.aoColumns;
        for (var i2 = 0, iLen = columns.length; i2 < iLen; i2++) {
          columns[i2].sType = null;
        }
        oSettings.aiDisplayMaster.push(iRow);
        var id = oSettings.rowIdFn(aDataIn);
        if (id !== undefined2) {
          oSettings.aIds[id] = oData;
        }
        if (nTr || !oSettings.oFeatures.bDeferRender) {
          _fnCreateTr(oSettings, iRow, nTr, anTds);
        }
        return iRow;
      }
      function _fnAddTr(settings, trs) {
        var row;
        if (!(trs instanceof $3)) {
          trs = $3(trs);
        }
        return trs.map(function(i2, el) {
          row = _fnGetRowElements(settings, el);
          return _fnAddData(settings, row.data, el, row.cells);
        });
      }
      function _fnNodeToDataIndex(oSettings, n) {
        return n._DT_RowIndex !== undefined2 ? n._DT_RowIndex : null;
      }
      function _fnNodeToColumnIndex(oSettings, iRow, n) {
        return $3.inArray(n, oSettings.aoData[iRow].anCells);
      }
      function _fnGetCellData(settings, rowIdx, colIdx, type) {
        if (type === "search") {
          type = "filter";
        } else if (type === "order") {
          type = "sort";
        }
        var draw = settings.iDraw;
        var col = settings.aoColumns[colIdx];
        var rowData = settings.aoData[rowIdx]._aData;
        var defaultContent = col.sDefaultContent;
        var cellData = col.fnGetData(rowData, type, {
          settings,
          row: rowIdx,
          col: colIdx
        });
        if (cellData === undefined2) {
          if (settings.iDrawError != draw && defaultContent === null) {
            _fnLog(settings, 0, "Requested unknown parameter " + (typeof col.mData == "function" ? "{function}" : "'" + col.mData + "'") + " for row " + rowIdx + ", column " + colIdx, 4);
            settings.iDrawError = draw;
          }
          return defaultContent;
        }
        if ((cellData === rowData || cellData === null) && defaultContent !== null && type !== undefined2) {
          cellData = defaultContent;
        } else if (typeof cellData === "function") {
          return cellData.call(rowData);
        }
        if (cellData === null && type === "display") {
          return "";
        }
        if (type === "filter") {
          var fomatters = DataTable2.ext.type.search;
          if (fomatters[col.sType]) {
            cellData = fomatters[col.sType](cellData);
          }
        }
        return cellData;
      }
      function _fnSetCellData(settings, rowIdx, colIdx, val) {
        var col = settings.aoColumns[colIdx];
        var rowData = settings.aoData[rowIdx]._aData;
        col.fnSetData(rowData, val, {
          settings,
          row: rowIdx,
          col: colIdx
        });
      }
      var __reArray = /\[.*?\]$/;
      var __reFn = /\(\)$/;
      function _fnSplitObjNotation(str) {
        return $3.map(str.match(/(\\.|[^\.])+/g) || [""], function(s) {
          return s.replace(/\\\./g, ".");
        });
      }
      var _fnGetObjectDataFn = DataTable2.util.get;
      var _fnSetObjectDataFn = DataTable2.util.set;
      function _fnGetDataMaster(settings) {
        return _pluck(settings.aoData, "_aData");
      }
      function _fnClearTable(settings) {
        settings.aoData.length = 0;
        settings.aiDisplayMaster.length = 0;
        settings.aiDisplay.length = 0;
        settings.aIds = {};
      }
      function _fnDeleteIndex(a, iTarget, splice) {
        var iTargetIndex = -1;
        for (var i2 = 0, iLen = a.length; i2 < iLen; i2++) {
          if (a[i2] == iTarget) {
            iTargetIndex = i2;
          } else if (a[i2] > iTarget) {
            a[i2]--;
          }
        }
        if (iTargetIndex != -1 && splice === undefined2) {
          a.splice(iTargetIndex, 1);
        }
      }
      function _fnInvalidate(settings, rowIdx, src, colIdx) {
        var row = settings.aoData[rowIdx];
        var i2, ien;
        var cellWrite = function(cell, col) {
          while (cell.childNodes.length) {
            cell.removeChild(cell.firstChild);
          }
          cell.innerHTML = _fnGetCellData(settings, rowIdx, col, "display");
        };
        if (src === "dom" || (!src || src === "auto") && row.src === "dom") {
          row._aData = _fnGetRowElements(
            settings,
            row,
            colIdx,
            colIdx === undefined2 ? undefined2 : row._aData
          ).data;
        } else {
          var cells = row.anCells;
          if (cells) {
            if (colIdx !== undefined2) {
              cellWrite(cells[colIdx], colIdx);
            } else {
              for (i2 = 0, ien = cells.length; i2 < ien; i2++) {
                cellWrite(cells[i2], i2);
              }
            }
          }
        }
        row._aSortData = null;
        row._aFilterData = null;
        var cols = settings.aoColumns;
        if (colIdx !== undefined2) {
          cols[colIdx].sType = null;
        } else {
          for (i2 = 0, ien = cols.length; i2 < ien; i2++) {
            cols[i2].sType = null;
          }
          _fnRowAttributes(settings, row);
        }
      }
      function _fnGetRowElements(settings, row, colIdx, d) {
        var tds = [], td = row.firstChild, name, col, o, i2 = 0, contents, columns = settings.aoColumns, objectRead = settings._rowReadObject;
        d = d !== undefined2 ? d : objectRead ? {} : [];
        var attr = function(str, td2) {
          if (typeof str === "string") {
            var idx = str.indexOf("@");
            if (idx !== -1) {
              var attr2 = str.substring(idx + 1);
              var setter = _fnSetObjectDataFn(str);
              setter(d, td2.getAttribute(attr2));
            }
          }
        };
        var cellProcess = function(cell) {
          if (colIdx === undefined2 || colIdx === i2) {
            col = columns[i2];
            contents = cell.innerHTML.trim();
            if (col && col._bAttrSrc) {
              var setter = _fnSetObjectDataFn(col.mData._);
              setter(d, contents);
              attr(col.mData.sort, cell);
              attr(col.mData.type, cell);
              attr(col.mData.filter, cell);
            } else {
              if (objectRead) {
                if (!col._setter) {
                  col._setter = _fnSetObjectDataFn(col.mData);
                }
                col._setter(d, contents);
              } else {
                d[i2] = contents;
              }
            }
          }
          i2++;
        };
        if (td) {
          while (td) {
            name = td.nodeName.toUpperCase();
            if (name == "TD" || name == "TH") {
              cellProcess(td);
              tds.push(td);
            }
            td = td.nextSibling;
          }
        } else {
          tds = row.anCells;
          for (var j = 0, jen = tds.length; j < jen; j++) {
            cellProcess(tds[j]);
          }
        }
        var rowNode = row.firstChild ? row : row.nTr;
        if (rowNode) {
          var id = rowNode.getAttribute("id");
          if (id) {
            _fnSetObjectDataFn(settings.rowId)(d, id);
          }
        }
        return {
          data: d,
          cells: tds
        };
      }
      function _fnCreateTr(oSettings, iRow, nTrIn, anTds) {
        var row = oSettings.aoData[iRow], rowData = row._aData, cells = [], nTr, nTd, oCol, i2, iLen, create;
        if (row.nTr === null) {
          nTr = nTrIn || document2.createElement("tr");
          row.nTr = nTr;
          row.anCells = cells;
          nTr._DT_RowIndex = iRow;
          _fnRowAttributes(oSettings, row);
          for (i2 = 0, iLen = oSettings.aoColumns.length; i2 < iLen; i2++) {
            oCol = oSettings.aoColumns[i2];
            create = nTrIn ? false : true;
            nTd = create ? document2.createElement(oCol.sCellType) : anTds[i2];
            if (!nTd) {
              _fnLog(oSettings, 0, "Incorrect column count", 18);
            }
            nTd._DT_CellIndex = {
              row: iRow,
              column: i2
            };
            cells.push(nTd);
            if (create || (oCol.mRender || oCol.mData !== i2) && (!$3.isPlainObject(oCol.mData) || oCol.mData._ !== i2 + ".display")) {
              nTd.innerHTML = _fnGetCellData(oSettings, iRow, i2, "display");
            }
            if (oCol.sClass) {
              nTd.className += " " + oCol.sClass;
            }
            if (oCol.bVisible && !nTrIn) {
              nTr.appendChild(nTd);
            } else if (!oCol.bVisible && nTrIn) {
              nTd.parentNode.removeChild(nTd);
            }
            if (oCol.fnCreatedCell) {
              oCol.fnCreatedCell.call(
                oSettings.oInstance,
                nTd,
                _fnGetCellData(oSettings, iRow, i2),
                rowData,
                iRow,
                i2
              );
            }
          }
          _fnCallbackFire(oSettings, "aoRowCreatedCallback", null, [nTr, rowData, iRow, cells]);
        }
      }
      function _fnRowAttributes(settings, row) {
        var tr = row.nTr;
        var data = row._aData;
        if (tr) {
          var id = settings.rowIdFn(data);
          if (id) {
            tr.id = id;
          }
          if (data.DT_RowClass) {
            var a = data.DT_RowClass.split(" ");
            row.__rowc = row.__rowc ? _unique(row.__rowc.concat(a)) : a;
            $3(tr).removeClass(row.__rowc.join(" ")).addClass(data.DT_RowClass);
          }
          if (data.DT_RowAttr) {
            $3(tr).attr(data.DT_RowAttr);
          }
          if (data.DT_RowData) {
            $3(tr).data(data.DT_RowData);
          }
        }
      }
      function _fnBuildHead(oSettings) {
        var i2, ien, cell, row, column;
        var thead = oSettings.nTHead;
        var tfoot = oSettings.nTFoot;
        var createHeader = $3("th, td", thead).length === 0;
        var classes = oSettings.oClasses;
        var columns = oSettings.aoColumns;
        if (createHeader) {
          row = $3("<tr/>").appendTo(thead);
        }
        for (i2 = 0, ien = columns.length; i2 < ien; i2++) {
          column = columns[i2];
          cell = $3(column.nTh).addClass(column.sClass);
          if (createHeader) {
            cell.appendTo(row);
          }
          if (oSettings.oFeatures.bSort) {
            cell.addClass(column.sSortingClass);
            if (column.bSortable !== false) {
              cell.attr("tabindex", oSettings.iTabIndex).attr("aria-controls", oSettings.sTableId);
              _fnSortAttachListener(oSettings, column.nTh, i2);
            }
          }
          if (column.sTitle != cell[0].innerHTML) {
            cell.html(column.sTitle);
          }
          _fnRenderer(oSettings, "header")(
            oSettings,
            cell,
            column,
            classes
          );
        }
        if (createHeader) {
          _fnDetectHeader(oSettings.aoHeader, thead);
        }
        $3(thead).children("tr").children("th, td").addClass(classes.sHeaderTH);
        $3(tfoot).children("tr").children("th, td").addClass(classes.sFooterTH);
        if (tfoot !== null) {
          var cells = oSettings.aoFooter[0];
          for (i2 = 0, ien = cells.length; i2 < ien; i2++) {
            column = columns[i2];
            if (column) {
              column.nTf = cells[i2].cell;
              if (column.sClass) {
                $3(column.nTf).addClass(column.sClass);
              }
            } else {
              _fnLog(oSettings, 0, "Incorrect column count", 18);
            }
          }
        }
      }
      function _fnDrawHead(oSettings, aoSource, bIncludeHidden) {
        var i2, iLen, j, jLen, k, kLen, n, nLocalTr;
        var aoLocal = [];
        var aApplied = [];
        var iColumns = oSettings.aoColumns.length;
        var iRowspan, iColspan;
        if (!aoSource) {
          return;
        }
        if (bIncludeHidden === undefined2) {
          bIncludeHidden = false;
        }
        for (i2 = 0, iLen = aoSource.length; i2 < iLen; i2++) {
          aoLocal[i2] = aoSource[i2].slice();
          aoLocal[i2].nTr = aoSource[i2].nTr;
          for (j = iColumns - 1; j >= 0; j--) {
            if (!oSettings.aoColumns[j].bVisible && !bIncludeHidden) {
              aoLocal[i2].splice(j, 1);
            }
          }
          aApplied.push([]);
        }
        for (i2 = 0, iLen = aoLocal.length; i2 < iLen; i2++) {
          nLocalTr = aoLocal[i2].nTr;
          if (nLocalTr) {
            while (n = nLocalTr.firstChild) {
              nLocalTr.removeChild(n);
            }
          }
          for (j = 0, jLen = aoLocal[i2].length; j < jLen; j++) {
            iRowspan = 1;
            iColspan = 1;
            if (aApplied[i2][j] === undefined2) {
              nLocalTr.appendChild(aoLocal[i2][j].cell);
              aApplied[i2][j] = 1;
              while (aoLocal[i2 + iRowspan] !== undefined2 && aoLocal[i2][j].cell == aoLocal[i2 + iRowspan][j].cell) {
                aApplied[i2 + iRowspan][j] = 1;
                iRowspan++;
              }
              while (aoLocal[i2][j + iColspan] !== undefined2 && aoLocal[i2][j].cell == aoLocal[i2][j + iColspan].cell) {
                for (k = 0; k < iRowspan; k++) {
                  aApplied[i2 + k][j + iColspan] = 1;
                }
                iColspan++;
              }
              $3(aoLocal[i2][j].cell).attr("rowspan", iRowspan).attr("colspan", iColspan);
            }
          }
        }
      }
      function _fnDraw(oSettings, ajaxComplete) {
        _fnStart(oSettings);
        var aPreDraw = _fnCallbackFire(oSettings, "aoPreDrawCallback", "preDraw", [oSettings]);
        if ($3.inArray(false, aPreDraw) !== -1) {
          _fnProcessingDisplay(oSettings, false);
          return;
        }
        var anRows = [];
        var iRowCount = 0;
        var asStripeClasses = oSettings.asStripeClasses;
        var iStripes = asStripeClasses.length;
        var oLang = oSettings.oLanguage;
        var bServerSide = _fnDataSource(oSettings) == "ssp";
        var aiDisplay = oSettings.aiDisplay;
        var iDisplayStart = oSettings._iDisplayStart;
        var iDisplayEnd = oSettings.fnDisplayEnd();
        oSettings.bDrawing = true;
        if (oSettings.bDeferLoading) {
          oSettings.bDeferLoading = false;
          oSettings.iDraw++;
          _fnProcessingDisplay(oSettings, false);
        } else if (!bServerSide) {
          oSettings.iDraw++;
        } else if (!oSettings.bDestroying && !ajaxComplete) {
          _fnAjaxUpdate(oSettings);
          return;
        }
        if (aiDisplay.length !== 0) {
          var iStart = bServerSide ? 0 : iDisplayStart;
          var iEnd = bServerSide ? oSettings.aoData.length : iDisplayEnd;
          for (var j = iStart; j < iEnd; j++) {
            var iDataIndex = aiDisplay[j];
            var aoData = oSettings.aoData[iDataIndex];
            if (aoData.nTr === null) {
              _fnCreateTr(oSettings, iDataIndex);
            }
            var nRow = aoData.nTr;
            if (iStripes !== 0) {
              var sStripe = asStripeClasses[iRowCount % iStripes];
              if (aoData._sRowStripe != sStripe) {
                $3(nRow).removeClass(aoData._sRowStripe).addClass(sStripe);
                aoData._sRowStripe = sStripe;
              }
            }
            _fnCallbackFire(
              oSettings,
              "aoRowCallback",
              null,
              [nRow, aoData._aData, iRowCount, j, iDataIndex]
            );
            anRows.push(nRow);
            iRowCount++;
          }
        } else {
          var sZero = oLang.sZeroRecords;
          if (oSettings.iDraw == 1 && _fnDataSource(oSettings) == "ajax") {
            sZero = oLang.sLoadingRecords;
          } else if (oLang.sEmptyTable && oSettings.fnRecordsTotal() === 0) {
            sZero = oLang.sEmptyTable;
          }
          anRows[0] = $3("<tr/>", { "class": iStripes ? asStripeClasses[0] : "" }).append($3("<td />", {
            "valign": "top",
            "colSpan": _fnVisbleColumns(oSettings),
            "class": oSettings.oClasses.sRowEmpty
          }).html(sZero))[0];
        }
        _fnCallbackFire(oSettings, "aoHeaderCallback", "header", [
          $3(oSettings.nTHead).children("tr")[0],
          _fnGetDataMaster(oSettings),
          iDisplayStart,
          iDisplayEnd,
          aiDisplay
        ]);
        _fnCallbackFire(oSettings, "aoFooterCallback", "footer", [
          $3(oSettings.nTFoot).children("tr")[0],
          _fnGetDataMaster(oSettings),
          iDisplayStart,
          iDisplayEnd,
          aiDisplay
        ]);
        var body = $3(oSettings.nTBody);
        body.children().detach();
        body.append($3(anRows));
        _fnCallbackFire(oSettings, "aoDrawCallback", "draw", [oSettings]);
        oSettings.bSorted = false;
        oSettings.bFiltered = false;
        oSettings.bDrawing = false;
      }
      function _fnReDraw(settings, holdPosition) {
        var features = settings.oFeatures, sort = features.bSort, filter = features.bFilter;
        if (sort) {
          _fnSort(settings);
        }
        if (filter) {
          _fnFilterComplete(settings, settings.oPreviousSearch);
        } else {
          settings.aiDisplay = settings.aiDisplayMaster.slice();
        }
        if (holdPosition !== true) {
          settings._iDisplayStart = 0;
        }
        settings._drawHold = holdPosition;
        _fnDraw(settings);
        settings._drawHold = false;
      }
      function _fnAddOptionsHtml(oSettings) {
        var classes = oSettings.oClasses;
        var table = $3(oSettings.nTable);
        var holding = $3("<div/>").insertBefore(table);
        var features = oSettings.oFeatures;
        var insert = $3("<div/>", {
          id: oSettings.sTableId + "_wrapper",
          "class": classes.sWrapper + (oSettings.nTFoot ? "" : " " + classes.sNoFooter)
        });
        oSettings.nHolding = holding[0];
        oSettings.nTableWrapper = insert[0];
        oSettings.nTableReinsertBefore = oSettings.nTable.nextSibling;
        var aDom = oSettings.sDom.split("");
        var featureNode, cOption, nNewNode, cNext, sAttr, j;
        for (var i2 = 0; i2 < aDom.length; i2++) {
          featureNode = null;
          cOption = aDom[i2];
          if (cOption == "<") {
            nNewNode = $3("<div/>")[0];
            cNext = aDom[i2 + 1];
            if (cNext == "'" || cNext == '"') {
              sAttr = "";
              j = 2;
              while (aDom[i2 + j] != cNext) {
                sAttr += aDom[i2 + j];
                j++;
              }
              if (sAttr == "H") {
                sAttr = classes.sJUIHeader;
              } else if (sAttr == "F") {
                sAttr = classes.sJUIFooter;
              }
              if (sAttr.indexOf(".") != -1) {
                var aSplit = sAttr.split(".");
                nNewNode.id = aSplit[0].substr(1, aSplit[0].length - 1);
                nNewNode.className = aSplit[1];
              } else if (sAttr.charAt(0) == "#") {
                nNewNode.id = sAttr.substr(1, sAttr.length - 1);
              } else {
                nNewNode.className = sAttr;
              }
              i2 += j;
            }
            insert.append(nNewNode);
            insert = $3(nNewNode);
          } else if (cOption == ">") {
            insert = insert.parent();
          } else if (cOption == "l" && features.bPaginate && features.bLengthChange) {
            featureNode = _fnFeatureHtmlLength(oSettings);
          } else if (cOption == "f" && features.bFilter) {
            featureNode = _fnFeatureHtmlFilter(oSettings);
          } else if (cOption == "r" && features.bProcessing) {
            featureNode = _fnFeatureHtmlProcessing(oSettings);
          } else if (cOption == "t") {
            featureNode = _fnFeatureHtmlTable(oSettings);
          } else if (cOption == "i" && features.bInfo) {
            featureNode = _fnFeatureHtmlInfo(oSettings);
          } else if (cOption == "p" && features.bPaginate) {
            featureNode = _fnFeatureHtmlPaginate(oSettings);
          } else if (DataTable2.ext.feature.length !== 0) {
            var aoFeatures = DataTable2.ext.feature;
            for (var k = 0, kLen = aoFeatures.length; k < kLen; k++) {
              if (cOption == aoFeatures[k].cFeature) {
                featureNode = aoFeatures[k].fnInit(oSettings);
                break;
              }
            }
          }
          if (featureNode) {
            var aanFeatures = oSettings.aanFeatures;
            if (!aanFeatures[cOption]) {
              aanFeatures[cOption] = [];
            }
            aanFeatures[cOption].push(featureNode);
            insert.append(featureNode);
          }
        }
        holding.replaceWith(insert);
        oSettings.nHolding = null;
      }
      function _fnDetectHeader(aLayout, nThead) {
        var nTrs = $3(nThead).children("tr");
        var nTr, nCell;
        var i2, k, l, iLen, jLen, iColShifted, iColumn, iColspan, iRowspan;
        var bUnique;
        var fnShiftCol = function(a, i3, j) {
          var k2 = a[i3];
          while (k2[j]) {
            j++;
          }
          return j;
        };
        aLayout.splice(0, aLayout.length);
        for (i2 = 0, iLen = nTrs.length; i2 < iLen; i2++) {
          aLayout.push([]);
        }
        for (i2 = 0, iLen = nTrs.length; i2 < iLen; i2++) {
          nTr = nTrs[i2];
          iColumn = 0;
          nCell = nTr.firstChild;
          while (nCell) {
            if (nCell.nodeName.toUpperCase() == "TD" || nCell.nodeName.toUpperCase() == "TH") {
              iColspan = nCell.getAttribute("colspan") * 1;
              iRowspan = nCell.getAttribute("rowspan") * 1;
              iColspan = !iColspan || iColspan === 0 || iColspan === 1 ? 1 : iColspan;
              iRowspan = !iRowspan || iRowspan === 0 || iRowspan === 1 ? 1 : iRowspan;
              iColShifted = fnShiftCol(aLayout, i2, iColumn);
              bUnique = iColspan === 1 ? true : false;
              for (l = 0; l < iColspan; l++) {
                for (k = 0; k < iRowspan; k++) {
                  aLayout[i2 + k][iColShifted + l] = {
                    "cell": nCell,
                    "unique": bUnique
                  };
                  aLayout[i2 + k].nTr = nTr;
                }
              }
            }
            nCell = nCell.nextSibling;
          }
        }
      }
      function _fnGetUniqueThs(oSettings, nHeader, aLayout) {
        var aReturn = [];
        if (!aLayout) {
          aLayout = oSettings.aoHeader;
          if (nHeader) {
            aLayout = [];
            _fnDetectHeader(aLayout, nHeader);
          }
        }
        for (var i2 = 0, iLen = aLayout.length; i2 < iLen; i2++) {
          for (var j = 0, jLen = aLayout[i2].length; j < jLen; j++) {
            if (aLayout[i2][j].unique && (!aReturn[j] || !oSettings.bSortCellsTop)) {
              aReturn[j] = aLayout[i2][j].cell;
            }
          }
        }
        return aReturn;
      }
      function _fnStart(oSettings) {
        var bServerSide = _fnDataSource(oSettings) == "ssp";
        var iInitDisplayStart = oSettings.iInitDisplayStart;
        if (iInitDisplayStart !== undefined2 && iInitDisplayStart !== -1) {
          oSettings._iDisplayStart = bServerSide ? iInitDisplayStart : iInitDisplayStart >= oSettings.fnRecordsDisplay() ? 0 : iInitDisplayStart;
          oSettings.iInitDisplayStart = -1;
        }
      }
      function _fnBuildAjax(oSettings, data, fn) {
        _fnCallbackFire(oSettings, "aoServerParams", "serverParams", [data]);
        if (data && Array.isArray(data)) {
          var tmp = {};
          var rbracket = /(.*?)\[\]$/;
          $3.each(data, function(key, val) {
            var match = val.name.match(rbracket);
            if (match) {
              var name = match[0];
              if (!tmp[name]) {
                tmp[name] = [];
              }
              tmp[name].push(val.value);
            } else {
              tmp[val.name] = val.value;
            }
          });
          data = tmp;
        }
        var ajaxData;
        var ajax2 = oSettings.ajax;
        var instance = oSettings.oInstance;
        var callback = function(json) {
          var status = oSettings.jqXHR ? oSettings.jqXHR.status : null;
          if (json === null || typeof status === "number" && status == 204) {
            json = {};
            _fnAjaxDataSrc(oSettings, json, []);
          }
          var error = json.error || json.sError;
          if (error) {
            _fnLog(oSettings, 0, error);
          }
          oSettings.json = json;
          _fnCallbackFire(oSettings, null, "xhr", [oSettings, json, oSettings.jqXHR]);
          fn(json);
        };
        if ($3.isPlainObject(ajax2) && ajax2.data) {
          ajaxData = ajax2.data;
          var newData = typeof ajaxData === "function" ? ajaxData(data, oSettings) : ajaxData;
          data = typeof ajaxData === "function" && newData ? newData : $3.extend(true, data, newData);
          delete ajax2.data;
        }
        var baseAjax = {
          "data": data,
          "success": callback,
          "dataType": "json",
          "cache": false,
          "type": oSettings.sServerMethod,
          "error": function(xhr, error, thrown) {
            var ret = _fnCallbackFire(oSettings, null, "xhr", [oSettings, null, oSettings.jqXHR]);
            if ($3.inArray(true, ret) === -1) {
              if (error == "parsererror") {
                _fnLog(oSettings, 0, "Invalid JSON response", 1);
              } else if (xhr.readyState === 4) {
                _fnLog(oSettings, 0, "Ajax error", 7);
              }
            }
            _fnProcessingDisplay(oSettings, false);
          }
        };
        oSettings.oAjaxData = data;
        _fnCallbackFire(oSettings, null, "preXhr", [oSettings, data]);
        if (oSettings.fnServerData) {
          oSettings.fnServerData.call(
            instance,
            oSettings.sAjaxSource,
            $3.map(data, function(val, key) {
              return { name: key, value: val };
            }),
            callback,
            oSettings
          );
        } else if (oSettings.sAjaxSource || typeof ajax2 === "string") {
          oSettings.jqXHR = $3.ajax($3.extend(baseAjax, {
            url: ajax2 || oSettings.sAjaxSource
          }));
        } else if (typeof ajax2 === "function") {
          oSettings.jqXHR = ajax2.call(instance, data, callback, oSettings);
        } else {
          oSettings.jqXHR = $3.ajax($3.extend(baseAjax, ajax2));
          ajax2.data = ajaxData;
        }
      }
      function _fnAjaxUpdate(settings) {
        settings.iDraw++;
        _fnProcessingDisplay(settings, true);
        var drawHold = settings._drawHold;
        _fnBuildAjax(
          settings,
          _fnAjaxParameters(settings),
          function(json) {
            settings._drawHold = drawHold;
            _fnAjaxUpdateDraw(settings, json);
            settings._drawHold = false;
          }
        );
      }
      function _fnAjaxParameters(settings) {
        var columns = settings.aoColumns, columnCount = columns.length, features = settings.oFeatures, preSearch = settings.oPreviousSearch, preColSearch = settings.aoPreSearchCols, i2, data = [], dataProp, column, columnSearch, sort = _fnSortFlatten(settings), displayStart = settings._iDisplayStart, displayLength = features.bPaginate !== false ? settings._iDisplayLength : -1;
        var param = function(name, value) {
          data.push({ "name": name, "value": value });
        };
        param("sEcho", settings.iDraw);
        param("iColumns", columnCount);
        param("sColumns", _pluck(columns, "sName").join(","));
        param("iDisplayStart", displayStart);
        param("iDisplayLength", displayLength);
        var d = {
          draw: settings.iDraw,
          columns: [],
          order: [],
          start: displayStart,
          length: displayLength,
          search: {
            value: preSearch.sSearch,
            regex: preSearch.bRegex
          }
        };
        for (i2 = 0; i2 < columnCount; i2++) {
          column = columns[i2];
          columnSearch = preColSearch[i2];
          dataProp = typeof column.mData == "function" ? "function" : column.mData;
          d.columns.push({
            data: dataProp,
            name: column.sName,
            searchable: column.bSearchable,
            orderable: column.bSortable,
            search: {
              value: columnSearch.sSearch,
              regex: columnSearch.bRegex
            }
          });
          param("mDataProp_" + i2, dataProp);
          if (features.bFilter) {
            param("sSearch_" + i2, columnSearch.sSearch);
            param("bRegex_" + i2, columnSearch.bRegex);
            param("bSearchable_" + i2, column.bSearchable);
          }
          if (features.bSort) {
            param("bSortable_" + i2, column.bSortable);
          }
        }
        if (features.bFilter) {
          param("sSearch", preSearch.sSearch);
          param("bRegex", preSearch.bRegex);
        }
        if (features.bSort) {
          $3.each(sort, function(i3, val) {
            d.order.push({ column: val.col, dir: val.dir });
            param("iSortCol_" + i3, val.col);
            param("sSortDir_" + i3, val.dir);
          });
          param("iSortingCols", sort.length);
        }
        var legacy = DataTable2.ext.legacy.ajax;
        if (legacy === null) {
          return settings.sAjaxSource ? data : d;
        }
        return legacy ? data : d;
      }
      function _fnAjaxUpdateDraw(settings, json) {
        var compat = function(old, modern) {
          return json[old] !== undefined2 ? json[old] : json[modern];
        };
        var data = _fnAjaxDataSrc(settings, json);
        var draw = compat("sEcho", "draw");
        var recordsTotal = compat("iTotalRecords", "recordsTotal");
        var recordsFiltered = compat("iTotalDisplayRecords", "recordsFiltered");
        if (draw !== undefined2) {
          if (draw * 1 < settings.iDraw) {
            return;
          }
          settings.iDraw = draw * 1;
        }
        if (!data) {
          data = [];
        }
        _fnClearTable(settings);
        settings._iRecordsTotal = parseInt(recordsTotal, 10);
        settings._iRecordsDisplay = parseInt(recordsFiltered, 10);
        for (var i2 = 0, ien = data.length; i2 < ien; i2++) {
          _fnAddData(settings, data[i2]);
        }
        settings.aiDisplay = settings.aiDisplayMaster.slice();
        _fnDraw(settings, true);
        if (!settings._bInitComplete) {
          _fnInitComplete(settings, json);
        }
        _fnProcessingDisplay(settings, false);
      }
      function _fnAjaxDataSrc(oSettings, json, write) {
        var dataSrc = $3.isPlainObject(oSettings.ajax) && oSettings.ajax.dataSrc !== undefined2 ? oSettings.ajax.dataSrc : oSettings.sAjaxDataProp;
        if (!write) {
          if (dataSrc === "data") {
            return json.aaData || json[dataSrc];
          }
          return dataSrc !== "" ? _fnGetObjectDataFn(dataSrc)(json) : json;
        }
        _fnSetObjectDataFn(dataSrc)(json, write);
      }
      function _fnFeatureHtmlFilter(settings) {
        var classes = settings.oClasses;
        var tableId = settings.sTableId;
        var language = settings.oLanguage;
        var previousSearch = settings.oPreviousSearch;
        var features = settings.aanFeatures;
        var input = '<input type="search" class="' + classes.sFilterInput + '"/>';
        var str = language.sSearch;
        str = str.match(/_INPUT_/) ? str.replace("_INPUT_", input) : str + input;
        var filter = $3("<div/>", {
          "id": !features.f ? tableId + "_filter" : null,
          "class": classes.sFilter
        }).append($3("<label/>").append(str));
        var searchFn = function(event) {
          var n = features.f;
          var val = !this.value ? "" : this.value;
          if (previousSearch["return"] && event.key !== "Enter") {
            return;
          }
          if (val != previousSearch.sSearch) {
            _fnFilterComplete(settings, {
              "sSearch": val,
              "bRegex": previousSearch.bRegex,
              "bSmart": previousSearch.bSmart,
              "bCaseInsensitive": previousSearch.bCaseInsensitive,
              "return": previousSearch["return"]
            });
            settings._iDisplayStart = 0;
            _fnDraw(settings);
          }
        };
        var searchDelay = settings.searchDelay !== null ? settings.searchDelay : _fnDataSource(settings) === "ssp" ? 400 : 0;
        var jqFilter = $3("input", filter).val(previousSearch.sSearch).attr("placeholder", language.sSearchPlaceholder).on(
          "keyup.DT search.DT input.DT paste.DT cut.DT",
          searchDelay ? _fnThrottle(searchFn, searchDelay) : searchFn
        ).on("mouseup.DT", function(e) {
          setTimeout(function() {
            searchFn.call(jqFilter[0], e);
          }, 10);
        }).on("keypress.DT", function(e) {
          if (e.keyCode == 13) {
            return false;
          }
        }).attr("aria-controls", tableId);
        $3(settings.nTable).on("search.dt.DT", function(ev, s) {
          if (settings === s) {
            try {
              if (jqFilter[0] !== document2.activeElement) {
                jqFilter.val(previousSearch.sSearch);
              }
            } catch (e) {
            }
          }
        });
        return filter[0];
      }
      function _fnFilterComplete(oSettings, oInput, iForce) {
        var oPrevSearch = oSettings.oPreviousSearch;
        var aoPrevSearch = oSettings.aoPreSearchCols;
        var fnSaveFilter = function(oFilter) {
          oPrevSearch.sSearch = oFilter.sSearch;
          oPrevSearch.bRegex = oFilter.bRegex;
          oPrevSearch.bSmart = oFilter.bSmart;
          oPrevSearch.bCaseInsensitive = oFilter.bCaseInsensitive;
          oPrevSearch["return"] = oFilter["return"];
        };
        var fnRegex = function(o) {
          return o.bEscapeRegex !== undefined2 ? !o.bEscapeRegex : o.bRegex;
        };
        _fnColumnTypes(oSettings);
        if (_fnDataSource(oSettings) != "ssp") {
          _fnFilter(oSettings, oInput.sSearch, iForce, fnRegex(oInput), oInput.bSmart, oInput.bCaseInsensitive);
          fnSaveFilter(oInput);
          for (var i2 = 0; i2 < aoPrevSearch.length; i2++) {
            _fnFilterColumn(
              oSettings,
              aoPrevSearch[i2].sSearch,
              i2,
              fnRegex(aoPrevSearch[i2]),
              aoPrevSearch[i2].bSmart,
              aoPrevSearch[i2].bCaseInsensitive
            );
          }
          _fnFilterCustom(oSettings);
        } else {
          fnSaveFilter(oInput);
        }
        oSettings.bFiltered = true;
        _fnCallbackFire(oSettings, null, "search", [oSettings]);
      }
      function _fnFilterCustom(settings) {
        var filters = DataTable2.ext.search;
        var displayRows = settings.aiDisplay;
        var row, rowIdx;
        for (var i2 = 0, ien = filters.length; i2 < ien; i2++) {
          var rows = [];
          for (var j = 0, jen = displayRows.length; j < jen; j++) {
            rowIdx = displayRows[j];
            row = settings.aoData[rowIdx];
            if (filters[i2](settings, row._aFilterData, rowIdx, row._aData, j)) {
              rows.push(rowIdx);
            }
          }
          displayRows.length = 0;
          $3.merge(displayRows, rows);
        }
      }
      function _fnFilterColumn(settings, searchStr, colIdx, regex, smart, caseInsensitive) {
        if (searchStr === "") {
          return;
        }
        var data;
        var out = [];
        var display = settings.aiDisplay;
        var rpSearch = _fnFilterCreateSearch(searchStr, regex, smart, caseInsensitive);
        for (var i2 = 0; i2 < display.length; i2++) {
          data = settings.aoData[display[i2]]._aFilterData[colIdx];
          if (rpSearch.test(data)) {
            out.push(display[i2]);
          }
        }
        settings.aiDisplay = out;
      }
      function _fnFilter(settings, input, force, regex, smart, caseInsensitive) {
        var rpSearch = _fnFilterCreateSearch(input, regex, smart, caseInsensitive);
        var prevSearch = settings.oPreviousSearch.sSearch;
        var displayMaster = settings.aiDisplayMaster;
        var display, invalidated, i2;
        var filtered = [];
        if (DataTable2.ext.search.length !== 0) {
          force = true;
        }
        invalidated = _fnFilterData(settings);
        if (input.length <= 0) {
          settings.aiDisplay = displayMaster.slice();
        } else {
          if (invalidated || force || regex || prevSearch.length > input.length || input.indexOf(prevSearch) !== 0 || settings.bSorted) {
            settings.aiDisplay = displayMaster.slice();
          }
          display = settings.aiDisplay;
          for (i2 = 0; i2 < display.length; i2++) {
            if (rpSearch.test(settings.aoData[display[i2]]._sFilterRow)) {
              filtered.push(display[i2]);
            }
          }
          settings.aiDisplay = filtered;
        }
      }
      function _fnFilterCreateSearch(search, regex, smart, caseInsensitive) {
        search = regex ? search : _fnEscapeRegex(search);
        if (smart) {
          var a = $3.map(search.match(/["\u201C][^"\u201D]+["\u201D]|[^ ]+/g) || [""], function(word) {
            if (word.charAt(0) === '"') {
              var m2 = word.match(/^"(.*)"$/);
              word = m2 ? m2[1] : word;
            } else if (word.charAt(0) === "\u201C") {
              var m2 = word.match(/^\u201C(.*)\u201D$/);
              word = m2 ? m2[1] : word;
            }
            return word.replace('"', "");
          });
          search = "^(?=.*?" + a.join(")(?=.*?") + ").*$";
        }
        return new RegExp(search, caseInsensitive ? "i" : "");
      }
      var _fnEscapeRegex = DataTable2.util.escapeRegex;
      var __filter_div = $3("<div>")[0];
      var __filter_div_textContent = __filter_div.textContent !== undefined2;
      function _fnFilterData(settings) {
        var columns = settings.aoColumns;
        var column;
        var i2, j, ien, jen, filterData, cellData, row;
        var wasInvalidated = false;
        for (i2 = 0, ien = settings.aoData.length; i2 < ien; i2++) {
          row = settings.aoData[i2];
          if (!row._aFilterData) {
            filterData = [];
            for (j = 0, jen = columns.length; j < jen; j++) {
              column = columns[j];
              if (column.bSearchable) {
                cellData = _fnGetCellData(settings, i2, j, "filter");
                if (cellData === null) {
                  cellData = "";
                }
                if (typeof cellData !== "string" && cellData.toString) {
                  cellData = cellData.toString();
                }
              } else {
                cellData = "";
              }
              if (cellData.indexOf && cellData.indexOf("&") !== -1) {
                __filter_div.innerHTML = cellData;
                cellData = __filter_div_textContent ? __filter_div.textContent : __filter_div.innerText;
              }
              if (cellData.replace) {
                cellData = cellData.replace(/[\r\n\u2028]/g, "");
              }
              filterData.push(cellData);
            }
            row._aFilterData = filterData;
            row._sFilterRow = filterData.join("  ");
            wasInvalidated = true;
          }
        }
        return wasInvalidated;
      }
      function _fnSearchToCamel(obj) {
        return {
          search: obj.sSearch,
          smart: obj.bSmart,
          regex: obj.bRegex,
          caseInsensitive: obj.bCaseInsensitive
        };
      }
      function _fnSearchToHung(obj) {
        return {
          sSearch: obj.search,
          bSmart: obj.smart,
          bRegex: obj.regex,
          bCaseInsensitive: obj.caseInsensitive
        };
      }
      function _fnFeatureHtmlInfo(settings) {
        var tid = settings.sTableId, nodes = settings.aanFeatures.i, n = $3("<div/>", {
          "class": settings.oClasses.sInfo,
          "id": !nodes ? tid + "_info" : null
        });
        if (!nodes) {
          settings.aoDrawCallback.push({
            "fn": _fnUpdateInfo,
            "sName": "information"
          });
          n.attr("role", "status").attr("aria-live", "polite");
          $3(settings.nTable).attr("aria-describedby", tid + "_info");
        }
        return n[0];
      }
      function _fnUpdateInfo(settings) {
        var nodes = settings.aanFeatures.i;
        if (nodes.length === 0) {
          return;
        }
        var lang = settings.oLanguage, start2 = settings._iDisplayStart + 1, end = settings.fnDisplayEnd(), max = settings.fnRecordsTotal(), total = settings.fnRecordsDisplay(), out = total ? lang.sInfo : lang.sInfoEmpty;
        if (total !== max) {
          out += " " + lang.sInfoFiltered;
        }
        out += lang.sInfoPostFix;
        out = _fnInfoMacros(settings, out);
        var callback = lang.fnInfoCallback;
        if (callback !== null) {
          out = callback.call(
            settings.oInstance,
            settings,
            start2,
            end,
            max,
            total,
            out
          );
        }
        $3(nodes).html(out);
      }
      function _fnInfoMacros(settings, str) {
        var formatter = settings.fnFormatNumber, start2 = settings._iDisplayStart + 1, len = settings._iDisplayLength, vis = settings.fnRecordsDisplay(), all = len === -1;
        return str.replace(/_START_/g, formatter.call(settings, start2)).replace(/_END_/g, formatter.call(settings, settings.fnDisplayEnd())).replace(/_MAX_/g, formatter.call(settings, settings.fnRecordsTotal())).replace(/_TOTAL_/g, formatter.call(settings, vis)).replace(/_PAGE_/g, formatter.call(settings, all ? 1 : Math.ceil(start2 / len))).replace(/_PAGES_/g, formatter.call(settings, all ? 1 : Math.ceil(vis / len)));
      }
      function _fnInitialise(settings) {
        var i2, iLen, iAjaxStart = settings.iInitDisplayStart;
        var columns = settings.aoColumns, column;
        var features = settings.oFeatures;
        var deferLoading = settings.bDeferLoading;
        if (!settings.bInitialised) {
          setTimeout(function() {
            _fnInitialise(settings);
          }, 200);
          return;
        }
        _fnAddOptionsHtml(settings);
        _fnBuildHead(settings);
        _fnDrawHead(settings, settings.aoHeader);
        _fnDrawHead(settings, settings.aoFooter);
        _fnProcessingDisplay(settings, true);
        if (features.bAutoWidth) {
          _fnCalculateColumnWidths(settings);
        }
        for (i2 = 0, iLen = columns.length; i2 < iLen; i2++) {
          column = columns[i2];
          if (column.sWidth) {
            column.nTh.style.width = _fnStringToCss(column.sWidth);
          }
        }
        _fnCallbackFire(settings, null, "preInit", [settings]);
        _fnReDraw(settings);
        var dataSrc = _fnDataSource(settings);
        if (dataSrc != "ssp" || deferLoading) {
          if (dataSrc == "ajax") {
            _fnBuildAjax(settings, [], function(json) {
              var aData = _fnAjaxDataSrc(settings, json);
              for (i2 = 0; i2 < aData.length; i2++) {
                _fnAddData(settings, aData[i2]);
              }
              settings.iInitDisplayStart = iAjaxStart;
              _fnReDraw(settings);
              _fnProcessingDisplay(settings, false);
              _fnInitComplete(settings, json);
            }, settings);
          } else {
            _fnProcessingDisplay(settings, false);
            _fnInitComplete(settings);
          }
        }
      }
      function _fnInitComplete(settings, json) {
        settings._bInitComplete = true;
        if (json || settings.oInit.aaData) {
          _fnAdjustColumnSizing(settings);
        }
        _fnCallbackFire(settings, null, "plugin-init", [settings, json]);
        _fnCallbackFire(settings, "aoInitComplete", "init", [settings, json]);
      }
      function _fnLengthChange(settings, val) {
        var len = parseInt(val, 10);
        settings._iDisplayLength = len;
        _fnLengthOverflow(settings);
        _fnCallbackFire(settings, null, "length", [settings, len]);
      }
      function _fnFeatureHtmlLength(settings) {
        var classes = settings.oClasses, tableId = settings.sTableId, menu = settings.aLengthMenu, d2 = Array.isArray(menu[0]), lengths = d2 ? menu[0] : menu, language = d2 ? menu[1] : menu;
        var select = $3("<select/>", {
          "name": tableId + "_length",
          "aria-controls": tableId,
          "class": classes.sLengthSelect
        });
        for (var i2 = 0, ien = lengths.length; i2 < ien; i2++) {
          select[0][i2] = new Option(
            typeof language[i2] === "number" ? settings.fnFormatNumber(language[i2]) : language[i2],
            lengths[i2]
          );
        }
        var div = $3("<div><label/></div>").addClass(classes.sLength);
        if (!settings.aanFeatures.l) {
          div[0].id = tableId + "_length";
        }
        div.children().append(
          settings.oLanguage.sLengthMenu.replace("_MENU_", select[0].outerHTML)
        );
        $3("select", div).val(settings._iDisplayLength).on("change.DT", function(e) {
          _fnLengthChange(settings, $3(this).val());
          _fnDraw(settings);
        });
        $3(settings.nTable).on("length.dt.DT", function(e, s, len) {
          if (settings === s) {
            $3("select", div).val(len);
          }
        });
        return div[0];
      }
      function _fnFeatureHtmlPaginate(settings) {
        var type = settings.sPaginationType, plugin = DataTable2.ext.pager[type], modern = typeof plugin === "function", redraw = function(settings2) {
          _fnDraw(settings2);
        }, node = $3("<div/>").addClass(settings.oClasses.sPaging + type)[0], features = settings.aanFeatures;
        if (!modern) {
          plugin.fnInit(settings, node, redraw);
        }
        if (!features.p) {
          node.id = settings.sTableId + "_paginate";
          settings.aoDrawCallback.push({
            "fn": function(settings2) {
              if (modern) {
                var start2 = settings2._iDisplayStart, len = settings2._iDisplayLength, visRecords = settings2.fnRecordsDisplay(), all = len === -1, page = all ? 0 : Math.ceil(start2 / len), pages = all ? 1 : Math.ceil(visRecords / len), buttons = plugin(page, pages), i2, ien;
                for (i2 = 0, ien = features.p.length; i2 < ien; i2++) {
                  _fnRenderer(settings2, "pageButton")(
                    settings2,
                    features.p[i2],
                    i2,
                    buttons,
                    page,
                    pages
                  );
                }
              } else {
                plugin.fnUpdate(settings2, redraw);
              }
            },
            "sName": "pagination"
          });
        }
        return node;
      }
      function _fnPageChange(settings, action, redraw) {
        var start2 = settings._iDisplayStart, len = settings._iDisplayLength, records = settings.fnRecordsDisplay();
        if (records === 0 || len === -1) {
          start2 = 0;
        } else if (typeof action === "number") {
          start2 = action * len;
          if (start2 > records) {
            start2 = 0;
          }
        } else if (action == "first") {
          start2 = 0;
        } else if (action == "previous") {
          start2 = len >= 0 ? start2 - len : 0;
          if (start2 < 0) {
            start2 = 0;
          }
        } else if (action == "next") {
          if (start2 + len < records) {
            start2 += len;
          }
        } else if (action == "last") {
          start2 = Math.floor((records - 1) / len) * len;
        } else {
          _fnLog(settings, 0, "Unknown paging action: " + action, 5);
        }
        var changed = settings._iDisplayStart !== start2;
        settings._iDisplayStart = start2;
        if (changed) {
          _fnCallbackFire(settings, null, "page", [settings]);
          if (redraw) {
            _fnDraw(settings);
          }
        } else {
          _fnCallbackFire(settings, null, "page-nc", [settings]);
        }
        return changed;
      }
      function _fnFeatureHtmlProcessing(settings) {
        return $3("<div/>", {
          "id": !settings.aanFeatures.r ? settings.sTableId + "_processing" : null,
          "class": settings.oClasses.sProcessing,
          "role": "status"
        }).html(settings.oLanguage.sProcessing).append("<div><div></div><div></div><div></div><div></div></div>").insertBefore(settings.nTable)[0];
      }
      function _fnProcessingDisplay(settings, show) {
        if (settings.oFeatures.bProcessing) {
          $3(settings.aanFeatures.r).css("display", show ? "block" : "none");
        }
        _fnCallbackFire(settings, null, "processing", [settings, show]);
      }
      function _fnFeatureHtmlTable(settings) {
        var table = $3(settings.nTable);
        var scroll = settings.oScroll;
        if (scroll.sX === "" && scroll.sY === "") {
          return settings.nTable;
        }
        var scrollX = scroll.sX;
        var scrollY = scroll.sY;
        var classes = settings.oClasses;
        var caption = table.children("caption");
        var captionSide = caption.length ? caption[0]._captionSide : null;
        var headerClone = $3(table[0].cloneNode(false));
        var footerClone = $3(table[0].cloneNode(false));
        var footer = table.children("tfoot");
        var _div = "<div/>";
        var size = function(s) {
          return !s ? null : _fnStringToCss(s);
        };
        if (!footer.length) {
          footer = null;
        }
        var scroller = $3(_div, { "class": classes.sScrollWrapper }).append(
          $3(_div, { "class": classes.sScrollHead }).css({
            overflow: "hidden",
            position: "relative",
            border: 0,
            width: scrollX ? size(scrollX) : "100%"
          }).append(
            $3(_div, { "class": classes.sScrollHeadInner }).css({
              "box-sizing": "content-box",
              width: scroll.sXInner || "100%"
            }).append(
              headerClone.removeAttr("id").css("margin-left", 0).append(captionSide === "top" ? caption : null).append(
                table.children("thead")
              )
            )
          )
        ).append(
          $3(_div, { "class": classes.sScrollBody }).css({
            position: "relative",
            overflow: "auto",
            width: size(scrollX)
          }).append(table)
        );
        if (footer) {
          scroller.append(
            $3(_div, { "class": classes.sScrollFoot }).css({
              overflow: "hidden",
              border: 0,
              width: scrollX ? size(scrollX) : "100%"
            }).append(
              $3(_div, { "class": classes.sScrollFootInner }).append(
                footerClone.removeAttr("id").css("margin-left", 0).append(captionSide === "bottom" ? caption : null).append(
                  table.children("tfoot")
                )
              )
            )
          );
        }
        var children = scroller.children();
        var scrollHead = children[0];
        var scrollBody = children[1];
        var scrollFoot = footer ? children[2] : null;
        if (scrollX) {
          $3(scrollBody).on("scroll.DT", function(e) {
            var scrollLeft = this.scrollLeft;
            scrollHead.scrollLeft = scrollLeft;
            if (footer) {
              scrollFoot.scrollLeft = scrollLeft;
            }
          });
        }
        $3(scrollBody).css("max-height", scrollY);
        if (!scroll.bCollapse) {
          $3(scrollBody).css("height", scrollY);
        }
        settings.nScrollHead = scrollHead;
        settings.nScrollBody = scrollBody;
        settings.nScrollFoot = scrollFoot;
        settings.aoDrawCallback.push({
          "fn": _fnScrollDraw,
          "sName": "scrolling"
        });
        return scroller[0];
      }
      function _fnScrollDraw(settings) {
        var scroll = settings.oScroll, scrollX = scroll.sX, scrollXInner = scroll.sXInner, scrollY = scroll.sY, barWidth = scroll.iBarWidth, divHeader = $3(settings.nScrollHead), divHeaderStyle = divHeader[0].style, divHeaderInner = divHeader.children("div"), divHeaderInnerStyle = divHeaderInner[0].style, divHeaderTable = divHeaderInner.children("table"), divBodyEl = settings.nScrollBody, divBody = $3(divBodyEl), divBodyStyle = divBodyEl.style, divFooter = $3(settings.nScrollFoot), divFooterInner = divFooter.children("div"), divFooterTable = divFooterInner.children("table"), header = $3(settings.nTHead), table = $3(settings.nTable), tableEl = table[0], tableStyle = tableEl.style, footer = settings.nTFoot ? $3(settings.nTFoot) : null, browser = settings.oBrowser, ie67 = browser.bScrollOversize, dtHeaderCells = _pluck(settings.aoColumns, "nTh"), headerTrgEls, footerTrgEls, headerSrcEls, footerSrcEls, headerCopy, footerCopy, headerWidths = [], footerWidths = [], headerContent = [], footerContent = [], idx, correction, sanityWidth, zeroOut = function(nSizer) {
          var style = nSizer.style;
          style.paddingTop = "0";
          style.paddingBottom = "0";
          style.borderTopWidth = "0";
          style.borderBottomWidth = "0";
          style.height = 0;
        };
        var scrollBarVis = divBodyEl.scrollHeight > divBodyEl.clientHeight;
        if (settings.scrollBarVis !== scrollBarVis && settings.scrollBarVis !== undefined2) {
          settings.scrollBarVis = scrollBarVis;
          _fnAdjustColumnSizing(settings);
          return;
        } else {
          settings.scrollBarVis = scrollBarVis;
        }
        table.children("thead, tfoot").remove();
        if (footer) {
          footerCopy = footer.clone().prependTo(table);
          footerTrgEls = footer.find("tr");
          footerSrcEls = footerCopy.find("tr");
          footerCopy.find("[id]").removeAttr("id");
        }
        headerCopy = header.clone().prependTo(table);
        headerTrgEls = header.find("tr");
        headerSrcEls = headerCopy.find("tr");
        headerCopy.find("th, td").removeAttr("tabindex");
        headerCopy.find("[id]").removeAttr("id");
        if (!scrollX) {
          divBodyStyle.width = "100%";
          divHeader[0].style.width = "100%";
        }
        $3.each(_fnGetUniqueThs(settings, headerCopy), function(i2, el) {
          idx = _fnVisibleToColumnIndex(settings, i2);
          el.style.width = settings.aoColumns[idx].sWidth;
        });
        if (footer) {
          _fnApplyToChildren(function(n) {
            n.style.width = "";
          }, footerSrcEls);
        }
        sanityWidth = table.outerWidth();
        if (scrollX === "") {
          tableStyle.width = "100%";
          if (ie67 && (table.find("tbody").height() > divBodyEl.offsetHeight || divBody.css("overflow-y") == "scroll")) {
            tableStyle.width = _fnStringToCss(table.outerWidth() - barWidth);
          }
          sanityWidth = table.outerWidth();
        } else if (scrollXInner !== "") {
          tableStyle.width = _fnStringToCss(scrollXInner);
          sanityWidth = table.outerWidth();
        }
        _fnApplyToChildren(zeroOut, headerSrcEls);
        _fnApplyToChildren(function(nSizer) {
          var style = window2.getComputedStyle ? window2.getComputedStyle(nSizer).width : _fnStringToCss($3(nSizer).width());
          headerContent.push(nSizer.innerHTML);
          headerWidths.push(style);
        }, headerSrcEls);
        _fnApplyToChildren(function(nToSize, i2) {
          nToSize.style.width = headerWidths[i2];
        }, headerTrgEls);
        $3(headerSrcEls).css("height", 0);
        if (footer) {
          _fnApplyToChildren(zeroOut, footerSrcEls);
          _fnApplyToChildren(function(nSizer) {
            footerContent.push(nSizer.innerHTML);
            footerWidths.push(_fnStringToCss($3(nSizer).css("width")));
          }, footerSrcEls);
          _fnApplyToChildren(function(nToSize, i2) {
            nToSize.style.width = footerWidths[i2];
          }, footerTrgEls);
          $3(footerSrcEls).height(0);
        }
        _fnApplyToChildren(function(nSizer, i2) {
          nSizer.innerHTML = '<div class="dataTables_sizing">' + headerContent[i2] + "</div>";
          nSizer.childNodes[0].style.height = "0";
          nSizer.childNodes[0].style.overflow = "hidden";
          nSizer.style.width = headerWidths[i2];
        }, headerSrcEls);
        if (footer) {
          _fnApplyToChildren(function(nSizer, i2) {
            nSizer.innerHTML = '<div class="dataTables_sizing">' + footerContent[i2] + "</div>";
            nSizer.childNodes[0].style.height = "0";
            nSizer.childNodes[0].style.overflow = "hidden";
            nSizer.style.width = footerWidths[i2];
          }, footerSrcEls);
        }
        if (Math.round(table.outerWidth()) < Math.round(sanityWidth)) {
          correction = divBodyEl.scrollHeight > divBodyEl.offsetHeight || divBody.css("overflow-y") == "scroll" ? sanityWidth + barWidth : sanityWidth;
          if (ie67 && (divBodyEl.scrollHeight > divBodyEl.offsetHeight || divBody.css("overflow-y") == "scroll")) {
            tableStyle.width = _fnStringToCss(correction - barWidth);
          }
          if (scrollX === "" || scrollXInner !== "") {
            _fnLog(settings, 1, "Possible column misalignment", 6);
          }
        } else {
          correction = "100%";
        }
        divBodyStyle.width = _fnStringToCss(correction);
        divHeaderStyle.width = _fnStringToCss(correction);
        if (footer) {
          settings.nScrollFoot.style.width = _fnStringToCss(correction);
        }
        if (!scrollY) {
          if (ie67) {
            divBodyStyle.height = _fnStringToCss(tableEl.offsetHeight + barWidth);
          }
        }
        var iOuterWidth = table.outerWidth();
        divHeaderTable[0].style.width = _fnStringToCss(iOuterWidth);
        divHeaderInnerStyle.width = _fnStringToCss(iOuterWidth);
        var bScrolling = table.height() > divBodyEl.clientHeight || divBody.css("overflow-y") == "scroll";
        var padding = "padding" + (browser.bScrollbarLeft ? "Left" : "Right");
        divHeaderInnerStyle[padding] = bScrolling ? barWidth + "px" : "0px";
        if (footer) {
          divFooterTable[0].style.width = _fnStringToCss(iOuterWidth);
          divFooterInner[0].style.width = _fnStringToCss(iOuterWidth);
          divFooterInner[0].style[padding] = bScrolling ? barWidth + "px" : "0px";
        }
        table.children("colgroup").insertBefore(table.children("thead"));
        divBody.trigger("scroll");
        if ((settings.bSorted || settings.bFiltered) && !settings._drawHold) {
          divBodyEl.scrollTop = 0;
        }
      }
      function _fnApplyToChildren(fn, an1, an2) {
        var index = 0, i2 = 0, iLen = an1.length;
        var nNode1, nNode2;
        while (i2 < iLen) {
          nNode1 = an1[i2].firstChild;
          nNode2 = an2 ? an2[i2].firstChild : null;
          while (nNode1) {
            if (nNode1.nodeType === 1) {
              if (an2) {
                fn(nNode1, nNode2, index);
              } else {
                fn(nNode1, index);
              }
              index++;
            }
            nNode1 = nNode1.nextSibling;
            nNode2 = an2 ? nNode2.nextSibling : null;
          }
          i2++;
        }
      }
      var __re_html_remove = /<.*?>/g;
      function _fnCalculateColumnWidths(oSettings) {
        var table = oSettings.nTable, columns = oSettings.aoColumns, scroll = oSettings.oScroll, scrollY = scroll.sY, scrollX = scroll.sX, scrollXInner = scroll.sXInner, columnCount = columns.length, visibleColumns = _fnGetColumns(oSettings, "bVisible"), headerCells = $3("th", oSettings.nTHead), tableWidthAttr = table.getAttribute("width"), tableContainer = table.parentNode, userInputs = false, i2, column, columnIdx, width, outerWidth, browser = oSettings.oBrowser, ie67 = browser.bScrollOversize;
        var styleWidth = table.style.width;
        if (styleWidth && styleWidth.indexOf("%") !== -1) {
          tableWidthAttr = styleWidth;
        }
        var sizes = _fnConvertToWidth(_pluck(columns, "sWidthOrig"), tableContainer);
        for (i2 = 0; i2 < visibleColumns.length; i2++) {
          column = columns[visibleColumns[i2]];
          if (column.sWidth !== null) {
            column.sWidth = sizes[i2];
            userInputs = true;
          }
        }
        if (ie67 || !userInputs && !scrollX && !scrollY && columnCount == _fnVisbleColumns(oSettings) && columnCount == headerCells.length) {
          for (i2 = 0; i2 < columnCount; i2++) {
            var colIdx = _fnVisibleToColumnIndex(oSettings, i2);
            if (colIdx !== null) {
              columns[colIdx].sWidth = _fnStringToCss(headerCells.eq(i2).width());
            }
          }
        } else {
          var tmpTable = $3(table).clone().css("visibility", "hidden").removeAttr("id");
          tmpTable.find("tbody tr").remove();
          var tr = $3("<tr/>").appendTo(tmpTable.find("tbody"));
          tmpTable.find("thead, tfoot").remove();
          tmpTable.append($3(oSettings.nTHead).clone()).append($3(oSettings.nTFoot).clone());
          tmpTable.find("tfoot th, tfoot td").css("width", "");
          headerCells = _fnGetUniqueThs(oSettings, tmpTable.find("thead")[0]);
          for (i2 = 0; i2 < visibleColumns.length; i2++) {
            column = columns[visibleColumns[i2]];
            headerCells[i2].style.width = column.sWidthOrig !== null && column.sWidthOrig !== "" ? _fnStringToCss(column.sWidthOrig) : "";
            if (column.sWidthOrig && scrollX) {
              $3(headerCells[i2]).append($3("<div/>").css({
                width: column.sWidthOrig,
                margin: 0,
                padding: 0,
                border: 0,
                height: 1
              }));
            }
          }
          if (oSettings.aoData.length) {
            for (i2 = 0; i2 < visibleColumns.length; i2++) {
              columnIdx = visibleColumns[i2];
              column = columns[columnIdx];
              $3(_fnGetWidestNode(oSettings, columnIdx)).clone(false).append(column.sContentPadding).appendTo(tr);
            }
          }
          $3("[name]", tmpTable).removeAttr("name");
          var holder = $3("<div/>").css(
            scrollX || scrollY ? {
              position: "absolute",
              top: 0,
              left: 0,
              height: 1,
              right: 0,
              overflow: "hidden"
            } : {}
          ).append(tmpTable).appendTo(tableContainer);
          if (scrollX && scrollXInner) {
            tmpTable.width(scrollXInner);
          } else if (scrollX) {
            tmpTable.css("width", "auto");
            tmpTable.removeAttr("width");
            if (tmpTable.width() < tableContainer.clientWidth && tableWidthAttr) {
              tmpTable.width(tableContainer.clientWidth);
            }
          } else if (scrollY) {
            tmpTable.width(tableContainer.clientWidth);
          } else if (tableWidthAttr) {
            tmpTable.width(tableWidthAttr);
          }
          var total = 0;
          for (i2 = 0; i2 < visibleColumns.length; i2++) {
            var cell = $3(headerCells[i2]);
            var border = cell.outerWidth() - cell.width();
            var bounding = browser.bBounding ? Math.ceil(headerCells[i2].getBoundingClientRect().width) : cell.outerWidth();
            total += bounding;
            columns[visibleColumns[i2]].sWidth = _fnStringToCss(bounding - border);
          }
          table.style.width = _fnStringToCss(total);
          holder.remove();
        }
        if (tableWidthAttr) {
          table.style.width = _fnStringToCss(tableWidthAttr);
        }
        if ((tableWidthAttr || scrollX) && !oSettings._reszEvt) {
          var bindResize = function() {
            $3(window2).on("resize.DT-" + oSettings.sInstance, _fnThrottle(function() {
              _fnAdjustColumnSizing(oSettings);
            }));
          };
          if (ie67) {
            setTimeout(bindResize, 1e3);
          } else {
            bindResize();
          }
          oSettings._reszEvt = true;
        }
      }
      var _fnThrottle = DataTable2.util.throttle;
      function _fnConvertToWidth(widths, parent) {
        var els = [];
        var results = [];
        for (var i2 = 0; i2 < widths.length; i2++) {
          if (widths[i2]) {
            els.push(
              $3("<div/>").css("width", _fnStringToCss(widths[i2])).appendTo(parent || document2.body)
            );
          } else {
            els.push(null);
          }
        }
        for (var i2 = 0; i2 < widths.length; i2++) {
          results.push(els[i2] ? els[i2][0].offsetWidth : null);
        }
        $3(els).remove();
        return results;
      }
      function _fnGetWidestNode(settings, colIdx) {
        var idx = _fnGetMaxLenString(settings, colIdx);
        if (idx < 0) {
          return null;
        }
        var data = settings.aoData[idx];
        return !data.nTr ? $3("<td/>").html(_fnGetCellData(settings, idx, colIdx, "display"))[0] : data.anCells[colIdx];
      }
      function _fnGetMaxLenString(settings, colIdx) {
        var s, max = -1, maxIdx = -1;
        for (var i2 = 0, ien = settings.aoData.length; i2 < ien; i2++) {
          s = _fnGetCellData(settings, i2, colIdx, "display") + "";
          s = s.replace(__re_html_remove, "");
          s = s.replace(/&nbsp;/g, " ");
          if (s.length > max) {
            max = s.length;
            maxIdx = i2;
          }
        }
        return maxIdx;
      }
      function _fnStringToCss(s) {
        if (s === null) {
          return "0px";
        }
        if (typeof s == "number") {
          return s < 0 ? "0px" : s + "px";
        }
        return s.match(/\d$/) ? s + "px" : s;
      }
      function _fnSortFlatten(settings) {
        var i2, iLen, k, kLen, aSort = [], aiOrig = [], aoColumns = settings.aoColumns, aDataSort, iCol, sType, srcCol, fixed = settings.aaSortingFixed, fixedObj = $3.isPlainObject(fixed), nestedSort = [], add = function(a) {
          if (a.length && !Array.isArray(a[0])) {
            nestedSort.push(a);
          } else {
            $3.merge(nestedSort, a);
          }
        };
        if (Array.isArray(fixed)) {
          add(fixed);
        }
        if (fixedObj && fixed.pre) {
          add(fixed.pre);
        }
        add(settings.aaSorting);
        if (fixedObj && fixed.post) {
          add(fixed.post);
        }
        for (i2 = 0; i2 < nestedSort.length; i2++) {
          srcCol = nestedSort[i2][0];
          aDataSort = aoColumns[srcCol].aDataSort;
          for (k = 0, kLen = aDataSort.length; k < kLen; k++) {
            iCol = aDataSort[k];
            sType = aoColumns[iCol].sType || "string";
            if (nestedSort[i2]._idx === undefined2) {
              nestedSort[i2]._idx = $3.inArray(nestedSort[i2][1], aoColumns[iCol].asSorting);
            }
            aSort.push({
              src: srcCol,
              col: iCol,
              dir: nestedSort[i2][1],
              index: nestedSort[i2]._idx,
              type: sType,
              formatter: DataTable2.ext.type.order[sType + "-pre"]
            });
          }
        }
        return aSort;
      }
      function _fnSort(oSettings) {
        var i2, ien, iLen, j, jLen, k, kLen, sDataType, nTh, aiOrig = [], oExtSort = DataTable2.ext.type.order, aoData = oSettings.aoData, aoColumns = oSettings.aoColumns, aDataSort, data, iCol, sType, oSort, formatters = 0, sortCol, displayMaster = oSettings.aiDisplayMaster, aSort;
        _fnColumnTypes(oSettings);
        aSort = _fnSortFlatten(oSettings);
        for (i2 = 0, ien = aSort.length; i2 < ien; i2++) {
          sortCol = aSort[i2];
          if (sortCol.formatter) {
            formatters++;
          }
          _fnSortData(oSettings, sortCol.col);
        }
        if (_fnDataSource(oSettings) != "ssp" && aSort.length !== 0) {
          for (i2 = 0, iLen = displayMaster.length; i2 < iLen; i2++) {
            aiOrig[displayMaster[i2]] = i2;
          }
          if (formatters === aSort.length) {
            displayMaster.sort(function(a, b) {
              var x, y, k2, test, sort, len = aSort.length, dataA = aoData[a]._aSortData, dataB = aoData[b]._aSortData;
              for (k2 = 0; k2 < len; k2++) {
                sort = aSort[k2];
                x = dataA[sort.col];
                y = dataB[sort.col];
                test = x < y ? -1 : x > y ? 1 : 0;
                if (test !== 0) {
                  return sort.dir === "asc" ? test : -test;
                }
              }
              x = aiOrig[a];
              y = aiOrig[b];
              return x < y ? -1 : x > y ? 1 : 0;
            });
          } else {
            displayMaster.sort(function(a, b) {
              var x, y, k2, l, test, sort, fn, len = aSort.length, dataA = aoData[a]._aSortData, dataB = aoData[b]._aSortData;
              for (k2 = 0; k2 < len; k2++) {
                sort = aSort[k2];
                x = dataA[sort.col];
                y = dataB[sort.col];
                fn = oExtSort[sort.type + "-" + sort.dir] || oExtSort["string-" + sort.dir];
                test = fn(x, y);
                if (test !== 0) {
                  return test;
                }
              }
              x = aiOrig[a];
              y = aiOrig[b];
              return x < y ? -1 : x > y ? 1 : 0;
            });
          }
        }
        oSettings.bSorted = true;
      }
      function _fnSortAria(settings) {
        var label;
        var nextSort;
        var columns = settings.aoColumns;
        var aSort = _fnSortFlatten(settings);
        var oAria = settings.oLanguage.oAria;
        for (var i2 = 0, iLen = columns.length; i2 < iLen; i2++) {
          var col = columns[i2];
          var asSorting = col.asSorting;
          var sTitle = col.ariaTitle || col.sTitle.replace(/<.*?>/g, "");
          var th = col.nTh;
          th.removeAttribute("aria-sort");
          if (col.bSortable) {
            if (aSort.length > 0 && aSort[0].col == i2) {
              th.setAttribute("aria-sort", aSort[0].dir == "asc" ? "ascending" : "descending");
              nextSort = asSorting[aSort[0].index + 1] || asSorting[0];
            } else {
              nextSort = asSorting[0];
            }
            label = sTitle + (nextSort === "asc" ? oAria.sSortAscending : oAria.sSortDescending);
          } else {
            label = sTitle;
          }
          th.setAttribute("aria-label", label);
        }
      }
      function _fnSortListener(settings, colIdx, append, callback) {
        var col = settings.aoColumns[colIdx];
        var sorting = settings.aaSorting;
        var asSorting = col.asSorting;
        var nextSortIdx;
        var next = function(a, overflow) {
          var idx = a._idx;
          if (idx === undefined2) {
            idx = $3.inArray(a[1], asSorting);
          }
          return idx + 1 < asSorting.length ? idx + 1 : overflow ? null : 0;
        };
        if (typeof sorting[0] === "number") {
          sorting = settings.aaSorting = [sorting];
        }
        if (append && settings.oFeatures.bSortMulti) {
          var sortIdx = $3.inArray(colIdx, _pluck(sorting, "0"));
          if (sortIdx !== -1) {
            nextSortIdx = next(sorting[sortIdx], true);
            if (nextSortIdx === null && sorting.length === 1) {
              nextSortIdx = 0;
            }
            if (nextSortIdx === null) {
              sorting.splice(sortIdx, 1);
            } else {
              sorting[sortIdx][1] = asSorting[nextSortIdx];
              sorting[sortIdx]._idx = nextSortIdx;
            }
          } else {
            sorting.push([colIdx, asSorting[0], 0]);
            sorting[sorting.length - 1]._idx = 0;
          }
        } else if (sorting.length && sorting[0][0] == colIdx) {
          nextSortIdx = next(sorting[0]);
          sorting.length = 1;
          sorting[0][1] = asSorting[nextSortIdx];
          sorting[0]._idx = nextSortIdx;
        } else {
          sorting.length = 0;
          sorting.push([colIdx, asSorting[0]]);
          sorting[0]._idx = 0;
        }
        _fnReDraw(settings);
        if (typeof callback == "function") {
          callback(settings);
        }
      }
      function _fnSortAttachListener(settings, attachTo, colIdx, callback) {
        var col = settings.aoColumns[colIdx];
        _fnBindAction(attachTo, {}, function(e) {
          if (col.bSortable === false) {
            return;
          }
          if (settings.oFeatures.bProcessing) {
            _fnProcessingDisplay(settings, true);
            setTimeout(function() {
              _fnSortListener(settings, colIdx, e.shiftKey, callback);
              if (_fnDataSource(settings) !== "ssp") {
                _fnProcessingDisplay(settings, false);
              }
            }, 0);
          } else {
            _fnSortListener(settings, colIdx, e.shiftKey, callback);
          }
        });
      }
      function _fnSortingClasses(settings) {
        var oldSort = settings.aLastSort;
        var sortClass = settings.oClasses.sSortColumn;
        var sort = _fnSortFlatten(settings);
        var features = settings.oFeatures;
        var i2, ien, colIdx;
        if (features.bSort && features.bSortClasses) {
          for (i2 = 0, ien = oldSort.length; i2 < ien; i2++) {
            colIdx = oldSort[i2].src;
            $3(_pluck(settings.aoData, "anCells", colIdx)).removeClass(sortClass + (i2 < 2 ? i2 + 1 : 3));
          }
          for (i2 = 0, ien = sort.length; i2 < ien; i2++) {
            colIdx = sort[i2].src;
            $3(_pluck(settings.aoData, "anCells", colIdx)).addClass(sortClass + (i2 < 2 ? i2 + 1 : 3));
          }
        }
        settings.aLastSort = sort;
      }
      function _fnSortData(settings, idx) {
        var column = settings.aoColumns[idx];
        var customSort = DataTable2.ext.order[column.sSortDataType];
        var customData;
        if (customSort) {
          customData = customSort.call(
            settings.oInstance,
            settings,
            idx,
            _fnColumnIndexToVisible(settings, idx)
          );
        }
        var row, cellData;
        var formatter = DataTable2.ext.type.order[column.sType + "-pre"];
        for (var i2 = 0, ien = settings.aoData.length; i2 < ien; i2++) {
          row = settings.aoData[i2];
          if (!row._aSortData) {
            row._aSortData = [];
          }
          if (!row._aSortData[idx] || customSort) {
            cellData = customSort ? customData[i2] : _fnGetCellData(settings, i2, idx, "sort");
            row._aSortData[idx] = formatter ? formatter(cellData) : cellData;
          }
        }
      }
      function _fnSaveState(settings) {
        if (settings._bLoadingState) {
          return;
        }
        var state = {
          time: +new Date(),
          start: settings._iDisplayStart,
          length: settings._iDisplayLength,
          order: $3.extend(true, [], settings.aaSorting),
          search: _fnSearchToCamel(settings.oPreviousSearch),
          columns: $3.map(settings.aoColumns, function(col, i2) {
            return {
              visible: col.bVisible,
              search: _fnSearchToCamel(settings.aoPreSearchCols[i2])
            };
          })
        };
        settings.oSavedState = state;
        _fnCallbackFire(settings, "aoStateSaveParams", "stateSaveParams", [settings, state]);
        if (settings.oFeatures.bStateSave && !settings.bDestroying) {
          settings.fnStateSaveCallback.call(settings.oInstance, settings, state);
        }
      }
      function _fnLoadState(settings, oInit, callback) {
        if (!settings.oFeatures.bStateSave) {
          callback();
          return;
        }
        var loaded = function(state2) {
          _fnImplementState(settings, state2, callback);
        };
        var state = settings.fnStateLoadCallback.call(settings.oInstance, settings, loaded);
        if (state !== undefined2) {
          _fnImplementState(settings, state, callback);
        }
        return true;
      }
      function _fnImplementState(settings, s, callback) {
        var i2, ien;
        var columns = settings.aoColumns;
        settings._bLoadingState = true;
        var api = settings._bInitComplete ? new DataTable2.Api(settings) : null;
        if (!s || !s.time) {
          settings._bLoadingState = false;
          callback();
          return;
        }
        var abStateLoad = _fnCallbackFire(settings, "aoStateLoadParams", "stateLoadParams", [settings, s]);
        if ($3.inArray(false, abStateLoad) !== -1) {
          settings._bLoadingState = false;
          callback();
          return;
        }
        var duration = settings.iStateDuration;
        if (duration > 0 && s.time < +new Date() - duration * 1e3) {
          settings._bLoadingState = false;
          callback();
          return;
        }
        if (s.columns && columns.length !== s.columns.length) {
          settings._bLoadingState = false;
          callback();
          return;
        }
        settings.oLoadedState = $3.extend(true, {}, s);
        if (s.length !== undefined2) {
          if (api) {
            api.page.len(s.length);
          } else {
            settings._iDisplayLength = s.length;
          }
        }
        if (s.start !== undefined2) {
          if (api === null) {
            settings._iDisplayStart = s.start;
            settings.iInitDisplayStart = s.start;
          } else {
            _fnPageChange(settings, s.start / settings._iDisplayLength);
          }
        }
        if (s.order !== undefined2) {
          settings.aaSorting = [];
          $3.each(s.order, function(i3, col2) {
            settings.aaSorting.push(
              col2[0] >= columns.length ? [0, col2[1]] : col2
            );
          });
        }
        if (s.search !== undefined2) {
          $3.extend(settings.oPreviousSearch, _fnSearchToHung(s.search));
        }
        if (s.columns) {
          for (i2 = 0, ien = s.columns.length; i2 < ien; i2++) {
            var col = s.columns[i2];
            if (col.visible !== undefined2) {
              if (api) {
                api.column(i2).visible(col.visible, false);
              } else {
                columns[i2].bVisible = col.visible;
              }
            }
            if (col.search !== undefined2) {
              $3.extend(settings.aoPreSearchCols[i2], _fnSearchToHung(col.search));
            }
          }
          if (api) {
            api.columns.adjust();
          }
        }
        settings._bLoadingState = false;
        _fnCallbackFire(settings, "aoStateLoaded", "stateLoaded", [settings, s]);
        callback();
      }
      ;
      function _fnSettingsFromNode(table) {
        var settings = DataTable2.settings;
        var idx = $3.inArray(table, _pluck(settings, "nTable"));
        return idx !== -1 ? settings[idx] : null;
      }
      function _fnLog(settings, level, msg, tn) {
        msg = "DataTables warning: " + (settings ? "table id=" + settings.sTableId + " - " : "") + msg;
        if (tn) {
          msg += ". For more information about this error, please see https://datatables.net/tn/" + tn;
        }
        if (!level) {
          var ext = DataTable2.ext;
          var type = ext.sErrMode || ext.errMode;
          if (settings) {
            _fnCallbackFire(settings, null, "error", [settings, tn, msg]);
          }
          if (type == "alert") {
            alert(msg);
          } else if (type == "throw") {
            throw new Error(msg);
          } else if (typeof type == "function") {
            type(settings, tn, msg);
          }
        } else if (window2.console && console.log) {
          console.log(msg);
        }
      }
      function _fnMap(ret, src, name, mappedName) {
        if (Array.isArray(name)) {
          $3.each(name, function(i2, val) {
            if (Array.isArray(val)) {
              _fnMap(ret, src, val[0], val[1]);
            } else {
              _fnMap(ret, src, val);
            }
          });
          return;
        }
        if (mappedName === undefined2) {
          mappedName = name;
        }
        if (src[name] !== undefined2) {
          ret[mappedName] = src[name];
        }
      }
      function _fnExtend(out, extender, breakRefs) {
        var val;
        for (var prop in extender) {
          if (extender.hasOwnProperty(prop)) {
            val = extender[prop];
            if ($3.isPlainObject(val)) {
              if (!$3.isPlainObject(out[prop])) {
                out[prop] = {};
              }
              $3.extend(true, out[prop], val);
            } else if (breakRefs && prop !== "data" && prop !== "aaData" && Array.isArray(val)) {
              out[prop] = val.slice();
            } else {
              out[prop] = val;
            }
          }
        }
        return out;
      }
      function _fnBindAction(n, oData, fn) {
        $3(n).on("click.DT", oData, function(e) {
          $3(n).trigger("blur");
          fn(e);
        }).on("keypress.DT", oData, function(e) {
          if (e.which === 13) {
            e.preventDefault();
            fn(e);
          }
        }).on("selectstart.DT", function() {
          return false;
        });
      }
      function _fnCallbackReg(oSettings, sStore, fn, sName) {
        if (fn) {
          oSettings[sStore].push({
            "fn": fn,
            "sName": sName
          });
        }
      }
      function _fnCallbackFire(settings, callbackArr, eventName, args) {
        var ret = [];
        if (callbackArr) {
          ret = $3.map(settings[callbackArr].slice().reverse(), function(val, i2) {
            return val.fn.apply(settings.oInstance, args);
          });
        }
        if (eventName !== null) {
          var e = $3.Event(eventName + ".dt");
          var table = $3(settings.nTable);
          table.trigger(e, args);
          if (table.parents("body").length === 0) {
            $3("body").trigger(e, args);
          }
          ret.push(e.result);
        }
        return ret;
      }
      function _fnLengthOverflow(settings) {
        var start2 = settings._iDisplayStart, end = settings.fnDisplayEnd(), len = settings._iDisplayLength;
        if (start2 >= end) {
          start2 = end - len;
        }
        start2 -= start2 % len;
        if (len === -1 || start2 < 0) {
          start2 = 0;
        }
        settings._iDisplayStart = start2;
      }
      function _fnRenderer(settings, type) {
        var renderer = settings.renderer;
        var host = DataTable2.ext.renderer[type];
        if ($3.isPlainObject(renderer) && renderer[type]) {
          return host[renderer[type]] || host._;
        } else if (typeof renderer === "string") {
          return host[renderer] || host._;
        }
        return host._;
      }
      function _fnDataSource(settings) {
        if (settings.oFeatures.bServerSide) {
          return "ssp";
        } else if (settings.ajax || settings.sAjaxSource) {
          return "ajax";
        }
        return "dom";
      }
      var __apiStruct = [];
      var __arrayProto = Array.prototype;
      var _toSettings = function(mixed) {
        var idx, jq;
        var settings = DataTable2.settings;
        var tables = $3.map(settings, function(el, i2) {
          return el.nTable;
        });
        if (!mixed) {
          return [];
        } else if (mixed.nTable && mixed.oApi) {
          return [mixed];
        } else if (mixed.nodeName && mixed.nodeName.toLowerCase() === "table") {
          idx = $3.inArray(mixed, tables);
          return idx !== -1 ? [settings[idx]] : null;
        } else if (mixed && typeof mixed.settings === "function") {
          return mixed.settings().toArray();
        } else if (typeof mixed === "string") {
          jq = $3(mixed);
        } else if (mixed instanceof $3) {
          jq = mixed;
        }
        if (jq) {
          return jq.map(function(i2) {
            idx = $3.inArray(this, tables);
            return idx !== -1 ? settings[idx] : null;
          }).toArray();
        }
      };
      _Api = function(context, data) {
        if (!(this instanceof _Api)) {
          return new _Api(context, data);
        }
        var settings = [];
        var ctxSettings = function(o) {
          var a = _toSettings(o);
          if (a) {
            settings.push.apply(settings, a);
          }
        };
        if (Array.isArray(context)) {
          for (var i2 = 0, ien = context.length; i2 < ien; i2++) {
            ctxSettings(context[i2]);
          }
        } else {
          ctxSettings(context);
        }
        this.context = _unique(settings);
        if (data) {
          $3.merge(this, data);
        }
        this.selector = {
          rows: null,
          cols: null,
          opts: null
        };
        _Api.extend(this, this, __apiStruct);
      };
      DataTable2.Api = _Api;
      $3.extend(_Api.prototype, {
        any: function() {
          return this.count() !== 0;
        },
        concat: __arrayProto.concat,
        context: [],
        count: function() {
          return this.flatten().length;
        },
        each: function(fn) {
          for (var i2 = 0, ien = this.length; i2 < ien; i2++) {
            fn.call(this, this[i2], i2, this);
          }
          return this;
        },
        eq: function(idx) {
          var ctx = this.context;
          return ctx.length > idx ? new _Api(ctx[idx], this[idx]) : null;
        },
        filter: function(fn) {
          var a = [];
          if (__arrayProto.filter) {
            a = __arrayProto.filter.call(this, fn, this);
          } else {
            for (var i2 = 0, ien = this.length; i2 < ien; i2++) {
              if (fn.call(this, this[i2], i2, this)) {
                a.push(this[i2]);
              }
            }
          }
          return new _Api(this.context, a);
        },
        flatten: function() {
          var a = [];
          return new _Api(this.context, a.concat.apply(a, this.toArray()));
        },
        join: __arrayProto.join,
        indexOf: __arrayProto.indexOf || function(obj, start2) {
          for (var i2 = start2 || 0, ien = this.length; i2 < ien; i2++) {
            if (this[i2] === obj) {
              return i2;
            }
          }
          return -1;
        },
        iterator: function(flatten, type, fn, alwaysNew) {
          var a = [], ret, i2, ien, j, jen, context = this.context, rows, items, item, selector = this.selector;
          if (typeof flatten === "string") {
            alwaysNew = fn;
            fn = type;
            type = flatten;
            flatten = false;
          }
          for (i2 = 0, ien = context.length; i2 < ien; i2++) {
            var apiInst = new _Api(context[i2]);
            if (type === "table") {
              ret = fn.call(apiInst, context[i2], i2);
              if (ret !== undefined2) {
                a.push(ret);
              }
            } else if (type === "columns" || type === "rows") {
              ret = fn.call(apiInst, context[i2], this[i2], i2);
              if (ret !== undefined2) {
                a.push(ret);
              }
            } else if (type === "column" || type === "column-rows" || type === "row" || type === "cell") {
              items = this[i2];
              if (type === "column-rows") {
                rows = _selector_row_indexes(context[i2], selector.opts);
              }
              for (j = 0, jen = items.length; j < jen; j++) {
                item = items[j];
                if (type === "cell") {
                  ret = fn.call(apiInst, context[i2], item.row, item.column, i2, j);
                } else {
                  ret = fn.call(apiInst, context[i2], item, i2, j, rows);
                }
                if (ret !== undefined2) {
                  a.push(ret);
                }
              }
            }
          }
          if (a.length || alwaysNew) {
            var api = new _Api(context, flatten ? a.concat.apply([], a) : a);
            var apiSelector = api.selector;
            apiSelector.rows = selector.rows;
            apiSelector.cols = selector.cols;
            apiSelector.opts = selector.opts;
            return api;
          }
          return this;
        },
        lastIndexOf: __arrayProto.lastIndexOf || function(obj, start2) {
          return this.indexOf.apply(this.toArray.reverse(), arguments);
        },
        length: 0,
        map: function(fn) {
          var a = [];
          if (__arrayProto.map) {
            a = __arrayProto.map.call(this, fn, this);
          } else {
            for (var i2 = 0, ien = this.length; i2 < ien; i2++) {
              a.push(fn.call(this, this[i2], i2));
            }
          }
          return new _Api(this.context, a);
        },
        pluck: function(prop) {
          var fn = DataTable2.util.get(prop);
          return this.map(function(el) {
            return fn(el);
          });
        },
        pop: __arrayProto.pop,
        push: __arrayProto.push,
        reduce: __arrayProto.reduce || function(fn, init) {
          return _fnReduce(this, fn, init, 0, this.length, 1);
        },
        reduceRight: __arrayProto.reduceRight || function(fn, init) {
          return _fnReduce(this, fn, init, this.length - 1, -1, -1);
        },
        reverse: __arrayProto.reverse,
        selector: null,
        shift: __arrayProto.shift,
        slice: function() {
          return new _Api(this.context, this);
        },
        sort: __arrayProto.sort,
        splice: __arrayProto.splice,
        toArray: function() {
          return __arrayProto.slice.call(this);
        },
        to$: function() {
          return $3(this);
        },
        toJQuery: function() {
          return $3(this);
        },
        unique: function() {
          return new _Api(this.context, _unique(this));
        },
        unshift: __arrayProto.unshift
      });
      _Api.extend = function(scope, obj, ext) {
        if (!ext.length || !obj || !(obj instanceof _Api) && !obj.__dt_wrapper) {
          return;
        }
        var i2, ien, struct, methodScoping = function(scope2, fn, struc) {
          return function() {
            var ret = fn.apply(scope2, arguments);
            _Api.extend(ret, ret, struc.methodExt);
            return ret;
          };
        };
        for (i2 = 0, ien = ext.length; i2 < ien; i2++) {
          struct = ext[i2];
          obj[struct.name] = struct.type === "function" ? methodScoping(scope, struct.val, struct) : struct.type === "object" ? {} : struct.val;
          obj[struct.name].__dt_wrapper = true;
          _Api.extend(scope, obj[struct.name], struct.propExt);
        }
      };
      _Api.register = _api_register = function(name, val) {
        if (Array.isArray(name)) {
          for (var j = 0, jen = name.length; j < jen; j++) {
            _Api.register(name[j], val);
          }
          return;
        }
        var i2, ien, heir = name.split("."), struct = __apiStruct, key, method;
        var find = function(src2, name2) {
          for (var i3 = 0, ien2 = src2.length; i3 < ien2; i3++) {
            if (src2[i3].name === name2) {
              return src2[i3];
            }
          }
          return null;
        };
        for (i2 = 0, ien = heir.length; i2 < ien; i2++) {
          method = heir[i2].indexOf("()") !== -1;
          key = method ? heir[i2].replace("()", "") : heir[i2];
          var src = find(struct, key);
          if (!src) {
            src = {
              name: key,
              val: {},
              methodExt: [],
              propExt: [],
              type: "object"
            };
            struct.push(src);
          }
          if (i2 === ien - 1) {
            src.val = val;
            src.type = typeof val === "function" ? "function" : $3.isPlainObject(val) ? "object" : "other";
          } else {
            struct = method ? src.methodExt : src.propExt;
          }
        }
      };
      _Api.registerPlural = _api_registerPlural = function(pluralName, singularName, val) {
        _Api.register(pluralName, val);
        _Api.register(singularName, function() {
          var ret = val.apply(this, arguments);
          if (ret === this) {
            return this;
          } else if (ret instanceof _Api) {
            return ret.length ? Array.isArray(ret[0]) ? new _Api(ret.context, ret[0]) : ret[0] : undefined2;
          }
          return ret;
        });
      };
      var __table_selector = function(selector, a) {
        if (Array.isArray(selector)) {
          return $3.map(selector, function(item) {
            return __table_selector(item, a);
          });
        }
        if (typeof selector === "number") {
          return [a[selector]];
        }
        var nodes = $3.map(a, function(el, i2) {
          return el.nTable;
        });
        return $3(nodes).filter(selector).map(function(i2) {
          var idx = $3.inArray(this, nodes);
          return a[idx];
        }).toArray();
      };
      _api_register("tables()", function(selector) {
        return selector !== undefined2 && selector !== null ? new _Api(__table_selector(selector, this.context)) : this;
      });
      _api_register("table()", function(selector) {
        var tables = this.tables(selector);
        var ctx = tables.context;
        return ctx.length ? new _Api(ctx[0]) : tables;
      });
      _api_registerPlural("tables().nodes()", "table().node()", function() {
        return this.iterator("table", function(ctx) {
          return ctx.nTable;
        }, 1);
      });
      _api_registerPlural("tables().body()", "table().body()", function() {
        return this.iterator("table", function(ctx) {
          return ctx.nTBody;
        }, 1);
      });
      _api_registerPlural("tables().header()", "table().header()", function() {
        return this.iterator("table", function(ctx) {
          return ctx.nTHead;
        }, 1);
      });
      _api_registerPlural("tables().footer()", "table().footer()", function() {
        return this.iterator("table", function(ctx) {
          return ctx.nTFoot;
        }, 1);
      });
      _api_registerPlural("tables().containers()", "table().container()", function() {
        return this.iterator("table", function(ctx) {
          return ctx.nTableWrapper;
        }, 1);
      });
      _api_register("draw()", function(paging) {
        return this.iterator("table", function(settings) {
          if (paging === "page") {
            _fnDraw(settings);
          } else {
            if (typeof paging === "string") {
              paging = paging === "full-hold" ? false : true;
            }
            _fnReDraw(settings, paging === false);
          }
        });
      });
      _api_register("page()", function(action) {
        if (action === undefined2) {
          return this.page.info().page;
        }
        return this.iterator("table", function(settings) {
          _fnPageChange(settings, action);
        });
      });
      _api_register("page.info()", function(action) {
        if (this.context.length === 0) {
          return undefined2;
        }
        var settings = this.context[0], start2 = settings._iDisplayStart, len = settings.oFeatures.bPaginate ? settings._iDisplayLength : -1, visRecords = settings.fnRecordsDisplay(), all = len === -1;
        return {
          "page": all ? 0 : Math.floor(start2 / len),
          "pages": all ? 1 : Math.ceil(visRecords / len),
          "start": start2,
          "end": settings.fnDisplayEnd(),
          "length": len,
          "recordsTotal": settings.fnRecordsTotal(),
          "recordsDisplay": visRecords,
          "serverSide": _fnDataSource(settings) === "ssp"
        };
      });
      _api_register("page.len()", function(len) {
        if (len === undefined2) {
          return this.context.length !== 0 ? this.context[0]._iDisplayLength : undefined2;
        }
        return this.iterator("table", function(settings) {
          _fnLengthChange(settings, len);
        });
      });
      var __reload = function(settings, holdPosition, callback) {
        if (callback) {
          var api = new _Api(settings);
          api.one("draw", function() {
            callback(api.ajax.json());
          });
        }
        if (_fnDataSource(settings) == "ssp") {
          _fnReDraw(settings, holdPosition);
        } else {
          _fnProcessingDisplay(settings, true);
          var xhr = settings.jqXHR;
          if (xhr && xhr.readyState !== 4) {
            xhr.abort();
          }
          _fnBuildAjax(settings, [], function(json) {
            _fnClearTable(settings);
            var data = _fnAjaxDataSrc(settings, json);
            for (var i2 = 0, ien = data.length; i2 < ien; i2++) {
              _fnAddData(settings, data[i2]);
            }
            _fnReDraw(settings, holdPosition);
            _fnProcessingDisplay(settings, false);
          });
        }
      };
      _api_register("ajax.json()", function() {
        var ctx = this.context;
        if (ctx.length > 0) {
          return ctx[0].json;
        }
      });
      _api_register("ajax.params()", function() {
        var ctx = this.context;
        if (ctx.length > 0) {
          return ctx[0].oAjaxData;
        }
      });
      _api_register("ajax.reload()", function(callback, resetPaging) {
        return this.iterator("table", function(settings) {
          __reload(settings, resetPaging === false, callback);
        });
      });
      _api_register("ajax.url()", function(url) {
        var ctx = this.context;
        if (url === undefined2) {
          if (ctx.length === 0) {
            return undefined2;
          }
          ctx = ctx[0];
          return ctx.ajax ? $3.isPlainObject(ctx.ajax) ? ctx.ajax.url : ctx.ajax : ctx.sAjaxSource;
        }
        return this.iterator("table", function(settings) {
          if ($3.isPlainObject(settings.ajax)) {
            settings.ajax.url = url;
          } else {
            settings.ajax = url;
          }
        });
      });
      _api_register("ajax.url().load()", function(callback, resetPaging) {
        return this.iterator("table", function(ctx) {
          __reload(ctx, resetPaging === false, callback);
        });
      });
      var _selector_run = function(type, selector, selectFn, settings, opts) {
        var out = [], res, a, i2, ien, j, jen, selectorType = typeof selector;
        if (!selector || selectorType === "string" || selectorType === "function" || selector.length === undefined2) {
          selector = [selector];
        }
        for (i2 = 0, ien = selector.length; i2 < ien; i2++) {
          a = selector[i2] && selector[i2].split && !selector[i2].match(/[\[\(:]/) ? selector[i2].split(",") : [selector[i2]];
          for (j = 0, jen = a.length; j < jen; j++) {
            res = selectFn(typeof a[j] === "string" ? a[j].trim() : a[j]);
            if (res && res.length) {
              out = out.concat(res);
            }
          }
        }
        var ext = _ext.selector[type];
        if (ext.length) {
          for (i2 = 0, ien = ext.length; i2 < ien; i2++) {
            out = ext[i2](settings, opts, out);
          }
        }
        return _unique(out);
      };
      var _selector_opts = function(opts) {
        if (!opts) {
          opts = {};
        }
        if (opts.filter && opts.search === undefined2) {
          opts.search = opts.filter;
        }
        return $3.extend({
          search: "none",
          order: "current",
          page: "all"
        }, opts);
      };
      var _selector_first = function(inst) {
        for (var i2 = 0, ien = inst.length; i2 < ien; i2++) {
          if (inst[i2].length > 0) {
            inst[0] = inst[i2];
            inst[0].length = 1;
            inst.length = 1;
            inst.context = [inst.context[i2]];
            return inst;
          }
        }
        inst.length = 0;
        return inst;
      };
      var _selector_row_indexes = function(settings, opts) {
        var i2, ien, tmp, a = [], displayFiltered = settings.aiDisplay, displayMaster = settings.aiDisplayMaster;
        var search = opts.search, order = opts.order, page = opts.page;
        if (_fnDataSource(settings) == "ssp") {
          return search === "removed" ? [] : _range(0, displayMaster.length);
        } else if (page == "current") {
          for (i2 = settings._iDisplayStart, ien = settings.fnDisplayEnd(); i2 < ien; i2++) {
            a.push(displayFiltered[i2]);
          }
        } else if (order == "current" || order == "applied") {
          if (search == "none") {
            a = displayMaster.slice();
          } else if (search == "applied") {
            a = displayFiltered.slice();
          } else if (search == "removed") {
            var displayFilteredMap = {};
            for (var i2 = 0, ien = displayFiltered.length; i2 < ien; i2++) {
              displayFilteredMap[displayFiltered[i2]] = null;
            }
            a = $3.map(displayMaster, function(el) {
              return !displayFilteredMap.hasOwnProperty(el) ? el : null;
            });
          }
        } else if (order == "index" || order == "original") {
          for (i2 = 0, ien = settings.aoData.length; i2 < ien; i2++) {
            if (search == "none") {
              a.push(i2);
            } else {
              tmp = $3.inArray(i2, displayFiltered);
              if (tmp === -1 && search == "removed" || tmp >= 0 && search == "applied") {
                a.push(i2);
              }
            }
          }
        }
        return a;
      };
      var __row_selector = function(settings, selector, opts) {
        var rows;
        var run = function(sel) {
          var selInt = _intVal(sel);
          var i2, ien;
          var aoData = settings.aoData;
          if (selInt !== null && !opts) {
            return [selInt];
          }
          if (!rows) {
            rows = _selector_row_indexes(settings, opts);
          }
          if (selInt !== null && $3.inArray(selInt, rows) !== -1) {
            return [selInt];
          } else if (sel === null || sel === undefined2 || sel === "") {
            return rows;
          }
          if (typeof sel === "function") {
            return $3.map(rows, function(idx) {
              var row = aoData[idx];
              return sel(idx, row._aData, row.nTr) ? idx : null;
            });
          }
          if (sel.nodeName) {
            var rowIdx = sel._DT_RowIndex;
            var cellIdx = sel._DT_CellIndex;
            if (rowIdx !== undefined2) {
              return aoData[rowIdx] && aoData[rowIdx].nTr === sel ? [rowIdx] : [];
            } else if (cellIdx) {
              return aoData[cellIdx.row] && aoData[cellIdx.row].nTr === sel.parentNode ? [cellIdx.row] : [];
            } else {
              var host = $3(sel).closest("*[data-dt-row]");
              return host.length ? [host.data("dt-row")] : [];
            }
          }
          if (typeof sel === "string" && sel.charAt(0) === "#") {
            var rowObj = settings.aIds[sel.replace(/^#/, "")];
            if (rowObj !== undefined2) {
              return [rowObj.idx];
            }
          }
          var nodes = _removeEmpty(
            _pluck_order(settings.aoData, rows, "nTr")
          );
          return $3(nodes).filter(sel).map(function() {
            return this._DT_RowIndex;
          }).toArray();
        };
        return _selector_run("row", selector, run, settings, opts);
      };
      _api_register("rows()", function(selector, opts) {
        if (selector === undefined2) {
          selector = "";
        } else if ($3.isPlainObject(selector)) {
          opts = selector;
          selector = "";
        }
        opts = _selector_opts(opts);
        var inst = this.iterator("table", function(settings) {
          return __row_selector(settings, selector, opts);
        }, 1);
        inst.selector.rows = selector;
        inst.selector.opts = opts;
        return inst;
      });
      _api_register("rows().nodes()", function() {
        return this.iterator("row", function(settings, row) {
          return settings.aoData[row].nTr || undefined2;
        }, 1);
      });
      _api_register("rows().data()", function() {
        return this.iterator(true, "rows", function(settings, rows) {
          return _pluck_order(settings.aoData, rows, "_aData");
        }, 1);
      });
      _api_registerPlural("rows().cache()", "row().cache()", function(type) {
        return this.iterator("row", function(settings, row) {
          var r = settings.aoData[row];
          return type === "search" ? r._aFilterData : r._aSortData;
        }, 1);
      });
      _api_registerPlural("rows().invalidate()", "row().invalidate()", function(src) {
        return this.iterator("row", function(settings, row) {
          _fnInvalidate(settings, row, src);
        });
      });
      _api_registerPlural("rows().indexes()", "row().index()", function() {
        return this.iterator("row", function(settings, row) {
          return row;
        }, 1);
      });
      _api_registerPlural("rows().ids()", "row().id()", function(hash) {
        var a = [];
        var context = this.context;
        for (var i2 = 0, ien = context.length; i2 < ien; i2++) {
          for (var j = 0, jen = this[i2].length; j < jen; j++) {
            var id = context[i2].rowIdFn(context[i2].aoData[this[i2][j]]._aData);
            a.push((hash === true ? "#" : "") + id);
          }
        }
        return new _Api(context, a);
      });
      _api_registerPlural("rows().remove()", "row().remove()", function() {
        var that = this;
        this.iterator("row", function(settings, row, thatIdx) {
          var data = settings.aoData;
          var rowData = data[row];
          var i2, ien, j, jen;
          var loopRow, loopCells;
          data.splice(row, 1);
          for (i2 = 0, ien = data.length; i2 < ien; i2++) {
            loopRow = data[i2];
            loopCells = loopRow.anCells;
            if (loopRow.nTr !== null) {
              loopRow.nTr._DT_RowIndex = i2;
            }
            if (loopCells !== null) {
              for (j = 0, jen = loopCells.length; j < jen; j++) {
                loopCells[j]._DT_CellIndex.row = i2;
              }
            }
          }
          _fnDeleteIndex(settings.aiDisplayMaster, row);
          _fnDeleteIndex(settings.aiDisplay, row);
          _fnDeleteIndex(that[thatIdx], row, false);
          if (settings._iRecordsDisplay > 0) {
            settings._iRecordsDisplay--;
          }
          _fnLengthOverflow(settings);
          var id = settings.rowIdFn(rowData._aData);
          if (id !== undefined2) {
            delete settings.aIds[id];
          }
        });
        this.iterator("table", function(settings) {
          for (var i2 = 0, ien = settings.aoData.length; i2 < ien; i2++) {
            settings.aoData[i2].idx = i2;
          }
        });
        return this;
      });
      _api_register("rows.add()", function(rows) {
        var newRows = this.iterator("table", function(settings) {
          var row, i2, ien;
          var out = [];
          for (i2 = 0, ien = rows.length; i2 < ien; i2++) {
            row = rows[i2];
            if (row.nodeName && row.nodeName.toUpperCase() === "TR") {
              out.push(_fnAddTr(settings, row)[0]);
            } else {
              out.push(_fnAddData(settings, row));
            }
          }
          return out;
        }, 1);
        var modRows = this.rows(-1);
        modRows.pop();
        $3.merge(modRows, newRows);
        return modRows;
      });
      _api_register("row()", function(selector, opts) {
        return _selector_first(this.rows(selector, opts));
      });
      _api_register("row().data()", function(data) {
        var ctx = this.context;
        if (data === undefined2) {
          return ctx.length && this.length ? ctx[0].aoData[this[0]]._aData : undefined2;
        }
        var row = ctx[0].aoData[this[0]];
        row._aData = data;
        if (Array.isArray(data) && row.nTr && row.nTr.id) {
          _fnSetObjectDataFn(ctx[0].rowId)(data, row.nTr.id);
        }
        _fnInvalidate(ctx[0], this[0], "data");
        return this;
      });
      _api_register("row().node()", function() {
        var ctx = this.context;
        return ctx.length && this.length ? ctx[0].aoData[this[0]].nTr || null : null;
      });
      _api_register("row.add()", function(row) {
        if (row instanceof $3 && row.length) {
          row = row[0];
        }
        var rows = this.iterator("table", function(settings) {
          if (row.nodeName && row.nodeName.toUpperCase() === "TR") {
            return _fnAddTr(settings, row)[0];
          }
          return _fnAddData(settings, row);
        });
        return this.row(rows[0]);
      });
      $3(document2).on("plugin-init.dt", function(e, context) {
        var api = new _Api(context);
        var namespace = "on-plugin-init";
        var stateSaveParamsEvent = "stateSaveParams." + namespace;
        var destroyEvent = "destroy. " + namespace;
        api.on(stateSaveParamsEvent, function(e2, settings, d) {
          var idFn = settings.rowIdFn;
          var data = settings.aoData;
          var ids = [];
          for (var i2 = 0; i2 < data.length; i2++) {
            if (data[i2]._detailsShow) {
              ids.push("#" + idFn(data[i2]._aData));
            }
          }
          d.childRows = ids;
        });
        api.on(destroyEvent, function() {
          api.off(stateSaveParamsEvent + " " + destroyEvent);
        });
        var loaded = api.state.loaded();
        if (loaded && loaded.childRows) {
          api.rows($3.map(loaded.childRows, function(id) {
            return id.replace(/:/g, "\\:");
          })).every(function() {
            _fnCallbackFire(context, null, "requestChild", [this]);
          });
        }
      });
      var __details_add = function(ctx, row, data, klass) {
        var rows = [];
        var addRow = function(r, k) {
          if (Array.isArray(r) || r instanceof $3) {
            for (var i2 = 0, ien = r.length; i2 < ien; i2++) {
              addRow(r[i2], k);
            }
            return;
          }
          if (r.nodeName && r.nodeName.toLowerCase() === "tr") {
            rows.push(r);
          } else {
            var created = $3("<tr><td></td></tr>").addClass(k);
            $3("td", created).addClass(k).html(r)[0].colSpan = _fnVisbleColumns(ctx);
            rows.push(created[0]);
          }
        };
        addRow(data, klass);
        if (row._details) {
          row._details.detach();
        }
        row._details = $3(rows);
        if (row._detailsShow) {
          row._details.insertAfter(row.nTr);
        }
      };
      var __details_state = DataTable2.util.throttle(
        function(ctx) {
          _fnSaveState(ctx[0]);
        },
        500
      );
      var __details_remove = function(api, idx) {
        var ctx = api.context;
        if (ctx.length) {
          var row = ctx[0].aoData[idx !== undefined2 ? idx : api[0]];
          if (row && row._details) {
            row._details.remove();
            row._detailsShow = undefined2;
            row._details = undefined2;
            $3(row.nTr).removeClass("dt-hasChild");
            __details_state(ctx);
          }
        }
      };
      var __details_display = function(api, show) {
        var ctx = api.context;
        if (ctx.length && api.length) {
          var row = ctx[0].aoData[api[0]];
          if (row._details) {
            row._detailsShow = show;
            if (show) {
              row._details.insertAfter(row.nTr);
              $3(row.nTr).addClass("dt-hasChild");
            } else {
              row._details.detach();
              $3(row.nTr).removeClass("dt-hasChild");
            }
            _fnCallbackFire(ctx[0], null, "childRow", [show, api.row(api[0])]);
            __details_events(ctx[0]);
            __details_state(ctx);
          }
        }
      };
      var __details_events = function(settings) {
        var api = new _Api(settings);
        var namespace = ".dt.DT_details";
        var drawEvent = "draw" + namespace;
        var colvisEvent = "column-sizing" + namespace;
        var destroyEvent = "destroy" + namespace;
        var data = settings.aoData;
        api.off(drawEvent + " " + colvisEvent + " " + destroyEvent);
        if (_pluck(data, "_details").length > 0) {
          api.on(drawEvent, function(e, ctx) {
            if (settings !== ctx) {
              return;
            }
            api.rows({ page: "current" }).eq(0).each(function(idx) {
              var row = data[idx];
              if (row._detailsShow) {
                row._details.insertAfter(row.nTr);
              }
            });
          });
          api.on(colvisEvent, function(e, ctx, idx, vis) {
            if (settings !== ctx) {
              return;
            }
            var row, visible = _fnVisbleColumns(ctx);
            for (var i2 = 0, ien = data.length; i2 < ien; i2++) {
              row = data[i2];
              if (row._details) {
                row._details.each(function() {
                  var el = $3(this).children("td");
                  if (el.length == 1) {
                    el.attr("colspan", visible);
                  }
                });
              }
            }
          });
          api.on(destroyEvent, function(e, ctx) {
            if (settings !== ctx) {
              return;
            }
            for (var i2 = 0, ien = data.length; i2 < ien; i2++) {
              if (data[i2]._details) {
                __details_remove(api, i2);
              }
            }
          });
        }
      };
      var _emp = "";
      var _child_obj = _emp + "row().child";
      var _child_mth = _child_obj + "()";
      _api_register(_child_mth, function(data, klass) {
        var ctx = this.context;
        if (data === undefined2) {
          return ctx.length && this.length ? ctx[0].aoData[this[0]]._details : undefined2;
        } else if (data === true) {
          this.child.show();
        } else if (data === false) {
          __details_remove(this);
        } else if (ctx.length && this.length) {
          __details_add(ctx[0], ctx[0].aoData[this[0]], data, klass);
        }
        return this;
      });
      _api_register([
        _child_obj + ".show()",
        _child_mth + ".show()"
      ], function(show) {
        __details_display(this, true);
        return this;
      });
      _api_register([
        _child_obj + ".hide()",
        _child_mth + ".hide()"
      ], function() {
        __details_display(this, false);
        return this;
      });
      _api_register([
        _child_obj + ".remove()",
        _child_mth + ".remove()"
      ], function() {
        __details_remove(this);
        return this;
      });
      _api_register(_child_obj + ".isShown()", function() {
        var ctx = this.context;
        if (ctx.length && this.length) {
          return ctx[0].aoData[this[0]]._detailsShow || false;
        }
        return false;
      });
      var __re_column_selector = /^([^:]+):(name|visIdx|visible)$/;
      var __columnData = function(settings, column, r1, r2, rows) {
        var a = [];
        for (var row = 0, ien = rows.length; row < ien; row++) {
          a.push(_fnGetCellData(settings, rows[row], column));
        }
        return a;
      };
      var __column_selector = function(settings, selector, opts) {
        var columns = settings.aoColumns, names = _pluck(columns, "sName"), nodes = _pluck(columns, "nTh");
        var run = function(s) {
          var selInt = _intVal(s);
          if (s === "") {
            return _range(columns.length);
          }
          if (selInt !== null) {
            return [
              selInt >= 0 ? selInt : columns.length + selInt
            ];
          }
          if (typeof s === "function") {
            var rows = _selector_row_indexes(settings, opts);
            return $3.map(columns, function(col, idx2) {
              return s(
                idx2,
                __columnData(settings, idx2, 0, 0, rows),
                nodes[idx2]
              ) ? idx2 : null;
            });
          }
          var match = typeof s === "string" ? s.match(__re_column_selector) : "";
          if (match) {
            switch (match[2]) {
              case "visIdx":
              case "visible":
                var idx = parseInt(match[1], 10);
                if (idx < 0) {
                  var visColumns = $3.map(columns, function(col, i2) {
                    return col.bVisible ? i2 : null;
                  });
                  return [visColumns[visColumns.length + idx]];
                }
                return [_fnVisibleToColumnIndex(settings, idx)];
              case "name":
                return $3.map(names, function(name, i2) {
                  return name === match[1] ? i2 : null;
                });
              default:
                return [];
            }
          }
          if (s.nodeName && s._DT_CellIndex) {
            return [s._DT_CellIndex.column];
          }
          var jqResult = $3(nodes).filter(s).map(function() {
            return $3.inArray(this, nodes);
          }).toArray();
          if (jqResult.length || !s.nodeName) {
            return jqResult;
          }
          var host = $3(s).closest("*[data-dt-column]");
          return host.length ? [host.data("dt-column")] : [];
        };
        return _selector_run("column", selector, run, settings, opts);
      };
      var __setColumnVis = function(settings, column, vis) {
        var cols = settings.aoColumns, col = cols[column], data = settings.aoData, row, cells, i2, ien, tr;
        if (vis === undefined2) {
          return col.bVisible;
        }
        if (col.bVisible === vis) {
          return;
        }
        if (vis) {
          var insertBefore = $3.inArray(true, _pluck(cols, "bVisible"), column + 1);
          for (i2 = 0, ien = data.length; i2 < ien; i2++) {
            tr = data[i2].nTr;
            cells = data[i2].anCells;
            if (tr) {
              tr.insertBefore(cells[column], cells[insertBefore] || null);
            }
          }
        } else {
          $3(_pluck(settings.aoData, "anCells", column)).detach();
        }
        col.bVisible = vis;
      };
      _api_register("columns()", function(selector, opts) {
        if (selector === undefined2) {
          selector = "";
        } else if ($3.isPlainObject(selector)) {
          opts = selector;
          selector = "";
        }
        opts = _selector_opts(opts);
        var inst = this.iterator("table", function(settings) {
          return __column_selector(settings, selector, opts);
        }, 1);
        inst.selector.cols = selector;
        inst.selector.opts = opts;
        return inst;
      });
      _api_registerPlural("columns().header()", "column().header()", function(selector, opts) {
        return this.iterator("column", function(settings, column) {
          return settings.aoColumns[column].nTh;
        }, 1);
      });
      _api_registerPlural("columns().footer()", "column().footer()", function(selector, opts) {
        return this.iterator("column", function(settings, column) {
          return settings.aoColumns[column].nTf;
        }, 1);
      });
      _api_registerPlural("columns().data()", "column().data()", function() {
        return this.iterator("column-rows", __columnData, 1);
      });
      _api_registerPlural("columns().dataSrc()", "column().dataSrc()", function() {
        return this.iterator("column", function(settings, column) {
          return settings.aoColumns[column].mData;
        }, 1);
      });
      _api_registerPlural("columns().cache()", "column().cache()", function(type) {
        return this.iterator("column-rows", function(settings, column, i2, j, rows) {
          return _pluck_order(
            settings.aoData,
            rows,
            type === "search" ? "_aFilterData" : "_aSortData",
            column
          );
        }, 1);
      });
      _api_registerPlural("columns().nodes()", "column().nodes()", function() {
        return this.iterator("column-rows", function(settings, column, i2, j, rows) {
          return _pluck_order(settings.aoData, rows, "anCells", column);
        }, 1);
      });
      _api_registerPlural("columns().visible()", "column().visible()", function(vis, calc) {
        var that = this;
        var ret = this.iterator("column", function(settings, column) {
          if (vis === undefined2) {
            return settings.aoColumns[column].bVisible;
          }
          __setColumnVis(settings, column, vis);
        });
        if (vis !== undefined2) {
          this.iterator("table", function(settings) {
            _fnDrawHead(settings, settings.aoHeader);
            _fnDrawHead(settings, settings.aoFooter);
            if (!settings.aiDisplay.length) {
              $3(settings.nTBody).find("td[colspan]").attr("colspan", _fnVisbleColumns(settings));
            }
            _fnSaveState(settings);
            that.iterator("column", function(settings2, column) {
              _fnCallbackFire(settings2, null, "column-visibility", [settings2, column, vis, calc]);
            });
            if (calc === undefined2 || calc) {
              that.columns.adjust();
            }
          });
        }
        return ret;
      });
      _api_registerPlural("columns().indexes()", "column().index()", function(type) {
        return this.iterator("column", function(settings, column) {
          return type === "visible" ? _fnColumnIndexToVisible(settings, column) : column;
        }, 1);
      });
      _api_register("columns.adjust()", function() {
        return this.iterator("table", function(settings) {
          _fnAdjustColumnSizing(settings);
        }, 1);
      });
      _api_register("column.index()", function(type, idx) {
        if (this.context.length !== 0) {
          var ctx = this.context[0];
          if (type === "fromVisible" || type === "toData") {
            return _fnVisibleToColumnIndex(ctx, idx);
          } else if (type === "fromData" || type === "toVisible") {
            return _fnColumnIndexToVisible(ctx, idx);
          }
        }
      });
      _api_register("column()", function(selector, opts) {
        return _selector_first(this.columns(selector, opts));
      });
      var __cell_selector = function(settings, selector, opts) {
        var data = settings.aoData;
        var rows = _selector_row_indexes(settings, opts);
        var cells = _removeEmpty(_pluck_order(data, rows, "anCells"));
        var allCells = $3(_flatten([], cells));
        var row;
        var columns = settings.aoColumns.length;
        var a, i2, ien, j, o, host;
        var run = function(s) {
          var fnSelector = typeof s === "function";
          if (s === null || s === undefined2 || fnSelector) {
            a = [];
            for (i2 = 0, ien = rows.length; i2 < ien; i2++) {
              row = rows[i2];
              for (j = 0; j < columns; j++) {
                o = {
                  row,
                  column: j
                };
                if (fnSelector) {
                  host = data[row];
                  if (s(o, _fnGetCellData(settings, row, j), host.anCells ? host.anCells[j] : null)) {
                    a.push(o);
                  }
                } else {
                  a.push(o);
                }
              }
            }
            return a;
          }
          if ($3.isPlainObject(s)) {
            return s.column !== undefined2 && s.row !== undefined2 && $3.inArray(s.row, rows) !== -1 ? [s] : [];
          }
          var jqResult = allCells.filter(s).map(function(i3, el) {
            return {
              row: el._DT_CellIndex.row,
              column: el._DT_CellIndex.column
            };
          }).toArray();
          if (jqResult.length || !s.nodeName) {
            return jqResult;
          }
          host = $3(s).closest("*[data-dt-row]");
          return host.length ? [{
            row: host.data("dt-row"),
            column: host.data("dt-column")
          }] : [];
        };
        return _selector_run("cell", selector, run, settings, opts);
      };
      _api_register("cells()", function(rowSelector, columnSelector, opts) {
        if ($3.isPlainObject(rowSelector)) {
          if (rowSelector.row === undefined2) {
            opts = rowSelector;
            rowSelector = null;
          } else {
            opts = columnSelector;
            columnSelector = null;
          }
        }
        if ($3.isPlainObject(columnSelector)) {
          opts = columnSelector;
          columnSelector = null;
        }
        if (columnSelector === null || columnSelector === undefined2) {
          return this.iterator("table", function(settings) {
            return __cell_selector(settings, rowSelector, _selector_opts(opts));
          });
        }
        var internalOpts = opts ? {
          page: opts.page,
          order: opts.order,
          search: opts.search
        } : {};
        var columns = this.columns(columnSelector, internalOpts);
        var rows = this.rows(rowSelector, internalOpts);
        var i2, ien, j, jen;
        var cellsNoOpts = this.iterator("table", function(settings, idx) {
          var a = [];
          for (i2 = 0, ien = rows[idx].length; i2 < ien; i2++) {
            for (j = 0, jen = columns[idx].length; j < jen; j++) {
              a.push({
                row: rows[idx][i2],
                column: columns[idx][j]
              });
            }
          }
          return a;
        }, 1);
        var cells = opts && opts.selected ? this.cells(cellsNoOpts, opts) : cellsNoOpts;
        $3.extend(cells.selector, {
          cols: columnSelector,
          rows: rowSelector,
          opts
        });
        return cells;
      });
      _api_registerPlural("cells().nodes()", "cell().node()", function() {
        return this.iterator("cell", function(settings, row, column) {
          var data = settings.aoData[row];
          return data && data.anCells ? data.anCells[column] : undefined2;
        }, 1);
      });
      _api_register("cells().data()", function() {
        return this.iterator("cell", function(settings, row, column) {
          return _fnGetCellData(settings, row, column);
        }, 1);
      });
      _api_registerPlural("cells().cache()", "cell().cache()", function(type) {
        type = type === "search" ? "_aFilterData" : "_aSortData";
        return this.iterator("cell", function(settings, row, column) {
          return settings.aoData[row][type][column];
        }, 1);
      });
      _api_registerPlural("cells().render()", "cell().render()", function(type) {
        return this.iterator("cell", function(settings, row, column) {
          return _fnGetCellData(settings, row, column, type);
        }, 1);
      });
      _api_registerPlural("cells().indexes()", "cell().index()", function() {
        return this.iterator("cell", function(settings, row, column) {
          return {
            row,
            column,
            columnVisible: _fnColumnIndexToVisible(settings, column)
          };
        }, 1);
      });
      _api_registerPlural("cells().invalidate()", "cell().invalidate()", function(src) {
        return this.iterator("cell", function(settings, row, column) {
          _fnInvalidate(settings, row, src, column);
        });
      });
      _api_register("cell()", function(rowSelector, columnSelector, opts) {
        return _selector_first(this.cells(rowSelector, columnSelector, opts));
      });
      _api_register("cell().data()", function(data) {
        var ctx = this.context;
        var cell = this[0];
        if (data === undefined2) {
          return ctx.length && cell.length ? _fnGetCellData(ctx[0], cell[0].row, cell[0].column) : undefined2;
        }
        _fnSetCellData(ctx[0], cell[0].row, cell[0].column, data);
        _fnInvalidate(ctx[0], cell[0].row, "data", cell[0].column);
        return this;
      });
      _api_register("order()", function(order, dir) {
        var ctx = this.context;
        if (order === undefined2) {
          return ctx.length !== 0 ? ctx[0].aaSorting : undefined2;
        }
        if (typeof order === "number") {
          order = [[order, dir]];
        } else if (order.length && !Array.isArray(order[0])) {
          order = Array.prototype.slice.call(arguments);
        }
        return this.iterator("table", function(settings) {
          settings.aaSorting = order.slice();
        });
      });
      _api_register("order.listener()", function(node, column, callback) {
        return this.iterator("table", function(settings) {
          _fnSortAttachListener(settings, node, column, callback);
        });
      });
      _api_register("order.fixed()", function(set) {
        if (!set) {
          var ctx = this.context;
          var fixed = ctx.length ? ctx[0].aaSortingFixed : undefined2;
          return Array.isArray(fixed) ? { pre: fixed } : fixed;
        }
        return this.iterator("table", function(settings) {
          settings.aaSortingFixed = $3.extend(true, {}, set);
        });
      });
      _api_register([
        "columns().order()",
        "column().order()"
      ], function(dir) {
        var that = this;
        return this.iterator("table", function(settings, i2) {
          var sort = [];
          $3.each(that[i2], function(j, col) {
            sort.push([col, dir]);
          });
          settings.aaSorting = sort;
        });
      });
      _api_register("search()", function(input, regex, smart, caseInsen) {
        var ctx = this.context;
        if (input === undefined2) {
          return ctx.length !== 0 ? ctx[0].oPreviousSearch.sSearch : undefined2;
        }
        return this.iterator("table", function(settings) {
          if (!settings.oFeatures.bFilter) {
            return;
          }
          _fnFilterComplete(settings, $3.extend({}, settings.oPreviousSearch, {
            "sSearch": input + "",
            "bRegex": regex === null ? false : regex,
            "bSmart": smart === null ? true : smart,
            "bCaseInsensitive": caseInsen === null ? true : caseInsen
          }), 1);
        });
      });
      _api_registerPlural(
        "columns().search()",
        "column().search()",
        function(input, regex, smart, caseInsen) {
          return this.iterator("column", function(settings, column) {
            var preSearch = settings.aoPreSearchCols;
            if (input === undefined2) {
              return preSearch[column].sSearch;
            }
            if (!settings.oFeatures.bFilter) {
              return;
            }
            $3.extend(preSearch[column], {
              "sSearch": input + "",
              "bRegex": regex === null ? false : regex,
              "bSmart": smart === null ? true : smart,
              "bCaseInsensitive": caseInsen === null ? true : caseInsen
            });
            _fnFilterComplete(settings, settings.oPreviousSearch, 1);
          });
        }
      );
      _api_register("state()", function() {
        return this.context.length ? this.context[0].oSavedState : null;
      });
      _api_register("state.clear()", function() {
        return this.iterator("table", function(settings) {
          settings.fnStateSaveCallback.call(settings.oInstance, settings, {});
        });
      });
      _api_register("state.loaded()", function() {
        return this.context.length ? this.context[0].oLoadedState : null;
      });
      _api_register("state.save()", function() {
        return this.iterator("table", function(settings) {
          _fnSaveState(settings);
        });
      });
      DataTable2.use = function(module2, type) {
        if (type === "lib" || module2.fn) {
          $3 = module2;
        } else if (type == "win" || module2.document) {
          window2 = module2;
          document2 = module2.document;
        } else if (type === "datetime" || module2.type === "DateTime") {
          DataTable2.DateTime = module2;
        }
      };
      DataTable2.factory = function(root, jq) {
        var is = false;
        if (root && root.document) {
          window2 = root;
          document2 = root.document;
        }
        if (jq && jq.fn && jq.fn.jquery) {
          $3 = jq;
          is = true;
        }
        return is;
      };
      DataTable2.versionCheck = DataTable2.fnVersionCheck = function(version) {
        var aThis = DataTable2.version.split(".");
        var aThat = version.split(".");
        var iThis, iThat;
        for (var i2 = 0, iLen = aThat.length; i2 < iLen; i2++) {
          iThis = parseInt(aThis[i2], 10) || 0;
          iThat = parseInt(aThat[i2], 10) || 0;
          if (iThis === iThat) {
            continue;
          }
          return iThis > iThat;
        }
        return true;
      };
      DataTable2.isDataTable = DataTable2.fnIsDataTable = function(table) {
        var t = $3(table).get(0);
        var is = false;
        if (table instanceof DataTable2.Api) {
          return true;
        }
        $3.each(DataTable2.settings, function(i2, o) {
          var head = o.nScrollHead ? $3("table", o.nScrollHead)[0] : null;
          var foot = o.nScrollFoot ? $3("table", o.nScrollFoot)[0] : null;
          if (o.nTable === t || head === t || foot === t) {
            is = true;
          }
        });
        return is;
      };
      DataTable2.tables = DataTable2.fnTables = function(visible) {
        var api = false;
        if ($3.isPlainObject(visible)) {
          api = visible.api;
          visible = visible.visible;
        }
        var a = $3.map(DataTable2.settings, function(o) {
          if (!visible || visible && $3(o.nTable).is(":visible")) {
            return o.nTable;
          }
        });
        return api ? new _Api(a) : a;
      };
      DataTable2.camelToHungarian = _fnCamelToHungarian;
      _api_register("$()", function(selector, opts) {
        var rows = this.rows(opts).nodes(), jqRows = $3(rows);
        return $3([].concat(
          jqRows.filter(selector).toArray(),
          jqRows.find(selector).toArray()
        ));
      });
      $3.each(["on", "one", "off"], function(i2, key) {
        _api_register(key + "()", function() {
          var args = Array.prototype.slice.call(arguments);
          args[0] = $3.map(args[0].split(/\s/), function(e) {
            return !e.match(/\.dt\b/) ? e + ".dt" : e;
          }).join(" ");
          var inst = $3(this.tables().nodes());
          inst[key].apply(inst, args);
          return this;
        });
      });
      _api_register("clear()", function() {
        return this.iterator("table", function(settings) {
          _fnClearTable(settings);
        });
      });
      _api_register("settings()", function() {
        return new _Api(this.context, this.context);
      });
      _api_register("init()", function() {
        var ctx = this.context;
        return ctx.length ? ctx[0].oInit : null;
      });
      _api_register("data()", function() {
        return this.iterator("table", function(settings) {
          return _pluck(settings.aoData, "_aData");
        }).flatten();
      });
      _api_register("destroy()", function(remove) {
        remove = remove || false;
        return this.iterator("table", function(settings) {
          var classes = settings.oClasses;
          var table = settings.nTable;
          var tbody = settings.nTBody;
          var thead = settings.nTHead;
          var tfoot = settings.nTFoot;
          var jqTable = $3(table);
          var jqTbody = $3(tbody);
          var jqWrapper = $3(settings.nTableWrapper);
          var rows = $3.map(settings.aoData, function(r) {
            return r.nTr;
          });
          var i2, ien;
          settings.bDestroying = true;
          _fnCallbackFire(settings, "aoDestroyCallback", "destroy", [settings]);
          if (!remove) {
            new _Api(settings).columns().visible(true);
          }
          jqWrapper.off(".DT").find(":not(tbody *)").off(".DT");
          $3(window2).off(".DT-" + settings.sInstance);
          if (table != thead.parentNode) {
            jqTable.children("thead").detach();
            jqTable.append(thead);
          }
          if (tfoot && table != tfoot.parentNode) {
            jqTable.children("tfoot").detach();
            jqTable.append(tfoot);
          }
          settings.aaSorting = [];
          settings.aaSortingFixed = [];
          _fnSortingClasses(settings);
          $3(rows).removeClass(settings.asStripeClasses.join(" "));
          $3("th, td", thead).removeClass(
            classes.sSortable + " " + classes.sSortableAsc + " " + classes.sSortableDesc + " " + classes.sSortableNone
          );
          jqTbody.children().detach();
          jqTbody.append(rows);
          var orig = settings.nTableWrapper.parentNode;
          var removedMethod = remove ? "remove" : "detach";
          jqTable[removedMethod]();
          jqWrapper[removedMethod]();
          if (!remove && orig) {
            orig.insertBefore(table, settings.nTableReinsertBefore);
            jqTable.css("width", settings.sDestroyWidth).removeClass(classes.sTable);
            ien = settings.asDestroyStripes.length;
            if (ien) {
              jqTbody.children().each(function(i3) {
                $3(this).addClass(settings.asDestroyStripes[i3 % ien]);
              });
            }
          }
          var idx = $3.inArray(settings, DataTable2.settings);
          if (idx !== -1) {
            DataTable2.settings.splice(idx, 1);
          }
        });
      });
      $3.each(["column", "row", "cell"], function(i2, type) {
        _api_register(type + "s().every()", function(fn) {
          var opts = this.selector.opts;
          var api = this;
          return this.iterator(type, function(settings, arg1, arg2, arg3, arg4) {
            fn.call(
              api[type](
                arg1,
                type === "cell" ? arg2 : opts,
                type === "cell" ? opts : undefined2
              ),
              arg1,
              arg2,
              arg3,
              arg4
            );
          });
        });
      });
      _api_register("i18n()", function(token, def, plural) {
        var ctx = this.context[0];
        var resolved = _fnGetObjectDataFn(token)(ctx.oLanguage);
        if (resolved === undefined2) {
          resolved = def;
        }
        if (plural !== undefined2 && $3.isPlainObject(resolved)) {
          resolved = resolved[plural] !== undefined2 ? resolved[plural] : resolved._;
        }
        return typeof resolved === "string" ? resolved.replace("%d", plural) : resolved;
      });
      DataTable2.version = "1.13.11";
      DataTable2.settings = [];
      DataTable2.models = {};
      DataTable2.models.oSearch = {
        "bCaseInsensitive": true,
        "sSearch": "",
        "bRegex": false,
        "bSmart": true,
        "return": false
      };
      DataTable2.models.oRow = {
        "nTr": null,
        "anCells": null,
        "_aData": [],
        "_aSortData": null,
        "_aFilterData": null,
        "_sFilterRow": null,
        "_sRowStripe": "",
        "src": null,
        "idx": -1
      };
      DataTable2.models.oColumn = {
        "idx": null,
        "aDataSort": null,
        "asSorting": null,
        "bSearchable": null,
        "bSortable": null,
        "bVisible": null,
        "_sManualType": null,
        "_bAttrSrc": false,
        "fnCreatedCell": null,
        "fnGetData": null,
        "fnSetData": null,
        "mData": null,
        "mRender": null,
        "nTh": null,
        "nTf": null,
        "sClass": null,
        "sContentPadding": null,
        "sDefaultContent": null,
        "sName": null,
        "sSortDataType": "std",
        "sSortingClass": null,
        "sSortingClassJUI": null,
        "sTitle": null,
        "sType": null,
        "sWidth": null,
        "sWidthOrig": null
      };
      DataTable2.defaults = {
        "aaData": null,
        "aaSorting": [[0, "asc"]],
        "aaSortingFixed": [],
        "ajax": null,
        "aLengthMenu": [10, 25, 50, 100],
        "aoColumns": null,
        "aoColumnDefs": null,
        "aoSearchCols": [],
        "asStripeClasses": null,
        "bAutoWidth": true,
        "bDeferRender": false,
        "bDestroy": false,
        "bFilter": true,
        "bInfo": true,
        "bLengthChange": true,
        "bPaginate": true,
        "bProcessing": false,
        "bRetrieve": false,
        "bScrollCollapse": false,
        "bServerSide": false,
        "bSort": true,
        "bSortMulti": true,
        "bSortCellsTop": false,
        "bSortClasses": true,
        "bStateSave": false,
        "fnCreatedRow": null,
        "fnDrawCallback": null,
        "fnFooterCallback": null,
        "fnFormatNumber": function(toFormat) {
          return toFormat.toString().replace(
            /\B(?=(\d{3})+(?!\d))/g,
            this.oLanguage.sThousands
          );
        },
        "fnHeaderCallback": null,
        "fnInfoCallback": null,
        "fnInitComplete": null,
        "fnPreDrawCallback": null,
        "fnRowCallback": null,
        "fnServerData": null,
        "fnServerParams": null,
        "fnStateLoadCallback": function(settings) {
          try {
            return JSON.parse(
              (settings.iStateDuration === -1 ? sessionStorage : localStorage).getItem(
                "DataTables_" + settings.sInstance + "_" + location.pathname
              )
            );
          } catch (e) {
            return {};
          }
        },
        "fnStateLoadParams": null,
        "fnStateLoaded": null,
        "fnStateSaveCallback": function(settings, data) {
          try {
            (settings.iStateDuration === -1 ? sessionStorage : localStorage).setItem(
              "DataTables_" + settings.sInstance + "_" + location.pathname,
              JSON.stringify(data)
            );
          } catch (e) {
          }
        },
        "fnStateSaveParams": null,
        "iStateDuration": 7200,
        "iDeferLoading": null,
        "iDisplayLength": 10,
        "iDisplayStart": 0,
        "iTabIndex": 0,
        "oClasses": {},
        "oLanguage": {
          "oAria": {
            "sSortAscending": ": activate to sort column ascending",
            "sSortDescending": ": activate to sort column descending"
          },
          "oPaginate": {
            "sFirst": "First",
            "sLast": "Last",
            "sNext": "Next",
            "sPrevious": "Previous"
          },
          "sEmptyTable": "No data available in table",
          "sInfo": "Showing _START_ to _END_ of _TOTAL_ entries",
          "sInfoEmpty": "Showing 0 to 0 of 0 entries",
          "sInfoFiltered": "(filtered from _MAX_ total entries)",
          "sInfoPostFix": "",
          "sDecimal": "",
          "sThousands": ",",
          "sLengthMenu": "Show _MENU_ entries",
          "sLoadingRecords": "Loading...",
          "sProcessing": "",
          "sSearch": "Search:",
          "sSearchPlaceholder": "",
          "sUrl": "",
          "sZeroRecords": "No matching records found"
        },
        "oSearch": $3.extend({}, DataTable2.models.oSearch),
        "sAjaxDataProp": "data",
        "sAjaxSource": null,
        "sDom": "lfrtip",
        "searchDelay": null,
        "sPaginationType": "simple_numbers",
        "sScrollX": "",
        "sScrollXInner": "",
        "sScrollY": "",
        "sServerMethod": "GET",
        "renderer": null,
        "rowId": "DT_RowId"
      };
      _fnHungarianMap(DataTable2.defaults);
      DataTable2.defaults.column = {
        "aDataSort": null,
        "iDataSort": -1,
        "asSorting": ["asc", "desc"],
        "bSearchable": true,
        "bSortable": true,
        "bVisible": true,
        "fnCreatedCell": null,
        "mData": null,
        "mRender": null,
        "sCellType": "td",
        "sClass": "",
        "sContentPadding": "",
        "sDefaultContent": null,
        "sName": "",
        "sSortDataType": "std",
        "sTitle": null,
        "sType": null,
        "sWidth": null
      };
      _fnHungarianMap(DataTable2.defaults.column);
      DataTable2.models.oSettings = {
        "oFeatures": {
          "bAutoWidth": null,
          "bDeferRender": null,
          "bFilter": null,
          "bInfo": null,
          "bLengthChange": null,
          "bPaginate": null,
          "bProcessing": null,
          "bServerSide": null,
          "bSort": null,
          "bSortMulti": null,
          "bSortClasses": null,
          "bStateSave": null
        },
        "oScroll": {
          "bCollapse": null,
          "iBarWidth": 0,
          "sX": null,
          "sXInner": null,
          "sY": null
        },
        "oLanguage": {
          "fnInfoCallback": null
        },
        "oBrowser": {
          "bScrollOversize": false,
          "bScrollbarLeft": false,
          "bBounding": false,
          "barWidth": 0
        },
        "ajax": null,
        "aanFeatures": [],
        "aoData": [],
        "aiDisplay": [],
        "aiDisplayMaster": [],
        "aIds": {},
        "aoColumns": [],
        "aoHeader": [],
        "aoFooter": [],
        "oPreviousSearch": {},
        "aoPreSearchCols": [],
        "aaSorting": null,
        "aaSortingFixed": [],
        "asStripeClasses": null,
        "asDestroyStripes": [],
        "sDestroyWidth": 0,
        "aoRowCallback": [],
        "aoHeaderCallback": [],
        "aoFooterCallback": [],
        "aoDrawCallback": [],
        "aoRowCreatedCallback": [],
        "aoPreDrawCallback": [],
        "aoInitComplete": [],
        "aoStateSaveParams": [],
        "aoStateLoadParams": [],
        "aoStateLoaded": [],
        "sTableId": "",
        "nTable": null,
        "nTHead": null,
        "nTFoot": null,
        "nTBody": null,
        "nTableWrapper": null,
        "bDeferLoading": false,
        "bInitialised": false,
        "aoOpenRows": [],
        "sDom": null,
        "searchDelay": null,
        "sPaginationType": "two_button",
        "iStateDuration": 0,
        "aoStateSave": [],
        "aoStateLoad": [],
        "oSavedState": null,
        "oLoadedState": null,
        "sAjaxSource": null,
        "sAjaxDataProp": null,
        "jqXHR": null,
        "json": undefined2,
        "oAjaxData": undefined2,
        "fnServerData": null,
        "aoServerParams": [],
        "sServerMethod": null,
        "fnFormatNumber": null,
        "aLengthMenu": null,
        "iDraw": 0,
        "bDrawing": false,
        "iDrawError": -1,
        "_iDisplayLength": 10,
        "_iDisplayStart": 0,
        "_iRecordsTotal": 0,
        "_iRecordsDisplay": 0,
        "oClasses": {},
        "bFiltered": false,
        "bSorted": false,
        "bSortCellsTop": null,
        "oInit": null,
        "aoDestroyCallback": [],
        "fnRecordsTotal": function() {
          return _fnDataSource(this) == "ssp" ? this._iRecordsTotal * 1 : this.aiDisplayMaster.length;
        },
        "fnRecordsDisplay": function() {
          return _fnDataSource(this) == "ssp" ? this._iRecordsDisplay * 1 : this.aiDisplay.length;
        },
        "fnDisplayEnd": function() {
          var len = this._iDisplayLength, start2 = this._iDisplayStart, calc = start2 + len, records = this.aiDisplay.length, features = this.oFeatures, paginate = features.bPaginate;
          if (features.bServerSide) {
            return paginate === false || len === -1 ? start2 + records : Math.min(start2 + len, this._iRecordsDisplay);
          } else {
            return !paginate || calc > records || len === -1 ? records : calc;
          }
        },
        "oInstance": null,
        "sInstance": null,
        "iTabIndex": 0,
        "nScrollHead": null,
        "nScrollFoot": null,
        "aLastSort": [],
        "oPlugins": {},
        "rowIdFn": null,
        "rowId": null
      };
      DataTable2.ext = _ext = {
        buttons: {},
        classes: {},
        builder: "-source-",
        errMode: "alert",
        feature: [],
        search: [],
        selector: {
          cell: [],
          column: [],
          row: []
        },
        internal: {},
        legacy: {
          ajax: null
        },
        pager: {},
        renderer: {
          pageButton: {},
          header: {}
        },
        order: {},
        type: {
          detect: [],
          search: {},
          order: {}
        },
        _unique: 0,
        fnVersionCheck: DataTable2.fnVersionCheck,
        iApiIndex: 0,
        oJUIClasses: {},
        sVersion: DataTable2.version
      };
      $3.extend(_ext, {
        afnFiltering: _ext.search,
        aTypes: _ext.type.detect,
        ofnSearch: _ext.type.search,
        oSort: _ext.type.order,
        afnSortData: _ext.order,
        aoFeatures: _ext.feature,
        oApi: _ext.internal,
        oStdClasses: _ext.classes,
        oPagination: _ext.pager
      });
      $3.extend(DataTable2.ext.classes, {
        "sTable": "dataTable",
        "sNoFooter": "no-footer",
        "sPageButton": "paginate_button",
        "sPageButtonActive": "current",
        "sPageButtonDisabled": "disabled",
        "sStripeOdd": "odd",
        "sStripeEven": "even",
        "sRowEmpty": "dataTables_empty",
        "sWrapper": "dataTables_wrapper",
        "sFilter": "dataTables_filter",
        "sInfo": "dataTables_info",
        "sPaging": "dataTables_paginate paging_",
        "sLength": "dataTables_length",
        "sProcessing": "dataTables_processing",
        "sSortAsc": "sorting_asc",
        "sSortDesc": "sorting_desc",
        "sSortable": "sorting",
        "sSortableAsc": "sorting_desc_disabled",
        "sSortableDesc": "sorting_asc_disabled",
        "sSortableNone": "sorting_disabled",
        "sSortColumn": "sorting_",
        "sFilterInput": "",
        "sLengthSelect": "",
        "sScrollWrapper": "dataTables_scroll",
        "sScrollHead": "dataTables_scrollHead",
        "sScrollHeadInner": "dataTables_scrollHeadInner",
        "sScrollBody": "dataTables_scrollBody",
        "sScrollFoot": "dataTables_scrollFoot",
        "sScrollFootInner": "dataTables_scrollFootInner",
        "sHeaderTH": "",
        "sFooterTH": "",
        "sSortJUIAsc": "",
        "sSortJUIDesc": "",
        "sSortJUI": "",
        "sSortJUIAscAllowed": "",
        "sSortJUIDescAllowed": "",
        "sSortJUIWrapper": "",
        "sSortIcon": "",
        "sJUIHeader": "",
        "sJUIFooter": ""
      });
      var extPagination = DataTable2.ext.pager;
      function _numbers(page, pages) {
        var numbers = [], buttons = extPagination.numbers_length, half = Math.floor(buttons / 2), i2 = 1;
        if (pages <= buttons) {
          numbers = _range(0, pages);
        } else if (page <= half) {
          numbers = _range(0, buttons - 2);
          numbers.push("ellipsis");
          numbers.push(pages - 1);
        } else if (page >= pages - 1 - half) {
          numbers = _range(pages - (buttons - 2), pages);
          numbers.splice(0, 0, "ellipsis");
          numbers.splice(0, 0, 0);
        } else {
          numbers = _range(page - half + 2, page + half - 1);
          numbers.push("ellipsis");
          numbers.push(pages - 1);
          numbers.splice(0, 0, "ellipsis");
          numbers.splice(0, 0, 0);
        }
        numbers.DT_el = "span";
        return numbers;
      }
      $3.extend(extPagination, {
        simple: function(page, pages) {
          return ["previous", "next"];
        },
        full: function(page, pages) {
          return ["first", "previous", "next", "last"];
        },
        numbers: function(page, pages) {
          return [_numbers(page, pages)];
        },
        simple_numbers: function(page, pages) {
          return ["previous", _numbers(page, pages), "next"];
        },
        full_numbers: function(page, pages) {
          return ["first", "previous", _numbers(page, pages), "next", "last"];
        },
        first_last_numbers: function(page, pages) {
          return ["first", _numbers(page, pages), "last"];
        },
        _numbers,
        numbers_length: 7
      });
      $3.extend(true, DataTable2.ext.renderer, {
        pageButton: {
          _: function(settings, host, idx, buttons, page, pages) {
            var classes = settings.oClasses;
            var lang = settings.oLanguage.oPaginate;
            var aria = settings.oLanguage.oAria.paginate || {};
            var btnDisplay, btnClass;
            var attach = function(container, buttons2) {
              var i2, ien, node, button;
              var disabledClass = classes.sPageButtonDisabled;
              var clickHandler = function(e) {
                _fnPageChange(settings, e.data.action, true);
              };
              for (i2 = 0, ien = buttons2.length; i2 < ien; i2++) {
                button = buttons2[i2];
                if (Array.isArray(button)) {
                  var inner = $3("<" + (button.DT_el || "div") + "/>").appendTo(container);
                  attach(inner, button);
                } else {
                  var disabled = false;
                  btnDisplay = null;
                  btnClass = button;
                  switch (button) {
                    case "ellipsis":
                      container.append('<span class="ellipsis">&#x2026;</span>');
                      break;
                    case "first":
                      btnDisplay = lang.sFirst;
                      if (page === 0) {
                        disabled = true;
                      }
                      break;
                    case "previous":
                      btnDisplay = lang.sPrevious;
                      if (page === 0) {
                        disabled = true;
                      }
                      break;
                    case "next":
                      btnDisplay = lang.sNext;
                      if (pages === 0 || page === pages - 1) {
                        disabled = true;
                      }
                      break;
                    case "last":
                      btnDisplay = lang.sLast;
                      if (pages === 0 || page === pages - 1) {
                        disabled = true;
                      }
                      break;
                    default:
                      btnDisplay = settings.fnFormatNumber(button + 1);
                      btnClass = page === button ? classes.sPageButtonActive : "";
                      break;
                  }
                  if (btnDisplay !== null) {
                    var tag = settings.oInit.pagingTag || "a";
                    if (disabled) {
                      btnClass += " " + disabledClass;
                    }
                    node = $3("<" + tag + ">", {
                      "class": classes.sPageButton + " " + btnClass,
                      "aria-controls": settings.sTableId,
                      "aria-disabled": disabled ? "true" : null,
                      "aria-label": aria[button],
                      "role": "link",
                      "aria-current": btnClass === classes.sPageButtonActive ? "page" : null,
                      "data-dt-idx": button,
                      "tabindex": disabled ? -1 : settings.iTabIndex,
                      "id": idx === 0 && typeof button === "string" ? settings.sTableId + "_" + button : null
                    }).html(btnDisplay).appendTo(container);
                    _fnBindAction(
                      node,
                      { action: button },
                      clickHandler
                    );
                  }
                }
              }
            };
            var activeEl;
            try {
              activeEl = $3(host).find(document2.activeElement).data("dt-idx");
            } catch (e) {
            }
            attach($3(host).empty(), buttons);
            if (activeEl !== undefined2) {
              $3(host).find("[data-dt-idx=" + activeEl + "]").trigger("focus");
            }
          }
        }
      });
      $3.extend(DataTable2.ext.type.detect, [
        function(d, settings) {
          var decimal = settings.oLanguage.sDecimal;
          return _isNumber(d, decimal) ? "num" + decimal : null;
        },
        function(d, settings) {
          if (d && !(d instanceof Date) && !_re_date.test(d)) {
            return null;
          }
          var parsed = Date.parse(d);
          return parsed !== null && !isNaN(parsed) || _empty(d) ? "date" : null;
        },
        function(d, settings) {
          var decimal = settings.oLanguage.sDecimal;
          return _isNumber(d, decimal, true) ? "num-fmt" + decimal : null;
        },
        function(d, settings) {
          var decimal = settings.oLanguage.sDecimal;
          return _htmlNumeric(d, decimal) ? "html-num" + decimal : null;
        },
        function(d, settings) {
          var decimal = settings.oLanguage.sDecimal;
          return _htmlNumeric(d, decimal, true) ? "html-num-fmt" + decimal : null;
        },
        function(d, settings) {
          return _empty(d) || typeof d === "string" && d.indexOf("<") !== -1 ? "html" : null;
        }
      ]);
      $3.extend(DataTable2.ext.type.search, {
        html: function(data) {
          return _empty(data) ? data : typeof data === "string" ? data.replace(_re_new_lines, " ").replace(_re_html, "") : "";
        },
        string: function(data) {
          return _empty(data) ? data : typeof data === "string" ? data.replace(_re_new_lines, " ") : data;
        }
      });
      var __numericReplace = function(d, decimalPlace, re1, re2) {
        if (d !== 0 && (!d || d === "-")) {
          return -Infinity;
        }
        var type = typeof d;
        if (type === "number" || type === "bigint") {
          return d;
        }
        if (decimalPlace) {
          d = _numToDecimal(d, decimalPlace);
        }
        if (d.replace) {
          if (re1) {
            d = d.replace(re1, "");
          }
          if (re2) {
            d = d.replace(re2, "");
          }
        }
        return d * 1;
      };
      function _addNumericSort(decimalPlace) {
        $3.each(
          {
            "num": function(d) {
              return __numericReplace(d, decimalPlace);
            },
            "num-fmt": function(d) {
              return __numericReplace(d, decimalPlace, _re_formatted_numeric);
            },
            "html-num": function(d) {
              return __numericReplace(d, decimalPlace, _re_html);
            },
            "html-num-fmt": function(d) {
              return __numericReplace(d, decimalPlace, _re_html, _re_formatted_numeric);
            }
          },
          function(key, fn) {
            _ext.type.order[key + decimalPlace + "-pre"] = fn;
            if (key.match(/^html\-/)) {
              _ext.type.search[key + decimalPlace] = _ext.type.search.html;
            }
          }
        );
      }
      $3.extend(_ext.type.order, {
        "date-pre": function(d) {
          var ts = Date.parse(d);
          return isNaN(ts) ? -Infinity : ts;
        },
        "html-pre": function(a) {
          return _empty(a) ? "" : a.replace ? a.replace(/<.*?>/g, "").toLowerCase() : a + "";
        },
        "string-pre": function(a) {
          return _empty(a) ? "" : typeof a === "string" ? a.toLowerCase() : !a.toString ? "" : a.toString();
        },
        "string-asc": function(x, y) {
          return x < y ? -1 : x > y ? 1 : 0;
        },
        "string-desc": function(x, y) {
          return x < y ? 1 : x > y ? -1 : 0;
        }
      });
      _addNumericSort("");
      $3.extend(true, DataTable2.ext.renderer, {
        header: {
          _: function(settings, cell, column, classes) {
            $3(settings.nTable).on("order.dt.DT", function(e, ctx, sorting, columns) {
              if (settings !== ctx) {
                return;
              }
              var colIdx = column.idx;
              cell.removeClass(
                classes.sSortAsc + " " + classes.sSortDesc
              ).addClass(
                columns[colIdx] == "asc" ? classes.sSortAsc : columns[colIdx] == "desc" ? classes.sSortDesc : column.sSortingClass
              );
            });
          },
          jqueryui: function(settings, cell, column, classes) {
            $3("<div/>").addClass(classes.sSortJUIWrapper).append(cell.contents()).append(
              $3("<span/>").addClass(classes.sSortIcon + " " + column.sSortingClassJUI)
            ).appendTo(cell);
            $3(settings.nTable).on("order.dt.DT", function(e, ctx, sorting, columns) {
              if (settings !== ctx) {
                return;
              }
              var colIdx = column.idx;
              cell.removeClass(classes.sSortAsc + " " + classes.sSortDesc).addClass(
                columns[colIdx] == "asc" ? classes.sSortAsc : columns[colIdx] == "desc" ? classes.sSortDesc : column.sSortingClass
              );
              cell.find("span." + classes.sSortIcon).removeClass(
                classes.sSortJUIAsc + " " + classes.sSortJUIDesc + " " + classes.sSortJUI + " " + classes.sSortJUIAscAllowed + " " + classes.sSortJUIDescAllowed
              ).addClass(
                columns[colIdx] == "asc" ? classes.sSortJUIAsc : columns[colIdx] == "desc" ? classes.sSortJUIDesc : column.sSortingClassJUI
              );
            });
          }
        }
      });
      var __htmlEscapeEntities = function(d) {
        if (Array.isArray(d)) {
          d = d.join(",");
        }
        return typeof d === "string" ? d.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;") : d;
      };
      function __mld(dt, momentFn, luxonFn, dateFn, arg1) {
        if (window2.moment) {
          return dt[momentFn](arg1);
        } else if (window2.luxon) {
          return dt[luxonFn](arg1);
        }
        return dateFn ? dt[dateFn](arg1) : dt;
      }
      var __mlWarning = false;
      function __mldObj(d, format, locale) {
        var dt;
        if (window2.moment) {
          dt = window2.moment.utc(d, format, locale, true);
          if (!dt.isValid()) {
            return null;
          }
        } else if (window2.luxon) {
          dt = format && typeof d === "string" ? window2.luxon.DateTime.fromFormat(d, format) : window2.luxon.DateTime.fromISO(d);
          if (!dt.isValid) {
            return null;
          }
          dt.setLocale(locale);
        } else if (!format) {
          dt = new Date(d);
        } else {
          if (!__mlWarning) {
            alert("DataTables warning: Formatted date without Moment.js or Luxon - https://datatables.net/tn/17");
          }
          __mlWarning = true;
        }
        return dt;
      }
      function __mlHelper(localeString) {
        return function(from, to, locale, def) {
          if (arguments.length === 0) {
            locale = "en";
            to = null;
            from = null;
          } else if (arguments.length === 1) {
            locale = "en";
            to = from;
            from = null;
          } else if (arguments.length === 2) {
            locale = to;
            to = from;
            from = null;
          }
          var typeName = "datetime-" + to;
          if (!DataTable2.ext.type.order[typeName]) {
            DataTable2.ext.type.detect.unshift(function(d) {
              return d === typeName ? typeName : false;
            });
            DataTable2.ext.type.order[typeName + "-asc"] = function(a, b) {
              var x = a.valueOf();
              var y = b.valueOf();
              return x === y ? 0 : x < y ? -1 : 1;
            };
            DataTable2.ext.type.order[typeName + "-desc"] = function(a, b) {
              var x = a.valueOf();
              var y = b.valueOf();
              return x === y ? 0 : x > y ? -1 : 1;
            };
          }
          return function(d, type) {
            if (d === null || d === undefined2) {
              if (def === "--now") {
                var local = new Date();
                d = new Date(Date.UTC(
                  local.getFullYear(),
                  local.getMonth(),
                  local.getDate(),
                  local.getHours(),
                  local.getMinutes(),
                  local.getSeconds()
                ));
              } else {
                d = "";
              }
            }
            if (type === "type") {
              return typeName;
            }
            if (d === "") {
              return type !== "sort" ? "" : __mldObj("0000-01-01 00:00:00", null, locale);
            }
            if (to !== null && from === to && type !== "sort" && type !== "type" && !(d instanceof Date)) {
              return d;
            }
            var dt = __mldObj(d, from, locale);
            if (dt === null) {
              return d;
            }
            if (type === "sort") {
              return dt;
            }
            var formatted = to === null ? __mld(dt, "toDate", "toJSDate", "")[localeString]() : __mld(dt, "format", "toFormat", "toISOString", to);
            return type === "display" ? __htmlEscapeEntities(formatted) : formatted;
          };
        };
      }
      var __thousands = ",";
      var __decimal = ".";
      if (window2.Intl !== undefined2) {
        try {
          var num = new Intl.NumberFormat().formatToParts(100000.1);
          for (var i = 0; i < num.length; i++) {
            if (num[i].type === "group") {
              __thousands = num[i].value;
            } else if (num[i].type === "decimal") {
              __decimal = num[i].value;
            }
          }
        } catch (e) {
        }
      }
      DataTable2.datetime = function(format, locale) {
        var typeName = "datetime-detect-" + format;
        if (!locale) {
          locale = "en";
        }
        if (!DataTable2.ext.type.order[typeName]) {
          DataTable2.ext.type.detect.unshift(function(d) {
            var dt = __mldObj(d, format, locale);
            return d === "" || dt ? typeName : false;
          });
          DataTable2.ext.type.order[typeName + "-pre"] = function(d) {
            return __mldObj(d, format, locale) || 0;
          };
        }
      };
      DataTable2.render = {
        date: __mlHelper("toLocaleDateString"),
        datetime: __mlHelper("toLocaleString"),
        time: __mlHelper("toLocaleTimeString"),
        number: function(thousands, decimal, precision, prefix, postfix) {
          if (thousands === null || thousands === undefined2) {
            thousands = __thousands;
          }
          if (decimal === null || decimal === undefined2) {
            decimal = __decimal;
          }
          return {
            display: function(d) {
              if (typeof d !== "number" && typeof d !== "string") {
                return d;
              }
              if (d === "" || d === null) {
                return d;
              }
              var negative = d < 0 ? "-" : "";
              var flo = parseFloat(d);
              if (isNaN(flo)) {
                return __htmlEscapeEntities(d);
              }
              flo = flo.toFixed(precision);
              d = Math.abs(flo);
              var intPart = parseInt(d, 10);
              var floatPart = precision ? decimal + (d - intPart).toFixed(precision).substring(2) : "";
              if (intPart === 0 && parseFloat(floatPart) === 0) {
                negative = "";
              }
              return negative + (prefix || "") + intPart.toString().replace(
                /\B(?=(\d{3})+(?!\d))/g,
                thousands
              ) + floatPart + (postfix || "");
            }
          };
        },
        text: function() {
          return {
            display: __htmlEscapeEntities,
            filter: __htmlEscapeEntities
          };
        }
      };
      function _fnExternApiFunc(fn) {
        return function() {
          var args = [_fnSettingsFromNode(this[DataTable2.ext.iApiIndex])].concat(
            Array.prototype.slice.call(arguments)
          );
          return DataTable2.ext.internal[fn].apply(this, args);
        };
      }
      $3.extend(DataTable2.ext.internal, {
        _fnExternApiFunc,
        _fnBuildAjax,
        _fnAjaxUpdate,
        _fnAjaxParameters,
        _fnAjaxUpdateDraw,
        _fnAjaxDataSrc,
        _fnAddColumn,
        _fnColumnOptions,
        _fnAdjustColumnSizing,
        _fnVisibleToColumnIndex,
        _fnColumnIndexToVisible,
        _fnVisbleColumns,
        _fnGetColumns,
        _fnColumnTypes,
        _fnApplyColumnDefs,
        _fnHungarianMap,
        _fnCamelToHungarian,
        _fnLanguageCompat,
        _fnBrowserDetect,
        _fnAddData,
        _fnAddTr,
        _fnNodeToDataIndex,
        _fnNodeToColumnIndex,
        _fnGetCellData,
        _fnSetCellData,
        _fnSplitObjNotation,
        _fnGetObjectDataFn,
        _fnSetObjectDataFn,
        _fnGetDataMaster,
        _fnClearTable,
        _fnDeleteIndex,
        _fnInvalidate,
        _fnGetRowElements,
        _fnCreateTr,
        _fnBuildHead,
        _fnDrawHead,
        _fnDraw,
        _fnReDraw,
        _fnAddOptionsHtml,
        _fnDetectHeader,
        _fnGetUniqueThs,
        _fnFeatureHtmlFilter,
        _fnFilterComplete,
        _fnFilterCustom,
        _fnFilterColumn,
        _fnFilter,
        _fnFilterCreateSearch,
        _fnEscapeRegex,
        _fnFilterData,
        _fnFeatureHtmlInfo,
        _fnUpdateInfo,
        _fnInfoMacros,
        _fnInitialise,
        _fnInitComplete,
        _fnLengthChange,
        _fnFeatureHtmlLength,
        _fnFeatureHtmlPaginate,
        _fnPageChange,
        _fnFeatureHtmlProcessing,
        _fnProcessingDisplay,
        _fnFeatureHtmlTable,
        _fnScrollDraw,
        _fnApplyToChildren,
        _fnCalculateColumnWidths,
        _fnThrottle,
        _fnConvertToWidth,
        _fnGetWidestNode,
        _fnGetMaxLenString,
        _fnStringToCss,
        _fnSortFlatten,
        _fnSort,
        _fnSortAria,
        _fnSortListener,
        _fnSortAttachListener,
        _fnSortingClasses,
        _fnSortData,
        _fnSaveState,
        _fnLoadState,
        _fnImplementState,
        _fnSettingsFromNode,
        _fnLog,
        _fnMap,
        _fnBindAction,
        _fnCallbackReg,
        _fnCallbackFire,
        _fnLengthOverflow,
        _fnRenderer,
        _fnDataSource,
        _fnRowAttributes,
        _fnExtend,
        _fnCalculateEnd: function() {
        }
      });
      $3.fn.dataTable = DataTable2;
      DataTable2.$ = $3;
      $3.fn.dataTableSettings = DataTable2.settings;
      $3.fn.dataTableExt = DataTable2.ext;
      $3.fn.DataTable = function(opts) {
        return $3(this).dataTable(opts).api();
      };
      $3.each(DataTable2, function(prop, val) {
        $3.fn.DataTable[prop] = val;
      });
      return DataTable2;
    });
  }
});

// node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js
var require_dataTables_bootstrap4 = __commonJS({
  "node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js"(exports, module) {
    (function(factory) {
      if (typeof define === "function" && define.amd) {
        define(["jquery", "datatables.net"], function($3) {
          return factory($3, window, document);
        });
      } else if (typeof exports === "object") {
        var jq = require_jquery();
        var cjsRequires = function(root, $3) {
          if (!$3.fn.dataTable) {
            require_jquery_dataTables()(root, $3);
          }
        };
        if (typeof window === "undefined") {
          module.exports = function(root, $3) {
            if (!root) {
              root = window;
            }
            if (!$3) {
              $3 = jq(root);
            }
            cjsRequires(root, $3);
            return factory($3, root, root.document);
          };
        } else {
          cjsRequires(window, jq);
          module.exports = factory(jq, window, window.document);
        }
      } else {
        factory(jQuery, window, document);
      }
    })(function($3, window2, document2, undefined2) {
      "use strict";
      var DataTable2 = $3.fn.dataTable;
      $3.extend(true, DataTable2.defaults, {
        dom: "<'row'<'col-sm-12 col-md-6'l><'col-sm-12 col-md-6'f>><'row'<'col-sm-12'tr>><'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",
        renderer: "bootstrap"
      });
      $3.extend(DataTable2.ext.classes, {
        sWrapper: "dataTables_wrapper dt-bootstrap4",
        sFilterInput: "form-control form-control-sm",
        sLengthSelect: "custom-select custom-select-sm form-control form-control-sm",
        sProcessing: "dataTables_processing card",
        sPageButton: "paginate_button page-item"
      });
      DataTable2.ext.renderer.pageButton.bootstrap = function(settings, host, idx, buttons, page, pages) {
        var api = new DataTable2.Api(settings);
        var classes = settings.oClasses;
        var lang = settings.oLanguage.oPaginate;
        var aria = settings.oLanguage.oAria.paginate || {};
        var btnDisplay, btnClass;
        var attach = function(container, buttons2) {
          var i, ien, node, button;
          var clickHandler = function(e) {
            e.preventDefault();
            if (!$3(e.currentTarget).hasClass("disabled") && api.page() != e.data.action) {
              api.page(e.data.action).draw("page");
            }
          };
          for (i = 0, ien = buttons2.length; i < ien; i++) {
            button = buttons2[i];
            if (Array.isArray(button)) {
              attach(container, button);
            } else {
              btnDisplay = "";
              btnClass = "";
              switch (button) {
                case "ellipsis":
                  btnDisplay = "&#x2026;";
                  btnClass = "disabled";
                  break;
                case "first":
                  btnDisplay = lang.sFirst;
                  btnClass = button + (page > 0 ? "" : " disabled");
                  break;
                case "previous":
                  btnDisplay = lang.sPrevious;
                  btnClass = button + (page > 0 ? "" : " disabled");
                  break;
                case "next":
                  btnDisplay = lang.sNext;
                  btnClass = button + (page < pages - 1 ? "" : " disabled");
                  break;
                case "last":
                  btnDisplay = lang.sLast;
                  btnClass = button + (page < pages - 1 ? "" : " disabled");
                  break;
                default:
                  btnDisplay = button + 1;
                  btnClass = page === button ? "active" : "";
                  break;
              }
              if (btnDisplay) {
                var disabled = btnClass.indexOf("disabled") !== -1;
                node = $3("<li>", {
                  "class": classes.sPageButton + " " + btnClass,
                  "id": idx === 0 && typeof button === "string" ? settings.sTableId + "_" + button : null
                }).append(
                  $3("<a>", {
                    "href": disabled ? null : "#",
                    "aria-controls": settings.sTableId,
                    "aria-disabled": disabled ? "true" : null,
                    "aria-label": aria[button],
                    "role": "link",
                    "aria-current": btnClass === "active" ? "page" : null,
                    "data-dt-idx": button,
                    "tabindex": disabled ? -1 : settings.iTabIndex,
                    "class": "page-link"
                  }).html(btnDisplay)
                ).appendTo(container);
                settings.oApi._fnBindAction(
                  node,
                  { action: button },
                  clickHandler
                );
              }
            }
          }
        };
        var activeEl;
        try {
          activeEl = $3(host).find(document2.activeElement).data("dt-idx");
        } catch (e) {
        }
        attach(
          $3(host).empty().html('<ul class="pagination"/>').children("ul"),
          buttons
        );
        if (activeEl !== undefined2) {
          $3(host).find("[data-dt-idx=" + activeEl + "]").trigger("focus");
        }
      };
      return DataTable2;
    });
  }
});

// node_modules/datatables.net-select/js/dataTables.select.js
var require_dataTables_select = __commonJS({
  "node_modules/datatables.net-select/js/dataTables.select.js"(exports, module) {
    (function(factory) {
      if (typeof define === "function" && define.amd) {
        define(["jquery", "datatables.net"], function($3) {
          return factory($3, window, document);
        });
      } else if (typeof exports === "object") {
        var jq = require_jquery();
        var cjsRequires = function(root, $3) {
          if (!$3.fn.dataTable) {
            require_jquery_dataTables()(root, $3);
          }
        };
        if (typeof window === "undefined") {
          module.exports = function(root, $3) {
            if (!root) {
              root = window;
            }
            if (!$3) {
              $3 = jq(root);
            }
            cjsRequires(root, $3);
            return factory($3, root, root.document);
          };
        } else {
          cjsRequires(window, jq);
          module.exports = factory(jq, window, window.document);
        }
      } else {
        factory(jQuery, window, document);
      }
    })(function($3, window2, document2, undefined2) {
      "use strict";
      var DataTable2 = $3.fn.dataTable;
      DataTable2.select = {};
      DataTable2.select.version = "1.7.0-dev";
      DataTable2.select.init = function(dt) {
        var ctx = dt.settings()[0];
        if (ctx._select) {
          return;
        }
        var savedSelected = dt.state.loaded();
        var selectAndSave = function(e, settings, data) {
          if (data === null || data.select === undefined2) {
            return;
          }
          if (dt.rows({ selected: true }).any()) {
            dt.rows().deselect();
          }
          if (data.select.rows !== undefined2) {
            dt.rows(data.select.rows).select();
          }
          if (dt.columns({ selected: true }).any()) {
            dt.columns().deselect();
          }
          if (data.select.columns !== undefined2) {
            dt.columns(data.select.columns).select();
          }
          if (dt.cells({ selected: true }).any()) {
            dt.cells().deselect();
          }
          if (data.select.cells !== undefined2) {
            for (var i = 0; i < data.select.cells.length; i++) {
              dt.cell(data.select.cells[i].row, data.select.cells[i].column).select();
            }
          }
          dt.state.save();
        };
        dt.on("stateSaveParams", function(e, settings, data) {
          data.select = {};
          data.select.rows = dt.rows({ selected: true }).ids(true).toArray();
          data.select.columns = dt.columns({ selected: true })[0];
          data.select.cells = dt.cells({ selected: true })[0].map(function(coords) {
            return { row: dt.row(coords.row).id(true), column: coords.column };
          });
        }).on("stateLoadParams", selectAndSave).one("init", function() {
          selectAndSave(undefined2, undefined2, savedSelected);
        });
        var init2 = ctx.oInit.select;
        var defaults = DataTable2.defaults.select;
        var opts = init2 === undefined2 ? defaults : init2;
        var items = "row";
        var style = "api";
        var blurable = false;
        var toggleable = true;
        var info2 = true;
        var selector = "td, th";
        var className = "selected";
        var setStyle = false;
        ctx._select = {};
        if (opts === true) {
          style = "os";
          setStyle = true;
        } else if (typeof opts === "string") {
          style = opts;
          setStyle = true;
        } else if ($3.isPlainObject(opts)) {
          if (opts.blurable !== undefined2) {
            blurable = opts.blurable;
          }
          if (opts.toggleable !== undefined2) {
            toggleable = opts.toggleable;
          }
          if (opts.info !== undefined2) {
            info2 = opts.info;
          }
          if (opts.items !== undefined2) {
            items = opts.items;
          }
          if (opts.style !== undefined2) {
            style = opts.style;
            setStyle = true;
          } else {
            style = "os";
            setStyle = true;
          }
          if (opts.selector !== undefined2) {
            selector = opts.selector;
          }
          if (opts.className !== undefined2) {
            className = opts.className;
          }
        }
        dt.select.selector(selector);
        dt.select.items(items);
        dt.select.style(style);
        dt.select.blurable(blurable);
        dt.select.toggleable(toggleable);
        dt.select.info(info2);
        ctx._select.className = className;
        $3.fn.dataTable.ext.order["select-checkbox"] = function(settings, col) {
          return this.api().column(col, { order: "index" }).nodes().map(function(td) {
            if (settings._select.items === "row") {
              return $3(td).parent().hasClass(settings._select.className);
            } else if (settings._select.items === "cell") {
              return $3(td).hasClass(settings._select.className);
            }
            return false;
          });
        };
        if (!setStyle && $3(dt.table().node()).hasClass("selectable")) {
          dt.select.style("os");
        }
      };
      function cellRange(dt, idx, last) {
        var indexes;
        var columnIndexes;
        var rowIndexes;
        var selectColumns = function(start2, end) {
          if (start2 > end) {
            var tmp = end;
            end = start2;
            start2 = tmp;
          }
          var record = false;
          return dt.columns(":visible").indexes().filter(function(i) {
            if (i === start2) {
              record = true;
            }
            if (i === end) {
              record = false;
              return true;
            }
            return record;
          });
        };
        var selectRows = function(start2, end) {
          var indexes2 = dt.rows({ search: "applied" }).indexes();
          if (indexes2.indexOf(start2) > indexes2.indexOf(end)) {
            var tmp = end;
            end = start2;
            start2 = tmp;
          }
          var record = false;
          return indexes2.filter(function(i) {
            if (i === start2) {
              record = true;
            }
            if (i === end) {
              record = false;
              return true;
            }
            return record;
          });
        };
        if (!dt.cells({ selected: true }).any() && !last) {
          columnIndexes = selectColumns(0, idx.column);
          rowIndexes = selectRows(0, idx.row);
        } else {
          columnIndexes = selectColumns(last.column, idx.column);
          rowIndexes = selectRows(last.row, idx.row);
        }
        indexes = dt.cells(rowIndexes, columnIndexes).flatten();
        if (!dt.cells(idx, { selected: true }).any()) {
          dt.cells(indexes).select();
        } else {
          dt.cells(indexes).deselect();
        }
      }
      function disableMouseSelection(dt) {
        var ctx = dt.settings()[0];
        var selector = ctx._select.selector;
        $3(dt.table().container()).off("mousedown.dtSelect", selector).off("mouseup.dtSelect", selector).off("click.dtSelect", selector);
        $3("body").off("click.dtSelect" + _safeId(dt.table().node()));
      }
      function enableMouseSelection(dt) {
        var container = $3(dt.table().container());
        var ctx = dt.settings()[0];
        var selector = ctx._select.selector;
        var matchSelection;
        container.on("mousedown.dtSelect", selector, function(e) {
          if (e.shiftKey || e.metaKey || e.ctrlKey) {
            container.css("-moz-user-select", "none").one("selectstart.dtSelect", selector, function() {
              return false;
            });
          }
          if (window2.getSelection) {
            matchSelection = window2.getSelection();
          }
        }).on("mouseup.dtSelect", selector, function() {
          container.css("-moz-user-select", "");
        }).on("click.dtSelect", selector, function(e) {
          var items = dt.select.items();
          var idx;
          if (matchSelection) {
            var selection = window2.getSelection();
            if (!selection.anchorNode || $3(selection.anchorNode).closest("table")[0] === dt.table().node()) {
              if (selection !== matchSelection) {
                return;
              }
            }
          }
          var ctx2 = dt.settings()[0];
          var wrapperClass = dt.settings()[0].oClasses.sWrapper.trim().replace(/ +/g, ".");
          if ($3(e.target).closest("div." + wrapperClass)[0] != dt.table().container()) {
            return;
          }
          var cell = dt.cell($3(e.target).closest("td, th"));
          if (!cell.any()) {
            return;
          }
          var event = $3.Event("user-select.dt");
          eventTrigger(dt, event, [items, cell, e]);
          if (event.isDefaultPrevented()) {
            return;
          }
          var cellIndex = cell.index();
          if (items === "row") {
            idx = cellIndex.row;
            typeSelect(e, dt, ctx2, "row", idx);
          } else if (items === "column") {
            idx = cell.index().column;
            typeSelect(e, dt, ctx2, "column", idx);
          } else if (items === "cell") {
            idx = cell.index();
            typeSelect(e, dt, ctx2, "cell", idx);
          }
          ctx2._select_lastCell = cellIndex;
        });
        $3("body").on("click.dtSelect" + _safeId(dt.table().node()), function(e) {
          if (ctx._select.blurable) {
            if ($3(e.target).parents().filter(dt.table().container()).length) {
              return;
            }
            if ($3(e.target).parents("html").length === 0) {
              return;
            }
            if ($3(e.target).parents("div.DTE").length) {
              return;
            }
            var event = $3.Event("select-blur.dt");
            eventTrigger(dt, event, [e.target, e]);
            if (event.isDefaultPrevented()) {
              return;
            }
            clear(ctx, true);
          }
        });
      }
      function eventTrigger(api, type, args, any) {
        if (any && !api.flatten().length) {
          return;
        }
        if (typeof type === "string") {
          type = type + ".dt";
        }
        args.unshift(api);
        $3(api.table().node()).trigger(type, args);
      }
      function info(api) {
        var ctx = api.settings()[0];
        if (!ctx._select.info || !ctx.aanFeatures.i) {
          return;
        }
        if (api.select.style() === "api") {
          return;
        }
        var rows = api.rows({ selected: true }).flatten().length;
        var columns = api.columns({ selected: true }).flatten().length;
        var cells = api.cells({ selected: true }).flatten().length;
        var add = function(el, name, num) {
          el.append(
            $3('<span class="select-item"/>').append(
              api.i18n(
                "select." + name + "s",
                { _: "%d " + name + "s selected", 0: "", 1: "1 " + name + " selected" },
                num
              )
            )
          );
        };
        $3.each(ctx.aanFeatures.i, function(i, el) {
          el = $3(el);
          var output = $3('<span class="select-info"/>');
          add(output, "row", rows);
          add(output, "column", columns);
          add(output, "cell", cells);
          var exisiting = el.children("span.select-info");
          if (exisiting.length) {
            exisiting.remove();
          }
          if (output.text() !== "") {
            el.append(output);
          }
        });
      }
      function init(ctx) {
        var api = new DataTable2.Api(ctx);
        ctx._select_init = true;
        ctx.aoRowCreatedCallback.push({
          fn: function(row, data, index) {
            var i, ien;
            var d = ctx.aoData[index];
            if (d._select_selected) {
              $3(row).addClass(ctx._select.className);
            }
            for (i = 0, ien = ctx.aoColumns.length; i < ien; i++) {
              if (ctx.aoColumns[i]._select_selected || d._selected_cells && d._selected_cells[i]) {
                $3(d.anCells[i]).addClass(ctx._select.className);
              }
            }
          },
          sName: "select-deferRender"
        });
        api.on("preXhr.dt.dtSelect", function(e, settings) {
          if (settings !== api.settings()[0]) {
            return;
          }
          var rows = api.rows({ selected: true }).ids(true).filter(function(d) {
            return d !== undefined2;
          });
          var cells = api.cells({ selected: true }).eq(0).map(function(cellIdx) {
            var id = api.row(cellIdx.row).id(true);
            return id ? { row: id, column: cellIdx.column } : undefined2;
          }).filter(function(d) {
            return d !== undefined2;
          });
          api.one("draw.dt.dtSelect", function() {
            api.rows(rows).select();
            if (cells.any()) {
              cells.each(function(id) {
                api.cells(id.row, id.column).select();
              });
            }
          });
        });
        api.on("draw.dtSelect.dt select.dtSelect.dt deselect.dtSelect.dt info.dt", function() {
          info(api);
          api.state.save();
        });
        api.on("destroy.dtSelect", function() {
          $3(api.rows({ selected: true }).nodes()).removeClass(api.settings()[0]._select.className);
          disableMouseSelection(api);
          api.off(".dtSelect");
          $3("body").off(".dtSelect" + _safeId(api.table().node()));
        });
      }
      function rowColumnRange(dt, type, idx, last) {
        var indexes = dt[type + "s"]({ search: "applied" }).indexes();
        var idx1 = $3.inArray(last, indexes);
        var idx2 = $3.inArray(idx, indexes);
        if (!dt[type + "s"]({ selected: true }).any() && idx1 === -1) {
          indexes.splice($3.inArray(idx, indexes) + 1, indexes.length);
        } else {
          if (idx1 > idx2) {
            var tmp = idx2;
            idx2 = idx1;
            idx1 = tmp;
          }
          indexes.splice(idx2 + 1, indexes.length);
          indexes.splice(0, idx1);
        }
        if (!dt[type](idx, { selected: true }).any()) {
          dt[type + "s"](indexes).select();
        } else {
          indexes.splice($3.inArray(idx, indexes), 1);
          dt[type + "s"](indexes).deselect();
        }
      }
      function clear(ctx, force) {
        if (force || ctx._select.style === "single") {
          var api = new DataTable2.Api(ctx);
          api.rows({ selected: true }).deselect();
          api.columns({ selected: true }).deselect();
          api.cells({ selected: true }).deselect();
        }
      }
      function typeSelect(e, dt, ctx, type, idx) {
        var style = dt.select.style();
        var toggleable = dt.select.toggleable();
        var isSelected = dt[type](idx, { selected: true }).any();
        if (isSelected && !toggleable) {
          return;
        }
        if (style === "os") {
          if (e.ctrlKey || e.metaKey) {
            dt[type](idx).select(!isSelected);
          } else if (e.shiftKey) {
            if (type === "cell") {
              cellRange(dt, idx, ctx._select_lastCell || null);
            } else {
              rowColumnRange(
                dt,
                type,
                idx,
                ctx._select_lastCell ? ctx._select_lastCell[type] : null
              );
            }
          } else {
            var selected = dt[type + "s"]({ selected: true });
            if (isSelected && selected.flatten().length === 1) {
              dt[type](idx).deselect();
            } else {
              selected.deselect();
              dt[type](idx).select();
            }
          }
        } else if (style == "multi+shift") {
          if (e.shiftKey) {
            if (type === "cell") {
              cellRange(dt, idx, ctx._select_lastCell || null);
            } else {
              rowColumnRange(
                dt,
                type,
                idx,
                ctx._select_lastCell ? ctx._select_lastCell[type] : null
              );
            }
          } else {
            dt[type](idx).select(!isSelected);
          }
        } else {
          dt[type](idx).select(!isSelected);
        }
      }
      function _safeId(node) {
        return node.id.replace(/[^a-zA-Z0-9\-\_]/g, "-");
      }
      $3.each(
        [
          { type: "row", prop: "aoData" },
          { type: "column", prop: "aoColumns" }
        ],
        function(i, o) {
          DataTable2.ext.selector[o.type].push(function(settings, opts, indexes) {
            var selected = opts.selected;
            var data;
            var out = [];
            if (selected !== true && selected !== false) {
              return indexes;
            }
            for (var i2 = 0, ien = indexes.length; i2 < ien; i2++) {
              data = settings[o.prop][indexes[i2]];
              if (selected === true && data._select_selected === true || selected === false && !data._select_selected) {
                out.push(indexes[i2]);
              }
            }
            return out;
          });
        }
      );
      DataTable2.ext.selector.cell.push(function(settings, opts, cells) {
        var selected = opts.selected;
        var rowData;
        var out = [];
        if (selected === undefined2) {
          return cells;
        }
        for (var i = 0, ien = cells.length; i < ien; i++) {
          rowData = settings.aoData[cells[i].row];
          if (selected === true && rowData._selected_cells && rowData._selected_cells[cells[i].column] === true || selected === false && (!rowData._selected_cells || !rowData._selected_cells[cells[i].column])) {
            out.push(cells[i]);
          }
        }
        return out;
      });
      var apiRegister = DataTable2.Api.register;
      var apiRegisterPlural = DataTable2.Api.registerPlural;
      apiRegister("select()", function() {
        return this.iterator("table", function(ctx) {
          DataTable2.select.init(new DataTable2.Api(ctx));
        });
      });
      apiRegister("select.blurable()", function(flag) {
        if (flag === undefined2) {
          return this.context[0]._select.blurable;
        }
        return this.iterator("table", function(ctx) {
          ctx._select.blurable = flag;
        });
      });
      apiRegister("select.toggleable()", function(flag) {
        if (flag === undefined2) {
          return this.context[0]._select.toggleable;
        }
        return this.iterator("table", function(ctx) {
          ctx._select.toggleable = flag;
        });
      });
      apiRegister("select.info()", function(flag) {
        if (flag === undefined2) {
          return this.context[0]._select.info;
        }
        return this.iterator("table", function(ctx) {
          ctx._select.info = flag;
        });
      });
      apiRegister("select.items()", function(items) {
        if (items === undefined2) {
          return this.context[0]._select.items;
        }
        return this.iterator("table", function(ctx) {
          ctx._select.items = items;
          eventTrigger(new DataTable2.Api(ctx), "selectItems", [items]);
        });
      });
      apiRegister("select.style()", function(style) {
        if (style === undefined2) {
          return this.context[0]._select.style;
        }
        return this.iterator("table", function(ctx) {
          if (!ctx._select) {
            DataTable2.select.init(new DataTable2.Api(ctx));
          }
          if (!ctx._select_init) {
            init(ctx);
          }
          ctx._select.style = style;
          var dt = new DataTable2.Api(ctx);
          disableMouseSelection(dt);
          if (style !== "api") {
            enableMouseSelection(dt);
          }
          eventTrigger(new DataTable2.Api(ctx), "selectStyle", [style]);
        });
      });
      apiRegister("select.selector()", function(selector) {
        if (selector === undefined2) {
          return this.context[0]._select.selector;
        }
        return this.iterator("table", function(ctx) {
          disableMouseSelection(new DataTable2.Api(ctx));
          ctx._select.selector = selector;
          if (ctx._select.style !== "api") {
            enableMouseSelection(new DataTable2.Api(ctx));
          }
        });
      });
      apiRegisterPlural("rows().select()", "row().select()", function(select) {
        var api = this;
        if (select === false) {
          return this.deselect();
        }
        this.iterator("row", function(ctx, idx) {
          clear(ctx);
          ctx.aoData[idx]._select_selected = true;
          $3(ctx.aoData[idx].nTr).addClass(ctx._select.className);
        });
        this.iterator("table", function(ctx, i) {
          eventTrigger(api, "select", ["row", api[i]], true);
        });
        return this;
      });
      apiRegister("row().selected()", function() {
        var ctx = this.context[0];
        if (ctx && this.length && ctx.aoData[this[0]] && ctx.aoData[this[0]]._select_selected) {
          return true;
        }
        return false;
      });
      apiRegisterPlural("columns().select()", "column().select()", function(select) {
        var api = this;
        if (select === false) {
          return this.deselect();
        }
        this.iterator("column", function(ctx, idx) {
          clear(ctx);
          ctx.aoColumns[idx]._select_selected = true;
          var column = new DataTable2.Api(ctx).column(idx);
          $3(column.header()).addClass(ctx._select.className);
          $3(column.footer()).addClass(ctx._select.className);
          column.nodes().to$().addClass(ctx._select.className);
        });
        this.iterator("table", function(ctx, i) {
          eventTrigger(api, "select", ["column", api[i]], true);
        });
        return this;
      });
      apiRegister("column().selected()", function() {
        var ctx = this.context[0];
        if (ctx && this.length && ctx.aoColumns[this[0]] && ctx.aoColumns[this[0]]._select_selected) {
          return true;
        }
        return false;
      });
      apiRegisterPlural("cells().select()", "cell().select()", function(select) {
        var api = this;
        if (select === false) {
          return this.deselect();
        }
        this.iterator("cell", function(ctx, rowIdx, colIdx) {
          clear(ctx);
          var data = ctx.aoData[rowIdx];
          if (data._selected_cells === undefined2) {
            data._selected_cells = [];
          }
          data._selected_cells[colIdx] = true;
          if (data.anCells) {
            $3(data.anCells[colIdx]).addClass(ctx._select.className);
          }
        });
        this.iterator("table", function(ctx, i) {
          eventTrigger(api, "select", ["cell", api.cells(api[i]).indexes().toArray()], true);
        });
        return this;
      });
      apiRegister("cell().selected()", function() {
        var ctx = this.context[0];
        if (ctx && this.length) {
          var row = ctx.aoData[this[0][0].row];
          if (row && row._selected_cells && row._selected_cells[this[0][0].column]) {
            return true;
          }
        }
        return false;
      });
      apiRegisterPlural("rows().deselect()", "row().deselect()", function() {
        var api = this;
        this.iterator("row", function(ctx, idx) {
          ctx.aoData[idx]._select_selected = false;
          ctx._select_lastCell = null;
          $3(ctx.aoData[idx].nTr).removeClass(ctx._select.className);
        });
        this.iterator("table", function(ctx, i) {
          eventTrigger(api, "deselect", ["row", api[i]], true);
        });
        return this;
      });
      apiRegisterPlural("columns().deselect()", "column().deselect()", function() {
        var api = this;
        this.iterator("column", function(ctx, idx) {
          ctx.aoColumns[idx]._select_selected = false;
          var api2 = new DataTable2.Api(ctx);
          var column = api2.column(idx);
          $3(column.header()).removeClass(ctx._select.className);
          $3(column.footer()).removeClass(ctx._select.className);
          api2.cells(null, idx).indexes().each(function(cellIdx) {
            var data = ctx.aoData[cellIdx.row];
            var cellSelected = data._selected_cells;
            if (data.anCells && (!cellSelected || !cellSelected[cellIdx.column])) {
              $3(data.anCells[cellIdx.column]).removeClass(ctx._select.className);
            }
          });
        });
        this.iterator("table", function(ctx, i) {
          eventTrigger(api, "deselect", ["column", api[i]], true);
        });
        return this;
      });
      apiRegisterPlural("cells().deselect()", "cell().deselect()", function() {
        var api = this;
        this.iterator("cell", function(ctx, rowIdx, colIdx) {
          var data = ctx.aoData[rowIdx];
          if (data._selected_cells !== undefined2) {
            data._selected_cells[colIdx] = false;
          }
          if (data.anCells && !ctx.aoColumns[colIdx]._select_selected) {
            $3(data.anCells[colIdx]).removeClass(ctx._select.className);
          }
        });
        this.iterator("table", function(ctx, i) {
          eventTrigger(api, "deselect", ["cell", api[i]], true);
        });
        return this;
      });
      function i18n(label, def) {
        return function(dt) {
          return dt.i18n("buttons." + label, def);
        };
      }
      function namespacedEvents(config) {
        var unique = config._eventNamespace;
        return "draw.dt.DT" + unique + " select.dt.DT" + unique + " deselect.dt.DT" + unique;
      }
      function enabled(dt, config) {
        if ($3.inArray("rows", config.limitTo) !== -1 && dt.rows({ selected: true }).any()) {
          return true;
        }
        if ($3.inArray("columns", config.limitTo) !== -1 && dt.columns({ selected: true }).any()) {
          return true;
        }
        if ($3.inArray("cells", config.limitTo) !== -1 && dt.cells({ selected: true }).any()) {
          return true;
        }
        return false;
      }
      var _buttonNamespace = 0;
      $3.extend(DataTable2.ext.buttons, {
        selected: {
          text: i18n("selected", "Selected"),
          className: "buttons-selected",
          limitTo: ["rows", "columns", "cells"],
          init: function(dt, node, config) {
            var that = this;
            config._eventNamespace = ".select" + _buttonNamespace++;
            dt.on(namespacedEvents(config), function() {
              that.enable(enabled(dt, config));
            });
            this.disable();
          },
          destroy: function(dt, node, config) {
            dt.off(config._eventNamespace);
          }
        },
        selectedSingle: {
          text: i18n("selectedSingle", "Selected single"),
          className: "buttons-selected-single",
          init: function(dt, node, config) {
            var that = this;
            config._eventNamespace = ".select" + _buttonNamespace++;
            dt.on(namespacedEvents(config), function() {
              var count = dt.rows({ selected: true }).flatten().length + dt.columns({ selected: true }).flatten().length + dt.cells({ selected: true }).flatten().length;
              that.enable(count === 1);
            });
            this.disable();
          },
          destroy: function(dt, node, config) {
            dt.off(config._eventNamespace);
          }
        },
        selectAll: {
          text: i18n("selectAll", "Select all"),
          className: "buttons-select-all",
          action: function(e, dt, node, config) {
            var items = this.select.items();
            var mod = config.selectorModifier;
            if (mod) {
              if (typeof mod === "function") {
                mod = mod.call(dt, e, dt, node, config);
              }
              this[items + "s"](mod).select();
            } else {
              this[items + "s"]().select();
            }
          }
        },
        selectNone: {
          text: i18n("selectNone", "Deselect all"),
          className: "buttons-select-none",
          action: function() {
            clear(this.settings()[0], true);
          },
          init: function(dt, node, config) {
            var that = this;
            config._eventNamespace = ".select" + _buttonNamespace++;
            dt.on(namespacedEvents(config), function() {
              var count = dt.rows({ selected: true }).flatten().length + dt.columns({ selected: true }).flatten().length + dt.cells({ selected: true }).flatten().length;
              that.enable(count > 0);
            });
            this.disable();
          },
          destroy: function(dt, node, config) {
            dt.off(config._eventNamespace);
          }
        },
        showSelected: {
          text: i18n("showSelected", "Show only selected"),
          className: "buttons-show-selected",
          action: function(e, dt, node, conf) {
            if (conf._filter) {
              var idx = DataTable2.ext.search.indexOf(conf._filter);
              if (idx !== -1) {
                DataTable2.ext.search.splice(idx, 1);
                conf._filter = null;
              }
              this.active(false);
            } else {
              var fn = function(s, data, idx2) {
                if (s !== dt.settings()[0]) {
                  return true;
                }
                let row = s.aoData[idx2];
                return row._select_selected;
              };
              conf._filter = fn;
              DataTable2.ext.search.push(fn);
              this.active(true);
            }
            dt.draw();
          }
        }
      });
      $3.each(["Row", "Column", "Cell"], function(i, item) {
        var lc = item.toLowerCase();
        DataTable2.ext.buttons["select" + item + "s"] = {
          text: i18n("select" + item + "s", "Select " + lc + "s"),
          className: "buttons-select-" + lc + "s",
          action: function() {
            this.select.items(lc);
          },
          init: function(dt) {
            var that = this;
            dt.on("selectItems.dt.DT", function(e, ctx, items) {
              that.active(items === lc);
            });
          }
        };
      });
      $3.fn.DataTable.select = DataTable2.select;
      $3(document2).on("preInit.dt.dtSelect", function(e, ctx) {
        if (e.namespace !== "dt") {
          return;
        }
        DataTable2.select.init(new DataTable2.Api(ctx));
      });
      return DataTable2;
    });
  }
});

// node_modules/@popperjs/core/dist/cjs/popper.js
var require_popper = __commonJS({
  "node_modules/@popperjs/core/dist/cjs/popper.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function getWindow(node) {
      if (node == null) {
        return window;
      }
      if (node.toString() !== "[object Window]") {
        var ownerDocument = node.ownerDocument;
        return ownerDocument ? ownerDocument.defaultView || window : window;
      }
      return node;
    }
    function isElement(node) {
      var OwnElement = getWindow(node).Element;
      return node instanceof OwnElement || node instanceof Element;
    }
    function isHTMLElement(node) {
      var OwnElement = getWindow(node).HTMLElement;
      return node instanceof OwnElement || node instanceof HTMLElement;
    }
    function isShadowRoot(node) {
      if (typeof ShadowRoot === "undefined") {
        return false;
      }
      var OwnElement = getWindow(node).ShadowRoot;
      return node instanceof OwnElement || node instanceof ShadowRoot;
    }
    var max = Math.max;
    var min = Math.min;
    var round = Math.round;
    function getUAString() {
      var uaData = navigator.userAgentData;
      if (uaData != null && uaData.brands && Array.isArray(uaData.brands)) {
        return uaData.brands.map(function(item) {
          return item.brand + "/" + item.version;
        }).join(" ");
      }
      return navigator.userAgent;
    }
    function isLayoutViewport() {
      return !/^((?!chrome|android).)*safari/i.test(getUAString());
    }
    function getBoundingClientRect(element, includeScale, isFixedStrategy) {
      if (includeScale === void 0) {
        includeScale = false;
      }
      if (isFixedStrategy === void 0) {
        isFixedStrategy = false;
      }
      var clientRect = element.getBoundingClientRect();
      var scaleX = 1;
      var scaleY = 1;
      if (includeScale && isHTMLElement(element)) {
        scaleX = element.offsetWidth > 0 ? round(clientRect.width) / element.offsetWidth || 1 : 1;
        scaleY = element.offsetHeight > 0 ? round(clientRect.height) / element.offsetHeight || 1 : 1;
      }
      var _ref = isElement(element) ? getWindow(element) : window, visualViewport = _ref.visualViewport;
      var addVisualOffsets = !isLayoutViewport() && isFixedStrategy;
      var x = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX;
      var y = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY;
      var width = clientRect.width / scaleX;
      var height = clientRect.height / scaleY;
      return {
        width,
        height,
        top: y,
        right: x + width,
        bottom: y + height,
        left: x,
        x,
        y
      };
    }
    function getWindowScroll(node) {
      var win = getWindow(node);
      var scrollLeft = win.pageXOffset;
      var scrollTop = win.pageYOffset;
      return {
        scrollLeft,
        scrollTop
      };
    }
    function getHTMLElementScroll(element) {
      return {
        scrollLeft: element.scrollLeft,
        scrollTop: element.scrollTop
      };
    }
    function getNodeScroll(node) {
      if (node === getWindow(node) || !isHTMLElement(node)) {
        return getWindowScroll(node);
      } else {
        return getHTMLElementScroll(node);
      }
    }
    function getNodeName(element) {
      return element ? (element.nodeName || "").toLowerCase() : null;
    }
    function getDocumentElement(element) {
      return ((isElement(element) ? element.ownerDocument : element.document) || window.document).documentElement;
    }
    function getWindowScrollBarX(element) {
      return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
    }
    function getComputedStyle2(element) {
      return getWindow(element).getComputedStyle(element);
    }
    function isScrollParent(element) {
      var _getComputedStyle = getComputedStyle2(element), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
      return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
    }
    function isElementScaled(element) {
      var rect = element.getBoundingClientRect();
      var scaleX = round(rect.width) / element.offsetWidth || 1;
      var scaleY = round(rect.height) / element.offsetHeight || 1;
      return scaleX !== 1 || scaleY !== 1;
    }
    function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
      if (isFixed === void 0) {
        isFixed = false;
      }
      var isOffsetParentAnElement = isHTMLElement(offsetParent);
      var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
      var documentElement = getDocumentElement(offsetParent);
      var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled, isFixed);
      var scroll = {
        scrollLeft: 0,
        scrollTop: 0
      };
      var offsets = {
        x: 0,
        y: 0
      };
      if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
        if (getNodeName(offsetParent) !== "body" || isScrollParent(documentElement)) {
          scroll = getNodeScroll(offsetParent);
        }
        if (isHTMLElement(offsetParent)) {
          offsets = getBoundingClientRect(offsetParent, true);
          offsets.x += offsetParent.clientLeft;
          offsets.y += offsetParent.clientTop;
        } else if (documentElement) {
          offsets.x = getWindowScrollBarX(documentElement);
        }
      }
      return {
        x: rect.left + scroll.scrollLeft - offsets.x,
        y: rect.top + scroll.scrollTop - offsets.y,
        width: rect.width,
        height: rect.height
      };
    }
    function getLayoutRect(element) {
      var clientRect = getBoundingClientRect(element);
      var width = element.offsetWidth;
      var height = element.offsetHeight;
      if (Math.abs(clientRect.width - width) <= 1) {
        width = clientRect.width;
      }
      if (Math.abs(clientRect.height - height) <= 1) {
        height = clientRect.height;
      }
      return {
        x: element.offsetLeft,
        y: element.offsetTop,
        width,
        height
      };
    }
    function getParentNode(element) {
      if (getNodeName(element) === "html") {
        return element;
      }
      return element.assignedSlot || element.parentNode || (isShadowRoot(element) ? element.host : null) || getDocumentElement(element);
    }
    function getScrollParent(node) {
      if (["html", "body", "#document"].indexOf(getNodeName(node)) >= 0) {
        return node.ownerDocument.body;
      }
      if (isHTMLElement(node) && isScrollParent(node)) {
        return node;
      }
      return getScrollParent(getParentNode(node));
    }
    function listScrollParents(element, list) {
      var _element$ownerDocumen;
      if (list === void 0) {
        list = [];
      }
      var scrollParent = getScrollParent(element);
      var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
      var win = getWindow(scrollParent);
      var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
      var updatedList = list.concat(target);
      return isBody ? updatedList : updatedList.concat(listScrollParents(getParentNode(target)));
    }
    function isTableElement(element) {
      return ["table", "td", "th"].indexOf(getNodeName(element)) >= 0;
    }
    function getTrueOffsetParent(element) {
      if (!isHTMLElement(element) || getComputedStyle2(element).position === "fixed") {
        return null;
      }
      return element.offsetParent;
    }
    function getContainingBlock(element) {
      var isFirefox = /firefox/i.test(getUAString());
      var isIE = /Trident/i.test(getUAString());
      if (isIE && isHTMLElement(element)) {
        var elementCss = getComputedStyle2(element);
        if (elementCss.position === "fixed") {
          return null;
        }
      }
      var currentNode = getParentNode(element);
      if (isShadowRoot(currentNode)) {
        currentNode = currentNode.host;
      }
      while (isHTMLElement(currentNode) && ["html", "body"].indexOf(getNodeName(currentNode)) < 0) {
        var css = getComputedStyle2(currentNode);
        if (css.transform !== "none" || css.perspective !== "none" || css.contain === "paint" || ["transform", "perspective"].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === "filter" || isFirefox && css.filter && css.filter !== "none") {
          return currentNode;
        } else {
          currentNode = currentNode.parentNode;
        }
      }
      return null;
    }
    function getOffsetParent(element) {
      var window2 = getWindow(element);
      var offsetParent = getTrueOffsetParent(element);
      while (offsetParent && isTableElement(offsetParent) && getComputedStyle2(offsetParent).position === "static") {
        offsetParent = getTrueOffsetParent(offsetParent);
      }
      if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle2(offsetParent).position === "static")) {
        return window2;
      }
      return offsetParent || getContainingBlock(element) || window2;
    }
    var top = "top";
    var bottom = "bottom";
    var right = "right";
    var left = "left";
    var auto = "auto";
    var basePlacements = [top, bottom, right, left];
    var start2 = "start";
    var end = "end";
    var clippingParents = "clippingParents";
    var viewport = "viewport";
    var popper = "popper";
    var reference = "reference";
    var variationPlacements = /* @__PURE__ */ basePlacements.reduce(function(acc, placement) {
      return acc.concat([placement + "-" + start2, placement + "-" + end]);
    }, []);
    var placements = /* @__PURE__ */ [].concat(basePlacements, [auto]).reduce(function(acc, placement) {
      return acc.concat([placement, placement + "-" + start2, placement + "-" + end]);
    }, []);
    var beforeRead = "beforeRead";
    var read = "read";
    var afterRead = "afterRead";
    var beforeMain = "beforeMain";
    var main = "main";
    var afterMain = "afterMain";
    var beforeWrite = "beforeWrite";
    var write = "write";
    var afterWrite = "afterWrite";
    var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];
    function order(modifiers) {
      var map = /* @__PURE__ */ new Map();
      var visited = /* @__PURE__ */ new Set();
      var result = [];
      modifiers.forEach(function(modifier) {
        map.set(modifier.name, modifier);
      });
      function sort(modifier) {
        visited.add(modifier.name);
        var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
        requires.forEach(function(dep) {
          if (!visited.has(dep)) {
            var depModifier = map.get(dep);
            if (depModifier) {
              sort(depModifier);
            }
          }
        });
        result.push(modifier);
      }
      modifiers.forEach(function(modifier) {
        if (!visited.has(modifier.name)) {
          sort(modifier);
        }
      });
      return result;
    }
    function orderModifiers(modifiers) {
      var orderedModifiers = order(modifiers);
      return modifierPhases.reduce(function(acc, phase) {
        return acc.concat(orderedModifiers.filter(function(modifier) {
          return modifier.phase === phase;
        }));
      }, []);
    }
    function debounce(fn) {
      var pending;
      return function() {
        if (!pending) {
          pending = new Promise(function(resolve) {
            Promise.resolve().then(function() {
              pending = void 0;
              resolve(fn());
            });
          });
        }
        return pending;
      };
    }
    function mergeByName(modifiers) {
      var merged = modifiers.reduce(function(merged2, current) {
        var existing = merged2[current.name];
        merged2[current.name] = existing ? Object.assign({}, existing, current, {
          options: Object.assign({}, existing.options, current.options),
          data: Object.assign({}, existing.data, current.data)
        }) : current;
        return merged2;
      }, {});
      return Object.keys(merged).map(function(key) {
        return merged[key];
      });
    }
    function getViewportRect(element, strategy) {
      var win = getWindow(element);
      var html = getDocumentElement(element);
      var visualViewport = win.visualViewport;
      var width = html.clientWidth;
      var height = html.clientHeight;
      var x = 0;
      var y = 0;
      if (visualViewport) {
        width = visualViewport.width;
        height = visualViewport.height;
        var layoutViewport = isLayoutViewport();
        if (layoutViewport || !layoutViewport && strategy === "fixed") {
          x = visualViewport.offsetLeft;
          y = visualViewport.offsetTop;
        }
      }
      return {
        width,
        height,
        x: x + getWindowScrollBarX(element),
        y
      };
    }
    function getDocumentRect(element) {
      var _element$ownerDocumen;
      var html = getDocumentElement(element);
      var winScroll = getWindowScroll(element);
      var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
      var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
      var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
      var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
      var y = -winScroll.scrollTop;
      if (getComputedStyle2(body || html).direction === "rtl") {
        x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
      }
      return {
        width,
        height,
        x,
        y
      };
    }
    function contains(parent, child) {
      var rootNode = child.getRootNode && child.getRootNode();
      if (parent.contains(child)) {
        return true;
      } else if (rootNode && isShadowRoot(rootNode)) {
        var next = child;
        do {
          if (next && parent.isSameNode(next)) {
            return true;
          }
          next = next.parentNode || next.host;
        } while (next);
      }
      return false;
    }
    function rectToClientRect(rect) {
      return Object.assign({}, rect, {
        left: rect.x,
        top: rect.y,
        right: rect.x + rect.width,
        bottom: rect.y + rect.height
      });
    }
    function getInnerBoundingClientRect(element, strategy) {
      var rect = getBoundingClientRect(element, false, strategy === "fixed");
      rect.top = rect.top + element.clientTop;
      rect.left = rect.left + element.clientLeft;
      rect.bottom = rect.top + element.clientHeight;
      rect.right = rect.left + element.clientWidth;
      rect.width = element.clientWidth;
      rect.height = element.clientHeight;
      rect.x = rect.left;
      rect.y = rect.top;
      return rect;
    }
    function getClientRectFromMixedType(element, clippingParent, strategy) {
      return clippingParent === viewport ? rectToClientRect(getViewportRect(element, strategy)) : isElement(clippingParent) ? getInnerBoundingClientRect(clippingParent, strategy) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
    }
    function getClippingParents(element) {
      var clippingParents2 = listScrollParents(getParentNode(element));
      var canEscapeClipping = ["absolute", "fixed"].indexOf(getComputedStyle2(element).position) >= 0;
      var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;
      if (!isElement(clipperElement)) {
        return [];
      }
      return clippingParents2.filter(function(clippingParent) {
        return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== "body";
      });
    }
    function getClippingRect(element, boundary, rootBoundary, strategy) {
      var mainClippingParents = boundary === "clippingParents" ? getClippingParents(element) : [].concat(boundary);
      var clippingParents2 = [].concat(mainClippingParents, [rootBoundary]);
      var firstClippingParent = clippingParents2[0];
      var clippingRect = clippingParents2.reduce(function(accRect, clippingParent) {
        var rect = getClientRectFromMixedType(element, clippingParent, strategy);
        accRect.top = max(rect.top, accRect.top);
        accRect.right = min(rect.right, accRect.right);
        accRect.bottom = min(rect.bottom, accRect.bottom);
        accRect.left = max(rect.left, accRect.left);
        return accRect;
      }, getClientRectFromMixedType(element, firstClippingParent, strategy));
      clippingRect.width = clippingRect.right - clippingRect.left;
      clippingRect.height = clippingRect.bottom - clippingRect.top;
      clippingRect.x = clippingRect.left;
      clippingRect.y = clippingRect.top;
      return clippingRect;
    }
    function getBasePlacement(placement) {
      return placement.split("-")[0];
    }
    function getVariation(placement) {
      return placement.split("-")[1];
    }
    function getMainAxisFromPlacement(placement) {
      return ["top", "bottom"].indexOf(placement) >= 0 ? "x" : "y";
    }
    function computeOffsets(_ref) {
      var reference2 = _ref.reference, element = _ref.element, placement = _ref.placement;
      var basePlacement = placement ? getBasePlacement(placement) : null;
      var variation = placement ? getVariation(placement) : null;
      var commonX = reference2.x + reference2.width / 2 - element.width / 2;
      var commonY = reference2.y + reference2.height / 2 - element.height / 2;
      var offsets;
      switch (basePlacement) {
        case top:
          offsets = {
            x: commonX,
            y: reference2.y - element.height
          };
          break;
        case bottom:
          offsets = {
            x: commonX,
            y: reference2.y + reference2.height
          };
          break;
        case right:
          offsets = {
            x: reference2.x + reference2.width,
            y: commonY
          };
          break;
        case left:
          offsets = {
            x: reference2.x - element.width,
            y: commonY
          };
          break;
        default:
          offsets = {
            x: reference2.x,
            y: reference2.y
          };
      }
      var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;
      if (mainAxis != null) {
        var len = mainAxis === "y" ? "height" : "width";
        switch (variation) {
          case start2:
            offsets[mainAxis] = offsets[mainAxis] - (reference2[len] / 2 - element[len] / 2);
            break;
          case end:
            offsets[mainAxis] = offsets[mainAxis] + (reference2[len] / 2 - element[len] / 2);
            break;
        }
      }
      return offsets;
    }
    function getFreshSideObject() {
      return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      };
    }
    function mergePaddingObject(paddingObject) {
      return Object.assign({}, getFreshSideObject(), paddingObject);
    }
    function expandToHashMap(value, keys) {
      return keys.reduce(function(hashMap, key) {
        hashMap[key] = value;
        return hashMap;
      }, {});
    }
    function detectOverflow(state, options) {
      if (options === void 0) {
        options = {};
      }
      var _options = options, _options$placement = _options.placement, placement = _options$placement === void 0 ? state.placement : _options$placement, _options$strategy = _options.strategy, strategy = _options$strategy === void 0 ? state.strategy : _options$strategy, _options$boundary = _options.boundary, boundary = _options$boundary === void 0 ? clippingParents : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === void 0 ? popper : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options.padding, padding = _options$padding === void 0 ? 0 : _options$padding;
      var paddingObject = mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
      var altContext = elementContext === popper ? reference : popper;
      var popperRect = state.rects.popper;
      var element = state.elements[altBoundary ? altContext : elementContext];
      var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary, strategy);
      var referenceClientRect = getBoundingClientRect(state.elements.reference);
      var popperOffsets2 = computeOffsets({
        reference: referenceClientRect,
        element: popperRect,
        strategy: "absolute",
        placement
      });
      var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets2));
      var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect;
      var overflowOffsets = {
        top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
        bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
        left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
        right: elementClientRect.right - clippingClientRect.right + paddingObject.right
      };
      var offsetData = state.modifiersData.offset;
      if (elementContext === popper && offsetData) {
        var offset2 = offsetData[placement];
        Object.keys(overflowOffsets).forEach(function(key) {
          var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
          var axis = [top, bottom].indexOf(key) >= 0 ? "y" : "x";
          overflowOffsets[key] += offset2[axis] * multiply;
        });
      }
      return overflowOffsets;
    }
    var DEFAULT_OPTIONS = {
      placement: "bottom",
      modifiers: [],
      strategy: "absolute"
    };
    function areValidElements() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      return !args.some(function(element) {
        return !(element && typeof element.getBoundingClientRect === "function");
      });
    }
    function popperGenerator(generatorOptions) {
      if (generatorOptions === void 0) {
        generatorOptions = {};
      }
      var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers2 = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
      return function createPopper2(reference2, popper2, options) {
        if (options === void 0) {
          options = defaultOptions;
        }
        var state = {
          placement: "bottom",
          orderedModifiers: [],
          options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
          modifiersData: {},
          elements: {
            reference: reference2,
            popper: popper2
          },
          attributes: {},
          styles: {}
        };
        var effectCleanupFns = [];
        var isDestroyed = false;
        var instance = {
          state,
          setOptions: function setOptions(setOptionsAction) {
            var options2 = typeof setOptionsAction === "function" ? setOptionsAction(state.options) : setOptionsAction;
            cleanupModifierEffects();
            state.options = Object.assign({}, defaultOptions, state.options, options2);
            state.scrollParents = {
              reference: isElement(reference2) ? listScrollParents(reference2) : reference2.contextElement ? listScrollParents(reference2.contextElement) : [],
              popper: listScrollParents(popper2)
            };
            var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers2, state.options.modifiers)));
            state.orderedModifiers = orderedModifiers.filter(function(m2) {
              return m2.enabled;
            });
            runModifierEffects();
            return instance.update();
          },
          forceUpdate: function forceUpdate() {
            if (isDestroyed) {
              return;
            }
            var _state$elements = state.elements, reference3 = _state$elements.reference, popper3 = _state$elements.popper;
            if (!areValidElements(reference3, popper3)) {
              return;
            }
            state.rects = {
              reference: getCompositeRect(reference3, getOffsetParent(popper3), state.options.strategy === "fixed"),
              popper: getLayoutRect(popper3)
            };
            state.reset = false;
            state.placement = state.options.placement;
            state.orderedModifiers.forEach(function(modifier) {
              return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
            });
            for (var index = 0; index < state.orderedModifiers.length; index++) {
              if (state.reset === true) {
                state.reset = false;
                index = -1;
                continue;
              }
              var _state$orderedModifie = state.orderedModifiers[index], fn = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2, name = _state$orderedModifie.name;
              if (typeof fn === "function") {
                state = fn({
                  state,
                  options: _options,
                  name,
                  instance
                }) || state;
              }
            }
          },
          update: debounce(function() {
            return new Promise(function(resolve) {
              instance.forceUpdate();
              resolve(state);
            });
          }),
          destroy: function destroy() {
            cleanupModifierEffects();
            isDestroyed = true;
          }
        };
        if (!areValidElements(reference2, popper2)) {
          return instance;
        }
        instance.setOptions(options).then(function(state2) {
          if (!isDestroyed && options.onFirstUpdate) {
            options.onFirstUpdate(state2);
          }
        });
        function runModifierEffects() {
          state.orderedModifiers.forEach(function(_ref) {
            var name = _ref.name, _ref$options = _ref.options, options2 = _ref$options === void 0 ? {} : _ref$options, effect2 = _ref.effect;
            if (typeof effect2 === "function") {
              var cleanupFn = effect2({
                state,
                name,
                instance,
                options: options2
              });
              var noopFn = function noopFn2() {
              };
              effectCleanupFns.push(cleanupFn || noopFn);
            }
          });
        }
        function cleanupModifierEffects() {
          effectCleanupFns.forEach(function(fn) {
            return fn();
          });
          effectCleanupFns = [];
        }
        return instance;
      };
    }
    var passive = {
      passive: true
    };
    function effect$2(_ref) {
      var state = _ref.state, instance = _ref.instance, options = _ref.options;
      var _options$scroll = options.scroll, scroll = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options.resize, resize = _options$resize === void 0 ? true : _options$resize;
      var window2 = getWindow(state.elements.popper);
      var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
      if (scroll) {
        scrollParents.forEach(function(scrollParent) {
          scrollParent.addEventListener("scroll", instance.update, passive);
        });
      }
      if (resize) {
        window2.addEventListener("resize", instance.update, passive);
      }
      return function() {
        if (scroll) {
          scrollParents.forEach(function(scrollParent) {
            scrollParent.removeEventListener("scroll", instance.update, passive);
          });
        }
        if (resize) {
          window2.removeEventListener("resize", instance.update, passive);
        }
      };
    }
    var eventListeners = {
      name: "eventListeners",
      enabled: true,
      phase: "write",
      fn: function fn() {
      },
      effect: effect$2,
      data: {}
    };
    function popperOffsets(_ref) {
      var state = _ref.state, name = _ref.name;
      state.modifiersData[name] = computeOffsets({
        reference: state.rects.reference,
        element: state.rects.popper,
        strategy: "absolute",
        placement: state.placement
      });
    }
    var popperOffsets$1 = {
      name: "popperOffsets",
      enabled: true,
      phase: "read",
      fn: popperOffsets,
      data: {}
    };
    var unsetSides = {
      top: "auto",
      right: "auto",
      bottom: "auto",
      left: "auto"
    };
    function roundOffsetsByDPR(_ref, win) {
      var x = _ref.x, y = _ref.y;
      var dpr = win.devicePixelRatio || 1;
      return {
        x: round(x * dpr) / dpr || 0,
        y: round(y * dpr) / dpr || 0
      };
    }
    function mapToStyles(_ref2) {
      var _Object$assign2;
      var popper2 = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, variation = _ref2.variation, offsets = _ref2.offsets, position = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets, isFixed = _ref2.isFixed;
      var _offsets$x = offsets.x, x = _offsets$x === void 0 ? 0 : _offsets$x, _offsets$y = offsets.y, y = _offsets$y === void 0 ? 0 : _offsets$y;
      var _ref3 = typeof roundOffsets === "function" ? roundOffsets({
        x,
        y
      }) : {
        x,
        y
      };
      x = _ref3.x;
      y = _ref3.y;
      var hasX = offsets.hasOwnProperty("x");
      var hasY = offsets.hasOwnProperty("y");
      var sideX = left;
      var sideY = top;
      var win = window;
      if (adaptive) {
        var offsetParent = getOffsetParent(popper2);
        var heightProp = "clientHeight";
        var widthProp = "clientWidth";
        if (offsetParent === getWindow(popper2)) {
          offsetParent = getDocumentElement(popper2);
          if (getComputedStyle2(offsetParent).position !== "static" && position === "absolute") {
            heightProp = "scrollHeight";
            widthProp = "scrollWidth";
          }
        }
        offsetParent = offsetParent;
        if (placement === top || (placement === left || placement === right) && variation === end) {
          sideY = bottom;
          var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : offsetParent[heightProp];
          y -= offsetY - popperRect.height;
          y *= gpuAcceleration ? 1 : -1;
        }
        if (placement === left || (placement === top || placement === bottom) && variation === end) {
          sideX = right;
          var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : offsetParent[widthProp];
          x -= offsetX - popperRect.width;
          x *= gpuAcceleration ? 1 : -1;
        }
      }
      var commonStyles = Object.assign({
        position
      }, adaptive && unsetSides);
      var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
        x,
        y
      }, getWindow(popper2)) : {
        x,
        y
      };
      x = _ref4.x;
      y = _ref4.y;
      if (gpuAcceleration) {
        var _Object$assign;
        return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? "0" : "", _Object$assign[sideX] = hasX ? "0" : "", _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
      }
      return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : "", _Object$assign2[sideX] = hasX ? x + "px" : "", _Object$assign2.transform = "", _Object$assign2));
    }
    function computeStyles(_ref5) {
      var state = _ref5.state, options = _ref5.options;
      var _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
      var commonStyles = {
        placement: getBasePlacement(state.placement),
        variation: getVariation(state.placement),
        popper: state.elements.popper,
        popperRect: state.rects.popper,
        gpuAcceleration,
        isFixed: state.options.strategy === "fixed"
      };
      if (state.modifiersData.popperOffsets != null) {
        state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
          offsets: state.modifiersData.popperOffsets,
          position: state.options.strategy,
          adaptive,
          roundOffsets
        })));
      }
      if (state.modifiersData.arrow != null) {
        state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
          offsets: state.modifiersData.arrow,
          position: "absolute",
          adaptive: false,
          roundOffsets
        })));
      }
      state.attributes.popper = Object.assign({}, state.attributes.popper, {
        "data-popper-placement": state.placement
      });
    }
    var computeStyles$1 = {
      name: "computeStyles",
      enabled: true,
      phase: "beforeWrite",
      fn: computeStyles,
      data: {}
    };
    function applyStyles(_ref) {
      var state = _ref.state;
      Object.keys(state.elements).forEach(function(name) {
        var style = state.styles[name] || {};
        var attributes = state.attributes[name] || {};
        var element = state.elements[name];
        if (!isHTMLElement(element) || !getNodeName(element)) {
          return;
        }
        Object.assign(element.style, style);
        Object.keys(attributes).forEach(function(name2) {
          var value = attributes[name2];
          if (value === false) {
            element.removeAttribute(name2);
          } else {
            element.setAttribute(name2, value === true ? "" : value);
          }
        });
      });
    }
    function effect$1(_ref2) {
      var state = _ref2.state;
      var initialStyles = {
        popper: {
          position: state.options.strategy,
          left: "0",
          top: "0",
          margin: "0"
        },
        arrow: {
          position: "absolute"
        },
        reference: {}
      };
      Object.assign(state.elements.popper.style, initialStyles.popper);
      state.styles = initialStyles;
      if (state.elements.arrow) {
        Object.assign(state.elements.arrow.style, initialStyles.arrow);
      }
      return function() {
        Object.keys(state.elements).forEach(function(name) {
          var element = state.elements[name];
          var attributes = state.attributes[name] || {};
          var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]);
          var style = styleProperties.reduce(function(style2, property) {
            style2[property] = "";
            return style2;
          }, {});
          if (!isHTMLElement(element) || !getNodeName(element)) {
            return;
          }
          Object.assign(element.style, style);
          Object.keys(attributes).forEach(function(attribute) {
            element.removeAttribute(attribute);
          });
        });
      };
    }
    var applyStyles$1 = {
      name: "applyStyles",
      enabled: true,
      phase: "write",
      fn: applyStyles,
      effect: effect$1,
      requires: ["computeStyles"]
    };
    function distanceAndSkiddingToXY(placement, rects, offset2) {
      var basePlacement = getBasePlacement(placement);
      var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;
      var _ref = typeof offset2 === "function" ? offset2(Object.assign({}, rects, {
        placement
      })) : offset2, skidding = _ref[0], distance = _ref[1];
      skidding = skidding || 0;
      distance = (distance || 0) * invertDistance;
      return [left, right].indexOf(basePlacement) >= 0 ? {
        x: distance,
        y: skidding
      } : {
        x: skidding,
        y: distance
      };
    }
    function offset(_ref2) {
      var state = _ref2.state, options = _ref2.options, name = _ref2.name;
      var _options$offset = options.offset, offset2 = _options$offset === void 0 ? [0, 0] : _options$offset;
      var data = placements.reduce(function(acc, placement) {
        acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset2);
        return acc;
      }, {});
      var _data$state$placement = data[state.placement], x = _data$state$placement.x, y = _data$state$placement.y;
      if (state.modifiersData.popperOffsets != null) {
        state.modifiersData.popperOffsets.x += x;
        state.modifiersData.popperOffsets.y += y;
      }
      state.modifiersData[name] = data;
    }
    var offset$1 = {
      name: "offset",
      enabled: true,
      phase: "main",
      requires: ["popperOffsets"],
      fn: offset
    };
    var hash$1 = {
      left: "right",
      right: "left",
      bottom: "top",
      top: "bottom"
    };
    function getOppositePlacement(placement) {
      return placement.replace(/left|right|bottom|top/g, function(matched) {
        return hash$1[matched];
      });
    }
    var hash = {
      start: "end",
      end: "start"
    };
    function getOppositeVariationPlacement(placement) {
      return placement.replace(/start|end/g, function(matched) {
        return hash[matched];
      });
    }
    function computeAutoPlacement(state, options) {
      if (options === void 0) {
        options = {};
      }
      var _options = options, placement = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
      var variation = getVariation(placement);
      var placements$1 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function(placement2) {
        return getVariation(placement2) === variation;
      }) : basePlacements;
      var allowedPlacements = placements$1.filter(function(placement2) {
        return allowedAutoPlacements.indexOf(placement2) >= 0;
      });
      if (allowedPlacements.length === 0) {
        allowedPlacements = placements$1;
      }
      var overflows = allowedPlacements.reduce(function(acc, placement2) {
        acc[placement2] = detectOverflow(state, {
          placement: placement2,
          boundary,
          rootBoundary,
          padding
        })[getBasePlacement(placement2)];
        return acc;
      }, {});
      return Object.keys(overflows).sort(function(a, b) {
        return overflows[a] - overflows[b];
      });
    }
    function getExpandedFallbackPlacements(placement) {
      if (getBasePlacement(placement) === auto) {
        return [];
      }
      var oppositePlacement = getOppositePlacement(placement);
      return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
    }
    function flip(_ref) {
      var state = _ref.state, options = _ref.options, name = _ref.name;
      if (state.modifiersData[name]._skip) {
        return;
      }
      var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis, specifiedFallbackPlacements = options.fallbackPlacements, padding = options.padding, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, _options$flipVariatio = options.flipVariations, flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio, allowedAutoPlacements = options.allowedAutoPlacements;
      var preferredPlacement = state.options.placement;
      var basePlacement = getBasePlacement(preferredPlacement);
      var isBasePlacement = basePlacement === preferredPlacement;
      var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
      var placements2 = [preferredPlacement].concat(fallbackPlacements).reduce(function(acc, placement2) {
        return acc.concat(getBasePlacement(placement2) === auto ? computeAutoPlacement(state, {
          placement: placement2,
          boundary,
          rootBoundary,
          padding,
          flipVariations,
          allowedAutoPlacements
        }) : placement2);
      }, []);
      var referenceRect = state.rects.reference;
      var popperRect = state.rects.popper;
      var checksMap = /* @__PURE__ */ new Map();
      var makeFallbackChecks = true;
      var firstFittingPlacement = placements2[0];
      for (var i = 0; i < placements2.length; i++) {
        var placement = placements2[i];
        var _basePlacement = getBasePlacement(placement);
        var isStartVariation = getVariation(placement) === start2;
        var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
        var len = isVertical ? "width" : "height";
        var overflow = detectOverflow(state, {
          placement,
          boundary,
          rootBoundary,
          altBoundary,
          padding
        });
        var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;
        if (referenceRect[len] > popperRect[len]) {
          mainVariationSide = getOppositePlacement(mainVariationSide);
        }
        var altVariationSide = getOppositePlacement(mainVariationSide);
        var checks = [];
        if (checkMainAxis) {
          checks.push(overflow[_basePlacement] <= 0);
        }
        if (checkAltAxis) {
          checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
        }
        if (checks.every(function(check) {
          return check;
        })) {
          firstFittingPlacement = placement;
          makeFallbackChecks = false;
          break;
        }
        checksMap.set(placement, checks);
      }
      if (makeFallbackChecks) {
        var numberOfChecks = flipVariations ? 3 : 1;
        var _loop = function _loop2(_i2) {
          var fittingPlacement = placements2.find(function(placement2) {
            var checks2 = checksMap.get(placement2);
            if (checks2) {
              return checks2.slice(0, _i2).every(function(check) {
                return check;
              });
            }
          });
          if (fittingPlacement) {
            firstFittingPlacement = fittingPlacement;
            return "break";
          }
        };
        for (var _i = numberOfChecks; _i > 0; _i--) {
          var _ret = _loop(_i);
          if (_ret === "break")
            break;
        }
      }
      if (state.placement !== firstFittingPlacement) {
        state.modifiersData[name]._skip = true;
        state.placement = firstFittingPlacement;
        state.reset = true;
      }
    }
    var flip$1 = {
      name: "flip",
      enabled: true,
      phase: "main",
      fn: flip,
      requiresIfExists: ["offset"],
      data: {
        _skip: false
      }
    };
    function getAltAxis(axis) {
      return axis === "x" ? "y" : "x";
    }
    function within(min$1, value, max$1) {
      return max(min$1, min(value, max$1));
    }
    function withinMaxClamp(min2, value, max2) {
      var v = within(min2, value, max2);
      return v > max2 ? max2 : v;
    }
    function preventOverflow(_ref) {
      var state = _ref.state, options = _ref.options, name = _ref.name;
      var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, padding = options.padding, _options$tether = options.tether, tether = _options$tether === void 0 ? true : _options$tether, _options$tetherOffset = options.tetherOffset, tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
      var overflow = detectOverflow(state, {
        boundary,
        rootBoundary,
        padding,
        altBoundary
      });
      var basePlacement = getBasePlacement(state.placement);
      var variation = getVariation(state.placement);
      var isBasePlacement = !variation;
      var mainAxis = getMainAxisFromPlacement(basePlacement);
      var altAxis = getAltAxis(mainAxis);
      var popperOffsets2 = state.modifiersData.popperOffsets;
      var referenceRect = state.rects.reference;
      var popperRect = state.rects.popper;
      var tetherOffsetValue = typeof tetherOffset === "function" ? tetherOffset(Object.assign({}, state.rects, {
        placement: state.placement
      })) : tetherOffset;
      var normalizedTetherOffsetValue = typeof tetherOffsetValue === "number" ? {
        mainAxis: tetherOffsetValue,
        altAxis: tetherOffsetValue
      } : Object.assign({
        mainAxis: 0,
        altAxis: 0
      }, tetherOffsetValue);
      var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
      var data = {
        x: 0,
        y: 0
      };
      if (!popperOffsets2) {
        return;
      }
      if (checkMainAxis) {
        var _offsetModifierState$;
        var mainSide = mainAxis === "y" ? top : left;
        var altSide = mainAxis === "y" ? bottom : right;
        var len = mainAxis === "y" ? "height" : "width";
        var offset2 = popperOffsets2[mainAxis];
        var min$1 = offset2 + overflow[mainSide];
        var max$1 = offset2 - overflow[altSide];
        var additive = tether ? -popperRect[len] / 2 : 0;
        var minLen = variation === start2 ? referenceRect[len] : popperRect[len];
        var maxLen = variation === start2 ? -popperRect[len] : -referenceRect[len];
        var arrowElement = state.elements.arrow;
        var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
          width: 0,
          height: 0
        };
        var arrowPaddingObject = state.modifiersData["arrow#persistent"] ? state.modifiersData["arrow#persistent"].padding : getFreshSideObject();
        var arrowPaddingMin = arrowPaddingObject[mainSide];
        var arrowPaddingMax = arrowPaddingObject[altSide];
        var arrowLen = within(0, referenceRect[len], arrowRect[len]);
        var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
        var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
        var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
        var clientOffset = arrowOffsetParent ? mainAxis === "y" ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
        var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
        var tetherMin = offset2 + minOffset - offsetModifierValue - clientOffset;
        var tetherMax = offset2 + maxOffset - offsetModifierValue;
        var preventedOffset = within(tether ? min(min$1, tetherMin) : min$1, offset2, tether ? max(max$1, tetherMax) : max$1);
        popperOffsets2[mainAxis] = preventedOffset;
        data[mainAxis] = preventedOffset - offset2;
      }
      if (checkAltAxis) {
        var _offsetModifierState$2;
        var _mainSide = mainAxis === "x" ? top : left;
        var _altSide = mainAxis === "x" ? bottom : right;
        var _offset = popperOffsets2[altAxis];
        var _len = altAxis === "y" ? "height" : "width";
        var _min = _offset + overflow[_mainSide];
        var _max = _offset - overflow[_altSide];
        var isOriginSide = [top, left].indexOf(basePlacement) !== -1;
        var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;
        var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;
        var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;
        var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
        popperOffsets2[altAxis] = _preventedOffset;
        data[altAxis] = _preventedOffset - _offset;
      }
      state.modifiersData[name] = data;
    }
    var preventOverflow$1 = {
      name: "preventOverflow",
      enabled: true,
      phase: "main",
      fn: preventOverflow,
      requiresIfExists: ["offset"]
    };
    var toPaddingObject = function toPaddingObject2(padding, state) {
      padding = typeof padding === "function" ? padding(Object.assign({}, state.rects, {
        placement: state.placement
      })) : padding;
      return mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
    };
    function arrow(_ref) {
      var _state$modifiersData$;
      var state = _ref.state, name = _ref.name, options = _ref.options;
      var arrowElement = state.elements.arrow;
      var popperOffsets2 = state.modifiersData.popperOffsets;
      var basePlacement = getBasePlacement(state.placement);
      var axis = getMainAxisFromPlacement(basePlacement);
      var isVertical = [left, right].indexOf(basePlacement) >= 0;
      var len = isVertical ? "height" : "width";
      if (!arrowElement || !popperOffsets2) {
        return;
      }
      var paddingObject = toPaddingObject(options.padding, state);
      var arrowRect = getLayoutRect(arrowElement);
      var minProp = axis === "y" ? top : left;
      var maxProp = axis === "y" ? bottom : right;
      var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets2[axis] - state.rects.popper[len];
      var startDiff = popperOffsets2[axis] - state.rects.reference[axis];
      var arrowOffsetParent = getOffsetParent(arrowElement);
      var clientSize = arrowOffsetParent ? axis === "y" ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
      var centerToReference = endDiff / 2 - startDiff / 2;
      var min2 = paddingObject[minProp];
      var max2 = clientSize - arrowRect[len] - paddingObject[maxProp];
      var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
      var offset2 = within(min2, center, max2);
      var axisProp = axis;
      state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset2, _state$modifiersData$.centerOffset = offset2 - center, _state$modifiersData$);
    }
    function effect(_ref2) {
      var state = _ref2.state, options = _ref2.options;
      var _options$element = options.element, arrowElement = _options$element === void 0 ? "[data-popper-arrow]" : _options$element;
      if (arrowElement == null) {
        return;
      }
      if (typeof arrowElement === "string") {
        arrowElement = state.elements.popper.querySelector(arrowElement);
        if (!arrowElement) {
          return;
        }
      }
      if (!contains(state.elements.popper, arrowElement)) {
        return;
      }
      state.elements.arrow = arrowElement;
    }
    var arrow$1 = {
      name: "arrow",
      enabled: true,
      phase: "main",
      fn: arrow,
      effect,
      requires: ["popperOffsets"],
      requiresIfExists: ["preventOverflow"]
    };
    function getSideOffsets(overflow, rect, preventedOffsets) {
      if (preventedOffsets === void 0) {
        preventedOffsets = {
          x: 0,
          y: 0
        };
      }
      return {
        top: overflow.top - rect.height - preventedOffsets.y,
        right: overflow.right - rect.width + preventedOffsets.x,
        bottom: overflow.bottom - rect.height + preventedOffsets.y,
        left: overflow.left - rect.width - preventedOffsets.x
      };
    }
    function isAnySideFullyClipped(overflow) {
      return [top, right, bottom, left].some(function(side) {
        return overflow[side] >= 0;
      });
    }
    function hide(_ref) {
      var state = _ref.state, name = _ref.name;
      var referenceRect = state.rects.reference;
      var popperRect = state.rects.popper;
      var preventedOffsets = state.modifiersData.preventOverflow;
      var referenceOverflow = detectOverflow(state, {
        elementContext: "reference"
      });
      var popperAltOverflow = detectOverflow(state, {
        altBoundary: true
      });
      var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
      var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
      var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
      var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
      state.modifiersData[name] = {
        referenceClippingOffsets,
        popperEscapeOffsets,
        isReferenceHidden,
        hasPopperEscaped
      };
      state.attributes.popper = Object.assign({}, state.attributes.popper, {
        "data-popper-reference-hidden": isReferenceHidden,
        "data-popper-escaped": hasPopperEscaped
      });
    }
    var hide$1 = {
      name: "hide",
      enabled: true,
      phase: "main",
      requiresIfExists: ["preventOverflow"],
      fn: hide
    };
    var defaultModifiers$1 = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1];
    var createPopper$1 = /* @__PURE__ */ popperGenerator({
      defaultModifiers: defaultModifiers$1
    });
    var defaultModifiers = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1, offset$1, flip$1, preventOverflow$1, arrow$1, hide$1];
    var createPopper = /* @__PURE__ */ popperGenerator({
      defaultModifiers
    });
    exports.applyStyles = applyStyles$1;
    exports.arrow = arrow$1;
    exports.computeStyles = computeStyles$1;
    exports.createPopper = createPopper;
    exports.createPopperLite = createPopper$1;
    exports.defaultModifiers = defaultModifiers;
    exports.detectOverflow = detectOverflow;
    exports.eventListeners = eventListeners;
    exports.flip = flip$1;
    exports.hide = hide$1;
    exports.offset = offset$1;
    exports.popperGenerator = popperGenerator;
    exports.popperOffsets = popperOffsets$1;
    exports.preventOverflow = preventOverflow$1;
  }
});

// node_modules/bootstrap/dist/js/bootstrap.js
var require_bootstrap = __commonJS({
  "node_modules/bootstrap/dist/js/bootstrap.js"(exports, module) {
    (function(global, factory) {
      typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory(require_popper()) : typeof define === "function" && define.amd ? define(["@popperjs/core"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, global.bootstrap = factory(global.Popper));
    })(exports, function(Popper) {
      "use strict";
      function _interopNamespaceDefault(e) {
        const n = Object.create(null, { [Symbol.toStringTag]: { value: "Module" } });
        if (e) {
          for (const k in e) {
            if (k !== "default") {
              const d = Object.getOwnPropertyDescriptor(e, k);
              Object.defineProperty(n, k, d.get ? d : {
                enumerable: true,
                get: () => e[k]
              });
            }
          }
        }
        n.default = e;
        return Object.freeze(n);
      }
      const Popper__namespace = /* @__PURE__ */ _interopNamespaceDefault(Popper);
      const elementMap = /* @__PURE__ */ new Map();
      const Data = {
        set(element, key, instance) {
          if (!elementMap.has(element)) {
            elementMap.set(element, /* @__PURE__ */ new Map());
          }
          const instanceMap = elementMap.get(element);
          if (!instanceMap.has(key) && instanceMap.size !== 0) {
            console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(instanceMap.keys())[0]}.`);
            return;
          }
          instanceMap.set(key, instance);
        },
        get(element, key) {
          if (elementMap.has(element)) {
            return elementMap.get(element).get(key) || null;
          }
          return null;
        },
        remove(element, key) {
          if (!elementMap.has(element)) {
            return;
          }
          const instanceMap = elementMap.get(element);
          instanceMap.delete(key);
          if (instanceMap.size === 0) {
            elementMap.delete(element);
          }
        }
      };
      const MAX_UID = 1e6;
      const MILLISECONDS_MULTIPLIER = 1e3;
      const TRANSITION_END = "transitionend";
      const parseSelector = (selector) => {
        if (selector && window.CSS && window.CSS.escape) {
          selector = selector.replace(/#([^\s"#']+)/g, (match, id) => `#${CSS.escape(id)}`);
        }
        return selector;
      };
      const toType = (object) => {
        if (object === null || object === void 0) {
          return `${object}`;
        }
        return Object.prototype.toString.call(object).match(/\s([a-z]+)/i)[1].toLowerCase();
      };
      const getUID = (prefix) => {
        do {
          prefix += Math.floor(Math.random() * MAX_UID);
        } while (document.getElementById(prefix));
        return prefix;
      };
      const getTransitionDurationFromElement = (element) => {
        if (!element) {
          return 0;
        }
        let {
          transitionDuration,
          transitionDelay
        } = window.getComputedStyle(element);
        const floatTransitionDuration = Number.parseFloat(transitionDuration);
        const floatTransitionDelay = Number.parseFloat(transitionDelay);
        if (!floatTransitionDuration && !floatTransitionDelay) {
          return 0;
        }
        transitionDuration = transitionDuration.split(",")[0];
        transitionDelay = transitionDelay.split(",")[0];
        return (Number.parseFloat(transitionDuration) + Number.parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
      };
      const triggerTransitionEnd = (element) => {
        element.dispatchEvent(new Event(TRANSITION_END));
      };
      const isElement = (object) => {
        if (!object || typeof object !== "object") {
          return false;
        }
        if (typeof object.jquery !== "undefined") {
          object = object[0];
        }
        return typeof object.nodeType !== "undefined";
      };
      const getElement = (object) => {
        if (isElement(object)) {
          return object.jquery ? object[0] : object;
        }
        if (typeof object === "string" && object.length > 0) {
          return document.querySelector(parseSelector(object));
        }
        return null;
      };
      const isVisible = (element) => {
        if (!isElement(element) || element.getClientRects().length === 0) {
          return false;
        }
        const elementIsVisible = getComputedStyle(element).getPropertyValue("visibility") === "visible";
        const closedDetails = element.closest("details:not([open])");
        if (!closedDetails) {
          return elementIsVisible;
        }
        if (closedDetails !== element) {
          const summary = element.closest("summary");
          if (summary && summary.parentNode !== closedDetails) {
            return false;
          }
          if (summary === null) {
            return false;
          }
        }
        return elementIsVisible;
      };
      const isDisabled = (element) => {
        if (!element || element.nodeType !== Node.ELEMENT_NODE) {
          return true;
        }
        if (element.classList.contains("disabled")) {
          return true;
        }
        if (typeof element.disabled !== "undefined") {
          return element.disabled;
        }
        return element.hasAttribute("disabled") && element.getAttribute("disabled") !== "false";
      };
      const findShadowRoot = (element) => {
        if (!document.documentElement.attachShadow) {
          return null;
        }
        if (typeof element.getRootNode === "function") {
          const root = element.getRootNode();
          return root instanceof ShadowRoot ? root : null;
        }
        if (element instanceof ShadowRoot) {
          return element;
        }
        if (!element.parentNode) {
          return null;
        }
        return findShadowRoot(element.parentNode);
      };
      const noop = () => {
      };
      const reflow = (element) => {
        element.offsetHeight;
      };
      const getjQuery = () => {
        if (window.jQuery && !document.body.hasAttribute("data-bs-no-jquery")) {
          return window.jQuery;
        }
        return null;
      };
      const DOMContentLoadedCallbacks = [];
      const onDOMContentLoaded = (callback) => {
        if (document.readyState === "loading") {
          if (!DOMContentLoadedCallbacks.length) {
            document.addEventListener("DOMContentLoaded", () => {
              for (const callback2 of DOMContentLoadedCallbacks) {
                callback2();
              }
            });
          }
          DOMContentLoadedCallbacks.push(callback);
        } else {
          callback();
        }
      };
      const isRTL = () => document.documentElement.dir === "rtl";
      const defineJQueryPlugin = (plugin) => {
        onDOMContentLoaded(() => {
          const $3 = getjQuery();
          if ($3) {
            const name = plugin.NAME;
            const JQUERY_NO_CONFLICT = $3.fn[name];
            $3.fn[name] = plugin.jQueryInterface;
            $3.fn[name].Constructor = plugin;
            $3.fn[name].noConflict = () => {
              $3.fn[name] = JQUERY_NO_CONFLICT;
              return plugin.jQueryInterface;
            };
          }
        });
      };
      const execute = (possibleCallback, args = [], defaultValue = possibleCallback) => {
        return typeof possibleCallback === "function" ? possibleCallback(...args) : defaultValue;
      };
      const executeAfterTransition = (callback, transitionElement, waitForTransition = true) => {
        if (!waitForTransition) {
          execute(callback);
          return;
        }
        const durationPadding = 5;
        const emulatedDuration = getTransitionDurationFromElement(transitionElement) + durationPadding;
        let called = false;
        const handler = ({
          target
        }) => {
          if (target !== transitionElement) {
            return;
          }
          called = true;
          transitionElement.removeEventListener(TRANSITION_END, handler);
          execute(callback);
        };
        transitionElement.addEventListener(TRANSITION_END, handler);
        setTimeout(() => {
          if (!called) {
            triggerTransitionEnd(transitionElement);
          }
        }, emulatedDuration);
      };
      const getNextActiveElement = (list, activeElement, shouldGetNext, isCycleAllowed) => {
        const listLength = list.length;
        let index = list.indexOf(activeElement);
        if (index === -1) {
          return !shouldGetNext && isCycleAllowed ? list[listLength - 1] : list[0];
        }
        index += shouldGetNext ? 1 : -1;
        if (isCycleAllowed) {
          index = (index + listLength) % listLength;
        }
        return list[Math.max(0, Math.min(index, listLength - 1))];
      };
      const namespaceRegex = /[^.]*(?=\..*)\.|.*/;
      const stripNameRegex = /\..*/;
      const stripUidRegex = /::\d+$/;
      const eventRegistry = {};
      let uidEvent = 1;
      const customEvents = {
        mouseenter: "mouseover",
        mouseleave: "mouseout"
      };
      const nativeEvents = /* @__PURE__ */ new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);
      function makeEventUid(element, uid) {
        return uid && `${uid}::${uidEvent++}` || element.uidEvent || uidEvent++;
      }
      function getElementEvents(element) {
        const uid = makeEventUid(element);
        element.uidEvent = uid;
        eventRegistry[uid] = eventRegistry[uid] || {};
        return eventRegistry[uid];
      }
      function bootstrapHandler(element, fn) {
        return function handler(event) {
          hydrateObj(event, {
            delegateTarget: element
          });
          if (handler.oneOff) {
            EventHandler.off(element, event.type, fn);
          }
          return fn.apply(element, [event]);
        };
      }
      function bootstrapDelegationHandler(element, selector, fn) {
        return function handler(event) {
          const domElements = element.querySelectorAll(selector);
          for (let {
            target
          } = event; target && target !== this; target = target.parentNode) {
            for (const domElement of domElements) {
              if (domElement !== target) {
                continue;
              }
              hydrateObj(event, {
                delegateTarget: target
              });
              if (handler.oneOff) {
                EventHandler.off(element, event.type, selector, fn);
              }
              return fn.apply(target, [event]);
            }
          }
        };
      }
      function findHandler(events, callable, delegationSelector = null) {
        return Object.values(events).find((event) => event.callable === callable && event.delegationSelector === delegationSelector);
      }
      function normalizeParameters(originalTypeEvent, handler, delegationFunction) {
        const isDelegated = typeof handler === "string";
        const callable = isDelegated ? delegationFunction : handler || delegationFunction;
        let typeEvent = getTypeEvent(originalTypeEvent);
        if (!nativeEvents.has(typeEvent)) {
          typeEvent = originalTypeEvent;
        }
        return [isDelegated, callable, typeEvent];
      }
      function addHandler(element, originalTypeEvent, handler, delegationFunction, oneOff) {
        if (typeof originalTypeEvent !== "string" || !element) {
          return;
        }
        let [isDelegated, callable, typeEvent] = normalizeParameters(originalTypeEvent, handler, delegationFunction);
        if (originalTypeEvent in customEvents) {
          const wrapFunction = (fn2) => {
            return function(event) {
              if (!event.relatedTarget || event.relatedTarget !== event.delegateTarget && !event.delegateTarget.contains(event.relatedTarget)) {
                return fn2.call(this, event);
              }
            };
          };
          callable = wrapFunction(callable);
        }
        const events = getElementEvents(element);
        const handlers = events[typeEvent] || (events[typeEvent] = {});
        const previousFunction = findHandler(handlers, callable, isDelegated ? handler : null);
        if (previousFunction) {
          previousFunction.oneOff = previousFunction.oneOff && oneOff;
          return;
        }
        const uid = makeEventUid(callable, originalTypeEvent.replace(namespaceRegex, ""));
        const fn = isDelegated ? bootstrapDelegationHandler(element, handler, callable) : bootstrapHandler(element, callable);
        fn.delegationSelector = isDelegated ? handler : null;
        fn.callable = callable;
        fn.oneOff = oneOff;
        fn.uidEvent = uid;
        handlers[uid] = fn;
        element.addEventListener(typeEvent, fn, isDelegated);
      }
      function removeHandler(element, events, typeEvent, handler, delegationSelector) {
        const fn = findHandler(events[typeEvent], handler, delegationSelector);
        if (!fn) {
          return;
        }
        element.removeEventListener(typeEvent, fn, Boolean(delegationSelector));
        delete events[typeEvent][fn.uidEvent];
      }
      function removeNamespacedHandlers(element, events, typeEvent, namespace) {
        const storeElementEvent = events[typeEvent] || {};
        for (const [handlerKey, event] of Object.entries(storeElementEvent)) {
          if (handlerKey.includes(namespace)) {
            removeHandler(element, events, typeEvent, event.callable, event.delegationSelector);
          }
        }
      }
      function getTypeEvent(event) {
        event = event.replace(stripNameRegex, "");
        return customEvents[event] || event;
      }
      const EventHandler = {
        on(element, event, handler, delegationFunction) {
          addHandler(element, event, handler, delegationFunction, false);
        },
        one(element, event, handler, delegationFunction) {
          addHandler(element, event, handler, delegationFunction, true);
        },
        off(element, originalTypeEvent, handler, delegationFunction) {
          if (typeof originalTypeEvent !== "string" || !element) {
            return;
          }
          const [isDelegated, callable, typeEvent] = normalizeParameters(originalTypeEvent, handler, delegationFunction);
          const inNamespace = typeEvent !== originalTypeEvent;
          const events = getElementEvents(element);
          const storeElementEvent = events[typeEvent] || {};
          const isNamespace = originalTypeEvent.startsWith(".");
          if (typeof callable !== "undefined") {
            if (!Object.keys(storeElementEvent).length) {
              return;
            }
            removeHandler(element, events, typeEvent, callable, isDelegated ? handler : null);
            return;
          }
          if (isNamespace) {
            for (const elementEvent of Object.keys(events)) {
              removeNamespacedHandlers(element, events, elementEvent, originalTypeEvent.slice(1));
            }
          }
          for (const [keyHandlers, event] of Object.entries(storeElementEvent)) {
            const handlerKey = keyHandlers.replace(stripUidRegex, "");
            if (!inNamespace || originalTypeEvent.includes(handlerKey)) {
              removeHandler(element, events, typeEvent, event.callable, event.delegationSelector);
            }
          }
        },
        trigger(element, event, args) {
          if (typeof event !== "string" || !element) {
            return null;
          }
          const $3 = getjQuery();
          const typeEvent = getTypeEvent(event);
          const inNamespace = event !== typeEvent;
          let jQueryEvent = null;
          let bubbles = true;
          let nativeDispatch = true;
          let defaultPrevented = false;
          if (inNamespace && $3) {
            jQueryEvent = $3.Event(event, args);
            $3(element).trigger(jQueryEvent);
            bubbles = !jQueryEvent.isPropagationStopped();
            nativeDispatch = !jQueryEvent.isImmediatePropagationStopped();
            defaultPrevented = jQueryEvent.isDefaultPrevented();
          }
          const evt = hydrateObj(new Event(event, {
            bubbles,
            cancelable: true
          }), args);
          if (defaultPrevented) {
            evt.preventDefault();
          }
          if (nativeDispatch) {
            element.dispatchEvent(evt);
          }
          if (evt.defaultPrevented && jQueryEvent) {
            jQueryEvent.preventDefault();
          }
          return evt;
        }
      };
      function hydrateObj(obj, meta = {}) {
        for (const [key, value] of Object.entries(meta)) {
          try {
            obj[key] = value;
          } catch (_unused) {
            Object.defineProperty(obj, key, {
              configurable: true,
              get() {
                return value;
              }
            });
          }
        }
        return obj;
      }
      function normalizeData(value) {
        if (value === "true") {
          return true;
        }
        if (value === "false") {
          return false;
        }
        if (value === Number(value).toString()) {
          return Number(value);
        }
        if (value === "" || value === "null") {
          return null;
        }
        if (typeof value !== "string") {
          return value;
        }
        try {
          return JSON.parse(decodeURIComponent(value));
        } catch (_unused) {
          return value;
        }
      }
      function normalizeDataKey(key) {
        return key.replace(/[A-Z]/g, (chr) => `-${chr.toLowerCase()}`);
      }
      const Manipulator = {
        setDataAttribute(element, key, value) {
          element.setAttribute(`data-bs-${normalizeDataKey(key)}`, value);
        },
        removeDataAttribute(element, key) {
          element.removeAttribute(`data-bs-${normalizeDataKey(key)}`);
        },
        getDataAttributes(element) {
          if (!element) {
            return {};
          }
          const attributes = {};
          const bsKeys = Object.keys(element.dataset).filter((key) => key.startsWith("bs") && !key.startsWith("bsConfig"));
          for (const key of bsKeys) {
            let pureKey = key.replace(/^bs/, "");
            pureKey = pureKey.charAt(0).toLowerCase() + pureKey.slice(1, pureKey.length);
            attributes[pureKey] = normalizeData(element.dataset[key]);
          }
          return attributes;
        },
        getDataAttribute(element, key) {
          return normalizeData(element.getAttribute(`data-bs-${normalizeDataKey(key)}`));
        }
      };
      class Config {
        static get Default() {
          return {};
        }
        static get DefaultType() {
          return {};
        }
        static get NAME() {
          throw new Error('You have to implement the static method "NAME", for each component!');
        }
        _getConfig(config) {
          config = this._mergeConfigObj(config);
          config = this._configAfterMerge(config);
          this._typeCheckConfig(config);
          return config;
        }
        _configAfterMerge(config) {
          return config;
        }
        _mergeConfigObj(config, element) {
          const jsonConfig = isElement(element) ? Manipulator.getDataAttribute(element, "config") : {};
          return {
            ...this.constructor.Default,
            ...typeof jsonConfig === "object" ? jsonConfig : {},
            ...isElement(element) ? Manipulator.getDataAttributes(element) : {},
            ...typeof config === "object" ? config : {}
          };
        }
        _typeCheckConfig(config, configTypes = this.constructor.DefaultType) {
          for (const [property, expectedTypes] of Object.entries(configTypes)) {
            const value = config[property];
            const valueType = isElement(value) ? "element" : toType(value);
            if (!new RegExp(expectedTypes).test(valueType)) {
              throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${property}" provided type "${valueType}" but expected type "${expectedTypes}".`);
            }
          }
        }
      }
      const VERSION = "5.3.3";
      class BaseComponent extends Config {
        constructor(element, config) {
          super();
          element = getElement(element);
          if (!element) {
            return;
          }
          this._element = element;
          this._config = this._getConfig(config);
          Data.set(this._element, this.constructor.DATA_KEY, this);
        }
        dispose() {
          Data.remove(this._element, this.constructor.DATA_KEY);
          EventHandler.off(this._element, this.constructor.EVENT_KEY);
          for (const propertyName of Object.getOwnPropertyNames(this)) {
            this[propertyName] = null;
          }
        }
        _queueCallback(callback, element, isAnimated = true) {
          executeAfterTransition(callback, element, isAnimated);
        }
        _getConfig(config) {
          config = this._mergeConfigObj(config, this._element);
          config = this._configAfterMerge(config);
          this._typeCheckConfig(config);
          return config;
        }
        static getInstance(element) {
          return Data.get(getElement(element), this.DATA_KEY);
        }
        static getOrCreateInstance(element, config = {}) {
          return this.getInstance(element) || new this(element, typeof config === "object" ? config : null);
        }
        static get VERSION() {
          return VERSION;
        }
        static get DATA_KEY() {
          return `bs.${this.NAME}`;
        }
        static get EVENT_KEY() {
          return `.${this.DATA_KEY}`;
        }
        static eventName(name) {
          return `${name}${this.EVENT_KEY}`;
        }
      }
      const getSelector = (element) => {
        let selector = element.getAttribute("data-bs-target");
        if (!selector || selector === "#") {
          let hrefAttribute = element.getAttribute("href");
          if (!hrefAttribute || !hrefAttribute.includes("#") && !hrefAttribute.startsWith(".")) {
            return null;
          }
          if (hrefAttribute.includes("#") && !hrefAttribute.startsWith("#")) {
            hrefAttribute = `#${hrefAttribute.split("#")[1]}`;
          }
          selector = hrefAttribute && hrefAttribute !== "#" ? hrefAttribute.trim() : null;
        }
        return selector ? selector.split(",").map((sel) => parseSelector(sel)).join(",") : null;
      };
      const SelectorEngine = {
        find(selector, element = document.documentElement) {
          return [].concat(...Element.prototype.querySelectorAll.call(element, selector));
        },
        findOne(selector, element = document.documentElement) {
          return Element.prototype.querySelector.call(element, selector);
        },
        children(element, selector) {
          return [].concat(...element.children).filter((child) => child.matches(selector));
        },
        parents(element, selector) {
          const parents = [];
          let ancestor = element.parentNode.closest(selector);
          while (ancestor) {
            parents.push(ancestor);
            ancestor = ancestor.parentNode.closest(selector);
          }
          return parents;
        },
        prev(element, selector) {
          let previous = element.previousElementSibling;
          while (previous) {
            if (previous.matches(selector)) {
              return [previous];
            }
            previous = previous.previousElementSibling;
          }
          return [];
        },
        next(element, selector) {
          let next = element.nextElementSibling;
          while (next) {
            if (next.matches(selector)) {
              return [next];
            }
            next = next.nextElementSibling;
          }
          return [];
        },
        focusableChildren(element) {
          const focusables = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map((selector) => `${selector}:not([tabindex^="-"])`).join(",");
          return this.find(focusables, element).filter((el) => !isDisabled(el) && isVisible(el));
        },
        getSelectorFromElement(element) {
          const selector = getSelector(element);
          if (selector) {
            return SelectorEngine.findOne(selector) ? selector : null;
          }
          return null;
        },
        getElementFromSelector(element) {
          const selector = getSelector(element);
          return selector ? SelectorEngine.findOne(selector) : null;
        },
        getMultipleElementsFromSelector(element) {
          const selector = getSelector(element);
          return selector ? SelectorEngine.find(selector) : [];
        }
      };
      const enableDismissTrigger = (component, method = "hide") => {
        const clickEvent = `click.dismiss${component.EVENT_KEY}`;
        const name = component.NAME;
        EventHandler.on(document, clickEvent, `[data-bs-dismiss="${name}"]`, function(event) {
          if (["A", "AREA"].includes(this.tagName)) {
            event.preventDefault();
          }
          if (isDisabled(this)) {
            return;
          }
          const target = SelectorEngine.getElementFromSelector(this) || this.closest(`.${name}`);
          const instance = component.getOrCreateInstance(target);
          instance[method]();
        });
      };
      const NAME$f = "alert";
      const DATA_KEY$a = "bs.alert";
      const EVENT_KEY$b = `.${DATA_KEY$a}`;
      const EVENT_CLOSE = `close${EVENT_KEY$b}`;
      const EVENT_CLOSED = `closed${EVENT_KEY$b}`;
      const CLASS_NAME_FADE$5 = "fade";
      const CLASS_NAME_SHOW$8 = "show";
      class Alert extends BaseComponent {
        static get NAME() {
          return NAME$f;
        }
        close() {
          const closeEvent = EventHandler.trigger(this._element, EVENT_CLOSE);
          if (closeEvent.defaultPrevented) {
            return;
          }
          this._element.classList.remove(CLASS_NAME_SHOW$8);
          const isAnimated = this._element.classList.contains(CLASS_NAME_FADE$5);
          this._queueCallback(() => this._destroyElement(), this._element, isAnimated);
        }
        _destroyElement() {
          this._element.remove();
          EventHandler.trigger(this._element, EVENT_CLOSED);
          this.dispose();
        }
        static jQueryInterface(config) {
          return this.each(function() {
            const data = Alert.getOrCreateInstance(this);
            if (typeof config !== "string") {
              return;
            }
            if (data[config] === void 0 || config.startsWith("_") || config === "constructor") {
              throw new TypeError(`No method named "${config}"`);
            }
            data[config](this);
          });
        }
      }
      enableDismissTrigger(Alert, "close");
      defineJQueryPlugin(Alert);
      const NAME$e = "button";
      const DATA_KEY$9 = "bs.button";
      const EVENT_KEY$a = `.${DATA_KEY$9}`;
      const DATA_API_KEY$6 = ".data-api";
      const CLASS_NAME_ACTIVE$3 = "active";
      const SELECTOR_DATA_TOGGLE$5 = '[data-bs-toggle="button"]';
      const EVENT_CLICK_DATA_API$6 = `click${EVENT_KEY$a}${DATA_API_KEY$6}`;
      class Button extends BaseComponent {
        static get NAME() {
          return NAME$e;
        }
        toggle() {
          this._element.setAttribute("aria-pressed", this._element.classList.toggle(CLASS_NAME_ACTIVE$3));
        }
        static jQueryInterface(config) {
          return this.each(function() {
            const data = Button.getOrCreateInstance(this);
            if (config === "toggle") {
              data[config]();
            }
          });
        }
      }
      EventHandler.on(document, EVENT_CLICK_DATA_API$6, SELECTOR_DATA_TOGGLE$5, (event) => {
        event.preventDefault();
        const button = event.target.closest(SELECTOR_DATA_TOGGLE$5);
        const data = Button.getOrCreateInstance(button);
        data.toggle();
      });
      defineJQueryPlugin(Button);
      const NAME$d = "swipe";
      const EVENT_KEY$9 = ".bs.swipe";
      const EVENT_TOUCHSTART = `touchstart${EVENT_KEY$9}`;
      const EVENT_TOUCHMOVE = `touchmove${EVENT_KEY$9}`;
      const EVENT_TOUCHEND = `touchend${EVENT_KEY$9}`;
      const EVENT_POINTERDOWN = `pointerdown${EVENT_KEY$9}`;
      const EVENT_POINTERUP = `pointerup${EVENT_KEY$9}`;
      const POINTER_TYPE_TOUCH = "touch";
      const POINTER_TYPE_PEN = "pen";
      const CLASS_NAME_POINTER_EVENT = "pointer-event";
      const SWIPE_THRESHOLD = 40;
      const Default$c = {
        endCallback: null,
        leftCallback: null,
        rightCallback: null
      };
      const DefaultType$c = {
        endCallback: "(function|null)",
        leftCallback: "(function|null)",
        rightCallback: "(function|null)"
      };
      class Swipe extends Config {
        constructor(element, config) {
          super();
          this._element = element;
          if (!element || !Swipe.isSupported()) {
            return;
          }
          this._config = this._getConfig(config);
          this._deltaX = 0;
          this._supportPointerEvents = Boolean(window.PointerEvent);
          this._initEvents();
        }
        static get Default() {
          return Default$c;
        }
        static get DefaultType() {
          return DefaultType$c;
        }
        static get NAME() {
          return NAME$d;
        }
        dispose() {
          EventHandler.off(this._element, EVENT_KEY$9);
        }
        _start(event) {
          if (!this._supportPointerEvents) {
            this._deltaX = event.touches[0].clientX;
            return;
          }
          if (this._eventIsPointerPenTouch(event)) {
            this._deltaX = event.clientX;
          }
        }
        _end(event) {
          if (this._eventIsPointerPenTouch(event)) {
            this._deltaX = event.clientX - this._deltaX;
          }
          this._handleSwipe();
          execute(this._config.endCallback);
        }
        _move(event) {
          this._deltaX = event.touches && event.touches.length > 1 ? 0 : event.touches[0].clientX - this._deltaX;
        }
        _handleSwipe() {
          const absDeltaX = Math.abs(this._deltaX);
          if (absDeltaX <= SWIPE_THRESHOLD) {
            return;
          }
          const direction = absDeltaX / this._deltaX;
          this._deltaX = 0;
          if (!direction) {
            return;
          }
          execute(direction > 0 ? this._config.rightCallback : this._config.leftCallback);
        }
        _initEvents() {
          if (this._supportPointerEvents) {
            EventHandler.on(this._element, EVENT_POINTERDOWN, (event) => this._start(event));
            EventHandler.on(this._element, EVENT_POINTERUP, (event) => this._end(event));
            this._element.classList.add(CLASS_NAME_POINTER_EVENT);
          } else {
            EventHandler.on(this._element, EVENT_TOUCHSTART, (event) => this._start(event));
            EventHandler.on(this._element, EVENT_TOUCHMOVE, (event) => this._move(event));
            EventHandler.on(this._element, EVENT_TOUCHEND, (event) => this._end(event));
          }
        }
        _eventIsPointerPenTouch(event) {
          return this._supportPointerEvents && (event.pointerType === POINTER_TYPE_PEN || event.pointerType === POINTER_TYPE_TOUCH);
        }
        static isSupported() {
          return "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0;
        }
      }
      const NAME$c = "carousel";
      const DATA_KEY$8 = "bs.carousel";
      const EVENT_KEY$8 = `.${DATA_KEY$8}`;
      const DATA_API_KEY$5 = ".data-api";
      const ARROW_LEFT_KEY$1 = "ArrowLeft";
      const ARROW_RIGHT_KEY$1 = "ArrowRight";
      const TOUCHEVENT_COMPAT_WAIT = 500;
      const ORDER_NEXT = "next";
      const ORDER_PREV = "prev";
      const DIRECTION_LEFT = "left";
      const DIRECTION_RIGHT = "right";
      const EVENT_SLIDE = `slide${EVENT_KEY$8}`;
      const EVENT_SLID = `slid${EVENT_KEY$8}`;
      const EVENT_KEYDOWN$1 = `keydown${EVENT_KEY$8}`;
      const EVENT_MOUSEENTER$1 = `mouseenter${EVENT_KEY$8}`;
      const EVENT_MOUSELEAVE$1 = `mouseleave${EVENT_KEY$8}`;
      const EVENT_DRAG_START = `dragstart${EVENT_KEY$8}`;
      const EVENT_LOAD_DATA_API$3 = `load${EVENT_KEY$8}${DATA_API_KEY$5}`;
      const EVENT_CLICK_DATA_API$5 = `click${EVENT_KEY$8}${DATA_API_KEY$5}`;
      const CLASS_NAME_CAROUSEL = "carousel";
      const CLASS_NAME_ACTIVE$2 = "active";
      const CLASS_NAME_SLIDE = "slide";
      const CLASS_NAME_END = "carousel-item-end";
      const CLASS_NAME_START = "carousel-item-start";
      const CLASS_NAME_NEXT = "carousel-item-next";
      const CLASS_NAME_PREV = "carousel-item-prev";
      const SELECTOR_ACTIVE = ".active";
      const SELECTOR_ITEM = ".carousel-item";
      const SELECTOR_ACTIVE_ITEM = SELECTOR_ACTIVE + SELECTOR_ITEM;
      const SELECTOR_ITEM_IMG = ".carousel-item img";
      const SELECTOR_INDICATORS = ".carousel-indicators";
      const SELECTOR_DATA_SLIDE = "[data-bs-slide], [data-bs-slide-to]";
      const SELECTOR_DATA_RIDE = '[data-bs-ride="carousel"]';
      const KEY_TO_DIRECTION = {
        [ARROW_LEFT_KEY$1]: DIRECTION_RIGHT,
        [ARROW_RIGHT_KEY$1]: DIRECTION_LEFT
      };
      const Default$b = {
        interval: 5e3,
        keyboard: true,
        pause: "hover",
        ride: false,
        touch: true,
        wrap: true
      };
      const DefaultType$b = {
        interval: "(number|boolean)",
        keyboard: "boolean",
        pause: "(string|boolean)",
        ride: "(boolean|string)",
        touch: "boolean",
        wrap: "boolean"
      };
      class Carousel extends BaseComponent {
        constructor(element, config) {
          super(element, config);
          this._interval = null;
          this._activeElement = null;
          this._isSliding = false;
          this.touchTimeout = null;
          this._swipeHelper = null;
          this._indicatorsElement = SelectorEngine.findOne(SELECTOR_INDICATORS, this._element);
          this._addEventListeners();
          if (this._config.ride === CLASS_NAME_CAROUSEL) {
            this.cycle();
          }
        }
        static get Default() {
          return Default$b;
        }
        static get DefaultType() {
          return DefaultType$b;
        }
        static get NAME() {
          return NAME$c;
        }
        next() {
          this._slide(ORDER_NEXT);
        }
        nextWhenVisible() {
          if (!document.hidden && isVisible(this._element)) {
            this.next();
          }
        }
        prev() {
          this._slide(ORDER_PREV);
        }
        pause() {
          if (this._isSliding) {
            triggerTransitionEnd(this._element);
          }
          this._clearInterval();
        }
        cycle() {
          this._clearInterval();
          this._updateInterval();
          this._interval = setInterval(() => this.nextWhenVisible(), this._config.interval);
        }
        _maybeEnableCycle() {
          if (!this._config.ride) {
            return;
          }
          if (this._isSliding) {
            EventHandler.one(this._element, EVENT_SLID, () => this.cycle());
            return;
          }
          this.cycle();
        }
        to(index) {
          const items = this._getItems();
          if (index > items.length - 1 || index < 0) {
            return;
          }
          if (this._isSliding) {
            EventHandler.one(this._element, EVENT_SLID, () => this.to(index));
            return;
          }
          const activeIndex = this._getItemIndex(this._getActive());
          if (activeIndex === index) {
            return;
          }
          const order = index > activeIndex ? ORDER_NEXT : ORDER_PREV;
          this._slide(order, items[index]);
        }
        dispose() {
          if (this._swipeHelper) {
            this._swipeHelper.dispose();
          }
          super.dispose();
        }
        _configAfterMerge(config) {
          config.defaultInterval = config.interval;
          return config;
        }
        _addEventListeners() {
          if (this._config.keyboard) {
            EventHandler.on(this._element, EVENT_KEYDOWN$1, (event) => this._keydown(event));
          }
          if (this._config.pause === "hover") {
            EventHandler.on(this._element, EVENT_MOUSEENTER$1, () => this.pause());
            EventHandler.on(this._element, EVENT_MOUSELEAVE$1, () => this._maybeEnableCycle());
          }
          if (this._config.touch && Swipe.isSupported()) {
            this._addTouchEventListeners();
          }
        }
        _addTouchEventListeners() {
          for (const img of SelectorEngine.find(SELECTOR_ITEM_IMG, this._element)) {
            EventHandler.on(img, EVENT_DRAG_START, (event) => event.preventDefault());
          }
          const endCallBack = () => {
            if (this._config.pause !== "hover") {
              return;
            }
            this.pause();
            if (this.touchTimeout) {
              clearTimeout(this.touchTimeout);
            }
            this.touchTimeout = setTimeout(() => this._maybeEnableCycle(), TOUCHEVENT_COMPAT_WAIT + this._config.interval);
          };
          const swipeConfig = {
            leftCallback: () => this._slide(this._directionToOrder(DIRECTION_LEFT)),
            rightCallback: () => this._slide(this._directionToOrder(DIRECTION_RIGHT)),
            endCallback: endCallBack
          };
          this._swipeHelper = new Swipe(this._element, swipeConfig);
        }
        _keydown(event) {
          if (/input|textarea/i.test(event.target.tagName)) {
            return;
          }
          const direction = KEY_TO_DIRECTION[event.key];
          if (direction) {
            event.preventDefault();
            this._slide(this._directionToOrder(direction));
          }
        }
        _getItemIndex(element) {
          return this._getItems().indexOf(element);
        }
        _setActiveIndicatorElement(index) {
          if (!this._indicatorsElement) {
            return;
          }
          const activeIndicator = SelectorEngine.findOne(SELECTOR_ACTIVE, this._indicatorsElement);
          activeIndicator.classList.remove(CLASS_NAME_ACTIVE$2);
          activeIndicator.removeAttribute("aria-current");
          const newActiveIndicator = SelectorEngine.findOne(`[data-bs-slide-to="${index}"]`, this._indicatorsElement);
          if (newActiveIndicator) {
            newActiveIndicator.classList.add(CLASS_NAME_ACTIVE$2);
            newActiveIndicator.setAttribute("aria-current", "true");
          }
        }
        _updateInterval() {
          const element = this._activeElement || this._getActive();
          if (!element) {
            return;
          }
          const elementInterval = Number.parseInt(element.getAttribute("data-bs-interval"), 10);
          this._config.interval = elementInterval || this._config.defaultInterval;
        }
        _slide(order, element = null) {
          if (this._isSliding) {
            return;
          }
          const activeElement = this._getActive();
          const isNext = order === ORDER_NEXT;
          const nextElement = element || getNextActiveElement(this._getItems(), activeElement, isNext, this._config.wrap);
          if (nextElement === activeElement) {
            return;
          }
          const nextElementIndex = this._getItemIndex(nextElement);
          const triggerEvent = (eventName) => {
            return EventHandler.trigger(this._element, eventName, {
              relatedTarget: nextElement,
              direction: this._orderToDirection(order),
              from: this._getItemIndex(activeElement),
              to: nextElementIndex
            });
          };
          const slideEvent = triggerEvent(EVENT_SLIDE);
          if (slideEvent.defaultPrevented) {
            return;
          }
          if (!activeElement || !nextElement) {
            return;
          }
          const isCycling = Boolean(this._interval);
          this.pause();
          this._isSliding = true;
          this._setActiveIndicatorElement(nextElementIndex);
          this._activeElement = nextElement;
          const directionalClassName = isNext ? CLASS_NAME_START : CLASS_NAME_END;
          const orderClassName = isNext ? CLASS_NAME_NEXT : CLASS_NAME_PREV;
          nextElement.classList.add(orderClassName);
          reflow(nextElement);
          activeElement.classList.add(directionalClassName);
          nextElement.classList.add(directionalClassName);
          const completeCallBack = () => {
            nextElement.classList.remove(directionalClassName, orderClassName);
            nextElement.classList.add(CLASS_NAME_ACTIVE$2);
            activeElement.classList.remove(CLASS_NAME_ACTIVE$2, orderClassName, directionalClassName);
            this._isSliding = false;
            triggerEvent(EVENT_SLID);
          };
          this._queueCallback(completeCallBack, activeElement, this._isAnimated());
          if (isCycling) {
            this.cycle();
          }
        }
        _isAnimated() {
          return this._element.classList.contains(CLASS_NAME_SLIDE);
        }
        _getActive() {
          return SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element);
        }
        _getItems() {
          return SelectorEngine.find(SELECTOR_ITEM, this._element);
        }
        _clearInterval() {
          if (this._interval) {
            clearInterval(this._interval);
            this._interval = null;
          }
        }
        _directionToOrder(direction) {
          if (isRTL()) {
            return direction === DIRECTION_LEFT ? ORDER_PREV : ORDER_NEXT;
          }
          return direction === DIRECTION_LEFT ? ORDER_NEXT : ORDER_PREV;
        }
        _orderToDirection(order) {
          if (isRTL()) {
            return order === ORDER_PREV ? DIRECTION_LEFT : DIRECTION_RIGHT;
          }
          return order === ORDER_PREV ? DIRECTION_RIGHT : DIRECTION_LEFT;
        }
        static jQueryInterface(config) {
          return this.each(function() {
            const data = Carousel.getOrCreateInstance(this, config);
            if (typeof config === "number") {
              data.to(config);
              return;
            }
            if (typeof config === "string") {
              if (data[config] === void 0 || config.startsWith("_") || config === "constructor") {
                throw new TypeError(`No method named "${config}"`);
              }
              data[config]();
            }
          });
        }
      }
      EventHandler.on(document, EVENT_CLICK_DATA_API$5, SELECTOR_DATA_SLIDE, function(event) {
        const target = SelectorEngine.getElementFromSelector(this);
        if (!target || !target.classList.contains(CLASS_NAME_CAROUSEL)) {
          return;
        }
        event.preventDefault();
        const carousel = Carousel.getOrCreateInstance(target);
        const slideIndex = this.getAttribute("data-bs-slide-to");
        if (slideIndex) {
          carousel.to(slideIndex);
          carousel._maybeEnableCycle();
          return;
        }
        if (Manipulator.getDataAttribute(this, "slide") === "next") {
          carousel.next();
          carousel._maybeEnableCycle();
          return;
        }
        carousel.prev();
        carousel._maybeEnableCycle();
      });
      EventHandler.on(window, EVENT_LOAD_DATA_API$3, () => {
        const carousels = SelectorEngine.find(SELECTOR_DATA_RIDE);
        for (const carousel of carousels) {
          Carousel.getOrCreateInstance(carousel);
        }
      });
      defineJQueryPlugin(Carousel);
      const NAME$b = "collapse";
      const DATA_KEY$7 = "bs.collapse";
      const EVENT_KEY$7 = `.${DATA_KEY$7}`;
      const DATA_API_KEY$4 = ".data-api";
      const EVENT_SHOW$6 = `show${EVENT_KEY$7}`;
      const EVENT_SHOWN$6 = `shown${EVENT_KEY$7}`;
      const EVENT_HIDE$6 = `hide${EVENT_KEY$7}`;
      const EVENT_HIDDEN$6 = `hidden${EVENT_KEY$7}`;
      const EVENT_CLICK_DATA_API$4 = `click${EVENT_KEY$7}${DATA_API_KEY$4}`;
      const CLASS_NAME_SHOW$7 = "show";
      const CLASS_NAME_COLLAPSE = "collapse";
      const CLASS_NAME_COLLAPSING = "collapsing";
      const CLASS_NAME_COLLAPSED = "collapsed";
      const CLASS_NAME_DEEPER_CHILDREN = `:scope .${CLASS_NAME_COLLAPSE} .${CLASS_NAME_COLLAPSE}`;
      const CLASS_NAME_HORIZONTAL = "collapse-horizontal";
      const WIDTH = "width";
      const HEIGHT = "height";
      const SELECTOR_ACTIVES = ".collapse.show, .collapse.collapsing";
      const SELECTOR_DATA_TOGGLE$4 = '[data-bs-toggle="collapse"]';
      const Default$a = {
        parent: null,
        toggle: true
      };
      const DefaultType$a = {
        parent: "(null|element)",
        toggle: "boolean"
      };
      class Collapse extends BaseComponent {
        constructor(element, config) {
          super(element, config);
          this._isTransitioning = false;
          this._triggerArray = [];
          const toggleList = SelectorEngine.find(SELECTOR_DATA_TOGGLE$4);
          for (const elem of toggleList) {
            const selector = SelectorEngine.getSelectorFromElement(elem);
            const filterElement = SelectorEngine.find(selector).filter((foundElement) => foundElement === this._element);
            if (selector !== null && filterElement.length) {
              this._triggerArray.push(elem);
            }
          }
          this._initializeChildren();
          if (!this._config.parent) {
            this._addAriaAndCollapsedClass(this._triggerArray, this._isShown());
          }
          if (this._config.toggle) {
            this.toggle();
          }
        }
        static get Default() {
          return Default$a;
        }
        static get DefaultType() {
          return DefaultType$a;
        }
        static get NAME() {
          return NAME$b;
        }
        toggle() {
          if (this._isShown()) {
            this.hide();
          } else {
            this.show();
          }
        }
        show() {
          if (this._isTransitioning || this._isShown()) {
            return;
          }
          let activeChildren = [];
          if (this._config.parent) {
            activeChildren = this._getFirstLevelChildren(SELECTOR_ACTIVES).filter((element) => element !== this._element).map((element) => Collapse.getOrCreateInstance(element, {
              toggle: false
            }));
          }
          if (activeChildren.length && activeChildren[0]._isTransitioning) {
            return;
          }
          const startEvent = EventHandler.trigger(this._element, EVENT_SHOW$6);
          if (startEvent.defaultPrevented) {
            return;
          }
          for (const activeInstance of activeChildren) {
            activeInstance.hide();
          }
          const dimension = this._getDimension();
          this._element.classList.remove(CLASS_NAME_COLLAPSE);
          this._element.classList.add(CLASS_NAME_COLLAPSING);
          this._element.style[dimension] = 0;
          this._addAriaAndCollapsedClass(this._triggerArray, true);
          this._isTransitioning = true;
          const complete = () => {
            this._isTransitioning = false;
            this._element.classList.remove(CLASS_NAME_COLLAPSING);
            this._element.classList.add(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW$7);
            this._element.style[dimension] = "";
            EventHandler.trigger(this._element, EVENT_SHOWN$6);
          };
          const capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
          const scrollSize = `scroll${capitalizedDimension}`;
          this._queueCallback(complete, this._element, true);
          this._element.style[dimension] = `${this._element[scrollSize]}px`;
        }
        hide() {
          if (this._isTransitioning || !this._isShown()) {
            return;
          }
          const startEvent = EventHandler.trigger(this._element, EVENT_HIDE$6);
          if (startEvent.defaultPrevented) {
            return;
          }
          const dimension = this._getDimension();
          this._element.style[dimension] = `${this._element.getBoundingClientRect()[dimension]}px`;
          reflow(this._element);
          this._element.classList.add(CLASS_NAME_COLLAPSING);
          this._element.classList.remove(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW$7);
          for (const trigger of this._triggerArray) {
            const element = SelectorEngine.getElementFromSelector(trigger);
            if (element && !this._isShown(element)) {
              this._addAriaAndCollapsedClass([trigger], false);
            }
          }
          this._isTransitioning = true;
          const complete = () => {
            this._isTransitioning = false;
            this._element.classList.remove(CLASS_NAME_COLLAPSING);
            this._element.classList.add(CLASS_NAME_COLLAPSE);
            EventHandler.trigger(this._element, EVENT_HIDDEN$6);
          };
          this._element.style[dimension] = "";
          this._queueCallback(complete, this._element, true);
        }
        _isShown(element = this._element) {
          return element.classList.contains(CLASS_NAME_SHOW$7);
        }
        _configAfterMerge(config) {
          config.toggle = Boolean(config.toggle);
          config.parent = getElement(config.parent);
          return config;
        }
        _getDimension() {
          return this._element.classList.contains(CLASS_NAME_HORIZONTAL) ? WIDTH : HEIGHT;
        }
        _initializeChildren() {
          if (!this._config.parent) {
            return;
          }
          const children = this._getFirstLevelChildren(SELECTOR_DATA_TOGGLE$4);
          for (const element of children) {
            const selected = SelectorEngine.getElementFromSelector(element);
            if (selected) {
              this._addAriaAndCollapsedClass([element], this._isShown(selected));
            }
          }
        }
        _getFirstLevelChildren(selector) {
          const children = SelectorEngine.find(CLASS_NAME_DEEPER_CHILDREN, this._config.parent);
          return SelectorEngine.find(selector, this._config.parent).filter((element) => !children.includes(element));
        }
        _addAriaAndCollapsedClass(triggerArray, isOpen) {
          if (!triggerArray.length) {
            return;
          }
          for (const element of triggerArray) {
            element.classList.toggle(CLASS_NAME_COLLAPSED, !isOpen);
            element.setAttribute("aria-expanded", isOpen);
          }
        }
        static jQueryInterface(config) {
          const _config = {};
          if (typeof config === "string" && /show|hide/.test(config)) {
            _config.toggle = false;
          }
          return this.each(function() {
            const data = Collapse.getOrCreateInstance(this, _config);
            if (typeof config === "string") {
              if (typeof data[config] === "undefined") {
                throw new TypeError(`No method named "${config}"`);
              }
              data[config]();
            }
          });
        }
      }
      EventHandler.on(document, EVENT_CLICK_DATA_API$4, SELECTOR_DATA_TOGGLE$4, function(event) {
        if (event.target.tagName === "A" || event.delegateTarget && event.delegateTarget.tagName === "A") {
          event.preventDefault();
        }
        for (const element of SelectorEngine.getMultipleElementsFromSelector(this)) {
          Collapse.getOrCreateInstance(element, {
            toggle: false
          }).toggle();
        }
      });
      defineJQueryPlugin(Collapse);
      const NAME$a = "dropdown";
      const DATA_KEY$6 = "bs.dropdown";
      const EVENT_KEY$6 = `.${DATA_KEY$6}`;
      const DATA_API_KEY$3 = ".data-api";
      const ESCAPE_KEY$2 = "Escape";
      const TAB_KEY$1 = "Tab";
      const ARROW_UP_KEY$1 = "ArrowUp";
      const ARROW_DOWN_KEY$1 = "ArrowDown";
      const RIGHT_MOUSE_BUTTON = 2;
      const EVENT_HIDE$5 = `hide${EVENT_KEY$6}`;
      const EVENT_HIDDEN$5 = `hidden${EVENT_KEY$6}`;
      const EVENT_SHOW$5 = `show${EVENT_KEY$6}`;
      const EVENT_SHOWN$5 = `shown${EVENT_KEY$6}`;
      const EVENT_CLICK_DATA_API$3 = `click${EVENT_KEY$6}${DATA_API_KEY$3}`;
      const EVENT_KEYDOWN_DATA_API = `keydown${EVENT_KEY$6}${DATA_API_KEY$3}`;
      const EVENT_KEYUP_DATA_API = `keyup${EVENT_KEY$6}${DATA_API_KEY$3}`;
      const CLASS_NAME_SHOW$6 = "show";
      const CLASS_NAME_DROPUP = "dropup";
      const CLASS_NAME_DROPEND = "dropend";
      const CLASS_NAME_DROPSTART = "dropstart";
      const CLASS_NAME_DROPUP_CENTER = "dropup-center";
      const CLASS_NAME_DROPDOWN_CENTER = "dropdown-center";
      const SELECTOR_DATA_TOGGLE$3 = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)';
      const SELECTOR_DATA_TOGGLE_SHOWN = `${SELECTOR_DATA_TOGGLE$3}.${CLASS_NAME_SHOW$6}`;
      const SELECTOR_MENU = ".dropdown-menu";
      const SELECTOR_NAVBAR = ".navbar";
      const SELECTOR_NAVBAR_NAV = ".navbar-nav";
      const SELECTOR_VISIBLE_ITEMS = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)";
      const PLACEMENT_TOP = isRTL() ? "top-end" : "top-start";
      const PLACEMENT_TOPEND = isRTL() ? "top-start" : "top-end";
      const PLACEMENT_BOTTOM = isRTL() ? "bottom-end" : "bottom-start";
      const PLACEMENT_BOTTOMEND = isRTL() ? "bottom-start" : "bottom-end";
      const PLACEMENT_RIGHT = isRTL() ? "left-start" : "right-start";
      const PLACEMENT_LEFT = isRTL() ? "right-start" : "left-start";
      const PLACEMENT_TOPCENTER = "top";
      const PLACEMENT_BOTTOMCENTER = "bottom";
      const Default$9 = {
        autoClose: true,
        boundary: "clippingParents",
        display: "dynamic",
        offset: [0, 2],
        popperConfig: null,
        reference: "toggle"
      };
      const DefaultType$9 = {
        autoClose: "(boolean|string)",
        boundary: "(string|element)",
        display: "string",
        offset: "(array|string|function)",
        popperConfig: "(null|object|function)",
        reference: "(string|element|object)"
      };
      class Dropdown extends BaseComponent {
        constructor(element, config) {
          super(element, config);
          this._popper = null;
          this._parent = this._element.parentNode;
          this._menu = SelectorEngine.next(this._element, SELECTOR_MENU)[0] || SelectorEngine.prev(this._element, SELECTOR_MENU)[0] || SelectorEngine.findOne(SELECTOR_MENU, this._parent);
          this._inNavbar = this._detectNavbar();
        }
        static get Default() {
          return Default$9;
        }
        static get DefaultType() {
          return DefaultType$9;
        }
        static get NAME() {
          return NAME$a;
        }
        toggle() {
          return this._isShown() ? this.hide() : this.show();
        }
        show() {
          if (isDisabled(this._element) || this._isShown()) {
            return;
          }
          const relatedTarget = {
            relatedTarget: this._element
          };
          const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$5, relatedTarget);
          if (showEvent.defaultPrevented) {
            return;
          }
          this._createPopper();
          if ("ontouchstart" in document.documentElement && !this._parent.closest(SELECTOR_NAVBAR_NAV)) {
            for (const element of [].concat(...document.body.children)) {
              EventHandler.on(element, "mouseover", noop);
            }
          }
          this._element.focus();
          this._element.setAttribute("aria-expanded", true);
          this._menu.classList.add(CLASS_NAME_SHOW$6);
          this._element.classList.add(CLASS_NAME_SHOW$6);
          EventHandler.trigger(this._element, EVENT_SHOWN$5, relatedTarget);
        }
        hide() {
          if (isDisabled(this._element) || !this._isShown()) {
            return;
          }
          const relatedTarget = {
            relatedTarget: this._element
          };
          this._completeHide(relatedTarget);
        }
        dispose() {
          if (this._popper) {
            this._popper.destroy();
          }
          super.dispose();
        }
        update() {
          this._inNavbar = this._detectNavbar();
          if (this._popper) {
            this._popper.update();
          }
        }
        _completeHide(relatedTarget) {
          const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$5, relatedTarget);
          if (hideEvent.defaultPrevented) {
            return;
          }
          if ("ontouchstart" in document.documentElement) {
            for (const element of [].concat(...document.body.children)) {
              EventHandler.off(element, "mouseover", noop);
            }
          }
          if (this._popper) {
            this._popper.destroy();
          }
          this._menu.classList.remove(CLASS_NAME_SHOW$6);
          this._element.classList.remove(CLASS_NAME_SHOW$6);
          this._element.setAttribute("aria-expanded", "false");
          Manipulator.removeDataAttribute(this._menu, "popper");
          EventHandler.trigger(this._element, EVENT_HIDDEN$5, relatedTarget);
        }
        _getConfig(config) {
          config = super._getConfig(config);
          if (typeof config.reference === "object" && !isElement(config.reference) && typeof config.reference.getBoundingClientRect !== "function") {
            throw new TypeError(`${NAME$a.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
          }
          return config;
        }
        _createPopper() {
          if (typeof Popper__namespace === "undefined") {
            throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
          }
          let referenceElement = this._element;
          if (this._config.reference === "parent") {
            referenceElement = this._parent;
          } else if (isElement(this._config.reference)) {
            referenceElement = getElement(this._config.reference);
          } else if (typeof this._config.reference === "object") {
            referenceElement = this._config.reference;
          }
          const popperConfig = this._getPopperConfig();
          this._popper = Popper__namespace.createPopper(referenceElement, this._menu, popperConfig);
        }
        _isShown() {
          return this._menu.classList.contains(CLASS_NAME_SHOW$6);
        }
        _getPlacement() {
          const parentDropdown = this._parent;
          if (parentDropdown.classList.contains(CLASS_NAME_DROPEND)) {
            return PLACEMENT_RIGHT;
          }
          if (parentDropdown.classList.contains(CLASS_NAME_DROPSTART)) {
            return PLACEMENT_LEFT;
          }
          if (parentDropdown.classList.contains(CLASS_NAME_DROPUP_CENTER)) {
            return PLACEMENT_TOPCENTER;
          }
          if (parentDropdown.classList.contains(CLASS_NAME_DROPDOWN_CENTER)) {
            return PLACEMENT_BOTTOMCENTER;
          }
          const isEnd = getComputedStyle(this._menu).getPropertyValue("--bs-position").trim() === "end";
          if (parentDropdown.classList.contains(CLASS_NAME_DROPUP)) {
            return isEnd ? PLACEMENT_TOPEND : PLACEMENT_TOP;
          }
          return isEnd ? PLACEMENT_BOTTOMEND : PLACEMENT_BOTTOM;
        }
        _detectNavbar() {
          return this._element.closest(SELECTOR_NAVBAR) !== null;
        }
        _getOffset() {
          const {
            offset
          } = this._config;
          if (typeof offset === "string") {
            return offset.split(",").map((value) => Number.parseInt(value, 10));
          }
          if (typeof offset === "function") {
            return (popperData) => offset(popperData, this._element);
          }
          return offset;
        }
        _getPopperConfig() {
          const defaultBsPopperConfig = {
            placement: this._getPlacement(),
            modifiers: [{
              name: "preventOverflow",
              options: {
                boundary: this._config.boundary
              }
            }, {
              name: "offset",
              options: {
                offset: this._getOffset()
              }
            }]
          };
          if (this._inNavbar || this._config.display === "static") {
            Manipulator.setDataAttribute(this._menu, "popper", "static");
            defaultBsPopperConfig.modifiers = [{
              name: "applyStyles",
              enabled: false
            }];
          }
          return {
            ...defaultBsPopperConfig,
            ...execute(this._config.popperConfig, [defaultBsPopperConfig])
          };
        }
        _selectMenuItem({
          key,
          target
        }) {
          const items = SelectorEngine.find(SELECTOR_VISIBLE_ITEMS, this._menu).filter((element) => isVisible(element));
          if (!items.length) {
            return;
          }
          getNextActiveElement(items, target, key === ARROW_DOWN_KEY$1, !items.includes(target)).focus();
        }
        static jQueryInterface(config) {
          return this.each(function() {
            const data = Dropdown.getOrCreateInstance(this, config);
            if (typeof config !== "string") {
              return;
            }
            if (typeof data[config] === "undefined") {
              throw new TypeError(`No method named "${config}"`);
            }
            data[config]();
          });
        }
        static clearMenus(event) {
          if (event.button === RIGHT_MOUSE_BUTTON || event.type === "keyup" && event.key !== TAB_KEY$1) {
            return;
          }
          const openToggles = SelectorEngine.find(SELECTOR_DATA_TOGGLE_SHOWN);
          for (const toggle of openToggles) {
            const context = Dropdown.getInstance(toggle);
            if (!context || context._config.autoClose === false) {
              continue;
            }
            const composedPath = event.composedPath();
            const isMenuTarget = composedPath.includes(context._menu);
            if (composedPath.includes(context._element) || context._config.autoClose === "inside" && !isMenuTarget || context._config.autoClose === "outside" && isMenuTarget) {
              continue;
            }
            if (context._menu.contains(event.target) && (event.type === "keyup" && event.key === TAB_KEY$1 || /input|select|option|textarea|form/i.test(event.target.tagName))) {
              continue;
            }
            const relatedTarget = {
              relatedTarget: context._element
            };
            if (event.type === "click") {
              relatedTarget.clickEvent = event;
            }
            context._completeHide(relatedTarget);
          }
        }
        static dataApiKeydownHandler(event) {
          const isInput = /input|textarea/i.test(event.target.tagName);
          const isEscapeEvent = event.key === ESCAPE_KEY$2;
          const isUpOrDownEvent = [ARROW_UP_KEY$1, ARROW_DOWN_KEY$1].includes(event.key);
          if (!isUpOrDownEvent && !isEscapeEvent) {
            return;
          }
          if (isInput && !isEscapeEvent) {
            return;
          }
          event.preventDefault();
          const getToggleButton = this.matches(SELECTOR_DATA_TOGGLE$3) ? this : SelectorEngine.prev(this, SELECTOR_DATA_TOGGLE$3)[0] || SelectorEngine.next(this, SELECTOR_DATA_TOGGLE$3)[0] || SelectorEngine.findOne(SELECTOR_DATA_TOGGLE$3, event.delegateTarget.parentNode);
          const instance = Dropdown.getOrCreateInstance(getToggleButton);
          if (isUpOrDownEvent) {
            event.stopPropagation();
            instance.show();
            instance._selectMenuItem(event);
            return;
          }
          if (instance._isShown()) {
            event.stopPropagation();
            instance.hide();
            getToggleButton.focus();
          }
        }
      }
      EventHandler.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_DATA_TOGGLE$3, Dropdown.dataApiKeydownHandler);
      EventHandler.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_MENU, Dropdown.dataApiKeydownHandler);
      EventHandler.on(document, EVENT_CLICK_DATA_API$3, Dropdown.clearMenus);
      EventHandler.on(document, EVENT_KEYUP_DATA_API, Dropdown.clearMenus);
      EventHandler.on(document, EVENT_CLICK_DATA_API$3, SELECTOR_DATA_TOGGLE$3, function(event) {
        event.preventDefault();
        Dropdown.getOrCreateInstance(this).toggle();
      });
      defineJQueryPlugin(Dropdown);
      const NAME$9 = "backdrop";
      const CLASS_NAME_FADE$4 = "fade";
      const CLASS_NAME_SHOW$5 = "show";
      const EVENT_MOUSEDOWN = `mousedown.bs.${NAME$9}`;
      const Default$8 = {
        className: "modal-backdrop",
        clickCallback: null,
        isAnimated: false,
        isVisible: true,
        rootElement: "body"
      };
      const DefaultType$8 = {
        className: "string",
        clickCallback: "(function|null)",
        isAnimated: "boolean",
        isVisible: "boolean",
        rootElement: "(element|string)"
      };
      class Backdrop extends Config {
        constructor(config) {
          super();
          this._config = this._getConfig(config);
          this._isAppended = false;
          this._element = null;
        }
        static get Default() {
          return Default$8;
        }
        static get DefaultType() {
          return DefaultType$8;
        }
        static get NAME() {
          return NAME$9;
        }
        show(callback) {
          if (!this._config.isVisible) {
            execute(callback);
            return;
          }
          this._append();
          const element = this._getElement();
          if (this._config.isAnimated) {
            reflow(element);
          }
          element.classList.add(CLASS_NAME_SHOW$5);
          this._emulateAnimation(() => {
            execute(callback);
          });
        }
        hide(callback) {
          if (!this._config.isVisible) {
            execute(callback);
            return;
          }
          this._getElement().classList.remove(CLASS_NAME_SHOW$5);
          this._emulateAnimation(() => {
            this.dispose();
            execute(callback);
          });
        }
        dispose() {
          if (!this._isAppended) {
            return;
          }
          EventHandler.off(this._element, EVENT_MOUSEDOWN);
          this._element.remove();
          this._isAppended = false;
        }
        _getElement() {
          if (!this._element) {
            const backdrop = document.createElement("div");
            backdrop.className = this._config.className;
            if (this._config.isAnimated) {
              backdrop.classList.add(CLASS_NAME_FADE$4);
            }
            this._element = backdrop;
          }
          return this._element;
        }
        _configAfterMerge(config) {
          config.rootElement = getElement(config.rootElement);
          return config;
        }
        _append() {
          if (this._isAppended) {
            return;
          }
          const element = this._getElement();
          this._config.rootElement.append(element);
          EventHandler.on(element, EVENT_MOUSEDOWN, () => {
            execute(this._config.clickCallback);
          });
          this._isAppended = true;
        }
        _emulateAnimation(callback) {
          executeAfterTransition(callback, this._getElement(), this._config.isAnimated);
        }
      }
      const NAME$8 = "focustrap";
      const DATA_KEY$5 = "bs.focustrap";
      const EVENT_KEY$5 = `.${DATA_KEY$5}`;
      const EVENT_FOCUSIN$2 = `focusin${EVENT_KEY$5}`;
      const EVENT_KEYDOWN_TAB = `keydown.tab${EVENT_KEY$5}`;
      const TAB_KEY = "Tab";
      const TAB_NAV_FORWARD = "forward";
      const TAB_NAV_BACKWARD = "backward";
      const Default$7 = {
        autofocus: true,
        trapElement: null
      };
      const DefaultType$7 = {
        autofocus: "boolean",
        trapElement: "element"
      };
      class FocusTrap extends Config {
        constructor(config) {
          super();
          this._config = this._getConfig(config);
          this._isActive = false;
          this._lastTabNavDirection = null;
        }
        static get Default() {
          return Default$7;
        }
        static get DefaultType() {
          return DefaultType$7;
        }
        static get NAME() {
          return NAME$8;
        }
        activate() {
          if (this._isActive) {
            return;
          }
          if (this._config.autofocus) {
            this._config.trapElement.focus();
          }
          EventHandler.off(document, EVENT_KEY$5);
          EventHandler.on(document, EVENT_FOCUSIN$2, (event) => this._handleFocusin(event));
          EventHandler.on(document, EVENT_KEYDOWN_TAB, (event) => this._handleKeydown(event));
          this._isActive = true;
        }
        deactivate() {
          if (!this._isActive) {
            return;
          }
          this._isActive = false;
          EventHandler.off(document, EVENT_KEY$5);
        }
        _handleFocusin(event) {
          const {
            trapElement
          } = this._config;
          if (event.target === document || event.target === trapElement || trapElement.contains(event.target)) {
            return;
          }
          const elements = SelectorEngine.focusableChildren(trapElement);
          if (elements.length === 0) {
            trapElement.focus();
          } else if (this._lastTabNavDirection === TAB_NAV_BACKWARD) {
            elements[elements.length - 1].focus();
          } else {
            elements[0].focus();
          }
        }
        _handleKeydown(event) {
          if (event.key !== TAB_KEY) {
            return;
          }
          this._lastTabNavDirection = event.shiftKey ? TAB_NAV_BACKWARD : TAB_NAV_FORWARD;
        }
      }
      const SELECTOR_FIXED_CONTENT = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top";
      const SELECTOR_STICKY_CONTENT = ".sticky-top";
      const PROPERTY_PADDING = "padding-right";
      const PROPERTY_MARGIN = "margin-right";
      class ScrollBarHelper {
        constructor() {
          this._element = document.body;
        }
        getWidth() {
          const documentWidth = document.documentElement.clientWidth;
          return Math.abs(window.innerWidth - documentWidth);
        }
        hide() {
          const width = this.getWidth();
          this._disableOverFlow();
          this._setElementAttributes(this._element, PROPERTY_PADDING, (calculatedValue) => calculatedValue + width);
          this._setElementAttributes(SELECTOR_FIXED_CONTENT, PROPERTY_PADDING, (calculatedValue) => calculatedValue + width);
          this._setElementAttributes(SELECTOR_STICKY_CONTENT, PROPERTY_MARGIN, (calculatedValue) => calculatedValue - width);
        }
        reset() {
          this._resetElementAttributes(this._element, "overflow");
          this._resetElementAttributes(this._element, PROPERTY_PADDING);
          this._resetElementAttributes(SELECTOR_FIXED_CONTENT, PROPERTY_PADDING);
          this._resetElementAttributes(SELECTOR_STICKY_CONTENT, PROPERTY_MARGIN);
        }
        isOverflowing() {
          return this.getWidth() > 0;
        }
        _disableOverFlow() {
          this._saveInitialAttribute(this._element, "overflow");
          this._element.style.overflow = "hidden";
        }
        _setElementAttributes(selector, styleProperty, callback) {
          const scrollbarWidth = this.getWidth();
          const manipulationCallBack = (element) => {
            if (element !== this._element && window.innerWidth > element.clientWidth + scrollbarWidth) {
              return;
            }
            this._saveInitialAttribute(element, styleProperty);
            const calculatedValue = window.getComputedStyle(element).getPropertyValue(styleProperty);
            element.style.setProperty(styleProperty, `${callback(Number.parseFloat(calculatedValue))}px`);
          };
          this._applyManipulationCallback(selector, manipulationCallBack);
        }
        _saveInitialAttribute(element, styleProperty) {
          const actualValue = element.style.getPropertyValue(styleProperty);
          if (actualValue) {
            Manipulator.setDataAttribute(element, styleProperty, actualValue);
          }
        }
        _resetElementAttributes(selector, styleProperty) {
          const manipulationCallBack = (element) => {
            const value = Manipulator.getDataAttribute(element, styleProperty);
            if (value === null) {
              element.style.removeProperty(styleProperty);
              return;
            }
            Manipulator.removeDataAttribute(element, styleProperty);
            element.style.setProperty(styleProperty, value);
          };
          this._applyManipulationCallback(selector, manipulationCallBack);
        }
        _applyManipulationCallback(selector, callBack) {
          if (isElement(selector)) {
            callBack(selector);
            return;
          }
          for (const sel of SelectorEngine.find(selector, this._element)) {
            callBack(sel);
          }
        }
      }
      const NAME$7 = "modal";
      const DATA_KEY$4 = "bs.modal";
      const EVENT_KEY$4 = `.${DATA_KEY$4}`;
      const DATA_API_KEY$2 = ".data-api";
      const ESCAPE_KEY$1 = "Escape";
      const EVENT_HIDE$4 = `hide${EVENT_KEY$4}`;
      const EVENT_HIDE_PREVENTED$1 = `hidePrevented${EVENT_KEY$4}`;
      const EVENT_HIDDEN$4 = `hidden${EVENT_KEY$4}`;
      const EVENT_SHOW$4 = `show${EVENT_KEY$4}`;
      const EVENT_SHOWN$4 = `shown${EVENT_KEY$4}`;
      const EVENT_RESIZE$1 = `resize${EVENT_KEY$4}`;
      const EVENT_CLICK_DISMISS = `click.dismiss${EVENT_KEY$4}`;
      const EVENT_MOUSEDOWN_DISMISS = `mousedown.dismiss${EVENT_KEY$4}`;
      const EVENT_KEYDOWN_DISMISS$1 = `keydown.dismiss${EVENT_KEY$4}`;
      const EVENT_CLICK_DATA_API$2 = `click${EVENT_KEY$4}${DATA_API_KEY$2}`;
      const CLASS_NAME_OPEN = "modal-open";
      const CLASS_NAME_FADE$3 = "fade";
      const CLASS_NAME_SHOW$4 = "show";
      const CLASS_NAME_STATIC = "modal-static";
      const OPEN_SELECTOR$1 = ".modal.show";
      const SELECTOR_DIALOG = ".modal-dialog";
      const SELECTOR_MODAL_BODY = ".modal-body";
      const SELECTOR_DATA_TOGGLE$2 = '[data-bs-toggle="modal"]';
      const Default$6 = {
        backdrop: true,
        focus: true,
        keyboard: true
      };
      const DefaultType$6 = {
        backdrop: "(boolean|string)",
        focus: "boolean",
        keyboard: "boolean"
      };
      class Modal extends BaseComponent {
        constructor(element, config) {
          super(element, config);
          this._dialog = SelectorEngine.findOne(SELECTOR_DIALOG, this._element);
          this._backdrop = this._initializeBackDrop();
          this._focustrap = this._initializeFocusTrap();
          this._isShown = false;
          this._isTransitioning = false;
          this._scrollBar = new ScrollBarHelper();
          this._addEventListeners();
        }
        static get Default() {
          return Default$6;
        }
        static get DefaultType() {
          return DefaultType$6;
        }
        static get NAME() {
          return NAME$7;
        }
        toggle(relatedTarget) {
          return this._isShown ? this.hide() : this.show(relatedTarget);
        }
        show(relatedTarget) {
          if (this._isShown || this._isTransitioning) {
            return;
          }
          const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$4, {
            relatedTarget
          });
          if (showEvent.defaultPrevented) {
            return;
          }
          this._isShown = true;
          this._isTransitioning = true;
          this._scrollBar.hide();
          document.body.classList.add(CLASS_NAME_OPEN);
          this._adjustDialog();
          this._backdrop.show(() => this._showElement(relatedTarget));
        }
        hide() {
          if (!this._isShown || this._isTransitioning) {
            return;
          }
          const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$4);
          if (hideEvent.defaultPrevented) {
            return;
          }
          this._isShown = false;
          this._isTransitioning = true;
          this._focustrap.deactivate();
          this._element.classList.remove(CLASS_NAME_SHOW$4);
          this._queueCallback(() => this._hideModal(), this._element, this._isAnimated());
        }
        dispose() {
          EventHandler.off(window, EVENT_KEY$4);
          EventHandler.off(this._dialog, EVENT_KEY$4);
          this._backdrop.dispose();
          this._focustrap.deactivate();
          super.dispose();
        }
        handleUpdate() {
          this._adjustDialog();
        }
        _initializeBackDrop() {
          return new Backdrop({
            isVisible: Boolean(this._config.backdrop),
            isAnimated: this._isAnimated()
          });
        }
        _initializeFocusTrap() {
          return new FocusTrap({
            trapElement: this._element
          });
        }
        _showElement(relatedTarget) {
          if (!document.body.contains(this._element)) {
            document.body.append(this._element);
          }
          this._element.style.display = "block";
          this._element.removeAttribute("aria-hidden");
          this._element.setAttribute("aria-modal", true);
          this._element.setAttribute("role", "dialog");
          this._element.scrollTop = 0;
          const modalBody = SelectorEngine.findOne(SELECTOR_MODAL_BODY, this._dialog);
          if (modalBody) {
            modalBody.scrollTop = 0;
          }
          reflow(this._element);
          this._element.classList.add(CLASS_NAME_SHOW$4);
          const transitionComplete = () => {
            if (this._config.focus) {
              this._focustrap.activate();
            }
            this._isTransitioning = false;
            EventHandler.trigger(this._element, EVENT_SHOWN$4, {
              relatedTarget
            });
          };
          this._queueCallback(transitionComplete, this._dialog, this._isAnimated());
        }
        _addEventListeners() {
          EventHandler.on(this._element, EVENT_KEYDOWN_DISMISS$1, (event) => {
            if (event.key !== ESCAPE_KEY$1) {
              return;
            }
            if (this._config.keyboard) {
              this.hide();
              return;
            }
            this._triggerBackdropTransition();
          });
          EventHandler.on(window, EVENT_RESIZE$1, () => {
            if (this._isShown && !this._isTransitioning) {
              this._adjustDialog();
            }
          });
          EventHandler.on(this._element, EVENT_MOUSEDOWN_DISMISS, (event) => {
            EventHandler.one(this._element, EVENT_CLICK_DISMISS, (event2) => {
              if (this._element !== event.target || this._element !== event2.target) {
                return;
              }
              if (this._config.backdrop === "static") {
                this._triggerBackdropTransition();
                return;
              }
              if (this._config.backdrop) {
                this.hide();
              }
            });
          });
        }
        _hideModal() {
          this._element.style.display = "none";
          this._element.setAttribute("aria-hidden", true);
          this._element.removeAttribute("aria-modal");
          this._element.removeAttribute("role");
          this._isTransitioning = false;
          this._backdrop.hide(() => {
            document.body.classList.remove(CLASS_NAME_OPEN);
            this._resetAdjustments();
            this._scrollBar.reset();
            EventHandler.trigger(this._element, EVENT_HIDDEN$4);
          });
        }
        _isAnimated() {
          return this._element.classList.contains(CLASS_NAME_FADE$3);
        }
        _triggerBackdropTransition() {
          const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED$1);
          if (hideEvent.defaultPrevented) {
            return;
          }
          const isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;
          const initialOverflowY = this._element.style.overflowY;
          if (initialOverflowY === "hidden" || this._element.classList.contains(CLASS_NAME_STATIC)) {
            return;
          }
          if (!isModalOverflowing) {
            this._element.style.overflowY = "hidden";
          }
          this._element.classList.add(CLASS_NAME_STATIC);
          this._queueCallback(() => {
            this._element.classList.remove(CLASS_NAME_STATIC);
            this._queueCallback(() => {
              this._element.style.overflowY = initialOverflowY;
            }, this._dialog);
          }, this._dialog);
          this._element.focus();
        }
        _adjustDialog() {
          const isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;
          const scrollbarWidth = this._scrollBar.getWidth();
          const isBodyOverflowing = scrollbarWidth > 0;
          if (isBodyOverflowing && !isModalOverflowing) {
            const property = isRTL() ? "paddingLeft" : "paddingRight";
            this._element.style[property] = `${scrollbarWidth}px`;
          }
          if (!isBodyOverflowing && isModalOverflowing) {
            const property = isRTL() ? "paddingRight" : "paddingLeft";
            this._element.style[property] = `${scrollbarWidth}px`;
          }
        }
        _resetAdjustments() {
          this._element.style.paddingLeft = "";
          this._element.style.paddingRight = "";
        }
        static jQueryInterface(config, relatedTarget) {
          return this.each(function() {
            const data = Modal.getOrCreateInstance(this, config);
            if (typeof config !== "string") {
              return;
            }
            if (typeof data[config] === "undefined") {
              throw new TypeError(`No method named "${config}"`);
            }
            data[config](relatedTarget);
          });
        }
      }
      EventHandler.on(document, EVENT_CLICK_DATA_API$2, SELECTOR_DATA_TOGGLE$2, function(event) {
        const target = SelectorEngine.getElementFromSelector(this);
        if (["A", "AREA"].includes(this.tagName)) {
          event.preventDefault();
        }
        EventHandler.one(target, EVENT_SHOW$4, (showEvent) => {
          if (showEvent.defaultPrevented) {
            return;
          }
          EventHandler.one(target, EVENT_HIDDEN$4, () => {
            if (isVisible(this)) {
              this.focus();
            }
          });
        });
        const alreadyOpen = SelectorEngine.findOne(OPEN_SELECTOR$1);
        if (alreadyOpen) {
          Modal.getInstance(alreadyOpen).hide();
        }
        const data = Modal.getOrCreateInstance(target);
        data.toggle(this);
      });
      enableDismissTrigger(Modal);
      defineJQueryPlugin(Modal);
      const NAME$6 = "offcanvas";
      const DATA_KEY$3 = "bs.offcanvas";
      const EVENT_KEY$3 = `.${DATA_KEY$3}`;
      const DATA_API_KEY$1 = ".data-api";
      const EVENT_LOAD_DATA_API$2 = `load${EVENT_KEY$3}${DATA_API_KEY$1}`;
      const ESCAPE_KEY = "Escape";
      const CLASS_NAME_SHOW$3 = "show";
      const CLASS_NAME_SHOWING$1 = "showing";
      const CLASS_NAME_HIDING = "hiding";
      const CLASS_NAME_BACKDROP = "offcanvas-backdrop";
      const OPEN_SELECTOR = ".offcanvas.show";
      const EVENT_SHOW$3 = `show${EVENT_KEY$3}`;
      const EVENT_SHOWN$3 = `shown${EVENT_KEY$3}`;
      const EVENT_HIDE$3 = `hide${EVENT_KEY$3}`;
      const EVENT_HIDE_PREVENTED = `hidePrevented${EVENT_KEY$3}`;
      const EVENT_HIDDEN$3 = `hidden${EVENT_KEY$3}`;
      const EVENT_RESIZE = `resize${EVENT_KEY$3}`;
      const EVENT_CLICK_DATA_API$1 = `click${EVENT_KEY$3}${DATA_API_KEY$1}`;
      const EVENT_KEYDOWN_DISMISS = `keydown.dismiss${EVENT_KEY$3}`;
      const SELECTOR_DATA_TOGGLE$1 = '[data-bs-toggle="offcanvas"]';
      const Default$5 = {
        backdrop: true,
        keyboard: true,
        scroll: false
      };
      const DefaultType$5 = {
        backdrop: "(boolean|string)",
        keyboard: "boolean",
        scroll: "boolean"
      };
      class Offcanvas extends BaseComponent {
        constructor(element, config) {
          super(element, config);
          this._isShown = false;
          this._backdrop = this._initializeBackDrop();
          this._focustrap = this._initializeFocusTrap();
          this._addEventListeners();
        }
        static get Default() {
          return Default$5;
        }
        static get DefaultType() {
          return DefaultType$5;
        }
        static get NAME() {
          return NAME$6;
        }
        toggle(relatedTarget) {
          return this._isShown ? this.hide() : this.show(relatedTarget);
        }
        show(relatedTarget) {
          if (this._isShown) {
            return;
          }
          const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$3, {
            relatedTarget
          });
          if (showEvent.defaultPrevented) {
            return;
          }
          this._isShown = true;
          this._backdrop.show();
          if (!this._config.scroll) {
            new ScrollBarHelper().hide();
          }
          this._element.setAttribute("aria-modal", true);
          this._element.setAttribute("role", "dialog");
          this._element.classList.add(CLASS_NAME_SHOWING$1);
          const completeCallBack = () => {
            if (!this._config.scroll || this._config.backdrop) {
              this._focustrap.activate();
            }
            this._element.classList.add(CLASS_NAME_SHOW$3);
            this._element.classList.remove(CLASS_NAME_SHOWING$1);
            EventHandler.trigger(this._element, EVENT_SHOWN$3, {
              relatedTarget
            });
          };
          this._queueCallback(completeCallBack, this._element, true);
        }
        hide() {
          if (!this._isShown) {
            return;
          }
          const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$3);
          if (hideEvent.defaultPrevented) {
            return;
          }
          this._focustrap.deactivate();
          this._element.blur();
          this._isShown = false;
          this._element.classList.add(CLASS_NAME_HIDING);
          this._backdrop.hide();
          const completeCallback = () => {
            this._element.classList.remove(CLASS_NAME_SHOW$3, CLASS_NAME_HIDING);
            this._element.removeAttribute("aria-modal");
            this._element.removeAttribute("role");
            if (!this._config.scroll) {
              new ScrollBarHelper().reset();
            }
            EventHandler.trigger(this._element, EVENT_HIDDEN$3);
          };
          this._queueCallback(completeCallback, this._element, true);
        }
        dispose() {
          this._backdrop.dispose();
          this._focustrap.deactivate();
          super.dispose();
        }
        _initializeBackDrop() {
          const clickCallback = () => {
            if (this._config.backdrop === "static") {
              EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED);
              return;
            }
            this.hide();
          };
          const isVisible2 = Boolean(this._config.backdrop);
          return new Backdrop({
            className: CLASS_NAME_BACKDROP,
            isVisible: isVisible2,
            isAnimated: true,
            rootElement: this._element.parentNode,
            clickCallback: isVisible2 ? clickCallback : null
          });
        }
        _initializeFocusTrap() {
          return new FocusTrap({
            trapElement: this._element
          });
        }
        _addEventListeners() {
          EventHandler.on(this._element, EVENT_KEYDOWN_DISMISS, (event) => {
            if (event.key !== ESCAPE_KEY) {
              return;
            }
            if (this._config.keyboard) {
              this.hide();
              return;
            }
            EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED);
          });
        }
        static jQueryInterface(config) {
          return this.each(function() {
            const data = Offcanvas.getOrCreateInstance(this, config);
            if (typeof config !== "string") {
              return;
            }
            if (data[config] === void 0 || config.startsWith("_") || config === "constructor") {
              throw new TypeError(`No method named "${config}"`);
            }
            data[config](this);
          });
        }
      }
      EventHandler.on(document, EVENT_CLICK_DATA_API$1, SELECTOR_DATA_TOGGLE$1, function(event) {
        const target = SelectorEngine.getElementFromSelector(this);
        if (["A", "AREA"].includes(this.tagName)) {
          event.preventDefault();
        }
        if (isDisabled(this)) {
          return;
        }
        EventHandler.one(target, EVENT_HIDDEN$3, () => {
          if (isVisible(this)) {
            this.focus();
          }
        });
        const alreadyOpen = SelectorEngine.findOne(OPEN_SELECTOR);
        if (alreadyOpen && alreadyOpen !== target) {
          Offcanvas.getInstance(alreadyOpen).hide();
        }
        const data = Offcanvas.getOrCreateInstance(target);
        data.toggle(this);
      });
      EventHandler.on(window, EVENT_LOAD_DATA_API$2, () => {
        for (const selector of SelectorEngine.find(OPEN_SELECTOR)) {
          Offcanvas.getOrCreateInstance(selector).show();
        }
      });
      EventHandler.on(window, EVENT_RESIZE, () => {
        for (const element of SelectorEngine.find("[aria-modal][class*=show][class*=offcanvas-]")) {
          if (getComputedStyle(element).position !== "fixed") {
            Offcanvas.getOrCreateInstance(element).hide();
          }
        }
      });
      enableDismissTrigger(Offcanvas);
      defineJQueryPlugin(Offcanvas);
      const ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i;
      const DefaultAllowlist = {
        "*": ["class", "dir", "id", "lang", "role", ARIA_ATTRIBUTE_PATTERN],
        a: ["target", "href", "title", "rel"],
        area: [],
        b: [],
        br: [],
        col: [],
        code: [],
        dd: [],
        div: [],
        dl: [],
        dt: [],
        em: [],
        hr: [],
        h1: [],
        h2: [],
        h3: [],
        h4: [],
        h5: [],
        h6: [],
        i: [],
        img: ["src", "srcset", "alt", "title", "width", "height"],
        li: [],
        ol: [],
        p: [],
        pre: [],
        s: [],
        small: [],
        span: [],
        sub: [],
        sup: [],
        strong: [],
        u: [],
        ul: []
      };
      const uriAttributes = /* @__PURE__ */ new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]);
      const SAFE_URL_PATTERN = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i;
      const allowedAttribute = (attribute, allowedAttributeList) => {
        const attributeName = attribute.nodeName.toLowerCase();
        if (allowedAttributeList.includes(attributeName)) {
          if (uriAttributes.has(attributeName)) {
            return Boolean(SAFE_URL_PATTERN.test(attribute.nodeValue));
          }
          return true;
        }
        return allowedAttributeList.filter((attributeRegex) => attributeRegex instanceof RegExp).some((regex) => regex.test(attributeName));
      };
      function sanitizeHtml(unsafeHtml, allowList, sanitizeFunction) {
        if (!unsafeHtml.length) {
          return unsafeHtml;
        }
        if (sanitizeFunction && typeof sanitizeFunction === "function") {
          return sanitizeFunction(unsafeHtml);
        }
        const domParser = new window.DOMParser();
        const createdDocument = domParser.parseFromString(unsafeHtml, "text/html");
        const elements = [].concat(...createdDocument.body.querySelectorAll("*"));
        for (const element of elements) {
          const elementName = element.nodeName.toLowerCase();
          if (!Object.keys(allowList).includes(elementName)) {
            element.remove();
            continue;
          }
          const attributeList = [].concat(...element.attributes);
          const allowedAttributes = [].concat(allowList["*"] || [], allowList[elementName] || []);
          for (const attribute of attributeList) {
            if (!allowedAttribute(attribute, allowedAttributes)) {
              element.removeAttribute(attribute.nodeName);
            }
          }
        }
        return createdDocument.body.innerHTML;
      }
      const NAME$5 = "TemplateFactory";
      const Default$4 = {
        allowList: DefaultAllowlist,
        content: {},
        extraClass: "",
        html: false,
        sanitize: true,
        sanitizeFn: null,
        template: "<div></div>"
      };
      const DefaultType$4 = {
        allowList: "object",
        content: "object",
        extraClass: "(string|function)",
        html: "boolean",
        sanitize: "boolean",
        sanitizeFn: "(null|function)",
        template: "string"
      };
      const DefaultContentType = {
        entry: "(string|element|function|null)",
        selector: "(string|element)"
      };
      class TemplateFactory extends Config {
        constructor(config) {
          super();
          this._config = this._getConfig(config);
        }
        static get Default() {
          return Default$4;
        }
        static get DefaultType() {
          return DefaultType$4;
        }
        static get NAME() {
          return NAME$5;
        }
        getContent() {
          return Object.values(this._config.content).map((config) => this._resolvePossibleFunction(config)).filter(Boolean);
        }
        hasContent() {
          return this.getContent().length > 0;
        }
        changeContent(content) {
          this._checkContent(content);
          this._config.content = {
            ...this._config.content,
            ...content
          };
          return this;
        }
        toHtml() {
          const templateWrapper = document.createElement("div");
          templateWrapper.innerHTML = this._maybeSanitize(this._config.template);
          for (const [selector, text] of Object.entries(this._config.content)) {
            this._setContent(templateWrapper, text, selector);
          }
          const template = templateWrapper.children[0];
          const extraClass = this._resolvePossibleFunction(this._config.extraClass);
          if (extraClass) {
            template.classList.add(...extraClass.split(" "));
          }
          return template;
        }
        _typeCheckConfig(config) {
          super._typeCheckConfig(config);
          this._checkContent(config.content);
        }
        _checkContent(arg) {
          for (const [selector, content] of Object.entries(arg)) {
            super._typeCheckConfig({
              selector,
              entry: content
            }, DefaultContentType);
          }
        }
        _setContent(template, content, selector) {
          const templateElement = SelectorEngine.findOne(selector, template);
          if (!templateElement) {
            return;
          }
          content = this._resolvePossibleFunction(content);
          if (!content) {
            templateElement.remove();
            return;
          }
          if (isElement(content)) {
            this._putElementInTemplate(getElement(content), templateElement);
            return;
          }
          if (this._config.html) {
            templateElement.innerHTML = this._maybeSanitize(content);
            return;
          }
          templateElement.textContent = content;
        }
        _maybeSanitize(arg) {
          return this._config.sanitize ? sanitizeHtml(arg, this._config.allowList, this._config.sanitizeFn) : arg;
        }
        _resolvePossibleFunction(arg) {
          return execute(arg, [this]);
        }
        _putElementInTemplate(element, templateElement) {
          if (this._config.html) {
            templateElement.innerHTML = "";
            templateElement.append(element);
            return;
          }
          templateElement.textContent = element.textContent;
        }
      }
      const NAME$4 = "tooltip";
      const DISALLOWED_ATTRIBUTES = /* @__PURE__ */ new Set(["sanitize", "allowList", "sanitizeFn"]);
      const CLASS_NAME_FADE$2 = "fade";
      const CLASS_NAME_MODAL = "modal";
      const CLASS_NAME_SHOW$2 = "show";
      const SELECTOR_TOOLTIP_INNER = ".tooltip-inner";
      const SELECTOR_MODAL = `.${CLASS_NAME_MODAL}`;
      const EVENT_MODAL_HIDE = "hide.bs.modal";
      const TRIGGER_HOVER = "hover";
      const TRIGGER_FOCUS = "focus";
      const TRIGGER_CLICK = "click";
      const TRIGGER_MANUAL = "manual";
      const EVENT_HIDE$2 = "hide";
      const EVENT_HIDDEN$2 = "hidden";
      const EVENT_SHOW$2 = "show";
      const EVENT_SHOWN$2 = "shown";
      const EVENT_INSERTED = "inserted";
      const EVENT_CLICK$1 = "click";
      const EVENT_FOCUSIN$1 = "focusin";
      const EVENT_FOCUSOUT$1 = "focusout";
      const EVENT_MOUSEENTER = "mouseenter";
      const EVENT_MOUSELEAVE = "mouseleave";
      const AttachmentMap = {
        AUTO: "auto",
        TOP: "top",
        RIGHT: isRTL() ? "left" : "right",
        BOTTOM: "bottom",
        LEFT: isRTL() ? "right" : "left"
      };
      const Default$3 = {
        allowList: DefaultAllowlist,
        animation: true,
        boundary: "clippingParents",
        container: false,
        customClass: "",
        delay: 0,
        fallbackPlacements: ["top", "right", "bottom", "left"],
        html: false,
        offset: [0, 6],
        placement: "top",
        popperConfig: null,
        sanitize: true,
        sanitizeFn: null,
        selector: false,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        title: "",
        trigger: "hover focus"
      };
      const DefaultType$3 = {
        allowList: "object",
        animation: "boolean",
        boundary: "(string|element)",
        container: "(string|element|boolean)",
        customClass: "(string|function)",
        delay: "(number|object)",
        fallbackPlacements: "array",
        html: "boolean",
        offset: "(array|string|function)",
        placement: "(string|function)",
        popperConfig: "(null|object|function)",
        sanitize: "boolean",
        sanitizeFn: "(null|function)",
        selector: "(string|boolean)",
        template: "string",
        title: "(string|element|function)",
        trigger: "string"
      };
      class Tooltip extends BaseComponent {
        constructor(element, config) {
          if (typeof Popper__namespace === "undefined") {
            throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
          }
          super(element, config);
          this._isEnabled = true;
          this._timeout = 0;
          this._isHovered = null;
          this._activeTrigger = {};
          this._popper = null;
          this._templateFactory = null;
          this._newContent = null;
          this.tip = null;
          this._setListeners();
          if (!this._config.selector) {
            this._fixTitle();
          }
        }
        static get Default() {
          return Default$3;
        }
        static get DefaultType() {
          return DefaultType$3;
        }
        static get NAME() {
          return NAME$4;
        }
        enable() {
          this._isEnabled = true;
        }
        disable() {
          this._isEnabled = false;
        }
        toggleEnabled() {
          this._isEnabled = !this._isEnabled;
        }
        toggle() {
          if (!this._isEnabled) {
            return;
          }
          this._activeTrigger.click = !this._activeTrigger.click;
          if (this._isShown()) {
            this._leave();
            return;
          }
          this._enter();
        }
        dispose() {
          clearTimeout(this._timeout);
          EventHandler.off(this._element.closest(SELECTOR_MODAL), EVENT_MODAL_HIDE, this._hideModalHandler);
          if (this._element.getAttribute("data-bs-original-title")) {
            this._element.setAttribute("title", this._element.getAttribute("data-bs-original-title"));
          }
          this._disposePopper();
          super.dispose();
        }
        show() {
          if (this._element.style.display === "none") {
            throw new Error("Please use show on visible elements");
          }
          if (!(this._isWithContent() && this._isEnabled)) {
            return;
          }
          const showEvent = EventHandler.trigger(this._element, this.constructor.eventName(EVENT_SHOW$2));
          const shadowRoot = findShadowRoot(this._element);
          const isInTheDom = (shadowRoot || this._element.ownerDocument.documentElement).contains(this._element);
          if (showEvent.defaultPrevented || !isInTheDom) {
            return;
          }
          this._disposePopper();
          const tip = this._getTipElement();
          this._element.setAttribute("aria-describedby", tip.getAttribute("id"));
          const {
            container
          } = this._config;
          if (!this._element.ownerDocument.documentElement.contains(this.tip)) {
            container.append(tip);
            EventHandler.trigger(this._element, this.constructor.eventName(EVENT_INSERTED));
          }
          this._popper = this._createPopper(tip);
          tip.classList.add(CLASS_NAME_SHOW$2);
          if ("ontouchstart" in document.documentElement) {
            for (const element of [].concat(...document.body.children)) {
              EventHandler.on(element, "mouseover", noop);
            }
          }
          const complete = () => {
            EventHandler.trigger(this._element, this.constructor.eventName(EVENT_SHOWN$2));
            if (this._isHovered === false) {
              this._leave();
            }
            this._isHovered = false;
          };
          this._queueCallback(complete, this.tip, this._isAnimated());
        }
        hide() {
          if (!this._isShown()) {
            return;
          }
          const hideEvent = EventHandler.trigger(this._element, this.constructor.eventName(EVENT_HIDE$2));
          if (hideEvent.defaultPrevented) {
            return;
          }
          const tip = this._getTipElement();
          tip.classList.remove(CLASS_NAME_SHOW$2);
          if ("ontouchstart" in document.documentElement) {
            for (const element of [].concat(...document.body.children)) {
              EventHandler.off(element, "mouseover", noop);
            }
          }
          this._activeTrigger[TRIGGER_CLICK] = false;
          this._activeTrigger[TRIGGER_FOCUS] = false;
          this._activeTrigger[TRIGGER_HOVER] = false;
          this._isHovered = null;
          const complete = () => {
            if (this._isWithActiveTrigger()) {
              return;
            }
            if (!this._isHovered) {
              this._disposePopper();
            }
            this._element.removeAttribute("aria-describedby");
            EventHandler.trigger(this._element, this.constructor.eventName(EVENT_HIDDEN$2));
          };
          this._queueCallback(complete, this.tip, this._isAnimated());
        }
        update() {
          if (this._popper) {
            this._popper.update();
          }
        }
        _isWithContent() {
          return Boolean(this._getTitle());
        }
        _getTipElement() {
          if (!this.tip) {
            this.tip = this._createTipElement(this._newContent || this._getContentForTemplate());
          }
          return this.tip;
        }
        _createTipElement(content) {
          const tip = this._getTemplateFactory(content).toHtml();
          if (!tip) {
            return null;
          }
          tip.classList.remove(CLASS_NAME_FADE$2, CLASS_NAME_SHOW$2);
          tip.classList.add(`bs-${this.constructor.NAME}-auto`);
          const tipId = getUID(this.constructor.NAME).toString();
          tip.setAttribute("id", tipId);
          if (this._isAnimated()) {
            tip.classList.add(CLASS_NAME_FADE$2);
          }
          return tip;
        }
        setContent(content) {
          this._newContent = content;
          if (this._isShown()) {
            this._disposePopper();
            this.show();
          }
        }
        _getTemplateFactory(content) {
          if (this._templateFactory) {
            this._templateFactory.changeContent(content);
          } else {
            this._templateFactory = new TemplateFactory({
              ...this._config,
              content,
              extraClass: this._resolvePossibleFunction(this._config.customClass)
            });
          }
          return this._templateFactory;
        }
        _getContentForTemplate() {
          return {
            [SELECTOR_TOOLTIP_INNER]: this._getTitle()
          };
        }
        _getTitle() {
          return this._resolvePossibleFunction(this._config.title) || this._element.getAttribute("data-bs-original-title");
        }
        _initializeOnDelegatedTarget(event) {
          return this.constructor.getOrCreateInstance(event.delegateTarget, this._getDelegateConfig());
        }
        _isAnimated() {
          return this._config.animation || this.tip && this.tip.classList.contains(CLASS_NAME_FADE$2);
        }
        _isShown() {
          return this.tip && this.tip.classList.contains(CLASS_NAME_SHOW$2);
        }
        _createPopper(tip) {
          const placement = execute(this._config.placement, [this, tip, this._element]);
          const attachment = AttachmentMap[placement.toUpperCase()];
          return Popper__namespace.createPopper(this._element, tip, this._getPopperConfig(attachment));
        }
        _getOffset() {
          const {
            offset
          } = this._config;
          if (typeof offset === "string") {
            return offset.split(",").map((value) => Number.parseInt(value, 10));
          }
          if (typeof offset === "function") {
            return (popperData) => offset(popperData, this._element);
          }
          return offset;
        }
        _resolvePossibleFunction(arg) {
          return execute(arg, [this._element]);
        }
        _getPopperConfig(attachment) {
          const defaultBsPopperConfig = {
            placement: attachment,
            modifiers: [{
              name: "flip",
              options: {
                fallbackPlacements: this._config.fallbackPlacements
              }
            }, {
              name: "offset",
              options: {
                offset: this._getOffset()
              }
            }, {
              name: "preventOverflow",
              options: {
                boundary: this._config.boundary
              }
            }, {
              name: "arrow",
              options: {
                element: `.${this.constructor.NAME}-arrow`
              }
            }, {
              name: "preSetPlacement",
              enabled: true,
              phase: "beforeMain",
              fn: (data) => {
                this._getTipElement().setAttribute("data-popper-placement", data.state.placement);
              }
            }]
          };
          return {
            ...defaultBsPopperConfig,
            ...execute(this._config.popperConfig, [defaultBsPopperConfig])
          };
        }
        _setListeners() {
          const triggers = this._config.trigger.split(" ");
          for (const trigger of triggers) {
            if (trigger === "click") {
              EventHandler.on(this._element, this.constructor.eventName(EVENT_CLICK$1), this._config.selector, (event) => {
                const context = this._initializeOnDelegatedTarget(event);
                context.toggle();
              });
            } else if (trigger !== TRIGGER_MANUAL) {
              const eventIn = trigger === TRIGGER_HOVER ? this.constructor.eventName(EVENT_MOUSEENTER) : this.constructor.eventName(EVENT_FOCUSIN$1);
              const eventOut = trigger === TRIGGER_HOVER ? this.constructor.eventName(EVENT_MOUSELEAVE) : this.constructor.eventName(EVENT_FOCUSOUT$1);
              EventHandler.on(this._element, eventIn, this._config.selector, (event) => {
                const context = this._initializeOnDelegatedTarget(event);
                context._activeTrigger[event.type === "focusin" ? TRIGGER_FOCUS : TRIGGER_HOVER] = true;
                context._enter();
              });
              EventHandler.on(this._element, eventOut, this._config.selector, (event) => {
                const context = this._initializeOnDelegatedTarget(event);
                context._activeTrigger[event.type === "focusout" ? TRIGGER_FOCUS : TRIGGER_HOVER] = context._element.contains(event.relatedTarget);
                context._leave();
              });
            }
          }
          this._hideModalHandler = () => {
            if (this._element) {
              this.hide();
            }
          };
          EventHandler.on(this._element.closest(SELECTOR_MODAL), EVENT_MODAL_HIDE, this._hideModalHandler);
        }
        _fixTitle() {
          const title = this._element.getAttribute("title");
          if (!title) {
            return;
          }
          if (!this._element.getAttribute("aria-label") && !this._element.textContent.trim()) {
            this._element.setAttribute("aria-label", title);
          }
          this._element.setAttribute("data-bs-original-title", title);
          this._element.removeAttribute("title");
        }
        _enter() {
          if (this._isShown() || this._isHovered) {
            this._isHovered = true;
            return;
          }
          this._isHovered = true;
          this._setTimeout(() => {
            if (this._isHovered) {
              this.show();
            }
          }, this._config.delay.show);
        }
        _leave() {
          if (this._isWithActiveTrigger()) {
            return;
          }
          this._isHovered = false;
          this._setTimeout(() => {
            if (!this._isHovered) {
              this.hide();
            }
          }, this._config.delay.hide);
        }
        _setTimeout(handler, timeout) {
          clearTimeout(this._timeout);
          this._timeout = setTimeout(handler, timeout);
        }
        _isWithActiveTrigger() {
          return Object.values(this._activeTrigger).includes(true);
        }
        _getConfig(config) {
          const dataAttributes = Manipulator.getDataAttributes(this._element);
          for (const dataAttribute of Object.keys(dataAttributes)) {
            if (DISALLOWED_ATTRIBUTES.has(dataAttribute)) {
              delete dataAttributes[dataAttribute];
            }
          }
          config = {
            ...dataAttributes,
            ...typeof config === "object" && config ? config : {}
          };
          config = this._mergeConfigObj(config);
          config = this._configAfterMerge(config);
          this._typeCheckConfig(config);
          return config;
        }
        _configAfterMerge(config) {
          config.container = config.container === false ? document.body : getElement(config.container);
          if (typeof config.delay === "number") {
            config.delay = {
              show: config.delay,
              hide: config.delay
            };
          }
          if (typeof config.title === "number") {
            config.title = config.title.toString();
          }
          if (typeof config.content === "number") {
            config.content = config.content.toString();
          }
          return config;
        }
        _getDelegateConfig() {
          const config = {};
          for (const [key, value] of Object.entries(this._config)) {
            if (this.constructor.Default[key] !== value) {
              config[key] = value;
            }
          }
          config.selector = false;
          config.trigger = "manual";
          return config;
        }
        _disposePopper() {
          if (this._popper) {
            this._popper.destroy();
            this._popper = null;
          }
          if (this.tip) {
            this.tip.remove();
            this.tip = null;
          }
        }
        static jQueryInterface(config) {
          return this.each(function() {
            const data = Tooltip.getOrCreateInstance(this, config);
            if (typeof config !== "string") {
              return;
            }
            if (typeof data[config] === "undefined") {
              throw new TypeError(`No method named "${config}"`);
            }
            data[config]();
          });
        }
      }
      defineJQueryPlugin(Tooltip);
      const NAME$3 = "popover";
      const SELECTOR_TITLE = ".popover-header";
      const SELECTOR_CONTENT = ".popover-body";
      const Default$2 = {
        ...Tooltip.Default,
        content: "",
        offset: [0, 8],
        placement: "right",
        template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
        trigger: "click"
      };
      const DefaultType$2 = {
        ...Tooltip.DefaultType,
        content: "(null|string|element|function)"
      };
      class Popover extends Tooltip {
        static get Default() {
          return Default$2;
        }
        static get DefaultType() {
          return DefaultType$2;
        }
        static get NAME() {
          return NAME$3;
        }
        _isWithContent() {
          return this._getTitle() || this._getContent();
        }
        _getContentForTemplate() {
          return {
            [SELECTOR_TITLE]: this._getTitle(),
            [SELECTOR_CONTENT]: this._getContent()
          };
        }
        _getContent() {
          return this._resolvePossibleFunction(this._config.content);
        }
        static jQueryInterface(config) {
          return this.each(function() {
            const data = Popover.getOrCreateInstance(this, config);
            if (typeof config !== "string") {
              return;
            }
            if (typeof data[config] === "undefined") {
              throw new TypeError(`No method named "${config}"`);
            }
            data[config]();
          });
        }
      }
      defineJQueryPlugin(Popover);
      const NAME$2 = "scrollspy";
      const DATA_KEY$2 = "bs.scrollspy";
      const EVENT_KEY$2 = `.${DATA_KEY$2}`;
      const DATA_API_KEY = ".data-api";
      const EVENT_ACTIVATE = `activate${EVENT_KEY$2}`;
      const EVENT_CLICK = `click${EVENT_KEY$2}`;
      const EVENT_LOAD_DATA_API$1 = `load${EVENT_KEY$2}${DATA_API_KEY}`;
      const CLASS_NAME_DROPDOWN_ITEM = "dropdown-item";
      const CLASS_NAME_ACTIVE$1 = "active";
      const SELECTOR_DATA_SPY = '[data-bs-spy="scroll"]';
      const SELECTOR_TARGET_LINKS = "[href]";
      const SELECTOR_NAV_LIST_GROUP = ".nav, .list-group";
      const SELECTOR_NAV_LINKS = ".nav-link";
      const SELECTOR_NAV_ITEMS = ".nav-item";
      const SELECTOR_LIST_ITEMS = ".list-group-item";
      const SELECTOR_LINK_ITEMS = `${SELECTOR_NAV_LINKS}, ${SELECTOR_NAV_ITEMS} > ${SELECTOR_NAV_LINKS}, ${SELECTOR_LIST_ITEMS}`;
      const SELECTOR_DROPDOWN = ".dropdown";
      const SELECTOR_DROPDOWN_TOGGLE$1 = ".dropdown-toggle";
      const Default$1 = {
        offset: null,
        rootMargin: "0px 0px -25%",
        smoothScroll: false,
        target: null,
        threshold: [0.1, 0.5, 1]
      };
      const DefaultType$1 = {
        offset: "(number|null)",
        rootMargin: "string",
        smoothScroll: "boolean",
        target: "element",
        threshold: "array"
      };
      class ScrollSpy extends BaseComponent {
        constructor(element, config) {
          super(element, config);
          this._targetLinks = /* @__PURE__ */ new Map();
          this._observableSections = /* @__PURE__ */ new Map();
          this._rootElement = getComputedStyle(this._element).overflowY === "visible" ? null : this._element;
          this._activeTarget = null;
          this._observer = null;
          this._previousScrollData = {
            visibleEntryTop: 0,
            parentScrollTop: 0
          };
          this.refresh();
        }
        static get Default() {
          return Default$1;
        }
        static get DefaultType() {
          return DefaultType$1;
        }
        static get NAME() {
          return NAME$2;
        }
        refresh() {
          this._initializeTargetsAndObservables();
          this._maybeEnableSmoothScroll();
          if (this._observer) {
            this._observer.disconnect();
          } else {
            this._observer = this._getNewObserver();
          }
          for (const section of this._observableSections.values()) {
            this._observer.observe(section);
          }
        }
        dispose() {
          this._observer.disconnect();
          super.dispose();
        }
        _configAfterMerge(config) {
          config.target = getElement(config.target) || document.body;
          config.rootMargin = config.offset ? `${config.offset}px 0px -30%` : config.rootMargin;
          if (typeof config.threshold === "string") {
            config.threshold = config.threshold.split(",").map((value) => Number.parseFloat(value));
          }
          return config;
        }
        _maybeEnableSmoothScroll() {
          if (!this._config.smoothScroll) {
            return;
          }
          EventHandler.off(this._config.target, EVENT_CLICK);
          EventHandler.on(this._config.target, EVENT_CLICK, SELECTOR_TARGET_LINKS, (event) => {
            const observableSection = this._observableSections.get(event.target.hash);
            if (observableSection) {
              event.preventDefault();
              const root = this._rootElement || window;
              const height = observableSection.offsetTop - this._element.offsetTop;
              if (root.scrollTo) {
                root.scrollTo({
                  top: height,
                  behavior: "smooth"
                });
                return;
              }
              root.scrollTop = height;
            }
          });
        }
        _getNewObserver() {
          const options = {
            root: this._rootElement,
            threshold: this._config.threshold,
            rootMargin: this._config.rootMargin
          };
          return new IntersectionObserver((entries) => this._observerCallback(entries), options);
        }
        _observerCallback(entries) {
          const targetElement = (entry) => this._targetLinks.get(`#${entry.target.id}`);
          const activate = (entry) => {
            this._previousScrollData.visibleEntryTop = entry.target.offsetTop;
            this._process(targetElement(entry));
          };
          const parentScrollTop = (this._rootElement || document.documentElement).scrollTop;
          const userScrollsDown = parentScrollTop >= this._previousScrollData.parentScrollTop;
          this._previousScrollData.parentScrollTop = parentScrollTop;
          for (const entry of entries) {
            if (!entry.isIntersecting) {
              this._activeTarget = null;
              this._clearActiveClass(targetElement(entry));
              continue;
            }
            const entryIsLowerThanPrevious = entry.target.offsetTop >= this._previousScrollData.visibleEntryTop;
            if (userScrollsDown && entryIsLowerThanPrevious) {
              activate(entry);
              if (!parentScrollTop) {
                return;
              }
              continue;
            }
            if (!userScrollsDown && !entryIsLowerThanPrevious) {
              activate(entry);
            }
          }
        }
        _initializeTargetsAndObservables() {
          this._targetLinks = /* @__PURE__ */ new Map();
          this._observableSections = /* @__PURE__ */ new Map();
          const targetLinks = SelectorEngine.find(SELECTOR_TARGET_LINKS, this._config.target);
          for (const anchor of targetLinks) {
            if (!anchor.hash || isDisabled(anchor)) {
              continue;
            }
            const observableSection = SelectorEngine.findOne(decodeURI(anchor.hash), this._element);
            if (isVisible(observableSection)) {
              this._targetLinks.set(decodeURI(anchor.hash), anchor);
              this._observableSections.set(anchor.hash, observableSection);
            }
          }
        }
        _process(target) {
          if (this._activeTarget === target) {
            return;
          }
          this._clearActiveClass(this._config.target);
          this._activeTarget = target;
          target.classList.add(CLASS_NAME_ACTIVE$1);
          this._activateParents(target);
          EventHandler.trigger(this._element, EVENT_ACTIVATE, {
            relatedTarget: target
          });
        }
        _activateParents(target) {
          if (target.classList.contains(CLASS_NAME_DROPDOWN_ITEM)) {
            SelectorEngine.findOne(SELECTOR_DROPDOWN_TOGGLE$1, target.closest(SELECTOR_DROPDOWN)).classList.add(CLASS_NAME_ACTIVE$1);
            return;
          }
          for (const listGroup of SelectorEngine.parents(target, SELECTOR_NAV_LIST_GROUP)) {
            for (const item of SelectorEngine.prev(listGroup, SELECTOR_LINK_ITEMS)) {
              item.classList.add(CLASS_NAME_ACTIVE$1);
            }
          }
        }
        _clearActiveClass(parent) {
          parent.classList.remove(CLASS_NAME_ACTIVE$1);
          const activeNodes = SelectorEngine.find(`${SELECTOR_TARGET_LINKS}.${CLASS_NAME_ACTIVE$1}`, parent);
          for (const node of activeNodes) {
            node.classList.remove(CLASS_NAME_ACTIVE$1);
          }
        }
        static jQueryInterface(config) {
          return this.each(function() {
            const data = ScrollSpy.getOrCreateInstance(this, config);
            if (typeof config !== "string") {
              return;
            }
            if (data[config] === void 0 || config.startsWith("_") || config === "constructor") {
              throw new TypeError(`No method named "${config}"`);
            }
            data[config]();
          });
        }
      }
      EventHandler.on(window, EVENT_LOAD_DATA_API$1, () => {
        for (const spy of SelectorEngine.find(SELECTOR_DATA_SPY)) {
          ScrollSpy.getOrCreateInstance(spy);
        }
      });
      defineJQueryPlugin(ScrollSpy);
      const NAME$1 = "tab";
      const DATA_KEY$1 = "bs.tab";
      const EVENT_KEY$1 = `.${DATA_KEY$1}`;
      const EVENT_HIDE$1 = `hide${EVENT_KEY$1}`;
      const EVENT_HIDDEN$1 = `hidden${EVENT_KEY$1}`;
      const EVENT_SHOW$1 = `show${EVENT_KEY$1}`;
      const EVENT_SHOWN$1 = `shown${EVENT_KEY$1}`;
      const EVENT_CLICK_DATA_API = `click${EVENT_KEY$1}`;
      const EVENT_KEYDOWN = `keydown${EVENT_KEY$1}`;
      const EVENT_LOAD_DATA_API = `load${EVENT_KEY$1}`;
      const ARROW_LEFT_KEY = "ArrowLeft";
      const ARROW_RIGHT_KEY = "ArrowRight";
      const ARROW_UP_KEY = "ArrowUp";
      const ARROW_DOWN_KEY = "ArrowDown";
      const HOME_KEY = "Home";
      const END_KEY = "End";
      const CLASS_NAME_ACTIVE = "active";
      const CLASS_NAME_FADE$1 = "fade";
      const CLASS_NAME_SHOW$1 = "show";
      const CLASS_DROPDOWN = "dropdown";
      const SELECTOR_DROPDOWN_TOGGLE = ".dropdown-toggle";
      const SELECTOR_DROPDOWN_MENU = ".dropdown-menu";
      const NOT_SELECTOR_DROPDOWN_TOGGLE = `:not(${SELECTOR_DROPDOWN_TOGGLE})`;
      const SELECTOR_TAB_PANEL = '.list-group, .nav, [role="tablist"]';
      const SELECTOR_OUTER = ".nav-item, .list-group-item";
      const SELECTOR_INNER = `.nav-link${NOT_SELECTOR_DROPDOWN_TOGGLE}, .list-group-item${NOT_SELECTOR_DROPDOWN_TOGGLE}, [role="tab"]${NOT_SELECTOR_DROPDOWN_TOGGLE}`;
      const SELECTOR_DATA_TOGGLE = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]';
      const SELECTOR_INNER_ELEM = `${SELECTOR_INNER}, ${SELECTOR_DATA_TOGGLE}`;
      const SELECTOR_DATA_TOGGLE_ACTIVE = `.${CLASS_NAME_ACTIVE}[data-bs-toggle="tab"], .${CLASS_NAME_ACTIVE}[data-bs-toggle="pill"], .${CLASS_NAME_ACTIVE}[data-bs-toggle="list"]`;
      class Tab extends BaseComponent {
        constructor(element) {
          super(element);
          this._parent = this._element.closest(SELECTOR_TAB_PANEL);
          if (!this._parent) {
            return;
          }
          this._setInitialAttributes(this._parent, this._getChildren());
          EventHandler.on(this._element, EVENT_KEYDOWN, (event) => this._keydown(event));
        }
        static get NAME() {
          return NAME$1;
        }
        show() {
          const innerElem = this._element;
          if (this._elemIsActive(innerElem)) {
            return;
          }
          const active = this._getActiveElem();
          const hideEvent = active ? EventHandler.trigger(active, EVENT_HIDE$1, {
            relatedTarget: innerElem
          }) : null;
          const showEvent = EventHandler.trigger(innerElem, EVENT_SHOW$1, {
            relatedTarget: active
          });
          if (showEvent.defaultPrevented || hideEvent && hideEvent.defaultPrevented) {
            return;
          }
          this._deactivate(active, innerElem);
          this._activate(innerElem, active);
        }
        _activate(element, relatedElem) {
          if (!element) {
            return;
          }
          element.classList.add(CLASS_NAME_ACTIVE);
          this._activate(SelectorEngine.getElementFromSelector(element));
          const complete = () => {
            if (element.getAttribute("role") !== "tab") {
              element.classList.add(CLASS_NAME_SHOW$1);
              return;
            }
            element.removeAttribute("tabindex");
            element.setAttribute("aria-selected", true);
            this._toggleDropDown(element, true);
            EventHandler.trigger(element, EVENT_SHOWN$1, {
              relatedTarget: relatedElem
            });
          };
          this._queueCallback(complete, element, element.classList.contains(CLASS_NAME_FADE$1));
        }
        _deactivate(element, relatedElem) {
          if (!element) {
            return;
          }
          element.classList.remove(CLASS_NAME_ACTIVE);
          element.blur();
          this._deactivate(SelectorEngine.getElementFromSelector(element));
          const complete = () => {
            if (element.getAttribute("role") !== "tab") {
              element.classList.remove(CLASS_NAME_SHOW$1);
              return;
            }
            element.setAttribute("aria-selected", false);
            element.setAttribute("tabindex", "-1");
            this._toggleDropDown(element, false);
            EventHandler.trigger(element, EVENT_HIDDEN$1, {
              relatedTarget: relatedElem
            });
          };
          this._queueCallback(complete, element, element.classList.contains(CLASS_NAME_FADE$1));
        }
        _keydown(event) {
          if (![ARROW_LEFT_KEY, ARROW_RIGHT_KEY, ARROW_UP_KEY, ARROW_DOWN_KEY, HOME_KEY, END_KEY].includes(event.key)) {
            return;
          }
          event.stopPropagation();
          event.preventDefault();
          const children = this._getChildren().filter((element) => !isDisabled(element));
          let nextActiveElement;
          if ([HOME_KEY, END_KEY].includes(event.key)) {
            nextActiveElement = children[event.key === HOME_KEY ? 0 : children.length - 1];
          } else {
            const isNext = [ARROW_RIGHT_KEY, ARROW_DOWN_KEY].includes(event.key);
            nextActiveElement = getNextActiveElement(children, event.target, isNext, true);
          }
          if (nextActiveElement) {
            nextActiveElement.focus({
              preventScroll: true
            });
            Tab.getOrCreateInstance(nextActiveElement).show();
          }
        }
        _getChildren() {
          return SelectorEngine.find(SELECTOR_INNER_ELEM, this._parent);
        }
        _getActiveElem() {
          return this._getChildren().find((child) => this._elemIsActive(child)) || null;
        }
        _setInitialAttributes(parent, children) {
          this._setAttributeIfNotExists(parent, "role", "tablist");
          for (const child of children) {
            this._setInitialAttributesOnChild(child);
          }
        }
        _setInitialAttributesOnChild(child) {
          child = this._getInnerElement(child);
          const isActive = this._elemIsActive(child);
          const outerElem = this._getOuterElement(child);
          child.setAttribute("aria-selected", isActive);
          if (outerElem !== child) {
            this._setAttributeIfNotExists(outerElem, "role", "presentation");
          }
          if (!isActive) {
            child.setAttribute("tabindex", "-1");
          }
          this._setAttributeIfNotExists(child, "role", "tab");
          this._setInitialAttributesOnTargetPanel(child);
        }
        _setInitialAttributesOnTargetPanel(child) {
          const target = SelectorEngine.getElementFromSelector(child);
          if (!target) {
            return;
          }
          this._setAttributeIfNotExists(target, "role", "tabpanel");
          if (child.id) {
            this._setAttributeIfNotExists(target, "aria-labelledby", `${child.id}`);
          }
        }
        _toggleDropDown(element, open) {
          const outerElem = this._getOuterElement(element);
          if (!outerElem.classList.contains(CLASS_DROPDOWN)) {
            return;
          }
          const toggle = (selector, className) => {
            const element2 = SelectorEngine.findOne(selector, outerElem);
            if (element2) {
              element2.classList.toggle(className, open);
            }
          };
          toggle(SELECTOR_DROPDOWN_TOGGLE, CLASS_NAME_ACTIVE);
          toggle(SELECTOR_DROPDOWN_MENU, CLASS_NAME_SHOW$1);
          outerElem.setAttribute("aria-expanded", open);
        }
        _setAttributeIfNotExists(element, attribute, value) {
          if (!element.hasAttribute(attribute)) {
            element.setAttribute(attribute, value);
          }
        }
        _elemIsActive(elem) {
          return elem.classList.contains(CLASS_NAME_ACTIVE);
        }
        _getInnerElement(elem) {
          return elem.matches(SELECTOR_INNER_ELEM) ? elem : SelectorEngine.findOne(SELECTOR_INNER_ELEM, elem);
        }
        _getOuterElement(elem) {
          return elem.closest(SELECTOR_OUTER) || elem;
        }
        static jQueryInterface(config) {
          return this.each(function() {
            const data = Tab.getOrCreateInstance(this);
            if (typeof config !== "string") {
              return;
            }
            if (data[config] === void 0 || config.startsWith("_") || config === "constructor") {
              throw new TypeError(`No method named "${config}"`);
            }
            data[config]();
          });
        }
      }
      EventHandler.on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function(event) {
        if (["A", "AREA"].includes(this.tagName)) {
          event.preventDefault();
        }
        if (isDisabled(this)) {
          return;
        }
        Tab.getOrCreateInstance(this).show();
      });
      EventHandler.on(window, EVENT_LOAD_DATA_API, () => {
        for (const element of SelectorEngine.find(SELECTOR_DATA_TOGGLE_ACTIVE)) {
          Tab.getOrCreateInstance(element);
        }
      });
      defineJQueryPlugin(Tab);
      const NAME = "toast";
      const DATA_KEY = "bs.toast";
      const EVENT_KEY = `.${DATA_KEY}`;
      const EVENT_MOUSEOVER = `mouseover${EVENT_KEY}`;
      const EVENT_MOUSEOUT = `mouseout${EVENT_KEY}`;
      const EVENT_FOCUSIN = `focusin${EVENT_KEY}`;
      const EVENT_FOCUSOUT = `focusout${EVENT_KEY}`;
      const EVENT_HIDE = `hide${EVENT_KEY}`;
      const EVENT_HIDDEN = `hidden${EVENT_KEY}`;
      const EVENT_SHOW = `show${EVENT_KEY}`;
      const EVENT_SHOWN = `shown${EVENT_KEY}`;
      const CLASS_NAME_FADE = "fade";
      const CLASS_NAME_HIDE = "hide";
      const CLASS_NAME_SHOW = "show";
      const CLASS_NAME_SHOWING = "showing";
      const DefaultType = {
        animation: "boolean",
        autohide: "boolean",
        delay: "number"
      };
      const Default = {
        animation: true,
        autohide: true,
        delay: 5e3
      };
      class Toast extends BaseComponent {
        constructor(element, config) {
          super(element, config);
          this._timeout = null;
          this._hasMouseInteraction = false;
          this._hasKeyboardInteraction = false;
          this._setListeners();
        }
        static get Default() {
          return Default;
        }
        static get DefaultType() {
          return DefaultType;
        }
        static get NAME() {
          return NAME;
        }
        show() {
          const showEvent = EventHandler.trigger(this._element, EVENT_SHOW);
          if (showEvent.defaultPrevented) {
            return;
          }
          this._clearTimeout();
          if (this._config.animation) {
            this._element.classList.add(CLASS_NAME_FADE);
          }
          const complete = () => {
            this._element.classList.remove(CLASS_NAME_SHOWING);
            EventHandler.trigger(this._element, EVENT_SHOWN);
            this._maybeScheduleHide();
          };
          this._element.classList.remove(CLASS_NAME_HIDE);
          reflow(this._element);
          this._element.classList.add(CLASS_NAME_SHOW, CLASS_NAME_SHOWING);
          this._queueCallback(complete, this._element, this._config.animation);
        }
        hide() {
          if (!this.isShown()) {
            return;
          }
          const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE);
          if (hideEvent.defaultPrevented) {
            return;
          }
          const complete = () => {
            this._element.classList.add(CLASS_NAME_HIDE);
            this._element.classList.remove(CLASS_NAME_SHOWING, CLASS_NAME_SHOW);
            EventHandler.trigger(this._element, EVENT_HIDDEN);
          };
          this._element.classList.add(CLASS_NAME_SHOWING);
          this._queueCallback(complete, this._element, this._config.animation);
        }
        dispose() {
          this._clearTimeout();
          if (this.isShown()) {
            this._element.classList.remove(CLASS_NAME_SHOW);
          }
          super.dispose();
        }
        isShown() {
          return this._element.classList.contains(CLASS_NAME_SHOW);
        }
        _maybeScheduleHide() {
          if (!this._config.autohide) {
            return;
          }
          if (this._hasMouseInteraction || this._hasKeyboardInteraction) {
            return;
          }
          this._timeout = setTimeout(() => {
            this.hide();
          }, this._config.delay);
        }
        _onInteraction(event, isInteracting) {
          switch (event.type) {
            case "mouseover":
            case "mouseout": {
              this._hasMouseInteraction = isInteracting;
              break;
            }
            case "focusin":
            case "focusout": {
              this._hasKeyboardInteraction = isInteracting;
              break;
            }
          }
          if (isInteracting) {
            this._clearTimeout();
            return;
          }
          const nextElement = event.relatedTarget;
          if (this._element === nextElement || this._element.contains(nextElement)) {
            return;
          }
          this._maybeScheduleHide();
        }
        _setListeners() {
          EventHandler.on(this._element, EVENT_MOUSEOVER, (event) => this._onInteraction(event, true));
          EventHandler.on(this._element, EVENT_MOUSEOUT, (event) => this._onInteraction(event, false));
          EventHandler.on(this._element, EVENT_FOCUSIN, (event) => this._onInteraction(event, true));
          EventHandler.on(this._element, EVENT_FOCUSOUT, (event) => this._onInteraction(event, false));
        }
        _clearTimeout() {
          clearTimeout(this._timeout);
          this._timeout = null;
        }
        static jQueryInterface(config) {
          return this.each(function() {
            const data = Toast.getOrCreateInstance(this, config);
            if (typeof config === "string") {
              if (typeof data[config] === "undefined") {
                throw new TypeError(`No method named "${config}"`);
              }
              data[config](this);
            }
          });
        }
      }
      enableDismissTrigger(Toast);
      defineJQueryPlugin(Toast);
      const index_umd = {
        Alert,
        Button,
        Carousel,
        Collapse,
        Dropdown,
        Modal,
        Offcanvas,
        Popover,
        ScrollSpy,
        Tab,
        Toast,
        Tooltip
      };
      return index_umd;
    });
  }
});

// app/javascript/application.js
var import_jquery2 = __toESM(require_jquery());
var import_jquery_ujs = __toESM(require_rails());
var import_datatables2 = __toESM(require_jquery_dataTables());
var import_dataTables = __toESM(require_dataTables_bootstrap4());
var import_dataTables2 = __toESM(require_dataTables_select());

// node_modules/datatables.net-plugins/api/processing().mjs
var import_jquery = __toESM(require_jquery(), 1);
var import_datatables = __toESM(require_jquery_dataTables(), 1);
import_datatables.default.Api.register("processing()", function(show) {
  return this.iterator("table", function(ctx) {
    ctx.oApi._fnProcessingDisplay(ctx, show);
  });
});

// node_modules/@rails/ujs/app/assets/javascripts/rails-ujs.esm.js
var linkClickSelector = "a[data-confirm], a[data-method], a[data-remote]:not([disabled]), a[data-disable-with], a[data-disable]";
var buttonClickSelector = {
  selector: "button[data-remote]:not([form]), button[data-confirm]:not([form])",
  exclude: "form button"
};
var inputChangeSelector = "select[data-remote], input[data-remote], textarea[data-remote]";
var formSubmitSelector = "form:not([data-turbo=true])";
var formInputClickSelector = "form:not([data-turbo=true]) input[type=submit], form:not([data-turbo=true]) input[type=image], form:not([data-turbo=true]) button[type=submit], form:not([data-turbo=true]) button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])";
var formDisableSelector = "input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled";
var formEnableSelector = "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled";
var fileInputSelector = "input[name][type=file]:not([disabled])";
var linkDisableSelector = "a[data-disable-with], a[data-disable]";
var buttonDisableSelector = "button[data-remote][data-disable-with], button[data-remote][data-disable]";
var nonce = null;
var loadCSPNonce = () => {
  const metaTag = document.querySelector("meta[name=csp-nonce]");
  return nonce = metaTag && metaTag.content;
};
var cspNonce = () => nonce || loadCSPNonce();
var m = Element.prototype.matches || Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector;
var matches = function(element, selector) {
  if (selector.exclude) {
    return m.call(element, selector.selector) && !m.call(element, selector.exclude);
  } else {
    return m.call(element, selector);
  }
};
var EXPANDO = "_ujsData";
var getData = (element, key) => element[EXPANDO] ? element[EXPANDO][key] : void 0;
var setData = function(element, key, value) {
  if (!element[EXPANDO]) {
    element[EXPANDO] = {};
  }
  return element[EXPANDO][key] = value;
};
var $2 = (selector) => Array.prototype.slice.call(document.querySelectorAll(selector));
var isContentEditable = function(element) {
  var isEditable = false;
  do {
    if (element.isContentEditable) {
      isEditable = true;
      break;
    }
    element = element.parentElement;
  } while (element);
  return isEditable;
};
var csrfToken = () => {
  const meta = document.querySelector("meta[name=csrf-token]");
  return meta && meta.content;
};
var csrfParam = () => {
  const meta = document.querySelector("meta[name=csrf-param]");
  return meta && meta.content;
};
var CSRFProtection = (xhr) => {
  const token = csrfToken();
  if (token) {
    return xhr.setRequestHeader("X-CSRF-Token", token);
  }
};
var refreshCSRFTokens = () => {
  const token = csrfToken();
  const param = csrfParam();
  if (token && param) {
    return $2('form input[name="' + param + '"]').forEach((input) => input.value = token);
  }
};
var AcceptHeaders = {
  "*": "*/*",
  text: "text/plain",
  html: "text/html",
  xml: "application/xml, text/xml",
  json: "application/json, text/javascript",
  script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
};
var ajax = (options) => {
  options = prepareOptions(options);
  var xhr = createXHR(options, function() {
    const response = processResponse(xhr.response != null ? xhr.response : xhr.responseText, xhr.getResponseHeader("Content-Type"));
    if (Math.floor(xhr.status / 100) === 2) {
      if (typeof options.success === "function") {
        options.success(response, xhr.statusText, xhr);
      }
    } else {
      if (typeof options.error === "function") {
        options.error(response, xhr.statusText, xhr);
      }
    }
    return typeof options.complete === "function" ? options.complete(xhr, xhr.statusText) : void 0;
  });
  if (options.beforeSend && !options.beforeSend(xhr, options)) {
    return false;
  }
  if (xhr.readyState === XMLHttpRequest.OPENED) {
    return xhr.send(options.data);
  }
};
var prepareOptions = function(options) {
  options.url = options.url || location.href;
  options.type = options.type.toUpperCase();
  if (options.type === "GET" && options.data) {
    if (options.url.indexOf("?") < 0) {
      options.url += "?" + options.data;
    } else {
      options.url += "&" + options.data;
    }
  }
  if (!(options.dataType in AcceptHeaders)) {
    options.dataType = "*";
  }
  options.accept = AcceptHeaders[options.dataType];
  if (options.dataType !== "*") {
    options.accept += ", */*; q=0.01";
  }
  return options;
};
var createXHR = function(options, done) {
  const xhr = new XMLHttpRequest();
  xhr.open(options.type, options.url, true);
  xhr.setRequestHeader("Accept", options.accept);
  if (typeof options.data === "string") {
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
  }
  if (!options.crossDomain) {
    xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
    CSRFProtection(xhr);
  }
  xhr.withCredentials = !!options.withCredentials;
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      return done(xhr);
    }
  };
  return xhr;
};
var processResponse = function(response, type) {
  if (typeof response === "string" && typeof type === "string") {
    if (type.match(/\bjson\b/)) {
      try {
        response = JSON.parse(response);
      } catch (error) {
      }
    } else if (type.match(/\b(?:java|ecma)script\b/)) {
      const script = document.createElement("script");
      script.setAttribute("nonce", cspNonce());
      script.text = response;
      document.head.appendChild(script).parentNode.removeChild(script);
    } else if (type.match(/\b(xml|html|svg)\b/)) {
      const parser = new DOMParser();
      type = type.replace(/;.+/, "");
      try {
        response = parser.parseFromString(response, type);
      } catch (error1) {
      }
    }
  }
  return response;
};
var href = (element) => element.href;
var isCrossDomain = function(url) {
  const originAnchor = document.createElement("a");
  originAnchor.href = location.href;
  const urlAnchor = document.createElement("a");
  try {
    urlAnchor.href = url;
    return !((!urlAnchor.protocol || urlAnchor.protocol === ":") && !urlAnchor.host || originAnchor.protocol + "//" + originAnchor.host === urlAnchor.protocol + "//" + urlAnchor.host);
  } catch (e) {
    return true;
  }
};
var preventDefault;
var { CustomEvent } = window;
if (typeof CustomEvent !== "function") {
  CustomEvent = function(event, params) {
    const evt = document.createEvent("CustomEvent");
    evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
    return evt;
  };
  CustomEvent.prototype = window.Event.prototype;
  ({ preventDefault } = CustomEvent.prototype);
  CustomEvent.prototype.preventDefault = function() {
    const result = preventDefault.call(this);
    if (this.cancelable && !this.defaultPrevented) {
      Object.defineProperty(this, "defaultPrevented", {
        get() {
          return true;
        }
      });
    }
    return result;
  };
}
var fire = (obj, name, data) => {
  const event = new CustomEvent(name, {
    bubbles: true,
    cancelable: true,
    detail: data
  });
  obj.dispatchEvent(event);
  return !event.defaultPrevented;
};
var stopEverything = (e) => {
  fire(e.target, "ujs:everythingStopped");
  e.preventDefault();
  e.stopPropagation();
  e.stopImmediatePropagation();
};
var delegate = (element, selector, eventType, handler) => element.addEventListener(eventType, function(e) {
  let { target } = e;
  while (!!(target instanceof Element) && !matches(target, selector)) {
    target = target.parentNode;
  }
  if (target instanceof Element && handler.call(target, e) === false) {
    e.preventDefault();
    e.stopPropagation();
  }
});
var toArray = (e) => Array.prototype.slice.call(e);
var serializeElement = (element, additionalParam) => {
  let inputs = [element];
  if (matches(element, "form")) {
    inputs = toArray(element.elements);
  }
  const params = [];
  inputs.forEach(function(input) {
    if (!input.name || input.disabled) {
      return;
    }
    if (matches(input, "fieldset[disabled] *")) {
      return;
    }
    if (matches(input, "select")) {
      toArray(input.options).forEach(function(option) {
        if (option.selected) {
          params.push({
            name: input.name,
            value: option.value
          });
        }
      });
    } else if (input.checked || ["radio", "checkbox", "submit"].indexOf(input.type) === -1) {
      params.push({
        name: input.name,
        value: input.value
      });
    }
  });
  if (additionalParam) {
    params.push(additionalParam);
  }
  return params.map(function(param) {
    if (param.name) {
      return `${encodeURIComponent(param.name)}=${encodeURIComponent(param.value)}`;
    } else {
      return param;
    }
  }).join("&");
};
var formElements = (form, selector) => {
  if (matches(form, "form")) {
    return toArray(form.elements).filter((el) => matches(el, selector));
  } else {
    return toArray(form.querySelectorAll(selector));
  }
};
var handleConfirmWithRails = (rails) => function(e) {
  if (!allowAction(this, rails)) {
    stopEverything(e);
  }
};
var confirm2 = (message, element) => window.confirm(message);
var allowAction = function(element, rails) {
  let callback;
  const message = element.getAttribute("data-confirm");
  if (!message) {
    return true;
  }
  let answer = false;
  if (fire(element, "confirm")) {
    try {
      answer = rails.confirm(message, element);
    } catch (error) {
    }
    callback = fire(element, "confirm:complete", [answer]);
  }
  return answer && callback;
};
var handleDisabledElement = function(e) {
  const element = this;
  if (element.disabled) {
    stopEverything(e);
  }
};
var enableElement = (e) => {
  let element;
  if (e instanceof Event) {
    if (isXhrRedirect(e)) {
      return;
    }
    element = e.target;
  } else {
    element = e;
  }
  if (isContentEditable(element)) {
    return;
  }
  if (matches(element, linkDisableSelector)) {
    return enableLinkElement(element);
  } else if (matches(element, buttonDisableSelector) || matches(element, formEnableSelector)) {
    return enableFormElement(element);
  } else if (matches(element, formSubmitSelector)) {
    return enableFormElements(element);
  }
};
var disableElement = (e) => {
  const element = e instanceof Event ? e.target : e;
  if (isContentEditable(element)) {
    return;
  }
  if (matches(element, linkDisableSelector)) {
    return disableLinkElement(element);
  } else if (matches(element, buttonDisableSelector) || matches(element, formDisableSelector)) {
    return disableFormElement(element);
  } else if (matches(element, formSubmitSelector)) {
    return disableFormElements(element);
  }
};
var disableLinkElement = function(element) {
  if (getData(element, "ujs:disabled")) {
    return;
  }
  const replacement = element.getAttribute("data-disable-with");
  if (replacement != null) {
    setData(element, "ujs:enable-with", element.innerHTML);
    element.innerHTML = replacement;
  }
  element.addEventListener("click", stopEverything);
  return setData(element, "ujs:disabled", true);
};
var enableLinkElement = function(element) {
  const originalText = getData(element, "ujs:enable-with");
  if (originalText != null) {
    element.innerHTML = originalText;
    setData(element, "ujs:enable-with", null);
  }
  element.removeEventListener("click", stopEverything);
  return setData(element, "ujs:disabled", null);
};
var disableFormElements = (form) => formElements(form, formDisableSelector).forEach(disableFormElement);
var disableFormElement = function(element) {
  if (getData(element, "ujs:disabled")) {
    return;
  }
  const replacement = element.getAttribute("data-disable-with");
  if (replacement != null) {
    if (matches(element, "button")) {
      setData(element, "ujs:enable-with", element.innerHTML);
      element.innerHTML = replacement;
    } else {
      setData(element, "ujs:enable-with", element.value);
      element.value = replacement;
    }
  }
  element.disabled = true;
  return setData(element, "ujs:disabled", true);
};
var enableFormElements = (form) => formElements(form, formEnableSelector).forEach((element) => enableFormElement(element));
var enableFormElement = function(element) {
  const originalText = getData(element, "ujs:enable-with");
  if (originalText != null) {
    if (matches(element, "button")) {
      element.innerHTML = originalText;
    } else {
      element.value = originalText;
    }
    setData(element, "ujs:enable-with", null);
  }
  element.disabled = false;
  return setData(element, "ujs:disabled", null);
};
var isXhrRedirect = function(event) {
  const xhr = event.detail ? event.detail[0] : void 0;
  return xhr && xhr.getResponseHeader("X-Xhr-Redirect");
};
var handleMethodWithRails = (rails) => function(e) {
  const link = this;
  const method = link.getAttribute("data-method");
  if (!method) {
    return;
  }
  if (isContentEditable(this)) {
    return;
  }
  const href2 = rails.href(link);
  const csrfToken$1 = csrfToken();
  const csrfParam$1 = csrfParam();
  const form = document.createElement("form");
  let formContent = `<input name='_method' value='${method}' type='hidden' />`;
  if (csrfParam$1 && csrfToken$1 && !isCrossDomain(href2)) {
    formContent += `<input name='${csrfParam$1}' value='${csrfToken$1}' type='hidden' />`;
  }
  formContent += '<input type="submit" />';
  form.method = "post";
  form.action = href2;
  form.target = link.target;
  form.innerHTML = formContent;
  form.style.display = "none";
  document.body.appendChild(form);
  form.querySelector('[type="submit"]').click();
  stopEverything(e);
};
var isRemote = function(element) {
  const value = element.getAttribute("data-remote");
  return value != null && value !== "false";
};
var handleRemoteWithRails = (rails) => function(e) {
  let data, method, url;
  const element = this;
  if (!isRemote(element)) {
    return true;
  }
  if (!fire(element, "ajax:before")) {
    fire(element, "ajax:stopped");
    return false;
  }
  if (isContentEditable(element)) {
    fire(element, "ajax:stopped");
    return false;
  }
  const withCredentials = element.getAttribute("data-with-credentials");
  const dataType = element.getAttribute("data-type") || "script";
  if (matches(element, formSubmitSelector)) {
    const button = getData(element, "ujs:submit-button");
    method = getData(element, "ujs:submit-button-formmethod") || element.getAttribute("method") || "get";
    url = getData(element, "ujs:submit-button-formaction") || element.getAttribute("action") || location.href;
    if (method.toUpperCase() === "GET") {
      url = url.replace(/\?.*$/, "");
    }
    if (element.enctype === "multipart/form-data") {
      data = new FormData(element);
      if (button != null) {
        data.append(button.name, button.value);
      }
    } else {
      data = serializeElement(element, button);
    }
    setData(element, "ujs:submit-button", null);
    setData(element, "ujs:submit-button-formmethod", null);
    setData(element, "ujs:submit-button-formaction", null);
  } else if (matches(element, buttonClickSelector) || matches(element, inputChangeSelector)) {
    method = element.getAttribute("data-method");
    url = element.getAttribute("data-url");
    data = serializeElement(element, element.getAttribute("data-params"));
  } else {
    method = element.getAttribute("data-method");
    url = rails.href(element);
    data = element.getAttribute("data-params");
  }
  ajax({
    type: method || "GET",
    url,
    data,
    dataType,
    beforeSend(xhr, options) {
      if (fire(element, "ajax:beforeSend", [xhr, options])) {
        return fire(element, "ajax:send", [xhr]);
      } else {
        fire(element, "ajax:stopped");
        return false;
      }
    },
    success(...args) {
      return fire(element, "ajax:success", args);
    },
    error(...args) {
      return fire(element, "ajax:error", args);
    },
    complete(...args) {
      return fire(element, "ajax:complete", args);
    },
    crossDomain: isCrossDomain(url),
    withCredentials: withCredentials != null && withCredentials !== "false"
  });
  stopEverything(e);
};
var formSubmitButtonClick = function(e) {
  const button = this;
  const { form } = button;
  if (!form) {
    return;
  }
  if (button.name) {
    setData(form, "ujs:submit-button", {
      name: button.name,
      value: button.value
    });
  }
  setData(form, "ujs:formnovalidate-button", button.formNoValidate);
  setData(form, "ujs:submit-button-formaction", button.getAttribute("formaction"));
  return setData(form, "ujs:submit-button-formmethod", button.getAttribute("formmethod"));
};
var preventInsignificantClick = function(e) {
  const link = this;
  const method = (link.getAttribute("data-method") || "GET").toUpperCase();
  const data = link.getAttribute("data-params");
  const metaClick = e.metaKey || e.ctrlKey;
  const insignificantMetaClick = metaClick && method === "GET" && !data;
  const nonPrimaryMouseClick = e.button != null && e.button !== 0;
  if (nonPrimaryMouseClick || insignificantMetaClick) {
    e.stopImmediatePropagation();
  }
};
var Rails = {
  $: $2,
  ajax,
  buttonClickSelector,
  buttonDisableSelector,
  confirm: confirm2,
  cspNonce,
  csrfToken,
  csrfParam,
  CSRFProtection,
  delegate,
  disableElement,
  enableElement,
  fileInputSelector,
  fire,
  formElements,
  formEnableSelector,
  formDisableSelector,
  formInputClickSelector,
  formSubmitButtonClick,
  formSubmitSelector,
  getData,
  handleDisabledElement,
  href,
  inputChangeSelector,
  isCrossDomain,
  linkClickSelector,
  linkDisableSelector,
  loadCSPNonce,
  matches,
  preventInsignificantClick,
  refreshCSRFTokens,
  serializeElement,
  setData,
  stopEverything
};
var handleConfirm = handleConfirmWithRails(Rails);
Rails.handleConfirm = handleConfirm;
var handleMethod = handleMethodWithRails(Rails);
Rails.handleMethod = handleMethod;
var handleRemote = handleRemoteWithRails(Rails);
Rails.handleRemote = handleRemote;
var start = function() {
  if (window._rails_loaded) {
    throw new Error("rails-ujs has already been loaded!");
  }
  window.addEventListener("pageshow", function() {
    $2(formEnableSelector).forEach(function(el) {
      if (getData(el, "ujs:disabled")) {
        enableElement(el);
      }
    });
    $2(linkDisableSelector).forEach(function(el) {
      if (getData(el, "ujs:disabled")) {
        enableElement(el);
      }
    });
  });
  delegate(document, linkDisableSelector, "ajax:complete", enableElement);
  delegate(document, linkDisableSelector, "ajax:stopped", enableElement);
  delegate(document, buttonDisableSelector, "ajax:complete", enableElement);
  delegate(document, buttonDisableSelector, "ajax:stopped", enableElement);
  delegate(document, linkClickSelector, "click", preventInsignificantClick);
  delegate(document, linkClickSelector, "click", handleDisabledElement);
  delegate(document, linkClickSelector, "click", handleConfirm);
  delegate(document, linkClickSelector, "click", disableElement);
  delegate(document, linkClickSelector, "click", handleRemote);
  delegate(document, linkClickSelector, "click", handleMethod);
  delegate(document, buttonClickSelector, "click", preventInsignificantClick);
  delegate(document, buttonClickSelector, "click", handleDisabledElement);
  delegate(document, buttonClickSelector, "click", handleConfirm);
  delegate(document, buttonClickSelector, "click", disableElement);
  delegate(document, buttonClickSelector, "click", handleRemote);
  delegate(document, inputChangeSelector, "change", handleDisabledElement);
  delegate(document, inputChangeSelector, "change", handleConfirm);
  delegate(document, inputChangeSelector, "change", handleRemote);
  delegate(document, formSubmitSelector, "submit", handleDisabledElement);
  delegate(document, formSubmitSelector, "submit", handleConfirm);
  delegate(document, formSubmitSelector, "submit", handleRemote);
  delegate(document, formSubmitSelector, "submit", (e) => setTimeout(() => disableElement(e), 13));
  delegate(document, formSubmitSelector, "ajax:send", disableElement);
  delegate(document, formSubmitSelector, "ajax:complete", enableElement);
  delegate(document, formInputClickSelector, "click", preventInsignificantClick);
  delegate(document, formInputClickSelector, "click", handleDisabledElement);
  delegate(document, formInputClickSelector, "click", handleConfirm);
  delegate(document, formInputClickSelector, "click", formSubmitButtonClick);
  document.addEventListener("DOMContentLoaded", refreshCSRFTokens);
  document.addEventListener("DOMContentLoaded", loadCSPNonce);
  return window._rails_loaded = true;
};
Rails.start = start;
if (typeof jQuery !== "undefined" && jQuery && jQuery.ajax) {
  if (jQuery.rails) {
    throw new Error("If you load both jquery_ujs and rails-ujs, use rails-ujs only.");
  }
  jQuery.rails = Rails;
  jQuery.ajaxPrefilter(function(options, originalOptions, xhr) {
    if (!options.crossDomain) {
      return CSRFProtection(xhr);
    }
  });
}

// app/javascript/application.js
var import_bootstrap = __toESM(require_bootstrap());
window.jQuery = import_jquery2.default;
window.$ = import_jquery2.default;
Rails.start();
(0, import_jquery2.default)(function() {
  $("li.vdi").popover({
    trigger: "hover",
    content: "A VDI (Virtual Desktop Interface) gives you desktop access to a shared node. This is the graphical version of a login node. Use this for lightweight tasks like accessing & viewing files, submitting jobs, and for visualizations.",
    title: function() {
      return $(this).text();
    }
  });
  $("li.ihpc").popover({
    trigger: "hover",
    content: "An Interactive HPC session gives you dedicated access to one or more nodes on the cluster. This is similar to an interactive batch session with an accessible desktop on the primary node. Use this for heavyweight jobs such as long-running compute tasks or where you need dedicated resources.",
    title: function() {
      return $(this).text();
    }
  });
  $('[data-toggle="popover"]').popover();
  $('[data-toggle="tooltip"]').tooltip();
});
/*!
  * Bootstrap v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
/*!
 * jQuery JavaScript Library v3.7.1
 * https://jquery.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2023-08-28T13:37Z
 */
/*! DataTables 1.13.11
 * ©2008-2024 SpryMedia Ltd - datatables.net/license
 */
/*! DataTables Bootstrap 4 integration
 * ©2011-2017 SpryMedia Ltd - datatables.net/license
 */
/*! Select for DataTables 1.7.0-dev
 * © SpryMedia Ltd - datatables.net/license/mit
 */
/*! © SpryMedia Ltd - datatables.net/license */
//# sourceMappingURL=/pun/sys/ood/assets/application.js-6e103f039bca5372bc616406f8782b344c5200fd7304a04c2a0474f18c926613.map
//!
;
