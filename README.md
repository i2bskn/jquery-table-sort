jquery-table-sort
=================

Table sort plugin for jQuery.

## Usage

#### Sortable

`thead>th` elements is required.

```html
<script src="//code.jquery.com/jquery-1.10.2.min.js"></script>
<script src="lib/jquery.table_sort.min.js"></script>
<script>
<!--
$(function(){
  $(".sort").tableSort({
    indexes: [0, 1, 3], // Target columns. Default is all.
    compare: function(a, b){ // If you want to custom sort.
      a = a.replace("%", "") * 1;
      b = b.replace("%", "") * 1;
      return a - b;
    },
    after: function(th){ // The process to hook into sort after execution.
      console.log($(th).text() + " sorted!");
      // If use when combined with tableMove.
      // $(".sort").tableMove();
    },
  });
});
//-->
</script>
```

The following classes is set to the column(thead>th) that has been sorted.

* `.sort_column_default` => Sortable columns.
* `.sort_column_asc` => Column is sorted in ascending order.
* `.sort_column_desc` => Column is sorted in descending order.

#### Movable

`tbody>tr` elements is required.

```html
<script src="//code.jquery.com/jquery-1.10.2.min.js"></script>
<script src="lib/jquery.table_sort.min.js"></script>
<script>
<!--
$(function(){
  $(".sort").tableMove({
    after: function(tr){ // The process to hook into move after execution.
      console.log($(tr).find("td").eq(1).text() + " moved!");
    },
  });
});
//-->
</script>
```

Set the event to the following classes.

* `.up` => Move up.
* `.down` => Move down.
