// SearchProvider.tsx
import React, { KeyboardEvent, useCallback, useState } from 'react';
import { Sick } from '../types';
import SearchContext, { SearchContextType } from './ShearchContext';

interface SearchProviderProps {
  children: React.ReactNode;
}
const EXP = 5 * 60 * 1000; //5분

function SearchProvider({ children }: SearchProviderProps) {
  const [isFocus, setIsFocus] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [suggestions, setSuggestions] = useState<Sick[]>([]);

  const changeFocus = (value: boolean) => setIsFocus(value);
  const inputChange = (event: React.ChangeEvent<HTMLInputElement>) => {};
  const handleSuggestionClick = (suggestion: string) => {};
  const keyboardEvent = useCallback((e: KeyboardEvent<HTMLInputElement>) => {}, []);

  const contextValue: SearchContextType = {
    isFocus,
    changeFocus,
    searchText,
    suggestions,
    inputChange,
    handleSuggestionClick,
    keyboardEvent,
  };

  return <SearchContext.Provider value={contextValue}>{children}</SearchContext.Provider>;
}

export default SearchProvider;
