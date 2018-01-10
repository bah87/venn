# == Schema Information
#
# Table name: comments
#
#  id         :integer          not null, primary key
#  body       :string           not null
#  author_id  :integer          not null
#  post_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Comment < ApplicationRecord
  validates :body, :author_id, :post_id, presence: true

  belongs_to :author,
  class_name: 'User'

  belongs_to :post
end
