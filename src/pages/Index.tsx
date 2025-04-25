
import { useState } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import Searchbar from "@/components/Searchbar";
import Filters from "@/components/Filters";
import DoctorCard from "@/components/DoctorCard";

const mockDoctors = [
  {
    id: "110857",
    name: "Dr. Khushi Patel",
    specialties: ["Dentist"],
    experience: 31,
    consultationFee: 300,
    imageUrl: "https://doctorlistingingestionpr.azureedge.net/53155314380258887_be1d0c2675a411ef98f1b60948eee953_ProfilePic_Khushi%20Patel%20PIC.jpg",
    videoConsult: true,
    inClinic: false,
    clinic: {
      name: "Dr Khushi's Dental Planet",
      address: "Flat no 4,1st floor, Krishna house,diamond bakery, Wanowrie, Pune"
    }
  },
  {
    id: "111418",
    name: "Dr. Kshitija Jagdale",
    specialties: ["Dentist"],
    experience: 13,
    consultationFee: 500,
    imageUrl: "https://doctorlistingingestionpr.azureedge.net/539482078762581145_5a00f31266ed11efbae40ada1afa5198_ProfilePic_crop%20pic.jpg",
    videoConsult: true,
    inClinic: true,
    clinic: {
      name: "The Dent Inn Advanced Dental Clinic",
      address: "Office No. 6, Parmar Corner 1st Floor, Wanowrie, Pune"
    }
  },
  {
    id: "131682",
    name: "Dr. Chhaya Vora",
    specialties: ["Gynaecologist and Obstetrician"],
    experience: 39,
    consultationFee: 400,
    imageUrl: "https://doctorlistingingestionpr.azureedge.net/86682006799921180_c2227daee53711eea656ba7c2485ed7e_ProfilePic_IMG-20220927-WA0006.jpg",
    videoConsult: false,
    inClinic: true,
    clinic: {
      name: "Dr. Chaya Vora",
      address: "Silver plaza aprt opp,Vitthal Rao Shivarkar Road, Fatima Nagar, Hadapsar, Pune"
    }
  },
  {
    id: "68593",
    name: "Dr. Murtuza Agashiwala",
    specialties: ["Dentist"],
    experience: 19,
    consultationFee: 250,
    imageUrl: "https://doctorlistingingestionpr.azureedge.net/372117306642682922_abb27766e52f11ee9680ba7c2485ed7e_ProfilePic_IMG-20211013-WA0001.jpg",
    videoConsult: false,
    inClinic: true,
    clinic: {
      name: "Dr Murtaza M. Agashiwala's Clinic",
      address: "office no.212, C wing, Wanowrie, Pune"
    }
  }
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
