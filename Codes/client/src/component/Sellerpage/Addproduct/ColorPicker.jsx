import React, { useState } from 'react';
import { IconButton, Popover } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { SketchPicker } from 'react-color';

const ColorPicker = ({ onColorAdd }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [color, setColor] = useState('#000000');

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChangeComplete = (color) => {
    setColor(color.hex);
  };

  const handleAddColor = () => {
    onColorAdd(color);
    handleClose();
  };

  const open = Boolean(anchorEl);
  const id = open ? 'color-popover' : undefined;

  return (
    <>
      <IconButton onClick={handleClick} color="primary">
        <AddIcon />
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <SketchPicker
          color={color}
          onChangeComplete={handleChangeComplete}
        />
        <IconButton onClick={handleAddColor} color="primary">
          <AddIcon />
        </IconButton>
      </Popover>
    </>
  );
};

export default ColorPicker;

