/** 
* An array of routes that are accessable to the public
* @type {string[]}
*/

export const publicRoutes = [
    "/"
]

/** 
* this routes are used for authentication purposes
*THese routes will redirect logged in users to /settings
* @type {string[]}
*/

export const authRoutes = [
    "/auth/login",
    "/auth/register",
]

/** 
* this are api authentication routes
* Routes that start with this prefix are used for API authentication purposes
* @type {string}
*/
export const apiAuthPrefix = "/api/auth";


/** 
* the default redirect path after logging in 
* @type {string}
*/
export const DEFAULT_LOGIN_REDIRECT = "/settings";