class AddCreationTypeToCompanies < ActiveRecord::Migration[5.0]
  def change
    add_column :companies, :display, :boolean
  end
end
