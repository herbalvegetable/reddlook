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
    
    if(d.format('DD/MM/YYYY') == dayjs().format('DD/MM/YYYY')){
        return d.format('HH:mm');
    }

    if(d.isAfter(dayjs().subtract(1, 'week'))){
        return d.format('ddd HH:mm');
    }

    if(d.isBefore(dayjs().subtract(1, 'year'))){
        return d.format('DD/MM/YYYY');
    }
    
    return d.format('ddd DD/MM');
}