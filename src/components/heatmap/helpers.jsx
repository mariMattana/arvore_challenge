import moment from 'moment';

export const months = [
  "JAN",
  "FEV",
  "MAR",
  "ABR",
  "MAI",
  "JUN",
  "JUL",
  "AGO",
  "SET",
  "OUT",
  "NOV",
  "DEZ"
]

export const weekday = [
  "Dom",
  "Seg",
  "Ter",
  "Qua",
  "Qui",
  "Sex",
  "Sáb"
]

export const filteredYears = dateList => {
  return [...new Set(dateList.map(
    m => m.date).map(m => moment(m)
      .format('YYYY'))
      .sort()
      .reverse()
  )]
}

export const sum = ( dateList, year ) => { 
  return (
    dateList.filter(m => 
      moment(m.date).format('YYYY') === year).map(m => 
        m.count).reduce((a, b) => a + b, 0) )
}
