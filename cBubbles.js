(() => {
    'use strict';
    var e, t = {
            6254: (e, t, n) => {
                n.r(t);
            },
            2746: (e, t) => {
                Object.defineProperty(t, '__esModule', { value: !0 }),
                t.Config = void 0;
                var n = (function () {
                    function e () {}
                    return e.usernameTwitter = 'cryptobubbly',
                    e.usernameInstagram = 'cryptobubbly',
                    e.usernameFacebook = 'cryptobubbly',
                    e.emailAddress = 'contact@cryptobubbles.net',
                    e.imageLogo = '/images/logo64.png',
                    e.imageBuyMeACoffee = '/images/buymeacoffee.png',
                    e.linkBuyMeACoffee = 'https://www.buymeacoffee.com/cryptobubbles',
                    e.linkBinance = 'https://www.binance.com/en/register?ref=MUQB0HMV',
                    e.colorPositive = '#3f3',
                    e.colorNegative = '#f66',
                    e.nullValue = '-',
                    e.rankIdentifier = '#',
                    e.currenciesUpdateInterval = 120,
                    e.bubbleSizeFactor = 0.6,
                    e.bubbleDragFactor = 4,
                    e.bubbleWallBounceFactor = -0.7,
                    e.bubbleCollisionFactor = 3,
                    e.bubbleExplosionFactor = 5e3,
                    e.bubbleFriction = 0.7,
                    e.bubbleRandomMovement = 0.001,
                    e.bubbleMinRadiusForText = 30,
                    e.bubbleColorNeutral = {
                        red: 127,
                        green: 255,
                        blue: 127,
                    },
                    e.bubbleColorPerformanceMax = 20,
                    e.bubbleCanvasPadding = Math.round(2 * window.devicePixelRatio),
                    e.bubbleBorderWidth = Math.round(2 * window.devicePixelRatio),
                    e.bubbleExtraHitbox = Math.round(4 * window.devicePixelRatio),
                    e.maxDeltaTime = 0.1,
                    e;
                }());
                t.Config = n;
            },
            /*  BUBBLE CHART */
            929: function (e, t, n) {
                var r = this && this.__assign || function () {
                    return (r = Object.assign || function (e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++) {
                            for (var o in t = arguments[n]) { Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]) }
                        }
                        return e;
                    }
                    ).apply(this, arguments);
                }
                ;
                Object.defineProperty(t, '__esModule', { value: !0 }),
                t.BubbleChart = void 0;
                var o = n(5893),
                    react = n(7294),
                    redux = n(1512),
                    s = n(5380),
                    c = n(562),
                    l = n(6457),
                    u = n(1104);
                t.BubbleChart = react.memo(function (e) {
                    var configuration = e.configuration,
                        n = l.useTypedDispatch(),
                        canvasRef = react.useRef(null),
                        f = react.useRef(null),
                        settings = redux.useSelector(function (e) {
                            return {
                                currencies: e.currencies,
                                baseCurrency: e.selectedBaseCurrency,
                                selectedCurrencyId: e.selectedCurrencyId,
                            };
                        },
                        ),
                        p = settings.currencies,
                        baseCurrency = settings.baseCurrency,
                        b = settings.selectedCurrencyId,
                        chartSettings = react.useMemo(function () {
                            return new c.BubblePropertiesSource(configuration, baseCurrency);
                        }
                            , [configuration, baseCurrency]);
                    function onSelectBubble (currencyId) {
                        n({
                            type: 'SELECT_CURRENCY',
                            currencyId: currencyId,
                        });
                    }
                    return react.useEffect(function () {
                        if (canvasRef.current) {
                            var bubbleChartInstanse = new s.BubbleCanvas(canvasRef.current, chartSettings);
                            return f.current = bubbleChartInstanse,
                            bubbleChartInstanse.eventSelect.register(onSelectBubble),
                            bubbleChartInstanse.start(),
                            function () {
                                return bubbleChartInstanse.stop();
                            };
                        }
                    }
                        , []),
                    react.useEffect(function () {
                        var e = f.current;
                        e && p && e.pushCurrencies(p);
                    }
                        , [p]),
                    react.useEffect(function () {
                        var e = f.current;
                        e && p && e.setPropertiesSource(chartSettings);
                    }
                        , [chartSettings]),
                    react.useEffect(function () {
                        var e = f.current;
                        e && p && e.setSelectedCurrencyId(b);
                    }
                        , [b]),
                    o.jsxs(
                        'div',
                        r(
                            { className: 'bubble-chart' },
                            { children: [o.jsx('canvas', { ref: canvasRef }, void 0), !p && o.jsx(u.Loading, {}, void 0)] }),
                        void 0,
                    );
                },
                );
            },
            3739: function (e, t, n) {
                var r = this && this.__assign || function () {
                    return (r = Object.assign || function (e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++) {
                            for (var o in t = arguments[n]) { Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]) }
                        }
                        return e;
                    }
                    ).apply(this, arguments);
                }
                ;
                Object.defineProperty(t, '__esModule', { value: !0 }),
                t.BubbleChartHeader = void 0;
                var o = n(5893),
                    i = n(7294),
                    a = n(5953),
                    s = n(6457),
                    c = n(2875),
                    l = n(903),
                    u = n(1567),
                    d = n(3653),
                    f = n(1562),
                    h = n(5784);
                t.BubbleChartHeader = i.memo(function (e) {
                    var t = e.configurations,
                        n = e.selectedConfiguration,
                        p = i.useState(!1),
                        v = p[0],
                        b = p[1],
                        g = i.useState(!1),
                        y = g[0],
                        m = g[1],
                        _ = s.useTypedDispatch(),
                        C = a.useTranslation(),
                        j = i.useCallback(function () {
                            _({ type: 'ADD_CONFIGURATION' }),
                            b(!0);
                        }
                            , [_, b]),
                        x = i.useCallback(function () {
                            m(function (e) {
                                return !e;
                            },
                            ),
                            document.documentElement.classList.toggle('fullscreen');
                        }
                            , [_, b]),
                        w = i.useCallback(function () {
                            return b(!1);
                        }
                            , [b]),
                        O = t.length >= 2,
                        P = v ? n : null;
                    return o.jsxs('div', r({ className: 'bubble-chart-header' }, {
                        children: [o.jsx(c.ConfigurationTabs, {
                            configurations: t,
                            selectedConfiguration: n,
                            setEditing: b,
                        }, void 0), o.jsx('button', r({
                            className: 'icon-button add-button',
                            onClick: j,
                            title: C.configuration_add,
                        }, { children: o.jsx(d.IconAdd, {}, void 0) }), void 0), o.jsx('div', { className: 'grow' }, void 0), o.jsx(u.CurrencyUpdater, {}, void 0), o.jsx('button', r({
                            className: 'icon-button fullscreen-button',
                            onClick: x,
                            title: C.fullscreen_toggle,
                        }, { children: y ? o.jsx(h.IconFullscreenExit, {}, void 0) : o.jsx(f.IconFullscreen, {}, void 0) }), void 0), o.jsx(l.ConfigurationWindow, {
                            configuration: P,
                            canDelete: O,
                            onClose: w,
                        }, void 0)],
                    }), void 0);
                },
                );
            },
            2875: function (e, t, n) {
                var r = this && this.__assign || function () {
                    return (r = Object.assign || function (e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++) {
                            for (var o in t = arguments[n]) { Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]) }
                        }
                        return e;
                    }
                    ).apply(this, arguments);
                }
                ;
                Object.defineProperty(t, '__esModule', { value: !0 }),
                t.ConfigurationTabs = void 0;
                var o = n(5893),
                    i = n(7294),
                    a = n(5953),
                    s = n(6457),
                    c = n(6348);
                t.ConfigurationTabs = i.memo(function (e) {
                    var t = e.configurations,
                        n = e.selectedConfiguration,
                        l = e.setEditing,
                        u = a.useTranslation(),
                        d = s.useTypedDispatch(),
                        f = i.useCallback(function (e) {
                            d({
                                type: 'SELECT_CONFIGURATION',
                                configurationId: e,
                            });
                        }
                            , [d]);
                    return o.jsx('div', r({ className: 'configuration-tabs scroll-container' }, {
                        children: t.map(function (e) {
                            return n === e ? o.jsxs('div', r({ className: 'tab selected' }, {
                                children: [e.name, o.jsx('button', r({
                                    className: 'icon-button',
                                    onClick: function () {
                                        return l(!0);
                                    },
                                    title: u.configuration_edit,
                                }, { children: o.jsx(c.IconEdit, {}, void 0) }), void 0)],
                            }), e.id) : o.jsx('button', r({
                                className: 'tab',
                                onClick: function () {
                                    return f(e.id);
                                },
                            }, { children: e.name }), e.id);
                        },
                        ),
                    }), void 0);
                },
                );
            },
            903: function (e, t, n) {
                var r = this && this.__assign || function () {
                    return (r = Object.assign || function (e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++) {
                            for (var o in t = arguments[n]) { Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]) }
                        }
                        return e;
                    }
                    ).apply(this, arguments);
                }
                ;
                Object.defineProperty(t, '__esModule', { value: !0 }),
                t.ConfigurationWindow = void 0;
                var o = n(5893),
                    i = n(7294),
                    a = n(5953),
                    s = n(6457),
                    c = n(2085),
                    l = n(6544),
                    u = n(2998),
                    d = n(7262),
                    f = n(6323),
                    h = n(7077),
                    p = n(8120),
                    v = n(5850),
                    b = n(1595),
                    g = n(5534),
                    y = n(8105);
                t.ConfigurationWindow = i.memo(function (e) {
                    var t = e.configuration,
                        n = e.canDelete,
                        m = e.onClose,
                        _ = i.useState(!0),
                        C = _[0],
                        j = _[1],
                        x = s.useTypedDispatch(),
                        w = a.useTranslation(),
                        O = i.useRef(null),
                        P = i.useCallback(function () {
                            t && (x({
                                type: 'DELETE_CONFIGURATION',
                                configurationId: t.id,
                            }),
                            m());
                        }
                            , [t, x]),
                        k = i.useCallback(function (e) {
                            if (t) {
                                var n = r(r({}, t), { name: e });
                                x({
                                    type: 'EDIT_CONFIGURATION',
                                    configuration: n,
                                });
                            }
                        }
                            , [t, x]),
                        S = i.useCallback(function (e) {
                            if (t) {
                                var n = r(r({}, t), { size: e });
                                x({
                                    type: 'EDIT_CONFIGURATION',
                                    configuration: n,
                                });
                            }
                        }
                            , [t, x]),
                        M = i.useCallback(function (e) {
                            if (t) {
                                var n = r(r({}, t), { content: e });
                                x({
                                    type: 'EDIT_CONFIGURATION',
                                    configuration: n,
                                });
                            }
                        }
                            , [t, x]),
                        I = i.useCallback(function (e) {
                            if (t) {
                                var n = r(r({}, t), { color: e });
                                x({
                                    type: 'EDIT_CONFIGURATION',
                                    configuration: n,
                                });
                            }
                        }
                            , [t, x]),
                        T = i.useCallback(function (e) {
                            if (t) {
                                var n = r(r({}, t), { period: e.id });
                                x({
                                    type: 'EDIT_CONFIGURATION',
                                    configuration: n,
                                });
                            }
                        }
                            , [t, x]),
                        N = i.useCallback(function (e) {
                            if (t) {
                                var n = r(r({}, t), { filter: e });
                                x({
                                    type: 'EDIT_CONFIGURATION',
                                    configuration: n,
                                });
                            }
                        }
                            , [t, x]),
                        B = t !== null;
                    t && (O.current = t);
                    var A = O.current;
                    return i.useEffect(function () {
                        t !== null && j(!0);
                    }
                        , [j, t == null ? void 0 : t.id]),
                    i.useEffect(function () {
                        if (B) {
                            var e = function () {
                                return m();
                            };
                            return y.Session.registerCloseListener(e),
                            function () {
                                return y.Session.unregisterCloseListener(e);
                            };
                        }
                    }
                        , [m, B]),
                    A ? o.jsxs('section', r({ className: c.combineClasses('window', 'configuration-window', B && 'open', C && 'expanded') }, {
                        children: [o.jsxs('header', {
                            children: [o.jsx('button', r({
                                className: 'icon-button',
                                onClick: function () {
                                    return j(!C);
                                },
                                title: w.window_toggleExpand,
                            }, { children: o.jsx(d.IconExpand, { className: 'expand-icon' }, void 0) }), void 0), o.jsx(g.TextInput, {
                                value: A.name,
                                className: 'grow',
                                onChange: k,
                            }, void 0), n && o.jsx('button', r({
                                className: 'icon-button',
                                onClick: P,
                                title: w.configuration_delete,
                            }, { children: o.jsx(u.IconDelete, {}, void 0) }), void 0), o.jsx('button', r({
                                className: 'icon-button',
                                onClick: m,
                                title: w.window_close,
                            }, { children: o.jsx(l.IconClose, {}, void 0) }), void 0)],
                        }, void 0), o.jsx('div', r({ className: 'window-content' }, {
                            children: o.jsxs('ul', {
                                children: [o.jsxs('li', {
                                    children: [o.jsx('span', { children: w.bubble_size }, void 0), o.jsx(v.PropertySizeSelect, {
                                        value: A.size,
                                        onChange: S,
                                    }, void 0)],
                                }, void 0), o.jsxs('li', {
                                    children: [o.jsx('span', { children: w.bubble_content }, void 0), o.jsx(h.PropertyContentSelect, {
                                        value: A.content,
                                        onChange: M,
                                    }, void 0)],
                                }, void 0), o.jsxs('li', {
                                    children: [o.jsx('span', { children: w.bubble_color }, void 0), o.jsx(p.PropertyColorSelect, {
                                        value: A.color,
                                        onChange: I,
                                    }, void 0)],
                                }, void 0), o.jsxs('li', {
                                    children: [o.jsx('span', { children: w.filter }, void 0), o.jsx(b.FilterSelect, {
                                        value: A.filter,
                                        onChange: N,
                                    }, void 0)],
                                }, void 0), o.jsxs('li', {
                                    children: [o.jsx('span', { children: w.period }, void 0), o.jsx(f.PeriodSelect, {
                                        value: A.period,
                                        onChange: T,
                                    }, void 0)],
                                }, void 0)],
                            }, void 0),
                        }), void 0)],
                    }), void 0) : o.jsx('section', { className: 'window configuration-window' }, void 0);
                },
                );
            },
            4972: function (e, t, n) {
                var r = this && this.__assign || function () {
                    return (r = Object.assign || function (e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++) {
                            for (var o in t = arguments[n]) { Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]) }
                        }
                        return e;
                    }
                    ).apply(this, arguments);
                }
                ;
                Object.defineProperty(t, '__esModule', { value: !0 }),
                t.CurrencyHeader = void 0;
                var o = n(5893);
                t.CurrencyHeader = function (e) {
                    var t = e.currency;
                    return o.jsxs('div', r({ className: 'currency-header' }, {
                        children: [o.jsx('img', {
                            src: t.image,
                            alt: t.name,
                            title: 'Logo of ' + t.name,
                        }, void 0), o.jsx('span', { children: t.name }, void 0)],
                    }), void 0);
                };
            },
            1567: function (e, t, n) {
                var r = this && this.__assign || function () {
                    return (r = Object.assign || function (e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++) {
                            for (var o in t = arguments[n]) { Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]) }
                        }
                        return e;
                    }
                    ).apply(this, arguments);
                }
                ;
                Object.defineProperty(t, '__esModule', { value: !0 }),
                t.CurrencyUpdater = void 0;
                var o = n(5893),
                    i = n(7294),
                    a = n(2746),
                    s = n(8566),
                    c = n(6457);
                t.CurrencyUpdater = function () {
                    var e = c.useTypedDispatch(),
                        t = i.useState(a.Config.currenciesUpdateInterval),
                        n = t[0],
                        l = t[1];
                    function u (t) {
                        e({
                            type: 'UPDATE_CURRENCIES',
                            currencies: t,
                        });
                    }
                    function d () {
                        s.API.getCurrencies().then(u).catch(console.error);
                    }
                    function f () {
                        l(function (e) {
                            return e <= 0 ? (d(),
                            a.Config.currenciesUpdateInterval) : e - 1;
                        },
                        );
                    }
                    return i.useEffect(function () {
                        d();
                        var e = setInterval(f, 1e3);
                        return function () {
                            return clearInterval(e);
                        };
                    }
                        , []),
                    o.jsxs('p', r({ className: 'currency-updater' }, { children: [o.jsx('strong', { children: n }, void 0), ' s'] }), void 0);
                };
            },
            5555: function (e, t, n) {
                var r = this && this.__assign || function () {
                    return (r = Object.assign || function (e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++) {
                            for (var o in t = arguments[n]) { Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]) }
                        }
                        return e;
                    }
                    ).apply(this, arguments);
                }
                ;
                Object.defineProperty(t, '__esModule', { value: !0 }),
                t.Footer = void 0;
                var o = n(5893),
                    i = n(7294),
                    a = n(2746),
                    s = n(5953),
                    c = n(3408),
                    l = n(7386),
                    u = n(4212),
                    d = n(9647),
                    f = n(9306),
                    h = n(6822),
                    p = n(2541),
                    v = n(5914),
                    b = n(4848),
                    g = n(5724);
                t.Footer = i.memo(function () {
                    var e = s.useTranslation();
                    return o.jsxs('footer', {
                        children: [o.jsxs('section', {
                            children: [o.jsxs('p', r({ className: 'footer-header' }, {
                                children: [o.jsx('img', {
                                    src: a.Config.imageLogo,
                                    className: 'footer-logo',
                                    alt: e.appName,
                                    title: 'Logo of ' + e.appName,
                                    width: '32',
                                    height: '32',
                                }, void 0), o.jsx('span', { children: e.appName }, void 0)],
                            }), void 0), o.jsx('h2', { children: e.description }, void 0), o.jsx(g.Markup, { children: e.footer_about }, void 0), o.jsxs('nav', {
                                children: [o.jsx(p.LinkGooglePlay, {}, void 0), o.jsx(h.Link, r({
                                    className: 'icon-button',
                                    href: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2391397628',
                                    title: e.link_wallpaper,
                                    name: 'Wallpaper',
                                }, { children: o.jsx(d.IconSteam, {}, void 0) }), void 0)],
                            }, void 0), o.jsx(g.Markup, { children: e.footer_contact }, void 0), o.jsxs('nav', {
                                children: [o.jsx(h.Link, r({
                                    className: 'icon-button',
                                    href: 'https://facebook.com/' + a.Config.usernameFacebook,
                                    title: e.link_facebook,
                                    name: 'Facebook',
                                }, { children: o.jsx(c.IconFacebook, {}, void 0) }), void 0), o.jsx(h.Link, r({
                                    className: 'icon-button',
                                    href: 'https://instagram.com/' + a.Config.usernameInstagram,
                                    title: e.link_instagram,
                                    name: 'Instagram',
                                }, { children: o.jsx(l.IconInstagram, {}, void 0) }), void 0), o.jsx(h.Link, r({
                                    className: 'icon-button',
                                    href: 'https://twitter.com/' + a.Config.usernameTwitter,
                                    title: e.link_twitter,
                                    name: 'Twitter',
                                }, { children: o.jsx(f.IconTwitter, {}, void 0) }), void 0), o.jsx(h.Link, r({
                                    className: 'icon-button',
                                    href: 'mailto:' + a.Config.emailAddress,
                                    title: e.link_email,
                                    name: 'Mail',
                                }, { children: o.jsx(u.IconMail, {}, void 0) }), void 0)],
                            }, void 0)],
                        }, void 0), o.jsxs('section', { children: [o.jsx('h2', { children: e.footer_support }, void 0), o.jsx(g.Markup, { children: e.footer_support1 }, void 0), o.jsx(g.Markup, { children: e.footer_support2 }, void 0), o.jsx(g.Markup, { children: e.footer_support3 }, void 0), o.jsxs('nav', r({ className: 'support-links' }, { children: [o.jsx(v.SupportLinkBinance, { translation: e }, void 0), o.jsx(b.SupportLinkBMC, { translation: e }, void 0)] }), void 0)] }, void 0)],
                    }, void 0);
                },
                );
            },
            8725: function (e, t, n) {
                var r = this && this.__assign || function () {
                    return (r = Object.assign || function (e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++) {
                            for (var o in t = arguments[n]) { Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]) }
                        }
                        return e;
                    }
                    ).apply(this, arguments);
                }
                ;
                Object.defineProperty(t, '__esModule', { value: !0 }),
                t.Header = void 0;
                var o = n(5893),
                    i = n(7294),
                    a = n(2746),
                    s = n(8105),
                    c = n(5953),
                    l = n(2085),
                    u = n(9528),
                    d = n(2541),
                    f = n(1918),
                    h = n(8651);
                t.Header = i.memo(function () {
                    var e = c.useTranslation(),
                        t = i.useState(!1),
                        n = t[0],
                        p = t[1],
                        v = s.Session.isAndroid && !s.Session.isApp;
                    return o.jsxs('header', r({
                        id: 'header',
                        className: l.combineClasses(n && 'settings-open'),
                    }, {
                        children: [o.jsx('img', {
                            src: a.Config.imageLogo,
                            className: 'logo',
                            alt: e.appName,
                            title: 'Logo of ' + e.appName,
                        }, void 0), o.jsx('h1', { children: e.appName }, void 0), o.jsx('div', { className: 'grow' }, void 0), v && o.jsx(d.LinkGooglePlay, {}, void 0), o.jsx(f.BaseCurrencySelect, {}, void 0), o.jsx(h.TranslationSelect, {}, void 0), o.jsx('button', r({
                            className: 'icon-button button-settings',
                            onClick: function () {
                                return p(!n);
                            },
                            title: e.settings,
                        }, { children: o.jsx(u.IconSettings, {}, void 0) }), void 0)],
                    }), void 0);
                },
                );
            },
            6822: function (e, t, n) {
                var r = this && this.__assign || function () {
                    return (r = Object.assign || function (e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++) {
                            for (var o in t = arguments[n]) { Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]) }
                        }
                        return e;
                    }
                    ).apply(this, arguments);
                }
                ;
                Object.defineProperty(t, '__esModule', { value: !0 }),
                t.Link = void 0;
                var o = n(5893),
                    i = n(8105);
                t.Link = function (e) {
                    return o.jsx('a', r({
                        href: e.href,
                        title: e.title,
                        className: e.className,
                        id: e.id,
                        target: '_blank',
                        rel: 'noopener',
                        onClick: function () {
                            return i.Session.logAction('CLICK_LINK', e.name);
                        },
                    }, { children: e.children }), void 0);
                };
            },
            1104: function (e, t, n) {
                var r = this && this.__assign || function () {
                    return (r = Object.assign || function (e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++) {
                            for (var o in t = arguments[n]) { Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]) }
                        }
                        return e;
                    }
                    ).apply(this, arguments);
                }
                ;
                Object.defineProperty(t, '__esModule', { value: !0 }),
                t.Loading = void 0;
                var o = n(5893),
                    i = n(2746),
                    a = n(5953);
                t.Loading = function () {
                    var e = a.useTranslation();
                    return o.jsxs('div', r({ className: 'loading' }, {
                        children: [o.jsx('img', {
                            src: i.Config.imageLogo,
                            className: 'logo',
                            alt: e.appName,
                            title: 'Logo of ' + e.appName,
                            width: '64',
                            height: '64',
                        }, void 0), o.jsx('p', { children: e.loading }, void 0)],
                    }), void 0);
                };
            },
            9068: (e, t, n) => {
                Object.defineProperty(t, '__esModule', { value: !0 }),
                t.Main = void 0;
                var react = n(5893),
                    o = n(7294),
                    i = n(1512),
                    a = n(929),
                    s = n(3739),
                    c = n(360);
                t.Main = o.memo(function () {
                    for (var e = i.useSelector(function (e) {
                            return {
                                configurations: e.configurations,
                                selectedConfigurationId: e.selectedConfigurationId,
                            };
                        },
                        ), t = e.configurations, n = e.selectedConfigurationId, o = t[0], l = 0, u = t; l < u.length; l++) {
                        var d = u[l];
                        if (d.id === n) {
                            o = d;
                            break;
                        }
                    }
                    return react.jsxs('main', {
                        children: [
                            react.jsx(
                                s.BubbleChartHeader, {
                                    configurations: t,
                                    selectedConfiguration: o,
                                }, void 0),
                            react.jsx(a.BubbleChart, { configuration: o }, void 0),
                            react.jsx(c.CurrencyTable, {}, void 0),
                        ],
                    }, void 0);
                },
                );
            },
            5724: (e, t, n) => {
                Object.defineProperty(t, '__esModule', { value: !0 }),
                t.Markup = void 0;
                var r = n(5893);
                t.Markup = function (e) {
                    for (var t = e.children, n = (void 0 === t ? '' : t).split('*'), o = [], i = 0; i < n.length; i++) {
                        var a = n[i];
                        i % 2 == 1 ? o.push(r.jsx('strong', { children: a }, i)) : o.push(a);
                    }
                    return r.jsx('p', { children: o }, void 0);
                };
            },
            2488: function (e, t, n) {
                var r, o = this && this.__extends || (r = function (e, t) {
                        return (r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (e, t) {
                            e.__proto__ = t;
                        } ||
                                    function (e, t) {
                                        for (var n in t) { Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]) }
                                    }
                        )(e, t);
                    }
                    ,
                    function (e, t) {
                        if (typeof t !== 'function' && t !== null) { throw new TypeError('Class extends value ' + String(t) + ' is not a constructor or null') }
                        function n () {
                            this.constructor = e;
                        }
                        r(e, t),
                        e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype,
                        new n());
                    }
                    ), i = this && this.__assign || function () {
                        return (i = Object.assign || function (e) {
                            for (var t, n = 1, r = arguments.length; n < r; n++) {
                                for (var o in t = arguments[n]) { Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]) }
                            }
                            return e;
                        }
                        ).apply(this, arguments);
                    }
                ;
                Object.defineProperty(t, '__esModule', { value: !0 }),
                t.Number = void 0;
                var a = n(5893),
                    s = n(7294),
                    c = n(2746),
                    l = n(2085),
                    u = n(2050),
                    d = (function (e) {
                        function t (t) {
                            var n = e.call(this, t) || this;
                            n.animationFrameRequest = null,
                            n.direction = null,
                            n.isDefined = !0,
                            n.handleAnimationFrame = function () {
                                var e = n.tween.isDone(),
                                    t = n.isDefined || !e ? n.tween.get() : null,
                                    r = n.formatValue(t),
                                    o = e ? null : n.direction;
                                n.setState({
                                    outputText: r,
                                    direction: o,
                                }),
                                e ? n.animationFrameRequest = null : n.requestAnimationFrame();
                            }
                            ;
                            var r = t.children;
                            return n.tween = new u.Tween(r || 0),
                            n.state = {
                                outputText: n.formatValue(r),
                                direction: null,
                            },
                            n;
                        }
                        return o(t, e),
                        t.prototype.formatValue = function (e) {
                            return e === null ? c.Config.nullValue : this.props.formatter(e);
                        }
                        ,
                        t.prototype.requestAnimationFrame = function () {
                            this.animationFrameRequest = window.requestAnimationFrame(this.handleAnimationFrame);
                        }
                        ,
                        t.prototype.componentDidUpdate = function (e) {
                            var t = e.children,
                                n = this.props.children;
                            if (t !== n) {
                                var r = this.formatValue(t);
                                this.formatValue(n) !== r && this.setupAnimation(t, n);
                            }
                        }
                        ,
                        t.prototype.setupAnimation = function (e, t) {
                            t !== null ? (this.isDefined = !0,
                            this.tween.set(t),
                            e === null ? this.startAnimation('increasing') : this.startAnimation(t > e ? 'increasing' : 'decreasing')) : (this.isDefined = !1,
                            this.tween.set(0),
                            this.startAnimation('decreasing'));
                        }
                        ,
                        t.prototype.startAnimation = function (e) {
                            this.direction = e,
                            this.animationFrameRequest === null && this.requestAnimationFrame();
                        }
                        ,
                        t.prototype.render = function () {
                            var e = this.state,
                                t = e.outputText,
                                n = e.direction;
                            return a.jsx('strong', i({ className: l.combineClasses('number', n) }, { children: t }), void 0);
                        }
                        ,
                        t.prototype.componentWillUnmount = function () {
                            var e = this.animationFrameRequest;
                            e !== null && window.cancelAnimationFrame(e);
                        }
                        ,
                        t;
                    }(s.PureComponent));
                t.Number = d;
            },
            9451: function (e, t, n) {
                var r = this && this.__assign || function () {
                    return (r = Object.assign || function (e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++) {
                            for (var o in t = arguments[n]) { Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]) }
                        }
                        return e;
                    }
                    ).apply(this, arguments);
                }
                ;
                Object.defineProperty(t, '__esModule', { value: !0 }),
                t.PriceChart = void 0;
                var o = n(5893),
                    i = n(7294),
                    a = n(8566),
                    s = n(4215),
                    c = n(5953),
                    l = n(2085);
                t.PriceChart = i.memo(function (e) {
                    var t = e.currency,
                        n = c.useTranslation(),
                        u = i.useRef(null),
                        d = i.useRef(null),
                        f = i.useState(null),
                        h = f[0],
                        p = f[1],
                        v = i.useState(!0),
                        b = v[0],
                        g = v[1];
                    return i.useEffect(function () {
                        var e = u.current;
                        if (e) {
                            var t = new s.PriceCanvas(e);
                            return d.current = t,
                            t.start(),
                            function () {
                                return t.stop();
                            };
                        }
                    }
                        , []),
                    i.useEffect(function () {
                        p(null),
                        a.API.getWeeklyChart(t.id).then(p).catch(console.error);
                    }
                        , [t.id]),
                    i.useEffect(function () {
                        var e = d.current;
                        if (e && e.setPrices(h),
                        h) {
                            for (var t = 0, n = 0; n < h.length; n++) { h[n] < h[t] && (t = n) }
                            g(t < h.length / 2);
                        }
                    }
                        , [h, g]),
                    o.jsxs('div', r({ className: l.combineClasses('price-chart', h && 'loaded') }, {
                        children: [o.jsx('canvas', { ref: u }, void 0), o.jsx('img', {
                            src: t.image,
                            alt: t.name,
                        }, void 0), o.jsx('p', r({ style: b ? { right: 8 } : { left: 8 } }, { children: n.period_week }), void 0)],
                    }), void 0);
                },
                );
            },
            1915: function (e, t, n) {
                var r = this && this.__assign || function () {
                    return (r = Object.assign || function (e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++) {
                            for (var o in t = arguments[n]) { Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]) }
                        }
                        return e;
                    }
                    ).apply(this, arguments);
                }
                ;
                Object.defineProperty(t, '__esModule', { value: !0 }),
                t.Support = void 0;
                var o = n(5893),
                    i = n(7294),
                    a = n(5953),
                    s = n(5914);
                t.Support = i.memo(function () {
                    var e = a.useTranslation();
                    switch (i.useState(Math.floor(3 * Math.random()))[0]) {
                    case 0:
                        return o.jsxs('section', r({ className: 'support' }, {
                            children: [o.jsx('h2', { children: 'Support my work' }, void 0), o.jsxs('p', { children: ['and also get ', o.jsx('strong', { children: '10% less fees forever' }, void 0), ' on the biggest cryptocurrency exchange'] }, void 0), o.jsx(s.SupportLinkBinance, {
                                name: 'Binance_SupportMyWork',
                                translation: e,
                            }, void 0)],
                        }), void 0);
                    case 1:
                        return o.jsxs('section', r({ className: 'support' }, {
                            children: [o.jsx('h2', { children: 'Support Crypto Bubbles' }, void 0), o.jsxs('p', { children: ['and also get ', o.jsx('strong', { children: '10% less fees forever' }, void 0), ' on the biggest cryptocurrency exchange'] }, void 0), o.jsx(s.SupportLinkBinance, {
                                name: 'Binance_SupportCB',
                                translation: e,
                            }, void 0)],
                        }), void 0);
                    default:
                        return o.jsxs('section', r({ className: 'support' }, {
                            children: [o.jsx('h2', { children: 'Not yet on Binance?' }, void 0), o.jsxs('p', { children: ['Support me and also get ', o.jsx('strong', { children: '10% less fees forever' }, void 0), ' on the biggest cryptocurrency exchange'] }, void 0), o.jsx(s.SupportLinkBinance, {
                                name: 'Binance_NotYet',
                                translation: e,
                            }, void 0)],
                        }), void 0);
                    }
                },
                );
            },
            8360: function (e, t, n) {
                var r = this && this.__assign || function () {
                    return (r = Object.assign || function (e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++) {
                            for (var o in t = arguments[n]) { Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]) }
                        }
                        return e;
                    }
                    ).apply(this, arguments);
                }
                ;
                Object.defineProperty(t, '__esModule', { value: !0 }),
                t.ButtonFavorite = void 0;
                var o = n(5893),
                    i = n(5953),
                    a = n(2085),
                    s = n(1677);
                t.ButtonFavorite = function (e) {
                    var t = e.on,
                        n = e.onClick,
                        c = i.useTranslation(),
                        l = t ? c.remove_favorite : c.add_favorite;
                    return o.jsx('button', r({
                        className: a.combineClasses('icon-button', 'button-favorite', t && 'on'),
                        title: l,
                        onClick: n,
                    }, { children: o.jsx(s.IconFavorite, {}, void 0) }), void 0);
                };
            },
            3653: function (e, t, n) {
                var r = this && this.__assign || function () {
                    return (r = Object.assign || function (e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++) {
                            for (var o in t = arguments[n]) { Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]) }
                        }
                        return e;
                    }
                    ).apply(this, arguments);
                }
                ;
                Object.defineProperty(t, '__esModule', { value: !0 }),
                t.IconAdd = void 0;
                var o = n(5893);
                t.IconAdd = function (e) {
                    return o.jsx('svg', r({
                        width: '24',
                        height: '24',
                    }, e, { children: o.jsx('path', { d: 'M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z' }, void 0) }), void 0);
                };
            },
            6544: function (e, t, n) {
                var r = this && this.__assign || function () {
                    return (r = Object.assign || function (e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++) {
                            for (var o in t = arguments[n]) { Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]) }
                        }
                        return e;
                    }
                    ).apply(this, arguments);
                }
                ;
                Object.defineProperty(t, '__esModule', { value: !0 }),
                t.IconClose = void 0;
                var o = n(5893);
                t.IconClose = function (e) {
                    return o.jsx('svg', r({
                        width: '24',
                        height: '24',
                    }, e, { children: o.jsx('path', { d: 'M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z' }, void 0) }), void 0);
                };
            },
            9754: function (e, t, n) {
                var r = this && this.__assign || function () {
                    return (r = Object.assign || function (e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++) {
                            for (var o in t = arguments[n]) { Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]) }
                        }
                        return e;
                    }
                    ).apply(this, arguments);
                }
                ;
                Object.defineProperty(t, '__esModule', { value: !0 }),
                t.IconCoinGecko = void 0;
                var o = n(5893);
                t.IconCoinGecko = function (e) {
                    return o.jsxs('svg', r({
                        width: '24',
                        height: '24',
                        viewBox: '0 0 276 276',
                    }, e, {
                        children: [o.jsx('path', {
                            fill: '#8dc63f',
                            d: 'M276,137.39A138,138,0,1,1,137.39,0h0A138,138,0,0,1,276,137.39Z',
                        }, void 0), o.jsx('path', {
                            fill: '#f9e988',
                            d: 'M265.65,137.44a127.63,127.63,0,1,1-128.21-127h0A127.65,127.65,0,0,1,265.65,137.44Z',
                        }, void 0), o.jsx('path', {
                            fill: '#8dc63f',
                            d: 'M202.74,92.39c-9.26-2.68-18.86-6.48-28.58-10.32-.56-2.44-2.72-5.48-7.09-9.19-6.35-5.51-18.28-5.37-28.59-2.93-11.38-2.68-22.62-3.63-33.41-1C16.82,93.26,66.86,152.57,34.46,212.19c4.61,9.78,54.3,66.84,126.2,51.53,0,0-24.59-59.09,30.9-87.45C236.57,153.18,269.09,110.46,202.74,92.39Z',
                        }, void 0), o.jsx('path', {
                            fill: 'white',
                            d: 'M144.6,106.58a24.68,24.68,0,1,1-24.69-24.67h0a24.68,24.68,0,0,1,24.68,24.66Z',
                        }, void 0), o.jsx('path', {
                            fill: '#222',
                            d: 'M137.28,106.8a17.36,17.36,0,1,1-17.36-17.36h0A17.36,17.36,0,0,1,137.28,106.8Z',
                        }, void 0), o.jsx('path', {
                            fill: '#8dc63f',
                            d: 'M233.63,142.08c-20,14.09-42.74,24.78-75,24.78-15.1,0-18.16-16-28.14-8.18-5.15,4.06-23.31,13.14-37.72,12.45S55,162,48.49,131.23C45.91,162,44.59,184.65,33,210.62c23,36.83,77.84,65.24,127.62,53C155.31,226.27,188,189.69,206.34,171c7-7.09,20.3-18.66,27.29-28.91Z',
                        }, void 0)],
                    }), void 0);
                };
            },
            2998: function (e, t, n) {
                var r = this && this.__assign || function () {
                    return (r = Object.assign || function (e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++) {
                            for (var o in t = arguments[n]) { Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]) }
                        }
                        return e;
                    }
                    ).apply(this, arguments);
                }
                ;
                Object.defineProperty(t, '__esModule', { value: !0 }),
                t.IconDelete = void 0;
                var o = n(5893);
                t.IconDelete = function (e) {
                    return o.jsx('svg', r({
                        width: '24',
                        height: '24',
                    }, e, { children: o.jsx('path', { d: 'M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z' }, void 0) }), void 0);
                };
            },
            6514: function (e, t, n) {
                var r = this && this.__assign || function () {
                    return (r = Object.assign || function (e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++) {
                            for (var o in t = arguments[n]) { Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]) }
                        }
                        return e;
                    }
                    ).apply(this, arguments);
                }
                ;
                Object.defineProperty(t, '__esModule', { value: !0 }),
                t.IconDown = void 0;
                var o = n(5893);
                t.IconDown = function (e) {
                    return o.jsx('svg', r({
                        width: '24',
                        height: '24',
                    }, e, { children: o.jsx('path', { d: 'M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z' }, void 0) }), void 0);
                };
            },
            6348: function (e, t, n) {
                var r = this && this.__assign || function () {
                    return (r = Object.assign || function (e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++) {
                            for (var o in t = arguments[n]) { Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]) }
                        }
                        return e;
                    }
                    ).apply(this, arguments);
                }
                ;
                Object.defineProperty(t, '__esModule', { value: !0 }),
                t.IconEdit = void 0;
                var o = n(5893);
                t.IconEdit = function (e) {
                    return o.jsx('svg', r({
                        width: '24',
                        height: '24',
                    }, e, { children: o.jsx('path', { d: 'M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z' }, void 0) }), void 0);
                };
            },
            7262: function (e, t, n) {
                var r = this && this.__assign || function () {
                    return (r = Object.assign || function (e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++) {
                            for (var o in t = arguments[n]) { Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]) }
                        }
                        return e;
                    }
                    ).apply(this, arguments);
                }
                ;
                Object.defineProperty(t, '__esModule', { value: !0 }),
                t.IconExpand = void 0;
                var o = n(5893);
                t.IconExpand = function (e) {
                    return o.jsx('svg', r({
                        width: '24',
                        height: '24',
                    }, e, { children: o.jsx('path', { d: 'M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z' }, void 0) }), void 0);
                };
            },
            3408: function (e, t, n) {
                var r = this && this.__assign || function () {
                    return (r = Object.assign || function (e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++) {
                            for (var o in t = arguments[n]) { Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]) }
                        }
                        return e;
                    }
                    ).apply(this, arguments);
                }
                ;
                Object.defineProperty(t, '__esModule', { value: !0 }),
                t.IconFacebook = void 0;
                var o = n(5893);
                t.IconFacebook = function (e) {
                    return o.jsx('svg', r({
                        width: '24',
                        height: '24',
                    }, e, { children: o.jsx('path', { d: 'M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M18,5H15.5A3.5,3.5 0 0,0 12,8.5V11H10V14H12V21H15V14H18V11H15V9A1,1 0 0,1 16,8H18V5Z' }, void 0) }), void 0);
                };
            },
            1677: function (e, t, n) {
                var r = this && this.__assign || function () {
                    return (r = Object.assign || function (e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++) {
                            for (var o in t = arguments[n]) { Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]) }
                        }
                        return e;
                    }
                    ).apply(this, arguments);
                }
                ;
                Object.defineProperty(t, '__esModule', { value: !0 }),
                t.IconFavorite = void 0;
                var o = n(5893);
                t.IconFavorite = function (e) {
                    return o.jsx('svg', r({
                        width: '24',
                        height: '24',
                    }, e, { children: o.jsx('path', { d: 'M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z' }, void 0) }), void 0);
                };
            },
            1562: function (e, t, n) {
                var r = this && this.__assign || function () {
                    return (r = Object.assign || function (e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++) {
                            for (var o in t = arguments[n]) { Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]) }
                        }
                        return e;
                    }
                    ).apply(this, arguments);
                }
                ;
                Object.defineProperty(t, '__esModule', { value: !0 }),
                t.IconFullscreen = void 0;
                var o = n(5893);
                t.IconFullscreen = function (e) {
                    return o.jsx('svg', r({
                        width: '24',
                        height: '24',
                    }, e, { children: o.jsx('path', { d: 'M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z' }, void 0) }), void 0);
                };
            },
            5784: function (e, t, n) {
                var r = this && this.__assign || function () {
                    return (r = Object.assign || function (e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++) {
                            for (var o in t = arguments[n]) { Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]) }
                        }
                        return e;
                    }
                    ).apply(this, arguments);
                }
                ;
                Object.defineProperty(t, '__esModule', { value: !0 }),
                t.IconFullscreenExit = void 0;
                var o = n(5893);
                t.IconFullscreenExit = function (e) {
                    return o.jsx('svg', r({
                        width: '24',
                        height: '24',
                    }, e, { children: o.jsx('path', { d: 'M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z' }, void 0) }), void 0);
                };
            },
            4477: function (e, t, n) {
                var r = this && this.__assign || function () {
                    return (r = Object.assign || function (e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++) {
                            for (var o in t = arguments[n]) { Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]) }
                        }
                        return e;
                    }
                    ).apply(this, arguments);
                }
                ;
                Object.defineProperty(t, '__esModule', { value: !0 }),
                t.IconGooglePlay = void 0;
                var o = n(5893);
                t.IconGooglePlay = function (e) {
                    return o.jsx('svg', r({
                        width: '24',
                        height: '24',
                    }, e, { children: o.jsx('path', { d: 'M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z' }, void 0) }), void 0);
                };
            },
            7386: function (e, t, n) {
                var r = this && this.__assign || function () {
                    return (r = Object.assign || function (e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++) {
                            for (var o in t = arguments[n]) { Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]) }
                        }
                        return e;
                    }
                    ).apply(this, arguments);
                }
                ;
                Object.defineProperty(t, '__esModule', { value: !0 }),
                t.IconInstagram = void 0;
                var o = n(5893);
                t.IconInstagram = function (e) {
                    return o.jsx('svg', r({
                        width: '24',
                        height: '24',
                    }, e, { children: o.jsx('path', { d: 'M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z' }, void 0) }), void 0);
                };
            },
            6091: function (e, t, n) {
                var r = this && this.__assign || function () {
                    return (r = Object.assign || function (e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++) {
                            for (var o in t = arguments[n]) { Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]) }
                        }
                        return e;
                    }
                    ).apply(this, arguments);
                }
                ;
                Object.defineProperty(t, '__esModule', { value: !0 }),
                t.IconLocation = void 0;
                var o = n(5893);
                t.IconLocation = function (e) {
                    return o.jsx('svg', r({
                        width: '24',
                        height: '24',
                    }, e, { children: o.jsx('path', { d: 'M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm8.94 3c-.46-4.17-3.77-7.48-7.94-7.94V1h-2v2.06C6.83 3.52 3.52 6.83 3.06 11H1v2h2.06c.46 4.17 3.77 7.48 7.94 7.94V23h2v-2.06c4.17-.46 7.48-3.77 7.94-7.94H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z' }, void 0) }), void 0);
                };
            },
            4212: function (e, t, n) {
                var r = this && this.__assign || function () {
                    return (r = Object.assign || function (e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++) {
                            for (var o in t = arguments[n]) { Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]) }
                        }
                        return e;
                    }
                    ).apply(this, arguments);
                }
                ;
                Object.defineProperty(t, '__esModule', { value: !0 }),
                t.IconMail = void 0;
                var o = n(5893);
                t.IconMail = function (e) {
                    return o.jsx('svg', r({
                        width: '24',
                        height: '24',
                    }, e, { children: o.jsx('path', { d: 'M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z' }, void 0) }), void 0);
                };
            },
            8714: function (e, t, n) {
                var r = this && this.__assign || function () {
                    return (r = Object.assign || function (e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++) {
                            for (var o in t = arguments[n]) { Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]) }
                        }
                        return e;
                    }
                    ).apply(this, arguments);
                }
                ;
                Object.defineProperty(t, '__esModule', { value: !0 }),
                t.IconSearch = void 0;
                var o = n(5893);
                t.IconSearch = function (e) {
                    return o.jsx('svg', r({
                        width: '24',
                        height: '24',
                    }, e, { children: o.jsx('path', { d: 'M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z' }, void 0) }), void 0);
                };
            },
            9528: function (e, t, n) {
                var r = this && this.__assign || function () {
                    return (r = Object.assign || function (e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++) {
                            for (var o in t = arguments[n]) { Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]) }
                        }
                        return e;
                    }
                    ).apply(this, arguments);
                }
                ;
                Object.defineProperty(t, '__esModule', { value: !0 }),
                t.IconSettings = void 0;
                var o = n(5893);
                t.IconSettings = function (e) {
                    return o.jsx('svg', r({
                        width: '24',
                        height: '24',
                    }, e, { children: o.jsx('path', { d: 'M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z' }, void 0) }), void 0);
                };
            },
            9647: function (e, t, n) {
                var r = this && this.__assign || function () {
                    return (r = Object.assign || function (e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++) {
                            for (var o in t = arguments[n]) { Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]) }
                        }
                        return e;
                    }
                    ).apply(this, arguments);
                }
                ;
                Object.defineProperty(t, '__esModule', { value: !0 }),
                t.IconSteam = void 0;
                var o = n(5893);
                t.IconSteam = function (e) {
                    return o.jsx('svg', r({
                        width: '24',
                        height: '24',
                    }, e, { children: o.jsx('path', { d: 'M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C7.4,22 3.55,18.92 2.36,14.73L6.19,16.31C6.45,17.6 7.6,18.58 8.97,18.58C10.53,18.58 11.8,17.31 11.8,15.75V15.62L15.2,13.19H15.28C17.36,13.19 19.05,11.5 19.05,9.42C19.05,7.34 17.36,5.65 15.28,5.65C13.2,5.65 11.5,7.34 11.5,9.42V9.47L9.13,12.93L8.97,12.92C8.38,12.92 7.83,13.1 7.38,13.41L2,11.2C2.43,6.05 6.73,2 12,2M8.28,17.17C9.08,17.5 10,17.13 10.33,16.33C10.66,15.53 10.28,14.62 9.5,14.29L8.22,13.76C8.71,13.58 9.26,13.57 9.78,13.79C10.31,14 10.72,14.41 10.93,14.94C11.15,15.46 11.15,16.04 10.93,16.56C10.5,17.64 9.23,18.16 8.15,17.71C7.65,17.5 7.27,17.12 7.06,16.67L8.28,17.17M17.8,9.42C17.8,10.81 16.67,11.94 15.28,11.94C13.9,11.94 12.77,10.81 12.77,9.42A2.5,2.5 0 0,1 15.28,6.91C16.67,6.91 17.8,8.04 17.8,9.42M13.4,9.42C13.4,10.46 14.24,11.31 15.29,11.31C16.33,11.31 17.17,10.46 17.17,9.42C17.17,8.38 16.33,7.53 15.29,7.53C14.24,7.53 13.4,8.38 13.4,9.42Z' }, void 0) }), void 0);
                };
            },
            9306: function (e, t, n) {
                var r = this && this.__assign || function () {
                    return (r = Object.assign || function (e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++) {
                            for (var o in t = arguments[n]) { Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]) }
                        }
                        return e;
                    }
                    ).apply(this, arguments);
                }
                ;
                Object.defineProperty(t, '__esModule', { value: !0 }),
                t.IconTwitter = void 0;
                var o = n(5893);
                t.IconTwitter = function (e) {
                    return o.jsx('svg', r({
                        width: '24',
                        height: '24',
                    }, e, { children: o.jsx('path', { d: 'M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z' }, void 0) }), void 0);
                };
            },
            64: function (e, t, n) {
                var r = this && this.__assign || function () {
                    return (r = Object.assign || function (e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++) {
                            for (var o in t = arguments[n]) { Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]) }
                        }
                        return e;
                    }
                    ).apply(this, arguments);
                }
                ;
                Object.defineProperty(t, '__esModule', { value: !0 }),
                t.SearchInput = void 0;
                var o = n(5893),
                    i = n(8714);
                t.SearchInput = function (e) {
                    var t = e.value,
                        n = e.placeholder,
                        a = e.onChange;
                    return o.jsxs('div', r({ className: 'search-input-container' }, {
                        children: [o.jsx('input', {
                            value: t,
                            placeholder: n,
                            type: 'search',
                            className: 'search-input',
                            onChange: function (e) {
                                var t = e.target.value;
                                a(t);
                            },
                        }, void 0), o.jsx(i.IconSearch, { className: 'search-input-icon' }, void 0)],
                    }), void 0);
                };
            },
            5534: (e, t, n) => {
                Object.defineProperty(t, '__esModule', { value: !0 }),
                t.TextInput = void 0;
                var r = n(5893),
                    o = n(2085);
                t.TextInput = function (e) {
                    var t = e.value,
                        n = e.type,
                        i = e.className,
                        a = e.onChange;
                    return r.jsx('input', {
                        value: t,
                        type: n,
                        className: o.combineClasses('text-input', i),
                        onChange: function (e) {
                            var t = e.target.value;
                            a(t);
                        },
                    }, void 0);
                };
            },
            9239: function (e, t, n) {
                var r = this && this.__assign || function () {
                    return (r = Object.assign || function (e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++) {
                            for (var o in t = arguments[n]) { Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]) }
                        }
                        return e;
                    }
                    ).apply(this, arguments);
                }
                ;
                Object.defineProperty(t, '__esModule', { value: !0 }),
                t.LinkCoinGecko = void 0;
                var o = n(5893),
                    i = n(5953),
                    a = n(9754),
                    s = n(6822);
                t.LinkCoinGecko = function (e) {
                    var t = e.currency,
                        n = i.useTranslation();
                    return o.jsx(s.Link, r({
                        href: t.coingeckoLink,
                        title: n.open_coingecko,
                        name: 'CoinGecko',
                        className: 'icon-button',
                    }, { children: o.jsx(a.IconCoinGecko, {}, void 0) }), void 0);
                };
            },
            2541: function (e, t, n) {
                var r = this && this.__assign || function () {
                    return (r = Object.assign || function (e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++) {
                            for (var o in t = arguments[n]) { Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]) }
                        }
                        return e;
                    }
                    ).apply(this, arguments);
                }
                ;
                Object.defineProperty(t, '__esModule', { value: !0 }),
                t.LinkGooglePlay = void 0;
                var o = n(5893),
                    i = n(5953),
                    a = n(4477),
                    s = n(6822);
                t.LinkGooglePlay = function () {
                    var e = i.useTranslation();
                    return o.jsx(s.Link, r({
                        className: 'icon-button link-googlePlay',
                        href: 'https://play.google.com/store/apps/details?id=net.cryptobubbles',
                        title: e.link_app,
                        name: 'GooglePlay',
                    }, { children: o.jsx(a.IconGooglePlay, {}, void 0) }), void 0);
                };
            },
            4848: function (e, t, n) {
                var r = this && this.__assign || function () {
                    return (r = Object.assign || function (e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++) {
                            for (var o in t = arguments[n]) { Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]) }
                        }
                        return e;
                    }
                    ).apply(this, arguments);
                }
                ;
                Object.defineProperty(t, '__esModule', { value: !0 }),
                t.SupportLinkBMC = void 0;
                var o = n(5893),
                    i = n(2746),
                    a = n(6822);
                t.SupportLinkBMC = function (e) {
                    return o.jsx(a.Link, r({
                        className: 'support-link-bmc',
                        href: i.Config.linkBuyMeACoffee,
                        title: e.translation.link_bmc,
                        name: 'Coffee',
                    }, {
                        children: o.jsx('img', {
                            src: i.Config.imageBuyMeACoffee,
                            alt: 'Buy Me A Coffee',
                            title: e.translation.link_bmc,
                        }, void 0),
                    }), void 0);
                };
            },
            5914: function (e, t, n) {
                var r = this && this.__assign || function () {
                    return (r = Object.assign || function (e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++) {
                            for (var o in t = arguments[n]) { Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]) }
                        }
                        return e;
                    }
                    ).apply(this, arguments);
                }
                ;
                Object.defineProperty(t, '__esModule', { value: !0 }),
                t.SupportLinkBinance = void 0;
                var o = n(5893),
                    i = n(2746),
                    a = n(6822);
                t.SupportLinkBinance = function (e) {
                    return o.jsxs(a.Link, r({
                        className: 'support-link-binance',
                        href: i.Config.linkBinance,
                        title: e.translation.link_binance,
                        name: e.name || 'Binance',
                    }, { children: [o.jsx('strong', { children: 'Start trading on Binance' }, void 0), o.jsx('span', { children: 'Create an account at biggest cryptocurrency & fiat exchange' }, void 0)] }), void 0);
                };
            },
            1918: function (e, t, n) {
                var r = this && this.__assign || function () {
                    return (r = Object.assign || function (e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++) {
                            for (var o in t = arguments[n]) { Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]) }
                        }
                        return e;
                    }
                    ).apply(this, arguments);
                }
                ;
                Object.defineProperty(t, '__esModule', { value: !0 }),
                t.BaseCurrencySelect = void 0;
                var o = n(5893),
                    i = n(7294),
                    a = n(1512),
                    s = n(6457);
                t.BaseCurrencySelect = function () {
                    var e = a.useSelector(function (e) {
                            return {
                                baseCurrencies: e.baseCurrencies,
                                selectedBaseCurrency: e.selectedBaseCurrency,
                            };
                        },
                        ),
                        t = e.baseCurrencies,
                        n = e.selectedBaseCurrency,
                        c = s.useTypedDispatch(),
                        l = i.useCallback(function (e) {
                            var t = e.target.value;
                            c({
                                type: 'SET_BASECURRENCY',
                                baseCurrencyId: t,
                            });
                        }
                            , [c]);
                    return o.jsx('select', r({
                        className: 'basecurrency-select',
                        value: n.id,
                        onChange: l,
                    }, {
                        children: t.map(function (e) {
                            return o.jsx('option', r({ value: e.id }, { children: e.symbol + ' ' + e.code }), e.id);
                        },
                        ),
                    }), void 0);
                };
            },
            1595: function (e, t, n) {
                var r = this && this.__assign || function () {
                    return (r = Object.assign || function (e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++) {
                            for (var o in t = arguments[n]) { Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]) }
                        }
                        return e;
                    }
                    ).apply(this, arguments);
                }
                ;
                Object.defineProperty(t, '__esModule', { value: !0 }),
                t.FilterSelect = void 0;
                var o = n(5893),
                    i = n(7294),
                    a = n(5953),
                    s = [{
                        value: 'none',
                        label: function (e) {
                            return e.filter_none;
                        },
                    }, {
                        value: 'only-favorites',
                        label: function (e) {
                            return e.filter_onlyFavorites;
                        },
                    }];
                t.FilterSelect = function (e) {
                    var t = e.value,
                        n = e.onChange,
                        c = a.useTranslation(),
                        l = i.useCallback(function (e) {
                            var t = e.target.value;
                            t && n(t);
                        }
                            , [n]);
                    return o.jsx('select', r({
                        className: 'filter-select',
                        value: t,
                        onChange: l,
                    }, {
                        children: s.map(function (e) {
                            return o.jsx('option', r({ value: e.value }, { children: e.label(c) }), e.value);
                        },
                        ),
                    }), void 0);
                };
            },
            6323: function (e, t, n) {
                var r = this && this.__assign || function () {
                    return (r = Object.assign || function (e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++) {
                            for (var o in t = arguments[n]) { Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]) }
                        }
                        return e;
                    }
                    ).apply(this, arguments);
                }
                ;
                Object.defineProperty(t, '__esModule', { value: !0 }),
                t.PeriodSelect = void 0;
                var o = n(5893),
                    i = n(7294),
                    a = n(1512),
                    s = n(5953);
                t.PeriodSelect = function (e) {
                    var t = e.value,
                        n = e.onChange,
                        c = a.useSelector(function (e) {
                            return e.periods;
                        },
                        ),
                        l = s.useTranslation(),
                        u = i.useCallback(function (e) {
                            var t = e.target.value,
                                r = c.find(function (e) {
                                    return e.id === t;
                                },
                                );
                            r && n(r);
                        }
                            , [n, c]);
                    return o.jsx('select', r({
                        className: 'period-select',
                        value: t,
                        onChange: u,
                    }, {
                        children: c.map(function (e) {
                            return o.jsx('option', r({ value: e.id }, { children: e.label(l) }), e.id);
                        },
                        ),
                    }), void 0);
                };
            },
            7077: function (e, t, n) {
                var r = this && this.__assign || function () {
                    return (r = Object.assign || function (e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++) {
                            for (var o in t = arguments[n]) { Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]) }
                        }
                        return e;
                    }
                    ).apply(this, arguments);
                }
                ;
                Object.defineProperty(t, '__esModule', { value: !0 }),
                t.PropertyContentSelect = void 0;
                var o = n(5893),
                    i = n(7294),
                    a = n(5953),
                    s = [{
                        value: 'performance',
                        label: function (e) {
                            return e.performance;
                        },
                    }, {
                        value: 'name',
                        label: function (e) {
                            return e.currencyName;
                        },
                    }, {
                        value: 'price',
                        label: function (e) {
                            return e.price;
                        },
                    }, {
                        value: 'rank',
                        label: function (e) {
                            return e.rank;
                        },
                    }];
                t.PropertyContentSelect = function (e) {
                    var t = e.value,
                        n = e.onChange,
                        c = a.useTranslation(),
                        l = i.useCallback(function (e) {
                            var t = e.target.value;
                            t && n(t);
                        }
                            , [n]);
                    return o.jsx('select', r({
                        className: 'property-content-select',
                        value: t,
                        onChange: l,
                    }, {
                        children: s.map(function (e) {
                            return o.jsx('option', r({ value: e.value }, { children: e.label(c) }), e.value);
                        },
                        ),
                    }), void 0);
                };
            },
            8120: function (e, t, n) {
                var r = this && this.__assign || function () {
                    return (r = Object.assign || function (e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++) {
                            for (var o in t = arguments[n]) { Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]) }
                        }
                        return e;
                    }
                    ).apply(this, arguments);
                }
                ;
                Object.defineProperty(t, '__esModule', { value: !0 }),
                t.PropertyColorSelect = void 0;
                var o = n(5893),
                    i = n(7294),
                    a = n(5953),
                    s = [{
                        value: 'performance',
                        label: function (e) {
                            return e.performance;
                        },
                    }, {
                        value: 'neutral',
                        label: function (e) {
                            return e.neutral;
                        },
                    }];
                t.PropertyColorSelect = function (e) {
                    var t = e.value,
                        n = e.onChange,
                        c = a.useTranslation(),
                        l = i.useCallback(function (e) {
                            var t = e.target.value;
                            t && n(t);
                        }
                            , [n]);
                    return o.jsx('select', r({
                        className: 'property-color-select',
                        value: t,
                        onChange: l,
                    }, {
                        children: s.map(function (e) {
                            return o.jsx('option', r({ value: e.value }, { children: e.label(c) }), e.value);
                        },
                        ),
                    }), void 0);
                };
            },
            5850: function (e, t, n) {
                var r = this && this.__assign || function () {
                    return (r = Object.assign || function (e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++) {
                            for (var o in t = arguments[n]) { Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]) }
                        }
                        return e;
                    }
                    ).apply(this, arguments);
                }
                ;
                Object.defineProperty(t, '__esModule', { value: !0 }),
                t.PropertySizeSelect = void 0;
                var o = n(5893),
                    i = n(7294),
                    a = n(5953),
                    s = [{
                        value: 'performance',
                        label: function (e) {
                            return e.performance;
                        },
                    }, {
                        value: 'marketcap',
                        label: function (e) {
                            return e.marketcap;
                        },
                    }, {
                        value: 'volume',
                        label: function (e) {
                            return e.volume;
                        },
                    }];
                t.PropertySizeSelect = function (e) {
                    var t = e.value,
                        n = e.onChange,
                        c = a.useTranslation(),
                        l = i.useCallback(function (e) {
                            var t = e.target.value;
                            t && n(t);
                        }
                            , [n]);
                    return o.jsx('select', r({
                        className: 'property-size-select',
                        value: t,
                        onChange: l,
                    }, {
                        children: s.map(function (e) {
                            return o.jsx('option', r({ value: e.value }, { children: e.label(c) }), e.value);
                        },
                        ),
                    }), void 0);
                };
            },
            8651: function (e, t, n) {
                var r = this && this.__assign || function () {
                    return (r = Object.assign || function (e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++) {
                            for (var o in t = arguments[n]) { Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]) }
                        }
                        return e;
                    }
                    ).apply(this, arguments);
                }
                ;
                Object.defineProperty(t, '__esModule', { value: !0 }),
                t.TranslationSelect = void 0;
                var o = n(5893),
                    i = n(7294),
                    a = n(1512),
                    s = n(6457);
                t.TranslationSelect = function () {
                    var e = a.useSelector(function (e) {
                            return {
                                translations: e.translations,
                                selectedTranslation: e.selectedTranslation,
                            };
                        },
                        ),
                        t = e.translations,
                        n = e.selectedTranslation,
                        c = s.useTypedDispatch(),
                        l = i.useCallback(function (e) {
                            var t = e.target.value;
                            c({
                                type: 'SET_TRANSLATION',
                                translationId: t,
                            });
                        }
                            , [c]);
                    return o.jsx('select', r({
                        className: 'translation-select',
                        value: n.id,
                        onChange: l,
                    }, {
                        children: t.map(function (e) {
                            return o.jsx('option', r({ value: e.id }, { children: e.flag + ' ' + e.name }), e.id);
                        },
                        ),
                    }), void 0);
                };
            },
            9362: function (e, t, n) {
                var r = this && this.__assign || function () {
                    return (r = Object.assign || function (e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++) {
                            for (var o in t = arguments[n]) { Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]) }
                        }
                        return e;
                    }
                    ).apply(this, arguments);
                }
                ;
                Object.defineProperty(t, '__esModule', { value: !0 }),
                t.CurrencyRow = void 0;
                var o = n(5893),
                    i = n(7294),
                    a = n(2746),
                    s = n(1190),
                    c = n(8360),
                    l = n(4972),
                    u = n(6091),
                    d = n(9239),
                    f = n(3059);
                t.CurrencyRow = i.memo(function (e) {
                    var t = e.currency,
                        n = e.baseCurrency,
                        i = e.translation,
                        h = e.onToggleFavorite,
                        p = e.onSelectCurrency,
                        v = t.data[n.id];
                    return o.jsxs('tr', {
                        children: [o.jsx('td', r({ className: 'center' }, { children: a.Config.rankIdentifier + t.rank }), void 0), o.jsx('td', { children: o.jsx(l.CurrencyHeader, { currency: t }, void 0) }, void 0), o.jsx('td', r({ className: 'right' }, { children: s.formatCurrency(v.price, n) }), void 0), o.jsx('td', r({ className: 'right' }, { children: s.formatCurrency(v.volume, n) }), void 0), o.jsx(f.PerformanceCell, {
                            currency: t,
                            baseCurrency: n,
                            periodId: 'hour',
                        }, void 0), o.jsx(f.PerformanceCell, {
                            currency: t,
                            baseCurrency: n,
                            periodId: 'day',
                        }, void 0), o.jsx(f.PerformanceCell, {
                            currency: t,
                            baseCurrency: n,
                            periodId: 'week',
                        }, void 0), o.jsx(f.PerformanceCell, {
                            currency: t,
                            baseCurrency: n,
                            periodId: 'month',
                        }, void 0), o.jsx(f.PerformanceCell, {
                            currency: t,
                            baseCurrency: n,
                            periodId: 'year',
                        }, void 0), o.jsxs('td', {
                            children: [o.jsx(c.ButtonFavorite, {
                                on: t.isFavorite,
                                onClick: function () {
                                    return h(t);
                                },
                            }, void 0), o.jsx('button', r({
                                className: 'icon-button',
                                title: i.select_bubble,
                                onClick: function () {
                                    return p(t);
                                },
                            }, { children: o.jsx(u.IconLocation, {}, void 0) }), void 0), o.jsx(d.LinkCoinGecko, { currency: t }, void 0)],
                        }, void 0)],
                    }, void 0);
                },
                );
            },
            360: function (e, t, n) {
                var r = this && this.__assign || function () {
                        return (r = Object.assign || function (e) {
                            for (var t, n = 1, r = arguments.length; n < r; n++) {
                                for (var o in t = arguments[n]) { Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]) }
                            }
                            return e;
                        }
                        ).apply(this, arguments);
                    },
                    o = this && this.__spreadArray || function (e, t) {
                        for (var n = 0, r = t.length, o = e.length; n < r; n++,
                        o++) { e[o] = t[n] }
                        return e;
                    }
                ;
                Object.defineProperty(t, '__esModule', { value: !0 }),
                t.CurrencyTable = void 0;
                var i = n(5893),
                    a = n(7294),
                    s = n(1512),
                    c = n(6457),
                    l = n(750),
                    u = n(9362),
                    d = n(3440),
                    f = n(64),
                    h = n(1915);
                t.CurrencyTable = a.memo(function () {
                    var e = s.useSelector(function (e) {
                            return {
                                currencies: e.currencies,
                                translation: e.selectedTranslation,
                                baseCurrency: e.selectedBaseCurrency,
                            };
                        },
                        ),
                        t = e.currencies,
                        n = e.translation,
                        p = e.baseCurrency,
                        v = a.useState(''),
                        b = v[0],
                        g = v[1],
                        y = a.useState(null),
                        m = y[0],
                        _ = y[1],
                        C = c.useTypedDispatch(),
                        j = a.useCallback(function (e) {
                            C({
                                type: 'TOGGLE_FAVORITE',
                                currencyId: e.id,
                            });
                        }
                            , [C]),
                        x = a.useCallback(function (e) {
                            C({
                                type: 'SELECT_CURRENCY',
                                currencyId: e.id,
                            }),
                            l.scrollToTop();
                        }
                            , [C]),
                        w = a.useCallback(function (e) {
                            _(function (t) {
                                return t && t.field === e ? t.direction === 'asc' ? null : r(r({}, t), { direction: 'asc' }) : {
                                    field: e,
                                    direction: 'desc',
                                };
                            },
                            );
                        }
                            , [_]),
                        O = b.trim().toLowerCase(),
                        P = a.useMemo(function () {
                            return t && O.length > 0 ? t.filter(function (e) {
                                return e.nameLower.includes(O) || e.symbolLower.includes(O);
                            },
                            ) : t;
                        }
                            , [t, O]),
                        k = a.useMemo(function () {
                            return m && P ? (function (e, t, n) {
                                var r = (function (e, t) {
                                        switch (e) {
                                        case 'rank':
                                            return function (e, t) {
                                                return t.rank - e.rank;
                                            }
                                            ;
                                        case 'price':
                                            return function (e, n) {
                                                return n.data[t.id].price - e.data[t.id].price;
                                            }
                                            ;
                                        case 'volume':
                                            return function (e, n) {
                                                return n.data[t.id].volume - e.data[t.id].volume;
                                            }
                                            ;
                                        case 'name':
                                            return function (e, t) {
                                                return t.name.localeCompare(e.name);
                                            }
                                            ;
                                        case 'performance-hour':
                                            return function (e, n) {
                                                var r, o;
                                                return ((r = n.data[t.id].performance.hour) !== null && void 0 !== r ? r : 0) - ((o = e.data[t.id].performance.hour) !== null && void 0 !== o ? o : 0);
                                            }
                                            ;
                                        case 'performance-day':
                                            return function (e, n) {
                                                var r, o;
                                                return ((r = n.data[t.id].performance.day) !== null && void 0 !== r ? r : 0) - ((o = e.data[t.id].performance.day) !== null && void 0 !== o ? o : 0);
                                            }
                                            ;
                                        case 'performance-week':
                                            return function (e, n) {
                                                var r, o;
                                                return ((r = n.data[t.id].performance.week) !== null && void 0 !== r ? r : 0) - ((o = e.data[t.id].performance.week) !== null && void 0 !== o ? o : 0);
                                            }
                                            ;
                                        case 'performance-month':
                                            return function (e, n) {
                                                var r, o;
                                                return ((r = n.data[t.id].performance.month) !== null && void 0 !== r ? r : 0) - ((o = e.data[t.id].performance.month) !== null && void 0 !== o ? o : 0);
                                            }
                                            ;
                                        case 'performance-year':
                                            return function (e, n) {
                                                var r, o;
                                                return ((r = n.data[t.id].performance.year) !== null && void 0 !== r ? r : 0) - ((o = e.data[t.id].performance.year) !== null && void 0 !== o ? o : 0);
                                            };
                                        }
                                    }(n.field, t)),
                                    i = n.direction === 'asc' ? function (e, t) {
                                        return r(t, e);
                                    }
                                        : r;
                                return o([], e).sort(i);
                            }(P, p, m)) : P;
                        }
                            , [P, p, m]);
                    return k ? i.jsxs('div', r({ className: 'currency-table-container' }, {
                        children: [i.jsx('div', r({ className: 'currency-table-search' }, {
                            children: i.jsx(f.SearchInput, {
                                value: b,
                                placeholder: n.search_crypto,
                                onChange: g,
                            }, void 0),
                        }), void 0), i.jsx(h.Support, {}, void 0), i.jsx('div', r({ className: 'scroll-container' }, {
                            children: i.jsxs('table', r({ className: 'currency-table' }, {
                                children: [i.jsx(d.CurrencyTableHeader, {
                                    translation: n,
                                    sorting: m,
                                    onSort: w,
                                }, void 0), i.jsx('tbody', {
                                    children: k.map(function (e) {
                                        return i.jsx(u.CurrencyRow, {
                                            currency: e,
                                            baseCurrency: p,
                                            translation: n,
                                            onToggleFavorite: j,
                                            onSelectCurrency: x,
                                        }, e.id);
                                    },
                                    ),
                                }, void 0)],
                            }), void 0),
                        }), void 0)],
                    }), void 0) : null;
                },
                );
            },
            3440: function (e, t, n) {
                var r = this && this.__assign || function () {
                    return (r = Object.assign || function (e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++) {
                            for (var o in t = arguments[n]) { Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]) }
                        }
                        return e;
                    }
                    ).apply(this, arguments);
                }
                ;
                Object.defineProperty(t, '__esModule', { value: !0 }),
                t.CurrencyTableHeader = void 0;
                var o = n(5893),
                    i = n(7294),
                    a = n(7015);
                t.CurrencyTableHeader = i.memo(function (e) {
                    var t = e.translation,
                        n = e.sorting,
                        i = e.onSort;
                    return o.jsx('thead', {
                        children: o.jsxs('tr', {
                            children: [o.jsx(a.SortableCell, r({
                                field: 'rank',
                                sorting: n,
                                onClick: i,
                            }, { children: t.rank }), void 0), o.jsx(a.SortableCell, r({
                                field: 'name',
                                sorting: n,
                                onClick: i,
                            }, { children: t.currencyName }), void 0), o.jsx(a.SortableCell, r({
                                field: 'price',
                                sorting: n,
                                onClick: i,
                            }, { children: t.price }), void 0), o.jsx(a.SortableCell, r({
                                field: 'volume',
                                sorting: n,
                                onClick: i,
                            }, { children: t.volume }), void 0), o.jsx(a.SortableCell, r({
                                field: 'performance-hour',
                                sorting: n,
                                onClick: i,
                            }, { children: t.period_hour }), void 0), o.jsx(a.SortableCell, r({
                                field: 'performance-day',
                                sorting: n,
                                onClick: i,
                            }, { children: t.period_day }), void 0), o.jsx(a.SortableCell, r({
                                field: 'performance-week',
                                sorting: n,
                                onClick: i,
                            }, { children: t.period_week }), void 0), o.jsx(a.SortableCell, r({
                                field: 'performance-month',
                                sorting: n,
                                onClick: i,
                            }, { children: t.period_month }), void 0), o.jsx(a.SortableCell, r({
                                field: 'performance-year',
                                sorting: n,
                                onClick: i,
                            }, { children: t.period_year }), void 0), o.jsx('th', { children: t.actions }, void 0)],
                        }, void 0),
                    }, void 0);
                },
                );
            },
            3059: function (e, t, n) {
                var r = this && this.__assign || function () {
                    return (r = Object.assign || function (e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++) {
                            for (var o in t = arguments[n]) { Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]) }
                        }
                        return e;
                    }
                    ).apply(this, arguments);
                }
                ;
                Object.defineProperty(t, '__esModule', { value: !0 }),
                t.PerformanceCell = void 0;
                var o = n(5893),
                    i = n(1190),
                    a = n(2085);
                t.PerformanceCell = function (e) {
                    var t = e.currency,
                        n = e.baseCurrency,
                        s = e.periodId,
                        c = t.data[n.id].performance[s],
                        l = a.combineClasses('center', (function (e) {
                            return e === null || e === 0 ? null : e > 0 ? 'positive' : 'negative';
                        }(c)));
                    return o.jsx('td', r({ className: l }, { children: i.formatPerformance(c) }), void 0);
                };
            },
            7015: function (e, t, n) {
                var r = this && this.__assign || function () {
                    return (r = Object.assign || function (e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++) {
                            for (var o in t = arguments[n]) { Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]) }
                        }
                        return e;
                    }
                    ).apply(this, arguments);
                }
                ;
                Object.defineProperty(t, '__esModule', { value: !0 }),
                t.SortableCell = void 0;
                var o = n(5893),
                    i = n(6514);
                t.SortableCell = function (e) {
                    var t = e.field,
                        n = e.sorting,
                        a = e.children,
                        s = e.onClick,
                        c = (n == null ? void 0 : n.field) === t ? 'sorted-' + n.direction : void 0;
                    return o.jsx('th', r({
                        className: 'sortable',
                        onClick: function () {
                            return s(t);
                        },
                    }, { children: o.jsxs('div', { children: [o.jsx(i.IconDown, { className: c }, void 0), o.jsx('span', { children: a }, void 0)] }, void 0) }), void 0);
                };
            },
            1317: function (e, t, n) {
                var r = this && this.__assign || function () {
                    return (r = Object.assign || function (e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++) {
                            for (var o in t = arguments[n]) { Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]) }
                        }
                        return e;
                    }
                    ).apply(this, arguments);
                }
                ;
                Object.defineProperty(t, '__esModule', { value: !0 }),
                t.BubbleWindow = void 0;
                var o = n(5893),
                    i = n(7294),
                    a = n(1512),
                    s = n(2746),
                    c = n(1190),
                    l = n(8105),
                    u = n(6457),
                    d = n(2085),
                    f = n(8360),
                    h = n(4972),
                    p = n(6544),
                    v = n(7262),
                    b = n(9239),
                    g = n(2488),
                    y = n(9451),
                    m = n(5156),
                    _ = n(6845);
                t.BubbleWindow = i.memo(function () {
                    var e = u.useTypedDispatch(),
                        t = a.useSelector(function (e) {
                            return {
                                currencies: e.currencies,
                                selectedCurrencyId: e.selectedCurrencyId,
                                baseCurrency: e.selectedBaseCurrency,
                                translation: e.selectedTranslation,
                            };
                        },
                        ),
                        n = t.currencies,
                        C = t.selectedCurrencyId,
                        j = t.baseCurrency,
                        x = t.translation,
                        w = i.useMemo(function () {
                            return n && C && n.find(function (e) {
                                return e.id === C;
                            },
                            ) || null;
                        }
                            , [n, C]),
                        O = w !== null,
                        P = i.useState(!0),
                        k = P[0],
                        S = P[1],
                        M = i.useRef(null);
                    w && (M.current = w);
                    var I = M.current,
                        T = i.useCallback(function (e) {
                            return c.formatCurrency(e, j);
                        }
                            , [j]),
                        N = i.useCallback(function () {
                            e({
                                type: 'SELECT_CURRENCY',
                                currencyId: null,
                            });
                        }
                            , [e]),
                        B = i.useCallback(function () {
                            I && e({
                                type: 'TOGGLE_FAVORITE',
                                currencyId: I.id,
                            });
                        }
                            , [I, e]);
                    if (i.useEffect(function () {
                        C !== null && S(!0);
                    }
                        , [S, C]),
                    i.useEffect(function () {
                        if (O) {
                            var e = function () {
                                return N();
                            };
                            return l.Session.registerCloseListener(e),
                            function () {
                                return l.Session.unregisterCloseListener(e);
                            };
                        }
                    }
                        , [N, O]),
                    !I) {
                        return o.jsx('section', { className: 'window bubble-window' }, void 0);
                    }
                    var A = I.data[j.id];
                    return o.jsxs('section', r({ className: d.combineClasses('window', 'bubble-window', O && 'open', k && 'expanded') }, {
                        children: [o.jsxs('header', {
                            children: [o.jsx('button', r({
                                className: 'icon-button',
                                onClick: function () {
                                    return S(!k);
                                },
                                title: x.window_toggleExpand,
                            }, { children: o.jsx(v.IconExpand, { className: 'expand-icon' }, void 0) }), void 0), o.jsx(h.CurrencyHeader, { currency: I }, void 0), o.jsx('div', { className: 'grow' }, void 0), o.jsx(b.LinkCoinGecko, { currency: I }, void 0), o.jsx(f.ButtonFavorite, {
                                on: I.isFavorite,
                                onClick: B,
                            }, void 0), o.jsx('button', r({
                                className: 'icon-button',
                                title: x.unselect_bubble,
                                onClick: N,
                            }, { children: o.jsx(p.IconClose, {}, void 0) }), void 0)],
                        }, void 0), o.jsxs('div', r({ className: 'window-content' }, {
                            children: [o.jsx(_.BubbleWindowPrice, {
                                currency: I,
                                baseCurrency: j,
                            }, void 0), o.jsxs('div', r({ className: 'bubble-window-details' }, { children: [o.jsxs('p', { children: [o.jsx('span', { children: x.rank }, void 0), o.jsx('strong', { children: I.rank + ' ' + s.Config.rankIdentifier }, void 0)] }, void 0), o.jsxs('p', { children: [o.jsx('span', { children: x.marketcap }, void 0), o.jsx(g.Number, r({ formatter: T }, { children: A.marketcap }), I.id)] }, void 0), o.jsxs('p', { children: [o.jsx('span', { children: x.volume }, void 0), o.jsx(g.Number, r({ formatter: T }, { children: A.volume }), I.id)] }, void 0)] }), void 0), o.jsx(y.PriceChart, { currency: I }, void 0), o.jsxs('div', r({ className: 'bubble-window-performance' }, {
                                children: [o.jsx(m.BubbleWindowPerformance, {
                                    label: x.period_hour,
                                    value: A.performance.hour,
                                }, void 0), o.jsx(m.BubbleWindowPerformance, {
                                    label: x.period_day,
                                    value: A.performance.day,
                                }, void 0), o.jsx(m.BubbleWindowPerformance, {
                                    label: x.period_week,
                                    value: A.performance.week,
                                }, void 0), o.jsx(m.BubbleWindowPerformance, {
                                    label: x.period_month,
                                    value: A.performance.month,
                                }, void 0), o.jsx(m.BubbleWindowPerformance, {
                                    label: x.period_year,
                                    value: A.performance.year,
                                }, void 0)],
                            }), void 0)],
                        }), void 0)],
                    }), void 0);
                },
                );
            },
            5156: function (e, t, n) {
                var r = this && this.__assign || function () {
                    return (r = Object.assign || function (e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++) {
                            for (var o in t = arguments[n]) { Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]) }
                        }
                        return e;
                    }
                    ).apply(this, arguments);
                }
                ;
                Object.defineProperty(t, '__esModule', { value: !0 }),
                t.BubbleWindowPerformance = void 0;
                var o = n(5893),
                    i = n(1190);
                t.BubbleWindowPerformance = function (e) {
                    var t = e.label,
                        n = e.value,
                        a = n ? n > 0 ? 'positive' : 'negative' : void 0;
                    return o.jsxs('p', { children: [o.jsx('span', { children: t }, void 0), o.jsx('strong', r({ className: a }, { children: i.formatPerformance(n, !0) }), void 0)] }, void 0);
                };
            },
            6845: function (e, t, n) {
                var r = this && this.__assign || function () {
                    return (r = Object.assign || function (e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++) {
                            for (var o in t = arguments[n]) { Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]) }
                        }
                        return e;
                    }
                    ).apply(this, arguments);
                }
                ;
                Object.defineProperty(t, '__esModule', { value: !0 }),
                t.BubbleWindowPrice = void 0;
                var o = n(5893),
                    i = n(7294),
                    a = n(1190),
                    s = n(7166),
                    c = n(5534),
                    l = n(2488);
                t.BubbleWindowPrice = function (e) {
                    var t = e.currency,
                        n = e.baseCurrency,
                        u = i.useState('1'),
                        d = u[0],
                        f = u[1],
                        h = t.data[n.id],
                        p = i.useCallback(function (e) {
                            return a.formatCurrency(e, n);
                        }
                            , [n]),
                        v = s.parseNumber(d, 1);
                    return i.useEffect(function () {
                        f('1');
                    }
                        , [t.id]),
                    o.jsxs('p', r({ className: 'bubble-window-price' }, {
                        children: [o.jsx(c.TextInput, {
                            value: d,
                            type: 'number',
                            onChange: f,
                        }, void 0), o.jsx('span', { children: ' ' + t.symbol + ' = ' }, void 0), o.jsx(l.Number, r({ formatter: p }, { children: h.price * v }), t.id)],
                    }), void 0);
                };
            },
            8566: (e, t) => {
                Object.defineProperty(t, '__esModule', { value: !0 }),
                t.API = void 0;
                var n = (function () {
                    function e () {}
                    return e.getCurrencies = function () {
                        return fetch('/backend/dataBubbles.php').then(function (e) {
                            return e.json();
                        },
                        );
                    }
                    ,
                    e.getWeeklyChart = function (e) {
                        return fetch('/backend/dataWeeklyChart.php?id=' + encodeURIComponent(e)).then(function (e) {
                            return e.json();
                        },
                        );
                    }
                    ,
                    e.postAction = function (e, t, n) {
                        var r = new FormData();
                        r.append('session', e),
                        r.append('type', t),
                        n !== null && r.append('extra', n),
                        fetch('/backend/action.php', {
                            method: 'POST',
                            body: r,
                        });
                    }
                    ,
                    e;
                }());
                t.API = n;
            },
            6414: (e, t, n) => {
                Object.defineProperty(t, '__esModule', { value: !0 }),
                t.Bubble = void 0;
                var r = n(2746),
                    o = n(2050),
                    i = n(1898),
                    a = 2 * Math.PI,
                    s = (function () {
                        function e (e) {
                            var t = this;
                            this.lastFingerprint = '',
                            this.image = null,
                            this.radiusTween = new o.Tween(0, 1e3),
                            this.red = 0,
                            this.green = 0,
                            this.blue = 0,
                            this.position = new i.Vector(),
                            this.velocity = new i.Vector(),
                            this.acceleration = new i.Vector(),
                            this.size = 0,
                            this.radius = 0,
                            this.content = '',
                            this.visible = !1,
                            this.latestPush = 0,
                            this.currency = e,
                            this.canvas = document.createElement('canvas'),
                            this.canvasContext = this.canvas.getContext('2d');
                            var n = document.createElement('img');
                            n.src = e.image;
                            var r = function () {
                                t.image = n;
                            };
                            n.decode ? n.decode().then(r).catch(console.error) : n.addEventListener('load', r);
                        }
                        return e.prototype.applyForce = function (e, t) {
                            this.acceleration.x += e,
                            this.acceleration.y += t;
                        }
                        ,
                        e.prototype.applyImpulse = function (e, t) {
                            this.velocity.x += e,
                            this.velocity.y += t;
                        }
                        ,
                        e.prototype.setRadius = function (e, t) {
                            this.radiusTween.set(e, t);
                        }
                        ,
                        e.prototype.setColor = function (e) {
                            this.red = Math.round(e.red),
                            this.green = Math.round(e.green),
                            this.blue = Math.round(e.blue);
                        }
                        ,
                        e.prototype.setContent = function (e) {
                            this.content = e;
                        }
                        ,
                        e.prototype.update = function () {
                            this.radius = Math.round(this.radiusTween.get()),
                            this.visible = this.radius > 0;
                        }
                        ,
                        e.prototype.render = function (e) {
                            var t = this,
                                n = t.canvas,
                                o = t.currency,
                                i = t.position,
                                s = t.radiusTween,
                                c = t.red,
                                l = t.green,
                                u = t.blue,
                                d = t.content,
                                f = t.image,
                                h = t.canvasContext,
                                p = 0.5 * Math.round(2 * s.get()),
                                v = c + ', ' + l + ', ' + u,
                                b = v + ', ' + p + ', ' + d + ', ' + Boolean(f) + ', ' + o.isFavorite;
                            if (b !== this.lastFingerprint) {
                                this.lastFingerprint = b;
                                var g = p + r.Config.bubbleCanvasPadding,
                                    y = 2 * g;
                                n.width = y,
                                n.height = y;
                                var m = h.createRadialGradient(g, g, 0, g, g, p);
                                m.addColorStop(0, 'rgba(' + v + ', 0.05)'),
                                m.addColorStop(0.8, 'rgba(' + v + ', 0.1)'),
                                m.addColorStop(0.9, 'rgba(' + v + ', 0.4)'),
                                m.addColorStop(1, 'rgb(' + v + ')'),
                                h.beginPath(),
                                h.arc(g, g, p, 0, a),
                                h.closePath(),
                                h.fillStyle = m,
                                h.fill(),
                                o.isFavorite && (h.beginPath(),
                                h.arc(g, g, p, 0, a),
                                h.closePath(),
                                h.lineWidth = r.Config.bubbleBorderWidth,
                                h.strokeStyle = 'yellow',
                                h.stroke());
                                var _ = p > r.Config.bubbleMinRadiusForText,
                                    C = p * (_ ? 0.55 : 1.2),
                                    j = 0.5 * (y - C),
                                    x = (y - C) * (_ ? 0.14 : 0.5);
                                if (f) { h.drawImage(f, j, x, C, C) } else {
                                    h.beginPath();
                                    var w = 0.5 * C;
                                    h.arc(j + w, x + w, w, 0, 2 * Math.PI),
                                    h.closePath(),
                                    h.fillStyle = '#bbb',
                                    h.fill();
                                }
                                if (_) {
                                    h.textAlign = 'center',
                                    h.fillStyle = 'white';
                                    var O = Math.ceil(0.55 * p);
                                    h.font = O + 'px Arial',
                                    h.fillText(o.symbol, g, g + 0.25 * p);
                                    var P = d.length > 8,
                                        k = Math.ceil(p * (P ? 0.24 : 0.3));
                                    h.font = k + 'px Arial',
                                    h.fillText(d, g, g + 0.65 * p);
                                }
                            }
                            var S = p + r.Config.bubbleCanvasPadding,
                                M = i.x - S,
                                I = i.y - S;
                            e.drawImage(n, M, I);
                        }
                        ,
                        e;
                    }());
                t.Bubble = s;
            },
            5380: function (e, t, n) {
                var r, o = this && this.__extends || (r = function (e, t) {
                    return (r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (e, t) {
                        e.__proto__ = t;
                    } ||
                                function (e, t) {
                                    for (var n in t) { Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]) }
                                }
                    )(e, t);
                }
                ,
                function (e, t) {
                    if (typeof t !== 'function' && t !== null) { throw new TypeError('Class extends value ' + String(t) + ' is not a constructor or null') }
                    function n () {
                        this.constructor = e;
                    }
                    r(e, t),
                    e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype,
                    new n());
                }
                );
                Object.defineProperty(t, '__esModule', { value: !0 }),
                t.BubbleCanvas = void 0;
                var i = n(2746),
                    a = n(277),
                    s = n(5188),
                    c = n(6414),
                    l = n(5150),
                    u = n(1922),
                    d = (function (e) {
                        function t (t, n) {
                            var r = e.call(this, t) || this;
                            return r.needsRecalculation = !1,
                            r.recalculationCount = 0,
                            r.latestPush = 0,
                            r.bubbles = [],
                            r.bubblesDict = {},
                            r.pointerX = -1,
                            r.pointerY = -1,
                            r.hoveredBubble = null,
                            r.draggedBubble = null,
                            r.selectedCurrencyId = null,
                            r.possibleSelectedBubble = null,
                            r.eventSelect = new u.Event(),
                            r.eventResize.register(function () {
                                return r.needsRecalculation = !0;
                            },
                            ),
                            r.eventFrame.register(function (e) {
                                r.needsRecalculation && (r.needsRecalculation = !1,
                                r.recalculcate()),
                                r.update(e),
                                r.render(),
                                r.requestFrame();
                            },
                            ),
                            r.propertiesSource = n,
                            t.addEventListener('pointerdown', function (e) {
                                return r.handlePointerDown(e);
                            }
                                , { passive: !1 }),
                            t.addEventListener('pointermove', function (e) {
                                return r.handlePointerMove(e);
                            },
                            ),
                            t.addEventListener('touchmove', function (e) {
                                return r.handleTouchMove(e);
                            }
                                , { passive: !1 }),
                            t.addEventListener('pointerup', function (e) {
                                return r.handlePointerUp(e);
                            },
                            ),
                            t.addEventListener('pointercancel', function () {
                                return r.handlePointerCancel();
                            },
                            ),
                            r;
                        }
                        return o(t, e),
                        t.prototype.updatePointerPosition = function (e) {
                            this.pointerX = e.offsetX * window.devicePixelRatio,
                            this.pointerY = e.offsetY * window.devicePixelRatio;
                        }
                        ,
                        t.prototype.getFocusedBubble = function () {
                            for (var e = this.bubbles.length - 1; e >= 0; e--) {
                                var t = this.bubbles[e];
                                if (t.visible) {
                                    var n = t.position,
                                        r = t.radius,
                                        o = n.x - this.pointerX,
                                        a = n.y - this.pointerY,
                                        s = o * o + a * a,
                                        c = r + i.Config.bubbleExtraHitbox;
                                    if (c * c >= s) { return t }
                                }
                            }
                            return null;
                        }
                        ,
                        t.prototype.handlePointerDown = function (e) {
                            e.isPrimary && (this.canvas.setPointerCapture(e.pointerId),
                            e.pointerType === 'mouse' ? this.draggedBubble = this.hoveredBubble : (this.updatePointerPosition(e),
                            this.draggedBubble = this.getFocusedBubble()),
                            this.draggedBubble ? this.possibleSelectedBubble = this.draggedBubble : this.selectedCurrencyId ? this.eventSelect.fire(null) : this.launchExplosion(),
                            e.preventDefault());
                        }
                        ,
                        t.prototype.handlePointerMove = function (e) {
                            if (e.isPrimary) {
                                this.updatePointerPosition(e);
                                var t = this.getFocusedBubble();
                                if (e.pointerType === 'mouse') {
                                    this.hoveredBubble = t;
                                    var n = this.draggedBubble || this.hoveredBubble;
                                    this.canvas.style.cursor = n ? 'pointer' : 'auto';
                                }
                                this.possibleSelectedBubble !== t && (this.possibleSelectedBubble = null);
                            }
                        }
                        ,
                        t.prototype.handleTouchMove = function (e) {
                            this.draggedBubble && e.preventDefault();
                        }
                        ,
                        t.prototype.handlePointerUp = function (e) {
                            if (e.isPrimary) {
                                if (this.possibleSelectedBubble) {
                                    var t = this.possibleSelectedBubble.currency;
                                    this.possibleSelectedBubble = null,
                                    this.eventSelect.fire(t.id);
                                }
                                this.draggedBubble = null;
                            }
                        }
                        ,
                        t.prototype.handlePointerCancel = function () {
                            this.hoveredBubble = null,
                            this.draggedBubble = null;
                        }
                        ,
                        t.prototype.launchExplosion = function () {
                            for (var e = 0, t = this.bubbles; e < t.length; e++) {
                                var n = t[e],
                                    r = n.position.x - this.pointerX,
                                    o = n.position.y - this.pointerY,
                                    a = Math.max(1, Math.sqrt(r * r + o * o)),
                                    s = i.Config.bubbleExplosionFactor / a / a;
                                n.applyImpulse(r * s, o * s);
                            }
                        }
                        ,
                        t.prototype.update = function (e) {
                            for (var t = this, n = t.width, r = t.height, o = t.bubbles, a = t.selectedCurrencyId, c = Math.pow(i.Config.bubbleFriction, e), l = Math.min(n, r) * i.Config.bubbleRandomMovement, u = 0, d = o; u < d.length; u++) { (S = d[u]).update() }
                            for (var f = 0; f < o.length; f++) {
                                var h = o[f];
                                if (h.visible) {
                                    for (var p = f + 1; p < o.length; p++) {
                                        var v = o[p];
                                        if (v.visible) {
                                            var b = h.position.x - v.position.x,
                                                g = h.position.y - v.position.y;
                                            if ((w = Math.max(1, Math.sqrt(b * b + g * g))) < h.radius + v.radius) {
                                                var y = b * (O = i.Config.bubbleCollisionFactor / w),
                                                    m = g * O,
                                                    _ = h.radius + v.radius,
                                                    C = 1 - h.radius / _,
                                                    j = v.radius / _ - 1;
                                                h.applyForce(y * C, m * C),
                                                v.applyForce(y * j, m * j);
                                            }
                                        }
                                    }
                                    h.applyForce(s.randomBi() * l, s.randomBi() * l);
                                }
                            }
                            if (this.draggedBubble) {
                                var x = this.draggedBubble.position,
                                    w = (b = this.pointerX - x.x,
                                    g = this.pointerY - x.y,
                                    Math.max(1, Math.sqrt(b * b + g * g))),
                                    O = i.Config.bubbleDragFactor / w;
                                this.draggedBubble.applyForce(b * O, g * O);
                            }
                            for (var P = 0, k = o; P < k.length; P++) {
                                var S, M = (S = k[P]).currency, I = (x = S.position,
                                    S.velocity), T = S.acceleration, N = S.radius;
                                M.id !== a && (I.add(T),
                                I.scale(c),
                                x.add(I, e)),
                                T.reset(),
                                x.x < N && (x.x = N,
                                I.x *= i.Config.bubbleWallBounceFactor),
                                x.y < N && (x.y = N,
                                I.y *= i.Config.bubbleWallBounceFactor),
                                x.x > n - N && (x.x = n - N,
                                I.x *= i.Config.bubbleWallBounceFactor),
                                x.y > r - N && (x.y = r - N,
                                I.y *= i.Config.bubbleWallBounceFactor);
                            }
                        }
                        ,
                        t.prototype.renderBubbleBorder = function (e, t, n) {
                            void 0 === n && (n = 1);
                            var r = this.context,
                                o = e.position,
                                a = e.radius;
                            r.beginPath(),
                            r.arc(o.x, o.y, a, 0, 2 * Math.PI),
                            r.closePath(),
                            r.lineWidth = i.Config.bubbleBorderWidth * n,
                            r.strokeStyle = t,
                            r.stroke();
                        }
                        ,
                        t.prototype.render = function () {
                            var e = this,
                                t = e.context,
                                n = e.bubbles,
                                r = e.selectedCurrencyId;
                            this.clear();
                            for (var o = null, i = 0, a = n; i < a.length; i++) {
                                var s = a[i];
                                s.currency.id !== r ? this.draggedBubble !== s && s.render(t) : o = s;
                            }
                            if (this.draggedBubble ? (this.draggedBubble.render(t),
                            this.renderBubbleBorder(this.draggedBubble, 'white')) : this.hoveredBubble && this.renderBubbleBorder(this.hoveredBubble, 'white'),
                            o) {
                                o.render(t);
                                var c = 0.5 * Math.sin(0.005 * Date.now()) + 0.5,
                                    l = c + 2,
                                    u = 'rgb(' + Math.floor(255 * c) + ', ' + (Math.floor(160 * c) + 95) + ', 255)';
                                this.renderBubbleBorder(o, u, l);
                            }
                        }
                        ,
                        t.prototype.recalculcate = function () {
                            var e = this,
                                t = e.width,
                                n = e.height,
                                r = e.bubbles,
                                o = e.propertiesSource;
                            if (r.length !== 0) {
                                o.prepare(r);
                                for (var s = this.recalculationCount === 0, c = 0, l = 0, u = r; l < u.length; l++) {
                                    var d = (v = u[l]).latestPush === this.latestPush;
                                    v.size = d ? o.getSize(v) : 0,
                                    c += v.size;
                                }
                                for (var f = c === 0 ? 0 : t * n / c * i.Config.bubbleSizeFactor, h = 0, p = r; h < p.length; h++) {
                                    var v, b = (v = p[h]).position, g = v.size, y = Math.sqrt(g * f / Math.PI);
                                    v.setRadius(y, s),
                                    v.setColor(o.getColor(v)),
                                    v.setContent(o.getContent(v)),
                                    b.x = a.clamp(b.x, y, t - y),
                                    b.y = a.clamp(b.y, y, n - y);
                                }
                                this.recalculationCount++;
                            }
                        }
                        ,
                        t.prototype.setPropertiesSource = function (e) {
                            this.propertiesSource = e,
                            this.needsRecalculation = !0;
                        }
                        ,
                        t.prototype.setSelectedCurrencyId = function (e) {
                            this.selectedCurrencyId = e;
                        }
                        ,
                        t.prototype.pushCurrencies = function (e) {
                            this.latestPush++;
                            for (var t = 0, n = e; t < n.length; t++) {
                                var r = n[t],
                                    o = r.id,
                                    i = this.bubblesDict[o];
                                i ? i.currency = r : ((i = new c.Bubble(r)).position.x = Math.random() * this.width,
                                i.position.y = Math.random() * this.height,
                                this.bubbles.push(i),
                                this.bubblesDict[o] = i),
                                i.latestPush = this.latestPush;
                            }
                            this.needsRecalculation = !0;
                        }
                        ,
                        t;
                    }(l.Canvas));
                t.BubbleCanvas = d;
            },
            562: (e, t, n) => {
                Object.defineProperty(t, '__esModule', { value: !0 }),
                t.BubblePropertiesSource = void 0;
                var r = n(2746),
                    o = n(1190),
                    i = (function () {
                        function e (e, t) {
                            this.referencePerformance = 0,
                            this.configuration = e,
                            this.baseCurrency = t;
                        }
                        return e.prototype.prepare = function (e) {
                            var t = this.configuration,
                                n = t.color,
                                o = t.period;
                            if (n === 'performance') {
                                var i = this.baseCurrency.id;
                                this.referencePerformance = 0;
                                for (var a = 0, s = e; a < s.length; a++) {
                                    var c = s[a].currency.data[i].performance[o];
                                    c && c > this.referencePerformance && (this.referencePerformance = c);
                                }
                                this.referencePerformance = Math.min(r.Config.bubbleColorPerformanceMax, this.referencePerformance);
                            }
                        }
                        ,
                        e.prototype.getSize = function (e) {
                            var t = this.configuration,
                                n = t.size,
                                r = t.period;
                            if (t.filter === 'only-favorites' && !e.currency.isFavorite) { return 0 }
                            var o = e.currency.data[this.baseCurrency.id];
                            switch (n) {
                            case 'marketcap':
                                return o.marketcap;
                            case 'volume':
                                return o.volume;
                            case 'performance':
                                return Math.abs(o.performance[r] || 0);
                            }
                        }
                        ,
                        e.prototype.getColor = function (e) {
                            var t = this.configuration,
                                n = t.color,
                                o = t.period;
                            switch (n) {
                            case 'neutral':
                                return r.Config.bubbleColorNeutral;
                            case 'performance':
                                var i = e.currency.data[this.baseCurrency.id].performance[o] || 0,
                                    a = this.referencePerformance === 0 ? 1 : Math.min(1, Math.abs(i) / this.referencePerformance),
                                    s = Math.floor(127 * (1 - a)),
                                    c = Math.floor(153 + 102 * a);
                                return i > 0 ? {
                                    red: s,
                                    green: c,
                                    blue: s,
                                } : {
                                    red: c,
                                    green: s,
                                    blue: s,
                                };
                            }
                        }
                        ,
                        e.prototype.getContent = function (e) {
                            var t = this.configuration,
                                n = t.content,
                                i = t.period;
                            switch (n) {
                            case 'name':
                                return e.currency.name;
                            case 'price':
                                var a = e.currency.data[this.baseCurrency.id];
                                return o.formatCurrency(a.price, this.baseCurrency);
                            case 'performance':
                                var s = (a = e.currency.data[this.baseCurrency.id]).performance[i];
                                return o.formatPerformance(s);
                            case 'rank':
                                return r.Config.rankIdentifier + e.currency.rank;
                            }
                        }
                        ,
                        e;
                    }());
                t.BubblePropertiesSource = i;
            },
            5150: (e, t, n) => {
                Object.defineProperty(t, '__esModule', { value: !0 }),
                t.Canvas = void 0;
                var r = n(2746),
                    o = n(1922),
                    i = (function () {
                        function e (e) {
                            this.frameHandle = null,
                            this.lastTime = null,
                            this.elementWidth = 0,
                            this.elementHeight = 0,
                            this.width = 0,
                            this.height = 0,
                            this.eventResize = new o.Event(),
                            this.eventFrame = new o.Event(),
                            this.canvas = e,
                            this.container = e.parentElement,
                            this.context = e.getContext('2d'),
                            this.frame = this.frame.bind(this);
                        }
                        return e.prototype.start = function () {
                            this.fillContainer(),
                            this.requestFrame();
                        }
                        ,
                        e.prototype.stop = function () {
                            this.frameHandle !== null && cancelAnimationFrame(this.frameHandle);
                        }
                        ,
                        e.prototype.frame = function (e) {
                            this.frameHandle = null;
                            var t = 0;
                            this.lastTime !== null && (t = Math.min(0.001 * (e - this.lastTime), r.Config.maxDeltaTime)),
                            this.lastTime = e,
                            this.fillContainer(),
                            this.eventFrame.fire(t);
                        }
                        ,
                        e.prototype.fillContainer = function () {
                            var e = this.container.clientWidth,
                                t = this.container.clientHeight,
                                n = e * window.devicePixelRatio,
                                r = t * window.devicePixelRatio;
                            this.elementWidth === e && this.elementHeight === t || (this.canvas.style.width = e + 'px',
                            this.canvas.style.height = t + 'px',
                            this.elementWidth = e,
                            this.elementHeight = t),
                            this.width === n && this.height === r || (this.canvas.width = n,
                            this.canvas.height = r,
                            this.width = n,
                            this.height = r,
                            this.eventResize.fire());
                        }
                        ,
                        e.prototype.clear = function () {
                            var e = this,
                                t = e.context,
                                n = e.width,
                                r = e.height;
                            t.clearRect(0, 0, n, r);
                        }
                        ,
                        e.prototype.requestFrame = function () {
                            this.frameHandle === null && (this.frameHandle = requestAnimationFrame(this.frame));
                        }
                        ,
                        e;
                    }());
                t.Canvas = i;
            },
            1922: (e, t) => {
                Object.defineProperty(t, '__esModule', { value: !0 }),
                t.Event = void 0;
                var n = (function () {
                    function e () {
                        this.listeners = [];
                    }
                    return e.prototype.register = function (e) {
                        this.listeners.push(e);
                    }
                    ,
                    e.prototype.fire = function (e) {
                        for (var t = 0, n = this.listeners; t < n.length; t++) {
                            (0,
                            n[t])(e);
                        }
                    }
                    ,
                    e;
                }());
                t.Event = n;
            },
            1190: (e, t, n) => {
                Object.defineProperty(t, '__esModule', { value: !0 }),
                t.formatCurrency = t.formatPerformance = void 0;
                var r = n(2746);
                t.formatPerformance = function (e, t) {
                    if (e === null) { return r.Config.nullValue }
                    if (e === 0) { return '+0%' }
                    if (t) {
                        var n = Math.abs(e);
                        return (n < 1 ? 1 : Math.round(n)) + '%';
                    }
                    var o = Math.abs(e) >= 100 ? 0 : 1,
                        i = e.toFixed(o);
                    return (e >= 0 ? '+' + i : i) + '%';
                }
                ,
                t.formatCurrency = function (e, t) {
                    var n = e === 0 ? 2 : 3 - Math.ceil(Math.log10(e));
                    n < 0 && (n = 0),
                    n > 10 && (n = 10),
                    n === 1 && (n = 2);
                    try {
                        return e.toLocaleString(void 0, {
                            style: 'currency',
                            currency: t.code,
                            minimumFractionDigits: n,
                            maximumFractionDigits: n,
                        });
                    } catch (n) {
                        return e.toLocaleString(void 0, {
                            style: 'currency',
                            currency: t.code,
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                        });
                    }
                };
            },
            4215: function (e, t, n) {
                var r, o = this && this.__extends || (r = function (e, t) {
                    return (r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (e, t) {
                        e.__proto__ = t;
                    } ||
                                function (e, t) {
                                    for (var n in t) { Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]) }
                                }
                    )(e, t);
                }
                ,
                function (e, t) {
                    if (typeof t !== 'function' && t !== null) { throw new TypeError('Class extends value ' + String(t) + ' is not a constructor or null') }
                    function n () {
                        this.constructor = e;
                    }
                    r(e, t),
                    e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype,
                    new n());
                }
                );
                Object.defineProperty(t, '__esModule', { value: !0 }),
                t.PriceCanvas = void 0;
                var i = n(2746),
                    a = n(993),
                    s = n(5150),
                    c = n(1190),
                    l = (function (e) {
                        function t (t) {
                            var n = e.call(this, t) || this;
                            return n.prices = null,
                            n.pointerX = null,
                            n.eventFrame.register(function () {
                                return n.render();
                            },
                            ),
                            n.canvas.addEventListener('pointermove', function (e) {
                                return n.handlePointerUpdate(e);
                            },
                            ),
                            n.canvas.addEventListener('pointerdown', function (e) {
                                return n.handlePointerUpdate(e);
                            },
                            ),
                            n.canvas.addEventListener('pointerout', function (e) {
                                return n.handlePointerOut(e);
                            },
                            ),
                            n;
                        }
                        return o(t, e),
                        t.prototype.handlePointerUpdate = function (e) {
                            if (e.isPrimary) {
                                var t = Math.round(e.offsetX * window.devicePixelRatio);
                                t !== this.pointerX && (this.pointerX = t,
                                this.render());
                            }
                        }
                        ,
                        t.prototype.handlePointerOut = function (e) {
                            e.isPrimary && this.pointerX !== null && (this.pointerX = null,
                            this.render());
                        }
                        ,
                        t.prototype.setPrices = function (e) {
                            this.prices = e,
                            this.requestFrame();
                        }
                        ,
                        t.prototype.drawPointOnChart = function (e, t, n) {
                            var r = this,
                                o = r.context,
                                i = r.width,
                                s = r.height,
                                l = t.x,
                                u = t.y,
                                d = window.devicePixelRatio,
                                f = 0.5 * i,
                                h = 0.5 * s,
                                p = c.formatCurrency(e, a.baseCurrencyUSD);
                            o.beginPath(),
                            o.arc(l, u, 4 * d, 0, 2 * Math.PI),
                            o.fillStyle = n,
                            o.fill(),
                            o.textAlign = l < f ? 'left' : 'right',
                            o.fillText(p, l + (l < f ? 5 : -5) * d, u + (u < h ? -10 : 10) * d);
                        }
                        ,
                        t.prototype.render = function () {
                            var e = this,
                                t = e.prices,
                                n = e.context,
                                r = e.width,
                                o = e.height,
                                a = e.pointerX,
                                s = window.devicePixelRatio;
                            if (this.clear(),
                            t !== null && t.length !== 0) {
                                for (var c = r / (t.length - 1), l = t[0], u = t[0], d = 0, f = t; d < f.length; d++) {
                                    (C = f[d]) > u && (u = C),
                                    C < l && (l = C);
                                }
                                var h = u - l,
                                    p = 0,
                                    v = {
                                        x: 0,
                                        y: 0,
                                    },
                                    b = {
                                        x: 0,
                                        y: 0,
                                    },
                                    g = null,
                                    y = 0;
                                n.beginPath();
                                for (var m = 0, _ = t; m < _.length; m++) {
                                    var C, j = (0.9 - ((C = _[m]) - l) / h * 0.8) * o;
                                    C === l && (v.x = p,
                                    v.y = j),
                                    C === u && (b.x = p,
                                    b.y = j),
                                    a && !g && a < p && (g = {
                                        x: p,
                                        y: j,
                                    },
                                    y = C),
                                    p === 0 ? n.moveTo(p, j + 1) : n.lineTo(p, j + 1),
                                    p += c;
                                }
                                n.lineWidth = 3 * s,
                                n.strokeStyle = '#ccf',
                                n.stroke(),
                                n.lineTo(p, o),
                                n.lineTo(0, o),
                                n.closePath();
                                var x = n.createLinearGradient(0, 0, 0, o);
                                x.addColorStop(0, '#38f'),
                                x.addColorStop(1, '#138'),
                                n.fillStyle = x,
                                n.fill(),
                                n.font = 'bold ' + Math.round(18 * s) + 'px Arial',
                                n.textBaseline = 'middle';
                                var w = 20 * s,
                                    O = g && Math.abs(g.x - v.x) < w,
                                    P = g && Math.abs(g.x - b.x) < w;
                                O || this.drawPointOnChart(l, v, i.Config.colorNegative),
                                P || this.drawPointOnChart(u, b, i.Config.colorPositive),
                                g && this.drawPointOnChart(y, g, 'white');
                            }
                        }
                        ,
                        t;
                    }(s.Canvas));
                t.PriceCanvas = l;
            },
            8105: (e, t, n) => {
                Object.defineProperty(t, '__esModule', { value: !0 }),
                t.Session = void 0;
                var r = n(8566),
                    o = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
                    i = (function () {
                        function e () {}
                        return e.start = function () {
                            var e = this;
                            this.isApp = window.cryptoBubblesEnv === 'app',
                            this.isAndroid = navigator.userAgent.indexOf('Android') !== -1,
                            this.sessionId = (function () {
                                for (var e = '', t = 0; t < 6; t++) { e += o[Math.floor(Math.random() * o.length)] }
                                return e;
                            }()),
                            window.addEventListener('error', function (t) {
                                return e.handleError(t);
                            },
                            ),
                            window.onCryptoBubblesBack = function () {
                                return e.handleBackClick();
                            }
                            ;
                            var t = {
                                userAgent: navigator.userAgent,
                                isApp: this.isApp,
                                isAndroid: this.isAndroid,
                            };
                            this.logAction('CREATE_SESSION', JSON.stringify(t));
                        }
                        ,
                        e.handleBackClick = function () {
                            return !this.closeListener || (this.closeListener(),
                            this.closeListener = null,
                            !1);
                        }
                        ,
                        e.handleError = function (t) {
                            if (this.errorCount++,
                            this.errorCount <= this.errorCountMax) {
                                var n = t.filename,
                                    r = t.lineno,
                                    o = t.colno,
                                    i = t.message;
                                e.logAction('ERROR', n + ':' + r + ':' + o + ' ' + i);
                            }
                        }
                        ,
                        e.logAction = function (e, t) {
                            void 0 === t && (t = null),
                            r.API.postAction(this.sessionId, e, t);
                        }
                        ,
                        e.registerCloseListener = function (e) {
                            this.closeListener && this.closeListener !== e && this.closeListener(),
                            this.closeListener = e;
                        }
                        ,
                        e.unregisterCloseListener = function (e) {
                            this.closeListener === e && (this.closeListener = null);
                        }
                        ,
                        e.errorCount = 0,
                        e.errorCountMax = 3,
                        e.closeListener = null,
                        e;
                    }());
                t.Session = i;
            },
            3425: (e, t) => {
                Object.defineProperty(t, '__esModule', { value: !0 }),
                t.UserStorage = void 0;
                var n = 'settings',
                    r = '',
                    o = (function () {
                        function e () {}
                        return e.save = function (e) {
                            var t = [];
                            for (var o in e.favorites) { e.favorites[o] && t.push(o) }
                            var i = {
                                    baseCurrency: e.selectedBaseCurrency.id,
                                    translation: e.selectedTranslation.id,
                                    configurations: e.configurations,
                                    selectedConfiguration: e.selectedConfigurationId,
                                    favorites: t,
                                },
                                a = JSON.stringify(i);
                            if (r !== a) {
                                try {
                                    localStorage.setItem(n, a),
                                    r = a;
                                } catch (e) {}
                            }
                        }
                        ,
                        e.load = function () {
                            try {
                                var e = localStorage.getItem(n);
                                if (e) {
                                    var t = JSON.parse(e);
                                    if (t) { return t }
                                }
                                var r = localStorage.getItem('favorites');
                                if (r) {
                                    return { favorites: r.split(',') };
                                }
                            } catch (e) {}
                            return null;
                        }
                        ,
                        e;
                    }());
                t.UserStorage = o;
            },
            1898: (e, t) => {
                Object.defineProperty(t, '__esModule', { value: !0 }),
                t.Vector = void 0;
                var n = (function () {
                    function e () {
                        this.x = 0,
                        this.y = 0;
                    }
                    return e.prototype.add = function (e, t) {
                        void 0 === t && (t = 1),
                        this.x += e.x * t,
                        this.y += e.y * t;
                    }
                    ,
                    e.prototype.scale = function (e) {
                        this.x *= e,
                        this.y *= e;
                    }
                    ,
                    e.prototype.reset = function () {
                        this.x = 0,
                        this.y = 0;
                    }
                    ,
                    e;
                }());
                t.Vector = n;
            },
            5953: (e, t, n) => {
                Object.defineProperty(t, '__esModule', { value: !0 }),
                t.useTranslation = void 0;
                var r = n(1512);
                t.useTranslation = function () {
                    return r.useSelector(function (e) {
                        return e.selectedTranslation;
                    },
                    );
                };
            },
            6457: (e, t, n) => {
                Object.defineProperty(t, '__esModule', { value: !0 }),
                t.useTypedDispatch = void 0;
                var r = n(1512);
                t.useTypedDispatch = function () {
                    return r.useDispatch();
                };
            },
            5796: function (e, t, n) {
                var r = this && this.__assign || function () {
                    return (r = Object.assign || function (e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++) {
                            for (var o in t = arguments[n]) { Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]) }
                        }
                        return e;
                    }
                    ).apply(this, arguments);
                }
                ;
                Object.defineProperty(t, '__esModule', { value: !0 });
                var o = n(5893);
                n(6254);
                var i = n(4890),
                    a = n(8500),
                    s = n(3935),
                    c = n(9324),
                    l = n(3425),
                    u = n(1512),
                    d = n(8725),
                    f = n(9068),
                    h = n(5555),
                    p = n(1317);
                n(8105).Session.start();
                var v = document.getElementById('app'),
                    b = i.createStore(c.Reducer, a.composeWithDevTools());
                function g () {
                    s.render(o.jsxs(u.Provider, r({ store: b }, { children: [o.jsx(d.Header, {}, void 0), o.jsx(f.Main, {}, void 0), o.jsx(h.Footer, {}, void 0), o.jsx(p.BubbleWindow, {}, void 0)] }), void 0), v);
                }
                b.subscribe(function () {
                    return g();
                },
                ),
                b.subscribe(function () {
                    return l.UserStorage.save(b.getState());
                },
                ),
                g();
            },
            9324: function (e, t, n) {
                var r = this && this.__assign || function () {
                        return (r = Object.assign || function (e) {
                            for (var t, n = 1, r = arguments.length; n < r; n++) {
                                for (var o in t = arguments[n]) { Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]) }
                            }
                            return e;
                        }
                        ).apply(this, arguments);
                    },
                    o = this && this.__spreadArray || function (e, t) {
                        for (var n = 0, r = t.length, o = e.length; n < r; n++,
                        o++) { e[o] = t[n] }
                        return e;
                    }
                ;
                Object.defineProperty(t, '__esModule', { value: !0 }),
                t.Reducer = void 0;
                var i = n(8105),
                    a = n(7381),
                    s = n(993);
                t.Reducer = function (e, t) {
                    var n;
                    switch (void 0 === e && (e = s.getReduxState()),
                    t.type) {
                    case 'UPDATE_CURRENCIES':
                        for (var c = 0, l = t.currencies; c < l.length; c++) {
                            var u = l[c];
                            u.image = '/backend/' + u.image,
                            u.nameLower = u.name.toLowerCase(),
                            u.symbolLower = u.symbol.toLowerCase(),
                            u.isFavorite = Boolean(e.favorites[u.id]),
                            u.coingeckoLink = 'https://www.coingecko.com/en/coins/' + u.id;
                        }
                        return r(r({}, e), { currencies: t.currencies });
                    case 'SET_TRANSLATION':
                        var d = t.translationId,
                            f = e.translations.find(function (e) {
                                return e.id === d;
                            },
                            );
                        if (i.Session.logAction('SET_TRANSLATION', d),
                        f) {
                            return r(r({}, e), { selectedTranslation: f });
                        }
                        break;
                    case 'SET_BASECURRENCY':
                        var h = t.baseCurrencyId,
                            p = e.baseCurrencies.find(function (e) {
                                return e.id === h;
                            },
                            );
                        if (i.Session.logAction('SET_BASECURRENCY', h),
                        p) {
                            return r(r({}, e), { selectedBaseCurrency: p });
                        }
                        break;
                    case 'TOGGLE_FAVORITE':
                        var v = t.currencyId,
                            b = e.favorites[v];
                        return b ? i.Session.logAction('REMOVE_FAVORITE', v) : i.Session.logAction('ADD_FAVORITE', v),
                        r(r({}, e), {
                            currencies: e.currencies ? e.currencies.map(function (e) {
                                return e.id !== v ? e : r(r({}, e), { isFavorite: !e.isFavorite });
                            },
                            ) : null,
                            favorites: r(r({}, e.favorites), (n = {},
                            n[v] = !b,
                            n)),
                        });
                    case 'SELECT_CURRENCY':
                        var g = t.currencyId;
                        return g !== null && i.Session.logAction('SELECT_CURRENCY', g),
                        r(r({}, e), { selectedCurrencyId: g });
                    case 'ADD_CONFIGURATION':
                        var y = a.generateConfiguration(e.configurations);
                        return r(r({}, e), {
                            configurations: o(o([], e.configurations), [y]),
                            selectedConfigurationId: y.id,
                        });
                    case 'EDIT_CONFIGURATION':
                        var m = t.configuration;
                        return r(r({}, e), {
                            configurations: e.configurations.map(function (e) {
                                return e.id === m.id ? m : e;
                            },
                            ),
                        });
                    case 'DELETE_CONFIGURATION':
                        var _ = t.configurationId;
                        if (e.configurations.length >= 2) {
                            for (var C = null, j = !1, x = [], w = 0, O = e.configurations; w < O.length; w++) {
                                var P = O[w];
                                P.id !== _ ? (x.push(P),
                                j || (C = P.id)) : j = !0;
                            }
                            return r(r({}, e), {
                                configurations: x,
                                selectedConfigurationId: j && C !== null ? C : e.selectedConfigurationId,
                            });
                        }
                    case 'SELECT_CONFIGURATION':
                        return _ = t.configurationId,
                        r(r({}, e), { selectedConfigurationId: _ });
                    }
                    return e;
                };
            },
            4912: (e, t, n) => {
                Object.defineProperty(t, '__esModule', { value: !0 }),
                t.getConfigurations = void 0;
                var r = n(7381);
                t.getConfigurations = function (e) {
                    return e && e.configurations && e.configurations.length > 0 ? e.configurations : [r.generateConfiguration([])];
                };
            },
            4228: (e, t) => {
                Object.defineProperty(t, '__esModule', { value: !0 }),
                t.getFavorites = void 0,
                t.getFavorites = function (e) {
                    if (e == null ? void 0 : e.favorites) {
                        for (var t = {}, n = 0, r = e.favorites; n < r.length; n++) { t[r[n]] = !0 }
                        return t;
                    }
                    return {};
                };
            },
            993: (e, t, n) => {
                Object.defineProperty(t, '__esModule', { value: !0 }),
                t.getReduxState = t.baseCurrencyUSD = void 0;
                var r = n(3425),
                    o = n(9076),
                    i = n(3628),
                    a = n(8849),
                    s = n(9778),
                    c = n(4912),
                    l = n(4228),
                    u = n(6003),
                    d = n(614),
                    f = n(7134);
                t.baseCurrencyUSD = {
                    id: 'usd',
                    symbol: '$',
                    code: 'USD',
                };
                var h = [o.translationEnglish, i.translationGerman, a.translationPolish, s.translationRussian],
                    p = [t.baseCurrencyUSD, {
                        id: 'eur',
                        symbol: '€',
                        code: 'EUR',
                    }, {
                        id: 'aud',
                        symbol: '$',
                        code: 'AUD',
                    }, {
                        id: 'gbp',
                        symbol: '£',
                        code: 'GBP',
                    }, {
                        id: 'pln',
                        symbol: 'Zł',
                        code: 'PLN',
                    }, {
                        id: 'rub',
                        symbol: '₽',
                        code: 'RUB',
                    }, {
                        id: 'btc',
                        symbol: '₿',
                        code: 'BTC',
                    }, {
                        id: 'eth',
                        symbol: 'Ξ',
                        code: 'ETH',
                    }],
                    v = [{
                        id: 'hour',
                        label: function (e) {
                            return e.period_hour;
                        },
                    }, {
                        id: 'day',
                        label: function (e) {
                            return e.period_day;
                        },
                    }, {
                        id: 'week',
                        label: function (e) {
                            return e.period_week;
                        },
                    }, {
                        id: 'month',
                        label: function (e) {
                            return e.period_month;
                        },
                    }, {
                        id: 'year',
                        label: function (e) {
                            return e.period_year;
                        },
                    }];
                t.getReduxState = function () {
                    var e = r.UserStorage.load(),
                        t = c.getConfigurations(e);
                    return {
                        periods: v,
                        translations: h,
                        baseCurrencies: p,
                        selectedTranslation: f.getSelectedTranslation(h, e),
                        selectedBaseCurrency: u.getSelectedBaseCurrency(p, e),
                        selectedCurrencyId: null,
                        currencies: null,
                        favorites: l.getFavorites(e),
                        configurations: t,
                        selectedConfigurationId: d.getSelectedConfiguration(e, t),
                    };
                };
            },
            6003: (e, t, n) => {
                Object.defineProperty(t, '__esModule', { value: !0 }),
                t.getSelectedBaseCurrency = void 0;
                var r = n(993);
                t.getSelectedBaseCurrency = function (e, t) {
                    return e.find(function (e) {
                        return e.id === (t == null ? void 0 : t.baseCurrency);
                    },
                    ) || r.baseCurrencyUSD;
                };
            },
            614: (e, t) => {
                Object.defineProperty(t, '__esModule', { value: !0 }),
                t.getSelectedConfiguration = void 0,
                t.getSelectedConfiguration = function (e, t) {
                    return e && e.selectedConfiguration ? e.selectedConfiguration : t[0].id;
                };
            },
            7134: (e, t) => {
                Object.defineProperty(t, '__esModule', { value: !0 }),
                t.getSelectedTranslation = void 0,
                t.getSelectedTranslation = function (e, t) {
                    var n = e.find(function (e) {
                        return e.id === (t == null ? void 0 : t.translation);
                    },
                    );
                    if (n) { return n }
                    if (navigator.language) {
                        for (var r = navigator.language.toLowerCase(), o = 0, i = e; o < i.length; o++) {
                            var a = i[o];
                            if (r.startsWith(a.id.toLowerCase())) { return a }
                        }
                    }
                    return e[0];
                };
            },
            9076: (e, t, n) => {
                Object.defineProperty(t, '__esModule', { value: !0 }),
                t.translationEnglish = void 0;
                var r = n(2746);
                t.translationEnglish = {
                    id: 'en',
                    flag: '🇺🇸',
                    name: 'English',
                    appName: 'Crypto Bubbles',
                    loading: 'Content is loading...',
                    actions: 'Actions',
                    currencyName: 'Name',
                    settings: 'Show/Hide Settings',
                    rank: 'Rank',
                    marketcap: 'Market Cap',
                    volume: '24h Volume',
                    price: 'Price',
                    performance: 'Performance',
                    neutral: 'Neutral',
                    period_hour: 'Hour',
                    period_day: 'Day',
                    period_week: 'Week',
                    period_month: 'Month',
                    period_year: 'Year',
                    filter: 'Filter',
                    filter_none: 'None',
                    filter_onlyFavorites: 'Only favorites',
                    select_bubble: 'Select bubble in bubble chart',
                    unselect_bubble: 'Unselect bubble',
                    open_coingecko: 'View on CoinGecko',
                    add_favorite: 'Add to favorites',
                    remove_favorite: 'Remove from favorites',
                    search_crypto: 'Search cryptocurrency',
                    bubble_size: 'Bubble size',
                    bubble_content: 'Bubble content',
                    bubble_color: 'Bubble color',
                    period: 'Period',
                    description: 'Interactive bubble chart for the TOP 100 cryptocurrencies',
                    link_twitter: '@' + r.Config.usernameTwitter + ' on Twitter',
                    link_instagram: '@' + r.Config.usernameInstagram + ' on Instagram',
                    link_facebook: '@' + r.Config.usernameFacebook + ' on Facebook',
                    link_email: 'E-mail to ' + r.Config.emailAddress,
                    link_app: 'App on Google Play',
                    link_wallpaper: 'Wallpaper on Steam',
                    link_bmc: 'Support me with a coffee :)',
                    link_binance: 'Support me by registering on Binance',
                    footer_about: 'You can use it as *website* at cryptobubbles.net, as *android app* on Google Play and as *wallpaper* for Wallpaper Engine on Steam.',
                    footer_contact: 'I am always open for offers, questions, feedback and other concerns. Just contact me with one of the options below.',
                    footer_support: 'Support my work',
                    footer_support1: 'Crypto Bubbles is *free of cost*, *tracking* or *ads* for you since I started development two years ago.',
                    footer_support2: 'Any support with the options below will cover my monthly hosting fees and motivate me to work further.',
                    footer_support3: 'First button is for registering at Binance with my referral code. You have to pay 10% less fees on every trade and I will get a part of your fees as a commission.',
                    window_close: 'Close window',
                    window_toggleExpand: 'Toogle expansion',
                    configuration_add: 'Add chart',
                    configuration_edit: 'Edit chart',
                    configuration_delete: 'Delete chart',
                    fullscreen_toggle: 'Toggle fullscreen',
                };
            },
            3628: (e, t, n) => {
                Object.defineProperty(t, '__esModule', { value: !0 }),
                t.translationGerman = void 0;
                var r = n(2746);
                t.translationGerman = {
                    id: 'de',
                    flag: '🇩🇪',
                    name: 'Deutsch',
                    appName: 'Crypto Bubbles',
                    loading: 'Inhalte werden geladen...',
                    actions: 'Aktionen',
                    currencyName: 'Name',
                    settings: 'Einstellungen ein/ausblenden',
                    rank: 'Rang',
                    marketcap: 'Marktkap.',
                    volume: 'Tagesvolumen',
                    price: 'Kurs',
                    performance: 'Performance',
                    neutral: 'Neutral',
                    period_hour: 'Stunde',
                    period_day: 'Tag',
                    period_week: 'Woche',
                    period_month: 'Monat',
                    period_year: 'Jahr',
                    filter: 'Filter',
                    filter_none: 'Keine',
                    filter_onlyFavorites: 'Nur Favoriten',
                    select_bubble: 'Bubble im Bubblechart auswählen',
                    unselect_bubble: 'Bubble-Auswahl aufheben',
                    open_coingecko: 'Bei CoinGecko anschauen',
                    add_favorite: 'Zu Favoriten hinzufügen',
                    remove_favorite: 'Von Favoriten entfernen',
                    search_crypto: 'Kryptowährung suchen',
                    bubble_size: 'Bubble Größe',
                    bubble_content: 'Bubble Inhalt',
                    bubble_color: 'Bubble Farbe',
                    period: 'Zeitraum',
                    description: 'Interaktiver Bubblechart für die hundert größten Kryptowährungen',
                    link_twitter: '@' + r.Config.usernameTwitter + ' bei Twitter',
                    link_instagram: '@' + r.Config.usernameInstagram + ' bei Instagram',
                    link_facebook: '@' + r.Config.usernameFacebook + ' bei Facebook',
                    link_email: 'E-Mail an ' + r.Config.emailAddress,
                    link_app: 'App bei Google Play',
                    link_wallpaper: 'Als Wallpaper bei Steam',
                    link_bmc: 'Unterstütze mich mit einem Kaffee :)',
                    link_binance: 'Unterstütze mich indem du ein Binance-Konto erstellst',
                    footer_about: 'Crypto Bubbles kann als *Webseite* über cryptobubbles.net, als *Android-App* bei Google Play oder als *Bildschirmhintergrund* mithilfe der Wallpaper Engine bei Steam genutzt werden.',
                    footer_contact: 'Ich bin jederzeit offen für Angebote, Fragen, Feedback oder andere Angelegenheiten. Sende mir einfach eine Nachricht über eine der folgenden Kontaktoptionen.',
                    footer_support: 'Unterstütze mein Projekt',
                    footer_support1: 'Crypto Bubbles funktioniert für dich *ohne Kosten*, *Tracking* oder *Werbung* seit ich mit der Entwicklung vor mehr als zwei Jahren begonnen habe.',
                    footer_support2: 'Jegliche Unterstützung wird benutzt, um meine monatlichen Hosting-Gebühren zu decken und motiviert mich, Crypto Bubbles weiter zu entwickeln.',
                    footer_support3: 'Mit dem ersten Knopf kannst du dich bei Binance mit meinem Referral Code registrieren. Dadurch zahlst du *10% weniger Gebühren* bei jedem Trade und ich bekomme einen Teil deiner Gebühren als Provision.',
                    window_close: 'Dialog schließen',
                    window_toggleExpand: 'Dialog auf/zuklappen',
                    configuration_add: 'Chart hinzufügen',
                    configuration_edit: 'Chart bearbeiten',
                    configuration_delete: 'Chart löschen',
                    fullscreen_toggle: 'Vollbild an/ausschalten',
                };
            },
            8849: (e, t, n) => {
                Object.defineProperty(t, '__esModule', { value: !0 }),
                t.translationPolish = void 0;
                var r = n(2746);
                t.translationPolish = {
                    id: 'pl',
                    flag: '🇵🇱',
                    name: 'Polski',
                    appName: 'Krypto Bąbelki',
                    loading: 'Content is loading...',
                    actions: 'Actions',
                    currencyName: 'Name',
                    settings: 'Show/Hide Settings',
                    rank: 'Miejsce',
                    marketcap: 'Kapitalizacja',
                    volume: 'Wolumen',
                    price: 'Cena',
                    performance: 'Wydajność',
                    neutral: 'Neutral',
                    period_hour: 'Godzina',
                    period_day: 'Dzień',
                    period_week: 'Tydzień',
                    period_month: 'Miesiąc',
                    period_year: 'Rok',
                    filter: 'Filter',
                    filter_none: 'None',
                    filter_onlyFavorites: 'Only favorites',
                    select_bubble: 'Select bubble in bubble chart',
                    unselect_bubble: 'Unselect bubble',
                    open_coingecko: 'View on CoinGecko',
                    add_favorite: 'Add to favorites',
                    remove_favorite: 'Remove from favorites',
                    search_crypto: 'Search cryptocurrency',
                    bubble_size: 'Rozmiar bąbelka',
                    bubble_content: 'Zawartość bąbelka',
                    bubble_color: 'Bubble color',
                    period: 'Okres',
                    description: 'Intuicyjna i ciesząca wizualizacja handlu krytpowalut',
                    link_twitter: '@' + r.Config.usernameTwitter + ' na Twitterze',
                    link_instagram: '@' + r.Config.usernameInstagram + ' na Instagramie',
                    link_facebook: '@' + r.Config.usernameFacebook + ' na Facebooku',
                    link_email: 'Kontakt e-mail pod adresem ' + r.Config.emailAddress,
                    link_app: 'Aplikacja w Google Play',
                    link_wallpaper: 'Wallpaper on Steam',
                    link_bmc: 'Support me with a coffee :)',
                    link_binance: 'Support me by registering on Binance',
                    footer_about: 'You can use it as *website* at cryptobubbles.net, as *android app* on Google Play and as *wallpaper* for Wallpaper Engine on Steam.',
                    footer_contact: 'I am always open for offers, questions, feedback and other concerns. Just contact me with one of the options below.',
                    footer_support: 'Support my work',
                    footer_support1: 'Crypto Bubbles is *free of cost*, *tracking* or *ads* for you since I started development two years ago.',
                    footer_support2: 'Any support with the options below will cover my monthly hosting fees and motivate me to work further.',
                    footer_support3: 'First button is for registering at Binance with my referral code. You have to pay 10% less fees on every trade and I will get a part of your fees as a commission.',
                    window_close: 'Close window',
                    window_toggleExpand: 'Toogle expansion',
                    configuration_add: 'Add chart',
                    configuration_edit: 'Edit chart',
                    configuration_delete: 'Delete chart',
                    fullscreen_toggle: 'Toggle fullscreen',
                };
            },
            9778: (e, t, n) => {
                Object.defineProperty(t, '__esModule', { value: !0 }),
                t.translationRussian = void 0;
                var r = n(2746);
                t.translationRussian = {
                    id: 'ru',
                    flag: '🇷🇺',
                    name: 'Русский',
                    appName: 'Crypto Bubbles',
                    loading: 'Content is loading...',
                    actions: 'Actions',
                    currencyName: 'Name',
                    settings: 'Show/Hide Settings',
                    rank: 'Рейтинг',
                    marketcap: 'Объём рынка',
                    volume: '24ч Объём',
                    price: 'Цена',
                    performance: 'Производительность',
                    neutral: 'Neutral',
                    period_hour: 'час',
                    period_day: 'день',
                    period_week: 'неделя',
                    period_month: 'месяц',
                    period_year: 'год',
                    filter: 'Filter',
                    filter_none: 'None',
                    filter_onlyFavorites: 'Only favorites',
                    select_bubble: 'Select bubble in bubble chart',
                    unselect_bubble: 'Unselect bubble',
                    open_coingecko: 'View on CoinGecko',
                    add_favorite: 'Add to favorites',
                    remove_favorite: 'Remove from favorites',
                    search_crypto: 'Search cryptocurrency',
                    bubble_size: 'размер пузыря',
                    bubble_content: 'содержание пузырьков',
                    bubble_color: 'Bubble color',
                    period: 'Период',
                    description: 'Самая интуитивная и красивая визуализация крипто-валютного рынка',
                    link_twitter: '@' + r.Config.usernameTwitter + ' on Twitter',
                    link_instagram: '@' + r.Config.usernameInstagram + ' on Instagram',
                    link_facebook: '@' + r.Config.usernameFacebook + ' on Facebook',
                    link_email: 'E-mail to ' + r.Config.emailAddress,
                    link_app: 'App at Google Play',
                    link_wallpaper: 'Wallpaper on Steam',
                    link_bmc: 'Support me with a coffee :)',
                    link_binance: 'Support me by registering on Binance',
                    footer_about: 'You can use it as *website* at cryptobubbles.net, as *android app* on Google Play and as *wallpaper* for Wallpaper Engine on Steam.',
                    footer_contact: 'I am always open for offers, questions, feedback and other concerns. Just contact me with one of the options below.',
                    footer_support: 'Support my work',
                    footer_support1: 'Crypto Bubbles is *free of cost*, *tracking* or *ads* for you since I started development two years ago.',
                    footer_support2: 'Any support with the options below will cover my monthly hosting fees and motivate me to work further.',
                    footer_support3: 'First button is for registering at Binance with my referral code. You have to pay 10% less fees on every trade and I will get a part of your fees as a commission.',
                    window_close: 'Close window',
                    window_toggleExpand: 'Toogle expansion',
                    configuration_add: 'Add chart',
                    configuration_edit: 'Edit chart',
                    configuration_delete: 'Delete chart',
                    fullscreen_toggle: 'Toggle fullscreen',
                };
            },
            2050: (e, t) => {
                Object.defineProperty(t, '__esModule', { value: !0 }),
                t.Tween = void 0;
                var n = (function () {
                    function e (e, t) {
                        void 0 === t && (t = 400),
                        this.duration = t,
                        this.startValue = 0,
                        this.endValue = e,
                        this.startTime = null;
                    }
                    return e.prototype.get = function () {
                        if (this.startTime === null) { return this.endValue }
                        var e = Date.now() - this.startTime;
                        if (e >= this.duration) {
                            return this.startTime = null,
                            this.endValue;
                        }
                        var t = e / this.duration;
                        return (function (e, t, n) {
                            return e + (t - e) * n;
                        }(this.startValue, this.endValue, t));
                    }
                    ,
                    e.prototype.set = function (e, t) {
                        void 0 === t && (t = !1),
                        t ? this.startTime = null : (this.startValue = this.get(),
                        this.startTime = Date.now()),
                        this.endValue = e;
                    }
                    ,
                    e.prototype.isDone = function () {
                        return this.startTime === null || Date.now() >= this.startTime + this.duration && (this.startTime = null,
                        !0);
                    }
                    ,
                    e;
                }());
                t.Tween = n;
            },
            277: (e, t) => {
                Object.defineProperty(t, '__esModule', { value: !0 }),
                t.clamp = void 0,
                t.clamp = function (e, t, n) {
                    return e < t ? t : e > n ? n : e;
                };
            },
            2085: (e, t) => {
                Object.defineProperty(t, '__esModule', { value: !0 }),
                t.combineClasses = void 0,
                t.combineClasses = function () {
                    for (var e = [], t = 0; t < arguments.length; t++) { e[t] = arguments[t] }
                    for (var n = '', r = 0, o = e; r < o.length; r++) {
                        var i = o[r];
                        i && (n.length !== 0 && (n += ' '),
                        n += i);
                    }
                    return n;
                };
            },
            7381: (e, t) => {
                function n (e, t) {
                    for (var n = 0, r = e; n < r.length; n++) {
                        if (r[n].name === t) { return !0 }
                    }
                    return !1;
                }
                Object.defineProperty(t, '__esModule', { value: !0 }),
                t.generateConfiguration = void 0,
                t.generateConfiguration = function (e) {
                    var t = (function (e) {
                        for (var t = 1, r = ''; t < 100 && n(e, r = 'Chart #' + t);) { t++ }
                        return r;
                    }(e));
                    return {
                        id: Date.now().toString(),
                        name: t,
                        color: 'performance',
                        content: 'performance',
                        size: 'performance',
                        period: 'week',
                        filter: 'none',
                    };
                };
            },
            7166: (e, t) => {
                Object.defineProperty(t, '__esModule', { value: !0 }),
                t.parseNumber = void 0,
                t.parseNumber = function (e, t) {
                    try {
                        var n = Number.parseFloat(e);
                        if (Number.isFinite(n) && !Number.isNaN(n)) { return n }
                    } catch (e) {}
                    return t;
                };
            },
            5188: (e, t) => {
                Object.defineProperty(t, '__esModule', { value: !0 }),
                t.randomBi = void 0,
                t.randomBi = function () {
                    return 2 * Math.random() - 1;
                };
            },
            750: (e, t) => {
                Object.defineProperty(t, '__esModule', { value: !0 }),
                t.scrollToTop = void 0,
                t.scrollToTop = function () {
                    try {
                        window.scroll({
                            top: 0,
                            behavior: 'smooth',
                        });
                    } catch (e) {
                        window.scroll(0, 0);
                    }
                };
            },
        }, n = {};
    function r (e) {
        var o = n[e];
        if (void 0 !== o) { return o.exports }
        var i = n[e] = {
            id: e,
            loaded: !1,
            exports: {},
        };
        return t[e].call(i.exports, i, i.exports, r),
        i.loaded = !0,
        i.exports;
    }
    r.m = t,
    e = [],
    r.O = (t, n, o, i) => {
        if (!n) {
            var a = 1 / 0;
            for (l = 0; l < e.length; l++) {
                for (var [n, o, i] = e[l], s = !0, c = 0; c < n.length; c++) {
                    (!1 & i || a >= i) && Object.keys(r.O).every(e => r.O[e](n[c])) ? n.splice(c--, 1) : (s = !1,
                    i < a && (a = i));
                }
                s && (e.splice(l--, 1),
                t = o());
            }
            return t;
        }
        i = i || 0;
        for (var l = e.length; l > 0 && e[l - 1][2] > i; l--) { e[l] = e[l - 1] }
        e[l] = [n, o, i];
    }
    ,
    r.n = e => {
        var t = e && e.__esModule ? () => e.default : () => e;
        return r.d(t, { a: t }),
        t;
    }
    ,
    r.d = (e, t) => {
        for (var n in t) {
            r.o(t, n) && !r.o(e, n) && Object.defineProperty(e, n, {
                enumerable: !0,
                get: t[n],
            });
        }
    }
    ,
    r.g = (function () {
        if (typeof globalThis === 'object') { return globalThis }
        try {
            return this || new Function('return this')();
        } catch (e) {
            if (typeof window === 'object') { return window }
        }
    }()),
    r.hmd = e => ((e = Object.create(e)).children || (e.children = []),
    Object.defineProperty(e, 'exports', {
        enumerable: !0,
        set: () => {
            throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + e.id);
        },
    }),
    e),
    r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t),
    r.r = e => {
        typeof Symbol !== 'undefined' && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }
    ,
    (() => {
        var e = { 143: 0 };
        r.O.j = t => e[t] === 0;
        var t = (t, n) => {
                var o, i, [a, s, c] = n, l = 0;
                for (o in s) { r.o(s, o) && (r.m[o] = s[o]) }
                for (c && c(r),
                t && t(n); l < a.length; l++) {
                    i = a[l],
                    r.o(e, i) && e[i] && e[i][0](),
                    e[a[l]] = 0;
                }
                r.O();
            },
            n = self.webpackChunkcryptobubbles = self.webpackChunkcryptobubbles || [];
        n.forEach(t.bind(null, 0)),
        n.push = t.bind(null, n.push.bind(n));
    }
    )();
    var o = r.O(void 0, [565], () => r(5796));
    o = r.O(o);
}
)();
