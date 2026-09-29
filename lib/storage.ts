import { Member } from '@/types';
import defaultMembers from '@/data/members.json';
import { supabase, isSupabaseConfigured } from './supabase';

const STORAGE_KEY = 'typescript_web_members_v1';

export async function getMembers(): Promise<Member[]> {
  if (typeof window === 'undefined') {
    return defaultMembers as Member[];
  }

  // If Supabase is connected, try to fetch from Supabase first
  if (isSupabaseConfigured && supabase) {
    try {
      const { data, error } = await supabase
        .from('members')
        .select('*')
        .order('tier', { ascending: true });

      if (!error && data && data.length > 0) {
        return data as Member[];
      }
    } catch (e) {
      console.warn('Supabase fetch failed, falling back to localStorage/JSON', e);
    }
  }

  // Fallback to localStorage
  try {
    const localData = localStorage.getItem(STORAGE_KEY);
    if (localData) {
      const parsed = JSON.parse(localData);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    }
  } catch (e) {
    console.error('Failed reading localStorage:', e);
  }

  // Default initial seed
  return defaultMembers as Member[];
}

export async function updateMember(updatedMember: Member): Promise<{ success: boolean; error?: string }> {
  try {
    const currentMembers = await getMembers();
    const updatedList = currentMembers.map((m) =>
      m.id === updatedMember.id ? updatedMember : m
    );

    // Save to LocalStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedList));
    }

    // Save to Supabase if configured
    if (isSupabaseConfigured && supabase) {
      const { error } = await supabase
        .from('members')
        .upsert(updatedMember, { onConflict: 'id' });

      if (error) {
        console.error('Supabase update error:', error);
        return { success: false, error: error.message };
      }
    }

    return { success: true };
  } catch (err: any) {
    return { success: false, error: err?.message || 'Gagal menyimpan perubahan' };
  }
}
