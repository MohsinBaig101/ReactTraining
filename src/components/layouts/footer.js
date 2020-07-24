import React from 'react';
import { Grid, Card,Container,
    Typography, CardMedia, CardContent,
    } from "@material-ui/core"
import './footer.css'
const Footer = () => {
    return (
        <>
            <Grid container className="footer-container" style={{justifyContent:"space-between"}}>
                <Grid>
                    <h4><b>Popular Categories</b></h4>
                    <ul className="list-style-popular">
                        <li>Popular 1</li>
                        <li>Popular 2</li>
                        <li>Popular 3</li>
                        <li>Popular 4</li>
                    </ul>
                </Grid>
                <Grid >
                    <h4><b>About Us</b></h4>
                    <ul className="list-style-popular">
                        <li>Popular 1</li>
                        <li>Popular 2</li>
                        <li>Popular 3</li>
                        <li>Popular 4</li>
                    </ul>
                </Grid>
                <Grid >
                    <h4><b>Contact & SiteMap</b></h4>
                    <ul className="list-style-popular">
                        <li>Popular 1</li>
                        <li>Popular 2</li>
                        <li>Popular 3</li>
                        <li>Popular 4</li>
                    </ul>
                </Grid>
                <Grid >
                    <h4><b>My Account</b></h4>
                    <ul className="list-style-popular">
                        <li>Popular 1</li>
                        <li>Popular 2</li>
                        <li>Popular 3</li>
                        <li>Popular 4</li>
                    </ul>
                </Grid>
            </Grid>
        </>
    )
}
export default Footer;
