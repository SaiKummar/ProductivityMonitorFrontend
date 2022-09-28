import { useState } from "react"

export default function useToken(tokenName) {
    function getTokenFromStorage() {
        const tokenString = sessionStorage.getItem(tokenName);
        const userToken = JSON.parse(tokenString);
        return userToken
    }
    const [token, setToken] = useState(getTokenFromStorage());

    const saveTokenToStorage = userToken => {
        if (userToken !== null) {
            sessionStorage.setItem(tokenName, JSON.stringify(userToken));
        } else {
            sessionStorage.removeItem(tokenName);
        }
        setToken(userToken);
    };

    return {
        setMToken: saveTokenToStorage,
        mtoken: token
    }
}