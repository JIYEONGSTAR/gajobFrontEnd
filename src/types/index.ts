export interface IAuthData {
  id: number;
  name: string;
  nickname: string;
  email: string;
  password: string;
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
  registrationDate: "22-04-12";
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
