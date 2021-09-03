export default function timeConverter(UNIX_timestamp, fullDate){
    var a = new Date(UNIX_timestamp);
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var day = days[a.getDay()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();

    if (hour < 12) {
        hour = '0' + hour;
    }
    if (min < 10) {
        min = '0' + min;
    }

    if (fullDate) {
        var fullTime = day + ', ' + date + ' ' + month + ' ' + year + ' '  + hour + ':' + min;
    return fullTime;
    } else {
        var timeOnly = hour + ':' + min;
        return timeOnly;
    }
    
  }