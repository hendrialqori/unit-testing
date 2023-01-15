# Unit Testing React Component
Menggunakan pustaka [vitest](https://vitest.dev) & [@testing-library/react](https://testing-library.com)

## Pustakan yang di perlukan / Requirement library
##### 1. [JSDom](https://www.npmjs.com/package/jsdom)
```bash
npm i -D jsdom
```

##### 2. [Vitest](https://vitest.dev)
```bash
npm i -D vitest
```

##### 3. [@testing-library/react](https://testing-library.com/docs/react-testing-library)
```bash
npm i -D @testing-library/react
```

## Setting config
```ts
//vite.config.ts

/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
  }
})

```

## Memulai projek / Getting started
Ada 3 konsep dasar jika akan melakukan sebuah unitest pada component react,
- ARRANGE / Mengatur / Setup
```tsx
import { render } from '@testing-library/react'
import Counter from './Counter.component'

render(<Counter initialValue={0}/>)
```
- ACT / Bertindak / Aksi
```tsx
import { describe, it } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import Counter from './Counter.component'

describe('Render', () => {
  it('Render counter component', () => {
    const {getByTestId} = render(<Counter initialValue={0}/>)
    
    // Act => Menambahkan event click / add click event
    fireEvent.dblClick(screen.getByText('Add 1'))
    
 })
```

- ASSERT / Menegaskan
```tsx
import { describe, it } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import Counter from './Counter.component'

describe('Render', () => {
  it('Render counter component', () => {
  
    // ARRANGE
    const {getByTestId} = render(<Counter initialValue={0}/>)

    // ACT
    fireEvent.dblClick(screen.getByText('Add 1'))

    const currentValue = Number(getByTestId('count').textContent)

    // ASSERT
    expect(currentValue).toEqual(1)

  })
})
```
