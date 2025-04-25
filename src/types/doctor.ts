
export interface Clinic {
  name: string;
  address: string;
  city?: string;
  locality?: string;
}

export interface Doctor {
  id: string;
  name: string;
  nameInitials?: string;
  specialties: string[];
  experience: number;
  consultationFee: number;
  imageUrl: string;
  videoConsult: boolean;
  inClinic: boolean;
  clinic: Clinic;
  languages?: string[];
  introduction?: string;
}

export type ConsultationType = 'all' | 'video' | 'clinic';
export type SortType = 'fees' | 'experience';
