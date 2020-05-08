# repro--rollup-plugin-typescript--export-asterisk-from-js

Reproduces Bug For @rollup/plugin-typescript where `export * from "./somemodule.js"` is not possible.

## Steps to Reproduce

1. `npm i`
2. `npm run build`

## Places To Fiddle

See [./src/reexports.ts](./src/reexports.ts) and try (un-)commenting the according lines.
