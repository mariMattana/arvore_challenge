import React from 'react'
import { Button } from '../../styled/Lib'

class YearButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      year: '',
    };

    this.handleYearUpdate = this.handleYearUpdate.bind(this);
  }

  handleYearUpdate(value){
    this.setState({
      year: value,
    });
    this.props.handleChildToggle(value)
  }

  render() {
    const y = this.props.year
    const selected = this.props.selectedYear === this.props.year
    return (
      <Button
        selected={ selected }
        onClick={() => this.handleYearUpdate(y)}>{y}
      </Button>
    );
  }
}

export default YearButton