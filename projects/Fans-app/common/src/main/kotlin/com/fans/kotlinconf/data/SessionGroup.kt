package com.fans.kotlinconf.data


import kotlinx.serialization.*

@Serializable
data class SessionGroup(
        val groupName: String? = null,
        val sessions: List<Session?>? = null,
        val groupId: Int? = null
)
