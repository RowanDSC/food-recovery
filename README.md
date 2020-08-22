To start:

`npm install`

`npm run dev`

### Known Issues:
- Code lookup on frontend package links to compiled js instead of original source. This is because Next uses tsconfig.json and not tsconfig.build.json to build, so we can't route the editor correctly with tsconfig.json
