const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");
const { response } = require("express");
var fs = require("fs"); //require fs(file system) module
var request = require("request");


const PORT = process.env.PORT || 4000;

const app = express();

const targetURL= 'https://www.die-wg-boerse.de/wg-suche/suche/';

/* async function immoScraper() {
    const immoArray = [];

    axios(url1).then((response) => {
        const html_data = response.data;
        const $ = cheerio.load(html_data);
        console.log($.html());
       
    const selectedItem = 'div.immo_tabelle > div.ueberschrift_auto > div.immo_tabelle_inhalt_preis > div.immo_tabelle_inhalt_standort';
    
    const keys = [
        'Card',
        'Title',
        'Title2',
        'Price',
        'Location',
      ];

      $(selectedItem).each((parentIndex, parentElem) => {
        let keyIndex = 0;
        const coinDetails = {};
        if (parentIndex <= 9) {
          $(parentElem)
            .children()
            .each((childId, childElem) => {
              const value = $(childElem).text();
              if (value) {
                coinDetails[keys[keyIndex]] = value;
                keyIndex++;
              }
            });
          immoArray.push(coinDetails);
        }
      });

    });

    return immoArray;
} */

const getApp = ($) => {
    const divs = $('.immo_tabelle_container div');
    const appData = [];

    divs.each((index, el) => {
        const item = {};

        item.name = $(el).find('.ueberschrift_auto').text(); // Selector to get the name of a pokemon 
        item.price = $(el).find('.immo_tabelle_inhalt_preis').text(); // Selector to get the price of a pokemon 
        item.location = $(el).find('.immo_tabelle_inhalt_standort').text();
        appData.push(item)
    })

    fs.writeFile("appData.json", JSON.stringify(appData, null, 2), (err) => { 
		if (err) { 
			console.error(err); 
			return; 
		} 
		console.log("Data written to file successfully!"); 
	}); 
}
/* app.get('/immo', async (req, res) => {
    try {
        const immo = immoScraper();
        return res.status(200).json({
            result: immo,
        });
    } catch(err) {
        return res.status(500).json({
            err: err.toString(),
        });
    }
});  */

axios.get(targetURL).then((response) => { 
	const body = response.data; 
	const $ = cheerio.load(body); // Load HTML data and initialize cheerio 
	getApp($) 
});

app.get('/today', (req, res) => {
axios.get(targetURL).then((response) => { 
	const body = response.data; 
	const $ = cheerio.load(body); // Load HTML data and initialize cheerio 
	getApp($) 
});
});

/* app.get("/test", function(req, res) {
    //calling request function
    request(url1, function(error, response, body) {
      if (!error && response.statusCode == 200) {
        // writing the response to a file named data.html
        fs.writeFileSync("data.html", body);
      }
    });
}); */


app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});