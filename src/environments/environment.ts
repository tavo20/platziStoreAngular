// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  url_api: 'http://platzi-store.herokuapp.com/products/',
  firebaseConfig:  {
    apiKey: "AIzaSyAKIx5tf1WmX8LK_s7xkzc0xI6jofirg8c",
    authDomain: "examplefirebase-ba4cc.firebaseapp.com",
    databaseURL: "https://examplefirebase-ba4cc.firebaseio.com",
    projectId: "examplefirebase-ba4cc",
    storageBucket: "examplefirebase-ba4cc.appspot.com",
    messagingSenderId: "874510915686",
    appId: '1:874510915686:web:7d8f8dfbc1254360'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
