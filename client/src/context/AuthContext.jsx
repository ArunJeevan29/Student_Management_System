import { createContext, useContext, useEffect, useState } from "react";
import { checkLogin, getCurrentUser } from "../api/authApi";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  async function fetchCurrentUser() {
    try {
      const response = await getCurrentUser();
      setUser(response.data);
    } catch (error) {
      console.log(error);
      setUser(null);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      fetchCurrentUser();
    } else {
      setLoading(false);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
