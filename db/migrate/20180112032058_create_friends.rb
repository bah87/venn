class CreateFriends < ActiveRecord::Migration[5.1]
  def change
    create_table :friends do |t|
      t.integer :requestor_id, null:false
      t.integer :receiver_id, null:false
      t.string :status, null: false, default:'PENDING'
      t.timestamps
    end
    add_index :friends, [:receiver_id, :requestor_id], unique: true
  end
end
