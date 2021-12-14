import React from 'react';
import { Link, useParams } from 'react-router-dom';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import * as classes from './detail.styles';

interface MemberDetailEntity {
  id: string;
  login: string;
  avatar_url: string;
  name: string;
  company: string;
  bio: string;
  location: string;
}

const createDefaultMemberDetail = () => ({
  id: '',
  login: '',
  avatar_url: '',
  name: '',
  company: '',
  bio: '',
  location: '',
});

export const DetailPage: React.FC = () => {
  const [member, setMember] = React.useState<MemberDetailEntity>(
    createDefaultMemberDetail()
  );
  const { id } = useParams();

  React.useEffect(() => {
    fetch(`https://api.github.com/users/${id}`)
      .then((response) => response.json())
      .then((member) => setMember(member));
  }, []);

  return (
    <>
      <Card className={classes.root}>
        <CardActionArea href={`https://github.com/${member.login}`}>
          {member.avatar_url && (
            <CardMedia className={classes.media} image={member.avatar_url} />
          )}
          <CardContent>
            <Typography gutterBottom variant='h5' component='h2'>
              {member.name ? member.name : member.login}
            </Typography>
            <Typography variant='h6' color='textSecondary'>
              {member.company}
            </Typography>
            <Typography variant='body2' color='textSecondary'>
              {member.location}
            </Typography>
            <Typography variant='body2' color='textSecondary' component='p'>
              {member.bio}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Link to='/list'>
            <Button size='small' color='primary'>
              Back to list page
            </Button>
          </Link>
        </CardActions>
      </Card>
    </>
  );
};
