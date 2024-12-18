const AbbreviatedElements: {[index: string]: string} = {
    'w': 'Water',
    'f': 'Fire',
    'e': 'Earth',
    'a': 'Air'
}

export const getElementNames = (abbreviatedElements: string) => {
    if (abbreviatedElements.includes(',')) {
        const letters = abbreviatedElements.split(',');
        const elements = letters.map((letter) => AbbreviatedElements[letter]);
        return {
            text: elements.join(' and '),
            plural: true
        };
    } else {
        return {
            text: AbbreviatedElements[abbreviatedElements],
            plural: false
        }
    }
}

export const getOgTitle = (query: string) => {
    const { text, plural } = getElementNames(query);
    return `The element${plural? 's' :''} that dominate my birth chart ${plural? 'are' :'is'} ${text}.`;
}