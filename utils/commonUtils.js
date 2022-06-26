 export function getFormattedDate(newDate) {
    let day = 1 + newDate.getDate();
    let month = 1 + newDate.getMonth();
    let year = newDate.getFullYear();
    
    return day + '/' + month + '/' + year;
 }