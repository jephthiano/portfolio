
export const server = process.env.REACT_APP_SERVER_URL;

export const auth = process.env.REACT_APP_AUTH;

export const imgServer = process.env.REACT_APP_MEDIA_SERVER;

export const err_msg = "<b class='j-text-color8'>Sorry!!!</b><br>";


// image data
const image = "/icon.jpg";

//skills type data
const skillData = [
    {name: "FRONT-END", short: "frontend dev",},
    {name: "BACK-END", short: "backend dev",},
    {name: "DATABASE", short: "database",},
    {name: "OTHERS", short: "others",},
]

//social handle data
const socialHandle = [
    {"id":"2","s_name":"twitter","s_icon":"fab fa-twitter","s_link":"https://www.twitter.com\/almost_invisibu"},
    {"id":"3","s_name":"linkedin","s_icon":"fab fa-linkedin","s_link":"https://linkedin.com\/in\/jephthahooh"},
    {"id":"4","s_name":"whatsapp","s_icon":"fab fa-whatsapp","s_link":"https://wa.me\/2349024093985"},
    {"id":"5","s_name":"telegram","s_icon":"fab fa-telegram","s_link":"https://telegram.me\/2349024093985"},
]

//skill data
const skill = [
    {"id":"1","s_type":"frontend dev","s_skill":"HTML","s_level":"Expert"},
    {"id":"2","s_type":"frontend dev","s_skill":"CSS","s_level":"Expert"},
    {"id":"2","s_type":"frontend dev","s_skill":"Bootstrap","s_level":"Expert"},
    {"id":"18","s_type":"frontend dev","s_skill":"SASS","s_level":"Experienced"},
    {"id":"3","s_type":"frontend dev","s_skill":"JavaScript","s_level":"Expert"},
    {"id":"4","s_type":"frontend dev","s_skill":"JQuery","s_level":"Expert"},
    {"id":"5","s_type":"frontend dev","s_skill":"React JS","s_level":"Expert"},
    {"id":"9","s_type":"backend dev","s_skill":"PHP","s_level":"Expert"},
    {"id":"21","s_type":"backend dev","s_skill":"Node JS","s_level":"Expert"},
    {"id":"21","s_type":"backend dev","s_skill":"Express JS","s_level":"Expert"},
    {"id":"20","s_type":"database","s_skill":"SQL","s_level":"Expert"},
    {"id":"10","s_type":"database","s_skill":"MySQL","s_level":"Expert"},
    {"id":"10","s_type":"database","s_skill":"MongoDB","s_level":"Expert"},
    {"id":"10","s_type":"database","s_skill":"Redis","s_level":"Expert"},
    {"id":"19","s_type":"database","s_skill":"PostgreSQL","s_level":"Experienced"},
    {"id":"11","s_type":"others","s_skill":"SEO","s_level":"Expert"},
    {"id":"6","s_type":"others","s_skill":"JSON & XML","s_level":"Expert"},
    {"id":"7","s_type":"others","s_skill":"Axios","s_level":"Expert"},
    {"id":"8","s_type":"others","s_skill":"WebSocket","s_level":"Expert"},
    {"id":"16","s_type":"others","s_skill":"Git & GitHub","s_level":"Expert"},
    {"id":"17","s_type":"others","s_skill":"UI\/UX Design","s_level":"Average"},
]

