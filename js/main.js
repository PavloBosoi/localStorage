$(function (){

    function addToLocalStorage() {
        var key = 'key',
            tasks = [],
            blockItems = $('.todo-items');
        var items = localStorage.getItem(key);
        $('.js-task-input').on('keyup',function(e){
            items = localStorage.getItem(key);
            if(e.keyCode === 13){
                if(items !== null){
                    tasks = items.split(',');
                    tasks.push($(this).val());
                }
                else{
                    tasks.push($(this).val());
                }
                e.target.value = '';
                localStorage.setItem(key,tasks);
                inputItems(tasks);
            }
        });
        if(items !== null){
            tasks = items.split(',');
        }


        $('.js-task-clear').on('click',function(){
            localStorage.clear();
            blockItems.empty();
            tasks = [];
        });

        function inputItems(tasks){
            blockItems.empty();
            tasks.forEach(function(item){
                blockItems.append('<span>'+item+'</span>');
            });
        }
        inputItems(tasks);
    }

    addToLocalStorage();


});