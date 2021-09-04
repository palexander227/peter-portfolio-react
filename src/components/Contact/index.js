import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import styles from './Contact.module.css';
import MailIcon from '@material-ui/icons/Mail';
import PhoneIcon from '@material-ui/icons/Phone';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';


const Contact = () => {
    const email = 'renormalize@gmail.com';
    const handleEmail = () => {
        window.open(`mailto:${email}`);
    }
    return (
        <Card className={styles.container}>
            <div className={styles.details}>
                <CardContent className={styles.content}>
                    <Typography component="h5" variant="h5">
                        Peter Alexander
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        CIO / Former Director of Education at BEEC Inc
                    </Typography>
                </CardContent>
                <List component="nav" aria-label="main mailbox folders">
                    <ListItem button onClick={handleEmail}>
                        <ListItemIcon>
                            <MailIcon />
                        </ListItemIcon>
                        <ListItemText primary={email} />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <PhoneIcon />
                        </ListItemIcon>
                        <ListItemText primary="(510) 708-2149" />
                    </ListItem>
                </List>
            </div>
            <CardMedia
                className={styles.image}
                image={'https://portfolio-react-2021.s3.us-west-1.amazonaws.com/images/peter.jpg'}
                title="Peter Alexander"
            />
        </Card>
    )
}

export default Contact
