class AddRecipientToUsers < ActiveRecord::Migration[5.1]
  def change
    # accidentally called AddRecipientToUsers, should be Posts not Users
    add_column :posts, :recipient_id, :integer
  end
end
