$(document).ready(function(){
    /*Capture everything typed */
    $('#searchGithub').on('keyup', function(s) {
        let searchUser = s.target.value;

        //GitHub request for searches
        $.ajax({
            url:'https://api.github.com/users/'+ searchUser,
            data:{
                client_id:'b9315bcd5a07fcd759d8',
                client_secret:'a2b698bf7e7c02f898197cf136d1a41f704ca8e4'
            }
        }).done(function(user) {

            $('#userName').html(`
            <div>
              <h3>${user.name}</h3>
              </div>
            `);

            $('#userId').html(`
            <div>
              <h3>Id:${user.id}</h3>
              </div>
              `);

            $('#userPicture').html(`
              <div>
              <p>profile picture</p>
              <img class="picture" src="${user.avatar_url}">
              </div>
              `);

            $('#userLink').html(`
            <div>
            <a class="button" href="${user.html_url}" target="_blank">Link to ${user.name}</a>
              </div>
              `);
             

        });
    });
});