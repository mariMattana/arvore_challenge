import { apiCall } from '../../services/api'
import { LOAD_DATES } from '../acionTypes'

export const loadDates = (dateList) => ({
  type: LOAD_DATES,
  dateList
})

export const fetchDates = () => {
  return dispatch => {
    return apiCall('/data/dates.json')
      .then((res) => {
        dispatch(loadDates(res.data))})
      .catch(function(err){
        return console.log(err) }
      )
  }
}