import React, { createContext, useContext, useState, useEffect } from "react";

interface User {
  id: string;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
}

interface UserContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  logout: () => void;
}

const UserContext = createContext<UserContextType>({
  user: null,
  setUser: () => {},
  logout: () => {},
});

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const [lastActivity, setLastActivity] = useState<number>(Date.now());

  // Save user data to localStorage whenever it changes
  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  // Check session timeout every minute
  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = Date.now();
      const inactiveDuration = currentTime - lastActivity;

      // Logout if inactive for 5 minutes (300,000 milliseconds)
      if (inactiveDuration > 300000) {
        logout();
      }
    }, 60000); // Check every minute

    return () => clearInterval(interval);
  }, [lastActivity]);

  // Update last activity time on user interaction
  useEffect(() => {
    const updateActivity = () => setLastActivity(Date.now());

    window.addEventListener("mousedown", updateActivity);
    window.addEventListener("keydown", updateActivity);

    return () => {
      window.removeEventListener("mousedown", updateActivity);
      window.removeEventListener("keydown", updateActivity);
    };
  }, []);

  const logout = () => {
    setUser(null); // Clear user data
    localStorage.removeItem("token"); // Remove the token
    localStorage.removeItem("user"); // Remove the user data
    window.location.href = "/login"; // Redirect to login page
  };

  return (
    <UserContext.Provider value={{ user, setUser, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
