class Pin < ActiveRecord::Base
  attr_accessible :description

  #plenty of other validations if you google rails validations like placing "length: { less_than: 50}" after true
  validates :description, presence: true 

  belongs_to :user
  #google "rails associations"
end
