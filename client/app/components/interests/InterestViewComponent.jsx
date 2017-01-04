import React from 'react'
import {connect} from 'react-redux';
import EntryComponent from './InterestEntryComponent.jsx'
import BackButton from '../backButton.jsx'

class InterestView extends React.Component {
  //todo
  //connect to store and navigate to profile when clicked
  
  render () {
    return (
      <div>
        <h1>view</h1>
          <EntryComponent id={this.props.params.id} context="navToProfile" />
        <BackButton />
      </div>
    )
  }
}

export default InterestView