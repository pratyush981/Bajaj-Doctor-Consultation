
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
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    specialties: ["Neurology"],
    experience: 8,
    consultationFee: 130,
    imageUrl: "https://i.pravatar.cc/300?img=2",
  },
  {
    id: 3,
    name: "Dr. Emily Martinez",
    specialties: ["Pediatrics", "Allergy"],
    experience: 15,
    consultationFee: 140,
    imageUrl: "https://i.pravatar.cc/300?img=3",
  },
  {
    id: 4,
    name: "Dr. David Wilson",
    specialties: ["Orthopedics"],
    experience: 20,
    consultationFee: 160,
    imageUrl: "https://i.pravatar.cc/300?img=4",
  },
  {
    id: 5,
    name: "Dr. Lisa Thompson",
    specialties: ["Dermatology"],
    experience: 10,
    consultationFee: 145,
    imageUrl: "https://i.pravatar.cc/300?img=5",
  },
  {
    id: 6,
    name: "Dr. James Anderson",
    specialties: ["Psychiatry", "Neurology"],
    experience: 14,
    consultationFee: 155,
    imageUrl: "https://i.pravatar.cc/300?img=6",
  },
];

const Index = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r border-gray-200 p-4 hidden md:block">
          <Filters />
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {/* Search Bar */}
          <div className="mb-8 flex justify-center">
            <Searchbar />
          </div>

          {/* Doctor Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockDoctors.map((doctor) => (
              <DoctorCard key={doctor.id} {...doctor} />
            ))}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Index;
