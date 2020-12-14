import React from 'react';
import { Chef } from '../entities/Chef';
import { Card, CardContent, Typography } from '@material-ui/core';

interface ChefCardProps {
  data: Chef
};

export const ChefCard = (props: ChefCardProps) => {
  return (
    <Card>
      <CardContent>
        <Typography component='p'>
          {props.data.name}
        </Typography>
      </CardContent>
    </Card>
  )
};