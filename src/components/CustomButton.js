import DashboardIcon from '@mui/icons-material/Dashboard';
import {Chip, Stack, Typography, Box} from "@mui/material";

function CustomButton({name,num=0}){
    return <Stack spacing={1} alignItems="center" style={{margin:10}} direction="row">
            <DashboardIcon style={{width:50,height:50}} />
            <Typography variant="h6" >{name}</Typography>
            <Box style={{margin:5}}/>
            {num === 0 ? null : <Chip label="1" />}
          </Stack>
}
export default CustomButton;