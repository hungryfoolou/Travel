let defaultCity = '重庆' // 如果不能存在localStorage.city,就赋值为'重庆'
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {
  // TODO handle the exception
}

export default {
  city: defaultCity
}
