class AddCompaniesTable < ActiveRecord::Migration[5.0]
  def change
    create_table :companies do |t|
      t.string :name
      t.string :description
      t.string :website
    end
  end
end
