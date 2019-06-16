import { elementFactory as f } from "./element-factory";
import { ElementOptions, HTMLTag as t } from "./types";

export function div(...children: HTMLElement[]): HTMLElement
export function div(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function div(...args: any[]): HTMLElement {
    if ((args[0] as any).tagName !== undefined) {
        return (f as any)({ tag: t.div }, ...args)        
    }
    const options = args.shift()
    return (f as any)({ ...options, tag: t.div }, ...args)
}

export function a(...children: HTMLElement[]): HTMLElement
export function a(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function a(...args: any[]): HTMLElement {
    if ((args[0] as any).tagName !== undefined) {
        return (f as any)({ tag: t.a }, ...args)        
    }
    const options = args.shift()
    return (f as any)({ ...options, tag: t.a }, ...args)
}

export function abbr (...children: HTMLElement[]): HTMLElement
export function abbr (options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function abbr (...args: any[]): HTMLElement {
    if ((args[0] as any).tagName !== undefined) {
        return (f as any)({ tag: t.abbr  }, ...args)        
    }
    const options = args.shift()
    return (f as any)({ ...options, tag: t.abbr  }, ...args)
}

export function address(...children: HTMLElement[]): HTMLElement
export function address(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function address(...args: any[]): HTMLElement {
    if ((args[0] as any).tagName !== undefined) {
        return (f as any)({ tag: t.address }, ...args)        
    }
    const options = args.shift()
    return (f as any)({ ...options, tag: t.address }, ...args)
}

export function area(...children: HTMLElement[]): HTMLElement
export function area(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function area(...args: any[]): HTMLElement {
    if ((args[0] as any).tagName !== undefined) {
        return (f as any)({ tag: t.area }, ...args)        
    }
    const options = args.shift()
    return (f as any)({ ...options, tag: t.area }, ...args)
}

export function article(...children: HTMLElement[]): HTMLElement
export function article(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function article(...args: any[]): HTMLElement {
    if ((args[0] as any).tagName !== undefined) {
        return (f as any)({ tag: t.article }, ...args)        
    }
    const options = args.shift()
    return (f as any)({ ...options, tag: t.article }, ...args)
}

export function aside(...children: HTMLElement[]): HTMLElement
export function aside(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function aside(...args: any[]): HTMLElement {
    if ((args[0] as any).tagName !== undefined) {
        return (f as any)({ tag: t.aside }, ...args)        
    }
    const options = args.shift()
    return (f as any)({ ...options, tag: t.aside }, ...args)
}

export function audio(...children: HTMLElement[]): HTMLElement
export function audio(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function audio(...args: any[]): HTMLElement {
    if ((args[0] as any).tagName !== undefined) {
        return (f as any)({ tag: t.audio }, ...args)        
    }
    const options = args.shift()
    return (f as any)({ ...options, tag: t.audio }, ...args)
}

export function em(...children: HTMLElement[]): HTMLElement
export function em(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function em(...args: any[]): HTMLElement {
    if ((args[0] as any).tagName !== undefined) {
        return (f as any)({ tag: t.em }, ...args)        
    }
    const options = args.shift()
    return (f as any)({ ...options, tag: t.em }, ...args)
}

export function strong(...children: HTMLElement[]): HTMLElement
export function strong(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function strong(...args: any[]): HTMLElement {
    if ((args[0] as any).tagName !== undefined) {
        return (f as any)({ tag: t.strong }, ...args)        
    }
    const options = args.shift()
    return (f as any)({ ...options, tag: t.strong }, ...args)
}

export function base(...children: HTMLElement[]): HTMLElement
export function base(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function base(...args: any[]): HTMLElement {
    if ((args[0] as any).tagName !== undefined) {
        return (f as any)({ tag: t.base }, ...args)        
    }
    const options = args.shift()
    return (f as any)({ ...options, tag: t.base }, ...args)
}

export function bdi(...children: HTMLElement[]): HTMLElement
export function bdi(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function bdi(...args: any[]): HTMLElement {
    if ((args[0] as any).tagName !== undefined) {
        return (f as any)({ tag: t.bdi }, ...args)        
    }
    const options = args.shift()
    return (f as any)({ ...options, tag: t.bdi }, ...args)
}

export function bdo(...children: HTMLElement[]): HTMLElement
export function bdo(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function bdo(...args: any[]): HTMLElement {
    if ((args[0] as any).tagName !== undefined) {
        return (f as any)({ tag: t.bdo }, ...args)        
    }
    const options = args.shift()
    return (f as any)({ ...options, tag: t.bdo }, ...args)
}

export function blockquote(...children: HTMLElement[]): HTMLElement
export function blockquote(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function blockquote(...args: any[]): HTMLElement {
    if ((args[0] as any).tagName !== undefined) {
        return (f as any)({ tag: t.blockquote }, ...args)        
    }
    const options = args.shift()
    return (f as any)({ ...options, tag: t.blockquote }, ...args)
}

export function body(...children: HTMLElement[]): HTMLElement
export function body(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function body(...args: any[]): HTMLElement {
    if ((args[0] as any).tagName !== undefined) {
        return (f as any)({ tag: t.body }, ...args)        
    }
    const options = args.shift()
    return (f as any)({ ...options, tag: t.body }, ...args)
}

export function button(...children: HTMLElement[]): HTMLElement
export function button(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function button(...args: any[]): HTMLElement {
    if ((args[0] as any).tagName !== undefined) {
        return (f as any)({ tag: t.button }, ...args)        
    }
    const options = args.shift()
    return (f as any)({ ...options, tag: t.button }, ...args)
}

export function canvas(...children: HTMLElement[]): HTMLElement
export function canvas(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function canvas(...args: any[]): HTMLElement {
    if ((args[0] as any).tagName !== undefined) {
        return (f as any)({ tag: t.canvas }, ...args)        
    }
    const options = args.shift()
    return (f as any)({ ...options, tag: t.canvas }, ...args)
}

export function caption(...children: HTMLElement[]): HTMLElement
export function caption(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function caption(...args: any[]): HTMLElement {
    if ((args[0] as any).tagName !== undefined) {
        return (f as any)({ tag: t.caption }, ...args)        
    }
    const options = args.shift()
    return (f as any)({ ...options, tag: t.caption }, ...args)
}

export function table(...children: HTMLElement[]): HTMLElement
export function table(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function table(...args: any[]): HTMLElement {
    if ((args[0] as any).tagName !== undefined) {
        return (f as any)({ tag: t.table }, ...args)        
    }
    const options = args.shift()
    return (f as any)({ ...options, tag: t.table }, ...args)
}

export function cite(...children: HTMLElement[]): HTMLElement
export function cite(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function cite(...args: any[]): HTMLElement {
    if ((args[0] as any).tagName !== undefined) {
        return (f as any)({ tag: t.cite }, ...args)        
    }
    const options = args.shift()
    return (f as any)({ ...options, tag: t.cite }, ...args)
}

export function samp(...children: HTMLElement[]): HTMLElement
export function samp(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function samp(...args: any[]): HTMLElement {
    if ((args[0] as any).tagName !== undefined) {
        return (f as any)({ tag: t.samp }, ...args)        
    }
    const options = args.shift()
    return (f as any)({ ...options, tag: t.samp }, ...args)
}

export function kbd(...children: HTMLElement[]): HTMLElement
export function kbd(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function kbd(...args: any[]): HTMLElement {
    if ((args[0] as any).tagName !== undefined) {
        return (f as any)({ tag: t.kbd }, ...args)        
    }
    const options = args.shift()
    return (f as any)({ ...options, tag: t.kbd }, ...args)
}

export function col(...children: HTMLElement[]): HTMLElement
export function col(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function col(...args: any[]): HTMLElement {
    if ((args[0] as any).tagName !== undefined) {
        return (f as any)({ tag: t.col }, ...args)        
    }
    const options = args.shift()
    return (f as any)({ ...options, tag: t.col }, ...args)
}

export function colgroup(...children: HTMLElement[]): HTMLElement
export function colgroup(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function colgroup(...args: any[]): HTMLElement {
    if ((args[0] as any).tagName !== undefined) {
        return (f as any)({ tag: t.colgroup }, ...args)        
    }
    const options = args.shift()
    return (f as any)({ ...options, tag: t.colgroup }, ...args)
}

export function data(...children: HTMLElement[]): HTMLElement
export function data(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function data(...args: any[]): HTMLElement {
    if ((args[0] as any).tagName !== undefined) {
        return (f as any)({ tag: t.data }, ...args)        
    }
    const options = args.shift()
    return (f as any)({ ...options, tag: t.data }, ...args)
}

export function datalist(...children: HTMLElement[]): HTMLElement
export function datalist(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function datalist(...args: any[]): HTMLElement {
    if ((args[0] as any).tagName !== undefined) {
        return (f as any)({ tag: t.datalist }, ...args)        
    }
    const options = args.shift()
    return (f as any)({ ...options, tag: t.datalist }, ...args)
}

export function input(...children: HTMLElement[]): HTMLElement
export function input(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function input(...args: any[]): HTMLElement {
    if ((args[0] as any).tagName !== undefined) {
        return (f as any)({ tag: t.input }, ...args)        
    }
    const options = args.shift()
    return (f as any)({ ...options, tag: t.input }, ...args)
}

export function dd(...children: HTMLElement[]): HTMLElement
export function dd(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function dd(...args: any[]): HTMLElement {
    if ((args[0] as any).tagName !== undefined) {
        return (f as any)({ tag: t.dd }, ...args)        
    }
    const options = args.shift()
    return (f as any)({ ...options, tag: t.dd }, ...args)
}

export function dt(...children: HTMLElement[]): HTMLElement
export function dt(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function dt(...args: any[]): HTMLElement {
    if ((args[0] as any).tagName !== undefined) {
        return (f as any)({ tag: t.dt }, ...args)        
    }
    const options = args.shift()
    return (f as any)({ ...options, tag: t.dt }, ...args)
}

export function dl(...children: HTMLElement[]): HTMLElement
export function dl(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function dl(...args: any[]): HTMLElement {
    if ((args[0] as any).tagName !== undefined) {
        return (f as any)({ tag: t.dl }, ...args)        
    }
    const options = args.shift()
    return (f as any)({ ...options, tag: t.dl }, ...args)
}

export function del(...children: HTMLElement[]): HTMLElement
export function del(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function del(...args: any[]): HTMLElement {
    if ((args[0] as any).tagName !== undefined) {
        return (f as any)({ tag: t.del }, ...args)        
    }
    const options = args.shift()
    return (f as any)({ ...options, tag: t.del }, ...args)
}

export function details(...children: HTMLElement[]): HTMLElement
export function details(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function details(...args: any[]): HTMLElement {
    if ((args[0] as any).tagName !== undefined) {
        return (f as any)({ tag: t.details }, ...args)        
    }
    const options = args.shift()
    return (f as any)({ ...options, tag: t.details }, ...args)
}

export function dfn(...children: HTMLElement[]): HTMLElement
export function dfn(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function dfn(...args: any[]): HTMLElement {
    if ((args[0] as any).tagName !== undefined) {
        return (f as any)({ tag: t.dfn }, ...args)        
    }
    const options = args.shift()
    return (f as any)({ ...options, tag: t.dfn }, ...args)
}

export function dialog(...children: HTMLElement[]): HTMLElement
export function dialog(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function dialog(...args: any[]): HTMLElement {
    if ((args[0] as any).tagName !== undefined) {
        return (f as any)({ tag: t.dialog }, ...args)        
    }
    const options = args.shift()
    return (f as any)({ ...options, tag: t.dialog }, ...args)
}

export function embed(...children: HTMLElement[]): HTMLElement
export function embed(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function embed(...args: any[]): HTMLElement {
    if ((args[0] as any).tagName !== undefined) {
        return (f as any)({ tag: t.embed }, ...args)        
    }
    const options = args.shift()
    return (f as any)({ ...options, tag: t.embed }, ...args)
}

export function fieldset(...children: HTMLElement[]): HTMLElement
export function fieldset(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function fieldset(...args: any[]): HTMLElement {
    if ((args[0] as any).tagName !== undefined) {
        return (f as any)({ tag: t.fieldset }, ...args)        
    }
    const options = args.shift()
    return (f as any)({ ...options, tag: t.fieldset }, ...args)
}

export function figure(...children: HTMLElement[]): HTMLElement
export function figure(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function figure(...args: any[]): HTMLElement {
    if ((args[0] as any).tagName !== undefined) {
        return (f as any)({ tag: t.figure }, ...args)        
    }
    const options = args.shift()
    return (f as any)({ ...options, tag: t.figure }, ...args)
}

export function footer(...children: HTMLElement[]): HTMLElement
export function footer(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function footer(...args: any[]): HTMLElement {
    if ((args[0] as any).tagName !== undefined) {
        return (f as any)({ tag: t.footer }, ...args)        
    }
    const options = args.shift()
    return (f as any)({ ...options, tag: t.footer }, ...args)
}

export function form(...children: HTMLElement[]): HTMLElement
export function form(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function form(...args: any[]): HTMLElement {
    if ((args[0] as any).tagName !== undefined) {
        return (f as any)({ tag: t.form }, ...args)        
    }
    const options = args.shift()
    return (f as any)({ ...options, tag: t.form }, ...args)
}

export function h1(...children: HTMLElement[]): HTMLElement
export function h1(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function h1(...args: any[]): HTMLElement {
    if ((args[0] as any).tagName !== undefined) {
        return (f as any)({ tag: t.h1 }, ...args)        
    }
    const options = args.shift()
    return (f as any)({ ...options, tag: t.h1 }, ...args)
}

export function h2(...children: HTMLElement[]): HTMLElement
export function h2(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function h2(...args: any[]): HTMLElement {
    if ((args[0] as any).tagName !== undefined) {
        return (f as any)({ tag: t.h2 }, ...args)        
    }
    const options = args.shift()
    return (f as any)({ ...options, tag: t.h2 }, ...args)
}

export function h3(...children: HTMLElement[]): HTMLElement
export function h3(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function h3(...args: any[]): HTMLElement {
    if ((args[0] as any).tagName !== undefined) {
        return (f as any)({ tag: t.h3 }, ...args)        
    }
    const options = args.shift()
    return (f as any)({ ...options, tag: t.h3 }, ...args)
}

export function h4(...children: HTMLElement[]): HTMLElement
export function h4(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function h4(...args: any[]): HTMLElement {
    if ((args[0] as any).tagName !== undefined) {
        return (f as any)({ tag: t.h4 }, ...args)        
    }
    const options = args.shift()
    return (f as any)({ ...options, tag: t.h4 }, ...args)
}

export function h5(...children: HTMLElement[]): HTMLElement
export function h5(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function h5(...args: any[]): HTMLElement {
    if ((args[0] as any).tagName !== undefined) {
        return (f as any)({ tag: t.h5 }, ...args)        
    }
    const options = args.shift()
    return (f as any)({ ...options, tag: t.h5 }, ...args)
}

export function h6(...children: HTMLElement[]): HTMLElement
export function h6(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function h6(...args: any[]): HTMLElement {
    if ((args[0] as any).tagName !== undefined) {
        return (f as any)({ tag: t.h6 }, ...args)        
    }
    const options = args.shift()
    return (f as any)({ ...options, tag: t.h6 }, ...args)
}

export function head(...children: HTMLElement[]): HTMLElement
export function head(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function head(...args: any[]): HTMLElement {
    if ((args[0] as any).tagName !== undefined) {
        return (f as any)({ tag: t.head }, ...args)        
    }
    const options = args.shift()
    return (f as any)({ ...options, tag: t.head }, ...args)
}

export function header(...children: HTMLElement[]): HTMLElement
export function header(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function header(...args: any[]): HTMLElement {
    if ((args[0] as any).tagName !== undefined) {
        return (f as any)({ tag: t.header }, ...args)        
    }
    const options = args.shift()
    return (f as any)({ ...options, tag: t.header }, ...args)
}

export function hgroup(...children: HTMLElement[]): HTMLElement
export function hgroup(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function hgroup(...args: any[]): HTMLElement {
    if ((args[0] as any).tagName !== undefined) {
        return (f as any)({ tag: t.hgroup }, ...args)        
    }
    const options = args.shift()
    return (f as any)({ ...options, tag: t.hgroup }, ...args)
}

export function hr(...children: HTMLElement[]): HTMLElement
export function hr(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function hr(...args: any[]): HTMLElement {
    if ((args[0] as any).tagName !== undefined) {
        return (f as any)({ tag: t.hr }, ...args)        
    }
    const options = args.shift()
    return (f as any)({ ...options, tag: t.hr }, ...args)
}

export function i(...children: HTMLElement[]): HTMLElement
export function i(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function i(...args: any[]): HTMLElement {
    if ((args[0] as any).tagName !== undefined) {
        return (f as any)({ tag: t.i }, ...args)        
    }
    const options = args.shift()
    return (f as any)({ ...options, tag: t.i }, ...args)
}

export function iframe(...children: HTMLElement[]): HTMLElement
export function iframe(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function iframe(...args: any[]): HTMLElement {
    if ((args[0] as any).tagName !== undefined) {
        return (f as any)({ tag: t.iframe }, ...args)        
    }
    const options = args.shift()
    return (f as any)({ ...options, tag: t.iframe }, ...args)
}

export function img(...children: HTMLElement[]): HTMLElement
export function img(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function img(...args: any[]): HTMLElement {
    if ((args[0] as any).tagName !== undefined) {
        return (f as any)({ tag: t.img }, ...args)        
    }
    const options = args.shift()
    return (f as any)({ ...options, tag: t.img }, ...args)
}

export function ins(...children: HTMLElement[]): HTMLElement
export function ins(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function ins(...args: any[]): HTMLElement {
    if ((args[0] as any).tagName !== undefined) {
        return (f as any)({ tag: t.ins }, ...args)        
    }
    const options = args.shift()
    return (f as any)({ ...options, tag: t.ins }, ...args)
}

export function keygen(...children: HTMLElement[]): HTMLElement
export function keygen(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function keygen(...args: any[]): HTMLElement {
    if ((args[0] as any).tagName !== undefined) {
        return (f as any)({ tag: t.keygen }, ...args)        
    }
    const options = args.shift()
    return (f as any)({ ...options, tag: t.keygen }, ...args)
}

export function label(...children: HTMLElement[]): HTMLElement
export function label(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function label(...args: any[]): HTMLElement {
    if ((args[0] as any).tagName !== undefined) {
        return (f as any)({ tag: t.label }, ...args)        
    }
    const options = args.shift()
    return (f as any)({ ...options, tag: t.label }, ...args)
}

export function legend(...children: HTMLElement[]): HTMLElement
export function legend(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function legend(...args: any[]): HTMLElement {
    if ((args[0] as any).tagName !== undefined) {
        return (f as any)({ tag: t.legend }, ...args)        
    }
    const options = args.shift()
    return (f as any)({ ...options, tag: t.legend }, ...args)
}

export function li(...children: HTMLElement[]): HTMLElement
export function li(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function li(...args: any[]): HTMLElement {
    if ((args[0] as any).tagName !== undefined) {
        return (f as any)({ tag: t.li }, ...args)        
    }
    const options = args.shift()
    return (f as any)({ ...options, tag: t.li }, ...args)
}

export function ol(...children: HTMLElement[]): HTMLElement
export function ol(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function ol(...args: any[]): HTMLElement {
    if ((args[0] as any).tagName !== undefined) {
        return (f as any)({ tag: t.ol }, ...args)        
    }
    const options = args.shift()
    return (f as any)({ ...options, tag: t.ol }, ...args)
}

export function ul(...children: HTMLElement[]): HTMLElement
export function ul(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function ul(...args: any[]): HTMLElement {
    if ((args[0] as any).tagName !== undefined) {
        return (f as any)({ tag: t.ul }, ...args)        
    }
    const options = args.shift()
    return (f as any)({ ...options, tag: t.ul }, ...args)
}

export function link(...children: HTMLElement[]): HTMLElement
export function link(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function link(...args: any[]): HTMLElement {
    if ((args[0] as any).tagName !== undefined) {
        return (f as any)({ tag: t.link }, ...args)        
    }
    const options = args.shift()
    return (f as any)({ ...options, tag: t.link }, ...args)
}

export function main(...children: HTMLElement[]): HTMLElement
export function main(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function main(...args: any[]): HTMLElement {
    if ((args[0] as any).tagName !== undefined) {
        return (f as any)({ tag: t.main }, ...args)        
    }
    const options = args.shift()
    return (f as any)({ ...options, tag: t.main }, ...args)
}

export function map(...children: HTMLElement[]): HTMLElement
export function map(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function map(...args: any[]): HTMLElement {
    if ((args[0] as any).tagName !== undefined) {
        return (f as any)({ tag: t.map }, ...args)        
    }
    const options = args.shift()
    return (f as any)({ ...options, tag: t.map }, ...args)
}

export function mark(...children: HTMLElement[]): HTMLElement
export function mark(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function mark(...args: any[]): HTMLElement {
    if ((args[0] as any).tagName !== undefined) {
        return (f as any)({ tag: t.mark }, ...args)        
    }
    const options = args.shift()
    return (f as any)({ ...options, tag: t.mark }, ...args)
}

export function menu(...children: HTMLElement[]): HTMLElement
export function menu(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function menu(...args: any[]): HTMLElement {
    if ((args[0] as any).tagName !== undefined) {
        return (f as any)({ tag: t.menu }, ...args)        
    }
    const options = args.shift()
    return (f as any)({ ...options, tag: t.menu }, ...args)
}

export function menuitem(...children: HTMLElement[]): HTMLElement
export function menuitem(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function menuitem(...args: any[]): HTMLElement {
    if ((args[0] as any).tagName !== undefined) {
        return (f as any)({ tag: t.menuitem }, ...args)        
    }
    const options = args.shift()
    return (f as any)({ ...options, tag: t.menuitem }, ...args)
}

export function meta(...children: HTMLElement[]): HTMLElement
export function meta(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function meta(...args: any[]): HTMLElement {
    if ((args[0] as any).tagName !== undefined) {
        return (f as any)({ tag: t.meta }, ...args)        
    }
    const options = args.shift()
    return (f as any)({ ...options, tag: t.meta }, ...args)
}

export function meter(...children: HTMLElement[]): HTMLElement
export function meter(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function meter(...args: any[]): HTMLElement {
    if ((args[0] as any).tagName !== undefined) {
        return (f as any)({ tag: t.meter }, ...args)        
    }
    const options = args.shift()
    return (f as any)({ ...options, tag: t.meter }, ...args)
}

export function nav(...children: HTMLElement[]): HTMLElement
export function nav(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function nav(...args: any[]): HTMLElement {
    if ((args[0] as any).tagName !== undefined) {
        return (f as any)({ tag: t.nav }, ...args)        
    }
    const options = args.shift()
    return (f as any)({ ...options, tag: t.nav }, ...args)
}

export function noscript(...children: HTMLElement[]): HTMLElement
export function noscript(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function noscript(...args: any[]): HTMLElement {
    if ((args[0] as any).tagName !== undefined) {
        return (f as any)({ tag: t.noscript }, ...args)        
    }
    const options = args.shift()
    return (f as any)({ ...options, tag: t.noscript }, ...args)
}

export function object(...children: HTMLElement[]): HTMLElement
export function object(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function object(...args: any[]): HTMLElement {
    if ((args[0] as any).tagName !== undefined) {
        return (f as any)({ tag: t.object }, ...args)        
    }
    const options = args.shift()
    return (f as any)({ ...options, tag: t.object }, ...args)
}

export function optgroup(...children: HTMLElement[]): HTMLElement
export function optgroup(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function optgroup(...args: any[]): HTMLElement {
    if ((args[0] as any).tagName !== undefined) {
        return (f as any)({ tag: t.optgroup }, ...args)        
    }
    const options = args.shift()
    return (f as any)({ ...options, tag: t.optgroup }, ...args)
}

export function option(...children: HTMLElement[]): HTMLElement
export function option(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function option(...args: any[]): HTMLElement {
    if ((args[0] as any).tagName !== undefined) {
        return (f as any)({ tag: t.option }, ...args)        
    }
    const options = args.shift()
    return (f as any)({ ...options, tag: t.option }, ...args)
}

export function select(...children: HTMLElement[]): HTMLElement
export function select(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function select(...args: any[]): HTMLElement {
    if ((args[0] as any).tagName !== undefined) {
        return (f as any)({ tag: t.select }, ...args)        
    }
    const options = args.shift()
    return (f as any)({ ...options, tag: t.select }, ...args)
}

export function output(...children: HTMLElement[]): HTMLElement
export function output(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function output(...args: any[]): HTMLElement {
    if ((args[0] as any).tagName !== undefined) {
        return (f as any)({ tag: t.output }, ...args)        
    }
    const options = args.shift()
    return (f as any)({ ...options, tag: t.output }, ...args)
}

export function p(...children: HTMLElement[]): HTMLElement
export function p(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function p(...args: any[]): HTMLElement {
    if ((args[0] as any).tagName !== undefined) {
        return (f as any)({ tag: t.p }, ...args)        
    }
    const options = args.shift()
    return (f as any)({ ...options, tag: t.p }, ...args)
}

export function param(...children: HTMLElement[]): HTMLElement
export function param(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function param(...args: any[]): HTMLElement {
    if ((args[0] as any).tagName !== undefined) {
        return (f as any)({ tag: t.param }, ...args)        
    }
    const options = args.shift()
    return (f as any)({ ...options, tag: t.param }, ...args)
}

export function pre(...children: HTMLElement[]): HTMLElement
export function pre(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function pre(...args: any[]): HTMLElement {
    if ((args[0] as any).tagName !== undefined) {
        return (f as any)({ tag: t.pre }, ...args)        
    }
    const options = args.shift()
    return (f as any)({ ...options, tag: t.pre }, ...args)
}

export function progress(...children: HTMLElement[]): HTMLElement
export function progress(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function progress(...args: any[]): HTMLElement {
    if ((args[0] as any).tagName !== undefined) {
        return (f as any)({ tag: t.progress }, ...args)        
    }
    const options = args.shift()
    return (f as any)({ ...options, tag: t.progress }, ...args)
}

export function q(...children: HTMLElement[]): HTMLElement
export function q(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function q(...args: any[]): HTMLElement {
    if ((args[0] as any).tagName !== undefined) {
        return (f as any)({ tag: t.q }, ...args)        
    }
    const options = args.shift()
    return (f as any)({ ...options, tag: t.q }, ...args)
}

export function rb(...children: HTMLElement[]): HTMLElement
export function rb(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function rb(...args: any[]): HTMLElement {
    if ((args[0] as any).tagName !== undefined) {
        return (f as any)({ tag: t.rb }, ...args)        
    }
    const options = args.shift()
    return (f as any)({ ...options, tag: t.rb }, ...args)
}

export function rp(...children: HTMLElement[]): HTMLElement
export function rp(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function rp(...args: any[]): HTMLElement {
    if ((args[0] as any).tagName !== undefined) {
        return (f as any)({ tag: t.rp }, ...args)        
    }
    const options = args.shift()
    return (f as any)({ ...options, tag: t.rp }, ...args)
}

export function rt(...children: HTMLElement[]): HTMLElement
export function rt(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function rt(...args: any[]): HTMLElement {
    if ((args[0] as any).tagName !== undefined) {
        return (f as any)({ tag: t.rt }, ...args)        
    }
    const options = args.shift()
    return (f as any)({ ...options, tag: t.rt }, ...args)
}

export function rtc(...children: HTMLElement[]): HTMLElement
export function rtc(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function rtc(...args: any[]): HTMLElement {
    if ((args[0] as any).tagName !== undefined) {
        return (f as any)({ tag: t.rtc }, ...args)        
    }
    const options = args.shift()
    return (f as any)({ ...options, tag: t.rtc }, ...args)
}

export function ruby(...children: HTMLElement[]): HTMLElement
export function ruby(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function ruby(...args: any[]): HTMLElement {
    if ((args[0] as any).tagName !== undefined) {
        return (f as any)({ tag: t.ruby }, ...args)        
    }
    const options = args.shift()
    return (f as any)({ ...options, tag: t.ruby }, ...args)
}

export function s(...children: HTMLElement[]): HTMLElement
export function s(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function s(...args: any[]): HTMLElement {
    if ((args[0] as any).tagName !== undefined) {
        return (f as any)({ tag: t.s }, ...args)        
    }
    const options = args.shift()
    return (f as any)({ ...options, tag: t.s }, ...args)
}

export function script(...children: HTMLElement[]): HTMLElement
export function script(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function script(...args: any[]): HTMLElement {
    if ((args[0] as any).tagName !== undefined) {
        return (f as any)({ tag: t.script }, ...args)        
    }
    const options = args.shift()
    return (f as any)({ ...options, tag: t.script }, ...args)
}

export function section(...children: HTMLElement[]): HTMLElement
export function section(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function section(...args: any[]): HTMLElement {
    if ((args[0] as any).tagName !== undefined) {
        return (f as any)({ tag: t.section }, ...args)        
    }
    const options = args.shift()
    return (f as any)({ ...options, tag: t.section }, ...args)
}

export function small(...children: HTMLElement[]): HTMLElement
export function small(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function small(...args: any[]): HTMLElement {
    if ((args[0] as any).tagName !== undefined) {
        return (f as any)({ tag: t.small }, ...args)        
    }
    const options = args.shift()
    return (f as any)({ ...options, tag: t.small }, ...args)
}

export function source(...children: HTMLElement[]): HTMLElement
export function source(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function source(...args: any[]): HTMLElement {
    if ((args[0] as any).tagName !== undefined) {
        return (f as any)({ tag: t.source }, ...args)        
    }
    const options = args.shift()
    return (f as any)({ ...options, tag: t.source }, ...args)
}

export function video(...children: HTMLElement[]): HTMLElement
export function video(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function video(...args: any[]): HTMLElement {
    if ((args[0] as any).tagName !== undefined) {
        return (f as any)({ tag: t.video }, ...args)        
    }
    const options = args.shift()
    return (f as any)({ ...options, tag: t.video }, ...args)
}

export function span(...children: HTMLElement[]): HTMLElement
export function span(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function span(...args: any[]): HTMLElement {
    if ((args[0] as any).tagName !== undefined) {
        return (f as any)({ tag: t.span }, ...args)        
    }
    const options = args.shift()
    return (f as any)({ ...options, tag: t.span }, ...args)
}

export function style(...children: HTMLElement[]): HTMLElement
export function style(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function style(...args: any[]): HTMLElement {
    if ((args[0] as any).tagName !== undefined) {
        return (f as any)({ tag: t.style }, ...args)        
    }
    const options = args.shift()
    return (f as any)({ ...options, tag: t.style }, ...args)
}

export function sub(...children: HTMLElement[]): HTMLElement
export function sub(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function sub(...args: any[]): HTMLElement {
    if ((args[0] as any).tagName !== undefined) {
        return (f as any)({ tag: t.sub }, ...args)        
    }
    const options = args.shift()
    return (f as any)({ ...options, tag: t.sub }, ...args)
}

export function sup(...children: HTMLElement[]): HTMLElement
export function sup(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function sup(...args: any[]): HTMLElement {
    if ((args[0] as any).tagName !== undefined) {
        return (f as any)({ tag: t.sup }, ...args)        
    }
    const options = args.shift()
    return (f as any)({ ...options, tag: t.sup }, ...args)
}

export function summary(...children: HTMLElement[]): HTMLElement
export function summary(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function summary(...args: any[]): HTMLElement {
    if ((args[0] as any).tagName !== undefined) {
        return (f as any)({ tag: t.summary }, ...args)        
    }
    const options = args.shift()
    return (f as any)({ ...options, tag: t.summary }, ...args)
}

export function tbody(...children: HTMLElement[]): HTMLElement
export function tbody(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function tbody(...args: any[]): HTMLElement {
    if ((args[0] as any).tagName !== undefined) {
        return (f as any)({ tag: t.tbody }, ...args)        
    }
    const options = args.shift()
    return (f as any)({ ...options, tag: t.tbody }, ...args)
}

export function td(...children: HTMLElement[]): HTMLElement
export function td(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function td(...args: any[]): HTMLElement {
    if ((args[0] as any).tagName !== undefined) {
        return (f as any)({ tag: t.td }, ...args)        
    }
    const options = args.shift()
    return (f as any)({ ...options, tag: t.td }, ...args)
}

export function template(...children: HTMLElement[]): HTMLElement
export function template(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function template(...args: any[]): HTMLElement {
    if ((args[0] as any).tagName !== undefined) {
        return (f as any)({ tag: t.template }, ...args)        
    }
    const options = args.shift()
    return (f as any)({ ...options, tag: t.template }, ...args)
}

export function textarea(...children: HTMLElement[]): HTMLElement
export function textarea(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function textarea(...args: any[]): HTMLElement {
    if ((args[0] as any).tagName !== undefined) {
        return (f as any)({ tag: t.textarea }, ...args)        
    }
    const options = args.shift()
    return (f as any)({ ...options, tag: t.textarea }, ...args)
}

export function tfoot(...children: HTMLElement[]): HTMLElement
export function tfoot(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function tfoot(...args: any[]): HTMLElement {
    if ((args[0] as any).tagName !== undefined) {
        return (f as any)({ tag: t.tfoot }, ...args)        
    }
    const options = args.shift()
    return (f as any)({ ...options, tag: t.tfoot }, ...args)
}

export function th(...children: HTMLElement[]): HTMLElement
export function th(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function th(...args: any[]): HTMLElement {
    if ((args[0] as any).tagName !== undefined) {
        return (f as any)({ tag: t.th }, ...args)        
    }
    const options = args.shift()
    return (f as any)({ ...options, tag: t.th }, ...args)
}

export function thead(...children: HTMLElement[]): HTMLElement
export function thead(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function thead(...args: any[]): HTMLElement {
    if ((args[0] as any).tagName !== undefined) {
        return (f as any)({ tag: t.thead }, ...args)        
    }
    const options = args.shift()
    return (f as any)({ ...options, tag: t.thead }, ...args)
}

export function time(...children: HTMLElement[]): HTMLElement
export function time(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function time(...args: any[]): HTMLElement {
    if ((args[0] as any).tagName !== undefined) {
        return (f as any)({ tag: t.time }, ...args)        
    }
    const options = args.shift()
    return (f as any)({ ...options, tag: t.time }, ...args)
}

export function tr(...children: HTMLElement[]): HTMLElement
export function tr(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function tr(...args: any[]): HTMLElement {
    if ((args[0] as any).tagName !== undefined) {
        return (f as any)({ tag: t.tr }, ...args)        
    }
    const options = args.shift()
    return (f as any)({ ...options, tag: t.tr }, ...args)
}

export function track(...children: HTMLElement[]): HTMLElement
export function track(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function track(...args: any[]): HTMLElement {
    if ((args[0] as any).tagName !== undefined) {
        return (f as any)({ tag: t.track }, ...args)        
    }
    const options = args.shift()
    return (f as any)({ ...options, tag: t.track }, ...args)
}

export function u(...children: HTMLElement[]): HTMLElement
export function u(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
export function u(...args: any[]): HTMLElement {
    if ((args[0] as any).tagName !== undefined) {
        return (f as any)({ tag: t.u }, ...args)        
    }
    const options = args.shift()
    return (f as any)({ ...options, tag: t.u }, ...args)
}
