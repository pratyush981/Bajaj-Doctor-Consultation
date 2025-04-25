
import { Card, CardContent } from "@/components/ui/card";
import { Video, Building2, MapPin, Languages, Star, CreditCard, Clock } from "lucide-react";
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
    <Card className="overflow-hidden hover:shadow-lg transition-shadow bg-white">
      <CardContent className="p-0">
        <div className="relative">
          <div className="h-48 w-full">
            <img
              src={imageUrl || "/placeholder.svg"}
              alt={name}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="absolute top-3 right-3 flex gap-2">
            {videoConsult && (
              <span className="inline-flex items-center gap-1 px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">
                <Video className="h-3 w-3" />
                Video
              </span>
            )}
            {inClinic && (
              <span className="inline-flex items-center gap-1 px-2 py-1 bg-green-50 text-green-700 rounded-full text-xs font-medium">
                <Building2 className="h-3 w-3" />
                In-clinic
              </span>
            )}
          </div>
        </div>
        
        <div className="p-4 space-y-4">
          <div>
            <h3 className="font-semibold text-lg text-gray-900">{name}</h3>
            <div className="flex flex-wrap gap-2 mt-2">
              {specialties.map((specialty) => (
                <span
                  key={specialty}
                  className="px-2 py-1 bg-primary-50 text-primary-700 rounded-full text-xs font-medium"
                >
                  {specialty}
                </span>
              ))}
            </div>
          </div>
          
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4 text-primary-600" />
              <span>{experience} Years</span>
            </div>
            <div className="flex items-center gap-1">
              <CreditCard className="h-4 w-4 text-primary-600" />
              <span>₹{consultationFee}</span>
            </div>
          </div>
          
          {languages && languages.length > 0 && (
            <div className="flex items-center gap-2 text-xs text-gray-600">
              <Languages className="h-3 w-3 flex-shrink-0" />
              <span>{languages.filter(Boolean).join(", ")}</span>
            </div>
          )}
          
          <div className="pt-2 border-t">
            <div className="flex items-start gap-2">
              <MapPin className="h-4 w-4 text-gray-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium text-gray-900">{clinic.name}</p>
                <p className="text-xs text-gray-600">{clinic.locality}, {clinic.city}</p>
                <p className="text-xs text-gray-600">{clinic.address}</p>
              </div>
            </div>
          </div>
          
          {introduction && (
            <div className="pt-2 border-t">
              <p className="text-xs text-gray-600 line-clamp-2">
                {introduction}
              </p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default DoctorCard;
