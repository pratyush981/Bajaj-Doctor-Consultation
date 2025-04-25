
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { ConsultationType, SortType } from "@/types/doctor";
import { Filter } from "lucide-react";

interface FiltersProps {
  specialties: string[];
  selectedSpecialties: string[];
  consultationType: ConsultationType;
  sortBy: SortType | null;
  onConsultationTypeChange: (type: ConsultationType) => void;
  onSpecialtyChange: (specialty: string) => void;
  onSortChange: (type: SortType | null) => void;
}

const Filters = ({
  specialties,
  selectedSpecialties,
  consultationType,
  sortBy,
  onConsultationTypeChange,
  onSpecialtyChange,
  onSortChange,
}: FiltersProps) => {
  return (
    <div className="space-y-6 p-4 bg-white rounded-lg shadow-sm">
      <div className="flex items-center gap-2 border-b pb-3 mb-4">
        <Filter className="h-5 w-5 text-primary" />
        <h2 className="text-xl font-semibold">Filters</h2>
      </div>
      
      <div className="space-y-4">
        <h3 className="text-lg font-medium mb-2">Mode of Consultation</h3>
        <RadioGroup
          value={consultationType}
          onValueChange={(value) => onConsultationTypeChange(value as ConsultationType)}
          className="space-y-2"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="all" id="all" />
            <Label htmlFor="all">All</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="video" id="video" />
            <Label htmlFor="video">Video Consult</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="clinic" id="clinic" />
            <Label htmlFor="clinic">In Clinic</Label>
          </div>
        </RadioGroup>
      </div>

      <div className="space-y-3">
        <h3 className="text-lg font-medium mb-2">Specialties</h3>
        <div className="max-h-48 overflow-y-auto pr-2 space-y-2">
          {specialties.map((specialty) => (
            <div key={specialty} className="flex items-start space-x-2">
              <Checkbox
                id={specialty}
                checked={selectedSpecialties.includes(specialty)}
                onCheckedChange={() => onSpecialtyChange(specialty)}
                className="mt-1"
              />
              <label
                htmlFor={specialty}
                className="text-sm font-medium leading-tight cursor-pointer"
              >
                {specialty}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="text-lg font-medium mb-2">Sort By</h3>
        <RadioGroup
          value={sortBy || ""}
          onValueChange={(value) => {
            if (value === "") {
              onSortChange(null);
            } else {
              onSortChange(value as SortType);
            }
          }}
          className="space-y-2"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="" id="none" />
            <Label htmlFor="none">None</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="fees" id="fees" />
            <Label htmlFor="fees">Consultation Fee (Low to High)</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="experience" id="experience" />
            <Label htmlFor="experience">Experience (High to Low)</Label>
          </div>
        </RadioGroup>
      </div>
    </div>
  );
};

export default Filters;
