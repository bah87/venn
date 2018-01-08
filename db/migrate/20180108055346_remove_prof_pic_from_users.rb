class RemoveProfPicFromUsers < ActiveRecord::Migration[5.1]
  def change
    remove_column :users, :profile_pic_url
  end
end
