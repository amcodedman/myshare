const express = require("express");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const axios = require("axios");
const { User } = require("../models/users");
const { Admin } = require("../models/users");

exports.GetGeo = async (data) => {
  try {
  

  
    
    const checkSecure = await axios.get(
      `http://v2.api.iphub.info/ip/${data.ipaddress}`,
      {
        headers: { "X-Key": `${process.env.IPUB}=` },
      }
    );


    const secure = await checkSecure.data;
    data["blockrate"]=secure.block
    return data;
  } catch (error) {
    console.log({ errorss: error });
  }
};

exports.checkToken = async (req, res, next) => {
  try {
    console.log({headers:req.headers})
    console.log({head:req})
    let checker = req.headers["authuser"];

    if (checker) {
      const datas = jwt.verify(req.headers["authuser"], process.env.DB_SECRET);

      const user = await User.findOne({ _id: datas._id });
      if (user) {
        if (user.active) {
          const responsefull = await fetch(
            `https://api.ipdata.co/?api-key=${process.env.ipgeoAPI}`
          );
          const ipa = await responsefull.json();

          const userphonecode = await ipa.calling_code;
          const continent = await ipa.continent_name;
          const state_c = await ipa.region;

          res.locals.userData = user;
        }
      } else {
        console.log("No user found");
      }
      next();
    } else {
      next();
    }
  } catch (error) {
    res.status(401).send({ error: "bad token" });
    console.log(error);
  }
};

exports.Checkuser = async (req, res, next) => {
  const user = res.locals.userData;

  req.user = user;
  next();
};
