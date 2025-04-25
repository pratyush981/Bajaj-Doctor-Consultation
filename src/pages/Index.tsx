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
  },
  {
    id: "101448",
    name: "Dr. Mrinal Parikh",
    specialties: ["Homeopath"],
    experience: 8,
    consultationFee: 650,
    imageUrl: "https://doctorlistingingestionpr.azureedge.net/441...",
    videoConsult: false,
    inClinic: true,
    clinic: {
      name: "Mrinal Homeopathic Clinic",
      address: "Fatima Nagar"
    }
  },
  {
    id: "113690",
    name: "Dr. Munaf Inamdar",
    specialties: ["General Physician"],
    experience: 27,
    consultationFee: 600,
    imageUrl: "https://doctorlistingingestionpr.azureedge.net/593...",
    videoConsult: false,
    inClinic: true,
    clinic: {
      name: "Apex Multispeciality and Maternity Hospital",
      address: "S No. 15, Vitthal Rao Shivarka"
    }
  },
  {
    id: "84141",
    name: "Dr. Abdul Danish",
    specialties: ["General Physician"],
    experience: 9,
    consultationFee: 600,
    imageUrl: "https://doctorlistingingestionpr.azureedge.net/410...",
    videoConsult: false,
    inClinic: true,
    clinic: {
      name: "Inamdar Multispeciality Hospital",
      address: "S No. 15, Vitthal Rao Shivarkar Road,"
    }
  },
  {
    id: "101103",
    name: "Dr. Amruta Gotkhinde",
    specialties: ["Dentist"],
    experience: 13,
    consultationFee: 300,
    imageUrl: "https://doctorlistingingestionpr.azureedge.net/440...",
    videoConsult: true,
    inClinic: true,
    clinic: {
      name: "Ultra Care Dentist & Orthodontic Clinic,",
      address: "Parmar Plaza, Room No-6, C-wing, 1st Floor,fhatima..."
    }
  },
  {
    id: "25256",
    name: "Dr. Rohit Chakor",
    specialties: ["Orthopaedic"],
    experience: 15,
    consultationFee: 600,
    imageUrl: "https://doctorlistingingestionpr.azureedge.net/271...",
    videoConsult: false,
    inClinic: true,
    clinic: {
      name: "The Bone And Joint Clinic",
      address: "Sadalaxmi Complex B Wing 1st Floor"
    }
  },
  {
    id: "118565",
    name: "Dr. Jolly Sinha",
    specialties: ["Dentist"],
    experience: 15,
    consultationFee: 250,
    imageUrl: "https://doctorlistingingestionpr.azureedge.net/686...",
    videoConsult: false,
    inClinic: true,
    clinic: {
      name: "Cosmodental Clinic And Implant Centre",
      address: "Shop No. 01, Vishal Enclave, Vitthal Rao Shivarkar..."
    }
  },
  {
    id: "76153",
    name: "Dr. Shaahina Mansuri",
    specialties: ["Dentist"],
    experience: 7,
    consultationFee: 250,
    imageUrl: "https://doctorlistingingestionpr.azureedge.net/390...",
    videoConsult: false,
    inClinic: true,
    clinic: {
      name: "Crown Dental Clinic",
      address: "Shop no. 5, Premanand Park, Vitthal Rao"
    }
  },
  {
    id: "132264",
    name: "Dr. Suvarna Zirpe",
    specialties: ["Gynaecologist and Obstetrician"],
    experience: 16,
    consultationFee: 1000,
    imageUrl: "https://doctorlistingingestionpr.azureedge.net/873...",
    videoConsult: false,
    inClinic: true,
    clinic: {
      name: "Baby Sure Fertility Center",
      address: "Amar Manor, 32/2nd floor,"
    }
  },
  {
    id: "118985",
    name: "Dr. Sabina Shaikh",
    specialties: ["Dentist"],
    experience: 11,
    consultationFee: 300,
    imageUrl: "https://doctorlistingingestionpr.azureedge.net/698...",
    videoConsult: true,
    inClinic: true,
    clinic: {
      name: "Dr. Dumba's Dentistry",
      address: "A8 Firdous Society , First Floor, Near Sai Sagar H..."
    }
  },
  {
    id: "117128",
    name: "Dr. Fardin Adhikari",
    specialties: ["Dentist"],
    experience: 17,
    consultationFee: 500,
    imageUrl: "https://doctorlistingingestionpr.azureedge.net/652...",
    videoConsult: false,
    inClinic: true,
    clinic: {
      name: "Dr Adhikari's Pediatric Dentistry",
      address: "1st Floor, 101 A, Aastha Seagull"
    }
  },
  {
    id: "116935",
    name: "Dr. Naman Chandak",
    specialties: ["Dentist"],
    experience: 11,
    consultationFee: 300,
    imageUrl: "https://doctorlistingingestionpr.azureedge.net/648...",
    videoConsult: false,
    inClinic: true,
    clinic: {
      name: "Chandak's Oraface Dental & Maxillofacial Clinic",
      address: "First Floor, Balaji Chambers"
    }
  },
  {
    id: "7715",
    name: "Dr. Amit Patil",
    specialties: ["Dentist"],
    experience: 5,
    consultationFee: 200,
    imageUrl: "https://doctorlistingingestionpr.azureedge.net/111...",
    videoConsult: true,
    inClinic: true,
    clinic: {
      name: "Shivganga",
      address: "Balaji Chambers,"
    }
  },
  {
    id: "118277",
    name: "Dr. Rohini Shinde",
    specialties: ["Ayurveda"],
    experience: 8,
    consultationFee: 450,
    imageUrl: "https://doctorlistingingestionpr.azureedge.net/677...",
    videoConsult: true,
    inClinic: true,
    clinic: {
      name: "Madhavbaug Clinic",
      address: "Flat No 2, A Wing Twins Tower,"
    }
  },
  {
    id: "118586",
    name: "Dr. Suruchi Zurange",
    specialties: ["Dentist"],
    experience: 13,
    consultationFee: 300,
    imageUrl: "https://doctorlistingingestionpr.azureedge.net/686...",
    videoConsult: false,
    inClinic: true,
    clinic: {
      name: "Advanced Dental Clinic And Oral Surgical Center",
      address: "Flat No. 11, 3rd Floor, A Wing"
    }
  },
  {
    id: "1736427036479001",
    name: "Dt. Pratiksha Virkar",
    specialties: ["Dietitian/Nutritionist"],
    experience: 1,
    consultationFee: 500,
    imageUrl: "https://doctorlistingingestionpr.blob.core.windows...",
    videoConsult: true,
    inClinic: false,
    clinic: {
      name: "Nutriera By Pratiksha",
      address: "15, Bhagwan Tatyasaheb Kawade Road"
    }
  },
  {
    id: "8331",
    name: "Dr. Neelkanth Belvi",
    specialties: ["Gynaecologist and Obstetrician"],
    experience: 15,
    consultationFee: 600,
    imageUrl: "https://doctorlistingingestionpr.azureedge.net/111...",
    videoConsult: false,
    inClinic: true,
    clinic: {
      name: "Nandini Clinic",
      address: "Phase 1st Floor, 108 Parmar Park, 1, Opposite Jans..."
    }
  },
  {
    id: "111876",
    name: "Dr. Sourabh S Sable",
    specialties: ["Audiologist"],
    experience: 4,
    consultationFee: 500,
    imageUrl: "https://doctorlistingingestionpr.azureedge.net/547...",
    videoConsult: true,
    inClinic: true,
    clinic: {
      name: "Resonance Speech and Hearing Clinic",
      address: "Kumar primus building"
    }
  },
  {
    id: "1742568325708001",
    name: "Dr. Subhash Bajaj",
    specialties: ["General Physician"],
    experience: 11,
    consultationFee: 600,
    imageUrl: "https://doctorlistingingestionpr.blob.core.windows...",
    videoConsult: true,
    inClinic: true,
    clinic: {
      name: "Dr .Bajaj Wellness Clinic",
      address: "Shop no. 38 Sacred Heart Town"
    }
  },
  {
    id: "118711",
    name: "Dr. Chaitra Bakare",
    specialties: ["Dentist"],
    experience: 7,
    consultationFee: 200,
    imageUrl: "https://doctorlistingingestionpr.azureedge.net/690...",
    videoConsult: false,
    inClinic: true,
    clinic: {
      name: "Dentalcraftz! Multispeciality Dental Clinic",
      address: "Shop No 11, Anusaya Enclave, Jagtap Chowk"
    }
  },
  {
    id: "80034",
    name: "Dr. Rohit Todkar",
    specialties: ["Dentist"],
    experience: 14,
    consultationFee: 300,
    imageUrl: "https://doctorlistingingestionpr.azureedge.net/403...",
    videoConsult: false,
    inClinic: true,
    clinic: {
      name: "Dr. Todkar Dental Clinic",
      address: "Shop No. 27, Anusuya Enclave"
    }
  },
  {
    id: "126271",
    name: "Dr. Madhu Kothari",
    specialties: ["Homeopath"],
    experience: 34,
    consultationFee: 400,
    imageUrl: "https://doctorlistingingestionpr.azureedge.net/810...",
    videoConsult: false,
    inClinic: true,
    clinic: {
      name: "Kothari Clinic.",
      address: "Shop No 29 Anusaya Anclave"
    }
  },
  {
    id: "118361",
    name: "Dr. Aashutosh Madavi",
    specialties: ["Dentist"],
    experience: 11,
    consultationFee: 300,
    imageUrl: "https://doctorlistingingestionpr.azureedge.net/680...",
    videoConsult: true,
    inClinic: false,
    clinic: {
      name: "The Tooth Saga",
      address: "15, Vitthal Rao Shivarkar Road"
    }
  },
  {
    id: "82975",
    name: "Dr. Akhil Bharadwaj",
    specialties: ["Ophthalmologist"],
    experience: 21,
    consultationFee: 500,
    imageUrl: "https://doctorlistingingestionpr.azureedge.net/407...",
    videoConsult: false,
    inClinic: true,
    clinic: {
      name: "Akanksha Eye Clinic",
      address: "30"
    }
  },
  {
    id: "1729234378057001",
    name: "Dr. Jennifer Sydney",
    specialties: ["Dermatologist"],
    experience: 23,
    consultationFee: 600,
    imageUrl: null,
    videoConsult: true,
    inClinic: true,
    clinic: {
      name: "SkinElegance Dermatology Clinic",
      address: "Ga18, Vitthal Rao"
    }
  },
  {
    id: "17712",
    name: "Dr. Laxmikant Kaotekwar",
    specialties: ["Diabetologist"],
    experience: 21,
    consultationFee: 1000,
    imageUrl: "https://doctorlistingingestionpr.blob.core.windows...",
    videoConsult: true,
    inClinic: true,
    clinic: {
      name: "Meadowlark Healthcare",
      address: "Bhairobanala Road, Landmark : Beside Fatima Conven..."
    }
  },
  {
    id: "78762",
    name: "Dr. Shashikant Shukla",
    specialties: ["Dentist"],
    experience: 4,
    consultationFee: 200,
    imageUrl: "https://doctorlistingingestionpr.azureedge.net/399...",
    videoConsult: true,
    inClinic: false,
    clinic: {
      name: "Global Health Hub Dental Polyclinic",
      address: "Flat no.6 Teddy Apartment, Opp Gera Junction Above..."
    }
  },
  {
    id: "15622",
    name: "Dr. Mufaddal Zakir",
    specialties: ["General Physician"],
    experience: 27,
    consultationFee: 600,
    imageUrl: "https://doctorlistingingestionpr.azureedge.net/219...",
    videoConsult: false,
    inClinic: true,
    clinic: {
      name: "Sparsh Polyclinic..",
      address: "First Floor, Regency Arcade"
    }
  },
  {
    id: "133603",
    name: "Dr. Firoza Katrak",
    specialties: ["Homeopath"],
    experience: 15,
    consultationFee: 700,
    imageUrl: "https://doctorlistingingestionpr.azureedge.net/890...",
    videoConsult: true,
    inClinic: false,
    clinic: {
      name: "Sparsh Polyclinic",
      address: "Regency Arcade 1st Floor, Green Valley Socitety"
    }
  },
  {
    id: "109390",
    name: "Dr. Shivani Soman",
    specialties: ["Gynaecologist and Obstetrician"],
    experience: 34,
    consultationFee: 700,
    imageUrl: "https://doctorlistingingestionpr.azureedge.net/510...",
    videoConsult: false,
    inClinic: true,
    clinic: {
      name: "Sparsh Polyclinic",
      address: "Regency Arcade 1st Floor, Green Valley Socitety"
    }
  },
  {
    id: "17779",
    name: "Dr. Nina Kanvaljit",
    specialties: ["Dermatologist"],
    experience: 34,
    consultationFee: 600,
    imageUrl: "https://doctorlistingingestionpr.blob.core.windows...",
    videoConsult: true,
    inClinic: true,
    clinic: {
      name: "Sparsh Polyclinic",
      address: "Regency Arcade 1st Floor, Green Valley Socitety"
    }
  },
  {
    id: "1682401820143001",
    name: "Dr. Anuradha Birajdar",
    specialties: ["Ayurveda"],
    experience: 33,
    consultationFee: 200,
    imageUrl: "https://doctorlistingingestionpr.azureedge.net/911...",
    videoConsult: false,
    inClinic: true,
    clinic: {
      name: "Birajdar Nursing Home",
      address: "1st Floor, Citadel Complex"
    }
  },
  {
    id: "132638",
    name: "Dr. Swapneel Patil",
    specialties: ["Gynaecologist and Obstetrician"],
    experience: 12,
    consultationFee: 200,
    imageUrl: "https://doctorlistingingestionpr.azureedge.net/878...",
    videoConsult: false,
    inClinic: true,
    clinic: {
      name: "Birajdar Nursing Home",
      address: "1st Floor, Citadel Complex"
    }
  },
  {
    id: "1670072669309001",
    name: "Dr. Richa Muldiyar",
    specialties: ["Ophthalmologist"],
    experience: 6,
    consultationFee: 600,
    imageUrl: "https://doctorlistingingestionpr.azureedge.net/911...",
    videoConsult: false,
    inClinic: true,
    clinic: {
      name: "Richa Eye Care",
      address: "Sr No 69, Laxmi Arcade, Shop No 10,"
    }
  },
  {
    id: "1683012016588001",
    name: "Dr. Sunita Mandhare",
    specialties: ["Homeopath"],
    experience: 19,
    consultationFee: 800,
    imageUrl: "https://doctorlistingingestionpr.azureedge.net/911...",
    videoConsult: true,
    inClinic: true,
    clinic: {
      name: "Angel's Homoeopathic Clinic",
      address: "Shop No. 2"
    }
  },
  {
    id: "1716435544020001",
    name: "Dr. Ajinkya Gulave",
    specialties: ["General Physician"],
    experience: 9,
    consultationFee: 700,
    imageUrl: "https://doctorlistingingestionpr.azureedge.net/441...",
    videoConsult: false,
    inClinic: true,
    clinic: {
      name: "Ruby Hall Clinic",
      address: "59/6, azad nagar, wanowarie, pune-411040"
    }
  },
  {
    id: "15981",
    name: "Dr. Shivanand C Chikhale",
    specialties: ["Orthopaedic"],
    experience: 24,
    consultationFee: 500,
    imageUrl: "https://doctorlistingingestionpr.azureedge.net/223...",
    videoConsult: true,
    inClinic: false,
    clinic: {
      name: "Orthopedic Speciality Clinic",
      address: "Near Bharat Petroleum, B.T. Kawade Road,"
    }
  },
  {
    id: "132097",
    name: "Dr. Sucheta Talele",
    specialties: ["Gynaecologist and Obstetrician"],
    experience: 15,
    consultationFee: 500,
    imageUrl: "https://doctorlistingingestionpr.azureedge.net/872...",
    videoConsult: false,
    inClinic: true,
    clinic: {
      name: "Mother Care Polyclinic",
      address: "Tupe Cornor"
    }
  },
  {
    id: "111122",
    name: "Dr. Tanuja Shendkar",
    specialties: ["Dentist"],
    experience: 7,
    consultationFee: 200,
    imageUrl: "https://doctorlistingingestionpr.azureedge.net/535...",
    videoConsult: true,
    inClinic: true,
    clinic: {
      name: "Laxmi Dental Clinic",
      address: "Sr. No. 59/3"
    }
  },
  {
    id: "25360",
    name: "Dr. Shubhada Deoskar",
    specialties: ["Gynaecologist and Obstetrician"],
    experience: 40,
    consultationFee: 600,
    imageUrl: "https://doctorlistingingestionpr.azureedge.net/271...",
    videoConsult: false,
    inClinic: true,
    clinic: {
      name: "Dr. Shubhada Deoskar",
      address: "101, New Market Plaza, Clover Village"
    }
  },
  {
    id: "105098",
    name: "Dr. Vikas Patil",
    specialties: ["Paediatrician"],
    experience: 13,
    consultationFee: 500,
    imageUrl: "https://doctorlistingingestionpr.azureedge.net/458...",
    videoConsult: true,
    inClinic: true,
    clinic: {
      name: "Dr Vikas Patil Children Speciality Clinic",
      address: "D2 , Citadel Commercial Complex,"
    }
  },
  {
    id: "1670139141817001",
    name: "Dr. Eenas Chilwan",
    specialties: ["Dentist"],
    experience: 8,
    consultationFee: 200,
    imageUrl: "https://doctorlistingingestionpr.azureedge.net/911...",
    videoConsult: false,
    inClinic: true,
    clinic: {
      name: "Dentique Clinic",
      address: "Shop 2 My Paradise Lane Number 8, Next To Oxford V..."
    }
  },
  {
    id: "18243",
    name: "Dr. Robert Lobo",
    specialties: ["ENT"],
    experience: 29,
    consultationFee: 500,
    imageUrl: "https://doctorlistingingestionpr.azureedge.net/236...",
    videoConsult: true,
    inClinic: true,
    clinic: {
      name: "South East Clinic",
      address: "107 Gera Junction, Chowk"
    }
  },
  {
    id: "54061",
    name: "Dr. Riyaz Shaikh",
    specialties: ["Dentist"],
    experience: 15,
    consultationFee: 200,
    imageUrl: "https://doctorlistingingestionpr.azureedge.net/344...",
    videoConsult: false,
    inClinic: true,
    clinic: {
      name: "Global Health Hub Dental & Polyclinic",
      address: "Flat No. 6, Teddy Apartment"
    }
  },
  {
    id: "117905",
    name: "Dr. Humanaz Shaikh",
    specialties: ["Dentist"],
    experience: 6,
    consultationFee: 200,
    imageUrl: "https://doctorlistingingestionpr.azureedge.net/669...",
    videoConsult: true,
    inClinic: true,
    clinic: {
      name: "Global Health Hub Dental & Polyclinic",
      address: "Flat No. 6, Teddy Apartment"
    }
  },
  {
    id: "75828",
    name: "Dr. Gowri Singh",
    specialties: ["General Surgeon"],
    experience: 19,
    consultationFee: 500,
    imageUrl: "https://doctorlistingingestionpr.azureedge.net/389...",
    videoConsult: true,
    inClinic: true,
    clinic: {
      name: "Usha Nursing Home",
      address: "M G Road, Camp, Pune, Maharashtra"
    }
  },
  {
    id: "1677059640329001",
    name: "Dr. Ananya Dhar",
    specialties: ["Psychiatrist"],
    experience: 9,
    consultationFee: 1000,
    imageUrl: "https://doctorlistingingestionpr.azureedge.net/911...",
    videoConsult: true,
    inClinic: false,
    clinic: {
      name: "Dr Ananya Dhar Clinic",
      address: "Police Chowky, Near Poolgate, 149, Mg Road,"
    }
  },
  {
    id: "123897",
    name: "Dr. Krupali Oswal",
    specialties: ["Dentist"],
    experience: 18,
    consultationFee: 500,
    imageUrl: "https://doctorlistingingestionpr.azureedge.net/786...",
    videoConsult: false,
    inClinic: true,
    clinic: {
      name: "Dr Krupali Oswal Clinic",
      address: "164, Mg Road 1st Floor"
    }
  },
  {
    id: "37423",
    name: "Dr. Samita Moolani",
    specialties: ["Ophthalmologist"],
    experience: 16,
    consultationFee: 800,
    imageUrl: "https://doctorlistingingestionpr.azureedge.net/307...",
    videoConsult: true,
    inClinic: true,
    clinic: {
      name: "Moolani's Eye Care Centre",
      address: "103, Pundol Apartments"
    }
  },
  {
    id: "14305",
    name: "Dr. M Mundada",
    specialties: ["Gynaecologist and Obstetrician"],
    experience: 48,
    consultationFee: 250,
    imageUrl: "https://doctorlistingingestionpr.azureedge.net/207...",
    videoConsult: false,
    inClinic: true,
    clinic: {
      name: "Arnav Clinic.",
      address: "Opp Clover Hights, Azad Nagar Road Maestros Phase ..."
    }
  },
  {
    id: "133374",
    name: "Dr. Nikhil Yadav",
    specialties: ["Dentist"],
    experience: 12,
    consultationFee: 250,
    imageUrl: "https://doctorlistingingestionpr.azureedge.net/885...",
    videoConsult: false,
    inClinic: true,
    clinic: {
      name: "Smile Up Dental Care.",
      address: "2082/83, Khumbar Bavdi"
    }
  },
  {
    id: "109546",
    name: "Dr. Padma Srivastava",
    specialties: ["Gynaecologist and Obstetrician"],
    experience: 13,
    consultationFee: 500,
    imageUrl: "https://doctorlistingingestionpr.azureedge.net/513...",
    videoConsult: false,
    inClinic: true,
    clinic: {
      name: "Prarthana Clinic",
      address: "101, Picasso-kedari Arcade"
    }
  },
  {
    id: "116527",
    name: "Dr. Atmaja Sabane",
    specialties: ["Dentist"],
    experience: 23,
    consultationFee: 300,
    imageUrl: "https://doctorlistingingestionpr.azureedge.net/641...",
    videoConsult: false,
    inClinic: true,
    clinic: {
      name: "Smile Architects",
      address: "Super Mall, Shop No. F-17, 1st floor"
    }
  },
  {
    id: "38428",
    name: "Dr. Mukesh Paryani",
    specialties: ["Ophthalmologist"],
    experience: 18,
    consultationFee: 600,
    imageUrl: "https://doctorlistingingestionpr.blob.core.windows...",
    videoConsult: true,
    inClinic: true,
    clinic: {
      name: "Neo Vision Eye Care And Laser Center",
      address: "202, 2nd Floor, Lingfield Plaza, Salunkhe Vihar Ro..."
    }
  },
  {
    id: "87406",
    name: "Dr. Milind Joshi",
    specialties: ["General Surgeon"],
    experience: 23,
    consultationFee: 600,
    imageUrl: "https://doctorlistingingestionpr.azureedge.net/416...",
    videoConsult: false,
    inClinic: true,
    clinic: {
      name: "Pristyn Care",
      address: "Aanvi Hearing Solutions, Office No. 102, C Wing, G..."
    }
  },
  {
    id: "7921",
    name: "Dr. Balram Balani",
    specialties: ["Rheumatologist"],
    experience: 22,
    consultationFee: 200,
    imageUrl: "https://doctorlistingingestionpr.azureedge.net/111...",
    videoConsult: false,
    inClinic: true,
    clinic: {
      name: "Koushy's Clinic",
      address: "Shop No 6 Suraj Appt"
    }
  },
  {
    id: "1670766425729001",
    name: "Dr. Pradeep Reddy V",
    specialties: ["General Physician"],
    experience: 10,
    consultationFee: 700
