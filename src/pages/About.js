import React,{Component} from 'react';
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';


class About extends Component
{
    render()
    {
        return(
            <div>
                <p>This is About us Page!!</p>
                <Button component={Link} to="/login" variant="outlined">
               Go to Login Page
                </Button>
            </div>
        )
    }

}

export default About;