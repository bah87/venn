class Api::FriendsController < ApplicationController
  def request_friend
    @request = Friend.new(friend_params)
    @request.requestor_id = current_user.id
    @request.status = 'PENDING'
    if @request.save!
      render :show
    else
      render json: @request.errors.full_messages
    end
  end

  def accept_friend
    @request = current_user.friend_requests.find_by(requestor_id: params[:requestor_id])
    @request.status = 'ACCEPTED'
    if @request.save!
      render :show
    else
      render json: @request.errors.full_messages
    end
  end

  def reject_friend
    @request = current_user.friend_requests.find_by(requestor_id: params[:requestor_id])
    @request.destroy!
  end

  private
  def friend_params
    params.require(:friend).permit(:id, :receiver_id, :requestor_id)
  end
end
