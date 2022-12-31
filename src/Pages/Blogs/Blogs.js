import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#fff",
  },
  hero: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://i.ibb.co/dGGvfMj/doctor-6701410.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80')`,
    height: "500px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontSize: "3rem",
    marginTop: "20px",
    [theme.breakpoints.down("sm")]: {
      height: 300,
      fontSize: "3em",
    },
  },
  blogsContainer: {
    paddingTop: theme.spacing(3),
  },
  blogTitle: {
    fontWeight: 800,
    paddingBottom: theme.spacing(3),
  },
  card: {
    maxWidth: "100%",
  },
  media: {
    height: 240,
  },
  cardActions: {
    display: "flex",
    margin: "0 10px",
    justifyContent: "space-between",
  },
  author: {
    display: "flex",
  },
  paginationContainer: {
    display: "flex",
    justifyContent: "center",
  },
}));

function Blogs() {
  const classes = useStyles();

  return (
    <div className="">
      {/* <AppBar className={classes.appBar} position="static">
        <Toolbar>
          <Typography variant="h6" color="primary">
            Blog
          </Typography>
        </Toolbar>
      </AppBar> */}

      <Box className={classes.hero}>
        <Box>
          <button className="btn  text-white font-serif shadow-md text-4xl bg-stone-500 font-bold px-6 py-4 rounded-lg mt-5 ">
            Doctor's Planet
          </button>
        </Box>
      </Box>

      {/* Feature section */}
      <Grid container spacing={3} style={{ marginTop: "20px" }} className='md:mx-auto md:w-11/12'>
        {" "}
        <Grid item xs={12} md={6}>
          <CardActionArea component="a" href="#">
            <Card style={{ display: "flex" }}>
              <CardContent style={{ flex: 1 }}>
                <Typography component="h2" variant="h5" color="primary">
                  Analysis Biochemistry
                </Typography>
                <Typography variant="subtitle1" className="text-gray-500">
                  Dec 26
                </Typography>
                <Typography variant="subtitle1" paragraph>
                  Analytical biochemistry is the study of biochemical components
                  found in a cell or other biological sample. This scientific
                  discipline uses a broad range of techniques for separation,
                  identification, quantification and functional characterization
                  of biological molecules.
                </Typography>
                <Typography variant="subtitle1" color="primary">
                  Continue reading...
                </Typography>
              </CardContent>
              <CardMedia
                component="img"
                style={{ width: 160, display: { xs: "none", sm: "block" } }}
                image="https://i.ibb.co/QNBB5sP/analysis-2030261-640.jpg"
                alt="/"
              />
            </Card>
          </CardActionArea>
        </Grid>
        <Grid item xs={12} md={6}>
          <CardActionArea component="a" href="#">
            <Card style={{ display: "flex" }}>
              <CardContent style={{ flex: 1 }}>
                <Typography component="h2" variant="h5" color="primary">
                  Thermometer Temperature
                </Typography>
                <Typography variant="subtitle1" className="text-gray-500">
                  Dec 25
                </Typography>
                <Typography variant="subtitle1" paragraph>
                  Normal body temperature is about 98.6 degrees Fahrenheit (°F)
                  or 37 degrees Celsius (°C). Normal temperature often varies
                  from 1° to 2°F (½° to 1°C). A normal temperature is usually
                  lower in the morning and increases during the day. It reaches
                  its high in the late afternoon or evening.
                </Typography>
                <Typography variant="subtitle1" color="primary">
                  Continue reading...
                </Typography>
              </CardContent>
              <CardMedia
                component="img"
                style={{ width: 160, display: { xs: "none", sm: "block" } }}
                image="https://i.ibb.co/R0RJ2ng/pexels-polina-tankilevitch-3873145.jpg"
                alt="/"
              />
            </Card>
          </CardActionArea>
        </Grid>
      </Grid>

      <Container maxWidth="lg" className={classes.blogsContainer}>
        <Typography variant="h4" className={classes.blogTitle}>
          Articles
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}  style={{height:'480px'}}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://i.ibb.co/fdt63C0/lab-2815638-640.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent style={{height:'170px'}}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Lab Analysis
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >

                    A medical laboratory scientist , also known as a clinical laboratory scientist. They are responsible for performing scientific testing on samples and reporting results to physicians.

                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Avatar
                    src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    style={{ marginRight: "8px" }}
                  />
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      Rakibul Islam
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      color="textSecondary"
                      component="p"
                    >
                      May 14, 2020
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <BookmarkBorderIcon />
                </Box>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}  style={{height:'480px'}}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://i.ibb.co/RzGBkst/mri-2813908-640.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent style={{height:'170px'}}>
                  <Typography gutterBottom variant="h5" component="h2">
                    MRI
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >

                    Radiologic technologists, also known as radiographers, perform x rays and other diagnostic imaging examinations on patients. MRI technologists operate magnetic resonance imaging scanners to create diagnostic images.

                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Avatar src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" style={{ marginRight: "8px" }} />
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      Hasan Mahmud
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      color="textSecondary"
                      component="p"
                    >
                      May 14, 2020
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <BookmarkBorderIcon />
                </Box>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}  style={{height:'480px'}}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://i.ibb.co/gdPhrx2/x-ray-of-the-jaw-2416944-640.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    X-Ray of the jaw
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Panoramic radiography, also called panoramic x-ray, is a two-dimensional (2-D) dental x-ray examination that captures the entire mouth in a single image, including the teeth, upper and lower jaws, surrounding structures and tissues.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Avatar src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80" style={{ marginRight: "8px" }} />
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      Nafisa Akter
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      color="textSecondary"
                      component="p"
                    >
                      May 14, 2020
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <BookmarkBorderIcon />
                </Box>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}  style={{height:'480px'}}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://i.ibb.co/sRWhhBW/syringe-1291129-640.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent style={{height:'170px'}}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Blood Sample Lab
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    A phlebotomist is a medical professional who's trained to perform blood draws. They collect blood for testing or donation and can also perform blood transfusions. Lab Appointments & Locations. COVID-19 Testing Info.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Avatar src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" style={{ marginRight: "8px" }} />
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      Suhana Salma
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      color="textSecondary"
                      component="p"
                    >
                      May 14, 2020
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <BookmarkBorderIcon />
                </Box>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}  style={{height:'480px'}}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://i.ibb.co/G2M7zr6/doctor-5710150-640.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent style={{height:'170px'}}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Patient Consultation
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Consultation is the act of seeking assistance from another physician(s) or health care professional(s) for diagnostic studies, therapeutic interventions, or other services that may benefit the patient.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Avatar src="https://images.unsplash.com/photo-1584999734482-0361aecad844?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80" style={{ marginRight: "8px" }} />
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      Masum Billah
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      color="textSecondary"
                      component="p"
                    >
                      May 14, 2020
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <BookmarkBorderIcon />
                </Box>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}  style={{height:'480px'}}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://i.ibb.co/MVzbQLX/operation-1807543-640.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent style={{height:'170px'}}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Surgery Hospital
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    he surgeon is responsible for the preoperative diagnosis of the patient, for performing the operation, and for providing the patient with postoperative surgical care and treatment.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Avatar src="https://images.unsplash.com/photo-1584999734482-0361aecad844?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80" style={{ marginRight: "8px" }} />
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      Muctasina Golam Rawfoon
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      color="textSecondary"
                      component="p"
                    >
                      May 14, 2020
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <BookmarkBorderIcon />
                </Box>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}  style={{height:'480px'}}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://i.ibb.co/QFcqdtP/eye-care-5016057-640.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Eye Care
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    An ophthalmologist is a medical or osteopathic doctor who specializes in eye and vision care. Ophthalmologists differ from optometrists and opticians in their levels of training and in what they can diagnose and treat.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Avatar src="https://images.unsplash.com/photo-1584999734482-0361aecad844?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80" style={{ marginRight: "8px" }} />
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      Jr Mark
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      color="textSecondary"
                      component="p"
                    >
                      May 14, 2020
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <BookmarkBorderIcon />
                </Box>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}  style={{height:'480px'}}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://i.ibb.co/w7znByQ/chemistry-3533039-640.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent style={{height:'170px'}}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Chemistry Lab
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >

                    A medical laboratory scientist, also known as a medical technologist. They are responsible for performing scientific testing on samples and reporting results to physicians.

                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Avatar src="https://images.unsplash.com/photo-1584999734482-0361aecad844?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80" style={{ marginRight: "8px" }} />
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      Habib Ahmed
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      color="textSecondary"
                      component="p"
                    >
                      May 14, 2020
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <BookmarkBorderIcon />
                </Box>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}  style={{height:'480px'}}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://i.ibb.co/N2HwwhB/scientist-g4cea824f6-640.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Scientist Drug Store
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >

                    A clinical pharmaceutical scientist is a licensed, practicing pharmacist. Clinical pharmaceutical scientists are a type of clinician scientist, analogous to physician-scientists.

                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Avatar src="https://images.unsplash.com/photo-1584999734482-0361aecad844?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80" style={{ marginRight: "8px" }} />
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      Hasan Mahmud
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      color="textSecondary"
                      component="p"
                    >
                      May 14, 2020
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <BookmarkBorderIcon />
                </Box>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}  style={{height:'480px'}}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://i.ibb.co/Qp312cp/treatment-of-skin-2416946-640.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent style={{height:'170px'}}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Treatment of Skin
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Skin diseases are conditions that affect your skin. These diseases may cause rashes, inflammation . Some skin conditions may be genetic. Skin disease treatment may include medications, creams or ointments, or lifestyle changes.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Avatar src="https://images.unsplash.com/photo-1584999734482-0361aecad844?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80" style={{ marginRight: "8px" }} />
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      Rakibul Islam
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      color="textSecondary"
                      component="p"
                    >
                      May 14, 2020
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <BookmarkBorderIcon />
                </Box>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}  style={{height:'480px'}}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://i.ibb.co/47xYXpK/syringe-435809-640.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent style={{height:'170px'}}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Syringe Injection Drug
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >

                    The term injection is sometimes used synonymously with inoculation, but injection does not only refer to the act of inoculation. Injections generally administer a medication as a bolus dose, but can also be used for continuous drug administration.

                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Avatar src="https://images.unsplash.com/photo-1584999734482-0361aecad844?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80" style={{ marginRight: "8px" }} />
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      Masum Billah
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      color="textSecondary"
                      component="p"
                    >
                      May 14, 2020
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <BookmarkBorderIcon />
                </Box>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
        <Box
          my={4}
          className={classes.paginationContainer}
          style={{ marginTop: "40px", marginBottom: "30px" }}
        >
          {/* <Pagination count={10} /> */}
          <Stack spacing={2}>
            <Pagination count={10} variant="outlined" color="primary" />
          </Stack>
        </Box>
      </Container>
    </div>
  );
}

export default Blogs;
