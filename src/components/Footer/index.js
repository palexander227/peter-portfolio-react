import React from 'react'
import styles from '../../../styles/Home.module.css'
import GitHubIcon from '@material-ui/icons/GitHub';
import { LinkedIn } from '@material-ui/icons';
import CreateIcon from '@material-ui/icons/Create';
import FunctionsIcon from '@material-ui/icons/Functions';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a href="https://github.com/palexander227"  target="_blank" rel="noreferrer">
        <GitHubIcon width="16"/>&nbsp;Github
      </a>
      <a href="https://www.linkedin.com/in/peter-alexander-4a444127"  target="_blank" rel="noreferrer">
        <LinkedIn width="16"/>&nbsp;LinkedIn
      </a>
      <a href="https://ctan.org/?lang=en"  target="_blank" rel="noreferrer">
        <CreateIcon width="16"/>&nbsp;CTAN
      </a>
      <a href="https://tug.org"  target="_blank" rel="noreferrer">
        <FunctionsIcon width="16"/>&nbsp;TUG
      </a>
    </footer>
  )
}

export default Footer
