import React from 'react';
import Profile from './Profile.jsx';
import AddProfile from './AddProfile.jsx';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            profiles : [
                {
                    name : 'David',
                    age : 30,
                    bio : 'enjoys swiming and biking',
                    hobbies : ['swiming','biking']
                },
                {
                    name : 'Sarah',
                    age : 28,
                    bio : 'enjoys cooking and yoga',
                    hobbies : ['cooking','yoga']
                },
                {
                    name : 'Sandra',
                    age : 50,
                    bio : 'enjoys sleeping and traveling',
                    hobbies : ['construction','design']
                }
            ]            
        }
        this.addUser = this.addUser.bind(this);
    }
    addUser(e) {
        var user = {
                    name : 'Yiya',
                    age : 21,
                    bio : 'enjoys policts and traveling',
                    hobbies : ['handcraft','painting']
                };
       this.setState({
           profiles : this.state.profiles.concat([user])
       }); 
    }
    render() {
        console.log(this.state);
        var profiles = this.state.profiles.map( profile => {
            return <Profile 
                        name={profile.name}
                        age = {profile.age}
                        bio = {profile.bio}
                        hobbies = {profile.hobbies}
                   />;
        });
        return (
            <section>
                {profiles}
                <AddProfile addUser={this.addUser}/>
            </section>

        );
    }   
}