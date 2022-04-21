/**
 * Script to be inserted into the page specified by the challenge.
 * This function reads the table inside the page and extracts its data
 * @returns JSON text with array containing the table details
 */
 function extractData()
 {
     const table = document.querySelector("table");
     
     let containerTitles = {};
     let titles = table.children[0].rows[0].children;
 
     for(let i = 0; i < titles.length; i++)
         containerTitles[i] = titles[i].innerHTML;
     
 
     let data = [];
     let contentRows = table.children[1].rows;
     for(let i = 0; i < contentRows.length; i++)
     {
         let row = table.children[1].rows[i].children;
         let obj = {};
 
         for(let j = 0; j < row.length; j++)
             obj[containerTitles[j]] = row[j].innerHTML;
         
         
         if(obj[containerTitles[0]])
             data.push(obj);
     }
 
     return JSON.stringify(data);
 }