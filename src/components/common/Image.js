import { Link } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import React from "react";

function Image({ image, path, props }) {
  return path ? (
    <Link>
      <CardMedia
        component="img"
        image={`/api/file/download/${image}`}
        {...props}
      />
    </Link>
  ) : (
    <CardMedia
      component="img"
      image={`/api/file/download/${image}`}
      {...props}
    />
  );
}

export default Image;
