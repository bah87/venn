class Api::CommentsController < ApplicationController
  def index
    @comments = Post.find(params[:post_id]).comments
  end

  def show
    @comment = Comment.find(params[:id])
  end

  def create
    @comment = Comment.new(comment_params)
    @comment.author_id = current_user.id

    if @comment.save!
      render :show
    else
      render json: @comment.errors.full_messages
    end
  end

  def update
    @comment = current_user.comments.find(params[:id])

    if @comment.update_attributes(comment_params)
      render :show
    else
      render json: @comment.errors.full_messages
    end
  end

  def destroy
    @comment = Comment.find(params[:id])
    @comment.destroy!
  end

  private
  def comment_params
    params.require(:comment).permit(
      :id,
      :body,
      :author_id,
      :post_id,
      :image
    )
  end
end
