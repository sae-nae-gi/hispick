import { writable } from "svelte/store";

export interface Card {
    title: string;
    text: string;
    imageUrl: string;
    showId: string;
    id: number;
}

export interface Cards {
    contents: Card[];
    isEmpty: boolean;
}

export const cardStore = writable({});
export const cardsStore = writable({ contents: [], isEmpty: true });