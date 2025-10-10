export function ensureStartsWith(stringToCheck: string, startsWith: string) {
    stringToCheck.startsWith(startsWith) ? stringToCheck : `${startsWith}${stringToCheck}`;
}