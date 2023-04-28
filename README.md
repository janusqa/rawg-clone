npm create vite@latest .

put in definConfig in vite.config.ts
```ts
    server: {
        port: 3000,
    },
```
# typing env
- npm i -d @types/node // useful when accessing process in /config/env.ts

# UI - Charka UI
- npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion
- npm i axios
- npm i react-icons

# fetching and state management for serve side
- npm i @tanstack/react-query
- npm i -d @tanstack/react-query-devtools"

# Calulating times
- npm i ms
- npm i -D @types/ms
- import ms from 'ms'
- const oneDayInMs = ms('24')

# client State management
- npm i zustand
- npm i -D simple-zustand-devtools
import into the store you want to monitor
- import { mountStoreDevtool } from 'simple-zustand-devtools';
- npm i -D @types/node so we can access process module

# Routing - React Router
- npm i react-router-dom


# Deploy
- npm run build  
  - output is in /dist
