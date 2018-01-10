class Api::CommentsController < ApplicationController
  def index
    @comments = Post.find(params[:post_id]).comments
  end

  def destroy
    @comment = Comment.find(params[:id])
    @comment.destroy!
  end
end
