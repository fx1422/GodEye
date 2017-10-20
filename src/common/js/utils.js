const utils = {
  fill0: (num) => {
    return num < 10 ? '0' + num : '' + num
  },
  handleTime: (timestamps) => {
    const timestamp = Date.parse(timestamps)
    const oDate = new Date();
    oDate.setTime(timestamp);
    return oDate.getFullYear() + '-' + utils.fill0(oDate.getMonth() + 1) + '-' + utils.fill0(oDate.getDate()) + ' ' + utils.fill0(oDate.getHours()) + ':' + utils.fill0(oDate.getMinutes())
      + ':' + utils.fill0(oDate.getSeconds())
  }
};
export default utils

