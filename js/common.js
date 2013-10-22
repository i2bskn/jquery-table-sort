$(function(){
  $(".sort").tableSort({
    indexes: [0, 1, 3],
    compare: function(a, b){
      a = a.replace("%", "") * 1;
      b = b.replace("%", "") * 1;
      return a - b;
    },
    after: function(th){
      $("div#log").append($("<p>", {text: $(th).text() + " sorted!"}));
      $(".sort").tableMove({
        after: function(tr){
          $("div#log").append($("<p>", {text: $(tr).find("td").eq(1).text() + " moved!"}));
        },
      });
    },
  }).tableMove({
    after: function(tr){
      $("div#log").append($("<p>", {text: $(tr).find("td").eq(1).text() + " moved!"}));
    },
  });
});
