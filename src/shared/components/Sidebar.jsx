import { Drawer, Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography, Divider } from '@mui/material';
import PeopleIcon from '@mui/icons-material/People';
import ConstructionIcon from '@mui/icons-material/Construction';

function Sidebar({ abierto, alCerrar, cambiarVista }) {
    return (
        <Drawer anchor="left" open={abierto} onClose={alCerrar}>
            <Box sx={{ width: 250 }} role="presentation">
                <Typography variant="h6" sx={{ p: 2, fontWeight: 'bold', color: 'primary.main' }}>
                    Menú Principal
                </Typography>
                <Divider />
                <List>
                    <ListItem disablePadding>
                        <ListItemButton onClick={() => {
                            cambiarVista('registro');
                            alCerrar(); // Cierra el menú al seleccionar
                        }}>
                            <ListItemIcon>
                                <PeopleIcon color="primary" />
                            </ListItemIcon>
                            <ListItemText primary="Módulo Inválidos" />
                        </ListItemButton>
                    </ListItem>
                    
                    <ListItem disablePadding>
                        <ListItemButton onClick={() => {
                            cambiarVista('futuro');
                            alCerrar();
                        }}>
                            <ListItemIcon>
                                <ConstructionIcon color="action" />
                            </ListItemIcon>
                            <ListItemText primary="Próximo Módulo" />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Box>
        </Drawer>
    );
}

export default Sidebar;