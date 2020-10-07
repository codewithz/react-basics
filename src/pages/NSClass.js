import React,{Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
//import { withStyles } from 'material-ui/styles';


export default class NSClass extends Component
{

    constructor()
    {
        super();
      //  const classes=this.useStyles;
        this.state={
            age:'aa',
            name:''
        }
        this.handleChange=this.handleChange.bind(this);
       /// this.useStyles=this.useStyles.bind(this);
    }

  

    handleChange = (event) => {
        const name = event.target.name;
        this.setState({
          age:'aa',
          name: event.target.value,
        });
      };
    
    render()
    {
       
     
    
  

  return (
    
    <div>
      <FormControl>
        <InputLabel htmlFor="age-native-simple">Age</InputLabel>
        <Select
          native
          value={this.state.age}
         // onChange={this.handleChange.bind(this)}
          inputProps={{
            name: 'age',
            id: 'age-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </Select>
      </FormControl>
      <FormControl //className={this.classes.formControl}
      >
        <InputLabel htmlFor="age-native-helper">Age</InputLabel>
        <NativeSelect
          value={this.state.age}
        onChange={this.handleChange}
         
        >
          <option aria-label="None" value="" />
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </NativeSelect>
        <FormHelperText>Some important helper text</FormHelperText>
      </FormControl>
      <FormControl //className={this.classes.formControl}
      >
        <NativeSelect
          value={this.state.age}
          onChange={this.handleChange}
          name="age"
         // className={this.classes.selectEmpty}
        
        >
          <option value="">None</option>
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </NativeSelect>
        <FormHelperText>With visually hidden label</FormHelperText>
      </FormControl>
      <FormControl //className={this.classes.formControl}
      >
        <InputLabel shrink htmlFor="age-native-label-placeholder">
          Age
        </InputLabel>
        <NativeSelect
          value={this.state.age}
          onChange={this.handleChange}
         
        >
          <option value="">None</option>
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </NativeSelect>
        <FormHelperText>Label + placeholder</FormHelperText>
      </FormControl>
      <FormControl //className={this.classes.formControl} disabled
      >
        <InputLabel htmlFor="name-native-disabled">Name</InputLabel>
        <NativeSelect
          value={this.state.name}
          onChange={this.handleChange}
         
        >
          <option value="">None</option>
          <optgroup label="Author">
            <option value="hai">Hai</option>
          </optgroup>
          <optgroup label="Contributors">
            <option value="olivier">Olivier</option>
            <option value="kevin">Kevin</option>
          </optgroup>
        </NativeSelect>
        <FormHelperText>Disabled</FormHelperText>
      </FormControl>
      <FormControl //className={this.classes.formControl} error
      >
        <InputLabel htmlFor="name-native-error">Name</InputLabel>
        <NativeSelect
          value={this.state.name}
          onChange={this.handleChange}
          name="name"
        
        >
          <optgroup label="Author">
            <option value="hai">Hai</option>
          </optgroup>
          <optgroup label="Contributors">
            <option value="olivier">Olivier</option>
            <option value="kevin">Kevin</option>
          </optgroup>
        </NativeSelect>
        <FormHelperText>Error</FormHelperText>
      </FormControl>
      <FormControl //className={this.classes.formControl}
      >
        <InputLabel htmlFor="uncontrolled-native">Name</InputLabel>
        <NativeSelect
          defaultValue={30}
       
        >
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </NativeSelect>
        <FormHelperText>Uncontrolled</FormHelperText>
      </FormControl>
      <FormControl //className={this.classes.formControl}
      >
        <NativeSelect
          //className={this.classes.selectEmpty}
          value={this.state.age}
          name="age"
          onChange={this.handleChange}
         
        >
          <option value="" disabled>
            Placeholder
          </option>
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </NativeSelect>
        <FormHelperText>Placeholder</FormHelperText>
      </FormControl>
      <FormControl required //className={this.classes.formControl}
      >
        <InputLabel htmlFor="age-native-required">Age</InputLabel>
        <Select
          native
          value={this.state.age}
          onChange={this.handleChange}
          name="age"
          
        >
          <option aria-label="None" value="" />
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </Select>
        <FormHelperText>Required</FormHelperText>
      </FormControl>
      <FormControl variant="outlined" //className={this.classes.formControl}
      >
        <InputLabel htmlFor="outlined-age-native-simple">Age</InputLabel>
        <Select
          native
          value={this.state.age}
          onChange={this.handleChange}
          label="Age"
        
        >
          <option aria-label="None" value="" />
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </Select>
      </FormControl>
      <FormControl variant="filled" //className={this.classes.formControl}
      >
        <InputLabel htmlFor="filled-age-native-simple">Age</InputLabel>
        <Select
          native
          value={this.state.age}
          onChange={this.handleChange}
         
        >
          <option aria-label="None" value="" />
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </Select>
      </FormControl>
    </div>
  );
        }
}
