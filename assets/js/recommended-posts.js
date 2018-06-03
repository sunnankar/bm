function generateRandomPosts(numberOfPosts)
{
  $.getJSON("/ajax/posts.json", function(data) {
    var postsCount = data.length;
    var posts = data;

    var randomIndexUsed = [];
    var counter = 0;

    var divRandomPosts = $(".recommended-posts-list");

    while (counter < numberOfPosts)
    {
      var randomIndex = Math.floor(Math.random() * postsCount);

      if (randomIndexUsed.indexOf(randomIndex) == "-1")
      {
        var postLink = posts[randomIndex].url;
        var postTitle = posts[randomIndex].title;

        divRandomPosts.append('<li><a href="' + postLink + '">' + postTitle + '</a></li>');

        randomIndexUsed.push(randomIndex);

        counter++;
      }
    }
  });
}

$(document).ready(function() {
  if($('.recommended-posts').length > 0){
    generateRandomPosts(3);
  }
});
