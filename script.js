$(function shoppingList() {
  
    $('#js-shopping-list-form').submit(function(event){
    event.preventDefault();
    let textInput = $('#shopping-list-entry').val();
    $('.shopping-list').append(
      `<li>
          <span class="shopping-item">${textInput}</span>
          <div class="shopping-item-controls">
            <button class="shopping-item-toggle">
              <span class="button-label">check</span>
            </button>
            <button class="shopping-item-delete">
              <span class="button-label">delete</span>
            </button>
          </div>
        </li>`);
    });
  
    $('.shopping-list').on('click', '.shopping-item-delete', function(event) {
      $(this).parent().parent().remove();
    });
    $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
      $(this).closest('li').toggleClass('shopping-item__checked');
    });
  
  });
  
  $(document).ready(function() { $('span').removeClass('shopping-item__checked') 
  });