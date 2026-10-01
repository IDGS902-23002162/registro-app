import { Box, Card, CardContent, Typography } from '@mui/material';

function Estadisticas({ registros }) {
    const total = registros.length;

    const sumaEdades = registros.reduce((suma, reg) => suma + Number(reg.edad), 0);
    const promedio = total > 0 ? (sumaEdades / total).toFixed(1) : 0;

    return (
        <Box sx={{ display: 'flex', gap: 3, my: 4 }}>
            
            <Card elevation={3} sx={{ minWidth: 200, textAlign: 'center' }}>
                <CardContent>
                    <Typography color="text.secondary" gutterBottom>
                        Total de Registros
                    </Typography>
                    <Typography variant="h4" color="primary">
                        {total}
                    </Typography>
                </CardContent>
            </Card>

            <Card elevation={3} sx={{ minWidth: 200, textAlign: 'center'}}>
                <CardContent>
                    <Typography color="text.secondary" gutterBottom>
                        Promedio de Edad
                    </Typography>
                    <Typography variant="h4" color="secondary">
                        {promedio}
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
}

export default Estadisticas;