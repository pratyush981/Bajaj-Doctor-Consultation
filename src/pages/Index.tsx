import { useState, useMemo } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import Searchbar from "@/components/Searchbar";
import Filters from "@/components/Filters";
import DoctorCard from "@/components/DoctorCard";
import type { ConsultationType, Doctor, SortType } from "@/types/doctor";

const mockDoctors = [
  // ... keep existing mockDoctors data
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

    if (searchTerm) {
      filtered = filtered.filter(doctor =>
        doctor.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (consultationType !== "all") {
      filtered = filtered.filter(doctor =>
        consultationType === "video" ? doctor.videoConsult : doctor.inClinic
      );
    }

    if (selectedSpecialties.length > 0) {
      filtered = filtered.filter(doctor =>
        doctor.specialties.some(specialty => selectedSpecialties.includes(specialty))
      );
    }

    if (sortBy) {
      filtered.sort((a, b) => {
        if (sortBy === "fees") {
          return a.consultationFee - b.consultationFee;
        }
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
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredDoctors.map((doctor) => (
                <DoctorCard key={doctor.id} {...doctor} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Index;
