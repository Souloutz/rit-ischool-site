import z from "zod";

/**
 * RIT School of Information Site API Reference
 * 
 * https://ischool.gccis.rit.edu/api/
 */

// https://ischool.gccis.rit.edu/api/about/
export const AboutSchema = z.object({
  title: z.string(),
  description: z.string(),
  quote: z.string(),
  quoteAuthor: z.string()
});


export type About = z.infer<typeof AboutSchema>;

// https://ischool.gccis.rit.edu/api/degrees/
export const UndergraduateSchema = z.object({
  degreeName: z.string(),
  title: z.string(),
  description: z.string(),
  concentrations: z.array(z.string())
});

export type Undergraduate = z.infer<typeof UndergraduateSchema>;

export const GraduateSchema = z.object({
  degreeName: z.string(),
  title: z.string().optional(),
  description: z.string().optional(),
  concentrations: z.array(z.string()).optional(),
  availableCertificates: z.array(z.string()).optional()
});

export type Graduate = z.infer<typeof GraduateSchema>;

export const DegreesSchema = z.object({
  undergraduate: z.array(UndergraduateSchema),
  graduate: z.array(GraduateSchema)
});

export type Degrees = z.infer<typeof DegreesSchema>;


// https://ischool.gccis.rit.edu/api/minors/
export const UndergraduateMinorSchema = z.object({
  name: z.string(),
  title: z.string(),
  description: z.string(),
  courses: z.array(z.string()),
  note: z.string()
});

export type UndergraduateMinor = z.infer<typeof UndergraduateMinorSchema>;

export const MinorsSchema = z.object({
  UgMinors: z.array(UndergraduateMinorSchema)
});

export type Minors = z.infer<typeof MinorsSchema>;

// https://ischool.gccis.rit.edu/api/employment/
const ContentSchema = z.object({
  title: z.string(),
  description: z.string()
});

const IntroductionSchema = z.object({
  title: z.string(),
  content: z.array(ContentSchema)
});

const StatisticSchema = z.object({
  value: z.string(),
  description: z.string()
});

const DegreeStatisticsSchema = z.object({
  title: z.string(),
  statistics: z.array(StatisticSchema)
});

const EmployersSchema = z.object({
  title: z.string(),
  employerNames: z.array(z.string())
});

const CareerSchema = z.object({
  title: z.string(),
  careerNames: z.array(z.string())
});

const CoopInformationSchema = z.object({
  employer: z.string(),
  degree: z.string(),
  city: z.string(),
  term: z.string()
});

const CoopTableSchema = z.object({
  title: z.string(),
  coopInformation: z.array(CoopInformationSchema)
});

const ProfessionalEmploymentInformationSchema = z.object({
  employer: z.string(),
  degree: z.string(),
  city: z.string(),
  title: z.string(),
  startDate: z.string()
});

const EmploymentTableSchema = z.object({
  title: z.string(),
  professionalEmploymentInformation: z.array(ProfessionalEmploymentInformationSchema)
});

export const EmploymentSchema = z.object({
  introduction: IntroductionSchema,
  degreeStatistics: DegreeStatisticsSchema,
  employers: EmployersSchema,
  careers: CareerSchema,
  coopTable: CoopTableSchema,
  employmentTable: EmploymentTableSchema
});

export type Employment = z.infer<typeof EmploymentSchema>;

// https://ischool.gccis.rit.edu/api/people/
const FacultySchema = z.object({
  username: z.string(),
  name: z.string(),
  tagline: z.string(),
  imagePath: z.string(),
  title: z.string(),
  interestArea: z.string(),
  office: z.string().optional(),
  website: z.string(),
  phone: z.string().optional(),
  email: z.string(),
  twitter: z.string().optional(),
  facebook: z.string().optional()
});

const StaffSchema = z.object({
  username: z.string(),
  name: z.string(),
  tagline: z.string(),
  imagePath: z.string(),
  title: z.string(),
  interestArea: z.string(),
  office: z.string().optional(),
  website: z.string(),
  phone: z.string().optional(),
  email: z.string(),
  twitter: z.string().optional(),
  facebook: z.string().optional()
});

export const PeopleSchema = z.object({
  title: z.string(),
  subTitle: z.string(),
  faculty: z.array(FacultySchema),
  staff: z.array(StaffSchema)
});

export type People = z.infer<typeof PeopleSchema>;

// https://ischool.gccis.rit.edu/api/course/
export const CourseSchema = z.object({
  courseID: z.string(),
  title: z.string(),
  description: z.string()
});

export type Course = z.infer<typeof CourseSchema>;
