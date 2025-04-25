
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { ConsultationType, SortType } from "@/types/doctor";

interface FiltersProps {
  specialties: string[];
  selectedSpecialties: string[];
  consultationType: ConsultationType;
  sortBy: SortType | null;
  onConsultationTypeChange: (type: ConsultationType) => void;
  onSpecialtyChange: (specialty: string) => void;
  onSortChange: (type: SortType) => void;
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
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Mode of Consultation</h3>
        <RadioGroup
          defaultValue="all"
          value={consultationType}
          onValueChange={(value) => onConsultationTypeChange(value as ConsultationType)}
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

      <div>
        <h3 className="text-lg font-semibold mb-4">Specialties</h3>
        <div className="space-y-3">
          {specialties.map((specialty) => (
            <div key={specialty} className="flex items-center space-x-2">
              <Checkbox
                id={specialty}
                checked={selectedSpecialties.includes(specialty)}
                onCheckedChange={() => onSpecialtyChange(specialty)}
              />
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

      <div>
        <h3 className="text-lg font-semibold mb-4">Sort By</h3>
        <RadioGroup
          value={sortBy || ""}
          onValueChange={(value) => onSortChange(value as SortType)}
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="fees" id="fees" />
            <Label htmlFor="fees">Fees (Low to High)</Label>
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
