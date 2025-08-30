import { useEffect, useRef } from "react";

export default function DateRangePicker() {
  const inputRef = useRef(null);

  useEffect(() => {
    if (!window.$ || !window.$.fn.daterangepicker) {
      console.error("jQuery বা daterangepicker ঠিকমতো লোড হয়নি");
      return;
    }

    window.$(inputRef.current).daterangepicker(
      {
        forceUpdate: true,
        opens: "left",
      },
      function (startDate, endDate) {
        const start_date = startDate.format("L");
        const end_date = endDate.format("L");
        const title = `${start_date} – ${end_date}`;
        window.$(inputRef.current).val(title);
        alert(start_date);
      }
    );
  }, []);

  return <input type="text" ref={inputRef} className="daterangepicker-field" />;
}
