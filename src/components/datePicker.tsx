import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Import the styles
import "tailwindcss/tailwind.css"; // Import Tailwind CSS for styling

const MyDatePicker = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  return (
    <div className="">
      <DatePicker
        required
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="dd/MM/yyyy"
        placeholderText="Select a date"
        className="p-3  rounded-xl"
      />
    </div>
  );
};

export default MyDatePicker;
