$(document).ready(function(){

    // const year = new Date().getFullYear();
    // if(year % 4 == 0) console.log(`${year}is Not a leap year.`);
    // else if(year% 100 != 0) console.log(`${year} is a leap year`);
    // else if (year % 400 != 0) console.log(`${year} is Not a learp year`);
    // else console.log(`${year} is leap year`);

    // function printLeapYearStatus(){
    //     if(year % 4 == 0) console.log(`${year}is Not a leap year.`);
    //     else if(year% 100 != 0) console.log(`${year} is a leap year`);
    //     else if (year % 400 != 0) console.log(`${year} is Not a learp year`);
    //     else console.log(`${year} is leap year`);
    // }

    // function isCurrentYearLeapYear(){
    //     const year = new Date().getFullYear();
    //     if(year % 4 == 0) return false;
    //     else if(year % 100 != 0) return true;
    //     else if (year % 400 != 0) return false;
    //     else return true
    // }

    // const daysInMonth = 
    // [31, isCurrentYearLeapYear() ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31  ] ;

    // if(isCurrentYearLeapYear()) console.log(`It is a leap year`);

    // const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    // let colorIndex = -1;
    // function getNextRainbowColor(){
    //     if(++colorIndex >= colors.length) colorIndex =0;
    //     return colors[colorIndex];
    // }

    const getNextRainbowColor = (function(){
        const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
        let colorIndex = -1;
        return function(){
            if(++colorIndex >= colors.length) colorIndex = 0;
            return colors[colorIndex];
        }

    })

    setInterval(function(){
        document.querySelector('.rainbow').style['backgroun-color'] = getNextRainbowColor();

    },500);

   

    



});