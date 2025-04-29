$LOAD_PATH.unshift(File.expand_path("lib"))

require 'sinatra/base'
require 'json'
require 'rest-client'
require 'dotenv'

require './service_now_client'

# Load environment variables
Dotenv.load if File.exist?('.env')

class ProxyApp < Sinatra::Base
  # API Configuration (Replace with your actual API details)
  API_URL = ENV['API_URL'] || 'https://external-api.com/endpoint'
  API_KEY = ENV['API_KEY'] || 'your-secret-api-key'

  get "/*" do
    client = ServiceNowClient.new(
      {
        server: 'https://dev277697.service-now.com',
        user: 'ood',
        pass: '',
      })

    payload = {
      caller_id:         'ood',
      watch_list:        'test@example.com',
      short_description: 'This is the proxy',
      description:       'This is the proxy',
    }
    response = client.create(payload, [])
    content_type :json
    response.to_h.to_json
  end


  post '/support' do
    begin
      # Read client request
      client_body = request.body.read
      client_headers = JSON.parse(request.env['HTTP_CLIENT_HEADERS'] || '{}')

      # Forward request to external API
      response = RestClient.post(API_URL, client_body, {
        content_type: :json,
        accept: :json,
        authorization: "Bearer #{API_KEY}"
      }.merge(client_headers))

      # Return response to client
      status response.code
      response.body
    rescue RestClient::ExceptionWithResponse => e
      status e.http_code
      e.response.body
    rescue => e
      status 500
      { error: e.message }.to_json
    end
  end
end
