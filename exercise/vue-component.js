Vue.component('jeancomponent', {
  template:`<div @click="add()" style="border:1px solid black; height:20px; width:310px;">
              <div v-for="item in this.count" style="display:inline-block; height:20px; width:30px; background:green; border-right:1px solid black;"></div>
            </div>`,
   methods: {
    add: function () {
        if(this.count.length == 10){
          this.count = [];
          return;
        }
        this.count.push('hi');      
    }
  },
    data:function (){
      return{
           count: []
      }
  }
})

new Vue({
  el: "#app",

})