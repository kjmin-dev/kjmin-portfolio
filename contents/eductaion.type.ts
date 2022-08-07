export interface EducationListItem {
  name: string;
  duration: string;
  degree: string;
  major: string;
  description?: string;
  keywords: Array<string>;
}
export type EducationList = Array<EducationListItem>;
export interface EdutationContent {
  educations: EducationList;
}
