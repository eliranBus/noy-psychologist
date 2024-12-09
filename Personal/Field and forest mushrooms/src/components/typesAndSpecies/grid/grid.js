import * as React from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Element = ({ data: { id, avatar, cellClassName, feature, label } }) => {
  return (
    <Link
      className={cellClassName}
      id={id}
      to={`/types-and-species/type-identification/${id}`}
    >
      <Grid item xs={12}>
        <Item>
          <Grid container spacing={5}>
            <Grid item>
              <ButtonBase
                sx={{ width: 200, height: 200 }}
                aria-label={label}
                title={label}
              >
                <LazyLoadImage alt="complex" src={avatar} />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1" component="div">
                    <MultiLingualContent contentID={feature} />
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Item>
      </Grid>
    </Link>
  );
};

const dataRenderer = (data) =>
  data.map((type) => (
    <Grid item md={4}>
      <Element data={type} />
    </Grid>
  ));

const ComplexGrid = ({ data }) => (
  <Paper
    sx={{
      p: 2,
      margin: "auto",
      maxWidth: 800,
      flexGrow: 1,
      backgroundColor: (theme) =>
        theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    }}
  >
    <div className="typesKeyWrapper">
      <p className="typesKeyTitle">
        <MultiLingualContent contentID={"typesKey1"} />
      </p>
      <p className="typesKeySubtitle">
        <MultiLingualContent contentID={"typesKey2"} />
      </p>
    </div>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={4}>
        {dataRenderer(data)}
      </Grid>
    </Box>
  </Paper>
);

export default ComplexGrid;
