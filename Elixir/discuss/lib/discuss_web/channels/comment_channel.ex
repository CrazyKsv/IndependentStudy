defmodule DiscussWeb.CommentsChannel do
  use DiscussWeb, :channel
  alias Discuss.{TopicApi, CommentApi}


  def join("comments:" <> topic_id, _params, socket) do
     topic = topic_id |> String.to_integer |> TopicApi.get_topic |> TopicApi.preload_comments()

     {:ok, %{comments: topic.comments}, assign(socket, :topic, topic)}
  end

  def handle_in(name, %{"content" => content}, socket) do
    topic = socket.assigns.topic

    changeset = CommentApi.create_change(topic, content)
    case CommentApi.create_comment(topic, content) do
      {:ok, comment} ->
        broadcast!(socket, "comments:#{socket.assigns.topic.id}:new", %{comment: comment})
        {:reply, :ok, socket}
      {:error, _reason} -> {:reply, {:error, %{error: changeset}}, socket}
    end
  end
end
