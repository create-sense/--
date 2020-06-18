//jshint esversion:6
const author = "Eunice and Abi from Create Sense";
let date = new Date();
let index = 0;
let list = [{
        title: "Greetings!",
        author: author,
        date: "2020-06-11",
        text: ["Life as we know it has changed. The year is 2020 and summer has steadily crept up on us while taking the courtesy of maintaining a social distance of six feet. The virus has grounded the planes of productivity both literally and figuratively, as everyone and their mother has been bound to the very four walls that months ago were never meant to house productivity. When solace turns to solitude, when full-time parents have to put in twice the overtime, and when schoolteachers double as live streamers. In the year that is 2020, how could new projects, plans, and ideas possibly grow? Well, here I am speaking as a collective on the birth of a project. One that seeks to transform an industry that’s been defined by some pretty big giants. While working from the ground up in such an industry is a daunting task, what fuels the lightbulbs of creativity that has inspired this project has and will always be creatives like ourselves. We are convinced that from the drawing boards to our launch date, your thoughts and inputs as potential users will be the driving force on many of the major features we are to incorporate.",
               "Embedded in the fibers of our innovation is creativity, simplicity, and most importantly inclusivity. This is a call to the diverse network of creatives, big or small, to help us help you widen your outreach to the greater community. We want to break down the barriers that prevent seamless connections to share your concepts, products, and ideas. At our core, we are a service designed for the creatives and we would like to ensure that our services are customized to your ideas.",
                "Create Sense, that is who we are. A small team that wants an open forum of dialogue with its users. Unlike the giants that dominate the industry, our core is given life through the relationships that we build with you. So with that, we extend our hands out and welcome you on this journey. One filled with growth, challenges, and innovation. As we have opened our arms to you, we humbly ask that you open your arms to us and take the time to help us get to know you. Who are you? As a creative, where are you at this point? Lastly, what hopes do you have in this relationship with us? And that’s only an abbreviation of the list.",
                "Web Branding and marketing are not for the faint of heart. You are constantly tasked with learning, developing, fine-tuning, and modernizing then repeating the cycle with every new era of design. New technologies are almost always introduced daily and it has become an overwhelming challenge to stay informed about every new flashy trend and feature; however, we are set on delivering the highest quality designs to relieve you of an exhausting chase. From the eye-catching trends of neumorphism and futuristic design to the whims of flat art, modern techniques are taking online marketing by storm and our primary objective is to take you on the journey of your online success story equipped with the tools of modern art. Online branding is the foundation of establishing an outreach and creating a memorable image to obtain an instant edge over competitors. Create Sense will be built to simplify and enhance the design process. Your part throughout the preliminary stages of our launch is even simpler: we ask the questions and you respond to ensure our released services are specially catered to your business needs. We will inform you about every release (beta, finalized, or otherwise) and trial features throughout. No matter what stage your business finds itself, you can find comfort in the fact that our digital marketing strategies will level the playing field and boost your platform."
    ] 
    }
];

let ttl = document.getElementById("title");
let txt = document.getElementById("content");
let aut = document.getElementById("author");
let dat = document.getElementById("date");
let lis = document.getElementById("list");
// list.forEach(function (item) {
//     string = 
// });
// root.innerHTML = string;
// controls = controls preload = 'none'/
let string = "<h1 style='color: white;'>Menu</h1><div class='flexnum'>";
list.forEach(function (item) {
    idx = list.indexOf(item);
    string = string + "<button onclick='start(" + idx + ");'>" + item.title + "</button>";
});
lis.innerHTML = (string + "</div>");
// (document.getElementsByClassName('pad')[0]).css({
//     'height': 'inherit'
// });
//(document.getElementsByTagName('footer').innerHTML = "<a class='logo' href='index.html'><img src='1.svg'></a><br><br>Copyright &copy; 2020. All rights reserved to Create Sense. <br> <br> <a href = 'policies.html'> Privacy Policy </a> | <a href='terms.html'>Terms of Use</a> <br>");
// lis.css({'height':'inherit'});


function start(i){
    ttl.innerHTML = (list[i].title);
    aut.innerHTML = (list[i].author);
    dat.innerHTML = (list[i].date);
    let innertext ="";
    (list[i].text.forEach(function (item) {
        innertext += item+ "<br><br>";
    }));
    txt.innerHTML = innertext;
    txt.style.height ='1000px';
}
start(0);
update();
function move(n){
    let i;
    if(index === 0 && n === -1){
        i = (list.length-1);
        index=i;
    } else if (index === (list.length-1) && n === +1){
        i = 0;
        index = i;
    }else{
        i = (index + n);
        index = i;
    }
    start(i);
    update();
}
function update(){
    if (index === 0) {
        document.getElementsByClassName('l')[0].style.color = 'grey';
    } else {
        document.getElementsByClassName('l')[0].style.color = '#91B5CA';
    }
    if (index === (list.length - 1)) {
        document.getElementsByClassName('r')[0].style.color = 'grey';
    } else {
        document.getElementsByClassName('r')[0].style.color = '#91B5CA';
    }
}
