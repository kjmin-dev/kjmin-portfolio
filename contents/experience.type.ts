export interface ExperienceListItem {
  position: string;
  company: string;
  url?: string;
  description: string;
  experiences: Array<string>;
  keywords: Array<string>;
  startedAt: string;
  endedAt: string;
}
export type ExperienceList = Array<ExperienceListItem>;
export interface ExperienceContent {
  experiences: ExperienceList;
}
