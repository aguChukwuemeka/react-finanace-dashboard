import { Box, Typography, useTheme } from "@mui/material";
import { useState } from "react";
import FlexBetween from "./flexBetween.tsx";
import { Pix } from "@mui/icons-material";
import { Link } from "react-router-dom";

type Props = {};
export const Navbar = (props: Props) => {
  const [selected, setSelected] = useState("");
  const { palette } = useTheme();
  return (
    <FlexBetween mb="0.25rem" pb="0.5rem 0rem" color={palette.grey[300]}>
      {/* LEFT SIDE*/}
      <FlexBetween gap="0.75rem">
        <Pix sx={{ fontSize: "28px" }} />
        <Typography variant="h4" sx={{ fontWeight: "16px" }}>
          FinanceApp
        </Typography>
      </FlexBetween>
      {/* RIGHT SIDE*/}
      <FlexBetween gap="0.75rem">
        <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
          <Link
            to="/"
            onClick={() => setSelected("dashboard")}
            style={{
              color:
                selected === "dashboard" ? "inherit" : palette.primary[700],
              textDecoration: "inherit",
            }}
          >
            Dashboard
          </Link>
        </Box>

        <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
          <Link
            to="/predictions"
            onClick={() => setSelected("predictions")}
            style={{
              color:
                selected === "predictions" ? "inherit" : palette.primary[700],
              textDecoration: "inherit",
            }}
          >
            Predictions
          </Link>
        </Box>
      </FlexBetween>
    </FlexBetween>
  );
};
