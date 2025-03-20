// src/utils/auth.ts
export const isLoggedIn = (): boolean => {
  return !!localStorage.getItem("token"); // Returns true if a token exists
};
