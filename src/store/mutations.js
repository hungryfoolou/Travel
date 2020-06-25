export default {
  changeCityMutation (state, city) { // 第一个参数是state
    state.city = city
    try {
      localStorage.city = city
    } catch (e) {
      // TODO handle the exception
    }
  }
}
