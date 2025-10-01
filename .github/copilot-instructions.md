Vue scripts must use defineComponent, and never put methods/variables in the root of the file.

Make sure that the code outputted is in a code block!

All comments should start with lowercase, and must be right at the beginning of the comment, such as:
//this is a comment

For vue, make sure to use data() over setup(), ensure scripts start with <script lang="ts">, and styles are always scoped with a lang of "less"

Order of Vue blocks:
- template
- style
- script

Make sure to use double quotes always for strings, never use single quotes.  Always end JS and TS code with semi-colons, and ALWAYS use four space indents!

Prefer to split HUGE files into smaller ones when possible, but in Vue, do not put the CSS into its own file.

Default to using Bun instead of Node.js.

- Use `bun <file>` instead of `node <file>` or `ts-node <file>`
- Use `bun test` instead of `jest` or `vitest`
- Use `bun build <file.html|file.ts|file.css>` instead of `webpack` or `esbuild`
- Use `bun install` instead of `npm install` or `yarn install` or `pnpm install`
- Use `bun run <script>` instead of `npm run <script>` or `yarn run <script>` or `pnpm run <script>`
- Bun automatically loads .env, so don't use dotenv.
- Bun can directly run typescript files without the need for compilation.