//project data
const project = [
    {"id":"1","p_type":"web","p_name":"Fintech/VTU App (Ongoing)","p_link":"https://jeph-vtu.vercel.app","p_rank":1,"p_color":"black","p_languages":"React JS, CSS, JQuery, NodeJS, Express JS, MongoDB, Mongoose","p_info":"A Fintech app developed with payment and transfer features.\r\nIt features include:\r\n- Peer to Peer Transfer\r\n- Bank Transfer \r\n- Card Payment\r\n- Generate Bank Account\r\n- Bill Payment [Airtime, Data, Electricity, Education, internet, CableTv]\r\n- Many more features","projectImg":"fintech.jpg"},
    {"id":"2","p_type":"web","p_name":"Valencia Admission Page","p_link":"https://valenciaschools-ng.com/admissions/","p_rank":1,"p_color":"black","p_languages":"HTML, CSS, JavaScript, JQuery, PHP, mySQL","p_info":"Admission landing page designed for Valencia school.\r\nIt features include:\r\n- Landing Page\r\n- Collecting User Infomation \r\n- Contact Us Form\r\n- Social Handles Connects\r\n- Many more features","projectImg":"valencia.jpg"},
    {"id":"3","p_type":"web","p_name":"ClearLink Landing Page","p_link":"https://jephthiano-clearlink.vercel.app","p_rank":2,"p_color":"black","p_languages":"HTML, CSS, JavaScript, React JS","p_info":"A single page landing page.\r\nIt features include:\r\n- Landing Page\r\n- Icons \r\n- Responsiveness\r\n- Social Handles Connects\r\n- Many more features","projectImg":"clearlink.jpg"},
    {"id":"4","p_type":"web","p_name":"Dashboard Page","p_link":"https://jeph-dashboard.vercel.app","p_rank":2,"p_color":"black","p_languages":"HTML, CSS, JavaScript, React JS","p_info":"A single page admin dashboard.\r\nIt features include:\r\n- Dashboard Page\r\n- Chart and Icons\r\n- Responsiveness\r\n- Many more features","projectImg":"dashboard.jpg"},
    {"id":"4","p_type":"web","p_name":"Logistics Landing Page","p_link":"https://smartmovelogis.000webhostapp.com","p_rank":2,"p_color":"black","p_languages":"HTML, CSS, JavaScript, Jquery, PHP, AJAX, JSON and XML","p_info":"A 6 pages websites which focus on Logistics.\r\nIt features include:\r\n- Landing Page\r\n- Whatsapp Connect and Call Buttons\r\n- Contact Us, FAQ, Policy Privacy and co Pages\r\n- Social Handles Connects\r\n- Social Handles Connects\r\n- Many more features","projectImg":"smartmovelog.jpg"},
    {"id":"4","p_type":"web","p_name":"Real Estate Website","p_link":"https://jephrealestate.000webhostapp.com","p_rank":2,"p_color":"black","p_languages":"HTML, CSS, JavaScript, Jquery, PHP, MySql, AJAX, JSON and XML","p_info":"This project approaches the problem of finding a real estate property within a locality through a certain real estate management firm.\r\nIt features include:\r\n- Admin section with different admin level\r\n- Uploading new, editing and deleting property at the admin section\r\n- Browsing new property by user\r\n- Users can make appointment on property that entice them\r\n- Blog section\r\n- Comment can be added on blog\r\n- Articles can be shared on other platform with just a click\r\n- Many more features","projectImg":"realestate.jpg"},
    // {"id":"6","p_type":"web","p_name":"Single Vendor-Multi Product Ecommerce Web App","p_link":"https://mystoremrkt.000webhostapp.com","p_rank":2,"p_color":"black","p_languages":"HTML, CSS, JavaScript, Jquery, PHP, MySql, AJAX, JSON and XML","p_info":"This project renders an Ecommerce web app which features multi-products run by a single vendor.\r\nIt features include:\r\n- Admin section with different admin level\r\n- User section with login and registration features\r\n- Cart and checkout\r\n- Tracking of order status\r\n- Online payment with payment gateway\r\n- Option of making payment when order is delivered or picked up\r\n- Pickup and home delivery options\r\n- Print receipt\r\n- All transactions and it yearly, monthly, daily data\r\n- Many more features","projectImg":"mystore.jpg"},
    // {"id":"6","p_type":"web","p_name":"Single Vendor Food Ordering Web App","p_link":"https://eatwellre.000webhostapp.com","p_rank":2,"p_color":"black","p_languages":"HTML, CSS, JavaScript, Jquery, PHP, MySql, AJAX, JSON and XML","p_info":"This project renders an food ordering and delivery web app run by a single vendor.\r\nIt features include:\r\n- Admin section with different admin level\r\n- User section with login and registration features\r\n- Cart and checkout\r\n- Tracking of order status\r\n- Online payment with payment gateway\r\n- Option of making payment when order is delivered or picked up\r\n- Pickup and home delivery options\r\n- Print receipt\r\n- All transactions and it yearly, monthly, daily data\r\n- Many more features","projectImg":"eatwell.jpg"},
    // {"id":"7","p_type":"web","p_name":"Foundation\/Charity Website","p_link":"https://jephdation.000webhostapp.com","p_rank":3,"p_color":"black","p_languages":"HTML, CSS, JavaScript, Jquery, PHP, MySql, AJAX, JSON and XML","p_info":"This project is based on foundation website. and it can be run by charity\/foundation organization.\r\nIt features include:\r\n- Admin section with different admin level\r\n- Admin controls everything from the admin section\r\n- Option for donation with payment gateway\r\n- News and progarmmes section for users\r\n- Users can comment on each news\r\n- Users can share news with one click\r\n- Many more features","projectImg":"foundation.jpg"},
    // {"id":"8","p_type":"web","p_name":"Blog\/News Website","p_link":"https://jobsblog333.000webhostapp.com","p_rank":3,"p_color":"black","p_languages":"HTML, CSS, JavaScript, Jquery, PHP, MySql, AJAX, JSON and XML","p_info":"This project is based on blog\/news website.\r\nIt features include:\r\n- Admin section with different admin level\r\n- Admin controls everything from the admin section\r\n- Users read news\r\n- Users can comment on each news\r\n- Users can share news with one click\r\n- Many more features","projectImg":"blog.jpg"}
]


// combine all 
export const initialNeededData = {
    image : image,
    skillData : skillData,
    socialHandle : socialHandle,
    skill : skill,
    project : project,
}
