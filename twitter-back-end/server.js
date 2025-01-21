//export const Data = {
//    domain: 'htmllessons.io'
//}
//module.exports ={Data}
//import { appData } from './main.js';

import express from "express";
import { twitRouter } from "./source/twitter/twit.controler.js";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.set("views", path.join(__dirname, "/source/views"));
app.set("view engine", "ejs");

async function main() {
  app.use(express.json());

  app.use("/api/twiter", (req,res)=>{
    res.render("twit", {
      twit:{
        header: "First twit",
        desc: "lorem"
      }
    })
  })

  app.use("/api/twits", twitRouter);

  app.get("/profile", (req, res) => {
    res.render("profile", {
      user: {
        name: "Denis Dikun",
        age: 19
      },
    });
  });

  // app.all("*", (req, res) => {
  //   res.status(404).json({ message: "Not Found" });
  // });

  app.use('/api/twit', (req,res)=>{
      res.status(200).json({
          message: 'success'
      })
  })
  // console.log(process.env.PORT)

  app.listen(process.env.PORT || 4200, () => {
    console.log("Server is running on port 4200");
  });
}
main();
