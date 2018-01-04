import React from 'react';

const Single = (props) => {
  return(
    <div>
			<div className="col s12 m4">
				<div className="card darken-1">
					<div className="card-content">
						<span className="card-title">{props.note.title}</span>
						<p>{props.note.details}</p>
					</div>
					<div className="card-action">
						<a onClick={() => props.deleteNote(props.note.id)}>Delete</a>
					</div>
				</div>
			</div>
    </div>
  )
}	
export default Single;