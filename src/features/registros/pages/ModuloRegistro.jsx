import { Container } from '@mui/material'
import { useState } from 'react'
import Box from '@mui/material/Box'
import FormularioRegistro from '../components/FormularioRegistro'
import Header from '../../../shared/components/Header'
import Footer from '../../../shared/components/Footer'
import TablaRegistro from '../components/TablaRegistro' 
import Buscador from '../components/Buscador'
import Estadisticas from '../components/Estadisticas'

function ModuloRegistro(){
    const [registros, setRegistros] = useState([])
    
    const agregarRegistro = (nuevoRegistro) => {
        setRegistros ((registrosPrevios) => [...registrosPrevios, nuevoRegistro])
    }

    const eliminarRegistro = (idAEliminar) => {
        setRegistros((registrosPrevios) => 
            registrosPrevios.filter((registro) => registro.id !== idAEliminar)
        )
    }

    return(
        <>
            <Header titulo="Modulo de Invalidos" totalRegistros={registros.length} />
            <Container>
                <FormularioRegistro onAgregar={agregarRegistro}/>
                <TablaRegistro registros={registros} onEliminar={eliminarRegistro}/>
                <Estadisticas registros={registros}/>
                <Buscador registros={registros} />
                
            </Container>
            
            <Footer/>
        </>
    );
}

export default ModuloRegistro;