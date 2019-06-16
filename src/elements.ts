import { elementFactory as f } from "./element-factory";
import { ElementOptions, HTMLTag as t } from "./types";

function $(tag: string, ...args: any[]): any {
    if ((args[0] as any).tagName !== undefined) {
        return (f as any)({ tag: t.div }, ...args)        
    }
    const options = args.shift()
    return (f as any)({ ...options, tag }, ...args)
}

export function div(...children: HTMLElement[]): HTMLDivElement
export function div(options: ElementOptions, ...children: HTMLElement[]): HTMLDivElement
export function div(...args: any[]): HTMLDivElement {
    return $(t.div, ...args)
}


export function a(...children: HTMLElement[]): HTMLAnchorElement
export function a(options: ElementOptions, ...children: HTMLElement[]): HTMLAnchorElement
export function a(...args: any[]): HTMLAnchorElement {
    return $(t.a, ...args)
}

export function abbr (...children: HTMLElement[]): HTMLElement
export function abbr (options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function abbr (...args: any[]): HTMLElement {
    return $(t.abbr , ...args)
}

export function address(...children: HTMLElement[]): HTMLElement
export function address(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function address(...args: any[]): HTMLElement {
    return $(t.address, ...args)
}

export function area(...children: HTMLElement[]): HTMLElement
export function area(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function area(...args: any[]): HTMLElement {
    return $(t.area, ...args)
}

export function article(...children: HTMLElement[]): HTMLElement
export function article(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function article(...args: any[]): HTMLElement {
    return $(t.article, ...args)
}

export function aside(...children: HTMLElement[]): HTMLElement
export function aside(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function aside(...args: any[]): HTMLElement {
    return $(t.aside, ...args)
}

export function audio(...children: HTMLElement[]): HTMLElement
export function audio(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function audio(...args: any[]): HTMLElement {
    return $(t.audio, ...args)
}

export function em(...children: HTMLElement[]): HTMLElement
export function em(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function em(...args: any[]): HTMLElement {
    return $(t.em, ...args)
}

export function strong(...children: HTMLElement[]): HTMLElement
export function strong(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function strong(...args: any[]): HTMLElement {
    return $(t.strong, ...args)
}

export function base(...children: HTMLElement[]): HTMLElement
export function base(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function base(...args: any[]): HTMLElement {
    return $(t.base, ...args)
}

export function bdi(...children: HTMLElement[]): HTMLElement
export function bdi(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function bdi(...args: any[]): HTMLElement {
    return $(t.bdi, ...args)
}

export function bdo(...children: HTMLElement[]): HTMLElement
export function bdo(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function bdo(...args: any[]): HTMLElement {
    return $(t.bdo, ...args)
}

export function blockquote(...children: HTMLElement[]): HTMLElement
export function blockquote(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function blockquote(...args: any[]): HTMLElement {
    return $(t.blockquote, ...args)
}

export function body(...children: HTMLElement[]): HTMLElement
export function body(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function body(...args: any[]): HTMLElement {
    return $(t.body, ...args)
}

export function button(...children: HTMLElement[]): HTMLElement
export function button(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function button(...args: any[]): HTMLElement {
    return $(t.button, ...args)
}

export function canvas(...children: HTMLElement[]): HTMLElement
export function canvas(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function canvas(...args: any[]): HTMLElement {
    return $(t.canvas, ...args)
}

export function caption(...children: HTMLElement[]): HTMLElement
export function caption(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function caption(...args: any[]): HTMLElement {
    return $(t.caption, ...args)
}

export function table(...children: HTMLElement[]): HTMLElement
export function table(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function table(...args: any[]): HTMLElement {
    return $(t.table, ...args)
}

export function cite(...children: HTMLElement[]): HTMLElement
export function cite(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function cite(...args: any[]): HTMLElement {
    return $(t.cite, ...args)
}

export function samp(...children: HTMLElement[]): HTMLElement
export function samp(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function samp(...args: any[]): HTMLElement {
    return $(t.samp, ...args)
}

export function kbd(...children: HTMLElement[]): HTMLElement
export function kbd(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function kbd(...args: any[]): HTMLElement {
    return $(t.kbd, ...args)
}

export function col(...children: HTMLElement[]): HTMLElement
export function col(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function col(...args: any[]): HTMLElement {
    return $(t.col, ...args)
}

export function colgroup(...children: HTMLElement[]): HTMLElement
export function colgroup(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function colgroup(...args: any[]): HTMLElement {
    return $(t.colgroup, ...args)
}

export function data(...children: HTMLElement[]): HTMLElement
export function data(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function data(...args: any[]): HTMLElement {
    return $(t.data, ...args)
}

export function datalist(...children: HTMLElement[]): HTMLElement
export function datalist(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function datalist(...args: any[]): HTMLElement {
    return $(t.datalist, ...args)
}

export function input(...children: HTMLElement[]): HTMLElement
export function input(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function input(...args: any[]): HTMLElement {
    return $(t.input, ...args)
}

export function dd(...children: HTMLElement[]): HTMLElement
export function dd(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function dd(...args: any[]): HTMLElement {
    return $(t.dd, ...args)
}

export function dt(...children: HTMLElement[]): HTMLElement
export function dt(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function dt(...args: any[]): HTMLElement {
    return $(t.dt, ...args)
}

export function dl(...children: HTMLElement[]): HTMLElement
export function dl(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function dl(...args: any[]): HTMLElement {
    return $(t.dl, ...args)
}

export function del(...children: HTMLElement[]): HTMLElement
export function del(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function del(...args: any[]): HTMLElement {
    return $(t.del, ...args)
}

export function details(...children: HTMLElement[]): HTMLElement
export function details(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function details(...args: any[]): HTMLElement {
    return $(t.details, ...args)
}

export function dfn(...children: HTMLElement[]): HTMLElement
export function dfn(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function dfn(...args: any[]): HTMLElement {
    return $(t.dfn, ...args)
}

export function dialog(...children: HTMLElement[]): HTMLElement
export function dialog(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function dialog(...args: any[]): HTMLElement {
    return $(t.dialog, ...args)
}

export function embed(...children: HTMLElement[]): HTMLElement
export function embed(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function embed(...args: any[]): HTMLElement {
    return $(t.embed, ...args)
}

export function fieldset(...children: HTMLElement[]): HTMLElement
export function fieldset(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function fieldset(...args: any[]): HTMLElement {
    return $(t.fieldset, ...args)
}

export function figure(...children: HTMLElement[]): HTMLElement
export function figure(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function figure(...args: any[]): HTMLElement {
    return $(t.figure, ...args)
}

export function footer(...children: HTMLElement[]): HTMLElement
export function footer(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function footer(...args: any[]): HTMLElement {
    return $(t.footer, ...args)
}

export function form(...children: HTMLElement[]): HTMLElement
export function form(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function form(...args: any[]): HTMLElement {
    return $(t.form, ...args)
}

export function h1(...children: HTMLElement[]): HTMLElement
export function h1(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function h1(...args: any[]): HTMLElement {
    return $(t.h1, ...args)
}

export function h2(...children: HTMLElement[]): HTMLElement
export function h2(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function h2(...args: any[]): HTMLElement {
    return $(t.h2, ...args)
}

export function h3(...children: HTMLElement[]): HTMLElement
export function h3(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function h3(...args: any[]): HTMLElement {
    return $(t.h3, ...args)
}

export function h4(...children: HTMLElement[]): HTMLElement
export function h4(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function h4(...args: any[]): HTMLElement {
    return $(t.h4, ...args)
}

export function h5(...children: HTMLElement[]): HTMLElement
export function h5(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function h5(...args: any[]): HTMLElement {
    return $(t.h5, ...args)
}

export function h6(...children: HTMLElement[]): HTMLElement
export function h6(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function h6(...args: any[]): HTMLElement {
    return $(t.h6, ...args)
}

export function head(...children: HTMLElement[]): HTMLElement
export function head(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function head(...args: any[]): HTMLElement {
    return $(t.head, ...args)
}

export function header(...children: HTMLElement[]): HTMLElement
export function header(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function header(...args: any[]): HTMLElement {
    return $(t.header, ...args)
}

export function hgroup(...children: HTMLElement[]): HTMLElement
export function hgroup(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function hgroup(...args: any[]): HTMLElement {
    return $(t.hgroup, ...args)
}

export function hr(...children: HTMLElement[]): HTMLElement
export function hr(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function hr(...args: any[]): HTMLElement {
    return $(t.hr, ...args)
}

export function i(...children: HTMLElement[]): HTMLElement
export function i(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function i(...args: any[]): HTMLElement {
    return $(t.i, ...args)
}

export function iframe(...children: HTMLElement[]): HTMLElement
export function iframe(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function iframe(...args: any[]): HTMLElement {
    return $(t.iframe, ...args)
}

export function img(...children: HTMLElement[]): HTMLElement
export function img(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function img(...args: any[]): HTMLElement {
    return $(t.img, ...args)
}

export function ins(...children: HTMLElement[]): HTMLElement
export function ins(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function ins(...args: any[]): HTMLElement {
    return $(t.ins, ...args)
}

export function keygen(...children: HTMLElement[]): HTMLElement
export function keygen(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function keygen(...args: any[]): HTMLElement {
    return $(t.keygen, ...args)
}

export function label(...children: HTMLElement[]): HTMLElement
export function label(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function label(...args: any[]): HTMLElement {
    return $(t.label, ...args)
}

export function legend(...children: HTMLElement[]): HTMLElement
export function legend(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function legend(...args: any[]): HTMLElement {
    return $(t.legend, ...args)
}

export function li(...children: HTMLElement[]): HTMLElement
export function li(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function li(...args: any[]): HTMLElement {
    return $(t.li, ...args)
}

export function ol(...children: HTMLElement[]): HTMLElement
export function ol(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function ol(...args: any[]): HTMLElement {
    return $(t.ol, ...args)
}

export function ul(...children: HTMLElement[]): HTMLElement
export function ul(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function ul(...args: any[]): HTMLElement {
    return $(t.ul, ...args)
}

export function link(...children: HTMLElement[]): HTMLElement
export function link(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function link(...args: any[]): HTMLElement {
    return $(t.link, ...args)
}

export function main(...children: HTMLElement[]): HTMLElement
export function main(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function main(...args: any[]): HTMLElement {
    return $(t.main, ...args)
}

export function map(...children: HTMLElement[]): HTMLElement
export function map(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function map(...args: any[]): HTMLElement {
    return $(t.map, ...args)
}

export function mark(...children: HTMLElement[]): HTMLElement
export function mark(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function mark(...args: any[]): HTMLElement {
    return $(t.mark, ...args)
}

export function menu(...children: HTMLElement[]): HTMLElement
export function menu(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function menu(...args: any[]): HTMLElement {
    return $(t.menu, ...args)
}

export function menuitem(...children: HTMLElement[]): HTMLElement
export function menuitem(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function menuitem(...args: any[]): HTMLElement {
    return $(t.menuitem, ...args)
}

export function meta(...children: HTMLElement[]): HTMLElement
export function meta(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function meta(...args: any[]): HTMLElement {
    return $(t.meta, ...args)
}

export function meter(...children: HTMLElement[]): HTMLElement
export function meter(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function meter(...args: any[]): HTMLElement {
    return $(t.meter, ...args)
}

export function nav(...children: HTMLElement[]): HTMLElement
export function nav(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function nav(...args: any[]): HTMLElement {
    return $(t.nav, ...args)
}

export function noscript(...children: HTMLElement[]): HTMLElement
export function noscript(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function noscript(...args: any[]): HTMLElement {
    return $(t.noscript, ...args)
}

export function object(...children: HTMLElement[]): HTMLElement
export function object(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function object(...args: any[]): HTMLElement {
    return $(t.object, ...args)
}

export function optgroup(...children: HTMLElement[]): HTMLElement
export function optgroup(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function optgroup(...args: any[]): HTMLElement {
    return $(t.optgroup, ...args)
}

export function option(...children: HTMLElement[]): HTMLElement
export function option(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function option(...args: any[]): HTMLElement {
    return $(t.option, ...args)
}

export function select(...children: HTMLElement[]): HTMLElement
export function select(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function select(...args: any[]): HTMLElement {
    return $(t.select, ...args)
}

export function output(...children: HTMLElement[]): HTMLElement
export function output(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function output(...args: any[]): HTMLElement {
    return $(t.output, ...args)
}

export function p(...children: HTMLElement[]): HTMLElement
export function p(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function p(...args: any[]): HTMLElement {
    return $(t.p, ...args)
}

export function param(...children: HTMLElement[]): HTMLElement
export function param(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function param(...args: any[]): HTMLElement {
    return $(t.param, ...args)
}

export function pre(...children: HTMLElement[]): HTMLElement
export function pre(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function pre(...args: any[]): HTMLElement {
    return $(t.pre, ...args)
}

export function progress(...children: HTMLElement[]): HTMLElement
export function progress(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function progress(...args: any[]): HTMLElement {
    return $(t.progress, ...args)
}

export function q(...children: HTMLElement[]): HTMLElement
export function q(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function q(...args: any[]): HTMLElement {
    return $(t.q, ...args)
}

export function rb(...children: HTMLElement[]): HTMLElement
export function rb(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function rb(...args: any[]): HTMLElement {
    return $(t.rb, ...args)
}

export function rp(...children: HTMLElement[]): HTMLElement
export function rp(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function rp(...args: any[]): HTMLElement {
    return $(t.rp, ...args)
}

export function rt(...children: HTMLElement[]): HTMLElement
export function rt(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function rt(...args: any[]): HTMLElement {
    return $(t.rt, ...args)
}

export function rtc(...children: HTMLElement[]): HTMLElement
export function rtc(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function rtc(...args: any[]): HTMLElement {
    return $(t.rtc, ...args)
}

export function ruby(...children: HTMLElement[]): HTMLElement
export function ruby(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function ruby(...args: any[]): HTMLElement {
    return $(t.ruby, ...args)
}

export function s(...children: HTMLElement[]): HTMLElement
export function s(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function s(...args: any[]): HTMLElement {
    return $(t.s, ...args)
}

export function script(...children: HTMLElement[]): HTMLElement
export function script(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function script(...args: any[]): HTMLElement {
    return $(t.script, ...args)
}

export function section(...children: HTMLElement[]): HTMLElement
export function section(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function section(...args: any[]): HTMLElement {
    return $(t.section, ...args)
}

export function small(...children: HTMLElement[]): HTMLElement
export function small(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function small(...args: any[]): HTMLElement {
    return $(t.small, ...args)
}

export function source(...children: HTMLElement[]): HTMLElement
export function source(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function source(...args: any[]): HTMLElement {
    return $(t.source, ...args)
}

export function video(...children: HTMLElement[]): HTMLElement
export function video(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function video(...args: any[]): HTMLElement {
    return $(t.video, ...args)
}

export function span(...children: HTMLElement[]): HTMLElement
export function span(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function span(...args: any[]): HTMLElement {
    return $(t.span, ...args)
}

export function style(...children: HTMLElement[]): HTMLElement
export function style(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function style(...args: any[]): HTMLElement {
    return $(t.style, ...args)
}

export function sub(...children: HTMLElement[]): HTMLElement
export function sub(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function sub(...args: any[]): HTMLElement {
    return $(t.sub, ...args)
}

export function sup(...children: HTMLElement[]): HTMLElement
export function sup(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function sup(...args: any[]): HTMLElement {
    return $(t.sup, ...args)
}

export function summary(...children: HTMLElement[]): HTMLElement
export function summary(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function summary(...args: any[]): HTMLElement {
    return $(t.summary, ...args)
}

export function tbody(...children: HTMLElement[]): HTMLElement
export function tbody(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function tbody(...args: any[]): HTMLElement {
    return $(t.tbody, ...args)
}

export function td(...children: HTMLElement[]): HTMLElement
export function td(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function td(...args: any[]): HTMLElement {
    return $(t.td, ...args)
}

export function template(...children: HTMLElement[]): HTMLElement
export function template(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function template(...args: any[]): HTMLElement {
    return $(t.template, ...args)
}

export function textarea(...children: HTMLElement[]): HTMLElement
export function textarea(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function textarea(...args: any[]): HTMLElement {
    return $(t.textarea, ...args)
}

export function tfoot(...children: HTMLElement[]): HTMLElement
export function tfoot(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function tfoot(...args: any[]): HTMLElement {
    return $(t.tfoot, ...args)
}

export function th(...children: HTMLElement[]): HTMLElement
export function th(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function th(...args: any[]): HTMLElement {
    return $(t.th, ...args)
}

export function thead(...children: HTMLElement[]): HTMLElement
export function thead(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function thead(...args: any[]): HTMLElement {
    return $(t.thead, ...args)
}

export function time(...children: HTMLElement[]): HTMLElement
export function time(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function time(...args: any[]): HTMLElement {
    return $(t.time, ...args)
}

export function tr(...children: HTMLElement[]): HTMLElement
export function tr(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function tr(...args: any[]): HTMLElement {
    return $(t.tr, ...args)
}

export function track(...children: HTMLElement[]): HTMLElement
export function track(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function track(...args: any[]): HTMLElement {
    return $(t.track, ...args)
}

export function u(...children: HTMLElement[]): HTMLElement
export function u(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function u(...args: any[]): HTMLElement {
    return $(t.u, ...args)
}
