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


export const  creatArray = (items, StartZero) => {
    let start = StartZero ? 0 : 1;
    const standed = StartZero ? items : items +1;
    let arr = [];
    for (start; start < standed; start++) {
        arr.push(start);
    }
    return arr;
}
