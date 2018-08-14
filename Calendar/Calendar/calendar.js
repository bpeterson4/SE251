
var daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

$(document).ready(function(){
		
        var d 	= new Date();
        var mth = d.getMonth()+1;
        var yr 	= d.getFullYear();

        $("#month").val(mth);
        $("#year").val(yr);
        showCalendar (mth, yr);

        $("#month,#year").change(function(e) {
            showCalendar ($("#month").val(), $("#year").val());
        });

        $('#yes').on("click", function () {
            $('.day').css("background-color", "green")
        });
    
        $('#no').on("click", function () {
            $('.day').css("background-color", "red")
        });
});


function daysInMonth(anyDateInMonth) {
    return new Date(anyDateInMonth.getYear(), anyDateInMonth.getMonth()+1, 0).getDate();
}


function showCalendar (mth, yr) {
		
		
    var firstDayOfMonth = mth + "/1/" + yr;
    var d = new Date( firstDayOfMonth );
    var numberOfDaysInMonth = daysInMonth(d);
    var firstDayOfWeek = d.getDay();

    /* this is where you'll generate the grid, for now I will just show first day of week */
    var str = "<ul>";
    str += "<li>Number of days in the month: " + numberOfDaysInMonth + "</li>";
    str += "<li>First day of the week: " + firstDayOfWeek + " (" + daysOfTheWeek[firstDayOfWeek] + ")</li>";

    str += "</ul>";

    str += `<div class="row">`;
    for (let day = 1; day <= numberOfDaysInMonth + firstDayOfWeek; day++)
    {
        if (day > firstDayOfWeek) {
            str += `<div class="day">${day - firstDayOfWeek}</div>`;
        } else {
            str += `<div class="day"></div>`;
        }

        if (day % 7 === 0) {
            str += `</div><div class="row">`;

        }
    }

    str += `</div>`
   
      
    
    $("#results").html(str);
    $('.day').on("click", function () {
        
        let color = $(this).css("background-color");
        
        if (color == "rgb(0, 128, 0)")
        {
            $(this).css(`background-color`, "red");
            
        }else if(color == "rgb(255, 0, 0)"){
            $(this).css(`background-color`, "white");
        } else {
            ($(this).css("background-color", "green"));
        }
 
    });
    
    
}


