import { handleAuth, handleLogin, handleLogout } from '@auth0/nextjs-auth0';

export const GET = handleAuth({
    login: handleLogin({
        returnTo: "/", 
        // authorizationParams:{
        //     audience:"http://localhost:3010"
        // }
    }),
    logout: handleLogout({returnTo:"/"})
})