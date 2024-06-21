import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import useStyles from "../../styles/pages/photos/imageListStyles";
import { Container } from "@mui/system";

export default function StandardImageList(props) {
  let { images } = props;
  const classes = useStyles();

  return (
    <ImageList
      sx={{ width: "xl", height: 450 }}
      cols={3}
      className={classes.root}
      gap={30}
    >
      {images?.map((item) => (
        <ImageListItem key={item.id} className={classes.imageList}>
          <img
            src={`/api/file/download/${item?.uuid}?size=medium`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
