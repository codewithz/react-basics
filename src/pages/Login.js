import { TextField,Button, 
    Dialog, DialogTitle, DialogContent,
    DialogContentText, DialogActions } from '@material-ui/core';
import React,{Component} from 'react';

class Login extends Component
{

    constructor()
    {
        super();
        this.state={
            open:false
        }
        this.toggleOpenState=this.toggleOpenState.bind(this);
    }

    toggleOpenState()
    {
        this.setState(
            {
                open:!this.state.open
            }
        );
    }
 
    render()
    {
        return(

            <div className='App'>
                <header className='Login-header'>
                <div className='Login'>
                    <TextField 
                    variant='outlined'
                    label='Username'
                    margin='normal'
                    required
                    />

                    <TextField 
                    variant='outlined'
                    label='Password'
                    margin='normal'
                    type='password'
                    required
                    />

                    <div className='Button'>
                    <Button 
                    variant="contained"
                     color="secondary" onClick={this.toggleOpenState}>
                     Login
                    </Button>
                    </div>
                </div>

                <Dialog open={this.state.open}>

                    <DialogTitle>Alert</DialogTitle>
                    
                    <DialogContent>

                        <DialogContentText>
                            Do you want to close? 
                        </DialogContentText>
                    
                    </DialogContent>

                    <DialogActions>
                    <Button 
                    variant="contained"
                     color="primary" onClick={this.toggleOpenState}>
                     Close This
                    </Button>
                        
                    </DialogActions>
                </Dialog>

                </header>
            </div>

        );
    }

}

export default Login;