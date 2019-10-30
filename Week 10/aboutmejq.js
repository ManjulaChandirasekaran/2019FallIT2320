//1.  $() => jQuery

/*2. You need jquery library before you can use jQuery
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
*/

//3. All jQuery content will go inside the $(document).ready({}) secton

//4. $(document).ready(function(){}) => $(function(){})


//Accessing selectors using jQuery
//Using jQuery to add styles 

/*
document.getElementById()
document.getElementsByTagName()
document.getElementsByClassName()
*/

//get innerHTML
//get value
//get and set attributes

//events on() and off()

alert("hello");

$(function(){    

    //all of jquery your code goes here
    //document.getElementById("").innerHTML
    var header = $("#header").text();
    console.log(header);
    $("#header").text("header");
    
    //getElementsByClassName
    var article = $(".article-section").text();
    console.log(article);
    
    //getElementsByTagName
    var aside = $("aside").html();
    console.log(aside);
   
    $("#input").on("click",function(){
        var val = $("#getText").val();
        console.log(val);
        $("#header").hide();
        $("#getText").val(20);
    });

    $("#input").on({
        mouseout: function(){
            console.log("mouseout");
        },
        mouseover: function(){
            console.log("mouseover");
        }
    });

    //document.createElement
    var para = $("<p></p>").text("New para");
    
    //document.appendChild()
    $("#header").after(para);//appending an element
    $("#header").append("hello");//appending text
    $("#header").prepend("hello");//appending text

    console.log($("#header").attr("class"));

    //manipulate css using jquery
    $("#header").removeClass("header");
    $("#header").addClass("blueviolet");
    
    //css property instead of class
    $("#header").css({fontSize: "20px"});

});

