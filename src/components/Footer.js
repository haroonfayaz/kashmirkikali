import { Box, Button, Grid, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import { pages } from "../Constants";
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "primary.main", p: { md: 3 } }}>
      <Grid container padding={1} spacing={3}>
        <Grid item xs={12} md={3}>
          <Paper
            elevation={3}
            sx={{
              bgcolor: "white",
              alignItems: "center",
              borderRadius: "10px",
              height: "300px",
              p: 4,
            }}
          >
            <Stack spacing={1}>
              <Typography variant="h5" color="primary">
                {" "}
                Quick Links{" "}
              </Typography>
              {pages?.map(({ name, path }) => (
                <Button
                  key={name}
                  component={Link}
                  to={path}
                  sx={{
                    display: "block",
                    fontWeight: 500,
                    fontSize: 14,
                    "&:hover": {
                      color: "white",
                      backgroundColor: "#270082",
                    },
                  }}
                >
                  {name}
                </Button>
              ))}
            </Stack>
          </Paper>
        </Grid>
        <Grid item xs={12} md={3}>
          <Paper
            elevation={3}
            sx={{
              bgcolor: "white",
              alignItems: "center",
              borderRadius: "10px",
              height: "300px",
              p: 4,
            }}
          >
            <Stack spacing={3}>
              <Typography variant="h5" color="primary">
                Address
              </Typography>
              <Typography variant="body1" color="primary">
                Beehama.
              </Typography>
              <Typography variant="body1" color="primary">
                Ganderbal,Jammu and Kashmir.
              </Typography>
              <Typography variant="body1" color="primary">
                191201.
              </Typography>
            </Stack>{" "}
          </Paper>
        </Grid>
        <Grid item xs={12} md={3}>
          <Paper
            elevation={3}
            sx={{
              bgcolor: "white",
              alignItems: "center",
              borderRadius: "10px",
              height: "300px",
              p: 4,
            }}
          >
            <Stack spacing={3}>
              <Typography variant="h5" color="primary">
                Phone
              </Typography>
              <Typography variant="body1" color="primary">
                M:+91-9596883373
              </Typography>
              <Typography variant="body1" color="primary">
                T:0194-2416446
              </Typography>
              <Typography variant="body2" color="primary">
                Email:kashmirkikaligbl@gmail.com.
              </Typography>
            </Stack>{" "}
          </Paper>
        </Grid>
        <Grid item xs={12} md={3}>
          <Paper
            elevation={3}
            sx={{
              bgcolor: "white",
              alignItems: "center",
              borderRadius: "10px",
              height: "300px",
              p: 4,
            }}
          >
            <Stack spacing={2}>
              <Typography variant="h5" color="primary">
                Connect{" "}
              </Typography>
              <Box>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ paddingRight: "20px" }}
                >
                  <FacebookIcon
                    sx={{
                      fontSize: 40,
                      color: "#3b5998",
                      "&:hover": {
                        transform: "scale(1.8)",
                      },
                    }}
                  />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ paddingRight: "20px" }}
                >
                  <InstagramIcon
                    sx={{
                      fontSize: 40,
                      color: "#E1306C",
                      "&:hover": {
                        transform: "scale(1.8)",
                      },
                    }}
                  />
                </a>
                <a
                  href="https://wa.me/9596883373"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ paddingRight: "20px" }}
                >
                  <WhatsAppIcon
                    sx={{
                      fontSize: 40,
                      color: "#25D366",
                      "&:hover": {
                        transform: "scale(1.8)",
                      },
                    }}
                  />
                </a>
              </Box>
            </Stack>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
