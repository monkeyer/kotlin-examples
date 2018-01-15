import io.ktor.application.*
import io.ktor.features.CallLogging
import io.ktor.http.*
import io.ktor.response.*
import io.ktor.routing.*
import io.ktor.server.engine.*
import io.ktor.server.netty.*

/*
fun getGreeting(): String {
    val words = mutableListOf<String>()
    words.add("Hello,")
    words.add("world!")

    return words.joinToString(separator = " ")
}
*/

fun main(args: Array<String>) {
    val server = embeddedServer(Netty, 8080) {
        routing {
            get("/blog") {
                call.respondText("Hello, Ktor!", ContentType.Text.Html)
            }
        }
        routing {
            get("/index") {
                call.respondText("hi, index!", ContentType.Text.Html)
            }
        }
    }

    server.start(wait = true)
}
