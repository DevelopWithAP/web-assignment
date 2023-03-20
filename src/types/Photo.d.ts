export type Photo = {
    id: number;
    width: number;
    height: number;
    url: string;
    photographer: string;
    photographerUrl: string;
    photographerId: number;
    src: {
        tiny: string;
        portrait: string;
        small: string;
        medium: string;
        landscape: string;
    };
};