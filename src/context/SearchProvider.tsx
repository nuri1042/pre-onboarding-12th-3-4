// SearchProvider.tsx
import React, { KeyboardEvent, useCallback, useState } from 'react';
import { Sick } from '../types';
import SearchContext, { SearchContextType } from './SearchContext';
import { search } from '../api/search';

interface SearchProviderProps {
  children: React.ReactNode;
}
const EXP = 5 * 60 * 1000; //5분

function SearchProvider({ children }: SearchProviderProps) {
  const [isFocus, setIsFocus] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [suggestions, setSuggestions] = useState<Sick[]>([]);

  const changeFocus = (value: boolean) => setIsFocus(value);

  const getSuggestion = async (keyword: string) => {
    const res = await search(keyword);
    setSuggestions(res);
  };

  const changeSearchText = (text: string) => {
    setSearchText(text);
  };

  const inputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const keyword = event.target.value;
    setSearchText(keyword);
    if (!keyword) {
      setSuggestions([]);
      return;
    }
    getSuggestion(keyword);
  };
  const handleSuggestionClick = (suggestion: string) => {
    setIsFocus(false);
  };

  const keyboardEvent = useCallback((e: KeyboardEvent<HTMLInputElement>) => {}, []);

  const contextValue: SearchContextType = {
    isFocus,
    changeFocus,
    searchText,
    suggestions,
    inputChange,
    changeSearchText,
    handleSuggestionClick,
    keyboardEvent,
  };

  return <SearchContext.Provider value={contextValue}>{children}</SearchContext.Provider>;
}

export default SearchProvider;
