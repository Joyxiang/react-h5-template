const wx = {
  isWeixin: () => {
    return /micromessenger/i.test(navigator.userAgent)
  }
}
export default wx
