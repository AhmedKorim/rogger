export const getStyle = (el, style) => {
    let $el;
    if (el instanceof HTMLElement) {
        $el = el;
    } else if (document.querySelector(el)) {
        $el = document.querySelector(el)
    }

    const st = window.getComputedStyle($el)[style];
    return +st.slice(0, st.length - 2);
};


export const creatArray = (items, StartZero) => {
    let start = StartZero ? 0 : 1;
    const standed = StartZero ? items : items + 1;
    let arr = [];
    for (start; start < standed; start++) {
        arr.push(start);
    }
    return arr;
};


export const getCoords = (elem) => {
    var box = elem.getBoundingClientRect();

    var body = document.body;
    var docEl = document.documentElement;

    var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
    var scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;

    var clientTop = docEl.clientTop || body.clientTop || 0;
    var clientLeft = docEl.clientLeft || body.clientLeft || 0;

    var top = box.top + scrollTop - clientTop;
    var left = box.left + scrollLeft - clientLeft;

    return {top: Math.round(top), left: Math.round(left)};
};

