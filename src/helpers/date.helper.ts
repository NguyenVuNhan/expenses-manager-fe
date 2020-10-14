export const getDaysInMonth = (year: number, month: number) => {
  switch (month) {
    case 2:
      if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) return 29;
      return 28;
    case 4:
    case 6:
    case 9:
    case 11:
      return 30;
    default:
      return 31;
  }
};

const getWeekdayFormat = (date: number): WeekdayType => {
  switch (date) {
    case 0:
      return "Sunday";
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
    default:
      console.log(date);

      throw new Error("Invalid date");
  }
};

const getMonthFormat = (month: number): MonthType => {
  switch (month) {
    case 1:
      return "January";
    case 2:
      return "February";
    case 3:
      return "March";
    case 4:
      return "April";
    case 5:
      return "May";
    case 6:
      return "June";
    case 7:
      return "July";
    case 8:
      return "August";
    case 9:
      return "September";
    case 10:
      return "October";
    case 11:
      return "November";
    case 12:
      return "December";
    default:
      throw new Error("Invalid month");
  }
};

export const getDateFormat = (date: Date): DateFormatType => {
  let day: number = date.getUTCDate();
  return {
    day: day / 10 < 1 ? "0" + day : "" + day,
    weekday: getWeekdayFormat(date.getUTCDay()),
    month: getMonthFormat(date.getUTCMonth()),
    year: date.getUTCFullYear(),
  };
};
