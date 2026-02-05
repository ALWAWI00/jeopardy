
export interface LeaderboardEntry {
  id: string;
  name: string;
  score: number;
  rank: number;
  avatar: string;
}

export interface UserProfile {
  name: string;
  level: number;
  avatar: string;
  xp: number;
  university?: string;
  universityNumber?: string;
}

export enum AppView {
  LANDING = 'LANDING',
  AUTH = 'AUTH',
  HOME = 'HOME',
  LEADERBOARD = 'LEADERBOARD',
  IMAGE_EDITOR = 'IMAGE_EDITOR'
}
