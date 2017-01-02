class AddContactsTable < ActiveRecord::Migration[5.0]
  def change
    create_table :contacts do |t|
      t.integer :company_id
      t.string :name
      t.string :email
      t.string :notes
      t.boolean :contacted
    end
  end
end
