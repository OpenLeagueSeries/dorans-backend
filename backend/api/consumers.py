# chat/consumers.py
from channels.consumer import SyncConsumer
import json
import cassiopeia as cass

cass.set_riot_api_key("RGAPI-1802557a-bd2d-4fde-b95a-d2fd4949c5b9")  # This overrides the value set in your configuration/settings.
cass.set_default_region("NA")


class EchoConsumer(SyncConsumer):

    def websocket_connect(self, event):
        self.send({
            "type": "websocket.accept",
        })

    def websocket_receive(self, event):
        self.send({
            "type": "websocket.send",
            "text": str(event["text"]),
        })
        
    def websocket_disconnect(self, event):
        self.send({
            "type": "websocket.disconnect",
        })


class RiotConsumer(SyncConsumer):

    def websocket_connect(self, event):
        self.send({
            "type": "websocket.accept",
        })

    def websocket_receive(self, event):
        if event["text"]:
            try:
                summoner = cass.get_summoner(name=event["text"])
                print("{name} is a level {level} summoner.".format(name=summoner.name,level=summoner.level,))
                self.send({
                    "type": "websocket.send",
                    "text": str(summoner.level)
                })
            except Exception as e:
                print(e)
        else:
            self.send({
                "type": "websocket.send",
                "text": "0"
            })

    def websocket_disconnect(self, event):
        self.send({
            "type": "websocket.disconnect",
        })
