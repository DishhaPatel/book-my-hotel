import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

function DateRangePicker({ dateRange, setDateRange }) {
  const { startDate, endDate } = dateRange;

  return (
    <DatePicker
      showIcon
      selectsRange={true}
      dateFormat="dd/MM/yy"
      startDate={startDate}
      placeholderText="Check in - Check out"
      endDate={endDate}
      onChange={(update) => {
        setDateRange({ startDate: update[0], endDate: update[1] });
      }}
    />
  );
}

export default DateRangePicker;
