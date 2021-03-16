import React from 'react'
import { useState } from 'react'
import {
    Button,
    Card,
    CardActions,
    CardContent,
    Typography,
    Grid,
    Dialog,
    DialogContent,
    DialogTitle,
    DialogActions,
    DialogContentText
} from '@material-ui/core';
import vs from '../images/vs.png'
import { getMatchDetail } from '../api/Api';

const MyCard = ({ match }) => {

    const [detail, setDetail] = useState({})

    const [open, setOpen] = useState(false)

    const handleClick = (id) => {
        getMatchDetail(id)
            .then((data) => {
                console.log("Match Data", data)
                setDetail(data)
                handleOpen()
            })
            .catch((error) => console.log(error))
    }

    const handleClose = () => {
        setOpen(false)
    }

    const handleOpen = () => {
        setOpen(true)
    }

    return (
        <>
            <Card style={{ marginTop: 20 }}>
                <CardContent>
                    <Grid container justify="center" alignItems="center" spacing={6}>
                        <Grid item>
                            <Typography>
                                <span style={{ fontSize: 12 }}>
                                    {match["team-1"]}
                                </span>
                            </Typography>
                        </Grid>
                        <Grid item>
                            <img style={{ width: 20 }} src={vs} />
                        </Grid>
                        <Grid item>
                            <Typography>
                                <span style={{ fontSize: 12 }}>
                                    {match["team-2"]}
                                </span>
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
                <CardActions>
                    <Grid container justify="center">
                        <Button
                            onClick={() => handleClick(match.unique_id)}
                            item
                            variant="outlined"
                            color="primary">
                            Show Detail
                </Button>
                        <Button
                            style={{ marginLeft: 10 }}
                            item variant="outlined"
                            color="primary">
                            Start Time {new Date(match.dateTimeGMT).toLocaleString()}
                        </Button>
                    </Grid>
                </CardActions>
            </Card>

            <Dialog open={open} onClose={() => handleClose()}>
                <DialogTitle id="aleart-dialog-title">{"Match Detail..."}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <Typography>{detail.stat}</Typography>
                        <Typography>
                            Match
                        <span
                                style={{
                                    fontStyle: "italic",
                                    fontWeight: "bold"
                                }}>
                                {detail.matchStarted ? "Started" : "Still not started"}
                            </span>
                        </Typography>
                        <Typography>
                            Score
                        <span style={{
                                fontStyle: "italic",
                                fontWeight: "bold"
                            }}>
                                {detail.score}
                            </span>
                        </Typography>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}
                        color="primary"
                        autoFocus>
                        Close
                </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}
export default MyCard
