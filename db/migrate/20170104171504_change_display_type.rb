class ChangeDisplayType < ActiveRecord::Migration[5.0]
  def up
    change_column :companies, :display, :string
  end

  def down
    change_column :companies, :display, :boolean
  end
end
