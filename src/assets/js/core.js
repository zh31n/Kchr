/* import components */
require('../../components/Plugins/Toast/Toast')
require('../../components/Plugins/Moment/Moment')
require('../../components/Plugins/Multiselect/Multiselect')
require('../../components/Plugins/Alert/Alert')
require('../../components/Plugins/Datepicker/Datepicker')

export function disabledDate (date) {
  const today = new Date().setHours(0, 0, 0, 0)
  return date < new Date(today)
}

export function quotasFormatted (data) {
  let newArr = []
  data.forEach((val) => {
    newArr.push({title: val.title, intervals: JSON.parse(val.intervals)['intervals']})
  })

  return newArr
}

export function isNumber (evt) {
  evt = (evt) || window.event
  const charCode = (evt.which) ? evt.which : evt.keyCode
  console.log(charCode)
  if ((charCode > 31 && (charCode < 48 || charCode > 57))) {
    evt.preventDefault()
  } else {
    return true
  }
}
