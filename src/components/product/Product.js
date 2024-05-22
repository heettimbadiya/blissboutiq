import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Checkbox,
  Typography,
  FormControlLabel,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Product = () => {
  const width = 400;
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <>
      <Box
        id="accordingProduct"
        sx={{ px: "60px", mt: "100px", display: "flex" }}
      >
        <Box sx={{ width: { width }, height: "50vh" }}>
          <Box>
            <Box
              sx={{
                padding: "8px 0",
              }}
            >
              102 Items
            </Box>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                sx={{my:"0px !important"}}
              >
                <Typography sx={{ p: "8px 0" }}>Category</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <FormControlLabel
                  sx={{
                    display: "inline-block",
                    "& span": {
                      fontSize: "14px",
                    },
                  }}
                  control={
                    <Checkbox
                      //   checked={checked}
                      onChange={handleChange}
                      name="checkedA"
                      sx={{
                        color: "#000",
                        "&.Mui-checked": {
                          color: "#000",
                        },
                        "& .MuiSvgIcon-root": {
                          fontSize: 23,
                        },
                      }}
                    />
                  }
                  label="Tops (33)"
                />
                <FormControlLabel
                  sx={{
                    display: "block",
                    "& span": {
                      fontSize: "14px",
                    },
                  }}
                  control={
                    <Checkbox
                      //   checked={checked}
                      onChange={handleChange}
                      name="checkedB"
                      sx={{
                        color: "#000",
                        "&.Mui-checked": {
                          color: "#000",
                        },
                        "& .MuiSvgIcon-root": {
                          fontSize: 23,
                        },
                      }}
                    />
                  }
                  label="Check me"
                />
                <FormControlLabel
                  sx={{
                    display: "block",
                    "& span": {
                      fontSize: "14px",
                    },
                  }}
                  control={
                    <Checkbox
                      //   checked={checked}
                      onChange={handleChange}
                      name="checkedC"
                      sx={{
                        color: "#000",
                        "&.Mui-checked": {
                          color: "#000",
                        },
                        "& .MuiSvgIcon-root": {
                          fontSize: 23,
                        },
                      }}
                    />
                  }
                  label="Check me"
                />
              </AccordionDetails>
            </Accordion>
          </Box>
        </Box>
        <Box
          sx={{
            width: `calc(100% - ${width}px)`,
          }}
        ></Box>
      </Box>
    </>
  );
};

export default Product;
