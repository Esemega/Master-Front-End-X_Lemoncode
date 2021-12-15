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

interface CharacterDetailEntity {
  id: string;
  name: string;
  image: string;
  species: string;
  origin: { name: string };
  status: string;
}

const createDefaultCharacterDetail = () => ({
  id: '',
  name: '',
  image: '',
  species: '',
  origin: { name: '' },
  status: '',
});

export const CharacterDetailPage: React.FC = () => {
  const [character, setCharacter] = React.useState<CharacterDetailEntity>(
    createDefaultCharacterDetail()
  );
  const { id } = useParams();

  React.useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((character) => setCharacter(character));
  }, []);

  return (
    <>
      <Card className={classes.root}>
        <CardActionArea
          href={`https://rickandmortyapi.com/api/character/${character.id}`}
        >
          {character.image && (
            <CardMedia className={classes.media} image={character.image} />
          )}
          <CardContent>
            <Typography gutterBottom variant='h5' component='h2'>
              {character.name}
            </Typography>
            <Typography variant='h6' color='textSecondary'>
              {character.origin.name}
            </Typography>
            <Typography variant='body2' color='textSecondary'>
              {character.status}
            </Typography>
            <Typography variant='body2' color='textSecondary' component='p'>
              {character.species}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Link to='/characters'>
            <Button size='small' color='primary'>
              Back to list page
            </Button>
          </Link>
        </CardActions>
      </Card>
    </>
  );
};
