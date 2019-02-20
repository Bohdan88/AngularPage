    // pie charts

$(document).ready(function(){
    var ctx = $("#mycanvas").get(0).getContext("2d");

    //pie chart data
    var data = [
        {
            value: 50,
            color: "cornflowerblue",
            highlight: "lightskyblue",
            label: "Corn Flower Blue"
        },
        
        {
            value: 120,
            color: "Lightgray",
            highlight: "gray",

        }
    ];

    var piechart = new Chart(ctx).Doughnut(data);

   
});


    // second 


$(document).ready(function(){
    var ctx = $("#myseccanvas").get(0).getContext("2d");

    //pie chart data
    var data = [
        {
            value: 25,
            color: "red",
            highlight: "red",
            label: "Corn Flower Blue"
        },
        
        {
            value: 120,
            color: "Lightgray",
            highlight: "gray",

        }
    ];

    
    var piechart = new Chart(ctx).Doughnut(data);

   
});


    // third

$(document).ready(function(){
    var ctx = $("#myThirdCanvas").get(0).getContext("2d");

    //pie chart data
    var data = [
        {
            value: 40,
            color: "orange",
            highlight: "orange",
            label: "Corn Flower Blue"
        },
        
        {
            value: 120,
            color: "Lightgray",
            highlight: "gray",

        }
    ];

    var piechart = new Chart(ctx).Doughnut(data);

   
});



    // lastOne

$(document).ready(function(){
    var ctx = $("#myLastCanvas").get(0).getContext("2d");

    //pie chart data
    var data = [
        
        {
            value: 1,
            color: "green",
            highlight: "lime",

        }
    ];

    //draw
    var piechart = new Chart(ctx).Doughnut(data);
});

