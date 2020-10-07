import React,{Component} from 'react';
import { Link, Redirect } from 'react-router-dom'
import Button from '@material-ui/core/Button';


class About extends Component
{
    constructor()
    {
        super();
        this.state={
            loginStatus:false
        }
    }
    changeLogin()
    {
        this.setState(
            {
            loginStatus:!this.state.loginStatus
            }
        )
       
    }
    render()
    {
        if(this.state.loginStatus)
        {
            return  <Redirect to="/signup">
           
       </Redirect> 
        }
        else
        {
        return(
            <div>
                <p>This is About us Page!!</p>
                <Button component={Link} to="/login" variant="outlined">
               Go to Login Page
                </Button>

                <Button onClick={this.changeLogin.bind(this)} variant="outlined">
               Change Login Status
                </Button>
            </div>
        )
        }
    }

}

export default About;