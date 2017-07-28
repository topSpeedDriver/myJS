jQuery.fn.extend({
    'changePosition':function(obj){
        var _this = this;
        var children = $(obj.children);
        var row = obj.row;
//                arr[{'left':left,'top':top}];每个列的top和left；
//                childArr['120','210','319','291','...'];每个child的高度；
        var arr = [],childArr = [];
        for(var num=0;num<row;num++){
            var left = parseInt(_this.css('width'))/row*num;
            console.log(left);
            arr[num]={top:0,left:left};
        }
        for (var i=0; i<children.length; i++){
            var child = children[i];
            var childHei = parseInt($(child).css('height'));
            childArr.push(childHei);
        }

        for (var j=0; j<childArr.length; j++){
            var index = _this.findMin(arr).minIndex;
            children.eq(j).css({'top':arr[index].top+'px','left':arr[index].left+'px'});
            arr[index].top+=childArr[j];
        }

        _this.css('height',function(){
            var index =  _this.findMin(arr).maxIndex;
            return arr[index].top + 'px';
        });
    },
    'findMin':function (arr){
        var min = arr[0].top,minIndex=0,maxIndex=0;
        for (var i=1; i<arr.length; i++){
            var top = arr[i].top;
            min>top?(min=top, minIndex=i):(maxIndex=i);
        }
        return {minIndex:minIndex,maxIndex:maxIndex};
    }
});