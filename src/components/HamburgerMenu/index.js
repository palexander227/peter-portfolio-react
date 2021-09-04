import React from 'react'
import styles from './HamburgerMenu.module.css';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import Link from 'next/link';

/*
    The following warning shows up because the material-ui team hasn't kept up with React devs. The material ui team is working on a fix. 
    Warning: findDOMNode is deprecated in StrictMode.
    https://stackoverflow.com/questions/61220424/material-ui-drawer-finddomnode-is-deprecated-in-strictmode

    And className did not match bug:
    https://github.com/vercel/next.js/issues/7322
*/

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex'
  },
  paper: {
    marginRight: theme.spacing(2),
  },
  burger: {
    color: 'white!important'
  }
}));

const HamburgerMenu = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);
  return (
    <div className={classes.root}>
      <div>
        <Button
          ref={anchorRef}
          aria-controls={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >

          <div className={classes.burger}>
            <MenuIcon />
          </div>
        </Button>
        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                    <MenuItem onClick={handleClose}><Link href="/">Home</Link></MenuItem>
                    <MenuItem onClick={handleClose}><Link href="/about">About</Link></MenuItem>
                    <MenuItem onClick={handleClose}><Link href="/projects">Projects</Link></MenuItem>
                    <MenuItem onClick={handleClose}><Link href="/contact">Contact</Link></MenuItem>
                    <MenuItem onClick={handleClose}>
                      <Link href="https://portfolio-react-2021.s3.us-west-1.amazonaws.com/pdfs/Peter_s_Resume.pdf">
                        <a target="_blank">Resume</a></Link>
                    </MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </div>
  )
}

export default HamburgerMenu
