export interface IUserData {
  id?: number;
  name?: string;
  nickname?: string;
  email?: string;
  password?: string;
}

export interface INewsCrawling {
  id: number;
  title: string;
  contents: string;
  createTime: string;
  imgUrl: string;
  url: string;
}

export interface IContestCrawling {
  id: number;
  title: string;
  organization: string;
  state: string;
  todayState: string;
  url: string;
  imgUrl: string;
}

export interface IJobPostingCrawling {
  id: number;
  career: string;
  employTypeCode: number;
  lastModifyDate: number;
  infoSource: string;
  title: string;
  closeDate: string;
  basicAddress: string;
  prefCd: string | any;
  registrationDate: string | Date;
  wantedMobileInfoUrl: string;
  workType: string;
  maxSalary: number;
  wantedInfoUrl: string;
  salaryType: string;
  minEdu: string;
  minSalary: number;
  company: string;
  streetNameAddress: number;
  jobCode: string | null;
  authNum: string;
  region: string;
  salary: string;
}

export interface ICommunity {
  id: number;
  title: string | null;
  content: string | null;
  postCategory: string | null;
  writer?: string;
  view?: number;
  createdDate?: Date;
  modifiedDate?: Date;
  comments?: ICommunityComment[];
}

export interface IStudy {
  id: number;
  title: string;
  content: string;
  studyCategory: string;
  area: string;
  maxPeople: number;
  minPeople: number;
  startDate: string | Date;
  endDate: string | Date;
  status: string;
  writer: string;
  view: number;
  createdDate: string | Date;
  modifiedDate: string | Date;
  comments: string[];
  likes: number;
}

type ICommunityComment = {
  id?: number;
  comment?: string;
  createdDate?: Date;
  modifiedDate?: Date;
  nickname?: string;
  postsId?: number;
};
