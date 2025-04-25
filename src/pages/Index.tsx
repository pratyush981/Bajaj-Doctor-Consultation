
import { useState, useMemo } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import Searchbar from "@/components/Searchbar";
import Filters from "@/components/Filters";
import DoctorCard from "@/components/DoctorCard";
import { useDoctors } from "@/hooks/useDoctors";
import type { ConsultationType, SortType } from "@/types/doctor";
import { Skeleton } from "@/components/ui/skeleton";

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [consultationType, setConsultationType] = useState<ConsultationType>("all");
  const [selectedSpecialties, setSelectedSpecialties] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<SortType | null>(null);

  const { data: doctors = [], isLoading, error } = useDoctors();

  const specialties = useMemo(() => {
    const allSpecialties = new Set(doctors?.flatMap(doctor => doctor.specialties));
    return Array.from(allSpecialties).sort();
  }, [doctors]);

  const filteredDoctors = useMemo(() => {
    if (!doctors) return [];
    
    let filtered = [...doctors];

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
  }, [doctors, searchTerm, consultationType, selectedSpecialties, sortBy]);

  const handleSpecialtyToggle = (specialty: string) => {
    setSelectedSpecialties(prev =>
      prev.includes(specialty)
        ? prev.filter(s => s !== specialty)
        : [...prev, specialty]
    );
  };

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-red-500">Error loading doctors. Please try again later.</p>
      </div>
    );
  }

  return (
    <SidebarProvider>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-6">Find a Doctor</h1>
          <Searchbar doctors={doctors} onSearch={setSearchTerm} />
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
              {isLoading ? (
                Array(6).fill(0).map((_, index) => (
                  <div key={index} className="space-y-4">
                    <Skeleton className="h-48 w-full" />
                    <Skeleton className="h-4 w-3/4" />
                    <Skeleton className="h-4 w-1/2" />
                    <Skeleton className="h-4 w-2/3" />
                  </div>
                ))
              ) : filteredDoctors.length > 0 ? (
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
