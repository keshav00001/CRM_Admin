import React from "react";
import { DateRangePicker } from "rsuite";

export default function DateRange(props) {
  const { dateRange, setDateRange } = props;

  return (
    <DateRangePicker
      appearance="subtle"
      placeholder="Date Range"
      value={dateRange}
      onChange={setDateRange}
      placement="bottomEnd"
      style={{ background: "#f7f7f8", marginRight: "10px" }}
      className="date-range-btn"
    />
  );
}
