import React from "react";
// import './Portfolio.css'
import "./TrandingProduct.css";
import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import GitHubIcon from "@mui/icons-material/GitHub";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import StorageOutlinedIcon from "@mui/icons-material/StorageOutlined";
import DetailsOutlinedIcon from "@mui/icons-material/DetailsOutlined";
// import PortfolioDetailsModal from './PortfolioDetailsModal/PortfolioDetailsModal';

import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
const BootstrapTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.white,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: "rgba(0, 0, 0, 0.87)",
  },
}));

const TrandingProduct = ({ portfolio }) => {
  const { img_1, title, description, gitHubCode, liveSite, serverCode, aos } =
    portfolio;

  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState();

  const handleClose = () => {
    setOpen(false);
  };
  const handleSetScroll = () => {
    setScroll();
    setOpen(true);
  };
  return (
    <Grid item xs={12} sm={12} md={4} data-aos={aos} data-aos-duration="2000">
      <Box className="portfolio-card-context-containers project">
        <h6 className="tittles" style={{ fontStyle: "italic" }}>
          {" "}
          Sale
        </h6>
        <img src={img_1} alt="" className="image" />
        {/* <h3 style={{color:"white"}}>vegetable</h3>
                <h3 style={{color:"white"}}>290 Taka</h3> */}

        <Box className="overlay">
          <Box className="portfolioContent">
            <Typography variant="p" style={{ fontStyle: "italic" }}>
              {
                // title
              }
            </Typography>{" "}
            <br />
            <Typography variant="p" sx={{ color: "yellow", fontSize: 10 }}>
              <span
                className="font-bold text-green-400"
                style={{ fontStyle: "italic" }}
              >
                Implements By:
              </span>{" "}
              {description.slice(0, 100)}
            </Typography>
            <Box style={{ display: "flex" }} className="flex justify-around">
              <Box onClick={handleSetScroll}>
                <BootstrapTooltip title="Details" placement="top-end" arrow>
                  <DetailsOutlinedIcon sx={{ color: "limegreen" }} />
                </BootstrapTooltip>
              </Box>

              <Box className="ms-2 me-2">
                <a
                // href=
                // {liveSite}
                // target="_blank" rel="noopener noreferrer"
                >
                  <BootstrapTooltip title="Live Site" placement="top-end" arrow>
                    <LiveTvOutlinedIcon sx={{ color: "limegreen" }} />
                  </BootstrapTooltip>
                </a>
              </Box>
              <Box className="ms-2">
                <a
                // href={gitHubCode} target="blank"
                >
                  <BootstrapTooltip
                    title="Client Site Code"
                    placement="top-end"
                    arrow
                  >
                    <GitHubIcon sx={{ color: "limegreen" }} />
                  </BootstrapTooltip>
                </a>
              </Box>

              {serverCode && (
                <Box className="ms-2">
                  <a
                  // href={serverCode} target="_blank" rel="noopener noreferrer"
                  >
                    <BootstrapTooltip
                      title="Server site Code"
                      placement="top-end"
                      arrow
                    >
                      <StorageOutlinedIcon sx={{ color: "limegreen" }} />
                    </BootstrapTooltip>
                  </a>
                </Box>
              )}
            </Box>
          </Box>
        </Box>
      </Box>
      <h3 style={{ color: "white", fontStyle: "italic" }}>{title}</h3>
      <h3 style={{ color: "white", fontStyle: "italic" }}>380 Taka</h3>
      {/* <PortfolioDetailsModal
                handleClose={handleClose}
                open={open}
                scroll={scroll}
                portfolio={portfolio} >

            </PortfolioDetailsModal> */}
    </Grid>
  );
};

export default TrandingProduct;
