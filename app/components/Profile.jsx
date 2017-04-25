import React from 'react';

export default class Profile extends React.Component {
    render() {
        console.log(this.props);
        var hobbies = this.props.hobbies.map( hobby => {
            return <li>{hobby}</li>;
        });
        return (
            <div>
                <h3>{this.props.name}</h3>
                <p>{this.props.age}</p>
                <h3>{this.props.bio}</h3>
                <ul>{hobbies}</ul>
            </div>
        );
    }
}