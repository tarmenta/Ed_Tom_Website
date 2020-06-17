/*Name this external file hover_script.js*/

function upDate(previewPic){
    /* In this function you should
       1) change the url for the background image of the div with the id = "image"
       to the source file of the preview image

       2) Change the text  of the div with the id = "image"
       to the alt text of the preview image
       */

    /* Here is setting the containers to the attributes from html*/
    var picture = previewPic.getAttribute( "src" );
    var words = previewPic.getAttribute( "alt" );

    /*Get the image id and change it to the containers of picture and words  */
    document.getElementById('image').style.backgroundImage = "url('" + picture + "')";
    document.getElementById('image').innerHTML = words;

}

function unDo(){
    /* In this function you should
   1) Update the url for the background image of the div with the id = "image"
   back to the orginal-image.  You can use the css code to see what that original URL was

   2) Change the text  of the div with the id = "image"
   back to the original text.  You can use the html code to see what that original text was
   */

    /*Make a container "un" and set it the the current image  */
   let un = document.getElementById('image');

   /*Take that container and set it back to the old image url while the text has to be known */
    un.style.backgroundImage = "url('')";
    document.getElementById('image').innerHTML = "Hover over an image below to display here";

}