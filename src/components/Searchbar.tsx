
import { useState } from "react";
import { Command, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem } from "@/components/ui/command";
import { useSearchDoctors } from "@/hooks/useSearchDoctors";
import { Doctor } from "@/types/doctor";
import { Search } from "lucide-react";

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
    <div className="relative w-full max-w-2xl mx-auto">
      <Command className="rounded-xl border shadow-lg bg-white">
        <div className="flex items-center border-b border-gray-100 px-3">
          <Search className="h-4 w-4 text-gray-400" />
          <CommandInput
            value={searchTerm}
            onValueChange={handleInputChange}
            onKeyDown={handleKeyDown}
            placeholder="Search doctors by name..."
            className="h-14 flex-1 focus:outline-none"
          />
        </div>
        {searchTerm && (
          <CommandList className="max-h-[300px] overflow-y-auto p-2">
            {suggestions.length > 0 ? (
              <CommandGroup>
                {suggestions.map((doctor) => (
                  <CommandItem
                    key={doctor.id}
                    value={doctor.name}
                    onSelect={handleSelect}
                    className="cursor-pointer flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50"
                  >
                    <div className="h-10 w-10 rounded-full overflow-hidden flex-shrink-0">
                      <img 
                        src={doctor.imageUrl} 
                        alt={doctor.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{doctor.name}</p>
                      <p className="text-xs text-gray-500">{doctor.specialties.join(", ")}</p>
                    </div>
                  </CommandItem>
                ))}
              </CommandGroup>
            ) : (
              <CommandEmpty className="py-6 text-sm text-gray-500">
                No doctors found.
              </CommandEmpty>
            )}
          </CommandList>
        )}
      </Command>
    </div>
  );
};

export default Searchbar;
