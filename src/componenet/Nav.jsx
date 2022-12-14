import { Grid,Button, Card, CardContent } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export const Nav=()=>{
    return(
        <React.Fragment>
            <Card>
                <CardContent>
                    <Grid container spacing={3}>
                   <Grid item xs={2}>
                     <Link className="li" to="/home">
                        <Button fullWidth variant="contained" > Home </Button>
                     </Link>
                   </Grid>
                   <Grid item xs={2}>
                     <Link className="li" to="/dashboard">
                        <Button fullWidth variant="contained" > Dashboard </Button>
                     </Link>
                   </Grid>
                   <Grid item xs={2}>
                     <Link className="li" to="/earnings">
                        <Button fullWidth variant="contained" > Earnings </Button>
                     </Link>
                   </Grid>
                   <Grid item xs={2}>
                     <Link className="li" to="/expenses">
                        <Button fullWidth variant="contained" > Expenses </Button>
                     </Link>
                   </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </React.Fragment>
    )
}