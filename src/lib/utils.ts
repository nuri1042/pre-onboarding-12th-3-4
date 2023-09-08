export const isEmpty = (data: any) => {
  if (data === undefined) {
    return true;
  }
  return data.length === 0;
};

export const isPass = (query: string) => {
  const lastCharacter = query.charAt(query.length - 1);
  if (lastCharacter === ' ') return true;
  const pattern = /[ㄱ-ㅎㅏ-ㅣ]/;
  return pattern.test(lastCharacter);
};
