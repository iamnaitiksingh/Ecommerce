import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-alice-carousel";

const Footer = () => {
  return (
    <div>
      <Grid
        className="bg-slate-900 text-white text-center mt-10"
        container
        sx={{ color: "white", py: 3 }}
      >
        {/*  Company */}

        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5 font-bold text-2xl   " variant="h-6">
            Company
          </Typography>
          <br />
          <br />

          <div>
            <Button className="pb-5" variant="h-6">
              About
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h-6">
              Blog
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h-6">
              Press
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h-6">
              Jobs
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h-6">
              Partner
            </Button>
          </div>
        </Grid>

        {/* Solution  */}

        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5 font-bold text-2xl" variant="h-6">
            Solution
          </Typography>
          <br />
          <br />
          <div>
            <Button className="pb-5" variant="h-6">
              Marketing
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h-6">
              Analytics
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h-6">
              Commerce
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h-6">
              Insights
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h-6">
              Supports
            </Button>
          </div>
        </Grid>

        {/*Documentation  */}

        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5 font-bold text-2xl" variant="h-6">
            Documentation
          </Typography>
          <br />
          <br />
          <div>
            <Button className="pb-5" variant="h-6">
              Guides
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h-6">
              API Status
            </Button>
          </div>
        </Grid>

        {/* Legal */}

        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5 font-bold text-2xl" variant="h-6">
            Legal
          </Typography>
          <div>
            <br />
            <br />
            <Button className="pb-5" variant="h-6">
              Claim
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h-6">
              Privacy
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h-6">
              Terms
            </Button>
          </div>
        </Grid>

        <Grid className="pt-20" item xs={12}>
          <Typography variant="body2" component="p" align="center">
            &copy; 2023 My Company. All rights reserved.
          </Typography>
          <Typography variant="body2" component="p" align="center">
            Made with love by Me.
          </Typography>
          <Typography variant="body2" component="p" align="center">
            <span className="m-2">Icons made by</span>
            <Link
              href="https://www.freepik.com"
              color="inherit"
              className=" underline "
            >
              Freepik
            </Link>
            <span className="m-2">from</span>
            <Link
              href="https://www.flaticon.com/"
              color="inherit"
              className=" underline "
            >
              www.flaticon.com
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
