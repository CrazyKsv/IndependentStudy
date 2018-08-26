defmodule Discuss.UserApi do

  alias Discuss.Repo
  alias Discuss.User

  def add_user(params) do
    User.changeset(%User{}, params)
    |> insert_or_update_user()
  end

  defp insert_or_update_user(changeset) do
    case Repo.get_by(User, email: changeset.changes.email) do
      nil ->
        Repo.insert(changeset)
      user -> {:ok, user}
    end
  end

end
