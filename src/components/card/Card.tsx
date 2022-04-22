import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { CardActionArea } from "@mui/material";

export const MUICard = () => {
  return (
    <Card sx={{ width: "100vw", boxShadow: 6 }}>
      <CardActionArea>
        <CardContent
          sx={{
            textAlign: "center",
            color: "rgb(0, 82, 204)",
          }}
        >
          <PersonOutlineIcon fontSize="large" sx={{ mt: 2 }} />
          <Typography variant="subtitle1" sx={{ fontWeight: 400 }}>
            Employees
          </Typography>
          <Typography variant="h5" sx={{ color: "#303030", mt: 2, mb: 1 }}>
            0
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
