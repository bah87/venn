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

  def update_user_photo
    @user = current_user
    if user_params[:cover_photo]
      @user.cover_photo = user_params[:cover_photo]
    elsif user_params[:image]
      @user.image = user_params[:image]
    end

    if @user.save!
      render :show
    else
      render json: @user.errors.messages
    end
  end

  def search
    if params[:query].present?
      @users = User.search_by_full_name(params[:query].downcase)
    else
      @users = User.none
    end
    render :friends
  end

  def get_friends
    @users = User.all
    render :friends
  end

  def show
    @user = User.find(params[:id])
  end

  private

  def user_params
    params.require(:user).permit(
      :id,
      :email,
      :password,
      :first_name,
      :last_name,
      :gender,
      :birthday,
      :cover_photo,
      :image
    )
  end
end
