const fs = require('fs')
const tags = require('./tags.json')

const added = []
let output = ''

for (const tag of tags) {
    if (added.includes(tag)) {
        continue
    }
    if (tag === 'var') {
        continue
    }
    added.push(tag)
    output += `
        export function ${tag}(...children: HTMLElement[]): HTMLElement
        export function ${tag}(options: ElementOptions, ...children: HTMLElement[]): HTMLElement
        export function ${tag}(...args: any[]): HTMLElement {
            return oe(t.${tag}, ...args)
        }
    `
}

fs.writeFileSync('./o.ts', output)