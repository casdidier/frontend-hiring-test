import { useState } from 'react';

export default function useToken() {
    const getToken = () => {
        const tokenString : string = sessionStorage.getItem('token') as string;
        const userToken = JSON.parse(tokenString);
        return userToken?.token
      };

      const [token, setToken] = useState(getToken());

      const saveToken = (userToken: string) => {

        sessionStorage.setItem('token', JSON.stringify(userToken));
        setToken(userToken);
      };

      return {
        setToken: saveToken,
        token
      }

}