class CompanySerializer < ActiveModel::Serializer
  attributes :id, :name
  has_many :jobs
  has_many :contacts
end
