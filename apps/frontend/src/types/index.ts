// Tipos TypeScript para el frontend basados en el modelo Despertares
// Estos tipos se sincronizan con el backend pero no acceden directamente a la DB

export enum UserRole {
  ADMIN = 'ADMIN',
  COORDINATOR = 'COORDINATOR',
  PROFESSIONAL = 'PROFESSIONAL',
  ASSISTANT = 'ASSISTANT'
}

export interface User {
  id: number;
  email: string;
  role: UserRole;
  active: boolean;
  createdAt: string;
  updatedAt: string;
  professional?: Professional;
}

export interface Professional {
  id: number;
  name: string;
  email?: string;
  active: boolean;
  userId?: number;
  createdAt: string;
  updatedAt: string;
  user?: User;
  professionalAvailabilities?: ProfessionalAvailability[];
  professionalSpecialties?: ProfessionalSpecialty[];
  reports?: Report[];
  patientTherapies?: PatientTherapy[];
  dailyRecords?: DailyRecord[];
}

export interface Therapy {
  id: number;
  name: string;
  professionalAvailabilities?: ProfessionalAvailability[];
  professionalSpecialties?: ProfessionalSpecialty[];
  patientTherapies?: PatientTherapy[];
  authorizationsOS?: AuthorizationOS[];
}

export interface ProfessionalAvailability {
  id: number;
  professionalId: number;
  therapyId: number;
  time: string;
  dayOfWeek: string;
  professional?: Professional;
  therapy?: Therapy;
}

export interface ProfessionalSpecialty {
  professionalId: number;
  therapyId: number;
  professional?: Professional;
  therapy?: Therapy;
}

export interface Patient {
  id: number;
  firstName: string;
  lastName: string;
  birthDate?: string;
  schoolShift?: string;
  healthInsurance?: string;
  notes?: string;
  createdAt: string;
  updatedAt: string;
  reports?: Report[];
  patientTherapies?: PatientTherapy[];
  authorizationsOS?: AuthorizationOS[];
  dailyRecords?: DailyRecord[];
  patientScheduleOS?: PatientScheduleOS[];
  patientScheduleReal?: PatientScheduleReal[];
}

export interface PatientTherapy {
  id: number;
  patientId: number;
  therapyId: number;
  professionalId: number;
  startDate: string;
  endDate: string;
  patient?: Patient;
  therapy?: Therapy;
  professional?: Professional;
  authorizationsOS?: AuthorizationOS[];
  dailyRecords?: DailyRecord[];
  patientScheduleOS?: PatientScheduleOS[];
  patientScheduleReal?: PatientScheduleReal[];
}

export interface Report {
  id: number;
  periodFrom: string;
  periodTo: string;
  content: string;
  professionalId: number;
  patientId: number;
  professional?: Professional;
  patient?: Patient;
}

export interface DailyRecord {
  id: number;
  date: string;
  notes?: string;
  attendance: boolean;
  patientTherapyId: number;
  professionalId: number;
  patientId: number;
  patientTherapy?: PatientTherapy;
  professional?: Professional;
  patient?: Patient;
}

export interface AuthorizationOS {
  id: number;
  patientTherapyId: number;
  totalSessions: number;
  validFrom: string;
  validTo: string;
  consumedSessions: number;
  patientId: number;
  patientTherapy?: PatientTherapy;
  patient?: Patient;
}

export interface PatientScheduleOS {
  id: number;
  time: string;
  patientTherapyId: number;
  patientId: number;
  dayOfWeek: string;
  patientTherapy?: PatientTherapy;
  patient?: Patient;
}

export interface PatientScheduleReal {
  id: number;
  time: string;
  patientTherapyId: number;
  patientId: number;
  dayOfWeek: string;
  patientTherapy?: PatientTherapy;
  patient?: Patient;
}

// Tipos para la API
export interface ApiResponse<T> {
  data: T;
  total?: number;
  message?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  perPage: number;
}

// Tipos para autenticación
export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  user: User;
  access_token: string;
}

// Tipos para creación de entidades
export interface CreatePatientRequest {
  firstName: string;
  lastName: string;
  birthDate?: string;
  schoolShift?: string;
  healthInsurance?: string;
  notes?: string;
}

export interface CreateProfessionalRequest {
  name: string;
  email?: string;
  active?: boolean;
}

export interface CreateTherapyRequest {
  name: string;
}

export interface CreateUserRequest {
  email: string;
  password: string;
  role?: UserRole;
  active?: boolean;
}

export interface CreatePatientTherapyRequest {
  patientId: number;
  therapyId: number;
  professionalId: number;
  startDate: string;
  endDate: string;
}

export interface CreateDailyRecordRequest {
  date: string;
  notes?: string;
  attendance?: boolean;
  patientTherapyId: number;
  professionalId: number;
  patientId: number;
}

export interface CreateAuthorizationOSRequest {
  patientTherapyId: number;
  totalSessions: number;
  validFrom: string;
  validTo: string;
  consumedSessions?: number;
  patientId: number;
}