class Api::LikesController < ApplicationController
  before_action :require_logged_in

  def create
    like = Like.new(like_params)
    like.liker_id = current_user.id
    type = like.likeable_type
    like.save!
    if like_params[:likeable_type] == 'Post'
      @post = Post.find(like_params[:likeable_id])
      render :show
    elsif like_params[:likeable_type] == 'Comment'
      @comment = Comment.find(like_params[:likeable_id])
      render :show
    end
  end

  def destroy
    @like = Like.find(params[:id])
    @like.destroy
    render :destroy
  end

  private

  def like_params
    params.require(:like).permit(:likeable_id, :likeable_type)
  end
end
