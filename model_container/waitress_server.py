import serve as serve_flask
from waitress import serve

serve(serve_flask.app, host='0.0.0.0', port=serve_flask.port)