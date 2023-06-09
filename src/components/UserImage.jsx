import { Box } from "@mui/material";
import { server } from "..";
import dummy from "../assets/dummy.jpg";

const UserImage = ({ image, size = "60px" }) => {
  const imgSrc = `${server}/assets/${image}`;
  // console.log(imgSrc);

  return (
    <Box width={size} height={size}>
      <img
        style={{ objectFit: "cover", borderRadius: "50%" }}
        width={size}
        height={size}
        alt="user"
        src={imgSrc ? imgSrc : dummy}
      />
    </Box>
  );
};

export default UserImage;
