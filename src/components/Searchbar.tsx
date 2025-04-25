
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

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSearch(searchTerm);
    }
  };

  return (
    <div className="relative w-full">
      <Command className="rounded-lg border shadow-md">
        <CommandInput
          value={searchTerm}
          onValueChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder="Search doctors by name..."
          className="h-14"
        />
        {searchTerm && suggestions.length > 0 && (
          <CommandList>
            <CommandGroup>
              {suggestions.map((doctor) => (
                <CommandItem
                  key={doctor.id}
                  value={doctor.name}
                  onSelect={handleSelect}
                  className="cursor-pointer flex items-center gap-3 p-2"
                >
                  {doctor.imageUrl && (
                    <img 
                      src={doctor.imageUrl} 
                      alt={doctor.name}
                      className="w-8 h-8 rounded-full object-cover" 
                    />
                  )}
                  <div>
                    <p className="font-medium">{doctor.name}</p>
                    <p className="text-xs text-gray-500">{doctor.specialties.join(", ")}</p>
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        )}
        {searchTerm && suggestions.length === 0 && (
          <CommandList>
            <CommandEmpty>No doctors found.</CommandEmpty>
          </CommandList>
        )}
      </Command>
    </div>
  );
};

export default Searchbar;
