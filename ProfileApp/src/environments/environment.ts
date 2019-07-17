// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  GET_CODE_URL: 'https://oauth.vk.com/authorize?client_id=7057838&display=popup&redirect_uri=http://localhost:4200/&scope=friends&response_type=code&v=5.101',
  GET_ACCESS_TOKEN: `https://oauth.vk.com/access_token?client_id=7057838&client_secret=DhHwSlUUMc5x02bmSTi1&redirect_uri=http://localhost:4200/&code=${localStorage.getItem('code')}`,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
