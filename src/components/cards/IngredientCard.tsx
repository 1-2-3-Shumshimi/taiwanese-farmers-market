import React from 'react';
import { Ingredient } from '../../entities/Ingredient';
import { Card, CardContent, Typography } from '@material-ui/core';

interface IngredientCardProps {
  data: Ingredient
};

export const IngredientCard = (props: IngredientCardProps) => {
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