class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def update
    @user = User.new(user_params)

    if @user.update_attributes(user_params)
      render :show
    else
      render json: @user.errors.full_messages
    end
  end

  def get_friends
    # @users = current_user.friends # once friends feature is implemented
    @users = User.all
    render :friends
  end

  def show
    @user = User.find(params[:id])
  end

  private

  def user_params
    params.require(:user).permit(
      :email,
      :password,
      :first_name,
      :last_name,
      :gender,
      :birthday,
      :cover_photo
    )
  end
end
