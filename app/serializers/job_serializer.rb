class JobSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :link, :applied
  belongs_to :company
end
