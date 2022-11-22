# @point-hub/vue-cookie

Vuejs 3 plugin for handle browser cookie

## Installation
```
yarn add @point-hub/vue-cookie

or

npm install @point-hub/vue-cookie --save
```

## Usage
Import Plugin
```
import cookie from "@point-hub/vue-cookie";
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

yarn dev

# Compiles and minifies for production

yarn build:lib

# Lints and fixes files

yarn lint
```
