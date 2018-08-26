defmodule Discuss.CommentApi do
  alias Discuss.Repo
  alias Discuss.Comment
  import Ecto

  def create_change(topic, content) do
    topic
    |> build_assoc(:comments)
    |> Comment.changeset(%{content: content})
  end

  def create_comment(topic, content) do
    changeset = create_change(topic, content)
    Repo.insert(changeset)
  end
end
