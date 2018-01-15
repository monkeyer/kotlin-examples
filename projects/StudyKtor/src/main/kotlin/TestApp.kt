import io.ktor.application.*
import io.ktor.features.*
import io.ktor.http.*
import io.ktor.response.*
import io.ktor.routing.*
import io.ktor.server.engine.*
import io.ktor.server.netty.*
import io.ktor.sessions.*
import java.util.*

fun Application.module() {
    install(DefaultHeaders) {
        header("LE-Developer", "FanZheyuan")
        header(HttpHeaders.Server, "Le-ads")
    }
    install(CallLogging)
    install(Sessions) {
//        cookie<MySession>("SESSION")
    }
    install(HSTS)
    install(Routing) {
        get("/") {
//            val mySession = call.sessions.get<MySession>()
            var html = "<li><a href = 'hello'>hello</a></li>"
            html += "<li><a href = 'now'>now</a></li>"

            call.respondText(html, ContentType.Text.Html)
        }

        get("/hello") {
            call.respondText("Hi, app!", ContentType.Text.Html)
        }

        get("/now") {
            call.respondText("Now time is : ${Date()}", ContentType.Text.Html)
        }

    }
}

fun main(args: Array<String>) {
    embeddedServer(Netty, 8080, watchPaths = listOf("TestAppKt"), module = Application::module).start()
}