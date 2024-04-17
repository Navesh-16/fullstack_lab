from django.contrib import admin
from .models import voter,Contest,Count,poll
# Register your models here.
admin.site.register(voter)
admin.site.register(Contest)
admin.site.register(Count)
admin.site.register(poll)