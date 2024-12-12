export const isLatitudesEmpty = (value: Object) => {
    return Object.values(value).length === 0;
}

export const isDateEmpty = (value: Date) => {
    return value.toDateString() === new Date(new Date().setHours(0, 0, 0, 0)).toDateString();
};