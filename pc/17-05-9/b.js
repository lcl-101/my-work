/*! jQuery v1.11.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
        if (!a.document)
            throw new Error("jQuery requires a window with a document");
        return b(a)
    }
        : b(a)
}("undefined" != typeof window ? window : this, function(a, b) {
    var c = []
        , d = c.slice
        , e = c.concat
        , f = c.push
        , g = c.indexOf
        , h = {}
        , i = h.toString
        , j = h.hasOwnProperty
        , k = {}
        , l = "1.11.1"
        , m = function(a, b) {
        return new m.fn.init(a,b)
    }
        , n = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
        , o = /^-ms-/
        , p = /-([\da-z])/gi
        , q = function(a, b) {
        return b.toUpperCase()
    };
    m.fn = m.prototype = {
        jquery: l,
        constructor: m,
        selector: "",
        length: 0,
        toArray: function() {
            return d.call(this)
        },
        get: function(a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this)
        },
        pushStack: function(a) {
            var b = m.merge(this.constructor(), a);
            return b.prevObject = this,
                b.context = this.context,
                b
        },
        each: function(a, b) {
            return m.each(this, a, b)
        },
        map: function(a) {
            return this.pushStack(m.map(this, function(b, c) {
                return a.call(b, c, b)
            }))
        },
        slice: function() {
            return this.pushStack(d.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(a) {
            var b = this.length
                , c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: f,
        sort: c.sort,
        splice: c.splice
    },
        m.extend = m.fn.extend = function() {
            var a, b, c, d, e, f, g = arguments[0] || {}, h = 1, i = arguments.length, j = !1;
            for ("boolean" == typeof g && (j = g,
                g = arguments[h] || {},
                h++),
                 "object" == typeof g || m.isFunction(g) || (g = {}),
                 h === i && (g = this,
                     h--); i > h; h++)
                if (null != (e = arguments[h]))
                    for (d in e)
                        a = g[d],
                            c = e[d],
                        g !== c && (j && c && (m.isPlainObject(c) || (b = m.isArray(c))) ? (b ? (b = !1,
                            f = a && m.isArray(a) ? a : []) : f = a && m.isPlainObject(a) ? a : {},
                            g[d] = m.extend(j, f, c)) : void 0 !== c && (g[d] = c));
            return g
        }
        ,
        m.extend({
            expando: "jQuery" + (l + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(a) {
                throw new Error(a)
            },
            noop: function() {},
            isFunction: function(a) {
                return "function" === m.type(a)
            },
            isArray: Array.isArray || function(a) {
                return "array" === m.type(a)
            }
            ,
            isWindow: function(a) {
                return null != a && a == a.window
            },
            isNumeric: function(a) {
                return !m.isArray(a) && a - parseFloat(a) >= 0
            },
            isEmptyObject: function(a) {
                var b;
                for (b in a)
                    return !1;
                return !0
            },
            isPlainObject: function(a) {
                var b;
                if (!a || "object" !== m.type(a) || a.nodeType || m.isWindow(a))
                    return !1;
                try {
                    if (a.constructor && !j.call(a, "constructor") && !j.call(a.constructor.prototype, "isPrototypeOf"))
                        return !1
                } catch (c) {
                    return !1
                }
                if (k.ownLast)
                    for (b in a)
                        return j.call(a, b);
                for (b in a)
                    ;
                return void 0 === b || j.call(a, b)
            },
            type: function(a) {
                return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? h[i.call(a)] || "object" : typeof a
            },
            globalEval: function(b) {
                b && m.trim(b) && (a.execScript || function(b) {
                        a.eval.call(a, b)
                    }
                )(b)
            },
            camelCase: function(a) {
                return a.replace(o, "ms-").replace(p, q)
            },
            nodeName: function(a, b) {
                return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
            },
            each: function(a, b, c) {
                var d, e = 0, f = a.length, g = r(a);
                if (c) {
                    if (g) {
                        for (; f > e; e++)
                            if (d = b.apply(a[e], c),
                                d === !1)
                                break
                    } else
                        for (e in a)
                            if (d = b.apply(a[e], c),
                                d === !1)
                                break
                } else if (g) {
                    for (; f > e; e++)
                        if (d = b.call(a[e], e, a[e]),
                            d === !1)
                            break
                } else
                    for (e in a)
                        if (d = b.call(a[e], e, a[e]),
                            d === !1)
                            break;
                return a
            },
            trim: function(a) {
                return null == a ? "" : (a + "").replace(n, "")
            },
            makeArray: function(a, b) {
                var c = b || [];
                return null != a && (r(Object(a)) ? m.merge(c, "string" == typeof a ? [a] : a) : f.call(c, a)),
                    c
            },
            inArray: function(a, b, c) {
                var d;
                if (b) {
                    if (g)
                        return g.call(b, a, c);
                    for (d = b.length,
                             c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++)
                        if (c in b && b[c] === a)
                            return c
                }
                return -1
            },
            merge: function(a, b) {
                var c = +b.length
                    , d = 0
                    , e = a.length;
                while (c > d)
                    a[e++] = b[d++];
                if (c !== c)
                    while (void 0 !== b[d])
                        a[e++] = b[d++];
                return a.length = e,
                    a
            },
            grep: function(a, b, c) {
                for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++)
                    d = !b(a[f], f),
                    d !== h && e.push(a[f]);
                return e
            },
            map: function(a, b, c) {
                var d, f = 0, g = a.length, h = r(a), i = [];
                if (h)
                    for (; g > f; f++)
                        d = b(a[f], f, c),
                        null != d && i.push(d);
                else
                    for (f in a)
                        d = b(a[f], f, c),
                        null != d && i.push(d);
                return e.apply([], i)
            },
            guid: 1,
            proxy: function(a, b) {
                var c, e, f;
                return "string" == typeof b && (f = a[b],
                    b = a,
                    a = f),
                    m.isFunction(a) ? (c = d.call(arguments, 2),
                        e = function() {
                            return a.apply(b || this, c.concat(d.call(arguments)))
                        }
                        ,
                        e.guid = a.guid = a.guid || m.guid++,
                        e) : void 0
            },
            now: function() {
                return +new Date
            },
            support: k
        }),
        m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
            h["[object " + b + "]"] = b.toLowerCase()
        });
    function r(a) {
        var b = a.length
            , c = m.type(a);
        return "function" === c || m.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }
    var s = function(a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + -new Date, v = a.document, w = 0, x = 0, y = gb(), z = gb(), A = gb(), B = function(a, b) {
            return a === b && (l = !0),
                0
        }, C = "undefined", D = 1 << 31, E = {}.hasOwnProperty, F = [], G = F.pop, H = F.push, I = F.push, J = F.slice, K = F.indexOf || function(a) {
                for (var b = 0, c = this.length; c > b; b++)
                    if (this[b] === a)
                        return b;
                return -1
            }
            , L = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", M = "[\\x20\\t\\r\\n\\f]", N = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", O = N.replace("w", "w#"), P = "\\[" + M + "*(" + N + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + O + "))|)" + M + "*\\]", Q = ":(" + N + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + P + ")*)|.*)\\)|)", R = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$","g"), S = new RegExp("^" + M + "*," + M + "*"), T = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"), U = new RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]","g"), V = new RegExp(Q), W = new RegExp("^" + O + "$"), X = {
            ID: new RegExp("^#(" + N + ")"),
            CLASS: new RegExp("^\\.(" + N + ")"),
            TAG: new RegExp("^(" + N.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + P),
            PSEUDO: new RegExp("^" + Q),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)","i"),
            bool: new RegExp("^(?:" + L + ")$","i"),
            needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)","i")
        }, Y = /^(?:input|select|textarea|button)$/i, Z = /^h\d$/i, $ = /^[^{]+\{\s*\[native \w/, _ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ab = /[+~]/, bb = /'|\\/g, cb = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)","ig"), db = function(a, b, c) {
            var d = "0x" + b - 65536;
            return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
        };
        try {
            I.apply(F = J.call(v.childNodes), v.childNodes),
                F[v.childNodes.length].nodeType
        } catch (eb) {
            I = {
                apply: F.length ? function(a, b) {
                    H.apply(a, J.call(b))
                }
                    : function(a, b) {
                    var c = a.length
                        , d = 0;
                    while (a[c++] = b[d++])
                        ;
                    a.length = c - 1
                }
            }
        }
        function fb(a, b, d, e) {
            var f, h, j, k, l, o, r, s, w, x;
            if ((b ? b.ownerDocument || b : v) !== n && m(b),
                    b = b || n,
                    d = d || [],
                !a || "string" != typeof a)
                return d;
            if (1 !== (k = b.nodeType) && 9 !== k)
                return [];
            if (p && !e) {
                if (f = _.exec(a))
                    if (j = f[1]) {
                        if (9 === k) {
                            if (h = b.getElementById(j),
                                !h || !h.parentNode)
                                return d;
                            if (h.id === j)
                                return d.push(h),
                                    d
                        } else if (b.ownerDocument && (h = b.ownerDocument.getElementById(j)) && t(b, h) && h.id === j)
                            return d.push(h),
                                d
                    } else {
                        if (f[2])
                            return I.apply(d, b.getElementsByTagName(a)),
                                d;
                        if ((j = f[3]) && c.getElementsByClassName && b.getElementsByClassName)
                            return I.apply(d, b.getElementsByClassName(j)),
                                d
                    }
                if (c.qsa && (!q || !q.test(a))) {
                    if (s = r = u,
                            w = b,
                            x = 9 === k && a,
                        1 === k && "object" !== b.nodeName.toLowerCase()) {
                        o = g(a),
                            (r = b.getAttribute("id")) ? s = r.replace(bb, "\\$&") : b.setAttribute("id", s),
                            s = "[id='" + s + "'] ",
                            l = o.length;
                        while (l--)
                            o[l] = s + qb(o[l]);
                        w = ab.test(a) && ob(b.parentNode) || b,
                            x = o.join(",")
                    }
                    if (x)
                        try {
                            return I.apply(d, w.querySelectorAll(x)),
                                d
                        } catch (y) {} finally {
                            r || b.removeAttribute("id")
                        }
                }
            }
            return i(a.replace(R, "$1"), b, d, e)
        }
        function gb() {
            var a = [];
            function b(c, e) {
                return a.push(c + " ") > d.cacheLength && delete b[a.shift()],
                    b[c + " "] = e
            }
            return b
        }
        function hb(a) {
            return a[u] = !0,
                a
        }
        function ib(a) {
            var b = n.createElement("div");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b),
                    b = null
            }
        }
        function jb(a, b) {
            var c = a.split("|")
                , e = a.length;
            while (e--)
                d.attrHandle[c[e]] = b
        }
        function kb(a, b) {
            var c = b && a
                , d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || D) - (~a.sourceIndex || D);
            if (d)
                return d;
            if (c)
                while (c = c.nextSibling)
                    if (c === b)
                        return -1;
            return a ? 1 : -1
        }
        function lb(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }
        function mb(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }
        function nb(a) {
            return hb(function(b) {
                return b = +b,
                    hb(function(c, d) {
                        var e, f = a([], c.length, b), g = f.length;
                        while (g--)
                            c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                    })
            })
        }
        function ob(a) {
            return a && typeof a.getElementsByTagName !== C && a
        }
        c = fb.support = {},
            f = fb.isXML = function(a) {
                var b = a && (a.ownerDocument || a).documentElement;
                return b ? "HTML" !== b.nodeName : !1
            }
            ,
            m = fb.setDocument = function(a) {
                var b, e = a ? a.ownerDocument || a : v, g = e.defaultView;
                return e !== n && 9 === e.nodeType && e.documentElement ? (n = e,
                    o = e.documentElement,
                    p = !f(e),
                g && g !== g.top && (g.addEventListener ? g.addEventListener("unload", function() {
                    m()
                }, !1) : g.attachEvent && g.attachEvent("onunload", function() {
                    m()
                })),
                    c.attributes = ib(function(a) {
                        return a.className = "i",
                            !a.getAttribute("className")
                    }),
                    c.getElementsByTagName = ib(function(a) {
                        return a.appendChild(e.createComment("")),
                            !a.getElementsByTagName("*").length
                    }),
                    c.getElementsByClassName = $.test(e.getElementsByClassName) && ib(function(a) {
                            return a.innerHTML = "<div class='a'></div><div class='a i'></div>",
                                a.firstChild.className = "i",
                            2 === a.getElementsByClassName("i").length
                        }),
                    c.getById = ib(function(a) {
                        return o.appendChild(a).id = u,
                        !e.getElementsByName || !e.getElementsByName(u).length
                    }),
                    c.getById ? (d.find.ID = function(a, b) {
                            if (typeof b.getElementById !== C && p) {
                                var c = b.getElementById(a);
                                return c && c.parentNode ? [c] : []
                            }
                        }
                            ,
                            d.filter.ID = function(a) {
                                var b = a.replace(cb, db);
                                return function(a) {
                                    return a.getAttribute("id") === b
                                }
                            }
                    ) : (delete d.find.ID,
                            d.filter.ID = function(a) {
                                var b = a.replace(cb, db);
                                return function(a) {
                                    var c = typeof a.getAttributeNode !== C && a.getAttributeNode("id");
                                    return c && c.value === b
                                }
                            }
                    ),
                    d.find.TAG = c.getElementsByTagName ? function(a, b) {
                        return typeof b.getElementsByTagName !== C ? b.getElementsByTagName(a) : void 0
                    }
                        : function(a, b) {
                        var c, d = [], e = 0, f = b.getElementsByTagName(a);
                        if ("*" === a) {
                            while (c = f[e++])
                                1 === c.nodeType && d.push(c);
                            return d
                        }
                        return f
                    }
                    ,
                    d.find.CLASS = c.getElementsByClassName && function(a, b) {
                            return typeof b.getElementsByClassName !== C && p ? b.getElementsByClassName(a) : void 0
                        }
                    ,
                    r = [],
                    q = [],
                (c.qsa = $.test(e.querySelectorAll)) && (ib(function(a) {
                    a.innerHTML = "<select msallowclip=''><option selected=''></option></select>",
                    a.querySelectorAll("[msallowclip^='']").length && q.push("[*^$]=" + M + "*(?:''|\"\")"),
                    a.querySelectorAll("[selected]").length || q.push("\\[" + M + "*(?:value|" + L + ")"),
                    a.querySelectorAll(":checked").length || q.push(":checked")
                }),
                    ib(function(a) {
                        var b = e.createElement("input");
                        b.setAttribute("type", "hidden"),
                            a.appendChild(b).setAttribute("name", "D"),
                        a.querySelectorAll("[name=d]").length && q.push("name" + M + "*[*^$|!~]?="),
                        a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"),
                            a.querySelectorAll("*,:x"),
                            q.push(",.*:")
                    })),
                (c.matchesSelector = $.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ib(function(a) {
                    c.disconnectedMatch = s.call(a, "div"),
                        s.call(a, "[s!='']:x"),
                        r.push("!=", Q)
                }),
                    q = q.length && new RegExp(q.join("|")),
                    r = r.length && new RegExp(r.join("|")),
                    b = $.test(o.compareDocumentPosition),
                    t = b || $.test(o.contains) ? function(a, b) {
                        var c = 9 === a.nodeType ? a.documentElement : a
                            , d = b && b.parentNode;
                        return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
                    }
                        : function(a, b) {
                        if (b)
                            while (b = b.parentNode)
                                if (b === a)
                                    return !0;
                        return !1
                    }
                    ,
                    B = b ? function(a, b) {
                        if (a === b)
                            return l = !0,
                                0;
                        var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                        return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1,
                            1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === e || a.ownerDocument === v && t(v, a) ? -1 : b === e || b.ownerDocument === v && t(v, b) ? 1 : k ? K.call(k, a) - K.call(k, b) : 0 : 4 & d ? -1 : 1)
                    }
                        : function(a, b) {
                        if (a === b)
                            return l = !0,
                                0;
                        var c, d = 0, f = a.parentNode, g = b.parentNode, h = [a], i = [b];
                        if (!f || !g)
                            return a === e ? -1 : b === e ? 1 : f ? -1 : g ? 1 : k ? K.call(k, a) - K.call(k, b) : 0;
                        if (f === g)
                            return kb(a, b);
                        c = a;
                        while (c = c.parentNode)
                            h.unshift(c);
                        c = b;
                        while (c = c.parentNode)
                            i.unshift(c);
                        while (h[d] === i[d])
                            d++;
                        return d ? kb(h[d], i[d]) : h[d] === v ? -1 : i[d] === v ? 1 : 0
                    }
                    ,
                    e) : n
            }
            ,
            fb.matches = function(a, b) {
                return fb(a, null, null, b)
            }
            ,
            fb.matchesSelector = function(a, b) {
                if ((a.ownerDocument || a) !== n && m(a),
                        b = b.replace(U, "='$1']"),
                        !(!c.matchesSelector || !p || r && r.test(b) || q && q.test(b)))
                    try {
                        var d = s.call(a, b);
                        if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType)
                            return d
                    } catch (e) {}
                return fb(b, n, null, [a]).length > 0
            }
            ,
            fb.contains = function(a, b) {
                return (a.ownerDocument || a) !== n && m(a),
                    t(a, b)
            }
            ,
            fb.attr = function(a, b) {
                (a.ownerDocument || a) !== n && m(a);
                var e = d.attrHandle[b.toLowerCase()]
                    , f = e && E.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
                return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
            }
            ,
            fb.error = function(a) {
                throw new Error("Syntax error, unrecognized expression: " + a)
            }
            ,
            fb.uniqueSort = function(a) {
                var b, d = [], e = 0, f = 0;
                if (l = !c.detectDuplicates,
                        k = !c.sortStable && a.slice(0),
                        a.sort(B),
                        l) {
                    while (b = a[f++])
                        b === a[f] && (e = d.push(f));
                    while (e--)
                        a.splice(d[e], 1)
                }
                return k = null,
                    a
            }
            ,
            e = fb.getText = function(a) {
                var b, c = "", d = 0, f = a.nodeType;
                if (f) {
                    if (1 === f || 9 === f || 11 === f) {
                        if ("string" == typeof a.textContent)
                            return a.textContent;
                        for (a = a.firstChild; a; a = a.nextSibling)
                            c += e(a)
                    } else if (3 === f || 4 === f)
                        return a.nodeValue
                } else
                    while (b = a[d++])
                        c += e(b);
                return c
            }
            ,
            d = fb.selectors = {
                cacheLength: 50,
                createPseudo: hb,
                match: X,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(a) {
                        return a[1] = a[1].replace(cb, db),
                            a[3] = (a[3] || a[4] || a[5] || "").replace(cb, db),
                        "~=" === a[2] && (a[3] = " " + a[3] + " "),
                            a.slice(0, 4)
                    },
                    CHILD: function(a) {
                        return a[1] = a[1].toLowerCase(),
                            "nth" === a[1].slice(0, 3) ? (a[3] || fb.error(a[0]),
                                a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])),
                                a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && fb.error(a[0]),
                            a
                    },
                    PSEUDO: function(a) {
                        var b, c = !a[6] && a[2];
                        return X.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && V.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b),
                            a[2] = c.slice(0, b)),
                            a.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(a) {
                        var b = a.replace(cb, db).toLowerCase();
                        return "*" === a ? function() {
                            return !0
                        }
                            : function(a) {
                            return a.nodeName && a.nodeName.toLowerCase() === b
                        }
                    },
                    CLASS: function(a) {
                        var b = y[a + " "];
                        return b || (b = new RegExp("(^|" + M + ")" + a + "(" + M + "|$)")) && y(a, function(a) {
                                return b.test("string" == typeof a.className && a.className || typeof a.getAttribute !== C && a.getAttribute("class") || "")
                            })
                    },
                    ATTR: function(a, b, c) {
                        return function(d) {
                            var e = fb.attr(d, a);
                            return null == e ? "!=" === b : b ? (e += "",
                                "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0
                        }
                    },
                    CHILD: function(a, b, c, d, e) {
                        var f = "nth" !== a.slice(0, 3)
                            , g = "last" !== a.slice(-4)
                            , h = "of-type" === b;
                        return 1 === d && 0 === e ? function(a) {
                            return !!a.parentNode
                        }
                            : function(b, c, i) {
                            var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling", q = b.parentNode, r = h && b.nodeName.toLowerCase(), s = !i && !h;
                            if (q) {
                                if (f) {
                                    while (p) {
                                        l = b;
                                        while (l = l[p])
                                            if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType)
                                                return !1;
                                        o = p = "only" === a && !o && "nextSibling"
                                    }
                                    return !0
                                }
                                if (o = [g ? q.firstChild : q.lastChild],
                                    g && s) {
                                    k = q[u] || (q[u] = {}),
                                        j = k[a] || [],
                                        n = j[0] === w && j[1],
                                        m = j[0] === w && j[2],
                                        l = n && q.childNodes[n];
                                    while (l = ++n && l && l[p] || (m = n = 0) || o.pop())
                                        if (1 === l.nodeType && ++m && l === b) {
                                            k[a] = [w, n, m];
                                            break
                                        }
                                } else if (s && (j = (b[u] || (b[u] = {}))[a]) && j[0] === w)
                                    m = j[1];
                                else
                                    while (l = ++n && l && l[p] || (m = n = 0) || o.pop())
                                        if ((h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) && ++m && (s && ((l[u] || (l[u] = {}))[a] = [w, m]),
                                            l === b))
                                            break;
                                return m -= e,
                                m === d || m % d === 0 && m / d >= 0
                            }
                        }
                    },
                    PSEUDO: function(a, b) {
                        var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || fb.error("unsupported pseudo: " + a);
                        return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b],
                                d.setFilters.hasOwnProperty(a.toLowerCase()) ? hb(function(a, c) {
                                    var d, f = e(a, b), g = f.length;
                                    while (g--)
                                        d = K.call(a, f[g]),
                                            a[d] = !(c[d] = f[g])
                                }) : function(a) {
                                    return e(a, 0, c)
                                }
                        ) : e
                    }
                },
                pseudos: {
                    not: hb(function(a) {
                        var b = []
                            , c = []
                            , d = h(a.replace(R, "$1"));
                        return d[u] ? hb(function(a, b, c, e) {
                            var f, g = d(a, null, e, []), h = a.length;
                            while (h--)
                                (f = g[h]) && (a[h] = !(b[h] = f))
                        }) : function(a, e, f) {
                            return b[0] = a,
                                d(b, null, f, c),
                                !c.pop()
                        }
                    }),
                    has: hb(function(a) {
                        return function(b) {
                            return fb(a, b).length > 0
                        }
                    }),
                    contains: hb(function(a) {
                        return function(b) {
                            return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
                        }
                    }),
                    lang: hb(function(a) {
                        return W.test(a || "") || fb.error("unsupported lang: " + a),
                            a = a.replace(cb, db).toLowerCase(),
                            function(b) {
                                var c;
                                do
                                    if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang"))
                                        return c = c.toLowerCase(),
                                        c === a || 0 === c.indexOf(a + "-");
                                while ((b = b.parentNode) && 1 === b.nodeType);return !1
                            }
                    }),
                    target: function(b) {
                        var c = a.location && a.location.hash;
                        return c && c.slice(1) === b.id
                    },
                    root: function(a) {
                        return a === o
                    },
                    focus: function(a) {
                        return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                    },
                    enabled: function(a) {
                        return a.disabled === !1
                    },
                    disabled: function(a) {
                        return a.disabled === !0
                    },
                    checked: function(a) {
                        var b = a.nodeName.toLowerCase();
                        return "input" === b && !!a.checked || "option" === b && !!a.selected
                    },
                    selected: function(a) {
                        return a.parentNode && a.parentNode.selectedIndex,
                        a.selected === !0
                    },
                    empty: function(a) {
                        for (a = a.firstChild; a; a = a.nextSibling)
                            if (a.nodeType < 6)
                                return !1;
                        return !0
                    },
                    parent: function(a) {
                        return !d.pseudos.empty(a)
                    },
                    header: function(a) {
                        return Z.test(a.nodeName)
                    },
                    input: function(a) {
                        return Y.test(a.nodeName)
                    },
                    button: function(a) {
                        var b = a.nodeName.toLowerCase();
                        return "input" === b && "button" === a.type || "button" === b
                    },
                    text: function(a) {
                        var b;
                        return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                    },
                    first: nb(function() {
                        return [0]
                    }),
                    last: nb(function(a, b) {
                        return [b - 1]
                    }),
                    eq: nb(function(a, b, c) {
                        return [0 > c ? c + b : c]
                    }),
                    even: nb(function(a, b) {
                        for (var c = 0; b > c; c += 2)
                            a.push(c);
                        return a
                    }),
                    odd: nb(function(a, b) {
                        for (var c = 1; b > c; c += 2)
                            a.push(c);
                        return a
                    }),
                    lt: nb(function(a, b, c) {
                        for (var d = 0 > c ? c + b : c; --d >= 0; )
                            a.push(d);
                        return a
                    }),
                    gt: nb(function(a, b, c) {
                        for (var d = 0 > c ? c + b : c; ++d < b; )
                            a.push(d);
                        return a
                    })
                }
            },
            d.pseudos.nth = d.pseudos.eq;
        for (b in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            d.pseudos[b] = lb(b);
        for (b in {
            submit: !0,
            reset: !0
        })
            d.pseudos[b] = mb(b);
        function pb() {}
        pb.prototype = d.filters = d.pseudos,
            d.setFilters = new pb,
            g = fb.tokenize = function(a, b) {
                var c, e, f, g, h, i, j, k = z[a + " "];
                if (k)
                    return b ? 0 : k.slice(0);
                h = a,
                    i = [],
                    j = d.preFilter;
                while (h) {
                    (!c || (e = S.exec(h))) && (e && (h = h.slice(e[0].length) || h),
                        i.push(f = [])),
                        c = !1,
                    (e = T.exec(h)) && (c = e.shift(),
                        f.push({
                            value: c,
                            type: e[0].replace(R, " ")
                        }),
                        h = h.slice(c.length));
                    for (g in d.filter)
                        !(e = X[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(),
                            f.push({
                                value: c,
                                type: g,
                                matches: e
                            }),
                            h = h.slice(c.length));
                    if (!c)
                        break
                }
                return b ? h.length : h ? fb.error(a) : z(a, i).slice(0)
            }
        ;
        function qb(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++)
                d += a[b].value;
            return d
        }
        function rb(a, b, c) {
            var d = b.dir
                , e = c && "parentNode" === d
                , f = x++;
            return b.first ? function(b, c, f) {
                while (b = b[d])
                    if (1 === b.nodeType || e)
                        return a(b, c, f)
            }
                : function(b, c, g) {
                var h, i, j = [w, f];
                if (g) {
                    while (b = b[d])
                        if ((1 === b.nodeType || e) && a(b, c, g))
                            return !0
                } else
                    while (b = b[d])
                        if (1 === b.nodeType || e) {
                            if (i = b[u] || (b[u] = {}),
                                (h = i[d]) && h[0] === w && h[1] === f)
                                return j[2] = h[2];
                            if (i[d] = j,
                                    j[2] = a(b, c, g))
                                return !0
                        }
            }
        }
        function sb(a) {
            return a.length > 1 ? function(b, c, d) {
                var e = a.length;
                while (e--)
                    if (!a[e](b, c, d))
                        return !1;
                return !0
            }
                : a[0]
        }
        function tb(a, b, c) {
            for (var d = 0, e = b.length; e > d; d++)
                fb(a, b[d], c);
            return c
        }
        function ub(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)
                (f = a[h]) && (!c || c(f, d, e)) && (g.push(f),
                j && b.push(h));
            return g
        }
        function vb(a, b, c, d, e, f) {
            return d && !d[u] && (d = vb(d)),
            e && !e[u] && (e = vb(e, f)),
                hb(function(f, g, h, i) {
                    var j, k, l, m = [], n = [], o = g.length, p = f || tb(b || "*", h.nodeType ? [h] : h, []), q = !a || !f && b ? p : ub(p, m, a, h, i), r = c ? e || (f ? a : o || d) ? [] : g : q;
                    if (c && c(q, r, h, i),
                            d) {
                        j = ub(r, n),
                            d(j, [], h, i),
                            k = j.length;
                        while (k--)
                            (l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
                    }
                    if (f) {
                        if (e || a) {
                            if (e) {
                                j = [],
                                    k = r.length;
                                while (k--)
                                    (l = r[k]) && j.push(q[k] = l);
                                e(null, r = [], j, i)
                            }
                            k = r.length;
                            while (k--)
                                (l = r[k]) && (j = e ? K.call(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
                        }
                    } else
                        r = ub(r === g ? r.splice(o, r.length) : r),
                            e ? e(null, g, r, i) : I.apply(g, r)
                })
        }
        function wb(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = rb(function(a) {
                return a === b
            }, h, !0), l = rb(function(a) {
                return K.call(b, a) > -1
            }, h, !0), m = [function(a, c, d) {
                return !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d))
            }
            ]; f > i; i++)
                if (c = d.relative[a[i].type])
                    m = [rb(sb(m), c)];
                else {
                    if (c = d.filter[a[i].type].apply(null, a[i].matches),
                            c[u]) {
                        for (e = ++i; f > e; e++)
                            if (d.relative[a[e].type])
                                break;
                        return vb(i > 1 && sb(m), i > 1 && qb(a.slice(0, i - 1).concat({
                                value: " " === a[i - 2].type ? "*" : ""
                            })).replace(R, "$1"), c, e > i && wb(a.slice(i, e)), f > e && wb(a = a.slice(e)), f > e && qb(a))
                    }
                    m.push(c)
                }
            return sb(m)
        }
        function xb(a, b) {
            var c = b.length > 0
                , e = a.length > 0
                , f = function(f, g, h, i, k) {
                var l, m, o, p = 0, q = "0", r = f && [], s = [], t = j, u = f || e && d.find.TAG("*", k), v = w += null == t ? 1 : Math.random() || .1, x = u.length;
                for (k && (j = g !== n && g); q !== x && null != (l = u[q]); q++) {
                    if (e && l) {
                        m = 0;
                        while (o = a[m++])
                            if (o(l, g, h)) {
                                i.push(l);
                                break
                            }
                        k && (w = v)
                    }
                    c && ((l = !o && l) && p--,
                    f && r.push(l))
                }
                if (p += q,
                    c && q !== p) {
                    m = 0;
                    while (o = b[m++])
                        o(r, s, g, h);
                    if (f) {
                        if (p > 0)
                            while (q--)
                                r[q] || s[q] || (s[q] = G.call(i));
                        s = ub(s)
                    }
                    I.apply(i, s),
                    k && !f && s.length > 0 && p + b.length > 1 && fb.uniqueSort(i)
                }
                return k && (w = v,
                    j = t),
                    r
            };
            return c ? hb(f) : f
        }
        return h = fb.compile = function(a, b) {
            var c, d = [], e = [], f = A[a + " "];
            if (!f) {
                b || (b = g(a)),
                    c = b.length;
                while (c--)
                    f = wb(b[c]),
                        f[u] ? d.push(f) : e.push(f);
                f = A(a, xb(e, d)),
                    f.selector = a
            }
            return f
        }
            ,
            i = fb.select = function(a, b, e, f) {
                var i, j, k, l, m, n = "function" == typeof a && a, o = !f && g(a = n.selector || a);
                if (e = e || [],
                    1 === o.length) {
                    if (j = o[0] = o[0].slice(0),
                        j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
                        if (b = (d.find.ID(k.matches[0].replace(cb, db), b) || [])[0],
                                !b)
                            return e;
                        n && (b = b.parentNode),
                            a = a.slice(j.shift().value.length)
                    }
                    i = X.needsContext.test(a) ? 0 : j.length;
                    while (i--) {
                        if (k = j[i],
                                d.relative[l = k.type])
                            break;
                        if ((m = d.find[l]) && (f = m(k.matches[0].replace(cb, db), ab.test(j[0].type) && ob(b.parentNode) || b))) {
                            if (j.splice(i, 1),
                                    a = f.length && qb(j),
                                    !a)
                                return I.apply(e, f),
                                    e;
                            break
                        }
                    }
                }
                return (n || h(a, o))(f, b, !p, e, ab.test(a) && ob(b.parentNode) || b),
                    e
            }
            ,
            c.sortStable = u.split("").sort(B).join("") === u,
            c.detectDuplicates = !!l,
            m(),
            c.sortDetached = ib(function(a) {
                return 1 & a.compareDocumentPosition(n.createElement("div"))
            }),
        ib(function(a) {
            return a.innerHTML = "<a href='#'></a>",
            "#" === a.firstChild.getAttribute("href")
        }) || jb("type|href|height|width", function(a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }),
        c.attributes && ib(function(a) {
            return a.innerHTML = "<input/>",
                a.firstChild.setAttribute("value", ""),
            "" === a.firstChild.getAttribute("value")
        }) || jb("value", function(a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
        }),
        ib(function(a) {
            return null == a.getAttribute("disabled")
        }) || jb(L, function(a, b, c) {
            var d;
            return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }),
            fb
    }(a);
    m.find = s,
        m.expr = s.selectors,
        m.expr[":"] = m.expr.pseudos,
        m.unique = s.uniqueSort,
        m.text = s.getText,
        m.isXMLDoc = s.isXML,
        m.contains = s.contains;
    var t = m.expr.match.needsContext
        , u = /^<(\w+)\s*\/?>(?:<\/\1>|)$/
        , v = /^.[^:#\[\.,]*$/;
    function w(a, b, c) {
        if (m.isFunction(b))
            return m.grep(a, function(a, d) {
                return !!b.call(a, d, a) !== c
            });
        if (b.nodeType)
            return m.grep(a, function(a) {
                return a === b !== c
            });
        if ("string" == typeof b) {
            if (v.test(b))
                return m.filter(b, a, c);
            b = m.filter(b, a)
        }
        return m.grep(a, function(a) {
            return m.inArray(a, b) >= 0 !== c
        })
    }
    m.filter = function(a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"),
            1 === b.length && 1 === d.nodeType ? m.find.matchesSelector(d, a) ? [d] : [] : m.find.matches(a, m.grep(b, function(a) {
                return 1 === a.nodeType
            }))
    }
        ,
        m.fn.extend({
            find: function(a) {
                var b, c = [], d = this, e = d.length;
                if ("string" != typeof a)
                    return this.pushStack(m(a).filter(function() {
                        for (b = 0; e > b; b++)
                            if (m.contains(d[b], this))
                                return !0
                    }));
                for (b = 0; e > b; b++)
                    m.find(a, d[b], c);
                return c = this.pushStack(e > 1 ? m.unique(c) : c),
                    c.selector = this.selector ? this.selector + " " + a : a,
                    c
            },
            filter: function(a) {
                return this.pushStack(w(this, a || [], !1))
            },
            not: function(a) {
                return this.pushStack(w(this, a || [], !0))
            },
            is: function(a) {
                return !!w(this, "string" == typeof a && t.test(a) ? m(a) : a || [], !1).length
            }
        });
    var x, y = a.document, z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, A = m.fn.init = function(a, b) {
            var c, d;
            if (!a)
                return this;
            if ("string" == typeof a) {
                if (c = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : z.exec(a),
                    !c || !c[1] && b)
                    return !b || b.jquery ? (b || x).find(a) : this.constructor(b).find(a);
                if (c[1]) {
                    if (b = b instanceof m ? b[0] : b,
                            m.merge(this, m.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : y, !0)),
                        u.test(c[1]) && m.isPlainObject(b))
                        for (c in b)
                            m.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
                    return this
                }
                if (d = y.getElementById(c[2]),
                    d && d.parentNode) {
                    if (d.id !== c[2])
                        return x.find(a);
                    this.length = 1,
                        this[0] = d
                }
                return this.context = y,
                    this.selector = a,
                    this
            }
            return a.nodeType ? (this.context = this[0] = a,
                this.length = 1,
                this) : m.isFunction(a) ? "undefined" != typeof x.ready ? x.ready(a) : a(m) : (void 0 !== a.selector && (this.selector = a.selector,
                this.context = a.context),
                m.makeArray(a, this))
        }
        ;
    A.prototype = m.fn,
        x = m(y);
    var B = /^(?:parents|prev(?:Until|All))/
        , C = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    m.extend({
        dir: function(a, b, c) {
            var d = []
                , e = a[b];
            while (e && 9 !== e.nodeType && (void 0 === c || 1 !== e.nodeType || !m(e).is(c)))
                1 === e.nodeType && d.push(e),
                    e = e[b];
            return d
        },
        sibling: function(a, b) {
            for (var c = []; a; a = a.nextSibling)
                1 === a.nodeType && a !== b && c.push(a);
            return c
        }
    }),
        m.fn.extend({
            has: function(a) {
                var b, c = m(a, this), d = c.length;
                return this.filter(function() {
                    for (b = 0; d > b; b++)
                        if (m.contains(this, c[b]))
                            return !0
                })
            },
            closest: function(a, b) {
                for (var c, d = 0, e = this.length, f = [], g = t.test(a) || "string" != typeof a ? m(a, b || this.context) : 0; e > d; d++)
                    for (c = this[d]; c && c !== b; c = c.parentNode)
                        if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && m.find.matchesSelector(c, a))) {
                            f.push(c);
                            break
                        }
                return this.pushStack(f.length > 1 ? m.unique(f) : f)
            },
            index: function(a) {
                return a ? "string" == typeof a ? m.inArray(this[0], m(a)) : m.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(a, b) {
                return this.pushStack(m.unique(m.merge(this.get(), m(a, b))))
            },
            addBack: function(a) {
                return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
            }
        });
    function D(a, b) {
        do
            a = a[b];
        while (a && 1 !== a.nodeType);return a
    }
    m.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        },
        parents: function(a) {
            return m.dir(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return m.dir(a, "parentNode", c)
        },
        next: function(a) {
            return D(a, "nextSibling")
        },
        prev: function(a) {
            return D(a, "previousSibling")
        },
        nextAll: function(a) {
            return m.dir(a, "nextSibling")
        },
        prevAll: function(a) {
            return m.dir(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return m.dir(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return m.dir(a, "previousSibling", c)
        },
        siblings: function(a) {
            return m.sibling((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return m.sibling(a.firstChild)
        },
        contents: function(a) {
            return m.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : m.merge([], a.childNodes)
        }
    }, function(a, b) {
        m.fn[a] = function(c, d) {
            var e = m.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c),
            d && "string" == typeof d && (e = m.filter(d, e)),
            this.length > 1 && (C[a] || (e = m.unique(e)),
            B.test(a) && (e = e.reverse())),
                this.pushStack(e)
        }
    });
    var E = /\S+/g
        , F = {};
    function G(a) {
        var b = F[a] = {};
        return m.each(a.match(E) || [], function(a, c) {
            b[c] = !0
        }),
            b
    }
    m.Callbacks = function(a) {
        a = "string" == typeof a ? F[a] || G(a) : m.extend({}, a);
        var b, c, d, e, f, g, h = [], i = !a.once && [], j = function(l) {
            for (c = a.memory && l,
                     d = !0,
                     f = g || 0,
                     g = 0,
                     e = h.length,
                     b = !0; h && e > f; f++)
                if (h[f].apply(l[0], l[1]) === !1 && a.stopOnFalse) {
                    c = !1;
                    break
                }
            b = !1,
            h && (i ? i.length && j(i.shift()) : c ? h = [] : k.disable())
        }, k = {
            add: function() {
                if (h) {
                    var d = h.length;
                    !function f(b) {
                        m.each(b, function(b, c) {
                            var d = m.type(c);
                            "function" === d ? a.unique && k.has(c) || h.push(c) : c && c.length && "string" !== d && f(c)
                        })
                    }(arguments),
                        b ? e = h.length : c && (g = d,
                            j(c))
                }
                return this
            },
            remove: function() {
                return h && m.each(arguments, function(a, c) {
                    var d;
                    while ((d = m.inArray(c, h, d)) > -1)
                        h.splice(d, 1),
                        b && (e >= d && e--,
                        f >= d && f--)
                }),
                    this
            },
            has: function(a) {
                return a ? m.inArray(a, h) > -1 : !(!h || !h.length)
            },
            empty: function() {
                return h = [],
                    e = 0,
                    this
            },
            disable: function() {
                return h = i = c = void 0,
                    this
            },
            disabled: function() {
                return !h
            },
            lock: function() {
                return i = void 0,
                c || k.disable(),
                    this
            },
            locked: function() {
                return !i
            },
            fireWith: function(a, c) {
                return !h || d && !i || (c = c || [],
                    c = [a, c.slice ? c.slice() : c],
                    b ? i.push(c) : j(c)),
                    this
            },
            fire: function() {
                return k.fireWith(this, arguments),
                    this
            },
            fired: function() {
                return !!d
            }
        };
        return k
    }
        ,
        m.extend({
            Deferred: function(a) {
                var b = [["resolve", "done", m.Callbacks("once memory"), "resolved"], ["reject", "fail", m.Callbacks("once memory"), "rejected"], ["notify", "progress", m.Callbacks("memory")]]
                    , c = "pending"
                    , d = {
                    state: function() {
                        return c
                    },
                    always: function() {
                        return e.done(arguments).fail(arguments),
                            this
                    },
                    then: function() {
                        var a = arguments;
                        return m.Deferred(function(c) {
                            m.each(b, function(b, f) {
                                var g = m.isFunction(a[b]) && a[b];
                                e[f[1]](function() {
                                    var a = g && g.apply(this, arguments);
                                    a && m.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                                })
                            }),
                                a = null
                        }).promise()
                    },
                    promise: function(a) {
                        return null != a ? m.extend(a, d) : d
                    }
                }
                    , e = {};
                return d.pipe = d.then,
                    m.each(b, function(a, f) {
                        var g = f[2]
                            , h = f[3];
                        d[f[1]] = g.add,
                        h && g.add(function() {
                            c = h
                        }, b[1 ^ a][2].disable, b[2][2].lock),
                            e[f[0]] = function() {
                                return e[f[0] + "With"](this === e ? d : this, arguments),
                                    this
                            }
                            ,
                            e[f[0] + "With"] = g.fireWith
                    }),
                    d.promise(e),
                a && a.call(e, e),
                    e
            },
            when: function(a) {
                var b = 0, c = d.call(arguments), e = c.length, f = 1 !== e || a && m.isFunction(a.promise) ? e : 0, g = 1 === f ? a : m.Deferred(), h = function(a, b, c) {
                    return function(e) {
                        b[a] = this,
                            c[a] = arguments.length > 1 ? d.call(arguments) : e,
                            c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)
                    }
                }, i, j, k;
                if (e > 1)
                    for (i = new Array(e),
                             j = new Array(e),
                             k = new Array(e); e > b; b++)
                        c[b] && m.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : --f;
                return f || g.resolveWith(k, c),
                    g.promise()
            }
        });
    var H;
    m.fn.ready = function(a) {
        return m.ready.promise().done(a),
            this
    }
        ,
        m.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function(a) {
                a ? m.readyWait++ : m.ready(!0)
            },
            ready: function(a) {
                if (a === !0 ? !--m.readyWait : !m.isReady) {
                    if (!y.body)
                        return setTimeout(m.ready);
                    m.isReady = !0,
                    a !== !0 && --m.readyWait > 0 || (H.resolveWith(y, [m]),
                    m.fn.triggerHandler && (m(y).triggerHandler("ready"),
                        m(y).off("ready")))
                }
            }
        });
    function I() {
        y.addEventListener ? (y.removeEventListener("DOMContentLoaded", J, !1),
            a.removeEventListener("load", J, !1)) : (y.detachEvent("onreadystatechange", J),
            a.detachEvent("onload", J))
    }
    function J() {
        (y.addEventListener || "load" === event.type || "complete" === y.readyState) && (I(),
            m.ready())
    }
    m.ready.promise = function(b) {
        if (!H)
            if (H = m.Deferred(),
                "complete" === y.readyState)
                setTimeout(m.ready);
            else if (y.addEventListener)
                y.addEventListener("DOMContentLoaded", J, !1),
                    a.addEventListener("load", J, !1);
            else {
                y.attachEvent("onreadystatechange", J),
                    a.attachEvent("onload", J);
                var c = !1;
                try {
                    c = null == a.frameElement && y.documentElement
                } catch (d) {}
                c && c.doScroll && !function e() {
                    if (!m.isReady) {
                        try {
                            c.doScroll("left")
                        } catch (a) {
                            return setTimeout(e, 50)
                        }
                        I(),
                            m.ready()
                    }
                }()
            }
        return H.promise(b)
    }
    ;
    var K = "undefined", L;
    for (L in m(k))
        break;
    k.ownLast = "0" !== L,
        k.inlineBlockNeedsLayout = !1,
        m(function() {
            var a, b, c, d;
            c = y.getElementsByTagName("body")[0],
            c && c.style && (b = y.createElement("div"),
                d = y.createElement("div"),
                d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px",
                c.appendChild(d).appendChild(b),
            typeof b.style.zoom !== K && (b.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",
                k.inlineBlockNeedsLayout = a = 3 === b.offsetWidth,
            a && (c.style.zoom = 1)),
                c.removeChild(d))
        }),
        function() {
            var a = y.createElement("div");
            if (null == k.deleteExpando) {
                k.deleteExpando = !0;
                try {
                    delete a.test
                } catch (b) {
                    k.deleteExpando = !1
                }
            }
            a = null
        }(),
        m.acceptData = function(a) {
            var b = m.noData[(a.nodeName + " ").toLowerCase()]
                , c = +a.nodeType || 1;
            return 1 !== c && 9 !== c ? !1 : !b || b !== !0 && a.getAttribute("classid") === b
        }
    ;
    var M = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
        , N = /([A-Z])/g;
    function O(a, b, c) {
        if (void 0 === c && 1 === a.nodeType) {
            var d = "data-" + b.replace(N, "-$1").toLowerCase();
            if (c = a.getAttribute(d),
                "string" == typeof c) {
                try {
                    c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : M.test(c) ? m.parseJSON(c) : c
                } catch (e) {}
                m.data(a, b, c)
            } else
                c = void 0
        }
        return c
    }
    function P(a) {
        var b;
        for (b in a)
            if (("data" !== b || !m.isEmptyObject(a[b])) && "toJSON" !== b)
                return !1;
        return !0
    }
    function Q(a, b, d, e) {
        if (m.acceptData(a)) {
            var f, g, h = m.expando, i = a.nodeType, j = i ? m.cache : a, k = i ? a[h] : a[h] && h;
            if (k && j[k] && (e || j[k].data) || void 0 !== d || "string" != typeof b)
                return k || (k = i ? a[h] = c.pop() || m.guid++ : h),
                j[k] || (j[k] = i ? {} : {
                    toJSON: m.noop
                }),
                ("object" == typeof b || "function" == typeof b) && (e ? j[k] = m.extend(j[k], b) : j[k].data = m.extend(j[k].data, b)),
                    g = j[k],
                e || (g.data || (g.data = {}),
                    g = g.data),
                void 0 !== d && (g[m.camelCase(b)] = d),
                    "string" == typeof b ? (f = g[b],
                    null == f && (f = g[m.camelCase(b)])) : f = g,
                    f
        }
    }
    function R(a, b, c) {
        if (m.acceptData(a)) {
            var d, e, f = a.nodeType, g = f ? m.cache : a, h = f ? a[m.expando] : m.expando;
            if (g[h]) {
                if (b && (d = c ? g[h] : g[h].data)) {
                    m.isArray(b) ? b = b.concat(m.map(b, m.camelCase)) : b in d ? b = [b] : (b = m.camelCase(b),
                        b = b in d ? [b] : b.split(" ")),
                        e = b.length;
                    while (e--)
                        delete d[b[e]];
                    if (c ? !P(d) : !m.isEmptyObject(d))
                        return
                }
                (c || (delete g[h].data,
                    P(g[h]))) && (f ? m.cleanData([a], !0) : k.deleteExpando || g != g.window ? delete g[h] : g[h] = null)
            }
        }
    }
    m.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(a) {
            return a = a.nodeType ? m.cache[a[m.expando]] : a[m.expando],
            !!a && !P(a)
        },
        data: function(a, b, c) {
            return Q(a, b, c)
        },
        removeData: function(a, b) {
            return R(a, b)
        },
        _data: function(a, b, c) {
            return Q(a, b, c, !0)
        },
        _removeData: function(a, b) {
            return R(a, b, !0)
        }
    }),
        m.fn.extend({
            data: function(a, b) {
                var c, d, e, f = this[0], g = f && f.attributes;
                if (void 0 === a) {
                    if (this.length && (e = m.data(f),
                        1 === f.nodeType && !m._data(f, "parsedAttrs"))) {
                        c = g.length;
                        while (c--)
                            g[c] && (d = g[c].name,
                            0 === d.indexOf("data-") && (d = m.camelCase(d.slice(5)),
                                O(f, d, e[d])));
                        m._data(f, "parsedAttrs", !0)
                    }
                    return e
                }
                return "object" == typeof a ? this.each(function() {
                    m.data(this, a)
                }) : arguments.length > 1 ? this.each(function() {
                    m.data(this, a, b)
                }) : f ? O(f, a, m.data(f, a)) : void 0
            },
            removeData: function(a) {
                return this.each(function() {
                    m.removeData(this, a)
                })
            }
        }),
        m.extend({
            queue: function(a, b, c) {
                var d;
                return a ? (b = (b || "fx") + "queue",
                    d = m._data(a, b),
                c && (!d || m.isArray(c) ? d = m._data(a, b, m.makeArray(c)) : d.push(c)),
                d || []) : void 0
            },
            dequeue: function(a, b) {
                b = b || "fx";
                var c = m.queue(a, b)
                    , d = c.length
                    , e = c.shift()
                    , f = m._queueHooks(a, b)
                    , g = function() {
                    m.dequeue(a, b)
                };
                "inprogress" === e && (e = c.shift(),
                    d--),
                e && ("fx" === b && c.unshift("inprogress"),
                    delete f.stop,
                    e.call(a, g, f)),
                !d && f && f.empty.fire()
            },
            _queueHooks: function(a, b) {
                var c = b + "queueHooks";
                return m._data(a, c) || m._data(a, c, {
                        empty: m.Callbacks("once memory").add(function() {
                            m._removeData(a, b + "queue"),
                                m._removeData(a, c)
                        })
                    })
            }
        }),
        m.fn.extend({
            queue: function(a, b) {
                var c = 2;
                return "string" != typeof a && (b = a,
                    a = "fx",
                    c--),
                    arguments.length < c ? m.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                        var c = m.queue(this, a, b);
                        m._queueHooks(this, a),
                        "fx" === a && "inprogress" !== c[0] && m.dequeue(this, a)
                    })
            },
            dequeue: function(a) {
                return this.each(function() {
                    m.dequeue(this, a)
                })
            },
            clearQueue: function(a) {
                return this.queue(a || "fx", [])
            },
            promise: function(a, b) {
                var c, d = 1, e = m.Deferred(), f = this, g = this.length, h = function() {
                    --d || e.resolveWith(f, [f])
                };
                "string" != typeof a && (b = a,
                    a = void 0),
                    a = a || "fx";
                while (g--)
                    c = m._data(f[g], a + "queueHooks"),
                    c && c.empty && (d++,
                        c.empty.add(h));
                return h(),
                    e.promise(b)
            }
        });
    var S = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
        , T = ["Top", "Right", "Bottom", "Left"]
        , U = function(a, b) {
        return a = b || a,
        "none" === m.css(a, "display") || !m.contains(a.ownerDocument, a)
    }
        , V = m.access = function(a, b, c, d, e, f, g) {
        var h = 0
            , i = a.length
            , j = null == c;
        if ("object" === m.type(c)) {
            e = !0;
            for (h in c)
                m.access(a, b, h, c[h], !0, f, g)
        } else if (void 0 !== d && (e = !0,
            m.isFunction(d) || (g = !0),
            j && (g ? (b.call(a, d),
                b = null) : (j = b,
                    b = function(a, b, c) {
                        return j.call(m(a), c)
                    }
            )),
                b))
            for (; i > h; h++)
                b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
        return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
    }
        , W = /^(?:checkbox|radio)$/i;
    !function() {
        var a = y.createElement("input")
            , b = y.createElement("div")
            , c = y.createDocumentFragment();
        if (b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
                k.leadingWhitespace = 3 === b.firstChild.nodeType,
                k.tbody = !b.getElementsByTagName("tbody").length,
                k.htmlSerialize = !!b.getElementsByTagName("link").length,
                k.html5Clone = "<:nav></:nav>" !== y.createElement("nav").cloneNode(!0).outerHTML,
                a.type = "checkbox",
                a.checked = !0,
                c.appendChild(a),
                k.appendChecked = a.checked,
                b.innerHTML = "<textarea>x</textarea>",
                k.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue,
                c.appendChild(b),
                b.innerHTML = "<input type='radio' checked='checked' name='t'/>",
                k.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked,
                k.noCloneEvent = !0,
            b.attachEvent && (b.attachEvent("onclick", function() {
                k.noCloneEvent = !1
            }),
                b.cloneNode(!0).click()),
            null == k.deleteExpando) {
            k.deleteExpando = !0;
            try {
                delete b.test
            } catch (d) {
                k.deleteExpando = !1
            }
        }
    }(),
        function() {
            var b, c, d = y.createElement("div");
            for (b in {
                submit: !0,
                change: !0,
                focusin: !0
            })
                c = "on" + b,
                (k[b + "Bubbles"] = c in a) || (d.setAttribute(c, "t"),
                    k[b + "Bubbles"] = d.attributes[c].expando === !1);
            d = null
        }();
    var X = /^(?:input|select|textarea)$/i
        , Y = /^key/
        , Z = /^(?:mouse|pointer|contextmenu)|click/
        , $ = /^(?:focusinfocus|focusoutblur)$/
        , _ = /^([^.]*)(?:\.(.+)|)$/;
    function ab() {
        return !0
    }
    function bb() {
        return !1
    }
    function cb() {
        try {
            return y.activeElement
        } catch (a) {}
    }
    m.event = {
        global: {},
        add: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, n, o, p, q, r = m._data(a);
            if (r) {
                c.handler && (i = c,
                    c = i.handler,
                    e = i.selector),
                c.guid || (c.guid = m.guid++),
                (g = r.events) || (g = r.events = {}),
                (k = r.handle) || (k = r.handle = function(a) {
                    return typeof m === K || a && m.event.triggered === a.type ? void 0 : m.event.dispatch.apply(k.elem, arguments)
                }
                    ,
                    k.elem = a),
                    b = (b || "").match(E) || [""],
                    h = b.length;
                while (h--)
                    f = _.exec(b[h]) || [],
                        o = q = f[1],
                        p = (f[2] || "").split(".").sort(),
                    o && (j = m.event.special[o] || {},
                        o = (e ? j.delegateType : j.bindType) || o,
                        j = m.event.special[o] || {},
                        l = m.extend({
                            type: o,
                            origType: q,
                            data: d,
                            handler: c,
                            guid: c.guid,
                            selector: e,
                            needsContext: e && m.expr.match.needsContext.test(e),
                            namespace: p.join(".")
                        }, i),
                    (n = g[o]) || (n = g[o] = [],
                        n.delegateCount = 0,
                    j.setup && j.setup.call(a, d, p, k) !== !1 || (a.addEventListener ? a.addEventListener(o, k, !1) : a.attachEvent && a.attachEvent("on" + o, k))),
                    j.add && (j.add.call(a, l),
                    l.handler.guid || (l.handler.guid = c.guid)),
                        e ? n.splice(n.delegateCount++, 0, l) : n.push(l),
                        m.event.global[o] = !0);
                a = null
            }
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, n, o, p, q, r = m.hasData(a) && m._data(a);
            if (r && (k = r.events)) {
                b = (b || "").match(E) || [""],
                    j = b.length;
                while (j--)
                    if (h = _.exec(b[j]) || [],
                            o = q = h[1],
                            p = (h[2] || "").split(".").sort(),
                            o) {
                        l = m.event.special[o] || {},
                            o = (d ? l.delegateType : l.bindType) || o,
                            n = k[o] || [],
                            h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                            i = f = n.length;
                        while (f--)
                            g = n[f],
                            !e && q !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (n.splice(f, 1),
                            g.selector && n.delegateCount--,
                            l.remove && l.remove.call(a, g));
                        i && !n.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || m.removeEvent(a, o, r.handle),
                            delete k[o])
                    } else
                        for (o in k)
                            m.event.remove(a, o + b[j], c, d, !0);
                m.isEmptyObject(k) && (delete r.handle,
                    m._removeData(a, "events"))
            }
        },
        trigger: function(b, c, d, e) {
            var f, g, h, i, k, l, n, o = [d || y], p = j.call(b, "type") ? b.type : b, q = j.call(b, "namespace") ? b.namespace.split(".") : [];
            if (h = l = d = d || y,
                3 !== d.nodeType && 8 !== d.nodeType && !$.test(p + m.event.triggered) && (p.indexOf(".") >= 0 && (q = p.split("."),
                    p = q.shift(),
                    q.sort()),
                    g = p.indexOf(":") < 0 && "on" + p,
                    b = b[m.expando] ? b : new m.Event(p,"object" == typeof b && b),
                    b.isTrigger = e ? 2 : 3,
                    b.namespace = q.join("."),
                    b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
                    b.result = void 0,
                b.target || (b.target = d),
                    c = null == c ? [b] : m.makeArray(c, [b]),
                    k = m.event.special[p] || {},
                e || !k.trigger || k.trigger.apply(d, c) !== !1)) {
                if (!e && !k.noBubble && !m.isWindow(d)) {
                    for (i = k.delegateType || p,
                         $.test(i + p) || (h = h.parentNode); h; h = h.parentNode)
                        o.push(h),
                            l = h;
                    l === (d.ownerDocument || y) && o.push(l.defaultView || l.parentWindow || a)
                }
                n = 0;
                while ((h = o[n++]) && !b.isPropagationStopped())
                    b.type = n > 1 ? i : k.bindType || p,
                        f = (m._data(h, "events") || {})[b.type] && m._data(h, "handle"),
                    f && f.apply(h, c),
                        f = g && h[g],
                    f && f.apply && m.acceptData(h) && (b.result = f.apply(h, c),
                    b.result === !1 && b.preventDefault());
                if (b.type = p,
                    !e && !b.isDefaultPrevented() && (!k._default || k._default.apply(o.pop(), c) === !1) && m.acceptData(d) && g && d[p] && !m.isWindow(d)) {
                    l = d[g],
                    l && (d[g] = null),
                        m.event.triggered = p;
                    try {
                        d[p]()
                    } catch (r) {}
                    m.event.triggered = void 0,
                    l && (d[g] = l)
                }
                return b.result
            }
        },
        dispatch: function(a) {
            a = m.event.fix(a);
            var b, c, e, f, g, h = [], i = d.call(arguments), j = (m._data(this, "events") || {})[a.type] || [], k = m.event.special[a.type] || {};
            if (i[0] = a,
                    a.delegateTarget = this,
                !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                h = m.event.handlers.call(this, a, j),
                    b = 0;
                while ((f = h[b++]) && !a.isPropagationStopped()) {
                    a.currentTarget = f.elem,
                        g = 0;
                    while ((e = f.handlers[g++]) && !a.isImmediatePropagationStopped())
                        (!a.namespace_re || a.namespace_re.test(e.namespace)) && (a.handleObj = e,
                            a.data = e.data,
                            c = ((m.event.special[e.origType] || {}).handle || e.handler).apply(f.elem, i),
                        void 0 !== c && (a.result = c) === !1 && (a.preventDefault(),
                            a.stopPropagation()))
                }
                return k.postDispatch && k.postDispatch.call(this, a),
                    a.result
            }
        },
        handlers: function(a, b) {
            var c, d, e, f, g = [], h = b.delegateCount, i = a.target;
            if (h && i.nodeType && (!a.button || "click" !== a.type))
                for (; i != this; i = i.parentNode || this)
                    if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
                        for (e = [],
                                 f = 0; h > f; f++)
                            d = b[f],
                                c = d.selector + " ",
                            void 0 === e[c] && (e[c] = d.needsContext ? m(c, this).index(i) >= 0 : m.find(c, this, null, [i]).length),
                            e[c] && e.push(d);
                        e.length && g.push({
                            elem: i,
                            handlers: e
                        })
                    }
            return h < b.length && g.push({
                elem: this,
                handlers: b.slice(h)
            }),
                g
        },
        fix: function(a) {
            if (a[m.expando])
                return a;
            var b, c, d, e = a.type, f = a, g = this.fixHooks[e];
            g || (this.fixHooks[e] = g = Z.test(e) ? this.mouseHooks : Y.test(e) ? this.keyHooks : {}),
                d = g.props ? this.props.concat(g.props) : this.props,
                a = new m.Event(f),
                b = d.length;
            while (b--)
                c = d[b],
                    a[c] = f[c];
            return a.target || (a.target = f.srcElement || y),
            3 === a.target.nodeType && (a.target = a.target.parentNode),
                a.metaKey = !!a.metaKey,
                g.filter ? g.filter(a, f) : a
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode),
                    a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, b) {
                var c, d, e, f = b.button, g = b.fromElement;
                return null == a.pageX && null != b.clientX && (d = a.target.ownerDocument || y,
                    e = d.documentElement,
                    c = d.body,
                    a.pageX = b.clientX + (e && e.scrollLeft || c && c.scrollLeft || 0) - (e && e.clientLeft || c && c.clientLeft || 0),
                    a.pageY = b.clientY + (e && e.scrollTop || c && c.scrollTop || 0) - (e && e.clientTop || c && c.clientTop || 0)),
                !a.relatedTarget && g && (a.relatedTarget = g === a.target ? b.toElement : g),
                a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0),
                    a
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== cb() && this.focus)
                        try {
                            return this.focus(),
                                !1
                        } catch (a) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === cb() && this.blur ? (this.blur(),
                        !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return m.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(),
                        !1) : void 0
                },
                _default: function(a) {
                    return m.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        },
        simulate: function(a, b, c, d) {
            var e = m.extend(new m.Event, c, {
                type: a,
                isSimulated: !0,
                originalEvent: {}
            });
            d ? m.event.trigger(e, null, b) : m.event.dispatch.call(b, e),
            e.isDefaultPrevented() && c.preventDefault()
        }
    },
        m.removeEvent = y.removeEventListener ? function(a, b, c) {
            a.removeEventListener && a.removeEventListener(b, c, !1)
        }
            : function(a, b, c) {
            var d = "on" + b;
            a.detachEvent && (typeof a[d] === K && (a[d] = null),
                a.detachEvent(d, c))
        }
        ,
        m.Event = function(a, b) {
            return this instanceof m.Event ? (a && a.type ? (this.originalEvent = a,
                this.type = a.type,
                this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? ab : bb) : this.type = a,
            b && m.extend(this, b),
                this.timeStamp = a && a.timeStamp || m.now(),
                void (this[m.expando] = !0)) : new m.Event(a,b)
        }
        ,
        m.Event.prototype = {
            isDefaultPrevented: bb,
            isPropagationStopped: bb,
            isImmediatePropagationStopped: bb,
            preventDefault: function() {
                var a = this.originalEvent;
                this.isDefaultPrevented = ab,
                a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
            },
            stopPropagation: function() {
                var a = this.originalEvent;
                this.isPropagationStopped = ab,
                a && (a.stopPropagation && a.stopPropagation(),
                    a.cancelBubble = !0)
            },
            stopImmediatePropagation: function() {
                var a = this.originalEvent;
                this.isImmediatePropagationStopped = ab,
                a && a.stopImmediatePropagation && a.stopImmediatePropagation(),
                    this.stopPropagation()
            }
        },
        m.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(a, b) {
            m.event.special[a] = {
                delegateType: b,
                bindType: b,
                handle: function(a) {
                    var c, d = this, e = a.relatedTarget, f = a.handleObj;
                    return (!e || e !== d && !m.contains(d, e)) && (a.type = f.origType,
                        c = f.handler.apply(this, arguments),
                        a.type = b),
                        c
                }
            }
        }),
    k.submitBubbles || (m.event.special.submit = {
        setup: function() {
            return m.nodeName(this, "form") ? !1 : void m.event.add(this, "click._submit keypress._submit", function(a) {
                var b = a.target
                    , c = m.nodeName(b, "input") || m.nodeName(b, "button") ? b.form : void 0;
                c && !m._data(c, "submitBubbles") && (m.event.add(c, "submit._submit", function(a) {
                    a._submit_bubble = !0
                }),
                    m._data(c, "submitBubbles", !0))
            })
        },
        postDispatch: function(a) {
            a._submit_bubble && (delete a._submit_bubble,
            this.parentNode && !a.isTrigger && m.event.simulate("submit", this.parentNode, a, !0))
        },
        teardown: function() {
            return m.nodeName(this, "form") ? !1 : void m.event.remove(this, "._submit")
        }
    }),
    k.changeBubbles || (m.event.special.change = {
        setup: function() {
            return X.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (m.event.add(this, "propertychange._change", function(a) {
                "checked" === a.originalEvent.propertyName && (this._just_changed = !0)
            }),
                m.event.add(this, "click._change", function(a) {
                    this._just_changed && !a.isTrigger && (this._just_changed = !1),
                        m.event.simulate("change", this, a, !0)
                })),
                !1) : void m.event.add(this, "beforeactivate._change", function(a) {
                var b = a.target;
                X.test(b.nodeName) && !m._data(b, "changeBubbles") && (m.event.add(b, "change._change", function(a) {
                    !this.parentNode || a.isSimulated || a.isTrigger || m.event.simulate("change", this.parentNode, a, !0)
                }),
                    m._data(b, "changeBubbles", !0))
            })
        },
        handle: function(a) {
            var b = a.target;
            return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function() {
            return m.event.remove(this, "._change"),
                !X.test(this.nodeName)
        }
    }),
    k.focusinBubbles || m.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = function(a) {
            m.event.simulate(b, a.target, m.event.fix(a), !0)
        };
        m.event.special[b] = {
            setup: function() {
                var d = this.ownerDocument || this
                    , e = m._data(d, b);
                e || d.addEventListener(a, c, !0),
                    m._data(d, b, (e || 0) + 1)
            },
            teardown: function() {
                var d = this.ownerDocument || this
                    , e = m._data(d, b) - 1;
                e ? m._data(d, b, e) : (d.removeEventListener(a, c, !0),
                    m._removeData(d, b))
            }
        }
    }),
        m.fn.extend({
            on: function(a, b, c, d, e) {
                var f, g;
                if ("object" == typeof a) {
                    "string" != typeof b && (c = c || b,
                        b = void 0);
                    for (f in a)
                        this.on(f, b, c, a[f], e);
                    return this
                }
                if (null == c && null == d ? (d = b,
                        c = b = void 0) : null == d && ("string" == typeof b ? (d = c,
                        c = void 0) : (d = c,
                        c = b,
                        b = void 0)),
                    d === !1)
                    d = bb;
                else if (!d)
                    return this;
                return 1 === e && (g = d,
                    d = function(a) {
                        return m().off(a),
                            g.apply(this, arguments)
                    }
                    ,
                    d.guid = g.guid || (g.guid = m.guid++)),
                    this.each(function() {
                        m.event.add(this, a, d, c, b)
                    })
            },
            one: function(a, b, c, d) {
                return this.on(a, b, c, d, 1)
            },
            off: function(a, b, c) {
                var d, e;
                if (a && a.preventDefault && a.handleObj)
                    return d = a.handleObj,
                        m(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler),
                        this;
                if ("object" == typeof a) {
                    for (e in a)
                        this.off(e, b, a[e]);
                    return this
                }
                return (b === !1 || "function" == typeof b) && (c = b,
                    b = void 0),
                c === !1 && (c = bb),
                    this.each(function() {
                        m.event.remove(this, a, c, b)
                    })
            },
            trigger: function(a, b) {
                return this.each(function() {
                    m.event.trigger(a, b, this)
                })
            },
            triggerHandler: function(a, b) {
                var c = this[0];
                return c ? m.event.trigger(a, b, c, !0) : void 0
            }
        });
    function db(a) {
        var b = eb.split("|")
            , c = a.createDocumentFragment();
        if (c.createElement)
            while (b.length)
                c.createElement(b.pop());
        return c
    }
    var eb = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video"
        , fb = / jQuery\d+="(?:null|\d+)"/g
        , gb = new RegExp("<(?:" + eb + ")[\\s/>]","i")
        , hb = /^\s+/
        , ib = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi
        , jb = /<([\w:]+)/
        , kb = /<tbody/i
        , lb = /<|&#?\w+;/
        , mb = /<(?:script|style|link)/i
        , nb = /checked\s*(?:[^=]|=\s*.checked.)/i
        , ob = /^$|\/(?:java|ecma)script/i
        , pb = /^true\/(.*)/
        , qb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g
        , rb = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: k.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    }
        , sb = db(y)
        , tb = sb.appendChild(y.createElement("div"));
    rb.optgroup = rb.option,
        rb.tbody = rb.tfoot = rb.colgroup = rb.caption = rb.thead,
        rb.th = rb.td;
    function ub(a, b) {
        var c, d, e = 0, f = typeof a.getElementsByTagName !== K ? a.getElementsByTagName(b || "*") : typeof a.querySelectorAll !== K ? a.querySelectorAll(b || "*") : void 0;
        if (!f)
            for (f = [],
                     c = a.childNodes || a; null != (d = c[e]); e++)
                !b || m.nodeName(d, b) ? f.push(d) : m.merge(f, ub(d, b));
        return void 0 === b || b && m.nodeName(a, b) ? m.merge([a], f) : f
    }
    function vb(a) {
        W.test(a.type) && (a.defaultChecked = a.checked)
    }
    function wb(a, b) {
        return m.nodeName(a, "table") && m.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }
    function xb(a) {
        return a.type = (null !== m.find.attr(a, "type")) + "/" + a.type,
            a
    }
    function yb(a) {
        var b = pb.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"),
            a
    }
    function zb(a, b) {
        for (var c, d = 0; null != (c = a[d]); d++)
            m._data(c, "globalEval", !b || m._data(b[d], "globalEval"))
    }
    function Ab(a, b) {
        if (1 === b.nodeType && m.hasData(a)) {
            var c, d, e, f = m._data(a), g = m._data(b, f), h = f.events;
            if (h) {
                delete g.handle,
                    g.events = {};
                for (c in h)
                    for (d = 0,
                             e = h[c].length; e > d; d++)
                        m.event.add(b, c, h[c][d])
            }
            g.data && (g.data = m.extend({}, g.data))
        }
    }
    function Bb(a, b) {
        var c, d, e;
        if (1 === b.nodeType) {
            if (c = b.nodeName.toLowerCase(),
                !k.noCloneEvent && b[m.expando]) {
                e = m._data(b);
                for (d in e.events)
                    m.removeEvent(b, d, e.handle);
                b.removeAttribute(m.expando)
            }
            "script" === c && b.text !== a.text ? (xb(b).text = a.text,
                yb(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML),
            k.html5Clone && a.innerHTML && !m.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && W.test(a.type) ? (b.defaultChecked = b.checked = a.checked,
            b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
        }
    }
    m.extend({
        clone: function(a, b, c) {
            var d, e, f, g, h, i = m.contains(a.ownerDocument, a);
            if (k.html5Clone || m.isXMLDoc(a) || !gb.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (tb.innerHTML = a.outerHTML,
                    tb.removeChild(f = tb.firstChild)),
                    !(k.noCloneEvent && k.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || m.isXMLDoc(a)))
                for (d = ub(f),
                         h = ub(a),
                         g = 0; null != (e = h[g]); ++g)
                    d[g] && Bb(e, d[g]);
            if (b)
                if (c)
                    for (h = h || ub(a),
                             d = d || ub(f),
                             g = 0; null != (e = h[g]); g++)
                        Ab(e, d[g]);
                else
                    Ab(a, f);
            return d = ub(f, "script"),
            d.length > 0 && zb(d, !i && ub(a, "script")),
                d = h = e = null,
                f
        },
        buildFragment: function(a, b, c, d) {
            for (var e, f, g, h, i, j, l, n = a.length, o = db(b), p = [], q = 0; n > q; q++)
                if (f = a[q],
                    f || 0 === f)
                    if ("object" === m.type(f))
                        m.merge(p, f.nodeType ? [f] : f);
                    else if (lb.test(f)) {
                        h = h || o.appendChild(b.createElement("div")),
                            i = (jb.exec(f) || ["", ""])[1].toLowerCase(),
                            l = rb[i] || rb._default,
                            h.innerHTML = l[1] + f.replace(ib, "<$1></$2>") + l[2],
                            e = l[0];
                        while (e--)
                            h = h.lastChild;
                        if (!k.leadingWhitespace && hb.test(f) && p.push(b.createTextNode(hb.exec(f)[0])),
                                !k.tbody) {
                            f = "table" !== i || kb.test(f) ? "<table>" !== l[1] || kb.test(f) ? 0 : h : h.firstChild,
                                e = f && f.childNodes.length;
                            while (e--)
                                m.nodeName(j = f.childNodes[e], "tbody") && !j.childNodes.length && f.removeChild(j)
                        }
                        m.merge(p, h.childNodes),
                            h.textContent = "";
                        while (h.firstChild)
                            h.removeChild(h.firstChild);
                        h = o.lastChild
                    } else
                        p.push(b.createTextNode(f));
            h && o.removeChild(h),
            k.appendChecked || m.grep(ub(p, "input"), vb),
                q = 0;
            while (f = p[q++])
                if ((!d || -1 === m.inArray(f, d)) && (g = m.contains(f.ownerDocument, f),
                        h = ub(o.appendChild(f), "script"),
                    g && zb(h),
                        c)) {
                    e = 0;
                    while (f = h[e++])
                        ob.test(f.type || "") && c.push(f)
                }
            return h = null,
                o
        },
        cleanData: function(a, b) {
            for (var d, e, f, g, h = 0, i = m.expando, j = m.cache, l = k.deleteExpando, n = m.event.special; null != (d = a[h]); h++)
                if ((b || m.acceptData(d)) && (f = d[i],
                        g = f && j[f])) {
                    if (g.events)
                        for (e in g.events)
                            n[e] ? m.event.remove(d, e) : m.removeEvent(d, e, g.handle);
                    j[f] && (delete j[f],
                        l ? delete d[i] : typeof d.removeAttribute !== K ? d.removeAttribute(i) : d[i] = null,
                        c.push(f))
                }
        }
    }),
        m.fn.extend({
            text: function(a) {
                return V(this, function(a) {
                    return void 0 === a ? m.text(this) : this.empty().append((this[0] && this[0].ownerDocument || y).createTextNode(a))
                }, null, a, arguments.length)
            },
            append: function() {
                return this.domManip(arguments, function(a) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var b = wb(this, a);
                        b.appendChild(a)
                    }
                })
            },
            prepend: function() {
                return this.domManip(arguments, function(a) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var b = wb(this, a);
                        b.insertBefore(a, b.firstChild)
                    }
                })
            },
            before: function() {
                return this.domManip(arguments, function(a) {
                    this.parentNode && this.parentNode.insertBefore(a, this)
                })
            },
            after: function() {
                return this.domManip(arguments, function(a) {
                    this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
                })
            },
            remove: function(a, b) {
                for (var c, d = a ? m.filter(a, this) : this, e = 0; null != (c = d[e]); e++)
                    b || 1 !== c.nodeType || m.cleanData(ub(c)),
                    c.parentNode && (b && m.contains(c.ownerDocument, c) && zb(ub(c, "script")),
                        c.parentNode.removeChild(c));
                return this
            },
            empty: function() {
                for (var a, b = 0; null != (a = this[b]); b++) {
                    1 === a.nodeType && m.cleanData(ub(a, !1));
                    while (a.firstChild)
                        a.removeChild(a.firstChild);
                    a.options && m.nodeName(a, "select") && (a.options.length = 0)
                }
                return this
            },
            clone: function(a, b) {
                return a = null == a ? !1 : a,
                    b = null == b ? a : b,
                    this.map(function() {
                        return m.clone(this, a, b)
                    })
            },
            html: function(a) {
                return V(this, function(a) {
                    var b = this[0] || {}
                        , c = 0
                        , d = this.length;
                    if (void 0 === a)
                        return 1 === b.nodeType ? b.innerHTML.replace(fb, "") : void 0;
                    if (!("string" != typeof a || mb.test(a) || !k.htmlSerialize && gb.test(a) || !k.leadingWhitespace && hb.test(a) || rb[(jb.exec(a) || ["", ""])[1].toLowerCase()])) {
                        a = a.replace(ib, "<$1></$2>");
                        try {
                            for (; d > c; c++)
                                b = this[c] || {},
                                1 === b.nodeType && (m.cleanData(ub(b, !1)),
                                    b.innerHTML = a);
                            b = 0
                        } catch (e) {}
                    }
                    b && this.empty().append(a)
                }, null, a, arguments.length)
            },
            replaceWith: function() {
                var a = arguments[0];
                return this.domManip(arguments, function(b) {
                    a = this.parentNode,
                        m.cleanData(ub(this)),
                    a && a.replaceChild(b, this)
                }),
                    a && (a.length || a.nodeType) ? this : this.remove()
            },
            detach: function(a) {
                return this.remove(a, !0)
            },
            domManip: function(a, b) {
                a = e.apply([], a);
                var c, d, f, g, h, i, j = 0, l = this.length, n = this, o = l - 1, p = a[0], q = m.isFunction(p);
                if (q || l > 1 && "string" == typeof p && !k.checkClone && nb.test(p))
                    return this.each(function(c) {
                        var d = n.eq(c);
                        q && (a[0] = p.call(this, c, d.html())),
                            d.domManip(a, b)
                    });
                if (l && (i = m.buildFragment(a, this[0].ownerDocument, !1, this),
                        c = i.firstChild,
                    1 === i.childNodes.length && (i = c),
                        c)) {
                    for (g = m.map(ub(i, "script"), xb),
                             f = g.length; l > j; j++)
                        d = i,
                        j !== o && (d = m.clone(d, !0, !0),
                        f && m.merge(g, ub(d, "script"))),
                            b.call(this[j], d, j);
                    if (f)
                        for (h = g[g.length - 1].ownerDocument,
                                 m.map(g, yb),
                                 j = 0; f > j; j++)
                            d = g[j],
                            ob.test(d.type || "") && !m._data(d, "globalEval") && m.contains(h, d) && (d.src ? m._evalUrl && m._evalUrl(d.src) : m.globalEval((d.text || d.textContent || d.innerHTML || "").replace(qb, "")));
                    i = c = null
                }
                return this
            }
        }),
        m.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(a, b) {
            m.fn[a] = function(a) {
                for (var c, d = 0, e = [], g = m(a), h = g.length - 1; h >= d; d++)
                    c = d === h ? this : this.clone(!0),
                        m(g[d])[b](c),
                        f.apply(e, c.get());
                return this.pushStack(e)
            }
        });
    var Cb, Db = {};
    function Eb(b, c) {
        var d, e = m(c.createElement(b)).appendTo(c.body), f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : m.css(e[0], "display");
        return e.detach(),
            f
    }
    function Fb(a) {
        var b = y
            , c = Db[a];
        return c || (c = Eb(a, b),
        "none" !== c && c || (Cb = (Cb || m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),
            b = (Cb[0].contentWindow || Cb[0].contentDocument).document,
            b.write(),
            b.close(),
            c = Eb(a, b),
            Cb.detach()),
            Db[a] = c),
            c
    }
    !function() {
        var a;
        k.shrinkWrapBlocks = function() {
            if (null != a)
                return a;
            a = !1;
            var b, c, d;
            return c = y.getElementsByTagName("body")[0],
                c && c.style ? (b = y.createElement("div"),
                    d = y.createElement("div"),
                    d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px",
                    c.appendChild(d).appendChild(b),
                typeof b.style.zoom !== K && (b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",
                    b.appendChild(y.createElement("div")).style.width = "5px",
                    a = 3 !== b.offsetWidth),
                    c.removeChild(d),
                    a) : void 0
        }
    }();
    var Gb = /^margin/, Hb = new RegExp("^(" + S + ")(?!px)[a-z%]+$","i"), Ib, Jb, Kb = /^(top|right|bottom|left)$/;
    a.getComputedStyle ? (Ib = function(a) {
            return a.ownerDocument.defaultView.getComputedStyle(a, null)
        }
            ,
            Jb = function(a, b, c) {
                var d, e, f, g, h = a.style;
                return c = c || Ib(a),
                    g = c ? c.getPropertyValue(b) || c[b] : void 0,
                c && ("" !== g || m.contains(a.ownerDocument, a) || (g = m.style(a, b)),
                Hb.test(g) && Gb.test(b) && (d = h.width,
                    e = h.minWidth,
                    f = h.maxWidth,
                    h.minWidth = h.maxWidth = h.width = g,
                    g = c.width,
                    h.width = d,
                    h.minWidth = e,
                    h.maxWidth = f)),
                    void 0 === g ? g : g + ""
            }
    ) : y.documentElement.currentStyle && (Ib = function(a) {
            return a.currentStyle
        }
            ,
            Jb = function(a, b, c) {
                var d, e, f, g, h = a.style;
                return c = c || Ib(a),
                    g = c ? c[b] : void 0,
                null == g && h && h[b] && (g = h[b]),
                Hb.test(g) && !Kb.test(b) && (d = h.left,
                    e = a.runtimeStyle,
                    f = e && e.left,
                f && (e.left = a.currentStyle.left),
                    h.left = "fontSize" === b ? "1em" : g,
                    g = h.pixelLeft + "px",
                    h.left = d,
                f && (e.left = f)),
                    void 0 === g ? g : g + "" || "auto"
            }
    );
    function Lb(a, b) {
        return {
            get: function() {
                var c = a();
                if (null != c)
                    return c ? void delete this.get : (this.get = b).apply(this, arguments)
            }
        }
    }
    !function() {
        var b, c, d, e, f, g, h;
        if (b = y.createElement("div"),
                b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
                d = b.getElementsByTagName("a")[0],
                c = d && d.style) {
            c.cssText = "float:left;opacity:.5",
                k.opacity = "0.5" === c.opacity,
                k.cssFloat = !!c.cssFloat,
                b.style.backgroundClip = "content-box",
                b.cloneNode(!0).style.backgroundClip = "",
                k.clearCloneStyle = "content-box" === b.style.backgroundClip,
                k.boxSizing = "" === c.boxSizing || "" === c.MozBoxSizing || "" === c.WebkitBoxSizing,
                m.extend(k, {
                    reliableHiddenOffsets: function() {
                        return null == g && i(),
                            g
                    },
                    boxSizingReliable: function() {
                        return null == f && i(),
                            f
                    },
                    pixelPosition: function() {
                        return null == e && i(),
                            e
                    },
                    reliableMarginRight: function() {
                        return null == h && i(),
                            h
                    }
                });
            function i() {
                var b, c, d, i;
                c = y.getElementsByTagName("body")[0],
                c && c.style && (b = y.createElement("div"),
                    d = y.createElement("div"),
                    d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px",
                    c.appendChild(d).appendChild(b),
                    b.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",
                    e = f = !1,
                    h = !0,
                a.getComputedStyle && (e = "1%" !== (a.getComputedStyle(b, null) || {}).top,
                    f = "4px" === (a.getComputedStyle(b, null) || {
                            width: "4px"
                        }).width,
                    i = b.appendChild(y.createElement("div")),
                    i.style.cssText = b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",
                    i.style.marginRight = i.style.width = "0",
                    b.style.width = "1px",
                    h = !parseFloat((a.getComputedStyle(i, null) || {}).marginRight)),
                    b.innerHTML = "<table><tr><td></td><td>t</td></tr></table>",
                    i = b.getElementsByTagName("td"),
                    i[0].style.cssText = "margin:0;border:0;padding:0;display:none",
                    g = 0 === i[0].offsetHeight,
                g && (i[0].style.display = "",
                    i[1].style.display = "none",
                    g = 0 === i[0].offsetHeight),
                    c.removeChild(d))
            }
        }
    }(),
        m.swap = function(a, b, c, d) {
            var e, f, g = {};
            for (f in b)
                g[f] = a.style[f],
                    a.style[f] = b[f];
            e = c.apply(a, d || []);
            for (f in b)
                a.style[f] = g[f];
            return e
        }
    ;
    var Mb = /alpha\([^)]*\)/i
        , Nb = /opacity\s*=\s*([^)]*)/
        , Ob = /^(none|table(?!-c[ea]).+)/
        , Pb = new RegExp("^(" + S + ")(.*)$","i")
        , Qb = new RegExp("^([+-])=(" + S + ")","i")
        , Rb = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
        , Sb = {
        letterSpacing: "0",
        fontWeight: "400"
    }
        , Tb = ["Webkit", "O", "Moz", "ms"];
    function Ub(a, b) {
        if (b in a)
            return b;
        var c = b.charAt(0).toUpperCase() + b.slice(1)
            , d = b
            , e = Tb.length;
        while (e--)
            if (b = Tb[e] + c,
                b in a)
                return b;
        return d
    }
    function Vb(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++)
            d = a[g],
            d.style && (f[g] = m._data(d, "olddisplay"),
                c = d.style.display,
                b ? (f[g] || "none" !== c || (d.style.display = ""),
                "" === d.style.display && U(d) && (f[g] = m._data(d, "olddisplay", Fb(d.nodeName)))) : (e = U(d),
                (c && "none" !== c || !e) && m._data(d, "olddisplay", e ? c : m.css(d, "display"))));
        for (g = 0; h > g; g++)
            d = a[g],
            d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a
    }
    function Wb(a, b, c) {
        var d = Pb.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }
    function Xb(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2)
            "margin" === c && (g += m.css(a, c + T[f], !0, e)),
                d ? ("content" === c && (g -= m.css(a, "padding" + T[f], !0, e)),
                "margin" !== c && (g -= m.css(a, "border" + T[f] + "Width", !0, e))) : (g += m.css(a, "padding" + T[f], !0, e),
                "padding" !== c && (g += m.css(a, "border" + T[f] + "Width", !0, e)));
        return g
    }
    function Yb(a, b, c) {
        var d = !0
            , e = "width" === b ? a.offsetWidth : a.offsetHeight
            , f = Ib(a)
            , g = k.boxSizing && "border-box" === m.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = Jb(a, b, f),
                (0 > e || null == e) && (e = a.style[b]),
                    Hb.test(e))
                return e;
            d = g && (k.boxSizingReliable() || e === a.style[b]),
                e = parseFloat(e) || 0
        }
        return e + Xb(a, b, c || (g ? "border" : "content"), d, f) + "px"
    }
    m.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = Jb(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": k.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = m.camelCase(b), i = a.style;
                if (b = m.cssProps[h] || (m.cssProps[h] = Ub(i, h)),
                        g = m.cssHooks[b] || m.cssHooks[h],
                    void 0 === c)
                    return g && "get"in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b];
                if (f = typeof c,
                    "string" === f && (e = Qb.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(m.css(a, b)),
                        f = "number"),
                    null != c && c === c && ("number" !== f || m.cssNumber[h] || (c += "px"),
                    k.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"),
                        !(g && "set"in g && void 0 === (c = g.set(a, c, d)))))
                    try {
                        i[b] = c
                    } catch (j) {}
            }
        },
        css: function(a, b, c, d) {
            var e, f, g, h = m.camelCase(b);
            return b = m.cssProps[h] || (m.cssProps[h] = Ub(a.style, h)),
                g = m.cssHooks[b] || m.cssHooks[h],
            g && "get"in g && (f = g.get(a, !0, c)),
            void 0 === f && (f = Jb(a, b, d)),
            "normal" === f && b in Sb && (f = Sb[b]),
                "" === c || c ? (e = parseFloat(f),
                    c === !0 || m.isNumeric(e) ? e || 0 : f) : f
        }
    }),
        m.each(["height", "width"], function(a, b) {
            m.cssHooks[b] = {
                get: function(a, c, d) {
                    return c ? Ob.test(m.css(a, "display")) && 0 === a.offsetWidth ? m.swap(a, Rb, function() {
                        return Yb(a, b, d)
                    }) : Yb(a, b, d) : void 0
                },
                set: function(a, c, d) {
                    var e = d && Ib(a);
                    return Wb(a, c, d ? Xb(a, b, d, k.boxSizing && "border-box" === m.css(a, "boxSizing", !1, e), e) : 0)
                }
            }
        }),
    k.opacity || (m.cssHooks.opacity = {
        get: function(a, b) {
            return Nb.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
        },
        set: function(a, b) {
            var c = a.style
                , d = a.currentStyle
                , e = m.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : ""
                , f = d && d.filter || c.filter || "";
            c.zoom = 1,
            (b >= 1 || "" === b) && "" === m.trim(f.replace(Mb, "")) && c.removeAttribute && (c.removeAttribute("filter"),
            "" === b || d && !d.filter) || (c.filter = Mb.test(f) ? f.replace(Mb, e) : f + " " + e)
        }
    }),
        m.cssHooks.marginRight = Lb(k.reliableMarginRight, function(a, b) {
            return b ? m.swap(a, {
                display: "inline-block"
            }, Jb, [a, "marginRight"]) : void 0
        }),
        m.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(a, b) {
            m.cssHooks[a + b] = {
                expand: function(c) {
                    for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++)
                        e[a + T[d] + b] = f[d] || f[d - 2] || f[0];
                    return e
                }
            },
            Gb.test(a) || (m.cssHooks[a + b].set = Wb)
        }),
        m.fn.extend({
            css: function(a, b) {
                return V(this, function(a, b, c) {
                    var d, e, f = {}, g = 0;
                    if (m.isArray(b)) {
                        for (d = Ib(a),
                                 e = b.length; e > g; g++)
                            f[b[g]] = m.css(a, b[g], !1, d);
                        return f
                    }
                    return void 0 !== c ? m.style(a, b, c) : m.css(a, b)
                }, a, b, arguments.length > 1)
            },
            show: function() {
                return Vb(this, !0)
            },
            hide: function() {
                return Vb(this)
            },
            toggle: function(a) {
                return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                    U(this) ? m(this).show() : m(this).hide()
                })
            }
        });
    function Zb(a, b, c, d, e) {
        return new Zb.prototype.init(a,b,c,d,e)
    }
    m.Tween = Zb,
        Zb.prototype = {
            constructor: Zb,
            init: function(a, b, c, d, e, f) {
                this.elem = a,
                    this.prop = c,
                    this.easing = e || "swing",
                    this.options = b,
                    this.start = this.now = this.cur(),
                    this.end = d,
                    this.unit = f || (m.cssNumber[c] ? "" : "px")
            },
            cur: function() {
                var a = Zb.propHooks[this.prop];
                return a && a.get ? a.get(this) : Zb.propHooks._default.get(this)
            },
            run: function(a) {
                var b, c = Zb.propHooks[this.prop];
                return this.pos = b = this.options.duration ? m.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a,
                    this.now = (this.end - this.start) * b + this.start,
                this.options.step && this.options.step.call(this.elem, this.now, this),
                    c && c.set ? c.set(this) : Zb.propHooks._default.set(this),
                    this
            }
        },
        Zb.prototype.init.prototype = Zb.prototype,
        Zb.propHooks = {
            _default: {
                get: function(a) {
                    var b;
                    return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = m.css(a.elem, a.prop, ""),
                        b && "auto" !== b ? b : 0) : a.elem[a.prop]
                },
                set: function(a) {
                    m.fx.step[a.prop] ? m.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[m.cssProps[a.prop]] || m.cssHooks[a.prop]) ? m.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
                }
            }
        },
        Zb.propHooks.scrollTop = Zb.propHooks.scrollLeft = {
            set: function(a) {
                a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
            }
        },
        m.easing = {
            linear: function(a) {
                return a
            },
            swing: function(a) {
                return .5 - Math.cos(a * Math.PI) / 2
            }
        },
        m.fx = Zb.prototype.init,
        m.fx.step = {};
    var $b, _b, ac = /^(?:toggle|show|hide)$/, bc = new RegExp("^(?:([+-])=|)(" + S + ")([a-z%]*)$","i"), cc = /queueHooks$/, dc = [ic], ec = {
        "*": [function(a, b) {
            var c = this.createTween(a, b)
                , d = c.cur()
                , e = bc.exec(b)
                , f = e && e[3] || (m.cssNumber[a] ? "" : "px")
                , g = (m.cssNumber[a] || "px" !== f && +d) && bc.exec(m.css(c.elem, a))
                , h = 1
                , i = 20;
            if (g && g[3] !== f) {
                f = f || g[3],
                    e = e || [],
                    g = +d || 1;
                do
                    h = h || ".5",
                        g /= h,
                        m.style(c.elem, a, g + f);
                while (h !== (h = c.cur() / d) && 1 !== h && --i)
            }
            return e && (g = c.start = +g || +d || 0,
                c.unit = f,
                c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]),
                c
        }
        ]
    };
    function fc() {
        return setTimeout(function() {
            $b = void 0
        }),
            $b = m.now()
    }
    function gc(a, b) {
        var c, d = {
            height: a
        }, e = 0;
        for (b = b ? 1 : 0; 4 > e; e += 2 - b)
            c = T[e],
                d["margin" + c] = d["padding" + c] = a;
        return b && (d.opacity = d.width = a),
            d
    }
    function hc(a, b, c) {
        for (var d, e = (ec[b] || []).concat(ec["*"]), f = 0, g = e.length; g > f; f++)
            if (d = e[f].call(c, b, a))
                return d
    }
    function ic(a, b, c) {
        var d, e, f, g, h, i, j, l, n = this, o = {}, p = a.style, q = a.nodeType && U(a), r = m._data(a, "fxshow");
        c.queue || (h = m._queueHooks(a, "fx"),
        null == h.unqueued && (h.unqueued = 0,
                i = h.empty.fire,
                h.empty.fire = function() {
                    h.unqueued || i()
                }
        ),
            h.unqueued++,
            n.always(function() {
                n.always(function() {
                    h.unqueued--,
                    m.queue(a, "fx").length || h.empty.fire()
                })
            })),
        1 === a.nodeType && ("height"in b || "width"in b) && (c.overflow = [p.overflow, p.overflowX, p.overflowY],
            j = m.css(a, "display"),
            l = "none" === j ? m._data(a, "olddisplay") || Fb(a.nodeName) : j,
        "inline" === l && "none" === m.css(a, "float") && (k.inlineBlockNeedsLayout && "inline" !== Fb(a.nodeName) ? p.zoom = 1 : p.display = "inline-block")),
        c.overflow && (p.overflow = "hidden",
        k.shrinkWrapBlocks() || n.always(function() {
            p.overflow = c.overflow[0],
                p.overflowX = c.overflow[1],
                p.overflowY = c.overflow[2]
        }));
        for (d in b)
            if (e = b[d],
                    ac.exec(e)) {
                if (delete b[d],
                        f = f || "toggle" === e,
                    e === (q ? "hide" : "show")) {
                    if ("show" !== e || !r || void 0 === r[d])
                        continue;
                    q = !0
                }
                o[d] = r && r[d] || m.style(a, d)
            } else
                j = void 0;
        if (m.isEmptyObject(o))
            "inline" === ("none" === j ? Fb(a.nodeName) : j) && (p.display = j);
        else {
            r ? "hidden"in r && (q = r.hidden) : r = m._data(a, "fxshow", {}),
            f && (r.hidden = !q),
                q ? m(a).show() : n.done(function() {
                    m(a).hide()
                }),
                n.done(function() {
                    var b;
                    m._removeData(a, "fxshow");
                    for (b in o)
                        m.style(a, b, o[b])
                });
            for (d in o)
                g = hc(q ? r[d] : 0, d, n),
                d in r || (r[d] = g.start,
                q && (g.end = g.start,
                    g.start = "width" === d || "height" === d ? 1 : 0))
        }
    }
    function jc(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (d = m.camelCase(c),
                    e = b[d],
                    f = a[c],
                m.isArray(f) && (e = f[1],
                    f = a[c] = f[0]),
                c !== d && (a[d] = f,
                    delete a[c]),
                    g = m.cssHooks[d],
                g && "expand"in g) {
                f = g.expand(f),
                    delete a[d];
                for (c in f)
                    c in a || (a[c] = f[c],
                        b[c] = e)
            } else
                b[d] = e
    }
    function kc(a, b, c) {
        var d, e, f = 0, g = dc.length, h = m.Deferred().always(function() {
            delete i.elem
        }), i = function() {
            if (e)
                return !1;
            for (var b = $b || fc(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++)
                j.tweens[g].run(f);
            return h.notifyWith(a, [j, f, c]),
                1 > f && i ? c : (h.resolveWith(a, [j]),
                    !1)
        }, j = h.promise({
            elem: a,
            props: m.extend({}, b),
            opts: m.extend(!0, {
                specialEasing: {}
            }, c),
            originalProperties: b,
            originalOptions: c,
            startTime: $b || fc(),
            duration: c.duration,
            tweens: [],
            createTween: function(b, c) {
                var d = m.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                return j.tweens.push(d),
                    d
            },
            stop: function(b) {
                var c = 0
                    , d = b ? j.tweens.length : 0;
                if (e)
                    return this;
                for (e = !0; d > c; c++)
                    j.tweens[c].run(1);
                return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]),
                    this
            }
        }), k = j.props;
        for (jc(k, j.opts.specialEasing); g > f; f++)
            if (d = dc[f].call(j, a, k, j.opts))
                return d;
        return m.map(k, hc, j),
        m.isFunction(j.opts.start) && j.opts.start.call(a, j),
            m.fx.timer(m.extend(i, {
                elem: a,
                anim: j,
                queue: j.opts.queue
            })),
            j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }
    m.Animation = m.extend(kc, {
        tweener: function(a, b) {
            m.isFunction(a) ? (b = a,
                a = ["*"]) : a = a.split(" ");
            for (var c, d = 0, e = a.length; e > d; d++)
                c = a[d],
                    ec[c] = ec[c] || [],
                    ec[c].unshift(b)
        },
        prefilter: function(a, b) {
            b ? dc.unshift(a) : dc.push(a)
        }
    }),
        m.speed = function(a, b, c) {
            var d = a && "object" == typeof a ? m.extend({}, a) : {
                complete: c || !c && b || m.isFunction(a) && a,
                duration: a,
                easing: c && b || b && !m.isFunction(b) && b
            };
            return d.duration = m.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in m.fx.speeds ? m.fx.speeds[d.duration] : m.fx.speeds._default,
            (null == d.queue || d.queue === !0) && (d.queue = "fx"),
                d.old = d.complete,
                d.complete = function() {
                    m.isFunction(d.old) && d.old.call(this),
                    d.queue && m.dequeue(this, d.queue)
                }
                ,
                d
        }
        ,
        m.fn.extend({
            fadeTo: function(a, b, c, d) {
                return this.filter(U).css("opacity", 0).show().end().animate({
                    opacity: b
                }, a, c, d)
            },
            animate: function(a, b, c, d) {
                var e = m.isEmptyObject(a)
                    , f = m.speed(b, c, d)
                    , g = function() {
                    var b = kc(this, m.extend({}, a), f);
                    (e || m._data(this, "finish")) && b.stop(!0)
                };
                return g.finish = g,
                    e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
            },
            stop: function(a, b, c) {
                var d = function(a) {
                    var b = a.stop;
                    delete a.stop,
                        b(c)
                };
                return "string" != typeof a && (c = b,
                    b = a,
                    a = void 0),
                b && a !== !1 && this.queue(a || "fx", []),
                    this.each(function() {
                        var b = !0
                            , e = null != a && a + "queueHooks"
                            , f = m.timers
                            , g = m._data(this);
                        if (e)
                            g[e] && g[e].stop && d(g[e]);
                        else
                            for (e in g)
                                g[e] && g[e].stop && cc.test(e) && d(g[e]);
                        for (e = f.length; e--; )
                            f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c),
                                b = !1,
                                f.splice(e, 1));
                        (b || !c) && m.dequeue(this, a)
                    })
            },
            finish: function(a) {
                return a !== !1 && (a = a || "fx"),
                    this.each(function() {
                        var b, c = m._data(this), d = c[a + "queue"], e = c[a + "queueHooks"], f = m.timers, g = d ? d.length : 0;
                        for (c.finish = !0,
                                 m.queue(this, a, []),
                             e && e.stop && e.stop.call(this, !0),
                                 b = f.length; b--; )
                            f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0),
                                f.splice(b, 1));
                        for (b = 0; g > b; b++)
                            d[b] && d[b].finish && d[b].finish.call(this);
                        delete c.finish
                    })
            }
        }),
        m.each(["toggle", "show", "hide"], function(a, b) {
            var c = m.fn[b];
            m.fn[b] = function(a, d, e) {
                return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(gc(b, !0), a, d, e)
            }
        }),
        m.each({
            slideDown: gc("show"),
            slideUp: gc("hide"),
            slideToggle: gc("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(a, b) {
            m.fn[a] = function(a, c, d) {
                return this.animate(b, a, c, d)
            }
        }),
        m.timers = [],
        m.fx.tick = function() {
            var a, b = m.timers, c = 0;
            for ($b = m.now(); c < b.length; c++)
                a = b[c],
                a() || b[c] !== a || b.splice(c--, 1);
            b.length || m.fx.stop(),
                $b = void 0
        }
        ,
        m.fx.timer = function(a) {
            m.timers.push(a),
                a() ? m.fx.start() : m.timers.pop()
        }
        ,
        m.fx.interval = 13,
        m.fx.start = function() {
            _b || (_b = setInterval(m.fx.tick, m.fx.interval))
        }
        ,
        m.fx.stop = function() {
            clearInterval(_b),
                _b = null
        }
        ,
        m.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        },
        m.fn.delay = function(a, b) {
            return a = m.fx ? m.fx.speeds[a] || a : a,
                b = b || "fx",
                this.queue(b, function(b, c) {
                    var d = setTimeout(b, a);
                    c.stop = function() {
                        clearTimeout(d)
                    }
                })
        }
        ,
        function() {
            var a, b, c, d, e;
            b = y.createElement("div"),
                b.setAttribute("className", "t"),
                b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
                d = b.getElementsByTagName("a")[0],
                c = y.createElement("select"),
                e = c.appendChild(y.createElement("option")),
                a = b.getElementsByTagName("input")[0],
                d.style.cssText = "top:1px",
                k.getSetAttribute = "t" !== b.className,
                k.style = /top/.test(d.getAttribute("style")),
                k.hrefNormalized = "/a" === d.getAttribute("href"),
                k.checkOn = !!a.value,
                k.optSelected = e.selected,
                k.enctype = !!y.createElement("form").enctype,
                c.disabled = !0,
                k.optDisabled = !e.disabled,
                a = y.createElement("input"),
                a.setAttribute("value", ""),
                k.input = "" === a.getAttribute("value"),
                a.value = "t",
                a.setAttribute("type", "radio"),
                k.radioValue = "t" === a.value
        }();
    var lc = /\r/g;
    m.fn.extend({
        val: function(a) {
            var b, c, d, e = this[0];
            {
                if (arguments.length)
                    return d = m.isFunction(a),
                        this.each(function(c) {
                            var e;
                            1 === this.nodeType && (e = d ? a.call(this, c, m(this).val()) : a,
                                null == e ? e = "" : "number" == typeof e ? e += "" : m.isArray(e) && (e = m.map(e, function(a) {
                                    return null == a ? "" : a + ""
                                })),
                                b = m.valHooks[this.type] || m.valHooks[this.nodeName.toLowerCase()],
                            b && "set"in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                        });
                if (e)
                    return b = m.valHooks[e.type] || m.valHooks[e.nodeName.toLowerCase()],
                        b && "get"in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value,
                            "string" == typeof c ? c.replace(lc, "") : null == c ? "" : c)
            }
        }
    }),
        m.extend({
            valHooks: {
                option: {
                    get: function(a) {
                        var b = m.find.attr(a, "value");
                        return null != b ? b : m.trim(m.text(a))
                    }
                },
                select: {
                    get: function(a) {
                        for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                            if (c = d[i],
                                    !(!c.selected && i !== e || (k.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && m.nodeName(c.parentNode, "optgroup"))) {
                                if (b = m(c).val(),
                                        f)
                                    return b;
                                g.push(b)
                            }
                        return g
                    },
                    set: function(a, b) {
                        var c, d, e = a.options, f = m.makeArray(b), g = e.length;
                        while (g--)
                            if (d = e[g],
                                m.inArray(m.valHooks.option.get(d), f) >= 0)
                                try {
                                    d.selected = c = !0
                                } catch (h) {
                                    d.scrollHeight
                                }
                            else
                                d.selected = !1;
                        return c || (a.selectedIndex = -1),
                            e
                    }
                }
            }
        }),
        m.each(["radio", "checkbox"], function() {
            m.valHooks[this] = {
                set: function(a, b) {
                    return m.isArray(b) ? a.checked = m.inArray(m(a).val(), b) >= 0 : void 0
                }
            },
            k.checkOn || (m.valHooks[this].get = function(a) {
                    return null === a.getAttribute("value") ? "on" : a.value
                }
            )
        });
    var mc, nc, oc = m.expr.attrHandle, pc = /^(?:checked|selected)$/i, qc = k.getSetAttribute, rc = k.input;
    m.fn.extend({
        attr: function(a, b) {
            return V(this, m.attr, a, b, arguments.length > 1)
        },
        removeAttr: function(a) {
            return this.each(function() {
                m.removeAttr(this, a)
            })
        }
    }),
        m.extend({
            attr: function(a, b, c) {
                var d, e, f = a.nodeType;
                if (a && 3 !== f && 8 !== f && 2 !== f)
                    return typeof a.getAttribute === K ? m.prop(a, b, c) : (1 === f && m.isXMLDoc(a) || (b = b.toLowerCase(),
                        d = m.attrHooks[b] || (m.expr.match.bool.test(b) ? nc : mc)),
                        void 0 === c ? d && "get"in d && null !== (e = d.get(a, b)) ? e : (e = m.find.attr(a, b),
                            null == e ? void 0 : e) : null !== c ? d && "set"in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""),
                            c) : void m.removeAttr(a, b))
            },
            removeAttr: function(a, b) {
                var c, d, e = 0, f = b && b.match(E);
                if (f && 1 === a.nodeType)
                    while (c = f[e++])
                        d = m.propFix[c] || c,
                            m.expr.match.bool.test(c) ? rc && qc || !pc.test(c) ? a[d] = !1 : a[m.camelCase("default-" + c)] = a[d] = !1 : m.attr(a, c, ""),
                            a.removeAttribute(qc ? c : d)
            },
            attrHooks: {
                type: {
                    set: function(a, b) {
                        if (!k.radioValue && "radio" === b && m.nodeName(a, "input")) {
                            var c = a.value;
                            return a.setAttribute("type", b),
                            c && (a.value = c),
                                b
                        }
                    }
                }
            }
        }),
        nc = {
            set: function(a, b, c) {
                return b === !1 ? m.removeAttr(a, c) : rc && qc || !pc.test(c) ? a.setAttribute(!qc && m.propFix[c] || c, c) : a[m.camelCase("default-" + c)] = a[c] = !0,
                    c
            }
        },
        m.each(m.expr.match.bool.source.match(/\w+/g), function(a, b) {
            var c = oc[b] || m.find.attr;
            oc[b] = rc && qc || !pc.test(b) ? function(a, b, d) {
                var e, f;
                return d || (f = oc[b],
                    oc[b] = e,
                    e = null != c(a, b, d) ? b.toLowerCase() : null,
                    oc[b] = f),
                    e
            }
                : function(a, b, c) {
                return c ? void 0 : a[m.camelCase("default-" + b)] ? b.toLowerCase() : null
            }
        }),
    rc && qc || (m.attrHooks.value = {
        set: function(a, b, c) {
            return m.nodeName(a, "input") ? void (a.defaultValue = b) : mc && mc.set(a, b, c)
        }
    }),
    qc || (mc = {
        set: function(a, b, c) {
            var d = a.getAttributeNode(c);
            return d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)),
                d.value = b += "",
                "value" === c || b === a.getAttribute(c) ? b : void 0
        }
    },
        oc.id = oc.name = oc.coords = function(a, b, c) {
            var d;
            return c ? void 0 : (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null
        }
        ,
        m.valHooks.button = {
            get: function(a, b) {
                var c = a.getAttributeNode(b);
                return c && c.specified ? c.value : void 0
            },
            set: mc.set
        },
        m.attrHooks.contenteditable = {
            set: function(a, b, c) {
                mc.set(a, "" === b ? !1 : b, c)
            }
        },
        m.each(["width", "height"], function(a, b) {
            m.attrHooks[b] = {
                set: function(a, c) {
                    return "" === c ? (a.setAttribute(b, "auto"),
                        c) : void 0
                }
            }
        })),
    k.style || (m.attrHooks.style = {
        get: function(a) {
            return a.style.cssText || void 0
        },
        set: function(a, b) {
            return a.style.cssText = b + ""
        }
    });
    var sc = /^(?:input|select|textarea|button|object)$/i
        , tc = /^(?:a|area)$/i;
    m.fn.extend({
        prop: function(a, b) {
            return V(this, m.prop, a, b, arguments.length > 1)
        },
        removeProp: function(a) {
            return a = m.propFix[a] || a,
                this.each(function() {
                    try {
                        this[a] = void 0,
                            delete this[a]
                    } catch (b) {}
                })
        }
    }),
        m.extend({
            propFix: {
                "for": "htmlFor",
                "class": "className"
            },
            prop: function(a, b, c) {
                var d, e, f, g = a.nodeType;
                if (a && 3 !== g && 8 !== g && 2 !== g)
                    return f = 1 !== g || !m.isXMLDoc(a),
                    f && (b = m.propFix[b] || b,
                        e = m.propHooks[b]),
                        void 0 !== c ? e && "set"in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get"in e && null !== (d = e.get(a, b)) ? d : a[b]
            },
            propHooks: {
                tabIndex: {
                    get: function(a) {
                        var b = m.find.attr(a, "tabindex");
                        return b ? parseInt(b, 10) : sc.test(a.nodeName) || tc.test(a.nodeName) && a.href ? 0 : -1
                    }
                }
            }
        }),
    k.hrefNormalized || m.each(["href", "src"], function(a, b) {
        m.propHooks[b] = {
            get: function(a) {
                return a.getAttribute(b, 4)
            }
        }
    }),
    k.optSelected || (m.propHooks.selected = {
        get: function(a) {
            var b = a.parentNode;
            return b && (b.selectedIndex,
            b.parentNode && b.parentNode.selectedIndex),
                null
        }
    }),
        m.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            m.propFix[this.toLowerCase()] = this
        }),
    k.enctype || (m.propFix.enctype = "encoding");
    var uc = /[\t\r\n\f]/g;
    m.fn.extend({
        addClass: function(a) {
            var b, c, d, e, f, g, h = 0, i = this.length, j = "string" == typeof a && a;
            if (m.isFunction(a))
                return this.each(function(b) {
                    m(this).addClass(a.call(this, b, this.className))
                });
            if (j)
                for (b = (a || "").match(E) || []; i > h; h++)
                    if (c = this[h],
                            d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(uc, " ") : " ")) {
                        f = 0;
                        while (e = b[f++])
                            d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                        g = m.trim(d),
                        c.className !== g && (c.className = g)
                    }
            return this
        },
        removeClass: function(a) {
            var b, c, d, e, f, g, h = 0, i = this.length, j = 0 === arguments.length || "string" == typeof a && a;
            if (m.isFunction(a))
                return this.each(function(b) {
                    m(this).removeClass(a.call(this, b, this.className))
                });
            if (j)
                for (b = (a || "").match(E) || []; i > h; h++)
                    if (c = this[h],
                            d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(uc, " ") : "")) {
                        f = 0;
                        while (e = b[f++])
                            while (d.indexOf(" " + e + " ") >= 0)
                                d = d.replace(" " + e + " ", " ");
                        g = a ? m.trim(d) : "",
                        c.className !== g && (c.className = g)
                    }
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(m.isFunction(a) ? function(c) {
                    m(this).toggleClass(a.call(this, c, this.className, b), b)
                }
                    : function() {
                    if ("string" === c) {
                        var b, d = 0, e = m(this), f = a.match(E) || [];
                        while (b = f[d++])
                            e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
                    } else
                        (c === K || "boolean" === c) && (this.className && m._data(this, "__className__", this.className),
                            this.className = this.className || a === !1 ? "" : m._data(this, "__className__") || "")
                }
            )
        },
        hasClass: function(a) {
            for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
                if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(uc, " ").indexOf(b) >= 0)
                    return !0;
            return !1
        }
    }),
        m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
            m.fn[b] = function(a, c) {
                return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
            }
        }),
        m.fn.extend({
            hover: function(a, b) {
                return this.mouseenter(a).mouseleave(b || a)
            },
            bind: function(a, b, c) {
                return this.on(a, null, b, c)
            },
            unbind: function(a, b) {
                return this.off(a, null, b)
            },
            delegate: function(a, b, c, d) {
                return this.on(b, a, c, d)
            },
            undelegate: function(a, b, c) {
                return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
            }
        });
    var vc = m.now()
        , wc = /\?/
        , xc = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    m.parseJSON = function(b) {
        if (a.JSON && a.JSON.parse)
            return a.JSON.parse(b + "");
        var c, d = null, e = m.trim(b + "");
        return e && !m.trim(e.replace(xc, function(a, b, e, f) {
            return c && b && (d = 0),
                0 === d ? a : (c = e || b,
                    d += !f - !e,
                    "")
        })) ? Function("return " + e)() : m.error("Invalid JSON: " + b)
    }
        ,
        m.parseXML = function(b) {
            var c, d;
            if (!b || "string" != typeof b)
                return null;
            try {
                a.DOMParser ? (d = new DOMParser,
                    c = d.parseFromString(b, "text/xml")) : (c = new ActiveXObject("Microsoft.XMLDOM"),
                    c.async = "false",
                    c.loadXML(b))
            } catch (e) {
                c = void 0
            }
            return c && c.documentElement && !c.getElementsByTagName("parsererror").length || m.error("Invalid XML: " + b),
                c
        }
    ;
    var yc, zc, Ac = /#.*$/, Bc = /([?&])_=[^&]*/, Cc = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Dc = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Ec = /^(?:GET|HEAD)$/, Fc = /^\/\//, Gc = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, Hc = {}, Ic = {}, Jc = "*/".concat("*");
    try {
        zc = location.href
    } catch (Kc) {
        zc = y.createElement("a"),
            zc.href = "",
            zc = zc.href
    }
    yc = Gc.exec(zc.toLowerCase()) || [];
    function Lc(a) {
        return function(b, c) {
            "string" != typeof b && (c = b,
                b = "*");
            var d, e = 0, f = b.toLowerCase().match(E) || [];
            if (m.isFunction(c))
                while (d = f[e++])
                    "+" === d.charAt(0) ? (d = d.slice(1) || "*",
                        (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }
    function Mc(a, b, c, d) {
        var e = {}
            , f = a === Ic;
        function g(h) {
            var i;
            return e[h] = !0,
                m.each(a[h] || [], function(a, h) {
                    var j = h(b, c, d);
                    return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j),
                        g(j),
                        !1)
                }),
                i
        }
        return g(b.dataTypes[0]) || !e["*"] && g("*")
    }
    function Nc(a, b) {
        var c, d, e = m.ajaxSettings.flatOptions || {};
        for (d in b)
            void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]);
        return c && m.extend(!0, a, c),
            a
    }
    function Oc(a, b, c) {
        var d, e, f, g, h = a.contents, i = a.dataTypes;
        while ("*" === i[0])
            i.shift(),
            void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type"));
        if (e)
            for (g in h)
                if (h[g] && h[g].test(e)) {
                    i.unshift(g);
                    break
                }
        if (i[0]in c)
            f = i[0];
        else {
            for (g in c) {
                if (!i[0] || a.converters[g + " " + i[0]]) {
                    f = g;
                    break
                }
                d || (d = g)
            }
            f = f || d
        }
        return f ? (f !== i[0] && i.unshift(f),
            c[f]) : void 0
    }
    function Pc(a, b, c, d) {
        var e, f, g, h, i, j = {}, k = a.dataTypes.slice();
        if (k[1])
            for (g in a.converters)
                j[g.toLowerCase()] = a.converters[g];
        f = k.shift();
        while (f)
            if (a.responseFields[f] && (c[a.responseFields[f]] = b),
                !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)),
                    i = f,
                    f = k.shift())
                if ("*" === f)
                    f = i;
                else if ("*" !== i && i !== f) {
                    if (g = j[i + " " + f] || j["* " + f],
                            !g)
                        for (e in j)
                            if (h = e.split(" "),
                                h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                                g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0],
                                    k.unshift(h[1]));
                                break
                            }
                    if (g !== !0)
                        if (g && a["throws"])
                            b = g(b);
                        else
                            try {
                                b = g(b)
                            } catch (l) {
                                return {
                                    state: "parsererror",
                                    error: g ? l : "No conversion from " + i + " to " + f
                                }
                            }
                }
        return {
            state: "success",
            data: b
        }
    }
    m.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: zc,
            type: "GET",
            isLocal: Dc.test(yc[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Jc,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": m.parseJSON,
                "text xml": m.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? Nc(Nc(a, m.ajaxSettings), b) : Nc(m.ajaxSettings, a)
        },
        ajaxPrefilter: Lc(Hc),
        ajaxTransport: Lc(Ic),
        ajax: function(a, b) {
            "object" == typeof a && (b = a,
                a = void 0),
                b = b || {};
            var c, d, e, f, g, h, i, j, k = m.ajaxSetup({}, b), l = k.context || k, n = k.context && (l.nodeType || l.jquery) ? m(l) : m.event, o = m.Deferred(), p = m.Callbacks("once memory"), q = k.statusCode || {}, r = {}, s = {}, t = 0, u = "canceled", v = {
                readyState: 0,
                getResponseHeader: function(a) {
                    var b;
                    if (2 === t) {
                        if (!j) {
                            j = {};
                            while (b = Cc.exec(f))
                                j[b[1].toLowerCase()] = b[2]
                        }
                        b = j[a.toLowerCase()]
                    }
                    return null == b ? null : b
                },
                getAllResponseHeaders: function() {
                    return 2 === t ? f : null
                },
                setRequestHeader: function(a, b) {
                    var c = a.toLowerCase();
                    return t || (a = s[c] = s[c] || a,
                        r[a] = b),
                        this
                },
                overrideMimeType: function(a) {
                    return t || (k.mimeType = a),
                        this
                },
                statusCode: function(a) {
                    var b;
                    if (a)
                        if (2 > t)
                            for (b in a)
                                q[b] = [q[b], a[b]];
                        else
                            v.always(a[v.status]);
                    return this
                },
                abort: function(a) {
                    var b = a || u;
                    return i && i.abort(b),
                        x(0, b),
                        this
                }
            };
            if (o.promise(v).complete = p.add,
                    v.success = v.done,
                    v.error = v.fail,
                    k.url = ((a || k.url || zc) + "").replace(Ac, "").replace(Fc, yc[1] + "//"),
                    k.type = b.method || b.type || k.method || k.type,
                    k.dataTypes = m.trim(k.dataType || "*").toLowerCase().match(E) || [""],
                null == k.crossDomain && (c = Gc.exec(k.url.toLowerCase()),
                    k.crossDomain = !(!c || c[1] === yc[1] && c[2] === yc[2] && (c[3] || ("http:" === c[1] ? "80" : "443")) === (yc[3] || ("http:" === yc[1] ? "80" : "443")))),
                k.data && k.processData && "string" != typeof k.data && (k.data = m.param(k.data, k.traditional)),
                    Mc(Hc, k, b, v),
                2 === t)
                return v;
            h = k.global,
            h && 0 === m.active++ && m.event.trigger("ajaxStart"),
                k.type = k.type.toUpperCase(),
                k.hasContent = !Ec.test(k.type),
                e = k.url,
            k.hasContent || (k.data && (e = k.url += (wc.test(e) ? "&" : "?") + k.data,
                delete k.data),
            k.cache === !1 && (k.url = Bc.test(e) ? e.replace(Bc, "$1_=" + vc++) : e + (wc.test(e) ? "&" : "?") + "_=" + vc++)),
            k.ifModified && (m.lastModified[e] && v.setRequestHeader("If-Modified-Since", m.lastModified[e]),
            m.etag[e] && v.setRequestHeader("If-None-Match", m.etag[e])),
            (k.data && k.hasContent && k.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", k.contentType),
                v.setRequestHeader("Accept", k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ("*" !== k.dataTypes[0] ? ", " + Jc + "; q=0.01" : "") : k.accepts["*"]);
            for (d in k.headers)
                v.setRequestHeader(d, k.headers[d]);
            if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t))
                return v.abort();
            u = "abort";
            for (d in {
                success: 1,
                error: 1,
                complete: 1
            })
                v[d](k[d]);
            if (i = Mc(Ic, k, b, v)) {
                v.readyState = 1,
                h && n.trigger("ajaxSend", [v, k]),
                k.async && k.timeout > 0 && (g = setTimeout(function() {
                    v.abort("timeout")
                }, k.timeout));
                try {
                    t = 1,
                        i.send(r, x)
                } catch (w) {
                    if (!(2 > t))
                        throw w;
                    x(-1, w)
                }
            } else
                x(-1, "No Transport");
            function x(a, b, c, d) {
                var j, r, s, u, w, x = b;
                2 !== t && (t = 2,
                g && clearTimeout(g),
                    i = void 0,
                    f = d || "",
                    v.readyState = a > 0 ? 4 : 0,
                    j = a >= 200 && 300 > a || 304 === a,
                c && (u = Oc(k, v, c)),
                    u = Pc(k, u, v, j),
                    j ? (k.ifModified && (w = v.getResponseHeader("Last-Modified"),
                    w && (m.lastModified[e] = w),
                        w = v.getResponseHeader("etag"),
                    w && (m.etag[e] = w)),
                        204 === a || "HEAD" === k.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = u.state,
                            r = u.data,
                            s = u.error,
                            j = !s)) : (s = x,
                    (a || !x) && (x = "error",
                    0 > a && (a = 0))),
                    v.status = a,
                    v.statusText = (b || x) + "",
                    j ? o.resolveWith(l, [r, x, v]) : o.rejectWith(l, [v, x, s]),
                    v.statusCode(q),
                    q = void 0,
                h && n.trigger(j ? "ajaxSuccess" : "ajaxError", [v, k, j ? r : s]),
                    p.fireWith(l, [v, x]),
                h && (n.trigger("ajaxComplete", [v, k]),
                --m.active || m.event.trigger("ajaxStop")))
            }
            return v
        },
        getJSON: function(a, b, c) {
            return m.get(a, b, c, "json")
        },
        getScript: function(a, b) {
            return m.get(a, void 0, b, "script")
        }
    }),
        m.each(["get", "post"], function(a, b) {
            m[b] = function(a, c, d, e) {
                return m.isFunction(c) && (e = e || d,
                    d = c,
                    c = void 0),
                    m.ajax({
                        url: a,
                        type: b,
                        dataType: e,
                        data: c,
                        success: d
                    })
            }
        }),
        m.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
            m.fn[b] = function(a) {
                return this.on(b, a)
            }
        }),
        m._evalUrl = function(a) {
            return m.ajax({
                url: a,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                "throws": !0
            })
        }
        ,
        m.fn.extend({
            wrapAll: function(a) {
                if (m.isFunction(a))
                    return this.each(function(b) {
                        m(this).wrapAll(a.call(this, b))
                    });
                if (this[0]) {
                    var b = m(a, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && b.insertBefore(this[0]),
                        b.map(function() {
                            var a = this;
                            while (a.firstChild && 1 === a.firstChild.nodeType)
                                a = a.firstChild;
                            return a
                        }).append(this)
                }
                return this
            },
            wrapInner: function(a) {
                return this.each(m.isFunction(a) ? function(b) {
                        m(this).wrapInner(a.call(this, b))
                    }
                        : function() {
                        var b = m(this)
                            , c = b.contents();
                        c.length ? c.wrapAll(a) : b.append(a)
                    }
                )
            },
            wrap: function(a) {
                var b = m.isFunction(a);
                return this.each(function(c) {
                    m(this).wrapAll(b ? a.call(this, c) : a)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    m.nodeName(this, "body") || m(this).replaceWith(this.childNodes)
                }).end()
            }
        }),
        m.expr.filters.hidden = function(a) {
            return a.offsetWidth <= 0 && a.offsetHeight <= 0 || !k.reliableHiddenOffsets() && "none" === (a.style && a.style.display || m.css(a, "display"))
        }
        ,
        m.expr.filters.visible = function(a) {
            return !m.expr.filters.hidden(a)
        }
    ;
    var Qc = /%20/g
        , Rc = /\[\]$/
        , Sc = /\r?\n/g
        , Tc = /^(?:submit|button|image|reset|file)$/i
        , Uc = /^(?:input|select|textarea|keygen)/i;
    function Vc(a, b, c, d) {
        var e;
        if (m.isArray(b))
            m.each(b, function(b, e) {
                c || Rc.test(a) ? d(a, e) : Vc(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
            });
        else if (c || "object" !== m.type(b))
            d(a, b);
        else
            for (e in b)
                Vc(a + "[" + e + "]", b[e], c, d)
    }
    m.param = function(a, b) {
        var c, d = [], e = function(a, b) {
            b = m.isFunction(b) ? b() : null == b ? "" : b,
                d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
        };
        if (void 0 === b && (b = m.ajaxSettings && m.ajaxSettings.traditional),
            m.isArray(a) || a.jquery && !m.isPlainObject(a))
            m.each(a, function() {
                e(this.name, this.value)
            });
        else
            for (c in a)
                Vc(c, a[c], b, e);
        return d.join("&").replace(Qc, "+")
    }
        ,
        m.fn.extend({
            serialize: function() {
                return m.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var a = m.prop(this, "elements");
                    return a ? m.makeArray(a) : this
                }).filter(function() {
                    var a = this.type;
                    return this.name && !m(this).is(":disabled") && Uc.test(this.nodeName) && !Tc.test(a) && (this.checked || !W.test(a))
                }).map(function(a, b) {
                    var c = m(this).val();
                    return null == c ? null : m.isArray(c) ? m.map(c, function(a) {
                        return {
                            name: b.name,
                            value: a.replace(Sc, "\r\n")
                        }
                    }) : {
                        name: b.name,
                        value: c.replace(Sc, "\r\n")
                    }
                }).get()
            }
        }),
        m.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function() {
            return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && Zc() || $c()
        }
            : Zc;
    var Wc = 0
        , Xc = {}
        , Yc = m.ajaxSettings.xhr();
    a.ActiveXObject && m(a).on("unload", function() {
        for (var a in Xc)
            Xc[a](void 0, !0)
    }),
        k.cors = !!Yc && "withCredentials"in Yc,
        Yc = k.ajax = !!Yc,
    Yc && m.ajaxTransport(function(a) {
        if (!a.crossDomain || k.cors) {
            var b;
            return {
                send: function(c, d) {
                    var e, f = a.xhr(), g = ++Wc;
                    if (f.open(a.type, a.url, a.async, a.username, a.password),
                            a.xhrFields)
                        for (e in a.xhrFields)
                            f[e] = a.xhrFields[e];
                    a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType),
                    a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
                    for (e in c)
                        void 0 !== c[e] && f.setRequestHeader(e, c[e] + "");
                    f.send(a.hasContent && a.data || null),
                        b = function(c, e) {
                            var h, i, j;
                            if (b && (e || 4 === f.readyState))
                                if (delete Xc[g],
                                        b = void 0,
                                        f.onreadystatechange = m.noop,
                                        e)
                                    4 !== f.readyState && f.abort();
                                else {
                                    j = {},
                                        h = f.status,
                                    "string" == typeof f.responseText && (j.text = f.responseText);
                                    try {
                                        i = f.statusText
                                    } catch (k) {
                                        i = ""
                                    }
                                    h || !a.isLocal || a.crossDomain ? 1223 === h && (h = 204) : h = j.text ? 200 : 404
                                }
                            j && d(h, i, j, f.getAllResponseHeaders())
                        }
                        ,
                        a.async ? 4 === f.readyState ? setTimeout(b) : f.onreadystatechange = Xc[g] = b : b()
                },
                abort: function() {
                    b && b(void 0, !0)
                }
            }
        }
    });
    function Zc() {
        try {
            return new a.XMLHttpRequest
        } catch (b) {}
    }
    function $c() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP")
        } catch (b) {}
    }
    m.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(a) {
                return m.globalEval(a),
                    a
            }
        }
    }),
        m.ajaxPrefilter("script", function(a) {
            void 0 === a.cache && (a.cache = !1),
            a.crossDomain && (a.type = "GET",
                a.global = !1)
        }),
        m.ajaxTransport("script", function(a) {
            if (a.crossDomain) {
                var b, c = y.head || m("head")[0] || y.documentElement;
                return {
                    send: function(d, e) {
                        b = y.createElement("script"),
                            b.async = !0,
                        a.scriptCharset && (b.charset = a.scriptCharset),
                            b.src = a.url,
                            b.onload = b.onreadystatechange = function(a, c) {
                                (c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null,
                                b.parentNode && b.parentNode.removeChild(b),
                                    b = null,
                                c || e(200, "success"))
                            }
                            ,
                            c.insertBefore(b, c.firstChild)
                    },
                    abort: function() {
                        b && b.onload(void 0, !0)
                    }
                }
            }
        });
    var _c = []
        , ad = /(=)\?(?=&|$)|\?\?/;
    m.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = _c.pop() || m.expando + "_" + vc++;
            return this[a] = !0,
                a
        }
    }),
        m.ajaxPrefilter("json jsonp", function(b, c, d) {
            var e, f, g, h = b.jsonp !== !1 && (ad.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && ad.test(b.data) && "data");
            return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = m.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback,
                h ? b[h] = b[h].replace(ad, "$1" + e) : b.jsonp !== !1 && (b.url += (wc.test(b.url) ? "&" : "?") + b.jsonp + "=" + e),
                b.converters["script json"] = function() {
                    return g || m.error(e + " was not called"),
                        g[0]
                }
                ,
                b.dataTypes[0] = "json",
                f = a[e],
                a[e] = function() {
                    g = arguments
                }
                ,
                d.always(function() {
                    a[e] = f,
                    b[e] && (b.jsonpCallback = c.jsonpCallback,
                        _c.push(e)),
                    g && m.isFunction(f) && f(g[0]),
                        g = f = void 0
                }),
                "script") : void 0
        }),
        m.parseHTML = function(a, b, c) {
            if (!a || "string" != typeof a)
                return null;
            "boolean" == typeof b && (c = b,
                b = !1),
                b = b || y;
            var d = u.exec(a)
                , e = !c && [];
            return d ? [b.createElement(d[1])] : (d = m.buildFragment([a], b, e),
            e && e.length && m(e).remove(),
                m.merge([], d.childNodes))
        }
    ;
    var bd = m.fn.load;
    m.fn.load = function(a, b, c) {
        if ("string" != typeof a && bd)
            return bd.apply(this, arguments);
        var d, e, f, g = this, h = a.indexOf(" ");
        return h >= 0 && (d = m.trim(a.slice(h, a.length)),
            a = a.slice(0, h)),
            m.isFunction(b) ? (c = b,
                b = void 0) : b && "object" == typeof b && (f = "POST"),
        g.length > 0 && m.ajax({
            url: a,
            type: f,
            dataType: "html",
            data: b
        }).done(function(a) {
            e = arguments,
                g.html(d ? m("<div>").append(m.parseHTML(a)).find(d) : a)
        }).complete(c && function(a, b) {
                g.each(c, e || [a.responseText, b, a])
            }
        ),
            this
    }
        ,
        m.expr.filters.animated = function(a) {
            return m.grep(m.timers, function(b) {
                return a === b.elem
            }).length
        }
    ;
    var cd = a.document.documentElement;
    function dd(a) {
        return m.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1
    }
    m.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = m.css(a, "position"), l = m(a), n = {};
            "static" === k && (a.style.position = "relative"),
                h = l.offset(),
                f = m.css(a, "top"),
                i = m.css(a, "left"),
                j = ("absolute" === k || "fixed" === k) && m.inArray("auto", [f, i]) > -1,
                j ? (d = l.position(),
                    g = d.top,
                    e = d.left) : (g = parseFloat(f) || 0,
                    e = parseFloat(i) || 0),
            m.isFunction(b) && (b = b.call(a, c, h)),
            null != b.top && (n.top = b.top - h.top + g),
            null != b.left && (n.left = b.left - h.left + e),
                "using"in b ? b.using.call(a, n) : l.css(n)
        }
    },
        m.fn.extend({
            offset: function(a) {
                if (arguments.length)
                    return void 0 === a ? this : this.each(function(b) {
                        m.offset.setOffset(this, a, b)
                    });
                var b, c, d = {
                    top: 0,
                    left: 0
                }, e = this[0], f = e && e.ownerDocument;
                if (f)
                    return b = f.documentElement,
                        m.contains(b, e) ? (typeof e.getBoundingClientRect !== K && (d = e.getBoundingClientRect()),
                            c = dd(f),
                        {
                            top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0),
                            left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)
                        }) : d
            },
            position: function() {
                if (this[0]) {
                    var a, b, c = {
                        top: 0,
                        left: 0
                    }, d = this[0];
                    return "fixed" === m.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(),
                        b = this.offset(),
                    m.nodeName(a[0], "html") || (c = a.offset()),
                        c.top += m.css(a[0], "borderTopWidth", !0),
                        c.left += m.css(a[0], "borderLeftWidth", !0)),
                    {
                        top: b.top - c.top - m.css(d, "marginTop", !0),
                        left: b.left - c.left - m.css(d, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    var a = this.offsetParent || cd;
                    while (a && !m.nodeName(a, "html") && "static" === m.css(a, "position"))
                        a = a.offsetParent;
                    return a || cd
                })
            }
        }),
        m.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(a, b) {
            var c = /Y/.test(b);
            m.fn[a] = function(d) {
                return V(this, function(a, d, e) {
                    var f = dd(a);
                    return void 0 === e ? f ? b in f ? f[b] : f.document.documentElement[d] : a[d] : void (f ? f.scrollTo(c ? m(f).scrollLeft() : e, c ? e : m(f).scrollTop()) : a[d] = e)
                }, a, d, arguments.length, null)
            }
        }),
        m.each(["top", "left"], function(a, b) {
            m.cssHooks[b] = Lb(k.pixelPosition, function(a, c) {
                return c ? (c = Jb(a, b),
                    Hb.test(c) ? m(a).position()[b] + "px" : c) : void 0
            })
        }),
        m.each({
            Height: "height",
            Width: "width"
        }, function(a, b) {
            m.each({
                padding: "inner" + a,
                content: b,
                "": "outer" + a
            }, function(c, d) {
                m.fn[d] = function(d, e) {
                    var f = arguments.length && (c || "boolean" != typeof d)
                        , g = c || (d === !0 || e === !0 ? "margin" : "border");
                    return V(this, function(b, c, d) {
                        var e;
                        return m.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement,
                            Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? m.css(b, c, g) : m.style(b, c, d, g)
                    }, b, f ? d : void 0, f, null)
                }
            })
        }),
        m.fn.size = function() {
            return this.length
        }
        ,
        m.fn.andSelf = m.fn.addBack,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return m
    });
    var ed = a.jQuery
        , fd = a.$;
    return m.noConflict = function(b) {
        return a.$ === m && (a.$ = fd),
        b && a.jQuery === m && (a.jQuery = ed),
            m
    }
        ,
    typeof b === K && (a.jQuery = a.$ = m),
        m
});
/*! JSON v3.2.4 | http://bestiejs.github.com/json3 | Copyright 2012, Kit Cambridge | http://kit.mit-license.org */
(function() {
    var e = void 0, i = !0, k = null, l = {}.toString, m, n, p = "function" === typeof define && define.c, q = !p && "object" == typeof exports && exports;
    q || p ? "object" == typeof JSON && JSON ? p ? q = JSON : (q.stringify = JSON.stringify,
        q.parse = JSON.parse) : p && (q = this.JSON = {}) : q = this.JSON || (this.JSON = {});
    var r, t, u, x, z, B, C, D, E, F, G, H, I, J = new Date(-3509827334573292), K, O, P;
    try {
        J = -109252 == J.getUTCFullYear() && 0 === J.getUTCMonth() && 1 == J.getUTCDate() && 10 == J.getUTCHours() && 37 == J.getUTCMinutes() && 6 == J.getUTCSeconds() && 708 == J.getUTCMilliseconds()
    } catch (Q) {}
    function R(b) {
        var c, a, d, j = b == "json";
        if (j || b == "json-stringify" || b == "json-parse") {
            if (b == "json-stringify" || j) {
                if (c = typeof q.stringify == "function" && J) {
                    (d = function() {
                            return 1
                        }
                    ).toJSON = d;
                    try {
                        c = q.stringify(0) === "0" && q.stringify(new Number) === "0" && q.stringify(new String) == '""' && q.stringify(l) === e && q.stringify(e) === e && q.stringify() === e && q.stringify(d) === "1" && q.stringify([d]) == "[1]" && q.stringify([e]) == "[null]" && q.stringify(k) == "null" && q.stringify([e, l, k]) == "[null,null,null]" && q.stringify({
                                A: [d, i, false, k, "\x00\u0008\n\u000c\r\t"]
                            }) == '{"A":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}' && q.stringify(k, d) === "1" && q.stringify([1, 2], k, 1) == "[\n 1,\n 2\n]" && q.stringify(new Date(-864E13)) == '"-271821-04-20T00:00:00.000Z"' && q.stringify(new Date(864E13)) == '"+275760-09-13T00:00:00.000Z"' && q.stringify(new Date(-621987552E5)) == '"-000001-01-01T00:00:00.000Z"' && q.stringify(new Date(-1)) == '"1969-12-31T23:59:59.999Z"'
                    } catch (f) {
                        c = false
                    }
                }
                if (!j)
                    return c
            }
            if (b == "json-parse" || j) {
                if (typeof q.parse == "function")
                    try {
                        if (q.parse("0") === 0 && !q.parse(false)) {
                            d = q.parse('{"A":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}');
                            if (a = d.a.length == 5 && d.a[0] == 1) {
                                try {
                                    a = !q.parse('"\t"')
                                } catch (o) {}
                                if (a)
                                    try {
                                        a = q.parse("01") != 1
                                    } catch (g) {}
                            }
                        }
                    } catch (h) {
                        a = false
                    }
                if (!j)
                    return a
            }
            return c && a
        }
    }
    if (!R("json")) {
        J || (K = Math.floor,
                O = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
                P = function(b, c) {
                    return O[c] + 365 * (b - 1970) + K((b - 1969 + (c = +(c > 1))) / 4) - K((b - 1901 + c) / 100) + K((b - 1601 + c) / 400)
                }
        );
        if (!(m = {}.hasOwnProperty))
            m = function(b) {
                var c = {}, a;
                if ((c.__proto__ = k,
                        c.__proto__ = {
                            toString: 1
                        },
                        c).toString != l)
                    m = function(a) {
                        var b = this.__proto__
                            , a = a in (this.__proto__ = k,
                                this);
                        this.__proto__ = b;
                        return a
                    }
                    ;
                else {
                    a = c.constructor;
                    m = function(b) {
                        var c = (this.constructor || a).prototype;
                        return b in this && !(b in c && this[b] === c[b])
                    }
                }
                c = k;
                return m.call(this, b)
            }
            ;
        n = function(b, c) {
            var a = 0, d, j, f;
            (d = function() {
                    this.valueOf = 0
                }
            ).prototype.valueOf = 0;
            j = new d;
            for (f in j)
                m.call(j, f) && a++;
            d = j = k;
            if (a)
                a = a == 2 ? function(a, b) {
                    var c = {}, d = l.call(a) == "[object Function]", f;
                    for (f in a)
                        !(d && f == "prototype") && !m.call(c, f) && (c[f] = 1) && m.call(a, f) && b(f)
                }
                    : function(a, b) {
                    var c = l.call(a) == "[object Function]", d, f;
                    for (d in a)
                        !(c && d == "prototype") && m.call(a, d) && !(f = d === "constructor") && b(d);
                    (f || m.call(a, d = "constructor")) && b(d)
                }
                ;
            else {
                j = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"];
                a = function(a, b) {
                    var c = l.call(a) == "[object Function]", d;
                    for (d in a)
                        !(c && d == "prototype") && m.call(a, d) && b(d);
                    for (c = j.length; d = j[--c]; m.call(a, d) && b(d))
                        ;
                }
            }
            a(b, c)
        }
        ;
        R("json-stringify") || (r = {
                "\\": "\\\\",
                '"': '\\"',
                "\u0008": "\\b",
                "\u000c": "\\f",
                "\n": "\\n",
                "\r": "\\r",
                "\t": "\\t"
            },
                t = function(b, c) {
                    return ("000000" + (c || 0)).slice(-b)
                }
                ,
                u = function(b) {
                    for (var c = '"', a = 0, d; d = b.charAt(a); a++)
                        c = c + ('\\"\u0008\u000c\n\r\t'.indexOf(d) > -1 ? r[d] : r[d] = d < " " ? "\\u00" + t(2, d.charCodeAt(0).toString(16)) : d);
                    return c + '"'
                }
                ,
                x = function(b, c, a, d, j, f, o) {
                    var g = c[b], h, s, v, w, L, M, N, y, A;
                    if (typeof g == "object" && g) {
                        h = l.call(g);
                        if (h == "[object Date]" && !m.call(g, "toJSON"))
                            if (g > -1 / 0 && g < 1 / 0) {
                                if (P) {
                                    v = K(g / 864E5);
                                    for (h = K(v / 365.2425) + 1970 - 1; P(h + 1, 0) <= v; h++)
                                        ;
                                    for (s = K((v - P(h, 0)) / 30.42); P(h, s + 1) <= v; s++)
                                        ;
                                    v = 1 + v - P(h, s);
                                    w = (g % 864E5 + 864E5) % 864E5;
                                    L = K(w / 36E5) % 24;
                                    M = K(w / 6E4) % 60;
                                    N = K(w / 1E3) % 60;
                                    w = w % 1E3
                                } else {
                                    h = g.getUTCFullYear();
                                    s = g.getUTCMonth();
                                    v = g.getUTCDate();
                                    L = g.getUTCHours();
                                    M = g.getUTCMinutes();
                                    N = g.getUTCSeconds();
                                    w = g.getUTCMilliseconds()
                                }
                                g = (h <= 0 || h >= 1E4 ? (h < 0 ? "-" : "+") + t(6, h < 0 ? -h : h) : t(4, h)) + "-" + t(2, s + 1) + "-" + t(2, v) + "T" + t(2, L) + ":" + t(2, M) + ":" + t(2, N) + "." + t(3, w) + "Z"
                            } else
                                g = k;
                        else if (typeof g.toJSON == "function" && (h != "[object Number]" && h != "[object String]" && h != "[object Array]" || m.call(g, "toJSON")))
                            g = g.toJSON(b)
                    }
                    a && (g = a.call(c, b, g));
                    if (g === k)
                        return "null";
                    h = l.call(g);
                    if (h == "[object Boolean]")
                        return "" + g;
                    if (h == "[object Number]")
                        return g > -1 / 0 && g < 1 / 0 ? "" + g : "null";
                    if (h == "[object String]")
                        return u(g);
                    if (typeof g == "object") {
                        for (b = o.length; b--; )
                            if (o[b] === g)
                                throw TypeError();
                        o.push(g);
                        y = [];
                        c = f;
                        f = f + j;
                        if (h == "[object Array]") {
                            s = 0;
                            for (b = g.length; s < b; A || (A = i),
                                s++) {
                                h = x(s, g, a, d, j, f, o);
                                y.push(h === e ? "null" : h)
                            }
                            b = A ? j ? "[\n" + f + y.join(",\n" + f) + "\n" + c + "]" : "[" + y.join(",") + "]" : "[]"
                        } else {
                            n(d || g, function(b) {
                                var c = x(b, g, a, d, j, f, o);
                                c !== e && y.push(u(b) + ":" + (j ? " " : "") + c);
                                A || (A = i)
                            });
                            b = A ? j ? "{\n" + f + y.join(",\n" + f) + "\n" + c + "}" : "{" + y.join(",") + "}" : "{}"
                        }
                        o.pop();
                        return b
                    }
                }
                ,
                q.stringify = function(b, c, a) {
                    var d, j, f, o, g, h;
                    if (typeof c == "function" || typeof c == "object" && c)
                        if (l.call(c) == "[object Function]")
                            j = c;
                        else if (l.call(c) == "[object Array]") {
                            f = {};
                            o = 0;
                            for (g = c.length; o < g; h = c[o++],
                            (l.call(h) == "[object String]" || l.call(h) == "[object Number]") && (f[h] = 1))
                                ;
                        }
                    if (a)
                        if (l.call(a) == "[object Number]") {
                            if ((a = a - a % 1) > 0) {
                                d = "";
                                for (a > 10 && (a = 10); d.length < a; d = d + " ")
                                    ;
                            }
                        } else
                            l.call(a) == "[object String]" && (d = a.length <= 10 ? a : a.slice(0, 10));
                    return x("", (h = {},
                        h[""] = b,
                        h), j, f, d, "", [])
                }
        );
        R("json-parse") || (z = String.fromCharCode,
                B = {
                    "\\": "\\",
                    '"': '"',
                    "/": "/",
                    b: "\u0008",
                    t: "\t",
                    n: "\n",
                    f: "\u000c",
                    r: "\r"
                },
                C = function() {
                    H = I = k;
                    throw SyntaxError();
                }
                ,
                D = function() {
                    for (var b = I, c = b.length, a, d, j, f, o; H < c; ) {
                        a = b.charAt(H);
                        if ("\t\r\n ".indexOf(a) > -1)
                            H++;
                        else {
                            if ("{}[]:,".indexOf(a) > -1) {
                                H++;
                                return a
                            }
                            if (a == '"') {
                                d = "@";
                                for (H++; H < c; ) {
                                    a = b.charAt(H);
                                    if (a < " ")
                                        C();
                                    else if (a == "\\") {
                                        a = b.charAt(++H);
                                        if ('\\"/btnfr'.indexOf(a) > -1) {
                                            d = d + B[a];
                                            H++
                                        } else if (a == "u") {
                                            j = ++H;
                                            for (f = H + 4; H < f; H++) {
                                                a = b.charAt(H);
                                                a >= "0" && a <= "9" || a >= "a" && a <= "f" || a >= "A" && a <= "F" || C()
                                            }
                                            d = d + z("0x" + b.slice(j, H))
                                        } else
                                            C()
                                    } else {
                                        if (a == '"')
                                            break;
                                        d = d + a;
                                        H++
                                    }
                                }
                                if (b.charAt(H) == '"') {
                                    H++;
                                    return d
                                }
                            } else {
                                j = H;
                                if (a == "-") {
                                    o = i;
                                    a = b.charAt(++H)
                                }
                                if (a >= "0" && a <= "9") {
                                    for (a == "0" && (a = b.charAt(H + 1),
                                    a >= "0" && a <= "9") && C(); H < c && (a = b.charAt(H),
                                    a >= "0" && a <= "9"); H++)
                                        ;
                                    if (b.charAt(H) == ".") {
                                        for (f = ++H; f < c && (a = b.charAt(f),
                                        a >= "0" && a <= "9"); f++)
                                            ;
                                        f == H && C();
                                        H = f
                                    }
                                    a = b.charAt(H);
                                    if (a == "e" || a == "E") {
                                        a = b.charAt(++H);
                                        (a == "+" || a == "-") && H++;
                                        for (f = H; f < c && (a = b.charAt(f),
                                        a >= "0" && a <= "9"); f++)
                                            ;
                                        f == H && C();
                                        H = f
                                    }
                                    return +b.slice(j, H)
                                }
                                o && C();
                                if (b.slice(H, H + 4) == "true") {
                                    H = H + 4;
                                    return i
                                }
                                if (b.slice(H, H + 5) == "false") {
                                    H = H + 5;
                                    return false
                                }
                                if (b.slice(H, H + 4) == "null") {
                                    H = H + 4;
                                    return k
                                }
                            }
                            C()
                        }
                    }
                    return "$"
                }
                ,
                E = function(b) {
                    var c, a;
                    b == "$" && C();
                    if (typeof b == "string") {
                        if (b.charAt(0) == "@")
                            return b.slice(1);
                        if (b == "[") {
                            for (c = []; ; a || (a = i)) {
                                b = D();
                                if (b == "]")
                                    break;
                                if (a)
                                    if (b == ",") {
                                        b = D();
                                        b == "]" && C()
                                    } else
                                        C();
                                b == "," && C();
                                c.push(E(b))
                            }
                            return c
                        }
                        if (b == "{") {
                            for (c = {}; ; a || (a = i)) {
                                b = D();
                                if (b == "}")
                                    break;
                                if (a)
                                    if (b == ",") {
                                        b = D();
                                        b == "}" && C()
                                    } else
                                        C();
                                (b == "," || typeof b != "string" || b.charAt(0) != "@" || D() != ":") && C();
                                c[b.slice(1)] = E(D())
                            }
                            return c
                        }
                        C()
                    }
                    return b
                }
                ,
                G = function(b, c, a) {
                    a = F(b, c, a);
                    a === e ? delete b[c] : b[c] = a
                }
                ,
                F = function(b, c, a) {
                    var d = b[c], j;
                    if (typeof d == "object" && d)
                        if (l.call(d) == "[object Array]")
                            for (j = d.length; j--; )
                                G(d, j, a);
                        else
                            n(d, function(b) {
                                G(d, b, a)
                            });
                    return a.call(b, c, d)
                }
                ,
                q.parse = function(b, c) {
                    var a, d;
                    H = 0;
                    I = b;
                    a = E(D());
                    D() != "$" && C();
                    H = I = k;
                    return c && l.call(c) == "[object Function]" ? F((d = {},
                        d[""] = a,
                        d), "", c) : a
                }
        )
    }
    p && define(function() {
        return q
    });
}());
;/**
 * 【KFZ通用组件库】 Ver:0.8.0
 */

