$(function (){

    function addToLocalStorage() {
        var key = 'key',
            tasks = [],
            blockItems = $('.todo-items');
        var items = localStorage.getItem(key);
        $('.js-task-input').on('keyup',function(e){
            items = localStorage.getItem(key);
            if(e.keyCode === 13 && e.target.value !== ''){
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

        inputItems(tasks);
        removeItem(tasks);

        function inputItems(tasks){
            blockItems.empty();
            tasks.forEach(function(item){
                blockItems.append('<span class="js-task-item">'+item+'</span>');
            });
        }

        function removeItem(tasks){
            console.log(tasks);
            $(document).on('click','.js-task-item',function(e){
                var item = $(e.target),
                    itemText = item.text();
                item.remove();
                tasks.splice(tasks.indexOf(itemText),1);
                localStorage.setItem(key,tasks);
            });
        }

    }

    addToLocalStorage();


});