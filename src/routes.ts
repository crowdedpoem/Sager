/**
 * An array of routes accessible to the public.
 * These routes do not require authentication 
 * @type {String[]}
 */
export const publicRoutes = [
    "/dashboard"
]

/**
 * An array of routes used for authentication
 * These routes will redirect users logged in users 
 * @type {String[]}
 */
export const authRoutes = [
    "auth/login",
    "auth/register"
]

/**
 * The prefix for API authentication routes
 * Routes that start with this prefix are used for API 
 * authentication purposes 
 * @type {String}
 */
export const apiAuthPrefix = "api/auth"

/**
 * Default redirect path after logging in 
 * @type {String}
 */
export const DEFAULT_LOGIN_REDIRECT = "/dashboard"