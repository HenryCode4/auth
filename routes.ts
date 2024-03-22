/** 
* An array of routes that are accessable to the public
* @type {string[]}
*/

export const publicRoutes = [
    "/",
    "/auth/new-verification"
]

/** 
* this routes are used for authentication purposes
*THese routes will redirect logged in users to /dashboard
* @type {string[]}
*/

export const authRoutes = [
    "/auth/login",
    "/auth/register",
    "/auth/biometric-key",
    "/auth/error",
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
export const DEFAULT_LOGIN_REDIRECT = "/dashboard";