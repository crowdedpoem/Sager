// libs/normalize.ts
export const normalize = (text: string | undefined): string => {
    return text ? text.trim().toLowerCase() : '';
};
