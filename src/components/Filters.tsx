
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Building2, Video, Users } from "lucide-react";

const specialties = [
  "Cardiology",
  "Dermatology",
  "Neurology",
  "Pediatrics",
  "Orthopedics",
  "Psychiatry",
];

interface FiltersProps {
  onConsultationModeChange: (value: string) => void;
}

const Filters = ({ onConsultationModeChange }: FiltersProps) => {
  return (
    <div className="space-y-6 p-4">
      <div>
        <h3 className="text-lg font-semibold mb-4">Mode of Consultation</h3>
        <ToggleGroup
          type="single"
          className="flex flex-col gap-2 sm:flex-row"
          onValueChange={onConsultationModeChange}
          defaultValue="all"
        >
          <ToggleGroupItem value="all" className="w-full sm:w-auto gap-2">
            <Users className="h-4 w-4" />
            All
          </ToggleGroupItem>
          <ToggleGroupItem value="video" className="w-full sm:w-auto gap-2">
            <Video className="h-4 w-4" />
            Video
          </ToggleGroupItem>
          <ToggleGroupItem value="clinic" className="w-full sm:w-auto gap-2">
            <Building2 className="h-4 w-4" />
            In-clinic
          </ToggleGroupItem>
        </ToggleGroup>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Specialties</h3>
        <div className="space-y-3">
          {specialties.map((specialty) => (
            <div key={specialty} className="flex items-center space-x-2">
              <Checkbox id={specialty} />
              <label
                htmlFor={specialty}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {specialty}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filters;
