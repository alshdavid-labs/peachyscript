import { ElementOptions, HTMLTag } from "./types";

export const elementFactory = (options?: ElementOptions, ...children: HTMLElement[]) => {
    if (!options) {
        options = {}
    }
    const element = document.createElement(options.tag || HTMLTag.div)

    if (options.id) {
        element.id = options.id
    }

    if (options.className) {
        element.classList.value = options.className
    }

    if (options.cssText) {
        element.style.cssText = options.cssText
    }

    if (options.styles) {
        for (const style in options.styles) {
            if (!options.styles.hasOwnProperty(style)) {
                continue
            }
            element.style[style as any] = (options as any).styles[style]
        }
    }    

    if (options.innerHTML) {
        element.innerHTML = options.innerHTML
    }

    if (options.innerText) {
        element.innerText = options.innerText
    }

    if (options.events) {
        for (const eventName in options.events) {
            if (!options.events.hasOwnProperty(eventName)) {
                continue
            }
            (element as any)[eventName] = options.events[eventName]
        }
    }

    for (const child of children) {
        element.appendChild(child)
    }

    // Patch that waits for the element to exist before proceeding
    const _appendChild = <T extends Node>(newChild: T): T => {
        const e = element.appendChild(newChild)
        element.getBoundingClientRect()
        return e
    }

    element.appendChild = _appendChild

    return element
}