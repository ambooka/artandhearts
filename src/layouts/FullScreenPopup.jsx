import React from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-extraneous-dependencies
import ReactHtmlParser from 'react-html-parser';

import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import DialogContent from '@mui/material/DialogContent';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function FullScreenPopup({ open, onClose, richText, title }) {
  return (
    <Dialog fullScreen open={open} onClose={onClose}>
      <AppBar position="static" className="toolbar" color="inherit">
        <Toolbar className="toolbar">
          <IconButton edge="start" color="inherit" onClick={onClose} aria-label="close">
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h6" style={{ marginLeft: 16 }}>
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
      <DialogContent className="centered-content">{ReactHtmlParser(richText)}</DialogContent>
    </Dialog>
  );
}

FullScreenPopup.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  richText: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default FullScreenPopup;
