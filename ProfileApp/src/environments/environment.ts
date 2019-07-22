// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  GET_ACCESS_TOKEN: `https://oauth.vk.com/access_token?client_id=7057838&client_secret=`,
  GET_ACCESS_TOKEN_CLIENT_SECRET: `DhHwSlUUMc5x02bmSTi1&redirect_uri=http://localhost:4200/profile/&code=`,
  GET_USER_ID: 'https://api.vk.com/method/users.get?user_ids=',
  GET_USER_FIELDS_TOKEN: '&fields=online,photo_max&access_token=',
  VERSION: '&v=5.101',
  GET_FRIENDS_ID: 'https://api.vk.com/method/friends.get?user_ids=',
  GET_FRIENDS_ORDER_FIELDS_TOKEN: '&order=hints&count=&fields=nickname,photo_50&access_token=',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
