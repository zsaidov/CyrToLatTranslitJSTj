# CyrToLatTranslitJS
 
Ultra-lightweight JavaScript library for converting Cyrillic symbols to Translit and vice versa

[Demo page](https://cyr-to-lat-js.web.app)

## Install

`npm install --save cyrToLatTranslit`

## Simple to use

```ts
import CyrillicToTranslit from 'CyrToLatTranslit.js';

const cyrillicToTranslit = new CyrToLatTranslit();

cyrillicToTranslit.transform('Салом Ахмад', '_');
```

### Constructor

* `{ preset: tj }` or _**empty**_ - transliteration preset for Tajik language.
* `{ preset: ru }` - transliteration preset for Russian language.

### transform()

> Convert Cyrillic symbols to Translit

`cyrillicToTranslit().transform(input, spaceReplacement);`

* `input` - string which should be transformed
* `spaceReplacement` - symbol for space replacement

### reverse()

> Convert Translit symbols to Cyrillic

`cyrillicToTranslit().reverse(input, spaceReplacement);`

* `input` - string which should be transformed
* `spaceReplacement` - symbol for space replacement

## Examples

* **transform()**
```js
  cyrillicToTranslit().transform('Азию Плюс');

  > Aziya Plyus
```

* **reverse()**
```js
  cyrillicToTranslit().reverse("Aziya Plyus")

 > Азию Плюс
```

## Typescript

Typescript supports starting form v2.0.0. See definitions [here](CyrToLatTranslit.d.ts)

## License

MIT © Zohid Saidov
