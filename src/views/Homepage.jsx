import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';

/* function createData(id, calories, fat, carbs, protein) {
  return { id, calories, fat, carbs, protein };
} */

/* const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
]; */

export default class Homepage extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      loading : 0,
      inspections: []
   
    }
  }

 /*  componentDidMount() {

    axios.post('http://localhost:5000/inspectionlist', {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(function (response) {
        //console.log(response);
        rows = response.data.data;
        this.setState({inspections: rows});
        console.log(rows);
      })
      .catch(function (error) {
        console.log(error);
      });

  } */
  componentDidMount() {
    axios.post(`http://localhost:5000/inspectionlist`)
      .then(res => {
        const persons = res.data.data;
        this.setState({ inspections : persons });
      })
  }
/*   componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const persons = res.data;
        this.setState({ inspections : persons });
      })
  } */

  render() {
    return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Id inspeccion</TableCell>
              <TableCell align="right">fecha</TableCell>
              <TableCell align="right">equipo</TableCell>
              <TableCell align="right">direccion</TableCell>
              <TableCell align="right">trabajo</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
         
         {console.log("imprimiendo rows")}
         {console.log(this.state.inspections)}
            {this.state.inspections.map((row) => (
              <TableRow
                key={row.id_inspeccion}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.id_inspeccion}
                </TableCell>
                <TableCell align="right">{row.fecha}</TableCell>
                <TableCell align="right">{row.equipo_trabajo}</TableCell>
                <TableCell align="right">{row.Direccion}</TableCell>
                <TableCell align="right">{row.trabajo_realizar}</TableCell>

              </TableRow>
            ))}
          </TableBody>
        </Table>


      </TableContainer>
    );

  };

}
