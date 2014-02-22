/*
jquery.table_sort.js v0.1.2 - Copyright 2013, i2bskn
*/
(function($){
  var State = (function(){
    function State(indexes){
      this.index = null;
      this.order = 1;
      this.indexes = indexes;
    }

    State.prototype = {
      getOrder: function(index){
        if (this.index === index) {
          return this.order;
        } else {
          return 1;
        }
      },
      updateOrder: function(index){
        if (this.index === index) {
          this.order *= -1;
        } else {
          this.index = index;
          this.order = -1;
        }
      },
      getIndex: function(){
        return this.index;
      },
      indexCheck: function(index){
        if (this.indexes.indexOf(index) !== -1){
          return true;
        } else {
          return false;
        }
      },
    };

    return State;
  })();

  $.fn.tableSort = function(params){
    var defaults = {
      indexes: $(this).find("thead").find("th").map(function(){
        return $(this).index();
      }).get(),
      compare: function(){},
      after: function(){},
    };

    var settings = $.extend(defaults, params);
    var state = new State(settings.indexes);
    var $target = $(this);

    var compare = function(a, b, type, index) {
      var _a = $(a).find("td").eq(index).text();
      var _b = $(b).find("td").eq(index).text();

      switch (type){
      case "integer":
        _a *= 1;
        _b *= 1;
        return _a - _b;
      case "date":
        var _date_a = new Date(_a).getTime();
        var _date_b = new Date(_b).getTime();
        if (_date_a < _date_b) {
          return -1;
        } else if (_date_a > _date_b) {
          return 1;
        }
        return 0;
      case "custom":
        return settings.compare(_a, _b);
      default:
        if (_a < _b) {
          return -1;
        } else if (_a > _b) {
          return 1;
        }
        return 0;
      }
    };

    var removeClass = function(target){
      $(target).removeClass("sort_column_default");
      $(target).removeClass("sort_column_asc");
      $(target).removeClass("sort_column_desc");
    };

    var addClass = function(target){
      var index = $(target).index();

      if (state.getIndex() === index){
        if (state.getOrder(index) === -1){
          $(target).addClass("sort_column_asc");
        } else {
          $(target).addClass("sort_column_desc");
        }
      } else {
        $(target).addClass("sort_column_default");
      }
    };

    var refreshClass = function(target){
      $(target).find("thead").find("th").each(function(){
        if (state.indexCheck($(this).index())){
          removeClass(this);
          addClass(this);
        }
      });
    };

    var sort = function(){
      var type = $(this).data("type");
      var index = $(this).index();
      var $rows = $target.find("tbody>tr");

      $rows.sort(function(a, b){
        return compare(a, b, type, index) * state.getOrder(index);
      });

      $target.find("tbody").empty().append($rows);

      state.updateOrder(index);
      refreshClass($target);
      settings.after(this);
    };

    $target.find("thead").find("th").each(function(){
      if (state.indexCheck($(this).index())){
        $(this).on("click", sort);
      }
    });
    refreshClass($target);

    return this;
  };

  $.fn.tableMove = function(params){
    var defaults = {
      after: function(){},
    };

    var settings = $.extend(defaults, params);

    var moveUp = function(){
      var $row = $(this).closest("tr");
      if ($row.prev("tr").length){
        $row.insertBefore($row.prev("tr"));
        settings.after($row);
      }
    };

    var moveDown = function(){
      var $row = $(this).closest("tr");
      if ($row.next("tr").length){
        $row.insertAfter($row.next("tr"));
        settings.after($row);
      }
    };

    $(this).find("tbody>tr").find(".up").on("click", moveUp);
    $(this).find("tbody>tr").find(".down").on("click", moveDown);

    return this;
  };
})(jQuery);
