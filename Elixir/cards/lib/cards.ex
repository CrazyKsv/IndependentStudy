defmodule Cards do
  @moduledoc """
  Documentation for Cards.
  """

  @doc """
  Hello world.

  ## Examples

      iex> Cards.hello
      :world

  """
  def hello do
    :world
  end

  def create_cards do
    suits = ["Spades", "Clubs", "Hearts", "Diamonds"]
    values = ["one", "two", "three"]

    for suit<-suits, value<-values do
      "#{suit} of #{value}"
    end
  end

  def shuffle(deck) do
    Enum.shuffle(deck)
  end

  def contains?(deck, value) do
    Enum.member?(deck, value)
  end

  def deal(deck, size) do
    Enum.split(deck, size)
  end

  def save(deck, filename) do
    File.write(filename, :erlang.term_to_binary(deck))
  end

  def load(filename) do
    case File.read(filename) do
      {:ok, binary} ->  :erlang.binary_to_term(binary)
      {:error, _reason} -> "Can't read the file"
    end
  end
end
