$(document).ready(function(){
    /*Capture everything typed */
    $('#searchGithub').on('keyup', function(s) {
        let searchUser = s.target.value;

        /*GitHub request for searches*/
        $.ajax({
            url:'https://api.github.com/users/'+ searchUser,

        }).done(function(user) {

            /*Sorting out Name and Displaying it*/
            $('#userName').html(`
            <div>
              <h3>${user.name}</h3>
              </div>
            `);

            /*Sorting out user ID and Displaying it*/
            $('#userId').html(`
            <div>
              <h3>Id:${user.id}</h3>
              </div>
              `);

            /*Sorting out profile picture and Displaying it*/
            $('#userPicture').html(`
              <div>
              <p>profile picture</p>
              <img class="picture" src="${user.avatar_url}">
              </div>
              `);

            /*Sorting out the link to github user and Displaying it*/
            $('#userLink').html(`
            <div>
            <a class="button" href="${user.html_url}" target="_blank">Link to ${user.name}</a>
              </div>
              `);
        });
    });
});