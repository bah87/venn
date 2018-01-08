# == Schema Information
#
# Table name: users
#
#  id                 :integer          not null, primary key
#  email              :string           not null
#  session_token      :string           not null
#  password_digest    :string           not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  first_name         :string           not null
#  last_name          :string           not null
#  birthday           :date             not null
#  gender             :string           not null
#  profile_pic_url    :string
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#

class User < ApplicationRecord
  attr_reader :password

  validates :email, :session_token, :password_digest,
    :first_name, :last_name, :birthday, :gender, presence: true
  validates :gender, inclusion: { in: ["M", "F"] }
  validates :email, :session_token, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }

  has_attached_file :image, default_url: "missing.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  after_initialize :ensure_session_token

  has_many :posts,
  foreign_key: :author_id

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil unless user
    user.is_password?(password) ? user : nil
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  private

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end
end
