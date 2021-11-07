import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import people1 from "../../../images/people-1.png";
import people2 from "../../../images/people-2.png";
import people3 from "../../../images/people-3.png";

const Testimonial = () => {
  return (
    <Container sx={{ my: 5 }}>
      <Box sx={{ textAlign: "left" }}>
        <Typography sx={{ my: 5,color: "info.main",pt:5 }} variant="h6">
          Testimonial
        </Typography>
        <Typography sx={{ my: 5 }} variant="h4">
          What's Our Patient <br />
          Says
        </Typography>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid item xs={4} sm={4} md={4}>
          <Card sx={{ maxWidth: 345 }}>
          <CardContent>
            <Typography variant="body2" color="text.secondary">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’,
            </Typography>
          </CardContent>

          <CardActions sx={{ py: 5 }}>
            <CardMedia
              sx={{ width: 90 }}
              component="img"
              image={people1}
              alt="green iguana"
            />
            <Box>
              <Typography
                sx={{ pl: 5, fontWeight: 500, color: "info.main" }}
                variant="body1"
              >
                Winson Herry
              </Typography>
              <Typography sx={{ pl: 5 }} variant="body1">
                California
              </Typography>
            </Box>
          </CardActions>
        </Card>
          </Grid>
          <Grid item xs={4} sm={4} md={4}>
          <Card sx={{ maxWidth: 345 }}>
          <CardContent>
            <Typography variant="body2" color="text.secondary">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’,
            </Typography>
          </CardContent>

          <CardActions sx={{ py: 5 }}>
            <CardMedia
              sx={{ width: 90 }}
              component="img"
              image={people2}
              alt="green iguana"
            />
            <Box>
              <Typography
                sx={{ pl: 5, fontWeight: 500, color: "info.main" }}
                variant="body1"
              >
                Winson Herry
              </Typography>
              <Typography sx={{ pl: 5 }} variant="body1">
                California
              </Typography>
            </Box>
          </CardActions>
        </Card>
          </Grid>
          <Grid item xs={4} sm={4} md={4}><Card sx={{ maxWidth: 345 }}>
          <CardContent>
            <Typography variant="body2" color="text.secondary">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’,
            </Typography>
          </CardContent>

          <CardActions sx={{ py: 5 }}>
            <CardMedia
              sx={{ width: 90 }}
              component="img"
              image={people3}
              alt="green iguana"
            />
            <Box>
              <Typography
                sx={{ pl: 5, fontWeight: 500, color: "info.main" }}
                variant="body1"
              >
                Winson Herry
              </Typography>
              <Typography sx={{ pl: 5 }} variant="body1">
                California
              </Typography>
            </Box>
          </CardActions>
        </Card></Grid>
        </Grid>
        
      </Box>
    </Container>
  );
};

export default Testimonial;
