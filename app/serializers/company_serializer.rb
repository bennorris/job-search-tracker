class CompanySerializer < ActiveModel::Serializer
  attributes :id, :name, :showme, :description, :website, :notes
  has_many :jobs
  has_many :contacts
end
