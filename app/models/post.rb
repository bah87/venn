# == Schema Information
#
# Table name: posts
#
#  id           :integer          not null, primary key
#  body         :string           not null
#  author_id    :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  recipient_id :integer
#

class Post < ApplicationRecord
  validates :body, :author_id, presence: true

  belongs_to :author,
  foreign_key: :author_id,
  class_name: 'User'
end
