const express = require('express');
const app = express();
const PORT = 8000;

const axios = require('axios');
const cheerio = require('cheerio');

// Web Scraper

const URL = 'https://zealesports.com/news.html';
let data = [];

axios(URL).then((response) => {
    const htmlParser = response.data;

    const $ = cheerio.load(htmlParser);

    $('.news', htmlParser).each(function () {
        const title = $(this).find('.title').text();
        const explain = $(this).find('.explain').text();
        const thumbnail = $(this).find('.news a img').attr('src');

        data.push({ title, explain, thumbnail });
    });
    console.log(data);
});

app.listen(PORT);
