import { useState } from 'react'
import heroImg from '../assets/hero.png'
import reactLogo from '../assets/react.svg'
import viteLogo from '../assets/vite.svg'
import '../styles/App.css'
import { IconButton, Box, Typography } from '@mui/material';
import AssistWalkerIcon from '@mui/icons-material/AssistWalker';
import ModuloRegistro from '../features/registros/pages/ModuloRegistro'
import Sidebar from '../shared/components/Sidebar';

//Esto es para renderizar el componente principal
function App() {

  const [menuAbierto, setMenuAbierto] = useState(false);
  const [vistaActual, setVistaActual] = useState('registro');
  
  return (
    <Box>
      <IconButton 
        onClick={() => setMenuAbierto(true)} 
        sx={{ 
            position: 'absolute', 
            top: 15, 
            left: 15, 
            zIndex: 1200, 
            color: 'white'
        }}
      >
        <AssistWalkerIcon/>
      </IconButton>

      <Sidebar 
        abierto={menuAbierto} 
        alCerrar={() => setMenuAbierto(false)} 
        cambiarVista={setVistaActual} 
      />

      {vistaActual === 'registro' && <ModuloRegistro />}
      
      {vistaActual === 'futuro' && (
        <Box sx={{ mt: 10, textAlign: 'center' }}>
            <Typography variant="h4" color="text.secondary">
                En construcción... 🚧
            </Typography>
        </Box>
      )}
    </Box>
  );
}

export default App
