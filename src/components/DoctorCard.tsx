
import { Card, CardContent } from "@/components/ui/card";

interface DoctorCardProps {
  name: string;
  specialties: string[];
  experience: number;
  consultationFee: number;
  imageUrl: string;
}

const DoctorCard = ({
  name,
  specialties,
  experience,
  consultationFee,
  imageUrl,
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
            Consultation: ${consultationFee}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default DoctorCard;
