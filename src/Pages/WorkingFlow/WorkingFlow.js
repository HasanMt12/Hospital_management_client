import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import img1 from "../../assets/Workflow/app.png";
import img2 from "../../assets/Workflow/blood-test.png";
import img3 from "../../assets/Workflow/browser (2).png";
import img4 from "../../assets/Workflow/diagnosis.png";
import img5 from "../../assets/Workflow/family (1).png";
import img6 from "../../assets/Workflow/health-insurance.png";
import img7 from "../../assets/Workflow/hospital-bed.png";
import img8 from "../../assets/Workflow/medical-report.png";
import img9 from "../../assets/Workflow/patient.png";
import img10 from "../../assets/Workflow/schedule.png";
const WorkingFlow = () => {
  return (
    <div className="w-11/12 mx-auto">
      <div className="my-5 text-center">
        <h1 className="text-3xl my-2 font-bold font-sans">
          Working Flow of <span className="text-teal-600">HMS Software</span>
        </h1>
        <Typography
          className="text-base"
          variant="body2"
          color="text.secondary"
        >
          <p>
            The Hospital Management System is circulated between 10 processes.
          </p>
          <p>Now, we will discuss on the following section.</p>
        </Typography>
      </div>
      <div className="grid xl:grid-cols-5  lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mb-20 mt-7 gap-x-12 gap-y-2">
        <Card
          sx={{
            maxWidth: 270,
            minWidth: 250,
            // boxShadow: 'none',
            boxShadow: "0 0 5px 0 rgba(0, 0, 0, 0.1)",
            bgcolor: "",
            marginTop: "20px",
            marginBottom: "20px",
            pt: 2,
            height: "290px",

            mx: "auto",
            "&:hover": {
              boxShadow: "0 0 300px 0 rgba(0, 0, 0, 0.1)",
            },
          }}
        >
          <CardContent
            sx={{
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            <div className="relative z-0 flex flex-col items-center p-8 border rounded-md h-56 ">
              <span className="absolute top-0 px-6 pt-1 pb-1 font-medium rounded-b-lg bg-teal-600 text-white">
                STEP-1
              </span>
              <div className="flex justify-center items-center py-5">
                <img className="w-16 h-16" src={img3} alt="" />
              </div>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{
                  fontWeight: "bold",
                }}
              ></Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                className="text-lg"
              >
                Registration of patients
              </Typography>
            </div>
          </CardContent>
        </Card>
        <Card
          sx={{
            maxWidth: 270,
            minWidth: 250,
            // boxShadow: 'none',
            boxShadow: "0 0 5px 0 rgba(0, 0, 0, 0.1)",
            bgcolor: "",
            marginTop: "20px",
            marginBottom: "20px",
            pt: 2,
            height: "290px",

            mx: "auto",
            "&:hover": {
              boxShadow: "0 0 300px 0 rgba(0, 0, 0, 0.1)",
            },
          }}
        >
          <CardContent
            sx={{
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            <div className="relative z-0 flex flex-col items-center p-8 border rounded-md h-56 ">
              <span className="absolute top-0 px-6 pt-1 pb-1 font-medium rounded-b-lg bg-teal-600 text-white">
                STEP-2
              </span>
              <div className="flex justify-center items-center py-5">
                <img className="w-16 h-16" src={img10} alt="" />
              </div>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{
                  fontWeight: "bold",
                }}
              ></Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                className="text-lg"
              >
                Check schedule & Set appointment
              </Typography>
            </div>
          </CardContent>
        </Card>
        <Card
          sx={{
            maxWidth: 270,
            minWidth: 250,
            // boxShadow: 'none',
            boxShadow: "0 0 5px 0 rgba(0, 0, 0, 0.1)",
            bgcolor: "",
            marginTop: "20px",
            marginBottom: "20px",
            pt: 2,
            height: "290px",

            mx: "auto",
            "&:hover": {
              boxShadow: "0 0 300px 0 rgba(0, 0, 0, 0.1)",
            },
          }}
        >
          <CardContent
            sx={{
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            <div className="relative z-0 flex flex-col items-center p-8 border rounded-md  h-56">
              <span className="absolute top-0 px-6 pt-1 pb-1 font-medium rounded-b-lg bg-teal-600 text-white">
                STEP-3
              </span>
              <div className="flex justify-center items-center py-5">
                <img className="w-16 h-16" src={img6} alt="" />
              </div>
              <Typography
                //   gutterBottom
                variant="h5"
                component="div"
                sx={{
                  fontWeight: "bold",
                }}
              ></Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                className="text-lg "
              >
                Patient get returning confirmation
              </Typography>
            </div>
          </CardContent>
        </Card>
        <Card
          sx={{
            maxWidth: 270,
            minWidth: 250,
            // boxShadow: 'none',
            boxShadow: "0 0 5px 0 rgba(0, 0, 0, 0.1)",
            bgcolor: "",
            marginTop: "20px",
            marginBottom: "20px",
            pt: 2,
            height: "290px",

            mx: "auto",
            "&:hover": {
              boxShadow: "0 0 300px 0 rgba(0, 0, 0, 0.1)",
            },
          }}
        >
          <CardContent
            sx={{
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            <div className="relative z-0 flex flex-col items-center p-8 border rounded-md h-56 ">
              <span className="absolute top-0 px-6 pt-1 pb-1 font-medium rounded-b-lg bg-teal-600 text-white">
                STEP-4
              </span>
              <div className="flex justify-center items-center py-5">
                <img className="w-16 h-16" src={img5} alt="" />
              </div>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{
                  fontWeight: "bold",
                }}
              ></Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                className="text-lg"
              >
                Insurance planing
              </Typography>
            </div>
          </CardContent>
        </Card>
        <Card
          sx={{
            maxWidth: 270,

            minWidth: 250,
            // boxShadow: 'none',
            boxShadow: "0 0 5px 0 rgba(0, 0, 0, 0.1)",
            bgcolor: "",
            marginTop: "20px",
            marginBottom: "20px",
            pt: 2,
            height: "290px",

            mx: "auto",
            "&:hover": {
              boxShadow: "0 0 300px 0 rgba(0, 0, 0, 0.1)",
            },
          }}
        >
          <CardContent
            sx={{
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            <div className="relative z-0 flex flex-col items-center p-8 border rounded-md h-56 ">
              <span className="absolute top-0 px-6 pt-1 pb-1 font-medium rounded-b-lg bg-teal-600 text-white">
                STEP-5
              </span>
              <div className="flex justify-center items-center py-5">
                <img className="w-16 h-16" src={img1} alt="" />
              </div>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{
                  fontWeight: "bold",
                }}
              ></Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                className="text-lg"
              >
                Consult with Doctor
              </Typography>
            </div>
          </CardContent>
        </Card>
        <Card
          sx={{
            maxWidth: 270,
            minWidth: 250,
            // boxShadow: 'none',
            boxShadow: "0 0 5px 0 rgba(0, 0, 0, 0.1)",
            bgcolor: "",
            marginTop: "20px",
            marginBottom: "20px",
            pt: 2,
            height: "290px",

            mx: "auto",
            "&:hover": {
              boxShadow: "0 0 300px 0 rgba(0, 0, 0, 0.1)",
            },
          }}
        >
          <CardContent
            sx={{
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            <div className="relative z-0 flex flex-col items-center p-8 border rounded-md  h-56">
              <span className="absolute top-0 px-6 pt-1 pb-1 font-medium rounded-b-lg bg-teal-600 text-white">
                STEP-6
              </span>
              <div className="flex justify-center items-center py-5">
                <img className="w-16 h-16" src={img8} alt="" />
              </div>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{
                  fontWeight: "bold",
                }}
              ></Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                className="text-lg"
              >
                Patient's Case Study
              </Typography>
            </div>
          </CardContent>
        </Card>
        <Card
          sx={{
            maxWidth: 270,
            minWidth: 250,
            // boxShadow: 'none',
            boxShadow: "0 0 5px 0 rgba(0, 0, 0, 0.1)",
            bgcolor: "",
            marginTop: "20px",
            marginBottom: "20px",
            pt: 2,
            height: "290px",
            mx: "auto",
            "&:hover": {
              boxShadow: "0 0 300px 0 rgba(0, 0, 0, 0.1)",
            },
          }}
        >
          <CardContent
            sx={{
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            <div className="relative z-0 flex flex-col items-center p-8 border rounded-md  h-56">
              <span className="absolute top-0 px-6 pt-1 pb-1 font-medium rounded-b-lg bg-teal-600 text-white">
                STEP-7
              </span>
              <div className="flex justify-center items-center py-5">
                <img className="w-16 h-16" src={img2} alt="" />
              </div>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{
                  fontWeight: "bold",
                }}
              ></Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                className="text-lg"
              >
                Perform Medical Test
              </Typography>
            </div>
          </CardContent>
        </Card>
        <Card
          sx={{
            maxWidth: 270,
            minWidth: 250,
            // boxShadow: 'none',
            boxShadow: "0 0 5px 0 rgba(0, 0, 0, 0.1)",
            bgcolor: "",
            marginTop: "20px",
            marginBottom: "20px",
            pt: 2,
            height: "290px",

            mx: "auto",
            "&:hover": {
              boxShadow: "0 0 300px 0 rgba(0, 0, 0, 0.1)",
            },
          }}
        >
          <CardContent
            sx={{
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            <div className="relative z-0 flex flex-col items-center p-8 border rounded-md  h-56">
              <span className="absolute top-0 px-6 pt-1 pb-1 font-medium rounded-b-lg bg-teal-600 text-white">
                STEP-8
              </span>
              <div className="flex justify-center items-center py-5">
                <img className="w-16 h-16" src={img4} alt="" />
              </div>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{
                  fontWeight: "bold",
                }}
              ></Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                className="text-lg"
              >
                Transfer report to Doctor
              </Typography>
            </div>
          </CardContent>
        </Card>
        <Card
          sx={{
            maxWidth: 270,
            minWidth: 250,
            // boxShadow: 'none',
            boxShadow: "0 0 5px 0 rgba(0, 0, 0, 0.1)",
            bgcolor: "",
            marginTop: "20px",
            marginBottom: "20px",
            pt: 2,
            height: "290px",

            mx: "auto",
            "&:hover": {
              boxShadow: "0 0 300px 0 rgba(0, 0, 0, 0.1)",
            },
          }}
        >
          <CardContent
            sx={{
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            <div className="relative z-0 flex flex-col items-center p-8 border rounded-md  h-56">
              <span className="absolute top-0 px-6 pt-1 pb-1 font-medium rounded-b-lg bg-teal-600 text-white">
                STEP-9
              </span>
              <div className="flex justify-center items-center py-5">
                <img className="w-16 h-16" src={img9} alt="" />
              </div>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{
                  fontWeight: "bold",
                }}
              ></Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                className="text-lg"
              >
                Starts Treatment
              </Typography>
            </div>
          </CardContent>
        </Card>
        <Card
          sx={{
            maxWidth: 270,
            minWidth: 250,
            // boxShadow: 'none',
            boxShadow: "0 0 5px 0 rgba(0, 0, 0, 0.1)",
            bgcolor: "",
            marginTop: "20px",
            marginBottom: "20px",
            pt: 2,
            height: "290px",

            mx: "auto",
            "&:hover": {
              boxShadow: "0 0 300px 0 rgba(0, 0, 0, 0.1)",
            },
          }}
        >
          <CardContent
            sx={{
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            <div className="relative z-0 flex flex-col items-center p-8 border rounded-md h-56">
              <span className="absolute top-0 px-6 pt-1 pb-1 font-medium rounded-b-lg bg-teal-600 text-white">
                STEP-10
              </span>
              <div className="flex justify-center items-center py-5">
                <img className="w-16 h-16" src={img7} alt="" />
              </div>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{
                  fontWeight: "bold",
                }}
              ></Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                className="text-lg"
              >
                Observation on Patient
              </Typography>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default WorkingFlow;
