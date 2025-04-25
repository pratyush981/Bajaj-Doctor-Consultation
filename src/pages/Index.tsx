
import { useState, useMemo } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import Searchbar from "@/components/Searchbar";
import Filters from "@/components/Filters";
import DoctorCard from "@/components/DoctorCard";
import type { ConsultationType, Doctor, SortType } from "@/types/doctor";

const mockDoctors: Doctor[] = [
  {
    id: "111418",
    name: "Dr. Kshitija Jagdale",
    nameInitials: "KJ",
    imageUrl: "https://doctorlistingingestionpr.azureedge.net/539482078762581145_5a00f31266ed11efbae40ada1afa5198_ProfilePic_crop%20pic.jpg",
    specialties: ["Dentist"],
    experience: 13,
    consultationFee: 500,
    videoConsult: true,
    inClinic: true,
    introduction: "Dr. Kshitija Jagdale, BDS, has an Experience of 10 years, Graduated from Maharashtra University of Health Sciences, Nashik, currently practising in The Dent Inn Advanced Dental Clinic, Fatima Nagar, Pune",
    languages: ["English", "हिन्दी", "मराठी"],
    clinic: {
      name: "The Dent Inn Advanced Dental Clinic",
      locality: "Wanowrie",
      city: "Pune",
      address: "Office No. 6, Parmar Corner 1st Floor"
    }
  },
  {
    id: "131682",
    name: "Dr. Chhaya Vora",
    nameInitials: "CV",
    imageUrl: "https://doctorlistingingestionpr.azureedge.net/86682006799921180_c2227daee53711eea656ba7c2485ed7e_ProfilePic_IMG-20220927-WA0006.jpg",
    specialties: ["Gynaecologist and Obstetrician"],
    experience: 39,
    consultationFee: 400,
    videoConsult: false,
    inClinic: true,
    languages: ["English", "हिन्दी", "मराठी"],
    clinic: {
      name: "Dr. Chaya Vora",
      locality: "Hadapsar",
      city: "Pune",
      address: "Silver plaza aprt opp,Vitthal Rao Shivarkar Road, Fatima Nagar"
    }
  },
  {
    id: "68593",
    name: "Dr. Murtuza Agashiwala",
    nameInitials: "MA",
    imageUrl: "https://doctorlistingingestionpr.azureedge.net/372117306642682922_abb27766e52f11ee9680ba7c2485ed7e_ProfilePic_IMG-20211013-WA0001.jpg",
    specialties: ["Dentist"],
    experience: 19,
    consultationFee: 250,
    videoConsult: false,
    inClinic: true,
    languages: ["English", "हिन्दी", "मराठी"],
    clinic: {
      name: "Dr Murtaza M. Agashiwala's Clinic",
      locality: "Wanowrie",
      city: "Pune",
      address: "office no.212, C wing"
    }
  },
  {
    id: "110857",
    name: "Dr. Khushi Patel",
    nameInitials: "KP",
    imageUrl: "https://doctorlistingingestionpr.azureedge.net/53155314380258887_be1d0c2675a411ef98f1b60948eee953_ProfilePic_Khushi%20Patel%20PIC.jpg",
    specialties: ["Dentist"],
    experience: 31,
    consultationFee: 300,
    videoConsult: true,
    inClinic: false,
    introduction: "Dr. Khushi Patel, BDS, has an Experience of 27 years, Graduated from Bharati Vidyapeeth Dental College and Hospital, Pune, currenlty practising in Dr Khushis Dental Planet, Fatima Nagar, Pune",
    languages: ["English", "ગુજરાતી", "हिन्दी", "मराठी"],
    clinic: {
      name: "Dr Khushi's Dental Planet",
      locality: "Wanowrie",
      city: "Pune",
      address: "Flat no 4,1st floor, Krishna house,diamond bakery"
    }
  },
  {
    id: "101448",
    name: "Dr. Mrinal Parikh",
    nameInitials: "MP",
    imageUrl: "https://doctorlistingingestionpr.azureedge.net/44170435793258358_bb1c211050b011ef9196a6bb5f4610d0_ProfilePic_Dr%20Mrinal%20Pic.jpg",
    specialties: ["Homeopath"],
    experience: 8,
    consultationFee: 650,
    videoConsult: false,
    inClinic: true,
    introduction: "Dr. Mrinal Parikh-Wani, a practicing Homoeopathic Consultant in Pune has completed her Post Graduation in Homoeopathy In Practice Of Medicine. She has been a Gold Medalist in Graduation.",
    languages: ["English", "ગુજરાતી", "हिन्दी", "मराठी"],
    clinic: {
      name: "Mrinal Homeopathic Clinic",
      locality: "Wanowrie",
      city: "Pune",
      address: "Fatima Nagar"
    }
  },
  // Add more doctors from your data as needed
];

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [consultationType, setConsultationType] = useState<ConsultationType>("all");
  const [selectedSpecialties, setSelectedSpecialties] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<SortType | null>(null);

  const specialties = useMemo(() => {
    const allSpecialties = new Set(mockDoctors.flatMap(doctor => doctor.specialties));
    return Array.from(allSpecialties).sort();
  }, []);

  const filteredDoctors = useMemo(() => {
    let filtered = [...mockDoctors];

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(doctor =>
        doctor.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by consultation type
    if (consultationType !== "all") {
      filtered = filtered.filter(doctor =>
        consultationType === "video" ? doctor.videoConsult : doctor.inClinic
      );
    }

    // Filter by specialties
    if (selectedSpecialties.length > 0) {
      filtered = filtered.filter(doctor =>
        doctor.specialties.some(specialty => selectedSpecialties.includes(specialty))
      );
    }

    // Sort results
    if (sortBy) {
      filtered.sort((a, b) => {
        if (sortBy === "fees") {
          // Convert fee strings to numbers by removing non-numeric characters
          const feeA = typeof a.consultationFee === 'number' ? a.consultationFee : parseInt(String(a.consultationFee).replace(/[^\d]/g, ''));
          const feeB = typeof b.consultationFee === 'number' ? b.consultationFee : parseInt(String(b.consultationFee).replace(/[^\d]/g, ''));
          return feeA - feeB;
        }
        // Sort by experience (high to low)
        return b.experience - a.experience;
      });
    }

    return filtered;
  }, [mockDoctors, searchTerm, consultationType, selectedSpecialties, sortBy]);

  const handleSpecialtyToggle = (specialty: string) => {
    setSelectedSpecialties(prev =>
      prev.includes(specialty)
        ? prev.filter(s => s !== specialty)
        : [...prev, specialty]
    );
  };

  return (
    <SidebarProvider>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-6">Find a Doctor</h1>
          <Searchbar doctors={mockDoctors} onSearch={setSearchTerm} />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <Filters
              specialties={specialties}
              selectedSpecialties={selectedSpecialties}
              consultationType={consultationType}
              sortBy={sortBy}
              onConsultationTypeChange={setConsultationType}
              onSpecialtyChange={handleSpecialtyToggle}
              onSortChange={setSortBy}
            />
          </div>
          
          <div className="lg:col-span-3">
            <div className="mb-4 flex justify-between items-center">
              <p className="text-gray-600">
                {filteredDoctors.length} {filteredDoctors.length === 1 ? 'doctor' : 'doctors'} found
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredDoctors.length > 0 ? (
                filteredDoctors.map((doctor) => (
                  <DoctorCard key={doctor.id} {...doctor} />
                ))
              ) : (
                <div className="col-span-full text-center py-12">
                  <p className="text-lg text-gray-500">No doctors found matching your criteria</p>
                  <p className="text-sm text-gray-400 mt-2">Try adjusting your filters</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Index;
