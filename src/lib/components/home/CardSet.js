import React from 'react';
import {
    Typography,
    Button,
    Grid,
    Card,
    CardActions,
    CardContent
} from '@mui/material';

const CardSet = props => {
    return (
        <Grid container spacing={2}>
            {props.items.map(item => {
                return (
                    <Grid item>
                        <Card sx={{ minWidth: 275 }}>
                            <CardContent>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    {props.label}
                                </Typography>
                                <Typography variant="h5" component="div">
                                    {item[props.name_key]}
                                </Typography>
                                <Typography variant="body2">
                                    {item[props.description_key]}
                                    <br />
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">View {props.label}</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                )
            })}
        </Grid>
    )
}

export default CardSet;
