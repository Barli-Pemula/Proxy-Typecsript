import { Member } from '@/types';
import defaultMembers from '@/data/members.json';

export async function getMembers(): Promise<Member[]> {
  return defaultMembers as Member[];
}
