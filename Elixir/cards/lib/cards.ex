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
end
