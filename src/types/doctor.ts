
export interface Clinic {
  name: string;
  address: string;
}

export interface Doctor {
  id: string;
  name: string;
  specialties: string[];
  experience: number;
  consultationFee: number;
  imageUrl: string;
  videoConsult: boolean;
  inClinic: boolean;
  clinic: Clinic;
}

export type ConsultationType = 'all' | 'video' | 'clinic';
export type SortType = 'fees' | 'experience';
