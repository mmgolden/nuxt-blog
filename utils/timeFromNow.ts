import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

export const timeFromNow = (date: string | Date) => {
  return dayjs(date).fromNow(true);
};
