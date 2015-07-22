Items = new Meteor.Collection('items');

if (Meteor.isClient) {
    
    var insert_item = function() {
        Items.insert({
            item: $('.the_item').val()
        });
        $('.the_item').val('');
    };
    
    Template.add_item.events({
        'click.submit': function() {
            insert_item();
        },
        'keyup .the_item': function(e) {
            if(e.which == 13){
                insert_item();
            }    
        }
    });
    
    Template.list_items.all_items = function() {
        return Items.find();
    }
    
}


