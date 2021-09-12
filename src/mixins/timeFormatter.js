export default function timeConverter(UNIX_timestamp, mode){
    var a = new Date(UNIX_timestamp);
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var day = days[a.getDay()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var dateSuffix = '';

    if (hour < 10) {
        hour = '0' + hour;
    }
    if (min < 10) {
        min = '0' + min;
    }
    
    if (date == 1 || date == 21 || date == 31) {
        dateSuffix = 'st';
    } else if (date == 2 || date == 22) {
        dateSuffix = 'nd';
    } else if (date == 3 || date == 23) {
        dateSuffix = 'rd';
    } else {
        dateSuffix = 'th';
    }

    if (mode == 'fullDate') {
        var fullTime = day + ', ' + date + ' ' + month + ' ' + year + ' '  + hour + ':' + min;
        return fullTime;
    } else  if (mode == 'timeOnly'){
        var timeOnly = hour + ':' + min;
        return timeOnly;
    } else if (mode == 'dateOnly') {
        var dateOnly = month + ' ' + date + dateSuffix;
        return dateOnly;
    }
    
  }