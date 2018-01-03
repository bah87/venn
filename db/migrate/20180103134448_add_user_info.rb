class AddUserInfo < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :first_name, :string, null: false
    add_column :users, :last_name, :string, null: false
    add_column :users, :birthday, :date, null: false
    add_column :users, :gender, :string, null: false, inclusion: ["M", "F"]
  end
end