var root = this;
if (typeof exports !== 'undefined') {
    KFZ = exports;
} else {
    KFZ = root.KFZ || (root.KFZ = {});
}
(KFZ.add = function() {
        var len = arguments.length;
        if (!len)
            return;
        var objects;
        if (len === 1) {
            objects = arguments[0];
            if (typeof objects === 'string')
                objects = [objects];
        } else {
            objects = Array.prototype.slice.apply(arguments);
        }
        $.each(objects, function() {
            var object = KFZ[this] || (KFZ[this] = {});
            object.extend = function(obj) {
                $.extend.call(this, this, obj);
            }
            ;
        });
        var callback = arguments[len - 1];
        typeof callback === 'function' && callback.apply(null, arguments);
    }
)(['url', 'ajax', 'util', 'ui', 'lang', 'common', 'page']);
(KFZ.url.refresh = function(callback) {
        KFZ.url.protocol = window.location.protocol;
        var host = KFZ.url.host = window.location.protocol + '//' + window.location.host + '/';
        KFZ.url.rootType = /.+\.local\//i.test(host) ? 'local' : /.+\.kfz\.(com|cn)/.test(host) ? 'kfz' : /.+\/\/(neibu.*|shopv2.*|bookv2.*|tanv2.*)/i.test(host) ? 'neibu' : 'online';
        (KFZ.url.getPathname = function() {
                return ( KFZ.url.pathname = window.location.pathname) ;
            }
        )();
        (KFZ.url.getPagename = function(href) {
                var pagename = ''
                    , newHref = (href || KFZ.url.getPathname() || '').replace(/^((http|https|ftp):\/\/\w+\.\w+(\.\w+)*)*\//, '').replace(/\/$/, '');
                if (newHref) {
                    pagename = newHref.substr(newHref.lastIndexOf('/') + 1);
                    if (!pagename) {
                        pagename = newHref.replace(/\/$/, '');
                        if (/\//.test(pagename)) {
                            pagename = pagename.substr(pagename.lastIndexOf('/') + 1);
                        } else {
                            pagename = '';
                        }
                    }
                }
                if (typeof href === 'undefined')
                    KFZ.url.pagename = pagename;
                return pagename;
            }
        )();
        (KFZ.url.getHash = function() {
                return ( KFZ.url.hash = window.location.hash.substr(1).replace(/\?.*/g, '')) ;
            }
        )();
        (KFZ.url.getQuery = function() {
                var i, paramsArr = window.location.search.substr(1).split('&'), params = {}, aParam;
                for (i = 0; i < paramsArr.length; i++) {
                    aParamArr = paramsArr[i].split('=');
                    if (aParamArr[0].length) {
                        params[aParamArr[0]] = decodeURI(aParamArr[1]);
                    }
                }
                return ( KFZ.url.query = params) ;
            }
        )();
        callback && callback.call(this, KFZ.url);
    }
)();
KFZ.ajax.request = function(method, options) {
    var url = options.url
        , contentType = options.contentType || 'application/x-www-form-urlencoded'
        , data = contentType == 'application/json' ? JSON.stringify(options.data) : options.data
        , async = options.async === false ? false : true
        , cache = options.cache || false
        , timeout = options.timeout || 30000
        , dataType = options.dataType || 'text'
        , noStatusCheck = options.noStatusCheck
        , has = options.has
        , hasnot = options.hasnot
        , sucTip = options.sucTip
        , failTip = options.failTip
        , errTip = options.errTip
        , success = options.success
        , fail = options.fail
        , complete = options.complete
        , error = options.error;
    return $.ajax({
        url: url,
        data: data,
        async: async,
        type: method,
        timeout: timeout,
        cache: cache,
        traditional: true,
        contentType: contentType,
        dataType: dataType,
        success: function(res, textStatus, jqXHR) {
            try {
                res = JSON.parse(res);
            } catch (e) {}
            var data = noStatusCheck ? res : res.data;
            if (res.status || noStatusCheck) {
                sucTip && KFZ.ui.alertWin({
                    result: 1,
                    text: sucTip
                });
                if ($.isArray(data)) {
                    if (data.length) {
                        has && has.call(this, data, res);
                    } else {
                        hasnot && hasnot.call(this, data, res);
                    }
                }
                success && success.call(this, data, res);
            } else {
                if (res.errType == '1') {
                    KFZ.common.turnLogin && KFZ.common.turnLogin();
                    return;
                }
                if (failTip !== false) {
                    failTip = failTip === true ? res.message : (res.message || failTip);
                    failTip && KFZ.ui.alertWin({
                        result: 0,
                        text: failTip
                    });
                }
                fail && fail.call(this, res.message, data, res);
            }
        },
        error: function(jqXHR, textStatus, errThrown) {
            errTip !== false && (errTip || (errTip = KFZ.lang.kfz.dataRequestFail)) && KFZ.ui.alertWin({
                result: 0,
                text: errTip
            });
            error && error.call(this, errThrown);
        },
        complete: function(jqXHR, textStatus, errThrown) {
            complete && complete.call(this, errThrown);
        }
    });
}
;
$.each(['Get', 'Post', 'Put', 'Delete', 'Jsonp'], function(i, method) {
    KFZ.ajax[method] = function(options) {
        return KFZ.ajax.request(method.toUpperCase(), options);
    }
    ;
});
KFZ.util.assembleUrlParams = function(params) {
    if (!params)
        return '';
    var paramsArr = [];
    for (var key in params) {
        var value = params[key];
        if (value === null || value === undefined) {
            delete params[key];
            continue;
        }
        paramsArr.push(key + '=' + params[key]);
    }
    return paramsArr.join('&');
}
;
KFZ.util.loginCheck = function(options) {
    options || (options = {});
    var isLogin, user = KFZ.user, hasLogin = options.hasLogin, noLogin = options.noLogin, autoDealNoLogin = options.autoDealNoLogin;
    if (isLogin = (user && user.isLogin) ? true : false) {
        hasLogin && hasLogin.call(this, user);
    } else {
        if (autoDealNoLogin === true) {
            KFZ.common.turnLogin && KFZ.common.turnLogin();
        } else if (noLogin) {
            noLogin.call(this);
        }
    }
    return isLogin;
}
;
KFZ.util.loadView = function(attribute, include, callback) {
    if ($(attribute).attr(attribute) || include) {
        $(attribute).load(($(attribute).attr(attribute) || include), function() {
            callback && callback.apply(this, arguments);
        });
    } else {
        callback && callback.apply(this, arguments);
    }
}
;
KFZ.util.multiObjRun = function(obj, evt, func) {
    if ($.isArray(obj)) {
        for (var i = 0, len = obj.length; i < len; i++) {
            $(document).undelegate(obj[i], evt).delegate(obj[i], evt, func);
        }
    } else if (typeof obj == 'string') {
        $(document).undelegate(obj, evt).delegate(obj, evt, func);
    }
}
;
KFZ.util.isInt = function(n) {
    return /^((\d)|([1-9]\d*))$/.test(n);
}
;
KFZ.util.isNatural = function(n) {
    return /^[1-9]\d*$/.test(n);
}
;
KFZ.util.isMobile = function(n) {
    return /^0?(13|14|15|17|18)[0-9]{9}$/.test(n);
}
;
KFZ.util.isTel = function(n) {
    return /(^\d{10,12}$)|(^\d{7,8}$)|(^\d{3,4}-\d{7,8}$)|(^\d{3,4}-\d{7,8}-\d{1,4}$)|(^\d{7,8}-\d{1,4}$)/.test(n);
}
;
KFZ.util.isPrice = function(n) {
    return (/^(0|[1-9]\d*)(\.\d{1,2})?$/).test(n.toString());
}
;
KFZ.util.setPrice = function(n) {
    if (!isNaN(n)) {
        var arr = n.toString().split('.')
            , i = arr[0] || '0'
            , f = arr.length > 1 ? arr[1] : '00'
            , fLen = f.length;
        if (fLen < 3) {
            n = i + '.' + (fLen > 1 ? f : fLen < 1 ? '00' : f + '0');
        } else if (fLen > 2) {
            var s = f.substr(2, 1);
            f = f.substr(0, 2);
            if (s > 4) {
                var t = '' + (parseInt(i + f, 10) + 1)
                    , tLen = t.length;
                if (tLen > 2) {
                    var tArr = t.split('').reverse();
                    tArr.splice(2, 0, '.');
                    n = tArr.reverse().join('');
                } else {
                    n = '0.' + (tLen > 1 ? t : '0' + t);
                }
            } else {
                n = i + '.' + f;
            }
        }
    }
    return n;
}
;
KFZ.util.enterDown = function(event, callback) {
    if (event && event.which && event.which == 13) {
        callback && callback(event);
        return true;
    }
    return false;
}
;
KFZ.util.isIE = function() {
    var self = arguments.callee;
    if (typeof self.isie !== 'undefined')
        return self.isie;
    var navigator = window.navigator, browser = navigator.appName, b_version = navigator.appVersion, version, trim_Version, ver;
    if (window.ActiveXObject) {
        version = b_version.split(';');
        trim_Version = version[1].replace(/[ ]/g, '');
        if (browser === 'Microsoft Internet Explorer') {
            ver = +trim_Version.replace(/MSIE(\d+)(\.0)*$/i, '$1');
            return ( self.isie = !isNaN(ver) ? ver : 0) ;
        }
    } else if (browser === 'Netscape' && /Trident.+rv:*11\.0/.test(b_version)) {
        version = b_version.replace(/^\w+\(|\)(\s*\w+)+$/gi, '').split(';');
        trim_Version = version[version.length - 1].split(':')[1];
        ver = +trim_Version.replace(/(\d+)(\.0)*$/i, '$1');
        return ( self.isie = !isNaN(ver) ? ver : 0) ;
    }
    return ( self.isie = 0) ;
}
;
KFZ.util.index = function(arr, one) {
    var type = typeof one;
    if (type === 'string' || type === 'number')
        return $.inArray(one, arr);
    var index = -1;
    $.isPlainObject(one) && $.each(arr, function(i, o) {
        var isOne;
        $.each(one, function(key, val) {
            if (o && o[key] === val) {
                isOne = true;
            } else {
                return ( isOne = false) ;
            }
        });
        if (isOne) {
            index = i;
            return false;
        }
    });
    return index;
}
;
KFZ.util.get = function(arr, obj, multi, deep) {
    var result = multi ? [] : undefined;
    (function(arr) {
        var self = arguments.callee;
        ($.isArray(arr) || $.isPlainObject(arr)) && $.each(arr, function(i, o) {
            if (!($.isArray(o) || $.isPlainObject(o)))
                return;
            var isOne;
            if ($.isPlainObject(o)) {
                $.each(obj, function(key, val) {
                    if (o[key] === val) {
                        isOne = true;
                    } else {
                        return ( isOne = false) ;
                    }
                });
                if (isOne) {
                    if (multi) {
                        result.push(o);
                    } else {
                        return !(result = o);
                    }
                }
            }
            if (deep && (multi || !isOne)) {
                $.each(o, function(k, v) {
                    self(v);
                });
            }
        });
    })(arr);
    return result;
}
;
KFZ.util.remove = function(arr, obj, multi) {
    if (typeof obj === 'string') {
        for (var i = arr.length - 1; i > -1; i--) {
            if (arr[i] === obj) {
                arr.splice(i, 1);
                if (!multi) {
                    break;
                }
            }
        }
    } else {
        if ($.isArray(obj)) {
            var self = arguments.callee;
            $.each(obj, function(i, subObj) {
                self(arr, subObj, multi);
            });
        } else {
            for (var i = arr.length - 1; i > -1; i--) {
                var o = arr[i], isOne;
                $.each(obj, function(key, val) {
                    if (o && o[key] === val) {
                        isOne = true;
                    } else {
                        return ( isOne = false) ;
                    }
                });
                if (isOne) {
                    arr.splice(i, 1);
                    if (!multi)
                        break;
                }
            }
        }
    }
    return arr;
}
;
KFZ.util.compare = function(first, second) {
    var type = typeof first;
    if (arguments.length !== 2 || type !== typeof second)
        return false;
    if (first === second)
        return true;
    if (type !== 'object')
        return false;
    var isSame = true
        , self = arguments.callee;
    $.each(first, function(fk, fv) {
        var hasSameAttr;
        $.each(second, function(sk, sv) {
            if (sk === fk) {
                hasSameAttr = true;
                if (fv !== sv) {
                    var subType = typeof fv;
                    if (subType === typeof sv && subType === 'object') {
                        isSame = self(sv, fv);
                    } else {
                        isSame = false;
                    }
                }
                return false;
            }
        });
        if (hasSameAttr) {
            if (!isSame)
                return false;
        } else {
            return ( isSame = false) ;
        }
    });
    isSame && $.each(second, function(sk, sv) {
        var hasSameAttr;
        $.each(first, function(fk, fv) {
            if (fk === sk) {
                hasSameAttr = true;
                return false;
            }
        });
        if (!hasSameAttr)
            return ( isSame = false) ;
    });
    return isSame;
}
;
KFZ.util.dealHistory = function(url, callback) {
    if (!(KFZ.util.pushState = window.history.pushState))
        return true;
    KFZ.util.pushState.call(window.history, null, null, url);
    callback && callback.apply(null, arguments);
    return false;
}
;
KFZ.util.charToUnicode = function(str) {
    if (!str)
        return '';
    var unicode = ''
        , i = 0
        , len = (str = '' + str).length;
    for (; i < len; i++) {
        unicode += 'k' + str.charCodeAt(i).toString(16).toLowerCase();
    }
    return unicode;
}
;
KFZ.util.unicodeToChar = function(unicode) {
    if (typeof unicode === 'undefined')
        return '';
    var str = ''
        , arr = unicode.split('k')
        , i = 0
        , len = arr.length;
    for (; i < len; i++) {
        var oneUnicode = arr[i], oneStr;
        if (!oneUnicode)
            continue;
        oneUnicode = parseInt(oneUnicode, 16).toString(10);
        oneStr = String.fromCharCode(oneUnicode);
        str += oneStr;
    }
    return str;
}
;
KFZ.util.cookie = function(name, value, options) {
    if (typeof value != 'undefined') {
        options || (options = {});
        if (value === null) {
            value = '';
            options.expires = -1;
        }
        var expires = '';
        if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
            var date;
            if (typeof options.expires == 'number') {
                date = new Date();
                date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
            } else {
                date = options.expires;
            }
            expires = '; expires=' + date.toUTCString();
        }
        var path = options.path ? '; path=' + options.path : '';
        var domain = options.domain ? '; domain=' + options.domain : '';
        var secure = options.secure ? '; secure' : '';
        document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
    } else {
        var cookieValue = null;
        if (document.cookie && document.cookie != '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = $.trim(cookies[i]);
                if (cookie.substring(0, name.length + 1) == (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
}
;
KFZ.ui.loading = function(box, type, klass, html, text) {
    var $box = typeof box == 'object' ? box : $(box);
    $box[type || 'html'](html || '<div class="' + (klass ? klass : 'loading') + '">' + (text || '') + '</div>');
}
;
KFZ.ui.switchTab = function(titles, contents, klass, evt, callback) {
    klass || (klass = 'curr');
    evt || (evt = 'click');
    var before, after;
    if (callback) {
        if ($.isFunction(callback)) {
            before = undefined;
            after = callback;
        } else {
            before = callback.before;
            after = callback.after;
        }
    }
    $('body').off(evt, titles).on(evt, titles, function() {
        var index = $(titles).index($(this));
        if (before && before.call(this, index) === false)
            return;
        $(titles).eq(index).addClass(klass).siblings().removeClass(klass);
        contents && $(contents).eq(index).show().siblings(contents).hide();
        after && after.call(this, index);
    });
}
;
KFZ.ui.inputPrompt = function(input, tip, tipClass) {
    var $input = typeof input === 'object' ? input : $(input)
        , $tip = (typeof tip === 'object' ? tip : $(tip)).hide();
    if (!$input.length)
        return;
    !$input.val() && $tip.css('display', '');
    var fn = $.fn
        , focus = fn.focusin ? 'focusin' : 'focus'
        , blur = fn.focusout ? 'focusout' : 'blur';
    var styleHandler = function(event) {
        if (!$input.val()) {
            $tip.css('display', '');
            if (!tipClass)
                return;
            var type = event.type;
            if (type === 'focus' || type === 'focusin' || type === 'keyup') {
                $tip.addClass(tipClass);
            } else if (type === 'blur' || type === 'focusout' || type === 'change') {
                $tip.removeClass(tipClass);
            }
        } else {
            $tip.hide();
            $tip.removeClass(tipClass);
        }
    };
    $('body').on('click', tip, function() {
        $(this).blur().siblings(input).focus();
    }).on(focus + ' ' + blur + ' keyup change', input, styleHandler);
}
;
KFZ.ui.documentClick = (function() {
    var bindArr = [];
    $(document).click(function(event) {
        var handlers = [];
        for (var i = 0, len = bindArr.length; i < len; i++) {
            var tar = event.target, bindOne = bindArr[i], oneNodes = bindOne.nodes, oneHandler = bindOne.handler, isExist;
            allNodes: while (tar) {
                for (var j = 0, count = oneNodes.length; j < count; j++) {
                    var klass = $(tar).attr('class');
                    if (klass) {
                        var klassArr = klass.split(' ')
                            , oneNodeArr = oneNodes[j].split(' ')
                            , isOneExist = true;
                        $.each(oneNodeArr, function(k, oneNodeKlass) {
                            if ($.inArray(oneNodeKlass, klassArr) < 0) {
                                return ( isOneExist = false) ;
                            }
                        });
                        if (isOneExist) {
                            isExist = true;
                            break allNodes;
                        }
                    }
                }
                tar = tar.parentNode;
                if (tar && tar.nodeType == 9)
                    break;
            }
            if (!isExist)
                handlers.push(oneHandler);
        }
        $.each(handlers, function(index, handler) {
            typeof handler === 'function' && handler.apply(null, arguments);
        });
    });
    return function(nodesArr, callback) {
        if (!nodesArr || !nodesArr.length)
            return;
        var isBind;
        if (bindArr.length) {
            $.each(bindArr, function(j, bindOne) {
                var oneBind = true;
                $.each(bindOne.nodes, function(m, bindNode) {
                    if ($.inArray(bindNode, nodesArr) < 0)
                        return ( oneBind = false) ;
                });
                if (oneBind) {
                    $.each(nodesArr, function(n, paramNode) {
                        if ($.inArray(paramNode, bindOne.nodes) < 0)
                            return ( oneBind = false) ;
                    });
                }
                if (oneBind) {
                    isBind = true;
                    return false;
                }
            });
        } else {
            isBind = false;
        }
        !isBind && bindArr.push({
            nodes: nodesArr,
            handler: callback
        });
    }
        ;
})();
KFZ.ui.textCount = function(el, num, tip, callback) {
    var $el = $(el);
    if (!$el.length)
        return -1;
    $.isFunction(tip) && (callback = tip) && (tip = '');
    var text = $el.val()
        , count = (text || '').length;
    count > num && ((count = num) ? 1 : 1) && $el.val(text.substr(0, num));
    if (tip && $(tip).html(num - count).length) {
        var self = arguments.callee;
        self.hasTip || (self.hasTip = {});
        self.hasTip[el + '_num'] = num;
        !self.hasTip[el] && (self.hasTip[el] = 1) && $('body').on('keyup click focus blur', el, function(event) {
            self(el, self.hasTip[el + '_num'], tip);
            callback && callback(event);
        });
    } else {
        callback && callback();
        return num - count;
    }
}
;
KFZ.ui.SelectBox = function(args) {
    if (!(this instanceof arguments.callee))
        return new arguments.callee(args);
    this.init(args);
}
;
KFZ.ui.SelectBox.prototype = {
    constructor: KFZ.ui.SelectBox,
    init: function(args) {
        $.extend(this, args);
        this.box = this.box || '.kfz_select_box';
        var that = this
            , $box = this.$box = $(this.box);
        this.width && $box.width(this.width);
        if (!$box.addClass('kfz_select_box').find('.selectTit').length)
            this.setTemplate(this.box);
        this.setEvent(this.box);
        this.items && this.renderItems(this.items);
        if (this.hasSelectTitArrow === false) {
            this.cssDown = 'blankdown';
            this.cssUp = 'blankup';
        } else {
            this.cssDown = 'down';
            this.cssUp = 'up';
        }
        this.reload();
        this.value || (this.value = {
            attrid: this.$selectTit.attr('attrid') || '',
            name: $.trim(this.$selectTit.text()) || ''
        });
        this.afterInit && this.afterInit.apply(this, arguments);
    },
    reload: function() {
        var that = this
            , $box = this.$box || (this.$box = $(this.box))
            , $selectTit = this.$selectTit || (this.$selectTit = $box.find('.selectTit').width($box.width() - 27))
            , $selectCon = this.$selectCon || (this.$selectCon = $box.find('.selectCon').width($box.width() - 2));
        $selectTit.removeClass('down').addClass(this.cssDown).is(':text') && $selectTit.css({
            cursor: 'text'
        });
        this.autoGetItems && this.getItems && (function() {
            KFZ.ui.loading($selectCon, 'html');
            that.getItems($selectCon, function(items) {
                $.isArray(items) && that.renderItems($selectCon, items);
                that.afterGetItems && that.afterGetItems($selectCon);
            });
        })();
        this.defaultItem && !$.isEmptyObject(this.defaultItem) && this.setCurrent(this.defaultItem);
    },
    renderItems: function($selectCon, items, callback) {
        if ($.isArray($selectCon)) {
            items = $selectCon;
            $selectCon = this.$selectCon || (this.$selectCon = $(this.box).find('.selectCon'));
        }
        if ($selectCon.length && $.isArray(items) && items.length) {
            var conHtml = '';
            $.each(items, function(index, item) {
                conHtml += '<li class="selectItem" ' + (item.attrid ? 'attrid="' + item.attrid + '"' : '') + '>';
                conHtml += '<a href="javascript:;"><span>' + item.name + '</span></a>';
                conHtml += '</li>';
            });
            $selectCon.html(conHtml);
        }
        this.setSelectConHeigth();
        callback && callback.apply(this, arguments);
    },
    setEvent: function(box) {
        var that = this;
        $('body').undelegate(box + ' .selectTit', 'click').delegate(box + ' .selectTit', 'click', function() {
            var $selectTit = $(this)
                , $selectCon = $selectTit.siblings('.selectCon');
            if ($selectTit.hasClass(that.cssDown)) {
                var $selectTitUps = $('.kfz_select_box').find('.selectTit.up')
                    , $selectTitBlankups = $('.kfz_select_box').find('.selectTit.blankup');
                if ($selectTitUps.length) {
                    $selectTitUps.removeClass('up').addClass('down').siblings('.selectCon').stop().hide();
                    that.removeParentsPosition(that.posParents);
                }
                if ($selectTitBlankups.length) {
                    $selectTitBlankups.removeClass('blankup').addClass('blankdown').siblings('.selectCon').stop().hide();
                    that.removeParentsPosition(that.posParents);
                }
                if (that.reloadItems || (!$selectCon.find('.selectItem[attrid]').length && !$selectCon.find('.noItem').length && $.isFunction(that.getItems))) {
                    that.dropdown();
                    KFZ.ui.loading($selectCon.height('auto'), 'html');
                    that.getItems($selectCon, function(items) {
                        $.isArray(items) && that.renderItems($selectCon, items);
                        that.afterGetItems && that.afterGetItems($selectCon);
                    });
                } else {
                    that.dropdown(1);
                }
            } else {
                $selectTit.removeClass(that.cssUp).addClass(that.cssDown);
                $selectCon.stop().hide();
                that.removeParentsPosition(that.posParents, $selectTit);
            }
        }).undelegate(box + ' .selectItem', 'click').delegate(box + ' .selectItem', 'click', function() {
            var $selectItem = $(this);
            if (/noItem/.test($selectItem.attr('class')))
                return;
            var $selectBox = $(this).parents('.kfz_select_box')
                , $selectCon = $selectItem.parents('.selectCon')
                , $selectTit = $selectCon.siblings('.selectTit')
                , itemVal = $(this).text();
            $selectTit.removeClass(that.cssUp).addClass(that.cssDown);
            $selectCon.stop().hide();
            that.removeParentsPosition(that.posParents, $selectItem);
            if (that.currentItemClass)
                $selectItem.addClass(that.currentItemClass).siblings().removeClass(that.currentItemClass);
            if (that.itemClick && typeof that.itemClick == 'function') {
                var itemClickResult = that.itemClick($selectItem, $selectBox);
                if (itemClickResult === false)
                    return;
            }
            $selectTit[$selectTit.is(':text') ? 'val' : 'html'](itemVal).attr('attrid', ($selectItem.attr('attrid') || ''));
            if (!that.value || that.value.attrid !== ($selectTit.attr('attrid') || '')) {
                var oldVal = that.value;
                that.value = {
                    attrid: $selectTit.attr('attrid') || '',
                    name: itemVal
                };
                that.change && that.change(that.value, oldVal);
            }
            that.afterItemClick && that.afterItemClick($selectItem, $selectBox, that.value);
        });
        KFZ.ui.documentClick(['selectTit', 'selectCon'], function() {
            $('.kfz_select_box .up').removeClass('up').addClass('down').siblings('.selectCon').hide();
            $('.kfz_select_box .blankup').removeClass('blankup').addClass('blankdown').siblings('.selectCon').hide();
            if ($('[originalpos]').length) {
                that.removeParentsPosition(that.posParents);
            }
        });
    },
    dropdown: function(needSetHeigth) {
        var $selectTit = this.$selectTit
            , $selectCon = this.$selectCon;
        this.addParentsPosition(this.posParents, $selectTit);
        $selectTit.removeClass(this.cssDown).addClass(this.cssUp);
        needSetHeigth && this.setSelectConHeigth();
        $selectCon.show();
    },
    setSelectConHeigth: function() {
        var rowHeight = this.rowHeight = this.rowHeight || 21
            , boxHeight = this.boxHeight = (boxHeight = this.boxHeight) ? boxHeight > 0 ? boxHeight : (rowHeight * 11 - 1) : (rowHeight * 11 - 1)
            , $selectCon = this.$selectCon
            , itemLen = $selectCon.find('.selectItem').length
            , conHeight = itemLen > 0 ? itemLen * rowHeight - 1 : 0;
        if (conHeight > boxHeight) {
            conHeight = boxHeight;
            $selectCon.css('overflow-y', 'scroll');
        } else {
            $selectCon.css('overflow-y', '');
        }
        $selectCon.css({
            'height': conHeight + 'px',
            'top': (rowHeight + 1) + 'px'
        }).find('.selectItem').height(rowHeight).eq(itemLen - 1).height(rowHeight - 1).find('a').css('border-bottom', 'none');
    },
    setCurrent: function(item, currentItemClass, callback) {
        if (!item)
            return;
        if ($.isFunction(currentItemClass)) {
            callback = currentItemClass;
            currentItemClass = '';
        }
        this.currentItemClass = currentItemClass || this.currentItemClass;
        var that = this
            , attrid = item.attrid || ''
            , itemName = item.name || ''
            , $selectTit = this.$selectTit
            , $selectCon = this.$selectCon
            , $items = $selectCon.find('.selectItem');
        $selectTit.attr('attrid', attrid)[$selectTit.is(':text') ? 'val' : 'html'](itemName);
        this.value = {
            attrid: attrid,
            name: itemName
        };
        this.currentItemClass && $items.length && $.each($items, function() {
            var $item = $(this);
            if ($item.attr('attrid') == attrid) {
                $item.addClass(that.currentItemClass).siblings('.' + that.currentItemClass).removeClass(that.currentItemClass);
                return false;
            }
        });
        callback && callback.apply(this, arguments);
    },
    addParentsPosition: function(posParents, $selectTit) {
        if ($.isArray(posParents) && posParents.length) {
            var len = posParents.length;
            for (var i = 0; i < len; i++) {
                var $thisParent = $selectTit.parents(posParents[i]);
                $thisParent.attr('originalpos') ? null : $thisParent.attr('originalpos', $thisParent.css('position'));
                $thisParent.css({
                    'position': 'relative',
                    'z-index': '888'
                });
            }
        }
    },
    removeParentsPosition: function(posParents, $selector) {
        if ($.isArray(posParents) && posParents.length && $('[originalpos]').length) {
            if ($selector && $selector.parents) {
                var len = posParents.length;
                for (var i = 0; i < len; i++) {
                    var $thisParent = $selector.parents(posParents[i]);
                    if (!$thisParent.length)
                        continue;
                    $thisParent.css({
                        'position': ($thisParent.attr('originalpos') || ''),
                        'z-index': ''
                    });
                    $thisParent.removeAttr('originalpos');
                }
            } else {
                var $originalpos = $('[originalpos]');
                for (var j = 0, count = $originalpos.length; j < count; j++) {
                    var $thisOriginalpos = $originalpos.eq(j);
                    $thisOriginalpos.css({
                        'position': $thisOriginalpos.attr('originalpos'),
                        'z-index': ''
                    }).removeAttr('originalpos');
                }
            }
        }
    },
    val: function(items) {
        if (items !== undefined) {
            if (items === '') {
                this.setCurrent({
                    attrid: '',
                    name: '请选择'
                });
            } else {
                !$.isEmptyObject(items) && this.setCurrent(items);
            }
        }
        return this.value;
    },
    reset: function() {
        this.val('');
    },
    show: function() {
        this.$box.show();
        return this;
    },
    hide: function() {
        this.$box.hide();
        return this;
    },
    setTemplate: function(box) {
        var html = '<a class="selectTit down" href="javascript:;">' + KFZ.lang.kfz.pleasesSelect + '</a>' + '<ul class="selectCon" style="display:none;">' + '</ul>';
        (typeof box === 'object' ? box : $(box)).html(html);
    },
    setStyle: function() {
        if ($('#kfz_select_style').length)
            return;
        var styleHtml = '<style id="kfz_select_style">' + '.kfz_select_box{position:relative;width:110px;background:#fff;}' + '.kfz_select_box .selectTit,.kfz_select_box .selectTit:hover{display:block;height:20px;padding:0 20px 0 5px;border:1px solid #ccc;line-height:20px;color:#333;font-weight:normal;cursor:default;overflow:hidden;}' + '.kfz_select_box .selectCon{position:absolute;left:0;top:22px;width:108px;background:#fff;border:1px solid #ddd;border-top:none;overflow:auto;overflow-x:hidden;display:none;}' + '.kfz_select_box .selectItem{text-align:left;}' + '</style>';
        $('body').append(styleHtml);
    }
};
KFZ.ui.uploadify = function(selector, options) {
    options || (options = {});
    var timestamp = +new Date()
        , success = options.success
        , fileSuccess = options.fileSuccess
        , fail = options.fail
        , fileFail = options.fileFail
        , error = options.error
        , fileError = options.fileError
        , complete = options.complete;
    $(selector).uploadify({
        uploader: options.url,
        swf: KFZ.url.host + 'js/common/uploadify/uploadify.swf',
        buttonText: options.btnText || '选择文件',
        buttonClass: options.btnClass || '',
        width: options.btnWidth || 100,
        height: options.btnHeigth || 25,
        buttonImage: options.btnImage || null,
        multi: (options.multi === false ? false : true),
        debug: false,
        fileTypeExts: options.fileType || '*.*',
        uploadLimit: options.uploadLimit,
        removeTimeout: options.removeTimeout || 0,
        queueSizeLimit: options.queueSizeLimit || 0,
        successTimeout: options.timeout || 30,
        fileSizeLimit: options.fileSizeLimit,
        formData: {
            timestamp: timestamp,
            token: 'unique_salt_' + timestamp
        },
        onUploadSuccess: function(file, data, response) {
            var fileId = file.id
                , fileName = file.name
                , res = JSON.parse(data);
            if (res.status) {
                KFZ.ui.uploadify[timestamp] = KFZ.ui.uploadify[timestamp] || {};
                KFZ.ui.uploadify[timestamp].sucItems = KFZ.ui.uploadify[timestamp].sucItems || [];
                KFZ.ui.uploadify[timestamp].sucItems.push({
                    id: fileId,
                    name: fileName,
                    data: res.data
                });
                fileSuccess && fileSuccess.call(this, res.data, res, file);
            } else {
                KFZ.ui.uploadify[timestamp] = KFZ.ui.uploadify[timestamp] || {};
                KFZ.ui.uploadify[timestamp].failItems = KFZ.ui.uploadify[timestamp].failItems || [];
                KFZ.ui.uploadify[timestamp].failItems.push({
                    id: fileId,
                    name: fileName,
                    errMsg: res.message
                });
                fileFail && fileFail.call(this, res.message, res, file);
            }
        },
        onUploadError: function(file, errorCode, errorMsg) {
            var fileId = file.id
                , fileName = file.name;
            KFZ.ui.uploadify[timestamp] = KFZ.ui.uploadify[timestamp] || {};
            KFZ.ui.uploadify[timestamp].errItems = KFZ.ui.uploadify[timestamp].errItems || [];
            KFZ.ui.uploadify[timestamp].errItems.push({
                id: fileId,
                name: fileName,
                errMsg: errorMsg
            });
            fileError && fileError.call(this, file, errorCode, errorMsg);
        },
        onQueueComplete: function(queueData) {
            KFZ.ui.uploadify[timestamp] = KFZ.ui.uploadify[timestamp] || {};
            KFZ.ui.uploadify[timestamp].sucItems = KFZ.ui.uploadify[timestamp].sucItems || [];
            KFZ.ui.uploadify[timestamp].failItems = KFZ.ui.uploadify[timestamp].failItems || [];
            KFZ.ui.uploadify[timestamp].errItems = KFZ.ui.uploadify[timestamp].errItems || [];
            var sucItems = KFZ.ui.uploadify[timestamp].sucItems
                , failItems = KFZ.ui.uploadify[timestamp].failItems
                , errItems = KFZ.ui.uploadify[timestamp].errItems
                , sucLen = sucItems.length
                , failLen = failItems.length
                , errLen = errItems.length;
            if (sucLen && !(errLen + failLen)) {
                KFZ.ui.alertWin({
                    result: 1,
                    text: sucLen + '个文件上传成功！'
                });
                success && success.call(this, sucItems, queueData);
            } else if (failLen && !(sucLen + errLen)) {
                KFZ.ui.alertWin({
                    result: 0,
                    text: failLen + '个文件上传失败！'
                });
                fail && fail.call(this, failItems, queueData);
            } else if (errLen && !(sucLen + failLen)) {
                KFZ.ui.alertWin({
                    result: 0,
                    text: errLen + '个文件上传出错！'
                });
                error && error.call(this, errItems, queueData);
            } else {
                KFZ.ui.alertWin({
                    result: 2,
                    text: (sucLen ? sucLen + '个文件上传成功！' : '') + (failLen ? failLen + '个文件上传失败！' : '') + (errLen ? errLen + '个文件上传出错！' : '')
                });
            }
            complete && complete.call(this, queueData, sucItems, failItems, errItems);
            KFZ.ui.uploadify[timestamp].sucItems = [];
            KFZ.ui.uploadify[timestamp].failItems = [];
            KFZ.ui.uploadify[timestamp].errItems = [];
        }
    });
}
;
KFZ.ui.hasFlash = function() {
    var hasFlash = false;
    KFZ.ui.hasFlash.version = 0;
    try {
        if (window.ActiveXObject) {
            var swf = new ActiveXObject('ShockwaveFlash.ShockwaveFlash');
            if (swf) {
                hasFlash = true;
                VSwf = swf.GetVariable("$version");
                KFZ.ui.hasFlash.version = parseInt(VSwf.split(" ")[1].split(",")[0]);
            }
        } else {
            if (navigator.plugins && navigator.plugins.length > 0) {
                var swf = navigator.plugins["Shockwave Flash"];
                if (swf) {
                    hasFlash = true;
                    var words = swf.description.split(" ");
                    for (var i = 0; i < words.length; i++) {
                        if (isNaN(parseInt(words[i]))) {
                            continue;
                        }
                        KFZ.ui.hasFlash.version = parseInt(words[i]);
                    }
                }
            }
        }
    } catch (err) {}
    return hasFlash;
}
;
KFZ.ui.formatSize = function(size) {
    if (size === null || size === undefined || /\D/.test(size)) {
        return 'null';
    }
    if (size > 1099511627776) {
        return Math.round(size / 1099511627776, 1) + "tb";
    }
    if (size > 1073741824) {
        return Math.round(size / 1073741824, 1) + "gb";
    }
    if (size > 1048576) {
        return Math.round(size / 1048576, 1) + "mb";
    }
    if (size > 1024) {
        return Math.round(size / 1024, 1) + "kb";
    }
    return size + "b";
}
;
KFZ.ui.upload = function(id, options) {
    options || (options = {});
    (id.indexOf('#') === 0) && (id = id.substring(1));
    options.listbox && (options.listbox.indexOf('#') !== 0) && (options.listbox = '#' + options.listbox);
    options.fileSizeLimit && (options.maxFileSize = options.fileSizeLimit * 1024);
    if (KFZ.ui.hasFlash()) {
        $('#' + id).uploadify({
            uploader: options.url,
            fileObjName: options.fileObjName || 'Filedata',
            formData: options.formData || {},
            swf: KFZ.url.host + 'js/common/uploadify/uploadify.swf',
            buttonText: options.btnText || '选择文件',
            buttonClass: options.btnClass || '',
            width: options.btnWidth || 100,
            height: options.btnHeigth || 25,
            buttonImage: options.btnImage || null,
            multi: (options.multi === false ? false : true),
            debug: false,
            fileTypeExts: options.fileType || '*.gif; *.jpg; *.jpeg; *.png',
            uploadLimit: options.uploadLimit || 0,
            removeTimeout: options.removeTimeout || 0,
            queueSizeLimit: options.queueSizeLimit || 0,
            successTimeout: options.timeout || 30,
            fileSizeLimit: options.fileSizeLimit || 500,
            onUploadStart: function(file) {
                options.uploadStart && options.uploadStart.call(this, file, 'uploadify');
            },
            onSelect: function(file) {
                options.fileAdded && options.fileAdded.call(this, file, 'uploadify');
            },
            onUploadSuccess: function(file, data, response) {
                if (response) {
                    data = data.replace(/<script\s*type="text\/javascript">.*<\/script>\s{0,}/, '');
                    options.fileSuccess && options.fileSuccess.call(this, data, file);
                }
            },
            onUploadError: function(file, errorCode, errorMsg, errorString) {
                options.fileError && options.fileError.call(this, errorCode, file, errorMsg, errorString);
            },
            onQueueComplete: function(queueData) {
                options.complete && options.complete.call(this, queueData);
            }
        });
    } else {
        var domainParts = document.domain.split('.')
            , domainPartsLen = domainParts.length
            , domainStr = (/\.com\.cn/i.test(document.domain) ? domainParts[domainPartsLen - 3] + '.' : '') + domainParts[domainPartsLen - 2] + '.' + domainParts[domainPartsLen - 1];
        document.domain = domainStr;
        var input = id + '_input';
        $('#' + id).attr('style', 'position:relative;z-index:0;').after($('<div id="' + id + '_container" style="position:absolute;background-color:transparent;width:' + $('#' + id).innerWidth() + 'px;height:' + $('#' + id).innerHeight() + 'px;overflow:hidden;z-index:1;opacity:0;-moz-opacity:0;filter:alpha(opacity=0);top:0;left:0;background-position:initial initial;background-repeat:initial initial;">').append('<input id="' + input + '" style="font-size:999px;position:absolute;z-index:1;width:100%;height:100%;cursor:pointer;" type="file" accept="image/jpeg,image/gif,image/png">')).parent().attr('style', 'position:relative;');
        $('#' + input).fileupload({
            url: options.url,
            dataType: 'text',
            paramName: options.fileObjName || 'Filedata',
            autoUpload: false,
            acceptFileTypes: /(\.|\/)(gif|jpe?g|png)$/i,
            maxFileSize: options.maxFileSize || 512000,
            singleFileUploads: false,
            forceIframeTransport: true
        }).on('fileuploadadd', function(e, data) {
            $.each(data.files, function(index, file) {
                options.fileAdded && options.fileAdded.call(this, file, 'fileupload', data);
            });
            $.each(data.files, function(index, file) {
                file.id = id + '_file_' + file.size + '_' + index + '_' + (new Date).getTime();
                options.listbox && $(options.listbox).append('<div id="' + file.id + '">' + file.name + ' (' + KFZ.ui.formatSize(file.size) + ') <b></b>' + '</div>');
            });
            if (!data.isAbort) {
                options.uploadStart && options.uploadStart.call(this, data.files[0]);
                data.submit();
            }
        }).on('fileuploaddone', function(e, data) {
            if (data.textStatus === 'success') {
                if (options.listbox) {
                    $.each(data.files, function(index, file) {
                        $('#' + file.id + " b").html("100%");
                        $('#' + file.id).fadeOut();
                    });
                }
                options.fileSuccess && options.fileSuccess.call(this, data.result, data.files[0]);
            }
        }).on('fileuploadfail', function(e, data) {
            options.fileError && options.fileError.call(this, data.result, data.files[0]);
        });
    }
}
;
KFZ.ui.plupload = function(id, options) {
    options || (options = {});
    (id.indexOf('#') === 0) && (id = id.substring(1));
    options.fileType || (options.fileType = 'jpg,jpeg,png,gif');
    options.listbox && (options.listbox.indexOf('#') !== 0) && (options.listbox = '#' + options.listbox);
    options.queueSizeLimit || (options.queueSizeLimit = 0);
    options.upType = KFZ.util.isIE() > 5 ? 'flash,html4' : 'html5,flash,html4';
    var uploader = new plupload.Uploader({
        runtimes: options.upType,
        browse_button: id,
        url: options.url,
        multi_selection: options.multi === false ? false : true,
        max_file_size: options.maxFileSize || '500kb',
        multipart_params: options.data || {},
        file_data_name: options.fileDataName || 'file',
        filters: options.filters || [{
            title: 'Image files',
            extensions: options.fileType
        }],
        flash_swf_url: KFZ.url.host + 'js/common/plupload/Moxie.swf',
        silverlight_xap_url: KFZ.url.host + 'js/common/plupload/Moxie.xap'
    });
    options.init && uploader.bind('Init', options.init);
    uploader.init();
    uploader.bind('FilesAdded', function(up, files) {
        if (options.filesAdded && options.filesAdded(files) === false) {
            uploader.splice(0, uploader.files.length);
            return;
        }
        if (files.length > options.queueSizeLimit) {
            KFZ.ui.alertWin({
                result: 0,
                text: '单次上传个数不能超过' + options.queueSizeLimit + '个！'
            });
            $.each(files, function(i, file) {
                uploader.removeFile(file);
            });
        } else {
            $.each(files, function(i, file) {
                options.listbox && $(options.listbox).append('<div id="' + file.id + '">' + file.name + ' (' + plupload.formatSize(file.size) + ') <b></b>' + '</div>');
                options.fileAdded && options.fileAdded(file);
            });
            if (options.autoUpload !== false) {
                uploader.start();
            }
        }
        up.refresh();
    });
    uploader.bind('UploadProgress', function(up, file) {
        options.listbox && $('#' + file.id + " b").html(file.percent + "%");
        options.uploadProgress && options.uploadProgress(file);
    });
    uploader.bind('Error', function(up, err) {
        if (err.code === -600) {
            KFZ.ui.alertWin({
                result: 0,
                text: '图片文件过大，请上传不超过' + options.maxFileSize + '的图片！'
            });
        } else if (err.code === -601) {
            KFZ.ui.alertWin({
                result: 0,
                text: '图片格式错误，请上传' + options.fileType.toUpperCase() + '格式的图片。'
            });
        } else {
            options.fileError && options.fileError(err);
        }
        up.refresh();
    });
    uploader.bind('FileUploaded', function(up, file, data) {
        if (options.listbox) {
            $('#' + file.id + " b").html("100%");
            $('#' + file.id).fadeOut();
        }
        var res = JSON.parse(data.response);
        if (res.status) {
            options.fileSuccess && options.fileSuccess(res.data, res, file);
        } else {
            options.fileFail && options.fileFail(res.message, res, file);
        }
    });
    return uploader;
}
;
KFZ.ui.nodeMove = function($selectors, $selector, direction, options) {
    options || (options = {});
    var isContinue, beforeMove, callback;
    if ($.isFunction(options)) {
        beforeMove = null;
        callback = options;
    } else {
        beforeMove = options.beforeMove;
        callback = options.callback;
    }
    beforeMove && (isContinue = beforeMove.apply(this, arguments));
    if (isContinue === false)
        return;
    var index = $selectors.index($selector)
        , len = $selectors.length;
    if (direction === 1) {
        if (index > 0) {
            $selectors.eq(index - 1).before($selector);
            index--;
        }
    } else if (direction === 2) {
        if (index < len - 1) {
            $selectors.eq(index + 1).after($selector);
            index++;
        }
    }
    callback && callback.call(this, len);
}
;
KFZ.ui.extendStyle = KFZ.ui.addStyle = function(selector, newStyle) {
    var $el = typeof selector === 'object' ? selector : $(selector);
    var oldStyle = $el.attr('style') || '';
    if (!newStyle)
        return oldStyle;
    var oldStyleArr, styleObj = {};
    if (oldStyle) {
        oldStyleArr = oldStyle.split(';');
        $.each(oldStyleArr, function(index, attr) {
            if (!attr)
                return;
            var attrArr = attr.split(':');
            styleObj[attrArr[0]] = attrArr[1];
        });
    }
    var newStyleArr, extendStyleObj = {};
    if (typeof newStyle === 'object') {
        extendStyleObj = newStyle;
    } else if (typeof newStyle === 'string') {
        newStyleArr = newStyle.split(';');
        $.each(newStyleArr, function(index, attr) {
            if (!attr)
                return;
            var attrArr = attr.split(':');
            extendStyleObj[attrArr[0]] = attrArr[1] || '';
        });
    }
    var nowStyleArr = [];
    styleObj = $.extend(styleObj, extendStyleObj);
    $.each(styleObj, function(key, val) {
        nowStyleArr.push(key + ':' + val);
    });
    $el.attr('style', nowStyleArr.join(';'));
}
;
KFZ.ui.PopWin = function(args) {
    if (!(this instanceof arguments.callee))
        return new arguments.callee(args);
    this.showOverlayWin(args);
    this.drag();
}
;
KFZ.ui.PopWin.prototype = {
    constructor: KFZ.ui.PopWin,
    open: function(openArgs) {
        openArgs && $.extend(this.args, openArgs);
        this.showOverlayWin(this.args);
    },
    showOverlayWin: function(args) {
        $.extend(this, args);
        this.args = args || {};
        var that = this
            , color = args.color
            , opacity = args.opacity
            , box = args.box || 'body'
            , overWin = this.overWin = args.overWin || '#zx_overWin'
            , overlay = this.overlay = args.overlay || '#zx_overlay'
            , overTit = this.overTit = args.overTit === false ? false : args.overTit
            , overCon = args.overCon || ''
            , submitBtn = this.submitBtn = overWin + ' ' + (args.submitBtn || '.subBtn')
            , cancelBtn = this.cancelBtn = overWin + ' ' + (args.cancelBtn || '.cancelBtn')
            , closeBtn = args.closeBtn || [overWin + ' .closeBtn a', this.cancelBtn]
            , autoDisableSubmit = args.autoDisableSubmit
            , needTemplate = this.needTemplate === false ? false : true
            , hasSubmitBtn = this.hasSubmitBtn === false ? false : true
            , hasCancelBtn = this.hasCancelBtn === false ? false : true
            , hasCloseBtn = this.hasCloseBtn === false ? false : true
            , from = this.from = args.from
            , width = this.width = this.overWinWidth = args.width || args.overWinWidth || 480
            , closeOther = args.closeOther
            , onlyCloseWin = this.onlyCloseWin = args.onlyCloseWin || null
            , beforeResize = this.beforeResize = args.beforeResize
            , afterResize = this.afterResize = args.afterResize
            , afterSubmit = this.afterSubmit = args.afterSubmit
            , afterCancel = this.afterCancel = args.afterCancel
            , afterClose = this.afterClose = args.afterClose
            , afterOpen = this.afterOpen = args.afterOpen
            , userAgent = navigator.userAgent
            , otherSet = this.otherSet = !!userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) || (userAgent.indexOf('Android') > -1 || userAgent.indexOf('Linux') > -1);
        this.setOverlay({
            box: box,
            color: color,
            opacity: opacity,
            overlay: overlay
        });
        if (needTemplate) {
            this.setOverWin(overWin, overTit);
        }
        this.$overWin = $(overWin);
        this.$overTit = overTit === false ? null : this.$overWin.find('.overTit').length ? this.$overWin.find('.overTit') : this.$overWin.find('h3');
        this.$overCon = this.$overWin.find('.overWinText');
        this.disableDrag = args.disableDrag === true ? true : false;
        this.disableFixed = args.disableFixed === false ? false : (args.disableFixed === true || otherSet) ? true : false;
        args.init && args.init(args);
        args.initialize && args.initialize(args);
        if (closeOther)
            $('.overTip').hide().removeClass('open');
        if (overTit && this.$overTit.length)
            this.$overTit.html(overTit);
        if (overCon && this.$overCon.length)
            this.$overCon.html(overCon);
        if (from !== undefined || from !== null)
            this.$overWin.attr('from', from);
        this.$overWin.width(width);
        setTimeout(function() {
            KFZ.ui.PopWin.resizeHandler = function() {
                that.resize();
            }
            ;
            if (!that.disableFixed)
                $(window).resize(KFZ.ui.PopWin.resizeHandler);
            if (KFZ.util.isIE() === 6) {
                window.PngFix && window.PngFix.fix(that.overWin + ' .closeBtn a');
                KFZ.ui.PopWin.resizeHandler();
                $(window).scroll(KFZ.ui.PopWin.resizeHandler);
            }
            that.resize();
            afterOpen && afterOpen.apply(that, arguments);
        });
        submitBtn && afterSubmit && typeof afterSubmit === 'function' && $('body').undelegate(submitBtn + ':not(.disabled)', 'click').delegate(submitBtn + ':not(.disabled)', 'click', function() {
            if (autoDisableSubmit)
                that.disableSubmit();
            if (afterSubmit.call(that, this) === false)
                return;
            that.close();
        });
        cancelBtn && afterCancel && typeof afterCancel === 'function' && $('body').undelegate(cancelBtn + ':not(.disabled)', 'click').delegate(cancelBtn + ':not(.disabled)', 'click', function() {
            if (afterCancel.call(that, this) === false)
                return;
            that.close();
        });
        closeBtn && KFZ.util.multiObjRun(closeBtn, 'click', function() {
            that.close();
        });
        var escHandler = function(event) {
            event.which === 27 && that.close();
        };
        $(document).unbind('keyup', escHandler).bind('keyup', escHandler);
    },
    setOverlay: function(args) {
        var box = args.box || 'body'
            , color = args.color || '#000'
            , opacity = args.opacity || 0.5
            , overlay = args.overlay || '#zx_overlay';
        if (!$(overlay).length) {
            $(box).append('<div id="' + overlay.replace(/#/, '') + '"></div>');
        }
        var overlayStyle = {
            'position': 'absolute',
            'z-index': '1000000',
            'left': '0',
            'top': '0',
            'background': color,
            'opacity': opacity,
            '-moz-opacity': opacity,
            'filter': 'alpha(opacity=' + opacity * 100 + ')'
        };
        KFZ.ui.extendStyle(overlay, overlayStyle);
        $(overlay).width($(document).width()).height($(document).height()).show();
    },
    drag: function() {
        var d = document, win = d.getElementById(this.overWin.replace(/#/, '')), tit = win.getElementsByTagName('h3')[0], s = win.style, x, y;
        if (this.disableDrag || !tit)
            return;
        tit.onselectstart = function() {
            return false;
        }
        ;
        tit.onmousedown = function(e) {
            e = e || event;
            x = e.clientX - win.offsetLeft;
            y = e.clientY - win.offsetTop;
            d.onmousemove = function(e) {
                e = e || event;
                s.left = e.clientX - x + 'px';
                s.top = e.clientY - y + 'px';
            }
            ;
            d.onmouseup = function() {
                d.onmouseup = d.onmousemove = null;
            }
            ;
        }
        ;
    },
    setOverWin: function(overWin, overTit) {
        if ($(overWin).length)
            return;
        var html = '<div id="' + overWin.replace(/#/, '') + '" class="overTip" style="display:none;">' + '<div class="overWin">' + (overTit === false ? '' : '<h3 class="overTit">' + (overTit || '') + '</h3>') + '<div class="overWinCon">' + '<div class="overWinText"></div>' + (this.hasSubmitBtn === false && this.hasCancelBtn === false ? '' : '<div class="overWinBtn">' + '<div class="overWinBtnBox">' + (this.hasSubmitBtn === false ? '' : '<a class="subBtn" href="javascript:;">' + KFZ.lang.kfz.confirm + '</a>') + (this.hasCancelBtn === false ? '' : '<a class="cancelBtn" href="javascript:;">' + KFZ.lang.kfz.abolish + '</a>') + '</div>' + '</div>') + '</div>' + (this.hasCloseBtn === false ? '' : '<div class="closeBtn"><a href="javascript:;" title="' + KFZ.lang.kfz.cancel + '"></a></div>') + '</div>' + '</div>';
        $('body').append(html);
    },
    setStyle: function() {
        if ($('#overWin_style').length)
            return;
        var styleHtml = '<style id="overWin_style">' + '.overTip,.overWin h3{padding:0;margin:0;}' + '.overWin{position:relative;width:408px;background:#fff;border:5px solid #999;}' + '.overWin .closeBtn{position:absolute;z-index:10;right:8px;top:8px;width:25px;height:25px;}' + '.overWin .closeBtn a{display:block;width:25px;height:25px;background:url(/images/bg_overWin_closeBtn.gif) -8px -8px no-repeat;}' + '.overWin .closeBtn a:hover{background:url(/images/bg_overWin_closeBtn.gif) -8px -48px no-repeat;}' + '.overWin h3{height:40px;background:#f9f9f9;border-bottom:1px solid #e5e5e5;line-height:40px;text-align:center;color:#999;font-size:16px;font-family:\5FAE\8F6F\96C5\9ED1;overflow:hidden;}' + '.overWin .overWinCon{position:relative;padding:10px 0 20px;background:url(/images/bg_overWin.gif) 0 bottom no-repeat;}' + '.overWin .overWinTextCon{min-height:70px;height:auto!important;_height:70px;line-height:50px;text-align:center;}' + '.overWin .overWinBtn{position:relative;padding:15px 0 0 90px;overflow:hidden;*zoom:1;}' + '.overWin .overWinBtn .one{padding-left:150px;}' + '.overWin .overWinBtn a{margin:0 10px;float:left;*display:inline;}' + '.overWin .disabled,.overWin .disabled:hover{display:block;background:#a2a2a2 url(/images/waiting.gif) center center no-repeat;line-height:25px;border-radius:3px;text-indent:-99999px;color:#fff;cursor:default;}' + '</style>';
        $('body').append(styleHtml);
    },
    resize: function() {
        this.beforeResize && this.beforeResize.apply(this, arguments);
        var overlay = this.overlay, overWin = this.overWin, width = this.width, disableFixed = this.disableFixed, overWinHeight;
        $(overlay).width($(window).width()).height($(window).height()).width($(document).width() - ($(document).height() > $(window).height() && ($.inArray(KFZ.util.isIE(), [6, 8]) > -1 ? 22 : $.inArray(KFZ.util.isIE(), [9, 10]) > -1 ? 18 : 0))).height($(document).height());
        this.$overWin.width(width);
        var overWinRealHeight = this.$overWin.css('height', 'auto').height();
        if (overWinRealHeight <= 100) {
            if ($(window).height() - 30 < 100) {
                overWinHeight = $(window).height() - 30;
            } else {
                overWinHeight = 100;
            }
        } else {
            if ($(window).height() - 30 < overWinRealHeight) {
                overWinHeight = $(window).height() - 30;
            } else {
                overWinHeight = overWinRealHeight;
            }
        }
        var newStyle = {
            'position': disableFixed ? 'absolute' : 'fixed',
            '_position': 'absolute',
            '_overflow': 'visible',
            'z-index': '1000001',
            'left': (disableFixed ? document.body.scrollLeft + 10 + ((window.screen.width - width) / 2 < 0 ? 0 : (window.screen.width - width) / 2) : ($(window).width() - width) / 2) + 'px',
            'top': (disableFixed ? document.body.scrollTop + 10 : ($(window).height() - overWinHeight) / 2 - 5) + 'px',
            '_top': $(window).scrollTop() + (($(window).height() - overWinHeight) / 2 - 5) + 'px',
            'visibility': 'visible'
        };
        if (disableFixed) {
            newStyle.top = document.body.scrollTop + (($(window).height() - overWinRealHeight) / 2 < 0 ? 0 : ($(window).height() - overWinRealHeight) / 2) + "px";
            newStyle.left = document.body.scrollLeft + (($(window).width() - width) / 2 < 0 ? 0 : ($(window).width() - width) / 2) + "px";
        }
        KFZ.ui.extendStyle(overWin, newStyle);
        if (!this.$overWin.hasClass('open')) {
            this.$overWin.slideDown('fast').addClass('open');
        } else {
            this.$overWin.show();
        }
        this.afterResize && this.afterResize.apply(this, arguments);
        return this;
    },
    disableSubmit: function() {
        this.submitBtnText = $(this.submitBtn).text();
        $(this.submitBtn).addClass('disabled');
        return this;
    },
    enableSubmit: function() {
        $(this.submitBtn).removeClass('disabled');
        !$(this.submitBtn).html() && this.submitBtnText && $(this.submitBtn).html(this.submitBtnText);
        return this;
    },
    close: function(onlyCloseWin, noDelay) {
        var that = this
            , overlay = this.overlay
            , overWin = this.overWin
            , afterClose = this.afterClose
            , type = 'fadeOut'
            , speed = 'fast';
        if (noDelay) {
            type = 'hide';
            speed = null;
        }
        if (!this.onlyCloseWin && !onlyCloseWin)
            $(overlay)[type](speed);
        $(overWin)[type](speed).removeClass('open');
        $(window).unbind('resize', KFZ.ui.PopWin.resizeHandler).unbind('scroll', KFZ.ui.PopWin.resizeHandler);
        afterClose && afterClose.apply(this, arguments);
        setTimeout(function() {
            that.enableSubmit.call(that);
        }, (speed ? 200 : 0));
        return this;
    }
};
KFZ.ui.confirmWin = function(text, onlyCloseWin, afterConfirm) {
    if ($.isFunction(onlyCloseWin)) {
        afterConfirm = onlyCloseWin;
        onlyCloseWin = null;
    }
    KFZ.ui.confirmWin.win = new KFZ.ui.PopWin({
        overWin: '#kfz_confirmWin',
        overTit: false,
        overCon: text || '',
        onlyCloseWin: onlyCloseWin,
        afterOpen: function() {
            $(this.overWin).find('.overWinText').addClass('confirmCon');
        },
        afterSubmit: function() {
            afterConfirm && afterConfirm.apply(this, arguments);
        },
        closeBtn: ['#kfz_confirmWin .closeBtn a', '#kfz_confirmWin .cancelBtn'],
        afterClose: function() {
            KFZ.ui.confirmWin.win = null;
        }
    });
}
;
(KFZ.ui.alertWin = function(args) {
        var self = arguments.callee;
        if (!args) {
            self.close || (self.close = function() {
                    self.hideTip && clearTimeout(self.hideTip);
                    $('.tiplay').fadeOut();
                }
            );
            return;
        }
        var classType = args.result
            , tipInfo = args.text
            , minWidth = args.minWidth || 300
            , maxWidth = args.maxWidth || 984
            , width = args.width || 984
            , speed = args.speed || 5000
            , errClass = args.errClass || 'tip_err'
            , sucClass = args.sucClass || 'tip_suc'
            , infoClass = args.infoClass || 'tip_info'
            , noFixed = args.noFixed
            , $tiplay = $('.tiplay');
        if (!tipInfo)
            return;
        if (!$tiplay.length) {
            var addHtml = '<div class="tiplay"' + (noFixed ? ' style="position:absolute;_top:0;"' : '') + '><div class="tipBox"><div class="tiplay_info"></div></div></div>';
            $('body').append(addHtml).on('click', '.tiplay', self.close);
            $tiplay = $('.tiplay');
            setTimeout(function() {
                $(window).resize(function() {
                    $tiplay.css('left', ($(window).width() - width) / 2 + 'px');
                });
            });
            if (args.needStyle && !$('#run_alertwin_style').length) {
                var styleHtml = '<style id="run_alertwin_style">' + '.tiplay{position:fixed;_position:absolute;top:0;_top:expression(documentElement.scrollTop);left:0;z-index:1000001;height:34px;background:none;line-height:34px;word-wrap:break-word;word-break:break-all;float:left;overflow:hidden;display:none;}' + '.tipBox{height:30px;margin:0 auto;background:#ffd;border:1px solid #fdb;float:left;overflow:hidden;}' + '.tiplay_info{padding-left:25px;margin:0 10px;line-height:30px;background:url(/images/bg_tip.gif) no-repeat;float:left;*display:inline;cursor:default;}' + '.tiplay .tip_suc .tiplay_info{background-position:0 1px;color:#333;}' + '.tiplay .tip_err .tiplay_info{background-position:0 -29px;color:#c00;}' + '.tiplay .tip_info .tiplay_info{background-position:0 1px;color:#333;}' + '</style>';
                $('body').append(styleHtml);
            }
        }
        var className;
        switch (classType) {
            case 0:
                className = errClass;
                break;
            case 1:
                className = sucClass;
                break;
            default:
                className = infoClass;
        }
        self.hideTip && clearTimeout(self.hideTip);
        $tiplay.find('.tipBox').attr('class', 'tipBox ' + className);
        var $tipInfo = $tiplay.find('.tiplay_info');
        $tipInfo.html(tipInfo);
        !width && (width = $tiplay.width());
        maxWidth && width > maxWidth && (width = maxWidth);
        minWidth && width < minWidth && (width = minWidth);
        $tiplay.width(width).css('left', ($(window).width() - width) / 2 + 'px').show().find('.tipBox').width(width).css({
            'position': 'relative',
            'float': 'none'
        });
        var tipInfoWidth = $tipInfo.width('auto').width() + 50;
        KFZ.ui.extendStyle($tipInfo, {
            'position': 'absolute',
            'width': tipInfoWidth + 'px',
            'left': (width - tipInfoWidth) / 2 + 'px',
            'float': 'none'
        });
        self.hideTip = setTimeout(function() {
            $tiplay.fadeOut();
        }, speed);
    }
)();
KFZ.ui.setMaxSize = (function() {
    var start = {}
        , count = 0;
    return function(img, maxWidth, maxHeight, isSetPosition, callback) {
        var $img = (typeof img == 'object') ? img : $(img);
        if (!$img.length || $img.attr('imgresized') === '1')
            return;
        $img.removeAttr('width').removeAttr('height').css({
            width: 'auto',
            height: 'auto'
        });
        (function($img, maxWidth, maxHeight, isSetPosition, callback) {
            var ac = arguments.callee
                , w = $img.width()
                , h = $img.height();
            if (!w || !h) {
                start[count] || (start[count] = +new Date());
                if (+new Date() - start[count] < 15000) {
                    setTimeout(function() {
                        ac($img, maxWidth, maxHeight, isSetPosition, callback);
                    }, 300);
                } else {
                    delete start[count];
                }
                return;
            }
            start[count] && delete start[count];
            if (w > maxWidth || h > maxHeight) {
                var rateW = w / maxWidth
                    , rateH = h / maxHeight;
                if (rateW > 1 || rateH > 1) {
                    if (rateW / rateH > 1) {
                        $img.width(maxWidth).height(h / rateW);
                    } else {
                        $img.width(w / rateH).height(maxHeight);
                    }
                }
            }
            if (isSetPosition) {
                var $imgParent = $img.parent();
                KFZ.ui.extendStyle($img, {
                    'display': 'block',
                    'position': 'absolute',
                    'left': (maxWidth + parseInt($imgParent.css('padding-left')) + parseInt($imgParent.css('padding-right')) - $img.width()) / 2 + 'px',
                    'top': (maxHeight + parseInt($imgParent.css('padding-top')) + parseInt($imgParent.css('padding-bottom')) - $img.height()) / 2 + 'px'
                });
                $imgParent.css({
                    'position': 'relative',
                    'overflow': 'hidden'
                });
            }
            $img.removeAttr('imgload').attr('imgresized', '1');
            callback && callback($img, count);
            count++;
        })($img, maxWidth, maxHeight, isSetPosition, callback);
    }
        ;
})();
KFZ.ui.resizeImage = (function() {
    var count = 0;
    return function(imgs, options) {
        options || (options = {});
        var self = arguments.callee, maxWidth, maxHeight, isSetPosition, callback, errSrc;
        if (typeof options === 'number' && typeof arguments[2] === 'number') {
            maxWidth = options;
            maxHeight = arguments[2];
            isSetPosition = arguments[3];
            callback = arguments[4];
        } else {
            maxWidth = options.maxWidth;
            maxHeight = options.maxHeight;
            isSetPosition = options.isSetPosition;
            callback = options.callback;
            errSrc = options.errSrc;
        }
        var $imgs = typeof imgs == 'object' ? imgs : $(imgs)
            , len = $imgs.length;
        (errSrc || (maxWidth && maxHeight)) && len && $.each($imgs, function() {
            if ($(this).attr('imgresized') === '1')
                return;
            var src = $.trim($(this).attr('src'));
            if (!src) {
                if (errSrc) {
                    $(this).attr('src', (src = errSrc));
                } else {
                    return;
                }
            }
            var img = new Image()
                , start = +new Date()
                , stamp = start + '_' + count++
                , isIE = KFZ.util.isIE();
            $(this).attr('imgload', 'img_' + stamp);
            if (!isIE)
                img.src = src;
            errSrc && (img.onerror = function() {
                    var $errImg = $('[imgload="img_' + stamp + '"]');
                    if ($errImg.attr('imgerr') === '1')
                        return;
                    $errImg.attr({
                        'src': errSrc,
                        'imgerr': '1'
                    });
                    maxWidth && maxHeight && setTimeout(function() {
                        self($errImg, maxWidth, maxHeight, isSetPosition, callback);
                    });
                }
            );
            maxWidth && maxHeight && (function() {
                if (img.complete) {
                    setTimeout(function() {
                        KFZ.ui.setMaxSize($('[imgload="img_' + stamp + '"]').removeAttr('imgerr'), maxWidth, maxHeight, isSetPosition, callback);
                    });
                    return;
                }
                img.onload = function() {
                    setTimeout(function() {
                        KFZ.ui.setMaxSize($('[imgload="img_' + stamp + '"]').removeAttr('imgerr'), maxWidth, maxHeight, isSetPosition, callback);
                    });
                }
                ;
            })();
            if (isIE)
                img.src = src;
        });
    }
        ;
})();
KFZ.ui.Pager = function(args) {
    if (!(this instanceof arguments.callee))
        return new arguments.callee(args);
    this.init(args);
}
;
KFZ.ui.Pager.prototype = {
    constructor: KFZ.ui.Pager,
    init: function(args) {
        var that = this;
        var argsArr = ['box', 'currClass', 'pageCurr', 'pageShow', 'recordCount', 'recordBefore', 'recordAfter', 'defaults', 'isLazy', 'lazyCache', 'afterOpen', 'getCon', 'setCon', 'beforeHandleClick', 'afterHandleClick'];
        $.each(argsArr, function() {
            if (args[this] !== undefined && args[this] !== null)
                that[this] = args[this];
        });
        $(this.box = this.box || '#kfz_pager_box').hide();
        this.currClass = this.currClass || 'curr';
        this.pageCurr = this.pageCurr || 1;
        this.isLazy = this.isLazy === true ? true : false;
        this.lazyCache = this.lazyCache || 100;
        this.list = {};
        this.open(this.defaults, this.afterOpen);
        this.setEvent();
    },
    open: function(pager, callback) {
        if ($.isFunction(pager)) {
            callback = pager;
            pager = null;
        }
        if (!$(this.box).length)
            return this;
        this.setTemplate();
        this.setStyle();
        this.render(pager);
        callback && callback.apply(this, arguments);
        return this;
    },
    render: function(pager, items) {
        if (this.hasParams(pager)) {
            pager || (pager = {});
            pager.pageCurr = (this.pageCurr = +pager.pageCurr || this.pageCurr);
            pager.pageShow = (this.pageShow = +pager.pageShow || this.pageShow || 10);
            pager.recordCount = (this.recordCount = isNaN(pager.recordCount) ? this.recordCount : +pager.recordCount);
            pager.recordBefore = +pager.recordBefore || 0;
            pager.recordAfter = +pager.recordAfter || 0;
            pager.pageCount = pager.pageShow ? Math.ceil(pager.recordCount / pager.pageShow) : 0;
            var recordEndTheory = pager.pageShow * pager.pageCurr;
            pager.recordStart = recordEndTheory - pager.pageShow + 1;
            pager.recordEnd = recordEndTheory > pager.recordCount ? pager.recordCount : recordEndTheory;
            if (this.getCon && $.isFunction(this.getCon)) {
                if (this.isLazy) {
                    if ((items && items.length) || ((items = this.hasCon(pager)) && items.length) || (+pager.pageCurr === 1 && +pager.recordCount === 0 && (items = []))) {
                        this.renderPager(pager);
                        items = [].concat(items);
                        items.splice(pager.recordEnd, pager.recordAfter);
                        items.splice(0, pager.recordBefore);
                        this.renderCon(items);
                        return;
                    }
                } else {
                    if (items && items.length || (+pager.pageCurr === 1 && +pager.recordCount === 0 && (items = []))) {
                        this.renderPager(pager);
                        items = [].concat(items);
                        items.splice(pager.recordEnd, pager.recordAfter);
                        items.splice(0, pager.recordBefore);
                        this.renderCon(items);
                        return;
                    }
                }
            } else {
                this.renderPager(pager);
                return;
            }
        }
        if (this.getCon && $.isFunction(this.getCon)) {
            this.requestCon();
        } else {
            $(this.box).hide();
        }
        return this;
    },
    requestCon: function(callback) {
        var that = this;
        this.getCon(function(pager, items, msg) {
            pager = pager || {};
            items = items || [];
            pager.pageCurr = (that.pageCurr = +pager.pageCurr || that.pageCurr);
            pager.pageShow = (that.pageShow = +pager.pageShow || that.pageShow || 10);
            pager.recordCount = (this.recordCount = isNaN(pager.recordCount) ? this.recordCount : +pager.recordCount);
            pager.pageCount = pager.pageShow ? Math.ceil(pager.recordCount / pager.pageShow) : 0;
            pager.recordEndTheory = pager.pageShow * pager.pageCurr;
            pager.recordStart = pager.recordEndTheory - pager.pageShow + 1;
            pager.recordEnd = pager.recordEndTheory > pager.recordCount ? pager.recordCount : pager.recordEndTheory;
            that.isLazy && that.saveCon(pager, items);
            if (items && items.length) {
                that.render(pager, items, msg);
            } else {
                var $load = $(".loading");
                if ($load.length > 0) {
                    if (msg) {
                        $load.text(msg);
                    } else {
                        $load.text(KFZ.lang.kfz.dataRequestNull);
                    }
                    $load.css({
                        "background": "none",
                        "textAlign": "center"
                    });
                } else {
                    KFZ.ui.alertWin({
                        result: 0,
                        text: KFZ.lang.kfz.dataRequestNull
                    });
                }
            }
            callback && callback.apply(this, arguments);
        });
    },
    saveCon: function(pager, items) {
        if (!this.isLazy)
            return;
        var that = this;
        if ($.isArray(items) && items.length) {
            $.each(items, function(index, item) {
                that.list[pager.recordStart - (pager.recordBefore = +pager.recordBefore || 0) + index] = item;
            });
        }
        this.limitList();
    },
    renderPager: function(pager) {
        if (!pager)
            return;
        var pageCurr = pager.pageCurr
            , pageCount = pager.pageCount
            , recordCount = pager.recordCount
            , recordStart = pager.recordStart
            , recordEnd = pager.recordEnd;
        var $box = $(this.box)
            , $pageInfoBox = $box.find('.pager_info_box')
            , $pageNumBox = $box.find('.pager_num_box')
            , $pagePrevBtn = $pageNumBox.find('.pager_prev_btn')
            , $pageNextBtn = $pageNumBox.find('.pager_next_btn');
        $pageInfoBox.find('em').html(recordStart).siblings('i').html(recordEnd).siblings('b').html(recordCount);
        $pagePrevBtn.siblings('a:not(.pager_next_btn):not(.pager_turn_btn), span:not(.pager_input_box)').remove();
        var pageHtml = '';
        if (pageCount === 0) {
            $box.hide();
            return;
        } else if (pageCount < 12) {
            for (var i = 0; i < pageCount; i++) {
                pageHtml += '<a ' + (pageCurr === (i + 1) ? 'class="' + this.currClass + '" ' : '') + 'href="javascript:;">' + (i + 1) + '</a>';
            }
        } else if (pageCount >= 12) {
            for (var i = 0; i < pageCount; i++) {
                if (i !== 0 && i !== pageCount - 1) {
                    if (pageCurr > 6 && pageCount - (i + 1) > 9 && pageCurr - (i + 1) > 4) {
                        if (i + 1 === 2) {
                            pageHtml += '<span>...</span>';
                        }
                        continue;
                    }
                    if (pageCount - pageCurr > 5 && (i + 1) > 10 && (i + 1) - pageCurr > 4) {
                        if (i + 1 === pageCount - 1) {
                            pageHtml += '<span>...</span>';
                        }
                        continue;
                    }
                }
                pageHtml += '<a ' + (pageCurr === (i + 1) ? 'class="' + this.currClass + '" ' : '') + 'href="javascript:;">' + (i + 1) + '</a>';
            }
        }
        $pagePrevBtn.after(pageHtml);
        if (pageCurr < 2) {
            $pagePrevBtn.addClass('no_page');
        } else {
            $pagePrevBtn.removeClass('no_page');
        }
        if (pageCurr > pageCount - 1) {
            $pageNextBtn.addClass('no_page');
        } else {
            $pageNextBtn.removeClass('no_page');
        }
        if (pageCount)
            $box.show();
        return this;
    },
    renderCon: function(items) {
        this.setCon && this.setCon.call(this, items);
    },
    hasParams: function(pager) {
        return !!((pager && !isNaN(pager.pageShow) && !isNaN(pager.recordCount)) || (this.pageShow && !isNaN(this.recordCount)));
    },
    hasCon: function(pager) {
        if (!pager || isNaN(pager.recordStart) || isNaN(pager.recordEnd))
            return [];
        var list = this.list
            , items = [];
        for (var i = +pager.recordStart; i < 1 + pager.recordEnd; i++) {
            if (list[i]) {
                items.push(list[i]);
            } else {
                items = [];
                break;
            }
        }
        return items;
    },
    clearTurnInput: function() {
        $(this.box).find('.pager_input_box :text').val('');
    },
    getRecordStart: function(pager) {
        pager || (pager = {});
        pager.pageShow || (pager.pageShow = this.pageShow);
        pager.pageCurr || (pager.pageCurr = this.pageCurr);
        return pager.pageShow * (pager.pageCurr - 1) + 1;
    },
    getList: function() {
        return $.extend(true, {}, this.list);
    },
    get: function(index) {
        var type = typeof index
            , item = type === 'object' ? KFZ.util.get(this.list, index) : type === 'number' ? this.list[index] : undefined
            , typeItem = typeof item;
        return typeItem === 'object' ? type$.extend(true, {}, item) : typeItem === 'array' ? [].concat(item) : item;
    },
    add: function(index, item, notRender) {
        this.update(index, 1, item, notRender);
    },
    unshift: function(item, notRender) {
        this.update(1, 1, item, notRender);
        return this.list;
    },
    unshiftList: function(item, notRender) {
        this.unshift(item, notRender);
    },
    remove: function(index, notRender) {
        this.update(index, 0, undefined, notRender);
        return this.list;
    },
    removeList: function(index, notRender) {
        this.remove(index, notRender);
    },
    update: function(index, isInsert, item, notRender) {
        var that = this;
        if (typeof isInsert === 'object') {
            notRender = item;
            item = isInsert;
            isInsert = undefined;
        }
        !$.isArray(index) && (index = [index]);
        $.each(index, function(i, itemIndex) {
            that.updateData(itemIndex, isInsert, item);
        });
        !notRender && this.open({
            recordCount: this.recordCount
        });
        return this.list;
    },
    updateList: function(index, isInsert, item, notRender) {
        this.update(index, isInsert, item, notRender);
    },
    updateData: function(index, isInsert, item) {
        var list = this.list
            , type = typeof index;
        (type === 'string' || type === 'object') && $.each(list, function(k, v) {
            if (KFZ.util.compare(v, index) || KFZ.util.index([v], index) > -1) {
                index = +k;
                return false;
            }
        });
        if (isNaN(index = +index))
            return list;
        var listInfo = this.getListInfo()
            , maxPos = +listInfo.maxPos;
        if (typeof isInsert === 'object') {
            item = isInsert;
            isInsert = undefined;
        }
        if (isInsert) {
            this.addData(index, maxPos, item);
            this.limitList(listInfo);
        } else {
            if (item) {
                $.extend(list[index] || (list[index] = {}), item);
            } else {
                this.deleteData(index, maxPos);
            }
        }
        return list;
    },
    addData: function(index, maxPos, item) {
        if (!item)
            return this.recordCount;
        var list = this.list;
        for (var i = maxPos; i >= index; i--) {
            if (list[i] !== undefined) {
                list[i + 1] = list[i];
            } else {
                list[i + 1] !== undefined && delete list[i + 1];
            }
        }
        list[index] = item;
        ++this.recordCount;
        return list;
    },
    deleteData: function(index, maxPos) {
        var list = this.list;
        for (var i = index; i <= maxPos; i++) {
            if (list[i + 1] !== undefined) {
                list[i] = list[i + 1];
            } else {
                list[i] !== undefined && delete list[i];
            }
        }
        --this.recordCount;
        return list;
    },
    limitList: function(listInfo) {
        if (!this.isLazy)
            return;
        listInfo = listInfo || this.getListInfo();
        var list = this.list
            , leftLen = +listInfo.leftLen
            , rightLen = +listInfo.rightLen
            , maxPos = +listInfo.maxPos;
        var lazyCache = this.lazyCache
            , pageShow = this.pageShow
            , halfLazyCache = lazyCache / 2
            , halfLazyCacheLeft = Math.ceil(halfLazyCache)
            , halfLazyCacheRight = Math.floor(halfLazyCache)
            , removeLeft = 0
            , removeRight = 0;
        if (leftLen + rightLen > lazyCache) {
            if (leftLen > halfLazyCacheLeft && rightLen <= halfLazyCacheRight) {
                removeLeft = leftLen + rightLen - lazyCache;
                var hasRemoveLeft = 0
                    , i = 1;
                while (hasRemoveLeft < removeLeft) {
                    if (list[i]) {
                        delete list[i];
                        hasRemoveLeft++;
                    }
                    i++;
                }
            } else if (rightLen > halfLazyCacheRight && leftLen <= halfLazyCacheLeft) {
                removeRight = leftLen + rightLen - lazyCache;
                var hasRemoveRight = 0
                    , j = maxPos + 1;
                while (hasRemoveRight < removeRight) {
                    if (list[j]) {
                        delete list[j];
                        hasRemoveRight++;
                    }
                    j--;
                }
            } else {
                removeLeft = leftLen - halfLazyCacheLeft;
                var hasRemoveLeft = 0
                    , i = 1;
                while (hasRemoveLeft < removeLeft) {
                    if (list[i]) {
                        delete list[i];
                        hasRemoveLeft++;
                    }
                    i++;
                }
                removeRight = rightLen - halfLazyCacheRight;
                var hasRemoveRight = 0
                    , j = maxPos + 1;
                while (hasRemoveRight < removeRight) {
                    if (list[j]) {
                        delete list[j];
                        hasRemoveRight++;
                    }
                    j--;
                }
            }
        }
    },
    getListInfo: function() {
        var maxPos = 0
            , leftLen = 0
            , rightLen = 0
            , recordEndTheory = this.pageShow * this.pageCurr
            , recordStart = recordEndTheory - this.pageShow + 1
            , recordEnd = recordEndTheory > this.recordCount ? this.recordCount : recordEndTheory
            , currPos = Math.ceil((recordEnd + recordStart) / 2);
        $.each(this.list, function(key, item) {
            key = +key;
            if (maxPos < key)
                maxPos = key;
            if (currPos < key) {
                rightLen++;
            } else {
                leftLen++;
            }
        });
        return {
            maxPos: maxPos,
            leftLen: leftLen,
            rightLen: rightLen,
            currPos: currPos
        }
    },
    reset: function(pager, callback) {
        this.pageCurr = 1;
        this.pageShow = this.recordCount = this.recordBefore = this.recordAfter = 0;
        this.open(pager, callback);
        return this;
    },
    clickUpdate: function() {
        this.render();
    },
    setTemplate: function() {
        var $box = $(this.box);
        if ($box.find('.pager_num_box').length)
            return;
        $box.addClass('kfz_pager_box');
        var html = '<div class="pager_info_box"><em></em>-<i></i>' + KFZ.lang.kfz.itemsAndAll + '<b></b>' + KFZ.lang.kfz.items + '</div>' + '<div class="pager_num_box">' + '<a class="pager_prev_btn" href="javascript:;">' + KFZ.lang.kfz.prevPage + '</a>' + '<a class="pager_next_btn" href="javascript:;">' + KFZ.lang.kfz.nextPage + '</a>' + '<span class="pager_input_box">' + KFZ.lang.kfz.to + '<input type="text">' + KFZ.lang.kfz.page + '</span>' + '<a class="pager_turn_btn" href="javascript:;">' + KFZ.lang.kfz.confirm + '</a>' + '</div>';
        $box.append(html);
    },
    setStyle: function() {
        if ($('#kfz_pager_style').length)
            return;
        var styleHtml = '<style id="kfz_pager_style">' + '.kfz_pager_box a{margin:0 3px;}' + '.kfz_pager_box a.curr{color:#f60;}' + '.kfz_pager_box a.no_page,.kfz_pager_box a.no_page:hover{color:#999;text-decoration:none;cursor:text;border:1px solid #cdcdcd;}' + '.kfz_pager_box .pager_input_box input{width:30px;}' + '</style>';
        $('body').append(styleHtml);
    },
    setEvent: function() {
        var that = this
            , currClass = this.currClass
            , beforeHandleClick = this.beforeHandleClick
            , afterHandleClick = this.afterHandleClick;
        $('body').undelegate(this.box + ' a.pager_prev_btn:not(.no_page)', 'click').delegate(this.box + ' a.pager_prev_btn:not(.no_page)', 'click', function() {
            if (beforeHandleClick && beforeHandleClick.apply(this, arguments) === false)
                return;
            KFZ.ui.alertWin.close();
            that.pageCurr--;
            that.clickUpdate();
            that.clearTurnInput();
            afterHandleClick && afterHandleClick.apply(this, arguments);
        }).undelegate(this.box + ' a.pager_next_btn:not(.no_page)', 'click').delegate(this.box + ' a.pager_next_btn:not(.no_page)', 'click', function() {
            if (beforeHandleClick && beforeHandleClick.apply(this, arguments) === false)
                return;
            KFZ.ui.alertWin.close();
            that.pageCurr++;
            that.clickUpdate();
            that.clearTurnInput();
            afterHandleClick && afterHandleClick.apply(this, arguments);
        }).undelegate(this.box + ' a:not(.' + currClass + '):not(.pager_prev_btn):not(.pager_next_btn):not(.pager_turn_btn)', 'click').delegate(this.box + ' a:not(.' + currClass + '):not(.pager_prev_btn):not(.pager_next_btn):not(.pager_turn_btn)', 'click', function() {
            if (beforeHandleClick && beforeHandleClick.apply(this, arguments) === false)
                return;
            KFZ.ui.alertWin.close();
            that.pageCurr = Number($(this).html());
            that.clickUpdate();
            that.clearTurnInput();
            afterHandleClick && afterHandleClick.apply(this, arguments);
        }).undelegate(this.box + ' a.pager_turn_btn', 'click').delegate(this.box + ' a.pager_turn_btn', 'click', function() {
            var $input = $(this).siblings('.pager_input_box').find(':text')
                , inputPageCurr = $input.val();
            if (!inputPageCurr || !KFZ.util.isInt(inputPageCurr = Number(inputPageCurr))) {
                KFZ.ui.alertWin({
                    result: 0,
                    text: KFZ.lang.kfz.inputCorrectPage
                });
                return;
            }
            var pageCount = that.pageShow ? Math.ceil(that.recordCount / that.pageShow) : 0;
            if (!pageCount) {
                $(that.box).hide();
                return;
            }
            if (beforeHandleClick && beforeHandleClick.apply(this, arguments) === false)
                return;
            KFZ.ui.alertWin.close();
            that.pageCurr = pageCount >= inputPageCurr ? inputPageCurr : pageCount;
            that.pageCurr = that.pageCurr < 1 ? 1 : that.pageCurr;
            $input.val(that.pageCurr);
            that.clickUpdate();
            afterHandleClick && afterHandleClick.apply(this, arguments);
        }).undelegate(this.box + ' .pager_input_box :text', 'keydown').delegate(this.box + ' .pager_input_box :text', 'keydown', function(event) {
            var keyCode = event.which;
            if (keyCode == 13) {
                $(that.box).find('a.pager_turn_btn').trigger('click');
            }
        });
    }
};
KFZ.ui.AssInput = function(args) {
    if (!(this instanceof arguments.callee))
        return new arguments.callee(args);
    this.input = args.input;
    this.box = args.box;
    this.getItems = args.getItems;
    this.hasRecommend = args.hasRecommend;
    this.callback = args.callback;
    this.itemsRecords = {};
    this.init();
}
;
KFZ.ui.AssInput.prototype = {
    constructor: KFZ.ui.assInput,
    init: function(args) {
        this.setEvent(this.input, this.box);
        this.setStyle();
    },
    setEvent: function(input, box) {
        var that = this, $input = $(input), $box = $(box), $hidden;
        $('body').delegate(input, {
            keydown: function(event) {
                var keyCode = event.which;
                if (keyCode == 38 || keyCode == 40) {
                    that.keySelectItem(keyCode);
                }
            },
            keyup: function(event) {
                var val = $(this).val()
                    , keyCode = event.which;
                if (keyCode == 13) {
                    if ((($hidden = $box.find(':hidden')).length && $hidden.val() !== val) || !$hidden.length) {
                        that.itemsHandler(val, function() {
                            $box.show();
                        });
                        return;
                    } else {
                        that.closeItems();
                    }
                    if (that.callback) {
                        $input.blur();
                        that.callback.apply(that, arguments);
                    }
                    return;
                }
                if (keyCode == 38 || keyCode == 40)
                    return;
                that.itemsHandler(val, function() {
                    $box.show();
                });
            },
            blur: function(event) {
                setTimeout(function() {
                    that.closeItems();
                }, 200);
            }
        }).delegate(box + ' a', {
            mouseenter: function() {
                $(this).addClass('curr').siblings('a.curr').removeClass('curr');
            },
            mouseleave: function() {
                $(this).removeClass('curr');
            },
            click: function() {
                $(input).val($(this).html());
                that.callback && that.callback.apply(that, arguments);
            }
        });
    },
    itemsHandler: function(val, callback) {
        var that = this;
        if (!that.hasRecommend && !val) {
            that.clearItems();
            return;
        }
        if (that.itemsRecords[val] !== undefined) {
            that.setItems(that.itemsRecords[val]);
            callback && callback(that.itemsRecords[val]);
        } else {
            that.getItems && that.getItems.call(that, val, function(val, items) {
                that.setItems(that.itemsRecords[val] = items);
                callback && callback(that.itemsRecords[val]);
            });
        }
    },
    setItems: function(items) {
        var len = items.length
            , itemsHtml = '';
        if (!len) {
            $(this.box).hide().empty();
            return;
        }
        $.each(items, function(i, val) {
            itemsHtml += '<a href="javascript:;">' + val + '</a>';
        });
        itemsHtml += '<input type="hidden">';
        $(this.box).html(itemsHtml).find('input').val($(this.input).val());
    },
    keySelectItem: function(keyCode) {
        var $input = $(this.input)
            , $box = $(this.box)
            , $items = $box.find('a')
            , len = $items.length;
        if (!len)
            return;
        if ($box.css('display') == 'none' && len) {
            $box.show();
            return;
        }
        var $currItem = $box.find('a.curr')
            , currNum = $currItem.length ? $currItem.index() + 1 : 0;
        if (keyCode == 38) {
            currNum--;
        } else if (keyCode == 40) {
            currNum++;
        }
        currNum = currNum > len ? currNum % (len + 1) : currNum < 0 ? len + 1 + currNum % (len + 1) : currNum;
        if (currNum > 0) {
            $items.eq(currNum - 1).addClass('curr').siblings('a.curr').removeClass('curr');
            $input.val($items.eq(currNum - 1).html()).focus();
        } else if (currNum === 0) {
            $items.removeClass('curr');
            $input.val($box.find(':hidden').val()).focus();
        }
    },
    closeItems: function() {
        var that = this
            , val = $(this.input).val();
        this.itemsHandler(val, function() {
            $(that.box).hide().find(':hidden').val(val);
        });
    },
    clearItems: function() {
        $(this.box).empty().hide();
    },
    setStyle: function() {
        if ($('#kfz_assInput_style').length)
            return;
        var styleHtml = '<style id="kfz_assInput_style">' + this.box + ' a{display:block;}' + this.box + ' a.curr{color:#f60;}' + '</style>';
        $('body').append(styleHtml);
    }
};
KFZ.ui.inputClear = function() {
    for (var i = 0, len = arguments.length; i < len; i++) {
        if (typeof arguments[i] == 'object') {
            arguments[i].val('');
            arguments[i].prop('checked', false);
        } else {
            $(arguments[i]).val('');
            $(arguments[i] + ':checked').prop('checked', false);
        }
    }
}
;
KFZ.ui.formCheck = function(items, others, justCollect) {
    var self = arguments.callee
        , errNum = 0;
    self.methods || (self.methods = {
        'lenMin': function(val, condition, errTip, setErr, setSuc) {
            condition = typeof condition !== 'object' ? {
                val: condition
            } : condition;
            if ((!condition.ifAny || val) && ($.isArray(val) ? val : typeof val === 'undefined' ? '' : $.trim('' + val)).length < condition.val)
                return ( !setErr(errTip)) ;
            setSuc && setSuc();
        },
        'lenMax': function(val, condition, errTip, setErr, setSuc) {
            condition = typeof condition !== 'object' ? {
                val: condition
            } : condition;
            if ((!condition.ifAny || val) && ($.isArray(val) ? val : typeof val === 'undefined' ? '' : $.trim('' + val)).length > condition.val)
                return ( !setErr(errTip)) ;
            setSuc && setSuc();
        },
        'min': function(val, condition, errTip, setErr, setSuc) {
            condition = typeof condition !== 'object' ? {
                val: condition
            } : condition;
            if ((!condition.ifAny || val) && +val < condition.val)
                return ( !setErr(errTip)) ;
            setSuc && setSuc();
        },
        'max': function(val, condition, errTip, setErr, setSuc) {
            condition = typeof condition !== 'object' ? {
                val: condition
            } : condition;
            if ((!condition.ifAny || val) && +val > condition.val)
                return ( !setErr(errTip)) ;
            setSuc && setSuc();
        },
        'number': function(val, condition, errTip, setErr, setSuc) {
            condition = typeof condition !== 'object' ? condition === 'ifAny' ? {
                ifAny: 1
            } : {} : condition;
            if ((!condition.ifAny || val) && isNaN(val))
                return ( !setErr(errTip)) ;
            setSuc && setSuc();
        },
        'positiveNumber': function(val, condition, errTip, setErr, setSuc) {
            condition = typeof condition !== 'object' ? condition === 'ifAny' ? {
                ifAny: 1
            } : {} : condition;
            if ((!condition.ifAny || val) && (isNaN(val) || +val <= 0))
                return ( !setErr(errTip)) ;
            setSuc && setSuc();
        },
        'int': function(val, condition, errTip, setErr, setSuc) {
            condition = typeof condition !== 'object' ? condition === 'ifAny' ? {
                ifAny: 1
            } : {} : condition;
            if ((!condition.ifAny || val) && !KFZ.util.isInt(val))
                return ( !setErr(errTip)) ;
            setSuc && setSuc();
        },
        'natural': function(val, condition, errTip, setErr, setSuc) {
            condition = typeof condition !== 'object' ? condition === 'ifAny' ? {
                ifAny: 1
            } : {} : condition;
            if ((!condition.ifAny || val) && !KFZ.util.isNatural(val))
                return ( !setErr(errTip)) ;
            setSuc && setSuc();
        },
        'price': function(val, condition, errTip, setErr, setSuc) {
            condition = typeof condition !== 'object' ? condition === 'ifAny' ? {
                ifAny: 1
            } : {} : condition;
            if ((!condition.ifAny || val) && !KFZ.util.isPrice(val))
                return ( !setErr(errTip)) ;
            setSuc && setSuc();
        },
        'mobile': function(val, condition, errTip, setErr, setSuc) {
            condition = typeof condition !== 'object' ? condition === 'ifAny' ? {
                ifAny: 1
            } : {} : condition;
            if ((!condition.ifAny || val) && !KFZ.util.isMobile(val))
                return ( !setErr(errTip)) ;
            setSuc && setSuc();
        },
        'tel': function(val, condition, errTip, setErr, setSuc) {
            condition = typeof condition !== 'object' ? condition === 'ifAny' ? {
                ifAny: 1
            } : {} : condition;
            if ((!condition.ifAny || val) && !KFZ.util.isTel(val))
                return ( !setErr(errTip)) ;
            setSuc && setSuc();
        },
        'pass': function(val, condition, errTip, setErr, setSuc) {
            setSuc && setSuc();
        }
    });
    items || (items = []);
    var data = {};
    $.each(items, function(key, item) {
        var el = item.el
            , $el = typeof el === 'object' ? el : $(el);
        if (!$el.length)
            return;
        var errEl = item.errEl || $el.parent().siblings('.check_tip')
            , $errEl = typeof errEl === 'object' ? errEl : $(errEl)
            , errClass = item.errClass || 'text_err'
            , sucClass = item.sucClass || 'text_suc'
            , checks = item.checks
            , methods = $.extend(self.methods, (item.methods || {}))
            , val = typeof item.val === 'undefined' ? typeof $el.val() === 'undefined' ? '' : $.trim($el.val()) : typeof item.val === 'function' ? item.val() : item.val
            , setErr = item.setErr
            , setSuc = item.setSuc
            , discard = item.discard
            , isErr = 0;
        if (setErr !== false) {
            setErr || (setErr = function(errTip) {
                    ($el.is(':text') || $el.is(':password') || $el.is('textarea')) && $el.addClass(errClass);
                    $errEl.removeClass('check_tip_info').removeClass('check_tip_suc').addClass('check_tip_err').find('.tip_err').html(errTip || '');
                    return ++isErr;
                }
            );
        }
        if (setSuc !== false) {
            setSuc || (setSuc = function(sucTip) {
                    ($el.is(':text') || $el.is(':password') || $el.is('textarea')) && $el.removeClass(errClass);
                    $errEl.removeClass('check_tip_info').removeClass('check_tip_err').addClass('check_tip_suc').find('.tip_suc').html(sucTip || '');
                }
            );
        }
        checks && checks.length && $.each(checks, function(i, check) {
            var type = check.type
                , condition = check.condition
                , errTip = check.errTip
                , method = type === 'special' ? check.method : methods[type];
            if ($.isFunction(method))
                return method.call(self, val, condition, errTip, setErr, null, data);
        });
        errNum += isErr;
        !discard && (data[key] = val);
    });
    others && $.each(others, function(key, method) {
        if ($.isFunction(method)) {
            var res = method(data);
            res === false ? errNum++ : typeof res === 'undefined' ? '' : data[key] = res;
        }
    });
    return errNum && !justCollect ? false : data;
}
;
KFZ.ui.SetPrompt = function(args) {
    if (!(this instanceof arguments.callee))
        return new arguments.callee(args);
    this.init(args);
}
;
KFZ.ui.SetPrompt.prototype = {
    constructor: KFZ.ui.SetPrompt,
    params: ['cookieId', 'expires', 'btn', 'type', 'win', 'text', 'left', 'top', 'width', 'height', 'borderColor', 'bgColor', 'bgImage', 'fontSize', 'fontColor', 'fontWeight', 'zIndex', 'style'],
    init: function(args) {
        var that = this;
        $.each(this.params, function(i, item) {
            args[item] && (that[item] = args[item]);
        });
        this.cookieId || (this.cookieId = ('' + (+new Date())).substr(0, 3));
        this.win || (this.win = '#prompt_win_' + this.cookieId);
        this.type || (this.type = 1);
        this.$btn = $(this.btn);
        this.setTemplate();
        this.$win = $(this.win);
        this.setStyle();
        this.style && KFZ.ui.extendStyle(this.win, this.style);
        this.callback && this.callback.call(this, this.$win);
    },
    setEvent: function() {
        var that = this;
        $(window).resize(function() {
            that.setStyle();
        });
        this.type === 2 && $('body').off('click', this.win + ' .closeBtn').on('click', this.win + ' .closeBtn', function() {
            that.close();
        });
    },
    setTemplate: function() {
        if (KFZ.util.cookie('is_prompt_win_' + this.cookieId + '_closed') == '1' || $(this.win).length)
            return;
        var html = '';
        html += '<div id="' + this.win.replace(/#/, '') + '">';
        html += (typeof this.text !== 'undefined' ? this.text : '新');
        html += '</div>';
        this.$btn.append(html);
    },
    setStyle: function() {
        var $btnParent = this.$win.parent();
        $btnParent.css('position') == 'static' && $btnParent.css({
            'position': 'relative'
        });
        var winId = this.win.replace(/#/, '')
            , style = '<style id="style_' + winId + '">';
        style += this.win + '{' + (this.bgColor ? 'background-color:' + this.bgColor + ';' : '') + (this.bgImage ? this.bgImage + 'background-image:' + this.bgImage + ';' : '') + 'border-radius: 5px;border:' + (this.borderColor ? '1px solid ' + this.borderColor + ';' : 'none;') + 'position:absolute;left:' + (this.left || -10) + 'px;top:' + (this.top || -10) + 'px;width:' + (this.width || 18) + 'px;height:' + (this.height || 18) + 'px;line-height:' + (this.lineHeight || 18) + 'px;text-align:center;color:' + (this.fontColor || '#f30') + ';font-size:' + (this.fontSize || 12) + 'px;font-weight:' + (this.fontWeight || 'bold') + ';z-index:' + (this.zIndex || 0) + ';}';
        style += '</style>';
        if ($('#style_' + winId + '').length) {
            $('#style_' + winId + '').replaceWith(style);
        } else {
            $('body').append(style);
        }
    },
    close: function() {
        this.$win.hide();
        KFZ.util.cookie('is_prompt_win_' + this.cookieId + '_closed', '1', {
            expires: this.expires || 1000,
            path: '/'
        });
    }
};
(function($, e, b) {
    var c = "hashchange", h = document, f, g = $.event.special, i = h.documentMode, d = "on" + c in e && (i === b || i > 7);
    function a(j) {
        j = j || location.href;
        return "#" + j.replace(/^[^#]*#?(.*)$/, "$1")
    }
    $.fn[c] = function(j) {
        return j ? this.bind(c, j) : this.trigger(c)
    }
    ;
    $.fn[c].delay = 50;
    g[c] = $.extend(g[c], {
        setup: function() {
            if (d) {
                return false
            }
            $(f.start)
        },
        teardown: function() {
            if (d) {
                return false
            }
            $(f.stop)
        }
    });
    f = (function() {
        var j = {}, p, m = a(), k = function(q) {
            return q
        }, l = k, o = k;
        j.start = function() {
            p || n()
        }
        ;
        j.stop = function() {
            p && clearTimeout(p);
            p = b
        }
        ;
        function n() {
            var r = a()
                , q = o(m);
            if (r !== m) {
                l(m = r, q);
                $(e).trigger(c)
            } else {
                if (q !== m) {
                    location.href = location.href.replace(/#.*/, "") + q
                }
            }
            p = setTimeout(n, $.fn[c].delay)
        }
        /msie/.test(navigator.userAgent.toLowerCase()) && !d && (function() {
            var q, r;
            j.start = function() {
                if (!q) {
                    r = $.fn[c].src;
                    r = r && r + a();
                    q = $('<iframe tabindex="-1" title="empty"/>').hide().one("load", function() {
                        r || l(a());
                        n()
                    }).attr("src", r || "javascript:0").insertAfter("body")[0].contentWindow;
                    h.onpropertychange = function() {
                        try {
                            if (event.propertyName === "title") {
                                q.document.title = h.title
                            }
                        } catch (s) {}
                    }
                }
            }
            ;
            j.stop = k;
            o = function() {
                return a(q.location.href)
            }
            ;
            l = function(v, s) {
                var u = q.document
                    , t = $.fn[c].domain;
                if (v !== s) {
                    u.title = h.title;
                    u.open();
                    t && u.write('<script>document.domain="' + t + '"<\/script>');
                    u.close();
                    q.location.hash = v
                }
            }
        })();
        return j
    })()
})(jQuery, this);
KFZ.Router = function(args) {
    if (!(this instanceof arguments.callee))
        return new arguments.callee(args);
    this.init(args);
}
;
KFZ.Router.prototype = {
    constructor: KFZ.Router,
    init: function(args) {
        if (!args || !args.routes)
            return;
        $.extend(this, args);
        var that = this;
        $(window).hashchange(function() {
            that.setRoutes();
        });
        $(window).trigger('hashchange');
    },
    setRoutes: function() {
        this.initialize && this.initialize.apply(null, arguments);
        var hash = window.location.hash.slice(1).replace(/^\/|\/$/, ''), routes = this.routes, router;
        for (var route in routes) {
            var routeStr = '/' + route.replace(/^\/|\/$/, '').replace(/\//, '\\\/') + '/'
                , routeReg = eval(routeStr.replace(/:[\w-]+/g, '[\\\w-]+'));
            if (hash === route.replace(/^\/|\/$/, '') || (routeReg && routeReg.test(hash))) {
                if (router = routes[route]) {
                    typeof router === 'function' ? router.apply(this, arguments) : (this[router] && this[router].apply(this, arguments));
                    return;
                } else {
                    break;
                }
            }
        }
        var def = routes.def;
        def && typeof def === 'function' ? def.apply(this, arguments) : (this['default'] && this['default'].apply(this, arguments));
    }
};
KFZ.add(['View', 'events']);
KFZ.View.extend = function(object) {
    var F = function() {
        if (!(this instanceof arguments.callee))
            return new arguments.callee();
        this.init();
    };
    F.prototype = {
        constructor: F,
        init: function() {
            var that = this;
            var $doc = $(document)
                , el = this.el;
            if (!el) {
                if (!(el = this.tagName))
                    return;
                el = this.el = '<' + el.replace(/^\<|(\/)*\>&/g, '') + ' />';
            }
            this.$el = $(el);
            var initialize = this.initialize;
            initialize && initialize.apply(this, arguments);
            var events = this.events;
            events && $.each(events, function(key, handler) {
                setTimeout(function() {
                    if (!handler)
                        return;
                    var evtArr = key.split(' ')
                        , evts = evtArr.shift();
                    if (!evts || !evtArr.length)
                        return;
                    $.inArray('body', evtArr) < 0 && evtArr.unshift(el);
                    var selector = evtArr.join(' ')
                        , handlerName = '';
                    if (typeof handler === 'string') {
                        handlerName = handler;
                        handler = that[handler];
                    }
                    if (!handler || typeof handler !== 'function')
                        return;
                    $.each(evts.split(','), function(i, evt) {
                        if (handlerName) {
                            var fullEventName = evt + '|' + selector.replace(/\s+/g, '~') + '|' + handlerName;
                            if (!KFZ.events[fullEventName]) {
                                var isSameOne;
                                $.each(KFZ.events, function(existOne, hasHandler) {
                                    var existArr = existOne.split('|');
                                    if (existArr.length < 3)
                                        return;
                                    var existEvt = existArr[0]
                                        , existSelector = existArr[1].replace(/~/, ' ')
                                        , existHandlerName = existArr[2];
                                    if (evt === existEvt && selector === existSelector && handlerName === existHandlerName) {
                                        isSameOne = true;
                                        return false;
                                    }
                                });
                                if (!isSameOne) {
                                    $.each(evt.split(','), function(i, e) {
                                        $doc.on(e, selector, function(event) {
                                            return handler.apply(that, arguments);
                                        });
                                    });
                                    KFZ.events[fullEventName] = true;
                                }
                            }
                        } else {
                            $.each(evt.split(','), function(i, e) {
                                $doc.on(e, selector, function(event) {
                                    return handler.apply(that, arguments);
                                });
                            });
                        }
                    });
                }, 0);
            });
        }
    };
    $.extend(F.prototype, object);
    return F;
}
;
KFZ.tmpl = KFZ.template = (function() {
    var cache = {};
    return function tmpl(str, data) {
        var fn = !/\W/.test(str) ? cache[str] || (cache[str] = tmpl(document.getElementById(str).innerHTML)) : new Function('o',"var p=[];" + "with(o){p.push('" + str.replace(/[\r\t\n]/g, " ").split("<%").join("\t").replace(/((^|%>)[^\t]*)'/g, "$1\r").replace(/\t=(.*?)%>/g, "',$1,'").split("\t").join("');").split("%>").join("p.push('").split("\r").join("\\'") + "');}return p.join('');");
        return data ? fn(data) : fn;
    }
        ;
})();
;KFZ.lang.kfz = {
    dataRequestNull: "暂无数据",
    dataRequestFail: '数据请求失败！',
    dataGetFail: '数据获取请求失败！',
    dataCreateFail: '数据创建请求失败！',
    dataUpdateFail: '数据更新请求失败！',
    dataDeleteFail: '数据删除请求失败！',
    pleasesSelect: '请选择',
    cancel: '关闭',
    confirm: '确定',
    abolish: '取消',
    itemsAndAll: '条，共',
    items: '条',
    prevPage: '上一页',
    nextPage: '下一页',
    page: '页',
    to: '到',
    inputCorrectPage: '请输入正确的页码！'
};
;$(function() {
    (function() {
        if ($('#kfz_topbar').length) {
            KFZ.util.loginCheck({
                hasLogin: function(user) {
                    $('#no_login').hide();
                    var nickname = user.nickname || ''
                        , len = nickname.length;
                    if (len > 12) {
                        $('#user_name').parents('a').attr({
                            'title': nickname
                        });
                        nickname = nickname.substr(0, 11) + '...';
                    }
                    $('#has_login').show().find('#user_name').html(nickname);
                }
            });
            if (KFZ.util.isIE() === 9) {
                $('#showMsgNumSpan').addClass('clearfix');
                $('#msgNumContainerSpan').addClass('f_left').css({
                    'margin-top': '-2px'
                }).siblings('span').addClass('f_left');
            }
            if (/https/.test(KFZ.url.protocol)) {
                $('#topbar_cart_item').removeClass('has_sub').find('.ico_bg3').removeClass('ico_bg3').addClass('ico_bg').find('span.red1').hide();
            } else {
                (KFZ.common.getTopbarCartList = function() {
                        var $cartNum = $('#kfz_topbar_cart_num')
                            , $cartCon = $('#kfz_topbar_cart_con');
                        KFZ.ajax.Get({
                            url: KFZ.sites.adapter.shop + 'book/shopcart/listCart',
                            dataType: 'jsonp',
                            success: function(data) {
                                var len = data.length;
                                $cartNum.html(len || 0).parent().show();
                                len && len > 99 && KFZ.ui.extendStyle('#topbar_cart_item a.ico_bg3', {
                                    '_width': '110px'
                                });
                                KFZ.common.topbarCartList = data;
                            },
                            failTip: false,
                            errTip: false,
                            fail: function() {
                                $cartCon.html('获取购物车商品失败，请 <a class="btn_get_topbar_cart_retry" href="javascript:;">点击此处</a> 重试！');
                            },
                            error: function() {
                                $cartCon.html('获取购物车商品失败，请 <a class="btn_get_topbar_cart_retry" href="javascript:;">点击此处</a> 重试！');
                            }
                        });
                    }
                )();
            }
            var location = window.location;
            $('body').delegate('a#btn_login', 'click', function() {
                var hash = KFZ.url.getHash()
                    , href = location.href.replace(/#[\w-\/]*/gi, '').replace(/\?returnUrl=.*$/, '');
                href = '?returnUrl=' + encodeURIComponent(href + (hash ? (/\?/.test(href) ? '&' : '?') + 'hash=' + hash : ''));
                location.href = KFZ.sites.adapter.login + href;
                return false;
            }).delegate('a#btn_reg', 'click', function() {
                var hash = KFZ.url.getHash()
                    , href = location.href.replace(/#[\w-\/]*/gi, '').replace(/\?returnUrl=.*$/, '');
                href = '?returnUrl=' + encodeURIComponent(href + (hash ? (/\?/.test(href) ? '&' : '?') + 'hash=' + hash : ''));
                location.href = KFZ.sites.adapter.login + 'register/index.html' + href;
                return false;
            }).delegate('a#btn_logout', 'click', function() {
                var hash = KFZ.url.getHash()
                    , href = location.href.replace(/#[\w-\/]*/gi, '').replace(/\?returnUrl=.*$/, '');
                href = '?returnUrl=' + encodeURIComponent(href + (hash ? (/\?/.test(href) ? '&' : '?') + 'hash=' + hash : ''));
                location.href = KFZ.sites.adapter.login + 'logout/' + href;
                return false;
            }).delegate('#kfz_topbar li.has_sub', {
                mouseenter: function() {
                    $(this).siblings('li').removeClass('now');
                    $(this).siblings('li:not(.last)').addClass('b_line');
                    if ($(this).prev().css('display') === 'none') {
                        $(this).prev().prev().removeClass('b_line');
                    } else {
                        $(this).prev().removeClass('b_line');
                    }
                    $(this).addClass('now').removeClass('b_line').find('.sub_box').show();
                    if (this.id === 'topbar_cart_item' && ($.trim($('#kfz_topbar_cart_con').html()) === '' || !KFZ.common.topbarCartList || (KFZ.common.topbarCartList.length <= 5 && KFZ.common.topbarCartList.length !== $('#kfz_topbar_cart_con').find('.cart_box ').length) || (KFZ.common.topbarCartList.length > 5 && $('#kfz_topbar_cart_con').find('.cart_box ').length !== 5))) {
                        (KFZ.common.renderTopbarCartList || (KFZ.common.renderTopbarCartList = function() {
                                var $cartNum = $('#kfz_topbar_cart_num')
                                    , $cartCon = $('#kfz_topbar_cart_con')
                                    , items = KFZ.common.topbarCartList || []
                                    , len = items.length
                                    , html = '';
                                $cartNum.html(len);
                                if (len) {
                                    $.each(items, function(i, item) {
                                        if (i < 5) {
                                            html += '<div class="cart_box clearfix" cartid="' + item.id + '">';
                                            html += '<div class="f_left m_r10">';
                                            html += '<a class="topbar_cart_product" target="_blank" href="' + KFZ.sites.adapter.book + item.shopId + '/' + item.itemId + '/" title="' + item.itemName + '"><img src="' + item.imgUrl + '"></a>';
                                            html += '</div>';
                                            html += '<div class="f_left cart_wd">';
                                            html += '<p><a target="_blank" href="' + KFZ.sites.adapter.book + item.shopId + '/' + item.itemId + '/" title="' + item.itemName + '">' + (item.itemName.toString().length > 15 ? item.itemName.substr(0, 14) + "..." : item.itemName) + '</a></p>';
                                            html += '<p>' + item.number + '件</p>';
                                            html += '</div>';
                                            html += '<div class="f_right2">';
                                            html += '<p>' + KFZ.util.setPrice(item.price) + '元</p>';
                                            html += '<p><a class="btn_del_cart_product" href="javascript:;">删除</a></p>';
                                            html += '</div>';
                                            html += '</div>';
                                        } else {
                                            return false;
                                        }
                                    });
                                    if (len > 5) {
                                        html += '<div id="kfz_topbar_cart_othernum" class="m_t5 f_right">请点击下面的按钮查看其他的<span class="red">' + (len - 5) + '</span>件商品</div>';
                                    }
                                } else {
                                    html += '<div class="red1">您的购物车里还没有任何商品！</div>';
                                }
                                $cartCon.html(html);
                                len && KFZ.ui.resizeImage($cartCon.find('img'), {
                                    maxWidth: 40,
                                    maxHeight: 40,
                                    isSetPosition: 1,
                                    errSrc: '/images/none.jpg'
                                });
                            }
                        ))();
                    } else {
                        var $noLoadImgs = $('#kfz_topbar_cart_con').find('img:not([imgresized])');
                        $noLoadImgs.length && KFZ.ui.resizeImage($noLoadImgs, {
                            maxWidth: 40,
                            maxHeight: 40,
                            isSetPosition: 1,
                            errSrc: '/images/none.jpg'
                        });
                    }
                },
                mouseleave: function() {
                    $(this).removeClass('now').find('.sub_box').hide();
                    if (!/last/.test($(this).attr('class')))
                        $(this).addClass('b_line');
                    if ($(this).prev().css('display') === 'none') {
                        $(this).prev().prev().addClass('b_line');
                    } else {
                        $(this).prev().addClass('b_line');
                    }
                }
            }).delegate('.btn_del_cart_product', 'click', function() {
                var cartId = $(this).parents('.cart_box').attr('cartid');
                new KFZ.ui.PopWin({
                    overWin: '#delCartProductWin',
                    overTit: '确认删除',
                    overCon: '确认要从购物车中删除该商品？',
                    autoDisableSubmit: true,
                    afterSubmit: function() {
                        var win = this;
                        KFZ.ajax.Get({
                            url: KFZ.sites.adapter.shop + 'book/shopcart/delCartItemAjax',
                            data: {
                                cartIds: [cartId]
                            },
                            dataType: 'jsonp',
                            sucTip: '删除购物车商品操作成功！',
                            failTip: '删除购物车商品操作失败！',
                            errTip: '删除购物车商品操作失败！',
                            success: function(data) {
                                var topbarCart = KFZ.common.topbarCartList
                                    , index = KFZ.util.index(topbarCart, {
                                    id: cartId
                                });
                                topbarCart.splice(index, 1);
                                KFZ.common.renderTopbarCartList(topbarCart);
                                win.close();
                            },
                            fail: function() {
                                win.enableSubmit();
                            },
                            error: function() {
                                win.enableSubmit();
                            }
                        });
                        return false;
                    }
                });
            }).delegate('a.btn_get_topbar_cart_retry', 'click', function() {
                KFZ.common.getTopbarCartList && KFZ.common.getTopbarCartList();
            });
        }
    })();
    (function() {
        var $header = $('#kfz_header');
        KFZ.util.cookie('header_app_seller_close') != '1' && $('#kfz_header_app_box_seller').show();
        $('body').delegate('#kfz_header_app_box', 'mouseenter', function() {
            $('#kfz_header_app_box').find('.top_app_tit').addClass('now');
            $('#kfz_header_app_box').find('.top_app_text').show();
        }).delegate('#kfz_header_app_box', 'mouseleave', function() {
            $('#kfz_header_app_box').find('.top_app_tit').removeClass('now');
            $('#kfz_header_app_box').find('.top_app_text').hide();
        }).delegate('#kfz_header_app_box_seller .app_close', 'click', function() {
            $('#kfz_header_app_box_seller').hide();
            KFZ.util.cookie('header_app_seller_close', '1', {
                expires: 1000,
                domain: /\.*kongfz\.com/.test(window.location.host) ? '.kongfz.com' : /\.*kongfz\.cn/.test(window.location.host) ? '.kongfz.cn' : null,
                path: '/'
            });
        });
        if (!$header.length || !$header.find('#search_box').length) {
            $header && KFZ.ui.extendStyle($header, {
                'z-index': '0'
            });
            return;
        }
        var isShopSearch = !!$header.find('#area_tit').length, isBookHeader = !!$header.find('#header_book_box').length, isSearchResultPage;
        var rootType = KFZ.url.rootType
            , urlAdapter = KFZ.sites.adapter
            , urlShop = KFZ.common.urlShop = urlAdapter['shop']
            , urlShopSearch = KFZ.common.urlShopSearch = urlShop + 'product/'
            , urlPm = KFZ.common.urlPm = urlAdapter['pm']
            , urlPmSearch = KFZ.common.urlPmSearch = urlPm + 'product/'
            , urlUser = KFZ.common.urlUser = urlAdapter['user']
            , urlUserSearch = KFZ.common.urlUserSearch = urlUser + 'product/'
            , urlSearch = KFZ.common.urlSearch = urlAdapter['search']
            , urlSearchSearch = KFZ.common.urlSearchSearch = urlSearch + 'product/';
        (function() {
            if (isShopSearch && isSearchResultPage) {
                var $search = $('#search_input')
                    , pagename = KFZ.url.pagename
                    , params = pagename.toLowerCase().replace(/(cat_|[l-zg])/ig, '-$1').replace(/ca-t_/, 'cat_').replace(/^-/, '').split('-');
                for (var i = 0, len = params.length; i < len; i++) {
                    var param = params[i]
                        , key = param.substr(0, 1)
                        , val = param.substr(1);
                    if (key === 'z') {
                        $search.val(KFZ.util.unicodeToChar(val));
                    } else if (key === 'y') {
                        var $selObj = $('#search_box a.sel:eq(0)')
                            , $chooseBox = $selObj.siblings('.choose_box:eq(0)')
                            , text = $chooseBox.find('a[param-html-item="' + val + '"]:eq(0)').html();
                        $selObj.html(text).attr('param-html-item', val);
                    }
                }
            } else if (isBookHeader) {
                KFZ.common.adaptUrl && KFZ.common.adaptUrl($header);
                var pageid = $('body').attr('id');
                pageid && (pageid = $.trim(pageid.replace(/^page_/, ''))) && (KFZ.common.setBookHeaderNav = function(pageid) {
                        if (typeof pageid === 'undefined' || $.trim(pageid) === '')
                            return;
                        var ws = +new Date();
                        (function() {
                            var $bookHeaderNav = $('#header_book_box').find('.nav_under_box');
                            if ($bookHeaderNav.length) {
                                $bookHeaderNav.find('li a.now').removeClass('now');
                                $bookHeaderNav.find('li[page="' + pageid + '"]').addClass('now');
                            } else {
                                if (+new Date() - ws < 15000) {
                                    setTimeout(arguments.callee, 200);
                                }
                            }
                        })();
                    }
                )(pageid);
            }
            new KFZ.ui.AssInput({
                input: '#search_input',
                box: '#ass_box',
                getItems: function(val, setItems) {
                    if (!$.trim(val))
                        return;
                    $.ajax({
                        url: 'http://search.kongfz.com/sug/suggest_server.jsp',
                        data: {
                            query: val
                        },
                        type: 'GET',
                        timeout: 5000,
                        dataType: 'script',
                        success: function() {
                            try {
                                sugWords && setItems(val, sugWords);
                            } catch (e) {}
                        }
                    });
                },
                callback: function() {
                    $('#btn_search').click();
                }
            });
        })();
        var submitSearch = function(event, notClick) {
            var $this = $(this)
                , $header = $('#kfz_header')
                , url = ''
                , isPmHeaderSearch = $header.hasClass('pm');
            if (isPmHeaderSearch) {
                var time = $header.find('[name=time]:checked').val();
                var st = $header.find('#sell_state_select').val();
                var sc = $.trim($header.find('#search_input').val());
                if (!sc) {
                    KFZ.ui.alertWin({
                        result: 0,
                        text: '请输入关键词后再进行搜索筛选！'
                    });
                    return false;
                }
                if (time == '1') {
                    var prams = 'z' + KFZ.util.charToUnicode(sc);
                    url = urlSearch + 'pm/' + (prams ? prams + '/' : '');
                } else {
                    url = urlPm + 'search_result/' + '?st=' + st + '&sc=' + sc;
                }
            } else {
                var type = isShopSearch ? $('#area_tit a').index($('#area_tit a.now')) : 0
                    , val = $.trim($('#search_input').val())
                    , state = isShopSearch ? $.trim($('.input_bg2 > a.sel').attr('param-html-item')) : $('#sell_state_select').val();
                if (!val) {
                    KFZ.ui.alertWin({
                        result: 0,
                        text: '请输入关键词后再进行搜索筛选！'
                    });
                    return false;
                }
                if (type === 0) {
                    url = urlSearchSearch + 'y' + state + 'z' + KFZ.util.charToUnicode(val) + '/';
                } else {
                    if (state == 0) {
                        url = urlPm + 'search_result/' + '?sc=' + val;
                    } else {
                        var prams = 'z' + KFZ.util.charToUnicode(val);
                        url = urlSearch + 'pm/' + (prams ? prams + '/' : '');
                    }
                }
            }
            if (notClick) {
                window.location.href = url;
                return false;
            } else {
                $this.attr({
                    'target': '_blank',
                    'href': url
                });
                setTimeout(function() {
                    $this.attr({
                        'target': null,
                        'href': 'javascript:;'
                    });
                }, 50);
            }
        };
        $('body').delegate('#area_tit a', 'click', function(event) {
            var $this = $(this);
            $this.addClass('now').siblings().removeClass('now');
            $('#search_input').focus();
            var index = $('#area_tit a').index($this)
                , $chooseBox = $header.find('.choose_box').eq(index);
            $('[param-html="y"]').html($chooseBox.find('li:eq(0) a').html()).attr('param-html-item', '0');
            $('#search_input_tip').text(index === 0 ? '商品名称、作者、出版社、ISBN' : '拍品名称、拍品作者、拍主昵称');
        }).delegate('#search_box .input_bg2', {
            mouseenter: function(event) {
                var $itemsBox = $('#search_box').find('.area_tit')
                    , index = $itemsBox.find('a').index($itemsBox.find('a.now'));
                $header.find('.choose_box').eq(index).show();
            },
            mouseleave: function(event) {
                var $itemsBox = $('#search_box').find('.area_tit')
                    , index = $itemsBox.find('a').index($itemsBox.find('a.now'));
                $header.find('.choose_box').eq(index).hide();
            }
        }).delegate('#search_box .choose_box li a', 'click', function(event) {
            var val = $(this).attr('param-html-item')
                , text = $(this).text();
            $('[param-html="y"]').html(text).attr('param-html-item', val);
            $(this).parents('.choose_box').hide();
        }).delegate('#search_input', 'keyup', function(event) {
            event.which === 13 && submitSearch(event, 1);
        }).delegate('#search_input_tip', 'click', function() {
            $(this).blur().siblings('#search_input').focus();
        }).delegate('#btn_search', 'click', submitSearch);
        $('#area_tit a').length && $('#search_input_tip').text($('#area_tit a').index($('#area_tit a.now')) === 0 ? '商品名称、作者、出版社、ISBN' : '拍品名称、拍品作者、拍主昵称');
        KFZ.ui.inputPrompt('#search_input', '#search_input_tip', 'hidden');
    })();
    (function() {
        !/https:\/\//.test(KFZ.url.host) && setTimeout(function() {
            var _hmt = _hmt || [];
            if (/kongfz\.cn/i.test(KFZ.url.host)) {
                (function() {
                    var hm = document.createElement("script");
                    hm.src = "https://hm.baidu.com/hm.js?e9887cc33a1d80028a23ab3a80d16a5a";
                    var s = document.getElementsByTagName("script")[0];
                    s.parentNode.insertBefore(hm, s);
                })();
            } else if (/kongfz\.com/i.test(KFZ.url.host)) {
                (function() {
                    var hm = document.createElement("script");
                    hm.src = "https://hm.baidu.com/hm.js?bca7840de7b518b3c5e6c6d73ca2662c";
                    var s = document.getElementsByTagName("script")[0];
                    s.parentNode.insertBefore(hm, s);
                })();
                if (/shequ\.kongfz\.com/i.test(KFZ.url.host)) {
                    (function() {
                        var hm = document.createElement("script");
                        hm.src = "https://hm.baidu.com/hm.js?f8663b704cbf53aa8db7ee7ebfa7cf70";
                        var s = document.getElementsByTagName("script")[0];
                        s.parentNode.insertBefore(hm, s);
                    })();
                }
                (function() {
                    var hm = document.createElement("script");
                    hm.src = "https://hm.baidu.com/hm.js?33be6c04e0febc7531a1315c9594b136";
                    var s = document.getElementsByTagName("script")[0];
                    s.parentNode.insertBefore(hm, s);
                })();
            } else if (/gujiushu\.com/i.test(KFZ.url.host)) {
                (function() {
                    var hm = document.createElement("script");
                    hm.src = "https://hm.baidu.com/hm.js?f8663b704cbf53aa8db7ee7ebfa7cf70";
                    var s = document.getElementsByTagName("script")[0];
                    s.parentNode.insertBefore(hm, s);
                })();
            }
        }, 1000);
        return;
        var pageid, path = KFZ.url.host + (KFZ.url.pathname || '').replace(/^\//, '');
        if (KFZ.common.getFlowLogBehaviorPageid && (pageid = KFZ.common.getFlowLogBehaviorPageid(path))) {
            var img = new Image();
            img.onload = function() {
                $.getScript('http://tongji.kongfz.com/static/flow_log_behavior.js', function() {
                    var flowLogBehavior = KFZ.common.flowLogBehavior = new KFZ_FlowLogBehavior();
                    flowLogBehavior.set('uid', KFZ.user && KFZ.user.userId || 0);
                    flowLogBehavior.set('pageid', pageid);
                    flowLogBehavior.submit();
                });
            }
            ;
            img.src = 'http://tongji.kongfz.com/static/1x1.jpg?_=' + (+new Date());
        }
    })();
    (function() {
        var time = (window.KFZ && KFZ.serverNumTime && !isNaN(KFZ.serverNumTime) && +KFZ.serverNumTime * 1000) || +new Date();
        if (time > +new Date('2014/10/17 23:00:00') && time < +new Date('2014/10/18 08:00:00')) {
            $('body').prepend('<div style="background:#fff url(http://res.kongfz.com/image/server_maintain/20141017.jpg) center 0 no-repeat;height:253px;"></div>');
            return;
        }
        var cookieVal = '20141125';
        if (+new Date() > +new Date('2015/1/1 00:00:00'))
            return;
        if (/(https:\/\/)|(\.m\.kongfz\.com)|(\/\/(neibu)*app\.)/i.test(KFZ.url.host))
            return;
        if (KFZ.util.cookie('app_all_site_tip') == cookieVal)
            return;
        var userAgent = window.navigator && window.navigator.userAgent
            , android = userAgent && (userAgent.indexOf('Android') > -1 || userAgent.indexOf('Linux') > -1)
            , ios = userAgent && !!userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
            , tipHtml = '<div id="app_all_site_tip">' + '<div class="win_box_968 clearfix">' + '<a target="_blank" class="logo_ico" href="http://app.kongfz.com/"></a>' + '</div>' + '<div class="win_close_ico"><a title="关闭" href="javascript:;"></a></div>' + '</div>' + '<style id="app_all_site_tip_style">' + '.clearfix, .content{*zoom:1;}' + '.clearfix:before,.clearfix:after,.content:after{content:".";display:block;height:0;line-height:0;clear:both;visibility:hidden;}' + '.clearfix:after{clear:both;}' + '.clear{clear:both;}' + '#app_all_site_tip{width:968px;margin:0 auto;z-index:900;}' + '.win_bg_gray{height:88px; overflow:hidden; zoom:1; position:relative;}' + '.win_close_ico{position:absolute; top:0; right:0;width:20px;height:20px;overflow:hidden;background:url(http://res.kongfz.com/image/ad_app_cutoff_20141231/app_banner.jpg) right top no-repeat;z-index:10;}' + '.win_close_ico a{display:block;width:20px; height:20px;background:url(http://res.kongfz.com/image/ad_app_cutoff_20141231/app_banner.jpg) right top no-repeat;}' + '.win_box_968{position:relative;width:968px;height:88px; margin:0 auto;}' + '.win_bg_gray .win_box_968 .logo_ico{ float:left; width:980px; height:88px;background:url(http://res.kongfz.com/image/ad_app_cutoff_20141231/app_banner.jpg) no-repeat;}' + '.win_bg_gray .win_box_968 .down_ico{display:none;position:absolute;left:-99999px;}' + '.win_bg_gray_filter{ background:#515151;opacity:0.9;-moz-opacity:0.9;filter:alpha(opacity=90); height:170px; width:100%; overflow:hidden; zoom:1; position:fixed; bottom:0; left:0;}' + '.win_bg_gray_filter .win_close_ico a{ display:block; position:absolute; top:0; right:0; width:47px; height:45px; background:url(http://res.kongfz.com/image/ad_app_cutoff_20141231/win_ico.png) no-repeat -206px -165px;}' + '.win_bg_gray_filter .win_box_968 .logo_ico{ float:left; margin:37px 0 0 30px; background:url(http://res.kongfz.com/image/ad_app_cutoff_20141231/win_ico.png) no-repeat 0 -309px; width:368px; height:97px;}' + '.win_bg_gray_filter .win_box_968 .down_ico a{ display:block; float:right; margin:50px 135px 0 0; background:url(http://res.kongfz.com/image/ad_app_cutoff_20141231/win_ico.png) no-repeat 0 -165px; width:200px; height:70px; text-indent:-9999999px;}' + '.win_bg_gray_filter2{ background:#515151;opacity:0.9;-moz-opacity:0.9;filter:alpha(opacity=90); height:100px; width:100%; overflow:hidden; zoom:1; position:fixed; bottom:0; left:0;}' + '.win_bg_gray_filter2 .win_box_968{width:513px;}' + '.win_bg_gray_filter2 .win_close_ico a{ display:block; position:absolute; top:0; right:0; width:54px; height:54px; background:url(http://res.kongfz.com/image/ad_app_cutoff_20141231/ios.png) no-repeat 0 -42px;}' + '.win_bg_gray_filter2 .win_box_968 .logo_ico{ float:left; margin:24px 0 0 35px; background:url(http://res.kongfz.com/image/ad_app_cutoff_20141231/ios.png) no-repeat 0 -107px; width:219px; height:56px;}' + '.win_bg_gray_filter2 .win_box_968 .down_ico a{ display:block; float:right; margin:37px 77px 0 0; background:url(http://res.kongfz.com/image/ad_app_cutoff_20141231/ios.png) no-repeat 0 0; width:120px; height:40px; text-indent:-9999999px;}' + '</style>';
        $('body').prepend(tipHtml).find('#app_all_site_tip').addClass('win_bg_gray');
        $('body').on('click', '#app_all_site_tip .win_close_ico', function() {
            $('#app_all_site_tip').remove();
            KFZ.util.cookie('app_all_site_tip', cookieVal, {
                expires: 1000,
                domain: /\.*kongfz\.com/.test(window.location.host) ? '.kongfz.com' : /\.*kongfz\.cn/.test(window.location.host) ? '.kongfz.cn' : null,
                path: '/'
            });
        });
    })();
});
(function() {
    KFZ.sites || (KFZ.sites = {});
    var adapter = {};
    adapter.online = {
        www: 'http://www.kongfz.com/',
        shop: 'http://shop.kongfz.com/',
        book: 'http://book.kongfz.com/',
        m: 'http://m.kongfz.com/',
        search: 'http://search.kongfz.com/',
        user: 'http://user.kongfz.com/',
        userapi: 'http://userapi.kongfz.com/',
        login: 'https://login.kongfz.com/',
        shequlogin: 'http://login.gujiushu.com/',
        xiaoxi: 'http://xiaoxi.kongfz.com/',
        message: 'http://message.kongfz.com/',
        pmgs: 'http://pmgs.kongfz.com/',
        help: 'http://help.kongfz.com/',
        pay: 'https://pay.kongfz.com/',
        tan: 'http://tan.kongfz.com/',
        bq: 'http://bq.kongfz.com/',
        pm: 'http://www.kongfz.cn/',
        tousu: 'http://tousu.kongfz.com/',
        xinyu: 'http://xinyu.kongfz.com/',
        union: 'http://union.kongfz.com/',
        shequ: 'http://www.gujiushu.com/',
        wuliu: 'http://wuliu.kongfz.com/',
        tg: 'http://tg.kongfz.com/',
        sms: 'http://sms.kongfz.com/',
        zixun: 'http://zixun.kongfz.com/',
        booklib: 'http://booklib.kongfz.com/',
        res: 'http://res.kongfz.com/',
        app: 'http://app.kongfz.com/',
        shufang: 'http://shufang.kongfz.com/',
        admin: 'https://common.m.kongfz.com/',
        shopAdmin: 'https://shop.m.kongfz.com/',
        tanAdmin: 'https://tan.m.kongfz.com/',
        pmAdmin: 'https://pm.m.kongfz.com/',
        payAdmin: 'https://pay.m.kongfz.com/',
        pmgsAdmin: 'https://pmgs.m.kongfz.com/',
        shopimg: 'http://shopimg.kongfz.com.cn/',
        auctionimg: 'http://img.kongfz.cn/',
        auctionimgcc: 'http://auctionimg2.kongfz.cn/',
        imgkey: 'http://key.imgmanage.kongfz.com/interface/server_interface/imgmgr_upload_getkey.php?type=book',
        imgup: 'http://imgmanage.kongfz.com/manage/imgmgr_service.php',
        img: 'http://www.kfzimg.com/'
    };
    adapter.kfz = {
        www: 'http://www.kfz.com/',
        shop: 'http://shop.kfz.com/',
        book: 'http://book.kfz.com/',
        m: 'http://m.kfz.com/',
        search: 'http://search.kfz.com/',
        user: 'http://user.kfz.com/',
        userapi: 'http://userapi.kfz.com/',
        login: 'https://login.kfz.com/',
        xiaoxi: 'http://xiaoxi.kfz.com/',
        message: 'http://message.kfz.com/',
        pmgs: 'http://pmgs.kfz.com/',
        help: 'http://help.kfz.com/',
        pay: 'https://pay.kfz.com/',
        tan: 'http://tan.kfz.com/',
        bq: 'http://bq.kfz.com/',
        pm: 'http://www.kfz.cn/',
        tousu: 'http://tousu.kfz.com/',
        xinyu: 'http://xinyu.kfz.com/',
        union: 'http://union.kfz.com/',
        shequ: 'http://www.gujiushu.com/',
        bbs: 'http://www.gujiushu.com/bbs.html',
        wuliu: 'http://wuliu.kfz.com/',
        tg: 'http://tg.kfz.com/',
        sms: 'http://sms.kfz.com/',
        zixun: 'http://zixun.kfz.com/',
        bookdata: 'http://bookdata.kfz.com/',
        admin: 'http://common.m.kfz.com/',
        shopAdmin: 'http://shop.m.kfz.com/',
        tanAdmin: 'http://tan.m.kfz.com/',
        pmAdmin: 'http://common.m.kfz.com/',
        payAdmin: 'http://pay.m.kfz.com/',
        shopimg: 'http://shopimg.kfz.com.cn/',
        tanimg: 'http://shopimg.kfz.com.cn/',
        auctionimg: 'http://auctionimg.kfz.com.cn/',
        auctionimgcc: 'http://auctionimg2.kfz.cc/',
        img1: 'http://img1.kfz.com.cn/',
        img2: 'http://img2.kfz.com.cn/',
        res: 'http://res.kfz.com/',
        shufang: 'http://shufang.kfz.com/',
        app: 'http://app.kfz.com/'
    };
    adapter.v2 = {
        www: 'http://wwwv2.kongfz.com/',
        shop: 'http://shopv2.kongfz.com/',
        book: 'http://bookv2.kongfz.com/',
        search: 'http://search.kongfz.com/',
        user: 'http://userv2.kongfz.com/',
        userapi: 'neibuuserapi.kongfz.com',
        login: 'http://userv2.kongfz.com/',
        xiaoxi: 'http://xiaoxiv2.kongfz.com/',
        pmgs: 'http://pmgs.kongfz.com/',
        help: 'http://help.kongfz.com/',
        pay: 'http://payv2.kongfz.com/',
        tan: 'http://tanv2.kongfz.com/',
        bq: 'http://bq.kongfz.com/',
        pm: 'http://wwwv2.kongfz.cn/',
        tousu: 'http://tousuv2.kongfz.com/',
        xinyu: 'http://xinyuv2.kongfz.com/',
        union: 'http://union.kongfz.com/',
        shequ: 'http://wwwv2.gujiushu.com/',
        wuliu: 'http://wuliu.kongfz.com/',
        tg: 'http://tg.kongfz.com/',
        sms: 'http://sms.kongfz.com/',
        zixun: 'http://zixun.kongfz.com/',
        booklib: 'http://booklib.kongfz.com/',
        admin: 'http://adminv2.kongfz.com/',
        shopAdmin: 'http://shopmv2.kongfz.com/',
        tanAdmin: 'http://shopmv2.kongfz.com/',
        pmAdmin: 'http://neibupm.m.kongfz.com/',
        payAdmin: 'http://neibupay.m.kongfz.com/',
        pmgsAdmin: 'http://neibupmgs.m.kongfz.com/',
        shopimg: 'http://shopimg.kongfz.com.cn/',
        tanimg: 'http://shopimg.kongfz.com.cn/',
        auctionimg: 'http://auctionimg.kongfz.com.cn/',
        auctionimgcc: 'http://auctionimg2.kongfz.cc/',
        img1: 'http://img1.kfzimg.com/',
        img2: 'http://img2.kfzimg.com/',
        res: 'http://res.kongfz.com/',
        imgkey: 'http://key.imgmanage.kongfz.com/interface/server_interface/imgmgr_upload_getkey.php?type=book',
        imgup: 'http://imgmanage.kongfz.com/manage/imgmgr_service.php',
        img: 'http://img.gujiushu.com/',
        img0: 'http://img0.kfzimg.com/',
        img3: 'http://img3.kfzimg.com/',
        img4: 'http://img4.kfzimg.com/',
        img5: 'http://img5.kfzimg.com/',
        img6: 'http://img6.kfzimg.com/',
        img7: 'http://img7.kfzimg.com/',
        img8: 'http://img8.kfzimg.com/',
        img9: 'http://img9.kfzimg.com/'
    };
    adapter.neibu = {
        www: 'http://neibuwww.kongfz.com/',
        shop: 'http://neibushop.kongfz.com/',
        book: 'http://neibubook.kongfz.com/',
        search: 'http://neibusearch.kongfz.com/',
        user: 'http://neibuuser.kongfz.com/',
        userapi: 'http://neibuuserapi.kongfz.com/',
        login: 'https://neibulogin.kongfz.com/',
        xiaoxi: 'http://neibuxiaoxi.kongfz.com/',
        message: 'http://neibumessage.kongfz.com/',
        pmgs: 'http://neibupmgs.kongfz.com/',
        help: 'http://neibuhelp.kongfz.com/',
        pay: 'http://neibupay.kongfz.com/',
        tan: 'http://neibutan.kongfz.com/',
        bq: 'http://neibubq.kongfz.com/',
        pm: 'http://neibuwww.kongfz.cn/',
        tousu: 'http://neibutousu.kongfz.com/',
        xinyu: 'http://neibuxinyu.kongfz.com/',
        union: 'http://neibuunion.kongfz.com/',
        shequ: 'http://neibushequ.kongfz.com/',
        im: 'neibuim.kongfz.com',
        im1: 'neibuim1.kongfz.com',
        wuliu: 'http://neibuwuliu.kongfz.com/',
        tg: 'http://neibutg.kongfz.com/',
        sms: 'http://neibusms.kongfz.com/',
        zixun: 'http://neibuzixun.kongfz.com/',
        booklib: 'http://neibubooklib.kongfz.com/',
        admin: 'http://neibum.kongfz.com/',
        shopAdmin: 'http://neibushop.m.kongfz.com/',
        tanAdmin: 'http://neibutan.m.kongfz.com/',
        pmAdmin: 'http://neibupm.m.kongfz.com/',
        payAdmin: 'http://neibupay.m.kongfz.com/',
        pmgsAdmin: 'http://neibupmgs.m.kongfz.com/',
        shopimg: 'http://neibushop.kongfz.com/data/book_pic/',
        tanimg: 'http://neibutan.kongfz.com/data/book_pic/',
        auctionimg: 'http://neibuwww.kongfz.cn/data/bidding_goods_pic/',
        auctionimgcc: 'http://neibuwww.kongfz.cn/data/bidding_goods_pic/',
        img1: 'http://img1.kfzimg.com/',
        img2: 'http://img2.kfzimg.com/',
        res: 'http://neibures.kongfz.com/',
        imgkey: 'http://key.imgmanage.kongfz.com/interface/server_interface/imgmgr_upload_getkey.php?type=book',
        imgup: 'http://imgmanage.kongfz.com/manage/imgmgr_service.php',
        img: 'http://img.gujiushu.com/',
        img0: 'http://img0.kfzimg.com/',
        img3: 'http://img3.kfzimg.com/',
        img4: 'http://img4.kfzimg.com/',
        img5: 'http://img5.kfzimg.com/',
        img6: 'http://img6.kfzimg.com/',
        img7: 'http://img7.kfzimg.com/',
        img8: 'http://img8.kfzimg.com/',
        img9: 'http://img9.kfzimg.com/',
        shufang: 'http://neibushufang.kongfz.com/'
    };
    adapter.local = {
        www: 'http://dev.www.trunk.v2.local/',
        shop: 'http://dev.shopv2.trunk.v2.local/',
        book: 'http://dev.book.branches.v2.local/',
        search: 'http://zhangxinde.shop.branches.v2.local/',
        user: 'http://liutongyi.user.trunk.v2.local/',
        userapi: 'http://liutongyi.userapi.trunk.v2.local/',
        login: 'http://liutongyi.user.trunk.v2.local/',
        xiaoxi: 'http://liutongyi.msg.trunk.v2.local/',
        pmgs: 'http://dev.pmgs.trunk.v2.local/',
        help: 'http://help.kongfz.com/',
        pay: 'http://192.168.1.210:8020/',
        tan: 'http://dev.tan.branches.v2.local/',
        bq: 'http://bq.kongfz.com/',
        pm: 'http://wangkongming.pm.branches.v2.local/',
        tousu: 'http://liutongyi.complaint.trunk.v2.local/',
        xinyu: 'http://shenxi.review.trunk.v2.local/',
        union: 'http://union.kongfz.com/',
        shequ: 'http://shequ.kongfz.com/',
        wuliu: 'http://wuliu.kongfz.com/',
        tg: 'http://tg.kongfz.com/',
        sms: 'http://192.168.1.210:8070/',
        zixun: 'http://dev.zixun.trunk.v2.local/',
        booklib: 'http://wangkongming.booklib.branches.v2.local/',
        admin: 'http://neibum.kongfz.com/',
        shopAdmin: 'http://zhouchunhui.shopm_v2.trunk.v2.local/',
        tanAdmin: 'https://tan.m.kongfz.com/',
        pmAdmin: 'https://pm.m.kongfz.com/',
        payAdmin: 'https://pay.m.kongfz.com/',
        pmgsAdmin: 'https://pmgs.m.kongfz.com/',
        shopimg: 'http://shopimg.kongfz.com.cn/',
        tanimg: 'http://shopimg.kongfz.com.cn/',
        auctionimg: 'http://auctionimg.kongfz.com.cn/',
        auctionimgcc: 'http://auctionimg2.kongfz.cc/',
        img1: 'http://img1.neibu.kfzimg.com/',
        img2: 'http://img2.neibu.kfzimg.com/',
        res: 'http://res.kongfz.com/',
        imgkey: 'http://imgmanage.v2.local/manage/imgmgr_upload_getkey.php?type=book',
        imgup: 'http://imgmanage.v2.local/manage/imgmgr_service.php',
        img: 'http://neibu.kfzimg.com/',
        img0: 'http://img0.neibu.kfzimg.com/',
        img3: 'http://img3.neibu.kfzimg.com/',
        img4: 'http://img4.neibu.kfzimg.com/',
        img5: 'http://img5.neibu.kfzimg.com/',
        img6: 'http://img6.neibu.kfzimg.com/',
        img7: 'http://img7.neibu.kfzimg.com/',
        img8: 'http://img8.neibu.kfzimg.com/',
        img9: 'http://img9.neibu.kfzimg.com/'
    };
    var rootType = KFZ.url.rootType;
    rootType === 'neibu' && /\w+v2\.*/.test(KFZ.url.host) && (rootType = 'v2');
    KFZ.sites.adapter || (KFZ.sites.adapter = adapter[rootType]);
    KFZ.sites.online || (KFZ.sites.online = adapter.online);
    KFZ.sites.adaptUrl = function(box) {
        if (KFZ.url.rootType !== 'online' && KFZ.sites.adapter) {
            var $box = typeof (box || (box = 'body')) === 'object' ? box : $(box)
                , onlineSites = KFZ.sites.online
                , adapterSites = KFZ.sites.adapter
                , $links = $box.find('[href^="http"],img[src^="http"]');
            $links.length && $.each($links, function() {
                var $this = $(this)
                    , attr = $this.attr('href') ? 'href' : 'src'
                    , link = $this.attr(attr)
                    , matches = /(https*:\/\/\w+(\.\w+)+\/)(.*)/gi.exec(link);
                if (!matches)
                    return;
                var len = matches.length
                    , root = matches[1]
                    , url = matches[3] || '';
                root && $.each(onlineSites, function(site, val) {
                    if (root === val && adapterSites[site]) {
                        $this.attr(attr, adapterSites[site] + url);
                        return false;
                    }
                });
            });
        }
    }
    ;
})();
KFZ.util.cookie || (KFZ.util.cookie = function(name, value, options) {
        if (typeof value != 'undefined') {
            options || (options = {});
            if (value === null) {
                value = '';
                options.expires = -1;
            }
            var expires = '';
            if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
                var date;
                if (typeof options.expires == 'number') {
                    date = new Date();
                    date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
                } else {
                    date = options.expires;
                }
                expires = '; expires=' + date.toUTCString();
            }
            var path = options.path ? '; path=' + options.path : '';
            var domain = options.domain ? '; domain=' + options.domain : '';
            var secure = options.secure ? '; secure' : '';
            document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
        } else {
            var cookieValue = null;
            if (document.cookie && document.cookie != '') {
                var cookies = document.cookie.split(';');
                for (var i = 0; i < cookies.length; i++) {
                    var cookie = $.trim(cookies[i]);
                    if (cookie.substring(0, name.length + 1) == (name + '=')) {
                        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                        break;
                    }
                }
            }
            return cookieValue;
        }
    }
);
