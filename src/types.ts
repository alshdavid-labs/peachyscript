export type CSSDeclaration = CSSStyleDeclaration | Record<string, any>

export interface ElementOptions {
    tag?: HTMLTag | string,
    cssText?: string,
    styles?: CSSDeclaration,
    className?: string,
    id?: string,
    innerHTML?: string,
    innerText?: string,
    events?: Record<string, (e: Event) => void>
}

export enum HTMLTag {
    a = 'a',
    abbr  = 'abbr ',
    address = 'address',
    area = 'area',
    article = 'article',
    aside = 'aside',
    audio = 'audio',
    em = 'em',
    strong = 'strong',
    base = 'base',
    bdi = 'bdi',
    bdo = 'bdo',
    blockquote = 'blockquote',
    body = 'body',
    button = 'button',
    canvas = 'canvas',
    caption = 'caption',
    table = 'table',
    cite = 'cite',
    samp = 'samp',
    kbd = 'kbd',
    col = 'col',
    colgroup = 'colgroup',
    data = 'data',
    datalist = 'datalist',
    input = 'input',
    dd = 'dd',
    dt = 'dt',
    dl = 'dl',
    del = 'del',
    details = 'details',
    dfn = 'dfn',
    dialog = 'dialog',
    div = 'div',
    embed = 'embed',
    fieldset = 'fieldset',
    figure = 'figure',
    footer = 'footer',
    form = 'form',
    h1 = 'h1',
    h2 = 'h2',
    h3 = 'h3',
    h4 = 'h4',
    h5 = 'h5',
    h6 = 'h6',
    head = 'head',
    header = 'header',
    hgroup = 'hgroup',
    hr = 'hr',
    i = 'i',
    iframe = 'iframe',
    img = 'img',
    ins = 'ins',
    keygen = 'keygen',
    label = 'label',
    legend = 'legend',
    li = 'li',
    ol = 'ol',
    ul = 'ul',
    link = 'link',
    main = 'main',
    map = 'map',
    mark = 'mark',
    menu = 'menu',
    menuitem = 'menuitem',
    meta = 'meta',
    meter = 'meter',
    nav = 'nav',
    noscript = 'noscript',
    object = 'object',
    optgroup = 'optgroup',
    option = 'option',
    select = 'select',
    output = 'output',
    p = 'p',
    param = 'param',
    pre = 'pre',
    progress = 'progress',
    q = 'q',
    rb = 'rb',
    rp = 'rp',
    rt = 'rt',
    rtc = 'rtc',
    ruby = 'ruby',
    s = 's',
    script = 'script',
    section = 'section',
    small = 'small',
    source = 'source',
    video = 'video',
    span = 'span',
    style = 'style',
    sub = 'sub',
    sup = 'sup',
    summary = 'summary',
    tbody = 'tbody',
    td = 'td',
    template = 'template',
    textarea = 'textarea',
    tfoot = 'tfoot',
    th = 'th',
    thead = 'thead',
    time = 'time',
    tr = 'tr',
    track = 'track',
    u = 'u',
    var = 'var',
}