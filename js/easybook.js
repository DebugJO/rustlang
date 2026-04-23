function TOCize(toc, content, matchHeightTo) {

    console.log("33333");
    
    if (!(toc && content && matchHeightTo)) return false
    
    var cnt = 0;    
    
    var make = function (tag) {
        return document.createElement(tag)
    }

    var aniscroll = {
        to: function (top) {
            aniscroll.target = top;
            if (aniscroll.running) return;
            aniscroll.running = setInterval(aniscroll.tick, 20);
        },
        target: 0,
        running: 0,
        getTop: function () {
            return window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
        },
        setTop: function (value) {
            (window['scrollTo'] && window.scrollTo(window.scrollX, value))
        },
        tick: function () {
            var oldST = aniscroll.getTop(), newST = ~~((oldST + aniscroll.target) / 2);
            aniscroll.setTop(newST);
            if (aniscroll.getTop() < newST || Math.abs(newST - aniscroll.target) < 10) {
                aniscroll.setTop(aniscroll.target);
                clearInterval(aniscroll.running)
                aniscroll.running = 0
            }
        }
    }

    /*
    function scrollToHeader(header, hash, ev) {
        var headerEl = document.querySelector('.header'); // 추가
        var isPalm = headerEl && getComputedStyle(headerEl).position !== 'static'; // 추가
        var headerOffset = isPalm ? 10 : 60; // 추가(모바일 10, 데스크탑 60)
        
        var y = header.getBoundingClientRect().top + aniscroll.getTop() - headerOffset; // - headerOffset 추가
        if (window.history['pushState']) {
            window.history.pushState({}, header.textContent, "#" + hash);
            aniscroll.to(y);
            ev.preventDefault();
        } else {
            var y2 = aniscroll.getTop();
            setTimeout(function () {
                aniscroll.setTop(y2);
                aniscroll.to(y);
            }, 0);
        }
    }
    */

    // 신규 추가
    function scrollToHeader(header, hash, ev) {
        var isMobile = window.innerWidth <= 768;
        var hpHeight = document.querySelector('.header-placeholder').offsetHeight;
        var headerOffset = hpHeight + 20; 
        
        var y = header.getBoundingClientRect().top + aniscroll.getTop() - headerOffset;
        
        if (window.history['pushState']) {
            window.history.pushState({}, header.textContent, "#" + hash);
            aniscroll.to(y);
            ev.preventDefault();
        } else {
            var y2 = aniscroll.getTop();
            setTimeout(function () {
                aniscroll.setTop(y2);
                aniscroll.to(y);
            }, 0);
        }
    }
    
    var generateLink = function (h) {
        var q = make('a');
        cnt++;
        var hash = h.getAttribute('id');
        if (!hash) {
            hash = ('generated-hash-' + cnt);
            h.setAttribute('id', hash);
        }
        q.textContent = h.textContent;
        q.setAttribute('href', '#' + hash);
        q.addEventListener('click', scrollToHeader.bind(this, h, hash), false);
        return q;
    };

    var hs = content.querySelectorAll('h1, h2, h3, h4, h5, h6');
    var cul = null, plevel = 1;
    var uls = [make('ul')];
    for (var i = 0; i < hs.length; i++) {
        var level = +hs[i].tagName.substr(1);
        var hi = hs[i];
        var ti = make('li');
        ti.appendChild(generateLink(hi));
        if (plevel < level) {
            do {
                uls.push(make('ul'));
                uls[uls.length - 2].appendChild(uls[uls.length - 1]);
            } while (++plevel < level);
        } else if (plevel > level) {
            do {
                cul = uls.pop();
            } while (--plevel > level);
        }
        cul = uls[uls.length - 1];
        cul.appendChild(ti);
    }
    while (true) {
        var chs = uls[0].children;
        if (chs.length == 1 && chs[0].tagName == 'UL')
            uls.shift();
        else
            break;
    }

    if (!cnt) return false;

    var scrolldummy = make('div');
    toc.appendChild(scrolldummy);
    toc.appendChild(uls[0]);
    toc.style.display = 'block';

    var maxHeightTOC = '';
    var ppc = document.querySelector('.col-main');
    var header_placeholder = document.querySelector('.header-placeholder');
    /*
    var s1 = function () {
        var scrollTop = aniscroll.getTop(); // 추가
        var hp = document.querySelector('.header-placeholder'); //추가
        var hpHeight = hp ? hp.offsetHeight : 0; // 추가
        var dummyClientTop = scrolldummy.getBoundingClientRect().top - hpHeight;
        var margin = 10, c, d;
        // var scrollTop = aniscroll.getTop(), dummyClientTop = scrolldummy.getBoundingClientRect().top - header_placeholder.offsetHeight,
        //    margin = 10, c, d; // c = dummyHeight, d = TOC.maxHeight (+'px')
        var headerEl = document.querySelector('.header'); // 추가
        var isPalm = headerEl && getComputedStyle(headerEl).position !== 'static'; // 추가
        var offsetAdjustment = isPalm ? 0 : 50; //추가
        
        if ((c = -dummyClientTop + margin) < 0) c = 0; 
        if (c) {
            var wh = window.innerHeight
                || document.documentElement.clientHeight
                || document.body.clientHeight,
                cbox = matchHeightTo.getBoundingClientRect(),
                vq = cbox.bottom - dummyClientTop - uls[0].offsetHeight;
            if (c > vq) c = vq;
            d = (wh - (margin << 1)) + 'px';
        } else {
            d = "";
        }
        if (d != maxHeightTOC) { //status lock.
            maxHeightTOC = d;
            if (d) {
                uls[0].setAttribute('style', 'max-height:' + d + '; width:' + (toc.offsetWidth - 20) + "px");
            } else {
                uls[0].setAttribute("style", "");
            }
        }
        scrolldummy.style.height = (c + 'px');
    };
    */
    // 신규 추가
    var s1 = function () {
        var hp = document.querySelector('.header-placeholder');
        var hpHeight = hp ? hp.offsetHeight : 0;
        
        var dummyClientTop = scrolldummy.getBoundingClientRect().top - hpHeight;
        var margin = 10, c, d;

        var isMobile = window.innerWidth <= 768; 
        // [수정] 모바일에서도 타이틀바에 가려지지 않게 50px 정도 여유를 줌
        // 데스크탑은 기존 50px 유지, 모바일은 상황에 따라 40~50px 조정
        var offsetAdjustment = isMobile ? 50 : 50; 

        if ((c = -dummyClientTop + margin + offsetAdjustment) < 0) c = 0; 

        if (c) {
            var wh = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
                cbox = matchHeightTo.getBoundingClientRect(),
                vq = cbox.bottom - dummyClientTop - uls[0].offsetHeight;
            if (c > vq) c = vq;
            d = (wh - (margin << 1)) + 'px';
        } else { d = ""; }
        
        if (d != maxHeightTOC) {
            maxHeightTOC = d;
            if (d) { uls[0].setAttribute('style', 'max-height:' + d + '; width:' + (toc.offsetWidth - 20) + "px"); }
            else { uls[0].setAttribute("style", ""); }
        }
        scrolldummy.style.height = (c + 'px');
    };  
    window.addEventListener('scroll', s1, false);
    window.addEventListener('resize', s1, false);
}

