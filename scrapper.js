/**
 * Goes to the specified URL by the challenge, inserts a script into the page and extracts the data
 * @returns JSON string with the webpage's table data
 */
async function getTableData()
{
    const puppeteer = require('puppeteer');
    const siiURL = `https://www.sii.cl/servicios_online/1047-nomina_inst_financieras-1714.html`;

    const browser = await puppeteer.launch({"headless":false});
    const page = await browser.newPage();
    await page.goto(siiURL, { waitUntil: 'networkidle2' });
    
    await page.addScriptTag({path: 'extract-data.js'});

    const data = await page.evaluate(() => extractData());
    
    await browser.close();

    return data;
}

function saveFile(json)
{
    const fs = require("fs");
    fs.writeFileSync("data.json",json);
}

(async () => saveFile(await getTableData()))();


