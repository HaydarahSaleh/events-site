import { CardMedia } from "@mui/material";
import "moment/locale/ar-sa";
import "moment/locale/en-au";
import React, { memo } from "react";

function ImageCard({ image, data, hanleClick, index, alt }) {
  return (
    <div className="imgDiv" onClick={() => hanleClick(image, data)}>
      <CardMedia
        component="img"
        title={"source"}
        image={image?.src}
        alt={alt}
        index={index}
        height={index + 1}
        style={{
          borderRadius: 12,
        }}
      />
    </div>
  );
}

export default memo(ImageCard);
