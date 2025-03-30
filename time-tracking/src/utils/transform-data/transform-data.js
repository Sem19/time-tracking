import dayjs from "dayjs";

export const groupBy = (items, key) =>
  items.reduce(
    (result, item) => ({
      ...result,
      [dayjs(item[key]).format("YYYY-MM-DD")]: [
        ...(result[dayjs(item[key]).format("YYYY-MM-DD")] || []),
        item,
      ],
    }),
    {}
  );
