class ContactSerializer < ActiveModel::Serializer
  attributes :id, :name, :notes, :contacted, :email
  belongs_to :company
end
