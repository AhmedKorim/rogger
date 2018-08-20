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