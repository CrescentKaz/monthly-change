const today = new Date();
const day = today.getDate();
const month = today.getMonth()+1;
const year = today.getFullYear();

// the following two lines are for changing the html, need update to change the css. 
// may require playing with it. might need to do a css and html file per month?? 
// have each html call it's respective css? can you call css from the js?
// const filename = `page-${year}-${month}-${day}.html`;
// window.location.href = filename;

if (month === 1) {
//    <styles src="./01-jan.css"></styles>
    holiday_name.innerText = "Happy New Year!";
    holiday_tagline.innerText = year;
} else if (month === 2) {
//    <styles src="./02-feb.css"></styles>
    holiday_name.innerText = "Happy Valentine's Day";
    holiday_tagline.innerText = "OXO <3 <3 <3 XOX";
} else if (month === 3) {
//    <styles src="./03-mar.css"></styles>
    holiday_name.innerText = "Happy St. Patrick's Day";
    holiday_tagline.innerText = "(insert 4-leaf clover here)";
} else if (month === 4) {
//    <styles src="./04-apr.css"></styles>
    holiday_name.innerText = "Happy April Fools!";
    holiday_tagline.innerText = "April showers bring May flowers~";
} else if (month === 5) {
//    <styles src="./05-may.css"></styles>
    holiday_name.innerText = "!Feliz Cinco de Mayo!";
    holiday_tagline.innerText = "(insert colored paper cutout banner here)";
} else if (month === 6) {
//    <styles src="./06-jun.css"></styles>
    holiday_name.innerText = "Happy Summer!";
    holiday_tagline.innerText = "Iced tea in my hand and toes in the sand~";
} else if (month === 7) {
//    <styles src="./07-jul.css"></styles>
    holiday_name.innerText = "Happy Fourth of July!";
    holiday_tagline.innerText = "(insert fireworks here)";
} else if (month === 8) {
//    <styles src="./08-aug.css"></styles>
    holiday_name.innerText = "Happy Back-To-School Days!";
    holiday_tagline.innerText = "Got your summer homework done?";
} else if (month === 9) {
//    <styles src="./09-sep.css"></styles>
    holiday_name.innerText = "It's September.";
    holiday_tagline.innerText = "It's too hot in Texas to think of anything for this month.";
} else if (month === 10) {
//    <styles src="./10-oct.css"></styles>
    holiday_name.innerText = "Happy Halloween!~";
    holiday_tagline.innerText = "It's the spooky season of fear and terror~";
} else if (month === 11) {
//    <styles src="./11-nov.css"></styles>
    holiday_name.innerText = "Happy Thanksgiving!";
    holiday_tagline.innerText = "Thankful to be alive and have all the roller coaster adventures life brings.";
} else if (month === 12) {
//    <styles src="./12-dec.css"></styles>
    holiday_name.innerText = "Happy Holidays!";
    holiday_tagline.innerText = "Whether it be Christmas, Kawanza, the Winter Solstice or something else, hope it's a good one to end out the year.";
} else {
    holiday_name.innerText = "Error";
    holiday_tagline.innerText = "Contact the Dev and let them know the month didn't register correctly.";
};

