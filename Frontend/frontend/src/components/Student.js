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
  // useState var and functions
  const [name, setName] = useState('null');
  const [address, setAddress] = useState('null');
  const [students, setStudents] = useState([]);
  // list of students
  const listItems = students.map((ele) =>
      <Paper elevation={6} style={{margin:"10px",padding:"15px", textAlign:"left"}} key={ele.id}>
               Id:{ele.id}<br/>
               Name:{ele.name}<br/>
               Address:{ele.address}
      </Paper>
   );
  // mui style
  const paperStyle={padding:'50px 20px', width:600,margin:"20px auto"};

  const handleChangeName = (event) => {
      setName(event.target.value);
  }

  const handleChangeAddr = (event) => {
      setAddress(event.target.value);
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
          .then();
  }

  useEffect(() => {
      console.log("use Effect");
      fetch('http://localhost:8080/student/getAll')
          .then(res => res.json())
          .then(data => {
               setStudents(data);
          });
  });

  return (
  <div>
       <Paper elevation={3} style={paperStyle}>
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
       </Paper>

       <Paper elevation={3} style={paperStyle}>
            <div>
                {listItems}
            </div>
       </Paper>

   </div>
  );
}
