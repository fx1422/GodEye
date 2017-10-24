const utils = {
  fill0: (num) => {
    return num < 10 ? '0' + num : '' + num
  },
  handleTime: (timestamps) => {
    const timestamp = Date.parse(timestamps);
    const oDate = new Date();
    oDate.setTime(timestamp);
    return oDate.getFullYear() + '-' + utils.fill0(oDate.getMonth() + 1) + '-' + utils.fill0(oDate.getDate()) + ' ' + utils.fill0(oDate.getHours()) + ':' + utils.fill0(oDate.getMinutes())
      + ':' + utils.fill0(oDate.getSeconds())
  },
  checkedMobile: (tel) => {
    // language=JSRegexp
    const pattern = /^[1][3,4,5,7,8][0-9]{9}$/;
    return pattern.test(tel);
  },
  setCookie: (name, value) => {
    const Days = 30;
    const exp = new Date();
    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
  },
  getCookie: (name) => {
    let arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg))
      return unescape(arr[2]);
    else
      return null;
  },
  delCookie: (name) => {
    const exp = new Date();
    exp.setTime(exp.getTime() - 1);
    const cval = utils.getCookie(name);
    if (cval !== null)
      document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
  }


};
export default utils

