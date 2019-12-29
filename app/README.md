# apprestored
* with "vue create apprestored", no linting (too constraining for dev)
* npm run serve
* moving files from app
* installing some dependencies (google maps, router)
* Map:
   * confusing
   * 2 different dependencies, @google/maps and vue2-google-maps; the first one is registered in Vue.use
   * two different loads:
      * through hardcode inline html
      * through main.js and dynamic loading into inline html
   * also, at main.js the map is embedded in a promise (`loadedGoogleMapsAPI`) that resolves to the corresponding callback, `GoogleMapsInit`, of the API; however the MAP is defined as a GLOBAL (attached to window, `GMap`), so it is available as `new window.google.maps`
   * when one of my components is MOUNTED, I call for the resolution of `loadedGoogleMapsAPI` => gives an error! (probably nothing to resolve); although I was expecting to call a method that INITIALIZE the map in the success chain, that initialization never happened because the error; `GoogleMapsInit`, which is the initialization callback of the link, is NEVER called
   * a partial solution was to initialize the GLOBAL MAP when mounting (!!!) WITHOUT REFRESING after rendering the app, indicating that the map was already available but that the promise was not correctly set; however, after a REFRESHING the mounted function WONT RECOGNIZE the MAP INITIALIZATION
   * a usual workflow with dynamic inline html loading (JS):
      * create the callback function for the API
      * inside there, call the initialization of the map and its configuration
      * create an script for dynamic loading the API, with the callback function assigned to the link
      * on `window.onload` call the dynamic loading function
   * (The problem seemed to be the reject script of the promise...)
 

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
