import React from 'react';
import { Chef } from '../../entities/Chef';
import { Card, CardContent, Typography, makeStyles, CardMedia } from '@material-ui/core';
import { pathToAssets } from '../../utils/Constants';

interface ChefCardProps {
  data: Chef,
  isSelected?: boolean,
  onClick?: () => void,
  size?: ChefCardSizes
};

enum ChefCardSizes {
  sm = 'sm', m = 'm', lg = 'lg'
}

const useStyles = makeStyles({
  rootDefault: {
    
  },
  rootSelected: {
    borderStyle: 'solid',
    borderWidth: '4px',
    borderColor: 'gray'
  },
  media: {
    'object-fit': 'contain'
  }
});

const getHeight = (size?: ChefCardSizes) => {
  switch (size) {
    case ChefCardSizes.lg: return 512;
    case ChefCardSizes.sm: return 128;
    default: return 256
  }
}

export const ChefCard = (props: ChefCardProps) => {
  const { data, isSelected, onClick, size } = props;
  const classes = useStyles();

  return (
    <Card className={isSelected ? classes.rootSelected : classes.rootDefault} onClick={onClick}>
      <CardContent>
        <CardMedia
          component='img'
          className={classes.media}
          image={`${pathToAssets}${data.imagePath}`}
          height={getHeight(size)}
        />
      </CardContent>
    </Card>
  )
};