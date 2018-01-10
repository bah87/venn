class DropApiCommentsTable < ActiveRecord::Migration[5.1]
  def change
    drop_table :api_comments
  end
end
