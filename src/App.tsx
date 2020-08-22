import React from "react";
import main from "./imagesFolder/main1.jpg";
import mypic from "./imagesFolder/anmol.png";
import MailIcon from "@material-ui/icons/Mail";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { makeStyles } from "@material-ui/core/styles";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import PregnantWomanIcon from "@material-ui/icons/PregnantWoman";
import SchoolIcon from "@material-ui/icons/School";
import AccessibilityIcon from "@material-ui/icons/Accessibility";
import BookIcon from "@material-ui/icons/Book";
import WorkIcon from "@material-ui/icons/Work";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import GitHubIcon from '@material-ui/icons/GitHub';
import "./App.css";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "6px 16px",
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

function App() {
  const classes = useStyles();
  return (
      <div className="App">
        <header className="App-header">
          <img src={main} className="App-logo" alt="image" />
          <div className="Name" style={{ top: "15%" }}>
            <h1>Anmol Goel</h1>
            <p>Interactive resume</p>
          </div>
          {/*<div className="typewriter Name" style={{ top: "28%" }}>*/}
          {/*  <h4>A tech enthusiast</h4>*/}
          {/*</div>*/}
        </header>
        <div>
          <div id="profile">
            <div className="heading">
              <h2> Profile </h2>
            </div>
            <div style={{ marginTop: "-2%" }}>
              <p>I'm a budding Data Scientist</p>
            </div>
            <div style={{margin:"0 20%"}}>
              <div>
                <div className="subheading">
                  <p>Who Am I?</p>
                </div>
                <div>
                  I am a full-stack developer. I am a senior developer with good knowledge of front-end techniques.
                  I am an aspiring Data Scientist and love to talk about it. I love spending time on fixing little details and optimizing code.
                </div>

              </div>
              <div>

                <div style={{margin:"3%", float:"left"}}>
                  <img src={mypic} alt="image" style={{height:"30vh"}}/>
                </div>

                <div className="subheading">
                  <p>Details</p>
                </div>
                <div>
                  <p>
                    <b>Name</b>
                  </p>
                  Anmol Goel
                  <p>
                    <b>Age:</b>
                  </p>
                  25
                  <p>
                    <b>Location</b>
                  </p>
                  Bengaluru, India
                </div>
              </div>
            </div>
          </div>
          <div id="aboutMe">
            <div className="heading">
              <h2> About me </h2>
            </div>
            <div>
              <Timeline align="alternate">
                <TimelineItem>
                  <TimelineOppositeContent>
                    <Typography variant="body2" color="textSecondary">
                      1995 - 2012
                    </Typography>
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot color="primary">
                      <SchoolIcon />
                    </TimelineDot>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Paper elevation={3} className={classes.paper}>
                      <Typography>
                        Completed Schooling from 8 schools in 6 cities
                      </Typography>
                    </Paper>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineOppositeContent>
                    <Typography variant="body2" color="textSecondary">
                      2013-2017
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      Bachelor of Technology in Information Technology
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      Manipal, India
                    </Typography>
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot color="primary">
                      <SchoolIcon />
                    </TimelineDot>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Paper elevation={3} className={classes.paper}>
                      <Typography variant="h6" component="h1">
                        Manipal Institute of Technology
                      </Typography>
                      <Typography>
                        Courses: Data Structures, DataBase, Algorithms, System
                        programming, Discrete mathematics, Operating Systems,
                        Optimization Theory
                      </Typography>
                    </Paper>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineOppositeContent>
                    <Typography variant="body2" color="textSecondary">
                      Jan'17- May'17
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      Software Development Intern
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      Bengaluru, India
                    </Typography>
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot color="primary">
                      <WorkIcon />
                    </TimelineDot>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Paper elevation={3} className={classes.paper}>
                      <Typography
                          variant="h6"
                          component="h1"
                          style={{ textAlign: "center" }}
                      >
                        GoodBox
                      </Typography>
                      <Typography style={{ textAlign: "center" }}>
                        Identified, designed, implemented and automated solutions
                        for the Operations team directly impacting the bottom line{" "}
                      </Typography>
                    </Paper>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineOppositeContent>
                    <Typography variant="body2" color="textSecondary">
                      May'17 - Jul'17
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      Volunteer
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      Kenya
                    </Typography>
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot color="primary">
                      <AccessibilityIcon />
                    </TimelineDot>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Paper elevation={3} className={classes.paper}>
                      <Typography variant="h6" component="h1">
                        Little Drops foundation
                      </Typography>
                      <Typography>
                        Consulted them on self-sustainability plans and mentored
                        kids.{" "}
                      </Typography>
                    </Paper>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineOppositeContent>
                    <Typography variant="body2" color="textSecondary">
                      Jul'17 - Present
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      Senior Software Developer
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      Bengaluru, India
                    </Typography>
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot color="primary">
                      <WorkIcon />
                    </TimelineDot>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Paper elevation={3} className={classes.paper}>
                      <Typography
                          variant="h6"
                          component="h1"
                          style={{ textAlign: "center" }}
                      >
                        Bosch
                      </Typography>
                      <Typography style={{ textAlign: "center" }}>
                        {" "}
                        Designed and developed two softwares to simulate
                        automotive embedded systems in virtual environments{" "}
                      </Typography>
                    </Paper>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineOppositeContent>
                    <Typography variant="body2" color="textSecondary">
                      2019 - 2020
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      Post Graduation Diploma In Data Science
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      Bengaluru, India
                    </Typography>
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot color="primary">
                      <SchoolIcon />
                    </TimelineDot>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Paper elevation={3} className={classes.paper}>
                      <Typography>
                        Courses: Python, SQL, Inferential Statistics, Haddop,
                        PySpark, Machine Learning, Deep Learning
                      </Typography>
                    </Paper>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineOppositeContent>
                    <Typography variant="body2" color="textSecondary">
                      2013 - Present
                    </Typography>
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot color="primary">
                      <BookIcon />
                    </TimelineDot>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Paper elevation={3} className={classes.paper}>
                      <Typography>
                        Moocs from Coursera, HP, Cetpa (MS certified Silver
                        Learning Partner) etc..
                      </Typography>
                    </Paper>
                  </TimelineContent>
                </TimelineItem>
              </Timeline>
            </div>
          </div>
        </div>
        <footer>
          <div className="heading">
            <h2> I can help. </h2>
          </div>
          <div className="subheading">I’m currently available for work.</div>
          <div className="contactMe">
            If you have a project that you want to get started, think you need my
            help or just fancy saying hey, then lets get in touch.
          </div>
          <div style={{ margin: "1%" }}>
            <a
                href="https://www.facebook.com/anmol.goel.58/"
                target="_blank"
                rel="noopener noreferrer"
            >
              <FacebookIcon fontSize="large" />
            </a>
            <a
                href="https://www.linkedin.com/in/anmolgoel"
                target="_blank"
                rel="noopener noreferrer"
                style={{ margin: "5vh" }}
            >
              <LinkedInIcon fontSize="large" />
            </a>
            <a
                href="mailto:95.anmol@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
            >
              <MailIcon fontSize="large" />
            </a>
          </div>
        </footer>
      </div>
  );
}

export default App;
