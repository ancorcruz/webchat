function initializeChat(selected_contact, contacts_to_rosterize) {
  // Remove contacts not selected to 'rosterize'
  $('#roster').children().each(function() {
      var buddy = $(this).attr('id').replace(/^buddy_/, '');
      if (contacts_to_rosterize.indexOf(buddy) == -1) {
        onRemoveContact(buddy + '/Orbited', buddy);
      }
    });

  // Add to roster all selected contacts (senders) to 'rosterize'
  for(var i = 0; i < contacts_to_rosterize.length; i++) {
    if ($('#buddy_' + $.escape(contacts_to_rosterize[i])).length == 0) {
      onAddContact(contacts_to_rosterize[i]);
    }
  }
  openChatBox(selected_contact);
}

function openChat(selected_contact) {
  // Add selected contact if chat 'popup' isn't hidden
  if ($('#buddy_' + $.escape(selected_contact)).length == 0) {
    onAddContact(selected_contact);
  }

  openChatBox(selected_contact);
}

function blockContact(selected_contact) {
  if ($('#buddy_' + $.escape(selected_contact)).length == 1) {
    onRemoveContact(selected_contact + '/Orbited', selected_contact);
  }
}

function unBlockContact(selected_contact) {
  onAddContact(selected_contact);
}

function showChat() {
  $('#spinner').addClass('hidden');
  $('#chat').removeClass('hidden');
}
