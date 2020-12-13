import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { isEmpty } from 'ramda'
import moment from 'moment';
import { fetchDates } from '../../store/actions/dates'
import { Grid, Cell } from 'styled-css-grid'
import { Button } from '../styled/Lib'

const DAYS = (yy) => {
  const days = []
  let dateStart = moment(`01/01/${yy}`, "DD/MM/YYYY")
  let dateEnd = moment(`31/12/${yy}`, "DD/MM/YYYY")
  while ( dateStart <= dateEnd ){
    days.push(dateStart.toDate());
    dateStart = dateStart.clone().add(1, 'd')
  }
  return days
 }
class Heatmap extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    this.props.fetchDates()
  }

  handleClick= e => {
    const selectedItem = e.target.id
    console.log(selectedItem)
    // this.props.history.push(`${selectedItem}`)
  }

  render(){
    const { dateList } = this.props
    const days = DAYS(2016)
    debugger
    return(
      <Fragment>
        {!isEmpty(days) && (
          <Grid flow="column" rows={7} columns={53} gap="2px">
            {Object.values(days).map(key => <Cell center><Button submit /></Cell>)}
          </Grid>
        )}
        {!isEmpty(dateList) && (
          <Grid flow="column" rows={7} columns={53} gap="2px">
            {Object.values(dateList).map(key => <Cell center><Button cancel></Button></Cell>)}
          </Grid>
        )}
      </Fragment>
    ) 
  }
}

function mapStateToProps(state){
  return {
    dateList: state.dateList
  }
}

export default connect(mapStateToProps, { fetchDates }) (Heatmap)