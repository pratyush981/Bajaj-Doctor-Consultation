
import { Card, CardContent } from "@/components/ui/card";
import { Video, Building2, MapPin, Languages } from "lucide-react";
import { Doctor } from "@/types/doctor";

const DoctorCard = ({
  name,
  specialties,
  experience,
  consultationFee,
  imageUrl,
  videoConsult,
  inClinic,
  clinic,
  languages,
  introduction,
}: Doctor) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <CardContent className="p-0">
        <div className="h-48 w-full relative">
          <img
            src={imageUrl || "/placeholder.svg"}
            alt={name}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="p-4 space-y-3">
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
          
          <p className="text-sm text-gray-600">{experience} experience</p>
          
          <p className="font-semibold text-primary-700">
            Consultation: {consultationFee}
          </p>
          
          {languages && languages.length > 0 && (
            <div className="flex items-center gap-1 text-xs text-gray-600">
              <Languages className="h-3 w-3" />
              <span>{languages.filter(Boolean).join(", ")}</span>
            </div>
          )}
          
          <div className="flex items-start gap-1">
            <MapPin className="h-4 w-4 text-gray-500 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-xs text-gray-500 font-medium">{clinic.name}</p>
              <p className="text-xs text-gray-500">{clinic.locality}, {clinic.city}</p>
              <p className="text-xs text-gray-500">{clinic.address}</p>
            </div>
          </div>
          
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
          
          {introduction && (
            <div className="text-xs text-gray-600 mt-2 line-clamp-2">
              {introduction}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default DoctorCard;
