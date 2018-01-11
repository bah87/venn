class Api::PostsController < ApplicationController
  before_action :require_logged_in

  def show_profile
    @posts = User.find(params[:user_id]).profile_items
    render :index
  end

  def show_feed
    @posts = Post.all.includes(:author, :comments) # temporary until "friends" feature implemented
    render :index
  end

  def show
    @post = Post.find(params[:id])#.includes(:comments)
  end

  def new
  end

  def create
    @post = Post.new(post_params)
    @post.author_id = current_user.id

    if @post.save!
      render :show
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  def delete_post_photo
    @post = Post.find(params[:post_id])
    @post.image = nil
    @post.save!
    render :show
  end

  def edit
    @post = current_user.posts.find(params[:id])
    render :show
  end

  def update
    @post = current_user.posts.find(params[:id])

    if @post.update_attributes(post_params)
      render :show
    else
      render json: @post.errors.full_messages
    end
  end

  def destroy
    @post = current_user.posts.find(params[:id])
    if @post
      @post.destroy
      render :show
    end
  end

  private

  def post_params
    params.require(:post).permit(
      :id,
      :body,
      :recipient_id,
      :image
    )
  end
end
