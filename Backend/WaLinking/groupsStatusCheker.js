const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");
const route=express.Router()
const fetchTitles = async (waId) => {
    try {
        const url = "https://chat.whatsapp.com/" + waId;
        // console.log(url);
        const response = await axios.get(url);

        const html = response.data;

        const $ = cheerio.load(html);

        const titles = [];

        $('h2').each((_idx, el) => {
            const title = $(el).text()
            titles.push(title)
        });

        return titles;
    } catch (error) {
        throw error;
    }
};
route.get("/check/:id", (res, req) => {
    // req.send(res.params.id);
    fetchTitles(res.params.id)
        .then((titles) => {
            // console.log(titles);
            if (titles[0] == '') {
                req.send({ "title": -1 });
            }
            else {
                req.send({ "title": titles[0] });
            }
        });


})

module.exports=route;