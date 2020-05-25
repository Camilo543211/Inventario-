import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {Link} from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton color="inherit" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}> 
       <MenuIcon />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
          
        <MenuItem onClick={handleClose}><Link to ={"/"} >Menu</Link> </MenuItem>
        <MenuItem onClick={handleClose}> <Link  to ={"/zapatos"}>REGISTRO</Link></MenuItem>
       
      </Menu>
    </div>
  );
}
