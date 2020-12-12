import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { isEmpty } from 'ramda'
import { fetchDates } from '../../store/actions/dates'
import { Button } from '../styled/Lib'

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
    debugger
    return(
      <Fragment>
        <Button submit/>
        <div>
          {!isEmpty(dateList) && (
              <ul>
                {Object.values(dateList).map(key => <li ><Button submit> {Object.keys(key)} </Button>
                </li>)}
            </ul>
          )}
        </div>
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