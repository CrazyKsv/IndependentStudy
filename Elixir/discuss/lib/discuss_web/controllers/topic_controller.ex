defmodule DiscussWeb.TopicController do
  use DiscussWeb, :controller

  alias Discuss.TopicApi
  alias Discuss.Topic
  import Plug.Conn
  # import Phoenix.Controller

  alias DiscussWeb.Router.Helpers

  plug DiscussWeb.Plugs.RequireAuth when action in [:new, :create, :edit, :delete, :update]
  plug :check_topic_owner when action in [:update, :edit, :delete]
  def index(conn, _params) do

    topics = TopicApi.get_all_topic()
    render conn, "index.html", topics: topics

  end

  def new(conn, _) do
    changeset = TopicApi.change_topic(%Topic{}, %{})
    render conn, "new.html", changeset: changeset

  end

  def create(conn, %{"topic" => topic}) do

    case TopicApi.create_topic(conn, topic) do
      {:ok, _topic} ->
        conn
        |> put_flash(:info, "Topic created")
        |> redirect(to: topic_path(conn, :index))

      {:error, changeset} ->
        render conn, "new.html", changeset: changeset

    end
  end

  def edit(conn, %{"id" => topic_id}) do
    topic = TopicApi.get_topic(topic_id)
    changeset = TopicApi.change_topic(topic)
    render conn, "edit.html", changeset: changeset, topic: topic

  end

  def update(conn, %{ "id" => topic_id, "topic" => topic}) do
    old = TopicApi.get_topic(topic_id)
    changeset = TopicApi.change_topic(old, topic)
    case TopicApi.update_topic(changeset) do
      {:ok, _topic} ->
        conn
        |> put_flash(:info, "Topic updated")
        |> redirect(to: topic_path(conn, :index))
      {:error, changeset} ->
        render conn, "edit.html", changeset: changeset, topic: old
    end
  end

  def delete(conn, %{ "id" => topic_id}) do
    TopicApi.get_topic(topic_id) |> TopicApi.delete_topic()

    conn
    |> put_flash(:info, "Topic deleted")
    |> redirect(to: topic_path(conn, :index))

  end

  def show(conn, %{ "id" => topic_id}) do
    topic = TopicApi.get_topic(topic_id)
    render conn, "show.html", topic: topic

  end


  def check_topic_owner(conn, _params) do
    %{params: %{"id" => topic_id}} = conn

    if TopicApi.get_topic(topic_id).user_id == conn.assigns.user.id do
      conn
    else
      conn
      |> put_flash(:error, "Permission denied.")
      |> redirect(to: Helpers.topic_path(conn, :index))
      |> halt()
    end
  end

end
