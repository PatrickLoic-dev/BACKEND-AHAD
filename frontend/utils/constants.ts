import { ImageProps } from "react-native";
import { bank, cheval, coins } from "./images";

export interface PageInterface extends Pick<ImageProps, 'source'> {
    title : string;
    description : string;
}

export const PAGES : PageInterface[] = [
    {
        title : 'Manage your finances.',
        description : 
        'Forget everything you know about the chaotic world of finance. It can be easy.',
        source : cheval,
    },
    {
        title : 'Control your savings.',
        description : 
        'Forget everything you know about the chaotic world of finance. It can be easy.',
        source : coins,
    },
    {
        title : 'Easy banking.',
        description : 
        'Forget everything you know about the chaotic world of finance. It can be easy.',
        source : bank,
    },
];