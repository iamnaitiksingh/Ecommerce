import { Button, Card, CardContent, styled, Typography } from "@mui/material";
import React from "react";

const TrignleImg = styled("img")({
  right: 0,
  bottom: 0,
  height: 170,
  position: "absolute",
});
const TrophyImg = styled("img")({
  right: 36,
  bottom: 20,
  height: 98,
  position: "absolute",
});

const Achivement = () => {
  return (
    <>
      <Card sx={{ posotion: "relative"}}>
        <div className="flex justify-between m-2">
          <div className="">
            <Typography variant="h6" sx={{ letterSpacing: ".25px" }}>
              Shop With D.B
            </Typography>
            <Typography variant="body2">Congratulation </Typography>
            <Typography variant="h5" sx={{ my: 3.1 }}>
              420.8k{" "}
            </Typography>
            <Button size="small" variant="contained">
              View Sales
            </Button>
            <TrignleImg src="" />
          </div>
          <div className="">
            <img
              src="https://m.media-amazon.com/images/I/71J8MBlZUkL._AC_UF894,1000_QL80_.jpg"
              alt="AchivementImg"
              className="h=[100px] w-[100px]"
            />
          </div>
        </div>
      
      </Card>
    </>
  );
};

export default Achivement;
