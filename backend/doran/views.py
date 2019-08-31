from django.http import JsonResponse
from logging import Logger

import random

import cassiopeia as cass

cass.set_riot_api_key("RGAPI-c4f8e7d7-2981-464e-ad65-c1c5d2583cea")  # This overrides the value set in your configuration/settings.
cass.set_default_region("NA")

def char_count(request):
    text = request.GET.get("text", "")
    return JsonResponse({"count": len(text)})


def riot(request):
    summoner = cass.get_summoner(name=request.GET.get("summoner", ""))
    print("{name} is a level {level} summoner on the {region} server.".format(name=summoner.name,
                                                                          level=summoner.level,
                                                                          region=summoner.region))

    return JsonResponse({
        "name": summoner.name,
        "level": summoner.level,
        "region": str(summoner.region)
    })