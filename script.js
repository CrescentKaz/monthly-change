const today = new Date();
const day = today.getDate();
const month = today.getMonth()+1;
const year = today.getFullYear();

// the follow two lines are for changing the html, need update to change the css. may require playing with it. might need to do a css and html file per month?? have each html call it's respective css? can you call css from the js?
const filename = `page-${year}-${month}-${day}.html`;
window.location.href = filename;
