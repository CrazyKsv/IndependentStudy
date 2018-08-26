defmodule Discuss.CommentApi do
  alias Discuss.Repo
  alias Discuss.Comment
  import Ecto

  def create_change(topic, content, user_id) do
    topic
    |> build_assoc(:comments, user_id: user_id)
    |> Comment.changeset(%{content: content})
  end

  def create_comment(topic, content, user_id) do
    changeset = create_change(topic, content, user_id)
    Repo.insert(changeset)
  end
end
