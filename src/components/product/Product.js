import React, { useState } from "react";
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
import ProductListing from "../Home/ProductListing";

const Product = () => {
  const width = 400;
  const [checked, setChecked] = useState([]);

  const handleChange = (e) => {
    const {value} = e.target
    setChecked([...checked,value]);
  };

  console.log(checked);

  return (
    <>
      <Box
        id="accordingProduct"
        sx={{ px: {lg:"60px",xs:"30px"}, mt: "100px", display: "flex" }}
      >
        <Box sx={{ width:{lg: "400px"}, height: "50vh" }}>
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
                sx={{ my: "0px !important" }}
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
                      onChange={handleChange}
                      name="checkedA"
                      value="Tops (33)"
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
                      onChange={handleChange}
                      name="checkedB"
                      value="Check me"
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
                      onChange={handleChange}
                      name="checkedC"
                      value="Check me2"
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
                  label="Check me2"
                />
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                sx={{ my: "0px !important" }}
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
                      onChange={handleChange}
                      name="checkedA"
                      value="Tops (33)"
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
                      onChange={handleChange}
                      name="checkedB"
                      value="Check me"
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
                      onChange={handleChange}
                      name="checkedC"
                      value="Check me2"
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
                  label="Check me2"
                />
              </AccordionDetails>
            </Accordion>
          </Box>
        </Box>
        <Box
          sx={{
            width:{lg:`calc(100% - ${width}px)`},
          }}
        >
          <ProductListing />
        </Box>
      </Box>
    </>
  );
};

export default Product;
