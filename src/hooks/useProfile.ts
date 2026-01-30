import { useState, useEffect } from 'react';
import { profilesApi, type ApiProfile } from '@/lib/api';
import { useAuth } from '@/contexts/AuthContext';

export interface Profile {
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

function toProfile(api: ApiProfile): Profile {
  return {
    id: api.id,
    user_id: api.user_id,
    company_name: api.company_name ?? null,
    contact_name: api.contact_name ?? null,
    phone: api.phone ?? null,
    address: api.address ?? null,
    vehicle_count: api.vehicle_count ?? null,
    created_at: api.created_at,
    updated_at: api.updated_at,
  };
}

export const useProfile = () => {
  const { user } = useAuth();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProfile = async () => {
    if (!user) {
      setProfile(null);
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      const { data, error: err } = await profilesApi.getMe();
      if (err) throw new Error(err);
      setProfile(data ? toProfile(data) : null);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Failed to load profile');
    } finally {
      setLoading(false);
    }
  };

  const updateProfile = async (
    updates: Partial<
      Omit<Profile, 'id' | 'user_id' | 'created_at' | 'updated_at'>
    >
  ): Promise<{ error: string | null }> => {
    if (!user) return { error: 'Not authenticated' };

    try {
      const { error: err } = await profilesApi.updateMe(updates);
      if (err) return { error: err };
      await fetchProfile();
      return { error: null };
    } catch (err: unknown) {
      return {
        error: err instanceof Error ? err.message : 'Failed to update profile',
      };
    }
  };

  useEffect(() => {
    fetchProfile();
  }, [user]);

  return { profile, loading, error, updateProfile, refetch: fetchProfile };
};
