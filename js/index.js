let date = document.querySelectorAll("input");
const findzodic=(events)=>{
    events.preventDefault();
   let birth_date=new Date(date[0].value);
     let day= birth_date.getDate();
     let month=birth_date.getMonth()+1;
    
    let zodic_sign="";
    let zodic_date="";
   let count;
    if((month==1 && day>=20) || (month==2 && day<=18)){
        zodic_sign=" Aquarius";
        zodic_date=" January 20–February 18";
        count=0;
    }
   else if((month==2 && day>=19) || (month==3 && day<=20)){
        zodic_sign=" Pisces";
        zodic_date="  February 19–March 20";
        count=1;
    }
   else if((month==3 && day>=21) || (month==4 && day<=19)){
        zodic_sign=" Aries";
        zodic_date="  March 21–April 19";
        count=2;
    }
   else if((month==4 && day>=20) || (month==5 && day<=20)){
        zodic_sign=" Taurus ";
        zodic_date="April 20–May 20";
        count=3;
    }
   else if((month==5 && day>=21) || (month==6 && day<=21)){
        zodic_sign=" Gemini";
        zodic_date="May 21–June 21";
        count=4;
    }
   else if((month==6 && day>=22) || (month==7 && day<=22)){
        zodic_sign=" Cancer ";
        zodic_date=" June 22–July 22";
        count=5;
    }
   else if((month==7 && day>=23) || (month==8 && day<=22)){
        zodic_sign="Leo";
        zodic_date="July 23–August 22";
        count=6;
    }
   else if((month==8 && day>=23) || (month==9 && day<=22)){
        zodic_sign="Virgo";
        zodic_date="August 23–September 22";
         count=7;
    }
   else if((month==9 && day>=23) || (month==10 && day<=23)){
        zodic_sign="  Libra";
        zodic_date=" September 23–October 23 ";
        count=8; 
    }
   else if((month==10 && day>=24) || (month==11 && day<=21)){
        zodic_sign=" Scorpio";
        zodic_date="October 24–November 21 ";
        count=9; 
    }
   else if((month==11 && day>=22) || (month==12 && day<=21)){
        zodic_sign="Sagittarius";
        zodic_date=" November 22–December 21";
        count=10; 
    }
   else if((month==12 && day>=22) || (month==1 && day<=19)){
        zodic_sign="Capricorn";
        zodic_date=" December 22–January 19";
        count=11; 
    }
    sessionStorage.setItem("zodic_sign",zodic_sign);
    sessionStorage.setItem("zodic_date",zodic_date);
    sessionStorage.setItem("count",count);
    location.href="./result.html";
   
}
