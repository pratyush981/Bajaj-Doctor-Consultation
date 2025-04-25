
import { Card, CardContent } from "@/components/ui/card";
import { Video, Building2 } from "lucide-react";

interface Clinic {
  name: string;
  address: string;
}

interface DoctorCardProps {
  id: string;
  name: string;
  specialties: string[];
  experience: number;
  consultationFee: number;
  imageUrl: string;
  videoConsult?: boolean;
  inClinic?: boolean;
  clinic: Clinic;
}

const DoctorCard = ({
  name,
  specialties,
  experience,
  consultationFee,
  imageUrl,
  videoConsult,
  inClinic,
  clinic,
}: DoctorCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <CardContent className="p-0">
        <div className="aspect-square w-full relative">
          <img
            src={imageUrl}
            alt={name}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="p-4 space-y-2">
          <h3 className="font-semibold text-lg">{name}</h3>
          <div className="flex flex-wrap gap-1">
            {specialties.map((specialty) => (
              <span
                key={specialty}
                className="px-2 py-1 bg-primary-50 text-primary-700 rounded-full text-xs"
              >
                {specialty}
              </span>
            ))}
          </div>
          <p className="text-sm text-gray-600">{experience} years experience</p>
          <p className="font-semibold text-primary-700">
            Consultation: ₹{consultationFee}
          </p>
          <p className="text-xs text-gray-500">{clinic.name}</p>
          <p className="text-xs text-gray-500">{clinic.address}</p>
          <div className="flex gap-2 pt-2">
            {videoConsult && (
              <span className="inline-flex items-center gap-1 px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-xs">
                <Video className="h-3 w-3" />
                Video
              </span>
            )}
            {inClinic && (
              <span className="inline-flex items-center gap-1 px-2 py-1 bg-green-50 text-green-700 rounded-full text-xs">
                <Building2 className="h-3 w-3" />
                In-clinic
              </span>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DoctorCard;
