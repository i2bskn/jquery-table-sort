jquery.table_sort.js
====================

Table sort plugin for jQuery.

## Usage

```html
<table class="sort">
  <thead>
    <tr>
      <th data-type="integer">id</th>
      <th>Name</th>
      <th>Language</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>8</td>
      <td>a</td>
      <td>english</td>
    </tr>
    <tr>
      <td>2</td>
      <td>g</td>
      <td>japanese</td>
    </tr>
    <tr>
      <td>5</td>
      <td>e</td>
      <td>spanish</td>
    </tr>
    <tr>
      <td>3</td>
      <td>b</td>
      <td>german</td>
    </tr>
  </tbody>
</table>

<script src="//code.jquery.com/jquery-1.10.2.min.js"></script>
<script src="src/jquery.table_sort.js"></script>
<script>
<!--
$(function(){
  $(".sort").tableSort({
    indexes: [0,1]
  });
});
//-->
</script>
```
