export interface IExperience {
  title: string;
  image: string;
  _id: string;
}

export interface IProject {
  title: string;
  image: string;
  _id: string;
  startDate: string;
  endDate: string;
  slug: any;
  _createdAt: string;
  role: string;
}

export interface IReferenceMessage {
  name: string;
  email: string;
  message: string;
}

export interface IHomeData {
  experience: IExperience[];
  projects: IProject[];
  references: IReferenceMessage[];
}

// API Types
/**
 *
 * /api/hello
 * types
 *
 */

export interface IApiHello {
  experience: IExperience[];
  projects: IProject[];
}
