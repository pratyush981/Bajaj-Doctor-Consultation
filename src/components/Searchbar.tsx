
import { useState } from "react";
import { Command, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem } from "@/components/ui/command";
import { useSearchDoctors } from "@/hooks/useSearchDoctors";
import { Doctor } from "@/types/doctor";

interface SearchbarProps {
  doctors: Doctor[];
  onSearch: (term: string) => void;
}

const Searchbar = ({ doctors, onSearch }: SearchbarProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const { suggestions } = useSearchDoctors(doctors, searchTerm);

  const handleSelect = (doctorName: string) => {
    setSearchTerm(doctorName);
    onSearch(doctorName);
  };

  const handleInputChange = (value: string) => {
    setSearchTerm(value);
    if (!value) onSearch("");
  };

  return (
    <Command className="rounded-lg border shadow-md">
      <CommandInput
        value={searchTerm}
        onValueChange={handleInputChange}
        placeholder="Search doctors by name..."
        className="h-14"
      />
      {searchTerm && (
        <CommandList>
          <CommandEmpty>No doctors found.</CommandEmpty>
          <CommandGroup>
            {suggestions.map((doctor) => (
              <CommandItem
                key={doctor.id}
                value={doctor.name}
                onSelect={handleSelect}
                className="cursor-pointer"
              >
                {doctor.name}
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      )}
    </Command>
  );
};

export default Searchbar;
