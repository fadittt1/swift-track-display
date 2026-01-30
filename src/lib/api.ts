/**
 * API client for Express backend (replaces Supabase for auth + profiles).
 */

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';
const TOKEN_KEY = 'swift_track_token';

function getToken(): string | null {
  return localStorage.getItem(TOKEN_KEY);
}

function setToken(token: string): void {
  localStorage.setItem(TOKEN_KEY, token);
}

function clearToken(): void {
  localStorage.removeItem(TOKEN_KEY);
}

async function request<T>(
  path: string,
  options: RequestInit & { token?: string | null } = {}
): Promise<{ data?: T; error?: string; status: number }> {
  const { token = getToken(), ...fetchOptions } = options;
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    ...(fetchOptions.headers as Record<string, string>),
  };
  if (token) {
    (headers as Record<string, string>)['Authorization'] = `Bearer ${token}`;
  }
  const res = await fetch(`${API_URL}${path}`, { ...fetchOptions, headers });
  let body: any = null;
  const text = await res.text();
  if (text) {
    try {
      body = JSON.parse(text);
    } catch {
      body = { error: text || res.statusText };
    }
  }
  if (!res.ok) {
    return {
      error: body?.error || res.statusText || 'Request failed',
      status: res.status,
    };
  }
  return { data: body as T, status: res.status };
}

// --- Auth ---

export interface ApiUser {
  id: string;
  email: string;
}

export const authApi = {
  async register(email: string, password: string): Promise<{ error: Error | null }> {
    const result = await request<{ user: ApiUser; token: string }>('/auth/register', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      token: null,
    });
    if (result.error) {
      return { error: new Error(result.error) };
    }
    if (result.data?.token) {
      setToken(result.data.token);
    }
    return { error: null };
  },

  async login(email: string, password: string): Promise<{ error: Error | null }> {
    const result = await request<{ user: ApiUser; token: string }>('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      token: null,
    });
    if (result.error) {
      return { error: new Error(result.error) };
    }
    if (result.data?.token) {
      setToken(result.data.token);
    }
    return { error: null };
  },

  async me(): Promise<{ user: ApiUser | null }> {
    const result = await request<{ user: ApiUser }>('/auth/me');
    if (result.error || !result.data?.user) {
      clearToken();
      return { user: null };
    }
    return { user: result.data.user };
  },

  logout(): void {
    clearToken();
  },

  getToken,
};

// --- Profile ---

export interface ApiProfile {
  id: string;
  user_id: string;
  company_name: string | null;
  contact_name: string | null;
  phone: string | null;
  address: string | null;
  vehicle_count: number | null;
  created_at: string;
  updated_at: string;
}

export const profilesApi = {
  async getMe(): Promise<{ data: ApiProfile | null; error: string | null }> {
    const result = await request<ApiProfile>('/profiles/me');
    if (result.error) {
      return { data: null, error: result.error };
    }
    return { data: result.data ?? null, error: null };
  },

  async updateMe(
    updates: Partial<
      Pick<ApiProfile, 'company_name' | 'contact_name' | 'phone' | 'address' | 'vehicle_count'>
    >
  ): Promise<{ error: string | null }> {
    const result = await request<ApiProfile>('/profiles/me', {
      method: 'PATCH',
      body: JSON.stringify(updates),
    });
    if (result.error) {
      return { error: result.error };
    }
    return { error: null };
  },
};
