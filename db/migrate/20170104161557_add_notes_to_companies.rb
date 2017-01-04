class AddNotesToCompanies < ActiveRecord::Migration[5.0]
  def change
    add_column :companies, :notes, :string
  end
end
