
import { useQuery } from "@tanstack/react-query";
import { Doctor } from "@/types/doctor";

const transformApiData = (apiData: any[]): Doctor[] => {
  return apiData.map(doctor => ({
    id: doctor.id?.toString() || Math.random().toString(),
    name: doctor.name || "",
    nameInitials: doctor.name_initials || "",
    imageUrl: doctor.photo || "",
    specialties: [doctor.specialities__name].filter(Boolean),
    experience: parseInt(doctor.experience?.toString() || "0"),
    consultationFee: parseInt(doctor.fees?.replace(/[^\d]/g, "") || "0"),
    videoConsult: doctor.video_consult || false,
    inClinic: doctor.in_clinic || false,
    introduction: doctor.doctor_introduction || "",
    languages: [
      doctor.languages__001,
      doctor.languages__002,
      doctor.languages__003,
      doctor.languages__004,
      doctor.languages__005
    ].filter(Boolean),
    clinic: {
      name: doctor.clinic__name || "",
      locality: doctor.clinic__address__locality || "",
      city: doctor.clinic__address__city || "",
      address: doctor.clinic__address__address_line1 || ""
    }
  }));
};

export const useDoctors = () => {
  return useQuery({
    queryKey: ["doctors"],
    queryFn: async () => {
      const response = await fetch("https://srijandubey.github.io/campus-api-mock/SRM-C1-25.json");
      if (!response.ok) {
        throw new Error("Failed to fetch doctors");
      }
      const data = await response.json();
      return transformApiData(data);
    }
  });
};
