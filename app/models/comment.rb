# == Schema Information
#
# Table name: comments
#
#  id                 :integer          not null, primary key
#  body               :string           not null
#  author_id          :integer          not null
#  post_id            :integer          not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#

class Comment < ApplicationRecord
  validates :body, :author_id, :post_id, presence: true

  has_attached_file :image, default_url: ""
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  belongs_to :author,
  class_name: 'User'

  belongs_to :post
end
