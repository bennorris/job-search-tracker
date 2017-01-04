class ChangeColumnName < ActiveRecord::Migration[5.0]
  def up
    remove_column :companies, :display
    add_column :companies, :showme, :string
  end

  def down
    remove_column :companies, :showme
    add_column :companies, :display, :string
  end

end
