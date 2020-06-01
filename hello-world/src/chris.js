<script>
  window.onload = function ()
  {$(document).ready(function () {
    let content = document.body.textContent || document.body.innerText;
    let index = content.indexOf("Product Page URL Address");
    const textLength = 26;
    let url = content.substring(index + textLength, index + textLength + 2000);
    url = url.split(/[\s\n]+/);
    url = url[0];
    //console.log(url[0]);

    $(".enabled-book-button").on("click", function (e) {
      e.preventDefault();
      window.open(url);
    });
  })}
</script>;
