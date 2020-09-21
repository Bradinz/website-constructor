import image from "./assets/image.png";
import {
  TextBlock,
  TitleBlock,
  ImageBlock,
  TextColumnsBlock,
} from "./classes/blocks";
import { css } from "./utils";

const text = `
All my projects are here: <a href="https://github.com/artakharutyunyan" target="_blank">Artak Harutyunyan</a>. You will find very interesting projects: Chess, Tetris, Star Match Game etc.. Come and join!
`;

export const model = [
  new TitleBlock("Website constructor on pure JavaScript!", {
    tag: "h2",
    styles: css({
      background: "linear-gradient(to right, #ff0099, #493240)",
      color: "#fff",
      padding: "1.5rem",
      "text-align": "center",
    }),
  }),
  new ImageBlock(image, {
    styles: "padding: 2rem 0;display: flex;justify-content: center;",
    alt: "my image",
    imageStyles: "width: 500px; height: auto;",
  }),
  new TextColumnsBlock(
    [
      "Application on pure JavaScript, without any library",
      "Based on SOLID and OOP principles ",
      "JavaScript is simple and interesting.",
    ],
    {
      styles:
        "padding: 2rem 0; color: #fff;background: linear-gradient(to bottom, #8e2de2, #4a00e0);font-weight: bold;",
    }
  ),
  new TextBlock(text, {
    styles:
      "background: linear-gradient(to left, #f2994a, #f2c94c);font-weight: bold;padding: 1rem;",
  }),
];
