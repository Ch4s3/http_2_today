defmodule Http2TodayWeb.PageController do
  use Http2TodayWeb, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
