import sys
import os

# Add the project root directory to the Python path
sys.path.insert(0, os.path.dirname(__file__))

# Set environment variable for Django settings module
os.environ['DJANGO_SETTINGS_MODULE'] = 'simple_math.settings'

from django.core.wsgi import get_wsgi_application
application = get_wsgi_application()
