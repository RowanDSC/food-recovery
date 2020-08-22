# Food Recovery PWA

### Start:  
1. `npm install`
2. `npm run dev`

### Requirements:  
[Requirement Google Doc](https://docs.google.com/document/d/13eW7WXndj0HYwHQ_2oe_iFBcQc9PDcjvpsXm9kdpHGU/edit?usp=sharing)  

### Known Issues:
- Code lookup on frontend package links to compiled js instead of original source. This is because Next uses tsconfig.json and not tsconfig.build.json to build, so we can't route the editor correctly with tsconfig.json
