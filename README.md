jquery-table-sort
=================

Table sort plugin for jQuery.

## Usage

```html
<script src="//code.jquery.com/jquery-1.10.2.min.js"></script>
<script src="src/jquery.table_sort.js"></script>
<script>
<!--
$(function(){
  $(".sort").tableSort({
    indexes: [0, 1, 3],
    compare: function(a, b){ // If you want to custom sort.
      a = a.replace("%", "") * 1;
      b = b.replace("%", "") * 1;
      return a - b;
    },
    after: function(){ // The process to hook into sort after execution.
      console.log("changed!");
    },
  });
});
//-->
</script>
```
