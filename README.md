# peachyscript

```typescript
import { div, h1, p, button } from 'peachyscript'

const el = div(
    h1({
        innerText: 'Hello!'
    }),
    p({
        innerText: 'World'
    }),
    button({
        innerText: 'Click Me!',
        events: {
            onclick: console.log
        }
    })
)

document.body.appendChild(el)
```