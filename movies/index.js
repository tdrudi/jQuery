let currentMovieId = 0;
let movies = [];

//Movies Input
$(function(){    
    $("#new-movie").on("submit", function(e){
        e.preventDefault();

        let title = $("#title").val();
        let rating = $("#rating").val();
        let movieData = {title, rating, currentMovieId};
        const movieHTML = createMovieData(movieData);

        currentMovieId++;
        movies.push(movieData);

        $("#movie-table").append(movieHTML);
        $("#new-movie").trigger("reset");
    })

    //Remove Movies on Button Click
    $("tbody").on("click", ".btn,removebtn", function(e){
        let removeIndex = movies.findIndex(movie => movie.currentMovieId)  === +$(e.target).data("deleteId");

        movies.splice(removeIndex, 1);
        $(e.target).closest("tr");
        $(e.target).remove();
    })
})

//Movie Table
function createMovieData(data) {
    return `
    <tr>
      <td>${data.title}</td>
      <td>${data.rating}</td>
      <td>
        <button class="removeBtn" deleteId=${data.currentId}>
          Delete
        </button>
      </td>
    <tr>
  `;
  }