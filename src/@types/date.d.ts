type WeekdayType =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "Sunday";

type MonthType =
  | "January"
  | "February"
  | "March"
  | "April"
  | "May"
  | "June"
  | "July"
  | "August"
  | "September"
  | "October"
  | "November"
  | "December";

interface DateFormatType {
  day: string;
  weekday: WeekdayType;
  month: MonthType;
  year: number;
}
