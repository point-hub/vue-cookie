# @point-hub/cookie

Vuejs 3 plugin for handle browser cookie

## Installation
```
yarn add @point-hub/cookie

or

npm install @point-hub/cookie --save
```

## Usage
Import Plugin
```
import cookie from "@point-hub/cookie";
```

Insert or Update Cookie
```
cookie.set("name", "value")


# with options

cookie.set("name", "value", {
  expires: "",
  path: "/"
})
```

Read Cookie
```
cookie.get("name")
```

Delete Cookie
```
cookie.remove("name")
```

## Build Setup
```
# Project setup

yarn install

# Compiles and hot-reloads for development

yarn serve

# Compiles and minifies for production

yarn build

# Run your unit tests

yarn test:unit

# Lints and fixes files

yarn lint

# Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
```
