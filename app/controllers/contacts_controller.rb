class ContactsController < ApplicationController

  def create
    @contact = Contact.new
    @contact.name = params["_json"][0]
    @company = Company.find_or_create_by(name: params["_json"][1])
    @contact.company = @company
    @contact.email = params["_json"][2]
    @contact.notes = params["_json"][3]
    @contact.contacted = params["_json"][4]
    @contact.save
  end

  def show
    @contacts = Contact.all

    respond_to do |f|
      f.json {render json: @contacts}
    end
  end

end
