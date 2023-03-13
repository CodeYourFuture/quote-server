export default (searchString:string, ...strings:string[]) => {
    return strings.some((string) => string.toLowerCase().includes(searchString.toLowerCase()));
}