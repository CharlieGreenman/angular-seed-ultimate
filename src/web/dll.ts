/**
 * Pollyfill Imports
 */
export function polyfills(env?: any) {
  return [
    'core-js/es6/symbol',
    'core-js/es6/object',
    'core-js/es6/function',
    'core-js/es6/parse-int',
    'core-js/es6/parse-float',
    'core-js/es6/number',
    'core-js/es6/math',
    'core-js/es6/string',
    'core-js/es6/date',
    'core-js/es6/array',
    'core-js/es6/regexp',
    'core-js/es6/map',
    'core-js/es6/set',
    'core-js/es6/weak-map',
    'core-js/es6/weak-set',
    'core-js/es6/typed',
    'core-js/es6/reflect',
    'core-js/es7/reflect',
    'zone.js/dist/zone',
    'zone.js/dist/long-stack-trace-zone',
    'ts-helpers',
  ];
}

/**
 * ngrx Imports
 */
export function ngrx(env?: any) {
  return [
    '@ngrx/core',
    '@ngrx/effects',
    '@ngrx/router-store',
    '@ngrx/store',
    '@ngrx/store-devtools',
    '@ngrx/store-log-monitor'
  ];
}

/**
 * RxJS Imports
 */
export function rxjs(env?: any) {
  return [
    'rxjs/Observable',
    'rxjs/Subscription',
    'rxjs/Subject',
    'rxjs/BehaviorSubject',
    'rxjs/add/operator/map',
    'rxjs/add/operator/mergeMap',
    'rxjs/add/operator/distinctUntilChanged',
  ];
}

/**
 * Vendor Imports
 */
export function vendors(env?: any) {
  return [
    '@angular/platform-browser',
    '@angular/platform-browser-dynamic',
    '@angular/compiler',
    '@angular/router',
    '@angular/forms',
    '@angular/common',
    '@angular/core',
    '@angular/http',
  ];
}

/**
 * Custom Vendor Imports
 */
export function custom_vendors(env?: any) {
  return [
    // Your extended Vendor libs go here :)
  ];
}
