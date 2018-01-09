package com.fans.kotlinconf.data

import kotlinx.serialization.*

@Serializable
class Favorite(
        var sessionId: String? = null
)

