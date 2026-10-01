import { AppBar, Toolbar, Typography } from '@mui/material'
import AssistWalkerIcon from '@mui/icons-material/AssistWalker';

function Header({titulo, totalRegistros}){
    
    return(
        <AppBar position="static"  sx={{ mb:3}}>
            <Toolbar>
                <AssistWalkerIcon sx={{ mr:3}}/>
                <Typography variant="h3" sx={{flexGrow:1}} >
                    {`${titulo} - ${totalRegistros}`}
                </Typography>
            </Toolbar>
        </AppBar>
        
    );

}

export default Header;