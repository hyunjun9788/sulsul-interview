export declare module 'next-auth' {
  // interface User {
  //   accessToken: string;
  // }
  interface Session {
    // user: {
    //   name: number;
    //   sub: string;
    //   type: string;
    //   token: string;
    //   id: string;
    //   iat: number;
    //   exp: number;
    //   jti: string;
    // };
    accessToken: string;
    refreshToken: string;
  }
}
