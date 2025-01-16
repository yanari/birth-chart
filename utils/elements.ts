const AbbreviatedElements: {[index: string]: string} = {
    'w': 'Water',
    'f': 'Fire',
    'e': 'Earth',
    'a': 'Air'
}

export const getElementNames = (abbreviatedElements: string) => {
    if (abbreviatedElements.length > 1) {
        const elements = [...abbreviatedElements].map(letter => AbbreviatedElements[letter]);

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