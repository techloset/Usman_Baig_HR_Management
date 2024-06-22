export type PROFILE_TABLE_HEADINGS = {
  heading: string;
};
export type PROFILE_TABLE_DATA = {
  [key: string]: string;
};
export type GLOBAL_PROFILE_TABLE_PROPS = {
  tableHeadings: PROFILE_TABLE_HEADINGS[];
  tableData: PROFILE_TABLE_DATA[];
};
