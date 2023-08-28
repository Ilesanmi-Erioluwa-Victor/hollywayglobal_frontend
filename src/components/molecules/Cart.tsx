import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Cart = () => {
  function createData(
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number
  ) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];

  return (
    <div className='paddTop padd'>
      <TableContainer component={Paper}>
        <Table
          sx={{ minWidth: 650 }}
          aria-label='Your Cart Table'
        >
          <TableHead>
            <TableRow>
              <TableCell align='center'>Product</TableCell>
              <TableCell align='center'>Price</TableCell>
              <TableCell align='center'>Quantity</TableCell>
              <TableCell align='center'>Subtotal</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell align='center'>$650</TableCell>
              <TableCell align='center'>$650</TableCell>
              <TableCell align='center'>
                <div className='flex items-center'>
                  <button
                    className='  w-[30px]
  h-[30px]
  bg-[#ccc]
  
border-0
  cursor-pointer'
                  >
                    -
                  </button>
                  <input
                    type='number'
                    className='quantity-input'
                    value='1'
                    min='1'
                  />
                  <button className='quantity-btn increase'>+</button>
                </div>
              </TableCell>
              <TableCell align='center'>$650</TableCell>
            </TableRow>
            {/* {rows.map((row) => (
              <TableRow
                key={row.name}
                // sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell
                  component='th'
                  scope='row'
                > */}
            {/* {row.name}
                </TableCell>
                <TableCell>{$650}</TableCell>
                <TableCell>{$650}</TableCell>
                <TableCell>{$650}</TableCell> */}
            {/* </TableRow> */}
            {/* ))} */}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Cart;
