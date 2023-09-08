import { Sick } from '../types';
import { ChangeEvent, createContext, useContext } from 'react';

export interface SearchContextType {
  keyboardEvent: (e: any) => void;
  isFocus: boolean;
  changeFocus: (value: boolean) => void;
  changeSearchText: (text: string) => void;
  searchText: string;
  suggestions: Sick[];
  inputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleSuggestionClick: (suggestion: string) => void;
  selectionIndex: number;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export default SearchContext;
export const useSearch = () => useContext(SearchContext) as SearchContextType;
