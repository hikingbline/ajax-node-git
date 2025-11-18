const dayjs = require("dayjs");
const nowDateStr = dayjs().format("YYYY-MM-DD");
console.log(nowDateStr);

const _ = require("lodash");
console.log(_.max([1, 2, 67, 3, 46, 5333]));
