const defaultOptions = {
  path: "/",
  expires: new Date(Date.now() + 86400e3)
};

let config = {};

function install(app, options) {
  config = {
    ...defaultOptions,
    ...options
  };

  app.provide("cookie", config);

  app.config.globalProperties.$cookie = {
    getAll,
    get,
    set,
    remove
  };
}

function get(name) {
  if (typeof document === "undefined" || !name) {
    return;
  }

  const cookies = document.cookie ? document.cookie.split("; ") : [];

  for (var i = 0; i < cookies.length; i++) {
    var c = cookies[i];
    if (c.indexOf(name) == 0) {
      return decodeURIComponent(c.substring(name.length + 1, c.length));
    }
  }

  return cookies;
}

function getAll() {
  if (typeof document === "undefined") {
    return;
  }

  const cookies = document.cookie ? document.cookie.split("; ") : [];
  for (var i = 0; i < cookies.length; i++) {
    // Separate cookie name and value
    const cookie = cookies[i].split("=");
    // Decoding cookie
    cookie[0] = decodeURIComponent(cookie[0]);
    cookie[1] = decodeURIComponent(cookie[1]);
    // Push cookie into array
    cookies[i] = cookie;
  }

  return cookies;
}

function set(name, value, options = {}) {
  config = {
    ...defaultOptions,
    ...options
  };

  if (config.expires instanceof Date) {
    config.expires = config.expires.toUTCString();
  }

  let formattedCookie =
    encodeURIComponent(name) + "=" + encodeURIComponent(value);

  for (let optionKey in config) {
    formattedCookie += "; " + optionKey;
    let optionValue = config[optionKey];
    if (optionValue !== true) {
      formattedCookie += "=" + optionValue;
    }
  }

  document.cookie = formattedCookie;
}

function remove(name) {
  set(decodeURIComponent(name), "", {
    "max-age": -1
  });
}

export default { install, get, getAll, set, remove };
