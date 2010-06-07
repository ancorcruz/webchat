function getPopup() {
  popupWin = open( "", "popupWin", "width=500,height=600" );
  if (!popupWin.initializeChat) {
    popupWin.close();
  }
}

function openNewPopup() {
  var url = "/chat/popup";
  popupWin = open( "", "popupWin", "width=500,height=600" );
  if( !popupWin || popupWin.closed || !popupWin.initializeChat ) {
    popupWin = window.open( url, "popupWin", "width=500,height=600" );
  } else popupWin.focus();
}

function openChatPopup(selected_contact, contacts_to_rosterize) {
  getPopup();
  setTimeout('openPopup();', 1000);
}

function openPopup() {
  if (popupWin.closed) {
    openNewPopup();
      setTimeout('initializeYourself(selected_contact, contacts_to_rosterize);', 3000);
      setTimeout('popupWin.showChat();', 5000);
  }
  else {
    if (popupWin.openChat) {
      popupWin.openChat(selected_contact);
    }
  }
  popupWin.focus();
}

function initializeYourself(selected_contact, contacts_to_rosterize) {
  if (popupWin && popupWin.initializeChat) {
    popupWin.initializeChat(selected_contact, contacts_to_rosterize);
  }
  else {
    popupWin.close();
    alert("¡Se ha producido un error!");
  }
}
