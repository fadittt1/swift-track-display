import React, { createContext, useContext, useEffect, useState } from 'react';
import { authApi, type ApiUser } from '@/lib/api';

export interface User {
  id: string;
  email: string;
}

export interface Session {
  user: User;
}

interface AuthContextType {
  user: User | null;
  session: Session | null;
  loading: boolean;
  signUp: (email: string, password: string) => Promise<{ error: Error | null }>;
  signIn: (email: string, password: string) => Promise<{ error: Error | null }>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

function toUser(api: ApiUser): User {
  return { id: api.id, email: api.email };
}

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    authApi.me().then(({ user: me }) => {
      if (me) {
        const u = toUser(me);
        setUser(u);
        setSession({ user: u });
      } else {
        setUser(null);
        setSession(null);
      }
      setLoading(false);
    });
  }, []);

  const signUp = async (email: string, password: string) => {
    const result = await authApi.register(email, password);
    if (!result.error && authApi.getToken()) {
      const { user: me } = await authApi.me();
      if (me) {
        const u = toUser(me);
        setUser(u);
        setSession({ user: u });
      }
    }
    return result;
  };

  const signIn = async (email: string, password: string) => {
    const result = await authApi.login(email, password);
    if (!result.error) {
      const { user: me } = await authApi.me();
      if (me) {
        const u = toUser(me);
        setUser(u);
        setSession({ user: u });
      }
    }
    return result;
  };

  const signOut = async () => {
    authApi.logout();
    setUser(null);
    setSession(null);
  };

  const value: AuthContextType = {
    user,
    session,
    loading,
    signUp,
    signIn,
    signOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
