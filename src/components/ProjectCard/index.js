import React from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import styles from './ProjectCard.module.css';


const ProjectCard = ({ title, summary, repos, visitSite, image }) => {
  const openUrl = (url) => {
    window.open(url, '_blank');
  };
  return (
    <Card className={styles.card}>
      <CardActionArea
        onClick={() => visitSite && openUrl(visitSite)}
      >
        <CardMedia
          className={styles.media}
          image={image}
          title={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {summary}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      {visitSite && <Button size="small" color="primary"  onClick={() => openUrl(visitSite)}>
          Visit Site
        </Button>}
        {repos && repos.map((repo, index) => (
           <Button key={index} size="small" color="primary" onClick={() => openUrl(repo.link)}>
            {repo.name}
          </Button>
        ))}
      </CardActions>
    </Card>
  )
}

export default ProjectCard
