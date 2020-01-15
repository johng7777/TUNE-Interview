export class Util {
    static MONTHS = {
        "Jan" : "01",
        "Feb" : "02",
        "Mar" : "03",
        "Apr" : "04",
        "May" : "05",
        "Jun" : "06",
        "Jul" : "07",
        "Aug" : "08",
        "Sep" : "09",
        "Oct" : "10",
        "Nov" : "11",
        "Dec" : "12"
    }

    // Format input:  Sun Apr 28 2013
    // return 2013/04/28
    static dateToSortable(dateString) {
        var arr = dateString.split(' ');
        return arr[3] + '/' + Util.MONTHS[arr[1]] + '/' + arr[2]
    }
}