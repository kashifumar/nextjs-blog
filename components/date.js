import { parseISO, format } from "date-fns";

// https://date-fns.org/v2.16.1/docs/format
export default function Date({ dateString }) {
  const date = parseISO(dateString);
  return (
    <time dateTime={dateString}>{format(date, "LLLL d, yyyy")}</time>
  );
}