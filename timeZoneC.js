class TimeZone_Converter{
    input_1 = document.querySelector("input[name='input1']");   
    input_2 = document.querySelector("input[name='input2']");

    image_1 = document.querySelector("img[flag='left-flag']");
    image_2 = document.querySelector("img[flag='right-flag']");

    hour_1 =  document.querySelector(".hour-print-1");
    hour_2 = document.querySelector(".hour-print-2");

    minute_1 = document.querySelector(".minute-print-1");
    minute_2 = document.querySelector(".minute-print-2");

    dateDay_1 = document.querySelector("div[date='left-date']");
    dateDay_2 = document.querySelector("div[date='right-date']");

    day_update_1 = document.querySelector("#day-update-1");
    day_update_2 = document.querySelector("#day-update-2");

    information = document.querySelector(".information");

    rev_btn = document.querySelector(".reverse-button");

    //------------------> CHANGE OPTION ELEMENT VALUE ATTRIBUTE <------------------------------------------------//

    change_Input_Value(){
        let options = document.querySelectorAll('option');
        options.forEach((element)=>{
            let temp = element.innerText;
            element.innerText = element.getAttribute('value');
            element.setAttribute('value',temp);
        })
    }

    daytime_update(hour_1, hour_2){

        let left_update = this.day_update_1;
        // console.log(left_update);
        let right_update = this.day_update_2;

        if(hour_1 >= 5 && hour_1 <= 8){
            left_update.innerHTML = "Early Morning";
        }
            else if( hour_1 >= 11 && hour_1 <= 12){
                left_update.innerHTML = "Late Morning";
            }
                else if(hour_1 > 8 && hour_1< 11){
                    left_update.innerHTML = "Morning";
                }
                    else if(hour_1 > 12 && hour_1< 13){
                        left_update.innerHTML = "Afternoon";
                    }
                        else if(hour_1 >= 13 && hour_1< 15){
                            left_update.innerHTML = "Early Afternoon";
                        }
                            else if(hour_1 >= 15 && hour_1< 16){
                                left_update.innerHTML = "Afternoon";
                            }
                                else if(hour_1 >= 16 && hour_1<= 17){
                                    left_update.innerHTML = "Late Afternoon";
                                }
                                    else if(hour_1 > 17 && hour_1 < 19){
                                        left_update.innerHTML = "Early Evening";
                                    }
                                        else{
                                            left_update.innerHTML = "Night";
                                        }


        if(hour_2 >= 5 && hour_2 <=8){
            right_update.innerHTML = "Early Morning";
        }
            else if( hour_2 >= 11 && hour_2 <= 12){
                right_update.innerHTML = "Late Morning";
            }
                else if(hour_2 > 8 && hour_2< 11){
                    right_update.innerHTML = "Morning";
                }
                    else if(hour_2 > 12 && hour_2< 13){
                        right_update.innerHTML = "Afternoon";
                    }
                        else if(hour_2 >= 13 && hour_2< 15){
                            right_update.innerHTML = "Early Afternoon";
                        }
                            else if(hour_2 >= 15 && hour_2< 16){
                                right_update.innerHTML = "Afternoon";
                            }
                                else if(hour_2 >= 16 && hour_2<= 17){
                                    right_update.innerHTML = "Late Afternoon";
                                }
                                    else if(hour_2 > 17 && hour_2 < 19){
                                        right_update.innerHTML = "Early Evening";
                                    }
                                        else{
                                            right_update.innerHTML = "Night";
                                        }
    }

    // ------------------------> UPDATE INFORMATION <------------------------------------------------------- //

    update_Information(timeZone_1,timeZone_2){
        let date_1 = new Date();
            let option_1 = {
                timeZone: timeZone_1
            }
        let dateTime_1 = date_1.toLocaleString('en-US',option_1);
        let dateData_1 = new Date(dateTime_1);
        const day_1 = dateData_1.getDate();
        const month_1 = dateData_1.getMonth();
        const year_1 = dateData_1.getFullYear();
        const hour_1 = dateData_1.getHours();
        const minute_1 = dateData_1.getMinutes();
        const country_1 = document.querySelector(`option[value="${timeZone_1}"]`).innerHTML;

        let date_2 = new Date();
            let option_2 = {
                timeZone: timeZone_2
            }
        let dateTime_2 = date_2.toLocaleString('en-US',option_2);
        let dateData_2 = new Date(dateTime_2);
        const day_2 = dateData_2.getDate();
        const month_2 = dateData_2.getMonth();
        const year_2 = dateData_2.getFullYear();
        const hour_2 = dateData_2.getHours();
        const minute_2 = dateData_2.getMinutes();
        const country_2 = document.querySelector(`option[value="${timeZone_2}"]`).innerHTML;

        let timeBox_1 = document.querySelector("#box-1");
        let timeBox_2 = document.querySelector("#box-2");

        if(year_1 > year_2){
            const total_time_1 = 24*60 + hour_1*60 + minute_1;
            const total_time_2 = hour_2*60 + minute_2;
            const hour_diff = (total_time_1 - total_time_2)/60;
            const hour_diff_int = Math.floor(hour_diff);
            const minute_diff = (hour_diff - hour_diff_int)*60;

            timeBox_1.setAttribute("colour","green");
            timeBox_2.setAttribute("colour","red");

            this.information.innerHTML = `${country_1} is ${hour_diff_int} hours and ${minute_diff} minutes ahead of ${country_2}.`
        }
        else if(year_2 > year_1){
            const total_time_2 = 24*60 + hour_2*60 + minute_2;
            const total_time_1 = hour_1*60 + minute_1;
            const hour_diff = (total_time_2 - total_time_1)/60;
            const hour_diff_int = Math.floor(hour_diff);
            const minute_diff = (hour_diff - hour_diff_int)*60;

            timeBox_1.setAttribute("colour","red");
            timeBox_2.setAttribute("colour","green");

            this.information.innerHTML = `${country_1} is ${hour_diff_int} hours and ${minute_diff} minutes behind of ${country_2}.`
        }
        else{
            if(month_1 > month_2){
                const total_time_1 = 24*60 + hour_1*60 + minute_1;
                const total_time_2 = hour_2*60 + minute_2;
                const hour_diff = (total_time_1 - total_time_2)/60;
                const hour_diff_int = Math.floor(hour_diff);
                const minute_diff = (hour_diff - hour_diff_int)*60;

                timeBox_1.setAttribute("colour","green");
                timeBox_2.setAttribute("colour","red");

                this.information.innerHTML = `${country_1} is ${hour_diff_int} hours and ${minute_diff} minutes ahead of ${country_2}.`
            }
            else if(month_2 > month_1){
                const total_time_2 = 24*60 + hour_2*60 + minute_2;
                const total_time_1 = hour_1*60 + minute_1;
                const hour_diff = (total_time_2 - total_time_1)/60;
                const hour_diff_int = Math.floor(hour_diff);
                const minute_diff = (hour_diff - hour_diff_int)*60;

                timeBox_1.setAttribute("colour","red");
                timeBox_2.setAttribute("colour","green");

                this.information.innerHTML = `${country_1} is ${hour_diff_int} hours and ${minute_diff} minutes behind of ${country_2}.`
            }
            else{
                if(day_1 > day_2){
                    const total_time_1 = 24*60 + hour_1*60 + minute_1;
                    const total_time_2 = hour_2*60 + minute_2;
                    const hour_diff = (total_time_1 - total_time_2)/60;
                    const hour_diff_int = Math.floor(hour_diff);
                    const minute_diff = (hour_diff - hour_diff_int)*60;

                    timeBox_1.setAttribute("colour","green");
                    timeBox_2.setAttribute("colour","red");

                    this.information.innerHTML = `${country_1} is ${hour_diff_int} hours and ${minute_diff} minutes ahead of ${country_2}.`
                }
                else if(day_2 > day_1){
                    const total_time_2 = 24*60 + hour_2*60 + minute_2;
                    const total_time_1 = hour_1*60 + minute_1;
                    const hour_diff = (total_time_2 - total_time_1)/60;
                    const hour_diff_int = Math.floor(hour_diff);
                    const minute_diff = (hour_diff - hour_diff_int)*60;

                    timeBox_1.setAttribute("colour","red");
                    timeBox_2.setAttribute("colour","green");

                    this.information.innerHTML = `${country_1} is ${hour_diff_int} hours and ${minute_diff} minutes behind of ${country_2}.`
                }
                else {
                    if(hour_1 > hour_2){
                        const total_time_1 = hour_1*60 + minute_1;
                        const total_time_2 = hour_2*60 + minute_2;
                        const hour_diff = (total_time_1 - total_time_2)/60;
                        const hour_diff_int = Math.floor(hour_diff);
                        const minute_diff = (hour_diff - hour_diff_int)*60;

                        timeBox_1.setAttribute("colour","green");
                        timeBox_2.setAttribute("colour","red");

                        this.information.innerHTML = `${country_1} is ${hour_diff_int} hours and ${minute_diff} minutes ahead of ${country_2}.`
                    }
                    else if(hour_2 > hour_1){
                        const total_time_2 = hour_2*60 + minute_2;
                        const total_time_1 = hour_1*60 + minute_1;
                        const hour_diff = (total_time_2 - total_time_1)/60;
                        const hour_diff_int = Math.floor(hour_diff);
                        const minute_diff = (hour_diff - hour_diff_int)*60;

                        timeBox_1.setAttribute("colour","red");
                        timeBox_2.setAttribute("colour","green");

                        this.information.innerHTML = `${country_1} is ${hour_diff_int} hours and ${minute_diff} minutes behind of ${country_2}.`
                    }
                    else{
                        if(minute_1 > minute_2){
                            const total_time_1 = minute_1;
                            const total_time_2 = minute_2;
                            const minute_diff = (total_time_1 - total_time_2);

                            timeBox_1.setAttribute("colour","green");
                            timeBox_2.setAttribute("colour","red");

                            this.information.innerHTML = `${country_1} is 00 hours and ${minute_diff} minutes ahead of ${country_2}.`
                        }
                        else if(minute_2 > minute_1){
                            const total_time_1 = minute_1;
                            const total_time_2 = minute_2;
                            const minute_diff = (total_time_2 - total_time_1);

                            timeBox_1.setAttribute("colour","red");
                            timeBox_2.setAttribute("colour","green");

                            this.information.innerHTML = `${country_1} is 00 hours and ${minute_diff} minutes behind of ${country_2}.`
                        }
                        else{

                            timeBox_1.setAttribute("colour","green");
                            timeBox_2.setAttribute("colour","green");
                            this.information.innerHTML = `${country_1} and ${country_2} both have Same TimeZone.`
                        }
                    }
                }
            }
        }

        

        }
    

    //---------------------------> SET TIME <--------------------------------------------------------------- //

    printTime(timeZone_1, timeZone_2){
        
        let date_1 = new Date();
        let option_1 = {
            timeZone: timeZone_1
        }

        let dateTime_1 = date_1.toLocaleString('en-US',option_1);
        let dateData_1 = new Date(dateTime_1);

        let hour_int_1 = dateData_1.getHours();
            if(hour_int_1.toString().length===1){
            this.hour_1.innerHTML = '0' + hour_int_1;
            }
                else{
                    this.hour_1.innerHTML = hour_int_1;
                }
        
        let minute_int_1 = dateData_1.getMinutes();
            if(minute_int_1.toString().length===1){
                this.minute_1.innerHTML = '0' + minute_int_1;
            }
                else{
                    this.minute_1.innerHTML = minute_int_1;
                }

        //Saturday, 30 November 2024
        this.dateDay_1.innerHTML = `${dateData_1.toLocaleString('en-US',{ weekday: 'long' })}, ${dateData_1.getDate()} ${dateData_1.toLocaleString('default', { month: 'long' })} ${dateData_1.getFullYear()}`

        let date_2 = new Date();
        let option_2 = {
            timeZone: timeZone_2
        }

        let dateTime_2 = date_2.toLocaleString('en-US',option_2);
        let dateData_2 = new Date(dateTime_2);

        let hour_int_2 = dateData_2.getHours();
        if(hour_int_2.toString().length===1){
            this.hour_2.innerHTML = '0' + hour_int_2;
            }
                else{
                    this.hour_2.innerHTML = hour_int_2;
                }
        
        let minute_int_2 = dateData_2.getMinutes();
            if(minute_int_2.toString().length===1){
                this.minute_2.innerHTML = '0' + minute_int_2;
            }
                else{
                    this.minute_2.innerHTML = minute_int_2;
                }

        //Saturday, 30 November 2024
        this.dateDay_2.innerHTML = `${dateData_2.toLocaleString('en-US',{ weekday: 'long' })}, ${dateData_2.getDate()} ${dateData_2.toLocaleString('default', { month: 'long' })} ${dateData_2.getFullYear()}`;

        this.daytime_update(hour_int_1, hour_int_2);
        this.update_Information(timeZone_1, timeZone_2);
    }

    // -----------------------------> DEFAULT PAGE SET <---------------------------------------------------- //
    defaultPage(){
        // console.log("hello");
        this.input_1.setAttribute("value","Asia/Kolkata");
        this.input_2.setAttribute("value","Europe/London");

        this.image_1.setAttribute("src","https://flagicons.lipis.dev/flags/4x3/in.svg");
        this.image_1.setAttribute("alt","India");
        // let option_1 = document.querySelector("option[value='India']"); 

        this.image_2.setAttribute("src","https://flagicons.lipis.dev/flags/4x3/gb.svg");
        this.image_2.setAttribute("alt","United Kingdom");
        // let option_2 = document.querySelector("option[value='United Kingdom']");

        this.printTime('Asia/Kolkata', 'Europe/London');

    }

    // --------------------------------> SET INPUT <-------------------------------------------------------- //

    setInput(){

        let in_1 = this.input_1.value;
        let in_2 = this.input_2.value;

        let option_1 = document.querySelector(`option[value="${in_1}"]`);
        let flag_1 = option_1.getAttribute('flag');
        let flag_1_name = option_1.innerText;
        // let timeZone_1 = option_1.innerHTML;
        this.image_1.setAttribute("src",`https://flagicons.lipis.dev/flags/4x3/${flag_1}.svg`);
        this.image_1.setAttribute("alt",flag_1_name);
        // console.log(this.image_1);

        let option_2 = document.querySelector(`option[value="${in_2}"]`);
        let flag_2 = option_2.getAttribute('flag');
        let flag_2_name = option_2.innerText;
        // let timeZone_2 = option_2.innerHTML;
        this.image_2.setAttribute("src",`https://flagicons.lipis.dev/flags/4x3/${flag_2}.svg`);
        this.image_2.setAttribute("alt",flag_2_name);

        this.printTime(in_1,in_2);
        
    }

    reverseInput(){ 
        let temp = this.input_1.value;
        this.input_1.value = this.input_2.value;
        this.input_2.value = temp;        
    }

    blink(){
        let second_element = document.querySelectorAll(".second");
        second_element.forEach((element)=>{
            element.classList.remove("second");
        });

        setTimeout(()=>{
            second_element.forEach((element)=>{
                element.classList.add("second");
            });
        },1000);
    }

    
}

let page = new TimeZone_Converter();
page.change_Input_Value();

const defaultset = setInterval(()=>{page.defaultPage()},1000);
const blink_start = setInterval(()=>{page.blink()},1000);

let timeSet; 
// let timeSet_2;

let inputElement_1 = page.input_1;
let inputElement_2 = page.input_2;
let rev_btn = page.rev_btn;

inputElement_1.addEventListener("change",()=>{
    clearInterval(defaultset);
    clearInterval(timeSet);
    timeSet = setInterval(()=>{
        page.setInput();
    },1000)
})

inputElement_2.addEventListener("change",()=>{
    clearInterval(defaultset);
    clearInterval(timeSet);
    timeSet = setInterval(()=>{
        page.setInput();
    },1000)
})

rev_btn.addEventListener("click",()=>{
    clearInterval(defaultset);
    clearInterval(timeSet);
    page.reverseInput();
    timeSet = setInterval(()=>{
        page.setInput();
    },1000)
})


