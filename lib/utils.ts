import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import type { Member, MemberRole } from "@/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getImageUrl(url: string) {
  const driveFileMatch = url.match(
    /drive\.google\.com\/file\/d\/([^/]+)/i,
  );

  if (driveFileMatch) {
    return `https://drive.google.com/thumbnail?id=${driveFileMatch[1]}&sz=w1000`;
  }

  return url;
}

export function getMemberRole(member: Pick<Member, "role" | "tier">): MemberRole {
  if (member.role === "ketua") return "ketua";
  if (member.role === "anggota") return "anggota";
  return member.tier === 1 ? "mentor" : "anggota";
}
