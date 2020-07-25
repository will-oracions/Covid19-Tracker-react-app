import React from 'react'
import { Card, Grid, CardContent, Typography } from '@material-ui/core'
import CountUp from 'react-countup'
import cx from 'classnames'

import styles from './Card.module.css'

const Cards = ({ data }) => {

    if (!data) {
        return 'Loading...'
    }
    //console.log(data)
    const { confirmed, recovered, deaths, lastUpdate } = data

    return <div className={styles.container}>
        <Grid container spacing={3} justify="center">
            <Grid xs={12} md={3} item component={Card} className={cx(styles.card, styles.infected)}>

                <CardContent>
                    <Typography color="textSecondary">Infected</Typography>
                    <Typography variant="h5"><CountUp start={0} end={confirmed.value} duration={2.5} separator="," /></Typography>
                    <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                    <Typography variant="body2">Number of active case of covid-19</Typography>
                </CardContent>

            </Grid>

            <Grid xs={12} md={3} item component={Card} className={cx(styles.card, styles.recovered)}>
                <CardContent>
                    <Typography color="textSecondary">Recoveries</Typography>
                    <Typography variant="h5"><CountUp start={0} end={recovered.value} duration={2.5} separator="," /></Typography>
                    <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                    <Typography variant="body2">Number of recoveries of covid-19</Typography>
                </CardContent>
            </Grid>

            <Grid xs={12} md={3} item component={Card} className={cx(styles.card, styles.deaths)}>
                <CardContent>
                    <Typography color="textSecondary">Deaths</Typography>
                    <Typography variant="h5"><CountUp start={0} end={deaths.value} duration={2.5} separator="," /></Typography>
                    <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                    <Typography variant="body2">Number of deaths causes by covid-19</Typography>
                </CardContent>
            </Grid>

        </Grid>
    </div >
}

export default Cards