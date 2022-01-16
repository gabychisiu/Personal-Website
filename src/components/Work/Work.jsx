import "./styles.css";
import atvs from "./atvs.png";
import users from "./users.png";
import mario from "./mario.png";
import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import { FaGithub } from "react-icons/fa";

export const Work = () => {
  return (
    <ImageList className="image-list">
      <ImageListItem key="Subheader" cols={3}></ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
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
  );
};

const itemData = [
  {
    img: atvs,
    title: "Atv",
    link: "https://github.com/gabychisiu/SIIT-Marius-Gabriel-Chisiu/tree/master/react-basics-homework",
  },
  {
    img: users,
    title: "Mario",
    link: "https://github.com/gabychisiu/SIIT-Marius-Gabriel-Chisiu/tree/master/06-week",
  },
  {
    img: mario,
    title: "Camera",
    link: "https://github.com/gabychisiu/Personal-Website",
  },
];
