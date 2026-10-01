import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';

function Footer(){
    //Aqui puede ir codigo simple o de negocio
    const anioActual = new Date().getFullYear()
    
    return(
        <Box component="footer" sx= {{ mt:4, py:2, textAlign: 'center', borderTop: '1px solid #f0b914' }}>
            <Typography variant ='body2' color='text.secondary'> 
                {` Modulo de registros que se creo el ${anioActual}`}
            </Typography>

        </Box>


    );
}

export default Footer;