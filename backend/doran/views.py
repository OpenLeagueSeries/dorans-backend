from django.http import JsonResponse
from logging import Logger

def char_count(request):
    text = request.GET.get("text", "")
    return JsonResponse({"count": len(text)})