function PalmSidebar() {
    var ww = 0; //window width
    var pcw = document.querySelector('.page-content .wrapper');
    var header = document.querySelector('.header');
    var header_placeholder = document.querySelector('.header-placeholder');

    var is_palm_mode = false;

    // do not support old browsers!
    if (typeof window['getComputedStyle'] !== 'function') return;

    /*
    function s1() {
        ww = window.innerWidth
            || document.documentElement.clientWidth
            || document.body.clientWidth;
        var h = header.getBoundingClientRect();
        
        var actualHeight = h.height || (h.bottom - h.top); // 추가
        
        is_palm_mode = getComputedStyle(header).position !== 'static';
        header_placeholder.style.height = is_palm_mode ? (actualHeight + 'px') : '0px'; //추가
        //header_placeholder.style.height = is_palm_mode ? (h.bottom - h.top + 'px') : '0px'
    }
    */
    // 신규 추가
    function s1() {
        ww = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        var h = header.getBoundingClientRect();
        var actualHeight = h.height || (h.bottom - h.top);
        
        var isMobile = ww <= 768;

        if (isMobile) {
            header_placeholder.style.height = (actualHeight + 10) + 'px'; 
        } else {
            header_placeholder.style.height = actualHeight + 'px';
        }
    }  
    
    function toggleSidebar(e) {
        if (/expand-sidebar/.test(pcw.className)) {
            pcw.className = pcw.className.replace(/\s*expand-sidebar\s*/, ' ');
            header.className = header.className.replace(/\s*expand-sidebar\s*/, ' ');
        } else {
            pcw.className += " expand-sidebar";
            header.className += " expand-sidebar";
        }
        setTimeout(s1, 200);
    }
    s1();
    document.getElementById('sidebar-toggle').addEventListener('click', toggleSidebar, false);
    window.addEventListener('resize', s1, false);
}

function SelectAllize(selector, tips) {
    if (!window.getSelection) return null;

    var obj = document.querySelectorAll(selector);
    var selection = window.getSelection();
    var z = document.createElement("div");
    z.className = "util-notify1";
    z.textContent = tips;
    document.body.appendChild(z)

    function hide() {
        z.classList.add('hidden')
        z.style.top = '-200px'
    }

    hide();
    z.addEventListener('mouseover', hide, false);

    function clickHandler(e) {
        if (!selection.isCollapsed) return;

        var tt = e.pageY - z.offsetHeight - 15;
        z.setAttribute('style', 'left:' + (e.pageX - z.offsetWidth / 2) + 'px;top:' + (tt + 10) + 'px');
        z.classList.remove('hidden');
        setTimeout(hide, 1000);
    }

    function dblClickHandler(e) {
        selection.selectAllChildren(this);
        hide();
    }

    for (var i = obj.length; i--;) {
        var oi = obj[i];
        oi.addEventListener('click', clickHandler, false);
        oi.addEventListener('dblclick', dblClickHandler, false);
    }

    return true;
}

function RealLoad() {
    TOCize(
        document.querySelector('.post-toc'),
        document.querySelector('.post-content'),
        document.querySelector('.col-main')
    );

    PalmSidebar();
    SelectAllize("pre.highlight", "Dblclick to select all");

    var imgs = document.querySelectorAll('.post-content > p > img');
    for (var i = imgs.length; i--;) {
        if (imgs[i].parentElement.childNodes.length === 1) {
            imgs[i].classList.add('middle-image');
        }
    }

    if (document.querySelector('script[type*="math/tex"]')) {
        var sc = document.createElement('script');
        sc.setAttribute('type', 'text/javascript');
        sc.setAttribute('async', 'true');
        sc.setAttribute('src', 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.1/MathJax.js?config=TeX-AMS_CHTML');
        document.body.appendChild(sc);
    }
}

RealLoad();
