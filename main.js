//OMDb API: http://www.omdbapi.com/?i=tt3896198&apikey=42aa820e
function search()
{
    var searchInput = document.getElementById("movieInput").value;
    //alert("search clicked "+searchInput);

    $(document).ready(
        function(){
            $.get("https://www.omdbapi.com?i=tt3896198&apikey=42aa820e&s="+searchInput,
            function(Response){
                
                console.log(Response)
            }).fail(function(){
                console.log("fail to get the data")
            });


    });

}
