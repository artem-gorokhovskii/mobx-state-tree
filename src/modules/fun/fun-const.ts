export const FUN_URL = 'ws://localhost:8081';

export const TYPES_OF_CONTENT = {
    JOKES: '1',
    POEMS: '3',
    QUOTES: '5',
}

export const getTextType = (type: string) => {
    switch(type) {
        case '1':
            return 'Jokes';
        case '3':
            return 'Poems';
        case '5':
            return 'Quotes';
        default:
            return '';
    }
}