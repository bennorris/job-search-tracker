class Company < ApplicationRecord
  has_many :jobs
  has_many :contacts
end
