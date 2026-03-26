/**
 * RIT School of Information Site API Reference
 * 
 * https://ischool.gccis.rit.edu/api/
 */

// https://ischool.gccis.rit.edu/api/about/
export interface About {
  title: string;
  description: string;
  quote: string;
  quoteAuthor: string;
}

// https://ischool.gccis.rit.edu/api/degrees/
export interface Degrees {
  undergraduate: Undergraduate[];
  graduate: Graduate[];
}

export interface Undergraduate {
  degreeName: string;
  title: string;
  description: string;
  concentrations: string[];
}

export interface Graduate {
  degreeName: string;
  title?: string;
  description?: string;
  concentrations?: string[];
  availableCertificates?: string[];
}

// https://ischool.gccis.rit.edu/api/minors/
export interface Minors {
  UgMinors: UgMinor[]
}

export interface UgMinor {
  name: string
  title: string
  description: string
  courses: string[]
  note: string
}

// https://ischool.gccis.rit.edu/api/employment/
export interface Employment {
  introduction: Introduction
  degreeStatistics: DegreeStatistics
  employers: Employers
  careers: Careers
  coopTable: CoopTable
  employmentTable: EmploymentTable
}

export interface Introduction {
  title: string
  content: Content[]
}

export interface Content {
  title: string
  description: string
}

export interface DegreeStatistics {
  title: string
  statistics: Statistic[]
}

export interface Statistic {
  value: string
  description: string
}

export interface Employers {
  title: string
  employerNames: string[]
}

export interface Careers {
  title: string
  careerNames: string[]
}

export interface CoopTable {
  title: string
  coopInformation: CoopInformation[]
}

export interface CoopInformation {
  employer: string
  degree: string
  city: string
  term: string
}

export interface EmploymentTable {
  title: string
  professionalEmploymentInformation: ProfessionalEmploymentInformation[]
}

export interface ProfessionalEmploymentInformation {
  employer: string
  degree: string
  city: string
  title: string
  startDate: string
}

// https://ischool.gccis.rit.edu/api/people/
export interface People {
  title: string
  subTitle: string
  faculty: Faculty[]
  staff: Staff[]
}

export interface Faculty {
  username: string
  name: string
  tagline: string
  imagePath: string
  title: string
  interestArea: string
  office?: string
  website: string
  phone?: string
  email: string
  twitter?: string
  facebook?: string
}

export interface Staff {
  username: string
  name: string
  tagline: string
  imagePath: string
  title: string
  interestArea: string
  office?: string
  website: string
  phone?: string
  email: string
  twitter?: string
  facebook: string
}

// https://ischool.gccis.rit.edu/api/course/
export interface Course {
  courseID: string
  title: string
  description: string
}
