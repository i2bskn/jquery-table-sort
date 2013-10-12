$(function(){
  $(".sort").tableSort({
    indexes: [0, 1, 3],
    compare: function(a, b){
      a = a.replace("%", "") * 1;
      b = b.replace("%", "") * 1;
      return a - b;
    },
    after: function(){
      alert("changed!");
    },
  });
});
