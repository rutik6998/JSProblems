const differentDay = (day) => { switch (day)   
     {
        case 'monday': console.log("Monday Menu: Ice cream"); 
     break; 
     case 'tuesday': console.log("Tuesday Menu: Punjabi Thali;");
     break;  
     case 'wednesday': console.log("Wednesday Menu: Chicken tikka");             
     break;         
     case 'thursday':  console.log("Thursday Menu: Burgers");
     break;  
      case 'friday':  console.log("Friday Menu: dal fry"); 
     break; 
     case 'saturday': console.log("Saturday Menu: Idli dosa");  
      break; 
      case 'sunday': console.log("Sunday Menu: sea food"); 
      break;
       default : console.log("Wrong day") 
    } 
}; 

console.log(differentDay('monday'));