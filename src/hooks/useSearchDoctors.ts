
import { useState, useEffect, useMemo } from 'react';
import { Doctor } from '@/types/doctor';

export const useSearchDoctors = (doctors: Doctor[], searchTerm: string) => {
  const [suggestions, setSuggestions] = useState<Doctor[]>([]);

  const searchResults = useMemo(() => {
    if (!searchTerm) return [];
    
    const normalizedTerm = searchTerm.toLowerCase();
    // Return top 3 matches as suggestions
    return doctors
      .filter(doctor => doctor.name.toLowerCase().includes(normalizedTerm))
      .slice(0, 3);
  }, [doctors, searchTerm]);

  useEffect(() => {
    setSuggestions(searchResults);
  }, [searchResults]);

  return { suggestions };
};
