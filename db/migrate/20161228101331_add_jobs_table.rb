class AddJobsTable < ActiveRecord::Migration[5.0]
  def change
    create_table :jobs do |t|
      t.integer :company_id
      t.string :title
      t.string :description
      t.string :link
      t.boolean :applied
    end
  end
end
