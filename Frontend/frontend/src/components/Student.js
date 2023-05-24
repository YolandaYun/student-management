import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@mui/material/Paper'
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),

    },
  },
}));

export default function Student() {
  const classes = useStyles();
  const [name, setName] = useState('null');
  const [address, setAddress] = useState('null');
  const [submitmsg, setSubmitmsg] = useState('');
  const handleChangeName = (event) => {
      setName(event.target.value);
  }
  const handleChangeAddr = (event) => {
      setAddress(event.target.value);
  }
  const handleChangeSubmitmsg = () => {
      setSubmitmsg("Success! Student saved.");
  }
  const handleClick = (event) => {
      event.preventDefault();
      const student={name,address};
      const requestOptions = {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body:JSON.stringify(student)
      };
      fetch('http://localhost:8080/student/add', requestOptions)
          .then(()=>{handleChangeSubmitmsg();});
  }

  return (
  <div>

            <h2 style={{color:"grey"}}><u>Add Student</u></h2>
            <div>
                <form className={classes.root} noValidate autoComplete="off">
                        <TextField id="outlined-basic" label="Name" variant="outlined" onChange={handleChangeName} />
                        <TextField id="filled-basic" label="Address" variant="filled"  onChange={handleChangeAddr}/>
                </form>
            </div>
            <div>
                <Button variant="contained" color="secondary" onClick={handleClick}>
                    Submit
                </Button>
            </div>



       <h3>Adding student</h3> <h2>{name}</h2> <h3>with address</h3> <h2>{address}</h2>
       <h1> {submitmsg} </h1>
   </div>
  );
}
