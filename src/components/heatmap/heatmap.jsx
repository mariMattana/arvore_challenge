import React, { Component } from 'react'
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';
import { connect } from 'react-redux'
import { isEmpty } from 'ramda'
import moment from 'moment';
import YearButton from './heatmapButton'
import { fetchDates } from '../../store/actions/dates'
import { handlers } from './handlers'
import { months, weekday, filteredYears, sum } from './helpers'
import { Content, Card, Title } from '../styled/Lib'
import './heatmap.css';

class Heatmap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      year: '2016',
    }
    this.handleChildToggle = this.handleChildToggle.bind(this);
  }

  componentDidMount() {
    this.props.fetchDates()
  }

  handleChildToggle(year) {
    this.setState({
      year: year
    })
  }

  render(){
    const { dateList } = this.props
    return(
      <Content>
        <Title>{sum(dateList, this.state.year)} contribuições em {this.state.year} </Title>
          {!isEmpty(dateList) && (
        <Card>
            <CalendarHeatmap
              startDate={moment(`01/01/${this.state.year}`, "DD/MM/YYYY")}
              endDate={moment(`31/12/${this.state.year}`, "DD/MM/YYYY")}
              values={ dateList }
              classForValue={ value => handlers.handleColor(value) }
              monthLabels={months}
              showWeekdayLabels
              weekdayLabels={weekday}
              gutterSize={3}
              titleForValue={ value => value ?
                `${value.count} contribuições em ${moment(value.date).format('DD/MM/YYYY')}`
                : 'Nenhuma contribuição'
              }
            />
        </Card>
            )}
        <div>
          {!isEmpty(dateList) && (
            filteredYears(dateList).map(y =>
              <YearButton
                year={y}
                handleChildToggle={this.handleChildToggle}
                selectedYear={this.state.year}
              />
            )
          )}
        </div>
      </Content>
    ) 
  }
}

function mapStateToProps(state){
  return {
    dateList: state.dateList
  }
}

export default connect(mapStateToProps, { fetchDates }) (Heatmap)
