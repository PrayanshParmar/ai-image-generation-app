const NameShorter = (fullName: string | null | undefined): string => {
  if (fullName === null) {
    return "CN";
  }

  if (fullName === undefined) {
    return "CN";
  }

  return fullName
    .split(" ")
    .map((name) => name.charAt(0).toUpperCase())
    .join("");
};

export default NameShorter;
