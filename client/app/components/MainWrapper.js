import React from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'
import Navbar from './Navbar'

//React.cloneElement will clone/propogate props down through the children elements
const Main = React.createClass({

	render() {
		return (
			<div>
				<h1>
					<Link to="/">Alike.me</Link>
				</h1>
				<Navbar user={this.props.user} dispatch={this.props.dispatch}/>
				{React.cloneElement(this.props.children, this.props)}
			</div>
		)
	}
})


function mapStatetoProps (state) {
	console.log('STORE STATE', state)
	return {
		user: state.user,
		isAuthenticated: state.user.isAuthenticated,
		posts: state.userPosts,	
		preferences: state.preferences
	}
}

//init Redux store to React main
const MainWrapper = connect(mapStatetoProps)(Main);

export default MainWrapper;