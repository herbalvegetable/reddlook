import dayjs from 'dayjs';

export const convertSecondsToDate = s => {
    const dateObj = new Date(s*1000);
    const d = dayjs(dateObj);
    const dateStr = d.format('ddd DD/MM/YYYY HH:mm');

    return dateStr;
}
export const convertSecondsToShortDate = s => {
    const dateObj = new Date(s*1000);
    const d = dayjs(dateObj);
    const dateStr = d.format('ddd DD/MM');

    return dateStr;
}