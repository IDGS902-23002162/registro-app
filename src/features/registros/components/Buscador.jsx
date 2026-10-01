import { useState } from 'react';
import { TextField, Paper, Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

function Buscador({ registros }) {
    const [terminoBusqueda, setTerminoBusqueda] = useState('');

    const resultados = registros.filter((reg) => {
        const texto = terminoBusqueda.toLowerCase().trim();
        if (!texto) return false; 
        
        const coincideNombre = reg.nombre?.toLowerCase().includes(texto);
        const coincideEmail = reg.email?.toLowerCase().includes(texto);
        return coincideNombre || coincideEmail;
    });

    return (
        <Paper sx={{ p: 3, my: 4 }}>
            <TextField
                fullWidth
                label="Buscar por nombre o correo..."
                variant="outlined"
                value={terminoBusqueda}
                onChange={(e) => setTerminoBusqueda(e.target.value)}
                sx={{ mb: 3 }}
            />

            {terminoBusqueda.trim() !== '' && (
                <>
                    <Typography variant="subtitle1" gutterBottom>
                        Resultados de búsqueda ({resultados.length}):
                    </Typography>

                    <TableContainer component={Paper} variant="outlined">
                        <Table size="small">
                            <TableHead>
                                <TableRow>
                                    <TableCell>#</TableCell>
                                    <TableCell>Nombre</TableCell>
                                    <TableCell>Email</TableCell>
                                    <TableCell>Edad</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {resultados.length > 0 ? (
                                    resultados.map((item, index) => (
                                        <TableRow key={item.id}>
                                            <TableCell>{index + 1}</TableCell>
                                            <TableCell>{item.nombre}</TableCell>
                                            <TableCell>{item.email}</TableCell>
                                            <TableCell>{item.edad}</TableCell>
                                        </TableRow>
                                    ))
                                ) : (
                                    <TableRow>
                                        <TableCell colSpan={4} align="center">
                                            No se encontraron coincidencias
                                        </TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </>
            )}
        </Paper>
    );
}

export default Buscador;