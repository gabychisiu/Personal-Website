import "./styles.css";
import atv from "./atv.png";
import users from "./users.png";
import mario from "./mario.png";
import project from "./project.png";
import * as React from "react";
import { ImageList, Box } from "@mui/material";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import { FaGithub } from "react-icons/fa";

export const Work = () => {
  return (
    <div>
      <Box>
        <ImageList cols={2} className="image-list">
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=200&fit=crop&auto=format`}
                srcSet={`${item.img}?w=200&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
              <ImageListItemBar
                title={item.title}
                subtitle={item.author}
                actionIcon={
                  <IconButton
                    sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                    aria-label={`info about ${item.title}`}
                    href={item.link}
                    target="_blank"
                  >
                    <FaGithub />
                  </IconButton>
                }
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </div>
  );
};

const itemData = [
  {
    img: project,
    title: "Personal projects",
    link: "https://github.com/gabychisiu/Personal-Website",
  },
  {
    img: atv,
    title: "HTML & CSS",
    link: "https://github.com/gabychisiu/SIIT-Marius-Gabriel-Chisiu/tree/master/13-week/react-basics-homework",
  },
  {
    img: users,
    title: "Comment Box",
    link: "https://github.com/gabychisiu/SIIT-Marius-Gabriel-Chisiu/tree/master/05-week",
  },
  {
    img: mario,
    title: "The Player",
    link: "https://github.com/gabychisiu/SIIT-Marius-Gabriel-Chisiu/tree/master/06-week",
  },
];
