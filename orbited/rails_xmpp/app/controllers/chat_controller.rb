class ChatController < ApplicationController
  
  def show
    current_user.reset_single_access_token!
    @contact = User.find(params[:contact_id])

    @contacts_to_rosterize = current_user.received_messages.unreaded.collect {|msg| msg.sender }
    @contacts_to_rosterize << @contact
    @contacts_to_rosterize.uniq!
    @contacts_to_rosterize = @contacts_to_rosterize - current_user.blocked_contacts

    respond_to do |format|
      format.js
      format.html
    end
  end

  def popup
  end

end
