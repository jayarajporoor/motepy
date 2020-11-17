EVENT_EXPIRY_MILLIS: const uint64_t = 4000
last_ts: uint64_t

def init() -> void:
    pass

@flow
def do() -> void:
    current_ts: uint64_t
    current_ts = millis()
    if (current_ts - last_ts) > EVENT_EXPIRY_MILLIS:
        Serial.println("Fall detected!")
    last_ts = current_ts
