var app = new Vue({
    el:"#app",
    data:{
        todos:[],
        newItem:'',
    
    },
    methods:{
        addItem:function(){
            if(this.newItem === '')return;
            var todo ={
                item:this.newItem,
                isDone:false
            };
            this.todos.push(todo);
            this.newItem='';
        },
        deleteItem:function(index){
            var deleteIndex = ''
            var check = confirm('本当に削除しますか？')
            if(check === true){
                this.todos.some(function(value,id){
                    if(value.index === index){
                        deleteIndex = id
                    }
                })
                this.todos.splice(deleteIndex,1);
            }
        },
    },
    computed:{
        year:function(){
            return new Date().getFullYear()
        },
        month:function(){
            return new Date().getMonth()+1
        },
        day:function(){
            return new Date().getDate()
        },
    },

})