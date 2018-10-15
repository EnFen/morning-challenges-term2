# For this challenge, your Todo List should be able to perform all actions
# given in the test. Namely you should be able to:
# 1. create a new todo list with a title and description
# 2. update the title or description
# 3. get a count of items in the list
# 4. check to see if all items in the list are marked done
# 5. mark all items in the list as done
# 6. add items to the list
# 7. mark a single item in the list as done
# 8. delete items from the list

# To accomplish this, you should define two classes - a TodoList class
# and a TodoListItem class.
class TodoList
    attr_accessor :title, :description
    

    def initialize(title)
        @title = title
        @items = {}        
    end

    def add_item(item_title)
        @items[item_title.to_sym] = TodoListItem.new
    end

    def count        
        @items.length
    end

    def delete_item(item_title)
        @items.delete(item_title.to_sym)        
    end

    def all_done?
        for name, item in @items do
            return false if item.done == false
        end
        true
    end

    def update_done(item_title)
        @items[item_title.to_sym].done = true
    end

    def get_item(item_title)
        @items[item_title.to_sym]
    end
end

class TodoListItem
    attr_accessor :done

    def initialize
        @done = false
    end

    def done?
        @done
    end
end

# todo = TodoList.new("new")
# todo.add_item("new item")
# puts todo.count