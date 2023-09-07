// SearchProvider.tsx
import React, { KeyboardEvent, useCallback, useState, useEffect } from 'react';
import { Sick } from '../types';
import SearchContext, { SearchContextType } from './SearchContext';
import { search } from '../api/search';
import { isEmpty } from '../lib/utils';

interface SearchProviderProps {
  children: React.ReactNode;
}
const EXP = 5 * 60 * 1000; //5분
const SEARCH_LIMIT = 10;

function SearchProvider({ children }: SearchProviderProps) {
  const [isFocus, setIsFocus] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [suggestions, setSuggestions] = useState<Sick[]>([]);
  const [selectionIndex, setSelectedIndex] = useState(-1);

  useEffect(() => {
    setSelectedIndex(-1);
  }, [suggestions]);

  const changeFocus = (value: boolean) => setIsFocus(value);

  const getSuggestion = async (keyword: string) => {
    const res = await search(keyword);
    console.info(res);
    setSuggestions(res.slice(0, SEARCH_LIMIT));
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
  const handleSuggestionClick = (suggestion: string) => {};

  const keyboardEvent = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      if (isEmpty(suggestions)) return;
      switch (e.key) {
        case 'ArrowUp': {
          e.preventDefault();
          setSelectedIndex((prevIndex) => {
            const newIndex = prevIndex === -1 ? suggestions.length - 1 : prevIndex - 1;
            const newSearchText = newIndex === -1 ? searchText : suggestions[newIndex].sickNm;
            setSearchText(newSearchText);
            return newIndex;
          });
          break;
        }
        case 'ArrowDown': {
          e.preventDefault();
          setSelectedIndex((prevIndex) => {
            const newIndex = prevIndex === suggestions.length - 1 ? -1 : prevIndex + 1;
            const newSearchText = newIndex === -1 ? searchText : suggestions[newIndex].sickNm;
            setSearchText(newSearchText);
            return newIndex;
          });
          break;
        }
        default: {
          break;
        }
      }
    },
    [suggestions],
  );

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
