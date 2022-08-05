import dayjs from "dayjs";

const FORMAT = "DD/MM/YYYY"
export function createDate() {
    return dayjs().format(FORMAT)
}