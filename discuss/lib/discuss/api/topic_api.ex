defmodule Discuss.TopicApi do
  alias Ecto
  alias Discuss.Repo
  alias Discuss.Topic


  def change_topic(struct, param \\ %{}) do
    Topic.changeset(struct, param)
  end


  def create_topic(conn, param \\ %{}) do

    conn.assigns.user
    |> Ecto.build_assoc(:topics)
    |> change_topic(param)
    |> Repo.insert()
  end

  def get_all_topic() do
    Repo.all(Topic)
  end

  def get_topic(topic_id) do
    Repo.get!(Topic, topic_id)
  end

  def update_topic(changeset) do
    Repo.update(changeset)
  end

  def delete_topic(changeset) do
    Repo.delete!(changeset)
  end

  def preload_comments(changeset) do
    Repo.preload(changeset, :comments)
  end
end
