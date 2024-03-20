import React, { Component } from 'react';
import MovieCard from './MovieCard.js';
import TvCard from './TvCard.js';
import PersonCard from './PersonCard.js';


class ShowSingleQuery extends Component {
	

	constructor(props) {
		super(props)
		this._data = this.props.details
		this._type = this.props.mediaType
		
	}

	// componentWillReceiveProps(nextProps) {
	// 	this.setState({
	// 		_data: nextProps.details,
	// 		_type: nextProps.mediaType,
	// 	})
	// }



	render() {
		return (
			<div className='p-que-container'>
				{this.props.mediaType === 'movie' 
					&& <MovieCard 
						details={this.props.details}
						subDeets={this.props.subDeets} 
						creditInfo={this.props.creditInfo}
						onCreditClick={this.props.onCreditClick}
						videos={this.props.videos}
					/>}
				{this.props.mediaType === 'tv' 
					&& <TvCard 
						details={this.props.details} 
						subDeets={this.props.subDeets} 
						creditInfo={this.props.creditInfo}
						onCreditClick={this.props.onCreditClick}
						videos={this.props.videos}
					/>
				}
				{this.props.mediaType === 'person' && <PersonCard details={this.props.details} />}
				<button className='btn btn-primary' onClick={this.props.onBtnClick} style={{margin: '20px auto', display: 'block'}} >
					Go Back
				</button>
			</div>
		);
	}
}


export default ShowSingleQuery;