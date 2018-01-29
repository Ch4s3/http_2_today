defmodule Http2TodayWeb.LayoutView do
  use Http2TodayWeb, :view
  def js_script_tag do
    if Mix.env == :prod do
      # In production we'll just reference the file
      """
        <script src="<%= static_path(@conn, "/js/vendor.js") %>"></script>
        <script src="<%= static_path(@conn, "/js/app.js") %>"></script>
      """
    else
      # In development mode we'll load it from our webpack dev server
      """
        <script src="https://localhost:8080/vendor.js"></script>
        <script src="https://localhost:8080/app.js"></script>
      """
    end
  end

  # Ditto for the css
  def css_link_tag do
    if Mix.env == :prod do
      "<link rel=\"stylesheet\" href=\"<%= static_path(@conn, \"/css/app.css\") %>" 
    else
      "<link rel=\"stylesheet\" type=\"text/css\" href=\"https://localhost:8080/css/app.css\" />"
    end
  end
end
