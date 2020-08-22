import React from "react";
import main from "./imagesFolder/main1.jpg";
import manipalLogo from "./imagesFolder/manipal.png";
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
import LaptopMacIcon from "@material-ui/icons/LaptopMac";
import HotelIcon from "@material-ui/icons/Hotel";
import WorkIcon from "@material-ui/icons/Work";
import RepeatIcon from "@material-ui/icons/Repeat";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
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
            <h2>I'm Anmol</h2>
          </div>
          <div className="typewriter Name" style={{ top: "28%" }}>
            <h4>A tech enthusiast</h4>
          </div>
        </header>
        <div>
          <div className="heading">
            <h2> About me </h2>
          </div>
          <div>
            <Timeline align="alternate">
              <TimelineItem>
                <TimelineOppositeContent>
                  <Typography variant="body2" color="textSecondary">
                    29th June, 1995
                  </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot>
                    <PregnantWomanIcon />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Paper elevation={3} className={classes.paper}>
                    <Typography>My beautiful mother gave me birth</Typography>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineOppositeContent>
                  <Typography variant="body2" color="textSecondary">
                    2012
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
                      Completed Schooling from 12 schools in 10 cities
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
                    <Typography>Because it&apos;s awesome!</Typography>
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
                      Designed and developed two softwares to simulate automotive
                      embedded systems in virtual environments{" "}
                    </Typography>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          </div>
        </div>
        <footer>
          <div className="heading">
            <h2> I can help. </h2>
          </div>
          <div className="AvailWork">I’m currently available for work.</div>
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
