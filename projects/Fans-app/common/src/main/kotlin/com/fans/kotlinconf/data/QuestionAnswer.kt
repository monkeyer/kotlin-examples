package com.fans.kotlinconf.data


import kotlinx.serialization.*

@Serializable
data class QuestionAnswer(
        val questionId: Int? = null,
        val answerValue: String? = null
)
