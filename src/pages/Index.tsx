
import { useState } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import Searchbar from "@/components/Searchbar";
import Filters from "@/components/Filters";
import DoctorCard from "@/components/DoctorCard";

const mockDoctors = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialties: ["Cardiology", "Internal Medicine"],
    experience: 12,
    consultationFee: 150,
    imageUrl: "https://i.pravatar.cc/300?img=1",
    videoConsult: true,
    inClinic: true,
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    specialties: ["Neurology"],
    experience: 8,
    consultationFee: 130,
    imageUrl: "https://i.pravatar.cc/300?img=2",
    videoConsult: false,
    inClinic: true,
  },
  {
    id: 3,
    name: "Dr. Emily Martinez",
    specialties: ["Pediatrics", "Allergy"],
    experience: 15,
    consultationFee: 140,
    imageUrl: "https://i.pravatar.cc/300?img=3",
    videoConsult: true,
    inClinic: false,
  },
];

const Index = () => {
  const [consultationMode, setConsultationMode] = useState("all");

  const filteredDoctors = mockDoctors.filter((doctor) => {
    if (consultationMode === "all") return true;
    if (consultationMode === "video") return doctor.videoConsult;
    if (consultationMode === "clinic") return doctor.inClinic;
    return true;
  });

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r border-gray-200 p-4 hidden md:block">
          <Filters onConsultationModeChange={setConsultationMode} />
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {/* Search Bar */}
          <div className="mb-8 flex justify-center">
            <Searchbar />
          </div>

          {/* Doctor Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDoctors.map((doctor) => (
              <DoctorCard key={doctor.id} {...doctor} />
            ))}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Index;
