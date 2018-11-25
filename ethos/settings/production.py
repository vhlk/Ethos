from .base import *

DEBUG = False
ALLOWED_HOSTS = ['.herokuapp.com']
SECURE_SSL_REDIRECT = True
SECURE_PROXY_SSL_HEADER = ('HTTP_X_FORWARDED_PROTO', 'https') #aqui vai entrar o dominio?

# locals() significa todas as variáveis presentes nesse
# arquivo (incluindo as herdadas pela primeira linha).
# Esse comando vai receber todas essas variáveis e configurá-las
# de acordo com o Heroku.
django_heroku.settings(locals())