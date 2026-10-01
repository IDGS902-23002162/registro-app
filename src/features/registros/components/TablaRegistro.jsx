//Este componente solo recibe datos por PROPS (Variables inmutables solo para mostrar)
import { IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Paper } from "@mui/material";
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
// Y una funcion onEliminar 
function TablaRegistro({registros, onEliminar}){
    //Usamos for each para mostrar los datos
    const filas = [];
    registros.forEach((registro, indice) => {

        filas.push(
            <TableRow key= {registro.id}>
                <TableCell>{indice + 1}</TableCell>
                <TableCell>{registro.nombre}</TableCell>
                <TableCell>{registro.email}</TableCell>
                <TableCell>{registro.edad}</TableCell>
                <TableCell>
                    <IconButton size="medium" color="error" onClick={()=> onEliminar(registro.id)}> 
                        <PersonRemoveIcon/> 
                    </IconButton>
                </TableCell>
            </TableRow>
        )
    });

    return(
        <TableContainer component={Paper} elevation={2}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell> #</TableCell>
                        <TableCell> Nombre</TableCell>
                        <TableCell> Email</TableCell>
                        <TableCell> Edad</TableCell>
                        <TableCell> Eliminar</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    { filas.length > 0 ? 
                        (filas)
                        :
                        (
                            <TableRow>
                                <TableCell colSpan={5} align="center">
                                    <Typography>Aun no hay Invalidos</Typography>
                                </TableCell>
                            </TableRow>
                        )
                    } 
                </TableBody>
            </Table>

        </TableContainer>

    );
}

export default TablaRegistro;