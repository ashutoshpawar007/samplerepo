var app = new Vue({

  el: '#app',
  data:{
    todoItem:[
      {name:'Play Football', priority:'high', status:false},
      {name:'Play Tennis', priority:'medium', status:false},
      {name:'Play Cricket', priority:'low', status:false},
    ]
  },

  methods:{
    deleteTask:function(item){
      this.todoItem.splice(this.todoItem.indexOf(item),1);
    },

    addTask:function(e){

      console.log('clicked');

      this.todoItem.push({
        name:this.todoItem.name,
        priority: this.todoItem.priority,
        status:false
      });
    }
  }
});
