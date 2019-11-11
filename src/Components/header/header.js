import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HomeOutlined from '@material-ui/icons/HomeOutlined';
import HelpOutlineOutlined from '@material-ui/icons/HelpOutlineOutlined';
import './header.css';
import { Modal } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}));

const Header = () => {
  const classes = useStyles();
  const [questionModalOpen, setModalOpen] = useState(false);
  return (
    <>
      <header>
        <nav>
          <ul style={{ textAlign: 'center' }}>
            <li
              style={{
                display: 'flex',
                justifyContent: 'start'
              }}
            >
              <Link
                to="/"
                style={{
                  marginRight: '30px'
                }}
              >
                <HomeOutlined fontSize="large" color="primary" />
              </Link>
              <HelpOutlineOutlined
                fontSize="large"
                color="primary"
                style={{
                  cursor: 'pointer'
                }}
                onClick={() => setModalOpen(true)}
              />
            </li>
          </ul>
        </nav>
      </header>
      <Modal
        open={questionModalOpen}
        onClose={() => setModalOpen(false)}
        className={classes.modal}
      >
        <div className={classes.paper}>
          <h2 id="simple-modal-title">What is this?</h2>
          <p id="simple-modal-description">
            In this page you can see all countries I have been to marked with
            different colors.
            <br />
            <br />
            Click on one of the countries to see pictures from there.
          </p>
        </div>
      </Modal>
    </>
  );
};

export default Header;
