import React from 'react';

class Form extends React.Component {

    handleChange(event){
        this.props.handleChange(event);
    }
    handleSubmit(event){
        this.props.handleSubmit(event);
    }
    render() {
        return (
          <div className="Write-New-Note">
            <form onSubmit={this.props.handleSubmit}>
                <label>Title:
                  <input
                    name="currentTitle"
                    type="text"
                    value={this.props.currentTitle}
                    onChange={this.props.handleChange} 
                  />
                </label>
                <textarea
									name="currentDetails"
									value={this.props.currentDetails}
									onChange={this.props.handleChange}
                />
								<div className="btn btn-submit">
									<input
										type="submit"
										value="Add note"
									/>
								</div>
            </form>
          </div>
        )
    }
}
export default Form;