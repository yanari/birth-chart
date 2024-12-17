export const isColorLight = (rgbColor: any) => {
    const parsedRGB = rgbColor.replace(/[rgb|(|)| ]/g, '');
    const [red, green, blue] = parsedRGB.split(',');
  
    const calc = (0.299 * red + 0.587 * green + 0.114 * blue);
    const perceptiveLuminance = 1 - calc / 255;
    return perceptiveLuminance < 0.5;
}

export const getBackgroundForElement = (elementName: String) => {
    if (elementName === 'Fire') {
        return 'bg-red-800'
    }

    if (elementName === 'Earth') {
        return 'bg-lime-800'
    }

    if (elementName === 'Water')  {
        return 'bg-teal-600'
    }

    if (elementName === 'Air') {
        return 'bg-blue-600'
    }
}