!(function (e) {
  function t(t) {
    for (var i, a, s = t[0], l = t[1], u = t[2], h = 0, f = []; h < s.length; h++) (a = s[h]), Object.prototype.hasOwnProperty.call(r, a) && r[a] && f.push(r[a][0]), (r[a] = 0)
    for (i in l) Object.prototype.hasOwnProperty.call(l, i) && (e[i] = l[i])
    for (c && c(t); f.length; ) f.shift()()
    return o.push.apply(o, u || []), n()
  }
  function n() {
    for (var e, t = 0; t < o.length; t++) {
      for (var n = o[t], i = !0, s = 1; s < n.length; s++) {
        var l = n[s]
        0 !== r[l] && (i = !1)
      }
      i && (o.splice(t--, 1), (e = a((a.s = n[0]))))
    }
    return e
  }
  var i = {},
    r = {
      app: 0,
    },
    o = []
  function a(t) {
    if (i[t]) return i[t].exports
    var n = (i[t] = {
      i: t,
      l: !1,
      exports: {},
    })
    return e[t].call(n.exports, n, n.exports, a), (n.l = !0), n.exports
  }
  ;(a.e = function (e) {
    var t = [],
      n = r[e]
    if (0 !== n)
      if (n) t.push(n[2])
      else {
        var i = new Promise(function (t, i) {
          n = r[e] = [t, i]
        })
        t.push((n[2] = i))
        var o,
          s = document.createElement("script")
        ;(s.charset = "utf-8"),
          (s.timeout = 120),
          a.nc && s.setAttribute("nonce", a.nc),
          (s.src = (function (e) {
            return a.p + "version/1701338711315/js/" + e + ".js"
          })(e))
        var l = new Error()
        o = function (t) {
          ;(s.onerror = s.onload = null), clearTimeout(u)
          var n = r[e]
          if (0 !== n) {
            if (n) {
              var i = t && ("load" === t.type ? "missing" : t.type),
                o = t && t.target && t.target.src
              ;(l.message = "Loading chunk " + e + " failed.\n(" + i + ": " + o + ")"), (l.name = "ChunkLoadError"), (l.type = i), (l.request = o), n[1](l)
            }
            r[e] = void 0
          }
        }
        var u = setTimeout(function () {
          o({
            type: "timeout",
            target: s,
          })
        }, 12e4)
        ;(s.onerror = s.onload = o), document.head.appendChild(s)
      }
    return Promise.all(t)
  }),
    (a.m = e),
    (a.c = i),
    (a.d = function (e, t, n) {
      a.o(e, t) ||
        Object.defineProperty(e, t, {
          enumerable: !0,
          get: n,
        })
    }),
    (a.r = function (e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, {
          value: "Module",
        }),
        Object.defineProperty(e, "__esModule", {
          value: !0,
        })
    }),
    (a.t = function (e, t) {
      if ((1 & t && (e = a(e)), 8 & t)) return e
      if (4 & t && "object" === typeof e && e && e.__esModule) return e
      var n = Object.create(null)
      if (
        (a.r(n),
        Object.defineProperty(n, "default", {
          enumerable: !0,
          value: e,
        }),
        2 & t && "string" != typeof e)
      )
        for (var i in e)
          a.d(
            n,
            i,
            function (t) {
              return e[t]
            }.bind(null, i)
          )
      return n
    }),
    (a.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default
            }
          : function () {
              return e
            }
      return a.d(t, "a", t), t
    }),
    (a.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t)
    }),
    (a.p = "/intel/"),
    (a.oe = function (e) {
      throw (console.error(e), e)
    })
  var s = (this.webpackJsonp = this.webpackJsonp || []),
    l = s.push.bind(s)
  ;(s.push = t), (s = s.slice())
  for (var u = 0; u < s.length; u++) t(s[u])
  var c = l
  o.push([309, "vendors"]), n()
})(
  Array(50).concat([
    function (e) {
      e.exports = JSON.parse(
        '{"mediaQueries":{"XSMALL":"(max-width: 479px)","SMALL":"(min-width: 480px)","MEDIUM":"(min-width: 680px)","LARGE":"(min-width: 940px)","XLARGE":"(min-width: 1260px)","XXLARGE":"(min-width: 1660px)","LARGE_INVERTED":"(max-width: 939px)","XLARGE_INVERTED":"(max-width: 1259px)","SMALL_LANDSCAPE":"\'(max-width: 939px) and (orientation: landscape)\'","LARGE_SMALLHEIGHT":"\'(min-width: 940px) and (max-height: 780px)\'"},"deviceState":{"XSMALL":0,"SMALL":1,"MEDIUM":2,"LARGE":3,"XLARGE":4,"XXLARGE":5}}'
      )
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (e, t, n) {
      e.exports = {
        icon: "icon-IOxSc_E",
      }
    },
    ,
    ,
    function (e, t, n) {
      e.exports = {
        "play-button": "play-button-1Ph1V-3",
        playButton: "play-button-1Ph1V-3",
        icon: "icon-1hiJo9K",
      }
    },
    function (e, t, n) {
      e.exports = {
        "scramble-text": "scramble-text-2_-3Gem",
        scrambleText: "scramble-text-2_-3Gem",
      }
    },
    function (e, t, n) {
      e.exports = {
        "sponsor-logos": "sponsor-logos-1oTdbeZ",
        sponsorLogos: "sponsor-logos-1oTdbeZ",
        divider: "divider-1YMBVzu",
        logo: "logo-BqJcQoe",
        mono: "mono-2QBAe6P",
      }
    },
    function (e, t, n) {
      e.exports = {
        "looping-video": "looping-video-1c1I2i9",
        loopingVideo: "looping-video-1c1I2i9",
      }
    },
    function (e, t, n) {
      e.exports = {
        "skip-button": "skip-button-3dz75GS",
        skipButton: "skip-button-3dz75GS",
        "arrow-hover": "arrow-hover-2yO0A9f",
        arrowHover: "arrow-hover-2yO0A9f",
        label: "label-r_FHxEi",
        "arrow-wrapper": "arrow-wrapper-1s1U9xS",
        arrowWrapper: "arrow-wrapper-1s1U9xS",
        icon: "icon-1W5SdN2",
      }
    },
    function (e, t, n) {
      e.exports = {
        "video-player": "video-player-U8ZHeYE",
        videoPlayer: "video-player-U8ZHeYE",
        controls: "controls-2spBCqG",
        progress: "progress-3akKVtl",
        "progress-wrapper": "progress-wrapper-3eG8rIt",
        progressWrapper: "progress-wrapper-3eG8rIt",
        "is-expanded": "is-expanded-1K-HZze",
        isExpanded: "is-expanded-1K-HZze",
        "progress-time": "progress-time-1VTJ7Mb",
        progressTime: "progress-time-1VTJ7Mb",
        "progress-indicator": "progress-indicator-20mUKBb",
        progressIndicator: "progress-indicator-20mUKBb",
        options: "options-1y5wsCL",
        "option-button": "option-button-37UGZlC",
        optionButton: "option-button-37UGZlC",
        "is-active": "is-active-1Mw-4AB",
        isActive: "is-active-1Mw-4AB",
        "has-top-navigation": "has-top-navigation-1bWxIhl",
        hasTopNavigation: "has-top-navigation-1bWxIhl",
      }
    },
    function (e, t, n) {
      e.exports = {
        "intro-page": "intro-page-30S7cCD",
        introPage: "intro-page-30S7cCD",
        "title-wrapper": "title-wrapper-2WUtjY5",
        titleWrapper: "title-wrapper-2WUtjY5",
        title: "title-2MDBDyN",
        play: "play-3D5ZFwy",
        logos: "logos-3GAklYX",
        video: "video-eWtaCIF",
      }
    },
    function (e, t, n) {},
    function (e, t, n) {
      e.exports = {
        "primary-button": "primary-button-2u4GFLa",
        primaryButton: "primary-button-2u4GFLa",
        inverted: "inverted-Xzb4I-X",
      }
    },
    function (e, t, n) {
      e.exports = {
        "watch-button": "watch-button-NwgE3I8",
        watchButton: "watch-button-NwgE3I8",
        icon: "icon-1nlbRo5",
        label: "label-3poPpY3",
      }
    },
    function (e, t, n) {
      e.exports = {
        "content-section": "content-section-1SFQBT2",
        contentSection: "content-section-1SFQBT2",
        "content-wrapper": "content-wrapper-2SCrLqu",
        contentWrapper: "content-wrapper-2SCrLqu",
        title: "title-1-vATsX",
        "title-element": "title-element-ohWZse0",
        titleElement: "title-element-ohWZse0",
        "rich-text": "rich-text-gCHRxJS",
        richText: "rich-text-gCHRxJS",
        "cta-placeholder": "cta-placeholder-2hNZjz8",
        ctaPlaceholder: "cta-placeholder-2hNZjz8",
        cta: "cta-2Rt3BtM",
        "watch-cta": "watch-cta-1cclscj",
        watchCta: "watch-cta-1cclscj",
        content: "content-1sDTA47",
      }
    },
    function (e, t, n) {
      e.exports = {
        "about-page": "about-page-1CfovQs",
        aboutPage: "about-page-1CfovQs",
        image: "image-3eiac6f",
        "content-sections": "content-sections-299lZ-V",
        contentSections: "content-sections-299lZ-V",
      }
    },
    function (e, t, n) {
      e.exports = {
        "card-carousel": "card-carousel-1rKwueX",
        cardCarousel: "card-carousel-1rKwueX",
        "component-title": "component-title-2w6lyYZ",
        componentTitle: "component-title-2w6lyYZ",
        "component-description": "component-description-3H09yow",
        componentDescription: "component-description-3H09yow",
        footer: "footer-auNoJLn",
        cta: "cta-FKusquB",
        carousel: "carousel-1y-AMsC",
        "carousel-item": "carousel-item-2T-LIAF",
        carouselItem: "carousel-item-2T-LIAF",
        "item-content": "item-content-qf4-GCH",
        itemContent: "item-content-qf4-GCH",
        "item-header": "item-header-3kXLntm",
        itemHeader: "item-header-3kXLntm",
        icon: "icon-1zeTNex",
        title: "title-2c3eAJh",
        description: "description-rXJveuC",
        image: "image-1dGmq9c",
        "is-alternate": "is-alternate-3G_vw9B",
        isAlternate: "is-alternate-3G_vw9B",
      }
    },
    function (e, t, n) {
      e.exports = {
        "technology-page": "technology-page-2MCu9vJ",
        technologyPage: "technology-page-2MCu9vJ",
        "card-carousel": "card-carousel-SOJgkqh",
        cardCarousel: "card-carousel-SOJgkqh",
        carousel: "carousel-uFfVpRi",
      }
    },
    function (e, t, n) {
      e.exports = {
        "detail-hero": "detail-hero-24AIGJa",
        detailHero: "detail-hero-24AIGJa",
        "loop-video": "loop-video-1b8D585",
        loopVideo: "loop-video-1b8D585",
        "is-active": "is-active-1lP-qfT",
        isActive: "is-active-1lP-qfT",
        "mask-wrapper": "mask-wrapper-3brAd9K",
        maskWrapper: "mask-wrapper-3brAd9K",
        mask: "mask-11qf2fW",
        "page-title": "page-title-gz289Dc",
        pageTitle: "page-title-gz289Dc",
        "title-text-animation": "title-text-animation-2ATM1yb",
        titleTextAnimation: "title-text-animation-2ATM1yb",
        "title-text": "title-text-yqzj8g2",
        titleText: "title-text-yqzj8g2",
        previous: "previous-1FZSszQ",
        next: "next-1Uk2zC2",
      }
    },
    function (e, t, n) {
      e.exports = {
        "detail-intro-meta": "detail-intro-meta-tvK5ezI",
        detailIntroMeta: "detail-intro-meta-tvK5ezI",
        "meta-icon": "meta-icon-YkRJHdk",
        metaIcon: "meta-icon-YkRJHdk",
        "meta-content": "meta-content-1sY8udd",
        metaContent: "meta-content-1sY8udd",
      }
    },
    function (e, t, n) {
      e.exports = {
        "detail-intro": "detail-intro-3XNMCZB",
        detailIntro: "detail-intro-3XNMCZB",
        title: "title-27bjD89",
      }
    },
    function (e, t, n) {
      e.exports = {
        "team-accordion": "team-accordion-2R6skiB",
        teamAccordion: "team-accordion-2R6skiB",
        "item-header": "item-header-3zQ05yB",
        itemHeader: "item-header-3zQ05yB",
        "is-active": "is-active-2MDRLwU",
        isActive: "is-active-2MDRLwU",
        "member-name": "member-name-1lNQsV1",
        memberName: "member-name-1lNQsV1",
        image: "image-2qVKsyQ",
        "member-title": "member-title-D8ilizh",
        memberTitle: "member-title-D8ilizh",
        "overflow-content": "overflow-content-3MRW4x4",
        overflowContent: "overflow-content-3MRW4x4",
      }
    },
    function (e, t, n) {
      e.exports = {
        "detail-team": "detail-team-FnvsBAT",
        detailTeam: "detail-team-FnvsBAT",
        column: "column-15wIUll",
        "team-title": "team-title-1F-IxI0",
        teamTitle: "team-title-1F-IxI0",
        content: "content-c3U_w5w",
      }
    },
    function (e, t, n) {
      e.exports = {
        "discover-products": "discover-products-2Wej2iv",
        discoverProducts: "discover-products-2Wej2iv",
        header: "header-BivZBLm",
        title: "title-11jTcqW",
        description: "description-3cTnqiG",
        "content-wrapper": "content-wrapper-QBiuQ3P",
        contentWrapper: "content-wrapper-QBiuQ3P",
        content: "content-yIdQlUC",
        carousel: "carousel-G6PiDlz",
        "card-item": "card-item-1cFhjOl",
        cardItem: "card-item-1cFhjOl",
        "cta-placeholder": "cta-placeholder-1p-Vkko",
        ctaPlaceholder: "cta-placeholder-1p-Vkko",
        cta: "cta-1cWGHA9",
      }
    },
    function (e, t, n) {
      e.exports = {
        "nasa-viewer": "nasa-viewer-21rwxVY",
        nasaViewer: "nasa-viewer-21rwxVY",
        "webgl-container": "webgl-container-3WDo5dQ",
        webglContainer: "webgl-container-3WDo5dQ",
      }
    },
    function (e, t, n) {
      e.exports = {
        "detail-page": "detail-page-3NDabSE",
        detailPage: "detail-page-3NDabSE",
        "is-hero": "is-hero-3nKK9Ud",
        isHero: "is-hero-3nKK9Ud",
        content: "content-3-YcBdd",
        discover: "discover-3BJLRPs",
      }
    },
    function (e, t, n) {
      e.exports = {
        "item-content": "item-content-2Oo6C6N",
        itemContent: "item-content-2Oo6C6N",
      }
    },
    function (e, t, n) {
      e.exports = {
        "challenge-list": "challenge-list-emJXh0P",
        challengeList: "challenge-list-emJXh0P",
        challenge: "challenge-1dmzsSG",
      }
    },
    function (e, t, n) {
      e.exports = {
        "all-challenges-page": "all-challenges-page-2FQFclT",
        allChallengesPage: "all-challenges-page-2FQFclT",
        header: "header-2-eQJS4",
        "header-background": "header-background-3QFMiLJ",
        headerBackground: "header-background-3QFMiLJ",
        "page-title": "page-title-3XsFtjq",
        pageTitle: "page-title-3XsFtjq",
        "section-title": "section-title-3A_FRqQ",
        sectionTitle: "section-title-3A_FRqQ",
        "section-subtitle": "section-subtitle-3rvZLOf",
        sectionSubtitle: "section-subtitle-3rvZLOf",
        footer: "footer-1DzpmWW",
      }
    },
    function (e, t, n) {
      e.exports = {
        "webgl-page": "webgl-page-1DO0Keu",
        webglPage: "webgl-page-1DO0Keu",
      }
    },
    function (e, t, n) {
      e.exports = {
        "toggle-menu-button": "toggle-menu-button-3csQay_",
        toggleMenuButton: "toggle-menu-button-3csQay_",
        background: "background-2VENiVF",
        line: "line-1bbRGMk",
        cross: "cross-1_woxLb",
      }
    },
    function (e, t, n) {
      e.exports = {
        "navigation-overlay": "navigation-overlay-2QlK5s1",
        navigationOverlay: "navigation-overlay-2QlK5s1",
        "main-background": "main-background-1HQN3MV",
        mainBackground: "main-background-1HQN3MV",
        "is-active": "is-active-3SBguh_",
        isActive: "is-active-3SBguh_",
        content: "content-2oTuEOd",
        small: "small-1fg0hhK",
        large: "large-1mEeV66",
        "small-item": "small-item-3GL1os9",
        smallItem: "small-item-3GL1os9",
        "mini-item": "mini-item-372wzVp",
        miniItem: "mini-item-372wzVp",
      }
    },
    function (e, t, n) {
      e.exports = {
        "site-header": "site-header-1g8NdTn",
        siteHeader: "site-header-1g8NdTn",
        content: "content-3pv9g3h",
        logos: "logos-2ioKBlR",
        toggle: "toggle-2PJowpX",
        contact: "contact-2iFuKF1",
        "contact-button": "contact-button-eyUyMjM",
        contactButton: "contact-button-eyUyMjM",
        "is-hidden": "is-hidden-3V7xYaa",
        isHidden: "is-hidden-3V7xYaa",
      }
    },
    function (e, t, n) {
      e.exports = {
        "main-navigation-challenge-cards": "main-navigation-challenge-cards-2IqlTLO",
        mainNavigationChallengeCards: "main-navigation-challenge-cards-2IqlTLO",
        "is-hover": "is-hover-L7cWYhx",
        isHover: "is-hover-L7cWYhx",
        list: "list-3hT5gqk",
        item: "item-1HvyNCG",
        title: "title-1syJ-dL",
      }
    },
    function (e, t, n) {
      e.exports = {
        "main-navigation-planets": "main-navigation-planets-3qGvllD",
        mainNavigationPlanets: "main-navigation-planets-3qGvllD",
      }
    },
    function (e, t, n) {
      e.exports = {
        "start-navigation": "start-navigation-mpSwQLo",
        startNavigation: "start-navigation-mpSwQLo",
        "is-menu-open": "is-menu-open-tWR1BDB",
        isMenuOpen: "is-menu-open-tWR1BDB",
        "slide-background": "slide-background-1PTG4We",
        slideBackground: "slide-background-1PTG4We",
        "is-active": "is-active-2N9axLM",
        isActive: "is-active-2N9axLM",
        "items-wrapper": "items-wrapper-15nm4K1",
        itemsWrapper: "items-wrapper-15nm4K1",
        items: "items-1C6Vg7Z",
        "item-content": "item-content-3QiB40w",
        itemContent: "item-content-3QiB40w",
        "item-title": "item-title-mLPYBSJ",
        itemTitle: "item-title-mLPYBSJ",
        "is-in-active": "is-in-active-2vqvnK-",
        isInActive: "is-in-active-2vqvnK-",
        "is-in-active-hovered": "is-in-active-hovered-SJ_7YYs",
        isInActiveHovered: "is-in-active-hovered-SJ_7YYs",
        "item-subtitle": "item-subtitle-2_PRMde",
        itemSubtitle: "item-subtitle-2_PRMde",
        "item-subtext": "item-subtext-wNWZqWz",
        itemSubtext: "item-subtext-wNWZqWz",
        previous: "previous-wElckdt",
        next: "next-mNE2mCE",
        "planet-outlines": "planet-outlines-28CVHTR",
        planetOutlines: "planet-outlines-28CVHTR",
        bottom: "bottom-1CZU5Z9",
        "planet-size": "planet-size-2CphAo5",
        planetSize: "planet-size-2CphAo5",
        "planet-outline": "planet-outline-1cT-2lc",
        planetOutline: "planet-outline-1cT-2lc",
        "planet-moon": "planet-moon-2lHxmge",
        planetMoon: "planet-moon-2lHxmge",
        "planet-sun": "planet-sun-2T9xSjY",
        planetSun: "planet-sun-2T9xSjY",
        "planet-earth": "planet-earth-S6TR1yP",
        planetEarth: "planet-earth-S6TR1yP",
        "drag-trigger": "drag-trigger-2rAGl5O",
        dragTrigger: "drag-trigger-2rAGl5O",
      }
    },
    function (e, t, n) {
      e.exports = {
        "cookie-bar": "cookie-bar-3_jzF-K",
        cookieBar: "cookie-bar-3_jzF-K",
        content: "content-3czYRHg",
        close: "close-1j1ng-o",
      }
    },
    function (e, t, n) {
      e.exports = {
        "navigation-wrapper": "navigation-wrapper-14b4VHT",
        navigationWrapper: "navigation-wrapper-14b4VHT",
        "is-active": "is-active-2TSCFQs",
        isActive: "is-active-2TSCFQs",
      }
    },
    function (e, t) {
      !(function (t) {
        var n = "Modernizr" in t,
          i = t.Modernizr
        !(function (e, t, n, i) {
          function r(e, t) {
            return typeof e === t
          }
          function o(e) {
            var t = p.className,
              n = f._config.classPrefix || ""
            if ((v && (t = t.baseVal), f._config.enableJSClass)) {
              var i = new RegExp("(^|\\s)" + n + "no-js(\\s|$)")
              t = t.replace(i, "$1" + n + "js$2")
            }
            f._config.enableClasses && (e.length > 0 && (t += " " + n + e.join(" " + n)), v ? (p.className.baseVal = t) : (p.className = t))
          }
          function a() {
            return "function" != typeof n.createElement
              ? n.createElement(arguments[0])
              : v
              ? n.createElementNS.call(n, "http://www.w3.org/2000/svg", arguments[0])
              : n.createElement.apply(n, arguments)
          }
          function s(e, t, i, r) {
            var o,
              s,
              l,
              u,
              c = "modernizr",
              h = a("div"),
              f = (function () {
                var e = n.body
                return e || ((e = a(v ? "svg" : "body")).fake = !0), e
              })()
            if (parseInt(i, 10)) for (; i--; ) ((l = a("div")).id = r ? r[i] : c + (i + 1)), h.appendChild(l)
            return (
              ((o = a("style")).type = "text/css"),
              (o.id = "s" + c),
              (f.fake ? f : h).appendChild(o),
              f.appendChild(h),
              o.styleSheet ? (o.styleSheet.cssText = e) : o.appendChild(n.createTextNode(e)),
              (h.id = c),
              f.fake && ((f.style.background = ""), (f.style.overflow = "hidden"), (u = p.style.overflow), (p.style.overflow = "hidden"), p.appendChild(f)),
              (s = t(h, e)),
              f.fake && f.parentNode ? (f.parentNode.removeChild(f), (p.style.overflow = u), p.offsetHeight) : h.parentNode.removeChild(h),
              !!s
            )
          }
          function l(e, n, i) {
            var r
            if ("getComputedStyle" in t) {
              r = getComputedStyle.call(t, e, n)
              var o = t.console
              if (null !== r) i && (r = r.getPropertyValue(i))
              else if (o) {
                o[o.error ? "error" : "log"].call(o, "getComputedStyle returning null, its possible modernizr test results are inaccurate")
              }
            } else r = !n && e.currentStyle && e.currentStyle[i]
            return r
          }
          function u(e, t) {
            if ("object" == typeof e) for (var n in e) m(e, n) && u(n, e[n])
            else {
              var i = (e = e.toLowerCase()).split("."),
                r = f[i[0]]
              if ((2 === i.length && (r = r[i[1]]), void 0 !== r)) return f
              ;(t = "function" == typeof t ? t() : t),
                1 === i.length ? (f[i[0]] = t) : (!f[i[0]] || f[i[0]] instanceof Boolean || (f[i[0]] = new Boolean(f[i[0]])), (f[i[0]][i[1]] = t)),
                o([(t && !1 !== t ? "" : "no-") + i.join("-")]),
                f._trigger(e, t)
            }
            return f
          }
          var c = [],
            h = {
              _version: "3.13.0",
              _config: {
                classPrefix: "",
                enableClasses: !0,
                enableJSClass: !0,
                usePrefixes: !0,
              },
              _q: [],
              on: function (e, t) {
                var n = this
                setTimeout(function () {
                  t(n[e])
                }, 0)
              },
              addTest: function (e, t, n) {
                c.push({
                  name: e,
                  fn: t,
                  options: n,
                })
              },
              addAsyncTest: function (e) {
                c.push({
                  name: null,
                  fn: e,
                })
              },
            },
            f = function () {}
          ;(f.prototype = h), (f = new f())
          var d = [],
            p = n.documentElement,
            v = "svg" === p.nodeName.toLowerCase(),
            g = h._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""]
          h._prefixes = g
          var m,
            _ = (function () {
              var e = t.matchMedia || t.msMatchMedia
              return e
                ? function (t) {
                    var n = e(t)
                    return (n && n.matches) || !1
                  }
                : function (e) {
                    var t = !1
                    return (
                      s("@media " + e + " { #modernizr { position: absolute; } }", function (e) {
                        t = "absolute" === l(e, null, "position")
                      }),
                      t
                    )
                  }
            })()
          ;(h.mq = _),
            f.addTest("touchevents", function () {
              if ("ontouchstart" in t || t.TouchEvent || (t.DocumentTouch && n instanceof DocumentTouch)) return !0
              var e = ["(", g.join("touch-enabled),("), "heartz", ")"].join("")
              return _(e)
            }),
            (function () {
              var e = {}.hasOwnProperty
              m =
                r(e, "undefined") || r(e.call, "undefined")
                  ? function (e, t) {
                      return t in e && r(e.constructor.prototype[t], "undefined")
                    }
                  : function (t, n) {
                      return e.call(t, n)
                    }
            })(),
            (h._l = {}),
            (h.on = function (e, t) {
              this._l[e] || (this._l[e] = []),
                this._l[e].push(t),
                f.hasOwnProperty(e) &&
                  setTimeout(function () {
                    f._trigger(e, f[e])
                  }, 0)
            }),
            (h._trigger = function (e, t) {
              if (this._l[e]) {
                var n = this._l[e]
                setTimeout(function () {
                  var e
                  for (e = 0; e < n.length; e++) (0, n[e])(t)
                }, 0),
                  delete this._l[e]
              }
            }),
            f._q.push(function () {
              h.addTest = u
            }),
            f.addAsyncTest(function () {
              function e(e, t, n) {
                function i(t) {
                  var i = !(!t || "load" !== t.type) && 1 === r.width
                  u(e, "webp" === e && i ? new Boolean(i) : i), n && n(t)
                }
                var r = new Image()
                ;(r.onerror = i), (r.onload = i), (r.src = t)
              }
              var t = [
                  {
                    uri: "data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=",
                    name: "webp",
                  },
                  {
                    uri: "data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==",
                    name: "webp.alpha",
                  },
                  {
                    uri: "data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA",
                    name: "webp.animation",
                  },
                  {
                    uri: "data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=",
                    name: "webp.lossless",
                  },
                ],
                n = t.shift()
              e(n.name, n.uri, function (n) {
                if (n && "load" === n.type) for (var i = 0; i < t.length; i++) e(t[i].name, t[i].uri)
              })
            }),
            (function () {
              var e, t, n, i, o, a
              for (var s in c)
                if (c.hasOwnProperty(s)) {
                  if (((e = []), (t = c[s]).name && (e.push(t.name.toLowerCase()), t.options && t.options.aliases && t.options.aliases.length)))
                    for (n = 0; n < t.options.aliases.length; n++) e.push(t.options.aliases[n].toLowerCase())
                  for (i = r(t.fn, "function") ? t.fn() : t.fn, o = 0; o < e.length; o++)
                    1 === (a = e[o].split(".")).length
                      ? (f[a[0]] = i)
                      : ((f[a[0]] && (!f[a[0]] || f[a[0]] instanceof Boolean)) || (f[a[0]] = new Boolean(f[a[0]])), (f[a[0]][a[1]] = i)),
                      d.push((i ? "" : "no-") + a.join("-"))
                }
            })(),
            o(d),
            delete h.addTest,
            delete h.addAsyncTest
          for (var y = 0; y < f._q.length; y++) f._q[y]()
          e.Modernizr = f
        })(t, t, document),
          (e.exports = t.Modernizr),
          n ? (t.Modernizr = i) : delete t.Modernizr
      })(window)
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (e, t, n) {
      "use strict"
      var i = n(94),
        r = n.n(i)
      n.d(t, "default", function () {
        return r.a
      })
    },
    function (e, t, n) {
      "use strict"
      var i = n(97),
        r = n.n(i)
      n.d(t, "default", function () {
        return r.a
      })
    },
    function (e, t, n) {
      "use strict"
      var i = n(98),
        r = n.n(i)
      n.d(t, "default", function () {
        return r.a
      })
    },
    function (e, t) {},
    function (e, t, n) {
      "use strict"
      var i = n(99),
        r = n.n(i)
      n.d(t, "default", function () {
        return r.a
      })
    },
    function (e, t, n) {
      "use strict"
      var i = n(100),
        r = n.n(i)
      n.d(t, "default", function () {
        return r.a
      })
    },
    ,
    function (e, t, n) {
      "use strict"
      var i = n(101),
        r = n.n(i)
      n.d(t, "default", function () {
        return r.a
      })
    },
    function (e, t, n) {
      "use strict"
      var i = n(102),
        r = n.n(i)
      n.d(t, "default", function () {
        return r.a
      })
    },
    function (e, t, n) {
      "use strict"
      var i = n(103),
        r = n.n(i)
      n.d(t, "default", function () {
        return r.a
      })
    },
    function (e, t, n) {
      "use strict"
      var i = n(104),
        r = n.n(i)
      n.d(t, "default", function () {
        return r.a
      })
    },
    function (e, t, n) {
      "use strict"
      var i = n(105),
        r = n.n(i)
      n.d(t, "default", function () {
        return r.a
      })
    },
    function (e, t) {},
    function (e, t, n) {
      "use strict"
      var i = n(106),
        r = n.n(i)
      n.d(t, "default", function () {
        return r.a
      })
    },
    function (e, t, n) {
      "use strict"
      var i = n(107),
        r = n.n(i)
      n.d(t, "default", function () {
        return r.a
      })
    },
    function (e, t, n) {
      "use strict"
      var i = n(108),
        r = n.n(i)
      n.d(t, "default", function () {
        return r.a
      })
    },
    function (e, t, n) {
      "use strict"
      var i = n(109),
        r = n.n(i)
      n.d(t, "default", function () {
        return r.a
      })
    },
    function (e, t, n) {
      "use strict"
      var i = n(110),
        r = n.n(i)
      n.d(t, "default", function () {
        return r.a
      })
    },
    function (e, t, n) {
      "use strict"
      var i = n(111),
        r = n.n(i)
      n.d(t, "default", function () {
        return r.a
      })
    },
    function (e, t, n) {
      "use strict"
      var i = n(112),
        r = n.n(i)
      n.d(t, "default", function () {
        return r.a
      })
    },
    function (e, t, n) {
      "use strict"
      var i = n(113),
        r = n.n(i)
      n.d(t, "default", function () {
        return r.a
      })
    },
    function (e, t, n) {
      "use strict"
      var i = n(114),
        r = n.n(i)
      n.d(t, "default", function () {
        return r.a
      })
    },
    function (e, t, n) {
      "use strict"
      var i = n(115),
        r = n.n(i)
      n.d(t, "default", function () {
        return r.a
      })
    },
    function (e, t, n) {
      "use strict"
      var i = n(116),
        r = n.n(i)
      n.d(t, "default", function () {
        return r.a
      })
    },
    function (e, t, n) {
      "use strict"
      var i = n(117),
        r = n.n(i)
      n.d(t, "default", function () {
        return r.a
      })
    },
    function (e, t, n) {
      "use strict"
      var i = n(118),
        r = n.n(i)
      n.d(t, "default", function () {
        return r.a
      })
    },
    function (e, t, n) {
      "use strict"
      var i = n(119),
        r = n.n(i)
      n.d(t, "default", function () {
        return r.a
      })
    },
    function (e, t, n) {
      "use strict"
      var i = n(120),
        r = n.n(i)
      n.d(t, "default", function () {
        return r.a
      })
    },
    function (e, t, n) {
      "use strict"
      var i = n(121),
        r = n.n(i)
      n.d(t, "default", function () {
        return r.a
      })
    },
    function (e, t, n) {
      "use strict"
      var i = n(122),
        r = n.n(i)
      n.d(t, "default", function () {
        return r.a
      })
    },
    ,
    ,
    function (e, t, n) {
      "use strict"
      var i = n(123),
        r = n.n(i)
      n.d(t, "default", function () {
        return r.a
      })
    },
    function (e, t, n) {
      "use strict"
      var i = n(124),
        r = n.n(i)
      n.d(t, "default", function () {
        return r.a
      })
    },
    function (e, t, n) {
      "use strict"
      var i = n(125),
        r = n.n(i)
      n.d(t, "default", function () {
        return r.a
      })
    },
    function (e, t, n) {
      "use strict"
      var i = n(126),
        r = n.n(i)
      n.d(t, "default", function () {
        return r.a
      })
    },
    function (e, t, n) {
      "use strict"
      var i = n(127),
        r = n.n(i)
      n.d(t, "default", function () {
        return r.a
      })
    },
    function (e, t, n) {
      "use strict"
      var i = n(128),
        r = n.n(i)
      n.d(t, "default", function () {
        return r.a
      })
    },
    function (e, t, n) {
      "use strict"
      var i = n(129),
        r = n.n(i)
      n.d(t, "default", function () {
        return r.a
      })
    },
    function (e, t, n) {
      "use strict"
      var i = n(130),
        r = n.n(i)
      n.d(t, "default", function () {
        return r.a
      })
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (e, t, n) {
      n(310), (e.exports = n(783))
    },
    function (e, t, n) {
      "use strict"
      n.r(t)
      n(311),
        n(313),
        n(314),
        n(316),
        n(317),
        n(318),
        n(320),
        n(223),
        n(146),
        n(323),
        n(324),
        n(325),
        n(326),
        n(327),
        n(329),
        n(330),
        n(331),
        n(332),
        n(333),
        n(334),
        n(335),
        n(336),
        n(337),
        n(338),
        n(339),
        n(341),
        n(342),
        n(343),
        n(344),
        n(345),
        n(346),
        n(347),
        n(348),
        n(349),
        n(350),
        n(351),
        n(352),
        n(353),
        n(354),
        n(355),
        n(356),
        n(357),
        n(358),
        n(360),
        n(362),
        n(230),
        n(231),
        n(232),
        n(363),
        n(364),
        n(234),
        n(365),
        n(366),
        n(237),
        n(238),
        n(367),
        n(368),
        n(369),
        n(370),
        n(371),
        n(372),
        n(373),
        n(374),
        n(375),
        n(240),
        n(376),
        n(244),
        n(379),
        n(380),
        n(382),
        n(383),
        n(384),
        n(385),
        n(386),
        n(387),
        n(388),
        n(389),
        n(390),
        n(391),
        n(392),
        n(393),
        n(245),
        n(394),
        n(396),
        n(397),
        n(398),
        n(399),
        n(400),
        n(401),
        n(403),
        n(404),
        n(405),
        n(406),
        n(407),
        n(408),
        n(409),
        n(410),
        n(411),
        n(412),
        n(413),
        n(414),
        n(415),
        n(416),
        n(417),
        n(248),
        n(251),
        n(418),
        n(419),
        n(420),
        n(421),
        n(422),
        n(423),
        n(424),
        n(425),
        n(426),
        n(427),
        n(428),
        n(429),
        n(430),
        n(431),
        n(432),
        n(433),
        n(434),
        n(435),
        n(436),
        n(437),
        n(438),
        n(439),
        n(440),
        n(441),
        n(442),
        n(255),
        n(443)
      t.default = {}
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (e, t, n) {},
    function (e, t, n) {
      var i = {
        "./card-temp.svg": 448,
        "./challenge-card.svg": 449,
        "./compute-engine.svg": 450,
        "./cross.svg": 451,
        "./data-fusion.svg": 452,
        "./deep-learning.svg": 453,
        "./google-ai-analytics.svg": 454,
        "./google-ai.svg": 455,
        "./google-api.svg": 456,
        "./google-cloud-full.svg": 457,
        "./google-cloud-run.svg": 458,
        "./google-cloud.svg": 459,
        "./google-compute.svg": 460,
        "./google-containers.svg": 461,
        "./google-data-analytics.svg": 462,
        "./google-data-management.svg": 463,
        "./google-databases.svg": 464,
        "./google-developer-tools.svg": 465,
        "./google-healthcare.svg": 466,
        "./google-hybrid.svg": 467,
        "./google-iot.svg": 468,
        "./google-management-tools.svg": 469,
        "./google-migration.svg": 470,
        "./google-networking.svg": 471,
        "./google-security.svg": 472,
        "./google-storage.svg": 473,
        "./intel.svg": 474,
        "./meta-diameter.svg": 475,
        "./meta-mass.svg": 476,
        "./meta-surface.svg": 477,
        "./nasa-fdl.svg": 478,
        "./play-pause.svg": 479,
        "./play-small.svg": 480,
        "./play.svg": 481,
        "./plus.svg": 482,
        "./skip-arrow.svg": 483,
        "./skip-background.svg": 484,
        "./sound-on-off.svg": 485,
        "./team-plus.svg": 486,
      }
      function r(e) {
        var t = o(e)
        return n(t)
      }
      function o(e) {
        if (!n.o(i, e)) {
          var t = new Error("Cannot find module '" + e + "'")
          throw ((t.code = "MODULE_NOT_FOUND"), t)
        }
        return i[e]
      }
      ;(r.keys = function () {
        return Object.keys(i)
      }),
        (r.resolve = o),
        (e.exports = r),
        (r.id = 447)
    },
    function (e, t) {
      e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><circle cx="25" cy="25" r="25"></circle></svg>'
    },
    function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 282 409"><path d="M0 0h282v409H0z" fill-rule="evenodd"></path><path d="M276 6v397H6V6h270m2-2H4v401h274V4z" fill="#fff"></path><path d="M15.5 15.5v378h251v-378zm109.63 128A125.19 125.19 0 0052.66 179l-35.45-35.5zm-107.92-1L143 16.71 264.82 142.5zm123.79 1a124.1 124.1 0 0187.64 36.16L141 267.29l-87.64-87.63A124.1 124.1 0 01141 143.5zm-.71 124.5l-87.63 87.64a124.29 124.29 0 010-175.28zm.71.71l87.64 87.63a124.29 124.29 0 01-175.28 0zm.71-.71l87.63-87.64a124.29 124.29 0 010 175.28zm87.63-89a125.19 125.19 0 00-72.47-35.45h107.92zm36.16-37.18L144.18 16.5H265.5zM141.79 16.5L16.5 141.79V16.5zM16.5 144.21L52 179.66a125.19 125.19 0 00-35.5 72.47zM52 356.34l-35.5 35.45V283.87A125.19 125.19 0 0052 356.34zM17.21 392.5l35.45-35.45a125.19 125.19 0 0072.47 35.45zm212.13-35.45l35.45 35.45H156.87a125.19 125.19 0 0072.47-35.45zm36.16 34.74l-35.45-35.45a125.19 125.19 0 0035.45-72.47zm-35.45-212.13l35.45-35.45v107.92a125.19 125.19 0 00-35.45-72.47z" fill="#fff" opacity=".1"></path><path d="M265 357v35h-35v-35h35m1-1h-37v37h37v-37z" fill="#fff" opacity=".5"></path><path fill="#fff" fill-rule="evenodd" d="M255 373h-6v-6h-3v6h-6v3h6v6h3v-6h6v-3z"></path></svg>'
    },
    function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill="#aecbfa" d="M7 7h6v6H7z"></path><path fill="#669df6" d="M9 0h2v4H9zM5 0h2v4H5zM13 0h2v4h-2z"></path><path fill="#4285f4" d="M9 16h2v4H9zM5 16h2v4H5zM13 16h2v4h-2zM16 9h4v2h-4zM16 13h4v2h-4zM16 5h4v2h-4z"></path><path fill="#669df6" d="M0 9h4v2H0zM0 13h4v2H0zM0 5h4v2H0z"></path><path d="M3 3v14h14V3zm12 12H5V5h10z" fill="#aecbfa"></path><path fill="#669df6" d="M7 13h6l-3-3-3 3z"></path><path fill="#4285f4" d="M10 10l3 3V7l-3 3z"></path></svg>'
    },
    function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16.02 16.01"><path fill-rule="evenodd" d="M16.02 13.93L10.1 8l5.91-5.91L13.92 0 8.01 5.91 2.1 0 .01 2.09 5.92 8 0 13.93l2.09 2.08 5.92-5.92 5.93 5.92 2.08-2.08z"></path></svg>'
    },
    function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M4 6h4V2H1a1 1 0 00-1 1v16a1 1 0 00.28.68L4 16z" fill="#aecbfa"></path><path d="M14 16l3.72 3.72A1 1 0 0018 19v-7h-4z" fill="#4285f4"></path><path d="M19.71.28L16 4v4h4V1a1 1 0 00-.29-.72z" fill="#669df6"></path><path d="M16 4L19.72.28A1 1 0 0019 0h-7v4z" fill="#aecbfa"></path><path fill="#669df6" d="M0 20l4-4h10l4 4H0z"></path></svg>'
    },
    function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 17.5"><g fill-rule="evenodd"><path fill="#4285f4" d="M14.64 11.88l.74-1.25h3.53L20 8.75 17.82 5h-3.07l-1.06-1.86H12.5V1.88h1.94l1.06 1.87h1.59L14.9 0h-4.27v5h1.73l.73 1.25h-2.46v2.5h2.26l1.05-1.87h2.81l.72 1.25h-2.8L13.62 10h-2.99v4.38h3.4l-.72 1.25h-2.68v1.87h4.27l3.28-5.62h-2.09l-.73 1.25H12.5v-1.25h2.14z"></path><path fill="#669df6" d="M5.36 11.88l-.74-1.25H1.09L0 8.75 2.18 5h3.07l1.06-1.86H7.5V1.88H5.56L4.5 3.75H2.91L5.1 0h4.28v5H7.64l-.73 1.25h2.47v2.5H7.11L6.06 6.88H3.25l-.72 1.25h2.8L6.38 10h3v4.38H5.97l.72 1.25h2.69v1.87H5.1l-3.28-5.62h2.09l.73 1.25H7.5v-1.25H5.36z"></path></g></svg>'
    },
    function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.67 13.33H16v5.34h2.67zm-5.34-8h-2.66v13.34h2.66zm8-5.33H2.67A2.66 2.66 0 000 2.66v18.67A2.66 2.66 0 002.66 24h18.67A2.66 2.66 0 0024 21.34V2.67A2.66 2.66 0 0021.34 0zm0 21.33H2.67V2.67h18.66zM8 9.33H5.33v9.34H8z" fill="#4285f4"></path></svg>'
    },
    function (e, t) {
      e.exports =
        '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="#1A73E8" fill-rule="nonzero"><path d="M17.792 15.182l1.064-1.818h4.09L24 11.545l-2.741-4.727H16.99l-1.234-2.182h-1.212V3.182h2.061l1.234 2.182h2.575L17.885 1h-5.158v6.182h2.19l.848 1.454h-3.038v2.91h2.762l1.26-2.182h3.39l.841 1.454h-3.39L16.328 13h-3.602v5.455h4.544l-.84 1.454h-3.704v2.182h5.158l4.217-7.273H19.69l-1.063 1.818h-4.082v-1.454zM6.208 15.182l-1.064-1.818h-4.09L0 11.545l2.741-4.727H7.01l1.234-2.182h1.212V3.182H7.394L6.16 5.364H3.585L6.115 1h5.158v6.182h-2.19l-.848 1.454h3.038v2.91H8.51L7.25 9.363H3.86l-.841 1.454h3.39L7.672 13h3.602v5.455H6.729l.84 1.454h3.704v2.182H6.115l-4.217-7.273H4.31l1.063 1.818h4.082v-1.454z"></path></g></svg>'
    },
    function (e, t) {
      e.exports =
        '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.157 11.972l2.154-2.159a5.792 5.792 0 00-.058-8.12 5.76 5.76 0 00-8.1-.056L12 3.795 9.846 1.636a5.76 5.76 0 00-8.1.058 5.792 5.792 0 00-.057 8.12l2.154 2.158-2.154 2.159a5.79 5.79 0 00-1.492 5.584 5.775 5.775 0 004.078 4.088 5.759 5.759 0 005.571-1.496L12 20.148l2.154 2.159a5.759 5.759 0 005.57 1.496 5.775 5.775 0 004.08-4.088 5.79 5.79 0 00-1.493-5.584l-2.154-2.159zM12 15.804a3.818 3.818 0 01-2.703-1.123 3.836 3.836 0 010-5.419 3.817 3.817 0 015.406 0 3.836 3.836 0 010 5.42A3.818 3.818 0 0112 15.803zm3.738-12.578a3.522 3.522 0 014.95.04 3.542 3.542 0 01.039 4.96l-2.154 2.157-4.988-5 2.153-2.157zM3.274 8.225a3.542 3.542 0 01.04-4.96 3.522 3.522 0 014.949-.04l2.153 2.159-4.99 5-2.152-2.16zm4.989 12.493a3.522 3.522 0 01-3.429.96 3.532 3.532 0 01-2.517-2.523 3.541 3.541 0 01.957-3.437l2.154-2.158 4.988 5-2.153 2.158zm12.464 0a3.522 3.522 0 01-4.989 0l-2.153-2.158 4.988-5 2.154 2.16a3.542 3.542 0 010 4.999v-.001z" fill="#1A73E8" fill-rule="nonzero"></path></svg>'
    },
    function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 181 28"><path fill="#EA4335" d="M21.9 7.4h1l2.9-2.8.1-1.2C20.5-1.3 12.4-.8 7.8 4.5 6.5 6 5.5 7.7 5 9.6c.3-.1.7-.2 1-.1l5.7-.9s.3-.5.4-.4c2.6-2.8 6.8-3.2 9.8-.8z"></path><path fill="#4285F4" d="M29.8 9.6c-.7-2.4-2-4.6-3.9-6.2l-4 4c1.7 1.4 2.7 3.5 2.6 5.6v.7c2 0 3.6 1.6 3.6 3.6s-1.6 3.6-3.6 3.6h-7.1l-.7.7v4.3l.7.7h7.1c5.1 0 9.3-4.1 9.3-9.2.1-3.2-1.5-6.1-4-7.8z"></path><path fill="#34A853" d="M10.2 26.5h7.1v-5.7h-7.1c-.5 0-1-.1-1.5-.3l-1 .3-2.9 2.8-.2 1c1.7 1.2 3.6 1.9 5.6 1.9z"></path><path fill="#FBBC05" d="M10.2 8C5.1 8 1 12.2 1 17.3c0 2.9 1.4 5.5 3.6 7.3l4.1-4.1C7 19.7 6.2 17.6 7 15.8s2.9-2.6 4.7-1.8c.8.4 1.4 1 1.8 1.8l4.1-4.1C15.9 9.3 13.1 8 10.2 8z"></path><path fill="#5F6368" d="M52.8 22.5c-2.5 0-4.9-.9-6.6-2.7-1.8-1.7-2.8-4.1-2.8-6.5 0-2.5 1-4.8 2.8-6.5C47.9 5 50.3 4 52.8 4c2.4 0 4.6.9 6.3 2.6l-1.8 1.8c-1.2-1.2-2.9-1.8-4.5-1.8-1.8 0-3.5.7-4.7 2-1.3 1.3-2 3-1.9 4.8 0 1.8.7 3.5 1.9 4.7 2.6 2.6 6.7 2.6 9.4.1.8-.9 1.3-2 1.4-3.1h-6v-2.6h8.5c.1.5.1 1 .1 1.6.1 2.2-.7 4.3-2.2 5.9-1.8 1.6-4.1 2.6-6.5 2.5zm19.7-1.7c-2.4 2.3-6.1 2.3-8.5 0-1.1-1.1-1.8-2.7-1.7-4.2 0-1.6.6-3.1 1.7-4.2 2.4-2.3 6.1-2.3 8.5 0 1.1 1.1 1.8 2.7 1.7 4.2.1 1.6-.5 3.1-1.7 4.2zm-6.6-1.7c1.2 1.3 3.3 1.4 4.6.2.1 0 .1-.1.2-.2.7-.7 1-1.6 1-2.6s-.3-1.9-1-2.6c-1.3-1.3-3.3-1.4-4.7-.1l-.1.1c-.7.7-1 1.6-1 2.6s.3 2 1 2.6zm19.7 1.7c-2.4 2.3-6.1 2.3-8.5 0-1.1-1.1-1.8-2.7-1.7-4.2 0-1.6.6-3.1 1.7-4.2 2.4-2.3 6.1-2.3 8.5 0 1.1 1.1 1.8 2.7 1.7 4.2 0 1.6-.6 3.1-1.7 4.2zM79 19.1c1.2 1.3 3.3 1.4 4.6.2.1 0 .1-.1.2-.2.7-.7 1-1.6 1-2.6s-.3-1.9-1-2.6c-1.3-1.3-3.3-1.4-4.7-.1l-.1.1c-.7.7-1 1.6-1 2.6-.1 1 .3 2 1 2.6zm15.1 8.7c-1.2 0-2.4-.3-3.3-1.1-.8-.6-1.5-1.5-1.9-2.5l2.3-1c.2.6.6 1.1 1.1 1.5.5.4 1.2.6 1.9.6.9.1 1.7-.3 2.3-.9.6-.7.9-1.7.8-2.6v-.9h-.1c-.8.9-1.9 1.4-3.1 1.4-1.5 0-3-.6-4-1.7-1.1-1.1-1.7-2.6-1.7-4.2s.6-3.1 1.7-4.2c1-1.1 2.5-1.8 4-1.8.6 0 1.3.1 1.8.4.5.2.9.5 1.3.9h.1V11h2.5v10.6c.1 1.7-.4 3.4-1.6 4.6-1.1 1.1-2.6 1.7-4.1 1.6zm.2-7.6c.9 0 1.7-.3 2.3-1 .6-.7.9-1.6.9-2.6s-.3-1.9-.9-2.6c-.6-.7-1.4-1-2.3-1-.9 0-1.7.3-2.3 1-.7.7-1 1.6-1 2.6s.3 1.9 1 2.6c.5.6 1.4 1 2.3 1zm9.9-15.5v17.5h-2.6V4.7h2.6zm7.1 17.8c-1.6 0-3.1-.6-4.2-1.7s-1.7-2.7-1.7-4.2c-.1-1.6.5-3.1 1.6-4.3 1-1.1 2.5-1.7 4-1.7.7 0 1.4.1 2 .4.6.2 1.1.6 1.5 1 .4.4.7.8 1 1.2l.6 1.2.3.7-8 3.3c.5 1.1 1.6 1.9 2.9 1.8 1.2 0 2.3-.6 2.9-1.6l2 1.4c-.5.7-1.2 1.3-1.9 1.8-.8.4-1.9.7-3 .7zm-3.3-6.1l5.3-2.2c-.2-.4-.5-.7-.8-.9-.4-.2-.9-.4-1.4-.4-.8 0-1.6.4-2.2.9-.6.7-1 1.6-.9 2.6zm22.1 6.1c-4.6.1-8.3-3.5-8.4-8.1v-.3c-.1-4.5 3.5-8.3 8-8.4h.3c2.3-.1 4.5.9 5.9 2.6l-1.4 1.4c-1.1-1.4-2.7-2.1-4.5-2.1-1.7 0-3.3.6-4.4 1.8-1.2 1.2-1.9 2.9-1.8 4.7-.1 1.7.6 3.4 1.8 4.7 1.2 1.2 2.8 1.8 4.4 1.8 1.9 0 3.8-.8 5-2.3l1.4 1.4c-.8.9-1.7 1.6-2.8 2.1-.9.5-2.2.7-3.5.7zm10.3-.4h-2.1V6h2.1v16.1zm3.4-9.7c2.3-2.2 5.9-2.2 8.2 0 1.1 1.1 1.6 2.6 1.6 4.2s-.5 3.1-1.6 4.2c-2.3 2.2-5.9 2.2-8.2 0-1.1-1.1-1.6-2.6-1.6-4.2 0-1.5.6-3 1.6-4.2zm1.6 7.1c1.3 1.4 3.5 1.5 4.9.1l.1-.1c.7-.8 1.1-1.8 1.1-2.9 0-1.1-.3-2.1-1.1-2.9-1.3-1.4-3.5-1.5-4.9-.1l-.1.1c-.7.8-1.1 1.8-1.1 2.9 0 1.1.3 2.1 1.1 2.9zm19.7 2.6h-2v-1.5h-.1c-.4.6-.9 1.1-1.5 1.4-.6.4-1.3.6-2.1.5-1.2.1-2.3-.4-3.1-1.3-.8-1-1.1-2.2-1.1-3.4V11h2.1v6.4c0 2.1.9 3.1 2.7 3.1.8 0 1.6-.3 2.1-1s.8-1.5.8-2.4V11h2.1v11.1zm7 .4c-1.4 0-2.8-.6-3.7-1.7-1-1.1-1.6-2.6-1.6-4.2 0-1.5.5-3 1.6-4.2.9-1.1 2.3-1.7 3.7-1.7.8 0 1.6.2 2.3.5.6.3 1.1.8 1.5 1.4h.1l-.1-1.5V6h2.1v16.1h-2v-1.5h-.1c-.4.6-.9 1-1.5 1.4-.8.3-1.5.5-2.3.5zm.3-1.9c.9 0 1.9-.4 2.5-1.1.7-.8 1.1-1.8 1-2.9.1-1.1-.3-2.1-1-2.9-1.3-1.4-3.4-1.5-4.8-.2-.1.1-.2.1-.2.2-.7.8-1.1 1.8-1 2.9-.1 1.1.3 2.1 1 2.9.7.7 1.6 1.1 2.5 1.1z"></path></svg>'
    },
    function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg"><path d="M6.918 0L26 15.221 6.19 30l4.939-14.779L6.919 0zm4.225 5l1.489 7.5h7.178L11.143 5zM0 1.305c.82-.203 1.46.156 1.948 1.044C3.38 5.03 5.217 9.332 7.428 15.271L.404 30 0 27.74l3.923-12.47L0 1.306z" fill="#4285F4"></path></svg>'
    },
    function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32.79 26.39"><path d="M20.8 7.27h1l2.85-2.85.14-1.21A12.81 12.81 0 006.71 4.33 12.93 12.93 0 004 9.46a1.5 1.5 0 011-.06l5.7-.94s.29-.48.44-.45a7.1 7.1 0 019.73-.74z" fill="#ea4335"></path><path d="M28.71 9.46a12.77 12.77 0 00-3.87-6.24l-4 4a7.08 7.08 0 012.61 5.64v.71a3.56 3.56 0 110 7.12h-7.12l-.71.72v4.27l.71.71h7.12a9.26 9.26 0 005.26-16.93z" fill="#4285f4"></path><path d="M9.2 26.35h7.12v-5.7H9.2a3.61 3.61 0 01-1.47-.32l-1 .31-2.87 2.85-.25 1a9.32 9.32 0 005.59 1.86z" fill="#34a853"></path><path d="M9.2 7.86a9.26 9.26 0 00-5.59 16.6l4.13-4.13a3.56 3.56 0 012.94-6.49 3.49 3.49 0 011.77 1.78l4.13-4.13A9.22 9.22 0 009.2 7.86z" fill="#fbbc05"></path></svg>'
    },
    function (e, t) {
      e.exports =
        '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="#1A73E8" fill-rule="nonzero"><path d="M18.025 5.353h.064c.26.053.464.257.517.517v11.972a.663.663 0 01-.517.517H6.13a.663.663 0 01-.53-.512V5.883a.663.663 0 01.517-.516h11.908v-.014zm.549-5.34h-2.57v2.844h-2.326V0h-2.592v2.857H8.219V0H5.646v2.921A3.154 3.154 0 003.168 5.4H0v2.569h3.109v2.89H0v2.568h3.109v2.327H0v2.57h3.168A3.154 3.154 0 005.646 20.8V24h2.569v-3.136h2.87v3.131h2.57v-3.131h2.327v3.131h2.569v-3.2a3.154 3.154 0 002.478-2.477h2.948v-2.56h-2.862V13.43H24v-2.574h-2.885V7.973H24V5.399h-2.949a3.154 3.154 0 00-2.477-2.478V0v.014z"></path><path d="M12.973 6.742v4.218h2.311l-4.12 5.724v-4.266H8.73z"></path></g></svg>'
    },
    function (e, t) {
      e.exports =
        '<svg viewBox="0 0 24 27" xmlns="http://www.w3.org/2000/svg"><g fill="#4285F4"><path d="M11.703 18.994l4.756-2.743v-5.487l-1.6-.922-4.756 8.23zm-4.756-8.23v5.487l1.6.921 4.755-8.23-1.6-.922z"></path><path d="M10.768 20.623l-5.7-3.288v-6.571L0 7.836v12.427l10.768 6.216zM6 9.144l5.703-3.293 5.703 3.293L22.48 6.22 11.703 0 .926 6.22zm12.333 1.62v6.571l-5.695 3.288v5.856l10.768-6.216V7.84z"></path></g></svg>'
    },
    function (e, t) {
      e.exports =
        '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="#1A73E8" fill-rule="nonzero"><path d="M10.997.571C5.239.571.57 5.24.57 10.997S5.24 21.422 10.997 21.422c5.757 0 10.425-4.667 10.425-10.425C21.422 5.24 16.754.571 10.997.571m0 18.336a7.91 7.91 0 110-15.82 7.91 7.91 0 010 15.82"></path><path d="M6.048 10.594v3.24a5.75 5.75 0 001.97 2.012v-5.252h-1.97zM9.952 7.863v8.724a5.7 5.7 0 001.029.1 5.7 5.7 0 00.94-.086V7.863H9.953zM14.038 11.941v3.848a5.747 5.747 0 001.97-2.112V11.94h-1.97zM18.499 17.419l-1.08 1.08c-.19.19-.19.5 0 .691l4.096 4.096c.19.19.501.19.691 0l1.08-1.08a.49.49 0 000-.69l-4.097-4.097a.49.49 0 00-.69 0"></path></g></svg>'
    },
    function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path fill="#FFF" d="M0 0h40v32H0z"></path><path d="M39.25 5H14.52a.646.646 0 00-.645.647v4.329c0 .357.29.647.646.647H39.25c.356 0 .645-.29.645-.647V5.654A.648.648 0 0039.25 5zM16.972 9.284a1.409 1.409 0 01-1.406-1.411 1.408 1.408 0 112.813 0c0 .779-.63 1.41-1.407 1.41zm22.278 3.804H14.52a.646.646 0 00-.645.647v4.303c0 .358.29.647.646.647H39.25c.356 0 .645-.29.645-.647v-4.31a.646.646 0 00-.645-.64zm-22.278 4.303a1.409 1.409 0 01-1.406-1.41c0-.78.63-1.411 1.406-1.411a1.413 1.413 0 110 2.821zm22.368 3.747H14.637a.646.646 0 00-.645.647v4.329c0 .357.288.647.645.647H39.34c.356 0 .645-.29.645-.647v-4.336a.646.646 0 00-.645-.64zm-22.258 4.257a1.409 1.409 0 01-1.407-1.41 1.408 1.408 0 112.813 0c0 .779-.63 1.41-1.406 1.41zm-7.6-13.801H5.21a1.623 1.623 0 01-1.577-.744 1.635 1.635 0 010-1.748 1.624 1.624 0 011.577-.744h4.27c.626-.08 1.24.21 1.578.744a1.635 1.635 0 010 1.748 1.624 1.624 0 01-1.577.744zm0 5.901H1.83c-.625.08-1.24-.21-1.577-.744a1.635 1.635 0 010-1.748 1.624 1.624 0 011.577-.744h7.652c.625-.079 1.24.21 1.577.744a1.635 1.635 0 010 1.748 1.624 1.624 0 01-1.577.744zm0 5.907H5.21c-.625.08-1.24-.21-1.577-.743a1.635 1.635 0 010-1.748 1.624 1.624 0 011.577-.744h4.27c.626-.08 1.24.21 1.578.744a1.635 1.635 0 010 1.748 1.624 1.624 0 01-1.577.743z" fill="#4285F4" fill-rule="nonzero"></path></g></svg>'
    },
    function (e, t) {
      e.exports =
        '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="#1A73E8" fill-rule="nonzero"><path d="M23.05 3H.592A.587.587 0 000 3.582v3.85c0 .322.265.583.593.583h22.456c.327 0 .593-.26.593-.582V3.572A.588.588 0 0023.049 3zM2.836 6.784A1.266 1.266 0 011.56 5.529c0-.693.572-1.254 1.277-1.254.706 0 1.278.561 1.278 1.254 0 .333-.135.652-.374.887a1.29 1.29 0 01-.904.368zM23.05 10H.592a.587.587 0 00-.593.582v3.85c0 .322.265.583.593.583h22.456c.327 0 .593-.26.593-.582v-3.857a.588.588 0 00-.593-.576zM2.836 13.84a1.266 1.266 0 01-1.277-1.255c0-.693.572-1.255 1.277-1.255.706 0 1.278.562 1.278 1.255 0 .332-.135.651-.374.887a1.29 1.29 0 01-.904.367zM23.05 17H.592a.587.587 0 00-.593.582v3.85c0 .322.265.583.593.583h22.456c.327 0 .593-.26.593-.582v-3.857a.588.588 0 00-.593-.576zM2.836 20.784a1.266 1.266 0 01-1.277-1.255c0-.693.572-1.254 1.277-1.254.706 0 1.278.561 1.278 1.254 0 .334-.133.654-.373.89s-.565.37-.905.37v-.005z"></path></g></svg>'
    },
    function (e, t) {
      e.exports =
        '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3.193 6.386l4.449 4.45a1 1 0 001.414 0l1.78-1.78a1 1 0 000-1.414l-4.45-4.449a6.777 6.777 0 019.035 9.035l7.229 7.229a1 1 0 010 1.414l-1.78 1.779a1 1 0 01-1.413 0l-7.23-7.23a6.777 6.777 0 01-9.034-9.034z" fill="#1A73E8" fill-rule="evenodd"></path></svg>'
    },
    function (e, t) {
      e.exports =
        '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z"></path><path d="M18.875 11.994l4.763-4.763a1.192 1.192 0 000-1.687L18.444.35a1.192 1.192 0 00-1.687 0l-4.763 4.763L7.231.35a1.198 1.198 0 00-1.687 0L.35 5.544a1.192 1.192 0 000 1.687l4.763 4.763L.35 16.757a1.192 1.192 0 000 1.687l5.194 5.194a1.19 1.19 0 001.687 0l4.763-4.763 4.763 4.763c.24.24.538.347.85.347.31 0 .61-.12.85-.347l5.193-5.194a1.192 1.192 0 000-1.687l-4.775-4.763zM12.018 8.38a1.2 1.2 0 011.197 1.197 1.2 1.2 0 01-1.197 1.196 1.2 1.2 0 01-1.197-1.196 1.2 1.2 0 011.197-1.197zm-5.637 2.346L2.037 6.393 6.381 2.05l4.333 4.332-4.333 4.345zm3.244 2.44a1.2 1.2 0 01-1.197-1.196 1.2 1.2 0 011.197-1.197 1.2 1.2 0 011.196 1.197 1.2 1.2 0 01-1.196 1.197zm2.393 2.394a1.2 1.2 0 01-1.197-1.196 1.2 1.2 0 011.197-1.197 1.2 1.2 0 011.197 1.197 1.2 1.2 0 01-1.197 1.196zm2.393-4.787a1.2 1.2 0 011.197 1.197 1.2 1.2 0 01-1.197 1.197 1.2 1.2 0 01-1.196-1.197 1.2 1.2 0 011.196-1.197zm3.184 11.178l-4.344-4.332 4.344-4.345 4.332 4.333-4.332 4.344z" fill="#1A73E8" fill-rule="nonzero"></path></g></svg>'
    },
    function (e, t) {
      e.exports =
        '<svg viewBox="0 0 24 21" xmlns="http://www.w3.org/2000/svg"><g fill="#4285F4"><path d="M21.558 20.293L11.984 3.709 2.41 20.293l-1.607-.928L11.983 0l11.182 19.365z"></path><path d="M21.697 20.411l-9.713-9.718-9.714 9.718-1.315-1.307L11.984 8.061l11.03 11.043"></path><path d="M1.605 18.902h20.757v1.855H1.605"></path><path d="M.954 19.104l11.03-4.905 11.03 4.905.954 1.653h-1.804l-10.18-4.528-10.18 4.528H0z"></path></g></svg>'
    },
    function (e, t) {
      e.exports =
        '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="#1A73E8" fill-rule="nonzero"><path d="M12.44 19.084v-6.59h-1.263v6.59a2.472 2.472 0 101.263 0zm-.648 3.6a1.208 1.208 0 110-2.417 1.208 1.208 0 010 2.417zM18.764 16.002v-3.495h-1.263v3.495a2.472 2.472 0 101.263 0zm-.631 3.6a1.208 1.208 0 111.208-1.209 1.208 1.208 0 01-1.208 1.204v.005zM6.137 16.04v-3.537H4.874v3.499a2.472 2.472 0 103.103 2.387 2.4 2.4 0 00-1.84-2.35zm-.632 3.562a1.208 1.208 0 111.209-1.209 1.208 1.208 0 01-1.209 1.204v.005z"></path><path d="M19.063 3.336c-.497 0-.99.081-1.46.24a6.253 6.253 0 00-11.34.08 4.581 4.581 0 10-1.684 8.842h.29V9.113a1.364 1.364 0 111.264 0v3.39H17.5V9.134a1.364 1.364 0 111.263 0v3.369h.3a4.581 4.581 0 100-9.163v-.004zM12.44 7.197v5.301h-1.263v-5.3a1.364 1.364 0 111.263 0z"></path></g></svg>'
    },
    function (e, t) {
      e.exports =
        '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g transform="translate(0 1)" fill="#1A73E8" fill-rule="evenodd"><rect x="3" y="20" width="21" height="3" rx="1"></rect><rect x="3" y="15" width="21" height="3" rx="1"></rect><rect x="3" y="10" width="21" height="3" rx="1"></rect><rect width="24" height="2.88" rx="1"></rect><rect x="3" y="5" width="21" height="3" rx="1"></rect></g></svg>'
    },
    function (e, t) {
      e.exports =
        '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="#1A73E8" fill-rule="nonzero"><path d="M23.599 5H8.4C8.18 5 8 5.208 8 5.464v3.072c0 .256.18.464.401.464H23.6c.221 0 .401-.208.401-.464v-3.08c-.004-.253-.182-.456-.401-.456zM10.01 7.813c-.5 0-.905-.418-.905-.933 0-.515.405-.932.905-.932s.905.417.905.932a.947.947 0 01-.265.66.892.892 0 01-.64.273zM23.599 10H8.4c-.221 0-.401.208-.401.464v3.072c0 .256.18.464.401.464H23.6c.221 0 .401-.208.401-.464v-3.08c-.004-.253-.182-.456-.401-.456zM10.01 12.813c-.5 0-.905-.418-.905-.933 0-.515.405-.932.905-.932s.905.417.905.932a.947.947 0 01-.265.66.892.892 0 01-.64.273zM23.599 15H8.4c-.221 0-.401.208-.401.464v3.072c0 .256.18.464.401.464H23.6c.221 0 .401-.208.401-.464v-3.08c-.004-.253-.182-.456-.401-.456zM10.01 17.813c-.5 0-.905-.418-.905-.933 0-.515.405-.932.905-.932s.905.417.905.932a.947.947 0 01-.265.66.892.892 0 01-.64.273zM6.136 9.261H3.24c-.606 0-1.097-.477-1.097-1.065 0-.589.491-1.066 1.097-1.066h2.896c.605 0 1.097.477 1.097 1.066 0 .588-.492 1.065-1.097 1.065zM6.389 13.256H1.112C.498 13.256 0 12.779 0 12.19c0-.588.498-1.065 1.112-1.065h5.277c.614 0 1.112.477 1.112 1.065 0 .589-.498 1.066-1.112 1.066zM6.116 17.25H3.26a1.086 1.086 0 01-.966-.523 1.05 1.05 0 010-1.084c.2-.335.571-.535.966-.523h2.856c.395-.012.765.188.966.523.2.334.2.75 0 1.084a1.086 1.086 0 01-.966.523z"></path></g></svg>'
    },
    function (e, t) {
      e.exports =
        '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="#1A73E8" fill-rule="nonzero"><circle cx="12" cy="2.725" r="2.651"></circle><circle cx="12" cy="21.282" r="2.651"></circle><circle cx="2.722" cy="12.003" r="2.651"></circle><circle cx="21.278" cy="12.004" r="2.651"></circle><path d="M11.326 22.008L.366 11.146h18.638l-7.678-7.694 1.348-1.429 10.96 10.838H4.996l7.678 7.718z"></path><path d="M11.304 15.147h1.143v6.287h-1.143zM11.304 2.573h1.143V8.86h-1.143z"></path></g></svg>'
    },
    function (e, t) {
      e.exports =
        '<svg viewBox="0 0 18 22" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M-3-1h24v24H-3z"></path><path d="M9 0L0 4v6c0 5.555 3.835 10.735 9 12 5.165-1.265 9-6.445 9-12V4L9 0zM7 16l-4-4 1.415-1.415L7 13.17l6.585-6.585L15 8l-8 8z" fill="#1A73E8" fill-rule="nonzero"></path></g></svg>'
    },
    function (e, t) {
      e.exports =
        '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="#1A73E8" fill-rule="nonzero"><path d="M23.29 4.147H.69a.663.663 0 00-.662.662v4.673c0 .363.298.66.661.66H23.29a.663.663 0 00.662-.66V4.808a.663.663 0 00-.661-.661m-3.5 4.35c-.745 0-1.35-.608-1.351-1.353a1.35 1.35 0 011.351-1.35 1.353 1.353 0 010 2.704M23.29 13.129H.69a.664.664 0 00-.662.663v4.672c0 .363.298.661.661.661H23.29a.664.664 0 00.662-.661V13.79a.664.664 0 00-.661-.662m-3.5 4.35c-.745 0-1.35-.607-1.351-1.353a1.35 1.35 0 011.351-1.35 1.352 1.352 0 110 2.703"></path></g></svg>'
    },
    function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 66 44"><g fill="#0071c5" fill-rule="evenodd"><path d="M54 11h-3v15.38c0 1.8.76 3.37 3 3.62V11m-41 5h-3v10.29c0 1.85.76 3.46 3 3.71V16m-3-2h3v-3h-3zm24 16a3.67 3.67 0 01-4-3.82V13h3.42v3.64H36v2.74h-2.58V26a1.06 1.06 0 001.19 1.21H36V30h-2m9.16-11.16a2.58 2.58 0 00-2.43 1.42 3.65 3.65 0 00-.33 1.47h5.23c-.09-1.47-.75-2.89-2.49-2.89zm-2.76 5.23a2.83 2.83 0 003 3 3.82 3.82 0 003.12-1.29l2.09 2A6.63 6.63 0 0143.37 30C40.12 30 37 28.21 37 23c0-4.47 2.72-7 6.29-7S49 19 49 22.83v1.24zm-18.2-5.41c1 0 1.41.47 1.41 1.25V29H27v-9.11A3.65 3.65 0 0023 16h-7v13h3.39V18.66h2.81m35.59-6.55c0-.18-.1-.24-.35-.24h-.23v.52h.23c.25 0 .35-.08.35-.25zm.37 1.29h-.28a.08.08 0 01-.06 0l-.38-.65h-.17v.65a.07.07 0 01-.07.07h-.3s-.06 0-.06-.07v-1.69c0-.1 0-.14.11-.15h.46c.47 0 .75.14.75.57a.46.46 0 01-.34.48l.39.67a.43.43 0 000 .05.06.06 0 01-.05.07zm-.66-2.15a1.25 1.25 0 101.24 1.25 1.24 1.24 0 00-1.24-1.25zm0 2.75a1.5 1.5 0 01-1.5-1.5 1.5 1.5 0 111.5 1.5z"></path><path d="M65.71 12.5C62.61-2.77 33.29-3.74 14.39 7.89v1.29c18.88-9.81 45.66-9.75 48.1 4.31.81 4.65-1.78 9.5-6.41 12.29v3.65c5.57-2.07 11.29-8.75 9.63-16.93zM31.35 39.22c-13 1.22-26.63-.7-28.54-11-.93-5.08 1.36-10.47 4.4-13.81v-1.79C1.74 17.47-1.23 23.6.48 30.85c2.18 9.3 13.85 14.57 31.66 12.82 7-.7 16.26-3 22.67-6.54v-5.06c-5.82 3.5-15.44 6.4-23.46 7.15z"></path><path d="M54 11h-3v15.38c0 1.8.76 3.37 3 3.62V11m-41 5h-3v10.29c0 1.85.76 3.46 3 3.71V16m-3-2h3v-3h-3zm24 16a3.67 3.67 0 01-4-3.82V13h3.42v3.64H36v2.74h-2.58V26a1.06 1.06 0 001.19 1.21H36V30h-2m9.16-11.16a2.58 2.58 0 00-2.43 1.42 3.65 3.65 0 00-.33 1.47h5.23c-.09-1.47-.75-2.89-2.49-2.89zm-2.76 5.23a2.83 2.83 0 003 3 3.82 3.82 0 003.12-1.29l2.09 2A6.63 6.63 0 0143.37 30C40.12 30 37 28.21 37 23c0-4.47 2.72-7 6.29-7S49 19 49 22.83v1.24zm-18.2-5.41c1 0 1.41.47 1.41 1.25V29H27v-9.11A3.65 3.65 0 0023 16h-7v13h3.39V18.66h2.81m35.59-6.55c0-.18-.1-.24-.35-.24h-.23v.52h.23c.25 0 .35-.08.35-.25zm.37 1.29h-.28a.08.08 0 01-.06 0l-.38-.65h-.17v.65a.07.07 0 01-.07.07h-.3s-.06 0-.06-.07v-1.69c0-.1 0-.14.11-.15h.46c.47 0 .75.14.75.57a.46.46 0 01-.34.48l.39.67a.43.43 0 000 .05.06.06 0 01-.05.07zm-.66-2.15a1.25 1.25 0 101.24 1.25 1.24 1.24 0 00-1.24-1.25zm0 2.75a1.5 1.5 0 01-1.5-1.5 1.5 1.5 0 111.5 1.5z"></path></g></svg>'
    },
    function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50.71 50.71"><path d="M50.71.71L50 0l-7.33 7.33A25 25 0 007.33 42.67L0 50l.71.71L8 43.38A25 25 0 0043.38 8zM3.35 25.35A22 22 0 0140.54 9.46L9.46 40.54a21.91 21.91 0 01-6.11-15.19zm44 0a22 22 0 01-37.18 15.9l31.08-31.08a21.89 21.89 0 016.1 15.18z"></path></svg>'
    },
    function (e, t) {
      e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50.71 50.71"><path d="M25.35.35a25 25 0 11-25 25 25 25 0 0125-25z" fill-rule="evenodd"></path></svg>'
    },
    function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50.71 50.71"><g fill-rule="evenodd"><path d="M40.11 5.18c-.36-.27-.73-.52-1.11-.77L4.41 39c.25.38.5.75.77 1.11zM35 2.28c-.44-.18-.9-.35-1.36-.52L1.76 33.64c.17.46.34.92.52 1.36zM37.68 3.61c-.4-.23-.81-.45-1.22-.66L3 36.46c.21.41.43.82.66 1.22zM32 1.26c-.5-.14-1-.27-1.51-.37L.89 30.52c.11.51.23 1 .37 1.51zM14.44 2.85a25.14 25.14 0 00-5.71 3.83L6.68 8.73a25.08 25.08 0 00-3.83 5.7zM20.46.83a25.77 25.77 0 00-2.52.63L1.46 17.94a25.77 25.77 0 00-.63 2.52zM28.71.58C28.14.5 27.57.45 27 .41L.41 27c0 .57.09 1.14.17 1.71zM50.35 25.35v-.28L25.07 50.34h.28c.55 0 1.1 0 1.65-.06L50.29 27c.03-.55.06-1.1.06-1.65zM24.93.36c-.67 0-1.33 0-2 .11L.47 22.94c-.07.66-.1 1.32-.11 2zM42.3 7c-.32-.3-.65-.59-1-.88L6.1 41.3c.29.35.58.68.88 1zM50.24 23.05c-.05-.56-.12-1.12-.21-1.67L21.38 50c.55.09 1.11.16 1.67.21zM49.68 19.61c-.12-.5-.25-1-.4-1.49L18.12 49.28c.49.15 1 .28 1.49.4zM49.51 31.78a23.57 23.57 0 00.49-2.39L29.39 50a23.57 23.57 0 002.39-.51zM44.27 9c-.29-.34-.59-.67-.9-1L8 43.37c.31.31.64.61 1 .9zM46.29 39a25.18 25.18 0 002.13-4L35 48.42a25.62 25.62 0 004-2.13zM46 11.28c-.25-.37-.52-.74-.79-1.09l-35 35c.35.27.72.54 1.09.79zM47.51 13.78c-.22-.41-.44-.81-.67-1.21L12.57 46.84l1.21.67zM48.75 16.54c-.17-.45-.36-.89-.55-1.33l-33 33c.44.19.88.38 1.33.55z"></path></g></svg>'
    },
    function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 40.09"><path d="M5.47 15h.28v.28a.11.11 0 00.11.11.1.1 0 00.1-.11V15h.28c.06 0 .1 0 .1-.1a.09.09 0 00-.1-.1H6v-.28a.11.11 0 00-.11-.11.1.1 0 00-.1.11v.28h-.31a.1.1 0 00-.11.1.1.1 0 00.1.1zM26.22 1.68h.28V2a.11.11 0 00.11.1.11.11 0 00.1-.1v-.32H27a.1.1 0 00.1-.11.1.1 0 00-.1-.1h-.28v-.28a.09.09 0 00-.1-.1.1.1 0 00-.11.1v.28h-.28a.11.11 0 00-.1.1.11.11 0 00.09.11z"></path><circle cx="10.91" cy="6.14" r=".27"></circle><path d="M27.15 10.76a.27.27 0 00-.27-.27.27.27 0 00-.27.27.27.27 0 10.54 0zM25.43 4.61l-1.68 1c-.53.33-1.15.76-1.87 1.25l-1.11.81-.6.44-.61.49c-.41.34-.85.68-1.28 1.06L17 10.84l-1.34 1.31-1.35 1.4-1.34 1.5-1.31 1.58c-.84 1.09-1.68 2.21-2.46 3.37l-.59.87c-.19.29-.38.58-.56.87-.38.58-.73 1.17-1.09 1.76s-.67 1.19-1 1.77S5.28 26.44 5 27c-.59 1.16-1.13 2.3-1.61 3.39s-.92 2.15-1.29 3.11A54 54 0 000 40.07s.21-.66.63-1.78c.22-.57.48-1.25.8-2s.7-1.63 1.15-2.56.93-1.93 1.49-3 1.18-2.12 1.83-3.21c.33-.56.69-1.09 1-1.66s.72-1.11 1.11-1.65.77-1.1 1.18-1.64c.2-.27.4-.55.61-.82l.63-.8c.85-1.06 1.75-2.08 2.63-3.06l1.37-1.43 1.38-1.34 1.39-1.24 1.36-1.13 1.33-1c.43-.32.87-.61 1.27-.9l.6-.42.6-.37c.38-.24.74-.48 1.09-.69.7-.39 1.3-.75 1.82-1L27 7.54h.07l.1-.06a1.64 1.64 0 00.38-2.31 1.67 1.67 0 00-2.12-.56zM2.52 23.34a.28.28 0 00.28-.27.27.27 0 00-.27-.27.28.28 0 00-.28.27.27.27 0 00.27.27zM11.89 11a.41.41 0 10-.41-.41.41.41 0 00.41.41zM22.35.54a.27.27 0 10-.27-.27.27.27 0 00.27.27zM32.16 2.33a.27.27 0 10-.27-.27.27.27 0 00.27.27zM30.67 5.31a.41.41 0 00.41-.41.41.41 0 00-.41-.41.41.41 0 00-.41.41.41.41 0 00.41.41zM17.9 6.08h.56v.56a.22.22 0 00.27.15.28.28 0 00.15-.15v-.56h.55a.21.21 0 00.14-.27.23.23 0 00-.14-.15h-.56v-.55A.21.21 0 0018.6 5a.21.21 0 00-.14.15v.55h-.56a.22.22 0 00-.14.27.2.2 0 00.14.11zM31.9 8.53h.44v.41a.15.15 0 00.13.16.15.15 0 00.17-.1v-.47H33a.15.15 0 00.14-.16.17.17 0 00-.14-.14h-.4v-.4a.15.15 0 00-.15-.15.15.15 0 00-.15.15v.4h-.41a.15.15 0 00-.16.14.14.14 0 00.17.16zM18.64 21.2a6.22 6.22 0 00-3.5 3.5v14.07h.25a6.31 6.31 0 003.49-3.5v-3.63h7.58V28.3h-7.58v-3.76h8.9V21.2zM42.52 23a7 7 0 00-5.06-1.83H34a6.26 6.26 0 00-3.5 3.5v14.1h6.93a7 7 0 005.06-1.84c2.16-2.15 1.94-4.95 1.94-7.83s.25-3.91-1.91-6.1zm-2.61 11.25a3.33 3.33 0 01-2.8 1.19h-2.83V24.55h2.83a3.35 3.35 0 012.8 1.19c.7.87.81.46.81 3.37s-.11 4.28-.81 5.14zM51.3 35.43V21.2h-.24a6.26 6.26 0 00-3.5 3.51v14.06h9.11A6 6 0 0060 35.44z"></path></svg>'
    },
    function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M22 16l-11 6.5v-13z" fill="#fff" class="inactive"></path><path d="M11 22.5h3v-13h-3zm7-13v13h3v-13z" fill="#fff" class="active"></path></svg>'
    },
    function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 62.25 62.25"><g class="default" fill="#fff"><path d="M31.12 0a31.13 31.13 0 1031.13 31.12A31.15 31.15 0 0031.12 0zm0 59.25a28.13 28.13 0 1128.13-28.13 28.12 28.12 0 01-28.13 28.13z"></path><path d="M27.5 37.88l11.25-6.75-11.25-6.76v13.51z"></path></g><path class="hover" opacity="0" d="M31.12 0a31.13 31.13 0 1031.13 31.12A31.15 31.15 0 0031.12 0zM27.5 37.88V24.37l11.25 6.75z" fill="#fff"></path></svg>'
    },
    function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 156 156"><g class="outline-group"><circle class="outline" cx="78" cy="78" r="76.5" fill="none" stroke-width="3" stroke="#fff"></circle><g opacity=".1"><path class="circle" d="M78 26.18A51.82 51.82 0 1126.18 78 51.88 51.88 0 0178 26.18m0-1A52.82 52.82 0 10130.82 78 52.82 52.82 0 0078 25.18z" fill="#fff"></path><path class="rect" fill="none" stroke="#fff" d="M25.25 25.25h105.5v105.5H25.25z"></path><path class="line" fill="none" stroke="#fff" d="M25.5 25.5l105 105M130.5 25.5l-105 105"></path></g></g><path class="arrow" d="M86.5 78l-15 9V69z" fill="#fff"></path></svg>'
    },
    function (e, t) {
      e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15"><path fill-rule="evenodd" d="M15 6H9V0H6v6H0v3h6v6h3V9h6V6z"></path></svg>'
    },
    function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17.01 11.03"><path fill="#fff" fill-rule="evenodd" d="M17.01 5.51L12 0v4.01H0v3h12v4.02l5.01-5.52z"></path></svg>'
    },
    function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80.5 80.5"><path class="rect" d="M.5.5H80V80H.5z" fill="none" stroke="#fff" stroke-miterlimit="10"></path><circle class="circle" cx="40.25" cy="40.25" r="39.75" fill="none" stroke="#fff" stroke-miterlimit="10"></circle><path class="line" fill="none" stroke="#fff" stroke-miterlimit="10" d="M79.9 79.9L.5.5M.5 79.9L79.9.5"></path></svg>'
    },
    function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g class="inactive" fill="#fff"><path d="M20.84 9.49l-3.34 3.34V9.5l-4.99 4h-3v5h2.32l-3.34 3.34.68.67 12.34-12.35-.67-.67zM17.5 22.5v-7.33l-4.06 4.07 4.06 3.26z"></path></g><g class="active"><path fill="#fff" fill-rule="evenodd" d="M9.51 13.5v5h3l4.99 4v-13l-4.99 4h-3z"></path><path d="M19.74 9.46v4a2.78 2.78 0 013 2.5 2.78 2.78 0 01-3 2.5v4a6.76 6.76 0 007-6.5 6.76 6.76 0 00-7-6.5z" fill="#fff" fill-rule="evenodd" opacity=".4"></path></g></svg>'
    },
    function (e, t) {
      e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 37 37"><path d="M0 0v37h37V0zm26 20h-6v6h-3v-6h-6v-3h6v-6h3v6h6z" fill-rule="evenodd"></path></svg>'
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (e, t, n) {
      var i = {
        "./default/default.fs.glsl": 556,
        "./default/default.vs.glsl": 557,
      }
      function r(e) {
        var t = o(e)
        return n(t)
      }
      function o(e) {
        if (!n.o(i, e)) {
          var t = new Error("Cannot find module '" + e + "'")
          throw ((t.code = "MODULE_NOT_FOUND"), t)
        }
        return i[e]
      }
      ;(r.keys = function () {
        return Object.keys(i)
      }),
        (r.resolve = o),
        (e.exports = r),
        (r.id = 555)
    },
    function (e, t) {
      e.exports =
        "#ifdef GL_ES\n\tprecision mediump float;\n#endif\n\nvarying vec2 vUV;\n\nuniform sampler2D uTexture;\t\n\nvoid main(void) {\n\tgl_FragColor = texture2D(uTexture, vUV);\n}"
    },
    function (e, t) {
      e.exports = "attribute vec3 aPos;\nattribute vec2 aUV0;\n\nvarying vec2 vUV;\n\nvoid main(void) {\n\tvUV = aUV0;\n\tgl_Position = vec4(aPos, 1.0);\n}"
    },
    function (e, t, n) {
      var i = {
        "./clouds/1k/back.jpeg": 559,
        "./clouds/1k/back.webp": 560,
        "./clouds/1k/bottom.jpeg": 561,
        "./clouds/1k/bottom.webp": 562,
        "./clouds/1k/front.jpeg": 563,
        "./clouds/1k/front.webp": 564,
        "./clouds/1k/left.jpeg": 565,
        "./clouds/1k/left.webp": 566,
        "./clouds/1k/right.jpeg": 567,
        "./clouds/1k/right.webp": 568,
        "./clouds/1k/top.jpeg": 569,
        "./clouds/1k/top.webp": 570,
        "./clouds/256/back.jpeg": 571,
        "./clouds/256/back.webp": 572,
        "./clouds/256/bottom.jpeg": 573,
        "./clouds/256/bottom.webp": 574,
        "./clouds/256/front.jpeg": 575,
        "./clouds/256/front.webp": 576,
        "./clouds/256/left.jpeg": 577,
        "./clouds/256/left.webp": 578,
        "./clouds/256/right.jpeg": 579,
        "./clouds/256/right.webp": 580,
        "./clouds/256/top.jpeg": 581,
        "./clouds/256/top.webp": 582,
        "./clouds/2k/back.jpeg": 583,
        "./clouds/2k/back.webp": 584,
        "./clouds/2k/bottom.jpeg": 585,
        "./clouds/2k/bottom.webp": 586,
        "./clouds/2k/front.jpeg": 587,
        "./clouds/2k/front.webp": 588,
        "./clouds/2k/left.jpeg": 589,
        "./clouds/2k/left.webp": 590,
        "./clouds/2k/right.jpeg": 591,
        "./clouds/2k/right.webp": 592,
        "./clouds/2k/top.jpeg": 593,
        "./clouds/2k/top.webp": 594,
        "./clouds/8k_earth_clouds.jpg": 595,
        "./earth/1k/back.jpeg": 596,
        "./earth/1k/back.webp": 597,
        "./earth/1k/bottom.jpeg": 598,
        "./earth/1k/bottom.webp": 599,
        "./earth/1k/front.jpeg": 600,
        "./earth/1k/front.webp": 601,
        "./earth/1k/left.jpeg": 602,
        "./earth/1k/left.webp": 603,
        "./earth/1k/right.jpeg": 604,
        "./earth/1k/right.webp": 605,
        "./earth/1k/top.jpeg": 606,
        "./earth/1k/top.webp": 607,
        "./earth/256/back.jpeg": 608,
        "./earth/256/back.webp": 609,
        "./earth/256/bottom.jpeg": 610,
        "./earth/256/bottom.webp": 611,
        "./earth/256/front.jpeg": 612,
        "./earth/256/front.webp": 613,
        "./earth/256/left.jpeg": 614,
        "./earth/256/left.webp": 615,
        "./earth/256/right.jpeg": 616,
        "./earth/256/right.webp": 617,
        "./earth/256/top.jpeg": 618,
        "./earth/256/top.webp": 619,
        "./earth/2k/back.jpeg": 620,
        "./earth/2k/back.webp": 621,
        "./earth/2k/bottom.jpeg": 622,
        "./earth/2k/bottom.webp": 623,
        "./earth/2k/front.jpeg": 624,
        "./earth/2k/front.webp": 625,
        "./earth/2k/left.jpeg": 626,
        "./earth/2k/left.webp": 627,
        "./earth/2k/right.jpeg": 628,
        "./earth/2k/right.webp": 629,
        "./earth/2k/top.jpeg": 630,
        "./earth/2k/top.webp": 631,
        "./earth/earth_8k.jpg": 632,
        "./moon/1k/back.jpeg": 633,
        "./moon/1k/back.webp": 634,
        "./moon/1k/bottom.jpeg": 635,
        "./moon/1k/bottom.webp": 636,
        "./moon/1k/front.jpeg": 637,
        "./moon/1k/front.webp": 638,
        "./moon/1k/left.jpeg": 639,
        "./moon/1k/left.webp": 640,
        "./moon/1k/right.jpeg": 641,
        "./moon/1k/right.webp": 642,
        "./moon/1k/top.jpeg": 643,
        "./moon/1k/top.webp": 644,
        "./moon/256/back.jpeg": 645,
        "./moon/256/back.webp": 646,
        "./moon/256/bottom.jpeg": 647,
        "./moon/256/bottom.webp": 648,
        "./moon/256/front.jpeg": 649,
        "./moon/256/front.webp": 650,
        "./moon/256/left.jpeg": 651,
        "./moon/256/left.webp": 652,
        "./moon/256/right.jpeg": 653,
        "./moon/256/right.webp": 654,
        "./moon/256/top.jpeg": 655,
        "./moon/256/top.webp": 656,
        "./moon/2k/back.jpeg": 657,
        "./moon/2k/back.webp": 658,
        "./moon/2k/bottom.jpeg": 659,
        "./moon/2k/bottom.webp": 660,
        "./moon/2k/front.jpeg": 661,
        "./moon/2k/front.webp": 662,
        "./moon/2k/left.jpeg": 663,
        "./moon/2k/left.webp": 664,
        "./moon/2k/right.jpeg": 665,
        "./moon/2k/right.webp": 666,
        "./moon/2k/top.jpeg": 667,
        "./moon/2k/top.webp": 668,
        "./moon/8k_moon.jpg": 669,
        "./moon/8k_moon.png": 670,
        "./water/1k/back.jpeg": 671,
        "./water/1k/back.webp": 672,
        "./water/1k/bottom.jpeg": 673,
        "./water/1k/bottom.webp": 674,
        "./water/1k/front.jpeg": 675,
        "./water/1k/front.webp": 676,
        "./water/1k/left.jpeg": 677,
        "./water/1k/left.webp": 678,
        "./water/1k/right.jpeg": 679,
        "./water/1k/right.webp": 680,
        "./water/1k/top.jpeg": 681,
        "./water/1k/top.webp": 682,
        "./water/256/back.jpeg": 683,
        "./water/256/back.webp": 684,
        "./water/256/bottom.jpeg": 685,
        "./water/256/bottom.webp": 686,
        "./water/256/front.jpeg": 687,
        "./water/256/front.webp": 688,
        "./water/256/left.jpeg": 689,
        "./water/256/left.webp": 690,
        "./water/256/right.jpeg": 691,
        "./water/256/right.webp": 692,
        "./water/256/top.jpeg": 693,
        "./water/256/top.webp": 694,
        "./water/2k/back.jpeg": 695,
        "./water/2k/back.webp": 696,
        "./water/2k/bottom.jpeg": 697,
        "./water/2k/bottom.webp": 698,
        "./water/2k/front.jpeg": 699,
        "./water/2k/front.webp": 700,
        "./water/2k/left.jpeg": 701,
        "./water/2k/left.webp": 702,
        "./water/2k/right.jpeg": 703,
        "./water/2k/right.webp": 704,
        "./water/2k/top.jpeg": 705,
        "./water/2k/top.webp": 706,
        "./water/water_8k.png": 707,
      }
      function r(e) {
        var t = o(e)
        return n(t)
      }
      function o(e) {
        if (!n.o(i, e)) {
          var t = new Error("Cannot find module '" + e + "'")
          throw ((t.code = "MODULE_NOT_FOUND"), t)
        }
        return i[e]
      }
      ;(r.keys = function () {
        return Object.keys(i)
      }),
        (r.resolve = o),
        (e.exports = r),
        (r.id = 558)
    },
    function (e, t, n) {
      e.exports = n.p + "version/1701338711315/image/back.8718ff8.jpeg"
    },
    function (e, t, n) {
      e.exports = n.p + "version/1701338711315/image/back.d1baf44.webp"
    },
    function (e, t, n) {
      e.exports = n.p + "version/1701338711315/image/bottom.75c7bcf.jpeg"
    },
    function (e, t, n) {
      e.exports = n.p + "version/1701338711315/image/bottom.bccd02e.webp"
    },
    function (e, t, n) {
      e.exports = n.p + "version/1701338711315/image/front.d354cf5.jpeg"
    },
    function (e, t, n) {
      e.exports = n.p + "version/1701338711315/image/front.3cd6539.webp"
    },
    function (e, t, n) {
      e.exports = n.p + "version/1701338711315/image/left.fe0a445.jpeg"
    },
    function (e, t, n) {
      e.exports = n.p + "version/1701338711315/image/left.e46593c.webp"
    },
    function (e, t, n) {
      e.exports = n.p + "version/1701338711315/image/right.7b3aa19.jpeg"
    },
    function (e, t, n) {
      e.exports = n.p + "version/1701338711315/image/right.7748e83.webp"
    },
    function (e, t, n) {
      e.exports = n.p + "version/1701338711315/image/top.2280bf2.jpeg"
    },
    function (e, t, n) {
      e.exports = n.p + "version/1701338711315/image/top.fc80b47.webp"
    },
    function (e, t, n) {
      e.exports = n.p + "version/1701338711315/image/back.4c65eb5.jpeg"
    },
    function (e, t, n) {
      e.exports = n.p + "version/1701338711315/image/back.f23357d.webp"
    },
    function (e, t, n) {
      e.exports = n.p + "version/1701338711315/image/bottom.db2a083.jpeg"
    },
    function (e, t, n) {
      e.exports = n.p + "version/1701338711315/image/bottom.5445209.webp"
    },
    function (e, t, n) {
      e.exports = n.p + "version/1701338711315/image/front.b9204a8.jpeg"
    },
    function (e, t, n) {
      e.exports = n.p + "version/1701338711315/image/front.98a984c.webp"
    },
    function (e, t, n) {
      e.exports = n.p + "version/1701338711315/image/left.4a2f0b2.jpeg"
    },
    function (e, t, n) {
      e.exports = n.p + "version/1701338711315/image/left.57dbd3b.webp"
    },
    function (e, t, n) {
      e.exports = n.p + "version/1701338711315/image/right.33613d3.jpeg"
    },
    function (e, t, n) {
      e.exports = n.p + "version/1701338711315/image/right.cf249d7.webp"
    },
    function (e, t, n) {
      e.exports = n.p + "version/1701338711315/image/top.dc5279a.jpeg"
    },
    function (e, t, n) {
      e.exports = n.p + "version/1701338711315/image/top.b1963e4.webp"
    },
    function (e, t, n) {
      e.exports = n.p + "version/1701338711315/image/back.3f77412.jpeg"
    },
    function (e, t, n) {
      e.exports = n.p + "version/1701338711315/image/back.3367d0d.webp"
    },
    function (e, t, n) {
      e.exports = n.p + "version/1701338711315/image/bottom.36dee83.jpeg"
    },
    function (e, t, n) {
      e.exports = n.p + "version/1701338711315/image/bottom.b6b9a05.webp"
    },
    function (e, t, n) {
      e.exports = n.p + "version/1701338711315/image/front.7999432.jpeg"
    },
    function (e, t, n) {
      e.exports = n.p + "version/1701338711315/image/front.1b8f303.webp"
    },
    function (e, t, n) {
      e.exports = n.p + "version/1701338711315/image/left.fde84b1.jpeg"
    },
    function (e, t, n) {
      e.exports = n.p + "version/1701338711315/image/left.cff9968.webp"
    },
    function (e, t, n) {
      e.exports = n.p + "version/1701338711315/image/right.51ebeb6.jpeg"
    },
    function (e, t, n) {
      e.exports = n.p + "version/1701338711315/image/right.394ce79.webp"
    },
    function (e, t, n) {
      e.exports = n.p + "version/1701338711315/image/top.c50b9a3.jpeg"
    },
    function (e, t, n) {
      e.exports = n.p + "version/1701338711315/image/top.f972ceb.webp"
    },
    function (e, t, n) {
      e.exports = n.p + "version/1701338711315/image/8k_earth_clouds.bb0ab69.jpg"
    },
    function (e, t, n) {
      e.exports = n.p + "version/1701338711315/image/back.06dae01.jpeg"
    },
    function (e, t, n) {
      e.exports = n.p + "version/1701338711315/image/back.97dee91.webp"
    },
    function (e, t, n) {
      e.exports = n.p + "version/1701338711315/image/bottom.3966f19.jpeg"
    },
    function (e, t, n) {
      e.exports = n.p + "version/1701338711315/image/bottom.d9c402e.webp"
    },
    function (e, t, n) {
      e.exports = n.p + "version/1701338711315/image/front.2cf3f3a.jpeg"
    },
    function (e, t, n) {
      e.exports = n.p + "version/1701338711315/image/front.e52d3c6.webp"
    },
    function (e, t, n) {
      e.exports = n.p + "version/1701338711315/image/left.8b69855.jpeg"
    },
    function (e, t, n) {
      e.exports = n.p + "version/1701338711315/image/left.54a0c6a.webp"
    },
    function (e, t, n) {
      e.exports = n.p + "version/1701338711315/image/right.20b8ef1.jpeg"
    },
    function (e, t, n) {
      e.exports = n.p + "version/1701338711315/image/right.4a8e249.webp"
    },
    function (e, t, n) {
      e.exports = n.p + "version/1701338711315/image/top.3da602a.jpeg"
    },
    function (e, t, n) {
      e.exports = n.p + "version/1701338711315/image/top.ace5b82.webp"
    },
    function (e, t, n) {
      e.exports = n.p + "version/1701338711315/image/back.ad389ee.jpeg"
    },
    function (e, t, n) {
      e.exports = n.p + "version/1701338711315/image/back.9e7ead8.webp"
    },
    function (e, t, n) {
      e.exports = n.p + "version/1701338711315/image/bottom.ccdaf71.jpeg"
    },
    function (e, t, n) {
      e.exports = n.p + "version/1701338711315/image/bottom.6662e54.webp"
    },
    function (e, t, n) {
      e.exports = n.p + "version/1701338711315/image/front.8e52f38.jpeg"
    },
    function (e, t, n) {
      e.exports = n.p + "version/1701338711315/image/front.b9fc82a.webp"
    },
    function (e, t, n) {
      e.exports = n.p + "version/1701338711315/image/left.5d43d79.jpeg"
    },
    function (e, t, n) {
      e.exports = n.p + "version/1701338711315/image/left.fb0199a.webp"
    },
    function (e, t, n) {
      e.exports = n.p + "version/1701338711315/image/right.4d5619b.jpeg"
    },
    function (e, t, n) {
      e.exports = n.p + "version/1701338711315/image/right.462ecc6.webp"
    },
    function (e, t, n) {
      e.exports = n.p + "version/1701338711315/image/top.51c00d9.jpeg"
    },
    function (e, t, n) {
      e.exports = n.p + "version/1701338711315/image/top.3bea056.webp"
    },
    function (e, t, n) {
      e.exports = n.p + "version/1701338711315/image/back.8df069a.jpeg"
    },
    function (e, t, n) {
      e.exports = n.p + "version/1701338711315/image/back.7621f50.webp"
    },
    function (e, t, n) {
      e.exports = n.p + "version/1701338711315/image/bottom.20f627a.jpeg"
    },
    function (e, t, n) {
      e.exports = n.p + "version/1701338711315/image/bottom.534639e.webp"
    },
    function (e, t, n) {
      e.exports = n.p + "version/1701338711315/image/front.fd9cf9f.jpeg"
    },
    function (e, t, n) {
      e.exports = n.p + "version/1701338711315/image/front.d894a9a.webp"
    },
    function (e, t, n) {
      e.exports = n.p + "version/1701338711315/image/left.3ed4793.jpeg"
    },
    function (e, t, n) {
      e.exports = n.p + "version/1701338711315/image/left.5d255f6.webp"
    },
    function (e, t, n) {
      e.exports = n.p + "version/1701338711315/image/right.27a8272.jpeg"
    },
    function (e, t, n) {
      e.exports = n.p + "version/1701338711315/image/right.2304ab7.webp"
    },
    function (e, t, n) {
      e.exports = n.p + "version/1701338711315/image/top.c8aca56.jpeg"
    },
    function (e, t, n) {
      e.exports = n.p + "version/1701338711315/image/top.af28243.webp"
    },
    function (e, t, n) {
      e.exports = n.p + "version/1701338711315/image/earth_8k.45680ab.jpg"
    },
    function (e, t, n) {
      e.exports = n.p + "version/1701338711315/image/back.c8bfe5d.jpeg"
    },
    function (e, t, n) {
      e.exports = n.p + "version/1701338711315/image/back.e2a7e7f.webp"
    },
    function (e, t, n) {
      e.exports = n.p + "version/1701338711315/image/bottom.61e51bb.jpeg"
    },
    function (e, t, n) {
      e.exports = n.p + "version/1701338711315/image/bottom.fb15366.webp"
    },
    function (e, t, n) {
      e.exports = n.p + "version/1701338711315/image/front.652f778.jpeg"
    },
    function (e, t, n) {
      e.exports = n.p + "version/1701338711315/image/front.518e6b6.webp"
    },
    function (e, t, n) {
      e.exports = n.p + "version/1701338711315/image/left.5bb700a.jpeg"
    },
    function (e, t, n) {
      e.exports = n.p + "version/1701338711315/image/left.d3088e2.webp"
    },
    function (e, t, n) {
      e.exports = n.p + "version/1701338711315/image/right.f10cf76.jpeg"
    },
    function (e, t, n) {
      e.exports = n.p + "version/1701338711315/image/right.d239605.webp"
    },
    function (e, t, n) {
      e.exports = n.p + "version/1701338711315/image/top.cc48751.jpeg"
    },
    function (e, t, n) {
      e.exports = n.p + "version/1701338711315/image/top.d85eb21.webp"
    },
    function (e, t, n) {
      e.exports = n.p + "version/1701338711315/image/back.c44a48b.jpeg"
    },
    function (e, t, n) {
      e.exports = n.p + "version/1701338711315/image/back.eef0db1.webp"
    },
    function (e, t, n) {
      e.exports = n.p + "version/1701338711315/image/bottom.ae02e2b.jpeg"
    },
    function (e, t, n) {
      e.exports = n.p + "version/1701338711315/image/bottom.2e69dc3.webp"
    },
    function (e, t, n) {
      e.exports = n.p + "version/1701338711315/image/front.f5d49aa.jpeg"
    },
    function (e, t, n) {
      e.exports = n.p + "version/1701338711315/image/front.1b17841.webp"
    },
    function (e, t, n) {
      e.exports = n.p + "version/1701338711315/image/left.0e6db13.jpeg"
    },
    function (e, t, n) {
      e.exports = n.p + "version/1701338711315/image/left.dac7d4f.webp"
    },
    function (e, t, n) {
      e.exports = n.p + "version/1701338711315/image/right.6eae052.jpeg"
    },
    function (e, t, n) {
      e.exports = n.p + "version/1701338711315/image/right.9773851.webp"
    },
    function (e, t, n) {
      e.exports = n.p + "version/1701338711315/image/top.8b5de7b.jpeg"
    },
    function (e, t, n) {
      e.exports = n.p + "version/1701338711315/image/top.0e315c8.webp"
    },
    function (e, t, n) {
      e.exports = n.p + "version/1701338711315/image/back.7701ff2.jpeg"
    },
    function (e, t, n) {
      e.exports = n.p + "version/1701338711315/image/back.b7e4a0e.webp"
    },
    function (e, t, n) {
      e.exports = n.p + "version/1701338711315/image/bottom.138bceb.jpeg"
    },
    function (e, t, n) {
      e.exports = n.p + "version/1701338711315/image/bottom.db6f8f3.webp"
    },
    function (e, t, n) {
      e.exports = n.p + "version/1701338711315/image/front.ef99a1e.jpeg"
    },
    function (e, t, n) {
      e.exports = n.p + "version/1701338711315/image/front.d587b90.webp"
    },
    function (e, t, n) {
      e.exports = n.p + "version/1701338711315/image/left.85c1169.jpeg"
    },
    function (e, t, n) {
      e.exports = n.p + "version/1701338711315/image/left.a57ba77.webp"
    },
    function (e, t, n) {
      e.exports = n.p + "version/1701338711315/image/right.cec3347.jpeg"
    },
    function (e, t, n) {
      e.exports = n.p + "version/1701338711315/image/right.2c61327.webp"
    },
    function (e, t, n) {
      e.exports = n.p + "version/1701338711315/image/top.e15d9cf.jpeg"
    },
    function (e, t, n) {
      e.exports = n.p + "version/1701338711315/image/top.91567ec.webp"
    },
    function (e, t, n) {
      e.exports = n.p + "version/1701338711315/image/8k_moon.c5d7b31.jpg"
    },
    function (e, t, n) {
      e.exports = n.p + "version/1701338711315/image/8k_moon.34d447a.png"
    },
    function (e, t, n) {
      e.exports = n.p + "version/1701338711315/image/back.a47c566.jpeg"
    },
    function (e, t, n) {
      e.exports = n.p + "version/1701338711315/image/back.71eb416.webp"
    },
    function (e, t, n) {
      e.exports = n.p + "version/1701338711315/image/bottom.e3e7e58.jpeg"
    },
    function (e, t, n) {
      e.exports = n.p + "version/1701338711315/image/bottom.af8f7b7.webp"
    },
    function (e, t, n) {
      e.exports = n.p + "version/1701338711315/image/front.fca0b1d.jpeg"
    },
    function (e, t, n) {
      e.exports = n.p + "version/1701338711315/image/front.9d57e00.webp"
    },
    function (e, t, n) {
      e.exports = n.p + "version/1701338711315/image/left.f245052.jpeg"
    },
    function (e, t, n) {
      e.exports = n.p + "version/1701338711315/image/left.a6d9b32.webp"
    },
    function (e, t, n) {
      e.exports = n.p + "version/1701338711315/image/right.41a6b67.jpeg"
    },
    function (e, t, n) {
      e.exports = n.p + "version/1701338711315/image/right.46ff5a3.webp"
    },
    function (e, t, n) {
      e.exports = n.p + "version/1701338711315/image/top.37424c1.jpeg"
    },
    function (e, t, n) {
      e.exports = n.p + "version/1701338711315/image/top.b0dabcd.webp"
    },
    function (e, t, n) {
      e.exports = n.p + "version/1701338711315/image/back.13b0d7d.jpeg"
    },
    function (e, t, n) {
      e.exports = n.p + "version/1701338711315/image/back.4723d11.webp"
    },
    function (e, t, n) {
      e.exports = n.p + "version/1701338711315/image/bottom.73c3b2f.jpeg"
    },
    function (e, t, n) {
      e.exports = n.p + "version/1701338711315/image/bottom.a2a48bf.webp"
    },
    function (e, t, n) {
      e.exports = n.p + "version/1701338711315/image/front.57c2cd7.jpeg"
    },
    function (e, t, n) {
      e.exports = n.p + "version/1701338711315/image/front.e35b657.webp"
    },
    function (e, t, n) {
      e.exports = n.p + "version/1701338711315/image/left.8c3bd20.jpeg"
    },
    function (e, t, n) {
      e.exports = n.p + "version/1701338711315/image/left.9a8b3eb.webp"
    },
    function (e, t, n) {
      e.exports = n.p + "version/1701338711315/image/right.bb086da.jpeg"
    },
    function (e, t, n) {
      e.exports = n.p + "version/1701338711315/image/right.4dbc899.webp"
    },
    function (e, t, n) {
      e.exports = n.p + "version/1701338711315/image/top.2c69a18.jpeg"
    },
    function (e, t, n) {
      e.exports = n.p + "version/1701338711315/image/top.3300302.webp"
    },
    function (e, t, n) {
      e.exports = n.p + "version/1701338711315/image/back.c5b1cd2.jpeg"
    },
    function (e, t, n) {
      e.exports = n.p + "version/1701338711315/image/back.3bfcfc0.webp"
    },
    function (e, t, n) {
      e.exports = n.p + "version/1701338711315/image/bottom.ef05695.jpeg"
    },
    function (e, t, n) {
      e.exports = n.p + "version/1701338711315/image/bottom.8062c66.webp"
    },
    function (e, t, n) {
      e.exports = n.p + "version/1701338711315/image/front.77685df.jpeg"
    },
    function (e, t, n) {
      e.exports = n.p + "version/1701338711315/image/front.8eff7ac.webp"
    },
    function (e, t, n) {
      e.exports = n.p + "version/1701338711315/image/left.8cf2f11.jpeg"
    },
    function (e, t, n) {
      e.exports = n.p + "version/1701338711315/image/left.25898ae.webp"
    },
    function (e, t, n) {
      e.exports = n.p + "version/1701338711315/image/right.4660c60.jpeg"
    },
    function (e, t, n) {
      e.exports = n.p + "version/1701338711315/image/right.89c9d46.webp"
    },
    function (e, t, n) {
      e.exports = n.p + "version/1701338711315/image/top.29a8870.jpeg"
    },
    function (e, t, n) {
      e.exports = n.p + "version/1701338711315/image/top.c2316da.webp"
    },
    function (e, t, n) {
      e.exports = n.p + "version/1701338711315/image/water_8k.4c68e2d.png"
    },
    function (e, t, n) {
      var i = {
        "./earth/earth.fs.glsl": 709,
        "./earth/earth.vs.glsl": 710,
        "./glow/glow.fs.glsl": 711,
        "./glow/glow.vs.glsl": 712,
        "./includes/simplex4d.glsl": 713,
        "./includes/visibility.glsl": 714,
        "./moon/moon.fs.glsl": 715,
        "./moon/moon.vs.glsl": 716,
        "./perlinCube/perlinCube.fs.glsl": 717,
        "./perlinCube/perlinCube.vs.glsl": 718,
        "./sunFlares/sunFlares.fs.glsl": 719,
        "./sunFlares/sunFlares.vs.glsl": 720,
        "./sunRays/sunRays.fs.glsl": 721,
        "./sunRays/sunRays.vs.glsl": 722,
        "./sunSphere/sunSphere.fs.glsl": 723,
        "./sunSphere/sunSphere.vs.glsl": 724,
      }
      function r(e) {
        var t = o(e)
        return n(t)
      }
      function o(e) {
        if (!n.o(i, e)) {
          var t = new Error("Cannot find module '" + e + "'")
          throw ((t.code = "MODULE_NOT_FOUND"), t)
        }
        return i[e]
      }
      ;(r.keys = function () {
        return Object.keys(i)
      }),
        (r.resolve = o),
        (e.exports = r),
        (r.id = 708)
    },
    function (e, t) {
      e.exports =
        "#ifdef GL_ES\n\tprecision highp float;\n#endif\n\n#include includes/visibility.glsl\n\nvarying vec3 vNormal;\nvarying vec3 vWorld;\n\nuniform samplerCube uTexture;\nuniform samplerCube uCloudsTexture;\nuniform samplerCube uWaterTexture;\nuniform vec3 uBackgroundColor;\nuniform vec3 uCamPos;\nuniform vec3 uBackgroundColor;\nuniform float uFresnelPower;\nuniform float uFresnelAmount;\nuniform float uWaterSunPower;\nuniform float uLandSunPower;\nuniform float uWaterSunAmount;\nuniform float uLandSunAmount;\nuniform vec3 uSunDir;\n\nuniform float uSpatialFrequency;\nuniform float uTemporalFrequency;\nuniform float uAmplitude;\nuniform float uH;\nuniform float uTime;\nuniform float uVisibility;\n\n#define m4  mat4( 0.00, 0.80, 0.60, -0.4, -0.80,  0.36, -0.48, -0.5, -0.60, -0.48, 0.64, 0.2, 0.40, 0.30, 0.20,0.4)\nvec4 twistedSineNoise(vec4 q)\n{\n\tfloat a = 1.;\n\tfloat f = 1.;\n\tvec4 sum = vec4(0);\n\tfor(int i = 0; i < 4 ; i++){\n\t\tq = m4 * q;\n\t\tvec4 s = sin( q.ywxz * f) * a;\n\t\tq += s;\n\t\tsum += s;\n\t\t//sum += max(s, 0.);\n\t\ta *= uH;\n\t\tf /= uH;\n\t\t//f *= 2.;\n\t}\n\treturn sum;\n}\n\nvoid main(void) {\n\n\tvec3 n = normalize(vNormal);\n\tvec3 v = normalize(uCamPos-vWorld);\n\tfloat fresnel = pow(1. - dot(n, v), uFresnelPower)* uFresnelAmount;\n\tvec3 c = textureCube(uTexture, n).xyz;\n//  c *= c;\n  float water = textureCube(uWaterTexture, n).x;\n  float sunReflection = max(dot(n, uSunDir), 0.);\n  float power = mix(uLandSunPower, uWaterSunPower, water);\n  float amount = mix(uLandSunAmount, uWaterSunAmount, water);\n  c += pow (sunReflection, power) * amount;\n\n\tvec3 n1 = n + twistedSineNoise(vec4(n * uSpatialFrequency, uTime * uTemporalFrequency)).xyz * uAmplitude;\n\tfloat clouds = textureCube(uCloudsTexture, n1).x;\n  //clouds *= clouds;\n\n\tc = mix(c, vec3(1,1,1), clouds);\n\n\tc = mix(c, uBackgroundColor, fresnel);\n\n/*  float nDotL = dot(n, l);\n  c *= max(nDotL, 0.);*/\n\n//  c = sqrt(c);\n\n  gl_FragColor.xyz = c;\n\n\tgl_FragColor.w = getAlpha(n);\n\n\t//premultiplied alpha\n\tgl_FragColor.xyz *= gl_FragColor.w;\n}\n"
    },
    function (e, t) {
      e.exports =
        "attribute vec3 aPos;\nattribute vec2 aUV0;\n\nvarying vec3 vWorld;\nvarying vec3 vNormal;\n\nuniform mat4 uModel;\nuniform mat4 uViewProjection;\n\nvoid main(void) {\n\tvec4 world = uModel * vec4(aPos , 1.);\n\n\tvWorld = world.xyz;\n\n\tvNormal = mat3(uModel) * aPos;\n\n\tgl_Position = uViewProjection * world;\n}\n"
    },
    function (e, t) {
      e.exports =
        "#ifdef GL_ES\n\tprecision highp float;\n#endif\n\n#include includes/visibility.glsl\n\nvarying float vRadial;\nvarying vec3 vWorld;\n\nuniform float uTint;\nuniform float uBrightness;\nuniform float uFalloffColor;\n\n vec3 brightnessToColor(float b)\n {\n \t  b *= uTint;\n    return (vec3(b, b * b, b*b*b * b)/ (uTint)) * uBrightness;\n }\n\nvoid main(void) {\n\n\tfloat alpha = (1. - vRadial);\n\talpha *= alpha;\n\tfloat brightness = 1. + alpha * uFalloffColor;\n\talpha *= getAlpha(normalize(vWorld));\n\n\tgl_FragColor.xyz = brightnessToColor(brightness) * alpha;\n\tgl_FragColor.w = alpha;\n}\n"
    },
    function (e, t) {
      e.exports =
        "attribute vec3 aPos;\n\nvarying float vRadial;\nvarying vec3 vWorld;\n\nuniform mat4 uViewProjection;\nuniform float uRadius;\n\nuniform vec3 uCamUp;\nuniform vec3 uCamPos;\n\nvoid main(void) {\n\tvRadial = aPos.z;\n\n\tvec3 side = normalize(cross(normalize(-uCamPos), uCamUp));\n\tvec3 p = aPos.x * side + aPos.y * uCamUp;\n\tp *= 1. + aPos.z * uRadius;\n\n\tvec4 world = vec4(p , 1.);\n\n\tvWorld = world.xyz;\n\n\tgl_Position = uViewProjection * world;\n}"
    },
    function (e, t) {
      e.exports =
        "//\n// Description : Array and textureless GLSL 2D/3D/4D simplex\n//               noise functions.\n//      Author : Ian McEwan, Ashima Arts.\n//  Maintainer : ijm\n//     Lastmod : 20110822 (ijm)\n//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.\n//               Distributed under the MIT License. See LICENSE file.\n//               https://github.com/ashima/webgl-noise\n//\n\nvec4 mod289(vec4 x) {\n\treturn x - floor(x * (1.0 / 289.0)) * 289.0; \n}\n\nfloat mod289(float x) {\n\treturn x - floor(x * (1.0 / 289.0)) * 289.0; \n}\n\nvec4 permute(vec4 x) {\n\t return mod289(((x*34.0)+1.0)*x);\n}\n\nfloat permute(float x) {\n\t return mod289(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt(vec4 r)\n{\n\treturn 1.79284291400159 - 0.85373472095314 * r;\n}\n\nfloat taylorInvSqrt(float r)\n{\n\treturn 1.79284291400159 - 0.85373472095314 * r;\n}\n\nvec4 grad4(float j, vec4 ip)\n{\n\tconst vec4 ones = vec4(1.0, 1.0, 1.0, -1.0);\n\tvec4 p,s;\n\n\tp.xyz = floor( fract (vec3(j) * ip.xyz) * 7.0) * ip.z - 1.0;\n\tp.w = 1.5 - dot(abs(p.xyz), ones.xyz);\n\ts = vec4(lessThan(p, vec4(0.0)));\n\tp.xyz = p.xyz + (s.xyz*2.0 - 1.0) * s.www;\n\n\treturn p;\n}\n\n// (sqrt(5) - 1)/4 = F4, used once below\n#define F4 0.309016994374947451\n\nfloat snoise(vec4 v)\n{\nconst vec4  C = vec4( 0.138196601125011,  // (5 - sqrt(5))/20  G4\n\t\t\t\t\t0.276393202250021,  // 2 * G4\n\t\t\t\t\t0.414589803375032,  // 3 * G4\n\t\t\t\t\t-0.447213595499958); // -1 + 4 * G4\n\n// First corner\n\tvec4 i  = floor(v + dot(v, vec4(F4)) );\n\tvec4 x0 = v -   i + dot(i, C.xxxx);\n\n// Other corners\n\n// Rank sorting originally contributed by Bill Licea-Kane, AMD (formerly ATI)\n\tvec4 i0;\n\tvec3 isX = step( x0.yzw, x0.xxx );\n\tvec3 isYZ = step( x0.zww, x0.yyz );\n//  i0.x = dot( isX, vec3( 1.0 ) );\n\ti0.x = isX.x + isX.y + isX.z;\n\ti0.yzw = 1.0 - isX;\n//  i0.y += dot( isYZ.xy, vec2( 1.0 ) );\n\ti0.y += isYZ.x + isYZ.y;\n\ti0.zw += 1.0 - isYZ.xy;\n\ti0.z += isYZ.z;\n\ti0.w += 1.0 - isYZ.z;\n\n\t// i0 now contains the unique values 0,1,2,3 in each channel\n\tvec4 i3 = clamp( i0, 0.0, 1.0 );\n\tvec4 i2 = clamp( i0-1.0, 0.0, 1.0 );\n\tvec4 i1 = clamp( i0-2.0, 0.0, 1.0 );\n\n\t//  x0 = x0 - 0.0 + 0.0 * C.xxxx\n\t//  x1 = x0 - i1  + 1.0 * C.xxxx\n\t//  x2 = x0 - i2  + 2.0 * C.xxxx\n\t//  x3 = x0 - i3  + 3.0 * C.xxxx\n\t//  x4 = x0 - 1.0 + 4.0 * C.xxxx\n\tvec4 x1 = x0 - i1 + C.xxxx;\n\tvec4 x2 = x0 - i2 + C.yyyy;\n\tvec4 x3 = x0 - i3 + C.zzzz;\n\tvec4 x4 = x0 + C.wwww;\n\n// Permutations\n\ti = mod289(i);\n\tfloat j0 = permute( permute( permute( permute(i.w) + i.z) + i.y) + i.x);\n\tvec4 j1 = permute( permute( permute( permute (\n\t\t\t i.w + vec4(i1.w, i2.w, i3.w, 1.0 ))\n\t\t   + i.z + vec4(i1.z, i2.z, i3.z, 1.0 ))\n\t\t   + i.y + vec4(i1.y, i2.y, i3.y, 1.0 ))\n\t\t   + i.x + vec4(i1.x, i2.x, i3.x, 1.0 ));\n\n// Gradients: 7x7x6 points over a cube, mapped onto a 4-cross polytope\n// 7*7*6 = 294, which is close to the ring size 17*17 = 289.\n\tvec4 ip = vec4(1.0/294.0, 1.0/49.0, 1.0/7.0, 0.0) ;\n\n\tvec4 p0 = grad4(j0,   ip);\n\tvec4 p1 = grad4(j1.x, ip);\n\tvec4 p2 = grad4(j1.y, ip);\n\tvec4 p3 = grad4(j1.z, ip);\n\tvec4 p4 = grad4(j1.w, ip);\n\n// Normalise gradients\n\tvec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n\tp0 *= norm.x;\n\tp1 *= norm.y;\n\tp2 *= norm.z;\n\tp3 *= norm.w;\n\tp4 *= taylorInvSqrt(dot(p4,p4));\n\n// Mix contributions from the five corners\n\tvec3 m0 = max(0.6 - vec3(dot(x0,x0), dot(x1,x1), dot(x2,x2)), 0.0);\n\tvec2 m1 = max(0.6 - vec2(dot(x3,x3), dot(x4,x4)            ), 0.0);\n\tm0 = m0 * m0;\n\tm1 = m1 * m1;\n\treturn 49.0 * ( dot(m0*m0, vec3( dot( p0, x0 ), dot( p1, x1 ), dot( p2, x2 )))\n\t\t\t   + dot(m1*m1, vec2( dot( p3, x3 ), dot( p4, x4 ) ) ) ) ;\n\n\t}"
    },
    function (e, t) {
      e.exports =
        "uniform float uVisibility;\nuniform float uDirection;\nuniform vec3 uLightView;\n\n//const vec3 l = vec3(0.57735,0.57735,0.57735);\n\nfloat getAlpha(vec3 n)\n{\n//\tfloat nDotL = dot(n, l) * uDirection;\n\tfloat nDotL = dot(n, uLightView) * uDirection;\n\treturn smoothstep(1., 1.5, nDotL + uVisibility * 2.5);\n}\n"
    },
    function (e, t) {
      e.exports =
        "#ifdef GL_ES\n\tprecision highp float;\n#endif\n\n#include includes/visibility.glsl\n\nvarying vec3 vNormal;\nvarying vec3 vWorld;\n\nuniform samplerCube uTexture;\nuniform vec3 uBackgroundColor;\nuniform vec3 uCamPos;\nuniform vec3 uBackgroundColor;\nuniform float uFresnelPower;\nuniform float uFresnelAmount;\n\nvoid main(void) {\n\tvec3 n = normalize(vNormal);\n\tvec3 v = normalize(uCamPos-vWorld);\n\tfloat fresnel = pow(1. - dot(n, v), uFresnelPower)* uFresnelAmount;\n\tvec3 c = textureCube(uTexture, n).xyz;\n\tc = mix(c, uBackgroundColor, fresnel);\n\tgl_FragColor.xyz = c;\n\n\tgl_FragColor.w = getAlpha(n);\n\n  //premultiplied alpha\n  gl_FragColor.xyz *= gl_FragColor.w;\n}\n"
    },
    function (e, t) {
      e.exports =
        "attribute vec3 aPos;\nattribute vec2 aUV0;\n\nvarying vec3 vWorld;\nvarying vec3 vNormal;\n\nuniform mat4 uModel;\nuniform mat4 uViewProjection;\n\nvoid main(void) {\n\tvec4 world = uModel * vec4(aPos , 1.);\n\n\tvWorld = world.xyz;\n\n\tvNormal = mat3(uModel) * aPos;\n\n\tgl_Position = uViewProjection * world;\n}\n"
    },
    function (e, t) {
      e.exports =
        "#ifdef GL_ES\n\tprecision highp float;\n#endif\n\n#include includes/simplex4d.glsl\n\nvarying vec3 vWorld;\nuniform float uTime;\nuniform float uSpatialFrequency;\nuniform float uTemporalFrequency;\nuniform float uH;\nuniform float uContrast;\nuniform float uFlatten;\n\nvec2 fbm(vec4 p)\n{\n\tvec4 q =  p;\n\tfloat a = 1.;\n\tfloat f = 1.;\n\tvec2 sum = vec2(0);\n\tfor(int i = 0; i < OCTAVES ; i++){\n\t\tsum.x +=  snoise(p * f) * a;\n\t\t//sum.x +=  abs(snoise(p * f)) * a;\n\t\tp.w += 100.;\n\t\tsum.y +=  snoise(p * f) * a;\n\t\ta *= uH;\n\t\tf *= 2.;\n\t}\n\treturn sum;\n}\n\n\nvoid main(void) {\n\tvec3 world = normalize(vWorld);\n\tworld += 12.45;\n\tvec4 p = vec4(world * uSpatialFrequency, uTime * uTemporalFrequency);\n\tgl_FragColor.xy = fbm(p) * uContrast + 0.5;\n\n\t//low frequency modulation on opacity to mimic flares\n\tvec4 p2 = vec4(world * 2., uTime * uTemporalFrequency);\n\tfloat modulate = max(snoise(p2) , 0.);\n\tgl_FragColor.x *= mix(1., modulate, uFlatten);\n\n\tgl_FragColor.zw = gl_FragColor.yx;\n}\n"
    },
    function (e, t) {
      e.exports =
        "attribute vec3 aPos;\nattribute vec2 aUV0;\n\nvarying vec3 vWorld;\n\nuniform mat4 uViewProjection;\n\nvoid main(void) {\n\tvec4 world = vec4(aPos , 1.);\n\n\tvWorld = world.xyz;\n\n\tgl_Position = uViewProjection * world;\n}\n"
    },
    function (e, t) {
      e.exports =
        "#ifdef GL_ES\n\tprecision highp float;\n#endif\n\n#include includes/visibility.glsl\n\nvarying float vUVY;\nvarying float vOpacity;\nvarying vec3 vColor;\nvarying vec3 vNormal;\nuniform float uAlphaBlended;\n\nvoid main(void) {\n\tfloat alpha = smoothstep(1., 0., abs(vUVY));\n\talpha *= alpha;\n\talpha *= vOpacity;\n\talpha *= getAlpha(vNormal);\n\tgl_FragColor = vec4(vColor * alpha, alpha * uAlphaBlended);\n}"
    },
    function (e, t) {
      e.exports =
        "attribute vec3 aPos;\nattribute vec3 aPos0;\nattribute vec3 aPos1;\nattribute vec4 aWireRandom;\n\nvarying float vUVY;\nvarying float vOpacity;\nvarying vec3 vColor;\nvarying vec3 vNormal;\n\nuniform float uWidth;\nuniform float uAmp;\nuniform float uTime;\nuniform float uNoiseFrequency;\nuniform float uNoiseAmplitude;\nuniform vec3 uCamPos;\nuniform mat4 uViewProjection;\nuniform float uOpacity;\nuniform float uHueSpread;\nuniform float uHue;\n\n #define m4  mat4( 0.00, 0.80, 0.60, -0.4, -0.80,  0.36, -0.48, -0.5, -0.60, -0.48, 0.64, 0.2, 0.40, 0.30, 0.20,0.4)\n    vec4 twistedSineNoise(vec4 q, float falloff)\n    {\n    \tfloat a = 1.;\n    \tfloat f = 1.;\n    \tvec4 sum = vec4(0);\n    \tfor(int i = 0; i < 4 ; i++){\n    \t\tq = m4 * q;\n    \t\tvec4 s = sin( q.ywxz * f) * a;\n    \t\tq += s;\n    \t\tsum += s;\n         //sum += max(s, 0.);\n    \t\ta *= falloff;\n    \t\tf /= falloff;\n         //f *= 2.;\n    \t}\n    \treturn sum;\n    }\n\nvec3 getPos(float phase, float animPhase)\n{\n\tfloat size = distance(aPos0, aPos1);\n\tvec3 n = normalize((aPos0 + aPos1) * 0.5);\n\n\tvec3 p = mix(aPos0, aPos1, phase);\n\n\tfloat amp = sin(phase * 3.14) * size * uAmp;\n\t//amp *= max(sin((uTime* 0.05 * (aWireRandom.y * 0.5) + aWireRandom.x) * 6.28), 0.);\n\tamp *= animPhase;\n\n\tp += n * amp;\n\n\tp += twistedSineNoise(vec4(p * uNoiseFrequency,uTime ), 0.707).xyz * (amp * uNoiseAmplitude);\n\t//p += n * (0.5 - abs( phase - 0.5)) * size * 5.;\n\n\treturn p;\n}\n\n #define hue(v)  ( .6 + .6 * cos( 6.3*(v)  + vec3(0,23,21)  ) )\n\nvec3 spectrum(in float d)\n{\n\treturn smoothstep(0.25, 0., abs(d + vec3(-0.375,-0.5,-0.625)));\n}\n\nvoid main(void) {\n\tvUVY = aPos.z;\n\n\tfloat animPhase = fract(uTime * 0.3 * (aWireRandom.y * 0.5) + aWireRandom.x);\n\n\tvec3 p = getPos(aPos.x, animPhase);\n\tvec3 p1 = getPos(aPos.x + 0.01, animPhase);\n\n\tvec3 dir = p1 - p;\n\tdir = normalize(dir);\n\tvec3 v = normalize(p - uCamPos);\n\tvec3 side = normalize(cross(v, dir));\n\n\tfloat width = uWidth  * aPos.z;\n\twidth *= 1. + animPhase;\n\n\tp += side * width;\n\n\tvNormal = normalize(p);\n\n\t//transparent base\n\tvOpacity = smoothstep(1., 1.05, length(p));\n\t//fade out while growing\n\tvOpacity *= 1. - animPhase;\n\tvOpacity *= uOpacity;\n\n\tvColor = hue (aWireRandom.w * uHueSpread + uHue);\n\n\tgl_Position = uViewProjection * vec4(p , 1.);\n}"
    },
    function (e, t) {
      e.exports =
        "#ifdef GL_ES\n\tprecision highp float;\n#endif\n\n#include includes/visibility.glsl\n\nvarying float vUVY;\nvarying float vOpacity;\nvarying vec3 vColor;\nvarying vec3 vNormal;\n\nuniform float uAlphaBlended;\n\nvoid main(void) {\n\tvec3 c = vec3(1,0.6,0.4) ;\n\tfloat alpha = smoothstep(1., 0., abs(vUVY));\n\talpha *= alpha;\n\talpha *= vOpacity;\n\talpha *= getAlpha(vNormal);\n\tgl_FragColor = vec4(vColor * alpha, alpha * uAlphaBlended);\n}"
    },
    function (e, t) {
      e.exports =
        "attribute vec3 aPos;\nattribute vec3 aPos0;\nattribute vec4 aWireRandom;\n\nvarying float vUVY;\nvarying float vOpacity;\nvarying vec3 vColor;\nvarying vec3 vNormal;\n\n\nuniform float uHueSpread;\nuniform float uHue;\nuniform float uLength;\nuniform float uWidth;\nuniform float uTime;\nuniform float uNoiseFrequency;\nuniform float uNoiseAmplitude;\nuniform vec3 uCamPos;\nuniform mat4 uViewProjection;\nuniform float uOpacity;\n\n #define m4  mat4( 0.00, 0.80, 0.60, -0.4, -0.80,  0.36, -0.48, -0.5, -0.60, -0.48, 0.64, 0.2, 0.40, 0.30, 0.20,0.4)\n    vec4 twistedSineNoise(vec4 q, float falloff)\n    {\n    \tfloat a = 1.;\n    \tfloat f = 1.;\n    \tvec4 sum = vec4(0);\n    \tfor(int i = 0; i < 4 ; i++){\n    \t\tq = m4 * q;\n    \t\tvec4 s = sin( q.ywxz * f) * a;\n    \t\tq += s;\n    \t\tsum += s;\n         //sum += max(s, 0.);\n    \t\ta *= falloff;\n    \t\tf /= falloff;\n         //f *= 2.;\n    \t}\n    \treturn sum;\n    }\n\nvec3 getPos(float phase, float animPhase)\n{\n\tfloat size = aWireRandom.z + 0.2;\n\n\tfloat d = phase * uLength * size;\n\n\tvec3 p = aPos0 + aPos0 * d;\n\n\tp += twistedSineNoise(vec4(p * uNoiseFrequency,uTime ), 0.707).xyz * (d * uNoiseAmplitude);\n\n\treturn p;\n}\n\n//TODO: use something like this to backface cull.\n//or do depth test\nfloat distToCenter(vec3 ro, vec3 rd)\n{\n  float d = dot(- ro, rd);\n  return length(ro + d * rd);\n}\n\nvec3 spectrum(in float d)\n{\n\treturn smoothstep(0.25, 0., abs(d + vec3(-0.375,-0.5,-0.625)));\n}\n\nvoid main(void) {\n\tvUVY = aPos.z;\n\n\tfloat animPhase = fract(uTime * 0.3 * (aWireRandom.y * 0.5) + aWireRandom.x);\n\n\tvec3 p = getPos(aPos.x, animPhase);\n\tvec3 p1 = getPos(aPos.x + 0.01, animPhase);\n\n\tvec3 dir = p1 - p;\n\tdir = normalize(dir);\n\tvec3 v = normalize(p - uCamPos);\n\tvec3 side = normalize(cross(v, dir));\n\n\tfloat width = uWidth  * aPos.z * (1. - aPos.x);\n\n\tvNormal = normalize(p);\n\n\tp += side * width;\n\n\tvOpacity = uOpacity * (0.5 + aWireRandom.w);\n\n\tvColor = spectrum (aWireRandom.w * uHueSpread + uHue);\n\n\tgl_Position = uViewProjection * vec4(p , 1.);\n}"
    },
    function (e, t) {
      e.exports =
        "#ifdef GL_ES\n\tprecision highp float;\n#endif\n\n#include includes/visibility.glsl\n\nvarying vec3 vWorld;\nvarying vec3 vNormal;\n\nvarying vec3 vLayer0;\nvarying vec3 vLayer1;\nvarying vec3 vLayer2;\n\nuniform samplerCube uPerlinCube;\n\nuniform float uFresnelPower;\nuniform float uFresnelInfluence;\nuniform float uTint;\nuniform float uBase;\nuniform float uBrightnessOffset;\nuniform float uBrightness;\nuniform vec3 uCamPos;\n\n vec3 brightnessToColor(float b)\n {\n \tb *= uTint;\n     return (vec3(b, b * b, b*b*b * b)/ (uTint)) * uBrightness;\n }\n\tfloat ocean(in vec3 p)\n\t{\n\t\tfloat sum = 0.;\n\t\tsum += textureCube(uPerlinCube, vLayer0).r;\n\t\tsum += textureCube(uPerlinCube, vLayer1).r;\n\t\tsum += textureCube(uPerlinCube, vLayer2).r;\n\t\treturn sum * 0.33;\n\t}\n\n\tfloat distToCenter(vec3 ro, vec3 rd)\n    {\n      float d = dot(- ro, rd);\n      return length(ro + d * rd);\n    }\n\n void mainImage( out vec4 fragColor, in vec2 fragCoord )\n {\n\tvec3 rd = normalize(vWorld - uCamPos);\n\tvec3 ro = uCamPos;\n\tvec3 n = normalize(vNormal);\n\tfloat nDotV = dot(n, -rd);\n\tfloat fresnel = pow(1. - nDotV,uFresnelPower) * uFresnelInfluence;\n\n\tfloat brightness = ocean(n);\n\tbrightness = brightness * uBase + uBrightnessOffset;\n\tbrightness += fresnel;\n\n\tvec3 col = brightnessToColor(brightness);\n\tcol = clamp(col, 0., 1.);\n\n\tfragColor = vec4( col , getAlpha(n));\n }\n\nvoid main(void) {\n\tmainImage(gl_FragColor, gl_FragCoord.xy);\n}"
    },
    function (e, t) {
      e.exports =
        "attribute vec3 aPos;\nattribute vec2 aUV0;\n\nvarying vec3 vWorld;\nvarying vec3 vNormal;\n\nvarying vec3 vLayer0;\nvarying vec3 vLayer1;\nvarying vec3 vLayer2;\n\nuniform mat4 uModel;\nuniform mat4 uViewProjection;\nuniform float uTime;\n\n   mat2 getMatrix(float a)\n   {\n   \tfloat s = sin(a);\n   \tfloat c = cos(a);\n   \treturn mat2(c, -s, s, c);\n   }\n\n\nvoid setLayers(vec3 p){\n\tfloat t = uTime * 0.015;\n\tmat2 m = getMatrix(t);\n\tfloat sum = 0.;\n\n\tvec3 p1 = p;\n\tp1.yz = m * p1.yz;\n\tvLayer0 = p1;\n\n\tp1 = p;\n\t m = getMatrix(t + 2.094);\n\tp1.zx = m * p1.zx;\n\tvLayer1 = p1;\n\n\tp1 = p;\n\t m = getMatrix(t + 4.188);\n\tp1.xy = m * p1.xy;\n\tvLayer2 = p1;\n}\n\nvoid main(void) {\n\tvec4 world = uModel * vec4(aPos , 1.);\n\n\tvWorld = world.xyz;\n\tvNormal = mat3(uModel) * aPos;\n\tsetLayers(aPos);\n\n\tgl_Position = uViewProjection * world;\n}"
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (e, t, n) {
      var i = {
        "./en-gb.json": [784, 0],
      }
      function r(e) {
        if (!n.o(i, e))
          return Promise.resolve().then(function () {
            var t = new Error("Cannot find module '" + e + "'")
            throw ((t.code = "MODULE_NOT_FOUND"), t)
          })
        var t = i[e],
          r = t[0]
        return n.e(t[1]).then(function () {
          return n.t(r, 3)
        })
      }
      ;(r.keys = function () {
        return Object.keys(i)
      }),
        (r.id = 748),
        (e.exports = r)
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (e, t, n) {
      "use strict"
      n.r(t)
      var i = n(131),
        r = n.n(i),
        o = n(29),
        a = n(132),
        s = n.n(a),
        l = n(296),
        u = (n(446), n(6))
      u.a.sensibleDefaults = !1
      var c = {},
        h = function () {
          var e = this._self._c
          this._self._setupProxy
          return e("span", {
            class: [this.$style.icon],
            attrs: {
              "data-icon": this.name,
            },
            domProps: {
              innerHTML: this._s(this.icon),
            },
          })
        }
      h._withStripped = !0
      var f = n(447),
        d = {
          name: "Icon",
          props: {
            name: u.a.string.isRequired,
          },
          computed: {
            icon: function () {
              return f("./".concat(this.name, ".svg"))
            },
          },
        },
        p = n(178),
        v = n(12)
      var g = {
          Icon: Object(v.a)(
            d,
            h,
            [],
            !1,
            function (e) {
              this.$style = p.default.locals || p.default
            },
            null,
            null
          ).exports,
        },
        m = n(297),
        _ = n.n(m),
        y = n(208),
        T = "production",
        E = "development",
        b = "staging",
        A = "local",
        R = {
          LOCALE: "locale",
          API: "api",
          STORAGE: "storage",
        },
        w = {
          LOCALE_ENABLED: "locale-enabled",
          LOCALE_ROUTING_ENABLED: "locale-routing-enabled",
          STATIC_ROOT: "static-root",
          PUBLIC_PATH: "public-path",
          VERSIONED_STATIC_ROOT: "versioned-static-root",
        },
        x = {
          DEFAULT_LOCALE: "default-locale",
          AVAILABLE_LOCALES: "available-locales",
          PERSIST_QUERY_PARAMS: "persist-query-params",
        },
        k = {},
        S = function (e, t) {
          k[e] = t
        },
        C = function (e) {
          return k[e]
        },
        P = function () {
          var e = C("configManager"),
            t = e.getProperty(x.AVAILABLE_LOCALES).map(function (e) {
              return "string" === typeof e
                ? {
                    code: e,
                    urlPrefix: e,
                    translationKey: e,
                  }
                : e
            }),
            n = {
              persistent: !1,
              defaultCode: e.getProperty(x.DEFAULT_LOCALE),
              languages: t,
            }
          return {
            localeEnabled: e.getVariable(w.LOCALE_ENABLED),
            localeRoutingEnabled: e.getVariable(w.LOCALE_ROUTING_ENABLED),
            config: n,
          }
        },
        O = function () {
          var e = this,
            t = e._self._c
          e._self._setupProxy
          return t(
            "div",
            {
              class: [e.$style.introPage],
            },
            [
              t("LoopingVideo", {
                ref: "loop",
                attrs: {
                  src: e.$assetLoader.getAsset(e.GLOBAL_ASSETS.INTRO_VIDEO),
                  "is-active": !e.showVideo,
                  ratio: [1912, 1080],
                },
              }),
              e._v(" "),
              t(
                "header",
                {
                  ref: "titleWrapper",
                  class: e.$style.titleWrapper,
                },
                [
                  t(
                    "div",
                    {
                      class: ["heading-l", e.$style.title],
                    },
                    [
                      t(
                        "ScrambleText",
                        {
                          key: "title-".concat(e.deviceState),
                          ref: "title",
                        },
                        [e._v(e._s(e.$t("intro.title")))]
                      ),
                    ],
                    1
                  ),
                ]
              ),
              e._v(" "),
              t("SponsorLogos", {
                ref: "logos",
                class: e.$style.logos,
                attrs: {
                  monotone: !0,
                },
              }),
              e._v(" "),
              t("VideoPlayer", {
                ref: "video",
                class: e.$style.video,
                attrs: {
                  src: "".concat(e.$storageRoot, "movies/anthem.mp4"),
                },
                on: {
                  skip: e.onVideoSkip,
                  playStateChange: e.onVideoPlayStateChange,
                  ended: e.onVideoEnded,
                },
              }),
              e._v(" "),
              t("PlayButton", {
                ref: "play",
                class: e.$style.play,
                nativeOn: {
                  click: function (t) {
                    return t.preventDefault(), e.onPlayClick.apply(null, arguments)
                  },
                },
              }),
            ],
            1
          )
        }
      O._withStripped = !0
      var M = n(9),
        I = n.n(M),
        L = n(23),
        N = n(7),
        B = n(18),
        D = n(2),
        F = n.n(D),
        U = n(3),
        V = n.n(U),
        H = n(4),
        z = n.n(H),
        $ = n(5),
        j = n.n($),
        G = n(0),
        X = n.n(G),
        W = n(8)
      function Y(e) {
        var t,
          n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0.5,
          i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          o = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          a = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5]
        return W.TweenLite.fromTo(
          e,
          n,
          I()({}, o ? "autoAlpha" : "opacity", i),
          ((t = {}), I()(t, o ? "autoAlpha" : "opacity", r), I()(t, "ease", W.Linear.easeNone), I()(t, "clearProps", a ? "opacity,visibility" : ""), t)
        )
      }
      function q(e) {
        var t,
          n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0.5,
          i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          r = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
          o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4]
        return W.TweenLite.to(e, n, ((t = {}), I()(t, r ? "autoAlpha" : "opacity", i), I()(t, "ease", W.Linear.easeNone), I()(t, "clearProps", o ? "opacity,visibility" : ""), t))
      }
      function K(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ("function" === typeof Proxy) return !0
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var n,
            i = X()(e)
          if (t) {
            var r = X()(this).constructor
            n = Reflect.construct(i, arguments, r)
          } else n = i.apply(this, arguments)
          return j()(this, n)
        }
      }
      var Z = (function (e) {
          z()(n, e)
          var t = K(n)
          function n() {
            return F()(this, n), t.apply(this, arguments)
          }
          return (
            V()(n, [
              {
                key: "setupTransitionInTimeline",
                value: function (e, t, n) {
                  var i = t.$refs.titleWrapper,
                    r = t.$refs,
                    o = r.play,
                    a = r.title,
                    s = r.logos,
                    l = r.loop
                  e.add(Y(l.$el, 0.5), 0), e.add(this.getTimeline(o), 0.2), e.add(this.getTimeline(a), 0.6), e.add(Y(i, 0.1), 0.6), e.add(this.getTimeline(s), 0.3)
                },
              },
              {
                key: "setupTransitionOutTimeline",
                value: function (e, t, n) {
                  e.to(
                    t.$el,
                    0,
                    {
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                    },
                    0
                  ),
                    e.add(function () {}, 2)
                },
              },
              {
                key: "setupLoopingAnimationTimeline",
                value: function (e, t, n) {},
              },
            ]),
            n
          )
        })(N.AbstractTransitionController),
        Q = function () {
          var e = this,
            t = e._self._c
          e._self._setupProxy
          return t(
            "button",
            {
              class: e.$style.playButton,
              attrs: {
                title: "Click to play",
              },
              on: {
                mouseenter: e.onMouseEnter,
                mouseleave: e.onMouseLeave,
                click: function (t) {
                  return e.$soundManager.play(e.SampleName.CLICK)
                },
              },
            },
            [
              t("Icon", {
                ref: "icon",
                class: e.$style.icon,
                attrs: {
                  name: "play",
                },
              }),
            ],
            1
          )
        }
      Q._withStripped = !0
      var J,
        ee = n(1),
        te = ee.m.document,
        ne =
          "undefined" !== typeof window
            ? window
            : te.defaultView || {
                getComputedStyle: function () {},
              },
        ie = function (e) {
          return ne.getComputedStyle(e)
        },
        re = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
        oe = -1 !== ((ee.m.navigator || {}).userAgent || "").indexOf("Edge"),
        ae = {
          rect: ["width", "height"],
          circle: ["r", "r"],
          ellipse: ["rx", "ry"],
          line: ["x2", "y2"],
        }
      function se(e, t, n, i, r, o) {
        return (n = (parseFloat(n || 0) - parseFloat(e || 0)) * r), (i = (parseFloat(i || 0) - parseFloat(t || 0)) * o), Math.sqrt(n * n + i * i)
      }
      function le(e) {
        return ("string" !== typeof e && e.nodeType) || ((e = ee.m.TweenLite.selector(e)).length && (e = e[0])), e
      }
      function ue(e) {
        if (!e) return 0
        var t,
          n,
          i,
          r,
          o,
          a,
          s,
          l = (e = le(e)).tagName.toLowerCase(),
          u = 1,
          c = 1
        "non-scaling-stroke" === e.getAttribute("vector-effect") && ((c = e.getScreenCTM()), (u = Math.sqrt(c.a * c.a + c.b * c.b)), (c = Math.sqrt(c.d * c.d + c.c * c.c)))
        try {
          n = e.getBBox()
        } catch (h) {
          console.log("Error: Some browsers like Firefox won't report measurements of invisible elements (like display:none or masks inside defs).")
        }
        if (
          ((n && (n.width || n.height)) ||
            !ae[l] ||
            ((n = {
              width: parseFloat(e.getAttribute(ae[l][0])),
              height: parseFloat(e.getAttribute(ae[l][1])),
            }),
            "rect" !== l && "line" !== l && ((n.width *= 2), (n.height *= 2)),
            "line" === l &&
              ((n.x = parseFloat(e.getAttribute("x1"))), (n.y = parseFloat(e.getAttribute("y1"))), (n.width = Math.abs(n.width - n.x)), (n.height = Math.abs(n.height - n.y)))),
          "path" === l)
        )
          (r = e.style.strokeDasharray),
            (e.style.strokeDasharray = "none"),
            (t = e.getTotalLength() || 0),
            u !== c && console.log("Warning: <path> length cannot be measured accurately when vector-effect is non-scaling-stroke and the element isn't proportionally scaled."),
            (t *= (u + c) / 2),
            (e.style.strokeDasharray = r)
        else if ("rect" === l) t = 2 * n.width * u + 2 * n.height * c
        else if ("line" === l) t = se(n.x, n.y, n.x + n.width, n.y + n.height, u, c)
        else if ("polyline" === l || "polygon" === l)
          for (i = e.getAttribute("points").match(re) || [], "polygon" === l && i.push(i[0], i[1]), t = 0, o = 2; o < i.length; o += 2)
            t += se(i[o - 2], i[o - 1], i[o], i[o + 1], u, c) || 0
        else ("circle" !== l && "ellipse" !== l) || ((a = (n.width / 2) * u), (s = (n.height / 2) * c), (t = Math.PI * (3 * (a + s) - Math.sqrt((3 * a + s) * (a + 3 * s)))))
        return t || 0
      }
      function ce(e, t) {
        if (!e) return [0, 0]
        ;(e = le(e)), (t = t || ue(e) + 1)
        var n = ie(e),
          i = n.strokeDasharray || "",
          r = parseFloat(n.strokeDashoffset),
          o = i.indexOf(",")
        return o < 0 && (o = i.indexOf(" ")), (i = o < 0 ? t : parseFloat(i.substr(0, o)) || 1e-5) > t && (i = t), [Math.max(0, -r), Math.max(0, i - r)]
      }
      function he(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ("function" === typeof Proxy) return !0
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var n,
            i = X()(e)
          if (t) {
            var r = X()(this).constructor
            n = Reflect.construct(i, arguments, r)
          } else n = i.apply(this, arguments)
          return j()(this, n)
        }
      }
      ;((J = ee.m._gsDefine.plugin({
        propName: "drawSVG",
        API: 2,
        version: "0.2.1",
        global: !0,
        overwriteProps: ["drawSVG"],
        init: function (e, t, n, i) {
          if (!e.getBBox) return !1
          var r,
            o,
            a,
            s,
            l = ue(e) + 1
          return (
            (this._style = e.style),
            (this._target = e),
            "function" === typeof t && (t = t(i, e)),
            !0 === t || "true" === t ? (t = "0 100%") : t ? -1 === (t + "").indexOf(" ") && (t = "0 " + t) : (t = "0 0"),
            (o = (function (e, t, n) {
              var i,
                r,
                o = e.indexOf(" ")
              return (
                -1 === o ? ((i = void 0 !== n ? n + "" : e), (r = e)) : ((i = e.substr(0, o)), (r = e.substr(o + 1))),
                (i = -1 !== i.indexOf("%") ? (parseFloat(i) / 100) * t : parseFloat(i)) > (r = -1 !== r.indexOf("%") ? (parseFloat(r) / 100) * t : parseFloat(r)) ? [r, i] : [i, r]
              )
            })(t, l, (r = ce(e, l))[0])),
            (this._length = l + 10),
            0 === r[0] && 0 === o[0]
              ? ((a = Math.max(1e-5, o[1] - l)),
                (this._dash = l + a),
                (this._offset = l - r[1] + a),
                (this._offsetPT = this._addTween(this, "_offset", this._offset, l - o[1] + a, "drawSVG")))
              : ((this._dash = r[1] - r[0] || 1e-6),
                (this._offset = -r[0]),
                (this._dashPT = this._addTween(this, "_dash", this._dash, o[1] - o[0] || 1e-5, "drawSVG")),
                (this._offsetPT = this._addTween(this, "_offset", this._offset, -o[0], "drawSVG"))),
            oe &&
              (s = ie(e)).strokeLinecap !== s.strokeLinejoin &&
              ((o = parseFloat(s.strokeMiterlimit)), this._addTween(e.style, "strokeMiterlimit", o, o + 1e-4, "strokeMiterlimit")),
            (this._live = "non-scaling-stroke" === e.getAttribute("vector-effect") || -1 !== (t + "").indexOf("live")),
            !0
          )
        },
        set: function (e) {
          if (this._firstPT) {
            if (this._live) {
              var t,
                n = ue(this._target) + 11
              n !== this._length &&
                ((t = n / this._length),
                (this._length = n),
                (this._offsetPT.s *= t),
                (this._offsetPT.c *= t),
                this._dashPT ? ((this._dashPT.s *= t), (this._dashPT.c *= t)) : (this._dash *= t))
            }
            this._super.setRatio.call(this, e),
              (this._style.strokeDashoffset = this._offset),
              (this._style.strokeDasharray =
                1 === e || 0 === e
                  ? this._offset < 0.001 && this._length - this._dash <= 10
                    ? "none"
                    : this._offset === this._dash
                    ? "0px, 999999px"
                    : this._dash + "px," + this._length + "px"
                  : this._dash + "px," + this._length + "px")
          }
        },
      })).getLength = ue),
        (J.getPosition = ce)
      var fe = (function (e) {
          z()(n, e)
          var t = he(n)
          function n() {
            return F()(this, n), t.apply(this, arguments)
          }
          return (
            V()(n, [
              {
                key: "toHoverState",
                value: function () {
                  var e = this.parentController.$refs.icon,
                    t = e.$el.querySelector(".outline-group"),
                    n = e.$el.querySelector(".arrow"),
                    i = new W.TimelineMax()
                  i.to(t, 0.6, {
                    transformOrigin: "50% 50%",
                    scale: 0.9,
                    ease: W.Power3.easeOut,
                  }),
                    i.to(
                      n,
                      0.6,
                      {
                        transformOrigin: "50% 50%",
                        scale: 1.6,
                        ease: W.Power3.easeOut,
                      },
                      0
                    )
                },
              },
              {
                key: "toNormalState",
                value: function () {
                  var e = this.parentController.$refs.icon,
                    t = e.$el.querySelector(".outline-group"),
                    n = e.$el.querySelector(".arrow")
                  new W.TimelineMax().to([t, n], 0.3, {
                    transformOrigin: "50% 50%",
                    scale: 1,
                    ease: W.Power3.easeOut,
                  })
                },
              },
              {
                key: "setupTransitionInTimeline",
                value: function (e, t, n) {
                  var i = t.$refs.icon
                  e.add(function () {
                    t.$el.setAttribute("data-can-touch", "true")
                  }, 0.001),
                    e.add(Y(t.$el, 0.001), 0)
                  var r = i.$el.querySelector(".outline"),
                    o = i.$el.querySelector(".circle"),
                    a = i.$el.querySelector(".rect"),
                    s = Array.from(i.$el.querySelectorAll(".line")),
                    l = i.$el.querySelector(".arrow")
                  e.addLabel("outline", 0),
                    e.fromTo(
                      r,
                      1.4,
                      {
                        transformOrigin: "50% 50%",
                        drawSVG: "0%",
                        scale: 2,
                        rotation: -90,
                      },
                      {
                        drawSVG: "100%",
                        scale: 1,
                        rotation: -90,
                        ease: W.Power3.easeOut,
                      },
                      "outline"
                    ),
                    e.fromTo(
                      r,
                      1.4,
                      {
                        opacity: 0,
                        scale: 2,
                      },
                      {
                        opacity: 1,
                        scale: 1,
                        ease: W.Back.easeOut.config(1),
                      },
                      "outline"
                    ),
                    e.fromTo(
                      o,
                      1.4,
                      {
                        transformOrigin: "50% 50%",
                        scale: 0,
                        opacity: 0,
                      },
                      {
                        scale: 1,
                        opacity: 1,
                        ease: W.Power3.easeOut,
                      },
                      "outline"
                    ),
                    e.fromTo(
                      [a].concat(s),
                      1.2,
                      {
                        transformOrigin: "50% 50%",
                        rotation: 90,
                        scale: 1.3,
                        drawSVG: "0%",
                      },
                      {
                        rotation: 90,
                        scale: 1,
                        drawSVG: "100%",
                        ease: W.Power2.easeOut,
                      },
                      "outline+=0.2"
                    ),
                    e.addLabel("arrow", "-=0.8"),
                    e.fromTo(
                      l,
                      1,
                      {
                        transformOrigin: "50% 50%",
                        scale: 0,
                      },
                      {
                        scale: 1,
                        ease: W.Back.easeOut.config(4),
                      },
                      "arrow"
                    ),
                    e.fromTo(
                      l,
                      0.8,
                      {
                        rotation: -45,
                      },
                      {
                        rotation: 0,
                        ease: W.Power3.easeOut,
                      },
                      "arrow"
                    )
                },
              },
              {
                key: "setupTransitionOutTimeline",
                value: function (e, t, n) {
                  e.add(q(t.$el))
                },
              },
              {
                key: "setupLoopingAnimationTimeline",
                value: function (e, t, n) {},
              },
            ]),
            n
          )
        })(N.AbstractTransitionController),
        de = {
          name: "PlayButton",
          extends: N.AbstractTransitionComponent,
          methods: {
            handleAllComponentsReady: function () {
              ;(this.transitionController = new fe(this)), this.isReady()
            },
            onMouseEnter: function () {
              this.transitionController.toHoverState(), this.$soundManager.play(this.SampleName.HOVER, this.SoundChannel.UI)
            },
            onMouseLeave: function () {
              this.transitionController.toNormalState()
            },
          },
        },
        pe = n(179)
      var ve = Object(v.a)(
        de,
        Q,
        [],
        !1,
        function (e) {
          this.$style = pe.default.locals || pe.default
        },
        null,
        null
      ).exports
      !(function (e) {
        var t = e.GreenSockGlobals || e,
          n = (function (e) {
            var n,
              i = e.split("."),
              r = t
            for (n = 0; n < i.length; n++) r[i[n]] = r = r[i[n]] || {}
            return r
          })("com.greensock.utils"),
          i = ee.m.document || {},
          r =
            "undefined" !== typeof e
              ? e
              : i.defaultView || {
                  getComputedStyle: function () {},
                },
          o = function (e) {
            return r.getComputedStyle(e)
          },
          a = /([A-Z])/g,
          s = function (e, t, n, i) {
            var r
            return (
              (n = n || o(e)) ? (r = (e = n.getPropertyValue(t.replace(a, "-$1").toLowerCase())) || n.length ? e : n[t]) : e.currentStyle && (r = (n = e.currentStyle)[t]),
              i ? r : parseInt(r, 10) || 0
            )
          },
          l = function (e) {
            return !!(e.length && e[0] && ((e[0].nodeType && e[0].style && !e.nodeType) || (e[0].length && e[0][0])))
          },
          u = function (e, t) {
            for (var n, i = t.length; --i > -1; ) if (((n = t[i]), e.substr(0, n.length) === n)) return n.length
          },
          c = /(?:\r|\n|\t\t)/g,
          h = /(?:\s\s+)/g,
          f = function (e) {
            return ((e.charCodeAt(0) - 55296) << 10) + (e.charCodeAt(1) - 56320) + 65536
          },
          d = " style='position:relative;display:inline-block;" + (i.all && !i.addEventListener ? "*display:inline;*zoom:1;'" : "'"),
          p = function (e, t) {
            var n = -1 !== (e = e || "").indexOf("++"),
              i = 1
            return (
              n && (e = e.split("++").join("")),
              function () {
                return "<" + t + d + (e ? " class='" + e + (n ? i++ : "") + "'>" : ">")
              }
            )
          },
          v =
            (n.SplitText =
            t.SplitText =
              function (e, t) {
                if (("string" === typeof e && (e = v.selector(e)), !e)) throw "cannot split a null element."
                ;(this.elements = l(e)
                  ? (function (e) {
                      var t,
                        n,
                        i,
                        r = [],
                        o = e.length
                      for (t = 0; t < o; t++)
                        if (((n = e[t]), l(n))) for (i = n.length, i = 0; i < n.length; i++) r.push(n[i])
                        else r.push(n)
                      return r
                    })(e)
                  : [e]),
                  (this.chars = []),
                  (this.words = []),
                  (this.lines = []),
                  (this._originals = []),
                  (this.vars = t || {}),
                  this.split(t)
              }),
          g = function e(t, n, i) {
            var r = t.nodeType
            if (1 === r || 9 === r || 11 === r) for (t = t.firstChild; t; t = t.nextSibling) e(t, n, i)
            else (3 !== r && 4 !== r) || (t.nodeValue = t.nodeValue.split(n).join(i))
          },
          m = function (e, t) {
            for (var n = t.length; --n > -1; ) e.push(t[n])
          },
          _ = function (e) {
            var t,
              n = [],
              i = e.length
            for (t = 0; t !== i; n.push(e[t++]));
            return n
          },
          y = function (e, t, n) {
            for (var i; e && e !== t; ) {
              if ((i = e._next || e.nextSibling)) return i.textContent.charAt(0) === n
              e = e.parentNode || e._parent
            }
            return !1
          },
          T = function e(t) {
            var n,
              i,
              r = _(t.childNodes),
              o = r.length
            for (n = 0; n < o; n++)
              (i = r[n])._isSplit
                ? e(i)
                : (n && 3 === i.previousSibling.nodeType
                    ? (i.previousSibling.nodeValue += 3 === i.nodeType ? i.nodeValue : i.firstChild.nodeValue)
                    : 3 !== i.nodeType && t.insertBefore(i.firstChild, i),
                  t.removeChild(i))
          },
          E = function (e, t, n, r, a, l, u) {
            var c,
              h,
              f,
              d,
              p,
              v,
              _,
              E,
              b,
              A,
              R,
              w,
              x = o(e),
              k = s(e, "paddingLeft", x),
              S = -999,
              C = s(e, "borderBottomWidth", x) + s(e, "borderTopWidth", x),
              P = s(e, "borderLeftWidth", x) + s(e, "borderRightWidth", x),
              O = s(e, "paddingTop", x) + s(e, "paddingBottom", x),
              M = s(e, "paddingLeft", x) + s(e, "paddingRight", x),
              I = 0.2 * s(e, "fontSize"),
              L = s(e, "textAlign", x, !0),
              N = [],
              B = [],
              D = [],
              F = t.wordDelimiter || " ",
              U = t.tag ? t.tag : t.span ? "span" : "div",
              V = t.type || t.split || "chars,words,lines",
              H = a && -1 !== V.indexOf("lines") ? [] : null,
              z = -1 !== V.indexOf("words"),
              $ = -1 !== V.indexOf("chars"),
              j = "absolute" === t.position || !0 === t.absolute,
              G = t.linesClass,
              X = -1 !== (G || "").indexOf("++"),
              W = []
            for (X && (G = G.split("++").join("")), f = (h = e.getElementsByTagName("*")).length, p = [], c = 0; c < f; c++) p[c] = h[c]
            if (H || j)
              for (c = 0; c < f; c++)
                ((v = (d = p[c]).parentNode === e) || j || ($ && !z)) &&
                  ((w = d.offsetTop),
                  H && v && Math.abs(w - S) > I && ("BR" !== d.nodeName || 0 === c) && ((_ = []), H.push(_), (S = w)),
                  j && ((d._x = d.offsetLeft), (d._y = w), (d._w = d.offsetWidth), (d._h = d.offsetHeight)),
                  H &&
                    (((d._isSplit && v) || (!$ && v) || (z && v) || (!z && d.parentNode.parentNode === e && !d.parentNode._isSplit)) &&
                      (_.push(d), (d._x -= k), y(d, e, F) && (d._wordEnd = !0)),
                    "BR" === d.nodeName && ((d.nextSibling && "BR" === d.nextSibling.nodeName) || 0 === c) && H.push([])))
            for (c = 0; c < f; c++)
              (v = (d = p[c]).parentNode === e),
                "BR" !== d.nodeName
                  ? (j &&
                      ((b = d.style),
                      z || v || ((d._x += d.parentNode._x), (d._y += d.parentNode._y)),
                      (b.left = d._x + "px"),
                      (b.top = d._y + "px"),
                      (b.position = "absolute"),
                      (b.display = "block"),
                      (b.width = d._w + 1 + "px"),
                      (b.height = d._h + "px")),
                    !z && $
                      ? d._isSplit
                        ? ((d._next = d.nextSibling), d.parentNode.appendChild(d))
                        : d.parentNode._isSplit
                        ? ((d._parent = d.parentNode),
                          !d.previousSibling && d.firstChild && (d.firstChild._isFirst = !0),
                          d.nextSibling && " " === d.nextSibling.textContent && !d.nextSibling.nextSibling && W.push(d.nextSibling),
                          (d._next = d.nextSibling && d.nextSibling._isFirst ? null : d.nextSibling),
                          d.parentNode.removeChild(d),
                          p.splice(c--, 1),
                          f--)
                        : v ||
                          ((w = !d.nextSibling && y(d.parentNode, e, F)),
                          d.parentNode._parent && d.parentNode._parent.appendChild(d),
                          w && d.parentNode.appendChild(i.createTextNode(" ")),
                          "span" === U && (d.style.display = "inline"),
                          N.push(d))
                      : d.parentNode._isSplit && !d._isSplit && "" !== d.innerHTML
                      ? B.push(d)
                      : $ && !d._isSplit && ("span" === U && (d.style.display = "inline"), N.push(d)))
                  : H || j
                  ? (d.parentNode && d.parentNode.removeChild(d), p.splice(c--, 1), f--)
                  : z || e.appendChild(d)
            for (c = W.length; --c > -1; ) W[c].parentNode.removeChild(W[c])
            if (H) {
              for (
                j && ((A = i.createElement(U)), e.appendChild(A), (R = A.offsetWidth + "px"), (w = A.offsetParent === e ? 0 : e.offsetLeft), e.removeChild(A)),
                  b = e.style.cssText,
                  e.style.cssText = "display:none;";
                e.firstChild;

              )
                e.removeChild(e.firstChild)
              for (E = " " === F && (!j || (!z && !$)), c = 0; c < H.length; c++) {
                for (
                  _ = H[c],
                    (A = i.createElement(U)).style.cssText = "display:block;text-align:" + L + ";position:" + (j ? "absolute;" : "relative;"),
                    G && (A.className = G + (X ? c + 1 : "")),
                    D.push(A),
                    f = _.length,
                    h = 0;
                  h < f;
                  h++
                )
                  "BR" !== _[h].nodeName &&
                    ((d = _[h]),
                    A.appendChild(d),
                    E && d._wordEnd && A.appendChild(i.createTextNode(" ")),
                    j && (0 === h && ((A.style.top = d._y + "px"), (A.style.left = k + w + "px")), (d.style.top = "0px"), w && (d.style.left = d._x - w + "px")))
                0 === f ? (A.innerHTML = "&nbsp;") : z || $ || (T(A), g(A, String.fromCharCode(160), " ")),
                  j && ((A.style.width = R), (A.style.height = d._h + "px")),
                  e.appendChild(A)
              }
              e.style.cssText = b
            }
            j &&
              (u > e.clientHeight && ((e.style.height = u - O + "px"), e.clientHeight < u && (e.style.height = u + C + "px")),
              l > e.clientWidth && ((e.style.width = l - M + "px"), e.clientWidth < l && (e.style.width = l + P + "px"))),
              m(n, N),
              z && m(r, B),
              m(a, D)
          },
          b = function e(t, n, r, o) {
            var a,
              l,
              d = _(t.childNodes),
              p = d.length,
              v = "absolute" === n.position || !0 === n.absolute
            if (3 !== t.nodeType || p > 1) {
              for (n.absolute = !1, a = 0; a < p; a++)
                (3 !== (l = d[a]).nodeType || /\S+/.test(l.nodeValue)) &&
                  (v && 3 !== l.nodeType && "inline" === s(l, "display", null, !0) && ((l.style.display = "inline-block"), (l.style.position = "relative")),
                  (l._isSplit = !0),
                  e(l, n, r, o))
              return (n.absolute = v), void (t._isSplit = !0)
            }
            !(function (e, t, n, r) {
              var o,
                a,
                s,
                l,
                d,
                p,
                v,
                m,
                _,
                y,
                T = t.tag ? t.tag : t.span ? "span" : "div",
                E = -1 !== (t.type || t.split || "chars,words,lines").indexOf("chars"),
                b = "absolute" === t.position || !0 === t.absolute,
                A = t.wordDelimiter || " ",
                R = " " !== A ? "" : b ? "&#173; " : " ",
                w = "</" + T + ">",
                x = !0,
                k = t.specialChars ? ("function" === typeof t.specialChars ? t.specialChars : u) : null,
                S = i.createElement("div"),
                C = e.parentNode
              for (
                C.insertBefore(S, e),
                  S.textContent = e.nodeValue,
                  C.removeChild(e),
                  v =
                    -1 !==
                    (o = (function e(t) {
                      var n = t.nodeType,
                        i = ""
                      if (1 === n || 9 === n || 11 === n) {
                        if ("string" === typeof t.textContent) return t.textContent
                        for (t = t.firstChild; t; t = t.nextSibling) i += e(t)
                      } else if (3 === n || 4 === n) return t.nodeValue
                      return i
                    })((e = S))).indexOf("<"),
                  !1 !== t.reduceWhiteSpace && (o = o.replace(h, " ").replace(c, "")),
                  v && (o = o.split("<").join("{{LT}}")),
                  d = o.length,
                  a = (" " === o.charAt(0) ? R : "") + n(),
                  s = 0;
                s < d;
                s++
              )
                if (((p = o.charAt(s)), k && (y = k(o.substr(s), t.specialChars)))) (p = o.substr(s, y || 1)), (a += E && " " !== p ? r() + p + "</" + T + ">" : p), (s += y - 1)
                else if (p === A && o.charAt(s - 1) !== A && s) {
                  for (a += x ? w : "", x = !1; o.charAt(s + 1) === A; ) (a += R), s++
                  s === d - 1 ? (a += R) : ")" !== o.charAt(s + 1) && ((a += R + n()), (x = !0))
                } else
                  "{" === p && "{{LT}}" === o.substr(s, 6)
                    ? ((a += E ? r() + "{{LT}}</" + T + ">" : "{{LT}}"), (s += 5))
                    : (p.charCodeAt(0) >= 55296 && p.charCodeAt(0) <= 56319) || (o.charCodeAt(s + 1) >= 65024 && o.charCodeAt(s + 1) <= 65039)
                    ? ((m = f(o.substr(s, 2))),
                      (_ = f(o.substr(s + 2, 2))),
                      (l = (m >= 127462 && m <= 127487 && _ >= 127462 && _ <= 127487) || (_ >= 127995 && _ <= 127999) ? 4 : 2),
                      (a += E && " " !== p ? r() + o.substr(s, l) + "</" + T + ">" : o.substr(s, l)),
                      (s += l - 1))
                    : (a += E && " " !== p ? r() + p + "</" + T + ">" : p)
              ;(e.outerHTML = a + (x ? w : "")), v && g(C, "{{LT}}", "<")
            })(t, n, r, o)
          },
          A = v.prototype
        ;(A.split = function (e) {
          this.isSplit && this.revert(), (this.vars = e = e || this.vars), (this._originals.length = this.chars.length = this.words.length = this.lines.length = 0)
          for (var t, n, i, r = this.elements.length, o = e.tag ? e.tag : e.span ? "span" : "div", a = p(e.wordsClass, o), s = p(e.charsClass, o); --r > -1; )
            (i = this.elements[r]), (this._originals[r] = i.innerHTML), (t = i.clientHeight), (n = i.clientWidth), b(i, e, a, s), E(i, e, this.chars, this.words, this.lines, n, t)
          return this.chars.reverse(), this.words.reverse(), this.lines.reverse(), (this.isSplit = !0), this
        }),
          (A.revert = function () {
            if (!this._originals) throw "revert() call wasn't scoped properly."
            for (var e = this._originals.length; --e > -1; ) this.elements[e].innerHTML = this._originals[e]
            return (this.chars = []), (this.words = []), (this.lines = []), (this.isSplit = !1), this
          }),
          (v.selector =
            e.$ ||
            e.jQuery ||
            function (t) {
              var n = e.$ || e.jQuery
              return n
                ? ((v.selector = n), n(t))
                : "undefined" === typeof document
                ? t
                : document.querySelectorAll
                ? document.querySelectorAll(t)
                : document.getElementById("#" === t.charAt(0) ? t.substr(1) : t)
            }),
          (v.version = "0.7.0")
      })(ee.m)
      var ge = ee.o.SplitText
      function me(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ("function" === typeof Proxy) return !0
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var n,
            i = X()(e)
          if (t) {
            var r = X()(this).constructor
            n = Reflect.construct(i, arguments, r)
          } else n = i.apply(this, arguments)
          return j()(this, n)
        }
      }
      var _e = (function (e) {
        z()(n, e)
        var t = me(n)
        function n() {
          var e
          return F()(this, n), ((e = t.apply(this, arguments)).split = null), e
        }
        return (
          V()(n, [
            {
              key: "updateSplitText",
              value: function () {
                this.split && this.split.revert(),
                  (this.split = new ge(this.parentController.$el, {
                    type: "lines,words,chars",
                  }))
              },
            },
            {
              key: "setupTransitionInTimeline",
              value: function (e, t, n) {
                e.fromTo(
                  t.$el,
                  0,
                  {
                    autoAlpha: 0,
                  },
                  {
                    autoAlpha: 1,
                    ease: W.Linear.easeNone,
                    clearProps: "visiblity,opacity",
                  }
                ),
                  this.split && this.split.revert(),
                  (this.split = new ge(this.parentController.$el, {
                    type: "lines,words,chars",
                  })),
                  this.split.chars.forEach(function (t, n) {
                    var i = t.offsetWidth,
                      r = t.innerText,
                      o = r === r.toUpperCase(),
                      a = Math.random()
                        .toString(36)
                        .replace(/[^a-z]+/g, "")
                        .substr(0, 1)
                    o && (a = a.toUpperCase())
                    var s = new W.TimelineMax()
                    s.add(function () {
                      t.style.width = "".concat(i, "px")
                    }),
                      s.fromTo(
                        t,
                        0.05,
                        {
                          opacity: 0,
                        },
                        {
                          opacity: 1,
                          ease: W.Linear.easeNone,
                          clearProps: "opacity,width",
                        },
                        0
                      ),
                      s.add(function () {
                        t.innerText = a.substr(0, 1)
                      }, 0),
                      s.add(function () {
                        t.innerText = a.substr(0, 1)
                      }, 0.01),
                      s.add(function () {
                        t.innerText = r
                      }, 0.03),
                      e.add(s, 0.025 * n)
                  })
              },
            },
            {
              key: "setupTransitionOutTimeline",
              value: function (e, t, n) {
                e.to(t.$el, 0.3, {
                  autoAlpha: 0,
                  ease: W.Linear.easeNone,
                })
              },
            },
            {
              key: "setupLoopingAnimationTimeline",
              value: function (e, t, n) {},
            },
          ]),
          n
        )
      })(N.AbstractTransitionController)
      function ye(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e)
          t &&
            (i = i.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, i)
        }
        return n
      }
      var Te = {
          name: "ScrambleText",
          extends: N.AbstractTransitionComponent,
          props: {
            tag: u.a.string.def("h2"),
          },
          computed: (function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {}
              t % 2
                ? ye(Object(n), !0).forEach(function (t) {
                    I()(e, t, n[t])
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                : ye(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                  })
            }
            return e
          })(
            {},
            Object(L.c)({
              deviceState: function (e) {
                return e.app.deviceState
              },
            })
          ),
          watch: {},
          render: function (e) {
            return e(this.tag, {
              domProps: {
                innerHTML: this.$slots.default[0].text,
              },
              class: I()({}, this.$style.scrambleText, !0),
            })
          },
          methods: {
            handleAllComponentsReady: function () {
              ;(this.transitionController = new _e(this)),
                this.transitionController.addEventListener(N.TransitionEvent.TRANSITION_IN_START, this.setLineLengths),
                this.transitionController.addEventListener(N.TransitionEvent.TRANSITION_IN_COMPLETE, this.resetLineLengths),
                this.isReady()
            },
            setLineLengths: function () {
              Array.from(this.$el.children).forEach(function (e) {
                ;(e.style.width = ""), (e.style.width = "".concat(e.offsetWidth, "px"))
              })
            },
            resetLineLengths: function () {
              Array.from(this.$el.children).forEach(function (e) {
                e.style.width = ""
              })
            },
            showText: function () {
              this.transitionIn(!0)
            },
          },
        },
        Ee = n(180),
        be = n(181),
        Ae = n.n(be)
      var Re = Object(v.a)(
        Te,
        void 0,
        void 0,
        !1,
        function (e) {
          this.$style = Ee.default.locals || Ee.default
        },
        null,
        null
      )
      "function" === typeof Ae.a && Ae()(Re)
      var we = Re.exports,
        xe = function () {
          var e = this,
            t = e._self._c
          e._self._setupProxy
          return t(
            "ul",
            {
              class: [e.$style.sponsorLogos, I()({}, e.$style.mono, e.monotone)],
            },
            [
              e._l(e.logos, function (n, i) {
                return [
                  i > 0
                    ? t("li", {
                        key: "divider-".concat(i),
                        ref: "logo",
                        refInFor: !0,
                        class: e.$style.divider,
                      })
                    : e._e(),
                  e._v(" "),
                  t(
                    "li",
                    {
                      key: "logo-".concat(i),
                      ref: "logo",
                      refInFor: !0,
                    },
                    [
                      t(
                        "a",
                        {
                          attrs: {
                            href: e.$t("navigation.sponsors.".concat(n)),
                            "event-category": e.$route.name,
                            "event-label": "Sponsor ".concat(n),
                            "aria-label": "Sponsor ".concat(n),
                            "event-action": "Click",
                            target: "_blank",
                            rel: "noopener",
                          },
                          on: {
                            mouseenter: function (t) {
                              return e.$soundManager.play(e.SampleName.HOVER)
                            },
                          },
                        },
                        [
                          t("Icon", {
                            class: e.$style.logo,
                            attrs: {
                              name: "".concat(n).concat("google-cloud" === n ? "-full" : ""),
                            },
                          }),
                        ],
                        1
                      ),
                    ]
                  ),
                ]
              }),
            ],
            2
          )
        }
      function ke(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ("function" === typeof Proxy) return !0
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var n,
            i = X()(e)
          if (t) {
            var r = X()(this).constructor
            n = Reflect.construct(i, arguments, r)
          } else n = i.apply(this, arguments)
          return j()(this, n)
        }
      }
      xe._withStripped = !0
      var Se = (function (e) {
          z()(n, e)
          var t = ke(n)
          function n() {
            return F()(this, n), t.apply(this, arguments)
          }
          return (
            V()(n, [
              {
                key: "setupTransitionInTimeline",
                value: function (e, t, n) {
                  var i = t.$refs.logo
                  e.add(Y(t.$el, 0.1)),
                    e.staggerFromTo(
                      i,
                      0.5,
                      {
                        autoAlpha: 0,
                      },
                      {
                        autoAlpha: 1,
                        ease: W.Linear.easeNone,
                        clearProps: "visibility,opacity",
                      },
                      0.05,
                      t.delayedIn ? 0.75 : 0
                    )
                },
              },
              {
                key: "setupTransitionOutTimeline",
                value: function (e, t, n) {
                  e.add(q(t.$el))
                },
              },
              {
                key: "setupLoopingAnimationTimeline",
                value: function (e, t, n) {},
              },
            ]),
            n
          )
        })(N.AbstractTransitionController),
        Ce = {
          name: "SponsorLogos",
          props: {
            monotone: u.a.bool.def(!1),
            delayedIn: u.a.bool.def(!1),
          },
          extends: N.AbstractTransitionComponent,
          data: function () {
            return {
              logos: ["google-cloud", "intel", "nasa-fdl"],
            }
          },
          methods: {
            handleAllComponentsReady: function () {
              ;(this.transitionController = new Se(this)), this.isReady()
            },
          },
        },
        Pe = n(182)
      var Oe = Object(v.a)(
          Ce,
          xe,
          [],
          !1,
          function (e) {
            this.$style = Pe.default.locals || Pe.default
          },
          null,
          null
        ).exports,
        Me = function () {
          var e = this._self._c
          this._self._setupProxy
          return e(
            "div",
            {
              class: ["abs-fill", this.$style.loopingVideo],
            },
            [
              e("video", {
                ref: "video",
                attrs: {
                  src: this.src,
                  preload: this.preload,
                  autoplay: this.autoplay,
                  muted: "",
                  loop: "",
                  playsinline: "",
                },
                domProps: {
                  muted: !0,
                },
              }),
            ]
          )
        }
      Me._withStripped = !0
      var Ie = n(49),
        Le = n.n(Ie)
      function Ne(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ("function" === typeof Proxy) return !0
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var n,
            i = X()(e)
          if (t) {
            var r = X()(this).constructor
            n = Reflect.construct(i, arguments, r)
          } else n = i.apply(this, arguments)
          return j()(this, n)
        }
      }
      var Be = (function (e) {
          z()(n, e)
          var t = Ne(n)
          function n() {
            return F()(this, n), t.apply(this, arguments)
          }
          return (
            V()(n, [
              {
                key: "setupTransitionInTimeline",
                value: function (e, t, n) {},
              },
              {
                key: "setupTransitionOutTimeline",
                value: function (e, t, n) {},
              },
              {
                key: "setupLoopingAnimationTimeline",
                value: function (e, t, n) {},
              },
            ]),
            n
          )
        })(N.AbstractTransitionController),
        De = n(56),
        Fe = n.n(De),
        Ue = n(43),
        Ve = n.n(Ue),
        He = n(298),
        ze = n.n(He)
      function $e(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [0, 0, 1912, 1080],
          i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "cover",
          r = function () {
            var r = ze()(n, [0, 0, e.offsetWidth, e.offsetHeight], i),
              o = Fe()(r, 4),
              a = o[2],
              s = o[3]
            ;(t.style.width = "".concat(a, "px")), (t.style.height = "".concat(s, "px"))
          }
        return r(), new B.DisposableEventListener(window, "resize", Ve()(r, 150))
      }
      var je = {
          name: "LoopingVideo",
          extends: N.AbstractTransitionComponent,
          props: {
            src: u.a.string.isRequired,
            autoplay: u.a.bool.def(!0),
            preload: u.a.string.def("auto"),
            isActive: u.a.bool.def(!0),
            ratio: u.a.arrayOf(u.a.number).def([16, 9]),
          },
          watch: {
            isActive: function () {
              this.isActive ? this.$refs.video.play() : this.$refs.video.pause()
            },
          },
          mounted: function () {
            this.resizeListener = $e(this.$el, this.$refs.video, [0, 0].concat(Le()(this.ratio)))
          },
          beforeDestroy: function () {
            this.resizeListener && this.resizeListener.dispose()
          },
          methods: {
            handleAllComponentsReady: function () {
              ;(this.transitionController = new Be(this)), this.isReady()
            },
            play: function () {
              this.$refs.video.play()
            },
          },
        },
        Ge = n(183)
      var Xe = Object(v.a)(
          je,
          Me,
          [],
          !1,
          function (e) {
            this.$style = Ge.default.locals || Ge.default
          },
          null,
          null
        ).exports,
        We = function () {
          var e = this,
            t = e._self._c
          e._self._setupProxy
          return t(
            "div",
            {
              class: ["abs-fill", e.$style.videoPlayer, I()({}, e.$style.hasTopNavigation, e.topNavigationIndent)],
            },
            [
              t("video", {
                ref: "video",
                attrs: {
                  src: e.src,
                  playsinline: "",
                },
              }),
              e._v(" "),
              t(
                "nav",
                {
                  ref: "controls",
                  class: e.$style.controls,
                },
                [
                  t(
                    "div",
                    {
                      class: [e.$style.progress, I()({}, e.$style.isExpanded, e.isControlsExpanded)],
                    },
                    [
                      t(
                        "p",
                        {
                          class: e.$style.progressTime,
                        },
                        [
                          t(
                            "span",
                            {
                              ref: "progressTime",
                            },
                            [e._v(e._s(e._f("secondsToTime")(e.currentTime)))]
                          ),
                        ]
                      ),
                      e._v(" "),
                      t(
                        "div",
                        {
                          ref: "progressWrapper",
                          class: e.$style.progressWrapper,
                          on: {
                            mousedown: e.onProgressMouseDown,
                            touchstart: e.onProgressMouseDown,
                          },
                        },
                        [
                          t("span", {
                            ref: "progress",
                            class: e.$style.progressIndicator,
                          }),
                        ]
                      ),
                    ]
                  ),
                  e._v(" "),
                  t(
                    "ul",
                    {
                      class: e.$style.options,
                    },
                    [
                      t("li", [
                        t(
                          "button",
                          {
                            class: [e.$style.optionButton, I()({}, e.$style.isActive, e.isPlaying)],
                            attrs: {
                              title: "Toggle play",
                            },
                            on: {
                              click: e.onTogglePlayClick,
                            },
                          },
                          [
                            t("Icon", {
                              attrs: {
                                name: "play-pause",
                              },
                            }),
                          ],
                          1
                        ),
                      ]),
                      e._v(" "),
                      t("li", [
                        t(
                          "button",
                          {
                            class: [e.$style.optionButton, I()({}, e.$style.isActive, e.volume > 0)],
                            attrs: {
                              title: "Toggle mute",
                            },
                            on: {
                              click: e.onVolumeClick,
                            },
                          },
                          [
                            t("Icon", {
                              attrs: {
                                name: "sound-on-off",
                              },
                            }),
                          ],
                          1
                        ),
                      ]),
                    ]
                  ),
                ]
              ),
              e._v(" "),
              t("SkipButton", {
                ref: "skip",
                staticClass: "skip-button",
                attrs: {
                  label: this.skipLabel ? e.$t(this.skipLabel) : null,
                },
                nativeOn: {
                  click: function (t) {
                    return t.preventDefault(), e.onSkipClick.apply(null, arguments)
                  },
                },
              }),
            ],
            1
          )
        }
      We._withStripped = !0
      var Ye = n(184),
        qe = n(133),
        Ke = n.n(qe)
      function Ze(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ("function" === typeof Proxy) return !0
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var n,
            i = X()(e)
          if (t) {
            var r = X()(this).constructor
            n = Reflect.construct(i, arguments, r)
          } else n = i.apply(this, arguments)
          return j()(this, n)
        }
      }
      var Qe = (function (e) {
          z()(n, e)
          var t = Ze(n)
          function n() {
            return F()(this, n), t.apply(this, arguments)
          }
          return (
            V()(n, [
              {
                key: "toggleControls",
                value: function (e) {
                  var t = this.parentController.$refs.controls
                  W.TweenLite.to(t, 0.5, {
                    opacity: e ? 1 : 0,
                    ease: W.Linear.easeNone,
                  })
                },
              },
              {
                key: "setupTransitionInTimeline",
                value: function (e, t, n) {
                  var i = t.$refs.skip,
                    r = t.$refs,
                    o = r.video,
                    a = r.controls
                  e.add(Y(t.$el, 0.1), 0),
                    e.fromTo(
                      o,
                      0.8,
                      {
                        scale: 0.4,
                        opacity: 0,
                      },
                      {
                        scale: 1,
                        opacity: 1,
                        ease: W.Power3.easeOut,
                        clearProps: "scale,opacity",
                      },
                      0
                    ),
                    e.add(Y(a), 0.3),
                    e.add(this.getTimeline(i), 0.5)
                },
              },
              {
                key: "setupTransitionOutTimeline",
                value: function (e, t, n) {},
              },
              {
                key: "setupLoopingAnimationTimeline",
                value: function (e, t, n) {},
              },
            ]),
            n
          )
        })(N.AbstractTransitionController),
        Je = function () {
          var e = this,
            t = e._self._c
          e._self._setupProxy
          return t(
            "button",
            {
              class: ["copy-l", e.$style.skipButton],
              attrs: {
                title: "skip",
              },
              on: {
                mouseenter: function (t) {
                  return e.$soundManager.play(e.SampleName.HOVER)
                },
                click: function (t) {
                  return e.$soundManager.play(e.SampleName.SKIP_VIDEO)
                },
              },
            },
            [
              e.label
                ? t(
                    "ScrambleText",
                    {
                      ref: "label",
                      class: e.$style.label,
                      attrs: {
                        tag: "span",
                      },
                    },
                    [e._v(e._s(e.label))]
                  )
                : e._e(),
              e._v(" "),
              t(
                "span",
                {
                  class: e.$style.icon,
                },
                [
                  t("Icon", {
                    ref: "iconBackground",
                    attrs: {
                      name: "skip-background",
                    },
                  }),
                  e._v(" "),
                  t(
                    "span",
                    {
                      ref: "arrowWrapper",
                      class: ["abs-fill", e.$style.arrowWrapper],
                    },
                    [
                      t("Icon", {
                        class: ["abs-fill", e.$style.arrowDefault],
                        attrs: {
                          name: "skip-arrow",
                        },
                      }),
                      e._v(" "),
                      t("Icon", {
                        class: ["abs-fill", e.$style.arrowHover],
                        attrs: {
                          name: "skip-arrow",
                        },
                      }),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          )
        }
      function et(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ("function" === typeof Proxy) return !0
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var n,
            i = X()(e)
          if (t) {
            var r = X()(this).constructor
            n = Reflect.construct(i, arguments, r)
          } else n = i.apply(this, arguments)
          return j()(this, n)
        }
      }
      Je._withStripped = !0
      var tt = (function (e) {
          z()(n, e)
          var t = et(n)
          function n() {
            return F()(this, n), t.apply(this, arguments)
          }
          return (
            V()(n, [
              {
                key: "setupTransitionInTimeline",
                value: function (e, t, n) {
                  var i = t.$refs,
                    r = i.label,
                    o = i.iconBackground,
                    a = t.$refs.arrowWrapper,
                    s = o.$el.querySelector(".rect"),
                    l = o.$el.querySelector(".circle"),
                    u = o.$el.querySelector(".line")
                  r && e.add(this.getTimeline(r)),
                    e.addLabel("icon", 0.2),
                    e.fromTo(
                      s,
                      0.8,
                      {
                        transformOrigin: "50% 50%",
                        scale: 1.8,
                        opacity: 0,
                      },
                      {
                        scale: 1,
                        opacity: 1,
                        ease: W.Power2.easeOut,
                        clearProps: "scale,opacity",
                      },
                      "icon"
                    ),
                    e.fromTo(
                      l,
                      0.8,
                      {
                        transformOrigin: "50% 50%",
                        scale: 0,
                        opacity: 0,
                      },
                      {
                        scale: 1,
                        opacity: 1,
                        ease: W.Power2.easeOut,
                        clearProps: "scale,opacity",
                      },
                      "icon"
                    ),
                    e.fromTo(
                      u,
                      0.8,
                      {
                        opacity: 0,
                      },
                      {
                        opacity: 1,
                        clearProps: "opacity",
                      },
                      "icon"
                    ),
                    e.fromTo(
                      a,
                      0.8,
                      {
                        xPercent: -50,
                        opacity: 0,
                      },
                      {
                        xPercent: 0,
                        opacity: 1,
                        ease: W.Power2.easeOut,
                        clearProps: "xPercent,opacity",
                      },
                      "icon"
                    )
                },
              },
              {
                key: "setupTransitionOutTimeline",
                value: function (e, t, n) {},
              },
              {
                key: "setupLoopingAnimationTimeline",
                value: function (e, t, n) {},
              },
            ]),
            n
          )
        })(N.AbstractTransitionController),
        nt = n(15),
        it = function (e) {
          return {
            validator: function (t) {
              return null === t || ("undefined" === typeof t ? !e.required : Object(nt.h)(e, t))
            },
          }
        },
        rt = {
          name: "SkipButton",
          props: {
            label: it(u.a.string),
          },
          components: {
            ScrambleText: we,
          },
          extends: N.AbstractTransitionComponent,
          methods: {
            handleAllComponentsReady: function () {
              ;(this.transitionController = new tt(this)), this.isReady()
            },
          },
        },
        ot = n(185)
      var at,
        st = Object(v.a)(
          rt,
          Je,
          [],
          !1,
          function (e) {
            this.$style = ot.default.locals || ot.default
          },
          null,
          null
        ).exports,
        lt = "".concat("app", "/setDeviceState"),
        ut = "".concat("app", "/toggleVolume"),
        ct = "".concat("app", "/setManualNavigationHidden"),
        ht = "".concat("app", "/setManualContactHidden"),
        ft = "".concat("app", "/setHeaderMonotone"),
        dt = "".concat("app", "/setPreloading"),
        pt = "".concat("app", "/setCookieAccepted"),
        vt = {
          state: {
            isPreloading: !0,
            deviceState: null,
            volume: 1,
            manualNavigationHidden: !1,
            manualContactHidden: !1,
            isHeaderMonotone: !1,
            cookieAccepted: !1,
          },
          getters: {},
          mutations:
            ((at = {}),
            I()(at, lt, function (e, t) {
              e.deviceState = t
            }),
            I()(at, ut, function (e) {
              e.volume = e.volume > 0 ? 0 : 1
            }),
            I()(at, ct, function (e, t) {
              e.manualNavigationHidden = t
            }),
            I()(at, ht, function (e, t) {
              e.manualContactHidden = t
            }),
            I()(at, ft, function (e, t) {
              e.isHeaderMonotone = t
            }),
            I()(at, dt, function (e, t) {
              e.isPreloading = t
            }),
            I()(at, pt, function (e, t) {
              e.cookieAccepted = t
            }),
            at),
          actions: {},
        }
      function gt(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e)
          t &&
            (i = i.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, i)
        }
        return n
      }
      function mt(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? gt(Object(n), !0).forEach(function (t) {
                I()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : gt(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var _t = {
          name: "VideoPlayer",
          extends: N.AbstractTransitionComponent,
          components: {
            SkipButton: st,
          },
          props: {
            src: u.a.string.isRequired,
            topNavigationIndent: u.a.bool.def(!1),
            controlsVisible: u.a.bool.def(!0),
            skipLabel: u.a.string.def("intro.skip"),
          },
          data: function () {
            return {
              isPlaying: !1,
              isEndState: !1,
              currentTime: 0,
              isControlsExpanded: !1,
            }
          },
          computed: mt(
            {},
            Object(L.c)({
              volume: function (e) {
                return e.app.volume
              },
            })
          ),
          watch: {
            isPlaying: function (e) {
              e ? ((this.manualEndState = !1), this.tick()) : cancelAnimationFrame(this.progressFrame),
                this.$soundManager.muteChannel(this.SoundChannel.AMBIENT, e),
                this.$emit("playStateChange", e)
            },
            isEndState: function () {
              this.$emit("endStateChange", this.isEndState)
            },
            controlsVisible: function () {
              this.transitionController.toggleControls(this.controlsVisible)
            },
            volume: function (e) {
              ;(this.$refs.video.volume = e), (this.$refs.video.muted = 0 === e)
            },
          },
          mounted: function () {
            ;(this.manualEndState = !1),
              (this.disposables = new Ye.DisposableManager()),
              this.disposables.add(new B.DisposableEventListener(this.$refs.video, "play", this.onPlay)),
              this.disposables.add(new B.DisposableEventListener(this.$refs.video, "pause", this.onPause)),
              this.disposables.add(new B.DisposableEventListener(this.$refs.video, "ended", this.onEnded)),
              (this.$refs.video.volume = this.volume),
              (this.$refs.video.muted = 0 === this.volume),
              (this.resizeListener = $e(this.$el, this.$refs.video))
          },
          beforeDestroy: function () {
            this.disposables.dispose(), this.removeProgressDisposables(), this.resizeListener && this.resizeListener.dispose()
          },
          methods: mt(
            mt(
              {},
              Object(L.b)({
                toggleVolume: ut,
              })
            ),
            {},
            {
              playAndShow: function () {
                this.$refs.video.play(), this.transitionIn(!0)
              },
              play: function () {
                return this.$refs.video.play()
              },
              pause: function () {
                return this.$refs.video.pause()
              },
              stop: function () {
                this.pause(), (this.$refs.video.currentTime = 0)
              },
              gotoEndState: function () {
                ;(this.manualEndState = !0), (this.isEndState = !0)
              },
              handleAllComponentsReady: function () {
                ;(this.transitionController = new Qe(this)), this.isReady()
              },
              onPlay: function () {
                this.isPlaying = !0
              },
              onPause: function () {
                this.isPlaying = !1
              },
              onEnded: function () {
                ;(this.isPlaying = !1), this.$emit("ended")
              },
              tick: function () {
                this.$refs.video &&
                  !this.manualEndState &&
                  (this.setProgress(),
                  (this.isEndState = Math.abs(this.$refs.video.duration - this.$refs.video.currentTime) < 1),
                  (this.progressFrame = requestAnimationFrame(this.tick)))
              },
              setProgress: function () {
                var e = this.$refs.video.currentTime / this.$refs.video.duration
                ;(this.currentTime = Math.round(this.$refs.video.currentTime)),
                  (this.$refs.progress.style.height = "".concat(100 * e, "%")),
                  (this.$refs.progressTime.style.top = "".concat(100 * e, "%"))
              },
              onTogglePlayClick: function () {
                this.isPlaying ? this.$refs.video.pause() : this.$refs.video.play()
              },
              onVolumeClick: function () {
                this.toggleVolume()
              },
              onSkipClick: function () {
                this.pause(), this.$emit("skip")
              },
              onProgressMouseDown: function () {
                ;(this.isControlsExpanded = !0),
                  null !== this.progressDisposables && this.removeProgressDisposables(),
                  (this.progressDisposables = new Ye.DisposableManager()),
                  this.progressDisposables.add(new B.DisposableEventListener(window, "mousemove", this.onWindowMouseMove)),
                  this.progressDisposables.add(new B.DisposableEventListener(window, "touchmove", this.onWindowMouseMove)),
                  this.progressDisposables.add(new B.DisposableEventListener(window, "mouseup", this.onWindowMouseUp)),
                  this.progressDisposables.add(new B.DisposableEventListener(window, "touchend", this.onWindowMouseUp)),
                  this.progressDisposables.add(new B.DisposableEventListener(window, "mouseleave", this.onWindowMouseUp))
              },
              onWindowMouseMove: function (e) {
                var t = e.pageY,
                  n = e.touches,
                  i = this.$refs.progressWrapper.getBoundingClientRect().height,
                  r = this.$refs.controls.offsetTop,
                  o = n && n[0] ? n[0].clientY : t
                if ("undefined" !== typeof o) {
                  var a = (Ke()(o, r, r + i) - r) / i
                  ;(this.$refs.video.currentTime = this.$refs.video.duration * a), this.isPlaying || this.setProgress()
                }
              },
              onWindowMouseUp: function (e) {
                this.onWindowMouseMove(e), this.removeProgressDisposables(), (this.isControlsExpanded = !1)
              },
              removeProgressDisposables: function () {
                this.progressDisposables && (this.progressDisposables.dispose(), (this.progressDisposables = null))
              },
            }
          ),
        },
        yt = n(186)
      var Tt = Object(v.a)(
        _t,
        We,
        [],
        !1,
        function (e) {
          this.$style = yt.default.locals || yt.default
        },
        null,
        null
      ).exports
      function Et(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e)
          t &&
            (i = i.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, i)
        }
        return n
      }
      var bt = {
          name: "IntroPage",
          components: {
            LoopingVideo: Xe,
            VideoPlayer: Tt,
            SponsorLogos: Oe,
            ScrambleText: we,
            PlayButton: ve,
          },
          extends: N.AbstractPageTransitionComponent,
          data: function () {
            return {
              showVideo: !1,
            }
          },
          computed: (function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {}
              t % 2
                ? Et(Object(n), !0).forEach(function (t) {
                    I()(e, t, n[t])
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                : Et(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                  })
            }
            return e
          })(
            {},
            Object(L.c)({
              deviceState: function (e) {
                return e.app.deviceState
              },
            })
          ),
          watch: {
            deviceState: function () {
              var e = this
              this.$nextTick(function () {
                e.$refs.title.showText()
              })
            },
          },
          created: function () {
            ;(this.videoEnded = !1), (this.flow = N.FlowType.CROSS)
          },
          mounted: function () {
            ;(this.resizeListener = new B.DisposableEventListener(window, "resize", this.onResize)), this.onResize()
          },
          beforeDestroy: function () {
            this.resizeListener && this.resizeListener.dispose()
          },
          methods: {
            handleAllComponentsReady: function () {
              ;(this.transitionController = new Z(this)),
                this.transitionController.addEventListener(N.TransitionEvent.TRANSITION_IN_START, this.onTransitionInStart),
                this.isReady()
            },
            onTransitionInStart: function () {
              this.$refs.loop.play()
            },
            onPlayClick: function () {
              this.showVideo ? this.$refs.video.play() : ((this.showVideo = !0), this.$refs.video.playAndShow())
            },
            onVideoEnded: function () {
              ;(this.videoEnded = !0),
                this.$router.push({
                  name: this.RouteNames.HOME,
                })
            },
            onVideoSkip: function () {
              ;(this.videoEnded = !0), this.$refs.video.pause(), this.onVideoEnded()
            },
            onVideoPlayStateChange: function (e) {
              e ? this.$refs.play.transitionOut(!0) : this.videoEnded || this.$refs.play.transitionIn(!0)
            },
            onResize: function () {
              this.$el.style.height = "".concat(window.innerHeight, "px")
            },
          },
        },
        At = n(187)
      var Rt = Object(v.a)(
          bt,
          O,
          [],
          !1,
          function (e) {
            this.$style = At.default.locals || At.default
          },
          null,
          null
        ).exports,
        wt = function () {
          var e = this._self._c
          this._self._setupProxy
          return e("div", {
            class: [this.$style.homePage],
          })
        }
      function xt(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ("function" === typeof Proxy) return !0
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var n,
            i = X()(e)
          if (t) {
            var r = X()(this).constructor
            n = Reflect.construct(i, arguments, r)
          } else n = i.apply(this, arguments)
          return j()(this, n)
        }
      }
      wt._withStripped = !0
      var kt = (function (e) {
        z()(n, e)
        var t = xt(n)
        function n() {
          return F()(this, n), t.apply(this, arguments)
        }
        return (
          V()(n, [
            {
              key: "setupTransitionInTimeline",
              value: function (e, t, n) {
                e.add(function () {}, 0.01)
              },
            },
            {
              key: "setupTransitionOutTimeline",
              value: function (e, t, n) {
                e.set(t.$el, {
                  position: "absolute",
                  left: 0,
                  right: 0,
                  top: 0,
                }),
                  e.add(function () {}, 1)
              },
            },
            {
              key: "setupLoopingAnimationTimeline",
              value: function (e, t, n) {},
            },
          ]),
          n
        )
      })(N.AbstractTransitionController)
      function St(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e)
          t &&
            (i = i.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, i)
        }
        return n
      }
      function Ct(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? St(Object(n), !0).forEach(function (t) {
                I()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : St(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var Pt = {
          name: "HomePage",
          components: {},
          extends: N.AbstractPageTransitionComponent,
          created: function () {
            ;(this.flow = N.FlowType.CROSS), this.setHeaderMonotone(!0)
          },
          beforeRouteLeave: function (e, t, n) {
            e.name !== this.RouteNames.DETAIL && this.setHeaderMonotone(!1), n()
          },
          methods: Ct(
            Ct(
              {},
              Object(L.b)({
                setHeaderMonotone: ft,
              })
            ),
            {},
            {
              handleAllComponentsReady: function () {
                ;(this.transitionController = new kt(this)), this.isReady()
              },
            }
          ),
        },
        Ot = n(188)
      var Mt = Object(v.a)(
          Pt,
          wt,
          [],
          !1,
          function (e) {
            this.$style = Ot.default.locals || Ot.default
          },
          null,
          null
        ).exports,
        It = function () {
          var e = this,
            t = e._self._c
          e._self._setupProxy
          return t(
            "div",
            {
              class: [e.$style.aboutPage],
            },
            [
              t(
                "div",
                {
                  ref: "content",
                  staticClass: "content-page",
                },
                [
                  t(
                    "h1",
                    {
                      staticClass: "content-page-title heading-xl-content",
                    },
                    [e._v(e._s(e.$t("about.title")))]
                  ),
                  e._v(" "),
                  t("ContentSection", {
                    attrs: {
                      title: e.$t("about.intro.title"),
                      content: e.$t("about.intro.content"),
                    },
                  }),
                  e._v(" "),
                  t(
                    "picture",
                    {
                      class: e.$style.image,
                    },
                    [
                      t("source", {
                        attrs: {
                          media: "(max-width: 940px)",
                          srcset: "".concat(e.$versionRoot, "image/about/image-small.").concat(e.$webp("jpg")),
                        },
                      }),
                      e._v(" "),
                      t("source", {
                        attrs: {
                          media: "(min-width: 941px)",
                          srcset: "".concat(e.$versionRoot, "image/about/image-large.").concat(e.$webp("jpg")),
                        },
                      }),
                      e._v(" "),
                      t("img", {
                        attrs: {
                          src: "".concat(e.$versionRoot, "image/about/image-small.").concat(e.$webp("jpg")),
                          alt: e.$t("about.intro.title"),
                        },
                      }),
                    ]
                  ),
                  e._v(" "),
                  e.contentSections
                    ? t(
                        "ul",
                        {
                          class: e.$style.contentSections,
                        },
                        e._l(e.contentSections, function (e, n) {
                          return t(
                            "li",
                            {
                              key: "content-".concat(n),
                            },
                            [
                              t("ContentSection", {
                                attrs: {
                                  title: e.title,
                                  content: e.content,
                                },
                              }),
                            ],
                            1
                          )
                        }),
                        0
                      )
                    : e._e(),
                ],
                1
              ),
            ]
          )
        }
      function Lt(e) {
        var t = new W.TimelineMax(),
          n = C("scrollTracker")
        return (
          t.to(e, 0, {
            position: "absolute",
            left: 0,
            top: -n.y,
            right: 0,
          }),
          t.add(function () {}, 0.5),
          t
        )
      }
      function Nt(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ("function" === typeof Proxy) return !0
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var n,
            i = X()(e)
          if (t) {
            var r = X()(this).constructor
            n = Reflect.construct(i, arguments, r)
          } else n = i.apply(this, arguments)
          return j()(this, n)
        }
      }
      It._withStripped = !0
      var Bt = (function (e) {
          z()(n, e)
          var t = Nt(n)
          function n() {
            return F()(this, n), t.apply(this, arguments)
          }
          return (
            V()(n, [
              {
                key: "setupTransitionInTimeline",
                value: function (e, t, n) {
                  var i = t.$refs.content
                  e.fromTo(
                    i,
                    0.8,
                    {
                      y: 0.25 * window.innerHeight,
                    },
                    {
                      y: 0,
                      ease: W.Power3.easeOut,
                      clearProps: "y",
                    }
                  ),
                    e.add(Y(i), 0)
                },
              },
              {
                key: "setupTransitionOutTimeline",
                value: function (e, t, n) {
                  e.add(Lt(t.$el))
                },
              },
              {
                key: "setupLoopingAnimationTimeline",
                value: function (e, t, n) {},
              },
            ]),
            n
          )
        })(N.AbstractTransitionController),
        Dt = function () {
          var e = this,
            t = e._self._c
          e._self._setupProxy
          return t(
            "div",
            {
              class: ["heading-xl", e.$style.contentSection],
            },
            [
              t(
                "div",
                {
                  class: e.$style.contentWrapper,
                },
                [
                  t(
                    "div",
                    {
                      class: ["heading-l", e.$style.title],
                    },
                    [
                      e.disableTransition
                        ? t(
                            "span",
                            {
                              ref: "title",
                              class: e.$style.titleElement,
                            },
                            [e._v(e._s(e.title))]
                          )
                        : t(
                            "ScrambleText",
                            {
                              ref: "title",
                              class: e.$style.titleElement,
                            },
                            [e._v(e._s(e.title))]
                          ),
                      e._v(" "),
                      e.titleSuffix
                        ? t("div", {
                            ref: "titleSuffix",
                            staticClass: "copy-l",
                            domProps: {
                              innerHTML: e._s(e.titleSuffix),
                            },
                          })
                        : e._e(),
                      e._v(" "),
                      e.cta
                        ? t(
                            "div",
                            {
                              ref: "cta",
                            },
                            [
                              e.ctaWatch
                                ? t(
                                    "WatchButton",
                                    {
                                      class: [e.$style.cta, e.$style.watchCta],
                                      attrs: {
                                        rel: "noopener",
                                      },
                                      on: {
                                        buttonClick: function (t) {
                                          return e.$emit("buttonClick")
                                        },
                                      },
                                    },
                                    [e._v(e._s(e.cta.label))]
                                  )
                                : t(
                                    "PrimaryButton",
                                    {
                                      class: e.$style.cta,
                                      attrs: {
                                        href: e.cta.href,
                                        inverted: e.inverted,
                                        target: "_blank",
                                        rel: "noopener",
                                      },
                                      on: {
                                        buttonClick: function (t) {
                                          return e.$emit("buttonClick")
                                        },
                                      },
                                    },
                                    [e._v(e._s(e.cta.label))]
                                  ),
                            ],
                            1
                          )
                        : e._e(),
                    ],
                    1
                  ),
                  e._v(" "),
                  t(
                    "div",
                    {
                      ref: "content",
                      class: [e.copyClass, e.$style.content],
                    },
                    [
                      t("div", {
                        class: e.$style.richText,
                        domProps: {
                          innerHTML: e._s(e.content),
                        },
                      }),
                      e._v(" "),
                      e.cta
                        ? t("span", {
                            class: e.$style.ctaPlaceholder,
                          })
                        : e._e(),
                    ]
                  ),
                ]
              ),
            ]
          )
        }
      Dt._withStripped = !0
      var Ft = n(38),
        Ut = n.n(Ft)
      function Vt(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ("function" === typeof Proxy) return !0
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var n,
            i = X()(e)
          if (t) {
            var r = X()(this).constructor
            n = Reflect.construct(i, arguments, r)
          } else n = i.apply(this, arguments)
          return j()(this, n)
        }
      }
      var Ht = (function (e) {
        z()(n, e)
        var t = Vt(n)
        function n() {
          return F()(this, n), t.apply(this, arguments)
        }
        return (
          V()(n, [
            {
              key: "setupTransitionInTimeline",
              value: function (e, t, n) {
                if (!t.disableTransition) {
                  var i = t.$refs,
                    r = i.content,
                    o = i.titleSuffix,
                    a = i.cta
                  e.add(this.getTimeline(t.$refs.title)),
                    e.add(Y(r, 0.3), 0.1),
                    e.fromTo(
                      r,
                      0.8,
                      {
                        y: 0.15 * window.innerHeight,
                      },
                      {
                        y: 0,
                        ease: W.Power2.easeOut,
                        clearProps: "y",
                      },
                      0.1
                    ),
                    o &&
                      (e.add(Y(o, 0.3), 0),
                      e.fromTo(
                        o,
                        0.8,
                        {
                          y: 0.15 * window.innerHeight,
                        },
                        {
                          y: 0,
                          ease: W.Power2.easeOut,
                          clearProps: "y",
                        },
                        0
                      )),
                    a && e.add(Y(a, 0.3), "-=0.3")
                }
              },
            },
            {
              key: "setupTransitionOutTimeline",
              value: function (e, t, n) {
                if (!t.disableTransition) {
                  var i = t.$refs.title,
                    r = t.$refs,
                    o = r.content,
                    a = r.cta
                  e.add(this.getTimeline(i, Ut.a.OUT)), e.add(q(o, 0.5), 0), a && e.add(q(a, 0.3), 0)
                }
              },
            },
            {
              key: "setupLoopingAnimationTimeline",
              value: function (e, t, n) {},
            },
          ]),
          n
        )
      })(N.AbstractTransitionController)
      function zt(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ("function" === typeof Proxy) return !0
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var n,
            i = X()(e)
          if (t) {
            var r = X()(this).constructor
            n = Reflect.construct(i, arguments, r)
          } else n = i.apply(this, arguments)
          return j()(this, n)
        }
      }
      var $t = (function (e) {
          z()(n, e)
          var t = zt(n)
          function n() {
            return F()(this, n), t.apply(this, arguments)
          }
          return (
            V()(n, [
              {
                key: "setupTransitionInTimeline",
                value: function (e, t, n) {},
              },
              {
                key: "setupTransitionOutTimeline",
                value: function (e, t, n) {},
              },
              {
                key: "setupLoopingAnimationTimeline",
                value: function (e, t, n) {},
              },
            ]),
            n
          )
        })(N.AbstractTransitionController),
        jt = {
          name: "PrimaryButton",
          extends: N.AbstractTransitionComponent,
          props: {
            href: it(u.a.string.isRequired),
            target: u.a.string.def("_blank"),
            inverted: u.a.bool.def(!1),
          },
          methods: {
            handleAllComponentsReady: function () {
              ;(this.transitionController = new $t(this)), this.isReady()
            },
            nativeClickHandler: function (e) {
              this.$soundManager.play(this.SampleName.CLICK), this.href || (e.preventDefault(), this.$emit("buttonClick"))
            },
            onMouseEnter: function () {
              this.$soundManager.play(this.SampleName.HOVER)
            },
          },
          render: function (e) {
            var t
            return e(this.href ? "a" : "button", {
              domProps: {
                innerHTML: "<span>".concat(this.$slots.default[0].text, "</span>"),
              },
              attrs: {
                href: this.href,
                target: this.href ? this.target : null,
              },
              class: ((t = {}), I()(t, this.$style.primaryButton, !0), I()(t, this.$style.inverted, this.inverted), t),
              on: {
                click: this.nativeClickHandler,
                mouseenter: this.onMouseEnter,
              },
            })
          },
        },
        Gt = n(189),
        Xt = n(190),
        Wt = n.n(Xt)
      var Yt = Object(v.a)(
        jt,
        void 0,
        void 0,
        !1,
        function (e) {
          this.$style = Gt.default.locals || Gt.default
        },
        null,
        null
      )
      "function" === typeof Wt.a && Wt()(Yt)
      var qt = Yt.exports,
        Kt = qt,
        Zt = {
          name: "ScrollTrackerComponent",
          data: function () {
            return {
              inView: !1,
              isInThreshold: !1,
            }
          },
          mounted: function () {
            var e = this
            ;(this.lastProgress = 0),
              setTimeout(function () {
                e.$scrollTracker.addComponent(e)
              }, 10)
          },
          beforeDestroy: function () {
            this.$scrollTracker.removeComponent(this)
          },
          methods: {
            setInView: function (e) {
              this.inView = e
            },
            setInThreshold: function (e) {
              this.isInThreshold = e
            },
            updateProgress: function (e) {
              this.lastProgress = e
            },
          },
        },
        Qt = function () {
          var e = this,
            t = e._self._c
          e._self._setupProxy
          return t(
            "button",
            {
              class: ["copy-l", e.$style.watchButton],
              on: {
                click: function (t) {
                  return t.preventDefault(), e.$emit("buttonClick")
                },
              },
            },
            [
              t("Icon", {
                class: e.$style.icon,
                attrs: {
                  name: "play-small",
                },
              }),
              t(
                "span",
                {
                  class: e.$style.label,
                },
                [e._t("default")],
                2
              ),
            ],
            1
          )
        }
      function Jt(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ("function" === typeof Proxy) return !0
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var n,
            i = X()(e)
          if (t) {
            var r = X()(this).constructor
            n = Reflect.construct(i, arguments, r)
          } else n = i.apply(this, arguments)
          return j()(this, n)
        }
      }
      Qt._withStripped = !0
      var en = (function (e) {
          z()(n, e)
          var t = Jt(n)
          function n() {
            return F()(this, n), t.apply(this, arguments)
          }
          return (
            V()(n, [
              {
                key: "setupTransitionInTimeline",
                value: function (e, t, n) {},
              },
              {
                key: "setupTransitionOutTimeline",
                value: function (e, t, n) {},
              },
              {
                key: "setupLoopingAnimationTimeline",
                value: function (e, t, n) {},
              },
            ]),
            n
          )
        })(N.AbstractTransitionController),
        tn = {
          name: "WatchButton",
          extends: N.AbstractTransitionComponent,
          methods: {
            handleAllComponentsReady: function () {
              ;(this.transitionController = new en(this)), this.isReady()
            },
          },
        },
        nn = n(191)
      var rn = Object(v.a)(
          tn,
          Qt,
          [],
          !1,
          function (e) {
            this.$style = nn.default.locals || nn.default
          },
          null,
          null
        ).exports,
        on = {
          name: "ContentSection",
          props: {
            title: u.a.string.isRequired,
            titleSuffix: it(u.a.string.isRequired),
            content: u.a.string.isRequired,
            cta: it(
              u.a.shape({
                label: u.a.string,
                href: u.a.string,
              })
            ),
            ctaWatch: u.a.bool.def(!1),
            disableTransition: u.a.bool.def(!1),
            inverted: u.a.bool.def(!1),
            copyClass: u.a.string.def("copy-l"),
          },
          components: {
            ScrambleText: we,
            PrimaryButton: Kt,
            WatchButton: rn,
          },
          extends: N.AbstractTransitionComponent,
          mixins: [Zt],
          watch: {
            isInThreshold: function (e) {
              e ? this.transitionIn(!0) : this.transitionOut(!0)
            },
          },
          methods: {
            handleAllComponentsReady: function () {
              ;(this.transitionController = new Ht(this)), this.isReady()
            },
            updateProgress: function (e) {
              this.lastProgress = e
            },
          },
        },
        an = n(192)
      var sn = Object(v.a)(
          on,
          Dt,
          [],
          !1,
          function (e) {
            this.$style = an.default.locals || an.default
          },
          null,
          null
        ).exports,
        ln = {
          name: "AboutPage",
          components: {
            ContentSection: sn,
          },
          extends: N.AbstractPageTransitionComponent,
          computed: {
            contentSections: function () {
              var e = this.$store.getters.translation.about
              return e ? e.content : null
            },
          },
          created: function () {
            this.flow = N.FlowType.CROSS
          },
          methods: {
            handleAllComponentsReady: function () {
              ;(this.transitionController = new Bt(this)), this.isReady()
            },
          },
        },
        un = n(193)
      var cn = Object(v.a)(
          ln,
          It,
          [],
          !1,
          function (e) {
            this.$style = un.default.locals || un.default
          },
          null,
          null
        ).exports,
        hn = function () {
          var e = this,
            t = e._self._c
          e._self._setupProxy
          return t(
            "div",
            {
              class: e.$style.technologyPage,
            },
            [
              t(
                "section",
                {
                  ref: "header",
                  staticClass: "content-page",
                },
                [
                  t(
                    "h1",
                    {
                      staticClass: "content-page-title heading-xl-content",
                    },
                    [e._v(e._s(e.$t("technology.title")))]
                  ),
                  e._v(" "),
                  t("ContentSection", {
                    attrs: {
                      title: e.$t("technology.intro.title"),
                      content: e.$t("technology.intro.content"),
                    },
                  }),
                  e._v(" "),
                  t("ContentSection", {
                    attrs: {
                      title: e.$t("technology.cloudIntel.title"),
                      content: e.$t("technology.cloudIntel.content"),
                      "title-suffix": e.$t("technology.cloudIntel.titleSuffix"),
                    },
                  }),
                ],
                1
              ),
              e._v(" "),
              t(
                "section",
                {
                  class: ["heading-xl", e.$style.cardCarousel],
                },
                [
                  t(
                    "div",
                    {
                      staticClass: "content-page",
                    },
                    [
                      t("CardCarousel", {
                        class: e.$style.carousel,
                        attrs: {
                          cards: e.cards,
                          title: e.$t("technology.cardsTitle"),
                          description: e.$t("technology.cardsDescription"),
                          ctaLabel: e.$t("technology.cardsCta.label"),
                          ctaHref: e.$t("technology.cardsCta.href"),
                        },
                      }),
                    ],
                    1
                  ),
                ]
              ),
            ]
          )
        }
      function fn(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ("function" === typeof Proxy) return !0
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var n,
            i = X()(e)
          if (t) {
            var r = X()(this).constructor
            n = Reflect.construct(i, arguments, r)
          } else n = i.apply(this, arguments)
          return j()(this, n)
        }
      }
      hn._withStripped = !0
      var dn = (function (e) {
          z()(n, e)
          var t = fn(n)
          function n() {
            return F()(this, n), t.apply(this, arguments)
          }
          return (
            V()(n, [
              {
                key: "setupTransitionInTimeline",
                value: function (e, t, n) {
                  var i = t.$refs.header
                  e.fromTo(
                    i,
                    0.8,
                    {
                      y: 0.25 * window.innerHeight,
                    },
                    {
                      y: 0,
                      ease: W.Power3.easeOut,
                      clearProps: "y",
                    }
                  ),
                    e.add(Y(i), 0)
                },
              },
              {
                key: "setupTransitionOutTimeline",
                value: function (e, t, n) {
                  e.add(Lt(t.$el))
                },
              },
              {
                key: "setupLoopingAnimationTimeline",
                value: function (e, t, n) {},
              },
            ]),
            n
          )
        })(N.AbstractTransitionController),
        pn = function () {
          var e = this,
            t = e._self._c
          e._self._setupProxy
          return t(
            "div",
            {
              class: [e.$style.cardCarousel, I()({}, e.$style.isAlternate, e.alternateLayout)],
            },
            [
              t("header", [
                e.title
                  ? t(
                      "h2",
                      {
                        class: ["heading-l", e.$style.componentTitle],
                      },
                      [
                        t(
                          "ScrambleText",
                          {
                            ref: "title",
                            attrs: {
                              tag: "span",
                            },
                          },
                          [e._v(e._s(e.title))]
                        ),
                      ],
                      1
                    )
                  : e._e(),
                e._v(" "),
                e.description
                  ? t(
                      "p",
                      {
                        class: ["copy-l", e.$style.componentDescription],
                      },
                      [e._v(e._s(e.description))]
                    )
                  : e._e(),
              ]),
              e._v(" "),
              t(
                "div",
                {
                  ref: "wrapper",
                },
                [
                  t(
                    "ul",
                    {
                      ref: "carousel",
                      class: e.$style.carousel,
                    },
                    e._l(e.cards, function (n, i) {
                      return t(
                        "li",
                        {
                          key: "card-".concat(i),
                          ref: "item",
                          refInFor: !0,
                          class: e.$style.carouselItem,
                          on: {
                            click: function (t) {
                              return e.onCardClick(n.href)
                            },
                          },
                        },
                        [
                          n.image
                            ? t("span", {
                                class: e.$style.image,
                                style: {
                                  backgroundImage: "url(".concat(e.$versionRoot).concat(e.$options.filters.webp(n.image), ")"),
                                },
                              })
                            : e._e(),
                          e._v(" "),
                          t(
                            "div",
                            {
                              class: e.$style.itemContent,
                            },
                            [
                              t(
                                "div",
                                {
                                  class: e.$style.itemHeader,
                                },
                                [
                                  t("Icon", {
                                    class: e.$style.icon,
                                    attrs: {
                                      name: n.icon,
                                    },
                                  }),
                                  e._v(" "),
                                  t(
                                    "h3",
                                    {
                                      class: ["copy-l", e.$style.title],
                                    },
                                    [e._v(e._s(n.title))]
                                  ),
                                ],
                                1
                              ),
                              e._v(" "),
                              t(
                                "p",
                                {
                                  class: ["copy-m", e.$style.description],
                                },
                                [e._v(e._s(n.description))]
                              ),
                            ]
                          ),
                        ]
                      )
                    }),
                    0
                  ),
                ]
              ),
              e._v(" "),
              e.ctaHref && e.ctaLabel
                ? t(
                    "footer",
                    {
                      class: e.$style.footer,
                    },
                    [
                      t(
                        "PrimaryButton",
                        {
                          class: e.$style.cta,
                          attrs: {
                            href: e.ctaHref,
                            target: "_blank",
                            rel: "noopener",
                          },
                        },
                        [e._v(e._s(e.ctaLabel))]
                      ),
                    ],
                    1
                  )
                : e._e(),
            ]
          )
        }
      function vn(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ("function" === typeof Proxy) return !0
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var n,
            i = X()(e)
          if (t) {
            var r = X()(this).constructor
            n = Reflect.construct(i, arguments, r)
          } else n = i.apply(this, arguments)
          return j()(this, n)
        }
      }
      pn._withStripped = !0
      var gn = (function (e) {
          z()(n, e)
          var t = vn(n)
          function n() {
            return F()(this, n), t.apply(this, arguments)
          }
          return (
            V()(n, [
              {
                key: "setupTransitionInTimeline",
                value: function (e, t, n) {
                  var i = t.$refs.title,
                    r = t.$refs.wrapper
                  e.add(Y(t.$el, 0.1)), i && e.add(this.getTimeline(i), 0), e.add(Y(r), 0)
                },
              },
              {
                key: "setupTransitionOutTimeline",
                value: function (e, t, n) {
                  e.add(q(t.$el, 0.3))
                },
              },
              {
                key: "setupLoopingAnimationTimeline",
                value: function (e, t, n) {},
              },
            ]),
            n
          )
        })(N.AbstractTransitionController),
        mn = {
          icon: u.a.string,
          title: u.a.string,
          description: u.a.string,
          image: it(u.a.string),
          href: u.a.string,
        },
        _n = n(82),
        yn = n.n(_n),
        Tn = n(134)
      ee.m._gsDefine(
        "plugins.ThrowPropsPlugin",
        ["utils.VelocityTracker", "plugins.TweenPlugin", "TweenLite", "easing.Ease"],
        function (e) {
          var t,
            n,
            i,
            r,
            o = function (e, t) {
              ee.l.call(this, "throwProps"), (this._overwriteProps.length = 0)
            },
            a = 999999999999999,
            s = ee.m._gsDefine.globals,
            l = !1,
            u = {
              x: 1,
              y: 1,
              z: 2,
              scale: 1,
              scaleX: 1,
              scaleY: 1,
              rotation: 1,
              rotationZ: 1,
              rotationX: 2,
              rotationY: 2,
              skewX: 1,
              skewY: 1,
              xPercent: 1,
              yPercent: 1,
            },
            c = function (e, t, n, i, r) {
              var o,
                s,
                l,
                u,
                c = t.length,
                h = 0,
                f = a
              if ("object" === typeof e) {
                for (; --c > -1; ) {
                  for (l in ((o = t[c]), (s = 0), e)) s += (u = o[l] - e[l]) * u
                  s < f && ((h = c), (f = s))
                }
                if ((r || a) < a && r < Math.sqrt(f)) return e
              } else for (; --c > -1; ) (s = (o = t[c]) - e) < 0 && (s = -s), s < f && o >= i && o <= n && ((h = c), (f = s))
              return t[h]
            },
            h = function (e, t, n, i, r, o) {
              if ("auto" === e.end) return e
              var s,
                l,
                u = e.end
              if (((n = isNaN(n) ? a : n), (i = isNaN(i) ? -a : i), "object" === typeof t)) {
                if (((s = t.calculated ? t : ("function" === typeof u ? u(t) : c(t, u, n, i, o)) || t), !t.calculated)) {
                  for (l in s) t[l] = s[l]
                  t.calculated = !0
                }
                s = s[r]
              } else s = "function" === typeof u ? u(t) : u instanceof Array ? c(t, u, n, i, o) : Number(u)
              return (
                s > n ? (s = n) : s < i && (s = i),
                {
                  max: s,
                  min: s,
                  unitFactor: e.unitFactor,
                }
              )
            },
            f = function (e, t, n) {
              for (var i in t) void 0 === e[i] && i !== n && (e[i] = t[i])
              return e
            },
            d = (o.calculateChange = function (e, t, n, i) {
              return null == i && (i = 0.05), (n * i * e) / (t instanceof ee.b ? t : t ? new ee.b(t) : ee.k.defaultEase).getRatio(i)
            }),
            p = (o.calculateDuration = function (e, t, n, i, r) {
              r = r || 0.05
              var o = i instanceof ee.b ? i : i ? new ee.b(i) : ee.k.defaultEase
              return Math.abs(((t - e) * o.getRatio(r)) / n / r)
            }),
            v = (o.calculateTweenDuration = function (t, n, i, r, a, s) {
              if (("string" === typeof t && (t = ee.k.selector(t)), !t)) return 0
              null == i && (i = 10), null == r && (r = 0.2), null == a && (a = 1), t.length && (t = t[0] || t)
              var u,
                c,
                v,
                g,
                m,
                _,
                y,
                T,
                E,
                b,
                A,
                R,
                w,
                x = 0,
                k = 9999999999,
                S = n.throwProps || n,
                C = n.ease instanceof ee.b ? n.ease : n.ease ? new ee.b(n.ease) : ee.k.defaultEase,
                P = isNaN(S.checkpoint) ? 0.05 : Number(S.checkpoint),
                O = isNaN(S.resistance) ? o.defaultResistance : Number(S.resistance)
              if (S.linkedProps)
                for (R = S.linkedProps.split(","), A = {}, w = 0; w < R.length; w++)
                  (c = S[(u = R[w])]) &&
                    ((v =
                      (g =
                        void 0 !== c.velocity && "number" === typeof c.velocity
                          ? Number(c.velocity) || 0
                          : (E = E || e.getByTarget(t)) && E.isTrackingProp(u)
                          ? E.getVelocity(u)
                          : 0) *
                        (m = isNaN(c.resistance) ? O : Number(c.resistance)) >
                      0
                        ? g / m
                        : g / -m),
                    (_ = "function" === typeof t[u] ? t[u.indexOf("set") || "function" !== typeof t["get" + u.substr(3)] ? u : "get" + u.substr(3)]() : t[u] || 0),
                    (A[u] = _ + d(g, C, v, P)))
              for (u in S)
                "resistance" !== u &&
                  "checkpoint" !== u &&
                  "preventOvershoot" !== u &&
                  "linkedProps" !== u &&
                  "radius" !== u &&
                  ("object" !== typeof (c = S[u]) &&
                    ((E = E || e.getByTarget(t)) && E.isTrackingProp(u)
                      ? (c =
                          "number" === typeof c
                            ? {
                                velocity: c,
                              }
                            : {
                                velocity: E.getVelocity(u),
                              })
                      : (v = (g = Number(c) || 0) * O > 0 ? g / O : g / -O)),
                  "object" === typeof c &&
                    ((v =
                      (g =
                        void 0 !== c.velocity && "number" === typeof c.velocity
                          ? Number(c.velocity) || 0
                          : (E = E || e.getByTarget(t)) && E.isTrackingProp(u)
                          ? E.getVelocity(u)
                          : 0) *
                        (m = isNaN(c.resistance) ? O : Number(c.resistance)) >
                      0
                        ? g / m
                        : g / -m),
                    (y =
                      (_ = "function" === typeof t[u] ? t[u.indexOf("set") || "function" !== typeof t["get" + u.substr(3)] ? u : "get" + u.substr(3)]() : t[u] || 0) +
                      d(g, C, v, P)),
                    void 0 !== c.end && ((c = h(c, A && u in A ? A : y, c.max, c.min, u, S.radius)), (s || l) && (S[u] = f(c, S[u], "end"))),
                    void 0 !== c.max && y > Number(c.max) + 1e-10
                      ? ((b = c.unitFactor || o.defaultUnitFactors[u] || 1),
                        (T = (_ > c.max && c.min !== c.max) || (g * b > -15 && g * b < 45) ? r + 0.1 * (i - r) : p(_, c.max, g, C, P)) + a < k && (k = T + a))
                      : void 0 !== c.min &&
                        y < Number(c.min) - 1e-10 &&
                        ((b = c.unitFactor || o.defaultUnitFactors[u] || 1),
                        (T = (_ < c.min && c.min !== c.max) || (g * b > -45 && g * b < 15) ? r + 0.1 * (i - r) : p(_, c.min, g, C, P)) + a < k && (k = T + a)),
                    T > x && (x = T)),
                  v > x && (x = v))
              return x > k && (x = k), x > i ? i : x < r ? r : x
            }),
            g = (o.prototype = new ee.l("throwProps"))
          return (
            (g.constructor = o),
            (o.version = "0.11.2"),
            (o.API = 2),
            (o._autoCSS = !0),
            (o.defaultResistance = 100),
            (o.defaultUnitFactors = {
              time: 1e3,
              totalTime: 1e3,
            }),
            (o.track = function (t, n, i) {
              return e.track(t, n, i)
            }),
            (o.untrack = function (t, n) {
              e.untrack(t, n)
            }),
            (o.isTracking = function (t, n) {
              return e.isTracking(t, n)
            }),
            (o.getVelocity = function (t, n) {
              var i = e.getByTarget(t)
              return i ? i.getVelocity(n) : NaN
            }),
            (o._cssRegister = function () {
              var i = s.com.greensock.plugins.CSSPlugin
              if (i) {
                var r = i._internals,
                  a = r._parseToProxy,
                  l = r._setPluginRatio,
                  c = r.CSSPropTween
                r._registerComplexSpecialProp("throwProps", {
                  parser: function (i, r, s, h, f, d) {
                    d = new o()
                    var p,
                      v,
                      g,
                      m,
                      _ = {},
                      y = {},
                      T = {},
                      E = {},
                      b = {},
                      A = {}
                    for (v in ((n = {}), r))
                      "resistance" !== v &&
                        "preventOvershoot" !== v &&
                        "linkedProps" !== v &&
                        "radius" !== v &&
                        ("object" === typeof (p = r[v])
                          ? (void 0 !== p.velocity && "number" === typeof p.velocity
                              ? (_[v] = Number(p.velocity) || 0)
                              : ((m = m || e.getByTarget(i)), (_[v] = m && m.isTrackingProp(v) ? m.getVelocity(v) : 0)),
                            void 0 !== p.end && (E[v] = p.end),
                            void 0 !== p.min && (y[v] = p.min),
                            void 0 !== p.max && (T[v] = p.max),
                            p.preventOvershoot && (A[v] = !0),
                            void 0 !== p.resistance && (!0, (b[v] = p.resistance)))
                          : "number" === typeof p
                          ? (_[v] = p)
                          : (m = m || e.getByTarget(i)) && m.isTrackingProp(v)
                          ? (_[v] = m.getVelocity(v))
                          : (_[v] = p || 0),
                        u[v] && h._enableTransforms(2 === u[v]))
                    for (v in ((g = a(i, _, h, f, d)), (t = g.proxy), (_ = g.end), t))
                      n[v] = {
                        velocity: _[v],
                        min: y[v],
                        max: T[v],
                        end: E[v],
                        resistance: b[v],
                        preventOvershoot: A[v],
                      }
                    return (
                      null != r.resistance && (n.resistance = r.resistance),
                      null != r.linkedProps && (n.linkedProps = r.linkedProps),
                      null != r.radius && (n.radius = r.radius),
                      r.preventOvershoot && (n.preventOvershoot = !0),
                      (f = new c(i, "throwProps", 0, 0, g.pt, 2)),
                      h._overwriteProps.pop(),
                      (f.plugin = d),
                      (f.setRatio = l),
                      (f.data = g),
                      d._onInitTween(t, n, h._tween),
                      f
                    )
                  },
                })
              }
            }),
            (o.to = function (e, o, a, s, u) {
              o.throwProps ||
                (o = {
                  throwProps: o,
                }),
                0 === u && (o.throwProps.preventOvershoot = !0),
                (l = !0)
              var c = new ee.k(e, s || 1, o)
              return (
                c.render(0, !0, !0),
                c.vars.css
                  ? (c.duration(
                      v(
                        t,
                        {
                          throwProps: n,
                          ease: o.ease,
                        },
                        a,
                        s,
                        u
                      )
                    ),
                    c._delay && !c.vars.immediateRender ? c.invalidate() : i._onInitTween(t, r, c),
                    (l = !1),
                    c)
                  : (c.kill(), (c = new ee.k(e, v(e, o, a, s, u), o)), (l = !1), c)
              )
            }),
            (g._onInitTween = function (t, n, o, a) {
              ;(this.target = t), (this._props = []), (i = this), (r = n)
              var s,
                u,
                c,
                p,
                v,
                g,
                m,
                _,
                y,
                T,
                E,
                b,
                A = o._ease,
                R = isNaN(n.checkpoint) ? 0.05 : Number(n.checkpoint),
                w = o._duration,
                x = n.preventOvershoot,
                k = 0
              if (n.linkedProps)
                for (E = n.linkedProps.split(","), T = {}, b = 0; b < E.length; b++)
                  (u = n[(s = E[b])]) &&
                    ((v =
                      void 0 !== u.velocity && "number" === typeof u.velocity
                        ? Number(u.velocity) || 0
                        : (y = y || e.getByTarget(t)) && y.isTrackingProp(s)
                        ? y.getVelocity(s)
                        : 0),
                    (c = "function" === typeof t[s] ? t[s.indexOf("set") || "function" !== typeof t["get" + s.substr(3)] ? s : "get" + s.substr(3)]() : t[s] || 0),
                    (T[s] = c + d(v, A, w, R)))
              for (s in n)
                if ("resistance" !== s && "checkpoint" !== s && "preventOvershoot" !== s && "linkedProps" !== s && "radius" !== s) {
                  if (("function" === typeof (u = n[s]) && (u = u(a, t)), "number" === typeof u)) v = Number(u) || 0
                  else if ("object" !== typeof u || isNaN(u.velocity)) {
                    if (!(y = y || e.getByTarget(t)) || !y.isTrackingProp(s)) throw "ERROR: No velocity was defined in the throwProps tween of " + t + " property: " + s
                    v = y.getVelocity(s)
                  } else v = Number(u.velocity)
                  ;(g = d(v, A, w, R)),
                    (_ = 0),
                    (c = (p = "function" === typeof t[s]) ? t[s.indexOf("set") || "function" !== typeof t["get" + s.substr(3)] ? s : "get" + s.substr(3)]() : t[s]),
                    "object" === typeof u &&
                      ((m = c + g),
                      void 0 !== u.end && ((u = h(u, T && s in T ? T : m, u.max, u.min, s, n.radius)), l && (n[s] = f(u, n[s], "end"))),
                      void 0 !== u.max && Number(u.max) < m
                        ? x || u.preventOvershoot
                          ? (g = u.max - c)
                          : (_ = u.max - c - g)
                        : void 0 !== u.min && Number(u.min) > m && (x || u.preventOvershoot ? (g = u.min - c) : (_ = u.min - c - g))),
                    (this._overwriteProps[k] = s),
                    (this._props[k++] = {
                      p: s,
                      s: c,
                      c1: g,
                      c2: _,
                      f: p,
                      r: !1,
                    })
                }
              return !0
            }),
            (g._kill = function (e) {
              for (var t = this._props.length; --t > -1; ) null != e[this._props[t].p] && this._props.splice(t, 1)
              return ee.l.prototype._kill.call(this, e)
            }),
            (g._mod = function (e) {
              for (var t, n = this._props, i = n.length; --i > -1; ) "function" === typeof (t = e[n[i].p] || e.throwProps) && (n[i].m = t)
            }),
            (g.setRatio = function (e) {
              for (var t, n, i = this._props.length; --i > -1; )
                (n = (t = this._props[i]).s + t.c1 * e + t.c2 * e * e),
                  t.m ? (n = t.m(n, this.target)) : 1 === e && (n = ((1e4 * n + (n < 0 ? -0.5 : 0.5)) | 0) / 1e4),
                  t.f ? this.target[t.p](n) : (this.target[t.p] = n)
            }),
            ee.l.activate([o]),
            o
          )
        },
        !0
      ),
        ee.m._gsDefine(
          "utils.VelocityTracker",
          ["TweenLite"],
          function () {
            var e,
              t,
              n,
              i = /([A-Z])/g,
              r = {},
              o = ee.m.document,
              a = {
                x: 1,
                y: 1,
                z: 2,
                scale: 1,
                scaleX: 1,
                scaleY: 1,
                rotation: 1,
                rotationZ: 1,
                rotationX: 2,
                rotationY: 2,
                skewX: 1,
                skewY: 1,
                xPercent: 1,
                yPercent: 1,
              },
              s =
                "undefined" !== typeof window
                  ? window
                  : o.defaultView || {
                      getComputedStyle: function () {},
                    },
              l = function (e, t, n) {
                var o,
                  a = (e._gsTransform || r)[t]
                return a || 0 === a
                  ? a
                  : (e.style[t]
                      ? (a = e.style[t])
                      : (n = n || ((o = e), s.getComputedStyle(o)))
                      ? (a = n[t] || n.getPropertyValue(t) || n.getPropertyValue(t.replace(i, "-$1").toLowerCase()))
                      : e.currentStyle && (a = e.currentStyle[t]),
                    parseFloat(a) || 0)
              },
              u = ee.k.ticker,
              c = function (e, t, n) {
                ;(this.p = e),
                  (this.f = t),
                  (this.v1 = this.v2 = 0),
                  (this.t1 = this.t2 = u.time),
                  (this.css = !1),
                  (this.type = ""),
                  (this._prev = null),
                  n && ((this._next = n), (n._prev = this))
              },
              h = function () {
                var t,
                  i,
                  r = e,
                  o = u.time
                if (o - n >= 0.03)
                  for (n, n = o; r; ) {
                    for (i = r._firstVP; i; )
                      ((t = i.css ? l(r.target, i.p) : i.f ? r.target[i.p]() : r.target[i.p]) !== i.v1 || o - i.t1 > 0.15) &&
                        ((i.v2 = i.v1), (i.v1 = t), (i.t2 = i.t1), (i.t1 = o)),
                        (i = i._next)
                    r = r._next
                  }
              },
              f = function (i) {
                ;(this._lookup = {}),
                  (this.target = i),
                  (this.elem = !(!i.style || !i.nodeType)),
                  t || (u.addEventListener("tick", h, null, !1, -100), (n = u.time), (t = !0)),
                  e && ((this._next = e), (e._prev = this)),
                  (e = this)
              },
              d = (f.getByTarget = function (t) {
                for (var n = e; n; ) {
                  if (n.target === t) return n
                  n = n._next
                }
              }),
              p = f.prototype
            return (
              (p.addProp = function (e, t) {
                if (!this._lookup[e]) {
                  var n = this.target,
                    i = "function" === typeof n[e],
                    r = i ? this._altProp(e) : e,
                    o = this._firstVP
                  ;(this._firstVP = this._lookup[e] = this._lookup[r] = o = new c(r !== e && 0 === e.indexOf("set") ? r : e, i, o)),
                    (o.css = this.elem && (void 0 !== this.target.style[o.p] || a[o.p])),
                    o.css &&
                      a[o.p] &&
                      !n._gsTransform &&
                      ee.k.set(n, {
                        x: "+=0",
                        overwrite: !1,
                      }),
                    (o.type = t || (o.css && 0 === e.indexOf("rotation")) ? "deg" : ""),
                    (o.v1 = o.v2 = o.css ? l(n, o.p) : i ? n[o.p]() : n[o.p])
                }
              }),
              (p.removeProp = function (e) {
                var t = this._lookup[e]
                t &&
                  (t._prev ? (t._prev._next = t._next) : t === this._firstVP && (this._firstVP = t._next),
                  t._next && (t._next._prev = t._prev),
                  (this._lookup[e] = 0),
                  t.f && (this._lookup[this._altProp(e)] = 0))
              }),
              (p.isTrackingProp = function (e) {
                return this._lookup[e] instanceof c
              }),
              (p.getVelocity = function (e) {
                var t,
                  n,
                  i = this._lookup[e],
                  r = this.target
                if (!i) throw "The velocity of " + e + " is not being tracked."
                return (
                  (t = (i.css ? l(r, i.p) : i.f ? r[i.p]() : r[i.p]) - i.v2),
                  ("rad" !== i.type && "deg" !== i.type) || ((t %= n = "rad" === i.type ? 2 * Math.PI : 360) !== t % (n / 2) && (t = t < 0 ? t + n : t - n)),
                  t / (u.time - i.t2)
                )
              }),
              (p._altProp = function (e) {
                var t = e.substr(0, 3),
                  n = ("get" === t ? "set" : "set" === t ? "get" : t) + e.substr(3)
                return "function" === typeof this.target[n] ? n : e
              }),
              (f.getByTarget = function (t) {
                var n = e
                for ("string" === typeof t && (t = ee.k.selector(t)), t.length && t !== window && t[0] && t[0].style && !t.nodeType && (t = t[0]); n; ) {
                  if (n.target === t) return n
                  n = n._next
                }
              }),
              (f.track = function (e, t, n) {
                var i = d(e),
                  r = t.split(","),
                  o = r.length
                for (n = (n || "").split(","), i || (i = new f(e)); --o > -1; ) i.addProp(r[o], n[o] || n[0])
                return i
              }),
              (f.untrack = function (t, n) {
                var i = d(t),
                  r = (n || "").split(","),
                  o = r.length
                if (i) {
                  for (; --o > -1; ) i.removeProp(r[o])
                  ;(i._firstVP && n) || (i._prev ? (i._prev._next = i._next) : i === e && (e = i._next), i._next && (i._next._prev = i._prev))
                }
              }),
              (f.isTracking = function (e, t) {
                var n = d(e)
                return !!n && (!(t || !n._firstVP) || n.isTrackingProp(t))
              }),
              f
            )
          },
          !0
        )
      ee.o.ThrowPropsPlugin, ee.o.com.greensock.utils.VelocityTracker
      var En = n(50),
        bn = (function () {
          function e(t, n, i, r) {
            var o = this
            F()(this, e),
              (this.dragProxy = null),
              (this.currentX = 0),
              (this.targetX = 0),
              (this.tick = function () {
                var e = yn()(o.currentX, o.targetX, 0.1)
                e !== o.currentX &&
                  ((o.currentX = e),
                  W.TweenLite.set(o.carousel, {
                    x: o.currentX,
                  })),
                  requestAnimationFrame(o.tick)
              }),
              (this.wrapper = t),
              (this.carousel = n),
              (this.items = i),
              (this.deviceStateTracker = r),
              this.createDragger(),
              (this.resizeListener = new B.DisposableEventListener(window, "resize", Ve()(this.handleResize.bind(this), 150))),
              requestAnimationFrame(this.tick)
          }
          return (
            V()(e, [
              {
                key: "createDragger",
                value: function () {
                  ;(this.dragProxy = document.createElement("div")), this.wrapper.appendChild(this.dragProxy)
                  var e = Tn.a.create(this.dragProxy, {
                      type: "x",
                      throwProps: !0,
                      zIndexBoost: !1,
                      trigger: this.items,
                      overshootTolerance: 0.05,
                      edgeResistance: 0.9,
                      dragClickables: !0,
                      bounds: this.bounds,
                      snap: this.getSnap.bind(this),
                      onDrag: this.onDrag.bind(this),
                      onThrowUpdate: this.onDrag.bind(this),
                    }),
                    t = Fe()(e, 1)
                  ;(this.dragger = t[0]), this.handleResize()
                },
              },
              {
                key: "onDrag",
                value: function () {
                  this.targetX = this.dragger.x
                },
              },
              {
                key: "getSnap",
                value: function (e) {
                  var t = this.items[1].offsetLeft
                  return Math.max(this.dragger.minX, Math.min(this.dragger.maxX, Math.round(e / t) * t))
                },
              },
              {
                key: "bounds",
                get: function () {
                  return {
                    minX: -(this.carousel.scrollWidth - this.wrapper.offsetWidth),
                    maxX: 0,
                  }
                },
              },
              {
                key: "handleResize",
                value: function () {
                  this.dragger && this.dragger.applyBounds(this.bounds),
                    this.deviceStateTracker.currentDeviceState.state < En.deviceState.MEDIUM ? this.enableDragger() : this.disableDragger()
                },
              },
              {
                key: "enableDragger",
                value: function () {
                  this.dragger.enable()
                },
              },
              {
                key: "disableDragger",
                value: function () {
                  this.dragger.disable(),
                    (this.dragger.x = 0),
                    W.TweenLite.set(this.carousel, {
                      x: 0,
                    })
                },
              },
            ]),
            e
          )
        })(),
        An = {
          name: "CardCarousel",
          components: {
            ScrambleText: we,
            PrimaryButton: Kt,
          },
          extends: N.AbstractTransitionComponent,
          mixins: [Zt],
          props: {
            title: it(u.a.string),
            description: it(u.a.string),
            ctaLabel: it(u.a.string),
            ctaHref: it(u.a.string),
            cards: u.a.arrayOf(u.a.shape(mn)),
            alternateLayout: u.a.bool.def(!1),
          },
          watch: {
            isInThreshold: function (e) {
              e ? this.transitionIn(!0) : this.transitionOut(!0)
            },
          },
          methods: {
            handleAllComponentsReady: function () {
              ;(this.transitionController = new gn(this)),
                (this.carousel = new bn(this.$refs.wrapper, this.$refs.carousel, this.$refs.item, this.$deviceStateTracker)),
                this.isReady()
            },
            onCardClick: function (e) {
              window.open(e)
            },
          },
        },
        Rn = n(194)
      var wn = Object(v.a)(
          An,
          pn,
          [],
          !1,
          function (e) {
            this.$style = Rn.default.locals || Rn.default
          },
          null,
          null
        ).exports,
        xn = {
          name: "TechnologyPage",
          components: {
            ContentSection: sn,
            CardCarousel: wn,
          },
          extends: N.AbstractPageTransitionComponent,
          computed: {
            cards: function () {
              return this.$store.getters.translation.technology.cards
            },
          },
          created: function () {
            this.flow = N.FlowType.CROSS
          },
          methods: {
            handleAllComponentsReady: function () {
              ;(this.transitionController = new dn(this)), this.isReady()
            },
          },
        },
        kn = n(195)
      var Sn = Object(v.a)(
          xn,
          hn,
          [],
          !1,
          function (e) {
            this.$style = kn.default.locals || kn.default
          },
          null,
          null
        ).exports,
        Cn = function () {
          var e = this,
            t = e._self._c
          e._self._setupProxy
          return t(
            "div",
            {
              class: [e.$style.detailPage, I()({}, e.$style.isHero, e.isHero)],
            },
            [
              t("DetailHero", {
                ref: "hero",
                attrs: {
                  slug: e.slug,
                },
                on: {
                  play: e.onHeroPlay,
                  endStateStarted: e.onEndStateStarted,
                  complete: e.onHeroComplete,
                  navigate: e.onHeroNavigate,
                },
              }),
              e._v(" "),
              t(
                "div",
                {
                  class: e.$style.content,
                },
                [
                  t("DetailIntro", {
                    attrs: {
                      slug: e.slug,
                    },
                  }),
                  e._v(" "),
                  t("NasaViewer", {
                    ref: "webgl",
                    attrs: {
                      slug: e.slug,
                    },
                  }),
                  e._v(" "),
                  t(
                    "div",
                    {
                      staticClass: "content-page",
                    },
                    [
                      t("ContentSection", {
                        class: e.$style.contentSection,
                        attrs: {
                          title: e.pageData.technology.title,
                          content: e.pageData.technology.content,
                          cta: e.pageData.technology.cta,
                        },
                      }),
                      e._v(" "),
                      t("DetailTeam", {
                        key: "team-".concat(e.slug),
                        class: e.$style.team,
                        attrs: {
                          slug: e.slug,
                        },
                      }),
                    ],
                    1
                  ),
                  e._v(" "),
                  t("DiscoverProducts", {
                    attrs: {
                      title: e.pageData.cloudProducts.title,
                      description: e.pageData.cloudProducts.description,
                      cards: e.pageData.cloudProducts.cards,
                      cta: e.pageData.cloudProducts.cta,
                    },
                  }),
                ],
                1
              ),
            ],
            1
          )
        }
      Cn._withStripped = !0
      var Pn = n(31),
        On = n.n(Pn)
      function Mn(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ("function" === typeof Proxy) return !0
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var n,
            i = X()(e)
          if (t) {
            var r = X()(this).constructor
            n = Reflect.construct(i, arguments, r)
          } else n = i.apply(this, arguments)
          return j()(this, n)
        }
      }
      var In = (function (e) {
          z()(n, e)
          var t = Mn(n)
          function n() {
            return F()(this, n), t.apply(this, arguments)
          }
          return (
            V()(n, [
              {
                key: "setupTransitionInTimeline",
                value: function (e, t, n) {
                  var i = t.$refs.hero
                  e.add(this.getTimeline(i))
                },
              },
              {
                key: "setupTransitionOutTimeline",
                value: function (e, t, n) {
                  e.add(Lt(t.$el), 0)
                },
              },
              {
                key: "setupLoopingAnimationTimeline",
                value: function (e, t, n) {},
              },
            ]),
            n
          )
        })(N.AbstractTransitionController),
        Ln = function () {
          var e = this,
            t = e._self._c
          e._self._setupProxy
          return t(
            "header",
            {
              class: ["heading-xl", e.$style.detailHero],
            },
            [
              t("VideoPlayer", {
                ref: "video",
                attrs: {
                  src: "".concat(e.$storageRoot).concat(e.heroVideoSource),
                  "top-navigation-indent": !0,
                  "controls-visible": e.controlsVisible,
                  "skip-label": "",
                },
                on: {
                  playStateChange: e.onVideoPlayStateChange,
                  endStateChange: e.onEndStateChange,
                  skip: e.onVideoSkip,
                },
              }),
              e._v(" "),
              t("LoopingVideo", {
                class: [e.$style.loopVideo, I()({}, e.$style.isActive, e.isHeroComplete && e.inView)],
                attrs: {
                  src: e.$assetLoader.getAsset(e.GLOBAL_ASSETS["LOOP_".concat(e.slug.toUpperCase())]),
                  "is-active": e.isHeroComplete && !this.isPreviousActive && !this.isNextActive,
                  autoplay: !1,
                },
              }),
              e._v(" "),
              t("LoopingVideo", {
                ref: "previousLoopVideo",
                class: e.$style.navigationVideo,
                attrs: {
                  src: "".concat(e.$versionRoot).concat(e.previousItem.loop),
                  "is-active": e.isPreviousActive,
                  autoplay: !1,
                },
              }),
              e._v(" "),
              t("LoopingVideo", {
                ref: "nextLoopVideo",
                class: e.$style.navigationVideo,
                attrs: {
                  src: "".concat(e.$versionRoot).concat(e.nextItem.loop),
                  "is-active": e.isNextActive,
                  autoplay: !1,
                },
              }),
              e._v(" "),
              t(
                "div",
                {
                  class: ["abs-fill", e.$style.maskWrapper],
                },
                [
                  t("span", {
                    ref: "topMask",
                    class: e.$style.mask,
                  }),
                  e._v(" "),
                  t("span", {
                    ref: "bottomMask",
                    class: e.$style.mask,
                  }),
                ]
              ),
              e._v(" "),
              t(
                "div",
                {
                  ref: "title",
                  class: e.$style.pageTitle,
                },
                [
                  t(
                    "h1",
                    {
                      ref: "currentTitle",
                      class: ["heading-xl", e.$style.titleText],
                    },
                    [
                      t(
                        "span",
                        {
                          class: e.$style.titleTextAnimation,
                          attrs: {
                            "data-title": e.pageData.title,
                          },
                        },
                        [e._v(e._s(e.pageData.title))]
                      ),
                    ]
                  ),
                  e._v(" "),
                  t(
                    "p",
                    {
                      ref: "previousTitle",
                      class: ["heading-xl", e.$style.titleText, e.$style.previous],
                      attrs: {
                        "data-title": e.previousItem.title,
                        "data-inactive": "true",
                      },
                    },
                    [
                      t(
                        "span",
                        {
                          on: {
                            click: e.onPreviousClick,
                            mouseenter: function (t) {
                              return e.$soundManager.play(e.SampleName.HOVER)
                            },
                          },
                        },
                        [
                          t(
                            "span",
                            {
                              class: e.$style.titleTextAnimation,
                              attrs: {
                                "data-title": e.previousItem.title,
                              },
                            },
                            [e._v(e._s(e.previousItem.title))]
                          ),
                        ]
                      ),
                    ]
                  ),
                  e._v(" "),
                  t(
                    "p",
                    {
                      ref: "nextTitle",
                      class: ["heading-xl", e.$style.titleText, e.$style.next],
                      attrs: {
                        "data-title": e.nextItem.title,
                        "data-inactive": "true",
                      },
                    },
                    [
                      t(
                        "span",
                        {
                          on: {
                            click: e.onNextClick,
                            mouseenter: function (t) {
                              return e.$soundManager.play(e.SampleName.HOVER)
                            },
                          },
                        },
                        [
                          t(
                            "span",
                            {
                              class: e.$style.titleTextAnimation,
                              attrs: {
                                "data-title": e.nextItem.title,
                              },
                            },
                            [e._v(e._s(e.nextItem.title))]
                          ),
                        ]
                      ),
                    ]
                  ),
                ]
              ),
              e._v(" "),
              t("PlayButton", {
                ref: "playButton",
                nativeOn: {
                  click: function (t) {
                    return t.preventDefault(), e.onPlayClick.apply(null, arguments)
                  },
                },
              }),
            ],
            1
          )
        }
      Ln._withStripped = !0
      var Nn = n(137),
        Bn = n.n(Nn),
        Dn = n(67),
        Fn = n.n(Dn),
        Un = n(299),
        Vn = n(135),
        Hn = n.n(Vn)
      function zn(e) {
        var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          n = new W.TimelineMax()
        return (
          n.fromTo(
            e,
            1.2,
            {
              scale: 0.7,
              rotation: 10,
            },
            {
              scale: 1,
              rotation: 0,
              ease: W.Power3.easeOut,
              clearProps: "opacity,scale,rotation",
            },
            0
          ),
          t &&
            n.fromTo(
              e,
              0.6,
              {
                opacity: 0,
              },
              {
                opacity: 1,
                ease: W.Linear.easeNone,
                clearProps: "opacity",
              },
              0
            ),
          n
        )
      }
      function $n(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ("function" === typeof Proxy) return !0
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var n,
            i = X()(e)
          if (t) {
            var r = X()(this).constructor
            n = Reflect.construct(i, arguments, r)
          } else n = i.apply(this, arguments)
          return j()(this, n)
        }
      }
      var jn = (function (e) {
        z()(n, e)
        var t = $n(n)
        function n() {
          var e
          return (
            F()(this, n),
            ((e = t.apply(this, arguments)).wheelListener = null),
            (e.wheelCallback = function () {}),
            (e.wheel = function (t, n) {
              n > 0 && (e.removeWheel(), e.wheelCallback())
            }),
            e
          )
        }
        return (
          V()(n, [
            {
              key: "addWheel",
              value: function (e) {
                null === this.wheelListener && ((this.wheelCallback = e), (this.wheelListener = Hn()(this.wheel, !0)))
              },
            },
            {
              key: "removeWheel",
              value: function () {
                this.wheelListener && (window.removeEventListener("wheel", this.wheelListener), (this.wheelListener = null))
              },
            },
            {
              key: "scrollToTop",
              value: function () {
                return 0 === this.parentController.$scrollTracker.y
                  ? Promise.resolve()
                  : new Promise(function (e) {
                      W.TweenLite.to(window, 0.3, {
                        scrollTo: {
                          y: 0,
                          autoKill: !1,
                        },
                        ease: W.Power3.easeInOut,
                        onComplete: function () {
                          return e()
                        },
                      })
                    })
              },
            },
            {
              key: "navigateHero",
              value: function (e) {
                Un.a
                var t = this.parentController.$refs,
                  i = t.title,
                  r = t.currentTitle,
                  o = t.previousTitle,
                  a = t.nextTitle,
                  s = this.parentController.$refs,
                  l = s.previousLoopVideo,
                  u = s.nextLoopVideo,
                  c = new W.TimelineMax()
                c.to(
                  i,
                  1,
                  {
                    xPercent: -50 * e,
                    ease: W.Power3.easeInOut,
                  },
                  0
                )
                var h = (e > 0 ? u : l).$el
                c.add(zn(h), 0), c.add(q(h, 0.5, 1), 0)
                var f = e > 0 ? a : o
                return (
                  c.add(function () {
                    return r.setAttribute(n.INACTIVE_ATTRIBUTE, "true")
                  }, 0),
                  c.add(function () {
                    return f.removeAttribute(n.INACTIVE_ATTRIBUTE)
                  }, 0),
                  new Promise(function (e) {
                    c.eventCallback("onComplete", function () {
                      return e()
                    })
                  })
                )
              },
            },
            {
              key: "resetNavigation",
              value: function () {
                var e = this.parentController.$refs,
                  t = e.title,
                  i = e.currentTitle,
                  r = e.previousTitle,
                  o = e.nextTitle
                W.TweenLite.set(t, {
                  clearProps: "xPercent",
                }),
                  [r, o].forEach(function (e) {
                    return e.setAttribute(n.INACTIVE_ATTRIBUTE, "true")
                  }),
                  i.removeAttribute(n.INACTIVE_ATTRIBUTE)
              },
            },
            {
              key: "resetNavigationVideos",
              value: function () {
                var e = this.parentController.$refs,
                  t = e.previousLoopVideo,
                  n = e.nextLoopVideo
                W.TweenLite.set([t.$el, n.$el], {
                  autoAlpha: 0,
                })
              },
            },
            {
              key: "showContent",
              value: function () {
                var e = new W.TimelineMax(),
                  t = this.parentController.$refs,
                  n = t.topMask,
                  i = t.bottomMask,
                  r = t.title
                return (
                  e.to([n, i], 1, {
                    yPercent: 0,
                    ease: W.Power2.easeInOut,
                    clearProps: "yPercent",
                  }),
                  e.set(
                    r,
                    {
                      autoAlpha: 1,
                    },
                    0.1
                  ),
                  e.fromTo(
                    r,
                    1,
                    {
                      yPercent: 100,
                    },
                    {
                      yPercent: 0,
                      ease: W.Power2.easeOut,
                      clearProps: "yPercent,opacity,visibility",
                    },
                    0.3
                  ),
                  new Promise(function (t) {
                    e.eventCallback("onComplete", function () {
                      return t()
                    })
                  })
                )
              },
            },
            {
              key: "hideContent",
              value: function () {
                var e = new W.TimelineMax(),
                  t = this.parentController.$refs,
                  n = t.topMask,
                  i = t.bottomMask,
                  r = t.title
                e.to(n, 1, {
                  yPercent: -100,
                  ease: W.Power2.easeInOut,
                }),
                  e.to(
                    i,
                    1,
                    {
                      yPercent: 100,
                      ease: W.Power2.easeInOut,
                    },
                    0
                  ),
                  e.to(
                    r,
                    0.5,
                    {
                      autoAlpha: 0,
                      ease: W.Linear.easeNone,
                    },
                    0
                  )
              },
            },
            {
              key: "setupTransitionInTimeline",
              value: function (e, t, n) {
                var i = t.$refs,
                  r = i.video,
                  o = i.previousLoopVideo,
                  a = i.nextLoopVideo,
                  s = t.$refs,
                  l = s.topMask,
                  u = s.bottomMask,
                  c = s.title
                W.TweenLite.set([o.$el, a.$el], {
                  autoAlpha: 0,
                }),
                  e.set(l, {
                    yPercent: -100,
                  }),
                  e.set(
                    u,
                    {
                      yPercent: 100,
                    },
                    0
                  ),
                  e.set(
                    c,
                    {
                      autoAlpha: 0,
                    },
                    0
                  ),
                  e.add(this.getTimeline(r), 0)
              },
            },
            {
              key: "setupTransitionOutTimeline",
              value: function (e, t, n) {},
            },
            {
              key: "setupLoopingAnimationTimeline",
              value: function (e, t, n) {},
            },
          ]),
          n
        )
      })(N.AbstractTransitionController)
      jn.INACTIVE_ATTRIBUTE = "data-inactive"
      var Gn = {
        name: "DetailPageComponentMixin",
        props: {
          slug: u.a.string.isRequired,
        },
        computed: {
          pageData: function () {
            return null === this.slug ? null : this.$store.getters.translation.challenges[this.slug]
          },
        },
      }
      function Xn(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e)
          t &&
            (i = i.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, i)
        }
        return n
      }
      function Wn(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Xn(Object(n), !0).forEach(function (t) {
                I()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Xn(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var Yn = function (e, t, n) {
          var i = n.challenges,
            r = Object.keys(i),
            o = r.findIndex(function (e) {
              return e === t
            })
          return i[r[(o + e + (e < 0 ? r.length : 0)) % r.length]]
        },
        qn = {
          name: "DetailHero",
          components: {
            LoopingVideo: Xe,
            VideoPlayer: Tt,
            PlayButton: ve,
          },
          extends: N.AbstractTransitionComponent,
          mixins: [Gn, Zt],
          data: function () {
            return {
              heroVideoSource: "",
              isVideoPlaying: !1,
              isVideoEndState: !1,
              isHeroComplete: !1,
              controlsVisible: !0,
              isPreviousActive: !1,
              isNextActive: !1,
            }
          },
          computed: {
            previousItem: function () {
              return Yn(-1, this.slug, this.$store.getters.translation)
            },
            nextItem: function () {
              return Yn(1, this.slug, this.$store.getters.translation)
            },
          },
          watch: {
            isVideoPlaying: function (e) {
              e
                ? ((this.isHeroComplete = !1), (this.controlsVisible = !0), this.$refs.playButton.transitionOut(!0), this.$emit("play"), this.clearStartTimeout())
                : this.$refs.playButton.transitionIn(!0)
            },
            isVideoEndState: function (e) {
              e
                ? ((this.controlsVisible = !1), this.$emit("endStateStarted"), this.transitionController.showContent().then(this.onHeroAnimationComplete))
                : this.transitionController.hideContent()
            },
            isHeroComplete: function (e) {
              e ? this.transitionController.removeWheel() : this.transitionController.addWheel(this.onVideoSkip)
            },
          },
          mounted: function () {
            this.heroVideoSource = this.pageData.full
          },
          methods: Wn(
            Wn(
              {},
              Object(L.b)({
                setManualNavigationHidden: ct,
              })
            ),
            {},
            {
              setHeight: function (e) {
                this.$el.style.height = "".concat(e, "px")
              },
              handleAllComponentsReady: function () {
                ;(this.transitionController = new jn(this)),
                  this.transitionController.addEventListener(N.TransitionEvent.TRANSITION_IN_START, this.onTransitionInStart),
                  this.isReady()
              },
              onTransitionInStart: function () {
                var e = this
                this.setManualNavigationHidden(!0),
                  this.$refs.video.play(),
                  this.transitionController.addWheel(this.onVideoSkip),
                  (this.autoplayStartTimeout = setTimeout(function () {
                    e.$refs.playButton.transitionIn(!0)
                  }, 1e3))
              },
              onPlayClick: function () {
                this.$refs.video.play()
              },
              onVideoPlayStateChange: function (e) {
                this.isVideoPlaying = e
              },
              onEndStateChange: function (e) {
                this.isVideoEndState = e
              },
              onVideoSkip: function () {
                this.$refs.video.gotoEndState()
              },
              onHeroAnimationComplete: function () {
                var e = this
                ;(this.isHeroComplete = !0),
                  this.$emit("complete"),
                  setTimeout(function () {
                    return e.$refs.video.stop()
                  }, 1e3)
              },
              onPreviousClick: function () {
                var e = this
                return Bn()(
                  Fn.a.mark(function t() {
                    return Fn.a.wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (t.next = 2), e.transitionController.scrollToTop()
                          case 2:
                            e.$router.push({
                              name: e.RouteNames.DETAIL,
                              params: {
                                slug: e.previousItem.slug,
                              },
                            })
                          case 3:
                          case "end":
                            return t.stop()
                        }
                    }, t)
                  })
                )()
              },
              onNextClick: function () {
                var e = this
                return Bn()(
                  Fn.a.mark(function t() {
                    return Fn.a.wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (t.next = 2), e.transitionController.scrollToTop()
                          case 2:
                            e.$router.push({
                              name: e.RouteNames.DETAIL,
                              params: {
                                slug: e.nextItem.slug,
                              },
                            })
                          case 3:
                          case "end":
                            return t.stop()
                        }
                    }, t)
                  })
                )()
              },
              detailRouteUpdate: function (e) {
                var t = this
                return Bn()(
                  Fn.a.mark(function n() {
                    var i, r
                    return Fn.a.wrap(function (n) {
                      for (;;)
                        switch ((n.prev = n.next)) {
                          case 0:
                            return (
                              (i = 1),
                              (r = t.nextItem),
                              e === t.previousItem.slug && ((t.isPreviousActive = !0), (i = -1), (r = t.previousItem)),
                              (n.next = 5),
                              t.transitionController.navigateHero(i)
                            )
                          case 5:
                            t.onNavigateComplete(r)
                          case 6:
                          case "end":
                            return n.stop()
                        }
                    }, n)
                  })
                )()
              },
              onNavigateComplete: function (e) {
                var t = this
                ;(this.heroVideoSource = e.full),
                  this.$nextTick(function () {
                    t.setManualNavigationHidden(!0),
                      t.$refs.video.play(),
                      (t.isPreviousActive = !1),
                      (t.isNextActive = !1),
                      t.transitionController.resetNavigationVideos(),
                      setTimeout(function () {
                        t.transitionController.resetNavigation(), t.$emit("navigate", e.slug)
                      }, 1200)
                  })
              },
              clearStartTimeout: function () {
                clearTimeout(this.autoplayStartTimeout)
              },
            }
          ),
        },
        Kn = n(196)
      var Zn = Object(v.a)(
          qn,
          Ln,
          [],
          !1,
          function (e) {
            this.$style = Kn.default.locals || Kn.default
          },
          null,
          null
        ).exports,
        Qn = function () {
          var e = this,
            t = e._self._c
          e._self._setupProxy
          return t(
            "div",
            {
              class: ["content-page-small heading-xl", e.$style.detailIntro],
            },
            [
              t("DetailIntroMeta", {
                ref: "meta",
                attrs: {
                  meta: e.pageData.meta,
                },
              }),
              e._v(" "),
              t(
                "div",
                {
                  ref: "content",
                  class: ["content-col-right", e.$style.content],
                },
                [
                  t(
                    "h1",
                    {
                      class: ["heading-l", e.$style.title],
                    },
                    [e._v(e._s(e.pageData.intro.title))]
                  ),
                  e._v(" "),
                  t(
                    "p",
                    {
                      class: ["copy-l"],
                    },
                    [e._v(e._s(e.pageData.intro.content))]
                  ),
                ]
              ),
            ],
            1
          )
        }
      function Jn(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ("function" === typeof Proxy) return !0
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var n,
            i = X()(e)
          if (t) {
            var r = X()(this).constructor
            n = Reflect.construct(i, arguments, r)
          } else n = i.apply(this, arguments)
          return j()(this, n)
        }
      }
      Qn._withStripped = !0
      var ei = (function (e) {
          z()(n, e)
          var t = Jn(n)
          function n() {
            return F()(this, n), t.apply(this, arguments)
          }
          return (
            V()(n, [
              {
                key: "setupTransitionInTimeline",
                value: function (e, t, n) {
                  var i = t.$refs.content
                  e.add(this.getTimeline(t.$refs.meta)),
                    e.add(Y(i), 0),
                    e.fromTo(
                      i,
                      0.8,
                      {
                        y: 0.15 * window.innerHeight,
                      },
                      {
                        y: 0,
                        ease: W.Power2.easeOut,
                        clearProps: "y",
                      },
                      0.1
                    )
                },
              },
              {
                key: "setupTransitionOutTimeline",
                value: function (e, t, n) {
                  e.add(this.getTimeline(t.$refs.meta, Ut.a.OUT)), e.add(q(t.$refs.content), 0)
                },
              },
              {
                key: "setupLoopingAnimationTimeline",
                value: function (e, t, n) {},
              },
            ]),
            n
          )
        })(N.AbstractTransitionController),
        ti = function () {
          var e = this,
            t = e._self._c
          e._self._setupProxy
          return t(
            "ul",
            {
              class: ["copy-l", "content-col-left", e.$style.detailIntroMeta],
            },
            e._l(e.meta, function (n, i) {
              return t(
                "li",
                {
                  key: "meta-".concat(i),
                  ref: "item",
                  refInFor: !0,
                },
                [
                  t("Icon", {
                    ref: "icon",
                    refInFor: !0,
                    class: e.$style.metaIcon,
                    attrs: {
                      name: n.icon,
                    },
                  }),
                  e._v(" "),
                  t(
                    "p",
                    {
                      class: e.$style.metaContent,
                    },
                    [
                      t(
                        "strong",
                        [
                          t(
                            "ScrambleText",
                            {
                              ref: "title",
                              refInFor: !0,
                              attrs: {
                                tag: "span",
                              },
                            },
                            [e._v(e._s(n.title))]
                          ),
                        ],
                        1
                      ),
                      e._v(" "),
                      t("span", {
                        ref: "value",
                        refInFor: !0,
                        domProps: {
                          innerHTML: e._s(n.value),
                        },
                      }),
                    ]
                  ),
                ],
                1
              )
            }),
            0
          )
        }
      function ni(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ("function" === typeof Proxy) return !0
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var n,
            i = X()(e)
          if (t) {
            var r = X()(this).constructor
            n = Reflect.construct(i, arguments, r)
          } else n = i.apply(this, arguments)
          return j()(this, n)
        }
      }
      ti._withStripped = !0
      var ii = (function (e) {
          z()(n, e)
          var t = ni(n)
          function n() {
            return F()(this, n), t.apply(this, arguments)
          }
          return (
            V()(n, [
              {
                key: "setupTransitionInTimeline",
                value: function (e, t, n) {
                  var i = this,
                    r = t.$refs,
                    o = r.item,
                    a = r.title,
                    s = r.value,
                    l = t.$refs.icon
                  e.add(Y(t.$el, 0.1)),
                    o.forEach(function (t, n) {
                      var r = new W.TimelineMax()
                      r.fromTo(
                        t,
                        0.5,
                        {
                          yPercent: 150,
                        },
                        {
                          yPercent: 0,
                          ease: W.Power2.easeOut,
                          clearProps: "yPercent",
                        }
                      ),
                        r.add(Y(l[n].$el, 0.8), 0),
                        r.add(i.getTimeline(a[n]), 0.1),
                        r.add(Y(s[n], 0.5), 0.3),
                        e.add(r, 0.2 * n)
                    })
                },
              },
              {
                key: "setupTransitionOutTimeline",
                value: function (e, t, n) {
                  e.add(q(t.$el, 0.5))
                },
              },
              {
                key: "setupLoopingAnimationTimeline",
                value: function (e, t, n) {},
              },
            ]),
            n
          )
        })(N.AbstractTransitionController),
        ri = {
          name: "DetailIntroMeta",
          extends: N.AbstractTransitionComponent,
          props: {
            meta: u.a.arrayOf(
              u.a.shape({
                icon: u.a.string,
                title: u.a.string,
                value: u.a.string,
              })
            ),
          },
          components: {
            ScrambleText: we,
          },
          methods: {
            handleAllComponentsReady: function () {
              ;(this.transitionController = new ii(this)), this.isReady()
            },
          },
        },
        oi = n(197)
      var ai = {
          name: "DetailIntro",
          components: {
            DetailIntroMeta: Object(v.a)(
              ri,
              ti,
              [],
              !1,
              function (e) {
                this.$style = oi.default.locals || oi.default
              },
              null,
              null
            ).exports,
          },
          extends: N.AbstractTransitionComponent,
          mixins: [Gn, Zt],
          watch: {
            isInThreshold: function (e) {
              e ? this.transitionIn(!0) : this.transitionOut(!0)
            },
          },
          methods: {
            handleAllComponentsReady: function () {
              ;(this.transitionController = new ei(this)), this.isReady()
            },
          },
        },
        si = n(198)
      var li = Object(v.a)(
          ai,
          Qn,
          [],
          !1,
          function (e) {
            this.$style = si.default.locals || si.default
          },
          null,
          null
        ).exports,
        ui = function () {
          var e = this,
            t = e._self._c
          e._self._setupProxy
          return t(
            "div",
            {
              class: ["heading-xl", e.$style.detailTeam],
            },
            [
              t(
                "h3",
                {
                  class: ["heading-l", e.$style.teamTitle],
                },
                [
                  t(
                    "ScrambleText",
                    {
                      ref: "title",
                    },
                    [e._v(e._s(e.pageData.team.title))]
                  ),
                ],
                1
              ),
              e._v(" "),
              t(
                "div",
                {
                  class: e.$style.content,
                },
                e._l(e.teams, function (n, i) {
                  return t(
                    "div",
                    {
                      key: "list-".concat(i),
                      class: e.$style.column,
                    },
                    [
                      t("TeamAccordion", {
                        ref: "accordion",
                        refInFor: !0,
                        attrs: {
                          members: n,
                        },
                      }),
                    ],
                    1
                  )
                }),
                0
              ),
            ]
          )
        }
      function ci(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ("function" === typeof Proxy) return !0
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var n,
            i = X()(e)
          if (t) {
            var r = X()(this).constructor
            n = Reflect.construct(i, arguments, r)
          } else n = i.apply(this, arguments)
          return j()(this, n)
        }
      }
      ui._withStripped = !0
      var hi = (function (e) {
          z()(n, e)
          var t = ci(n)
          function n() {
            return F()(this, n), t.apply(this, arguments)
          }
          return (
            V()(n, [
              {
                key: "setupTransitionInTimeline",
                value: function (e, t, n) {
                  var i = this,
                    r = t.$refs.title,
                    o = t.$refs.accordion
                  e.add(Y(t.$el, 0.3)),
                    e.add(this.getTimeline(r), 0.1),
                    o.forEach(function (t, n) {
                      e.add(i.getTimeline(t), 0.1 * n + 0.1)
                    })
                },
              },
              {
                key: "setupTransitionOutTimeline",
                value: function (e, t, n) {
                  e.add(q(t.$el, 0.3))
                },
              },
              {
                key: "setupLoopingAnimationTimeline",
                value: function (e, t, n) {},
              },
            ]),
            n
          )
        })(N.AbstractTransitionController),
        fi = function () {
          var e = this,
            t = e._self._c
          e._self._setupProxy
          return t(
            "ul",
            {
              class: ["copy-l", e.$style.teamAccordion],
            },
            e._l(e.members, function (n, i) {
              return t(
                "li",
                {
                  key: "description-".concat(i),
                  ref: "listItem",
                  refInFor: !0,
                },
                [
                  t(
                    "header",
                    {
                      class: [e.$style.itemHeader, I()({}, e.$style.isActive, e.activeIndex === i)],
                      on: {
                        mouseenter: function (t) {
                          return e.$soundManager.play(e.SampleName.HOVER)
                        },
                        click: function (t) {
                          return e.toggleItem(i)
                        },
                      },
                    },
                    [
                      t(
                        "h3",
                        {
                          class: ["heading-l", e.$style.memberName],
                        },
                        [
                          e._v("\n        " + e._s(n.name) + "\n        "),
                          t("Icon", {
                            class: e.$style.icon,
                            attrs: {
                              name: "plus",
                            },
                          }),
                        ],
                        1
                      ),
                      e._v(" "),
                      t(
                        "p",
                        {
                          class: e.$style.memberTitle,
                        },
                        [e._v(e._s(n.title))]
                      ),
                      e._v(" "),
                      n.image
                        ? t(
                            "figure",
                            {
                              class: e.$style.image,
                            },
                            [
                              t("img", {
                                attrs: {
                                  src: e._f("webp")("".concat(e.$versionRoot).concat(n.image)),
                                  alt: n.name,
                                },
                              }),
                            ]
                          )
                        : e._e(),
                    ]
                  ),
                  e._v(" "),
                  t(
                    "div",
                    {
                      ref: "content",
                      refInFor: !0,
                      class: e.$style.overflowContent,
                    },
                    [
                      t("div", {
                        domProps: {
                          innerHTML: e._s(n.content),
                        },
                      }),
                    ]
                  ),
                ]
              )
            }),
            0
          )
        }
      function di(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ("function" === typeof Proxy) return !0
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var n,
            i = X()(e)
          if (t) {
            var r = X()(this).constructor
            n = Reflect.construct(i, arguments, r)
          } else n = i.apply(this, arguments)
          return j()(this, n)
        }
      }
      fi._withStripped = !0
      var pi = (function (e) {
          z()(n, e)
          var t = di(n)
          function n() {
            var e
            return F()(this, n), ((e = t.apply(this, arguments)).currentActive = null), e
          }
          return (
            V()(n, [
              {
                key: "resetContent",
                value: function () {
                  W.TweenLite.set(this.parentController.$refs.content, {
                    height: 0,
                  })
                },
              },
              {
                key: "showContent",
                value: function (e) {
                  var t = this.parentController.$refs.content
                  null !== this.currentActive &&
                    W.TweenLite.to(t[this.currentActive], 0.8, {
                      height: 0,
                      ease: W.Expo.easeInOut,
                    }),
                    null !== e &&
                      W.TweenLite.to(t[e], 0.8, {
                        height: t[e].scrollHeight,
                        ease: W.Expo.easeInOut,
                        clearProps: "height",
                      }),
                    (this.currentActive = e)
                },
              },
              {
                key: "setupTransitionInTimeline",
                value: function (e, t, n) {
                  var i = t.$refs.listItem
                  e.add(Y(t.$el, 0.5)),
                    e.fromTo(
                      t.$el,
                      0.8,
                      {
                        y: 100,
                      },
                      {
                        y: 0,
                        ease: W.Power3.easeOut,
                        clearProps: "y",
                      },
                      0
                    ),
                    i.forEach(function (t, n) {
                      e.add(Y(t, 0.5), 0.1 * n),
                        e.fromTo(
                          t,
                          0.8,
                          {
                            y: 100,
                          },
                          {
                            y: 0,
                            ease: W.Power3.easeOut,
                            clearProps: "y",
                          },
                          0.1 * n
                        )
                    })
                },
              },
              {
                key: "setupTransitionOutTimeline",
                value: function (e, t, n) {},
              },
              {
                key: "setupLoopingAnimationTimeline",
                value: function (e, t, n) {},
              },
            ]),
            n
          )
        })(N.AbstractTransitionController),
        vi = {
          image: it(u.a.string),
          name: u.a.string,
          title: u.a.string,
          content: u.a.string,
        },
        gi = {
          name: "TeamAccordion",
          extends: N.AbstractTransitionComponent,
          props: {
            members: u.a.arrayOf(u.a.shape(vi)),
          },
          data: function () {
            return {
              activeIndex: null,
            }
          },
          watch: {
            activeIndex: function (e) {
              this.transitionController.showContent(e), this.$soundManager.play(this.SampleName.PLANET_SWOOSH)
            },
            members: function () {
              this.activeIndex = null
            },
          },
          methods: {
            handleAllComponentsReady: function () {
              ;(this.transitionController = new pi(this)), this.transitionController.resetContent(), this.isReady()
            },
            toggleItem: function (e) {
              this.activeIndex = this.activeIndex !== e ? e : null
            },
          },
        },
        mi = n(199)
      var _i = Object(v.a)(
          gi,
          fi,
          [],
          !1,
          function (e) {
            this.$style = mi.default.locals || mi.default
          },
          null,
          null
        ).exports,
        yi = {
          name: "DetailTeam",
          extends: N.AbstractTransitionComponent,
          mixins: [Gn, Zt],
          components: {
            ScrambleText: we,
            TeamAccordion: _i,
          },
          data: function () {
            return {
              activeItem: null,
            }
          },
          computed: {
            teams: function () {
              var e = this
              return Object.keys(this.pageData.team)
                .filter(function (e) {
                  return "title" !== e
                })
                .map(function (t) {
                  return e.pageData.team[t]
                })
            },
          },
          watch: {
            activeItem: function () {
              this.showDetailItem()
            },
            isInThreshold: function (e) {
              e ? this.transitionIn(!0) : this.transitionOut(!0)
            },
          },
          mounted: function () {
            this.resizeListener = new B.DisposableEventListener(window, "resize", Ve()(this.handleResize, 150))
          },
          methods: {
            handleAllComponentsReady: function () {
              ;(this.transitionController = new hi(this)), this.isReady()
            },
            handleResize: function () {},
          },
        },
        Ti = n(200)
      var Ei = Object(v.a)(
          yi,
          ui,
          [],
          !1,
          function (e) {
            this.$style = Ti.default.locals || Ti.default
          },
          null,
          null
        ).exports,
        bi = function () {
          var e = this,
            t = e._self._c
          e._self._setupProxy
          return t(
            "div",
            {
              class: ["heading-xl", e.$style.discoverProducts],
            },
            [
              t(
                "div",
                {
                  class: ["content-page", e.$style.content],
                },
                [
                  t(
                    "section",
                    {
                      class: e.$style.contentWrapper,
                    },
                    [
                      t(
                        "header",
                        {
                          class: e.$style.header,
                        },
                        [
                          t(
                            "div",
                            {
                              class: ["heading-l", e.$style.title],
                            },
                            [
                              t(
                                "ScrambleText",
                                {
                                  ref: "title",
                                },
                                [e._v(e._s(e.title))]
                              ),
                            ],
                            1
                          ),
                          e._v(" "),
                          e.description
                            ? t(
                                "p",
                                {
                                  ref: "description",
                                  class: ["copy-m", e.$style.description],
                                },
                                [e._v(e._s(e.description))]
                              )
                            : e._e(),
                          e._v(" "),
                          e.cta
                            ? t(
                                "div",
                                {
                                  ref: "cta",
                                },
                                [
                                  t(
                                    "PrimaryButton",
                                    {
                                      class: e.$style.cta,
                                      attrs: {
                                        href: e.cta.href,
                                        "event-category": e.$root.name,
                                        "event-action": "Click",
                                        "event-label": "Explore all products",
                                        target: "_blank",
                                        rel: "noopener",
                                      },
                                    },
                                    [e._v(e._s(e.cta.label))]
                                  ),
                                ],
                                1
                              )
                            : e._e(),
                        ]
                      ),
                      e._v(" "),
                      t("CardCarousel", {
                        class: e.$style.carousel,
                        attrs: {
                          cards: e.cards,
                          "alternate-layout": !0,
                        },
                      }),
                      e._v(" "),
                      t("span", {
                        class: e.$style.ctaPlaceholder,
                      }),
                    ],
                    1
                  ),
                ]
              ),
            ]
          )
        }
      function Ai(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ("function" === typeof Proxy) return !0
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var n,
            i = X()(e)
          if (t) {
            var r = X()(this).constructor
            n = Reflect.construct(i, arguments, r)
          } else n = i.apply(this, arguments)
          return j()(this, n)
        }
      }
      bi._withStripped = !0
      var Ri = (function (e) {
          z()(n, e)
          var t = Ai(n)
          function n() {
            return F()(this, n), t.apply(this, arguments)
          }
          return (
            V()(n, [
              {
                key: "setupTransitionInTimeline",
                value: function (e, t, n) {
                  var i = t.$refs.title,
                    r = t.$refs,
                    o = r.description,
                    a = r.cta
                  e.add(this.getTimeline(i)), o && e.add(Y(o, 0.6), 0.3), a && e.add(Y(a, 0.6), 0.5)
                },
              },
              {
                key: "setupTransitionOutTimeline",
                value: function (e, t, n) {
                  var i = t.$refs.title,
                    r = t.$refs.cta
                  e.add(this.getTimeline(i, Ut.a.OUT)), r && e.add(q(r, 0.3), "-=0.3")
                },
              },
              {
                key: "setupLoopingAnimationTimeline",
                value: function (e, t, n) {},
              },
            ]),
            n
          )
        })(N.AbstractTransitionController),
        wi = {
          name: "DiscoverProducts",
          props: {
            title: u.a.string.isRequired,
            description: it(u.a.string.isRequired),
            cards: u.a.arrayOf(u.a.shape(mn)),
            cta: it(
              u.a.shape({
                label: u.a.string,
                href: u.a.string,
              })
            ),
          },
          components: {
            ScrambleText: we,
            PrimaryButton: Kt,
            CardCarousel: wn,
          },
          extends: N.AbstractTransitionComponent,
          mixins: [Zt],
          watch: {
            isInThreshold: function (e) {
              e ? this.transitionIn(!0) : this.transitionOut(!0)
            },
          },
          methods: {
            handleAllComponentsReady: function () {
              ;(this.transitionController = new Ri(this)), this.isReady()
            },
          },
        },
        xi = n(201)
      var ki = Object(v.a)(
          wi,
          bi,
          [],
          !1,
          function (e) {
            this.$style = xi.default.locals || xi.default
          },
          null,
          null
        ).exports,
        Si = function () {
          var e = this._self._c
          this._self._setupProxy
          return e(
            "div",
            {
              class: [this.$style.nasaViewer],
            },
            [
              e("div", {
                ref: "webgl",
                class: this.$style.webglContainer,
              }),
            ]
          )
        }
      function Ci(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ("function" === typeof Proxy) return !0
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var n,
            i = X()(e)
          if (t) {
            var r = X()(this).constructor
            n = Reflect.construct(i, arguments, r)
          } else n = i.apply(this, arguments)
          return j()(this, n)
        }
      }
      Si._withStripped = !0
      var Pi = (function (e) {
          z()(n, e)
          var t = Ci(n)
          function n() {
            return F()(this, n), t.apply(this, arguments)
          }
          return (
            V()(n, [
              {
                key: "setupTransitionInTimeline",
                value: function (e, t, n) {},
              },
              {
                key: "setupTransitionOutTimeline",
                value: function (e, t, n) {},
              },
              {
                key: "setupLoopingAnimationTimeline",
                value: function (e, t, n) {},
              },
            ]),
            n
          )
        })(N.AbstractTransitionController),
        Oi = n(13),
        Mi = n.n(Oi),
        Ii = (function () {
          function e() {
            F()(this, e), (this.isDestructed = !1)
          }
          return (
            V()(e, [
              {
                key: "throwAlreadyDestructed",
                value: function () {
                  console.error("Cannot destruct twice")
                },
              },
              {
                key: "destruct",
                value: function () {
                  ;(this.isDestructed = !0), (this.destruct = this.throwAlreadyDestructed)
                },
              },
            ]),
            e
          )
        })()
      function Li(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ("function" === typeof Proxy) return !0
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var n,
            i = X()(e)
          if (t) {
            var r = X()(this).constructor
            n = Reflect.construct(i, arguments, r)
          } else n = i.apply(this, arguments)
          return j()(this, n)
        }
      }
      var Ni = (function (e) {
          z()(n, e)
          var t = Li(n)
          function n() {
            var e
            return F()(this, n), ((e = t.call(this))._loadsRequested = []), (e._loadsCompleted = 0), (e._progress = 0), (e._isLoading = !1), (e._callbackPerPreloadable = []), e
          }
          return (
            V()(n, [
              {
                key: "add",
                value: function (e) {
                  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    n = this._loadsRequested.push(e) - 1
                  return this._callbackPerPreloadable.push(t), this.isLoading() && this.startLoader(n), e
                },
              },
              {
                key: "load",
                value: function (e, t) {
                  ;(this._callback = e), (this._progressCallBack = t), this.loadAll()
                },
              },
              {
                key: "isLoading",
                value: function () {
                  return this._isLoading
                },
              },
              {
                key: "loadAll",
                value: function () {
                  if (0 !== this._loadsRequested.length) {
                    this._isLoading = !0
                    for (var e = 0; e < this._loadsRequested.length; e++) this.startLoader(e)
                  } else this.loadDoneCallback()
                },
              },
              {
                key: "setCallbackForPreloadable",
                value: function (e) {
                  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null
                  this._callbackPerPreloadable[this.getIndexOfPreloadable(e)] = t
                },
              },
              {
                key: "getIndexOfPreloadable",
                value: function (e) {
                  return this._loadsRequested.indexOf(e)
                },
              },
              {
                key: "startLoader",
                value: function (e) {
                  var t = this
                  this._loadsRequested[e].load(function () {
                    var n = t._callbackPerPreloadable[e]
                    n && n(), t.loadDoneCallback()
                  })
                },
              },
              {
                key: "loadDoneCallback",
                value: function () {
                  this._loadsCompleted++,
                    (this._progress += (1 - this._progress) / (1 + this._loadsRequested.length - this._loadsCompleted)),
                    this._progressCallBack && (this._loadsRequested.length ? this._progressCallBack.call(this, this._progress) : this._progressCallBack.call(this, 1)),
                    this._loadsCompleted >= this._loadsRequested.length && ((this._isLoading = !1), this._callback && (this._callback.call(this), (this._callback = null)))
                },
              },
              {
                key: "destruct",
                value: function () {
                  ;(this._callback = null), Mi()(X()(n.prototype), "destruct", this).call(this)
                },
              },
            ]),
            n
          )
        })(Ii),
        Bi = n(16),
        Di = n.n(Bi)
      function Fi(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ("function" === typeof Proxy) return !0
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var n,
            i = X()(e)
          if (t) {
            var r = X()(this).constructor
            n = Reflect.construct(i, arguments, r)
          } else n = i.apply(this, arguments)
          return j()(this, n)
        }
      }
      var Ui = (function (e) {
        z()(n, e)
        var t = Fi(n)
        function n(e) {
          var i,
            r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null
          return F()(this, n), ((i = t.call(this)).dataName = null), (i.exposed = !1), (i.name = e), (i._callback = o), (i._materials = r || []), i
        }
        return (
          V()(n, [
            {
              key: "expose",
              value: function () {
                this.exposed = !0
              },
            },
            {
              key: "getValue",
              value: function () {
                return this._value
              },
            },
            {
              key: "setUpdateUICallback",
              value: function (e) {
                this._updateUIcallback = e
              },
            },
            {
              key: "setChangeCallback",
              value: function (e) {
                this._callback = e
              },
            },
            {
              key: "setValue",
              value: function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                  n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2]
                e !== this._value &&
                  ((this._value = e),
                  this.setShaderUniform(e),
                  this._callback && n && this._callback(this._value),
                  !t && this._updateUIcallback && this._updateUIcallback.call(this, this.getValue()))
              },
            },
            {
              key: "setFromUI",
              value: function (e) {
                this.setValue(e, !0)
              },
            },
            {
              key: "setShaderUniform",
              value: function (e) {
                console.log("warning: override this")
              },
            },
          ]),
          n
        )
      })(Ii)
      function Vi(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ("function" === typeof Proxy) return !0
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var n,
            i = X()(e)
          if (t) {
            var r = X()(this).constructor
            n = Reflect.construct(i, arguments, r)
          } else n = i.apply(this, arguments)
          return j()(this, n)
        }
      }
      var Hi = (function (e) {
        z()(n, e)
        var t = Vi(n)
        function n(e) {
          var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null
          return F()(this, n), t.call(this, e, null, i)
        }
        return (
          V()(n, [
            {
              key: "getValue",
              value: function () {
                return this._callback
              },
            },
          ]),
          n
        )
      })(Ui)
      function zi(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ("function" === typeof Proxy) return !0
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var n,
            i = X()(e)
          if (t) {
            var r = X()(this).constructor
            n = Reflect.construct(i, arguments, r)
          } else n = i.apply(this, arguments)
          return j()(this, n)
        }
      }
      var $i = (function (e) {
          z()(n, e)
          var t = zi(n)
          function n(e, i) {
            var r,
              o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
              s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null
            return F()(this, n), (r = t.call(this, null !== a ? a : e, o, s)).setValue(i), r
          }
          return (
            V()(n, [
              {
                key: "setShaderUniform",
                value: function (e) {
                  for (var t = 0; t < this._materials.length; t++) this._materials[t].setFloat(this.name, !0 === e ? 1 : 0)
                },
              },
            ]),
            n
          )
        })(Ui),
        ji = n(10),
        Gi = (function () {
          function e() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
              n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
              i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0
            F()(this, e), (this.v = ji.e.fromValues(t, n, i))
          }
          return (
            V()(
              e,
              [
                {
                  key: "x",
                  get: function () {
                    return this.v[0]
                  },
                  set: function (e) {
                    this.v[0] = e
                  },
                },
                {
                  key: "y",
                  get: function () {
                    return this.v[1]
                  },
                  set: function (e) {
                    this.v[1] = e
                  },
                },
                {
                  key: "z",
                  get: function () {
                    return this.v[2]
                  },
                  set: function (e) {
                    this.v[2] = e
                  },
                },
                {
                  key: "clone",
                  value: function () {
                    return new e(this.x, this.y, this.z)
                  },
                },
                {
                  key: "copy",
                  value: function (e) {
                    return ji.e.copy(this.v, e.v), this
                  },
                },
                {
                  key: "setValues",
                  value: function (e, t, n) {
                    return ji.e.set(this.v, e, t, n), this
                  },
                },
                {
                  key: "length",
                  value: function () {
                    return ji.e.length(this.v)
                  },
                },
                {
                  key: "toString",
                  value: function () {
                    return "(" + this.x + ", " + this.y + ", " + this.z + ")"
                  },
                },
                {
                  key: "equals",
                  value: function (e) {
                    return e.x === this.x && e.y === this.y && e.z === this.z
                  },
                },
                {
                  key: "normalize",
                  value: function () {
                    return ji.e.normalize(this.v, this.v), this
                  },
                },
                {
                  key: "negate",
                  value: function () {
                    return ji.e.negate(this.v, this.v), this
                  },
                },
                {
                  key: "multiplyScalar",
                  value: function (e) {
                    return ji.e.scale(this.v, this.v, e), this
                  },
                },
                {
                  key: "multiply",
                  value: function (e) {
                    return ji.e.multiply(this.v, this.v, e.v), this
                  },
                },
                {
                  key: "divide",
                  value: function (e) {
                    return ji.e.divide(this.v, this.v, e.v), this
                  },
                },
                {
                  key: "add",
                  value: function (e) {
                    return ji.e.add(this.v, this.v, e.v), this
                  },
                },
                {
                  key: "subtract",
                  value: function (e) {
                    return ji.e.subtract(this.v, this.v, e.v), this
                  },
                },
                {
                  key: "subtractScalar",
                  value: function (e) {
                    return (this.x -= e), (this.y -= e), (this.z -= e), this
                  },
                },
                {
                  key: "rotateX",
                  value: function (e, t) {
                    return ji.e.rotateX(this.v, this.v, e.v, t), this
                  },
                },
                {
                  key: "rotateY",
                  value: function (e, t) {
                    return ji.e.rotateY(this.v, this.v, e.v, t), this
                  },
                },
                {
                  key: "transform",
                  value: function (e) {
                    return ji.e.transformMat4(this.v, this.v, e), this
                  },
                },
                {
                  key: "transformMat3",
                  value: function (e) {
                    return ji.e.transformMat3(this.v, this.v, e), this
                  },
                },
                {
                  key: "randomize",
                  value: function () {
                    return (this.x = 2 * Math.random() - 1), (this.y = 2 * Math.random() - 1), (this.z = 2 * Math.random() - 1), this
                  },
                },
                {
                  key: "randomize01",
                  value: function () {
                    return (this.x = Math.random()), (this.y = Math.random()), (this.z = Math.random()), this
                  },
                },
                {
                  key: "randomizeSphere",
                  value: function () {
                    do {
                      this.randomize()
                    } while (this.length() > 1)
                    return this
                  },
                },
                {
                  key: "smoothstep",
                  value: function () {
                    return (this.x = e.smoothstep1(this.x)), (this.y = e.smoothstep1(this.y)), (this.z = e.smoothstep1(this.z)), this
                  },
                },
                {
                  key: "min",
                  value: function (e) {
                    ;(this.x = Math.min(this.x, e.x)), (this.y = Math.min(this.y, e.y)), (this.z = Math.min(this.z, e.z))
                  },
                },
                {
                  key: "max",
                  value: function (e) {
                    ;(this.x = Math.max(this.x, e.x)), (this.y = Math.max(this.y, e.y)), (this.z = Math.max(this.z, e.z))
                  },
                },
              ],
              [
                {
                  key: "smoothstep1",
                  value: function (e) {
                    return e * e * (3 - 2 * e)
                  },
                },
                {
                  key: "dot",
                  value: function (e, t) {
                    return ji.e.dot(e.v, t.v)
                  },
                },
                {
                  key: "distance",
                  value: function (e, t) {
                    return ji.e.distance(e.v, t.v)
                  },
                },
                {
                  key: "multiplyScalar",
                  value: function (e, t, n) {
                    return (e.x = t.x * n), (e.y = t.y * n), (e.z = t.z * n), e
                  },
                },
                {
                  key: "cross",
                  value: function (e, t, n) {
                    return ji.e.cross(e.v, t.v, n.v), e
                  },
                },
                {
                  key: "add",
                  value: function (e, t, n) {
                    return ji.e.add(e.v, t.v, n.v), e
                  },
                },
                {
                  key: "subtract",
                  value: function (e, t, n) {
                    return ji.e.subtract(e.v, t.v, n.v), e
                  },
                },
                {
                  key: "lerp",
                  value: function (e, t, n, i) {
                    return ji.e.lerp(e.v, t.v, n.v, i), e
                  },
                },
                {
                  key: "fract",
                  value: function (e, t) {
                    return (e.x = t.x - Math.floor(t.x)), (e.y = t.y - Math.floor(t.y)), (e.x = t.z - Math.floor(t.z)), e
                  },
                },
                {
                  key: "floor",
                  value: function (e, t) {
                    return ji.e.floor(e.v, t.v), e
                  },
                },
                {
                  key: "bezier",
                  value: function (e, t, n, i, r, o) {
                    ji.e.bezier(e.v, t.v, n.v, i.v, r.v, o)
                  },
                },
              ]
            ),
            e
          )
        })()
      ;(Gi.ZERO = new Gi()), (Gi.RIGHT = new Gi(1, 0, 0)), (Gi.UP = new Gi(0, 1, 0)), (Gi.FORWARD = new Gi(0, 0, 1)), (Gi.ONE = new Gi(1, 1, 1))
      var Xi = Gi
      function Wi(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ("function" === typeof Proxy) return !0
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var n,
            i = X()(e)
          if (t) {
            var r = X()(this).constructor
            n = Reflect.construct(i, arguments, r)
          } else n = i.apply(this, arguments)
          return j()(this, n)
        }
      }
      var Yi = (function (e) {
          z()(n, e)
          var t = Wi(n)
          function n(e, i) {
            var r,
              o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
              a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
              s = arguments.length > 4 ? arguments[4] : void 0
            F()(this, n), ((r = t.call(this, null !== a ? a : e, o, s))._uniforms = []), (r._color = new Xi())
            for (var l = 0; l < r._materials.length; l++) r._uniforms[l] = r._materials[l].addVector3Uniform(e, r._color)
            return r.setValue([255 * i.x, 255 * i.y, 255 * i.z]), r
          }
          return (
            V()(n, [
              {
                key: "getValueVector3",
                value: function () {
                  return this._color
                },
              },
              {
                key: "convertColorToArray",
                value: function (e) {
                  var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e)
                  return t ? [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)] : e
                },
              },
              {
                key: "setValue",
                value: function (e) {
                  var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                  e instanceof Xi ? this._color.copy(e) : ((e = this.convertColorToArray(e)), this._color.setValues(e[0] / 255, e[1] / 255, e[2] / 255)),
                    Mi()(X()(n.prototype), "setValue", this).call(this, [255 * this._color.x, 255 * this._color.y, 255 * this._color.z], t)
                },
              },
              {
                key: "setShaderUniform",
                value: function (e) {
                  for (var t = 0; t < this._uniforms.length; t++) this._uniforms[t].set(this._color)
                },
              },
            ]),
            n
          )
        })(Ui),
        qi = (function () {
          function e() {
            F()(this, e)
          }
          return (
            V()(e, null, [
              {
                key: "posMod",
                value: function (e, t) {
                  return ((e % t) + t) % t
                },
              },
              {
                key: "fract",
                value: function (e) {
                  return e - Math.floor(e)
                },
              },
              {
                key: "lerp",
                value: function (e, t, n) {
                  return (1 - n) * e + n * t
                },
              },
              {
                key: "clamp01",
                value: function (e) {
                  return e < 0 ? 0 : e > 1 ? 1 : e
                },
              },
              {
                key: "gain01",
                value: function (e, t) {
                  return e > 0.5 ? 1 - 0.5 * Math.pow(2 - 2 * e, t) : 0.5 * Math.pow(2 * e, t)
                },
              },
              {
                key: "smootherStep01",
                value: function (e) {
                  return e * e * e * (e * (6 * e - 15) + 10)
                },
              },
              {
                key: "smoothStep01",
                value: function (t) {
                  return (t = e.clamp(t, 0, 1)) * t * (3 - 2 * t)
                },
              },
              {
                key: "invSmoothStep01",
                value: function (e) {
                  return e + (e - e * e * (3 - 2 * e))
                },
              },
              {
                key: "smoothStep",
                value: function (t, n, i) {
                  return (i = e.clamp((i - t) / (n - t), 0, 1)) * i * (3 - 2 * i)
                },
              },
              {
                key: "step",
                value: function (t, n, i) {
                  return e.clamp01((i - t) / (n - t))
                },
              },
              {
                key: "nearestPowerOfTwo",
                value: function (e) {
                  return Math.pow(2, Math.round(Math.log(e) / Math.log(2)))
                },
              },
              {
                key: "clamp",
                value: function (e, t, n) {
                  return Math.min(Math.max(e, t), n)
                },
              },
              {
                key: "degToRad",
                value: function (e) {
                  return e * (Math.PI / 180)
                },
              },
              {
                key: "radToDeg",
                value: function (e) {
                  return e * (180 / Math.PI)
                },
              },
              {
                key: "latLongToCartesian",
                value: function (e, t, n, i) {
                  var r = this.degToRad(t),
                    o = this.degToRad(n) + Math.PI
                  return (e.z = i * Math.cos(r) * Math.cos(o)), (e.x = i * Math.cos(r) * Math.sin(o)), (e.y = i * Math.sin(r)), e
                },
              },
            ]),
            e
          )
        })()
      function Ki(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ("function" === typeof Proxy) return !0
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var n,
            i = X()(e)
          if (t) {
            var r = X()(this).constructor
            n = Reflect.construct(i, arguments, r)
          } else n = i.apply(this, arguments)
          return j()(this, n)
        }
      }
      var Zi = (function (e) {
        z()(n, e)
        var t = Ki(n)
        function n() {
          var e,
            i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
          return (
            F()(this, n),
            ((e = t.call(this))._finished = !1),
            (e._easeInOut = !1),
            (e._isUpdating = !1),
            (e._update = function () {
              return e.update()
            }),
            (e.value = i),
            e
          )
        }
        return (
          V()(n, [
            {
              key: "to",
              value: function (e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                  i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                  r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4]
                ;(this.goal = e),
                  (this.progress = 0),
                  (this.startValue = this.value),
                  (this._duration = 1e3 * t),
                  (this._t0 = +new Date()),
                  (this._finished = !1),
                  (this._completeCallback = i),
                  (this._animateCallback = n),
                  (this._easeInOut = r),
                  this._isUpdating || this.update()
              },
            },
            {
              key: "fromTo",
              value: function (e, t, n) {
                var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                  r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
                  o = arguments.length > 5 && void 0 !== arguments[5] && arguments[5]
                ;(this.value = e), this.to(t, n, i, r, o)
              },
            },
            {
              key: "stop",
              value: function () {
                ;(this._finished = !0), (this._completeCallback = null), (this._animateCallback = null)
              },
            },
            {
              key: "update",
              value: function () {
                if (void 0 === this._t0 || void 0 === this._duration || void 0 === this.startValue || void 0 === this.goal)
                  throw new Error("cannot update: Tween not started. Call Tween.to or Tween.fromTo first")
                if (((this._isUpdating = !1), !this.isDestructed && !this._finished))
                  if (
                    ((this.progress = (+new Date() - this._t0) / this._duration),
                    this.progress > 1 && (this.progress = 1),
                    (this.easedProgress = this.progress),
                    this._easeInOut && (this.easedProgress = qi.smoothStep01(this.easedProgress)),
                    (this.value = qi.lerp(this.startValue, this.goal, this.easedProgress)),
                    this._animateCallback && this._animateCallback.call(this, this.value),
                    this.progress >= 1)
                  ) {
                    if (((this._finished = !0), this._completeCallback)) {
                      var e = this._completeCallback
                      ;(this._completeCallback = null), e.call(this)
                    }
                  } else (this._isUpdating = !0), window.requestAnimationFrame(this._update)
              },
            },
          ]),
          n
        )
      })(Ii)
      function Qi(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ("function" === typeof Proxy) return !0
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var n,
            i = X()(e)
          if (t) {
            var r = X()(this).constructor
            n = Reflect.construct(i, arguments, r)
          } else n = i.apply(this, arguments)
          return j()(this, n)
        }
      }
      var Ji = (function (e) {
        z()(n, e)
        var t = Qi(n)
        function n(e, i) {
          var r,
            o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
            s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : [],
            l = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
            u = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null
          F()(this, n), ((r = t.call(this, null !== l ? l : e, s, u))._floatUniforms = [])
          for (var c = 0; c < r._materials.length; c++) r._floatUniforms[c] = r._materials[c].addFloatUniform(e, i)
          return (r.min = o), (r.max = a), r.max < i && (r.max = 2 * i), r.min > i && (r.min = i - 1), r.setValue(i, !1, !1), r
        }
        return (
          V()(n, [
            {
              key: "setValue",
              value: function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                  i = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2]
                ;(e = qi.clamp(e, this.min, this.max)), Mi()(X()(n.prototype), "setValue", this).call(this, e, t, i)
              },
            },
            {
              key: "setShaderUniform",
              value: function (e) {
                for (var t = 0; t < this._floatUniforms.length; t++) this._floatUniforms[t].set(e)
              },
            },
            {
              key: "to",
              value: function (e, t) {
                var n = this,
                  i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null
                this._tween || (this._tween = new Zi()),
                  i
                    ? this._tween.fromTo(
                        this.getValue(),
                        e,
                        t,
                        function (e) {
                          return n.setValue(e)
                        },
                        function () {
                          return i()
                        }
                      )
                    : this._tween.fromTo(this.getValue(), e, t, function (e) {
                        return n.setValue(e)
                      })
              },
            },
            {
              key: "destruct",
              value: function () {
                if (this._floatUniforms) {
                  for (var e = 0; e < this._floatUniforms.length; e++) this._floatUniforms[e].destruct()
                  this._floatUniforms = []
                }
                this._tween && (this._tween.destruct(), delete this._tween), Mi()(X()(n.prototype), "destruct", this).call(this)
              },
            },
          ]),
          n
        )
      })(Ui)
      function er(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ("function" === typeof Proxy) return !0
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var n,
            i = X()(e)
          if (t) {
            var r = X()(this).constructor
            n = Reflect.construct(i, arguments, r)
          } else n = i.apply(this, arguments)
          return j()(this, n)
        }
      }
      var tr = (function (e) {
        z()(n, e)
        var t = er(n)
        function n(e, i) {
          var r,
            o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
            s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
            l = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
            u = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null
          F()(this, n), ((r = t.call(this, null !== l ? l : e, s, u))._floatUniforms = [])
          for (var c = 0; c < r._materials.length; c++) r._floatUniforms[c] = r._materials[c].addFloatUniform(e, i)
          return (r.min = o), (r.max = a), r.max < i && (r.max = 2 * i), r.min > i && (r.min = i - 1), r.setValue(i), r
        }
        return (
          V()(n, [
            {
              key: "setShaderUniform",
              value: function (e) {
                for (var t = 0; t < this._floatUniforms.length; t++) this._floatUniforms[t].set(e)
              },
            },
          ]),
          n
        )
      })(Ui)
      function nr(e, t) {
        var n = ("undefined" !== typeof Symbol && e[Symbol.iterator]) || e["@@iterator"]
        if (!n) {
          if (
            Array.isArray(e) ||
            (n = (function (e, t) {
              if (!e) return
              if ("string" === typeof e) return ir(e, t)
              var n = Object.prototype.toString.call(e).slice(8, -1)
              "Object" === n && e.constructor && (n = e.constructor.name)
              if ("Map" === n || "Set" === n) return Array.from(e)
              if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ir(e, t)
            })(e)) ||
            (t && e && "number" === typeof e.length)
          ) {
            n && (e = n)
            var i = 0,
              r = function () {}
            return {
              s: r,
              n: function () {
                return i >= e.length
                  ? {
                      done: !0,
                    }
                  : {
                      done: !1,
                      value: e[i++],
                    }
              },
              e: function (e) {
                throw e
              },
              f: r,
            }
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var o,
          a = !0,
          s = !1
        return {
          s: function () {
            n = n.call(e)
          },
          n: function () {
            var e = n.next()
            return (a = e.done), e
          },
          e: function (e) {
            ;(s = !0), (o = e)
          },
          f: function () {
            try {
              a || null == n.return || n.return()
            } finally {
              if (s) throw o
            }
          },
        }
      }
      function ir(e, t) {
        ;(null == t || t > e.length) && (t = e.length)
        for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n]
        return i
      }
      function rr(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ("function" === typeof Proxy) return !0
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var n,
            i = X()(e)
          if (t) {
            var r = X()(this).constructor
            n = Reflect.construct(i, arguments, r)
          } else n = i.apply(this, arguments)
          return j()(this, n)
        }
      }
      var or = (function (e) {
        z()(n, e)
        var t = rr(n)
        function n() {
          var e
          return F()(this, n), ((e = t.call(this)).params = []), (e.children = []), e
        }
        return (
          V()(
            n,
            [
              {
                key: "addGroup",
                value: function (e) {
                  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    r = new n()
                  return r.init(e, t, i), this.children.push(r), r
                },
              },
              {
                key: "removeGroup",
                value: function (e) {
                  var t,
                    n = null,
                    i = nr(this.children)
                  try {
                    for (i.s(); !(t = i.n()).done; ) {
                      var r = t.value
                      if ((console.log("checking", r.name, e), r.name === e)) {
                        n = r
                        break
                      }
                    }
                  } catch (o) {
                    i.e(o)
                  } finally {
                    i.f()
                  }
                  n && this.children.splice(this.children.indexOf(n), 1)
                },
              },
              {
                key: "removeAllGroups",
                value: function () {
                  this.children = []
                },
              },
              {
                key: "pushGroup",
                value: function (e) {
                  this.children.push(e)
                },
              },
              {
                key: "init",
                value: function (e) {
                  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
                  ;(this._id = n._id++), (this.name = e), (this.collapsed = i), (this.materials = t ? [].concat(t) : [])
                },
              },
              {
                key: "addParamFloat",
                value: function (e, t) {
                  var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                    i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
                    r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
                    o = new Ji(e, t, n, i, [], null, r)
                  return this.params.push(o), o
                },
              },
              {
                key: "addShaderParamFloat",
                value: function (e, t) {
                  var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                    i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
                    r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
                    o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null
                  ;(this.materials && 0 != this.materials.length) || console.warn("Adding shader param to param group that has no materials")
                  var a = new Ji(e, t, n, i, this.materials, r, o)
                  return this.params.push(a), a
                },
              },
              {
                key: "addParamInt",
                value: function (e, t) {
                  var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                    i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
                    r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
                    o = new tr(e, t, n, i, null, null, r)
                  return this.params.push(o), o
                },
              },
              {
                key: "addShaderParamInt",
                value: function (e, t) {
                  var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                    i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
                    r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
                    o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null
                  ;(this.materials && 0 != this.materials.length) || console.warn("Adding shader param to param group that has no materials")
                  var a = new tr(e, t, n, i, this.materials, r, o)
                  return this.params.push(a), a
                },
              },
              {
                key: "addParamBool",
                value: function (e, t) {
                  var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                    i = new $i(e, t, null, null, n)
                  return this.params.push(i), i
                },
              },
              {
                key: "addShaderParamBool",
                value: function (e, t) {
                  var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                    i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null
                  ;(this.materials && 0 != this.materials.length) || console.warn("Adding shader param to param group that has no materials")
                  var r = new $i(e, t, this.materials, n, i)
                  return this.params.push(r), r
                },
              },
              {
                key: "addParamColor",
                value: function (e, t, n) {
                  var i = new Yi(e, t, [], null, n)
                  return this.params.push(i), i
                },
              },
              {
                key: "addShaderParamColor",
                value: function (e, t, n, i) {
                  ;(this.materials && 0 != this.materials.length) || console.warn("Adding shader param to param group that has no materials")
                  var r = new Yi(e, t, this.materials, n, i)
                  return this.params.push(r), r
                },
              },
              {
                key: "addButton",
                value: function (e) {
                  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    n = new Hi(e, t)
                  return this.params.push(n), n
                },
              },
              {
                key: "destruct",
                value: function () {
                  if (this.params) for (var e = 0; e < this.params.length; e++) this.params[e].isDestructed || this.params[e].destruct()
                  if (this.children) for (var t = 0; t < this.children.length; t++) this.children[t].isDestructed || this.children[t].destruct(), this.children[t].destruct()
                  Mi()(X()(n.prototype), "destruct", this).call(this)
                },
              },
            ],
            [
              {
                key: "exposeParam",
                value: function (e) {
                  e.expose()
                },
              },
            ]
          ),
          n
        )
      })(Ii)
      or._id = 0
      var ar = or,
        sr = n(300)
      function lr(e, t) {
        var n = ("undefined" !== typeof Symbol && e[Symbol.iterator]) || e["@@iterator"]
        if (!n) {
          if (
            Array.isArray(e) ||
            (n = (function (e, t) {
              if (!e) return
              if ("string" === typeof e) return ur(e, t)
              var n = Object.prototype.toString.call(e).slice(8, -1)
              "Object" === n && e.constructor && (n = e.constructor.name)
              if ("Map" === n || "Set" === n) return Array.from(e)
              if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ur(e, t)
            })(e)) ||
            (t && e && "number" === typeof e.length)
          ) {
            n && (e = n)
            var i = 0,
              r = function () {}
            return {
              s: r,
              n: function () {
                return i >= e.length
                  ? {
                      done: !0,
                    }
                  : {
                      done: !1,
                      value: e[i++],
                    }
              },
              e: function (e) {
                throw e
              },
              f: r,
            }
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var o,
          a = !0,
          s = !1
        return {
          s: function () {
            n = n.call(e)
          },
          n: function () {
            var e = n.next()
            return (a = e.done), e
          },
          e: function (e) {
            ;(s = !0), (o = e)
          },
          f: function () {
            try {
              a || null == n.return || n.return()
            } finally {
              if (s) throw o
            }
          },
        }
      }
      function ur(e, t) {
        ;(null == t || t > e.length) && (t = e.length)
        for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n]
        return i
      }
      function cr(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ("function" === typeof Proxy) return !0
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var n,
            i = X()(e)
          if (t) {
            var r = X()(this).constructor
            n = Reflect.construct(i, arguments, r)
          } else n = i.apply(this, arguments)
          return j()(this, n)
        }
      }
      var hr = (function (e) {
          z()(n, e)
          var t = cr(n)
          function n() {
            var e,
              i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
              r = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
              o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
            return F()(this, n), ((e = t.call(this))._params = {}), (e.folderIndex = -2), i && i.add(Di()(e)), (e._jsonExportEnabled = r), (e._params = o), e
          }
          return (
            V()(n, [
              {
                key: "load",
                value: function (e) {
                  e.call(this)
                },
              },
              {
                key: "init",
                value: function (e) {
                  this._rootGroup = e
                  var t = {}
                  ;(this._gui = new sr.a(this._params)), this.readGroup(e, t, this._gui), this._jsonExportEnabled && this._gui.remember(t), this.setVisible(!0)
                },
              },
              {
                key: "getDatGUI",
                value: function () {
                  return this._gui
                },
              },
              {
                key: "rootGroup",
                get: function () {
                  return this._rootGroup
                },
              },
              {
                key: "setPreset",
                value: function (e) {
                  if (!this._gui) throw new Error("Cannot set preset: DatGui not initialized")
                  ;(this.folderIndex = -2), this.setPresetRecurse(this._gui.__folders.controls, e.remembered.Default)
                },
              },
              {
                key: "setPresetRecurse",
                value: function (e, t) {
                  this.folderIndex++
                  var n = t[this.folderIndex]
                  if ("undefined" !== typeof n) {
                    var i,
                      r = lr(e.__controllers)
                    try {
                      for (r.s(); !(i = r.n()).done; ) {
                        var o = i.value,
                          a = n[o.property]
                        "undefined" !== typeof a && o.setValue(a)
                      }
                    } catch (h) {
                      r.e(h)
                    } finally {
                      r.f()
                    }
                  }
                  for (var s = 0, l = Object.keys(e.__folders); s < l.length; s++) {
                    var u = l[s],
                      c = e.__folders[u]
                    this.setPresetRecurse(c, t)
                  }
                },
              },
              {
                key: "readGroup",
                value: function (e, t, n) {
                  if (!e.name) throw new Error("group name not initialized")
                  if (!this._gui) throw new Error("cannot read group: DatGui not initialized")
                  var i = n.addFolder(this.uniqueName(n.__folders, e.name))
                  e.collapsed || i.open()
                  var r,
                    o = lr(e.params)
                  try {
                    for (o.s(); !(r = o.n()).done; ) {
                      var a = r.value
                      a.dataName = this.uniqueName(t, a.name)
                      var s = a.dataName
                      void 0 == t[s] ? (t[s] = a.getValue()) : console.log("property " + s + " already exists on param object", t)
                      var l = void 0
                      if (a instanceof Ji) {
                        var u = a
                        l = i.add(t, s, u.min, u.max)
                      }
                      if (a instanceof tr) {
                        var c = a
                        l = i.add(t, s, c.min, c.max).step(1)
                      }
                      if ((a instanceof $i && (l = i.add(t, s)), a instanceof Hi && (l = i.add(t, s)), a instanceof Yi && (l = i.addColor(t, s)), !(a instanceof Hi))) {
                        if (void 0 === l) throw new TypeError("Unknown type of parameter")
                        this.addHandlers(l, t, a)
                      }
                    }
                  } catch (v) {
                    o.e(v)
                  } finally {
                    o.f()
                  }
                  var h,
                    f = lr(e.children)
                  try {
                    for (f.s(); !(h = f.n()).done; ) {
                      var d = h.value,
                        p = {}
                      this._jsonExportEnabled && this._gui.remember(p), this.readGroup(d, p, i)
                    }
                  } catch (v) {
                    f.e(v)
                  } finally {
                    f.f()
                  }
                },
              },
              {
                key: "uniqueName",
                value: function (e, t) {
                  return t in e ? this.uniqueName(e, "U_" + t) : t
                },
              },
              {
                key: "addHandlers",
                value: function (e, t, n) {
                  n.setUpdateUICallback(function (e) {
                    t[n.dataName] = e
                  }),
                    e.listen(),
                    e.onChange(function (e) {
                      ;(t[n.dataName] = e), n.setFromUI(e)
                    }),
                    (e.onFinishChange = function (e) {
                      return n.setFromUI(e)
                    })
                },
              },
              {
                key: "setVisible",
                value: function (e) {
                  if (!this._gui) throw new Error("cannot set visible: DatGui not initialized")
                  ;(this._visible = e),
                    this._gui.domElement.parentElement &&
                      ((this._gui.domElement.parentElement.style.zIndex = (e ? 999 : 0).toString()),
                      (this._gui.domElement.parentElement.style.visibility = (e ? "visible" : "hidden").toString()))
                },
              },
              {
                key: "destruct",
                value: function () {
                  this._gui && (this._gui.domElement.parentElement && this._gui.domElement.parentElement.removeChild(this._gui.domElement), delete this._gui),
                    Mi()(X()(n.prototype), "destruct", this).call(this)
                },
              },
            ]),
            n
          )
        })(Ii),
        fr = (function () {
          function e() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
              n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
            F()(this, e), (this.v = ji.d.fromValues(t, n))
          }
          return (
            V()(
              e,
              [
                {
                  key: "x",
                  get: function () {
                    return this.v[0]
                  },
                  set: function (e) {
                    this.v[0] = e
                  },
                },
                {
                  key: "y",
                  get: function () {
                    return this.v[1]
                  },
                  set: function (e) {
                    this.v[1] = e
                  },
                },
                {
                  key: "clone",
                  value: function () {
                    return new e(this.x, this.y)
                  },
                },
                {
                  key: "copy",
                  value: function (e) {
                    return ji.d.copy(this.v, e.v), this
                  },
                },
                {
                  key: "setValues",
                  value: function (e, t) {
                    return ji.d.set(this.v, e, t), this
                  },
                },
                {
                  key: "length",
                  value: function () {
                    return ji.d.length(this.v)
                  },
                },
                {
                  key: "toString",
                  value: function () {
                    return this.x + "," + this.y
                  },
                },
                {
                  key: "equals",
                  value: function (e) {
                    return e.x === this.x && e.y === this.y
                  },
                },
                {
                  key: "normalize",
                  value: function () {
                    return ji.d.normalize(this.v, this.v), this
                  },
                },
                {
                  key: "negate",
                  value: function () {
                    return ji.d.negate(this.v, this.v), this
                  },
                },
                {
                  key: "multiplyScalar",
                  value: function (e) {
                    return ji.d.scale(this.v, this.v, e), this
                  },
                },
                {
                  key: "multiply",
                  value: function (e) {
                    return ji.d.multiply(this.v, this.v, e.v), this
                  },
                },
                {
                  key: "add",
                  value: function (e) {
                    return ji.d.add(this.v, this.v, e.v), this
                  },
                },
                {
                  key: "subtract",
                  value: function (e) {
                    return ji.d.subtract(this.v, this.v, e.v), this
                  },
                },
                {
                  key: "subtractScalar",
                  value: function (e) {
                    return (this.x -= e), (this.y -= e), this
                  },
                },
                {
                  key: "rotate",
                  value: function (e, t) {
                    var n = Math.sin(t),
                      i = Math.cos(t)
                    ;(this.x -= e.x), (this.y -= e.y)
                    var r = this.x * i - this.y * n,
                      o = this.x * n + this.y * i
                    return (this.x = r + e.x), (this.y = o + e.y), this
                  },
                },
              ],
              [
                {
                  key: "dot",
                  value: function (e, t) {
                    return ji.d.dot(e.v, t.v)
                  },
                },
                {
                  key: "distance",
                  value: function (e, t) {
                    return ji.d.distance(e.v, t.v)
                  },
                },
                {
                  key: "multiplyScalar",
                  value: function (e, t, n) {
                    return (e.x = t.x * n), (e.y = t.y * n), e
                  },
                },
                {
                  key: "cross",
                  value: function (e, t, n) {
                    return ji.d.cross(e.v, t.v, n.v), e
                  },
                },
                {
                  key: "add",
                  value: function (e, t, n) {
                    return ji.d.add(e.v, t.v, n.v), e
                  },
                },
                {
                  key: "subtract",
                  value: function (e, t, n) {
                    return ji.d.subtract(e.v, t.v, n.v), e
                  },
                },
                {
                  key: "lerp",
                  value: function (e, t, n, i) {
                    return ji.d.lerp(e.v, t.v, n.v, i), e
                  },
                },
                {
                  key: "fract",
                  value: function (t, n) {
                    return e.subtract(n, e.floor(t, n), t), t
                  },
                },
                {
                  key: "floor",
                  value: function (e, t) {
                    return (e.x = Math.floor(t.x)), (e.y = Math.floor(t.y)), e
                  },
                },
              ]
            ),
            e
          )
        })()
      fr.ZERO = new fr(0, 0)
      var dr = fr
      function pr(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ("function" === typeof Proxy) return !0
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var n,
            i = X()(e)
          if (t) {
            var r = X()(this).constructor
            n = Reflect.construct(i, arguments, r)
          } else n = i.apply(this, arguments)
          return j()(this, n)
        }
      }
      var vr = (function (e) {
          z()(n, e)
          var t = pr(n)
          function n(e) {
            var i,
              r = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]
            return (
              F()(this, n),
              ((i = t.call(this))._pixelRatio = 1),
              (i._needsResize = !1),
              (i._resizeInterval = 30),
              (i._resizeWait = 0),
              (i._canvasParent = e),
              (i._autoResize = r),
              e || (i._autoResize = !1),
              (i._manualResizeUpdate = !1),
              (i.canvas = i.prepareCanvas(e)),
              window.devicePixelRatio ? (i._pixelRatio = window.devicePixelRatio) : (i._pixelRatio = 1),
              i._autoResize && i.handleResize(),
              i
            )
          }
          return (
            V()(n, [
              {
                key: "getCanvas",
                value: function () {
                  return this.canvas
                },
              },
              {
                key: "prepareCanvas",
                value: function (e) {
                  var t = document.createElement("canvas")
                  return (
                    t.setAttribute("id", "canvas"),
                    (t.style.position = "absolute"),
                    (t.style.left = "0px"),
                    (t.style.top = "0px"),
                    this._canvasParent && ((t.style.width = this._canvasParent.offsetWidth + "px"), (t.style.height = this._canvasParent.offsetHeight + "px")),
                    e && e.appendChild(t),
                    this._autoResize && ((this._resizeHandler = this.handleResize.bind(this)), window.addEventListener("resize", this._resizeHandler)),
                    t
                  )
                },
              },
              {
                key: "setSize",
                value: function (e, t) {
                  ;(this._goalWidth == e && this._goalHeight == t) ||
                    (this._autoResize && (this._resizeHandler && window.removeEventListener("resize", this._resizeHandler), (this._autoResize = !1))),
                    (this._goalWidth = e),
                    (this._goalHeight = t),
                    this.delayedResize()
                },
              },
              {
                key: "setMaxResolution",
                value: function (e) {
                  ;(this._maxResolution = new dr().copy(e)), this.delayedResize()
                },
              },
              {
                key: "setPixelRatio",
                value: function (e) {
                  ;(this._pixelRatio = e), this.delayedResize()
                },
              },
              {
                key: "setAutoResize",
                value: function (e) {
                  ;(this._autoResize = e),
                    this._resizeHandler &&
                      (this._autoResize ? (window.addEventListener("resize", this._resizeHandler), this.handleResize()) : window.removeEventListener("resize", this._resizeHandler))
                },
              },
              {
                key: "canvasParent",
                get: function () {
                  return this._canvasParent
                },
              },
              {
                key: "getPixelRatio",
                value: function () {
                  return this._pixelRatio
                },
              },
              {
                key: "getParentHeight",
                value: function () {
                  return null === this._canvasParent ? null : this._canvasParent.offsetHeight
                },
              },
              {
                key: "getAspectRatio",
                value: function () {
                  return this.canvas.width / this.canvas.height
                },
              },
              {
                key: "handleResize",
                value: function () {
                  var e = this
                  if (this._canvasParent) {
                    var t = this._canvasParent.offsetWidth,
                      n = this._canvasParent.offsetHeight
                    ;(this._goalWidth !== t || this._goalHeight !== n || this._needsResize) &&
                      ((this._goalWidth = t),
                      (this._goalHeight = n),
                      this._manualResizeUpdate ||
                        (clearTimeout(this._resizeTimeOut),
                        (this._resizeTimeOut = setTimeout(function () {
                          return e.delayedResize()
                        }, 100))))
                  }
                },
              },
              {
                key: "updateResize",
                value: function () {
                  ;(this._manualResizeUpdate = !0), this.handleResize(), this.delayedResize()
                },
              },
              {
                key: "delayedResize",
                value: function () {
                  if (!this.isDestructed) {
                    if (((this._needsResize = !1), void 0 === this._goalWidth || void 0 === this._goalHeight)) throw new ReferenceError("canvas size not yet set")
                    if (this._maxResolution) {
                      var e = window.devicePixelRatio ? window.devicePixelRatio : 1,
                        t = Math.min(this._maxResolution.x / this._goalWidth, this._maxResolution.y / this._goalHeight)
                      this._pixelRatio = t < e ? t / e : e
                    }
                    ;(this.canvas.width = this._goalWidth * this._pixelRatio),
                      (this.canvas.height = this._goalHeight * this._pixelRatio),
                      this._autoResize && this._canvasParent
                        ? ((this.canvas.style.width = this._canvasParent.offsetWidth + "px"), (this.canvas.style.height = this._canvasParent.offsetHeight + "px"))
                        : ((this.canvas.style.width = this._goalWidth + "px"), (this.canvas.style.height = this._goalHeight + "px"))
                    var n = document.createEvent("Event")
                    n.initEvent("resize", !1, !0), this.canvas.dispatchEvent(n)
                  }
                },
              },
              {
                key: "forceResize",
                value: function () {
                  if (!this._canvasParent) throw new ReferenceError("canvas has no parent")
                  if ((this._resizeWait--, this._resizeWait <= 0)) {
                    this._resizeWait = this._resizeInterval
                    var e = this._canvasParent.offsetWidth,
                      t = this._canvasParent.offsetHeight
                    if (this.canvas.width != e * this._pixelRatio || this.canvas.height != t * this._pixelRatio) {
                      ;(this.canvas.width = e * this._pixelRatio), (this.canvas.height = t * this._pixelRatio)
                      var n = document.createEvent("Event")
                      n.initEvent("resize", !1, !0), this.canvas.dispatchEvent(n)
                    }
                    ;(this.canvas.style.width == e + "px" && this.canvas.style.height == t + "px") || ((this.canvas.style.width = e + "px"), (this.canvas.style.height = t + "px"))
                  }
                },
              },
              {
                key: "destruct",
                value: function () {
                  this._resizeHandler && window.removeEventListener("resize", this._resizeHandler),
                    (this.canvas.width = 1),
                    (this.canvas.height = 1),
                    this._canvasParent && this._canvasParent.removeChild(this.canvas),
                    Mi()(X()(n.prototype), "destruct", this).call(this)
                },
              },
            ]),
            n
          )
        })(Ii),
        gr = (function () {
          function e() {
            F()(this, e)
          }
          return (
            V()(e, null, [
              {
                key: "log",
                value: function () {
                  if (e.ENABLED) {
                    for (var t = arguments.length, n = new Array(t), i = 0; i < t; i++) n[i] = arguments[i]
                    console.log(n)
                  }
                },
              },
              {
                key: "error",
                value: function () {
                  if (e.ENABLED) {
                    for (var t = arguments.length, n = new Array(t), i = 0; i < t; i++) n[i] = arguments[i]
                    console.error(n)
                  }
                },
              },
              {
                key: "getScreenLogDiv",
                value: function () {
                  return e._screenLogDiv || (e._screenLogDiv = e.createDebugDiv()), e._screenLogDiv
                },
              },
              {
                key: "logToScreen",
                value: function (t) {
                  e.ENABLED && (e._screenLogDiv || (e._screenLogDiv = e.createDebugDiv()), (e._screenLogDiv.innerHTML = t))
                },
              },
              {
                key: "logAppendToScreen",
                value: function (t) {
                  e.ENABLED && (e._screenLogDiv || (e._screenLogDiv = e.createDebugDiv()), (e._screenLogDiv.innerHTML += t))
                },
              },
              {
                key: "logArray",
                value: function (t) {
                  if (e.ENABLED) {
                    for (var n = t.length, i = "", r = 0; r < n; r++) (i += t[r]), (i += ",")
                    ;(i = i.substring(0, i.length - 1)), console.log(i)
                  }
                },
              },
              {
                key: "log2dArray",
                value: function (t) {
                  if (e.ENABLED) {
                    for (var n = t.length, i = "", r = 0; r < n; r++) for (var o = 0; o < t[r].length; o++) (i += t[r][o]), (i += ",")
                    ;(i = i.substring(0, i.length - 1)), console.log(i)
                  }
                },
              },
              {
                key: "createDebugDiv",
                value: function () {
                  var e = document.createElement("div")
                  return (
                    document.body.appendChild(e),
                    (e.style.position = "absolute"),
                    (e.style.left = "160px"),
                    (e.style.top = "0px"),
                    (e.style.color = "#fff"),
                    (e.style.backgroundColor = "#000"),
                    (e.style.display = "block"),
                    (e.style.width = "158px"),
                    (e.style.height = "94px"),
                    (e.style.padding = "1px"),
                    (e.style.font = "10px Helvetica,Arial,sans-serif"),
                    (e.style.lineHeight = "14px"),
                    (e.style.zIndex = "1000"),
                    e
                  )
                },
              },
            ]),
            e
          )
        })()
      gr.ENABLED = !0
      var mr = gr,
        _r = V()(function e(t) {
          F()(this, e),
            (this.MAX_VERTEX_ATTRIBS = t.getParameter(t.MAX_VERTEX_ATTRIBS)),
            (this.MAX_VARYING_VECTORS = t.getParameter(t.MAX_VARYING_VECTORS)),
            (this.MAX_VERTEX_UNIFORM_VECTORS = t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS)),
            (this.MAX_FRAGMENT_UNIFORM_VECTORS = t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS)),
            (this.MAX_TEXTURE_IMAGE_UNITS = t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS)),
            (this.MAX_VERTEX_TEXTURE_IMAGE_UNITS = t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS)),
            (this.MAX_TEXTURE_SIZE = t.getParameter(t.MAX_TEXTURE_SIZE)),
            (this.MAX_CUBE_MAP_TEXTURE_SIZE = t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE)),
            (this.MAX_VIEWPORT_DIMS = t.getParameter(t.MAX_VIEWPORT_DIMS)),
            (this.MAX_RENDERBUFFER_SIZE = t.getParameter(t.MAX_RENDERBUFFER_SIZE)),
            (this.MAX_COMBINED_TEXTURE_IMAGE_UNITS = t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS))
          var n = t.getExtension("WEBGL_debug_renderer_info")
          for (var i in ((this.UNMASKED_RENDERER = n && t.getParameter(n.UNMASKED_RENDERER_WEBGL)), (this.UNMASKED_VENDOR = n && t.getParameter(n.UNMASKED_VENDOR_WEBGL)), this))
            this.hasOwnProperty(i) && mr.log(i, this[i])
        }),
        yr = (function () {
          function e() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
              n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
              i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
              r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1
            F()(this, e), (this.v = ji.f.fromValues(t, n, i, r))
          }
          return (
            V()(
              e,
              [
                {
                  key: "x",
                  get: function () {
                    return this.v[0]
                  },
                  set: function (e) {
                    this.v[0] = e
                  },
                },
                {
                  key: "y",
                  get: function () {
                    return this.v[1]
                  },
                  set: function (e) {
                    this.v[1] = e
                  },
                },
                {
                  key: "z",
                  get: function () {
                    return this.v[2]
                  },
                  set: function (e) {
                    this.v[2] = e
                  },
                },
                {
                  key: "w",
                  get: function () {
                    return this.v[3]
                  },
                  set: function (e) {
                    this.v[3] = e
                  },
                },
                {
                  key: "clone",
                  value: function () {
                    return new e(this.x, this.y, this.z, this.w)
                  },
                },
                {
                  key: "copy",
                  value: function (e) {
                    return ji.f.set(this.v, e.x, e.y, e.z, e.w), this
                  },
                },
                {
                  key: "setValues",
                  value: function (e, t, n, i) {
                    return ji.f.set(this.v, e, t, n, i), this
                  },
                },
                {
                  key: "dot",
                  value: function (e) {
                    return ji.f.dot(this.v, e.v)
                  },
                },
                {
                  key: "transform",
                  value: function (e) {
                    return ji.f.transformMat4(this.v, this.v, e), this
                  },
                },
              ],
              [
                {
                  key: "dot",
                  value: function (e, t) {
                    return ji.f.dot(e.v, t.v)
                  },
                },
                {
                  key: "transform",
                  value: function (e, t, n) {
                    return ji.f.transformMat4(e.v, t.v, n), e
                  },
                },
              ]
            ),
            e
          )
        })()
      yr.ZERO = new yr()
      var Tr = yr
      function Er(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ("function" === typeof Proxy) return !0
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var n,
            i = X()(e)
          if (t) {
            var r = X()(this).constructor
            n = Reflect.construct(i, arguments, r)
          } else n = i.apply(this, arguments)
          return j()(this, n)
        }
      }
      var br = (function (e) {
          z()(n, e)
          var t = Er(n)
          function n() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
              i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
              r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
              o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1
            return F()(this, n), t.call(this, e, i, r, o)
          }
          return (
            V()(
              n,
              [
                {
                  key: "r",
                  get: function () {
                    return this.v[0]
                  },
                  set: function (e) {
                    this.v[0] = e
                  },
                },
                {
                  key: "g",
                  get: function () {
                    return this.v[1]
                  },
                  set: function (e) {
                    this.v[1] = e
                  },
                },
                {
                  key: "b",
                  get: function () {
                    return this.v[2]
                  },
                  set: function (e) {
                    this.v[2] = e
                  },
                },
                {
                  key: "a",
                  get: function () {
                    return this.v[3]
                  },
                  set: function (e) {
                    this.v[3] = e
                  },
                },
                {
                  key: "isEqualTo",
                  value: function (e) {
                    return this.r == e.r && this.g == e.g && this.b == e.b && this.a == e.a
                  },
                },
                {
                  key: "clampCeil",
                  value: function (e) {
                    this.r > e && (this.r = e), this.g > e && (this.g = e), this.b > e && (this.b = e), this.a > e && (this.a = e)
                  },
                },
                {
                  key: "toRGBString",
                  value: function () {
                    return "rgb(" + Math.round(255 * this.r) + "," + Math.round(255 * this.g) + "," + Math.round(255 * this.b) + ")"
                  },
                },
                {
                  key: "getHex",
                  value: function () {
                    return "#" + n.componentToHex(this.r) + n.componentToHex(this.g) + n.componentToHex(this.b)
                  },
                },
                {
                  key: "setRGBA255",
                  value: function (e) {
                    ;(this.r = e[0] / 255), (this.g = e[1] / 255), (this.b = e[2] / 255), (this.a = e[3]), console.log("setRGBA255: ", e, this.r, this.g, this.b, this.a)
                  },
                },
                {
                  key: "getRGBA255",
                  value: function () {
                    return [Math.round(255 * this.r), Math.round(255 * this.g), Math.round(255 * this.b), this.a]
                  },
                },
                {
                  key: "setFromHex",
                  value: function (e) {
                    e = e.replace(/[^0-9A-F]/gi, "")
                    var t = parseInt(e, 16)
                    ;(this.r = ((t >> 16) & 255) / 255), (this.g = ((t >> 8) & 255) / 255), (this.b = (255 & t) / 255), (this.a = 1)
                  },
                },
                {
                  key: "setFromHSV",
                  value: function (e, t, n) {
                    var i = 0,
                      r = 0,
                      o = 0,
                      a = Math.floor(6 * e),
                      s = 6 * e - a,
                      l = n * (1 - t),
                      u = n * (1 - s * t),
                      c = n * (1 - (1 - s) * t)
                    switch (a % 6) {
                      case 0:
                        ;(i = n), (r = c), (o = l)
                        break
                      case 1:
                        ;(i = u), (r = n), (o = l)
                        break
                      case 2:
                        ;(i = l), (r = n), (o = c)
                        break
                      case 3:
                        ;(i = l), (r = u), (o = n)
                        break
                      case 4:
                        ;(i = c), (r = l), (o = n)
                        break
                      case 5:
                        ;(i = n), (r = l), (o = u)
                    }
                    ;(this.r = i), (this.g = r), (this.b = o)
                  },
                },
                {
                  key: "getRgbaString",
                  value: function () {
                    return "rgba(" + Math.round(255 * this.r) + ", " + Math.round(255 * this.g) + ", " + Math.round(255 * this.b) + ", " + this.a + ")"
                  },
                },
              ],
              [
                {
                  key: "componentToHex",
                  value: function (e) {
                    var t = (e *= 255).toString(16)
                    return 1 === t.length ? "0" + t : t
                  },
                },
                {
                  key: "fromHex",
                  value: function (e) {
                    var t = new n()
                    return t.setFromHex(e), t
                  },
                },
                {
                  key: "fromRGB255",
                  value: function (e) {
                    var t = new n()
                    return t.setRGBA255(e), t
                  },
                },
                {
                  key: "getRandom",
                  value: function () {
                    return new n(Math.random(), Math.random(), Math.random())
                  },
                },
                {
                  key: "colorFromString",
                  value: function (e) {
                    var t = [],
                      i = []
                    ;(i[0] = e.substr(0, Math.floor(e.length / 3))),
                      (i[1] = e.substr(Math.floor(e.length / 3), Math.floor((2 * e.length) / 3))),
                      (i[2] = e.substr(Math.floor((2 * e.length) / 3), e.length))
                    for (var r = 0; r < i.length; r++) for (var o = 0; o < i[r].length; o++) r in t || (t[r] = 0), (t[r] += i[r].charCodeAt(o))
                    return new n((t[0] / 128) % 1, (t[1] / 128) % 1, (t[2] / 128) % 1, 1)
                  },
                },
                {
                  key: "fromHSV",
                  value: function (e, t, i) {
                    var r = new n()
                    return r.setFromHSV(e, t, i), r
                  },
                },
              ]
            ),
            n
          )
        })(Tr),
        Ar = V()(function e() {
          F()(this, e)
        })
      ;(Ar.ACTIVE_ATTRIBUTES = 35721),
        (Ar.ACTIVE_ATTRIBUTE_MAX_LENGTH = 35722),
        (Ar.ACTIVE_TEXTURE = 34016),
        (Ar.ACTIVE_UNIFORMS = 35718),
        (Ar.ACTIVE_UNIFORM_MAX_LENGTH = 35719),
        (Ar.ALIASED_LINE_WIDTH_RANGE = 33902),
        (Ar.ALIASED_POINT_SIZE_RANGE = 33901),
        (Ar.ALPHA = 6406),
        (Ar.ALPHA_BITS = 3413),
        (Ar.ALWAYS = 519),
        (Ar.ARRAY_BUFFER = 34962),
        (Ar.ARRAY_BUFFER_BINDING = 34964),
        (Ar.ATTACHED_SHADERS = 35717),
        (Ar.BACK = 1029),
        (Ar.BLEND = 3042),
        (Ar.BLEND_COLOR = 32773),
        (Ar.BLEND_DST_ALPHA = 32970),
        (Ar.BLEND_DST_RGB = 32968),
        (Ar.BLEND_EQUATION = 32777),
        (Ar.BLEND_EQUATION_ALPHA = 34877),
        (Ar.BLEND_EQUATION_RGB = 32777),
        (Ar.BLEND_SRC_ALPHA = 32971),
        (Ar.BLEND_SRC_RGB = 32969),
        (Ar.BLUE_BITS = 3412),
        (Ar.BOOL = 35670),
        (Ar.BOOL_VEC2 = 35671),
        (Ar.BOOL_VEC3 = 35672),
        (Ar.BOOL_VEC4 = 35673),
        (Ar.BROWSER_DEFAULT_WEBGL = 37444),
        (Ar.BUFFER_SIZE = 34660),
        (Ar.BUFFER_USAGE = 34661),
        (Ar.BYTE = 5120),
        (Ar.CCW = 2305),
        (Ar.CLAMP_TO_EDGE = 33071),
        (Ar.COLOR_ATTACHMENT0 = 36064),
        (Ar.COLOR_BUFFER_BIT = 16384),
        (Ar.COLOR_CLEAR_VALUE = 3106),
        (Ar.COLOR_WRITEMASK = 3107),
        (Ar.COMPILE_STATUS = 35713),
        (Ar.COMPRESSED_TEXTURE_FORMATS = 34467),
        (Ar.CONSTANT_ALPHA = 32771),
        (Ar.CONSTANT_COLOR = 32769),
        (Ar.CONTEXT_LOST_WEBGL = 37442),
        (Ar.CULL_FACE = 2884),
        (Ar.CULL_FACE_MODE = 2885),
        (Ar.CURRENT_PROGRAM = 35725),
        (Ar.CURRENT_VERTEX_ATTRIB = 34342),
        (Ar.CW = 2304),
        (Ar.DECR = 7683),
        (Ar.DECR_WRAP = 34056),
        (Ar.DELETE_STATUS = 35712),
        (Ar.DEPTH_ATTACHMENT = 36096),
        (Ar.DEPTH_BITS = 3414),
        (Ar.DEPTH_BUFFER_BIT = 256),
        (Ar.DEPTH_CLEAR_VALUE = 2931),
        (Ar.DEPTH_COMPONENT = 6402),
        (Ar.DEPTH_COMPONENT16 = 33189),
        (Ar.DEPTH_FUNC = 2932),
        (Ar.DEPTH_RANGE = 2928),
        (Ar.DEPTH_STENCIL = 34041),
        (Ar.DEPTH_STENCIL_ATTACHMENT = 33306),
        (Ar.DEPTH_TEST = 2929),
        (Ar.DEPTH_WRITEMASK = 2930),
        (Ar.DITHER = 3024),
        (Ar.DONT_CARE = 4352),
        (Ar.DST_ALPHA = 772),
        (Ar.DST_COLOR = 774),
        (Ar.DYNAMIC_DRAW = 35048),
        (Ar.ELEMENT_ARRAY_BUFFER = 34963),
        (Ar.ELEMENT_ARRAY_BUFFER_BINDING = 34965),
        (Ar.EQUAL = 514),
        (Ar.FASTEST = 4353),
        (Ar.FLOAT = 5126),
        (Ar.FLOAT_MAT2 = 35674),
        (Ar.FLOAT_MAT3 = 35675),
        (Ar.FLOAT_MAT4 = 35676),
        (Ar.FLOAT_VEC2 = 35664),
        (Ar.FLOAT_VEC3 = 35665),
        (Ar.FLOAT_VEC4 = 35666),
        (Ar.FRAGMENT_SHADER = 35632),
        (Ar.FRAMEBUFFER = 36160),
        (Ar.FRAMEBUFFER_ATTACHMENT_OBJECT_NAME = 36049),
        (Ar.FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE = 36048),
        (Ar.FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE = 36051),
        (Ar.FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL = 36050),
        (Ar.FRAMEBUFFER_BINDING = 36006),
        (Ar.FRAMEBUFFER_COMPLETE = 36053),
        (Ar.FRAMEBUFFER_INCOMPLETE_ATTACHMENT = 36054),
        (Ar.FRAMEBUFFER_INCOMPLETE_DIMENSIONS = 36057),
        (Ar.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT = 36055),
        (Ar.FRAMEBUFFER_UNSUPPORTED = 36061),
        (Ar.FRONT = 1028),
        (Ar.FRONT_AND_BACK = 1032),
        (Ar.FRONT_FACE = 2886),
        (Ar.FUNC_ADD = 32774),
        (Ar.FUNC_REVERSE_SUBTRACT = 32779),
        (Ar.FUNC_SUBTRACT = 32778),
        (Ar.GENERATE_MIPMAP_HINT = 33170),
        (Ar.GEQUAL = 518),
        (Ar.GREATER = 516),
        (Ar.GREEN_BITS = 3411),
        (Ar.HIGH_FLOAT = 36338),
        (Ar.HIGH_INT = 36341),
        (Ar.INCR = 7682),
        (Ar.INCR_WRAP = 34055),
        (Ar.INFO_LOG_LENGTH = 35716),
        (Ar.INT = 5124),
        (Ar.INT_VEC2 = 35667),
        (Ar.INT_VEC3 = 35668),
        (Ar.INT_VEC4 = 35669),
        (Ar.INVALID_ENUM = 1280),
        (Ar.INVALID_FRAMEBUFFER_OPERATION = 1286),
        (Ar.INVALID_OPERATION = 1282),
        (Ar.INVALID_VALUE = 1281),
        (Ar.INVERT = 5386),
        (Ar.KEEP = 7680),
        (Ar.LEQUAL = 515),
        (Ar.LESS = 513),
        (Ar.LINEAR = 9729),
        (Ar.LINEAR_MIPMAP_LINEAR = 9987),
        (Ar.LINEAR_MIPMAP_NEAREST = 9985),
        (Ar.LINES = 1),
        (Ar.LINE_LOOP = 2),
        (Ar.LINE_STRIP = 3),
        (Ar.LINE_WIDTH = 2849),
        (Ar.LINK_STATUS = 35714),
        (Ar.LOW_FLOAT = 36336),
        (Ar.LOW_INT = 36339),
        (Ar.LUMINANCE = 6409),
        (Ar.LUMINANCE_ALPHA = 6410),
        (Ar.MAX_COMBINED_TEXTURE_IMAGE_UNITS = 35661),
        (Ar.MAX_CUBE_MAP_TEXTURE_SIZE = 34076),
        (Ar.MAX_FRAGMENT_UNIFORM_VECTORS = 36349),
        (Ar.MAX_RENDERBUFFER_SIZE = 34024),
        (Ar.MAX_TEXTURE_IMAGE_UNITS = 34930),
        (Ar.MAX_TEXTURE_SIZE = 3379),
        (Ar.MAX_VARYING_VECTORS = 36348),
        (Ar.MAX_VERTEX_ATTRIBS = 34921),
        (Ar.MAX_VERTEX_TEXTURE_IMAGE_UNITS = 35660),
        (Ar.MAX_VERTEX_UNIFORM_VECTORS = 36347),
        (Ar.MAX_VIEWPORT_DIMS = 3386),
        (Ar.MEDIUM_FLOAT = 36337),
        (Ar.MEDIUM_INT = 36340),
        (Ar.MIRRORED_REPEAT = 33648),
        (Ar.NEAREST = 9728),
        (Ar.NEAREST_MIPMAP_LINEAR = 9986),
        (Ar.NEAREST_MIPMAP_NEAREST = 9984),
        (Ar.NEVER = 512),
        (Ar.NICEST = 4354),
        (Ar.NONE = 0),
        (Ar.NOTEQUAL = 517),
        (Ar.NO_ERROR = 0),
        (Ar.NUM_COMPRESSED_TEXTURE_FORMATS = 34466),
        (Ar.ONE = 1),
        (Ar.ONE_MINUS_CONSTANT_ALPHA = 32772),
        (Ar.ONE_MINUS_CONSTANT_COLOR = 32770),
        (Ar.ONE_MINUS_DST_ALPHA = 773),
        (Ar.ONE_MINUS_DST_COLOR = 775),
        (Ar.ONE_MINUS_SRC_ALPHA = 771),
        (Ar.ONE_MINUS_SRC_COLOR = 769),
        (Ar.OUT_OF_MEMORY = 1285),
        (Ar.PACK_ALIGNMENT = 3333),
        (Ar.POINTS = 0),
        (Ar.POLYGON_OFFSET_FACTOR = 32824),
        (Ar.POLYGON_OFFSET_FILL = 32823),
        (Ar.POLYGON_OFFSET_UNITS = 10752),
        (Ar.RED_BITS = 3410),
        (Ar.RENDERBUFFER = 36161),
        (Ar.RENDERBUFFER_ALPHA_SIZE = 36179),
        (Ar.RENDERBUFFER_BINDING = 36007),
        (Ar.RENDERBUFFER_BLUE_SIZE = 36178),
        (Ar.RENDERBUFFER_DEPTH_SIZE = 36180),
        (Ar.RENDERBUFFER_GREEN_SIZE = 36177),
        (Ar.RENDERBUFFER_HEIGHT = 36163),
        (Ar.RENDERBUFFER_INTERNAL_FORMAT = 36164),
        (Ar.RENDERBUFFER_RED_SIZE = 36176),
        (Ar.RENDERBUFFER_STENCIL_SIZE = 36181),
        (Ar.RENDERBUFFER_WIDTH = 36162),
        (Ar.RENDERER = 7937),
        (Ar.REPEAT = 10497),
        (Ar.REPLACE = 7681),
        (Ar.RGB = 6407),
        (Ar.RGB5_A1 = 32855),
        (Ar.RGB565 = 36194),
        (Ar.RGBA = 6408),
        (Ar.RGBA4 = 32854),
        (Ar.SAMPLER_2D = 35678),
        (Ar.SAMPLER_CUBE = 35680),
        (Ar.SAMPLES = 32937),
        (Ar.SAMPLE_ALPHA_TO_COVERAGE = 32926),
        (Ar.SAMPLE_BUFFERS = 32936),
        (Ar.SAMPLE_COVERAGE = 32928),
        (Ar.SAMPLE_COVERAGE_INVERT = 32939),
        (Ar.SAMPLE_COVERAGE_VALUE = 32938),
        (Ar.SCISSOR_BOX = 3088),
        (Ar.SCISSOR_TEST = 3089),
        (Ar.SHADER_COMPILER = 36346),
        (Ar.SHADER_SOURCE_LENGTH = 35720),
        (Ar.SHADER_TYPE = 35663),
        (Ar.SHADING_LANGUAGE_VERSION = 35724),
        (Ar.SHORT = 5122),
        (Ar.SRC_ALPHA = 770),
        (Ar.SRC_ALPHA_SATURATE = 776),
        (Ar.SRC_COLOR = 768),
        (Ar.STATIC_DRAW = 35044),
        (Ar.STENCIL_ATTACHMENT = 36128),
        (Ar.STENCIL_BACK_FAIL = 34817),
        (Ar.STENCIL_BACK_FUNC = 34816),
        (Ar.STENCIL_BACK_PASS_DEPTH_FAIL = 34818),
        (Ar.STENCIL_BACK_PASS_DEPTH_PASS = 34819),
        (Ar.STENCIL_BACK_REF = 36003),
        (Ar.STENCIL_BACK_VALUE_MASK = 36004),
        (Ar.STENCIL_BACK_WRITEMASK = 36005),
        (Ar.STENCIL_BITS = 3415),
        (Ar.STENCIL_BUFFER_BIT = 1024),
        (Ar.STENCIL_CLEAR_VALUE = 2961),
        (Ar.STENCIL_FAIL = 2964),
        (Ar.STENCIL_FUNC = 2962),
        (Ar.STENCIL_INDEX = 6401),
        (Ar.STENCIL_INDEX8 = 36168),
        (Ar.STENCIL_PASS_DEPTH_FAIL = 2965),
        (Ar.STENCIL_PASS_DEPTH_PASS = 2966),
        (Ar.STENCIL_REF = 2967),
        (Ar.STENCIL_TEST = 2960),
        (Ar.STENCIL_VALUE_MASK = 2963),
        (Ar.STENCIL_WRITEMASK = 2968),
        (Ar.STREAM_DRAW = 35040),
        (Ar.SUBPIXEL_BITS = 3408),
        (Ar.TEXTURE = 5890),
        (Ar.TEXTURE0 = 33984),
        (Ar.TEXTURE1 = 33985),
        (Ar.TEXTURE2 = 33986),
        (Ar.TEXTURE3 = 33987),
        (Ar.TEXTURE4 = 33988),
        (Ar.TEXTURE5 = 33989),
        (Ar.TEXTURE6 = 33990),
        (Ar.TEXTURE7 = 33991),
        (Ar.TEXTURE8 = 33992),
        (Ar.TEXTURE9 = 33993),
        (Ar.TEXTURE10 = 33994),
        (Ar.TEXTURE11 = 33995),
        (Ar.TEXTURE12 = 33996),
        (Ar.TEXTURE13 = 33997),
        (Ar.TEXTURE14 = 33998),
        (Ar.TEXTURE15 = 33999),
        (Ar.TEXTURE16 = 34e3),
        (Ar.TEXTURE17 = 34001),
        (Ar.TEXTURE18 = 34002),
        (Ar.TEXTURE19 = 34003),
        (Ar.TEXTURE20 = 34004),
        (Ar.TEXTURE21 = 34005),
        (Ar.TEXTURE22 = 34006),
        (Ar.TEXTURE23 = 34007),
        (Ar.TEXTURE24 = 34008),
        (Ar.TEXTURE25 = 34009),
        (Ar.TEXTURE26 = 34010),
        (Ar.TEXTURE27 = 34011),
        (Ar.TEXTURE28 = 34012),
        (Ar.TEXTURE29 = 34013),
        (Ar.TEXTURE30 = 34014),
        (Ar.TEXTURE31 = 34015),
        (Ar.TEXTURE_2D = 3553),
        (Ar.TEXTURE_BINDING_2D = 32873),
        (Ar.TEXTURE_BINDING_CUBE_MAP = 34068),
        (Ar.TEXTURE_CUBE_MAP = 34067),
        (Ar.TEXTURE_CUBE_MAP_NEGATIVE_X = 34070),
        (Ar.TEXTURE_CUBE_MAP_NEGATIVE_Y = 34072),
        (Ar.TEXTURE_CUBE_MAP_NEGATIVE_Z = 34074),
        (Ar.TEXTURE_CUBE_MAP_POSITIVE_X = 34069),
        (Ar.TEXTURE_CUBE_MAP_POSITIVE_Y = 34071),
        (Ar.TEXTURE_CUBE_MAP_POSITIVE_Z = 34073),
        (Ar.TEXTURE_MAG_FILTER = 10240),
        (Ar.TEXTURE_MIN_FILTER = 10241),
        (Ar.TEXTURE_WRAP_S = 10242),
        (Ar.TEXTURE_WRAP_T = 10243),
        (Ar.TRIANGLES = 4),
        (Ar.TRIANGLE_FAN = 6),
        (Ar.TRIANGLE_STRIP = 5),
        (Ar.UNPACK_ALIGNMENT = 3317),
        (Ar.UNPACK_COLORSPACE_CONVERSION_WEBGL = 37443),
        (Ar.UNPACK_FLIP_Y_WEBGL = 37440),
        (Ar.UNPACK_PREMULTIPLY_ALPHA_WEBGL = 37441),
        (Ar.UNSIGNED_BYTE = 5121),
        (Ar.UNSIGNED_INT = 5125),
        (Ar.UNSIGNED_SHORT = 5123),
        (Ar.UNSIGNED_SHORT_4_4_4_4 = 32819),
        (Ar.UNSIGNED_SHORT_5_5_5_1 = 32820),
        (Ar.UNSIGNED_SHORT_5_6_5 = 33635),
        (Ar.VALIDATE_STATUS = 35715),
        (Ar.VENDOR = 7936),
        (Ar.VERSION = 7938),
        (Ar.VERTEX_ATTRIB_ARRAY_BUFFER_BINDING = 34975),
        (Ar.VERTEX_ATTRIB_ARRAY_ENABLED = 34338),
        (Ar.VERTEX_ATTRIB_ARRAY_NORMALIZED = 34922),
        (Ar.VERTEX_ATTRIB_ARRAY_POINTER = 34373),
        (Ar.VERTEX_ATTRIB_ARRAY_SIZE = 34339),
        (Ar.VERTEX_ATTRIB_ARRAY_STRIDE = 34340),
        (Ar.VERTEX_ATTRIB_ARRAY_TYPE = 34341),
        (Ar.VERTEX_SHADER = 35633),
        (Ar.VIEWPORT = 2978),
        (Ar.ZERO = 0)
      var Rr = Ar
      function wr(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ("function" === typeof Proxy) return !0
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var n,
            i = X()(e)
          if (t) {
            var r = X()(this).constructor
            n = Reflect.construct(i, arguments, r)
          } else n = i.apply(this, arguments)
          return j()(this, n)
        }
      }
      var xr = (function (e) {
          z()(n, e)
          var t = wr(n)
          function n(e, i) {
            var r,
              o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0
            if (
              (F()(this, n),
              ((r = t.call(this))._loc = e.shader.uniformLocations[i]),
              r._loc || mr.log("FloatUniform: uniform does not exist on shader: ", e.name, i),
              !e.shader.program)
            )
              throw new ReferenceError("Cannot construct FloatUniform from material: material shader is not yet initialized.")
            return (r._renderer = e.renderer), (r._program = e.shader.program), r.set(o), r
          }
          return (
            V()(n, [
              {
                key: "set",
                value: function (e) {
                  e != this._value && ((this._value = e), this._renderer.renderState.setProgram(this._program), this._renderer.context.uniform1f(this._loc, this._value))
                },
              },
              {
                key: "getValue",
                value: function () {
                  return this._value
                },
              },
              {
                key: "destruct",
                value: function () {
                  Mi()(X()(n.prototype), "destruct", this).call(this)
                },
              },
            ]),
            n
          )
        })(Ii),
        kr = (function () {
          function e(t, n) {
            var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new dr()
            if (
              (F()(this, e),
              (this._value = i),
              (this._loc = t.shader.uniformLocations[n]),
              this._loc || mr.log("FloatUniform: uniform does not exist on shader: ", n),
              !t.shader.program)
            )
              throw new ReferenceError("Cannot construct Vector2Uniform from material: material shader is not yet initialized.")
            ;(this._renderer = t.renderer), (this._program = t.shader.program)
          }
          return (
            V()(e, [
              {
                key: "set",
                value: function (e) {
                  ;(e.x == this._value.x && e.y == this._value.y) ||
                    ((this._value = e), this._renderer.renderState.setProgram(this._program), this._renderer.context.uniform2fv(this._loc, this._value.v))
                },
              },
              {
                key: "getValue",
                value: function () {
                  return this._value
                },
              },
            ]),
            e
          )
        })(),
        Sr = (function () {
          function e(t, n) {
            ;(arguments.length > 2 && void 0 !== arguments[2]) || new Xi()
            if (
              (F()(this, e),
              (this._value = new Xi()),
              (this._loc = t.shader.uniformLocations[n]),
              this._loc || mr.log("FloatUniform: uniform does not exist on shader: ", n),
              !t.shader.program)
            )
              throw new ReferenceError("Cannot construct Vector3Uniform from material: material shader is not yet initialized.")
            ;(this._renderer = t.renderer), (this._program = t.shader.program)
          }
          return (
            V()(e, [
              {
                key: "set",
                value: function (e) {
                  ;(e.x == this._value.x && e.y == this._value.y && e.z == this._value.z) ||
                    (this._value.copy(e), this._renderer.renderState.setProgram(this._program), this._renderer.context.uniform3fv(this._loc, this._value.v))
                },
              },
              {
                key: "getValue",
                value: function () {
                  return this._value
                },
              },
            ]),
            e
          )
        })()
      function Cr(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ("function" === typeof Proxy) return !0
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var n,
            i = X()(e)
          if (t) {
            var r = X()(this).constructor
            n = Reflect.construct(i, arguments, r)
          } else n = i.apply(this, arguments)
          return j()(this, n)
        }
      }
      var Pr = (function (e) {
        z()(n, e)
        var t = Cr(n)
        function n(e, i, r) {
          var o
          return (
            F()(this, n),
            ((o = t.call(this))._shaderDefines = {}),
            (o.drawType = Rr.TRIANGLES),
            (o.depthTest = !0),
            (o.depthWrite = !0),
            (o.blend = !1),
            (o.culling = Rr.BACK),
            (o.blendFuncSeparate = !1),
            (o.renderer = e),
            (o.name = i),
            (o.shader = r),
            (o.id = n.staticId++),
            o.setDefaultBlending(),
            o
          )
        }
        return (
          V()(n, [
            {
              key: "setActive",
              value: function () {
                if (void 0 === this.shader.program || void 0 === this.shader.textureUniforms)
                  throw new Error("Trying to activate material but the associated shader is not yet initialized")
                this.renderer.renderState.setProgram(this.shader.program)
                for (var e = 0; e < this.shader.textureUniforms.length; e++) this.shader.textureUniforms[e].bind()
                if (
                  this.renderer.renderState.material != this &&
                  ((this.renderer.renderState.material = this),
                  this.renderer.renderState.setDepthTest(this.depthTest),
                  this.renderer.renderState.setDepthMask(this.depthWrite),
                  this.depthFunc && this.renderer.renderState.setDepthFunc(this.depthFunc),
                  this.renderer.renderState.setCulling(this.culling),
                  this.renderer.renderState.setBlendEnabled(this.blend),
                  this.blend)
                )
                  if ((this.renderer.renderState.setBlendEquation(this.blendEquation), this.blendFuncSeparate)) {
                    if (void 0 === this.sourceBlendRGB || void 0 === this.destinationBlendRGB || void 0 === this.sourceBlendAlpha || void 0 === this.destinationBlendAlpha)
                      throw new ReferenceError("expected blend properties to be set")
                    this.renderer.renderState.setBlendFuncSeparate(this.sourceBlendRGB, this.destinationBlendRGB, this.sourceBlendAlpha, this.destinationBlendAlpha)
                  } else this.renderer.renderState.setBlendFunc(this.sourceBlend, this.destinationBlend)
              },
            },
            {
              key: "setDefaultBlending",
              value: function () {
                ;(this.depthTest = !0),
                  (this.depthWrite = !0),
                  (this.blend = !1),
                  (this.blendEquation = Rr.FUNC_ADD),
                  (this.sourceBlend = Rr.ZERO),
                  (this.destinationBlend = Rr.ONE)
              },
            },
            {
              key: "setAlphaBlending",
              value: function () {
                ;(this.depthWrite = !1), (this.depthTest = !0), (this.blend = !0), (this.blendEquation = Rr.FUNC_ADD), this.setBlendUnified(Rr.SRC_ALPHA, Rr.ONE_MINUS_SRC_ALPHA)
              },
            },
            {
              key: "setPreMultipliedAlphaBlending",
              value: function () {
                ;(this.depthWrite = !1), (this.depthTest = !0), (this.blend = !0), (this.blendEquation = Rr.FUNC_ADD), this.setBlendUnified(Rr.ONE, Rr.ONE_MINUS_SRC_ALPHA)
              },
            },
            {
              key: "setMaxBlending",
              value: function () {
                ;(this.depthWrite = !1),
                  (this.depthTest = !1),
                  (this.blend = !0),
                  (this.blendEquation = 32776),
                  (this.sourceBlend = Rr.ONE),
                  (this.destinationBlend = Rr.ONE),
                  this.setBlendUnified(Rr.ONE, Rr.ONE)
              },
            },
            {
              key: "setAdditiveBlending",
              value: function () {
                ;(this.depthWrite = !1), (this.depthTest = !0), (this.blend = !0), (this.blendEquation = Rr.FUNC_ADD), this.setBlendUnified(Rr.ONE, Rr.ONE)
              },
            },
            {
              key: "setMultiplyBlending",
              value: function () {
                ;(this.depthWrite = !1), (this.depthTest = !0), (this.blend = !0), (this.blendEquation = Rr.FUNC_ADD), this.setBlendUnified(Rr.ZERO, Rr.SRC_COLOR)
              },
            },
            {
              key: "setSubtractiveBlending",
              value: function () {
                ;(this.depthWrite = !1), (this.depthTest = !1), (this.blend = !0), (this.blendEquation = Rr.FUNC_SUBTRACT), this.setBlendUnified(Rr.ONE, Rr.ONE_MINUS_SRC_ALPHA)
              },
            },
            {
              key: "setBlendUnified",
              value: function (e, t) {
                ;(this.blendFuncSeparate = !1), (this.sourceBlend = e), (this.destinationBlend = t)
              },
            },
            {
              key: "setBlendSeparate",
              value: function (e, t, n, i) {
                ;(this.blendFuncSeparate = !0), (this.sourceBlendRGB = e), (this.sourceBlendAlpha = n), (this.destinationBlendRGB = t), (this.destinationBlendAlpha = i)
              },
            },
            {
              key: "setCullingBackFace",
              value: function () {
                this.culling = Rr.BACK
              },
            },
            {
              key: "setCullingFrontFace",
              value: function () {
                this.culling = Rr.FRONT
              },
            },
            {
              key: "setCullingDisabled",
              value: function () {
                this.culling = Rr.NONE
              },
            },
            {
              key: "setDrawTypePoints",
              value: function () {
                this.drawType = Rr.POINTS
              },
            },
            {
              key: "setDrawTypeLines",
              value: function () {
                this.drawType = Rr.LINES
              },
            },
            {
              key: "setDrawTypeLineStrip",
              value: function () {
                this.drawType = Rr.LINE_STRIP
              },
            },
            {
              key: "setDrawTypeTriangles",
              value: function () {
                this.drawType = Rr.TRIANGLES
              },
            },
            {
              key: "setDrawTypeTriangleFan",
              value: function () {
                this.drawType = Rr.TRIANGLE_FAN
              },
            },
            {
              key: "setDrawTypeTriangleStrip",
              value: function () {
                this.drawType = Rr.TRIANGLE_STRIP
              },
            },
            {
              key: "setFloat",
              value: function (e, t) {
                var n = this.getLoc(e)
                n && (this.renderer.renderState.setProgram(this.shader.program), this.renderer.context.uniform1f(n, t))
              },
            },
            {
              key: "setInt",
              value: function (e, t) {
                var n = this.getLoc(e)
                n && (this.renderer.renderState.setProgram(this.shader.program), this.renderer.context.uniform1i(n, t))
              },
            },
            {
              key: "setFloats",
              value: function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                  n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                  i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                  r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
                  o = this.getLoc(e)
                o && (this.renderer.renderState.setProgram(this.shader.program), this.renderer.context.uniform4f(o, t, n, i, r))
              },
            },
            {
              key: "setShaderVector",
              value: function (e, t) {
                var n = this.renderer.context,
                  i = this.getLoc(e)
                if (i)
                  switch ((this.renderer.renderState.setProgram(this.shader.program), t.length)) {
                    case 1:
                      n.uniform1f(i, t[0])
                      break
                    case 2:
                      n.uniform2f(i, t[0], t[1])
                      break
                    case 3:
                      n.uniform3f(i, t[0], t[1], t[2])
                      break
                    case 4:
                      n.uniform4f(i, t[0], t[1], t[2], t[3])
                  }
              },
            },
            {
              key: "setMatrix",
              value: function (e, t) {
                var n = this.getLoc(e)
                n && (this.renderer.renderState.setProgram(this.shader.program), this.renderer.context.uniformMatrix4fv(n, !1, t))
              },
            },
            {
              key: "setMatrix3x3",
              value: function (e, t) {
                var n = this.getLoc(e)
                n && (this.renderer.renderState.setProgram(this.shader.program), this.renderer.context.uniformMatrix3fv(n, !1, t))
              },
            },
            {
              key: "setMatrix2x2",
              value: function (e, t) {
                var n = this.getLoc(e)
                n && (this.renderer.renderState.setProgram(this.shader.program), this.renderer.context.uniformMatrix2fv(n, !1, t))
              },
            },
            {
              key: "setMatrixArray",
              value: function (e, t) {
                for (var n = 0; n < t.length; n++) {
                  var i = e + "[" + n + "]"
                  this.setMatrix(i, t[n])
                }
              },
            },
            {
              key: "setMatrixArray2",
              value: function (e, t) {
                var n = this.getLoc(e)
                n && (this.renderer.renderState.setProgram(this.shader.program), this.renderer.context.uniformMatrix4fv(n, !1, t))
              },
            },
            {
              key: "setMatrixFloatArray",
              value: function (e, t) {
                var n = this.getLoc(e)
                n && (this.renderer.renderState.setProgram(this.shader.program), this.renderer.context.uniformMatrix4fv(n, !1, t))
              },
            },
            {
              key: "setTexture",
              value: function (e, t) {
                if (!this.shader) throw new ReferenceError("Material has no Shader")
                var n = this.shader.getTextureUniformByName(e)
                n && n.set(t)
              },
            },
            {
              key: "setFloat32Array",
              value: function (e, t) {
                var n = this.getLoc(e)
                n && (this.renderer.renderState.setProgram(this.shader.program), this.renderer.context.uniform1fv(n, t))
              },
            },
            {
              key: "setInt32Array",
              value: function (e, t) {
                var n = this.getLoc(e)
                n && (this.renderer.renderState.setProgram(this.shader.program), this.renderer.context.uniform1iv(n, t))
              },
            },
            {
              key: "setColor",
              value: function (e, t) {
                var n = this.getLoc(e)
                n && (this.renderer.renderState.setProgram(this.shader.program), this.renderer.context.uniform4f(n, t.r, t.g, t.b, t.a))
              },
            },
            {
              key: "setVector3",
              value: function (e, t) {
                var n = this.getLoc(e)
                n && (this.renderer.renderState.setProgram(this.shader.program), this.renderer.context.uniform3fv(n, t.v))
              },
            },
            {
              key: "setVector3Array",
              value: function (e, t) {
                var n = this.getLoc(e)
                n && (this.renderer.renderState.setProgram(this.shader.program), this.renderer.context.uniform3fv(n, t))
              },
            },
            {
              key: "setVector2",
              value: function (e, t) {
                var n = this.getLoc(e)
                n && (this.renderer.renderState.setProgram(this.shader.program), this.renderer.context.uniform2fv(n, t.v))
              },
            },
            {
              key: "setVector2Array",
              value: function (e, t) {
                var n = this.getLoc(e)
                n && (this.renderer.renderState.setProgram(this.shader.program), this.renderer.context.uniform2fv(n, t))
              },
            },
            {
              key: "setVector4",
              value: function (e, t) {
                var n = this.getLoc(e)
                n && (this.renderer.renderState.setProgram(this.shader.program), this.renderer.context.uniform4fv(n, t.v))
              },
            },
            {
              key: "setVector4Array",
              value: function (e, t) {
                var n = this.getLoc(e)
                n && (this.renderer.renderState.setProgram(this.shader.program), this.renderer.context.uniform4fv(n, t))
              },
            },
            {
              key: "getLoc",
              value: function (e) {
                var t = this.shader.uniformLocations[e]
                if (!1 !== t && !t) {
                  if (!this.shader) throw new ReferenceError("Material has no Shader")
                  if (!this.shader.program) throw new ReferenceError("Material shader has not yet been initialized")
                  if ((this.renderer.renderState.setProgram(this.shader.program), (t = this.renderer.context.getUniformLocation(this.shader.program, e))))
                    return (this.shader.uniformLocations[e] = t), t
                  ;(this.shader.uniformLocations[e] = !1), mr.log("uniform not present in shader: ", this.name, e)
                }
                return t
              },
            },
            {
              key: "hasUniform",
              value: function (e) {
                if (!this.shader) throw new ReferenceError("Material has no Shader")
                return !!this.shader.uniformLocations[e]
              },
            },
            {
              key: "addFloatUniform",
              value: function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
                return new xr(this, e, t)
              },
            },
            {
              key: "addVector2Uniform",
              value: function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new dr()
                return new kr(this, e, t)
              },
            },
            {
              key: "addVector3Uniform",
              value: function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Xi()
                return new Sr(this, e, t)
              },
            },
            {
              key: "addShaderDefines",
              value: function () {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n]
                for (var i = 0; i < t.length; i++) {
                  var r = t[i] instanceof Array ? t[i][0] : t[i],
                    o = t[i] instanceof Array ? t[i][1] : 1
                  void 0 == this._shaderDefines[r] && (this._shaderDefines[r] = o)
                }
              },
            },
            {
              key: "getShaderDefines",
              value: function () {
                return this._shaderDefines
              },
            },
            {
              key: "clearShaderDefines",
              value: function () {
                this._shaderDefines = []
              },
            },
            {
              key: "destruct",
              value: function () {
                this.isDestructed || this.shader.destruct(), Mi()(X()(n.prototype), "destruct", this).call(this)
              },
            },
          ]),
          n
        )
      })(Ii)
      Pr.staticId = 0
      var Or = Pr,
        Mr = V()(function e(t, n, i) {
          F()(this, e), (this.name = t), (this.stride = n), (this.loc = i)
        }),
        Ir = (function () {
          function e(t, n, i, r) {
            if ((F()(this, e), (this.name = n), (this._samplerIndex = r), !t.program))
              throw new ReferenceError("Cannot construct TextureUniform from shader: shader is not yet initialized.")
            t.renderer.renderState.setProgram(t.program), t.renderer.context.uniform1i(i, r)
          }
          return (
            V()(e, [
              {
                key: "set",
                value: function (e) {
                  this._texture = e
                },
              },
              {
                key: "bind",
                value: function () {
                  this._texture && this._texture.bindToSlot(this._samplerIndex)
                },
              },
            ]),
            e
          )
        })(),
        Lr = V()(function e() {
          F()(this, e)
        })
      ;(Lr.READ_BUFFER = 3074),
        (Lr.UNPACK_ROW_LENGTH = 3314),
        (Lr.UNPACK_SKIP_ROWS = 3315),
        (Lr.UNPACK_SKIP_PIXELS = 3316),
        (Lr.PACK_ROW_LENGTH = 3330),
        (Lr.PACK_SKIP_ROWS = 3331),
        (Lr.PACK_SKIP_PIXELS = 3332),
        (Lr.COLOR = 6144),
        (Lr.DEPTH = 6145),
        (Lr.STENCIL = 6146),
        (Lr.RED = 6403),
        (Lr.RGB8 = 32849),
        (Lr.RGBA8 = 32856),
        (Lr.RGB10_A2 = 32857),
        (Lr.TEXTURE_BINDING_3D = 32874),
        (Lr.UNPACK_SKIP_IMAGES = 32877),
        (Lr.UNPACK_IMAGE_HEIGHT = 32878),
        (Lr.TEXTURE_3D = 32879),
        (Lr.TEXTURE_WRAP_R = 32882),
        (Lr.MAX_3D_TEXTURE_SIZE = 32883),
        (Lr.UNSIGNED_INT_2_10_10_10_REV = 33640),
        (Lr.MAX_ELEMENTS_VERTICES = 33e3),
        (Lr.MAX_ELEMENTS_INDICES = 33001),
        (Lr.TEXTURE_MIN_LOD = 33082),
        (Lr.TEXTURE_MAX_LOD = 33083),
        (Lr.TEXTURE_BASE_LEVEL = 33084),
        (Lr.TEXTURE_MAX_LEVEL = 33085),
        (Lr.MIN = 32775),
        (Lr.MAX = 32776),
        (Lr.DEPTH_COMPONENT24 = 33190),
        (Lr.MAX_TEXTURE_LOD_BIAS = 34045),
        (Lr.TEXTURE_COMPARE_MODE = 34892),
        (Lr.TEXTURE_COMPARE_FUNC = 34893),
        (Lr.CURRENT_QUERY = 34917),
        (Lr.QUERY_RESULT = 34918),
        (Lr.QUERY_RESULT_AVAILABLE = 34919),
        (Lr.STREAM_READ = 35041),
        (Lr.STREAM_COPY = 35042),
        (Lr.STATIC_READ = 35045),
        (Lr.STATIC_COPY = 35046),
        (Lr.DYNAMIC_READ = 35049),
        (Lr.DYNAMIC_COPY = 35050),
        (Lr.MAX_DRAW_BUFFERS = 34852),
        (Lr.DRAW_BUFFER0 = 34853),
        (Lr.DRAW_BUFFER1 = 34854),
        (Lr.DRAW_BUFFER2 = 34855),
        (Lr.DRAW_BUFFER3 = 34856),
        (Lr.DRAW_BUFFER4 = 34857),
        (Lr.DRAW_BUFFER5 = 34858),
        (Lr.DRAW_BUFFER6 = 34859),
        (Lr.DRAW_BUFFER7 = 34860),
        (Lr.DRAW_BUFFER8 = 34861),
        (Lr.DRAW_BUFFER9 = 34862),
        (Lr.DRAW_BUFFER10 = 34863),
        (Lr.DRAW_BUFFER11 = 34864),
        (Lr.DRAW_BUFFER12 = 34865),
        (Lr.DRAW_BUFFER13 = 34866),
        (Lr.DRAW_BUFFER14 = 34867),
        (Lr.DRAW_BUFFER15 = 34868),
        (Lr.MAX_FRAGMENT_UNIFORM_COMPONENTS = 35657),
        (Lr.MAX_VERTEX_UNIFORM_COMPONENTS = 35658),
        (Lr.SAMPLER_3D = 35679),
        (Lr.SAMPLER_2D_SHADOW = 35682),
        (Lr.FRAGMENT_SHADER_DERIVATIVE_HINT = 35723),
        (Lr.PIXEL_PACK_BUFFER = 35051),
        (Lr.PIXEL_UNPACK_BUFFER = 35052),
        (Lr.PIXEL_PACK_BUFFER_BINDING = 35053),
        (Lr.PIXEL_UNPACK_BUFFER_BINDING = 35055),
        (Lr.FLOAT_MAT2x3 = 35685),
        (Lr.FLOAT_MAT2x4 = 35686),
        (Lr.FLOAT_MAT3x2 = 35687),
        (Lr.FLOAT_MAT3x4 = 35688),
        (Lr.FLOAT_MAT4x2 = 35689),
        (Lr.FLOAT_MAT4x3 = 35690),
        (Lr.SRGB = 35904),
        (Lr.SRGB8 = 35905),
        (Lr.SRGB8_ALPHA8 = 35907),
        (Lr.COMPARE_REF_TO_TEXTURE = 34894),
        (Lr.RGBA32F = 34836),
        (Lr.RGB32F = 34837),
        (Lr.RGBA16F = 34842),
        (Lr.RGB16F = 34843),
        (Lr.VERTEX_ATTRIB_ARRAY_INTEGER = 35069),
        (Lr.MAX_ARRAY_TEXTURE_LAYERS = 35071),
        (Lr.MIN_PROGRAM_TEXEL_OFFSET = 35076),
        (Lr.MAX_PROGRAM_TEXEL_OFFSET = 35077),
        (Lr.MAX_VARYING_COMPONENTS = 35659),
        (Lr.TEXTURE_2D_ARRAY = 35866),
        (Lr.TEXTURE_BINDING_2D_ARRAY = 35869),
        (Lr.R11F_G11F_B10F = 35898),
        (Lr.UNSIGNED_INT_10F_11F_11F_REV = 35899),
        (Lr.RGB9_E5 = 35901),
        (Lr.UNSIGNED_INT_5_9_9_9_REV = 35902),
        (Lr.TRANSFORM_FEEDBACK_BUFFER_MODE = 35967),
        (Lr.MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS = 35968),
        (Lr.TRANSFORM_FEEDBACK_VARYINGS = 35971),
        (Lr.TRANSFORM_FEEDBACK_BUFFER_START = 35972),
        (Lr.TRANSFORM_FEEDBACK_BUFFER_SIZE = 35973),
        (Lr.TRANSFORM_FEEDBACK_PRIMITIVES_WRITTEN = 35976),
        (Lr.RASTERIZER_DISCARD = 35977),
        (Lr.MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS = 35978),
        (Lr.MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS = 35979),
        (Lr.INTERLEAVED_ATTRIBS = 35980),
        (Lr.SEPARATE_ATTRIBS = 35981),
        (Lr.TRANSFORM_FEEDBACK_BUFFER = 35982),
        (Lr.TRANSFORM_FEEDBACK_BUFFER_BINDING = 35983),
        (Lr.RGBA32UI = 36208),
        (Lr.RGB32UI = 36209),
        (Lr.RGBA16UI = 36214),
        (Lr.RGB16UI = 36215),
        (Lr.RGBA8UI = 36220),
        (Lr.RGB8UI = 36221),
        (Lr.RGBA32I = 36226),
        (Lr.RGB32I = 36227),
        (Lr.RGBA16I = 36232),
        (Lr.RGB16I = 36233),
        (Lr.RGBA8I = 36238),
        (Lr.RGB8I = 36239),
        (Lr.RED_INTEGER = 36244),
        (Lr.RGB_INTEGER = 36248),
        (Lr.RGBA_INTEGER = 36249),
        (Lr.SAMPLER_2D_ARRAY = 36289),
        (Lr.SAMPLER_2D_ARRAY_SHADOW = 36292),
        (Lr.SAMPLER_CUBE_SHADOW = 36293),
        (Lr.UNSIGNED_INT_VEC2 = 36294),
        (Lr.UNSIGNED_INT_VEC3 = 36295),
        (Lr.UNSIGNED_INT_VEC4 = 36296),
        (Lr.INT_SAMPLER_2D = 36298),
        (Lr.INT_SAMPLER_3D = 36299),
        (Lr.INT_SAMPLER_CUBE = 36300),
        (Lr.INT_SAMPLER_2D_ARRAY = 36303),
        (Lr.UNSIGNED_INT_SAMPLER_2D = 36306),
        (Lr.UNSIGNED_INT_SAMPLER_3D = 36307),
        (Lr.UNSIGNED_INT_SAMPLER_CUBE = 36308),
        (Lr.UNSIGNED_INT_SAMPLER_2D_ARRAY = 36311),
        (Lr.DEPTH_COMPONENT32F = 36012),
        (Lr.DEPTH32F_STENCIL8 = 36013),
        (Lr.FLOAT_32_UNSIGNED_INT_24_8_REV = 36269),
        (Lr.FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING = 33296),
        (Lr.FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE = 33297),
        (Lr.FRAMEBUFFER_ATTACHMENT_RED_SIZE = 33298),
        (Lr.FRAMEBUFFER_ATTACHMENT_GREEN_SIZE = 33299),
        (Lr.FRAMEBUFFER_ATTACHMENT_BLUE_SIZE = 33300),
        (Lr.FRAMEBUFFER_ATTACHMENT_ALPHA_SIZE = 33301),
        (Lr.FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE = 33302),
        (Lr.FRAMEBUFFER_ATTACHMENT_STENCIL_SIZE = 33303),
        (Lr.FRAMEBUFFER_DEFAULT = 33304),
        (Lr.DEPTH_STENCIL_ATTACHMENT = 33306),
        (Lr.DEPTH_STENCIL = 34041),
        (Lr.UNSIGNED_INT_24_8 = 34042),
        (Lr.DEPTH24_STENCIL8 = 35056),
        (Lr.UNSIGNED_NORMALIZED = 35863),
        (Lr.DRAW_FRAMEBUFFER_BINDING = 36006),
        (Lr.READ_FRAMEBUFFER = 36008),
        (Lr.DRAW_FRAMEBUFFER = 36009),
        (Lr.READ_FRAMEBUFFER_BINDING = 36010),
        (Lr.RENDERBUFFER_SAMPLES = 36011),
        (Lr.FRAMEBUFFER_ATTACHMENT_TEXTURE_LAYER = 36052),
        (Lr.MAX_COLOR_ATTACHMENTS = 36063),
        (Lr.COLOR_ATTACHMENT1 = 36065),
        (Lr.COLOR_ATTACHMENT2 = 36066),
        (Lr.COLOR_ATTACHMENT3 = 36067),
        (Lr.COLOR_ATTACHMENT4 = 36068),
        (Lr.COLOR_ATTACHMENT5 = 36069),
        (Lr.COLOR_ATTACHMENT6 = 36070),
        (Lr.COLOR_ATTACHMENT7 = 36071),
        (Lr.COLOR_ATTACHMENT8 = 36072),
        (Lr.COLOR_ATTACHMENT9 = 36073),
        (Lr.COLOR_ATTACHMENT10 = 36074),
        (Lr.COLOR_ATTACHMENT11 = 36075),
        (Lr.COLOR_ATTACHMENT12 = 36076),
        (Lr.COLOR_ATTACHMENT13 = 36077),
        (Lr.COLOR_ATTACHMENT14 = 36078),
        (Lr.COLOR_ATTACHMENT15 = 36079),
        (Lr.FRAMEBUFFER_INCOMPLETE_MULTISAMPLE = 36182),
        (Lr.MAX_SAMPLES = 36183),
        (Lr.HALF_FLOAT = 5131),
        (Lr.RG = 33319),
        (Lr.RG_INTEGER = 33320),
        (Lr.R8 = 33321),
        (Lr.RG8 = 33323),
        (Lr.R16F = 33325),
        (Lr.R32F = 33326),
        (Lr.RG16F = 33327),
        (Lr.RG32F = 33328),
        (Lr.R8I = 33329),
        (Lr.R8UI = 33330),
        (Lr.R16I = 33331),
        (Lr.R16UI = 33332),
        (Lr.R32I = 33333),
        (Lr.R32UI = 33334),
        (Lr.RG8I = 33335),
        (Lr.RG8UI = 33336),
        (Lr.RG16I = 33337),
        (Lr.RG16UI = 33338),
        (Lr.RG32I = 33339),
        (Lr.RG32UI = 33340),
        (Lr.VERTEX_ARRAY_BINDING = 34229),
        (Lr.R8_SNORM = 36756),
        (Lr.RG8_SNORM = 36757),
        (Lr.RGB8_SNORM = 36758),
        (Lr.RGBA8_SNORM = 36759),
        (Lr.SIGNED_NORMALIZED = 36764),
        (Lr.COPY_READ_BUFFER = 36662),
        (Lr.COPY_WRITE_BUFFER = 36663),
        (Lr.COPY_READ_BUFFER_BINDING = 36662),
        (Lr.COPY_WRITE_BUFFER_BINDING = 36663),
        (Lr.UNIFORM_BUFFER = 35345),
        (Lr.UNIFORM_BUFFER_BINDING = 35368),
        (Lr.UNIFORM_BUFFER_START = 35369),
        (Lr.UNIFORM_BUFFER_SIZE = 35370),
        (Lr.MAX_VERTEX_UNIFORM_BLOCKS = 35371),
        (Lr.MAX_FRAGMENT_UNIFORM_BLOCKS = 35373),
        (Lr.MAX_COMBINED_UNIFORM_BLOCKS = 35374),
        (Lr.MAX_UNIFORM_BUFFER_BINDINGS = 35375),
        (Lr.MAX_UNIFORM_BLOCK_SIZE = 35376),
        (Lr.MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS = 35377),
        (Lr.MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS = 35379),
        (Lr.UNIFORM_BUFFER_OFFSET_ALIGNMENT = 35380),
        (Lr.ACTIVE_UNIFORM_BLOCKS = 35382),
        (Lr.UNIFORM_TYPE = 35383),
        (Lr.UNIFORM_SIZE = 35384),
        (Lr.UNIFORM_BLOCK_INDEX = 35386),
        (Lr.UNIFORM_OFFSET = 35387),
        (Lr.UNIFORM_ARRAY_STRIDE = 35388),
        (Lr.UNIFORM_MATRIX_STRIDE = 35389),
        (Lr.UNIFORM_IS_ROW_MAJOR = 35390),
        (Lr.UNIFORM_BLOCK_BINDING = 35391),
        (Lr.UNIFORM_BLOCK_DATA_SIZE = 35392),
        (Lr.UNIFORM_BLOCK_ACTIVE_UNIFORMS = 35394),
        (Lr.UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES = 35395),
        (Lr.UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER = 35396),
        (Lr.UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER = 35398),
        (Lr.INVALID_INDEX = 4294967295),
        (Lr.MAX_VERTEX_OUTPUT_COMPONENTS = 37154),
        (Lr.MAX_FRAGMENT_INPUT_COMPONENTS = 37157),
        (Lr.MAX_SERVER_WAIT_TIMEOUT = 37137),
        (Lr.OBJECT_TYPE = 37138),
        (Lr.SYNC_CONDITION = 37139),
        (Lr.SYNC_STATUS = 37140),
        (Lr.SYNC_FLAGS = 37141),
        (Lr.SYNC_FENCE = 37142),
        (Lr.SYNC_GPU_COMMANDS_COMPLETE = 37143),
        (Lr.UNSIGNALED = 37144),
        (Lr.SIGNALED = 37145),
        (Lr.ALREADY_SIGNALED = 37146),
        (Lr.TIMEOUT_EXPIRED = 37147),
        (Lr.CONDITION_SATISFIED = 37148),
        (Lr.WAIT_FAILED = 37149),
        (Lr.SYNC_FLUSH_COMMANDS_BIT = 1),
        (Lr.VERTEX_ATTRIB_ARRAY_DIVISOR = 35070),
        (Lr.ANY_SAMPLES_PASSED = 35887),
        (Lr.ANY_SAMPLES_PASSED_CONSERVATIVE = 36202),
        (Lr.SAMPLER_BINDING = 35097),
        (Lr.RGB10_A2UI = 36975),
        (Lr.INT_2_10_10_10_REV = 36255),
        (Lr.TRANSFORM_FEEDBACK = 36386),
        (Lr.TRANSFORM_FEEDBACK_PAUSED = 36387),
        (Lr.TRANSFORM_FEEDBACK_ACTIVE = 36388),
        (Lr.TRANSFORM_FEEDBACK_BINDING = 36389),
        (Lr.TEXTURE_IMMUTABLE_FORMAT = 37167),
        (Lr.MAX_ELEMENT_INDEX = 36203),
        (Lr.TEXTURE_IMMUTABLE_LEVELS = 33503)
      var Nr = Lr
      function Br(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ("function" === typeof Proxy) return !0
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var n,
            i = X()(e)
          if (t) {
            var r = X()(this).constructor
            n = Reflect.construct(i, arguments, r)
          } else n = i.apply(this, arguments)
          return j()(this, n)
        }
      }
      var Dr = (function (e) {
        z()(n, e)
        var t = Br(n)
        function n(e) {
          var i,
            r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
          return F()(this, n), ((i = t.call(this)).uniformLocations = {}), (i.id = n.staticId), n.staticId++, (i.renderer = e), (i.shaderDefines = r), i
        }
        return (
          V()(
            n,
            [
              {
                key: "load",
                value: function (e, t, n) {
                  var i = this
                  Promise.all([t.loadAssetByName("".concat(e, ".vs.glsl")), t.loadAssetByName("".concat(e, ".fs.glsl"))]).then(function (r) {
                    i.loadIncludes(r, t, function (t) {
                      i.init(e, t[0], t[1], n)
                    })
                  })
                },
              },
              {
                key: "loadIncludes",
                value: function (e, t, n) {
                  for (var i = this, r = /^#include\s+(\S+)/, o = [], a = 0; a < e.length; a++)
                    for (var s = e[a].split("\n"), l = 0; l < s.length; l++) {
                      var u = s[l]
                      u = u.trim()
                      var c
                      null !== (c = r.exec(u)) && o.push([c[1], c])
                    }
                  if (o.length) {
                    for (var h = [], f = 0; f < o.length; f++) h[f] = o[f][0]
                    Promise.all(
                      h.map(function (e) {
                        return t.loadAssetByPath(e)
                      })
                    ).then(function (r) {
                      for (var a = 0; a < e.length; a++)
                        for (var s = 0; s < o.length; s++) e[a] = e[a].replace(o[s][1][0], "\n\n///// Start " + h[s] + "\n\n" + r[s] + "\n\n///// End " + h[s] + "\n\n")
                      i.loadIncludes(e, t, n)
                    })
                  } else n.call(this, e)
                },
              },
              {
                key: "init",
                value: function (e, t, i, r) {
                  if (((this.name = e), this.shaderDefines)) {
                    var o = ""
                    for (var a in this.shaderDefines) o += "#define " + a + " " + this.shaderDefines[a] + "\n"
                    mr.log("adding defines: ", this.name, o), (t = o + t), (i = o + i)
                  }
                  ;(t = n.stripUniformDuplicates(t)),
                    (i = n.stripUniformDuplicates(i)),
                    (t = this.renderer.preprocessShaderString(t)),
                    (i = this.renderer.preprocessShaderString(i))
                  var s = this.renderer.context,
                    l = this.compileShader(s, t, s.VERTEX_SHADER),
                    u = this.compileShader(s, i, s.FRAGMENT_SHADER)
                  ;(this.program = this.LinkProgram(s, l, u)), this.getUniforms(s, this.program), this.getAttributes(s, this.program), r && r.call(this)
                },
              },
              {
                key: "compileShader",
                value: function (e, t, n) {
                  var i = e.createShader(n)
                  if ((e.shaderSource(i, t), e.compileShader(i), e.getShaderParameter(i, e.COMPILE_STATUS))) return i
                  var r = e.getShaderInfoLog(i)
                  if (r) {
                    var o
                    mr.error("compileShader: error: " + this.name, (n === Rr.VERTEX_SHADER ? "vs" : "fs") + " \n" + r),
                      console.log("%c compileShader: " + this.name + (n === Rr.VERTEX_SHADER ? " vs" : " fs"), "background: #fff0f0; color: red"),
                      console.log(r)
                    for (var a = /ERROR: (\d+):(\d+):/, s = r.split("\n"), l = [], u = 0; u < s.length; u++) {
                      var c,
                        h = s[u]
                      null !== (c = a.exec(h)) && (l[parseInt(c[2], 10) - 1] = h)
                    }
                    s = t.split("\n")
                    var f = []
                    f[0] = ""
                    for (var d = 0; d < s.length; d++)
                      (f[0] += "%c" + s[d] + "\n"),
                        (f[d + 1] = l[d] ? "background: #fff0f0; color: red" : "background: white; color: black"),
                        l[d] && (f[0] += " --\x3e " + l[d] + "\n")
                    ;(o = console).log.apply(o, f), console.log("%c compileShader: " + this.name + (n === Rr.VERTEX_SHADER ? " vs" : " fs"), "background: #fff0f0; color: red")
                  }
                  throw new Error("unable to compile shader")
                },
              },
              {
                key: "LinkProgram",
                value: function (e, t, n) {
                  var i = e.createProgram()
                  if ((e.attachShader(i, t), e.attachShader(i, n), e.linkProgram(i), e.getProgramParameter(i, e.LINK_STATUS))) return i
                  throw (console.log("LinkProgram", this.name), new Error("Program link error:\n" + e.getProgramInfoLog(i)))
                },
              },
              {
                key: "getUniforms",
                value: function (e, t) {
                  var n = e.getProgramParameter(t, e.ACTIVE_UNIFORMS)
                  ;(this.textureUniforms = []), (this.uniformLocations = {})
                  for (var i = 0, r = 0; r < n; r++) {
                    var o = e.getActiveUniform(t, r),
                      a = e.getUniformLocation(this.program, o.name)
                    ;(this.uniformLocations[o.name] = a),
                      (o.type !== Rr.SAMPLER_2D && o.type !== Rr.SAMPLER_CUBE && o.type !== Nr.SAMPLER_3D) || (this.textureUniforms.push(new Ir(this, o.name, a, i)), i++)
                  }
                },
              },
              {
                key: "getAttributes",
                value: function (e, t) {
                  var i = e.getProgramParameter(t, e.ACTIVE_ATTRIBUTES)
                  this.attributes = []
                  for (var r = 0; r < i; r++) {
                    var o = e.getActiveAttrib(t, r),
                      a = e.getAttribLocation(this.program, o.name),
                      s = n.getStride(o.type)
                    this.attributes.push(new Mr(o.name, s, a))
                  }
                },
              },
              {
                key: "getAttributeByName",
                value: function (e) {
                  if (this.attributes) for (var t = 0; t < this.attributes.length; t++) if (this.attributes[t].name === e) return this.attributes[t]
                  return null
                },
              },
              {
                key: "getTextureUniformByName",
                value: function (e) {
                  if (this.textureUniforms) for (var t = 0; t < this.textureUniforms.length; t++) if (this.textureUniforms[t].name === e) return this.textureUniforms[t]
                  return null
                },
              },
              {
                key: "destruct",
                value: function () {
                  Mi()(X()(n.prototype), "destruct", this).call(this)
                },
              },
            ],
            [
              {
                key: "stripUniformDuplicates",
                value: function (e) {
                  for (var t = "", n = {}, i = /^uniform\s+(\S*)\s+(\S*);/, r = e.split("\n"), o = 0; o < r.length; o++) {
                    var a = r[o]
                    a = a.trim()
                    var s
                    if (null !== (s = i.exec(a))) {
                      var l = s[2]
                      n[l] && (a = "// " + a), (n[l] = !0)
                    }
                    t += a + "\n"
                  }
                  return t
                },
              },
              {
                key: "getStride",
                value: function (e) {
                  switch (e) {
                    case Rr.FLOAT:
                      return 1
                    case Rr.FLOAT_VEC2:
                      return 2
                    case Rr.FLOAT_VEC3:
                      return 3
                    case Rr.FLOAT_VEC4:
                      return 4
                    default:
                      return mr.error("attribute type not handled: " + e), -1
                  }
                },
              },
            ]
          ),
          n
        )
      })(Ii)
      Dr.staticId = 0
      var Fr = Dr
      function Ur(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ("function" === typeof Proxy) return !0
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var n,
            i = X()(e)
          if (t) {
            var r = X()(this).constructor
            n = Reflect.construct(i, arguments, r)
          } else n = i.apply(this, arguments)
          return j()(this, n)
        }
      }
      var Vr = (function (e) {
        z()(n, e)
        var t = Ur(n)
        function n(e, i, r) {
          var o
          return F()(this, n), ((o = t.call(this, e, r, new Fr(e))).shaderIndex = e.shaderIndex), i.add(Di()(o)), o
        }
        return (
          V()(n, [
            {
              key: "load",
              value: function (e) {
                var t = this
                ;(this.shader.shaderDefines = this.getShaderDefines()),
                  this.shader.load(this.name, this.shaderIndex, function () {
                    e.call(t)
                  })
              },
            },
          ]),
          n
        )
      })(Or)
      function Hr(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ("function" === typeof Proxy) return !0
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var n,
            i = X()(e)
          if (t) {
            var r = X()(this).constructor
            n = Reflect.construct(i, arguments, r)
          } else n = i.apply(this, arguments)
          return j()(this, n)
        }
      }
      var zr = (function (e) {
          z()(n, e)
          var t = Hr(n)
          function n(e) {
            var i
            return (
              F()(this, n),
              ((i = t.call(this))._depthMask = !0),
              (i._depthTest = !0),
              (i._depthFunc = -1),
              (i._culling = -1),
              (i._cullingEnabled = !0),
              (i._blendEquation = -1),
              (i._blendEnabled = !0),
              (i._sourceBlend = -1),
              (i._destinationBlend = -1),
              (i._renderer = e),
              i.setBlendEnabled(!i._blendEnabled),
              i.setCullingEnabled(!i._cullingEnabled),
              i.setDepthMask(!i._depthMask),
              i.setDepthTest(!i._depthTest),
              (i.enabledAttribArrays = []),
              (i._textureSlots = []),
              i
            )
          }
          return (
            V()(n, [
              {
                key: "bindTextureToSlot",
                value: function (e) {
                  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
                  this._textureSlots[t] != e &&
                    (this._renderer.context.activeTexture(Rr.TEXTURE0 + t), this._renderer.context.bindTexture(Rr.TEXTURE_2D, e), (this._textureSlots[t] = e))
                },
              },
              {
                key: "bindTexture3DToSlot",
                value: function (e) {
                  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
                  this._textureSlots[t] != e &&
                    (this._renderer.context.activeTexture(Rr.TEXTURE0 + t), this._renderer.context.bindTexture(Nr.TEXTURE_3D, e), (this._textureSlots[t] = e))
                },
              },
              {
                key: "bindCubeTextureToSlot",
                value: function (e) {
                  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
                  this._textureSlots[t] != e &&
                    (this._renderer.context.activeTexture(Rr.TEXTURE0 + t), this._renderer.context.bindTexture(Rr.TEXTURE_CUBE_MAP, e), (this._textureSlots[t] = e))
                },
              },
              {
                key: "setProgram",
                value: function (e) {
                  return e != this._program && ((this._program = e), this._renderer.context.useProgram(this._program), !0)
                },
              },
              {
                key: "setDepthMask",
                value: function (e) {
                  e != this._depthMask && (this._renderer.context.depthMask(e), (this._depthMask = e))
                },
              },
              {
                key: "getDepthMask",
                value: function () {
                  return this._depthMask
                },
              },
              {
                key: "setDepthTest",
                value: function (e) {
                  e != this._depthTest && (e ? this._renderer.context.enable(Rr.DEPTH_TEST) : this._renderer.context.disable(Rr.DEPTH_TEST), (this._depthTest = e))
                },
              },
              {
                key: "setDepthFunc",
                value: function (e) {
                  e != this._depthFunc && (e ? this._renderer.context.depthFunc(e) : this._renderer.context.depthFunc(this._renderer.context.LESS), (this._depthFunc = e))
                },
              },
              {
                key: "setCullingEnabled",
                value: function (e) {
                  e != this._cullingEnabled && (e ? this._renderer.context.enable(Rr.CULL_FACE) : this._renderer.context.disable(Rr.CULL_FACE), (this._cullingEnabled = e))
                },
              },
              {
                key: "setCulling",
                value: function (e) {
                  e != this._culling && (e == Rr.NONE ? this.setCullingEnabled(!1) : (this.setCullingEnabled(!0), this._renderer.context.cullFace(e)), (this._culling = e))
                },
              },
              {
                key: "setBlendEquation",
                value: function (e) {
                  e != this._blendEquation && (this._renderer.context.blendEquation(e), (this._blendEquation = e))
                },
              },
              {
                key: "setBlendEnabled",
                value: function (e) {
                  e != this._blendEnabled && (e ? this._renderer.context.enable(Rr.BLEND) : this._renderer.context.disable(Rr.BLEND), (this._blendEnabled = e))
                },
              },
              {
                key: "setBlendFunc",
                value: function (e, t) {
                  ;(e == this._sourceBlend && t == this._destinationBlend) || (this._renderer.context.blendFunc(e, t), (this._sourceBlend = e), (this._destinationBlend = t))
                },
              },
              {
                key: "setBlendFuncSeparate",
                value: function (e, t, n, i) {
                  this._renderer.context.blendFuncSeparate(e, t, n, i), (this._sourceBlend = -1)
                },
              },
            ]),
            n
          )
        })(Ii),
        $r = (function () {
          function e() {
            F()(this, e), (this.maxAnisotropy = 0)
          }
          return (
            V()(
              e,
              [
                {
                  key: "enableExtensions",
                  value: function (t) {
                    ;(this.color_buffer_float = e.enableExtension(t, "WEBGL_color_buffer_float") || e.enableExtension(t, "EXT_color_buffer_float")),
                      (this.color_buffer_half_float = e.enableExtension(t, "EXT_color_buffer_half_float")),
                      (this.texture_float = e.enableExtension(t, "OES_texture_float")),
                      (this.texture_float_linear = e.enableExtension(t, "OES_texture_float_linear")),
                      (this.texture_half_float = e.enableExtension(t, "OES_texture_half_float")),
                      (this.texture_half_float_linear = e.enableExtension(t, "OES_texture_half_float_linear")),
                      (this.shader_texture_lod = e.enableExtension(t, "EXT_shader_texture_lod")),
                      (this.standard_derivatives = e.enableExtension(t, "OES_standard_derivatives")),
                      (this.blend_minmax = e.enableExtension(t, "EXT_blend_minmax")),
                      (this.seamless_cube_map = e.enableExtension(t, "OES_seamless_cube_map")),
                      (this.vertex_array_object = e.enableExtension(t, "OES_vertex_array_object")),
                      (this.filter_anisotropic = e.enableExtension(t, "texture_filter_anisotropic")),
                      this.filter_anisotropic || (this.filter_anisotropic = e.enableExtension(t, "MOZ_EXT_texture_filter_anisotropic")),
                      this.filter_anisotropic || (this.filter_anisotropic = e.enableExtension(t, "WEBKIT_EXT_texture_filter_anisotropic")),
                      this.filter_anisotropic &&
                        ((this.maxAnisotropy = t.getParameter(this.filter_anisotropic.MAX_TEXTURE_MAX_ANISOTROPY_EXT)),
                        mr.log("MAX_TEXTURE_MAX_ANISOTROPY_EXT: ", this.maxAnisotropy)),
                      (this.frag_depth = e.enableExtension(t, "EXT_frag_depth")),
                      (this.depth_texture = e.enableExtension(t, "WEBGL_depth_texture")),
                      (this.element_index_uint = e.enableExtension(t, "OES_element_index_uint")),
                      this.enableTextureCompression(t)
                  },
                },
                {
                  key: "enableTextureCompression",
                  value: function (t) {
                    var n = e.enableExtension(t, "WEBKIT_WEBGL_compressed_texture_s3tc")
                    if (n) {
                      var i = t.getParameter(t.COMPRESSED_TEXTURE_FORMATS)
                      if (i.length > 0)
                        for (var r in i)
                          i[r] === n.COMPRESSED_RGB_S3TC_DXT1_EXT && mr.log("support found for texture compression: RGB_S3TC_DXT1"),
                            i[r] === n.COMPRESSED_RGBA_S3TC_DXT1_EXT && mr.log("support found for texture compression: RGBA_S3TC_DXT1"),
                            i[r] === n.COMPRESSED_RGBA_S3TC_DXT3_EXT && mr.log("support found for texture compression: RGBA_S3TC_DXT3"),
                            i[r] === n.COMPRESSED_RGBA_S3TC_DXT5_EXT && mr.log("support found for texture compression: RGBA_S3TC_DXT5")
                      else mr.log("no support found for texture compression ")
                    }
                  },
                },
                {
                  key: "getMinMaxSupported",
                  value: function () {
                    return null !== this.blend_minmax
                  },
                },
              ],
              [
                {
                  key: "enableExtension",
                  value: function (e, t) {
                    var n = e.getExtension(t)
                    return n ? mr.log("enabled extension " + t) : mr.log("extension " + t + " is not supported"), n
                  },
                },
              ]
            ),
            e
          )
        })(),
        jr = (function () {
          function e() {
            F()(this, e)
          }
          return (
            V()(e, null, [
              {
                key: "cacheIsPathRequested",
                value: function (t) {
                  return e._clientCache[t]
                },
              },
              {
                key: "cacheRegisterRequested",
                value: function (t, n) {
                  e._clientCache[t] = n
                },
              },
              {
                key: "cacheRegisterCallback",
                value: function (t, n) {
                  e._clientCacheCallbacks[t] || (e._clientCacheCallbacks[t] = []), e._clientCacheCallbacks[t].push(n)
                },
              },
              {
                key: "cacheRequestDone",
                value: function (t, n) {
                  var i = e._clientCacheCallbacks[t]
                  if (i) for (var r = 0; r < i.length; r++) i[r](n)
                  ;(e._clientCacheCallbacks[t] = null), (e._clientCache[t] = !1)
                },
              },
              {
                key: "cacheRequestError",
                value: function (t) {
                  var n = e._clientCacheCallbacks[t]
                  if (n) for (var i = 0; i < n.length; i++) n[i](null)
                  ;(e._clientCacheCallbacks[t] = null), (e._clientCache[t] = !1)
                },
              },
              {
                key: "loadText",
                value: function (t, n) {
                  if ((e.cacheRegisterCallback(t, n), !e.cacheIsPathRequested(t))) {
                    var i = new XMLHttpRequest()
                    e.cacheRegisterRequested(t, i),
                      (i.onreadystatechange = function (n) {
                        4 === i.readyState && (200 === i.status ? e.cacheRequestDone(t, i.responseText) : e.cacheRequestError(t))
                      }),
                      i.open("GET", t, !0),
                      i.send()
                  }
                },
              },
              {
                key: "loadArrayBuffer",
                value: function (t, n) {
                  if ((e.cacheRegisterCallback(t, n), !e.cacheIsPathRequested(t))) {
                    var i = new XMLHttpRequest()
                    e.cacheRegisterRequested(t, i),
                      i.open("GET", t, !0),
                      (i.responseType = "arraybuffer"),
                      i.send(),
                      (i.onreadystatechange = function (n) {
                        4 === i.readyState && e.cacheRequestDone(t, i.response)
                      })
                  }
                },
              },
              {
                key: "loadImage",
                value: function (t, n) {
                  if ((e.cacheRegisterCallback(t, n), e.cacheIsPathRequested(t))) return e.cacheIsPathRequested(t)
                  var i = new Image()
                  return (
                    e.cacheRegisterRequested(t, i),
                    (i.crossOrigin = "Anonymous"),
                    (i.onload = function () {
                      e.cacheRequestDone(t, i)
                    }),
                    (i.onerror = function () {
                      console.log("TextureLoader: could not load image", t), e.cacheRequestDone(t, i)
                    }),
                    (i.src = t),
                    i
                  )
                },
              },
              {
                key: "loadMultipleImages",
                value: function (t, n) {
                  for (
                    var i = this,
                      r = t.length,
                      o = [],
                      a = function (e) {
                        return function (t) {
                          r--, (o[e] = t), 0 === r && n.call(i, o)
                        }
                      },
                      s = 0;
                    s < t.length;
                    ++s
                  )
                    e.loadImage(t[s], a(s))
                },
              },
              {
                key: "loadSingleFromRequireContext",
                value: function (e, t) {
                  return new Promise(function (n, i) {
                    var r
                    try {
                      r = e("./".concat(t.replace(/^\.\//, "")))
                    } catch (o) {
                      i(o)
                    }
                    "function" === typeof r ? r(n) : n(r)
                  })
                },
              },
              {
                key: "loadFromRequireContext",
                value: function (t, n, i) {
                  Promise.all(
                    n.map(function (n) {
                      return e.loadSingleFromRequireContext(t, n)
                    })
                  ).then(function (e) {
                    return i(e)
                  })
                },
              },
              {
                key: "loadMultipleTexts",
                value: function (t, n) {
                  for (
                    var i = this,
                      r = t.length,
                      o = [],
                      a = function (e) {
                        return function (t) {
                          r--, (o[e] = t), 0 === r && n.apply(i, o)
                        }
                      },
                      s = 0;
                    s < t.length;
                    ++s
                  )
                    e.loadText(t[s], a(s))
                },
              },
            ]),
            e
          )
        })()
      ;(jr._clientCache = {}), (jr._clientCacheCallbacks = {})
      var Gr = (function () {
        function e() {
          F()(this, e), (this.webpackContexts = []), (this.assetNameMap = {}), (this.assetPathMap = {})
        }
        return (
          V()(e, [
            {
              key: "loadAssetByPath",
              value: function (e) {
                var t = this.getAssetByPath(e)
                return jr.loadSingleFromRequireContext(t.webpackContext, t.path)
              },
            },
            {
              key: "getAssetByPath",
              value: function (e) {
                var t = "./".concat(e.replace(/^\.\//, ""))
                if ("undefined" === typeof this.assetPathMap[t])
                  throw new ReferenceError("Could not find asset with path ".concat(e, ". Available paths: \n").concat(Object.keys(this.assetPathMap).join("\n")))
                return {
                  webpackContext: this.webpackContexts[this.assetPathMap[t]],
                  path: t,
                }
              },
            },
            {
              key: "loadAssetByName",
              value: function (e) {
                var t = this.getAssetByName(e)
                return jr.loadSingleFromRequireContext(t.webpackContext, t.path)
              },
            },
            {
              key: "getAssetByName",
              value: function (e) {
                if ("undefined" === typeof this.assetNameMap[e])
                  throw new ReferenceError('Could not find asset with name "'.concat(e, '". Available assets: \n').concat(Object.keys(this.assetNameMap.vs).join(", ")))
                return {
                  webpackContext: this.webpackContexts[this.assetNameMap[e].contextIndex],
                  path: this.assetNameMap[e].path,
                }
              },
            },
            {
              key: "addContext",
              value: function (e) {
                var t = this
                if (!(this.webpackContexts.indexOf(e) >= 0)) {
                  var n = this.webpackContexts.length
                  this.webpackContexts.push(e),
                    e.keys().forEach(function (e) {
                      var i = e.match(/([^\\\/]+)$/)
                      if (i) {
                        if (t.assetNameMap[i[1]]) {
                          var r = t.webpackContexts[t.assetNameMap[i[1]].contextIndex].resolve(t.assetNameMap[i[1]].path)
                          console.warn('WARNING: found asset "'.concat(e, '" but another asset with the name "').concat(i[1], '" was already found at "').concat(r, '"'))
                        }
                        t.assetNameMap[i[1]] = {
                          contextIndex: n,
                          path: e,
                        }
                      }
                      t.assetPathMap[e] = n
                    })
                }
              },
            },
          ]),
          e
        )
      })()
      function Xr(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ("function" === typeof Proxy) return !0
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var n,
            i = X()(e)
          if (t) {
            var r = X()(this).constructor
            n = Reflect.construct(i, arguments, r)
          } else n = i.apply(this, arguments)
          return j()(this, n)
        }
      }
      var Wr = (function (e) {
          z()(n, e)
          var t = Xr(n)
          function n(e, i, r, o, a, s) {
            var l
            return (
              F()(this, n),
              ((l = t.call(this)).data = null),
              (l.vertexCount = -1),
              (l._renderer = e),
              (l.stride = o),
              (l.name = i),
              (l.storeData = a),
              (l.vertexCount = r.length / o),
              s ? ((l.buffer = l._renderer.context.createBuffer()), l.setData(r, a)) : (l.data = r),
              l
            )
          }
          return (
            V()(
              n,
              [
                {
                  key: "setData",
                  value: function (e, t) {
                    if ((t || !this.buffer ? (this.data = e) : (this.data = null), 0 === e.length)) throw "VertexAttribute: no data: probably a mesh file could not be loaded"
                    if (this.buffer) {
                      var n = this._renderer.context
                      n.bindBuffer(Rr.ARRAY_BUFFER, this.buffer), n.bufferData(Rr.ARRAY_BUFFER, e.byteLength, Rr.STATIC_DRAW), n.bufferSubData(Rr.ARRAY_BUFFER, 0, e)
                    }
                  },
                },
                {
                  key: "getBufferLength",
                  value: function () {
                    if (this.data) return this.data.length
                    if (!this.buffer) throw new ReferenceError("Cannot get buffer length: no buffer set on VertextAttribute")
                    var e = this._renderer.context
                    return e.bindBuffer(Rr.ARRAY_BUFFER, this.buffer), e.getBufferParameter(Rr.ARRAY_BUFFER, Rr.BUFFER_SIZE) / 4
                  },
                },
                {
                  key: "destruct",
                  value: function () {
                    var e = this._renderer.context
                    this.buffer && e.deleteBuffer(this.buffer), (this.data = null), Mi()(X()(n.prototype), "destruct", this).call(this)
                  },
                },
              ],
              [
                {
                  key: "serialize",
                  value: function (e) {
                    return null === e.data
                      ? (console.error("Trying to serialize vertex attribute " + e.name + " without saved data"), {})
                      : {
                          name: e.name,
                          data: e.data,
                          stride: e.stride,
                          storeData: e.storeData,
                        }
                  },
                },
                {
                  key: "deserialize",
                  value: function (e) {
                    return {
                      name: e.name,
                      data: e.data,
                      stride: e.stride,
                      storeData: e.storeData,
                    }
                  },
                },
              ]
            ),
            n
          )
        })(Ii),
        Yr = V()(function e(t, n) {
          F()(this, e), (this.name = t), (this.stride = n)
        })
      ;(Yr.POSITION = new Yr("aPos", 3)),
        (Yr.TEXCOORD0 = new Yr("aUV0", 2)),
        (Yr.TEXCOORD1 = new Yr("aUV1", 2)),
        (Yr.NORMAL = new Yr("aNormal", 3)),
        (Yr.COLOR0 = new Yr("aColor0", 3)),
        (Yr.COLOR1 = new Yr("aColor1", 3)),
        (Yr.TANGENT = new Yr("aTangent", 4))
      var qr = Yr
      function Kr(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ("function" === typeof Proxy) return !0
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var n,
            i = X()(e)
          if (t) {
            var r = X()(this).constructor
            n = Reflect.construct(i, arguments, r)
          } else n = i.apply(this, arguments)
          return j()(this, n)
        }
      }
      var Zr = (function (e) {
        z()(n, e)
        var t = Kr(n)
        function n(e) {
          var i,
            r = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
            o = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
          return (
            F()(this, n),
            ((i = t.call(this))._vertexCount = 0),
            (i._isInterleavedBufferDirty = !0),
            (i._attributeNames = {}),
            (i.renderer = e),
            (i.attributes = []),
            (i._vertexCount = 0),
            (i.id = n.id++),
            (i.interleaved = r),
            (i.isDynamic = o),
            i
          )
        }
        return (
          V()(n, [
            {
              key: "setJSONData",
              value: function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                ;(this.animatorId = e.animatorId),
                  (this.isDynamic = e.isDynamic || !1),
                  e.indices && e.indices.length > 0 && (e.use32BitIndices ? this.setIndices32(new Uint32Array(e.indices)) : this.setIndices(new Uint16Array(e.indices)))
                for (var n = 0; n < e.attributes.length; n++) {
                  var i = e.attributes[n]
                  this.setAttribute(i.name, i.stride, new Float32Array(i.data), t)
                }
              },
            },
            {
              key: "clone",
              value: function () {
                for (var e = new n(this.renderer, this.interleaved, this.isDynamic), t = 0; t < this.attributes.length; t++) e.attributes.push(this.attributes[t])
                return (e._vertexCount = this._vertexCount), e
              },
            },
            {
              key: "interleaveData",
              value: function () {
                if (this._isInterleavedBufferDirty && this.interleaved) {
                  this.interleavedStrideSum = 0
                  for (var e = 0; e < this.attributes.length; e++) this.interleavedStrideSum += this.attributes[e].stride
                  for (var t = new Float32Array(this.interleavedStrideSum * this._vertexCount), n = 0, i = 0; i < this._vertexCount; i++)
                    for (var r = 0; r < this.attributes.length; r++) for (var o = this.attributes[r], a = 0; a < o.stride; a++) t[n++] = o.data[i * o.stride + a]
                  for (var s = 0; s < this.attributes.length; s++) this.attributes[s].storeData || (this.attributes[s].data = null)
                  this.interleavedBuffer = this.renderer.context.createBuffer()
                  var l = this.renderer.context
                  l.bindBuffer(Rr.ARRAY_BUFFER, this.interleavedBuffer),
                    l.bufferData(Rr.ARRAY_BUFFER, t, l.STATIC_DRAW),
                    (this._isInterleavedBufferDirty = !1),
                    mr.log("Mesh: finalize", this.attributes.length)
                }
              },
            },
            {
              key: "isInterleaved",
              value: function () {
                return this.interleaved
              },
            },
            {
              key: "hasIndices",
              value: function () {
                return !!this.indices
              },
            },
            {
              key: "setAttribute",
              value: function (e, t, n) {
                var i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3]
                this.setData(n, e, t, i)
              },
            },
            {
              key: "setPositions",
              value: function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                  n = qr.POSITION
                this.setData(e, n.name, n.stride, t)
              },
            },
            {
              key: "getPositions",
              value: function () {
                return this.getData(qr.POSITION.name)
              },
            },
            {
              key: "setNormals",
              value: function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                  n = qr.NORMAL
                this.setData(e, n.name, n.stride, t)
              },
            },
            {
              key: "getNormals",
              value: function () {
                return this.getData(qr.NORMAL.name)
              },
            },
            {
              key: "setColors",
              value: function (e) {
                var t = qr.COLOR0
                this.setData(e, t.name, t.stride)
              },
            },
            {
              key: "getColors",
              value: function () {
                return this.getData(qr.COLOR0.name)
              },
            },
            {
              key: "setColors1",
              value: function (e) {
                var t = qr.COLOR1
                this.setData(e, t.name, t.stride)
              },
            },
            {
              key: "getColors1",
              value: function () {
                return this.getData(qr.COLOR1.name)
              },
            },
            {
              key: "setUV0",
              value: function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                  n = qr.TEXCOORD0
                this.setData(e, n.name, n.stride, t)
              },
            },
            {
              key: "getUV0",
              value: function () {
                return this.getData(qr.TEXCOORD0.name)
              },
            },
            {
              key: "setUV1",
              value: function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                  n = qr.TEXCOORD1
                this.setData(e, n.name, n.stride, t)
              },
            },
            {
              key: "getUV1",
              value: function () {
                return this.getData(qr.TEXCOORD1.name)
              },
            },
            {
              key: "setTangents",
              value: function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                  n = qr.TANGENT
                this.setData(e, n.name, n.stride, t)
              },
            },
            {
              key: "getTangents",
              value: function () {
                return this.getData(qr.TANGENT.name)
              },
            },
            {
              key: "setData",
              value: function (e, t, n) {
                var i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3]
                this._attributeNames = {}
                var r = this.getAttributeIndex(t),
                  o = e.length / n
                r < 0
                  ? this.attributes.push(new Wr(this.renderer, t, e, n, i, !this.interleaved))
                  : this.attributes[r].vertexCount == o
                  ? this.attributes[r].setData(e, i)
                  : (this.attributes[r].destruct(), (this.attributes[r] = new Wr(this.renderer, t, e, n, i, !this.interleaved))),
                  (this._vertexCount = o),
                  this.interleaved && (this._isInterleavedBufferDirty = !0)
              },
            },
            {
              key: "deleteAttribute",
              value: function (e) {
                var t = this.getAttributeIndex(e)
                t >= 0 && this.attributes.splice(t, 1), (this._isInterleavedBufferDirty = !0), (this._attributeNames = {})
              },
            },
            {
              key: "hasAttribute",
              value: function (e) {
                var t = this._attributeNames[e]
                if (!0 === t || !1 === t) return t
                var n = this.getAttributeIndex(e)
                return (this._attributeNames[e] = n >= 0), this._attributeNames[e]
              },
            },
            {
              key: "getAttribute",
              value: function (e) {
                var t = this.getAttributeIndex(e)
                return t >= 0 ? this.attributes[t] : null
              },
            },
            {
              key: "getAttributeIndex",
              value: function (e) {
                for (var t = 0; t < this.attributes.length; t++) if (this.attributes[t].name === e) return t
                return -1
              },
            },
            {
              key: "getData",
              value: function (e) {
                var t = this.getAttribute(e)
                return t && t.data ? t.data : (mr.log("Mesh: getData", e, "no data"), null)
              },
            },
            {
              key: "setIndices",
              value: function (e) {
                if (!(e instanceof Uint16Array)) throw "Indices need to be of type Uint16Array"
                ;(this.indexType = Rr.UNSIGNED_SHORT), (this.indices = e)
                var t = this.renderer.context
                this.indexBuffer || (this.indexBuffer = t.createBuffer()),
                  t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, this.indexBuffer),
                  t.bufferData(t.ELEMENT_ARRAY_BUFFER, this.indices, t.STATIC_DRAW)
              },
            },
            {
              key: "setIndices32",
              value: function (e) {
                if (!(e instanceof Uint32Array)) throw "Indices need to be of type Uint32Array"
                if (this.renderer.extensionManager.element_index_uint) {
                  ;(this.indexType = Rr.UNSIGNED_INT), (this.indices = e)
                  var t = this.renderer.context
                  this.indexBuffer || (this.indexBuffer = t.createBuffer()),
                    t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, this.indexBuffer),
                    t.bufferData(t.ELEMENT_ARRAY_BUFFER, this.indices, t.STATIC_DRAW)
                } else mr.log("mesh: setIndices32: extension not supported: element_index_uint: using 16 bits indices"), this.setIndices(new Uint16Array(e))
              },
            },
            {
              key: "getNumVertices",
              value: function () {
                return this._vertexCount
              },
            },
            {
              key: "isSkinned",
              value: function () {
                return this.hasAttribute("aSkinIndex")
              },
            },
            {
              key: "destruct",
              value: function () {
                if (!this.isDestructed) {
                  this.renderer.destructVAO(this)
                  var e = this.renderer.context
                  if ((this.interleavedBuffer && e.deleteBuffer(this.interleavedBuffer), this.indexBuffer && e.deleteBuffer(this.indexBuffer), this.attributes))
                    for (var t = 0; t < this.attributes.length; t++) this.attributes[t].destruct()
                  Mi()(X()(n.prototype), "destruct", this).call(this)
                }
              },
            },
          ]),
          n
        )
      })(Ii)
      Zr.id = 0
      var Qr = Zr,
        Jr = (function () {
          function e() {
            F()(this, e),
              (this.averageFps = 60),
              (this._manualUpdate = !1),
              e._instance && alert("do not create additional instances of the time class"),
              (this.fps = 60),
              (this.deltaTime = 1 / this.fps),
              (this.time = 0),
              this.update()
          }
          return (
            V()(
              e,
              [
                {
                  key: "updateManual",
                  value: function () {
                    ;(this._manualUpdate = !0), this.updateDeltaTime()
                  },
                },
                {
                  key: "update",
                  value: function () {
                    var e = this
                    this._manualUpdate ||
                      (this.updateDeltaTime(),
                      window.requestAnimationFrame(function (t) {
                        return e.update()
                      }))
                  },
                },
                {
                  key: "updateDeltaTime",
                  value: function () {
                    var e = performance.now()
                    ;(this.deltaTime = 0.001 * e - this.time),
                      this.deltaTime > 0.05 && (this.deltaTime = 0.05),
                      0 === this.deltaTime && (this.deltaTime = 1 / 60),
                      (this.time = 0.001 * e),
                      (this.fps = 1 / this.deltaTime),
                      this.averageFps > 0 ? (this.averageFps = qi.lerp(this.fps, this.averageFps, 0.95)) : (this.averageFps = 1 / 60)
                  },
                },
                {
                  key: "testPerformance",
                  value: function (e) {
                    console.time("timer0"), e.call(this), console.timeEnd("timer0")
                  },
                },
              ],
              [
                {
                  key: "getInstance",
                  value: function () {
                    return e._instance || (e._instance = new e()), e._instance
                  },
                },
              ]
            ),
            e
          )
        })()
      function eo(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ("function" === typeof Proxy) return !0
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var n,
            i = X()(e)
          if (t) {
            var r = X()(this).constructor
            n = Reflect.construct(i, arguments, r)
          } else n = i.apply(this, arguments)
          return j()(this, n)
        }
      }
      var to = V()(function e() {
          F()(this, e), (this.down = !1), (this.downThisFrame = !1), (this.downByTouch = !1), (this.clickCanceled = !1), (this.downTime = 0)
        }),
        no = (function (e) {
          z()(n, e)
          var t = eo(n)
          function n(e) {
            var i
            F()(this, n),
              ((i = t.call(this))._mousePos = new dr()),
              (i._previousMousePos = new dr()),
              (i._mouseVelocity = new dr()),
              (i._normalized = new dr()),
              (i._screen = new dr()),
              (i._wheelCallbacks = []),
              (i._mouseClickCallbacks = []),
              (i._mouseDownCallbacks = []),
              (i._buttons = []),
              (i._manualUpdate = !1),
              (i._resetSpeed = !1),
              (i._preventDefault = !1),
              (i._touchStartListener = function (e) {
                i._preventDefault && e.preventDefault(), (i._resetSpeed = !0), i.mouseDown(0), (i._buttons[0].downByTouch = !0), i.setMousePosition(e.targetTouches[0])
                for (var t = 0; t < i._mouseDownCallbacks.length; t++) i._mouseDownCallbacks[t].call(Di()(i))
              }),
              (i._touchMoveListener = function (e) {
                i.setMousePosition(e.targetTouches[0])
              }),
              (i._endListener = function () {
                for (var e = 0; e < i._buttons.length; e++) (i._buttons[e].down = !1), (i._buttons[e].downThisFrame = !1), (i._buttons[e].downByTouch = !1)
              }),
              (i._mouseDownListener = function (e) {
                i._preventDefault && e.preventDefault(), i.mouseDown(e.which - 1), i.setMousePosition(e)
                for (var t = 0; t < i._mouseDownCallbacks.length; t++) i._mouseDownCallbacks[t].call(Di()(i))
              }),
              (i._mouseMoveListener = function (e) {
                i.setMousePosition(e)
                for (var t = 0; t < 3; t++) i._buttons[t].downTime > 0.25 && (i._buttons[t].clickCanceled = !0)
              }),
              (i._mouseWheelListener = function (e) {
                for (var t = 0; t < i._wheelCallbacks.length; t++) i._wheelCallbacks[t].call(Di()(i), Math.sign(-e.deltaY))
              }),
              (i._upListener = function () {
                if (((i._resetSpeed = !0), !i._buttons[0].clickCanceled)) for (var e = 0; e < i._mouseClickCallbacks.length; e++) i._mouseClickCallbacks[e].call(Di()(i))
                for (var t = 0; t < i._buttons.length; t++) (i._buttons[t].down = !1), (i._buttons[t].downThisFrame = !1), (i._buttons[t].downByTouch = !1)
              }),
              (i._canvas = e)
            for (var r = 0; r < 3; r++) i._buttons.push(new to())
            return (
              i._canvas.addEventListener("touchstart", i._touchStartListener, !1),
              i._canvas.addEventListener("touchmove", i._touchMoveListener, !1),
              i._canvas.addEventListener("touchend", i._upListener, !1),
              i._canvas.addEventListener("touchcancel", i._endListener, !1),
              i._canvas.addEventListener("mousedown", i._mouseDownListener, !1),
              i._canvas.addEventListener("mousemove", i._mouseMoveListener, !1),
              i._canvas.addEventListener("mouseup", i._upListener, !1),
              i._canvas.addEventListener("mousecancel", i._endListener, !1),
              i._canvas.addEventListener("mouseout", i._endListener, !1),
              i._canvas.addEventListener("wheel", i._mouseWheelListener, !1),
              i.updateLoop(),
              i
            )
          }
          return (
            V()(n, [
              {
                key: "setPreventDefault",
                value: function (e) {
                  this._preventDefault = e
                },
              },
              {
                key: "mouseDown",
                value: function (e) {
                  ;(this._resetSpeed = !0),
                    (this._buttons[e].down = !0),
                    (this._buttons[e].downThisFrame = !0),
                    (this._buttons[e].clickCanceled = !1),
                    (this._buttons[e].downByTouch = !1),
                    (this._buttons[e].downTime = 0)
                },
              },
              {
                key: "addWheelEvent",
                value: function (e) {
                  this._wheelCallbacks.push(e)
                },
              },
              {
                key: "addMouseClickEvent",
                value: function (e) {
                  this._mouseClickCallbacks.push(e)
                },
              },
              {
                key: "addMouseDownEvent",
                value: function (e) {
                  this._mouseDownCallbacks.push(e)
                },
              },
              {
                key: "setMousePosition",
                value: function (e) {
                  ;(this._mousePos.x = e.pageX), (this._mousePos.y = e.pageY)
                },
              },
              {
                key: "getPixelPos",
                value: function () {
                  return this._mousePos
                },
              },
              {
                key: "getNormalizedPos",
                value: function () {
                  return this._normalized
                },
              },
              {
                key: "getScreenPos",
                value: function () {
                  return this._screen
                },
              },
              {
                key: "getNormalizedVelocity",
                value: function () {
                  return this._mouseVelocity
                },
              },
              {
                key: "getButton",
                value: function (e) {
                  return this._buttons[e]
                },
              },
              {
                key: "getMouseDown",
                value: function () {
                  return this._buttons[0].down
                },
              },
              {
                key: "getMouseDownThisFrame",
                value: function () {
                  return this._buttons[0].downThisFrame
                },
              },
              {
                key: "getMouseDownRight",
                value: function () {
                  return this._buttons[2].down
                },
              },
              {
                key: "getMouseDownThisFrameRight",
                value: function () {
                  return this._buttons[2].downThisFrame
                },
              },
              {
                key: "updateManual",
                value: function () {
                  ;(this._manualUpdate = !0), this.update()
                },
              },
              {
                key: "updateLoop",
                value: function () {
                  var e = this
                  this.isDestructed ||
                    this._manualUpdate ||
                    (this.update(),
                    window.requestAnimationFrame(function () {
                      return e.updateLoop()
                    }))
                },
              },
              {
                key: "update",
                value: function () {
                  ;(this._normalized.x = this._mousePos.x / this._canvas.clientWidth),
                    (this._normalized.y = this._mousePos.y / this._canvas.clientHeight),
                    (this._screen.x = 2 * this._normalized.x - 1),
                    (this._screen.y = -(2 * this._normalized.y - 1)),
                    this._resetSpeed
                      ? ((this._resetSpeed = !1), this._mouseVelocity.setValues(0, 0))
                      : ((this._mouseVelocity.x = this._normalized.x - this._previousMousePos.x), (this._mouseVelocity.y = this._normalized.y - this._previousMousePos.y)),
                    this._previousMousePos.copy(this._normalized)
                  for (var e = 0; e < 3; e++) {
                    var t = this._buttons[e]
                    t.downTime > 0 && (t.downThisFrame = !1), this._buttons[e].down && (t.downTime += Jr.getInstance().deltaTime)
                  }
                },
              },
              {
                key: "cancelClick",
                value: function () {
                  for (var e = 0; e < this._buttons.length; e++) this._buttons[e].clickCanceled = !0
                },
              },
              {
                key: "destruct",
                value: function () {
                  this._canvas &&
                    (this._canvas.removeEventListener("touchstart", this._touchStartListener, !1),
                    this._canvas.removeEventListener("touchmove", this._touchMoveListener, !1),
                    this._canvas.removeEventListener("touchend", this._upListener, !1),
                    this._canvas.removeEventListener("touchcancel", this._endListener, !1),
                    this._canvas.removeEventListener("mousedown", this._mouseDownListener, !1),
                    this._canvas.removeEventListener("mousemove", this._mouseMoveListener, !1),
                    this._canvas.removeEventListener("mouseend", this._endListener, !1),
                    this._canvas.removeEventListener("mousecancel", this._endListener, !1),
                    this._canvas.removeEventListener("mouseout", this._endListener, !1),
                    this._canvas.removeEventListener("wheel", this._mouseWheelListener, !1),
                    this._canvas.removeEventListener("mouseup", this._upListener, !1)),
                    Mi()(X()(n.prototype), "destruct", this).call(this)
                },
              },
            ]),
            n
          )
        })(Ii)
      function io(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ("function" === typeof Proxy) return !0
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var n,
            i = X()(e)
          if (t) {
            var r = X()(this).constructor
            n = Reflect.construct(i, arguments, r)
          } else n = i.apply(this, arguments)
          return j()(this, n)
        }
      }
      var ro = n(555),
        oo = (function (e) {
          z()(n, e)
          var t = io(n)
          function n(e, i, r, o, a) {
            var s,
              l = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
              u = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
              c = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
              h = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8]
            if (
              (F()(this, n),
              ((s = t.call(this)).textureCount = 0),
              (s.isWebgl2 = !1),
              (s._renderWidth = 1),
              (s._renderHeight = 1),
              (s._renderSize = new dr()),
              (s.handleCanvasResize = function () {
                s.setRenderSize(s.getCanvas().width, s.getCanvas().height)
              }),
              (s.id = n._id++),
              null === o ? (s.shaderIndex = new Gr()) : "function" === typeof o ? ((s.shaderIndex = new Gr()), s.shaderIndex.addContext(o)) : (s.shaderIndex = o),
              s.shaderIndex.addContext(ro),
              (s._canvas = i),
              s._canvas.addEventListener("resize", s.handleCanvasResize),
              r === n.webgl2ContextName ? (s.isWebgl2 = !0) : l || s.getAlphaIsCorrect() || (l = !0),
              (s.context = s.getCanvas().getContext(r, {
                alpha: l,
                stencil: c,
                preserveDrawingBuffer: !u,
                premultipliedAlpha: h,
                antialias: a,
              })),
              !s.context)
            )
              throw new Error("could not get a 3d context: aborting")
            return (
              (s.maxParams = new _r(s.context)),
              (s.renderState = new zr(Di()(s))),
              (n.staticExtensionManager = s.extensionManager = new $r()),
              s.extensionManager.enableExtensions(s.context),
              (s._copyTextureMaterial = new Vr(Di()(s), e, "default")),
              (s._copyTextureMaterial.depthTest = !1),
              (s._copyTextureMaterial.depthWrite = !1),
              (s._clearColor = new br(0.5, 0.5, 0.5, 1)),
              (s._blitMesh = s.createTriangle()),
              s
            )
          }
          return (
            V()(n, [
              {
                key: "getAlphaIsCorrect",
                value: function () {
                  var e = document.createElement("canvas")
                  ;(e.width = 1), (e.height = 1)
                  var t = e.getContext("experimental-webgl", {
                    alpha: !1,
                    preserveDrawingBuffer: !1,
                  })
                  t.clearColor(1, 0, 0, 1), t.clear(t.COLOR_BUFFER_BIT | t.DEPTH_BUFFER_BIT)
                  var n = document.createElement("canvas").getContext("2d")
                  n.drawImage(e, 0, 0)
                  var i = 255 === n.getImageData(0, 0, 1, 1).data[3]
                  return i || mr.log("alpha bug detected"), i
                },
              },
              {
                key: "init",
                value: function () {
                  mr.log("renderer: textureCount", this.textureCount), this.unSetRenderTexture(), this.handleCanvasResize()
                },
              },
              {
                key: "getRenderContext",
                value: function () {
                  throw new ReferenceError("GetRenderContext(): no implementation defined, no context available.")
                },
              },
              {
                key: "preprocessShaderString",
                value: function (e) {
                  return e
                },
              },
              {
                key: "draw",
                value: function (e, t) {},
              },
              {
                key: "startBatch",
                value: function (e, t) {},
              },
              {
                key: "drawElements",
                value: function (e, t) {},
              },
              {
                key: "endBatch",
                value: function () {},
              },
              {
                key: "createTriangle",
                value: function () {
                  var e = new Qr(this),
                    t = new Float32Array([-1, -1, 0, -1, 3, 0, 3, -1, 0])
                  e.setPositions(t)
                  var n = new Float32Array([0, 0, 0, 2, 2, 0])
                  e.setUV0(n)
                  var i = new Uint16Array([0, 2, 1])
                  return e.setIndices(i), e
                },
              },
              {
                key: "getCanvas",
                value: function () {
                  return this._canvas
                },
              },
              {
                key: "getMouseListener",
                value: function () {
                  return this._mouseListener || (this._mouseListener = new no(this.getCanvas())), this._mouseListener
                },
              },
              {
                key: "getRenderWidth",
                value: function () {
                  return this._renderWidth
                },
              },
              {
                key: "getRenderHeight",
                value: function () {
                  return this._renderHeight
                },
              },
              {
                key: "getRenderSize",
                value: function () {
                  return this._renderSize
                },
              },
              {
                key: "enablePointsprites",
                value: function () {
                  this.context.enable(34370)
                },
              },
              {
                key: "blit",
                value: function () {
                  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                    i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                    r = n || this._copyTextureMaterial
                  t && this.setRenderTexture(t), e && r.setTexture("uTexture", e), i && this.clear(), this.draw(this._blitMesh, r), t && this.unSetRenderTexture()
                },
              },
              {
                key: "setRenderTexture",
                value: function (e) {
                  e.scaleToCanvas && e.resize(Math.round(this.getCanvas().width * e.sizeMultiplier), Math.round(this.getCanvas().height * e.sizeMultiplier)),
                    e.setAsTarget(),
                    this.setRenderSize(e.width, e.height)
                },
              },
              {
                key: "unSetRenderTexture",
                value: function () {
                  var e = this.context
                  e.bindFramebuffer(e.FRAMEBUFFER, null), e.bindRenderbuffer(e.RENDERBUFFER, null), this.setRenderSize(this.getCanvas().width, this.getCanvas().height)
                },
              },
              {
                key: "clearWithColor",
                value: function () {
                  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                    i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0
                  this.context.clearColor(e, t, n, i), this.clear(), this.context.clearColor(this._clearColor.r, this._clearColor.g, this._clearColor.b, this._clearColor.a)
                },
              },
              {
                key: "clearRenderTexture",
                value: function (e) {
                  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                    i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                    r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0
                  this.setRenderTexture(e), this.clearWithColor(t, n, i, r), this.unSetRenderTexture()
                },
              },
              {
                key: "getAspect",
                value: function () {
                  return this._renderWidth / this._renderHeight
                },
              },
              {
                key: "clearDepth",
                value: function () {
                  this.renderState.setDepthMask(!0), this.context.clear(Rr.DEPTH_BUFFER_BIT)
                },
              },
              {
                key: "setClearColor",
                value: function (e, t, n) {
                  var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0
                  this._clearColor.setValues(e, t, n, i), this.context.clearColor(e, t, n, i)
                },
              },
              {
                key: "getClearColor",
                value: function () {
                  return this._clearColor
                },
              },
              {
                key: "clear",
                value: function () {
                  this.context.depthMask(!0), this.context.clear(Rr.COLOR_BUFFER_BIT | Rr.DEPTH_BUFFER_BIT), this.context.depthMask(this.renderState.getDepthMask())
                },
              },
              {
                key: "setRenderSize",
                value: function (e, t) {
                  ;(this._renderWidth === e && this._renderHeight === t) ||
                    ((this._renderWidth = e),
                    (this._renderHeight = t),
                    (this._renderSize.x = e),
                    (this._renderSize.y = t),
                    this.context.viewport(0, 0, this._renderWidth, this._renderHeight))
                },
              },
              {
                key: "setScissor",
                value: function (e, t, n, i) {
                  var r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4]
                  ;(e = qi.clamp01(e)), (t = qi.clamp01(t))
                  var o = (n = qi.clamp01(n)) - e,
                    a = (i = qi.clamp01(i)) - t,
                    s = this._renderWidth,
                    l = this._renderHeight
                  this.context.enable(Rr.SCISSOR_TEST), this.context.scissor(e * s, t * l, o * s, a * l), r && this.context.viewport(e * s, t * l, o * s, a * l)
                },
              },
              {
                key: "setScissorPixels",
                value: function (e, t, n, i) {
                  this.context.enable(Rr.SCISSOR_TEST), this.context.scissor(e, t, n - e, i - t)
                },
              },
              {
                key: "unSetScissor",
                value: function () {
                  this.context.disable(Rr.SCISSOR_TEST)
                },
              },
              {
                key: "setViewPort",
                value: function (e, t, n, i) {
                  ;(this._renderWidth = n), (this._renderHeight = i), this.context.viewport(e, t, this._renderWidth, this._renderHeight)
                },
              },
              {
                key: "unsetViewPort",
                value: function () {
                  this.context.viewport(0, 0, this._canvas.width, this._canvas.height)
                },
              },
              {
                key: "setChannelMask",
                value: function () {
                  var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3]
                  this.context.colorMask(e, t, n, i)
                },
              },
              {
                key: "clearChannelMask",
                value: function () {
                  this.context.colorMask(!0, !0, !0, !0)
                },
              },
              {
                key: "setStencilEnabled",
                value: function (e) {
                  e ? this.context.enable(Rr.STENCIL_TEST) : this.context.disable(Rr.STENCIL_TEST)
                },
              },
              {
                key: "startDrawToStencil",
                value: function () {
                  var e = this.context
                  this.setStencilEnabled(!0), e.stencilFunc(Rr.ALWAYS, 1, 255), e.stencilOp(Rr.KEEP, Rr.KEEP, Rr.REPLACE), e.stencilMask(255)
                },
              },
              {
                key: "setStencilFuncEqual",
                value: function (e) {
                  this.context.stencilFunc(e ? Rr.EQUAL : Rr.NOTEQUAL, 1, 255)
                },
              },
              {
                key: "destructVAO",
                value: function (e) {},
              },
              {
                key: "destruct",
                value: function () {
                  if (!this.isDestructed) {
                    mr.log("Renderer: destruct")
                    for (var e = this.context, t = e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS), i = 0; i < t; ++i)
                      e.activeTexture(e.TEXTURE0 + i), e.bindTexture(e.TEXTURE_2D, null), e.bindTexture(e.TEXTURE_CUBE_MAP, null)
                    e.bindBuffer(e.ARRAY_BUFFER, null),
                      e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, null),
                      e.bindRenderbuffer(e.RENDERBUFFER, null),
                      e.bindFramebuffer(e.FRAMEBUFFER, null),
                      e.useProgram(null)
                    var r = e.getExtension("WEBGL_lose_context")
                    r && r.loseContext(),
                      this._blitMesh && this._blitMesh.destruct(),
                      this._copyTextureMaterial && this._copyTextureMaterial.destruct(),
                      this._canvas.removeEventListener("resize", this.handleCanvasResize),
                      this._mouseListener && this._mouseListener.destruct(),
                      Mi()(X()(n.prototype), "destruct", this).call(this)
                  }
                },
              },
            ]),
            n
          )
        })(Ii)
      ;(oo._id = 0), (oo.webgl2ContextName = "webgl2"), (oo.webgl1ContextName = "experimental-webgl")
      var ao = oo
      function so(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ("function" === typeof Proxy) return !0
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var n,
            i = X()(e)
          if (t) {
            var r = X()(this).constructor
            n = Reflect.construct(i, arguments, r)
          } else n = i.apply(this, arguments)
          return j()(this, n)
        }
      }
      var lo = (function (e) {
        z()(n, e)
        var t = so(n)
        function n(e, i, r, o) {
          var a,
            s = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
            l = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
            u = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
            c = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7]
          return F()(this, n), ((a = t.call(this, e, i, ao.webgl1ContextName, r, o, s, l, u, c))._vertexArrayObjects = {}), a
        }
        return (
          V()(n, [
            {
              key: "init",
              value: function () {
                Mi()(X()(n.prototype), "init", this).call(this)
              },
            },
            {
              key: "getRenderContext",
              value: function () {
                return this.context
              },
            },
            {
              key: "preprocessShaderString",
              value: function (e) {
                return "#define WEBGL1\n" + e
              },
            },
            {
              key: "initVAO",
              value: function (e, t) {
                var n = this.extensionManager.vertex_array_object,
                  i = n.createVertexArrayOES()
                return n.bindVertexArrayOES(i), this.setStates(e, t), n.bindVertexArrayOES(null), i
              },
            },
            {
              key: "setStates",
              value: function (e, t) {
                var n = this.context
                if (e.isInterleaved()) {
                  e.interleaveData(), n.bindBuffer(n.ARRAY_BUFFER, e.interleavedBuffer)
                  for (var i = 0, r = 0; r < e.attributes.length; r++) {
                    var o = e.attributes[r],
                      a = t.shader.getAttributeByName(o.name)
                    a && (n.enableVertexAttribArray(a.loc), n.vertexAttribPointer(a.loc, a.stride, n.FLOAT, !1, 4 * e.interleavedStrideSum, i)), (i += 4 * o.stride)
                  }
                } else
                  for (var s = 0; s < e.attributes.length; s++) {
                    var l = e.attributes[s],
                      u = t.shader.getAttributeByName(l.name)
                    if (u) {
                      if (void 0 === l.buffer) throw new ReferenceError("Expected buffer to be defined on VertexAttribute when setting states.")
                      n.bindBuffer(n.ARRAY_BUFFER, l.buffer), n.enableVertexAttribArray(u.loc), n.vertexAttribPointer(u.loc, u.stride, n.FLOAT, !1, 4 * u.stride, 0)
                    }
                  }
                e.indexBuffer && n.bindBuffer(n.ELEMENT_ARRAY_BUFFER, e.indexBuffer)
              },
            },
            {
              key: "destructVAO",
              value: function (e) {
                var t = this.extensionManager.vertex_array_object
                if (t) {
                  var n = this._vertexArrayObjects[e.id]
                  for (var i in n) {
                    var r = n[i]
                    t.deleteVertexArrayOES(r)
                  }
                  this._vertexArrayObjects[e.id] = []
                }
              },
            },
            {
              key: "getVAO",
              value: function (e, t) {
                var n,
                  i = this._vertexArrayObjects[e.id]
                return i ? (n = i[t.id]) || ((n = this.initVAO(e, t)), (i[t.id] = n)) : ((i = {}), (n = this.initVAO(e, t)), (i[t.id] = n), (this._vertexArrayObjects[e.id] = i)), n
              },
            },
            {
              key: "bindVAO",
              value: function (e) {
                var t = this.extensionManager.vertex_array_object
                e != this._currentVAO && (t.bindVertexArrayOES(e), (this._currentVAO = e))
              },
            },
            {
              key: "drawVAO",
              value: function (e, t, n) {
                var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                  r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : -1
                n.setActive(), this.bindVAO(e), this.drawElements(t, n, i, r)
              },
            },
            {
              key: "draw",
              value: function (e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                  i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1
                t.setActive()
                var r = this.extensionManager.vertex_array_object
                if (!r || e.isDynamic) this.setStates(e, t), this.drawElements(e, t, n, i)
                else {
                  var o = this.getVAO(e, t)
                  this.bindVAO(o), this.drawElements(e, t, n, i)
                }
              },
            },
            {
              key: "startBatch",
              value: function (e, t) {
                t.setActive(), this.extensionManager.vertex_array_object ? this.extensionManager.vertex_array_object.bindVertexArrayOES(this.getVAO(e, t)) : this.setStates(e, t)
              },
            },
            {
              key: "drawElements",
              value: function (e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                  i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1
                if (e.indices) {
                  if (void 0 === e.indexType) throw new ReferenceError("expected mesh.indexType to be set on a mesh with indices")
                  i > 0
                    ? this.context.drawElements(t.drawType, Math.min(i, e.indices.length), e.indexType, n * (e.indexType == Rr.UNSIGNED_SHORT ? 2 : 4))
                    : this.context.drawElements(t.drawType, e.indices.length, e.indexType, 0)
                } else {
                  var r = e.getNumVertices() - n
                  i > 0 ? this.context.drawArrays(t.drawType, n, Math.min(r, i)) : this.context.drawArrays(t.drawType, n, r)
                }
              },
            },
            {
              key: "endBatch",
              value: function () {
                this.extensionManager.vertex_array_object && this.extensionManager.vertex_array_object.bindVertexArrayOES(null)
              },
            },
            {
              key: "destruct",
              value: function () {
                if (!this.isDestructed) {
                  mr.log("RendererWebGL1: destruct")
                  var e = this.extensionManager.vertex_array_object
                  if (e && this._vertexArrayObjects) for (var t = 0; t < this._vertexArrayObjects.length; t++) e.deleteVertexArrayOES(this._vertexArrayObjects[t])
                  Mi()(X()(n.prototype), "destruct", this).call(this)
                }
              },
            },
          ]),
          n
        )
      })(ao)
      function uo(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ("function" === typeof Proxy) return !0
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var n,
            i = X()(e)
          if (t) {
            var r = X()(this).constructor
            n = Reflect.construct(i, arguments, r)
          } else n = i.apply(this, arguments)
          return j()(this, n)
        }
      }
      var co = (function (e) {
        z()(n, e)
        var t = uo(n)
        function n(e) {
          var i,
            r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 60,
            o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0.01,
            a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 10
          return (
            F()(this, n),
            ((i = t.call(this)).dirty = !0),
            (i.frustumHeight = 1),
            (i._projectionMatrix = ji.b.create()),
            (i._tmpMat4 = ji.b.create()),
            (i._fov = r),
            (i._nearPlane = o),
            (i._farPlane = a),
            (i._aspect = 1),
            (i._changeCallback = e),
            i
          )
        }
        return (
          V()(n, [
            {
              key: "getMatrix",
              value: function () {
                return this.updateProjection(), this._projectionMatrix
              },
            },
            {
              key: "updateProjection",
              value: function () {
                this.dirty &&
                  (ji.b.perspective(this._projectionMatrix, this._fov * n._degToRad, this._aspect, this._nearPlane, this._farPlane),
                  (this.dirty = !1),
                  (this.frustumHeight = 2 * Math.tan(this._fov * n._degToRad * 0.5)))
              },
            },
            {
              key: "setAspect",
              value: function (e) {
                e !== this._aspect && ((this._aspect = e), this.setDirty())
              },
            },
            {
              key: "getAspect",
              value: function () {
                return this._aspect
              },
            },
            {
              key: "setFarPlane",
              value: function (e) {
                e !== this._farPlane && ((this._farPlane = e), this.setDirty())
              },
            },
            {
              key: "getFarPlane",
              value: function () {
                return this._farPlane
              },
            },
            {
              key: "setNearPlane",
              value: function (e) {
                e !== this._nearPlane && ((this._nearPlane = e), this.setDirty())
              },
            },
            {
              key: "getNearPlane",
              value: function () {
                return this._nearPlane
              },
            },
            {
              key: "setFOV",
              value: function (e) {
                e !== this._fov && ((this._fov = e), (this.frustumHeight = 2 * Math.tan(this._fov * n._degToRad * 0.5)), this.setDirty())
              },
            },
            {
              key: "getFOV",
              value: function () {
                return this._fov
              },
            },
            {
              key: "getFrustumCornerRef",
              value: function (e) {
                var t = 0.5 * this.frustumHeight,
                  n = t * this._aspect
                e.setValues(n, t, 1)
              },
            },
            {
              key: "getFrustumCorner",
              value: function () {
                var e = new Xi()
                return this.getFrustumCornerRef(e), e
              },
            },
            {
              key: "getJitteredMatrix",
              value: function (e, t) {
                var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0,
                  r = Math.tan(0.5 * n._degToRad * this.getFOV()),
                  o = r * (t.x / t.y),
                  a = o / (0.5 * t.x),
                  s = r / (0.5 * t.y),
                  l = a * e.x,
                  u = s * e.y
                void 0 !== i && i.setValues(o / t.x, r / t.y, l / t.x, u / t.y)
                var c = this.getFarPlane(),
                  h = this.getNearPlane(),
                  f = l - o,
                  d = l + o,
                  p = u - r,
                  v = u + r,
                  g = (2 * h) / (d * h - f * h),
                  m = (2 * h) / (v * h - p * h),
                  _ = (d * h + f * h) / (d * h - f * h),
                  y = (v * h + p * h) / (v * h - p * h),
                  T = -(c + h) / (c - h),
                  E = (-2 * c * h) / (c - h),
                  b = -1
                return this._tmpMat4.set([g, 0, 0, 0, 0, m, 0, 0, _, y, T, b, 0, 0, E, 0]), this._tmpMat4
              },
            },
            {
              key: "destruct",
              value: function () {
                Mi()(X()(n.prototype), "destruct", this).call(this)
              },
            },
            {
              key: "setDirty",
              value: function () {
                ;(this.dirty = !0), this._changeCallback.call(this)
              },
            },
          ]),
          n
        )
      })(Ii)
      ;(co._degToRad = Math.PI / 180), (co._radToDeg = 180 / Math.PI)
      var ho = co,
        fo = (function () {
          function e() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
              n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
              i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
              r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1
            F()(this, e), (this.q = ji.c.create()), ji.c.set(this.q, t, n, i, r)
          }
          return (
            V()(
              e,
              [
                {
                  key: "x",
                  get: function () {
                    return this.q[0]
                  },
                  set: function (e) {
                    this.q[0] = e
                  },
                },
                {
                  key: "y",
                  get: function () {
                    return this.q[1]
                  },
                  set: function (e) {
                    this.q[1] = e
                  },
                },
                {
                  key: "z",
                  get: function () {
                    return this.q[2]
                  },
                  set: function (e) {
                    this.q[2] = e
                  },
                },
                {
                  key: "w",
                  get: function () {
                    return this.q[3]
                  },
                  set: function (e) {
                    this.q[3] = e
                  },
                },
                {
                  key: "clone",
                  value: function () {
                    return new e(this.x, this.y, this.z, this.w)
                  },
                },
                {
                  key: "copy",
                  value: function (e) {
                    return ji.c.set(this.q, e.x, e.y, e.z, e.w), this
                  },
                },
                {
                  key: "setValues",
                  value: function (e, t, n, i) {
                    return ji.c.set(this.q, e, t, n, i), this
                  },
                },
                {
                  key: "toString",
                  value: function () {
                    return "(" + this.x + ", " + this.y + ", " + this.z + ", " + this.w + ")"
                  },
                },
                {
                  key: "dot",
                  value: function (e) {
                    return ji.c.dot(this.q, e.q)
                  },
                },
                {
                  key: "identity",
                  value: function () {
                    return ji.c.identity(this.q), this
                  },
                },
                {
                  key: "multiply",
                  value: function (e) {
                    return ji.c.multiply(this.q, this.q, e.q), this
                  },
                },
                {
                  key: "invert",
                  value: function () {
                    return (this.x = -this.x), (this.y = -this.y), (this.z = -this.z), (this.w = this.w), this
                  },
                },
                {
                  key: "rotateX",
                  value: function (e) {
                    return ji.c.rotateX(this.q, this.q, e), this
                  },
                },
                {
                  key: "rotateY",
                  value: function (e) {
                    return ji.c.rotateY(this.q, this.q, e), this
                  },
                },
                {
                  key: "rotateZ",
                  value: function (e) {
                    return ji.c.rotateZ(this.q, this.q, e), this
                  },
                },
                {
                  key: "setAxisAngleRadians",
                  value: function (e, t) {
                    return ji.c.setAxisAngle(this.q, e.v, t), this
                  },
                },
                {
                  key: "rotateAxisAngleRadians",
                  value: function (t, n) {
                    return ji.c.setAxisAngle(e._tempQuat, t.v, n), ji.c.multiply(this.q, e._tempQuat, this.q), this
                  },
                },
              ],
              [
                {
                  key: "dot",
                  value: function (e, t) {
                    return ji.c.dot(e.q, t.q)
                  },
                },
                {
                  key: "multiply",
                  value: function (e, t, n) {
                    return ji.c.multiply(e.q, t.q, n.q), e
                  },
                },
                {
                  key: "invert",
                  value: function (e, t) {
                    return (e.x = -t.x), (e.y = -t.y), (e.z = -t.z), (e.w = -t.w), e
                  },
                },
                {
                  key: "lerp",
                  value: function (e, t, n, i) {
                    return ji.c.lerp(e.q, t.q, n.q, i), e
                  },
                },
                {
                  key: "slerp",
                  value: function (e, t, n, i) {
                    return ji.c.slerp(e.q, t.q, n.q, i), e
                  },
                },
                {
                  key: "closestSlerp",
                  value: function (t, n, i, r) {
                    return n.dot(i) < 0 ? (e.invert(this.tInvB, i), e.slerp(t, n, this.tInvB, r)) : e.slerp(t, n, i, r), t
                  },
                },
                {
                  key: "fromMat3",
                  value: function (e, t) {
                    return ji.c.fromMat3(e.q, t), e
                  },
                },
                {
                  key: "lookAt",
                  value: function (t, n, i, r) {
                    e._tempForward.copy(n),
                      e._tempForward.subtract(i),
                      e._tempForward.normalize(),
                      Xi.cross(e._tempRight, r, e._tempForward),
                      e._tempRight.normalize(),
                      Xi.cross(e._tempUp, e._tempForward, e._tempRight),
                      e._tempUp.normalize()
                    var o = ji.a.fromValues(
                      e._tempRight.x,
                      e._tempRight.y,
                      e._tempRight.z,
                      e._tempUp.x,
                      e._tempUp.y,
                      e._tempUp.z,
                      e._tempForward.x,
                      e._tempForward.y,
                      e._tempForward.z
                    )
                    return e.fromMat3(t, o), t
                  },
                },
                {
                  key: "CreateFromAxisAngle",
                  value: function (e, t, n) {
                    var i = 0.5 * n,
                      r = Math.sin(i)
                    e.setValues(t.x * r, t.y * r, t.z * r, Math.cos(i))
                  },
                },
                {
                  key: "fromEuler",
                  value: function (e, t, n, i) {
                    return ji.c.fromEuler(e.q, t, n, i), e
                  },
                },
              ]
            ),
            e
          )
        })()
      function po(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ("function" === typeof Proxy) return !0
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var n,
            i = X()(e)
          if (t) {
            var r = X()(this).constructor
            n = Reflect.construct(i, arguments, r)
          } else n = i.apply(this, arguments)
          return j()(this, n)
        }
      }
      ;(fo.IDENTITY = new fo()), (fo._tempQuat = ji.c.create()), (fo.tInvB = new fo()), (fo._tempForward = new Xi()), (fo._tempRight = new Xi()), (fo._tempUp = new Xi())
      var vo = (function (e) {
        z()(n, e)
        var t = po(n)
        function n() {
          var e
          return (
            F()(this, n),
            ((e = t.call(this)).autoUpdate = !0),
            (e._rotation = new fo()),
            (e._pos = new Xi()),
            (e._scale = new Xi(1, 1, 1)),
            (e._parent = null),
            (e._matrix = ji.b.create()),
            (e._localMatrix = ji.b.create()),
            (e._changeCallback = []),
            (e._children = []),
            (e._tempMat4 = ji.b.create()),
            (e._tempMat3 = ji.a.create()),
            (e._tempV3a = new Xi()),
            (e._dirty = !0),
            (e._signalDirtyDown = !1),
            e
          )
        }
        return (
          V()(
            n,
            [
              {
                key: "identity",
                value: function () {
                  this._pos.setValues(0, 0, 0), this._rotation.identity(), this._scale.setValues(1, 1, 1)
                },
              },
              {
                key: "setParent",
                value: function (e) {
                  this._parent !== e && (this._parent && this._parent.removeChild(this), (this._parent = e), e && e.addChild(this), this.setDirty())
                },
              },
              {
                key: "getParent",
                value: function () {
                  return this._parent
                },
              },
              {
                key: "addChild",
                value: function (e) {
                  this._children.indexOf(e) < 0 && (this._children.push(e), e.setParent(this))
                },
              },
              {
                key: "removeChild",
                value: function (e) {
                  var t = this._children.indexOf(e)
                  t > -1 && (this._children.splice(t, 1), e.setParent(null))
                },
              },
              {
                key: "getChildren",
                value: function () {
                  return this._children
                },
              },
              {
                key: "addChangeCallBack",
                value: function (e) {
                  this._changeCallback.push(e)
                },
              },
              {
                key: "setDirty",
                value: function () {
                  this._dirty || ((this._dirty = !0), this.signalDirtyDown())
                },
              },
              {
                key: "setParentDirty",
                value: function () {
                  this.signalDirtyDown()
                },
              },
              {
                key: "signalDirtyDown",
                value: function () {
                  if (!this._signalDirtyDown) {
                    this._signalDirtyDown = !0
                    for (var e = this._changeCallback.length - 1; e >= 0; e--) this._changeCallback[e].call(this)
                    for (var t = this._children.length - 1; t >= 0; t--) this._children[t].setParentDirty()
                  }
                },
              },
              {
                key: "clone",
                value: function () {
                  var e = new n()
                  return e.setScale(this._scale), e.setRotation(this._rotation), e.setPosition(this._pos), e
                },
              },
              {
                key: "updateMatrix",
                value: function () {
                  ;(this._dirty || this._signalDirtyDown) &&
                    (this.autoUpdate &&
                      (this._dirty && ji.b.fromRotationTranslationScale(this._localMatrix, this._rotation.q, this._pos.v, this._scale.v),
                      this._parent ? ji.b.multiply(this._matrix, this._parent.getWorldMatrix(), this._localMatrix) : this._dirty && ji.b.copy(this._matrix, this._localMatrix)),
                    (this._dirty = !1),
                    (this._signalDirtyDown = !1))
                },
              },
              {
                key: "lookAt",
                value: function (e, t) {
                  var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Xi.UP
                  this.setPosition(e), this.lookAtFromCurrentPos(t, n)
                },
              },
              {
                key: "lookAtFromCurrentPos",
                value: function (e) {
                  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Xi.UP
                  fo.lookAt(this._rotation, this._pos, e, t), this.setDirty()
                },
              },
              {
                key: "setPositionRotationScale",
                value: function (e, t, n) {
                  this._pos.copy(e), this._rotation.copy(t), this._scale.copy(n), this.setDirty()
                },
              },
              {
                key: "getWorldMatrix",
                value: function () {
                  return this.updateMatrix(), this._matrix
                },
              },
              {
                key: "getLocalMatrix",
                value: function () {
                  return this.updateMatrix(), this._localMatrix
                },
              },
              {
                key: "getPosition",
                value: function () {
                  return this._pos
                },
              },
              {
                key: "setPosition",
                value: function (e) {
                  this._pos.copy(e), this.setDirty()
                },
              },
              {
                key: "setPositionValues",
                value: function (e, t, n) {
                  this._pos.setValues(e, t, n), this.setDirty()
                },
              },
              {
                key: "getWorldPosition",
                value: function () {
                  this.updateMatrix()
                  var e = this._tempV3a
                  return e.copy(Xi.ZERO), e.transform(this._matrix), e
                },
              },
              {
                key: "getScale",
                value: function () {
                  return this._scale
                },
              },
              {
                key: "setScale",
                value: function (e) {
                  this._scale.copy(e), this.setDirty()
                },
              },
              {
                key: "setScaleScalar",
                value: function (e) {
                  this._scale.setValues(e, e, e), this.setDirty()
                },
              },
              {
                key: "setScaleValues",
                value: function (e, t, n) {
                  this._scale.setValues(e, t, n), this.setDirty()
                },
              },
              {
                key: "translateX",
                value: function (e) {
                  ;(this._pos.x += e), this.setDirty()
                },
              },
              {
                key: "translateY",
                value: function (e) {
                  ;(this._pos.y += e), this.setDirty()
                },
              },
              {
                key: "translateZ",
                value: function (e) {
                  ;(this._pos.z += e), this.setDirty()
                },
              },
              {
                key: "translate",
                value: function (e) {
                  this._pos.add(e), this.setDirty()
                },
              },
              {
                key: "translateValues",
                value: function (e, t, n) {
                  ;(this._pos.x += e), (this._pos.y += t), (this._pos.z += n), this.setDirty()
                },
              },
              {
                key: "getRotation",
                value: function () {
                  return this._rotation
                },
              },
              {
                key: "setRotation",
                value: function (e) {
                  this._rotation.copy(e), this.setDirty()
                },
              },
              {
                key: "getRotationMatrix",
                value: function () {
                  return ji.b.fromQuat(this._tempMat4, this._rotation.q), this._tempMat4
                },
              },
              {
                key: "getRotationMatrixMat3",
                value: function () {
                  return ji.a.fromQuat(this._tempMat3, this._rotation.q), this._tempMat3
                },
              },
              {
                key: "getWorldRotationMatrixMat3",
                value: function () {
                  var e = this.getRotationMatrixMat3()
                  return this._parent && ji.a.multiply(e, this._parent.getWorldRotationMatrixMat3(), e), e
                },
              },
              {
                key: "setRotationFromMatrix",
                value: function (e) {
                  fo.fromMat3(this._rotation, e), this.setDirty()
                },
              },
              {
                key: "rotateRadiansValues",
                value: function (e, t, n) {
                  return this._rotation.rotateY(t), this._rotation.rotateX(e), this._rotation.rotateZ(n), this.setDirty(), this._rotation
                },
              },
              {
                key: "rotateRadians",
                value: function (e) {
                  return this.rotateRadiansValues(e.x, e.y, e.z)
                },
              },
              {
                key: "rotateDegreesValues",
                value: function (e, t, i) {
                  return this.rotateRadiansValues(e * n._degToRad, t * n._degToRad, i * n._degToRad)
                },
              },
              {
                key: "rotateDegrees",
                value: function (e) {
                  return this.rotateDegreesValues(e.x, e.y, e.z)
                },
              },
              {
                key: "rotateAxisAngleRadians",
                value: function (e, t) {
                  return this._rotation.rotateAxisAngleRadians(e, t), this.setDirty(), this._rotation
                },
              },
              {
                key: "rotateDegreesY",
                value: function (e) {
                  this._rotation.rotateY(e * n._degToRad), this.setDirty()
                },
              },
              {
                key: "rotateRadiansX",
                value: function (e) {
                  this._rotation.rotateX(e), this.setDirty()
                },
              },
              {
                key: "rotateRadiansY",
                value: function (e) {
                  this._rotation.rotateY(e), this.setDirty()
                },
              },
              {
                key: "rotateRadiansZ",
                value: function (e) {
                  this._rotation.rotateZ(e), this.setDirty()
                },
              },
              {
                key: "setEulerDegreesValues",
                value: function (e, t, n) {
                  this._rotation.identity(), this.rotateDegreesValues(e, t, n)
                },
              },
              {
                key: "setEulerDegrees",
                value: function (e) {
                  this.setEulerDegreesValues(e.x, e.y, e.z)
                },
              },
              {
                key: "setEulerDegreesXY",
                value: function (e) {
                  this.setEulerDegreesValues(e.x, e.y, 0)
                },
              },
              {
                key: "setEulerRadians",
                value: function (e) {
                  this._rotation.identity(), this.rotateRadiansValues(e.x, e.y, e.z)
                },
              },
              {
                key: "setRadiansX",
                value: function (e) {
                  this._rotation.identity(), this.rotateRadiansX(e)
                },
              },
              {
                key: "setRadiansY",
                value: function (e) {
                  this._rotation.identity(), this.rotateRadiansY(e)
                },
              },
              {
                key: "setRadiansZ",
                value: function (e) {
                  this._rotation.identity(), this.rotateRadiansZ(e)
                },
              },
              {
                key: "getEulerDegrees",
                value: function () {
                  ji.a.fromQuat(this._tempMat3, this._rotation.q)
                  var e = n.getEulerRadiansYXZ(this._tempMat3)
                  return (e.x *= n._radToDeg), (e.y *= n._radToDeg), (e.z *= n._radToDeg), e
                },
              },
              {
                key: "getForward",
                value: function () {
                  var e = this.getRotationMatrixMat3()
                  return this._tempV3a.setValues(e[6], e[7], e[8]), this._tempV3a
                },
              },
              {
                key: "getWorldForward",
                value: function () {
                  var e = this.getWorldRotationMatrixMat3()
                  return this._tempV3a.setValues(e[6], e[7], e[8]), this._tempV3a
                },
              },
              {
                key: "getRight",
                value: function () {
                  var e = this.getRotationMatrixMat3()
                  return this._tempV3a.setValues(e[0], e[1], e[2]), this._tempV3a
                },
              },
              {
                key: "getUp",
                value: function () {
                  var e = this.getRotationMatrixMat3()
                  return this._tempV3a.setValues(e[3], e[4], e[5]), this._tempV3a
                },
              },
              {
                key: "getWorldUp",
                value: function () {
                  var e = this.getWorldRotationMatrixMat3()
                  return this._tempV3a.setValues(e[3], e[4], e[5]), this._tempV3a
                },
              },
              {
                key: "setDirection",
                value: function (e, t) {
                  var i = this._tempV3a
                  Xi.cross(i, t, e), i.normalize()
                  var r = n._tempV3aS
                  Xi.cross(r, e, i), r.normalize(), ji.a.set(this._tempMat3, i.x, i.y, i.z, r.x, r.y, r.z, e.x, e.y, e.z), this.setRotationFromMatrix(this._tempMat3)
                },
              },
              {
                key: "getDirection",
                value: function () {
                  var e = this._tempV3a
                  return e.copy(Xi.FORWARD), e.transformMat3(this.getWorldRotationMatrixMat3()), e
                },
              },
              {
                key: "destruct",
                value: function () {
                  Mi()(X()(n.prototype), "destruct", this).call(this)
                },
              },
            ],
            [
              {
                key: "getEulerRadiansYXZ",
                value: function (e) {
                  var t, i, r
                  return (
                    e[7] < -1 + this.singularityRange
                      ? ((t = Math.PI / 2), (i = Math.atan2(e[3], e[0])), (r = 0))
                      : e[7] > 1 - this.singularityRange
                      ? ((t = -Math.PI / 2), (i = -Math.atan2(e[3], e[0])), (r = 0))
                      : ((t = Math.asin(-e[7])), (i = Math.atan2(e[6], e[8])), (r = Math.atan2(e[1], e[4]))),
                    n._tempV3aS.setValues(t, i, r),
                    n._tempV3aS
                  )
                },
              },
            ]
          ),
          n
        )
      })(Ii)
      ;(vo._degToRad = Math.PI / 180), (vo._radToDeg = 180 / Math.PI), (vo._tempV3aS = new Xi()), (vo.singularityRange = 1e-4)
      var go = vo
      function mo(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ("function" === typeof Proxy) return !0
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var n,
            i = X()(e)
          if (t) {
            var r = X()(this).constructor
            n = Reflect.construct(i, arguments, r)
          } else n = i.apply(this, arguments)
          return j()(this, n)
        }
      }
      var _o = (function (e) {
        z()(n, e)
        var t = mo(n)
        function n(e) {
          var i
          return (
            F()(this, n),
            ((i = t.call(this)).dirty = !0),
            (i._viewMatrix = ji.b.create()),
            (i.transform = new go()),
            i.transform.addChangeCallBack(function () {
              return i.setDirty()
            }),
            (i._changeCallback = e),
            i
          )
        }
        return (
          V()(n, [
            {
              key: "getWorldPosition",
              value: function () {
                return this.transform.getWorldPosition()
              },
            },
            {
              key: "setDirty",
              value: function () {
                ;(this.dirty = !0), this._changeCallback.call(this)
              },
            },
            {
              key: "getMatrix",
              value: function () {
                return this.updateMatrix(), this._viewMatrix
              },
            },
            {
              key: "updateMatrix",
              value: function () {
                this.dirty && (ji.b.invert(this._viewMatrix, this.transform.getWorldMatrix()), (this.dirty = !1))
              },
            },
            {
              key: "destruct",
              value: function () {
                this.transform && this.transform.destruct(), Mi()(X()(n.prototype), "destruct", this).call(this)
              },
            },
          ]),
          n
        )
      })(Ii)
      function yo(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ("function" === typeof Proxy) return !0
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var n,
            i = X()(e)
          if (t) {
            var r = X()(this).constructor
            n = Reflect.construct(i, arguments, r)
          } else n = i.apply(this, arguments)
          return j()(this, n)
        }
      }
      var To = (function (e) {
        z()(n, e)
        var t = yo(n)
        function n() {
          var e,
            i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 60,
            r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0.01,
            o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10
          return (
            F()(this, n),
            ((e = t.call(this)).dirty = !0),
            (e._viewProjection = ji.b.create()),
            (e.tScreenPos = new Tr()),
            (e.tViewProjInv = ji.b.create()),
            (e.projection = new ho(
              function () {
                return e.setDirty()
              },
              i,
              r,
              o
            )),
            (e.view = new _o(function () {
              return e.setDirty()
            })),
            e
          )
        }
        return (
          V()(n, [
            {
              key: "setDirty",
              value: function () {
                this.dirty = !0
              },
            },
            {
              key: "getWorldPosition",
              value: function () {
                return this.view.getWorldPosition()
              },
            },
            {
              key: "lookAt",
              value: function (e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Xi.UP
                this.view.transform.lookAt(e, t, n)
              },
            },
            {
              key: "setPosition",
              value: function (e) {
                this.view.transform.setPosition(e)
              },
            },
            {
              key: "getViewProjection",
              value: function () {
                return this.updateViewProjection(), this._viewProjection
              },
            },
            {
              key: "getProjectionMatrix",
              value: function () {
                return this.projection.getMatrix()
              },
            },
            {
              key: "getViewMatrix",
              value: function () {
                return this.view.getMatrix()
              },
            },
            {
              key: "getProjection",
              value: function () {
                return this.projection
              },
            },
            {
              key: "updateViewProjection",
              value: function () {
                this.dirty && (ji.b.multiply(this._viewProjection, this.projection.getMatrix(), this.view.getMatrix()), (this.dirty = !1))
              },
            },
            {
              key: "worldToScreenPoint",
              value: function (e, t) {
                ;(this.tScreenPos.x = t.x),
                  (this.tScreenPos.y = t.y),
                  (this.tScreenPos.z = t.z),
                  (this.tScreenPos.w = 1),
                  this.tScreenPos.transform(this.getViewProjection()),
                  (this.tScreenPos.x /= this.tScreenPos.w),
                  (this.tScreenPos.y /= this.tScreenPos.w),
                  (this.tScreenPos.x = 0.5 * this.tScreenPos.x + 0.5),
                  (this.tScreenPos.y = -0.5 * this.tScreenPos.y + 0.5),
                  (e.x = this.tScreenPos.x),
                  (e.y = this.tScreenPos.y),
                  (e.z = this.tScreenPos.z)
              },
            },
            {
              key: "screenToWorldPoint",
              value: function (e, t) {
                ji.b.invert(this.tViewProjInv, this.getViewProjection())
                var n = 2 * t.x - 1,
                  i = -2 * t.y + 1
                ;(e.x = n), (e.y = i), (e.z = 0), e.transform(this.tViewProjInv)
              },
            },
            {
              key: "destruct",
              value: function () {
                this.projection && this.projection.destruct(), this.view && this.view.destruct(), Mi()(X()(n.prototype), "destruct", this).call(this)
              },
            },
          ]),
          n
        )
      })(Ii)
      function Eo(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ("function" === typeof Proxy) return !0
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var n,
            i = X()(e)
          if (t) {
            var r = X()(this).constructor
            n = Reflect.construct(i, arguments, r)
          } else n = i.apply(this, arguments)
          return j()(this, n)
        }
      }
      var bo = (function (e) {
        z()(n, e)
        var t = Eo(n)
        function n(e, i) {
          var r
          return (
            F()(this, n),
            ((r = t.call(this))._isEnabled = !1),
            (r._isDeviceAvailable = !1),
            (r._eventBind = !1),
            (r._target = new fo()),
            (r._current = new fo()),
            (r._screen = new fo()),
            (r._tempTransform = new go()),
            (r._worldRot = new fo(-Math.sqrt(0.5), 0, 0, Math.sqrt(0.5))),
            (r._transform = i),
            r.enable(),
            r
          )
        }
        return (
          V()(n, [
            {
              key: "enable",
              value: function () {
                var e = this
                "ondeviceorientation" in window && (this._isDeviceAvailable = !0),
                  this._isDeviceAvailable &&
                    (this._eventBind ||
                      (window.addEventListener(
                        "deviceorientation",
                        function (t) {
                          e.handleDeviceOrientation(t)
                        },
                        !1
                      ),
                      (this._eventBind = !0)),
                    (this._isEnabled = !0))
              },
            },
            {
              key: "isEnabled",
              value: function () {
                return this._isEnabled && this._isDeviceAvailable
              },
            },
            {
              key: "disable",
              value: function () {
                this._isEnabled = !1
              },
            },
            {
              key: "handleDeviceOrientation",
              value: function (e) {
                if (this._isEnabled) {
                  var t = window.orientation || 0
                  this._tempTransform.setEulerDegreesValues(e.beta, e.alpha, -1 * e.gamma), this._target.copy(this._tempTransform.getRotation())
                  var n = ((-t / 2) * Math.PI) / 180
                  this._screen.setValues(0, Math.sin(n), 0, Math.cos(n)),
                    this._target.multiply(this._screen),
                    this._target.multiply(this._worldRot),
                    fo.closestSlerp(this._current, this._current, this._target, 0.7),
                    this._transform.setRotation(this._current)
                }
              },
            },
          ]),
          n
        )
      })(Ii)
      function Ao(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ("function" === typeof Proxy) return !0
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var n,
            i = X()(e)
          if (t) {
            var r = X()(this).constructor
            n = Reflect.construct(i, arguments, r)
          } else n = i.apply(this, arguments)
          return j()(this, n)
        }
      }
      var Ro = (function (e) {
        z()(n, e)
        var t = Ao(n)
        function n(e, i) {
          var r
          return (
            F()(this, n),
            ((r = t.call(this, i))._mouseDown = !1),
            (r._eulerDegreesSpeed = new dr()),
            (r._rotating = !1),
            (r._rotatingLerp = 0),
            (r._rotatingLerpPrev = 0),
            (r._slowDownTime = 1.5),
            (r._rotationLimit = new dr(80, -1)),
            (r._sensitivity = 3),
            (r._renderer = e),
            (r._mouseListener = e.getMouseListener()),
            r
          )
        }
        return (
          V()(n, [
            {
              key: "update",
              value: function (e) {
                var t = this._mouseDown
                this._mouseDown = this._mouseListener.getMouseDown()
                var i = e.projection.getFOV(),
                  r = 0.5 / Math.tan(i * (1.570796326795 / 180)),
                  o = 114.5915590261571 * Math.atan2(0.5 * this._renderer.getAspect(), r),
                  a = this.getMouseSpeed()
                a.length() > n.MOUSE_MOVEMENT_CANCEL_TRIGGER && this._mouseListener.cancelClick(),
                  this._mouseDown && t
                    ? (this._eulerDegreesSpeed.setValues(a.y * i * this._mouseInverseValue, a.x * o * this._mouseInverseValue),
                      this._eulerDegreesSpeed.multiplyScalar(this._sensitivity),
                      (this._rotating = this._eulerDegreesSpeed.length() > 0),
                      (this._rotatingLerp = this._rotating ? 0.5 : 0),
                      (this._rotatingLerpPrev = this._rotatingLerp),
                      this.rotateBy(this._eulerDegreesSpeed),
                      this._eulerDegreesSpeed.setValues(
                        Math.min(n.MAX_ROTATE_SPEED, Math.abs(this._eulerDegreesSpeed.x)) * Math.sign(this._eulerDegreesSpeed.x),
                        Math.min(n.MAX_ROTATE_SPEED, Math.abs(this._eulerDegreesSpeed.y)) * Math.sign(this._eulerDegreesSpeed.y)
                      ))
                    : ((this._rotatingLerp = qi.clamp01(this._rotatingLerp - Jr.getInstance().deltaTime / this._slowDownTime)),
                      (this._rotating = this._rotatingLerp > 0),
                      this._rotating &&
                        (this._eulerDegreesSpeed.multiplyScalar(1 - (this._rotatingLerpPrev - this._rotatingLerp) / this._rotatingLerpPrev),
                        this.rotateBy(this._eulerDegreesSpeed)),
                      (this._rotatingLerpPrev = this._rotatingLerp))
              },
            },
            {
              key: "resetSpeed",
              value: function () {
                ;(this._mouseDown = !1), this._eulerDegreesSpeed.setValues(0, 0)
              },
            },
            {
              key: "rotateBy",
              value: function (e) {
                this._eulerDegreesXY.add(e),
                  this._rotationLimit.x > 0 && (this._eulerDegreesXY.x = qi.clamp(this._eulerDegreesXY.x, -this._rotationLimit.x, this._rotationLimit.x)),
                  this._rotationLimit.y > 0 && (this._eulerDegreesXY.y = qi.clamp(this._eulerDegreesXY.y, -this._rotationLimit.y, this._rotationLimit.y)),
                  this._transform.setEulerDegreesXY(this._eulerDegreesXY)
              },
            },
            {
              key: "setRotationLimit",
              value: function (e) {
                this._rotationLimit.copy(e)
              },
            },
            {
              key: "isRotating",
              value: function () {
                return this._rotating
              },
            },
            {
              key: "getMouseSpeed",
              value: function () {
                return this._mouseListener.getMouseDown() ? this._mouseListener.getNormalizedVelocity() : dr.ZERO
              },
            },
          ]),
          n
        )
      })(
        (function () {
          function e(t) {
            F()(this, e), (this._eulerDegreesXY = new dr()), (this._transform = new go()), (this._mouseInverseValue = 1), (this._mouseInverseValue = t ? -1 : 1)
          }
          return (
            V()(e, [
              {
                key: "eulerDegreesXY",
                get: function () {
                  return this._eulerDegreesXY
                },
              },
              {
                key: "update",
                value: function (e) {},
              },
              {
                key: "setEulerDegreesXY",
                value: function (e) {
                  this._eulerDegreesXY.copy(e), this._transform.setEulerDegreesXY(e)
                },
              },
              {
                key: "setEulerDegrees",
                value: function (e, t) {
                  this._eulerDegreesXY.setValues(e, t), this._transform.setEulerDegreesXY(this._eulerDegreesXY)
                },
              },
              {
                key: "setRotation",
                value: function (e) {
                  this._transform.setRotation(e)
                  var t = this._transform.getEulerDegrees()
                  this._eulerDegreesXY.setValues(t.x, t.y)
                },
              },
              {
                key: "getRotation",
                value: function () {
                  return this._transform.getRotation()
                },
              },
              {
                key: "setMouseInverted",
                value: function (e) {
                  this._mouseInverseValue = e ? -1 : 1
                },
              },
            ]),
            e
          )
        })()
      )
      function wo(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ("function" === typeof Proxy) return !0
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var n,
            i = X()(e)
          if (t) {
            var r = X()(this).constructor
            n = Reflect.construct(i, arguments, r)
          } else n = i.apply(this, arguments)
          return j()(this, n)
        }
      }
      ;(Ro.MOUSE_MOVEMENT_CANCEL_TRIGGER = 0.0025), (Ro.MAX_ROTATE_SPEED = 10)
      var xo = (function (e) {
        z()(n, e)
        var t = wo(n)
        function n(e) {
          var i,
            r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 80,
            o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0.01,
            a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 100,
            s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
            l = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
            u = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6]
          return (
            F()(this, n),
            ((i = t.call(this, r, o, a))._eulerDegrees = new Xi()),
            (i._currentFov = 80),
            (i._minFov = 40),
            (i._maxFov = 120),
            (i._renderer = e),
            (i.pivot = new go()),
            i.pivot.setPositionValues(0, 0, 0),
            i.view.transform.setPositionValues(0, 0, s),
            i.view.transform.setParent(i.pivot),
            (i._mouseListener = e.getMouseListener()),
            (i._rotationController = new Ro(i._renderer, l)),
            On.a.mobile && u && i.enableGyroscope(),
            i
          )
        }
        return (
          V()(n, [
            {
              key: "mouseResponse",
              set: function (e) {},
            },
            {
              key: "update",
              value: function () {
                if ((this.projection.setAspect(this._renderer.getAspect()), this._rotationController.update(this), !this._gyroscope)) {
                  var e = this._rotationController.eulerDegreesXY
                  ;(this._eulerDegrees.x = e.x), (this._eulerDegrees.y = e.y), this.pivot.setEulerDegrees(this._eulerDegrees)
                }
              },
            },
            {
              key: "getRotationController",
              value: function () {
                return this._rotationController
              },
            },
            {
              key: "setRotation",
              value: function (e) {
                this._rotationController.setRotation(e), this._eulerDegrees.copy(this.pivot.getEulerDegrees())
              },
            },
            {
              key: "rotateX",
              value: function (e) {
                ;(this._eulerDegrees.x += e), this._rotationController.setEulerDegrees(this._eulerDegrees.x, this._eulerDegrees.y)
              },
            },
            {
              key: "rotateY",
              value: function (e) {
                ;(this._eulerDegrees.y += e), this._rotationController.setEulerDegrees(this._eulerDegrees.x, this._eulerDegrees.y)
              },
            },
            {
              key: "setRotationX",
              value: function (e) {
                ;(this._eulerDegrees.x = e), this._rotationController.setEulerDegrees(this._eulerDegrees.x, this._eulerDegrees.y)
              },
            },
            {
              key: "setRotationY",
              value: function (e) {
                ;(this._eulerDegrees.y = e), this._rotationController.setEulerDegrees(this._eulerDegrees.x, this._eulerDegrees.y)
              },
            },
            {
              key: "setRotationZ",
              value: function (e) {
                ;(this._eulerDegrees.z = e), this.pivot.setEulerDegrees(this._eulerDegrees)
              },
            },
            {
              key: "getRotationX",
              value: function () {
                return this._eulerDegrees.x
              },
            },
            {
              key: "getRotationY",
              value: function () {
                return this._eulerDegrees.y
              },
            },
            {
              key: "getRotationZ",
              value: function () {
                return this._eulerDegrees.z
              },
            },
            {
              key: "setDistance",
              value: function (e) {
                this.view.transform.setPositionValues(0, 0, e)
              },
            },
            {
              key: "disableGyroscope",
              value: function () {
                this._gyroscope = null
              },
            },
            {
              key: "enableGyroscope",
              value: function () {
                this._gyroscope || (this._gyroscope = new bo(this._renderer.getCanvas(), this.pivot))
              },
            },
            {
              key: "getGyroscope",
              value: function () {
                return this._gyroscope
              },
            },
            {
              key: "enablePinch",
              value: function () {
                var e = this
                ;(this._currentFov = this.projection.getFOV()),
                  (this._minFov = (1 * this.projection.getFOV()) / 2),
                  (this._maxFov = (3 * this.projection.getFOV()) / 2),
                  this._renderer.getCanvas().addEventListener(
                    "gestureend",
                    function (t) {
                      var n = Math.max(Math.min((1 / t.scale) * e._currentFov, e._maxFov), e._minFov)
                      e.projection.setFOV(n), (e._currentFov = e.projection.getFOV()), t.preventDefault()
                    },
                    !1
                  ),
                  this._renderer.getCanvas().addEventListener(
                    "gesturechange",
                    function (t) {
                      var n = Math.max(Math.min((1 / t.scale) * e._currentFov, e._maxFov), e._minFov)
                      e.projection.setFOV(n), t.preventDefault()
                    },
                    !1
                  )
              },
            },
          ]),
          n
        )
      })(To)
      function ko(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ("function" === typeof Proxy) return !0
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var n,
            i = X()(e)
          if (t) {
            var r = X()(this).constructor
            n = Reflect.construct(i, arguments, r)
          } else n = i.apply(this, arguments)
          return j()(this, n)
        }
      }
      var So = (function (e) {
        z()(n, e)
        var t = ko(n)
        function n(e) {
          var i,
            r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 32,
            o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 24,
            a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
            s = arguments.length > 4 && void 0 !== arguments[4] && arguments[4]
          F()(this, n), (i = t.call(this, e))
          for (
            var l = (r + 1) * (o + 1),
              u = new Float32Array(3 * l),
              c = new Float32Array(2 * l),
              h = new Float32Array(3 * l),
              f = new Float32Array(4 * l),
              d = 0,
              p = 0,
              v = 0,
              g = 0,
              m = 2 * Math.PI,
              _ = 1 / r,
              y = 1 / o,
              T = 0;
            T <= o;
            T++
          )
            for (var E = T * y, b = 0; b <= r; b++) {
              var A = b * _,
                R = Math.cos(E * Math.PI),
                w = Math.sqrt(1 - R * R)
              ;(u[d++] = Math.sin(A * m) * w * a),
                (u[d++] = R * a),
                (u[d++] = Math.cos(A * m) * w * a),
                (c[p++] = A),
                (c[p++] = 1 - E),
                (h[v++] = Math.sin(A * m) * w),
                (h[v++] = R),
                (h[v++] = Math.cos(A * m) * w),
                (f[g++] = -Math.cos(A * m)),
                (f[g++] = 0),
                (f[g++] = Math.sin(A * m)),
                (f[g++] = 1)
            }
          i.setPositions(u), i.setUV0(c), i.setNormals(h), s && i.setTangents(f)
          var x = r * o * 2,
            k = new Uint16Array(3 * x),
            S = r + 1
          d = 0
          for (var C = 0; C < o; C++)
            for (var P = 0; P < r; P++)
              (k[d++] = C * S + P), (k[d++] = (C + 1) * S + P), (k[d++] = C * S + P + 1), (k[d++] = (C + 1) * S + P), (k[d++] = (C + 1) * S + P + 1), (k[d++] = C * S + P + 1)
          return i.setIndices(k), i
        }
        return V()(n)
      })(Qr)
      function Co(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ("function" === typeof Proxy) return !0
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var n,
            i = X()(e)
          if (t) {
            var r = X()(this).constructor
            n = Reflect.construct(i, arguments, r)
          } else n = i.apply(this, arguments)
          return j()(this, n)
        }
      }
      var Po = (function (e) {
          z()(n, e)
          var t = Co(n)
          function n(e, i, r, o) {
            var a,
              s = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              l = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
              u = arguments.length > 6 && void 0 !== arguments[6] && arguments[6]
            return F()(this, n), ((a = t.call(this, e, i, "webgl2", r, o, s, l, u))._vertexArrayObjects = {}), (a._vertexArrayObjects = {}), a
          }
          return (
            V()(n, [
              {
                key: "init",
                value: function () {
                  Mi()(X()(n.prototype), "init", this).call(this)
                },
              },
              {
                key: "getRenderContext",
                value: function () {
                  return this.context
                },
              },
              {
                key: "preprocessShaderString",
                value: function (e) {
                  var t = e.indexOf("#version"),
                    n = ""
                  return t > -1 && (n = e.substr(t, e.indexOf("\n", t) - t)), (e = n + "\n#define WEBGL2\n" + (e = e.replace(n, "")))
                },
              },
              {
                key: "getVAO",
                value: function (e, t) {
                  var n = null,
                    i = this._vertexArrayObjects[e.id]
                  return (
                    i ? (n = i[t.id]) || ((n = this.initVAO(e, t)), (i[t.id] = n)) : ((i = []), (n = this.initVAO(e, t)), (i[t.id] = n), (this._vertexArrayObjects[e.id] = i)), n
                  )
                },
              },
              {
                key: "initVAO",
                value: function (e, t) {
                  var n = this.getRenderContext(),
                    i = n.createVertexArray()
                  n.bindVertexArray(i)
                  var r = 0
                  e.isInterleaved() && (e.interleaveData(), this.context.bindBuffer(this.context.ARRAY_BUFFER, e.interleavedBuffer))
                  for (var o = 0; o < e.attributes.length; o++) {
                    var a = e.attributes[o],
                      s = t.shader.getAttributeByName(a.name)
                    if (s) {
                      if (a.stride !== s.stride) {
                        mr.log("Renderer: initVAO: strides don't match: ", a.stride, s.stride)
                        continue
                      }
                      if (e.isInterleaved()) n.enableVertexAttribArray(s.loc), n.vertexAttribPointer(s.loc, s.stride, n.FLOAT, !1, 4 * e.interleavedStrideSum, r)
                      else {
                        if (void 0 === a.buffer) throw new ReferenceError("Expected buffer to be defined on VertexAttribute on non-interleaved mesh.")
                        n.bindBuffer(n.ARRAY_BUFFER, a.buffer), n.enableVertexAttribArray(s.loc), n.vertexAttribPointer(s.loc, s.stride, n.FLOAT, !1, 4 * s.stride, 0)
                      }
                    }
                    e.interleaved && (r += 4 * a.stride)
                  }
                  return e.indexBuffer && n.bindBuffer(n.ELEMENT_ARRAY_BUFFER, e.indexBuffer), i
                },
              },
              {
                key: "draw",
                value: function (e, t) {
                  var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                    i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1
                  t.setActive()
                  var r = this.getVAO(e, t),
                    o = this.context
                  o.bindVertexArray(r), this.drawElements(e, t, n, i)
                },
              },
              {
                key: "startBatch",
                value: function (e, t) {
                  t.setActive()
                  var n = this.getVAO(e, t)
                  this.getRenderContext().bindVertexArray(n)
                },
              },
              {
                key: "drawElements",
                value: function (e, t) {
                  var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                    i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1
                  if (e.hasIndices()) this.context.drawElements(t.drawType, e.indices.length, e.indexType, 0)
                  else {
                    var r = e.getNumVertices() - n
                    i > 0 ? this.context.drawArrays(t.drawType, n, Math.min(r, i)) : this.context.drawArrays(t.drawType, n, r)
                  }
                },
              },
              {
                key: "drawInstanced",
                value: function (e, t, n, i) {
                  t.setActive()
                  var r = this._vertexArrayObjects && void 0 !== this._vertexArrayObjects[e.id] && void 0 !== this._vertexArrayObjects[e.id][t.id],
                    o = this.getVAO(e, t),
                    a = this.getRenderContext()
                  if ((a.bindVertexArray(o), !r))
                    for (var s = 0; s < i.attributes.length; ++s) {
                      var l = i.attributes[s]
                      a.bindBuffer(a.ARRAY_BUFFER, l.buffer),
                        a.enableVertexAttribArray(l.index),
                        a.vertexAttribPointer(l.index, l.nrComponents, a.FLOAT, !1, l.bufferStride, l.bufferOffset),
                        a.vertexAttribDivisor(l.index, 1)
                    }
                  e.hasIndices() ? a.drawElementsInstanced(t.drawType, e.indices.length, e.indexType, 0, n) : a.drawArraysInstanced(t.drawType, 0, e.getNumVertices(), n)
                },
              },
              {
                key: "destruct",
                value: function () {
                  if (!this.isDestructed) {
                    if ((mr.log("RendererWebGL2: destruct"), this._vertexArrayObjects))
                      for (var e in this._vertexArrayObjects)
                        for (var t = 0; t < this._vertexArrayObjects[e].length; ++t) this.getRenderContext().deleteVertexArray(this._vertexArrayObjects[e][t])
                    Mi()(X()(n.prototype), "destruct", this).call(this)
                  }
                },
              },
            ]),
            n
          )
        })(ao),
        Oo = (function () {
          function e() {
            F()(this, e)
          }
          return (
            V()(e, null, [
              {
                key: "checkFloatCompatibility",
                value: function (t, n) {
                  if (!t.extensionManager.texture_float)
                    if (t.extensionManager.texture_half_float) {
                      if (n === e.RGB_FLOAT) return e.RGB_HALF_FLOAT
                      if (n === e.RGBA_FLOAT) return e.RGBA_HALF_FLOAT
                    } else console.log("Texture: setFormatType: not supported: ", n)
                  return n
                },
              },
              {
                key: "checkHalfFloatCompatibility",
                value: function (t, n) {
                  if (!t.extensionManager.texture_half_float)
                    if (t.extensionManager.texture_float) {
                      if (n === e.RGB_HALF_FLOAT) return e.RGB_FLOAT
                      if (n === e.RGBA_HALF_FLOAT) return e.RGBA_FLOAT
                    } else console.log("Texture: setFormatType: not supported: ", n)
                  return n
                },
              },
              {
                key: "validateFormatType",
                value: function (t, n) {
                  switch (n) {
                    case e.RGB_FLOAT:
                      n = this.checkFloatCompatibility(t, n)
                    case e.RGBA_FLOAT:
                      n = this.checkFloatCompatibility(t, n)
                    case e.RGBA_HALF_FLOAT:
                      n = this.checkHalfFloatCompatibility(t, n)
                    case e.RGB_HALF_FLOAT:
                      n = this.checkHalfFloatCompatibility(t, n)
                  }
                  return n
                },
              },
              {
                key: "getFormat",
                value: function (t, n) {
                  switch (n) {
                    case e.RGBA_UNSIGNED_BYTE:
                      return Rr.RGBA
                    case e.RGB_UNSIGNED_BYTE:
                    case e.RGB_FLOAT:
                      return Rr.RGB
                    case e.RGBA_FLOAT:
                    case e.RGBA_HALF_FLOAT:
                      return Rr.RGBA
                    case e.RGB_HALF_FLOAT:
                      return Rr.RGB
                    case e.LUMINANCE_UNSIGNED_BYTE:
                      return Rr.LUMINANCE
                    case e.LUMINANCE_FLOAT:
                      return t instanceof Po ? Nr.RED : Rr.LUMINANCE
                    case e.DEPTH_UINTSHORT:
                    case e.DEPTH_FLOAT:
                      return Rr.DEPTH_COMPONENT
                    default:
                      return mr.error("can not yet get format for formatType: ", n), -1
                  }
                },
              },
              {
                key: "getType",
                value: function (t, n) {
                  switch (n) {
                    case e.RGBA_UNSIGNED_BYTE:
                    case e.RGB_UNSIGNED_BYTE:
                      return Rr.UNSIGNED_BYTE
                    case e.RGBA_FLOAT:
                    case e.RGB_FLOAT:
                      return Rr.FLOAT
                    case e.RGBA_HALF_FLOAT:
                    case e.RGB_HALF_FLOAT:
                      return e.getHalfFloatType(t)
                    case e.LUMINANCE_UNSIGNED_BYTE:
                      return Rr.UNSIGNED_BYTE
                    case e.LUMINANCE_FLOAT:
                      return Rr.FLOAT
                    case e.DEPTH_UINTSHORT:
                      return Rr.UNSIGNED_SHORT
                    case e.DEPTH_FLOAT:
                      return Rr.FLOAT
                    default:
                      return mr.error("can not yet get type for formatType: ", n), -1
                  }
                },
              },
              {
                key: "getHalfFloatType",
                value: function (e) {
                  var t = e.extensionManager.texture_half_float
                  return t ? t.HALF_FLOAT_OES : -1
                },
              },
              {
                key: "getInternalFormat",
                value: function (t) {
                  switch (t) {
                    case e.RGBA_UNSIGNED_BYTE:
                      return Nr.RGBA8
                    case e.RGB_UNSIGNED_BYTE:
                      return Nr.RGB8
                    case e.RGBA_FLOAT:
                      return Nr.RGBA32F
                    case e.RGB_FLOAT:
                      return Nr.RGB32F
                    case e.RGBA_HALF_FLOAT:
                      return Nr.RGBA16F
                    case e.RGB_HALF_FLOAT:
                      return Nr.RGB16F
                    case e.LUMINANCE_UNSIGNED_BYTE:
                      return Nr.R8
                    case e.LUMINANCE_FLOAT:
                      return Nr.R32F
                    case e.DEPTH_UINTSHORT:
                      return Nr.DEPTH_COMPONENT24
                    case e.DEPTH_FLOAT:
                      return Nr.DEPTH_COMPONENT32F
                    default:
                      return mr.error("can not yet get type for formatType: ", t), -1
                  }
                },
              },
              {
                key: "getBytesPerPixel",
                value: function (t) {
                  switch (t) {
                    case e.RGBA_UNSIGNED_BYTE:
                      return 4
                    case e.RGB_UNSIGNED_BYTE:
                      return 3
                    case e.RGB_FLOAT:
                      return 12
                    case e.RGBA_FLOAT:
                      return 16
                    case e.RGBA_HALF_FLOAT:
                      return 8
                    case e.RGB_HALF_FLOAT:
                      return 6
                    case e.LUMINANCE_UNSIGNED_BYTE:
                      return 1
                    case e.LUMINANCE_FLOAT:
                      return 4
                    case e.DEPTH_UINTSHORT:
                      return 2
                    case e.DEPTH_FLOAT:
                    default:
                      return 4
                  }
                },
              },
            ]),
            e
          )
        })()
      function Mo(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ("function" === typeof Proxy) return !0
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var n,
            i = X()(e)
          if (t) {
            var r = X()(this).constructor
            n = Reflect.construct(i, arguments, r)
          } else n = i.apply(this, arguments)
          return j()(this, n)
        }
      }
      function Io(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ("function" === typeof Proxy) return !0
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var n,
            i = X()(e)
          if (t) {
            var r = X()(this).constructor
            n = Reflect.construct(i, arguments, r)
          } else n = i.apply(this, arguments)
          return j()(this, n)
        }
      }
      ;(Oo.ALPHA_UNSIGNED_BYTE = "ALPHA UNSIGNED_BYTE"),
        (Oo.ALPHA_FLOAT = "ALPHA FLOAT"),
        (Oo.RGBA_UNSIGNED_BYTE = "RGBA UNSIGNED_BYTE"),
        (Oo.RGBA_FLOAT = "RGBA FLOAT"),
        (Oo.RGBA_HALF_FLOAT = "RGBA HALF_FLOAT"),
        (Oo.RGB_HALF_FLOAT = "RGB HALF_FLOAT"),
        (Oo.RGB_UNSIGNED_BYTE = "RGB UNSIGNED_BYTE"),
        (Oo.RGB_FLOAT = "RGB_FLOAT"),
        (Oo.LUMINANCE_UNSIGNED_BYTE = "LUMINANCE UNSIGNED_BYTE"),
        (Oo.LUMINANCE_FLOAT = "LUMINANCE FLOAT"),
        (Oo.DEPTH_UINTSHORT = "DEPTH_UINTSHORT"),
        (Oo.DEPTH_FLOAT = "DEPTH_FLOAT")
      var Lo = (function (e) {
        z()(n, e)
        var t = Io(n)
        function n(e) {
          var i,
            r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            o = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
            a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Oo.RGBA_UNSIGNED_BYTE
          return (
            F()(this, n),
            ((i = t.call(this, e)).hasMips = !1),
            (i._createMips = r),
            (i._flipY = o),
            (i._format = Oo.getFormat(i.renderer, a)),
            (i._type = Oo.getType(i.renderer, a)),
            i
          )
        }
        return (
          V()(n, [
            {
              key: "bind",
              value: function () {
                this.renderer.context.activeTexture(Rr.TEXTURE0 + this.renderer.maxParams.MAX_TEXTURE_IMAGE_UNITS - 1),
                  this.renderer.context.bindTexture(Rr.TEXTURE_CUBE_MAP, this.textureGL)
              },
            },
            {
              key: "bindToSlot",
              value: function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
                this.renderer.renderState.bindCubeTextureToSlot(this.textureGL, e)
              },
            },
            {
              key: "setImage",
              value: function (e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                  i = this.renderer.context
                this.bind(), i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, this._flipY ? 1 : 0)
                var r = [
                  Rr.TEXTURE_CUBE_MAP_POSITIVE_X,
                  Rr.TEXTURE_CUBE_MAP_NEGATIVE_X,
                  Rr.TEXTURE_CUBE_MAP_POSITIVE_Y,
                  Rr.TEXTURE_CUBE_MAP_NEGATIVE_Y,
                  Rr.TEXTURE_CUBE_MAP_POSITIVE_Z,
                  Rr.TEXTURE_CUBE_MAP_NEGATIVE_Z,
                ]
                this.setWrapping(),
                  this.setFilteringLinear(),
                  i.pixelStorei(Rr.UNPACK_COLORSPACE_CONVERSION_WEBGL, Rr.NONE),
                  i.texImage2D(r[t], n, this._format, this._format, this._type, e),
                  0 === n && this._createMips && this.generateMipMaps()
              },
            },
            {
              key: "setImages",
              value: function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                  n = this.renderer.context
                this.bind(), n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL, this._flipY ? 1 : 0)
                var i = [
                  Rr.TEXTURE_CUBE_MAP_POSITIVE_X,
                  Rr.TEXTURE_CUBE_MAP_NEGATIVE_X,
                  Rr.TEXTURE_CUBE_MAP_POSITIVE_Y,
                  Rr.TEXTURE_CUBE_MAP_NEGATIVE_Y,
                  Rr.TEXTURE_CUBE_MAP_POSITIVE_Z,
                  Rr.TEXTURE_CUBE_MAP_NEGATIVE_Z,
                ]
                this.setWrapping(), this.setFilteringLinear(), n.pixelStorei(Rr.UNPACK_COLORSPACE_CONVERSION_WEBGL, Rr.NONE)
                for (var r = 0; r < i.length; ++r)
                  6 === e.length ? n.texImage2D(i[r], t, this._format, this._format, this._type, e[r]) : n.texImage2D(i[r], t, this._format, this._format, this._type, e[0])
                0 === t && this._createMips && this.generateMipMaps()
              },
            },
            {
              key: "setWrapping",
              value: function () {
                var e = this.renderer.context
                this.bind(), e.texParameteri(e.TEXTURE_CUBE_MAP, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_CUBE_MAP, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE)
              },
            },
            {
              key: "setFilteringLinear",
              value: function () {
                var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                  t = this.renderer.context
                this.bind(),
                  e
                    ? this.hasMips
                      ? (t.texParameteri(Rr.TEXTURE_CUBE_MAP, Rr.TEXTURE_MIN_FILTER, Rr.LINEAR_MIPMAP_LINEAR),
                        t.texParameteri(Rr.TEXTURE_CUBE_MAP, Rr.TEXTURE_MAG_FILTER, Rr.LINEAR))
                      : (t.texParameteri(Rr.TEXTURE_CUBE_MAP, Rr.TEXTURE_MIN_FILTER, Rr.LINEAR), t.texParameteri(Rr.TEXTURE_CUBE_MAP, Rr.TEXTURE_MAG_FILTER, Rr.LINEAR))
                    : (t.texParameteri(Rr.TEXTURE_CUBE_MAP, Rr.TEXTURE_MIN_FILTER, Rr.NEAREST), t.texParameteri(Rr.TEXTURE_CUBE_MAP, Rr.TEXTURE_MAG_FILTER, Rr.NEAREST))
              },
            },
            {
              key: "setFilterAnisotropic",
              value: function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 4
                if ((this.setFilteringLinear(), this.renderer.extensionManager.filter_anisotropic)) {
                  var t = this.renderer.context
                  ;(e = Math.min(this.renderer.extensionManager.maxAnisotropy, e)),
                    t.texParameterf(t.TEXTURE_CUBE_MAP, this.renderer.extensionManager.filter_anisotropic.TEXTURE_MAX_ANISOTROPY_EXT, e)
                }
              },
            },
            {
              key: "setData",
              value: function (e, t, n, i) {
                var r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Oo.RGBA_UNSIGNED_BYTE,
                  o = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
                  a = this.renderer.context
                this.bind(), a.pixelStorei(Rr.UNPACK_ALIGNMENT, 1), a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL, o ? 1 : 0), a.pixelStorei(Rr.UNPACK_COLORSPACE_CONVERSION_WEBGL, Rr.NONE)
                var s = Oo.getFormat(this.renderer, r),
                  l = Oo.getType(this.renderer, r)
                this.renderer instanceof lo
                  ? a.texImage2D(Rr.TEXTURE_CUBE_MAP_POSITIVE_X + e, 0, this._format, n, i, 0, s, l, t)
                  : this.renderer instanceof Po && a.texImage2D(Rr.TEXTURE_CUBE_MAP_POSITIVE_X + e, 0, Oo.getInternalFormat(r), n, i, 0, s, l, t)
              },
            },
            {
              key: "initTextures",
              value: function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 256,
                  t = arguments.length > 1 ? arguments[1] : void 0,
                  n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                  i = this.renderer.context
                this.bind(), (this._createMips = n), i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, this._flipY ? 1 : 0)
                var r = [
                  Rr.TEXTURE_CUBE_MAP_POSITIVE_X,
                  Rr.TEXTURE_CUBE_MAP_NEGATIVE_X,
                  Rr.TEXTURE_CUBE_MAP_POSITIVE_Y,
                  Rr.TEXTURE_CUBE_MAP_NEGATIVE_Y,
                  Rr.TEXTURE_CUBE_MAP_POSITIVE_Z,
                  Rr.TEXTURE_CUBE_MAP_NEGATIVE_Z,
                ]
                if (
                  ((t = Oo.validateFormatType(this.renderer, t)),
                  (this._format = Oo.getFormat(this.renderer, t)),
                  (this._type = Oo.getType(this.renderer, t)),
                  this.setWrapping(),
                  this.setFilteringLinear(),
                  i.pixelStorei(Rr.UNPACK_COLORSPACE_CONVERSION_WEBGL, Rr.NONE),
                  n)
                )
                  for (var o = 0; e >= 1; ) {
                    for (var a = this.createImageData(e), s = 0; s < r.length; ++s) i.texImage2D(r[s], o, this._format, this._format, this._type, a)
                    o++, (e /= 2), (this.hasMips = !0)
                  }
                else for (var l = this.createImageData(e), u = 0; u < r.length; ++u) i.texImage2D(r[u], 0, this._format, this._format, this._type, l)
              },
            },
            {
              key: "generateMipMaps",
              value: function () {
                this.bind()
                var e = this.renderer.context
                e.generateMipmap(e.TEXTURE_CUBE_MAP), (this.hasMips = !0), this.setFilteringLinear()
              },
            },
            {
              key: "createImageData",
              value: function (e) {
                var t = document.createElement("canvas")
                ;(t.style.width = e + "px"), (t.style.height = e + "px"), (t.width = e), (t.height = e)
                var n = t.getContext("2d")
                n.beginPath()
                for (var i = 0; i < e; i += 64) n.moveTo(i, 0), n.lineTo(i, e), n.moveTo(0, i), n.lineTo(e, i)
                return (n.strokeStyle = "#ffffff"), n.stroke(), t
              },
            },
            {
              key: "destruct",
              value: function () {
                Mi()(X()(n.prototype), "destruct", this).call(this)
              },
            },
          ]),
          n
        )
      })(
        (function (e) {
          z()(n, e)
          var t = Mo(n)
          function n(e) {
            var i
            F()(this, n), ((i = t.call(this)).renderer = e), i.renderer.textureCount++
            var r = i.renderer.context
            return (i.textureGL = r.createTexture()), i
          }
          return (
            V()(n, [
              {
                key: "bindToSlot",
                value: function () {},
              },
              {
                key: "resize",
                value: function (e, t, n) {},
              },
              {
                key: "destruct",
                value: function () {
                  if (!this.isDestructed) {
                    var e = this.renderer.context
                    this.textureGL && e.deleteTexture(this.textureGL)
                  }
                  Mi()(X()(n.prototype), "destruct", this).call(this)
                },
              },
            ]),
            n
          )
        })(Ii)
      )
      function No(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ("function" === typeof Proxy) return !0
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var n,
            i = X()(e)
          if (t) {
            var r = X()(this).constructor
            n = Reflect.construct(i, arguments, r)
          } else n = i.apply(this, arguments)
          return j()(this, n)
        }
      }
      var Bo = (function (e) {
        z()(n, e)
        var t = No(n)
        function n(e) {
          var i,
            r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 256,
            o = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
            a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Oo.RGBA_UNSIGNED_BYTE
          F()(this, n),
            ((i = t.call(this, e, !1))._isDirty = !0),
            (i._offset = 0),
            (i._yAngle = 0),
            (i.ANGLES = [
              new Xi(0, 3 + i._offset, 2),
              new Xi(0, 1 + i._offset, 2),
              new Xi(1, 2 + i._yAngle + i._offset, 2),
              new Xi(-1, 2 + i._yAngle + i._offset, 2),
              new Xi(2, 0 + i._offset, 0),
              new Xi(2, 2 + i._offset, 0),
            ]),
            (i._renderer = e),
            (i._resolution = r),
            (i.pivot = new go()),
            (i._cameras = [])
          for (var s = 0; s < 6; s++)
            (i._cameras[s] = new To(90, 0.01, 100)), i._cameras[s].projection.setAspect(1), i._cameras[s].view.transform.setParent(i.pivot), i.ANGLES[s].multiplyScalar(90)
          i.initTextures(r, a)
          var l = i.renderer.context
          return (
            (i._frameBuffer = l.createFramebuffer()),
            l.bindFramebuffer(l.FRAMEBUFFER, i._frameBuffer),
            l.framebufferTexture2D(Rr.FRAMEBUFFER, Rr.COLOR_ATTACHMENT0, Rr.TEXTURE_CUBE_MAP_POSITIVE_X + 0, i.textureGL, 0),
            o && ((i._depthBuffer = i.createDepthBuffer(r, r)), mr.log("_depthBuffer", i._depthBuffer)),
            i.testBuffer(),
            i
          )
        }
        return (
          V()(n, [
            {
              key: "testBuffer",
              value: function () {
                var e = this.renderer.context
                e.bindFramebuffer(e.FRAMEBUFFER, this._frameBuffer)
                var t = e.checkFramebufferStatus(e.FRAMEBUFFER)
                switch (t) {
                  case e.FRAMEBUFFER_COMPLETE:
                    return !0
                  case e.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:
                    return mr.error("RenderTextureCube: Incomplete framebuffer: FRAMEBUFFER_INCOMPLETE_ATTACHMENT"), !1
                  case e.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:
                    return mr.error("RenderTextureCube: Incomplete framebuffer: FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT"), !1
                  case e.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:
                    return mr.error("RenderTextureCube: Incomplete framebuffer: FRAMEBUFFER_INCOMPLETE_DIMENSIONS"), !1
                  case e.FRAMEBUFFER_UNSUPPORTED:
                    return mr.error("RenderTextureCube: Incomplete framebuffer: FRAMEBUFFER_UNSUPPORTED"), !1
                  default:
                    return mr.error("RenderTextureCube: Incomplete framebuffer: " + t), !1
                }
              },
            },
            {
              key: "createDepthBuffer",
              value: function (e, t) {
                var n = this.renderer.context,
                  i = n.createRenderbuffer()
                return n.bindRenderbuffer(n.RENDERBUFFER, i), n.renderbufferStorage(n.RENDERBUFFER, n.DEPTH_COMPONENT16, e, t), i
              },
            },
            {
              key: "updateViews",
              value: function () {
                for (var e = 0; e < 6; e++) this._cameras[e].view.transform.setEulerDegrees(this.ANGLES[e])
                this._isDirty = !1
              },
            },
            {
              key: "setPosition",
              value: function (e) {
                this.pivot.setPosition(e), (this._isDirty = !0)
              },
            },
            {
              key: "setPositionValues",
              value: function (e, t, n) {
                this.pivot.setPositionValues(e, t, n), (this._isDirty = !0)
              },
            },
            {
              key: "renderToTexture",
              value: function (e) {
                this._isDirty && this.updateViews()
                var t = this.renderer.context
                this.renderer.setRenderSize(this._resolution, this._resolution),
                  t.bindFramebuffer(t.FRAMEBUFFER, this._frameBuffer),
                  this._depthBuffer && (this.renderer.renderState.setDepthMask(!0), t.framebufferRenderbuffer(t.FRAMEBUFFER, t.DEPTH_ATTACHMENT, t.RENDERBUFFER, this._depthBuffer))
                for (var n = 0; n < 6; n++)
                  t.framebufferTexture2D(Rr.FRAMEBUFFER, Rr.COLOR_ATTACHMENT0, Rr.TEXTURE_CUBE_MAP_POSITIVE_X + n, this.textureGL, 0),
                    t.clear(Rr.COLOR_BUFFER_BIT | Rr.DEPTH_BUFFER_BIT),
                    e.call(this, this._cameras[n])
                this._renderer.unSetRenderTexture()
              },
            },
          ]),
          n
        )
      })(Lo)
      function Do(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ("function" === typeof Proxy) return !0
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var n,
            i = X()(e)
          if (t) {
            var r = X()(this).constructor
            n = Reflect.construct(i, arguments, r)
          } else n = i.apply(this, arguments)
          return j()(this, n)
        }
      }
      var Fo = (function (e) {
        z()(n, e)
        var t = Do(n)
        function n(e, i) {
          var r,
            o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1024,
            a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Oo.RGB_UNSIGNED_BYTE,
            s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 6
          return (
            F()(this, n),
            ((r = t.call(this))._renderer = e),
            (r._renderTexture = new Bo(r._renderer, o, !1, a)),
            (r._material = new Vr(e, i, "perlinCube")),
            r._material.addShaderDefines(["OCTAVES ", s]),
            r._material.setCullingDisabled(),
            (r._mesh = new So(e, 64, 48)),
            r
          )
        }
        return (
          V()(n, [
            {
              key: "init",
              value: function (e) {
                var t = this,
                  n = e.addGroup("noise", this._material)
                n.addShaderParamFloat("uH", 0.8, 0.5, 1),
                  n.addShaderParamFloat("uSpatialFrequency", 6),
                  n.addShaderParamFloat("uTemporalFrequency", 0.1),
                  n.addShaderParamFloat("uContrast", 0.25),
                  n.addShaderParamFloat("uFlatten", 0.72),
                  n.addButton("generate", function () {
                    return t.generate()
                  }),
                  this.generate()
              },
            },
            {
              key: "generate",
              value: function () {
                var e = this
                this._material.setFloat("uTime", Jr.getInstance().time),
                  this._renderTexture.renderToTexture(function (t) {
                    return e.drawScene(t)
                  })
              },
            },
            {
              key: "drawScene",
              value: function (e) {
                this._material.setMatrix("uViewProjection", e.getViewProjection()), this._renderer.draw(this._mesh, this._material)
              },
            },
            {
              key: "output",
              get: function () {
                return this._renderTexture
              },
            },
            {
              key: "destruct",
              value: function () {
                this.isDestructed || (this._material.destruct(), this._mesh.destruct(), this._renderTexture.destruct()), Mi()(X()(n.prototype), "destruct", this).call(this)
              },
            },
          ]),
          n
        )
      })(Ii)
      function Uo(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ("function" === typeof Proxy) return !0
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var n,
            i = X()(e)
          if (t) {
            var r = X()(this).constructor
            n = Reflect.construct(i, arguments, r)
          } else n = i.apply(this, arguments)
          return j()(this, n)
        }
      }
      var Vo = (function (e) {
        z()(n, e)
        var t = Uo(n)
        function n(e, i, r) {
          var o
          return (
            F()(this, n),
            ((o = t.call(this))._renderer = e),
            (o._material = new Vr(e, i, "sunSphere")),
            o._material.setAlphaBlending(),
            (o._material.depthWrite = !0),
            (o._mesh = new So(e, r ? 48 : 96, r ? 24 : 48)),
            (o._perlinCube = new Fo(o._renderer, i, r ? 256 : 1024)),
            o
          )
        }
        return (
          V()(n, [
            {
              key: "init",
              value: function (e) {
                var t = e.addGroup("sunSphere", this._material)
                t.addShaderParamFloat("uBrightness", 0.6, 0, 2),
                  t.addShaderParamFloat("uTint", 0.26),
                  t.addShaderParamFloat("uFresnelPower", 1, 0, 5),
                  t.addShaderParamFloat("uFresnelInfluence", 1.2, 0, 3),
                  t.addShaderParamFloat("uBase", 4, 0, 8),
                  t.addShaderParamFloat("uBrightnessOffset", 1, 0, 2),
                  this._perlinCube.init(e),
                  this._material.setTexture("uPerlinCube", this._perlinCube.output)
              },
            },
            {
              key: "draw",
              value: function (e, t, n, i, r) {
                this._material.setFloat("uTime", Jr.getInstance().time),
                  this._material.setVector3("uCamPos", e.getWorldPosition()),
                  this._material.setMatrix("uModel", t),
                  this._material.setMatrix("uViewProjection", e.getViewProjection()),
                  this._material.setFloat("uVisibility", n),
                  this._material.setFloat("uDirection", i),
                  this._material.setVector3("uLightView", r),
                  this._renderer.draw(this._mesh, this._material)
              },
            },
            {
              key: "destruct",
              value: function () {
                this.isDestructed || (this._material.destruct(), this._mesh.destruct(), this._perlinCube.destruct()), Mi()(X()(n.prototype), "destruct", this).call(this)
              },
            },
          ]),
          n
        )
      })(Ii)
      function Ho(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ("function" === typeof Proxy) return !0
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var n,
            i = X()(e)
          if (t) {
            var r = X()(this).constructor
            n = Reflect.construct(i, arguments, r)
          } else n = i.apply(this, arguments)
          return j()(this, n)
        }
      }
      var zo = (function (e) {
        z()(n, e)
        var t = Ho(n)
        function n(e, i, r) {
          var o
          return (
            F()(this, n),
            ((o = t.call(this))._lineLength = 16),
            (o._lineCount = 2047),
            (o._lowres = !1),
            (o._renderer = e),
            (o._material = new Vr(e, i, "sunFlares")),
            o._material.setCullingDisabled(),
            o._material.setPreMultipliedAlphaBlending(),
            r && (o._lineCount = 1024),
            r && (o._lineLength = 8),
            (o._lowres = r),
            (o._mesh = o.createRibbons(o._lineCount, o._lineLength)),
            o
          )
        }
        return (
          V()(n, [
            {
              key: "createRibbons",
              value: function (e, t) {
                var n = new Float32Array(e * t * 2 * 3),
                  i = new Float32Array(e * t * 2 * 3),
                  r = new Float32Array(e * t * 2 * 3),
                  o = new Float32Array(e * t * 2 * 4),
                  a = new Uint16Array(e * (t - 1) * 2 * 3),
                  s = 0,
                  l = 0,
                  u = 0,
                  c = 0,
                  h = 0,
                  f = new Xi(),
                  d = new Xi()
                f.randomizeSphere()
                for (var p = new Xi(), v = new Xi(), g = new Xi(), m = Math.random(), _ = Math.random(), y = 0; y < e; y++) {
                  ;(Math.random() < 0.025 || 0 == y) &&
                    (d.randomizeSphere(), d.normalize(), v.copy(d), g.randomizeSphere(), g.multiplyScalar(0.4), v.add(g), v.normalize(), (m = Math.random()), (_ = Math.random())),
                    f.copy(d),
                    g.randomizeSphere(),
                    g.multiplyScalar(0.02),
                    f.add(g),
                    f.normalize(),
                    p.copy(v),
                    g.randomizeSphere(),
                    g.multiplyScalar(0.075),
                    p.add(g),
                    p.normalize()
                  for (var T = [m, _, Math.random(), Math.random()], E = 0; E < t; E++) {
                    for (var b = 2 * (y * t + E), A = 0; A <= 1; A++) {
                      ;(n[s++] = (E + 0.5) / t), (n[s++] = (y + 0.5) / e), (n[s++] = 2 * A - 1)
                      for (var R = 0; R < 4; R++) o[l++] = T[R]
                      ;(i[c++] = f.x), (i[c++] = f.y), (i[c++] = f.z), (r[h++] = p.x), (r[h++] = p.y), (r[h++] = p.z)
                    }
                    E < t - 1 && ((a[u++] = b + 0), (a[u++] = b + 1), (a[u++] = b + 2), (a[u++] = b + 2), (a[u++] = b + 1), (a[u++] = b + 3))
                  }
                }
                var w = new Qr(this._renderer)
                return w.setAttribute("aPos", 3, n), w.setAttribute("aPos0", 3, i), w.setAttribute("aPos1", 3, r), w.setAttribute("aWireRandom", 4, o), w.setIndices(a), w
              },
            },
            {
              key: "init",
              value: function (e) {
                var t = e.addGroup("loops", this._material)
                t.addShaderParamFloat("uWidth", this._lowres ? 0.01 : 0.005, 0, 0.05),
                  t.addShaderParamFloat("uAmp", 0.5),
                  t.addShaderParamFloat("uOpacity", this._lowres ? 0.3 : 0.2),
                  t.addShaderParamFloat("uAlphaBlended", 0.65),
                  t.addShaderParamFloat("uHueSpread", 0.16),
                  t.addShaderParamFloat("uHue", 0),
                  t.addShaderParamFloat("uNoiseFrequency", 4),
                  t.addShaderParamFloat("uNoiseAmplitude", 0.2),
                  this._material.setVector4("uResolution", new Tr(this._lineLength, this._lineCount, 1 / this._lineLength, 1 / this._lineCount)),
                  this._material.setFloat("uLineLength", this._lineLength)
              },
            },
            {
              key: "draw",
              value: function (e, t, n, i, r) {
                this._material.setMatrix("uViewProjection", t),
                  this._material.setFloat("uTime", Jr.getInstance().time),
                  this._material.setVector3("uCamPos", e.getWorldPosition()),
                  this._material.setFloat("uDirection", i),
                  this._material.setFloat("uVisibility", n),
                  this._material.setVector3("uLightView", r),
                  this._renderer.draw(this._mesh, this._material)
              },
            },
            {
              key: "destruct",
              value: function () {
                this.isDestructed || (this._material.destruct(), this._mesh.destruct()), Mi()(X()(n.prototype), "destruct", this).call(this)
              },
            },
          ]),
          n
        )
      })(Ii)
      function $o(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ("function" === typeof Proxy) return !0
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var n,
            i = X()(e)
          if (t) {
            var r = X()(this).constructor
            n = Reflect.construct(i, arguments, r)
          } else n = i.apply(this, arguments)
          return j()(this, n)
        }
      }
      var jo = (function (e) {
        z()(n, e)
        var t = $o(n)
        function n(e, i, r) {
          var o
          return (
            F()(this, n),
            ((o = t.call(this))._lineLength = 8),
            (o._lineCount = 4095),
            (o._lowres = !1),
            (o._renderer = e),
            (o._material = new Vr(e, i, "sunRays")),
            o._material.setCullingDisabled(),
            o._material.setPreMultipliedAlphaBlending(),
            r && (o._lineCount = 1024),
            r && (o._lineLength = 4),
            (o._lowres = r),
            (o._mesh = o.createRibbons(o._lineCount, o._lineLength)),
            o
          )
        }
        return (
          V()(n, [
            {
              key: "createRibbons",
              value: function (e, t) {
                var n = new Float32Array(e * t * 2 * 3),
                  i = new Float32Array(e * t * 2 * 3),
                  r = new Float32Array(e * t * 2 * 4),
                  o = new Uint16Array(e * (t - 1) * 2 * 3),
                  a = 0,
                  s = 0,
                  l = 0,
                  u = 0,
                  c = new Xi(),
                  h = new Xi()
                c.randomizeSphere()
                for (var f = new Xi(), d = Math.random(), p = Math.random(), v = 0; v < e; v++) {
                  ;(Math.random() < 0.1 || 0 == v) && (h.randomizeSphere(), h.normalize(), (d = Math.random()), (p = Math.random())),
                    c.copy(h),
                    f.randomizeSphere(),
                    f.multiplyScalar(0.025),
                    c.add(f),
                    c.normalize()
                  for (var g = [d, p, Math.random(), Math.random()], m = 0; m < t; m++) {
                    for (var _ = 2 * (v * t + m), y = 0; y <= 1; y++) {
                      ;(n[a++] = (m + 0.5) / t), (n[a++] = (v + 0.5) / e), (n[a++] = 2 * y - 1)
                      for (var T = 0; T < 4; T++) r[s++] = g[T]
                      ;(i[u++] = c.x), (i[u++] = c.y), (i[u++] = c.z)
                    }
                    m < t - 1 && ((o[l++] = _ + 0), (o[l++] = _ + 1), (o[l++] = _ + 2), (o[l++] = _ + 2), (o[l++] = _ + 1), (o[l++] = _ + 3))
                  }
                }
                var E = new Qr(this._renderer)
                return E.setAttribute("aPos", 3, n), E.setAttribute("aPos0", 3, i), E.setAttribute("aWireRandom", 4, r), E.setIndices(o), E
              },
            },
            {
              key: "init",
              value: function (e) {
                var t = e.addGroup("rays", this._material)
                t.addShaderParamFloat("uWidth", this._lowres ? 0.05 : 0.03, 0, 0.05),
                  t.addShaderParamFloat("uLength", 0.2),
                  t.addShaderParamFloat("uOpacity", this._lowres ? 0.05 : 0.03),
                  t.addShaderParamFloat("uNoiseFrequency", 8),
                  t.addShaderParamFloat("uNoiseAmplitude", 0.2),
                  t.addShaderParamFloat("uAlphaBlended", 0.3),
                  t.addShaderParamFloat("uHueSpread", 0.2),
                  t.addShaderParamFloat("uHue", 0.2),
                  this._material.setVector4("uResolution", new Tr(this._lineLength, this._lineCount, 1 / this._lineLength, 1 / this._lineCount))
              },
            },
            {
              key: "draw",
              value: function (e, t, n, i, r) {
                this._material.setMatrix("uViewProjection", t),
                  this._material.setFloat("uTime", Jr.getInstance().time),
                  this._material.setVector3("uCamPos", e.getWorldPosition()),
                  this._material.setFloat("uDirection", i),
                  this._material.setFloat("uVisibility", n),
                  this._material.setVector3("uLightView", r),
                  this._renderer.draw(this._mesh, this._material)
              },
            },
            {
              key: "destruct",
              value: function () {
                this.isDestructed || (this._material.destruct(), this._mesh.destruct()), Mi()(X()(n.prototype), "destruct", this).call(this)
              },
            },
          ]),
          n
        )
      })(Ii)
      function Go(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ("function" === typeof Proxy) return !0
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var n,
            i = X()(e)
          if (t) {
            var r = X()(this).constructor
            n = Reflect.construct(i, arguments, r)
          } else n = i.apply(this, arguments)
          return j()(this, n)
        }
      }
      var Xo = (function (e) {
        z()(n, e)
        var t = Go(n)
        function n(e, i) {
          var r
          return (
            F()(this, n),
            ((r = t.call(this))._lineLength = 128),
            (r._renderer = e),
            (r._material = new Vr(e, i, "glow")),
            r._material.setCullingDisabled(),
            r._material.setPreMultipliedAlphaBlending(),
            (r._mesh = r.createDisc(r._lineLength)),
            r
          )
        }
        return (
          V()(n, [
            {
              key: "createDisc",
              value: function (e) {
                for (var t = 2 * e, n = new Float32Array(3 * t), i = new Uint16Array(2 * e * 3), r = 0, o = 0, a = 0; a < e; a++) {
                  for (var s = (a / e) * Math.PI * 2, l = 0; l <= 1; l++) (n[r++] = Math.sin(s)), (n[r++] = Math.cos(s)), (n[r++] = l)
                  ;(i[o++] = 2 * a + 0), (i[o++] = 2 * a + 1), (i[o++] = (2 * a + 2) % t), (i[o++] = (2 * a + 2) % t), (i[o++] = 2 * a + 1), (i[o++] = (2 * a + 3) % t)
                }
                var u = new Qr(this._renderer)
                return u.setAttribute("aPos", 3, n), u.setIndices(i), u
              },
            },
            {
              key: "init",
              value: function (e) {
                var t = e.addGroup("glow", this._material)
                t.addShaderParamFloat("uBrightness", 1.06, 0, 2),
                  t.addShaderParamFloat("uTint", 0.46),
                  t.addShaderParamFloat("uFalloffColor", 0.5),
                  t.addShaderParamFloat("uRadius", 0.3)
              },
            },
            {
              key: "draw",
              value: function (e, t, n, i, r) {
                this._material.setMatrix("uViewProjection", t),
                  this._material.setFloat("uTime", Jr.getInstance().time),
                  this._material.setVector3("uCamPos", e.getWorldPosition()),
                  this._material.setVector3("uCamUp", e.view.transform.getWorldUp()),
                  this._material.setFloat("uDirection", i),
                  this._material.setFloat("uVisibility", n),
                  this._material.setVector3("uLightView", r),
                  this._renderer.draw(this._mesh, this._material)
              },
            },
            {
              key: "destruct",
              value: function () {
                this.isDestructed || (this._material.destruct(), this._mesh.destruct()), Mi()(X()(n.prototype), "destruct", this).call(this)
              },
            },
          ]),
          n
        )
      })(Ii)
      function Wo(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ("function" === typeof Proxy) return !0
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var n,
            i = X()(e)
          if (t) {
            var r = X()(this).constructor
            n = Reflect.construct(i, arguments, r)
          } else n = i.apply(this, arguments)
          return j()(this, n)
        }
      }
      var Yo = (function (e) {
        z()(n, e)
        var t = Wo(n)
        function n(e) {
          var i
          return F()(this, n), ((i = t.call(this))._renderer = e), (i._transform = new go()), i
        }
        return (
          V()(n, [
            {
              key: "init",
              value: function (e) {},
            },
            {
              key: "draw",
              value: function (e, t, n, i, r) {},
            },
            {
              key: "transform",
              get: function () {
                return this._transform
              },
            },
            {
              key: "destruct",
              value: function () {
                this.isDestructed || this._transform.destruct(), Mi()(X()(n.prototype), "destruct", this).call(this)
              },
            },
          ]),
          n
        )
      })(Ii)
      function qo(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ("function" === typeof Proxy) return !0
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var n,
            i = X()(e)
          if (t) {
            var r = X()(this).constructor
            n = Reflect.construct(i, arguments, r)
          } else n = i.apply(this, arguments)
          return j()(this, n)
        }
      }
      var Ko = (function (e) {
        z()(n, e)
        var t = qo(n)
        function n(e, i, r) {
          var o
          return (
            F()(this, n),
            ((o = t.call(this, e))._mvp = ji.b.create()),
            (o._sunSphere = new Vo(o._renderer, i, r)),
            (o._sunFlares = new zo(o._renderer, i, r)),
            (o._sunRays = new jo(o._renderer, i, r)),
            (o._sunGlow = new Xo(o._renderer, i)),
            o
          )
        }
        return (
          V()(n, [
            {
              key: "init",
              value: function (e) {
                var t = e.addGroup("sun")
                this._sunSphere.init(t), this._sunFlares.init(t), this._sunRays.init(t), this._sunGlow.init(t)
              },
            },
            {
              key: "draw",
              value: function (e, t, n, i, r) {
                ji.b.mul(this._mvp, e.getViewProjection(), this._transform.getWorldMatrix()),
                  this._sunSphere.draw(e, this._transform.getWorldMatrix(), n, i, r),
                  this._sunGlow.draw(e, this._mvp, n, i, r),
                  this._sunFlares.draw(e, this._mvp, n, i, r),
                  this._sunRays.draw(e, this._mvp, n, i, r)
              },
            },
            {
              key: "destruct",
              value: function () {
                this._sunSphere.destruct(), this._sunFlares.destruct(), this._sunRays.destruct(), this._sunGlow.destruct(), Mi()(X()(n.prototype), "destruct", this).call(this)
              },
            },
          ]),
          n
        )
      })(Yo)
      function Zo(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ("function" === typeof Proxy) return !0
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var n,
            i = X()(e)
          if (t) {
            var r = X()(this).constructor
            n = Reflect.construct(i, arguments, r)
          } else n = i.apply(this, arguments)
          return j()(this, n)
        }
      }
      var Qo = (function (e) {
        z()(n, e)
        var t = Zo(n)
        function n(e, i, r, o) {
          var a,
            s = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
            l = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Oo.RGBA_UNSIGNED_BYTE
          return F()(this, n), ((a = t.call(this, e, o, s, l))._urls = r), i.add(Di()(a)), a
        }
        return (
          V()(n, [
            {
              key: "load",
              value: function (e) {
                var t = this
                jr.loadMultipleImages(this._urls, function (n) {
                  t.setImages(n), e.call(t)
                })
              },
            },
          ]),
          n
        )
      })(Lo)
      function Jo(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ("function" === typeof Proxy) return !0
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var n,
            i = X()(e)
          if (t) {
            var r = X()(this).constructor
            n = Reflect.construct(i, arguments, r)
          } else n = i.apply(this, arguments)
          return j()(this, n)
        }
      }
      var ea = (function (e) {
        z()(n, e)
        var t = Jo(n)
        function n(e, i, r) {
          var o
          return (
            F()(this, n),
            ((o = t.call(this, e))._material = new Vr(e, i, "moon")),
            o._material.setAlphaBlending(),
            (o._mesh = new So(e, r ? 48 : 96, r ? 24 : 48)),
            (o._texture = new Qo(o._renderer, i, o.getUrls("moon", r), !0, !0, Oo.LUMINANCE_UNSIGNED_BYTE)),
            o
          )
        }
        return (
          V()(n, [
            {
              key: "getUrls",
              value: function (e, t) {
                for (var n = [], i = t ? "256" : aa.fullRes, r = 0, o = ["left", "right", "bottom", "top", "front", "back"]; r < o.length; r++) {
                  var a = "./" + e + "/" + i + "/" + o[r] + "." + aa.imageExtension
                  n.push(oa(a))
                }
                return n
              },
            },
            {
              key: "init",
              value: function (e) {
                var t = e.addGroup("moon", this._material)
                this._material.setTexture("uTexture", this._texture), t.addShaderParamFloat("uFresnelPower", 4, 0, 5), t.addShaderParamFloat("uFresnelAmount", 1)
              },
            },
            {
              key: "draw",
              value: function (e, t, n, i, r) {
                this._material.setFloat("uDirection", i),
                  this._material.setFloat("uVisibility", n),
                  this._material.setVector3("uBackgroundColor", t),
                  this._material.setVector3("uCamPos", e.getWorldPosition()),
                  this._material.setMatrix("uModel", this._transform.getWorldMatrix()),
                  this._material.setMatrix("uViewProjection", e.getViewProjection()),
                  this._material.setVector3("uLightView", r),
                  this._renderer.draw(this._mesh, this._material)
              },
            },
            {
              key: "destruct",
              value: function () {
                this.isDestructed || (this._material.destruct(), this._mesh.destruct(), this._texture.destruct()), Mi()(X()(n.prototype), "destruct", this).call(this)
              },
            },
          ]),
          n
        )
      })(Yo)
      function ta(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ("function" === typeof Proxy) return !0
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var n,
            i = X()(e)
          if (t) {
            var r = X()(this).constructor
            n = Reflect.construct(i, arguments, r)
          } else n = i.apply(this, arguments)
          return j()(this, n)
        }
      }
      var na = (function (e) {
          z()(n, e)
          var t = ta(n)
          function n(e, i, r) {
            var o
            return (
              F()(this, n),
              ((o = t.call(this, e))._sunDir = new Xi()),
              (o._sunSpeed = 0.1),
              (o._sunPhase = 0),
              (o._material = new Vr(e, i, "earth")),
              (o._mesh = new So(e, r ? 48 : 96, r ? 24 : 48)),
              o._transform.setEulerDegreesValues(23.5, 0, 0),
              (o._texture = new Qo(o._renderer, i, o.getUrls("earth", r), !0, !0, Oo.RGB_UNSIGNED_BYTE)),
              (o._cloudsTexture = new Qo(o._renderer, i, o.getUrls("clouds", r), !0, !0, Oo.LUMINANCE_UNSIGNED_BYTE)),
              (o._waterTexture = new Qo(o._renderer, i, o.getUrls("water", r), !0, !0, Oo.LUMINANCE_UNSIGNED_BYTE)),
              o
            )
          }
          return (
            V()(n, [
              {
                key: "getUrls",
                value: function (e, t) {
                  for (var n = [], i = t ? "256" : aa.fullRes, r = 0, o = ["left", "right", "bottom", "top", "front", "back"]; r < o.length; r++) {
                    var a = "./" + e + "/" + i + "/" + o[r] + "." + aa.imageExtension
                    n.push(oa(a))
                  }
                  return n
                },
              },
              {
                key: "init",
                value: function (e) {
                  var t = e.addGroup("earth", this._material)
                  this._material.setTexture("uTexture", this._texture),
                    this._material.setTexture("uCloudsTexture", this._cloudsTexture),
                    this._material.setTexture("uWaterTexture", this._waterTexture),
                    t.addShaderParamFloat("uFresnelPower", 4, 0, 5),
                    t.addShaderParamFloat("uFresnelAmount", 1),
                    t.addShaderParamFloat("uSpatialFrequency", 16),
                    t.addShaderParamFloat("uTemporalFrequency", 0.25),
                    t.addShaderParamFloat("uAmplitude", 0.005, 0, 0.02),
                    t.addShaderParamFloat("uH", 0.9, 0.5, 1),
                    t.addShaderParamFloat("uLandSunPower", 4),
                    t.addShaderParamFloat("uWaterSunPower", 24),
                    t.addShaderParamFloat("uWaterSunAmount", 0.2),
                    t.addShaderParamFloat("uLandSunAmount", 0.3)
                },
              },
              {
                key: "draw",
                value: function (e, t, n, i, r) {
                  this._material.setFloat("uTime", Jr.getInstance().time),
                    this._material.setVector3("uBackgroundColor", t),
                    this._material.setVector3("uCamPos", e.getWorldPosition()),
                    this._material.setMatrix("uModel", this._transform.getWorldMatrix()),
                    this._material.setMatrix("uViewProjection", e.getViewProjection()),
                    this._material.setFloat("uDirection", i),
                    this._material.setFloat("uVisibility", n),
                    (this._sunPhase += Jr.getInstance().deltaTime * -this._sunSpeed),
                    (this._sunDir.x = Math.sin(this._sunPhase)),
                    (this._sunDir.z = Math.cos(this._sunPhase)),
                    this._material.setVector3("uSunDir", this._sunDir),
                    this._material.setVector3("uLightView", r),
                    this._renderer.draw(this._mesh, this._material)
                },
              },
              {
                key: "destruct",
                value: function () {
                  this.isDestructed || (this._material.destruct(), this._mesh.destruct(), this._texture.destruct(), this._cloudsTexture.destruct(), this._waterTexture.destruct()),
                    Mi()(X()(n.prototype), "destruct", this).call(this)
                },
              },
            ]),
            n
          )
        })(Yo),
        ia = V()(function e() {
          F()(this, e)
        })
      function ra(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ("function" === typeof Proxy) return !0
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var n,
            i = X()(e)
          if (t) {
            var r = X()(this).constructor
            n = Reflect.construct(i, arguments, r)
          } else n = i.apply(this, arguments)
          return j()(this, n)
        }
      }
      ;(ia.Earth = "Earth"), (ia.Moon = "Moon"), (ia.Sun = "Sun"), (ia.All = "All"), (ia.None = "None")
      var oa = n(558),
        aa = (function (e) {
          z()(i, e)
          var t = ra(i)
          function i(e, r, o, a, s, l) {
            var u,
              c = arguments.length > 6 && void 0 !== arguments[6] && arguments[6]
            return (
              F()(this, i),
              ((u = t.call(this))._bgColor = new Xi()),
              (u._bodies = {}),
              (u._paused = !1),
              (u._transitionProgress = 1),
              (u._transitionDuration = 0),
              (u._autoTransition = !1),
              (u._premultipliedAlpha = !0),
              (u._light = new Xi(1, 1, 1).normalize()),
              (u._lightView = new Xi()),
              (mr.ENABLED = o),
              c && console.log("webgl:nasa:bodyType", a),
              (u._canvasManager = new vr(e, !0)),
              (u._renderer = new lo(r, u._canvasManager.getCanvas(), n(708), !1, !0, !0, !1, u._premultipliedAlpha)),
              o && (u._datGui = new hr(r)),
              (u._bodyType = a),
              (u._bodyTypeOld = a),
              (u._camera = new xo(u._renderer, 30, 0.1, 100, 5, !0, !1)),
              u._camera.getRotationController().setRotationLimit(new dr(25, -1)),
              c && (u._bgCanvas = u.addCanvasBackground(e)),
              u.getWebpSupported(function () {
                switch (a) {
                  case ia.Earth:
                    u._bodies[ia.Earth] = new na(u._renderer, r, s)
                    break
                  case ia.Moon:
                    u._bodies[ia.Moon] = new ea(u._renderer, r, s)
                    break
                  case ia.Sun:
                    u._bodies[ia.Sun] = new Ko(u._renderer, r, s)
                    break
                  case ia.All:
                    ;(u._bodies[ia.Sun] = new Ko(u._renderer, r, s)),
                      (u._bodies[ia.Moon] = new ea(u._renderer, r, s)),
                      (u._bodies[ia.Earth] = new na(u._renderer, r, s)),
                      (u._bodyType = ia.None)
                }
                l.call(Di()(u))
              }),
              u
            )
          }
          return (
            V()(
              i,
              [
                {
                  key: "canvas",
                  get: function () {
                    return this._canvasManager.canvas
                  },
                },
                {
                  key: "resize",
                  value: function () {
                    this._canvasManager && this._canvasManager.forceResize()
                  },
                },
                {
                  key: "addCanvasBackground",
                  value: function (e) {
                    this._canvasManager.canvas.style.zIndex = "1"
                    var t = document.createElement("canvas")
                    return (
                      t.setAttribute("id", "canvasBackground"),
                      (t.style.position = "absolute"),
                      (t.style.left = "0px"),
                      (t.style.top = "0px"),
                      (t.style.zIndex = "0"),
                      (t.style.width = e.offsetWidth + "px"),
                      (t.style.height = e.offsetHeight + "px"),
                      e.appendChild(t),
                      t
                    )
                  },
                },
                {
                  key: "init",
                  value: function () {
                    var e = this,
                      t = new ar()
                    t.init("controls"),
                      t.addParamBool("paused", !1, function (t) {
                        e.paused = t
                      })
                    var n = t.addParamFloat("bgBrightness", 0.75, 0, 1, function (t) {
                      e.backgroundBrightness = t
                    })
                    ;(this.backgroundBrightness = n.getValue()),
                      (this._cameraY = t.addParamFloat("camera Y", 0, -2.5, 2.5)),
                      (this._cameraDistance = t.addParamFloat("cameraDistance", 5, 2, 10)),
                      (this._visibility = t.addParamFloat("visibility", 1)),
                      this._bgCanvas &&
                        (this._blendingTestEnabled = t.addParamBool("blendingTestEnabled", !0, function (t) {
                          e._bgCanvas.style.display = t ? "block" : "none"
                        })),
                      t.addButton("transitionToEarth", function () {
                        return e.transitionTo(ia.Earth)
                      }),
                      t.addButton("transitionToMoon", function () {
                        return e.transitionTo(ia.Moon)
                      }),
                      t.addButton("transitionToSun", function () {
                        return e.transitionTo(ia.Sun)
                      }),
                      t.addButton("transitionToNone", function () {
                        return e.transitionTo(ia.None)
                      }),
                      t.addButton("Earth", function () {
                        return e.transitionTo(ia.Earth, 0)
                      }),
                      t.addButton("Moon", function () {
                        return e.transitionTo(ia.Moon, 0)
                      }),
                      t.addButton("Sun", function () {
                        return e.transitionTo(ia.Sun, 0)
                      }),
                      t.addButton("None", function () {
                        return e.transitionTo(ia.None, 0)
                      }),
                      this._renderer.init()
                    var i = this._bodies
                    Object.keys(i).forEach(function (e) {
                      i[e].init(t)
                    }),
                      (this._paramRoot = t),
                      this._datGui && this._datGui.init(t),
                      this.update()
                  },
                },
                {
                  key: "setPostLoad",
                  value: function (e, t) {
                    if (!this._bodies[t.toString()])
                      switch (t) {
                        case ia.Earth:
                          this._bodies[ia.Earth] = new na(this._renderer, e, !1)
                          break
                        case ia.Moon:
                          this._bodies[ia.Moon] = new ea(this._renderer, e, !1)
                          break
                        case ia.Sun:
                          this._bodies[ia.Sun] = new Ko(this._renderer, e, !1)
                      }
                  },
                },
                {
                  key: "postInit",
                  value: function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
                    this._bodies[e.toString()].init(this._paramRoot), this.transitionTo(e, t)
                  },
                },
                {
                  key: "transitionTo",
                  value: function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2
                    ;(this._transitionDuration = t),
                      this._transitionDuration > 0
                        ? ((this._bodyTypeOld = this._bodyType), (this._bodyType = e), (this._transitionProgress = 0), (this._autoTransition = !0))
                        : ((this._bodyType = e), (this._transitionProgress = 1), (this._autoTransition = !1))
                  },
                },
                {
                  key: "setTransition",
                  value: function (e, t, n) {
                    ;(this._bodyTypeOld = e), (this._bodyType = t), (this._transitionProgress = n)
                  },
                },
                {
                  key: "update",
                  value: function () {
                    var e = this
                    if (!0 !== this.isDestructed) {
                      if (!this._paused) {
                        this._autoTransition &&
                          this._transitionProgress < 1 &&
                          ((this._transitionProgress += Jr.getInstance().deltaTime / this._transitionDuration),
                          this._transitionProgress >= 1 && ((this._transitionProgress = 1), (this._autoTransition = !1)))
                        var t = this._lightView,
                          n = this._camera.pivot.getRotationMatrixMat3()
                        ji.e.transformMat3(t.v, this._light.v, n)
                        var i = this._bgColor.x
                        if (
                          (this._premultipliedAlpha ? this._renderer.clearWithColor(0, 0, 0, 0) : this._renderer.clearWithColor(i, i, i, 0),
                          this._camera.setDistance(this._cameraDistance.getValue()),
                          this._camera.pivot.setPositionValues(0, this._cameraY.getValue(), 0),
                          this._camera.rotateY(-2 * Jr.getInstance().deltaTime),
                          this._camera.update(),
                          this._transitionProgress < 0.5)
                        ) {
                          var r = this._bodies[this._bodyTypeOld.toString()]
                          if (r) {
                            var o = 1 - 2 * this._transitionProgress
                            r.draw(this._camera, this._bgColor, o, -1, t)
                          }
                        } else {
                          var a = this._bodies[this._bodyType.toString()]
                          if (a) {
                            var s = 2 * (this._transitionProgress - 0.5)
                            a.draw(this._camera, this._bgColor, s, 1, t)
                          }
                        }
                      }
                      window.requestAnimationFrame(function () {
                        return e.update()
                      })
                    }
                  },
                },
                {
                  key: "paused",
                  set: function (e) {
                    this._paused = e
                  },
                },
                {
                  key: "cameraDistance",
                  set: function (e) {
                    this._cameraDistance.setValue(e)
                  },
                },
                {
                  key: "cameraY",
                  set: function (e) {
                    this._cameraY.setValue(e)
                  },
                },
                {
                  key: "visibility",
                  set: function (e) {
                    this._visibility.setValue(e)
                  },
                },
                {
                  key: "backgroundBrightness",
                  set: function (e) {
                    if (this._bgCanvas) {
                      ;(this._bgCanvas.width = this._canvasManager.canvas.width), (this._bgCanvas.height = this._canvasManager.canvas.height)
                      var t = this._bgCanvas.getContext("2d")
                      if (t)
                        for (var n = 32, i = this._bgCanvas.width, r = this._bgCanvas.height, o = Math.ceil(i / n), a = Math.ceil(r / n), s = 0; s < a; s++)
                          for (var l = 0; l < o; l++) {
                            var u = (l + s) % 2
                            u = 0.9 + 0.2 * u
                            var c = Math.round(e * u * 255)
                            ;(t.fillStyle = "rgb(" + c + "," + c + "," + c + ")"), t.fillRect(l * n, s * n, n, n)
                          }
                    }
                    this._bgColor.setValues(e, e, e)
                  },
                },
                {
                  key: "getWebpSupported",
                  value: function (e) {
                    var t = this,
                      n = new Image()
                    ;(n.onload = function () {
                      ;(i.webpSupported = n.width > 0 && n.height > 0), e.call(t)
                    }),
                      (n.onerror = function () {
                        ;(i.webpSupported = !1), e.call(t)
                      }),
                      (n.src = "data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA")
                  },
                },
                {
                  key: "destruct",
                  value: function () {
                    var e = this._bodies
                    Object.keys(e).forEach(function (t) {
                      e[t].destruct()
                    }),
                      this._datGui && this._datGui.destruct(),
                      this._renderer && this._renderer.destruct(),
                      this._canvasManager && this._canvasManager.destruct(),
                      this._visibility && this._visibility.destruct(),
                      this._cameraY && this._cameraY.destruct(),
                      this._cameraDistance && this._cameraDistance.destruct(),
                      this._blendingTestEnabled && this._blendingTestEnabled.destruct(),
                      Mi()(X()(i.prototype), "destruct", this).call(this)
                  },
                },
              ],
              [
                {
                  key: "imageExtension",
                  get: function () {
                    return this.webpSupported ? "webp" : "jpeg"
                  },
                },
                {
                  key: "fullRes",
                  get: function () {
                    return On.a.mobile ? "1k" : "2k"
                  },
                },
              ]
            ),
            i
          )
        })(Ii)
      aa.webpSupported = !1
      var sa = function (e) {
          switch (e) {
            case "moon":
              return ia.Moon
            case "earth":
              return ia.Earth
            case "sun":
              return ia.Sun
            default:
              return ia.All
          }
        },
        la = {
          name: "NasaViewer",
          extends: N.AbstractTransitionComponent,
          mixins: [Zt],
          props: {
            slug: u.a.string.isRequired,
            manualPlaying: u.a.bool.def(!0),
          },
          data: function () {
            return {
              initialised: !1,
              isViewVisible: !1,
              inViewPlaying: !1,
            }
          },
          computed: {
            bodyType: function () {
              return sa(this.slug)
            },
            webglPlaying: function () {
              return this.initialised && this.inViewPlaying && this.manualPlaying
            },
          },
          watch: {
            inView: function (e) {
              this.inViewPlaying = e
            },
            slug: function (e) {
              this.handleSlugChange(e)
            },
            webglPlaying: function (e) {
              this.initialised && (this.webgl.paused = !e)
            },
          },
          mounted: function () {
            ;(this.isLoading = !1), (this.preloader = new Ni()), (this.webgl = new aa(this.$refs.webgl, this.preloader, !1, this.bodyType, !1, function () {}, !1))
          },
          beforeDestroy: function () {
            this.webgl && (this.webgl.destruct(), this.preloader.destruct())
          },
          methods: {
            handleAllComponentsReady: function () {
              ;(this.transitionController = new Pi(this)), this.isReady()
            },
            init: function () {
              return this.initialised && !this.slugChangeInit
                ? Promise.resolve()
                : this.initialised && this.slugChangeInit
                ? ((this.isLoading = !0), this.loadNew())
                : ((this.isLoading = !0), this.load())
            },
            load: function () {
              var e = this
              return new Promise(function (t) {
                e.preloader.load(
                  function () {
                    ;(e.isLoading = !1),
                      (e.initialised = !0),
                      e.webgl._canvasManager.setPixelRatio(1),
                      e.webgl.init(),
                      (e.webgl.backgroundBrightness = 1),
                      (e.webgl.paused = !e.webglPlaying),
                      t()
                  },
                  function () {}
                )
              })
            },
            loadNew: function () {
              var e = this
              return new Promise(function (t) {
                var n = new Ni(),
                  i = sa(e.slugChangeInit)
                e.webgl.setPostLoad(n, i),
                  n.load(function () {
                    ;(e.isLoading = !1), e.webgl.postInit(i), n.destruct(), t()
                  })
              })
            },
            handleSlugChange: function (e) {
              this.slugChangeInit = e
            },
            updateProgress: function (e) {
              if (e !== this.lastProgress && this.initialised) {
                var t = sa(this.slug),
                  n = Math.max(0, 1.5 * e - 0.5),
                  i = t === ia.Sun ? 5 : 4.85,
                  r = t === ia.Sun ? 2.25 : 2.6
                ;(this.webgl.cameraY = 0.5 * n), (this.webgl.cameraDistance = i - r * n)
              }
              this.lastProgress = e
            },
          },
        },
        ua = n(202)
      function ca(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e)
          t &&
            (i = i.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, i)
        }
        return n
      }
      function ha(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? ca(Object(n), !0).forEach(function (t) {
                I()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : ca(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var fa = {
          name: "DetailPage",
          components: {
            DetailHero: Zn,
            DetailIntro: li,
            DetailTeam: Ei,
            ContentSection: sn,
            DiscoverProducts: ki,
            NasaViewer: Object(v.a)(
              la,
              Si,
              [],
              !1,
              function (e) {
                this.$style = ua.default.locals || ua.default
              },
              null,
              null
            ).exports,
          },
          extends: N.AbstractPageTransitionComponent,
          data: function () {
            return {
              slug: null,
              isHero: !0,
            }
          },
          computed: {
            pageData: function () {
              return null === this.slug ? null : this.$store.getters.translation.challenges[this.slug]
            },
          },
          watch: {
            isHero: function (e) {
              e || (this.$el.style.height = "")
            },
            $route: function () {
              this.$route.name === this.RouteNames.DETAIL && this.$refs.hero.detailRouteUpdate(this.$route.params.slug)
            },
          },
          created: function () {
            ;(this.lastWidth = 0), this.setHeaderMonotone(!0), this.setContactHidden(!0), (this.flow = N.FlowType.CROSS), (this.slug = this.$route.params.slug)
          },
          mounted: function () {
            On.a.mobile && ((this.resizeListener = new B.DisposableEventListener(window, "resize", this.onResize)), this.onResize())
          },
          beforeDestroy: function () {
            this.setContactHidden(!1), this.resizeListener && this.resizeListener.dispose()
          },
          methods: ha(
            ha(
              {},
              Object(L.b)({
                setHeaderMonotone: ft,
                setContactHidden: ht,
                setManualNavigationHidden: ct,
              })
            ),
            {},
            {
              handleAllComponentsReady: function () {
                ;(this.transitionController = new In(this)), this.isReady()
              },
              onHeroPlay: function () {
                ;(this.isHero = !0), this.setManualNavigationHidden(!0), this.setContactHidden(!0), this.setHeaderMonotone(!0)
              },
              onEndStateStarted: function () {
                this.setContactHidden(!1), this.setHeaderMonotone(!1)
              },
              onHeroComplete: function () {
                var e = this
                this.$refs.webgl.init().then(function () {
                  ;(e.isHero = !1), e.setManualNavigationHidden(!1)
                })
              },
              onHeroNavigate: function (e) {
                ;(this.slug = e),
                  (this.isHero = !0),
                  this.$router.push({
                    name: this.RouteNames.DETAIL,
                    params: {
                      slug: e,
                    },
                  })
              },
              onResize: function () {
                if (this.isHero) {
                  var e = window.innerWidth
                  if (e !== this.lastWidth) {
                    var t = window.innerHeight
                    ;(this.$el.style.height = "".concat(t, "px")), this.$refs.hero.setHeight(t), (this.lastWidth = e)
                  }
                } else this.$el.style.height = ""
              },
            }
          ),
        },
        da = n(203)
      var pa = Object(v.a)(
          fa,
          Cn,
          [],
          !1,
          function (e) {
            this.$style = da.default.locals || da.default
          },
          null,
          null
        ).exports,
        va = function () {
          var e = this,
            t = e._self._c
          e._self._setupProxy
          return t(
            "div",
            {
              class: e.$style.allChallengesPage,
            },
            [
              t(
                "header",
                {
                  class: e.$style.header,
                },
                [
                  t("span", {
                    ref: "background",
                    class: e.$style.headerBackground,
                    style: {
                      backgroundImage: "url(".concat(e.$versionRoot, "image/all-challenges/background.").concat(e.$webp("jpg"), ")"),
                    },
                  }),
                  e._v(" "),
                  t(
                    "div",
                    {
                      ref: "header",
                      staticClass: "content-page",
                    },
                    [
                      t("h1", {
                        class: ["heading-xl", "content-page-title", e.$style.pageTitle],
                        domProps: {
                          innerHTML: e._s(e.content.header.title),
                        },
                      }),
                    ]
                  ),
                ]
              ),
              e._v(" "),
              t(
                "div",
                {
                  ref: "content",
                  staticClass: "content-page",
                },
                [
                  t("ContentSection", {
                    attrs: {
                      title: e.content.header.subtitle,
                      content: e.content.header.content,
                    },
                  }),
                  e._v(" "),
                  e._l(e.content.categories, function (n, i) {
                    return [
                      t(
                        "h1",
                        {
                          key: "title-".concat(i),
                          class: ["heading-xl-content", e.$style.sectionTitle],
                        },
                        [e._v("\n        " + e._s(n.title) + "\n      ")]
                      ),
                      e._v(" "),
                      t(
                        "h2",
                        {
                          key: "subtitle-".concat(i),
                          class: ["heading-l", e.$style.sectionSubtitle],
                        },
                        [e._v("\n        " + e._s(n.subtitle) + "\n      ")]
                      ),
                      e._v(" "),
                      t("ChallengeList", {
                        key: "list-".concat(i),
                        attrs: {
                          items: n.challenges,
                        },
                      }),
                    ]
                  }),
                ],
                2
              ),
            ]
          )
        }
      function ga(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ("function" === typeof Proxy) return !0
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var n,
            i = X()(e)
          if (t) {
            var r = X()(this).constructor
            n = Reflect.construct(i, arguments, r)
          } else n = i.apply(this, arguments)
          return j()(this, n)
        }
      }
      va._withStripped = !0
      var ma = (function (e) {
          z()(n, e)
          var t = ga(n)
          function n() {
            return F()(this, n), t.apply(this, arguments)
          }
          return (
            V()(n, [
              {
                key: "setupTransitionInTimeline",
                value: function (e, t, n) {
                  var i = t.$refs,
                    r = i.background,
                    o = i.header,
                    a = i.content
                  e.fromTo(
                    r,
                    1.4,
                    {
                      xPercent: 2.5,
                      yPercent: -50,
                    },
                    {
                      xPercent: 0,
                      yPercent: 0,
                      ease: W.Power3.easeOut,
                      clearProps: "xPercent,yPercent",
                    }
                  ),
                    e.add(Y(r, 0.15), 0),
                    e.fromTo(
                      [o, a],
                      0.8,
                      {
                        y: 0.25 * window.innerHeight,
                      },
                      {
                        y: 0,
                        ease: W.Power3.easeOut,
                        clearProps: "y",
                      },
                      0
                    ),
                    e.add(Y(o), 0),
                    e.add(Y(a), 0)
                },
              },
              {
                key: "setupTransitionOutTimeline",
                value: function (e, t, n) {
                  e.add(Lt(t.$el))
                },
              },
              {
                key: "setupLoopingAnimationTimeline",
                value: function (e, t, n) {},
              },
            ]),
            n
          )
        })(N.AbstractTransitionController),
        _a = function () {
          var e = this,
            t = e._self._c
          e._self._setupProxy
          return t(
            "ul",
            {
              class: ["heading-xl", e.$style.challengeList],
            },
            e._l(e.items, function (n, i) {
              return t("ChallengeListItem", {
                key: "item-".concat(i),
                attrs: {
                  data: n,
                },
                on: {
                  buttonClick: function (t) {
                    return e.onButtonClick(n)
                  },
                },
              })
            }),
            1
          )
        }
      function ya(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ("function" === typeof Proxy) return !0
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var n,
            i = X()(e)
          if (t) {
            var r = X()(this).constructor
            n = Reflect.construct(i, arguments, r)
          } else n = i.apply(this, arguments)
          return j()(this, n)
        }
      }
      _a._withStripped = !0
      var Ta = (function (e) {
          z()(n, e)
          var t = ya(n)
          function n() {
            return F()(this, n), t.apply(this, arguments)
          }
          return (
            V()(n, [
              {
                key: "setupTransitionInTimeline",
                value: function (e, t, n) {},
              },
              {
                key: "setupTransitionOutTimeline",
                value: function (e, t, n) {},
              },
              {
                key: "setupLoopingAnimationTimeline",
                value: function (e, t, n) {},
              },
            ]),
            n
          )
        })(N.AbstractTransitionController),
        Ea = function () {
          var e = this,
            t = e._self._c
          e._self._setupProxy
          return t(
            "li",
            {
              class: [e.$style.challengeListItem],
            },
            [
              t("ContentSection", {
                class: e.$style.itemContent,
                attrs: {
                  title: e.data.title,
                  content: e.data.content,
                  cta: e.data.cta,
                  "cta-watch": !0,
                  inverted: !0,
                },
                on: {
                  buttonClick: function (t) {
                    return e.$emit("buttonClick", e.data)
                  },
                },
              }),
            ],
            1
          )
        }
      function ba(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ("function" === typeof Proxy) return !0
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var n,
            i = X()(e)
          if (t) {
            var r = X()(this).constructor
            n = Reflect.construct(i, arguments, r)
          } else n = i.apply(this, arguments)
          return j()(this, n)
        }
      }
      Ea._withStripped = !0
      var Aa = (function (e) {
          z()(n, e)
          var t = ba(n)
          function n() {
            return F()(this, n), t.apply(this, arguments)
          }
          return (
            V()(n, [
              {
                key: "setupTransitionInTimeline",
                value: function (e, t, n) {
                  e.add(Y(t.$el, 0.5))
                },
              },
              {
                key: "setupTransitionOutTimeline",
                value: function (e, t, n) {},
              },
              {
                key: "setupLoopingAnimationTimeline",
                value: function (e, t, n) {},
              },
            ]),
            n
          )
        })(N.AbstractTransitionController),
        Ra = {
          name: "ChallengeListItem",
          props: {
            data: u.a.shape({
              slug: it(u.a.string),
              title: u.a.string,
              content: u.a.string,
              cta: it(
                u.a.shape({
                  label: u.a.string,
                  href: u.a.string,
                })
              ),
            }),
          },
          components: {
            ContentSection: sn,
          },
          extends: N.AbstractTransitionComponent,
          mixins: [Zt],
          watch: {
            isInThreshold: function (e) {
              e ? this.transitionIn(!0) : this.transitionOut(!0)
            },
          },
          methods: {
            handleAllComponentsReady: function () {
              ;(this.transitionController = new Aa(this)), this.isReady()
            },
          },
        },
        wa = n(204)
      var xa = {
          name: "ChallengeList",
          components: {
            ChallengeListItem: Object(v.a)(
              Ra,
              Ea,
              [],
              !1,
              function (e) {
                this.$style = wa.default.locals || wa.default
              },
              null,
              null
            ).exports,
          },
          extends: N.AbstractTransitionComponent,
          props: {
            items: u.a.arrayOf(
              u.a.shape({
                slug: it(u.a.string),
                title: u.a.string,
                content: u.a.string,
                cta: it(
                  u.a.shape({
                    label: u.a.string,
                    href: u.a.string,
                  })
                ),
              })
            ),
          },
          methods: {
            handleAllComponentsReady: function () {
              ;(this.transitionController = new Ta(this)), this.isReady()
            },
            onButtonClick: function (e) {
              this.$router.push({
                name: this.RouteNames.DETAIL,
                params: {
                  slug: e.slug,
                },
              })
            },
          },
        },
        ka = n(205)
      var Sa = {
          name: "AllChallengesPage",
          components: {
            ContentSection: sn,
            ChallengeList: Object(v.a)(
              xa,
              _a,
              [],
              !1,
              function (e) {
                this.$style = ka.default.locals || ka.default
              },
              null,
              null
            ).exports,
          },
          extends: N.AbstractPageTransitionComponent,
          computed: {
            content: function () {
              return this.$store.getters.translation.allChallenges
            },
          },
          created: function () {
            this.flow = N.FlowType.CROSS
          },
          methods: {
            handleAllComponentsReady: function () {
              ;(this.transitionController = new ma(this)), this.isReady()
            },
          },
        },
        Ca = n(206)
      var Pa = Object(v.a)(
          Sa,
          va,
          [],
          !1,
          function (e) {
            this.$style = Ca.default.locals || Ca.default
          },
          null,
          null
        ).exports,
        Oa = function () {
          var e = this._self._c
          this._self._setupProxy
          return e("div", {
            class: ["abs-fill", this.$style.webglPage],
          })
        }
      function Ma(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ("function" === typeof Proxy) return !0
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var n,
            i = X()(e)
          if (t) {
            var r = X()(this).constructor
            n = Reflect.construct(i, arguments, r)
          } else n = i.apply(this, arguments)
          return j()(this, n)
        }
      }
      Oa._withStripped = !0
      var Ia = (function (e) {
          z()(n, e)
          var t = Ma(n)
          function n() {
            return F()(this, n), t.apply(this, arguments)
          }
          return (
            V()(n, [
              {
                key: "setupTransitionInTimeline",
                value: function (e, t, n) {},
              },
              {
                key: "setupTransitionOutTimeline",
                value: function (e, t, n) {},
              },
              {
                key: "setupLoopingAnimationTimeline",
                value: function (e, t, n) {},
              },
            ]),
            n
          )
        })(N.AbstractTransitionController),
        La = {
          name: "WebglPage",
          extends: N.AbstractPageTransitionComponent,
          mounted: function () {
            var e = this
            console.log(this.$el)
            var t = new Ni()
            this.webgl = new aa(
              this.$el,
              t,
              !0,
              ia.All,
              !1,
              function () {
                t.load(
                  function () {
                    e.$emit("loadingDone"), e.webgl.init()
                  },
                  function (t) {
                    e.$emit("loadProgress", t)
                  }
                )
              },
              !0
            )
          },
          methods: {
            handleAllComponentsReady: function () {
              ;(this.transitionController = new Ia(this)), this.isReady()
            },
          },
        },
        Na = n(207)
      var Ba = Object(v.a)(
          La,
          Oa,
          [],
          !1,
          function (e) {
            this.$style = Na.default.locals || Na.default
          },
          null,
          null
        ).exports,
        Da = {
          INTRO: "intro",
          HOME: "home",
          DETAIL: "detail",
          ABOUT: "about",
          TECHNOLOGY: "technology",
          ALL_CHALLENGES: "allChallenges",
          WEBGL: "webgl",
        },
        Fa = [
          {
            path: "/",
            component: Rt,
            name: Da.INTRO,
            meta: {
              hideNavigation: !0,
            },
          },
          {
            path: "/home",
            component: Mt,
            name: Da.HOME,
          },
          {
            path: "/about",
            component: cn,
            name: Da.ABOUT,
          },
          {
            path: "/technology",
            component: Sn,
            name: Da.TECHNOLOGY,
          },
          {
            path: "/challenges",
            component: Pa,
            name: Da.ALL_CHALLENGES,
          },
          {
            path: "/webgl",
            component: Ba,
            name: Da.WEBGL,
          },
          {
            path: "/:slug",
            component: pa,
            name: Da.DETAIL,
          },
        ]
      o.a.use(y.a)
      var Ua = null,
        Va = function () {
          if (!Ua) {
            var e = P(),
              t = C("configManager"),
              n =
                e.localeEnabled && e.localeRoutingEnabled
                  ? Object(a.routeParser)(Fa, t.getProperty(x.DEFAULT_LOCALE))
                  : Fa.concat({
                      path: "*",
                      redirect: "/",
                    })
            ;(Ua = new y.a({
              mode: "history",
              routes: n,
              base: t.getVariable(w.PUBLIC_PATH),
            })).beforeEach(function (e, n, i) {
              var r,
                o = t.getProperty(x.PERSIST_QUERY_PARAMS),
                a = !1,
                s = Object.assign({}, (_()(e.query), e.query))
              ;(r = {
                pageName: e.path,
                event: "trackPageview",
              }),
                window.dataLayer.push(r),
                o &&
                  o.length > 0 &&
                  o.forEach(function (e) {
                    "undefined" !== typeof n.query[e] && "undefined" === typeof s[e] && ((s[e] = n.query[e]), (a = !0))
                  }),
                a
                  ? i({
                      path: e.path,
                      query: s,
                    })
                  : i()
            })
          }
          return Ua
        },
        Ha = n(301),
        za = {
          app: vt,
        }
      o.a.use(L.a)
      var $a = null,
        ja = function () {
          return (
            $a ||
              ($a = new L.a.Store({
                plugins: [
                  Object(Ha.a)({
                    storage: window.localStorage,
                    reducer: function (e) {
                      return {
                        app: {
                          cookieAccepted: e.app.cookieAccepted,
                        },
                      }
                    },
                  }),
                ],
                modules: za,
                strict: !1,
              })),
            $a
          )
        },
        Ga = n(81),
        Xa = n.n(Ga),
        Wa = n(136),
        Ya = n.n(Wa),
        qa = {
          install: function (e, t) {
            Object.keys(t).forEach(function (n) {
              e.prototype[n]
                ? console.error("Skipping ".concat(n, ". ").concat(n, " already exists on the Vue prototype"))
                : Object.defineProperty(e.prototype, n, {
                    get: function () {
                      return t[n]
                    },
                  })
            })
          },
        }
      function Ka(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e)
          t &&
            (i = i.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, i)
        }
        return n
      }
      function Za(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Ka(Object(n), !0).forEach(function (t) {
                I()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Ka(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var Qa,
        Ja = function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            i = Za(Za({}, n), t)
          return e
            .replace(/:(\w+)/g, function (e, t) {
              return "undefined" !== typeof i[t] ? i[t] || "" : e
            })
            .replace(/\/:(\w+\?+)/g, function () {
              return ""
            })
            .replace(/\?/g, function () {
              return ""
            })
            .replace(/:(\w+)/g, function (e, t) {
              throw new Error('Param "'.concat(t, '" is missing in params'), i)
            })
        },
        es = {
          ID: "id",
          SLUG: "slug",
        },
        ts = [],
        ns = {
          isLoaded: function (e) {
            return ts.includes(e)
          },
          setLoadCallback: function (e) {
            Qa = e
          },
          getTranslation: function (e) {
            var t = e.translationKey,
              i = e.code
            return n(748)("./".concat(t, ".json")).then(function (e) {
              return (
                ts.push(i),
                Qa &&
                  setTimeout(function () {
                    Qa(i)
                  }),
                e
              )
            })
          },
        },
        is = (function () {
          function e() {
            F()(this, e),
              (this.preloader = null),
              (this.webgl = null),
              (this.loadResolver = function () {}),
              (this.offscreenWrapper = document.createElement("div")),
              this.offscreenWrapper.classList.add("offscreen-viewer"),
              document.body.appendChild(this.offscreenWrapper)
          }
          return (
            V()(e, [
              {
                key: "load",
                value: function () {
                  var e = this
                  return new Promise(function (t) {
                    ;(e.loadResolver = t), (e.preloader = new Ni()), (e.webgl = new aa(e.offscreenWrapper, e.preloader, !1, ia.All, !0, e.onReadyCallback.bind(e), !1))
                  })
                },
              },
              {
                key: "inject",
                value: function (e) {
                  this.webgl && (e.appendChild(this.webgl.canvas), this.webgl.resize())
                },
              },
              {
                key: "revert",
                value: function () {
                  this.webgl && this.offscreenWrapper.appendChild(this.webgl.canvas)
                },
              },
              {
                key: "paused",
                set: function (e) {
                  this.webgl && (this.webgl.paused = e)
                },
              },
              {
                key: "show",
                value: function (e) {
                  this.webgl && this.webgl.transitionTo(e, 1.6)
                },
              },
              {
                key: "onReadyCallback",
                value: function () {
                  var e = this
                  this.preloader &&
                    this.preloader.load(
                      function () {
                        e.webgl && (e.webgl.init(), (e.webgl.backgroundBrightness = 0.35)), (e.paused = !0), e.loadResolver()
                      },
                      function () {}
                    )
                },
              },
            ]),
            e
          )
        })(),
        rs = n(209),
        os = n.n(rs),
        as = {
          INTRO_VIDEO: "movies/loop_anthem.mp4",
          LOOP_SUN: "movies/loop_sun.mp4",
          LOOP_MOON: "movies/loop_moon.mp4",
          LOOP_EARTH: "movies/loop_earth.mp4",
        },
        ss = (function () {
          function e() {
            F()(this, e), (this.taskLoader = new os.a()), (this.loadPromise = null)
          }
          return (
            V()(
              e,
              [
                {
                  key: "load",
                  value: function () {
                    return (
                      null === this.loadPromise &&
                        (this.loadPromise = this.taskLoader.loadTasks([
                          new rs.LoadVideoTask({
                            assets: e.getValues(),
                          }),
                        ])),
                      this.loadPromise
                    )
                  },
                },
                {
                  key: "getAsset",
                  value: function (t) {
                    return e.getPrefix() + t
                  },
                },
                {
                  key: "dispose",
                  value: function () {
                    this.taskLoader.dispose()
                  },
                },
              ],
              [
                {
                  key: "getPrefix",
                  value: function () {
                    return C("configManager").getURL(R.STORAGE)
                  },
                },
                {
                  key: "getAll",
                  value: function () {
                    return [as.INTRO_VIDEO, as.LOOP_SUN, as.LOOP_MOON, as.LOOP_EARTH]
                  },
                },
                {
                  key: "getPreloadingAssets",
                  value: function () {
                    return e.getAll()
                  },
                },
                {
                  key: "getValues",
                  value: function () {
                    return e.getPreloadingAssets().map(function (t) {
                      return e.getPrefix() + t
                    })
                  },
                },
              ]
            ),
            e
          )
        })(),
        ls = {
          CLICK: "Click_01",
          FOLDOUT: "FoldOut_01",
          HOVER: "Hover_01",
          PLANET_MOUSE_ENTER: "PlanetOn_01",
          PLANET_MOUSE_LEAVE: "PlanetOff_01",
          PLANET_SWOOSH: "Swoosh_01",
          NAVIGATION_HOVER_BIG: "SideMenu_HoverBig_01",
          NAVIGATION_HOVER_SMALL: "SideMenu_HoverSmall_01",
          SKIP_VIDEO: "SkipVid_01",
          AMBIENCE_MAIN: "Ambience_03.0",
          AMBIENCE_SUB_01: "Ambience_03.1",
          AMBIENCE_SUB_02: "Ambience_03.2",
          AMBIENCE_SUB_03: "Ambience_03.3",
          AMBIENCE_SUB_04: "Ambience_03.4",
          AMBIENCE_SUB_05: "Ambience_03.5",
          AMBIENCE_SUB_06: "Ambience_03.6",
          AMBIENCE_SUB_07: "Ambience_03.7",
          AMBIENCE_SUB_08: "Ambience_03.8",
        },
        us = {
          AMBIENT: "ambient",
          UI: "ui",
        },
        cs = new is()
      On.a.mobile && document.documentElement.classList.add("is-mobile")
      var hs,
        fs,
        ds,
        ps,
        vs = function (e) {
          return new Promise(function (t) {
            ns.isLoaded(e.getters.currentLanguage.code)
              ? t()
              : ns.setLoadCallback(function (n) {
                  n === e.getters.currentLanguage.code && t()
                })
          })
        },
        gs = function (e) {
          !(function () {
            var e = C("configManager"),
              t = Object.keys(En.mediaQueries).reduce(function (e, t) {
                return (e[t] = En.mediaQueries[t].replace(/'/g, "")), e
              }, {})
            o.a.use(qa, {
              $config: e,
              $gateway: C("gateway"),
              $http: Xa.a,
              $versionRoot: e.getVariable(w.VERSIONED_STATIC_ROOT),
              $staticRoot: e.getVariable(w.STATIC_ROOT),
              $storageRoot: e.getURL(R.STORAGE),
              GLOBAL_ASSETS: as,
              URLNames: R,
              PropertyNames: x,
              VariableNames: w,
              RouteNames: Da,
              Params: es,
              SampleName: ls,
              SoundChannel: us,
              createPath: Ja,
              $scrollTracker: C("scrollTracker"),
              $deviceStateTracker: new Ya.a({
                mediaQueries: t,
                deviceState: En.deviceState,
                showStateIndicator: !1,
              }),
              DeviceState: En.deviceState,
              $assetLoader: new ss(),
              $nasaViewer: cs,
              $soundManager: C("soundManager"),
            })
          })()
          var t = C("configManager")
          return Promise.all([t.getVariable(w.LOCALE_ENABLED) ? vs(e) : Promise.resolve(), cs.load(), Promise.resolve()])
        },
        ms = n(302),
        _s = n.n(ms),
        ys = {
          environments:
            ((hs = {}),
            I()(hs, T, {
              variables: {},
              urls: I()({}, R.STORAGE, "https://storage.googleapis.com/gweb-gc-nasa-fdl.appspot.com/"),
            }),
            I()(hs, b, {
              extends: T,
              variables: {},
              urls: I()({}, R.STORAGE, "https://storage.googleapis.com/gweb-gc-nasa-fdl-staging.appspot.com/"),
            }),
            I()(hs, E, {
              extends: b,
              variables: {},
              urls: {},
            }),
            I()(hs, A, {
              extends: E,
              variables: {},
              urls: {},
            }),
            hs),
          variables:
            ((fs = {}),
            I()(fs, w.LOCALE_ENABLED, !0),
            I()(fs, w.LOCALE_ROUTING_ENABLED, !1),
            I()(fs, w.VERSIONED_STATIC_ROOT, (window.webpackPublicPath || "/intel/") + "version/1701338711315/static/"),
            I()(fs, w.STATIC_ROOT, (window.webpackPublicPath || "/intel/") + ""),
            I()(fs, w.PUBLIC_PATH, window.webpackPublicPath || "/intel/"),
            fs),
          urls: ((ds = {}), I()(ds, R.API, "".concat("/intel/", "api/")), I()(ds, R.STORAGE, "https://storage.googleapis.com/gweb-gc-nasa-fdl.appspot.com/"), ds),
          properties: ((ps = {}), I()(ps, x.DEFAULT_LOCALE, "en-gb"), I()(ps, x.AVAILABLE_LOCALES, ["en-gb", "en-us"]), I()(ps, x.PERSIST_QUERY_PARAMS, []), ps),
        },
        Ts = T,
        Es = document.location.host.split(":").shift()
      switch (!0) {
        case Es.indexOf("dot-gweb-gc-nasa-fdl-staging") > -1:
          Ts = b
          break
        case "localhost" === Es:
          Ts = A
          break
        default:
          Ts = T
      }
      var bs = {
        config: ys,
        environment: Ts,
      }
      function As(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e)
          t &&
            (i = i.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, i)
        }
        return n
      }
      function Rs(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? As(Object(n), !0).forEach(function (t) {
                I()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : As(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var ws = function () {
          return (window.pageYOffset || document.documentElement.scrollTop) - (document.documentElement.clientTop || 0)
        },
        xs = n(57),
        ks = n.n(xs)
      function Ss(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ("function" === typeof Proxy) return !0
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var n,
            i = X()(e)
          if (t) {
            var r = X()(this).constructor
            n = Reflect.construct(i, arguments, r)
          } else n = i.apply(this, arguments)
          return j()(this, n)
        }
      }
      var Cs = (function (e) {
        z()(n, e)
        var t = Ss(n)
        function n() {
          return F()(this, n), t.apply(this, arguments)
        }
        return V()(n)
      })(Object(xs.createEventClass)()("UPDATE"))
      function Ps(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ("function" === typeof Proxy) return !0
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var n,
            i = X()(e)
          if (t) {
            var r = X()(this).constructor
            n = Reflect.construct(i, arguments, r)
          } else n = i.apply(this, arguments)
          return j()(this, n)
        }
      }
      var Os = (function (e) {
        z()(n, e)
        var t = Ps(n)
        function n() {
          var e
          return (
            F()(this, n),
            ((e = t.call(this)).scrollListener = null),
            (e.resizeListener = null),
            (e.components = []),
            (e.scrollTrackedComponents = []),
            (e.scrollWrapper = document.querySelector(".js-app")),
            (e.scrollContent = document.querySelector(".js-app-container")),
            (e.scroll = {
              current: 0,
              target: 0,
            }),
            (e.fixedElements = []),
            (e.isEnabled = !0),
            (e.tick = function () {
              if ((window.requestAnimationFrame(e.tick), e.isEnabled))
                if (n.IS_MOBILE)
                  e.scrollTrackedComponents.forEach(function (e) {
                    ;(e.progress.current = yn()(e.progress.current, e.progress.target, 0.1)), e.progressUpdate(e.progress.current)
                  })
                else {
                  var t = e.scrollContent.children[0] ? e.scrollContent.children[0].offsetHeight : e.scrollContent.scrollHeight
                  ;(e.scrollWrapper.style.height = "".concat(t, "px")),
                    (e.scroll.target = ws()),
                    (e.scroll.current = Math.round(1e3 * yn()(e.scroll.current, e.scroll.target, 0.0875)) / 1e3)
                  var i = e.scrollContent.scrollHeight - window.innerHeight,
                    r = Math.min(i, Math.max(0, e.scroll.current))
                  W.TweenLite.set(e.scrollContent, {
                    y: -r,
                  }),
                    W.TweenLite.set(e.fixedElements, {
                      y: r,
                    }),
                    0 !== e.scrollTrackedComponents.length &&
                      (e.scrollTrackedComponents.forEach(function (t) {
                        ;(t.progress.target = n.getComponentProgress(t.element)),
                          (t.progress.current = t.progress.target),
                          t.progressUpdate(t.progress.current),
                          e.updateComponentViewStatus(t)
                      }),
                      e.dispatchEvent(
                        new Cs(Cs.types.UPDATE, {
                          y: r,
                        })
                      ))
                }
            }),
            (e.observer = new IntersectionObserver(e.onChange.bind(Di()(e)))),
            n.IS_MOBILE &&
              ((e.scrollListener = new B.DisposableEventListener(window, "scroll", e.handleScroll.bind(Di()(e)))),
              (e.resizeListener = new B.DisposableEventListener(window, "resize", Ve()(e.handleScroll.bind(Di()(e)), 150)))),
            window.requestAnimationFrame(e.tick),
            e
          )
        }
        return (
          V()(
            n,
            [
              {
                key: "y",
                get: function () {
                  return this.scroll.current
                },
              },
              {
                key: "enabled",
                set: function (e) {
                  this.isEnabled = e
                },
              },
              {
                key: "setScrollY",
                value: function (e) {
                  window.scrollTo(0, e),
                    n.IS_MOBILE ||
                      ((this.scroll.target = e),
                      (this.scroll.current = e),
                      W.TweenLite.set(this.scrollContent, {
                        y: -e,
                      }))
                },
              },
              {
                key: "addComponent",
                value: function (e) {
                  var t = {
                    element: e.$el,
                    inViewUpdate: e.setInView,
                    inThresholdUpdate: e.setInThreshold,
                    progressUpdate: e.updateProgress,
                    progress: {
                      current: 0,
                      target: 0,
                    },
                  }
                  this.observer.observe(e.$el), this.components.push(t)
                },
              },
              {
                key: "removeComponent",
                value: function (e) {
                  var t = this.components.findIndex(function (t) {
                    return t.element === e.$el
                  })
                  t > -1 && this.components.splice(t, 1)
                },
              },
              {
                key: "addFixed",
                value: function (e) {
                  this.fixedElements.push(e)
                },
              },
              {
                key: "removeFixed",
                value: function (e) {
                  var t = this.fixedElements.indexOf(e)
                  t > -1 && this.fixedElements.splice(t, 1)
                },
              },
              {
                key: "onChange",
                value: function (e) {
                  var t = this
                  e.forEach(function (e) {
                    var i = t.components.find(function (t) {
                      return t.element === e.target
                    })
                    if ((i && i.inViewUpdate && i.inViewUpdate(e.isIntersecting), e.isIntersecting && i && i.element)) {
                      var r = n.getComponentProgress(i.element)
                      ;(i.progress.current = r), (i.progress.target = r), t.updateComponentViewStatus(i), t.addScrollElement(i)
                    } else t.removeScrollElement(i)
                  })
                },
              },
              {
                key: "addScrollElement",
                value: function (e) {
                  this.scrollTrackedComponents.push(e)
                },
              },
              {
                key: "removeScrollElement",
                value: function (e) {
                  var t = this.scrollTrackedComponents.indexOf(e)
                  t > -1 && this.scrollTrackedComponents.splice(t, 1)
                },
              },
              {
                key: "handleScroll",
                value: function () {
                  var e = this
                  0 !== this.scrollTrackedComponents.length &&
                    this.scrollTrackedComponents.forEach(function (t) {
                      ;(t.progress.target = n.getComponentProgress(t.element)), e.updateComponentViewStatus(t)
                    })
                },
              },
              {
                key: "updateComponentViewStatus",
                value: function (e) {
                  var t = e.element.getBoundingClientRect().top
                  e.inThresholdUpdate(t < 0.75 * window.innerHeight)
                },
              },
            ],
            [
              {
                key: "getComponentProgress",
                value: function (e) {
                  var t = e.getBoundingClientRect(),
                    i = t.top,
                    r = t.height
                  return 2 * n.normalizedValue(i, -r, window.innerHeight) - 1
                },
              },
              {
                key: "normalizedValue",
                value: function (e, t, n) {
                  var i = n - t
                  return 0 === i ? t : (1 / i) * (e - t)
                },
              },
            ]
          ),
          n
        )
      })(ks.a)
      Os.IS_MOBILE = On.a.mobile
      var Ms = n(303),
        Is = n.n(Ms),
        Ls = function (e, t, n, i, r) {
          if (!t.audioBuffer) throw new Error("Sample '".concat(t.name, "' is not loaded"))
          var o = e.createBufferSource(),
            a = e.createGain()
          o.connect(a), (o.buffer = t.audioBuffer), (o.loop = r), a.gain.setValueAtTime(i, 0), a.connect(n ? n.gain : e.destination)
          var s = {
            context: e,
            sample: t,
            bufferSource: o,
            gain: a,
            channel: n || void 0,
          }
          return o.start(0), s
        },
        Ns = function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
          e.playingSamples.forEach(function (e) {
            return Bs(e, t)
          })
        },
        Bs = function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
          if (0 === t) e.bufferSource.stop(0)
          else {
            var n = e.context.currentTime + t
            e.gain.gain.linearRampToValueAtTime(0, n), e.bufferSource.stop(n)
          }
          Ds(e)
        },
        Ds = function (e) {
          if (e.channel) {
            var t = e.channel.playingSamples.indexOf(e)
            t > -1 && e.channel.playingSamples.splice(t, 1)
          }
        },
        Fs = window.AudioContext || window.webkitAudioContext,
        Us = (function () {
          function e(t, n) {
            F()(this, e), (this.channels = {}), (this.context = new Fs()), (this.sampleManager = new Is.a(this.context, t, n))
          }
          return (
            V()(e, [
              {
                key: "initAudioContext",
                value: function () {
                  "suspended" === this.context.state && this.context.resume()
                },
              },
              {
                key: "play",
                value: function (e) {
                  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : us.UI,
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
                    i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                    r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
                    o = this.sampleManager.getSampleByName(e)
                  if (!o) throw new Error("Cannot find sample '".concat(e))
                  var a = this.getChannelByName(t)
                  if (a && a.playingSamples.length > 0) {
                    var s = a.playingSamples.find(function (t) {
                      return t.sample.name === e
                    })
                    if (s && a.isMonophonic && s.bufferSource.loop && i) return s
                  }
                  var l = Ls(this.context, o, a, n, i)
                  return (
                    a &&
                      (a.isMonophonic &&
                        a.playingSamples.forEach(function (e) {
                          return Bs(e, a.monophonicFadeOutTime)
                        }),
                      a.playingSamples.push(l),
                      (l.bufferSource.onended = function () {
                        Ds(l), null !== r && r()
                      })),
                    l
                  )
                },
              },
              {
                key: "getChannelByName",
                value: function (e) {
                  var t = e ? this.channels[e] : null
                  if (!t) throw new Error("Channel with name '".concat(e, "' does not exist"))
                  return t
                },
              },
              {
                key: "stopAllOnChannel",
                value: function (e) {
                  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
                  Ns(this.getChannelByName(e), t)
                },
              },
              {
                key: "muteChannel",
                value: function (e, t) {
                  var n = this.getChannelByName(e)
                  if (n) {
                    var i = t ? 0 : n.initialVolume
                    n.gain.gain.setValueAtTime(i, 0)
                  }
                },
              },
              {
                key: "muteAllChannels",
                value: function (e) {
                  var t = this
                  Object.keys(this.channels).forEach(function (n) {
                    t.muteChannel(n, e)
                  })
                },
              },
              {
                key: "createChannel",
                value: function (e) {
                  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
                    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0
                  if ("" === e) throw new Error("Channel name cannot be blank")
                  if (this.channels[e]) throw new Error("Channel '".concat(e, "' already exists"))
                  if (i < 0) throw new Error("monophonicFadeOutTime can not be negative")
                  var r = this.context.createGain()
                  r.gain.setValueAtTime(t, 0),
                    r.connect(this.context.destination),
                    r.connect(this.context.destination),
                    (this.channels[e] = {
                      initialVolume: t,
                      isMonophonic: n,
                      monophonicFadeOutTime: i,
                      name: e,
                      gain: r,
                      playingSamples: [],
                    })
                },
              },
            ]),
            e
          )
        })(),
        Vs = function () {
          var e = new _s.a()
          e.init(bs.config, bs.environment)
          var t = Ga.create({
            baseURL: e.getURL(R.API),
            headers: {
              Accept: "application/json",
            },
            responseType: "json",
          })
          t.interceptors.response.use(
            function (e) {
              return (function (e) {
                return e && e.data && "undefined" !== typeof e.data.data ? Rs(Rs({}, e), e.data) : e
              })(e)
            },
            function (e) {
              throw (function (e) {
                if (e && e.response && e.response.data && e.response.data.error) {
                  var t = Rs(
                    Rs(
                      {
                        config: e.config,
                      },
                      e.response
                    ),
                    e.response.data
                  )
                  return delete t.data, t
                }
                return e
              })(e)
            }
          ),
            S("configManager", e),
            S("gateway", t),
            S("scrollTracker", new Os()),
            S("soundManager", new Us("".concat(e.getURL(R.STORAGE), "audio/"), On.a.safari ? "mp3" : "ogg"))
        },
        Hs = function () {
          var e = this,
            t = e._self._c
          e._self._setupProxy
          return t(
            "div",
            {
              class: [e.$style.app],
            },
            [
              e.isPreloading
                ? e._e()
                : t("SiteHeader", {
                    ref: "header",
                    on: {
                      openChange: e.onMenuOpenChange,
                    },
                  }),
              e._v(" "),
              t(
                "transition",
                {
                  on: {
                    leave: e.onLeave,
                  },
                },
                [e.isPreloading ? e._e() : t("router-view")],
                1
              ),
              e._v(" "),
              e.isPreloading
                ? e._e()
                : t(
                    "div",
                    {
                      class: [e.$style.navigationWrapper, I()({}, e.$style.isActive, e.isNavigationOnPage)],
                    },
                    [
                      t("StartNavigation", {
                        attrs: {
                          "is-menu-open": e.isMenuOpen,
                        },
                      }),
                    ],
                    1
                  ),
            ],
            1
          )
        }
      Hs._withStripped = !0
      var zs = function () {
        var e = this,
          t = e._self._c
        e._self._setupProxy
        return t(
          "header",
          {
            class: [e.$style.siteHeader],
          },
          [
            t(
              "div",
              {
                class: e.$style.content,
              },
              [
                t("ToggleMenuButton", {
                  ref: "menu",
                  class: e.$style.toggle,
                  attrs: {
                    "is-open": e.isOpen,
                  },
                  nativeOn: {
                    click: function (t) {
                      return t.preventDefault(), e.onToggleClick.apply(null, arguments)
                    },
                  },
                }),
                e._v(" "),
                t("SponsorLogos", {
                  ref: "logos",
                  class: e.$style.logos,
                  attrs: {
                    "delayed-in": !0,
                    monotone: e.monotone,
                  },
                }),
              ],
              1
            ),
            e._v(" "),
            t(
              "div",
              {
                class: [e.$style.contact, I()({}, e.$style.isHidden, !e.showContactButton)],
              },
              [
                t(
                  "PrimaryButton",
                  {
                    class: e.$style.contactButton,
                    attrs: {
                      href: e.$t("navigation.contact.href"),
                      "event-category": e.$route.name,
                      rel: "noopener",
                      "event-action": "Click",
                      "event-label": "Contact Google Cloud",
                    },
                  },
                  [e._v(e._s(e.$t("navigation.contact.label")))]
                ),
              ],
              1
            ),
            e._v(" "),
            t("NavigationOverlay", {
              ref: "navigation",
              attrs: {
                "is-open": e.isOpen,
              },
            }),
          ],
          1
        )
      }
      function $s(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ("function" === typeof Proxy) return !0
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var n,
            i = X()(e)
          if (t) {
            var r = X()(this).constructor
            n = Reflect.construct(i, arguments, r)
          } else n = i.apply(this, arguments)
          return j()(this, n)
        }
      }
      zs._withStripped = !0
      var js = (function (e) {
          z()(n, e)
          var t = $s(n)
          function n() {
            return F()(this, n), t.apply(this, arguments)
          }
          return (
            V()(n, [
              {
                key: "setupTransitionInTimeline",
                value: function (e, t, n) {
                  var i = t.$refs.menu
                  e.add(Y(t.$el, 0.1), 0), e.add(this.getTimeline(i), 0.5)
                },
              },
              {
                key: "setupTransitionOutTimeline",
                value: function (e, t, n) {
                  e.add(q(t.$el), 0)
                },
              },
              {
                key: "setupLoopingAnimationTimeline",
                value: function (e, t, n) {},
              },
            ]),
            n
          )
        })(N.AbstractTransitionController),
        Gs = function () {
          var e = this,
            t = e._self._c
          e._self._setupProxy
          return t(
            "button",
            {
              class: [e.$style.toggleMenuButton],
              attrs: {
                title: "toggle menu",
              },
              on: {
                mouseenter: function (t) {
                  return e.$soundManager.play(e.SampleName.HOVER)
                },
                click: function (t) {
                  return e.$soundManager.play(e.SampleName.CLICK)
                },
              },
            },
            [
              t("span", {
                ref: "background",
                class: ["abs-fill", e.$style.background],
              }),
              e._v(" "),
              e._l(Array(2), function (n, i) {
                return t("span", {
                  key: "line-".concat(i),
                  ref: "line",
                  refInFor: !0,
                  class: e.$style.line,
                })
              }),
              e._v(" "),
              t("span", {
                ref: "cross",
                class: e.$style.cross,
              }),
            ],
            2
          )
        }
      function Xs(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ("function" === typeof Proxy) return !0
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var n,
            i = X()(e)
          if (t) {
            var r = X()(this).constructor
            n = Reflect.construct(i, arguments, r)
          } else n = i.apply(this, arguments)
          return j()(this, n)
        }
      }
      Gs._withStripped = !0
      var Ws = (function (e) {
          z()(n, e)
          var t = Xs(n)
          function n() {
            return F()(this, n), t.apply(this, arguments)
          }
          return (
            V()(n, [
              {
                key: "toOpenState",
                value: function () {
                  var e = new W.TimelineMax(),
                    t = this.parentController.$refs.cross,
                    n = this.parentController.$refs.line
                  W.TweenLite.killTweensOf([t, n]),
                    e.set(n, {
                      transformOrigin: "right top",
                    }),
                    e.staggerTo(
                      n,
                      0.5,
                      {
                        scaleX: 0,
                        ease: W.Power3.easeOut,
                      },
                      0.05
                    ),
                    e.to(
                      t,
                      0.3,
                      {
                        scale: 1,
                        ease: W.Power3.easeOut,
                      },
                      "-=0.3"
                    )
                },
              },
              {
                key: "toDefaultState",
                value: function () {
                  var e = new W.TimelineMax(),
                    t = this.parentController.$refs.cross,
                    n = this.parentController.$refs.line
                  W.TweenLite.killTweensOf([t, n]),
                    e.set(n, {
                      transformOrigin: "left top",
                    }),
                    e.to(t, 0.3, {
                      scale: 0,
                      ease: W.Power3.easeOut,
                    }),
                    e.staggerTo(
                      n,
                      0.5,
                      {
                        scaleX: 1,
                        ease: W.Power3.easeOut,
                      },
                      0.05,
                      "-=0.2"
                    )
                },
              },
              {
                key: "setupTransitionInTimeline",
                value: function (e, t, n) {
                  var i = t.$refs,
                    r = i.background,
                    o = i.cross,
                    a = t.$refs.line
                  e.set(o, {
                    scale: 0,
                    opacity: 1,
                  }),
                    e.fromTo(
                      r,
                      0.8,
                      {
                        xPercent: -105,
                      },
                      {
                        xPercent: 0,
                        ease: W.Power3.easeOut,
                        clearProps: "xPercent",
                      }
                    ),
                    e.staggerFromTo(
                      a,
                      0.8,
                      {
                        transformOrigin: "left center",
                        scaleX: 0,
                      },
                      {
                        scaleX: 1,
                        ease: W.Power3.easeOut,
                        clearProps: "transformOrigin,scaleX",
                      },
                      0.05,
                      0.1
                    )
                },
              },
              {
                key: "setupTransitionOutTimeline",
                value: function (e, t, n) {},
              },
              {
                key: "setupLoopingAnimationTimeline",
                value: function (e, t, n) {},
              },
            ]),
            n
          )
        })(N.AbstractTransitionController),
        Ys = {
          name: "ToggleMenuButton",
          props: {
            isOpen: u.a.bool.required,
          },
          extends: N.AbstractTransitionComponent,
          watch: {
            isOpen: function (e) {
              e ? this.transitionController.toOpenState() : this.transitionController.toDefaultState()
            },
          },
          methods: {
            handleAllComponentsReady: function () {
              ;(this.transitionController = new Ws(this)), this.isReady()
            },
          },
        },
        qs = n(210)
      var Ks = Object(v.a)(
          Ys,
          Gs,
          [],
          !1,
          function (e) {
            this.$style = qs.default.locals || qs.default
          },
          null,
          null
        ).exports,
        Zs = function () {
          var e = this,
            t = e._self._c
          e._self._setupProxy
          return t(
            "nav",
            {
              class: [e.$style.navigationOverlay],
            },
            [
              t(
                "div",
                {
                  ref: "content",
                  class: ["heading-xl", e.$style.content],
                },
                [
                  e._l(e.menuItems, function (n, i) {
                    return t("span", {
                      key: "background-".concat(i),
                      class: [e.$style.mainBackground, I()({}, e.$style.isActive, e.slugsHovered === n.slug)],
                      style: {
                        backgroundImage: "url(".concat(e.$versionRoot, "image/navigation-overlay/").concat(n.slug, ".").concat(e.$webp("jpg"), ")"),
                      },
                    })
                  }),
                  e._v(" "),
                  t(
                    "ul",
                    {
                      ref: "smallItems",
                      class: ["heading-l", e.$style.small],
                    },
                    e._l(e.staticPages, function (n, i) {
                      return t(
                        "li",
                        {
                          key: "static-".concat(i),
                        },
                        [
                          t(
                            "router-link",
                            {
                              attrs: {
                                to: {
                                  name: n.name,
                                },
                              },
                              nativeOn: {
                                mouseenter: function (t) {
                                  return e.$soundManager.play(e.SampleName.NAVIGATION_HOVER_SMALL)
                                },
                                click: function (t) {
                                  return e.$soundManager.play(e.SampleName.CLICK)
                                },
                              },
                            },
                            [e._v("\n          " + e._s(e.$t(n.label)) + "\n        ")]
                          ),
                        ],
                        1
                      )
                    }),
                    0
                  ),
                  e._v(" "),
                  t(
                    "ul",
                    {
                      class: ["heading-xl", e.$style.large],
                    },
                    [
                      e._l(e.menuItems, function (n, i) {
                        return t(
                          "li",
                          {
                            key: "item-".concat(i),
                            ref: "menuItem",
                            refInFor: !0,
                          },
                          [
                            t(
                              "router-link",
                              {
                                attrs: {
                                  to: {
                                    name: e.RouteNames.DETAIL,
                                    params: {
                                      slug: n.slug,
                                    },
                                  },
                                },
                                nativeOn: {
                                  mouseenter: function (t) {
                                    return e.onSlugMouseEnter(n.slug)
                                  },
                                  mouseleave: function (t) {
                                    return e.onSlugMouseLeave.apply(null, arguments)
                                  },
                                  click: function (t) {
                                    return e.$soundManager.play(e.SampleName.CLICK)
                                  },
                                },
                              },
                              [e._v("\n          " + e._s(n.label) + "\n        ")]
                            ),
                          ],
                          1
                        )
                      }),
                      e._v(" "),
                      t(
                        "li",
                        {
                          ref: "smallItem",
                          class: ["heading-l", e.$style.smallItem],
                        },
                        [
                          t(
                            "router-link",
                            {
                              attrs: {
                                to: {
                                  name: e.RouteNames.ALL_CHALLENGES,
                                },
                              },
                              nativeOn: {
                                mouseenter: function (t) {
                                  return e.$soundManager.play(e.SampleName.NAVIGATION_HOVER_SMALL)
                                },
                                click: function (t) {
                                  return e.$soundManager.play(e.SampleName.CLICK)
                                },
                              },
                            },
                            [e._v("\n          " + e._s(e.$t("navigation.allChallenges")) + "\n        ")]
                          ),
                        ],
                        1
                      ),
                      e._v(" "),
                      t(
                        "li",
                        {
                          ref: "miniItem",
                          class: ["copy-l", e.$style.miniItem],
                        },
                        [
                          t(
                            "a",
                            {
                              attrs: {
                                href: e.$t("navigation.privacy.href"),
                                target: "_blank",
                                rel: "noopener",
                                "event-category": "Main navigation",
                                "event-action": "Click",
                                "event-label": "Privacy policy",
                              },
                              on: {
                                mouseenter: function (t) {
                                  return e.$soundManager.play(e.SampleName.NAVIGATION_HOVER_SMALL)
                                },
                              },
                              nativeOn: {
                                click: function (t) {
                                  return e.$soundManager.play(e.SampleName.CLICK)
                                },
                              },
                            },
                            [e._v("\n          " + e._s(e.$t("navigation.privacy.label")) + "\n        ")]
                          ),
                        ]
                      ),
                    ],
                    2
                  ),
                ],
                2
              ),
            ]
          )
        }
      function Qs(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ("function" === typeof Proxy) return !0
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var n,
            i = X()(e)
          if (t) {
            var r = X()(this).constructor
            n = Reflect.construct(i, arguments, r)
          } else n = i.apply(this, arguments)
          return j()(this, n)
        }
      }
      Zs._withStripped = !0
      var Js = (function (e) {
        z()(n, e)
        var t = Qs(n)
        function n() {
          return F()(this, n), t.apply(this, arguments)
        }
        return (
          V()(n, [
            {
              key: "setupTransitionInTimeline",
              value: function (e, t, n) {
                var i = t.$refs.menuItem
                e.add(Y(t.$el, 0.5)), e.add(zn(t.$el, !1), 0), e.add(zn(t.$refs.content), 0.1)
                var r = [].concat(Le()(i), [t.$refs.smallItem, t.$refs.miniItem])
                e.staggerFromTo(
                  r,
                  1,
                  {
                    y: 0.1 * window.innerHeight,
                    opacity: 0,
                  },
                  {
                    y: 0,
                    opacity: 1,
                    ease: W.Power3.easeOut,
                    clearProps: "y,opacity",
                  },
                  0.1,
                  0.2
                ),
                  e.add(Y(t.$refs.smallItems, 0.5), 0.3)
              },
            },
            {
              key: "setupTransitionOutTimeline",
              value: function (e, t, n) {
                e.add(q(t.$el, 0.25))
              },
            },
            {
              key: "setupLoopingAnimationTimeline",
              value: function (e, t, n) {},
            },
          ]),
          n
        )
      })(N.AbstractTransitionController)
      var el = {
          name: "NavigationOverlay",
          extends: N.AbstractTransitionComponent,
          props: {
            isOpen: u.a.bool.required,
          },
          data: function () {
            return {
              staticPages: [
                {
                  label: "navigation.home",
                  name: Da.HOME,
                },
                {
                  label: "navigation.about",
                  name: Da.ABOUT,
                },
                {
                  label: "navigation.technology",
                  name: Da.TECHNOLOGY,
                },
              ],
              slugsHovered: null,
            }
          },
          computed: {
            menuItems: function () {
              var e = this.$store.getters.translation.challenges
              return Object.keys(e).map(function (t) {
                return {
                  label: e[t].title,
                  slug: t,
                }
              })
            },
          },
          watch: {
            isOpen: function (e) {
              e ? (this.transitionIn(!0), this.$soundManager.play(this.SampleName.FOLDOUT)) : this.transitionOut(!0),
                (function () {
                  var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                    t = C("scrollTracker")
                  t.enabled = !e
                })(e)
            },
          },
          mounted: function () {
            ;(this.resizeListener = new B.DisposableEventListener(window, "resize", this.onResize)), this.onResize()
          },
          beforeDestroy: function () {
            this.resizeListener && this.resizeListener.dispose()
          },
          methods: {
            handleAllComponentsReady: function () {
              ;(this.transitionController = new Js(this)), this.isReady()
            },
            onSlugMouseEnter: function (e) {
              ;(this.slugsHovered = e), this.$soundManager.play(this.SampleName.NAVIGATION_HOVER_BIG)
            },
            onSlugMouseLeave: function () {
              this.slugsHovered = null
            },
            onResize: function () {
              this.$el.style.height = "".concat(window.innerHeight, "px")
            },
          },
        },
        tl = n(211)
      function nl(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e)
          t &&
            (i = i.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, i)
        }
        return n
      }
      function il(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? nl(Object(n), !0).forEach(function (t) {
                I()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : nl(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var rl = {
          name: "SiteHeader",
          components: {
            ToggleMenuButton: Ks,
            SponsorLogos: Oe,
            PrimaryButton: qt,
            NavigationOverlay: Object(v.a)(
              el,
              Zs,
              [],
              !1,
              function (e) {
                this.$style = tl.default.locals || tl.default
              },
              null,
              null
            ).exports,
          },
          extends: N.AbstractTransitionComponent,
          data: function () {
            return {
              isOpen: !1,
            }
          },
          computed: il(
            il(
              {},
              Object(L.c)({
                deviceState: function (e) {
                  return e.app.deviceState
                },
                monotone: function (e) {
                  return e.app.isHeaderMonotone
                },
                contactHidden: function (e) {
                  return e.app.manualContactHidden
                },
              })
            ),
            {},
            {
              isNavigationActive: function () {
                return this.$route.name !== this.RouteNames.INTRO
              },
              showSponsorLogos: function () {
                return (
                  (this.$route.name !== this.RouteNames.HOME && this.isNavigationActive) ||
                  (this.$route.name === this.RouteNames.HOME && this.isNavigationActive && this.deviceState >= En.deviceState.MEDIUM)
                )
              },
              showContactButton: function () {
                return this.$route.name !== this.RouteNames.HOME && !this.contactHidden
              },
            }
          ),
          watch: {
            $route: function () {
              this.isOpen = !1
            },
            showSponsorLogos: function () {
              this.showSponsorLogos ? this.$refs.logos.transitionIn(!0) : this.$refs.logos.transitionOut(!0)
            },
            isNavigationActive: function () {
              this.isNavigationActive ? this.transitionIn(!0) : this.transitionOut(!0)
            },
            isOpen: function () {
              this.$emit("openChange", this.isOpen)
            },
          },
          mounted: function () {
            this.$scrollTracker.addFixed(this.$el), this.$scrollTracker.addEventListener(Cs.types.UPDATE, this.onScrollUpdate)
          },
          methods: {
            handleAllComponentsReady: function () {
              ;(this.transitionController = new js(this)),
                this.isNavigationActive && this.transitionIn(!0),
                this.showSponsorLogos && this.$refs.logos.transitionIn(!0),
                this.isReady()
            },
            onToggleClick: function () {
              this.isOpen = !this.isOpen
            },
            onScrollUpdate: function (e) {
              var t = e.data
              W.TweenLite.set(this.$refs.logos.$el, {
                y: -t.y,
              })
            },
          },
        },
        ol = n(212)
      var al = Object(v.a)(
          rl,
          zs,
          [],
          !1,
          function (e) {
            this.$style = ol.default.locals || ol.default
          },
          null,
          null
        ).exports,
        sl = function () {
          var e,
            t = this,
            n = t._self._c
          t._self._setupProxy
          return n(
            "div",
            {
              class: [t.$style.startNavigation, ((e = {}), I()(e, t.$style.isActive, t.isNavigationActive), I()(e, t.$style.isMenuOpen, t.isMenuOpen), e)],
            },
            [
              t._l(t.menuItems, function (e, i) {
                return n(
                  "div",
                  {
                    key: "slide-background-".concat(i),
                    ref: "slideBackground",
                    refInFor: !0,
                    class: ["abs-fill", t.$style.slideBackground, I()({}, t.$style.isActive, t.activeSlide === i)],
                  },
                  [
                    n("LoopingVideo", {
                      attrs: {
                        src: t.$assetLoader.getAsset(t.GLOBAL_ASSETS["LOOP_".concat(e.slug.toUpperCase())]),
                        "is-active": t.activeSlide === i && t.inView,
                      },
                    }),
                  ],
                  1
                )
              }),
              t._v(" "),
              n(
                "ul",
                {
                  ref: "topPlanets",
                  class: t.$style.planetOutlines,
                },
                t._l(t.menuItems, function (e, i) {
                  return n(
                    "li",
                    {
                      key: "top-planet-".concat(i),
                      class: I()({}, t.$style.isActive, i === t.activeSlide),
                    },
                    [
                      n("span", {
                        class: [t.$style.planetOutline, t.$style["planet-".concat(e.planets.top.type)]],
                      }),
                      t._v(" "),
                      n(
                        "span",
                        {
                          class: t.$style.planetSize,
                        },
                        [t._v(t._s(e.planets.top.distance))]
                      ),
                    ]
                  )
                }),
                0
              ),
              t._v(" "),
              n(
                "ul",
                {
                  ref: "bottomPlanets",
                  class: [t.$style.planetOutlines, t.$style.bottom],
                },
                t._l(t.menuItems, function (e, i) {
                  return n(
                    "li",
                    {
                      key: "bottom-planet-".concat(i),
                      class: I()({}, t.$style.isActive, i === t.activeSlide),
                    },
                    [
                      n("span", {
                        class: [t.$style.planetOutline, t.$style["planet-".concat(e.planets.bottom.type)]],
                      }),
                      t._v(" "),
                      n(
                        "span",
                        {
                          class: t.$style.planetSize,
                        },
                        [t._v(t._s(e.planets.bottom.distance))]
                      ),
                    ]
                  )
                }),
                0
              ),
              t._v(" "),
              n("MainNavigationPlanets", {
                ref: "planets",
                attrs: {
                  items: t.menuItems,
                  "in-view": t.inView,
                },
              }),
              t._v(" "),
              n(
                "div",
                {
                  ref: "wrapper",
                  class: t.$style.itemsWrapper,
                },
                [
                  n(
                    "ul",
                    {
                      ref: "dragger",
                      class: t.$style.items,
                    },
                    t._l(t.menuItems, function (e, i) {
                      var r
                      return n(
                        "li",
                        {
                          key: "item-".concat(i),
                          ref: "item",
                          refInFor: !0,
                        },
                        [
                          n(
                            "div",
                            {
                              ref: "itemContent",
                              refInFor: !0,
                              class: t.$style.itemContent,
                            },
                            [
                              n(
                                "h1",
                                {
                                  ref: "itemTitle",
                                  refInFor: !0,
                                  class: [
                                    "heading-xl",
                                    t.$style.itemTitle,
                                    ((r = {}),
                                    I()(r, t.$style.isActive, t.hoveredItem === i),
                                    I()(r, t.$style.isInActive, i !== t.activeSlide && t.isTransitionedIn),
                                    I()(r, t.$style.isInActiveHovered, t.isInActiveHovered(i)),
                                    r),
                                  ],
                                  on: {
                                    mouseenter: function (e) {
                                      return t.onTitleMouseEnter(i)
                                    },
                                    mouseleave: t.onTitleMouseLeave,
                                    click: function (n) {
                                      return t.onTitleClick(e.slug)
                                    },
                                  },
                                },
                                [
                                  n(
                                    "span",
                                    {
                                      attrs: {
                                        "data-title": e.title,
                                      },
                                    },
                                    [t._v(t._s(e.title))]
                                  ),
                                ]
                              ),
                              t._v(" "),
                              t.deviceState > t.DeviceState.MEDIUM
                                ? n(
                                    "h2",
                                    {
                                      class: ["heading-l", t.$style.itemSubtitle],
                                    },
                                    [
                                      n(
                                        "ScrambleText",
                                        {
                                          ref: "subtitle",
                                          refInFor: !0,
                                          class: t.$style.itemSubTitle,
                                        },
                                        [t._v(t._s(e.subtitle))]
                                      ),
                                    ],
                                    1
                                  )
                                : n(
                                    "p",
                                    {
                                      ref: "subtitleParagraph",
                                      refInFor: !0,
                                      class: ["copy-l", t.$style.itemSubtext],
                                    },
                                    [t._v("\n            " + t._s(e.challengeCard.join(" ")) + "\n          ")]
                                  ),
                            ]
                          ),
                          t._v(" "),
                          n("div", {
                            ref: "trigger",
                            refInFor: !0,
                            class: ["abs-fill", t.$style.dragTrigger],
                            on: {
                              click: function (n) {
                                return t.onTitleClick(e.slug)
                              },
                            },
                          }),
                        ]
                      )
                    }),
                    0
                  ),
                ]
              ),
              t._v(" "),
              t.deviceState > t.DeviceState.MEDIUM
                ? n("MainNavigationChallengeCards", {
                    ref: "cards",
                    attrs: {
                      items: t.menuItems,
                      "is-hovered": null !== t.hoveredItem,
                    },
                    on: {
                      mouseenter: t.onCardMouseEnter,
                      mouseleave: t.onCardMouseLeave,
                      click: t.onCardClick,
                    },
                  })
                : t._e(),
              t._v(" "),
              n("button", {
                class: t.$style.previous,
                attrs: {
                  title: "previous",
                },
                on: {
                  click: t.previous,
                  mouseenter: function () {
                    return (t.isPreviousHovered = !0)
                  },
                  mouseleave: function () {
                    return (t.isPreviousHovered = !1)
                  },
                },
              }),
              t._v(" "),
              n("button", {
                class: t.$style.next,
                attrs: {
                  title: "next",
                },
                on: {
                  click: t.next,
                  mouseenter: function () {
                    return (t.isNextHovered = !0)
                  },
                  mouseleave: function () {
                    return (t.isNextHovered = !1)
                  },
                },
              }),
              t._v(" "),
              n("div", {
                ref: "proxy",
              }),
            ],
            2
          )
        }
      function ll(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ("function" === typeof Proxy) return !0
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var n,
            i = X()(e)
          if (t) {
            var r = X()(this).constructor
            n = Reflect.construct(i, arguments, r)
          } else n = i.apply(this, arguments)
          return j()(this, n)
        }
      }
      sl._withStripped = !0
      var ul = (function (e) {
        z()(n, e)
        var t = ll(n)
        function n() {
          var e
          return F()(this, n), ((e = t.apply(this, arguments)).currentActiveSlide = null), (e.fromDisabledState = !1), e
        }
        return (
          V()(n, [
            {
              key: "onActiveSlideUpdate",
              value: function (e) {
                var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                  i = this.parentController.$refs,
                  r = i.slideBackground,
                  o = i.subtitleParagraph,
                  a = this.parentController.$refs.subtitle,
                  s = this.parentController.$refs,
                  l = s.cards,
                  u = s.planets,
                  c = new W.TimelineMax(),
                  h = n.ANIMATION_IN_DELAY
                this.fromDisabledState || (c.add(zn(r[e]), 0.5), c.add(Y(r[e]), 0.5))
                var f = this.fromDisabledState ? 0.5 : 0.9
                return (
                  a &&
                    c.add(
                      function () {
                        return a[e].transitionIn(!0)
                      },
                      t ? f : h + 1
                    ),
                  o && c.add(Y(o[e]), t ? f : h + 1),
                  l &&
                    c.add(
                      function () {
                        return l.showItem(e, t ? null : -1)
                      },
                      t ? 0 : h
                    ),
                  c.add(
                    function () {
                      return u.showItem(e)
                    },
                    t ? 0 : h - 0.5
                  ),
                  null !== this.currentActiveSlide &&
                    this.currentActiveSlide !== e &&
                    (c.addLabel("hideOld", 0.5), a && c.add(this.getTimeline(a[this.currentActiveSlide], Ut.a.OUT), 0), o && c.add(q(o[this.currentActiveSlide], 0.2), 0)),
                  (this.currentActiveSlide = e),
                  (this.fromDisabledState = !1),
                  new Promise(function (e) {
                    c.eventCallback("onComplete", function () {
                      return e()
                    })
                  })
                )
              },
            },
            {
              key: "toDisabledState",
              value: function () {
                var e = this,
                  t = this.parentController.$refs.subtitleParagraph,
                  n = this.parentController.$refs.subtitle,
                  i = this.parentController.$refs,
                  r = i.cards,
                  o = i.planets,
                  a = new W.TimelineMax()
                n && a.add(this.getTimeline(n[this.currentActiveSlide], Ut.a.OUT), 0),
                  t && a.add(q(t[this.currentActiveSlide]), 0),
                  r &&
                    a.add(function () {
                      return r.hideItem(e.currentActiveSlide)
                    }, 0),
                  a.add(function () {
                    return o.hideItem(e.currentActiveSlide)
                  }, 0),
                  (this.fromDisabledState = !0)
              },
            },
            {
              key: "setupTransitionInTimeline",
              value: function (e, t, i) {
                var r = t.$refs,
                  o = r.slideBackground,
                  a = r.subtitleParagraph,
                  s = t.$refs,
                  l = s.topPlanets,
                  u = s.bottomPlanets
                W.TweenLite.set(o, {
                  autoAlpha: 0,
                }),
                  a &&
                    W.TweenLite.set(a, {
                      autoAlpha: 0,
                    }),
                  e.add(function () {}, 1),
                  e.add(this.getTimeline(t.$refs.planets), n.ANIMATION_IN_DELAY + 0.25),
                  e.add(this.getTitleTimeline(), 0),
                  e.add(Y(l), n.ANIMATION_IN_DELAY + 0.25),
                  e.add(Y(u), n.ANIMATION_IN_DELAY + 0.25)
              },
            },
            {
              key: "setupTransitionOutTimeline",
              value: function (e, t, n) {},
            },
            {
              key: "setupLoopingAnimationTimeline",
              value: function (e, t, n) {},
            },
            {
              key: "getTitleTimeline",
              value: function () {
                var e = this.parentController.$refs,
                  t = e.item,
                  i = e.itemContent,
                  r = i.length,
                  o = new W.TimelineMax()
                o.add(function () {
                  return W.TweenLite.set(t, {
                    pointerEvents: "none",
                  })
                })
                var a = [i[(-1 + r) % r], i[0], i[1 % r]]
                o.addLabel("toDefault", n.ANIMATION_IN_DELAY)
                var s = i[0].getBoundingClientRect()
                return (
                  a.forEach(function (e, t) {
                    var n = e.getBoundingClientRect(),
                      i = {
                        x: s.left - n.left,
                        y: s.top - n.top - n.height * (a.length - t - 2),
                      }
                    o.fromTo(
                      e,
                      1,
                      {
                        x: i.x,
                        y: i.y - window.innerHeight,
                      },
                      Object.assign(i, {
                        ease: W.Power2.easeInOut,
                      }),
                      0.1 * (a.length - t)
                    ),
                      o.to(
                        e,
                        1,
                        {
                          x: 0,
                          y: 0,
                          ease: W.Power2.easeInOut,
                          clearProps: "x,y",
                        },
                        "toDefault"
                      ),
                      1 !== t &&
                        o.fromTo(
                          e.parentNode,
                          0.6,
                          {
                            opacity: 1,
                          },
                          {
                            opacity: 0.4,
                            ease: W.Power2.easeIn,
                          },
                          "toDefault+=0.4"
                        )
                  }),
                  o.add(function () {
                    return W.TweenLite.set(t, {
                      clearProps: "pointerEvents",
                    })
                  }),
                  o
                )
              },
            },
          ]),
          n
        )
      })(N.AbstractTransitionController)
      ul.ANIMATION_IN_DELAY = 3
      var cl = n(305),
        hl = n(304),
        fl = n.n(hl)
      function dl(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ("function" === typeof Proxy) return !0
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var n,
            i = X()(e)
          if (t) {
            var r = X()(this).constructor
            n = Reflect.construct(i, arguments, r)
          } else n = i.apply(this, arguments)
          return j()(this, n)
        }
      }
      var pl = (function (e) {
          z()(n, e)
          var t = dl(n)
          function n() {
            return F()(this, n), t.apply(this, arguments)
          }
          return V()(n)
        })(Object(xs.createEventClass)()("CHANGE")),
        vl = n(83),
        gl = n.n(vl)
      function ml(e, t) {
        return new B.DisposableEventListener(document, "keyup", function (n) {
          n.keyCode === e && t()
        })
      }
      function _l(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ("function" === typeof Proxy) return !0
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var n,
            i = X()(e)
          if (t) {
            var r = X()(this).constructor
            n = Reflect.construct(i, arguments, r)
          } else n = i.apply(this, arguments)
          return j()(this, n)
        }
      }
      var yl = (function (e) {
          z()(n, e)
          var t = _l(n)
          function n(e, i, r, o) {
            var a
            return (
              F()(this, n),
              ((a = t.call(this)).itemWidth = 0),
              (a.itemHeight = 0),
              (a.viewHeight = 0),
              (a.animation = null),
              (a.snapIndex = 0),
              (a.previousSnapIndex = 0),
              (a.wheelListener = null),
              (a.upKeyListener = null),
              (a.downKeyListener = null),
              (a.leftKeyListener = null),
              (a.rightKeyListener = null),
              (a.resizeListener = null),
              (a.swipeListener = null),
              (a.swipeWrapperListener = null),
              (a.isDragging = !1),
              (a.isAnimating = !1),
              (a.wheel = function (e, t) {
                a.isMoving || (t > 0 ? (a.removeWheel(), a.next()) : t < 0 && (a.removeWheel(), a.previous()))
              }),
              (a.wrapperElement = e),
              (a.dragElement = i),
              (a.carouselItems = r),
              (a.triggers = o),
              (a.dragProxy = document.createElement("div")),
              a.wrapperElement.appendChild(a.dragProxy),
              a.updateSize(),
              a.createAnimation(),
              a.createDraggable(),
              a.setAnimationProgress(-1e-10),
              a
            )
          }
          return (
            V()(n, [
              {
                key: "enable",
                value: function () {
                  var e,
                    t = this
                  this.disable(),
                    this.addWheel(),
                    (this.upKeyListener =
                      ((e = function () {
                        return t.previous()
                      }),
                      ml(gl.a.UP, e))),
                    (this.downKeyListener = (function (e) {
                      return ml(gl.a.DOWN, e)
                    })(function () {
                      return t.next()
                    })),
                    (this.leftKeyListener = (function (e) {
                      return ml(gl.a.LEFT, e)
                    })(function () {
                      return t.previous()
                    })),
                    (this.rightKeyListener = (function (e) {
                      return ml(gl.a.RIGHT, e)
                    })(function () {
                      return t.next()
                    })),
                    (this.resizeListener = new B.DisposableEventListener(window, "resize", Ve()(this.updateSize.bind(this), 150))),
                    (this.swipeWrapperListener = fl()(this.wrapperElement)),
                    (this.swipeListener = new B.DisposableEventListener(this.wrapperElement, "swipe", function (e) {
                      var n = e.detail.directions
                      n.top ? t.next() : n.bottom && t.previous()
                    }))
                },
              },
              {
                key: "disable",
                value: function () {
                  this.removeWheel(),
                    this.upKeyListener && this.upKeyListener.dispose(),
                    this.downKeyListener && this.downKeyListener.dispose(),
                    this.leftKeyListener && this.leftKeyListener.dispose(),
                    this.rightKeyListener && this.rightKeyListener.dispose(),
                    this.resizeListener && this.resizeListener.dispose(),
                    this.swipeListener && this.swipeListener.dispose(),
                    this.swipeWrapperListener && (this.swipeWrapperListener.off(), (this.swipeWrapperListener = null))
                },
              },
              {
                key: "index",
                get: function () {
                  var e = this.carouselItems.length
                  return ((this.snapIndex % e) + e) % e
                },
              },
              {
                key: "updateSize",
                value: function () {
                  this.setItemDimensions(),
                    this.setItemPositions(),
                    this.dragger &&
                      (this.createAnimation(), this.hasOverflow ? this.dragger.enable() : (this.dragger.disable(), (this.snapIndex = 0)), this.goto(this.snapIndex, 0.1, 0))
                },
              },
              {
                key: "previous",
                value: function () {
                  var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
                  if (!this.isMoving) {
                    var t = e ? Math.floor(this.viewHeight / this.itemHeight) : 1
                    ;(this.snapIndex -= t), this.goto(this.snapIndex)
                  }
                },
              },
              {
                key: "next",
                value: function () {
                  var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
                  if (!this.isMoving) {
                    var t = Math.floor(this.viewHeight / this.itemHeight),
                      n = e ? t : 1
                    ;(this.snapIndex += n), this.goto(this.snapIndex)
                  }
                },
              },
              {
                key: "activate",
                value: function (e) {
                  ;(this.snapIndex = this.getNearestRotationIndex(this.snapIndex, e, this.carouselItems.length)), this.goto(this.snapIndex)
                },
              },
              {
                key: "isMoving",
                get: function () {
                  return this.isAnimating || this.isDragging
                },
              },
              {
                key: "addWheel",
                value: function () {
                  this.wheelListener = Hn()(this.wheel, !0)
                },
              },
              {
                key: "removeWheel",
                value: function () {
                  this.wheelListener && window.removeEventListener("wheel", this.wheelListener)
                },
              },
              {
                key: "setItemDimensions",
                value: function () {
                  ;(this.viewHeight = this.wrapperElement.offsetHeight),
                    this.carouselItems &&
                      this.carouselItems.length > 0 &&
                      ((this.itemHeight = this.carouselItems[0].offsetHeight),
                      (this.itemWidth = Math.max.apply(
                        Math,
                        Le()(
                          this.carouselItems.map(function (e) {
                            return e.offsetWidth
                          })
                        )
                      )))
                },
              },
              {
                key: "setItemPositions",
                value: function () {
                  var e = this
                  W.TweenMax.staggerTo(
                    this.carouselItems,
                    0,
                    {
                      cycle: {
                        y: function (t) {
                          return e.itemHeight * (t + 2)
                        },
                      },
                    },
                    0
                  ),
                    W.TweenMax.set(this.dragElement, {
                      top: 2 * -this.itemHeight,
                    })
                },
              },
              {
                key: "createAnimation",
                value: function () {
                  cl.a,
                    W.TweenMax.killTweensOf(this.carouselItems),
                    (this.animation = null),
                    this.hasOverflow &&
                      (this.animation = W.TweenMax.to(this.carouselItems, 1, {
                        y: "+=".concat(this.itemHeight * this.carouselItems.length),
                        ease: W.Linear.easeNone,
                        paused: !0,
                        repeat: -1,
                        modifiers: {
                          y: this.getAnimationModifier.bind(this),
                        },
                      }))
                },
              },
              {
                key: "createDraggable",
                value: function () {
                  var e = this,
                    t = Tn.a.create(this.dragProxy, {
                      type: "y",
                      throwProps: !0,
                      overshootTolerance: 1,
                      allowNativeTouchScrolling: !1,
                      onPress: function () {
                        e.isMoving && e.dragger.endDrag()
                      },
                      onDragStart: function () {
                        e.isDragging = !0
                      },
                      onDrag: this.onUpdateProgress.bind(this),
                      onThrowUpdate: this.onUpdateProgress.bind(this),
                      onThrowComplete: this.onThrowComplete.bind(this),
                      snap: this.getSnap.bind(this),
                    }),
                    n = Fe()(t, 1)
                  ;(this.dragger = n[0]), this.hasOverflow || this.dragger.disable()
                },
              },
              {
                key: "getAnimationModifier",
                value: function (e, t) {
                  var n = e % (this.itemHeight * this.carouselItems.length),
                    i = (n - 2 * this.itemHeight) / this.itemHeight
                  return (
                    W.TweenMax.set(t, {
                      xPercent: -30 * i,
                      opacity: 0.6 * (1 - Math.abs(Ke()(i, -1, 1))) + 0.4,
                    }),
                    n
                  )
                },
              },
              {
                key: "getSnap",
                value: function (e) {
                  return (
                    (this.snapIndex = -1 * Math.round(e / this.itemHeight)),
                    this.snapIndex !== this.previousSnapIndex &&
                      this.dispatchEvent(
                        new pl(pl.types.CHANGE, {
                          index: this.index,
                          direction: this.snapIndex > this.previousSnapIndex ? 1 : -1,
                        })
                      ),
                    (this.previousSnapIndex = this.snapIndex),
                    -1 * this.snapIndex * this.itemHeight
                  )
                },
              },
              {
                key: "onThrowComplete",
                value: function () {
                  this.isDragging = !1
                },
              },
              {
                key: "onUpdateProgress",
                value: function () {
                  this.setAnimationProgress(this.dragger.y / (this.itemHeight * this.carouselItems.length)), this.animation && this.animation.progress()
                },
              },
              {
                key: "goto",
                value: function (e) {
                  var t = this,
                    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1.25,
                    i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0
                  W.TweenMax.killTweensOf(this.dragger), W.TweenMax.killTweensOf(this.dragElement)
                  var r = this.dragger.y,
                    o = -1 * e * this.itemHeight,
                    a = new W.TimelineMax({
                      onUpdate: function () {
                        W.TweenMax.set(t.dragProxy, {
                          y: t.dragger.y,
                        }),
                          t.onUpdateProgress()
                      },
                      onStart: function () {
                        ;(t.isAnimating = !0),
                          t.removeWheel(),
                          t.dispatchEvent(
                            new pl(pl.types.CHANGE, {
                              index: t.index,
                              direction: o > r ? 1 : -1,
                            })
                          )
                      },
                      onComplete: function () {
                        t.addWheel(), (t.isAnimating = !1)
                      },
                    })
                  a.to(this.dragger, n, {
                    delay: i,
                    y: o,
                    ease: W.Power3.easeInOut,
                  })
                },
              },
              {
                key: "setAnimationProgress",
                value: function (e) {
                  this.animation && this.animation.progress(e)
                },
              },
              {
                key: "getNearestRotationIndex",
                value: function (e, t, n) {
                  for (var i = e, r = t; i < 0; ) i += n
                  for (; t < 0; ) r += n
                  var o = Math.abs(i - r)
                  return o > n / 2 ? (i > r ? e + (n - o) : e - (n - o)) : i < r ? e + o : e - o
                },
              },
              {
                key: "hasOverflow",
                get: function () {
                  return this.viewHeight < this.itemHeight * this.carouselItems.length
                },
              },
              {
                key: "dispose",
                value: function () {
                  W.TweenMax.killTweensOf(this.dragger),
                    this.dragger && this.dragger.kill(),
                    this.animation && (this.animation.kill(), (this.animation = null)),
                    this.disable(),
                    Mi()(X()(n.prototype), "dispose", this).call(this)
                },
              },
            ]),
            n
          )
        })(ks.a),
        Tl = function () {
          var e = this,
            t = e._self._c
          e._self._setupProxy
          return t(
            "div",
            {
              class: [e.$style.mainNavigationChallengeCards, I()({}, e.$style.isHover, e.isHovered)],
            },
            [
              t(
                "svg",
                {
                  attrs: {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 282 409",
                  },
                },
                [
                  t("defs", [
                    t(
                      "g",
                      {
                        attrs: {
                          id: "card-background",
                        },
                      },
                      [
                        t("path", {
                          attrs: {
                            d: "M0,0H282V409H0Z",
                            opacity: "0",
                          },
                        }),
                        e._v(" "),
                        t("path", {
                          attrs: {
                            d: "M276,6V403H6V6H276m2-2H4V405H278V4Z",
                            fill: "#fff",
                          },
                        }),
                        e._v(" "),
                        t("path", {
                          attrs: {
                            d: "M15.5,15.5v378h251V15.5Zm109.63,128A125.19,125.19,0,0,0,52.66,179L17.21,143.5Zm-107.92-1L143,16.71,264.82,142.5Zm123.79,1a124.1,124.1,0,0,1,87.64,36.16L141,267.29,53.36,179.66A124.1,124.1,0,0,1,141,143.5ZM140.29,268,52.66,355.64a124.29,124.29,0,0,1,0-175.28Zm.71.71,87.64,87.63a124.29,124.29,0,0,1-175.28,0Zm.71-.71,87.63-87.64a124.29,124.29,0,0,1,0,175.28ZM229.34,179a125.19,125.19,0,0,0-72.47-35.45H264.79Zm36.16-37.18L144.18,16.5H265.5ZM141.79,16.5,16.5,141.79V16.5ZM16.5,144.21,52,179.66A125.19,125.19,0,0,0,16.5,252.13ZM52,356.34,16.5,391.79V283.87A125.19,125.19,0,0,0,52,356.34ZM17.21,392.5l35.45-35.45a125.19,125.19,0,0,0,72.47,35.45Zm212.13-35.45,35.45,35.45H156.87A125.19,125.19,0,0,0,229.34,357.05Zm36.16,34.74-35.45-35.45a125.19,125.19,0,0,0,35.45-72.47ZM230.05,179.66l35.45-35.45V252.13A125.19,125.19,0,0,0,230.05,179.66Z",
                            fill: "#fff",
                            opacity: "0.1",
                          },
                        }),
                      ]
                    ),
                  ]),
                ]
              ),
              e._v(" "),
              t(
                "ul",
                {
                  class: e.$style.list,
                },
                e._l(e.items, function (n, i) {
                  return t(
                    "li",
                    {
                      key: "list-".concat(i),
                      ref: "item",
                      refInFor: !0,
                      class: e.$style.item,
                    },
                    [
                      t(
                        "svg",
                        {
                          attrs: {
                            viewBox: "0 0 282 409",
                          },
                        },
                        [
                          t("use", {
                            attrs: {
                              "xlink:href": "#card-background",
                              x: "0",
                              y: "0",
                            },
                          }),
                          e._v(" "),
                          t(
                            "g",
                            {
                              staticClass: "plus-default",
                            },
                            [
                              t(
                                "g",
                                {
                                  attrs: {
                                    opacity: "0.1",
                                  },
                                },
                                [
                                  t("path", {
                                    attrs: {
                                      d: "M265,357v35H230V357h35m1-1H229v37h37Z",
                                      fill: "#fff",
                                    },
                                  }),
                                ]
                              ),
                              e._v(" "),
                              t("path", {
                                attrs: {
                                  d: "M251,380v-4H239v-3h12v-4l5,5.5Z",
                                  fill: "#fff",
                                  "fill-rule": "evenodd",
                                },
                              }),
                            ]
                          ),
                          e._v(" "),
                          t("path", {
                            staticClass: "plus-hover",
                            attrs: {
                              d: "M229,356v37h37V356Zm22,24v-4H239v-3h12v-4l5,5.5Z",
                              fill: "#fff",
                              "fill-rule": "evenodd",
                            },
                          }),
                          e._v(" "),
                          t(
                            "g",
                            {
                              class: e.$style.textGroup,
                            },
                            [
                              t(
                                "text",
                                {
                                  class: e.$style.title,
                                  attrs: {
                                    x: "24",
                                    y: "386",
                                  },
                                },
                                [e._v(e._s(e.$t("general.challenge")))]
                              ),
                              e._v(" "),
                              t(
                                "text",
                                {
                                  class: e.$style.content,
                                  attrs: {
                                    x: "24",
                                    y: "15",
                                  },
                                },
                                e._l(n.challengeCard, function (n, r) {
                                  return t(
                                    "tspan",
                                    {
                                      key: "text-".concat(i, "-line-").concat(r),
                                      attrs: {
                                        dy: "24",
                                        x: "24",
                                      },
                                    },
                                    [e._v(e._s(n))]
                                  )
                                }),
                                0
                              ),
                            ]
                          ),
                        ]
                      ),
                    ]
                  )
                }),
                0
              ),
              e._v(" "),
              t("div", {
                staticClass: "abs-fill",
                on: {
                  mouseenter: function (t) {
                    return e.$emit("mouseenter")
                  },
                  mouseleave: function (t) {
                    return e.$emit("mouseleave")
                  },
                  click: function (t) {
                    return e.$emit("click")
                  },
                },
              }),
            ]
          )
        }
      function El(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ("function" === typeof Proxy) return !0
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var n,
            i = X()(e)
          if (t) {
            var r = X()(this).constructor
            n = Reflect.construct(i, arguments, r)
          } else n = i.apply(this, arguments)
          return j()(this, n)
        }
      }
      Tl._withStripped = !0
      var bl = (function (e) {
        z()(n, e)
        var t = El(n)
        function n() {
          var e
          return F()(this, n), ((e = t.apply(this, arguments)).items = []), e
        }
        return (
          V()(n, [
            {
              key: "setupCardTransforms",
              value: function () {
                var e = this.parentController.$refs.item
                ;(this.items = e), this.resetItems(e)
              },
            },
            {
              key: "showItem",
              value: function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
                  i = new W.TimelineMax()
                return (
                  0 === this.items.length && this.setupCardTransforms(),
                  i.fromTo(
                    this.items[e],
                    n.TWEEN_DURATION,
                    {
                      transformOrigin: "50% 50%",
                      xPercent: 50 * t,
                      yPercent: -50 * t,
                      opacity: 0,
                      rotationY: -180 * t,
                    },
                    {
                      xPercent: 0,
                      yPercent: 0,
                      opacity: 1,
                      rotationY: 0,
                      ease: W.Power3.easeInOut,
                    },
                    0
                  ),
                  i
                )
              },
            },
            {
              key: "hideItem",
              value: function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
                  i = new W.TimelineMax()
                return (
                  i.to(
                    this.items[e],
                    0.9 * n.TWEEN_DURATION,
                    {
                      transformOrigin: "50% 50%",
                      xPercent: -50 * t,
                      yPercent: 50 * t,
                      rotationY: 180 * t,
                      ease: W.Power2.easeInOut,
                    },
                    0
                  ),
                  i.to(
                    this.items[e],
                    0.75 * n.TWEEN_DURATION,
                    {
                      opacity: 0,
                      ease: W.Power2.easeInOut,
                    },
                    0
                  ),
                  i
                )
              },
            },
            {
              key: "setupTransitionInTimeline",
              value: function (e, t, n) {
                this.setupCardTransforms()
              },
            },
            {
              key: "setupTransitionOutTimeline",
              value: function (e, t, n) {},
            },
            {
              key: "setupLoopingAnimationTimeline",
              value: function (e, t, n) {},
            },
            {
              key: "resetItems",
              value: function (e) {
                W.TweenLite.set(e, {
                  opacity: 0,
                })
              },
            },
          ]),
          n
        )
      })(N.AbstractTransitionController)
      bl.TWEEN_DURATION = 1.25
      var Al = {
          title: u.a.string,
          subtitle: u.a.string,
          placeholder: u.a.string,
          full: u.a.string,
          planets: u.a.shape({
            top: u.a.shape({
              type: u.a.string,
              distance: u.a.string,
            }),
            bottom: u.a.shape({
              type: u.a.string,
              distance: u.a.string,
            }),
          }),
          challengeCard: u.a.arrayOf(u.a.string),
          meta: u.a.arrayOf(
            u.a.shape({
              title: u.a.string,
              value: u.a.string,
              icon: u.a.string,
            })
          ),
          intro: u.a.shape({
            title: u.a.string,
            content: u.a.string,
          }),
          technology: u.a.shape({
            title: u.a.string,
            content: u.a.string,
            cta: it(
              u.a.shape({
                label: u.a.string,
                href: u.a.string,
              })
            ),
          }),
          cloudProducts: u.a.shape({
            title: u.a.string,
            cards: u.a.arrayOf(u.a.shape(mn)),
            cta: it(
              u.a.shape({
                label: u.a.string,
                href: u.a.string,
              })
            ),
          }),
          team: u.a.shape({
            researchers: u.a.arrayOf(u.a.shape(vi)),
            mentors: u.a.arrayOf(u.a.shape(vi)),
          }),
          slug: u.a.string,
        },
        Rl = {
          name: "MainNavigationChallengeCards",
          extends: N.AbstractTransitionComponent,
          props: {
            isHovered: u.a.bool.def(!1),
            items: u.a.arrayOf(u.a.shape(Al)),
          },
          mounted: function () {
            this.currentActive = null
          },
          methods: {
            handleAllComponentsReady: function () {
              ;(this.transitionController = new bl(this)), this.isReady()
            },
            showItem: function (e) {
              var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null
              return (
                null !== this.currentActive && e !== this.currentActive && this.transitionController.hideItem(this.currentActive, this.direction),
                (this.currentActive = e),
                null !== t && this.setDirection(t),
                this.transitionController.showItem(e, this.direction)
              )
            },
            hideItem: function () {
              var e = this.currentActive
              ;(this.currentActive = null), this.transitionController.hideItem(e)
            },
            setDirection: function (e) {
              this.direction = e
            },
          },
        },
        wl = n(213)
      var xl = Object(v.a)(
          Rl,
          Tl,
          [],
          !1,
          function (e) {
            this.$style = wl.default.locals || wl.default
          },
          null,
          null
        ).exports,
        kl = function () {
          var e = this._self._c
          this._self._setupProxy
          return e("div", {
            class: [this.$style.mainNavigationPlanets],
          })
        }
      function Sl(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ("function" === typeof Proxy) return !0
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var n,
            i = X()(e)
          if (t) {
            var r = X()(this).constructor
            n = Reflect.construct(i, arguments, r)
          } else n = i.apply(this, arguments)
          return j()(this, n)
        }
      }
      kl._withStripped = !0
      var Cl = (function (e) {
          z()(n, e)
          var t = Sl(n)
          function n() {
            return F()(this, n), t.apply(this, arguments)
          }
          return (
            V()(n, [
              {
                key: "setupTransitionInTimeline",
                value: function (e, t, n) {
                  e.add(Y(t.$el)),
                    e.fromTo(
                      t.$el,
                      0.8,
                      {
                        yPercent: 20,
                      },
                      {
                        yPercent: 0,
                        ease: W.Power3.easeOut,
                        clearProps: "yPercent",
                      },
                      0
                    )
                },
              },
              {
                key: "setupTransitionOutTimeline",
                value: function (e, t, n) {},
              },
              {
                key: "setupLoopingAnimationTimeline",
                value: function (e, t, n) {},
              },
            ]),
            n
          )
        })(N.AbstractTransitionController),
        Pl = {
          name: "MainNavigationPlanets",
          extends: N.AbstractTransitionComponent,
          props: {
            items: u.a.arrayOf(u.a.shape(Al)),
            inView: u.a.bool,
          },
          data: function () {
            return {
              shouldPlay: !1,
            }
          },
          computed: {
            isPlaying: function () {
              return this.shouldPlay && this.inView
            },
          },
          watch: {
            isPlaying: function () {
              this.$nasaViewer.paused = !this.isPlaying
            },
          },
          mounted: function () {
            this.$nasaViewer.inject(this.$el), (this.currentActive = null)
          },
          beforeDestroy: function () {
            this.$nasaViewer.revert(), (this.shouldPlay = !1)
          },
          methods: {
            handleAllComponentsReady: function () {
              ;(this.transitionController = new Cl(this)),
                this.transitionController.addEventListener(N.TransitionEvent.TRANSITION_IN_START, this.onTransitionInStart),
                this.isReady()
            },
            onTransitionInStart: function () {
              this.shouldPlay = !0
            },
            showItem: function (e) {
              var t = [ia.Moon, ia.Earth, ia.Sun]
              this.$nasaViewer.show(t[e % t.length])
            },
            hideItem: function () {
              this.$nasaViewer.show(ia.None)
            },
          },
        },
        Ol = n(214)
      var Ml = Object(v.a)(
        Pl,
        kl,
        [],
        !1,
        function (e) {
          this.$style = Ol.default.locals || Ol.default
        },
        null,
        null
      ).exports
      function Il(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e)
          t &&
            (i = i.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, i)
        }
        return n
      }
      function Ll(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Il(Object(n), !0).forEach(function (t) {
                I()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Il(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var Nl = {
          name: "StartNavigation",
          components: {
            ScrambleText: we,
            MainNavigationChallengeCards: xl,
            MainNavigationPlanets: Ml,
            LoopingVideo: Xe,
          },
          extends: N.AbstractTransitionComponent,
          props: {
            isMenuOpen: u.a.bool.isRequired,
          },
          mixins: [Zt],
          data: function () {
            return {
              activeSlide: 0,
              hoveredItem: null,
              isPreviousHovered: !1,
              isNextHovered: !1,
              isTransitionedIn: !1,
            }
          },
          computed: Ll(
            Ll(
              {},
              Object(L.c)({
                deviceState: function (e) {
                  return e.app.deviceState
                },
              })
            ),
            {},
            {
              menuItems: function () {
                var e = this.$store.getters.translation.challenges,
                  t = Object.keys(e).map(function (t) {
                    return {
                      title: e[t].title,
                      subtitle: e[t].subtitle,
                      placeholder: e[t].placeholder,
                      challengeCard: e[t].challengeCard,
                      planets: e[t].planets,
                      slug: t,
                    }
                  })
                return [].concat(Le()(t), Le()(t))
              },
              isNavigationActive: function () {
                return this.$route.name === this.RouteNames.HOME
              },
            }
          ),
          watch: {
            activeSlide: function (e) {
              this.transitionController.onActiveSlideUpdate(e, this.isTransitionedIn), this.$soundManager.play(this.SampleName.PLANET_SWOOSH)
            },
            isNavigationActive: function (e) {
              var t = this
              this.toggleActiveClass(),
                e
                  ? (this.transitionController.onActiveSlideUpdate(this.activeSlide, this.isTransitionedIn).then(function () {
                      return t.navigation.enable()
                    }),
                    this.isTransitionedIn || this.transitionIn(!0))
                  : (this.transitionController.toDisabledState(), this.navigation.disable())
            },
          },
          mounted: function () {
            var e = this
            ;(this.observer = new IntersectionObserver(this.onIntersect, {
              root: null,
              rootMargin: "0px",
              threshold: [0.999],
            })),
              (this.resizeListener = new B.DisposableEventListener(window, "resize", this.onResize)),
              this.onResize(),
              setTimeout(function () {
                e.observer.observe(e.$el)
              }, 100),
              this.toggleActiveClass()
          },
          beforeDestroy: function () {
            this.observer.unobserve(this.$el), this.observer.disconnect(), this.resizeListener && this.resizeListener.dispose()
          },
          methods: {
            isInActiveHovered: function (e) {
              var t = this.menuItems.length
              return (e === (this.activeSlide - 1 + t) % t && this.isPreviousHovered) || (e === (this.activeSlide + 1) % t && this.isNextHovered)
            },
            toggleActiveClass: function () {
              document.getElementsByTagName("html")[0].classList.toggle("is-navigation-active", this.isNavigationActive)
            },
            onResize: function () {
              this.$el.style.height = "".concat(window.innerHeight, "px")
            },
            transitionInComplete: function () {
              ;(this.isTransitionedIn = !0), this.navigation.enable()
            },
            handleAllComponentsReady: function () {
              var e = this
              this.createNavigation(),
                (this.transitionController = new ul(this)),
                this.transitionController.addEventListener(N.TransitionEvent.TRANSITION_IN_COMPLETE, this.transitionInComplete),
                this.transitionController.addEventListener(N.TransitionEvent.TRANSITION_IN_START, function () {
                  return e.$scrollTracker.setScrollY(0)
                }),
                this.isNavigationActive && (this.transitionController.onActiveSlideUpdate(this.activeSlide, this.isTransitionedIn), this.transitionIn(!0)),
                this.isReady()
            },
            createNavigation: function () {
              var e = this
              ;(this.navigation = new yl(this.$refs.wrapper, this.$refs.dragger, this.$refs.item, this.$refs.trigger)),
                this.navigation.addEventListener(pl.types.CHANGE, function (t) {
                  var n = t.data
                  e.$refs.cards && e.$refs.cards.setDirection(n.direction), (e.activeSlide = n.index)
                })
            },
            previous: function () {
              this.navigation.previous()
            },
            next: function () {
              this.navigation.next()
            },
            onTitleMouseEnter: function (e) {
              this.$soundManager.play(this.SampleName.PLANET_MOUSE_ENTER), (this.hoveredItem = e)
            },
            onTitleMouseLeave: function () {
              this.$soundManager.play(this.SampleName.PLANET_MOUSE_LEAVE), (this.hoveredItem = null)
            },
            onCardMouseEnter: function () {
              this.hoveredItem = this.activeSlide
            },
            onCardMouseLeave: function () {
              this.hoveredItem = null
            },
            onCardClick: function () {
              this.onTitleClick(this.menuItems[this.activeSlide].slug)
            },
            onTitleClick: function (e) {
              this.$router.push({
                name: this.RouteNames.DETAIL,
                params: {
                  slug: e,
                },
              })
            },
            onIntersect: function (e) {
              var t = Fe()(e, 1)[0]
              t.isIntersecting &&
                t.intersectionRatio > 0.999 &&
                this.$route.name !== this.RouteNames.HOME &&
                this.$router.push({
                  name: this.RouteNames.HOME,
                })
            },
          },
        },
        Bl = n(215)
      var Dl = Object(v.a)(
          Nl,
          sl,
          [],
          !1,
          function (e) {
            this.$style = Bl.default.locals || Bl.default
          },
          null,
          null
        ).exports,
        Fl = function () {
          var e = this,
            t = e._self._c
          e._self._setupProxy
          return t(
            "div",
            {
              class: e.$style.cookieBar,
            },
            [
              t(
                "div",
                {
                  ref: "content",
                  class: ["copy-l", e.$style.content],
                },
                [
                  t("p", {
                    domProps: {
                      innerHTML: e._s(e.$t("general.cookie")),
                    },
                  }),
                  e._v(" "),
                  t(
                    "button",
                    {
                      class: e.$style.close,
                      attrs: {
                        title: "Click to Close",
                      },
                      on: {
                        click: function (t) {
                          return t.preventDefault(), e.onCloseClick.apply(null, arguments)
                        },
                      },
                    },
                    [
                      t("Icon", {
                        attrs: {
                          name: "cross",
                        },
                      }),
                    ],
                    1
                  ),
                ]
              ),
            ]
          )
        }
      function Ul(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ("function" === typeof Proxy) return !0
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var n,
            i = X()(e)
          if (t) {
            var r = X()(this).constructor
            n = Reflect.construct(i, arguments, r)
          } else n = i.apply(this, arguments)
          return j()(this, n)
        }
      }
      Fl._withStripped = !0
      var Vl = (function (e) {
        z()(n, e)
        var t = Ul(n)
        function n() {
          return F()(this, n), t.apply(this, arguments)
        }
        return (
          V()(n, [
            {
              key: "setupTransitionInTimeline",
              value: function (e, t, n) {
                var i = t.$refs.content
                e.fromTo(
                  t.$el,
                  1,
                  {
                    height: 0,
                  },
                  {
                    height: i.scrollHeight,
                    ease: W.Power3.easeOut,
                  }
                ),
                  e.fromTo(
                    i,
                    1,
                    {
                      yPercent: 100,
                    },
                    {
                      yPercent: 0,
                      ease: W.Power3.easeOut,
                      clearProps: "yPercent",
                    },
                    0
                  )
              },
            },
            {
              key: "setupTransitionOutTimeline",
              value: function (e, t, n) {
                e.to(t.$el, 0.6, {
                  height: 0,
                  ease: W.Power3.easeInOut,
                }),
                  e.to(
                    t.$refs.content,
                    0.6,
                    {
                      yPercent: 100,
                      ease: W.Power3.easeInOut,
                    },
                    0
                  )
              },
            },
            {
              key: "setupLoopingAnimationTimeline",
              value: function (e, t, n) {},
            },
          ]),
          n
        )
      })(N.AbstractTransitionController)
      function Hl(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e)
          t &&
            (i = i.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, i)
        }
        return n
      }
      function zl(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Hl(Object(n), !0).forEach(function (t) {
                I()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Hl(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var $l = {
          name: "CookieBar",
          extends: N.AbstractTransitionComponent,
          computed: zl(
            {},
            Object(L.c)({
              cookieAccepted: function (e) {
                return e.app.cookieAccepted
              },
            })
          ),
          watch: {
            cookieAccepted: function (e) {
              e && this.transitionOut(!0)
            },
          },
          mounted: function () {
            this.$scrollTracker.addFixed(this.$el)
          },
          beforeDestroy: function () {
            this.$scrollTracker.removeFixed(this.$el)
          },
          methods: zl(
            zl(
              {},
              Object(L.b)({
                setCookieAccepted: pt,
              })
            ),
            {},
            {
              handleAllComponentsReady: function () {
                ;(this.transitionController = new Vl(this)), this.cookieAccepted || this.transitionIn(!0), this.isReady()
              },
              onCloseClick: function () {
                this.setCookieAccepted(!0), this.$soundManager.play(this.SampleName.CLICK)
              },
            }
          ),
        },
        jl = n(216)
      var Gl = Object(v.a)(
          $l,
          Fl,
          [],
          !1,
          function (e) {
            this.$style = jl.default.locals || jl.default
          },
          null,
          null
        ).exports,
        Xl = null,
        Wl = void 0,
        Yl = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "jpg"
          return Wl ? "webp" : e
        }
      function ql(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e)
          t &&
            (i = i.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, i)
        }
        return n
      }
      function Kl(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? ql(Object(n), !0).forEach(function (t) {
                I()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : ql(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var Zl = {
          name: "App",
          components: {
            SiteHeader: al,
            StartNavigation: Dl,
            CookieBar: Gl,
          },
          extends: N.AbstractRegistrableComponent,
          data: function () {
            return {
              isMenuOpen: !1,
            }
          },
          computed: Kl(
            Kl(
              {},
              Object(L.c)({
                deviceState: function (e) {
                  return e.app.deviceState
                },
                isPreloading: function (e) {
                  return e.app.isPreloading
                },
                isManualNavigationHidden: function (e) {
                  return e.app.manualNavigationHidden
                },
              })
            ),
            {},
            {
              isNavigationOnPage: function () {
                return !this.$route.meta.hideNavigation && !this.isManualNavigationHidden
              },
            }
          ),
          watch: {
            $route: function () {
              this.$scrollTracker.setScrollY(0)
            },
            isPreloading: function (e) {
              e || (this.preloadElement.classList.add("is-hidden"), this.playAmbientSound())
            },
          },
          created: function () {
            var e = this
            this.$deviceStateTracker.addEventListener(Wa.DeviceStateEvent.STATE_UPDATE, this.handleDeviceStateUpdate), this.setDeviceState(this.$deviceStateTracker.currentState)
            var t = Object.keys(this.SampleName).map(function (t) {
              return {
                name: e.SampleName[t],
              }
            })
            this.$soundManager.sampleManager.addSamples(t),
              this.$soundManager.createChannel(this.SoundChannel.UI, 0.35),
              this.$soundManager.createChannel(this.SoundChannel.AMBIENT, 0.75),
              (this.preloadElement = document.querySelector(".js-site-preloader")),
              setTimeout(function () {
                Promise.all([
                  e.$assetLoader.load(),
                  e.$soundManager.sampleManager.loadAllSamples(),
                  (null === Xl &&
                    (Xl = new Promise(function (e) {
                      var t = setInterval(function () {
                        "undefined" !== typeof r.a.webp && (e(r.a.webp), clearInterval(t))
                      }, 100)
                    })),
                  Xl).then(function (e) {
                    ;(Wl = !!e), (o.a.prototype.$webp = Yl)
                  }),
                  new Promise(function (e) {
                    return setTimeout(function () {
                      return e()
                    }, 500)
                  }),
                ]).then(function () {
                  return e.setPreloading(!1)
                })
              }, 2e3)
          },
          methods: Kl(
            Kl(
              {},
              Object(L.b)({
                setDeviceState: lt,
                setPreloading: dt,
              })
            ),
            {},
            {
              handleDeviceStateUpdate: function (e) {
                this.setDeviceState(e.data.state)
              },
              onLeave: function (e, t) {
                N.FlowManager.transitionOut
                  .then(function () {
                    return N.FlowManager.done()
                  })
                  .then(t)
              },
              onMenuOpenChange: function (e) {
                this.isMenuOpen = e
              },
              playAmbientSound: function () {
                var e = [
                  this.SampleName.AMBIENCE_MAIN,
                  [
                    this.SampleName.AMBIENCE_SUB_01,
                    this.SampleName.AMBIENCE_SUB_02,
                    this.SampleName.AMBIENCE_SUB_03,
                    this.SampleName.AMBIENCE_SUB_04,
                    this.SampleName.AMBIENCE_SUB_05,
                    this.SampleName.AMBIENCE_SUB_06,
                    this.SampleName.AMBIENCE_SUB_07,
                    this.SampleName.AMBIENCE_SUB_08,
                  ],
                ][Math.round(Math.random())]
                "string" !== typeof e && (e = e[Math.floor(Math.random() * e.length)]), this.$soundManager.play(e, this.SoundChannel.AMBIENT, 1, !1, this.playAmbientSound)
              },
            }
          ),
        },
        Ql = n(217)
      var Jl = Object(v.a)(
        Zl,
        Hs,
        [],
        !1,
        function (e) {
          this.$style = Ql.default.locals || Ql.default
        },
        null,
        null
      ).exports
      var eu = {
        secondsToTime: function (e) {
          var t = parseInt(e, 10),
            n = Math.floor(t / 3600),
            i = Math.floor((t - 3600 * n) / 60),
            r = t - 3600 * n - 60 * i,
            o = []
          return n > 0 && o.push("".concat(n < 10 ? "0" : "").concat(n)), o.push(i), o.push("".concat(r < 10 ? "0" : "").concat(r)), o.join(":")
        },
        webp: function (e) {
          return e.replace("{webp}", Yl("jpg"))
        },
      }
      Object.keys(eu).forEach(function (e) {
        return o.a.filter(e, eu[e])
      }),
        Object.keys(c).forEach(function (e) {
          return o.a.directive(e, c[e])
        }),
        Object.keys(g).forEach(function (e) {
          return o.a.component(e, g[e])
        }),
        Vs(),
        window.webpackPublicPath && (n.p = window.webpackPublicPath)
      var tu = Va(),
        nu = ja(),
        iu = P()
      iu.localeEnabled &&
        (o.a.use(s.a, {
          store: nu,
          router: iu.localeRoutingEnabled ? tu : null,
          config: iu.config,
          proxy: ns,
        }),
        o.a.initI18nManager()),
        Object(l.sync)(nu, tu)
      var ru = new o.a({
        router: tu,
        store: nu,
        render: function (e) {
          return e(Jl)
        },
      })
      gs(nu).then(function () {
        ru.$mount("#app")
      })
    },
  ])
)
