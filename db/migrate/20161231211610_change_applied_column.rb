class ChangeAppliedColumn < ActiveRecord::Migration[5.0]
  def up
    change_column :jobs, :applied, :string
  end

  def down
    change_column :jobs, :applied, :boolean
  end
end
