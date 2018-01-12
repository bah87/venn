class Friend < ApplicationRecord
  validates :receiver_id, :requestor_id, presence: true
  validates :status, presence: true, inclusion: { in: ['PENDING', 'ACCEPTED'] }

  belongs_to :requestor,
  foreign_key: :requestor_id,
  class_name: 'User'

  belongs_to :receiver,
  foreign_key: :receiver_id,
  class_name: 'User'
end
