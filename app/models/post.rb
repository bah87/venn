# == Schema Information
#
# Table name: posts
#
#  id         :integer          not null, primary key
#  body       :string           not null
#  author_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Post < ApplicationRecord
  validates :body, :author_id, presence: true

  belongs_to :user,
  foreign_key: :author_id
end
