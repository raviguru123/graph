document.addEventListener("DOMContentLoaded",function(event){
console.log("hello");
var chart = c3.generate({
    bindto: '#chart',
    data: {
      columns: [
        ['data1', 30, 200, 100, 400, 150, 250],
        ['data2', 50, 20, 10, 40, 15, 25]
      ],
      axes: {
        data2: 'y2'
      },
      types:{
      	data2:'bar'
      }
    },
    axis: {
      y: {
      	show:true,
        label: { // ADD
          text: 'Y Label',
          position: 'outer-middle'
        }
      },
      y2: {
        show: true,
        label: { // ADD
          text: 'Y2 Label',
          position: 'outer-middle'
        }
      }
    }
});

setTimeout(function(){
	chart.unload({
    ids: ['data2']
});
},3000)

setTimeout(function(){
chart.load({
  columns: [
    ['data1', 300, 100, 250, 150, 300, 150, 500],
    ['data2', 100, 200, 150, 50, 100, 250]
  ]
});
},6000);

});

