import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsCellIcon from "@mui/icons-material/SettingsCell";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { TrendingUp } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";

const salesData = [
  {
    stats: "245k",
    title: "Sales", // corrected "tittle" to "title"
    color: "#E5D68A",
    icon: <TrendingUp sx={{ fontSize: "1.75rem" }} />,
  },
  {
    stats: "12.5k",
    title: "Customers",
    color: "#22CB5C",
    icon: <AccountCircleIcon sx={{ fontSize: "1.75rem" }} />,
  },
  {
    stats: "1.54k",
    title: "Products",
    color: "#DE4839",
    icon: <SettingsCellIcon sx={{ fontSize: "1.75rem" }} />,
  },
  {
    stats: "88k",
    title: "Revenue",
    color: "#12B0E8",
    icon: <AttachMoneyIcon sx={{ fontSize: "1.75rem" }} />,
  },
];

const renderStats = () => {
  return salesData.map((item, index) => {
    return (
      <Grid item xs={12} sm={3} key={index}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Avatar
            variant="rounded"
            sx={{
              mr: 3,
              width: 44,
              height: 44,
              boxShadow: 3,
              color: "white",
              backgroundColor: `${item.color}`, // Corrected "background" to "backgroundColor"
            }}
          >
            {item.icon}
          </Avatar>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography variant="caption"> {item.title} </Typography> {/* Corrected to "title" */}
            <Typography variant="h6"> {item.stats} </Typography>
          </Box>
        </Box>
      </Grid>
    );
  });
};

const Monthlyoverview = () => {
  return (
    <Card sx={{   }}>
      <CardHeader
        title="Monthly Overview"
        action={
          <IconButton size="small">
            <MoreVertIcon />
          </IconButton>
        }
        subheader={
          <Typography variant="body2">
            <Box component="span" sx={{ fontWeight: 600 }}>
              Total 48.5% growth {/* Corrected "groth" to "growth" */}
            </Box>
            😊 this month
          </Typography>
        }
        titleTypographyProps={{
          sx: {
            mb: 2.5,
            lineHeight: "2rem !important",
            letterSpacing: ".15px !important",
          },
        }}
      />
      <CardContent sx={{ pt: (theme) => `${theme.spacing(3)} !important` }}>
        <Grid container spacing={[5, 0]}>{renderStats()}</Grid>
      </CardContent>
    </Card>
  );
};

export default Monthlyoverview;
